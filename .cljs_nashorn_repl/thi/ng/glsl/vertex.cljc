(ns thi.ng.glsl.vertex
  (:require
   [thi.ng.glsl.core :as glsl :include-macros true]))

(glsl/defglsl mvp
  nil "
vec4 mvp(vec3 pos, mat4 model, mat4 view, mat4 proj) {
  return proj * view * model * vec4(pos, 1.0);
}")

(glsl/defglsl surface-normal
  nil "
vec3 surfaceNormal(vec3 normal, mat4 normalMat) {
  return normalize((normalMat * vec4(normal, 0.0)).xyz);
}")

(glsl/defglsl rotate-x
  nil "
vec3 rotateX(vec3 p, float theta) {
  float s = sin(theta);
  float c = cos(theta);
  return vec3(p.x, p.y * c - p.z * s, p.z * c + p.y * s);
}")

(glsl/defglsl rotate-y
  nil "
vec3 rotateY(vec3 p, float theta) {
  float s = sin(theta);
  float c = cos(theta);
  return vec3(p.x * c + p.z * s, p.y, p.z * c - p.x * s);
}")

(glsl/defglsl rotate-z
  nil "
vec3 rotateZ(vec3 p, float theta) {
  float s = sin(theta);
  float c = cos(theta);
  return vec3(p.x * c - p.y * s, p.y * c + p.x * s, p.z);
}")
