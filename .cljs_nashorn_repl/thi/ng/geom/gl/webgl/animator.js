// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.gl.webgl.animator');
goog.require('cljs.core');
thi.ng.geom.gl.webgl.animator.animframe_provider = (function (){var or__20022__auto__ = self.requestAnimationFrame;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
var or__20022__auto____$1 = self.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__20022__auto____$1)){
return or__20022__auto____$1;
} else {
var or__20022__auto____$2 = self.mozRequestAnimationFrame;
if(cljs.core.truth_(or__20022__auto____$2)){
return or__20022__auto____$2;
} else {
var or__20022__auto____$3 = self.msRequestAnimationFrame;
if(cljs.core.truth_(or__20022__auto____$3)){
return or__20022__auto____$3;
} else {
return self.oRequestAnimationFrame;
}
}
}
}
})();
thi.ng.geom.gl.webgl.animator.now = (function thi$ng$geom$gl$webgl$animator$now(){
var or__20022__auto__ = performance.now();
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
var or__20022__auto____$1 = performance.webkitNow();
if(cljs.core.truth_(or__20022__auto____$1)){
return or__20022__auto____$1;
} else {
var or__20022__auto____$2 = performance.mozNow();
if(cljs.core.truth_(or__20022__auto____$2)){
return or__20022__auto____$2;
} else {
var or__20022__auto____$3 = performance.msNow();
if(cljs.core.truth_(or__20022__auto____$3)){
return or__20022__auto____$3;
} else {
return performance.oNow();
}
}
}
}
});
thi.ng.geom.gl.webgl.animator.animate = (function thi$ng$geom$gl$webgl$animator$animate(var_args){
var args27017 = [];
var len__21238__auto___27020 = arguments.length;
var i__21239__auto___27021 = (0);
while(true){
if((i__21239__auto___27021 < len__21238__auto___27020)){
args27017.push((arguments[i__21239__auto___27021]));

var G__27022 = (i__21239__auto___27021 + (1));
i__21239__auto___27021 = G__27022;
continue;
} else {
}
break;
}

var G__27019 = args27017.length;
switch (G__27019) {
case 1:
return thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27017.length)].join('')));

}
});

thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$1 = (function (f){
return thi.ng.geom.gl.webgl.animator.animate.call(null,f,null);
});

thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$2 = (function (f,element){
var t0 = (new Date()).getTime();
var fid = cljs.core.volatile_BANG_.call(null,(0));
var f_SINGLEQUOTE_ = ((function (t0,fid){
return (function thi$ng$geom$gl$webgl$animator$animate_STAR_(){
if(cljs.core.truth_(f.call(null,(((new Date()).getTime() - t0) * 0.001),cljs.core._vreset_BANG_.call(null,fid,(cljs.core._deref.call(null,fid) + (1)))))){
if(cljs.core.truth_(element)){
return thi.ng.geom.gl.webgl.animator.animframe_provider.call(null,thi$ng$geom$gl$webgl$animator$animate_STAR_,element);
} else {
return thi.ng.geom.gl.webgl.animator.animframe_provider.call(null,thi$ng$geom$gl$webgl$animator$animate_STAR_);
}
} else {
return null;
}
});})(t0,fid))
;
return f_SINGLEQUOTE_.call(null);
});

thi.ng.geom.gl.webgl.animator.animate.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=animator.js.map