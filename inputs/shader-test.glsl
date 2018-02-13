//Adapted from:  https://www.shadertoy.com/view/Xl33Wn
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float length2(vec2 p){
    return dot(p,p);
}
float noise(vec2 p )
{
    return fract(sin(fract(sin(p.x)*(41.13311))+ p.y)*31.0011);
}

float worley(vec2 p) {
 float d = 1e30;
 for (int xo = -1; xo <= 1; ++xo) {
  for (int yo = -1; yo <= 1; ++yo) {
   vec2 tp = floor(p) + vec2(xo, yo);
   d = min(d, length2(p - tp - noise(tp)));
  }
 }
  return 3.0*exp(-4.0*abs((2.5*d)-1.0));
}

float fworley(vec2 p)
{
    return sqrt(sqrt(sqrt(worley(p * 5.0 + 0.15 * iTime) * 
                          sqrt(worley(p*50.0+ 0.18+ -0.1*iTime)) *
                         sqrt(sqrt(worley(p*-10.0+0.3*iTime))))));
}



//hyperbolic disc/radial distortion adapted from https://www.shadertoy.com/view/XllSWf
void HyperbolicDisc(inout vec2 fragCoord) {
    fragCoord -= iResolution.xy * 0.5;
    fragCoord /= iResolution.x;
    float r = length(fragCoord);
    vec2 d = fragCoord / r *.8 ;
    fragCoord = d / atanh(r * (2.5 )) / 2.0;
    fragCoord *= iResolution.x;
    fragCoord += iResolution.xy *0.5;
    fragCoord *= 0.4;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    HyperbolicDisc(fragCoord);
 vec2 uv = fragCoord.xy / iResolution.xy;
    float wolo = fworley(uv*iResolution.xy / 1500.0);
 	wolo *= exp(-length2(abs(0.7*uv-1.0)));
    fragColor = vec4(wolo * vec3(1.0, 0.1*wolo, pow(wolo, 0.90-wolo)), 1.0);
    vec3 hsv = rgb2hsv(fragColor.xyz);
    hsv.z *= hsv.z * 20.8;
    fragColor.xyz = hsv2rgb(hsv);
    
}