// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.glsl.lighting');
goog.require('cljs.core');
goog.require('thi.ng.glsl.core');
thi.ng.glsl.lighting.lambert = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float lambert(vec3 surfaceNormal,vec3 lightDirection){return clamp(dot(surfaceNormal,lightDirection),.0,1.);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.lambert;},new cljs.core.Symbol("thi.ng.glsl.lighting","lambert","thi.ng.glsl.lighting/lambert",-2140294569,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"lambert","lambert",-756016969,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",22,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.lambert)?thi.ng.glsl.lighting.lambert.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"lambert",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 surfaceNormal","vec3 lightDirection"], null)], null));
thi.ng.glsl.lighting.lambert_abs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float lambertAbs(vec3 surfaceNormal,vec3 lightDirection){return clamp(abs(dot(surfaceNormal,lightDirection)),.0,1.);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.lambert_abs;},new cljs.core.Symbol("thi.ng.glsl.lighting","lambert-abs","thi.ng.glsl.lighting/lambert-abs",443757621,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"lambert-abs","lambert-abs",1811522261,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",26,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.lambert_abs)?thi.ng.glsl.lighting.lambert_abs.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"lambertAbs",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 surfaceNormal","vec3 lightDirection"], null)], null));
thi.ng.glsl.lighting.phong = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float phong(vec3 lightDir,vec3 eyeDir,vec3 surfaceNormal){return dot(reflect(-lightDir,surfaceNormal),eyeDir);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.phong;},new cljs.core.Symbol("thi.ng.glsl.lighting","phong","thi.ng.glsl.lighting/phong",-118143145,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"phong","phong",726543799,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.phong)?thi.ng.glsl.lighting.phong.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"phong",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 lightDir","vec3 eyeDir","vec3 surfaceNormal"], null)], null));
thi.ng.glsl.lighting.blinn_phong = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float blinnPhong(vec3 lightDir,vec3 eyeDir,vec3 surfaceNormal){return dot(normalize(lightDir+eyeDir),surfaceNormal);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.blinn_phong;},new cljs.core.Symbol("thi.ng.glsl.lighting","blinn-phong","thi.ng.glsl.lighting/blinn-phong",-545545147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"blinn-phong","blinn-phong",-1929639387,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",26,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.blinn_phong)?thi.ng.glsl.lighting.blinn_phong.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"blinnPhong",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 lightDir","vec3 eyeDir","vec3 surfaceNormal"], null)], null));
thi.ng.glsl.lighting.schlick = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float schlick(float r0,float smooth,vec3 normal,vec3 view){float d=clamp(1.-dot(normal,-view),.0,1.);float d2=d*d;return mix(r0,1.,smooth*d2*d2*d);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.schlick;},new cljs.core.Symbol("thi.ng.glsl.lighting","schlick","thi.ng.glsl.lighting/schlick",1714519685,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"schlick","schlick",885702821,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",22,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.schlick)?thi.ng.glsl.lighting.schlick.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"schlick",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["float r0","float smooth","vec3 normal","vec3 view"], null)], null));
thi.ng.glsl.lighting.schlick_r0 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float schlickR0(float ior1,float ior2){float r=(ior1-ior2)/(ior1+ior2);return r*r;}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.schlick_r0;},new cljs.core.Symbol("thi.ng.glsl.lighting","schlick-r0","thi.ng.glsl.lighting/schlick-r0",824128800,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"schlick-r0","schlick-r0",-1064001792,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",25,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.schlick_r0)?thi.ng.glsl.lighting.schlick_r0.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"schlickR0",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["float ior1","float ior2"], null)], null));
thi.ng.glsl.lighting.beckmann_distribution = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float beckmannDistribution(float x,float roughness){float NdotH=max(x,1e-4);float cos2Alpha=NdotH*NdotH;float tan2Alpha=(cos2Alpha-1.)/cos2Alpha;float roughness2=roughness*roughness;float denom=PI*roughness2*cos2Alpha*cos2Alpha;return exp(tan2Alpha/roughness2)/denom;}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.beckmann_distribution;},new cljs.core.Symbol("thi.ng.glsl.lighting","beckmann-distribution","thi.ng.glsl.lighting/beckmann-distribution",-1631653155,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"beckmann-distribution","beckmann-distribution",-1060955907,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",36,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.beckmann_distribution)?thi.ng.glsl.lighting.beckmann_distribution.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"beckmannDistribution",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["float x","float roughness"], null)], null));
thi.ng.glsl.lighting.beckmann_specular = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float beckmannSpecular(vec3 lightDirection,vec3 viewDirection,vec3 surfaceNormal,float roughness){return beckmannDistribution(dot(surfaceNormal,normalize(lightDirection+viewDirection)),roughness);}",new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.glsl.lighting.beckmann_distribution], null)], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.beckmann_specular;},new cljs.core.Symbol("thi.ng.glsl.lighting","beckmann-specular","thi.ng.glsl.lighting/beckmann-specular",730973767,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"beckmann-specular","beckmann-specular",-647319449,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",32,1,55,55,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.beckmann_specular)?thi.ng.glsl.lighting.beckmann_specular.cljs$lang$test:null)])),cljs.core.merge,null);
thi.ng.glsl.lighting.gaussian_specular = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float gaussianSpecular(vec3 lightDirection,vec3 viewDirection,vec3 surfaceNormal,float shininess){vec3 H=normalize(lightDirection+viewDirection);float theta=acos(dot(H,surfaceNormal));float w=theta/shininess;return exp(-w*w);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.gaussian_specular;},new cljs.core.Symbol("thi.ng.glsl.lighting","gaussian-specular","thi.ng.glsl.lighting/gaussian-specular",1858006154,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"gaussian-specular","gaussian-specular",-2143616342,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",32,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.gaussian_specular)?thi.ng.glsl.lighting.gaussian_specular.cljs$lang$test:null)])),cljs.core.merge,null);
thi.ng.glsl.lighting.cook_torrance = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float cookTorrance(vec3 lightDirection,vec3 viewDirection,vec3 surfaceNormal,float roughness,float fresnel){float VdotN=max(dot(viewDirection,surfaceNormal),.0);float LdotN=max(dot(lightDirection,surfaceNormal),.0);vec3 H=normalize(lightDirection+viewDirection);float NdotH=max(dot(surfaceNormal,H),.0);float VdotH=max(dot(viewDirection,H),1e-6);float LdotH=max(dot(lightDirection,H),1e-6);float G1=(2.*NdotH*VdotN)/VdotH;float G2=(2.*NdotH*LdotN)/LdotH;float G=min(1.,min(G1,G2));float D=beckmannDistribution(NdotH,roughness);float F=pow(1.-VdotN,fresnel);return G*F*D/max(PI*VdotN,1e-6);}",new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.glsl.lighting.beckmann_distribution], null)], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.cook_torrance;},new cljs.core.Symbol("thi.ng.glsl.lighting","cook-torrance","thi.ng.glsl.lighting/cook-torrance",1432393922,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"cook-torrance","cook-torrance",-419565854,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",28,1,76,76,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.cook_torrance)?thi.ng.glsl.lighting.cook_torrance.cljs$lang$test:null)])),cljs.core.merge,null);
thi.ng.glsl.lighting.oren_nayar = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float orenNayar(vec3 lightDirection,vec3 viewDirection,vec3 surfaceNormal,float roughness,float albedo){float LdotV=dot(lightDirection,viewDirection);float NdotL=dot(lightDirection,surfaceNormal);float NdotV=dot(surfaceNormal,viewDirection);float s=LdotV-NdotL*NdotV;float t=mix(1.,max(NdotL,NdotV),step(.0,s));float sigma2=roughness*roughness;float A=1.+sigma2*(albedo/(sigma2+.13)+.5/(sigma2+.33));float B=.45*sigma2/(sigma2+.09);return albedo*max(.0,NdotL)*(A+B*s/t)/PI;}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.oren_nayar;},new cljs.core.Symbol("thi.ng.glsl.lighting","oren-nayar","thi.ng.glsl.lighting/oren-nayar",2027519022,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"oren-nayar","oren-nayar",-1756904754,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",25,1,108,108,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.oren_nayar)?thi.ng.glsl.lighting.oren_nayar.cljs$lang$test:null)])),cljs.core.merge,null);
thi.ng.glsl.lighting.ward = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float ward(vec3 lightDirection,vec3 viewDirection,vec3 surfaceNormal,vec3 fiberParallel,vec3 fiberPerpendicular,float shinyParallel,float shinyPerpendicular){float NdotL=dot(surfaceNormal,lightDirection);float NdotR=dot(surfaceNormal,viewDirection);if(NdotL<.0||NdotR<.0){return .0;}vec3 H=normalize(lightDirection+viewDirection);float NdotH=dot(surfaceNormal,H);float XdotH=dot(fiberParallel,H);float YdotH=dot(fiberPerpendicular,H);float coeff=sqrt(NdotL/NdotR)/(2.*TWO_PI*shinyParallel*shinyPerpendicular);float theta=(pow(XdotH/shinyParallel,2.)+pow(YdotH/shinyPerpendicular,2.))/(1.+NdotH);return coeff*exp(-2.*theta);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.ward;},new cljs.core.Symbol("thi.ng.glsl.lighting","ward","thi.ng.glsl.lighting/ward",241356108,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"ward","ward",-571975828,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",19,1,130,130,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.ward)?thi.ng.glsl.lighting.ward.cljs$lang$test:null)])),cljs.core.merge,null);
thi.ng.glsl.lighting.skylight = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float skylight(float height){return smoothstep(.0,PI,PI-acos(height));}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.skylight;},new cljs.core.Symbol("thi.ng.glsl.lighting","skylight","thi.ng.glsl.lighting/skylight",-515298735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"skylight","skylight",-1091403663,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",23,1,159,159,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.skylight)?thi.ng.glsl.lighting.skylight.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"skylight",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["float height"], null)], null));
thi.ng.glsl.lighting.skylight_color = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"vec3 skylightColor(vec3 col1,vec3 col2,float height){return mix(col1,col2,skylight(height));}",new cljs.core.Keyword(null,"deps","deps",1883360319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.glsl.lighting.skylight], null)], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.skylight_color;},new cljs.core.Symbol("thi.ng.glsl.lighting","skylight-color","thi.ng.glsl.lighting/skylight-color",1237312317,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"skylight-color","skylight-color",-130774691,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",29,1,165,165,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.skylight_color)?thi.ng.glsl.lighting.skylight_color.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"vec3",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"skylightColor",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 col1","vec3 col2","float height"], null)], null));
thi.ng.glsl.lighting.spotlight_attenuation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float spotlightAttenuation(vec3 dir,float amp){float dist=length(dir);float radiance=1./(1.+pow(dist/amp,2.));return clamp(radiance*amp,.0,1.);}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.spotlight_attenuation;},new cljs.core.Symbol("thi.ng.glsl.lighting","spotlight-attenuation","thi.ng.glsl.lighting/spotlight-attenuation",-1585884224,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"spotlight-attenuation","spotlight-attenuation",283633120,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",36,1,171,171,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.spotlight_attenuation)?thi.ng.glsl.lighting.spotlight_attenuation.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"spotlightAttenuation",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 dir","float amp"], null)], null));
thi.ng.glsl.lighting.spotlight_influence = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"float spotlightInfluence(vec3 normal,float coneAngle,float fallOffAngle){float minConeAngle=(360.-coneAngle-fallOffAngle)*RAD;float maxConeAngle=(360.-coneAngle)*RAD;return smoothstep(minConeAngle,maxConeAngle,acos(normal.z));}",new cljs.core.Keyword(null,"deps","deps",1883360319),null], null);

cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return thi.ng.glsl.lighting.spotlight_influence;},new cljs.core.Symbol("thi.ng.glsl.lighting","spotlight-influence","thi.ng.glsl.lighting/spotlight-influence",-1491475991,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"thi.ng.glsl.lighting","thi.ng.glsl.lighting",1608106512,null),new cljs.core.Symbol(null,"spotlight-influence","spotlight-influence",1994805193,null),".cljs_node_repl/thi/ng/glsl/lighting.cljc",34,1,179,179,cljs.core.List.EMPTY,null,(cljs.core.truth_(thi.ng.glsl.lighting.spotlight_influence)?thi.ng.glsl.lighting.spotlight_influence.cljs$lang$test:null)])),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),"float",new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),"spotlightInfluence",new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vec3 normal","float coneAngle","float fallOffAngle"], null)], null));

//# sourceMappingURL=lighting.js.map