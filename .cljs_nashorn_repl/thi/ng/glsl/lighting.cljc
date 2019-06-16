(ns thi.ng.glsl.lighting
  (:require
   [thi.ng.glsl.core :as glsl :include-macros true]))

(glsl/defglsl lambert
  nil "
float lambert(vec3 surfaceNormal, vec3 lightDirection) {
  return clamp(dot(surfaceNormal, lightDirection), 0.0, 1.0);
}")

(glsl/defglsl lambert-abs
  nil "
float lambertAbs(vec3 surfaceNormal, vec3 lightDirection) {
  return clamp(abs(dot(surfaceNormal, lightDirection)), 0.0, 1.0);
}")

(glsl/defglsl phong
  nil "
float phong(vec3 lightDir, vec3 eyeDir, vec3 surfaceNormal) {
  return dot(reflect(-lightDir, surfaceNormal), eyeDir);
}")

(glsl/defglsl blinn-phong
  nil "
float blinnPhong(vec3 lightDir, vec3 eyeDir, vec3 surfaceNormal) {
  return dot(normalize(lightDir + eyeDir), surfaceNormal);
}")

(glsl/defglsl schlick
  nil "
float schlick(float r0, float smooth, vec3 normal, vec3 view) {
  float d = clamp(1.0 - dot(normal, -view), 0.0, 1.0);
  float d2 = d * d;
  return mix(r0, 1.0, smooth * d2 * d2 * d);
}")

(glsl/defglsl schlick-r0
  nil "
float schlickR0(float ior1, float ior2) {
  float r = (ior1 - ior2) / (ior1 + ior2);
  return r * r;
}")

(glsl/defglsl beckmann-distribution
  nil "
float beckmannDistribution(float x, float roughness) {
  float NdotH = max(x, 1e-4);
  float cos2Alpha = NdotH * NdotH;
  float tan2Alpha = (cos2Alpha - 1.0) / cos2Alpha;
  float roughness2 = roughness * roughness;
  float denom = PI * roughness2 * cos2Alpha * cos2Alpha;
  return exp(tan2Alpha / roughness2) / denom;
}")

(glsl/defglsl beckmann-specular
  [beckmann-distribution] "
float beckmannSpecular(vec3 lightDirection,
                       vec3 viewDirection,
                       vec3 surfaceNormal,
                       float roughness) {
  return beckmannDistribution(dot(surfaceNormal, normalize(lightDirection + viewDirection)), roughness);
}")

(glsl/defglsl gaussian-specular
  nil "
float gaussianSpecular(vec3 lightDirection,
                       vec3 viewDirection,
                       vec3 surfaceNormal,
                       float shininess) {
  vec3 H = normalize(lightDirection + viewDirection);
  float theta = acos(dot(H, surfaceNormal));
  float w = theta / shininess;
  return exp(-w * w);
}")

(glsl/defglsl cook-torrance
  [beckmann-distribution] "
float cookTorrance(vec3 lightDirection,
                   vec3 viewDirection,
                   vec3 surfaceNormal,
                   float roughness,
                   float fresnel) {

  float VdotN = max(dot(viewDirection, surfaceNormal), 0.0);
  float LdotN = max(dot(lightDirection, surfaceNormal), 0.0);

  //Half angle vector
  vec3 H = normalize(lightDirection + viewDirection);

  //Geometric term
  float NdotH = max(dot(surfaceNormal, H), 0.0);
  float VdotH = max(dot(viewDirection, H), 1e-6);
  float LdotH = max(dot(lightDirection, H), 1e-6);
  float G1 = (2.0 * NdotH * VdotN) / VdotH;
  float G2 = (2.0 * NdotH * LdotN) / LdotH;
  float G = min(1.0, min(G1, G2));

  //Distribution term
  float D = beckmannDistribution(NdotH, roughness);

  //Fresnel term
  float F = pow(1.0 - VdotN, fresnel);

  //Multiply terms and done
  return G * F * D / max(PI * VdotN, 1e-6);
}")

(glsl/defglsl oren-nayar
  nil "
float orenNayar(vec3 lightDirection,
                vec3 viewDirection,
                vec3 surfaceNormal,
                float roughness,
                float albedo) {

  float LdotV = dot(lightDirection, viewDirection);
  float NdotL = dot(lightDirection, surfaceNormal);
  float NdotV = dot(surfaceNormal, viewDirection);

  float s = LdotV - NdotL * NdotV;
  float t = mix(1.0, max(NdotL, NdotV), step(0.0, s));

  float sigma2 = roughness * roughness;
  float A = 1.0 + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));
  float B = 0.45 * sigma2 / (sigma2 + 0.09);

  return albedo * max(0.0, NdotL) * (A + B * s / t) / PI;
}")

(glsl/defglsl ward
  nil "
float ward(vec3 lightDirection,
           vec3 viewDirection,
           vec3 surfaceNormal,
           vec3 fiberParallel,
           vec3 fiberPerpendicular,
           float shinyParallel,
           float shinyPerpendicular) {

  float NdotL = dot(surfaceNormal, lightDirection);
  float NdotR = dot(surfaceNormal, viewDirection);

  if(NdotL < 0.0 || NdotR < 0.0) {
    return 0.0;
  }

  vec3 H = normalize(lightDirection + viewDirection);

  float NdotH = dot(surfaceNormal, H);
  float XdotH = dot(fiberParallel, H);
  float YdotH = dot(fiberPerpendicular, H);

  float coeff = sqrt(NdotL/NdotR) / (2.0 * TWO_PI * shinyParallel * shinyPerpendicular);
  float theta = (pow(XdotH/shinyParallel, 2.0) + pow(YdotH/shinyPerpendicular, 2.0)) / (1.0 + NdotH);

  return coeff * exp(-2.0 * theta);
}")

(glsl/defglsl skylight
  nil "
float skylight(float height){
  return smoothstep(0.0, PI, PI - acos(height));
}")

(glsl/defglsl skylight-color
  [skylight] "
vec3 skylightColor(vec3 col1, vec3 col2, float height) {
  return mix(col1, col2, skylight(height));
}")

(glsl/defglsl spotlight-attenuation
  nil "
float spotlightAttenuation(vec3 dir, float amp){
  float dist = length(dir);
  float radiance = 1.0 / (1.0 + pow(dist / amp, 2.0));
  return clamp(radiance * amp, 0.0, 1.0);
}")

(glsl/defglsl spotlight-influence
  nil "
float spotlightInfluence(vec3 normal, float coneAngle, float fallOffAngle){
  float minConeAngle = (360.0 - coneAngle - fallOffAngle) * RAD;
  float maxConeAngle = (360.0 - coneAngle) * RAD;
  return smoothstep(minConeAngle, maxConeAngle, acos(normal.z));
}")
