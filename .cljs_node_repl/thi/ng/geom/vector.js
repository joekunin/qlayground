// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {thi.ng.geom.core.INormal}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28056_28405 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28057_28406 = v.buf;
(self__.buf[(0)] = ((G__28056_28405[(0)]) - (G__28057_28406[(0)])));

(self__.buf[(1)] = ((G__28056_28405[(1)]) - (G__28057_28406[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28056_28405[(0)]) - v));

(self__.buf[(1)] = ((G__28056_28405[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28056_28405[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28056_28405[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28065_28407 = typeof v1 === 'number';
var G__28066_28408 = typeof v2 === 'number';
if(((G__28065_28407)?G__28066_28408:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__28067_28409 = ((!(G__28065_28407))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28068_28410 = ((!(G__28066_28408))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28059_28411 = (cljs.core.truth_(G__28067_28409)?v1.buf:null);
var G__28060_28412 = (cljs.core.truth_(G__28068_28410)?v2.buf:null);
var G__28061_28413 = (cljs.core.truth_(G__28067_28409)?(G__28059_28411[(0)]):((G__28065_28407)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28062_28414 = (cljs.core.truth_(G__28067_28409)?(G__28059_28411[(1)]):((G__28065_28407)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28063_28415 = (cljs.core.truth_(G__28068_28410)?(G__28060_28412[(0)]):((G__28066_28408)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28064_28416 = (cljs.core.truth_(G__28068_28410)?(G__28060_28412[(1)]):((G__28066_28408)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__28061_28413) - G__28063_28415));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__28062_28414) - G__28064_28416));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28069_28417 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28070_28418 = v.buf;
(self__.buf[(0)] = ((G__28069_28417[(0)]) * (G__28070_28418[(0)])));

(self__.buf[(1)] = ((G__28069_28417[(1)]) * (G__28070_28418[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28069_28417[(0)]) * v));

(self__.buf[(1)] = ((G__28069_28417[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28069_28417[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28069_28417[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28078_28419 = typeof v1 === 'number';
var G__28079_28420 = typeof v2 === 'number';
if(((G__28078_28419)?G__28079_28420:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__28080_28421 = ((!(G__28078_28419))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28081_28422 = ((!(G__28079_28420))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28072_28423 = (cljs.core.truth_(G__28080_28421)?v1.buf:null);
var G__28073_28424 = (cljs.core.truth_(G__28081_28422)?v2.buf:null);
var G__28074_28425 = (cljs.core.truth_(G__28080_28421)?(G__28072_28423[(0)]):((G__28078_28419)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28075_28426 = (cljs.core.truth_(G__28080_28421)?(G__28072_28423[(1)]):((G__28078_28419)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28076_28427 = (cljs.core.truth_(G__28081_28422)?(G__28073_28424[(0)]):((G__28079_28420)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28077_28428 = (cljs.core.truth_(G__28081_28422)?(G__28073_28424[(1)]):((G__28079_28420)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__28074_28425) * G__28076_28427));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__28075_28426) * G__28077_28428));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28091_28429 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28092_28430 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28093_28431 = ((!(G__28091_28429))?typeof a === 'number':null);
var G__28094_28432 = ((!(G__28092_28430))?typeof b === 'number':null);
var G__28082_28433 = self__.buf;
var G__28083_28434 = ((G__28091_28429)?a.buf:null);
var G__28084_28435 = ((G__28092_28430)?b.buf:null);
var G__28085_28436 = (G__28082_28433[(0)]);
var G__28086_28437 = (G__28082_28433[(1)]);
var G__28087_28438 = ((G__28091_28429)?(G__28083_28434[(0)]):(cljs.core.truth_(G__28093_28431)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28088_28439 = ((G__28091_28429)?(G__28083_28434[(1)]):(cljs.core.truth_(G__28093_28431)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28089_28440 = ((G__28092_28430)?(G__28084_28435[(0)]):(cljs.core.truth_(G__28094_28432)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28090_28441 = ((G__28092_28430)?(G__28084_28435[(1)]):(cljs.core.truth_(G__28094_28432)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__28085_28436 - G__28087_28438) * G__28089_28440));

(self__.buf[(1)] = ((G__28086_28437 - G__28088_28439) * G__28090_28441));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28104_28442 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28105_28443 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28106_28444 = ((!(G__28104_28442))?typeof a === 'number':null);
var G__28107_28445 = ((!(G__28105_28443))?typeof b === 'number':null);
var G__28095_28446 = self__.buf;
var G__28096_28447 = ((G__28104_28442)?a.buf:null);
var G__28097_28448 = ((G__28105_28443)?b.buf:null);
var G__28098_28449 = (G__28095_28446[(0)]);
var G__28099_28450 = (G__28095_28446[(1)]);
var G__28100_28451 = ((G__28104_28442)?(G__28096_28447[(0)]):(cljs.core.truth_(G__28106_28444)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28101_28452 = ((G__28104_28442)?(G__28096_28447[(1)]):(cljs.core.truth_(G__28106_28444)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28102_28453 = ((G__28105_28443)?(G__28097_28448[(0)]):(cljs.core.truth_(G__28107_28445)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28103_28454 = ((G__28105_28443)?(G__28097_28448[(1)]):(cljs.core.truth_(G__28107_28445)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__28098_28449 * G__28100_28451) - G__28102_28453));

(self__.buf[(1)] = ((G__28099_28450 * G__28101_28452) - G__28103_28454));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28117_28455 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28118_28456 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28119_28457 = ((!(G__28117_28455))?typeof a === 'number':null);
var G__28120_28458 = ((!(G__28118_28456))?typeof b === 'number':null);
var G__28108_28459 = self__.buf;
var G__28109_28460 = ((G__28117_28455)?a.buf:null);
var G__28110_28461 = ((G__28118_28456)?b.buf:null);
var G__28111_28462 = (G__28108_28459[(0)]);
var G__28112_28463 = (G__28108_28459[(1)]);
var G__28113_28464 = ((G__28117_28455)?(G__28109_28460[(0)]):(cljs.core.truth_(G__28119_28457)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28114_28465 = ((G__28117_28455)?(G__28109_28460[(1)]):(cljs.core.truth_(G__28119_28457)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28115_28466 = ((G__28118_28456)?(G__28110_28461[(0)]):(cljs.core.truth_(G__28120_28458)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28116_28467 = ((G__28118_28456)?(G__28110_28461[(1)]):(cljs.core.truth_(G__28120_28458)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__28111_28462 * G__28113_28464) + G__28115_28466));

(self__.buf[(1)] = ((G__28112_28463 * G__28114_28465) + G__28116_28467));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28121_28468 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28122_28469 = v.buf;
(self__.buf[(0)] = ((G__28121_28468[(0)]) / (G__28122_28469[(0)])));

(self__.buf[(1)] = ((G__28121_28468[(1)]) / (G__28122_28469[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28121_28468[(0)]) / v));

(self__.buf[(1)] = ((G__28121_28468[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28121_28468[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28121_28468[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28130_28470 = typeof v1 === 'number';
var G__28131_28471 = typeof v2 === 'number';
if(((G__28130_28470)?G__28131_28471:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__28132_28472 = ((!(G__28130_28470))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28133_28473 = ((!(G__28131_28471))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28124_28474 = (cljs.core.truth_(G__28132_28472)?v1.buf:null);
var G__28125_28475 = (cljs.core.truth_(G__28133_28473)?v2.buf:null);
var G__28126_28476 = (cljs.core.truth_(G__28132_28472)?(G__28124_28474[(0)]):((G__28130_28470)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28127_28477 = (cljs.core.truth_(G__28132_28472)?(G__28124_28474[(1)]):((G__28130_28470)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28128_28478 = (cljs.core.truth_(G__28133_28473)?(G__28125_28475[(0)]):((G__28131_28471)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28129_28479 = (cljs.core.truth_(G__28133_28473)?(G__28125_28475[(1)]):((G__28131_28471)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__28126_28476) / G__28128_28478));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__28127_28477) / G__28129_28479));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28134_28480 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28135_28481 = v.buf;
(self__.buf[(0)] = ((G__28134_28480[(0)]) + (G__28135_28481[(0)])));

(self__.buf[(1)] = ((G__28134_28480[(1)]) + (G__28135_28481[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28134_28480[(0)]) + v));

(self__.buf[(1)] = ((G__28134_28480[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28134_28480[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28134_28480[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28143_28482 = typeof v1 === 'number';
var G__28144_28483 = typeof v2 === 'number';
if(((G__28143_28482)?G__28144_28483:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__28145_28484 = ((!(G__28143_28482))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28146_28485 = ((!(G__28144_28483))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28137_28486 = (cljs.core.truth_(G__28145_28484)?v1.buf:null);
var G__28138_28487 = (cljs.core.truth_(G__28146_28485)?v2.buf:null);
var G__28139_28488 = (cljs.core.truth_(G__28145_28484)?(G__28137_28486[(0)]):((G__28143_28482)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28140_28489 = (cljs.core.truth_(G__28145_28484)?(G__28137_28486[(1)]):((G__28143_28482)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28141_28490 = (cljs.core.truth_(G__28146_28485)?(G__28138_28487[(0)]):((G__28144_28483)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28142_28491 = (cljs.core.truth_(G__28146_28485)?(G__28138_28487[(1)]):((G__28144_28483)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__28139_28488) + G__28141_28490));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__28140_28489) + G__28142_28491));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28156_28492 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28157_28493 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28158_28494 = ((!(G__28156_28492))?typeof a === 'number':null);
var G__28159_28495 = ((!(G__28157_28493))?typeof b === 'number':null);
var G__28147_28496 = self__.buf;
var G__28148_28497 = ((G__28156_28492)?a.buf:null);
var G__28149_28498 = ((G__28157_28493)?b.buf:null);
var G__28150_28499 = (G__28147_28496[(0)]);
var G__28151_28500 = (G__28147_28496[(1)]);
var G__28152_28501 = ((G__28156_28492)?(G__28148_28497[(0)]):(cljs.core.truth_(G__28158_28494)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28153_28502 = ((G__28156_28492)?(G__28148_28497[(1)]):(cljs.core.truth_(G__28158_28494)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28154_28503 = ((G__28157_28493)?(G__28149_28498[(0)]):(cljs.core.truth_(G__28159_28495)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28155_28504 = ((G__28157_28493)?(G__28149_28498[(1)]):(cljs.core.truth_(G__28159_28495)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__28150_28499 + G__28152_28501) * G__28154_28503));

(self__.buf[(1)] = ((G__28151_28500 + G__28153_28502) * G__28155_28504));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28160 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28161 = v.buf;
return (((G__28160[(0)]) * (G__28161[(1)])) - ((G__28160[(1)]) * (G__28161[(0)])));
} else {
return (((G__28160[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__28160[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec2 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28175 = self__.buf;
var G__28177 = (G__28175[(0)]);
var G__28178 = (G__28175[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28176 = v.buf;
var G__28179 = (G__28176[(0)]);
var G__28180 = (G__28176[(1)]);
var d = (((G__28177 * G__28179) + (G__28178 * G__28180)) * 2.0);
(b[(0)] = ((G__28179 * d) - G__28177));

(b[(1)] = ((G__28180 * d) - G__28178));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__28179 = cljs.core.nth.call(null,v,(0),0.0);
var G__28180 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__28177 * G__28179) + (G__28178 * G__28180)) * 2.0);
(b[(0)] = ((G__28179 * d) - G__28177));

(b[(1)] = ((G__28180 * d) - G__28178));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28181 = self__.buf;
var G__28183 = (G__28181[(0)]);
var G__28184 = (G__28181[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28182 = v.buf;
var G__28185 = (G__28182[(0)]);
var G__28186 = (G__28182[(1)]);
var dx = (G__28183 - G__28185);
var dy = (G__28184 - G__28186);
return ((dx * dx) + (dy * dy));
} else {
var G__28185 = cljs.core.nth.call(null,v,(0),0.0);
var G__28186 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__28183 - G__28185);
var dy = (G__28184 - G__28186);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__28187 = self__.buf;
var G__28188 = (G__28187[(0)]);
var G__28189 = (G__28187[(1)]);
(b[(0)] = ((G__28188 * c) - (G__28189 * s)));

(b[(1)] = ((G__28188 * s) + (G__28189 * c)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28190_28505 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28191_28506 = v.buf;
(dest__23937__auto__[(0)] = ((G__28190_28505[(0)]) * (G__28191_28506[(0)])));

(dest__23937__auto__[(1)] = ((G__28190_28505[(1)]) * (G__28191_28506[(1)])));
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = ((G__28190_28505[(0)]) * v));

(dest__23937__auto__[(1)] = ((G__28190_28505[(1)]) * v));
} else {
(dest__23937__auto__[(0)] = ((G__28190_28505[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__23937__auto__[(1)] = ((G__28190_28505[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__19807__auto__ = self__._hash;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__28192 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28193 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28192[(0)]),(G__28193[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28192[(1)]),(G__28193[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28192[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28192[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28194 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28195 = v.buf;
return (((G__28194[(0)]) * (G__28195[(0)])) + ((G__28194[(1)]) * (G__28195[(1)])));
} else {
return (((G__28194[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__28194[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28196_28507 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28197_28508 = v.buf;
(dest__23937__auto__[(0)] = ((G__28196_28507[(0)]) + (G__28197_28508[(0)])));

(dest__23937__auto__[(1)] = ((G__28196_28507[(1)]) + (G__28197_28508[(1)])));
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = ((G__28196_28507[(0)]) + v));

(dest__23937__auto__[(1)] = ((G__28196_28507[(1)]) + v));
} else {
(dest__23937__auto__[(0)] = ((G__28196_28507[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__23937__auto__[(1)] = ((G__28196_28507[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28198_28509 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28199_28510 = v.buf;
(b[(0)] = (((G__28198_28509[(0)]) + (G__28199_28510[(0)])) * 0.5));

(b[(1)] = (((G__28198_28509[(1)]) + (G__28199_28510[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__28198_28509[(0)]) + v) * 0.5));

(b[(1)] = (((G__28198_28509[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__28198_28509[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__28198_28509[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28209_28511 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28210_28512 = (t instanceof thi.ng.geom.vector.Vec2);
var G__28211_28513 = ((!(G__28209_28511))?typeof v === 'number':null);
var G__28212_28514 = ((!(G__28210_28512))?typeof t === 'number':null);
var G__28200_28515 = self__.buf;
var G__28201_28516 = ((G__28209_28511)?v.buf:null);
var G__28202_28517 = ((G__28210_28512)?t.buf:null);
var G__28203_28518 = (G__28200_28515[(0)]);
var G__28204_28519 = (G__28200_28515[(1)]);
var G__28205_28520 = ((G__28209_28511)?(G__28201_28516[(0)]):(cljs.core.truth_(G__28211_28513)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28206_28521 = ((G__28209_28511)?(G__28201_28516[(1)]):(cljs.core.truth_(G__28211_28513)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28207_28522 = ((G__28210_28512)?(G__28202_28517[(0)]):(cljs.core.truth_(G__28212_28514)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__28208_28523 = ((G__28210_28512)?(G__28202_28517[(1)]):(cljs.core.truth_(G__28212_28514)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = (((G__28205_28520 - G__28203_28518) * G__28207_28522) + G__28203_28518));

(b[(1)] = (((G__28206_28521 - G__28204_28519) * G__28208_28523) + G__28204_28519));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__28222_28524 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28223_28525 = (c instanceof thi.ng.geom.vector.Vec2);
var G__28224_28526 = ((!(G__28222_28524))?typeof b === 'number':null);
var G__28225_28527 = ((!(G__28223_28525))?typeof c === 'number':null);
var G__28213_28528 = self__.buf;
var G__28214_28529 = ((G__28222_28524)?b.buf:null);
var G__28215_28530 = ((G__28223_28525)?c.buf:null);
var G__28216_28531 = (G__28213_28528[(0)]);
var G__28217_28532 = (G__28213_28528[(1)]);
var G__28218_28533 = ((G__28222_28524)?(G__28214_28529[(0)]):(cljs.core.truth_(G__28224_28526)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28219_28534 = ((G__28222_28524)?(G__28214_28529[(1)]):(cljs.core.truth_(G__28224_28526)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28220_28535 = ((G__28223_28525)?(G__28215_28530[(0)]):(cljs.core.truth_(G__28225_28527)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__28221_28536 = ((G__28223_28525)?(G__28215_28530[(1)]):(cljs.core.truth_(G__28225_28527)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_28537 = (((G__28218_28533 - G__28216_28531) * u) + G__28216_28531);
var y1_28538 = (((G__28219_28534 - G__28217_28532) * u) + G__28217_28532);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__28220_28535) * u) + G__28220_28535) - x1_28537) * v) + x1_28537));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__28221_28536) * u) + G__28221_28536) - y1_28538) * v) + y1_28538));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28235_28539 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28236_28540 = (t instanceof thi.ng.geom.vector.Vec2);
var G__28237_28541 = ((!(G__28235_28539))?typeof v === 'number':null);
var G__28238_28542 = ((!(G__28236_28540))?typeof t === 'number':null);
var G__28226_28543 = self__.buf;
var G__28227_28544 = ((G__28235_28539)?v.buf:null);
var G__28228_28545 = ((G__28236_28540)?t.buf:null);
var G__28229_28546 = (G__28226_28543[(0)]);
var G__28230_28547 = (G__28226_28543[(1)]);
var G__28231_28548 = ((G__28235_28539)?(G__28227_28544[(0)]):(cljs.core.truth_(G__28237_28541)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28232_28549 = ((G__28235_28539)?(G__28227_28544[(1)]):(cljs.core.truth_(G__28237_28541)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28233_28550 = ((G__28236_28540)?(G__28228_28545[(0)]):(cljs.core.truth_(G__28238_28542)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__28234_28551 = ((G__28236_28540)?(G__28228_28545[(1)]):(cljs.core.truth_(G__28238_28542)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = f.call(null,G__28229_28546,G__28231_28548,G__28233_28550));

(b[(1)] = f.call(null,G__28230_28547,G__28232_28549,G__28234_28551));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28239_28552 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__28240_28553 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__28240_28553[(0)]),(G__28239_28552[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__28240_28553[(1)]),(G__28239_28552[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__28239_28552[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__28239_28552[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__28239_28552[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__28239_28552[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28250_28554 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__28251_28555 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__28252_28556 = ((!(G__28250_28554))?typeof e1 === 'number':null);
var G__28253_28557 = ((!(G__28251_28555))?typeof e2 === 'number':null);
var G__28241_28558 = self__.buf;
var G__28242_28559 = ((G__28250_28554)?e1.buf:null);
var G__28243_28560 = ((G__28251_28555)?e2.buf:null);
var G__28244_28561 = (G__28241_28558[(0)]);
var G__28245_28562 = (G__28241_28558[(1)]);
var G__28246_28563 = ((G__28250_28554)?(G__28242_28559[(0)]):(cljs.core.truth_(G__28252_28556)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__28247_28564 = ((G__28250_28554)?(G__28242_28559[(1)]):(cljs.core.truth_(G__28252_28556)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__28248_28565 = ((G__28251_28555)?(G__28243_28560[(0)]):(cljs.core.truth_(G__28253_28557)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__28249_28566 = ((G__28251_28555)?(G__28243_28560[(1)]):(cljs.core.truth_(G__28253_28557)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__28246_28563,G__28248_28565,G__28244_28561));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__28246_28563,G__28249_28566,G__28245_28562));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28254_28567 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28255_28568 = v.buf;
(dest__23937__auto__[(0)] = (function (){var a__23510__auto__ = (G__28254_28567[(0)]);
var b__23511__auto__ = (G__28255_28568[(0)]);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__23937__auto__[(1)] = (function (){var a__23510__auto__ = (G__28254_28567[(1)]);
var b__23511__auto__ = (G__28255_28568[(1)]);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = (function (){var a__23510__auto__ = (G__28254_28567[(0)]);
var b__23511__auto__ = v;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__23937__auto__[(1)] = (function (){var a__23510__auto__ = (G__28254_28567[(1)]);
var b__23511__auto__ = v;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());
} else {
(dest__23937__auto__[(0)] = (function (){var a__23510__auto__ = (G__28254_28567[(0)]);
var b__23511__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__23937__auto__[(1)] = (function (){var a__23510__auto__ = (G__28254_28567[(1)]);
var b__23511__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__23948__auto__ = (new Float32Array((2)));
var G__28265_28569 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28266_28570 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__28267_28571 = ((!(G__28265_28569))?typeof v === 'number':null);
var G__28268_28572 = ((!(G__28266_28570))?typeof v2 === 'number':null);
var G__28256_28573 = self__.buf;
var G__28257_28574 = ((G__28265_28569)?v.buf:null);
var G__28258_28575 = ((G__28266_28570)?v2.buf:null);
var G__28259_28576 = (G__28256_28573[(0)]);
var G__28260_28577 = (G__28256_28573[(1)]);
var G__28261_28578 = ((G__28265_28569)?(G__28257_28574[(0)]):(cljs.core.truth_(G__28267_28571)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28262_28579 = ((G__28265_28569)?(G__28257_28574[(1)]):(cljs.core.truth_(G__28267_28571)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28263_28580 = ((G__28266_28570)?(G__28258_28575[(0)]):(cljs.core.truth_(G__28268_28572)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28264_28581 = ((G__28266_28570)?(G__28258_28575[(1)]):(cljs.core.truth_(G__28268_28572)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__23948__auto__[(0)] = (function (){var a__23510__auto__ = (function (){var a__23510__auto__ = G__28259_28576;
var b__23511__auto__ = G__28261_28578;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})();
var b__23511__auto__ = G__28263_28580;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__23948__auto__[(1)] = (function (){var a__23510__auto__ = (function (){var a__23510__auto__ = G__28260_28577;
var b__23511__auto__ = G__28262_28579;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})();
var b__23511__auto__ = G__28264_28581;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__23948__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28269_28582 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28270_28583 = v.buf;
(dest__23937__auto__[(0)] = (function (){var a__23517__auto__ = (G__28269_28582[(0)]);
var b__23518__auto__ = (G__28270_28583[(0)]);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__23937__auto__[(1)] = (function (){var a__23517__auto__ = (G__28269_28582[(1)]);
var b__23518__auto__ = (G__28270_28583[(1)]);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = (function (){var a__23517__auto__ = (G__28269_28582[(0)]);
var b__23518__auto__ = v;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__23937__auto__[(1)] = (function (){var a__23517__auto__ = (G__28269_28582[(1)]);
var b__23518__auto__ = v;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());
} else {
(dest__23937__auto__[(0)] = (function (){var a__23517__auto__ = (G__28269_28582[(0)]);
var b__23518__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__23937__auto__[(1)] = (function (){var a__23517__auto__ = (G__28269_28582[(1)]);
var b__23518__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__23948__auto__ = (new Float32Array((2)));
var G__28280_28584 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28281_28585 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__28282_28586 = ((!(G__28280_28584))?typeof v === 'number':null);
var G__28283_28587 = ((!(G__28281_28585))?typeof v2 === 'number':null);
var G__28271_28588 = self__.buf;
var G__28272_28589 = ((G__28280_28584)?v.buf:null);
var G__28273_28590 = ((G__28281_28585)?v2.buf:null);
var G__28274_28591 = (G__28271_28588[(0)]);
var G__28275_28592 = (G__28271_28588[(1)]);
var G__28276_28593 = ((G__28280_28584)?(G__28272_28589[(0)]):(cljs.core.truth_(G__28282_28586)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28277_28594 = ((G__28280_28584)?(G__28272_28589[(1)]):(cljs.core.truth_(G__28282_28586)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28278_28595 = ((G__28281_28585)?(G__28273_28590[(0)]):(cljs.core.truth_(G__28283_28587)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28279_28596 = ((G__28281_28585)?(G__28273_28590[(1)]):(cljs.core.truth_(G__28283_28587)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__23948__auto__[(0)] = (function (){var a__23517__auto__ = (function (){var a__23517__auto__ = G__28274_28591;
var b__23518__auto__ = G__28276_28593;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})();
var b__23518__auto__ = G__28278_28595;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__23948__auto__[(1)] = (function (){var a__23517__auto__ = (function (){var a__23517__auto__ = G__28275_28592;
var b__23518__auto__ = G__28277_28594;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})();
var b__23518__auto__ = G__28279_28596;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__23948__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.call = (function() {
var G__28597 = null;
var G__28597__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__28597__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__28597 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__28597__2.call(this,self__,k);
case 3:
return G__28597__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28597.cljs$core$IFn$_invoke$arity$2 = G__28597__2;
G__28597.cljs$core$IFn$_invoke$arity$3 = G__28597__3;
return G__28597;
})()
;

thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args28055){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28055)));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.math.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__28284 = self__.buf;
var G__28285 = (G__28284[(0)]);
var G__28286 = (G__28284[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__28285 * Math.cos(G__28286)));

(b[(1)] = (G__28285 * Math.sin(G__28286)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__28287 = self__.buf;
var G__28288 = (G__28287[(0)]);
var G__28289 = (G__28287[(1)]);
var l = Math.sqrt(((G__28288 * G__28288) + (G__28289 * G__28289)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__28288 / l));

(b[(1)] = (G__28289 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__28290 = self__.buf;
var G__28291 = (G__28290[(0)]);
var G__28292 = (G__28290[(1)]);
var l = Math.sqrt(((G__28291 * G__28291) + (G__28292 * G__28292)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__28291 * l__$1));

(b[(1)] = (G__28292 * l__$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__28293 = self__.buf;
var G__28294 = (G__28293[(0)]);
var G__28295 = (G__28293[(1)]);
return Math.sqrt(((G__28294 * G__28294) + (G__28295 * G__28295)));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__28296 = self__.buf;
var G__28297 = (G__28296[(0)]);
var G__28298 = (G__28296[(1)]);
return ((G__28297 * G__28297) + (G__28298 * G__28298));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23948__auto__ = (new Float32Array((2)));
var G__28308_28598 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28309_28599 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28310_28600 = ((!(G__28308_28598))?typeof a === 'number':null);
var G__28311_28601 = ((!(G__28309_28599))?typeof b === 'number':null);
var G__28299_28602 = self__.buf;
var G__28300_28603 = ((G__28308_28598)?a.buf:null);
var G__28301_28604 = ((G__28309_28599)?b.buf:null);
var G__28302_28605 = (G__28299_28602[(0)]);
var G__28303_28606 = (G__28299_28602[(1)]);
var G__28304_28607 = ((G__28308_28598)?(G__28300_28603[(0)]):(cljs.core.truth_(G__28310_28600)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28305_28608 = ((G__28308_28598)?(G__28300_28603[(1)]):(cljs.core.truth_(G__28310_28600)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28306_28609 = ((G__28309_28599)?(G__28301_28604[(0)]):(cljs.core.truth_(G__28311_28601)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28307_28610 = ((G__28309_28599)?(G__28301_28604[(1)]):(cljs.core.truth_(G__28311_28601)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__23948__auto__[(0)] = ((G__28302_28605 * G__28304_28607) - G__28306_28609));

(dest__23948__auto__[(1)] = ((G__28303_28606 * G__28305_28608) - G__28307_28610));

return (new thi.ng.geom.vector.Vec2(dest__23948__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28312_28611 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28313_28612 = v.buf;
(dest__23937__auto__[(0)] = ((G__28312_28611[(0)]) * (G__28313_28612[(0)])));

(dest__23937__auto__[(1)] = ((G__28312_28611[(1)]) * (G__28313_28612[(1)])));
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = ((G__28312_28611[(0)]) * v));

(dest__23937__auto__[(1)] = ((G__28312_28611[(1)]) * v));
} else {
(dest__23937__auto__[(0)] = ((G__28312_28611[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__23937__auto__[(1)] = ((G__28312_28611[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28314 = self__.buf;
var G__28317 = (new Float32Array((2)));
var G__28318 = (G__28314[(0)]);
var G__28319 = (G__28314[(1)]);
var G__28324 = typeof v1 === 'number';
var G__28325 = typeof v2 === 'number';
if(((G__28324)?G__28325:false)){
(G__28317[(0)] = (G__28318 * v1));

(G__28317[(1)] = (G__28319 * v2));
} else {
var G__28326_28613 = ((!(G__28324))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28327_28614 = ((!(G__28325))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28315_28615 = (cljs.core.truth_(G__28326_28613)?v1.buf:null);
var G__28316_28616 = (cljs.core.truth_(G__28327_28614)?v2.buf:null);
var G__28320_28617 = (cljs.core.truth_(G__28326_28613)?(G__28315_28615[(0)]):((G__28324)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__28321_28618 = (cljs.core.truth_(G__28326_28613)?(G__28315_28615[(1)]):((G__28324)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__28322_28619 = (cljs.core.truth_(G__28327_28614)?(G__28316_28616[(0)]):((G__28325)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__28323_28620 = (cljs.core.truth_(G__28327_28614)?(G__28316_28616[(1)]):((G__28325)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__28317[(0)] = ((G__28318 * G__28320_28617) * G__28322_28619));

(G__28317[(1)] = ((G__28319 * G__28321_28618) * G__28323_28620));
}

return (new thi.ng.geom.vector.Vec2(G__28317,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23907__auto__ = (new Float32Array((2)));
var G__28328_28621 = self__.buf;
(dest__23907__auto__[(0)] = (- (G__28328_28621[(0)])));

(dest__23907__auto__[(1)] = (- (G__28328_28621[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__23907__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28329_28622 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28330_28623 = v.buf;
(dest__23937__auto__[(0)] = ((G__28329_28622[(0)]) - (G__28330_28623[(0)])));

(dest__23937__auto__[(1)] = ((G__28329_28622[(1)]) - (G__28330_28623[(1)])));
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = ((G__28329_28622[(0)]) - v));

(dest__23937__auto__[(1)] = ((G__28329_28622[(1)]) - v));
} else {
(dest__23937__auto__[(0)] = ((G__28329_28622[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__23937__auto__[(1)] = ((G__28329_28622[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28331 = self__.buf;
var G__28334 = (new Float32Array((2)));
var G__28335 = (G__28331[(0)]);
var G__28336 = (G__28331[(1)]);
var G__28341 = typeof v1 === 'number';
var G__28342 = typeof v2 === 'number';
if(((G__28341)?G__28342:false)){
(G__28334[(0)] = (G__28335 - v1));

(G__28334[(1)] = (G__28336 - v2));
} else {
var G__28343_28624 = ((!(G__28341))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28344_28625 = ((!(G__28342))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28332_28626 = (cljs.core.truth_(G__28343_28624)?v1.buf:null);
var G__28333_28627 = (cljs.core.truth_(G__28344_28625)?v2.buf:null);
var G__28337_28628 = (cljs.core.truth_(G__28343_28624)?(G__28332_28626[(0)]):((G__28341)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28338_28629 = (cljs.core.truth_(G__28343_28624)?(G__28332_28626[(1)]):((G__28341)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28339_28630 = (cljs.core.truth_(G__28344_28625)?(G__28333_28627[(0)]):((G__28342)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28340_28631 = (cljs.core.truth_(G__28344_28625)?(G__28333_28627[(1)]):((G__28342)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__28334[(0)] = ((G__28335 - G__28337_28628) - G__28339_28630));

(G__28334[(1)] = ((G__28336 - G__28338_28629) - G__28340_28631));
}

return (new thi.ng.geom.vector.Vec2(G__28334,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23948__auto__ = (new Float32Array((2)));
var G__28354_28632 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28355_28633 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28356_28634 = ((!(G__28354_28632))?typeof a === 'number':null);
var G__28357_28635 = ((!(G__28355_28633))?typeof b === 'number':null);
var G__28345_28636 = self__.buf;
var G__28346_28637 = ((G__28354_28632)?a.buf:null);
var G__28347_28638 = ((G__28355_28633)?b.buf:null);
var G__28348_28639 = (G__28345_28636[(0)]);
var G__28349_28640 = (G__28345_28636[(1)]);
var G__28350_28641 = ((G__28354_28632)?(G__28346_28637[(0)]):(cljs.core.truth_(G__28356_28634)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28351_28642 = ((G__28354_28632)?(G__28346_28637[(1)]):(cljs.core.truth_(G__28356_28634)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28352_28643 = ((G__28355_28633)?(G__28347_28638[(0)]):(cljs.core.truth_(G__28357_28635)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28353_28644 = ((G__28355_28633)?(G__28347_28638[(1)]):(cljs.core.truth_(G__28357_28635)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__23948__auto__[(0)] = ((G__28348_28639 * G__28350_28641) + G__28352_28643));

(dest__23948__auto__[(1)] = ((G__28349_28640 * G__28351_28642) + G__28353_28644));

return (new thi.ng.geom.vector.Vec2(dest__23948__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23948__auto__ = (new Float32Array((2)));
var G__28367_28645 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28368_28646 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28369_28647 = ((!(G__28367_28645))?typeof a === 'number':null);
var G__28370_28648 = ((!(G__28368_28646))?typeof b === 'number':null);
var G__28358_28649 = self__.buf;
var G__28359_28650 = ((G__28367_28645)?a.buf:null);
var G__28360_28651 = ((G__28368_28646)?b.buf:null);
var G__28361_28652 = (G__28358_28649[(0)]);
var G__28362_28653 = (G__28358_28649[(1)]);
var G__28363_28654 = ((G__28367_28645)?(G__28359_28650[(0)]):(cljs.core.truth_(G__28369_28647)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28364_28655 = ((G__28367_28645)?(G__28359_28650[(1)]):(cljs.core.truth_(G__28369_28647)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28365_28656 = ((G__28368_28646)?(G__28360_28651[(0)]):(cljs.core.truth_(G__28370_28648)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28366_28657 = ((G__28368_28646)?(G__28360_28651[(1)]):(cljs.core.truth_(G__28370_28648)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__23948__auto__[(0)] = ((G__28361_28652 + G__28363_28654) * G__28365_28656));

(dest__23948__auto__[(1)] = ((G__28362_28653 + G__28364_28655) * G__28366_28657));

return (new thi.ng.geom.vector.Vec2(dest__23948__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23907__auto__ = (new Float32Array((2)));
var G__28371_28658 = self__.buf;
(dest__23907__auto__[(0)] = ((1) / (G__28371_28658[(0)])));

(dest__23907__auto__[(1)] = ((1) / (G__28371_28658[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__23907__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28372_28659 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28373_28660 = v.buf;
(dest__23937__auto__[(0)] = ((G__28372_28659[(0)]) / (G__28373_28660[(0)])));

(dest__23937__auto__[(1)] = ((G__28372_28659[(1)]) / (G__28373_28660[(1)])));
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = ((G__28372_28659[(0)]) / v));

(dest__23937__auto__[(1)] = ((G__28372_28659[(1)]) / v));
} else {
(dest__23937__auto__[(0)] = ((G__28372_28659[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__23937__auto__[(1)] = ((G__28372_28659[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28374 = self__.buf;
var G__28377 = (new Float32Array((2)));
var G__28378 = (G__28374[(0)]);
var G__28379 = (G__28374[(1)]);
var G__28384 = typeof v1 === 'number';
var G__28385 = typeof v2 === 'number';
if(((G__28384)?G__28385:false)){
(G__28377[(0)] = (G__28378 / v1));

(G__28377[(1)] = (G__28379 / v2));
} else {
var G__28386_28661 = ((!(G__28384))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28387_28662 = ((!(G__28385))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28375_28663 = (cljs.core.truth_(G__28386_28661)?v1.buf:null);
var G__28376_28664 = (cljs.core.truth_(G__28387_28662)?v2.buf:null);
var G__28380_28665 = (cljs.core.truth_(G__28386_28661)?(G__28375_28663[(0)]):((G__28384)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28381_28666 = (cljs.core.truth_(G__28386_28661)?(G__28375_28663[(1)]):((G__28384)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28382_28667 = (cljs.core.truth_(G__28387_28662)?(G__28376_28664[(0)]):((G__28385)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28383_28668 = (cljs.core.truth_(G__28387_28662)?(G__28376_28664[(1)]):((G__28385)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__28377[(0)] = ((G__28378 / G__28380_28665) / G__28382_28667));

(G__28377[(1)] = ((G__28379 / G__28381_28666) / G__28383_28668));
}

return (new thi.ng.geom.vector.Vec2(G__28377,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__23937__auto__ = (new Float32Array((2)));
var G__28388_28669 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28389_28670 = v.buf;
(dest__23937__auto__[(0)] = ((G__28388_28669[(0)]) + (G__28389_28670[(0)])));

(dest__23937__auto__[(1)] = ((G__28388_28669[(1)]) + (G__28389_28670[(1)])));
} else {
if(typeof v === 'number'){
(dest__23937__auto__[(0)] = ((G__28388_28669[(0)]) + v));

(dest__23937__auto__[(1)] = ((G__28388_28669[(1)]) + v));
} else {
(dest__23937__auto__[(0)] = ((G__28388_28669[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__23937__auto__[(1)] = ((G__28388_28669[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__23937__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28390 = self__.buf;
var G__28393 = (new Float32Array((2)));
var G__28394 = (G__28390[(0)]);
var G__28395 = (G__28390[(1)]);
var G__28400 = typeof v1 === 'number';
var G__28401 = typeof v2 === 'number';
if(((G__28400)?G__28401:false)){
(G__28393[(0)] = (G__28394 + v1));

(G__28393[(1)] = (G__28395 + v2));
} else {
var G__28402_28671 = ((!(G__28400))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28403_28672 = ((!(G__28401))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28391_28673 = (cljs.core.truth_(G__28402_28671)?v1.buf:null);
var G__28392_28674 = (cljs.core.truth_(G__28403_28672)?v2.buf:null);
var G__28396_28675 = (cljs.core.truth_(G__28402_28671)?(G__28391_28673[(0)]):((G__28400)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28397_28676 = (cljs.core.truth_(G__28402_28671)?(G__28391_28673[(1)]):((G__28400)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28398_28677 = (cljs.core.truth_(G__28403_28672)?(G__28392_28674[(0)]):((G__28401)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28399_28678 = (cljs.core.truth_(G__28403_28672)?(G__28392_28674[(1)]):((G__28401)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__28393[(0)] = ((G__28394 + G__28396_28675) + G__28398_28677));

(G__28393[(1)] = ((G__28395 + G__28397_28676) + G__28399_28678));
}

return (new thi.ng.geom.vector.Vec2(G__28393,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__23907__auto__ = (new Float32Array((2)));
var G__28404_28679 = self__.buf;
(dest__23907__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__28404_28679[(0)])));

(dest__23907__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__28404_28679[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__23907__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__23948__auto__ = (new Float32Array((2)));
var G__28171_28680 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28172_28681 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28173_28682 = ((!(G__28171_28680))?typeof a === 'number':null);
var G__28174_28683 = ((!(G__28172_28681))?typeof b === 'number':null);
var G__28162_28684 = self__.buf;
var G__28163_28685 = ((G__28171_28680)?a.buf:null);
var G__28164_28686 = ((G__28172_28681)?b.buf:null);
var G__28165_28687 = (G__28162_28684[(0)]);
var G__28166_28688 = (G__28162_28684[(1)]);
var G__28167_28689 = ((G__28171_28680)?(G__28163_28685[(0)]):(cljs.core.truth_(G__28173_28682)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28168_28690 = ((G__28171_28680)?(G__28163_28685[(1)]):(cljs.core.truth_(G__28173_28682)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28169_28691 = ((G__28172_28681)?(G__28164_28686[(0)]):(cljs.core.truth_(G__28174_28683)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28170_28692 = ((G__28172_28681)?(G__28164_28686[(1)]):(cljs.core.truth_(G__28174_28683)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__23948__auto__[(0)] = ((G__28165_28687 - G__28167_28689) * G__28169_28691));

(dest__23948__auto__[(1)] = ((G__28166_28688 - G__28168_28690) * G__28170_28692));

return (new thi.ng.geom.vector.Vec2(dest__23948__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2";

thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.vector/Vec2");
});

thi.ng.geom.vector.__GT_Vec2 = (function thi$ng$geom$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28694_29145 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28695_29146 = v.buf;
(self__.buf[(0)] = ((G__28694_29145[(0)]) - (G__28695_29146[(0)])));

(self__.buf[(1)] = ((G__28694_29145[(1)]) - (G__28695_29146[(1)])));

(self__.buf[(2)] = ((G__28694_29145[(2)]) - (G__28695_29146[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28694_29145[(0)]) - v));

(self__.buf[(1)] = ((G__28694_29145[(1)]) - v));

(self__.buf[(2)] = ((G__28694_29145[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28694_29145[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28694_29145[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28694_29145[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28708_29147 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__28709_29148 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28710_29149 = ((!(G__28708_29147))?typeof v1 === 'number':null);
var G__28711_29150 = ((!(G__28709_29148))?typeof v2 === 'number':null);
var G__28696_29151 = self__.buf;
var G__28697_29152 = ((G__28708_29147)?v1.buf:null);
var G__28698_29153 = ((G__28709_29148)?v2.buf:null);
var G__28699_29154 = (G__28696_29151[(0)]);
var G__28700_29155 = (G__28696_29151[(1)]);
var G__28701_29156 = (G__28696_29151[(2)]);
var G__28702_29157 = ((G__28708_29147)?(G__28697_29152[(0)]):(cljs.core.truth_(G__28710_29149)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28703_29158 = ((G__28708_29147)?(G__28697_29152[(1)]):(cljs.core.truth_(G__28710_29149)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28704_29159 = ((G__28708_29147)?(G__28697_29152[(2)]):(cljs.core.truth_(G__28710_29149)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28705_29160 = ((G__28709_29148)?(G__28698_29153[(0)]):(cljs.core.truth_(G__28711_29150)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28706_29161 = ((G__28709_29148)?(G__28698_29153[(1)]):(cljs.core.truth_(G__28711_29150)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28707_29162 = ((G__28709_29148)?(G__28698_29153[(2)]):(cljs.core.truth_(G__28711_29150)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28699_29154 - G__28702_29157) - G__28705_29160));

(self__.buf[(1)] = ((G__28700_29155 - G__28703_29158) - G__28706_29161));

(self__.buf[(2)] = ((G__28701_29156 - G__28704_29159) - G__28707_29162));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28712_29163 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28713_29164 = v.buf;
(self__.buf[(0)] = ((G__28712_29163[(0)]) * (G__28713_29164[(0)])));

(self__.buf[(1)] = ((G__28712_29163[(1)]) * (G__28713_29164[(1)])));

(self__.buf[(2)] = ((G__28712_29163[(2)]) * (G__28713_29164[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28712_29163[(0)]) * v));

(self__.buf[(1)] = ((G__28712_29163[(1)]) * v));

(self__.buf[(2)] = ((G__28712_29163[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28712_29163[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28712_29163[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28712_29163[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28726_29165 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__28727_29166 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28728_29167 = ((!(G__28726_29165))?typeof v1 === 'number':null);
var G__28729_29168 = ((!(G__28727_29166))?typeof v2 === 'number':null);
var G__28714_29169 = self__.buf;
var G__28715_29170 = ((G__28726_29165)?v1.buf:null);
var G__28716_29171 = ((G__28727_29166)?v2.buf:null);
var G__28717_29172 = (G__28714_29169[(0)]);
var G__28718_29173 = (G__28714_29169[(1)]);
var G__28719_29174 = (G__28714_29169[(2)]);
var G__28720_29175 = ((G__28726_29165)?(G__28715_29170[(0)]):(cljs.core.truth_(G__28728_29167)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28721_29176 = ((G__28726_29165)?(G__28715_29170[(1)]):(cljs.core.truth_(G__28728_29167)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28722_29177 = ((G__28726_29165)?(G__28715_29170[(2)]):(cljs.core.truth_(G__28728_29167)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28723_29178 = ((G__28727_29166)?(G__28716_29171[(0)]):(cljs.core.truth_(G__28729_29168)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28724_29179 = ((G__28727_29166)?(G__28716_29171[(1)]):(cljs.core.truth_(G__28729_29168)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28725_29180 = ((G__28727_29166)?(G__28716_29171[(2)]):(cljs.core.truth_(G__28729_29168)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28717_29172 * G__28720_29175) * G__28723_29178));

(self__.buf[(1)] = ((G__28718_29173 * G__28721_29176) * G__28724_29179));

(self__.buf[(2)] = ((G__28719_29174 * G__28722_29177) * G__28725_29180));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28742_29181 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28743_29182 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28744_29183 = ((!(G__28742_29181))?typeof a === 'number':null);
var G__28745_29184 = ((!(G__28743_29182))?typeof b === 'number':null);
var G__28730_29185 = self__.buf;
var G__28731_29186 = ((G__28742_29181)?a.buf:null);
var G__28732_29187 = ((G__28743_29182)?b.buf:null);
var G__28733_29188 = (G__28730_29185[(0)]);
var G__28734_29189 = (G__28730_29185[(1)]);
var G__28735_29190 = (G__28730_29185[(2)]);
var G__28736_29191 = ((G__28742_29181)?(G__28731_29186[(0)]):(cljs.core.truth_(G__28744_29183)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28737_29192 = ((G__28742_29181)?(G__28731_29186[(1)]):(cljs.core.truth_(G__28744_29183)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28738_29193 = ((G__28742_29181)?(G__28731_29186[(2)]):(cljs.core.truth_(G__28744_29183)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__28739_29194 = ((G__28743_29182)?(G__28732_29187[(0)]):(cljs.core.truth_(G__28745_29184)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28740_29195 = ((G__28743_29182)?(G__28732_29187[(1)]):(cljs.core.truth_(G__28745_29184)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__28741_29196 = ((G__28743_29182)?(G__28732_29187[(2)]):(cljs.core.truth_(G__28745_29184)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__28733_29188 - G__28736_29191) * G__28739_29194));

(self__.buf[(1)] = ((G__28734_29189 - G__28737_29192) * G__28740_29195));

(self__.buf[(2)] = ((G__28735_29190 - G__28738_29193) * G__28741_29196));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28758_29197 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28759_29198 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28760_29199 = ((!(G__28758_29197))?typeof a === 'number':null);
var G__28761_29200 = ((!(G__28759_29198))?typeof b === 'number':null);
var G__28746_29201 = self__.buf;
var G__28747_29202 = ((G__28758_29197)?a.buf:null);
var G__28748_29203 = ((G__28759_29198)?b.buf:null);
var G__28749_29204 = (G__28746_29201[(0)]);
var G__28750_29205 = (G__28746_29201[(1)]);
var G__28751_29206 = (G__28746_29201[(2)]);
var G__28752_29207 = ((G__28758_29197)?(G__28747_29202[(0)]):(cljs.core.truth_(G__28760_29199)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28753_29208 = ((G__28758_29197)?(G__28747_29202[(1)]):(cljs.core.truth_(G__28760_29199)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28754_29209 = ((G__28758_29197)?(G__28747_29202[(2)]):(cljs.core.truth_(G__28760_29199)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28755_29210 = ((G__28759_29198)?(G__28748_29203[(0)]):(cljs.core.truth_(G__28761_29200)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28756_29211 = ((G__28759_29198)?(G__28748_29203[(1)]):(cljs.core.truth_(G__28761_29200)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28757_29212 = ((G__28759_29198)?(G__28748_29203[(2)]):(cljs.core.truth_(G__28761_29200)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__28749_29204 * G__28752_29207) - G__28755_29210));

(self__.buf[(1)] = ((G__28750_29205 * G__28753_29208) - G__28756_29211));

(self__.buf[(2)] = ((G__28751_29206 * G__28754_29209) - G__28757_29212));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28774_29213 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28775_29214 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28776_29215 = ((!(G__28774_29213))?typeof a === 'number':null);
var G__28777_29216 = ((!(G__28775_29214))?typeof b === 'number':null);
var G__28762_29217 = self__.buf;
var G__28763_29218 = ((G__28774_29213)?a.buf:null);
var G__28764_29219 = ((G__28775_29214)?b.buf:null);
var G__28765_29220 = (G__28762_29217[(0)]);
var G__28766_29221 = (G__28762_29217[(1)]);
var G__28767_29222 = (G__28762_29217[(2)]);
var G__28768_29223 = ((G__28774_29213)?(G__28763_29218[(0)]):(cljs.core.truth_(G__28776_29215)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28769_29224 = ((G__28774_29213)?(G__28763_29218[(1)]):(cljs.core.truth_(G__28776_29215)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28770_29225 = ((G__28774_29213)?(G__28763_29218[(2)]):(cljs.core.truth_(G__28776_29215)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28771_29226 = ((G__28775_29214)?(G__28764_29219[(0)]):(cljs.core.truth_(G__28777_29216)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28772_29227 = ((G__28775_29214)?(G__28764_29219[(1)]):(cljs.core.truth_(G__28777_29216)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28773_29228 = ((G__28775_29214)?(G__28764_29219[(2)]):(cljs.core.truth_(G__28777_29216)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__28765_29220 * G__28768_29223) + G__28771_29226));

(self__.buf[(1)] = ((G__28766_29221 * G__28769_29224) + G__28772_29227));

(self__.buf[(2)] = ((G__28767_29222 * G__28770_29225) + G__28773_29228));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28778_29229 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28779_29230 = v.buf;
(self__.buf[(0)] = ((G__28778_29229[(0)]) / (G__28779_29230[(0)])));

(self__.buf[(1)] = ((G__28778_29229[(1)]) / (G__28779_29230[(1)])));

(self__.buf[(2)] = ((G__28778_29229[(2)]) / (G__28779_29230[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28778_29229[(0)]) / v));

(self__.buf[(1)] = ((G__28778_29229[(1)]) / v));

(self__.buf[(2)] = ((G__28778_29229[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28778_29229[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28778_29229[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28778_29229[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28792_29231 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__28793_29232 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28794_29233 = ((!(G__28792_29231))?typeof v1 === 'number':null);
var G__28795_29234 = ((!(G__28793_29232))?typeof v2 === 'number':null);
var G__28780_29235 = self__.buf;
var G__28781_29236 = ((G__28792_29231)?v1.buf:null);
var G__28782_29237 = ((G__28793_29232)?v2.buf:null);
var G__28783_29238 = (G__28780_29235[(0)]);
var G__28784_29239 = (G__28780_29235[(1)]);
var G__28785_29240 = (G__28780_29235[(2)]);
var G__28786_29241 = ((G__28792_29231)?(G__28781_29236[(0)]):(cljs.core.truth_(G__28794_29233)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28787_29242 = ((G__28792_29231)?(G__28781_29236[(1)]):(cljs.core.truth_(G__28794_29233)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28788_29243 = ((G__28792_29231)?(G__28781_29236[(2)]):(cljs.core.truth_(G__28794_29233)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28789_29244 = ((G__28793_29232)?(G__28782_29237[(0)]):(cljs.core.truth_(G__28795_29234)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28790_29245 = ((G__28793_29232)?(G__28782_29237[(1)]):(cljs.core.truth_(G__28795_29234)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28791_29246 = ((G__28793_29232)?(G__28782_29237[(2)]):(cljs.core.truth_(G__28795_29234)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28783_29238 / G__28786_29241) / G__28789_29244));

(self__.buf[(1)] = ((G__28784_29239 / G__28787_29242) / G__28790_29245));

(self__.buf[(2)] = ((G__28785_29240 / G__28788_29243) / G__28791_29246));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28796_29247 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28797_29248 = v.buf;
(self__.buf[(0)] = ((G__28796_29247[(0)]) + (G__28797_29248[(0)])));

(self__.buf[(1)] = ((G__28796_29247[(1)]) + (G__28797_29248[(1)])));

(self__.buf[(2)] = ((G__28796_29247[(2)]) + (G__28797_29248[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28796_29247[(0)]) + v));

(self__.buf[(1)] = ((G__28796_29247[(1)]) + v));

(self__.buf[(2)] = ((G__28796_29247[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28796_29247[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28796_29247[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28796_29247[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28810_29249 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__28811_29250 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28812_29251 = ((!(G__28810_29249))?typeof v1 === 'number':null);
var G__28813_29252 = ((!(G__28811_29250))?typeof v2 === 'number':null);
var G__28798_29253 = self__.buf;
var G__28799_29254 = ((G__28810_29249)?v1.buf:null);
var G__28800_29255 = ((G__28811_29250)?v2.buf:null);
var G__28801_29256 = (G__28798_29253[(0)]);
var G__28802_29257 = (G__28798_29253[(1)]);
var G__28803_29258 = (G__28798_29253[(2)]);
var G__28804_29259 = ((G__28810_29249)?(G__28799_29254[(0)]):(cljs.core.truth_(G__28812_29251)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28805_29260 = ((G__28810_29249)?(G__28799_29254[(1)]):(cljs.core.truth_(G__28812_29251)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28806_29261 = ((G__28810_29249)?(G__28799_29254[(2)]):(cljs.core.truth_(G__28812_29251)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28807_29262 = ((G__28811_29250)?(G__28800_29255[(0)]):(cljs.core.truth_(G__28813_29252)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28808_29263 = ((G__28811_29250)?(G__28800_29255[(1)]):(cljs.core.truth_(G__28813_29252)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28809_29264 = ((G__28811_29250)?(G__28800_29255[(2)]):(cljs.core.truth_(G__28813_29252)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28801_29256 + G__28804_29259) + G__28807_29262));

(self__.buf[(1)] = ((G__28802_29257 + G__28805_29260) + G__28808_29263));

(self__.buf[(2)] = ((G__28803_29258 + G__28806_29261) + G__28809_29264));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28826_29265 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28827_29266 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28828_29267 = ((!(G__28826_29265))?typeof a === 'number':null);
var G__28829_29268 = ((!(G__28827_29266))?typeof b === 'number':null);
var G__28814_29269 = self__.buf;
var G__28815_29270 = ((G__28826_29265)?a.buf:null);
var G__28816_29271 = ((G__28827_29266)?b.buf:null);
var G__28817_29272 = (G__28814_29269[(0)]);
var G__28818_29273 = (G__28814_29269[(1)]);
var G__28819_29274 = (G__28814_29269[(2)]);
var G__28820_29275 = ((G__28826_29265)?(G__28815_29270[(0)]):(cljs.core.truth_(G__28828_29267)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28821_29276 = ((G__28826_29265)?(G__28815_29270[(1)]):(cljs.core.truth_(G__28828_29267)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28822_29277 = ((G__28826_29265)?(G__28815_29270[(2)]):(cljs.core.truth_(G__28828_29267)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__28823_29278 = ((G__28827_29266)?(G__28816_29271[(0)]):(cljs.core.truth_(G__28829_29268)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28824_29279 = ((G__28827_29266)?(G__28816_29271[(1)]):(cljs.core.truth_(G__28829_29268)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__28825_29280 = ((G__28827_29266)?(G__28816_29271[(2)]):(cljs.core.truth_(G__28829_29268)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__28817_29272 + G__28820_29275) * G__28823_29278));

(self__.buf[(1)] = ((G__28818_29273 + G__28821_29276) * G__28824_29279));

(self__.buf[(2)] = ((G__28819_29274 + G__28822_29277) * G__28825_29280));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28830_29281 = self__.buf;
var G__28832_29282 = (G__28830_29281[(0)]);
var G__28833_29283 = (G__28830_29281[(1)]);
var G__28834_29284 = (G__28830_29281[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28831_29285 = v.buf;
var G__28835_29286 = (G__28831_29285[(0)]);
var G__28836_29287 = (G__28831_29285[(1)]);
var G__28837_29288 = (G__28831_29285[(2)]);
(b[(0)] = ((G__28833_29283 * G__28837_29288) - (G__28836_29287 * G__28834_29284)));

(b[(1)] = ((G__28834_29284 * G__28835_29286) - (G__28837_29288 * G__28832_29282)));

(b[(2)] = ((G__28832_29282 * G__28836_29287) - (G__28835_29286 * G__28833_29283)));
} else {
var G__28835_29289 = cljs.core.nth.call(null,v,(0),0.0);
var G__28836_29290 = cljs.core.nth.call(null,v,(1),0.0);
var G__28837_29291 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__28833_29283 * G__28837_29291) - (G__28836_29290 * G__28834_29284)));

(b[(1)] = ((G__28834_29284 * G__28835_29289) - (G__28837_29291 * G__28832_29282)));

(b[(2)] = ((G__28832_29282 * G__28836_29290) - (G__28835_29289 * G__28833_29283)));
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec3 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28854 = self__.buf;
var G__28856 = (G__28854[(0)]);
var G__28857 = (G__28854[(1)]);
var G__28858 = (G__28854[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28855 = v.buf;
var G__28859 = (G__28855[(0)]);
var G__28860 = (G__28855[(1)]);
var G__28861 = (G__28855[(2)]);
var d = ((((G__28856 * G__28859) + (G__28857 * G__28860)) + (G__28858 * G__28861)) * 2.0);
(b[(0)] = ((G__28859 * d) - G__28856));

(b[(1)] = ((G__28860 * d) - G__28857));

(b[(2)] = ((G__28861 * d) - G__28858));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__28859 = cljs.core.nth.call(null,v,(0),0.0);
var G__28860 = cljs.core.nth.call(null,v,(1),0.0);
var G__28861 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__28856 * G__28859) + (G__28857 * G__28860)) + (G__28858 * G__28861)) * 2.0);
(b[(0)] = ((G__28859 * d) - G__28856));

(b[(1)] = ((G__28860 * d) - G__28857));

(b[(2)] = ((G__28861 * d) - G__28858));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28862 = self__.buf;
var G__28864 = (G__28862[(0)]);
var G__28865 = (G__28862[(1)]);
var G__28866 = (G__28862[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28863 = v.buf;
var G__28867 = (G__28863[(0)]);
var G__28868 = (G__28863[(1)]);
var G__28869 = (G__28863[(2)]);
var dx = (G__28864 - G__28867);
var dy = (G__28865 - G__28868);
var dz = (G__28866 - G__28869);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__28867 = cljs.core.nth.call(null,v,(0),0.0);
var G__28868 = cljs.core.nth.call(null,v,(1),0.0);
var G__28869 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__28864 - G__28867);
var dy = (G__28865 - G__28868);
var dz = (G__28866 - G__28869);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__28870_29292 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28871_29293 = v.buf;
(dest__24042__auto__[(0)] = ((G__28870_29292[(0)]) * (G__28871_29293[(0)])));

(dest__24042__auto__[(1)] = ((G__28870_29292[(1)]) * (G__28871_29293[(1)])));

(dest__24042__auto__[(2)] = ((G__28870_29292[(2)]) * (G__28871_29293[(2)])));
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = ((G__28870_29292[(0)]) * v));

(dest__24042__auto__[(1)] = ((G__28870_29292[(1)]) * v));

(dest__24042__auto__[(2)] = ((G__28870_29292[(2)]) * v));
} else {
(dest__24042__auto__[(0)] = ((G__28870_29292[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__24042__auto__[(1)] = ((G__28870_29292[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__24042__auto__[(2)] = ((G__28870_29292[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__19807__auto__ = self__._hash;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__28872 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28873 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28872[(0)]),(G__28873[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28872[(1)]),(G__28873[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28872[(2)]),(G__28873[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28872[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28872[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28872[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__28874 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28875 = v.buf;
return ((((G__28874[(0)]) * (G__28875[(0)])) + ((G__28874[(1)]) * (G__28875[(1)]))) + ((G__28874[(2)]) * (G__28875[(2)])));
} else {
return ((((G__28874[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__28874[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__28874[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__28876_29294 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28877_29295 = v.buf;
(dest__24042__auto__[(0)] = ((G__28876_29294[(0)]) + (G__28877_29295[(0)])));

(dest__24042__auto__[(1)] = ((G__28876_29294[(1)]) + (G__28877_29295[(1)])));

(dest__24042__auto__[(2)] = ((G__28876_29294[(2)]) + (G__28877_29295[(2)])));
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = ((G__28876_29294[(0)]) + v));

(dest__24042__auto__[(1)] = ((G__28876_29294[(1)]) + v));

(dest__24042__auto__[(2)] = ((G__28876_29294[(2)]) + v));
} else {
(dest__24042__auto__[(0)] = ((G__28876_29294[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__24042__auto__[(1)] = ((G__28876_29294[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__24042__auto__[(2)] = ((G__28876_29294[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.vector.Vec3))?v:thi.ng.geom.vector.vec3.call(null,v));
return Math.acos(thi.ng.math.core.dot.call(null,thi.ng.math.core.normalize.call(null,___$1),thi.ng.math.core.normalize.call(null,v__$1)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28878_29296 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28879_29297 = v.buf;
(b[(0)] = (((G__28878_29296[(0)]) + (G__28879_29297[(0)])) * 0.5));

(b[(1)] = (((G__28878_29296[(1)]) + (G__28879_29297[(1)])) * 0.5));

(b[(2)] = (((G__28878_29296[(2)]) + (G__28879_29297[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__28878_29296[(0)]) + v) * 0.5));

(b[(1)] = (((G__28878_29296[(1)]) + v) * 0.5));

(b[(2)] = (((G__28878_29296[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__28878_29296[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__28878_29296[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__28878_29296[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28892_29298 = (v instanceof thi.ng.geom.vector.Vec3);
var G__28893_29299 = (t instanceof thi.ng.geom.vector.Vec3);
var G__28894_29300 = ((!(G__28892_29298))?typeof v === 'number':null);
var G__28895_29301 = ((!(G__28893_29299))?typeof t === 'number':null);
var G__28880_29302 = self__.buf;
var G__28881_29303 = ((G__28892_29298)?v.buf:null);
var G__28882_29304 = ((G__28893_29299)?t.buf:null);
var G__28883_29305 = (G__28880_29302[(0)]);
var G__28884_29306 = (G__28880_29302[(1)]);
var G__28885_29307 = (G__28880_29302[(2)]);
var G__28886_29308 = ((G__28892_29298)?(G__28881_29303[(0)]):(cljs.core.truth_(G__28894_29300)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28887_29309 = ((G__28892_29298)?(G__28881_29303[(1)]):(cljs.core.truth_(G__28894_29300)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28888_29310 = ((G__28892_29298)?(G__28881_29303[(2)]):(cljs.core.truth_(G__28894_29300)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__28889_29311 = ((G__28893_29299)?(G__28882_29304[(0)]):(cljs.core.truth_(G__28895_29301)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__28890_29312 = ((G__28893_29299)?(G__28882_29304[(1)]):(cljs.core.truth_(G__28895_29301)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__28891_29313 = ((G__28893_29299)?(G__28882_29304[(2)]):(cljs.core.truth_(G__28895_29301)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = (((G__28886_29308 - G__28883_29305) * G__28889_29311) + G__28883_29305));

(b[(1)] = (((G__28887_29309 - G__28884_29306) * G__28890_29312) + G__28884_29306));

(b[(2)] = (((G__28888_29310 - G__28885_29307) * G__28891_29313) + G__28885_29307));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__28908_29314 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28909_29315 = (c instanceof thi.ng.geom.vector.Vec3);
var G__28910_29316 = ((!(G__28908_29314))?typeof b === 'number':null);
var G__28911_29317 = ((!(G__28909_29315))?typeof c === 'number':null);
var G__28896_29318 = self__.buf;
var G__28897_29319 = ((G__28908_29314)?b.buf:null);
var G__28898_29320 = ((G__28909_29315)?c.buf:null);
var G__28899_29321 = (G__28896_29318[(0)]);
var G__28900_29322 = (G__28896_29318[(1)]);
var G__28901_29323 = (G__28896_29318[(2)]);
var G__28902_29324 = ((G__28908_29314)?(G__28897_29319[(0)]):(cljs.core.truth_(G__28910_29316)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28903_29325 = ((G__28908_29314)?(G__28897_29319[(1)]):(cljs.core.truth_(G__28910_29316)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28904_29326 = ((G__28908_29314)?(G__28897_29319[(2)]):(cljs.core.truth_(G__28910_29316)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__28905_29327 = ((G__28909_29315)?(G__28898_29320[(0)]):(cljs.core.truth_(G__28911_29317)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__28906_29328 = ((G__28909_29315)?(G__28898_29320[(1)]):(cljs.core.truth_(G__28911_29317)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__28907_29329 = ((G__28909_29315)?(G__28898_29320[(2)]):(cljs.core.truth_(G__28911_29317)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_29330 = (((G__28902_29324 - G__28899_29321) * u) + G__28899_29321);
var y1_29331 = (((G__28903_29325 - G__28900_29322) * u) + G__28900_29322);
var z1_29332 = (((G__28904_29326 - G__28901_29323) * u) + G__28901_29323);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__28905_29327) * u) + G__28905_29327) - x1_29330) * v) + x1_29330));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__28906_29328) * u) + G__28906_29328) - y1_29331) * v) + y1_29331));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__28907_29329) * u) + G__28907_29329) - z1_29332) * v) + z1_29332));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28924_29333 = (v instanceof thi.ng.geom.vector.Vec3);
var G__28925_29334 = (t instanceof thi.ng.geom.vector.Vec3);
var G__28926_29335 = ((!(G__28924_29333))?typeof v === 'number':null);
var G__28927_29336 = ((!(G__28925_29334))?typeof t === 'number':null);
var G__28912_29337 = self__.buf;
var G__28913_29338 = ((G__28924_29333)?v.buf:null);
var G__28914_29339 = ((G__28925_29334)?t.buf:null);
var G__28915_29340 = (G__28912_29337[(0)]);
var G__28916_29341 = (G__28912_29337[(1)]);
var G__28917_29342 = (G__28912_29337[(2)]);
var G__28918_29343 = ((G__28924_29333)?(G__28913_29338[(0)]):(cljs.core.truth_(G__28926_29335)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28919_29344 = ((G__28924_29333)?(G__28913_29338[(1)]):(cljs.core.truth_(G__28926_29335)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28920_29345 = ((G__28924_29333)?(G__28913_29338[(2)]):(cljs.core.truth_(G__28926_29335)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__28921_29346 = ((G__28925_29334)?(G__28914_29339[(0)]):(cljs.core.truth_(G__28927_29336)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__28922_29347 = ((G__28925_29334)?(G__28914_29339[(1)]):(cljs.core.truth_(G__28927_29336)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__28923_29348 = ((G__28925_29334)?(G__28914_29339[(2)]):(cljs.core.truth_(G__28927_29336)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = f.call(null,G__28915_29340,G__28918_29343,G__28921_29346));

(b[(1)] = f.call(null,G__28916_29341,G__28919_29344,G__28922_29347));

(b[(2)] = f.call(null,G__28917_29342,G__28920_29345,G__28923_29348));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28928_29349 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__28929_29350 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__28929_29350[(0)]),(G__28928_29349[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__28929_29350[(1)]),(G__28928_29349[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,(G__28929_29350[(2)]),(G__28928_29349[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__28928_29349[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__28928_29349[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,e,(G__28928_29349[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__28928_29349[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__28928_29349[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(2),0.0),(G__28928_29349[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__28942_29351 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__28943_29352 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__28944_29353 = ((!(G__28942_29351))?typeof e1 === 'number':null);
var G__28945_29354 = ((!(G__28943_29352))?typeof e2 === 'number':null);
var G__28930_29355 = self__.buf;
var G__28931_29356 = ((G__28942_29351)?e1.buf:null);
var G__28932_29357 = ((G__28943_29352)?e2.buf:null);
var G__28933_29358 = (G__28930_29355[(0)]);
var G__28934_29359 = (G__28930_29355[(1)]);
var G__28935_29360 = (G__28930_29355[(2)]);
var G__28936_29361 = ((G__28942_29351)?(G__28931_29356[(0)]):(cljs.core.truth_(G__28944_29353)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__28937_29362 = ((G__28942_29351)?(G__28931_29356[(1)]):(cljs.core.truth_(G__28944_29353)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__28938_29363 = ((G__28942_29351)?(G__28931_29356[(2)]):(cljs.core.truth_(G__28944_29353)?e1:cljs.core.nth.call(null,e1,(2),0.0)));
var G__28939_29364 = ((G__28943_29352)?(G__28932_29357[(0)]):(cljs.core.truth_(G__28945_29354)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__28940_29365 = ((G__28943_29352)?(G__28932_29357[(1)]):(cljs.core.truth_(G__28945_29354)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
var G__28941_29366 = ((G__28943_29352)?(G__28932_29357[(2)]):(cljs.core.truth_(G__28945_29354)?e2:cljs.core.nth.call(null,e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__28936_29361,G__28939_29364,G__28933_29358));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__28937_29362,G__28940_29365,G__28934_29359));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__28938_29363,G__28941_29366,G__28935_29360));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__28946_29367 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28947_29368 = v.buf;
(dest__24042__auto__[(0)] = (function (){var a__23510__auto__ = (G__28946_29367[(0)]);
var b__23511__auto__ = (G__28947_29368[(0)]);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24042__auto__[(1)] = (function (){var a__23510__auto__ = (G__28946_29367[(1)]);
var b__23511__auto__ = (G__28947_29368[(1)]);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24042__auto__[(2)] = (function (){var a__23510__auto__ = (G__28946_29367[(2)]);
var b__23511__auto__ = (G__28947_29368[(2)]);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = (function (){var a__23510__auto__ = (G__28946_29367[(0)]);
var b__23511__auto__ = v;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24042__auto__[(1)] = (function (){var a__23510__auto__ = (G__28946_29367[(1)]);
var b__23511__auto__ = v;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24042__auto__[(2)] = (function (){var a__23510__auto__ = (G__28946_29367[(2)]);
var b__23511__auto__ = v;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());
} else {
(dest__24042__auto__[(0)] = (function (){var a__23510__auto__ = (G__28946_29367[(0)]);
var b__23511__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24042__auto__[(1)] = (function (){var a__23510__auto__ = (G__28946_29367[(1)]);
var b__23511__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24042__auto__[(2)] = (function (){var a__23510__auto__ = (G__28946_29367[(2)]);
var b__23511__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__28960_29369 = (v instanceof thi.ng.geom.vector.Vec3);
var G__28961_29370 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28962_29371 = ((!(G__28960_29369))?typeof v === 'number':null);
var G__28963_29372 = ((!(G__28961_29370))?typeof v2 === 'number':null);
var G__28948_29373 = self__.buf;
var G__28949_29374 = ((G__28960_29369)?v.buf:null);
var G__28950_29375 = ((G__28961_29370)?v2.buf:null);
var G__28951_29376 = (G__28948_29373[(0)]);
var G__28952_29377 = (G__28948_29373[(1)]);
var G__28953_29378 = (G__28948_29373[(2)]);
var G__28954_29379 = ((G__28960_29369)?(G__28949_29374[(0)]):(cljs.core.truth_(G__28962_29371)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28955_29380 = ((G__28960_29369)?(G__28949_29374[(1)]):(cljs.core.truth_(G__28962_29371)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28956_29381 = ((G__28960_29369)?(G__28949_29374[(2)]):(cljs.core.truth_(G__28962_29371)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__28957_29382 = ((G__28961_29370)?(G__28950_29375[(0)]):(cljs.core.truth_(G__28963_29372)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28958_29383 = ((G__28961_29370)?(G__28950_29375[(1)]):(cljs.core.truth_(G__28963_29372)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28959_29384 = ((G__28961_29370)?(G__28950_29375[(2)]):(cljs.core.truth_(G__28963_29372)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24053__auto__[(0)] = (function (){var a__23510__auto__ = (function (){var a__23510__auto__ = G__28951_29376;
var b__23511__auto__ = G__28954_29379;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})();
var b__23511__auto__ = G__28957_29382;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24053__auto__[(1)] = (function (){var a__23510__auto__ = (function (){var a__23510__auto__ = G__28952_29377;
var b__23511__auto__ = G__28955_29380;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})();
var b__23511__auto__ = G__28958_29383;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

(dest__24053__auto__[(2)] = (function (){var a__23510__auto__ = (function (){var a__23510__auto__ = G__28953_29378;
var b__23511__auto__ = G__28956_29381;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})();
var b__23511__auto__ = G__28959_29384;
if((a__23510__auto__ <= b__23511__auto__)){
return a__23510__auto__;
} else {
return b__23511__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__28964_29385 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28965_29386 = v.buf;
(dest__24042__auto__[(0)] = (function (){var a__23517__auto__ = (G__28964_29385[(0)]);
var b__23518__auto__ = (G__28965_29386[(0)]);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24042__auto__[(1)] = (function (){var a__23517__auto__ = (G__28964_29385[(1)]);
var b__23518__auto__ = (G__28965_29386[(1)]);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24042__auto__[(2)] = (function (){var a__23517__auto__ = (G__28964_29385[(2)]);
var b__23518__auto__ = (G__28965_29386[(2)]);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = (function (){var a__23517__auto__ = (G__28964_29385[(0)]);
var b__23518__auto__ = v;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24042__auto__[(1)] = (function (){var a__23517__auto__ = (G__28964_29385[(1)]);
var b__23518__auto__ = v;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24042__auto__[(2)] = (function (){var a__23517__auto__ = (G__28964_29385[(2)]);
var b__23518__auto__ = v;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());
} else {
(dest__24042__auto__[(0)] = (function (){var a__23517__auto__ = (G__28964_29385[(0)]);
var b__23518__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24042__auto__[(1)] = (function (){var a__23517__auto__ = (G__28964_29385[(1)]);
var b__23518__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24042__auto__[(2)] = (function (){var a__23517__auto__ = (G__28964_29385[(2)]);
var b__23518__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__28978_29387 = (v instanceof thi.ng.geom.vector.Vec3);
var G__28979_29388 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28980_29389 = ((!(G__28978_29387))?typeof v === 'number':null);
var G__28981_29390 = ((!(G__28979_29388))?typeof v2 === 'number':null);
var G__28966_29391 = self__.buf;
var G__28967_29392 = ((G__28978_29387)?v.buf:null);
var G__28968_29393 = ((G__28979_29388)?v2.buf:null);
var G__28969_29394 = (G__28966_29391[(0)]);
var G__28970_29395 = (G__28966_29391[(1)]);
var G__28971_29396 = (G__28966_29391[(2)]);
var G__28972_29397 = ((G__28978_29387)?(G__28967_29392[(0)]):(cljs.core.truth_(G__28980_29389)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28973_29398 = ((G__28978_29387)?(G__28967_29392[(1)]):(cljs.core.truth_(G__28980_29389)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28974_29399 = ((G__28978_29387)?(G__28967_29392[(2)]):(cljs.core.truth_(G__28980_29389)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__28975_29400 = ((G__28979_29388)?(G__28968_29393[(0)]):(cljs.core.truth_(G__28981_29390)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28976_29401 = ((G__28979_29388)?(G__28968_29393[(1)]):(cljs.core.truth_(G__28981_29390)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28977_29402 = ((G__28979_29388)?(G__28968_29393[(2)]):(cljs.core.truth_(G__28981_29390)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24053__auto__[(0)] = (function (){var a__23517__auto__ = (function (){var a__23517__auto__ = G__28969_29394;
var b__23518__auto__ = G__28972_29397;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})();
var b__23518__auto__ = G__28975_29400;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24053__auto__[(1)] = (function (){var a__23517__auto__ = (function (){var a__23517__auto__ = G__28970_29395;
var b__23518__auto__ = G__28973_29398;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})();
var b__23518__auto__ = G__28976_29401;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

(dest__24053__auto__[(2)] = (function (){var a__23517__auto__ = (function (){var a__23517__auto__ = G__28971_29396;
var b__23518__auto__ = G__28974_29399;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})();
var b__23518__auto__ = G__28977_29402;
if((a__23517__auto__ >= b__23518__auto__)){
return a__23517__auto__;
} else {
return b__23518__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__28982 = self__.buf;
var G__28983 = (G__28982[(0)]);
var G__28984 = (G__28982[(1)]);
var G__28985 = (G__28982[(2)]);
(b[(0)] = G__28983);

(b[(1)] = ((G__28984 * c) - (G__28985 * s)));

(b[(2)] = ((G__28984 * s) + (G__28985 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__28986 = self__.buf;
var G__28987 = (G__28986[(0)]);
var G__28988 = (G__28986[(1)]);
var G__28989 = (G__28986[(2)]);
(b[(0)] = ((G__28987 * c) + (G__28989 * s)));

(b[(1)] = G__28988);

(b[(2)] = ((G__28989 * c) - (G__28987 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__28990 = self__.buf;
var G__28991 = (G__28990[(0)]);
var G__28992 = (G__28990[(1)]);
var G__28993 = (G__28990[(2)]);
(b[(0)] = ((G__28991 * c) - (G__28992 * s)));

(b[(1)] = ((G__28991 * s) + (G__28992 * c)));

(b[(2)] = G__28993);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__28994 = self__.buf;
var G__28996 = (G__28994[(0)]);
var G__28997 = (G__28994[(1)]);
var G__28998 = (G__28994[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28995 = v.buf;
var G__28999 = (G__28995[(0)]);
var G__29000 = (G__28995[(1)]);
var G__29001 = (G__28995[(2)]);
var ux_SINGLEQUOTE_ = (G__28999 * G__28996);
var uy_SINGLEQUOTE_ = (G__28999 * G__28997);
var uz_SINGLEQUOTE_ = (G__28999 * G__28998);
var vx_SINGLEQUOTE_ = (G__29000 * G__28996);
var vy_SINGLEQUOTE_ = (G__29000 * G__28997);
var vz_SINGLEQUOTE_ = (G__29000 * G__28998);
var wx_SINGLEQUOTE_ = (G__29001 * G__28996);
var wy_SINGLEQUOTE_ = (G__29001 * G__28997);
var wz_SINGLEQUOTE_ = (G__29001 * G__28998);
var vx2 = (G__28999 * G__28999);
var vy2 = (G__29000 * G__29000);
var vz2 = (G__29001 * G__29001);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__28999) + ((((vy2 + vz2) * G__28996) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__28999)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__29000) + ((((vx2 + vz2) * G__28997) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__29000)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__29001) + ((((vx2 + vy2) * G__28998) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__29001)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__28999 = cljs.core.nth.call(null,v,(0),0.0);
var G__29000 = cljs.core.nth.call(null,v,(1),0.0);
var G__29001 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__28999 * G__28996);
var uy_SINGLEQUOTE_ = (G__28999 * G__28997);
var uz_SINGLEQUOTE_ = (G__28999 * G__28998);
var vx_SINGLEQUOTE_ = (G__29000 * G__28996);
var vy_SINGLEQUOTE_ = (G__29000 * G__28997);
var vz_SINGLEQUOTE_ = (G__29000 * G__28998);
var wx_SINGLEQUOTE_ = (G__29001 * G__28996);
var wy_SINGLEQUOTE_ = (G__29001 * G__28997);
var wz_SINGLEQUOTE_ = (G__29001 * G__28998);
var vx2 = (G__28999 * G__28999);
var vy2 = (G__29000 * G__29000);
var vz2 = (G__29001 * G__29001);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__28999) + ((((vy2 + vz2) * G__28996) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__28999)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__29000) + ((((vx2 + vz2) * G__28997) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__29000)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__29001) + ((((vx2 + vy2) * G__28998) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__29001)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.vector.Vec3.prototype.call = (function() {
var G__29403 = null;
var G__29403__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__29403__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__29403 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__29403__2.call(this,self__,k);
case 3:
return G__29403__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29403.cljs$core$IFn$_invoke$arity$2 = G__29403__2;
G__29403.cljs$core$IFn$_invoke$arity$3 = G__29403__3;
return G__29403;
})()
;

thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args28693){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28693)));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5718__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.math.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29002 = self__.buf;
var G__29003 = (G__29002[(0)]);
var G__29004 = (G__29002[(1)]);
var G__29005 = (G__29002[(2)]);
var l = Math.sqrt((((G__29003 * G__29003) + (G__29004 * G__29004)) + (G__29005 * G__29005)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__29003 / l));

(b[(1)] = (G__29004 / l));

(b[(2)] = (G__29005 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__29006 = self__.buf;
var G__29007 = (G__29006[(0)]);
var G__29008 = (G__29006[(1)]);
var G__29009 = (G__29006[(2)]);
var l = Math.sqrt((((G__29007 * G__29007) + (G__29008 * G__29008)) + (G__29009 * G__29009)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__29007 * l__$1));

(b[(1)] = (G__29008 * l__$1));

(b[(2)] = (G__29009 * l__$1));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29010 = self__.buf;
var G__29011 = (G__29010[(0)]);
var G__29012 = (G__29010[(1)]);
var G__29013 = (G__29010[(2)]);
return Math.sqrt((((G__29011 * G__29011) + (G__29012 * G__29012)) + (G__29013 * G__29013)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29014 = self__.buf;
var G__29015 = (G__29014[(0)]);
var G__29016 = (G__29014[(1)]);
var G__29017 = (G__29014[(2)]);
return (((G__29015 * G__29015) + (G__29016 * G__29016)) + (G__29017 * G__29017));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__29030_29404 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29031_29405 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29032_29406 = ((!(G__29030_29404))?typeof a === 'number':null);
var G__29033_29407 = ((!(G__29031_29405))?typeof b === 'number':null);
var G__29018_29408 = self__.buf;
var G__29019_29409 = ((G__29030_29404)?a.buf:null);
var G__29020_29410 = ((G__29031_29405)?b.buf:null);
var G__29021_29411 = (G__29018_29408[(0)]);
var G__29022_29412 = (G__29018_29408[(1)]);
var G__29023_29413 = (G__29018_29408[(2)]);
var G__29024_29414 = ((G__29030_29404)?(G__29019_29409[(0)]):(cljs.core.truth_(G__29032_29406)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__29025_29415 = ((G__29030_29404)?(G__29019_29409[(1)]):(cljs.core.truth_(G__29032_29406)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__29026_29416 = ((G__29030_29404)?(G__29019_29409[(2)]):(cljs.core.truth_(G__29032_29406)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__29027_29417 = ((G__29031_29405)?(G__29020_29410[(0)]):(cljs.core.truth_(G__29033_29407)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__29028_29418 = ((G__29031_29405)?(G__29020_29410[(1)]):(cljs.core.truth_(G__29033_29407)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__29029_29419 = ((G__29031_29405)?(G__29020_29410[(2)]):(cljs.core.truth_(G__29033_29407)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__24053__auto__[(0)] = ((G__29021_29411 * G__29024_29414) - G__29027_29417));

(dest__24053__auto__[(1)] = ((G__29022_29412 * G__29025_29415) - G__29028_29418));

(dest__24053__auto__[(2)] = ((G__29023_29413 * G__29026_29416) - G__29029_29419));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__29034_29420 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29035_29421 = v.buf;
(dest__24042__auto__[(0)] = ((G__29034_29420[(0)]) * (G__29035_29421[(0)])));

(dest__24042__auto__[(1)] = ((G__29034_29420[(1)]) * (G__29035_29421[(1)])));

(dest__24042__auto__[(2)] = ((G__29034_29420[(2)]) * (G__29035_29421[(2)])));
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = ((G__29034_29420[(0)]) * v));

(dest__24042__auto__[(1)] = ((G__29034_29420[(1)]) * v));

(dest__24042__auto__[(2)] = ((G__29034_29420[(2)]) * v));
} else {
(dest__24042__auto__[(0)] = ((G__29034_29420[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__24042__auto__[(1)] = ((G__29034_29420[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__24042__auto__[(2)] = ((G__29034_29420[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__29048_29422 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29049_29423 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29050_29424 = ((!(G__29048_29422))?typeof v1 === 'number':null);
var G__29051_29425 = ((!(G__29049_29423))?typeof v2 === 'number':null);
var G__29036_29426 = self__.buf;
var G__29037_29427 = ((G__29048_29422)?v1.buf:null);
var G__29038_29428 = ((G__29049_29423)?v2.buf:null);
var G__29039_29429 = (G__29036_29426[(0)]);
var G__29040_29430 = (G__29036_29426[(1)]);
var G__29041_29431 = (G__29036_29426[(2)]);
var G__29042_29432 = ((G__29048_29422)?(G__29037_29427[(0)]):(cljs.core.truth_(G__29050_29424)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29043_29433 = ((G__29048_29422)?(G__29037_29427[(1)]):(cljs.core.truth_(G__29050_29424)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29044_29434 = ((G__29048_29422)?(G__29037_29427[(2)]):(cljs.core.truth_(G__29050_29424)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29045_29435 = ((G__29049_29423)?(G__29038_29428[(0)]):(cljs.core.truth_(G__29051_29425)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29046_29436 = ((G__29049_29423)?(G__29038_29428[(1)]):(cljs.core.truth_(G__29051_29425)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29047_29437 = ((G__29049_29423)?(G__29038_29428[(2)]):(cljs.core.truth_(G__29051_29425)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24053__auto__[(0)] = ((G__29039_29429 * G__29042_29432) * G__29045_29435));

(dest__24053__auto__[(1)] = ((G__29040_29430 * G__29043_29433) * G__29046_29436));

(dest__24053__auto__[(2)] = ((G__29041_29431 * G__29044_29434) * G__29047_29437));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29052 = self__.buf;
var dest__24031__auto__ = (new Float32Array((3)));
(dest__24031__auto__[(0)] = ((G__29052[(0)]) * x));

(dest__24031__auto__[(1)] = ((G__29052[(1)]) * y));

(dest__24031__auto__[(2)] = ((G__29052[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__24031__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24025__auto__ = (new Float32Array((3)));
var G__29053_29438 = self__.buf;
(dest__24025__auto__[(0)] = (- (G__29053_29438[(0)])));

(dest__24025__auto__[(1)] = (- (G__29053_29438[(1)])));

(dest__24025__auto__[(2)] = (- (G__29053_29438[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__24025__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__29054_29439 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29055_29440 = v.buf;
(dest__24042__auto__[(0)] = ((G__29054_29439[(0)]) - (G__29055_29440[(0)])));

(dest__24042__auto__[(1)] = ((G__29054_29439[(1)]) - (G__29055_29440[(1)])));

(dest__24042__auto__[(2)] = ((G__29054_29439[(2)]) - (G__29055_29440[(2)])));
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = ((G__29054_29439[(0)]) - v));

(dest__24042__auto__[(1)] = ((G__29054_29439[(1)]) - v));

(dest__24042__auto__[(2)] = ((G__29054_29439[(2)]) - v));
} else {
(dest__24042__auto__[(0)] = ((G__29054_29439[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__24042__auto__[(1)] = ((G__29054_29439[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__24042__auto__[(2)] = ((G__29054_29439[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__29068_29441 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29069_29442 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29070_29443 = ((!(G__29068_29441))?typeof v1 === 'number':null);
var G__29071_29444 = ((!(G__29069_29442))?typeof v2 === 'number':null);
var G__29056_29445 = self__.buf;
var G__29057_29446 = ((G__29068_29441)?v1.buf:null);
var G__29058_29447 = ((G__29069_29442)?v2.buf:null);
var G__29059_29448 = (G__29056_29445[(0)]);
var G__29060_29449 = (G__29056_29445[(1)]);
var G__29061_29450 = (G__29056_29445[(2)]);
var G__29062_29451 = ((G__29068_29441)?(G__29057_29446[(0)]):(cljs.core.truth_(G__29070_29443)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29063_29452 = ((G__29068_29441)?(G__29057_29446[(1)]):(cljs.core.truth_(G__29070_29443)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29064_29453 = ((G__29068_29441)?(G__29057_29446[(2)]):(cljs.core.truth_(G__29070_29443)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29065_29454 = ((G__29069_29442)?(G__29058_29447[(0)]):(cljs.core.truth_(G__29071_29444)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29066_29455 = ((G__29069_29442)?(G__29058_29447[(1)]):(cljs.core.truth_(G__29071_29444)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29067_29456 = ((G__29069_29442)?(G__29058_29447[(2)]):(cljs.core.truth_(G__29071_29444)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24053__auto__[(0)] = ((G__29059_29448 - G__29062_29451) - G__29065_29454));

(dest__24053__auto__[(1)] = ((G__29060_29449 - G__29063_29452) - G__29066_29455));

(dest__24053__auto__[(2)] = ((G__29061_29450 - G__29064_29453) - G__29067_29456));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29072 = self__.buf;
var dest__24031__auto__ = (new Float32Array((3)));
(dest__24031__auto__[(0)] = ((G__29072[(0)]) - x));

(dest__24031__auto__[(1)] = ((G__29072[(1)]) - y));

(dest__24031__auto__[(2)] = ((G__29072[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__24031__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__29085_29457 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29086_29458 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29087_29459 = ((!(G__29085_29457))?typeof a === 'number':null);
var G__29088_29460 = ((!(G__29086_29458))?typeof b === 'number':null);
var G__29073_29461 = self__.buf;
var G__29074_29462 = ((G__29085_29457)?a.buf:null);
var G__29075_29463 = ((G__29086_29458)?b.buf:null);
var G__29076_29464 = (G__29073_29461[(0)]);
var G__29077_29465 = (G__29073_29461[(1)]);
var G__29078_29466 = (G__29073_29461[(2)]);
var G__29079_29467 = ((G__29085_29457)?(G__29074_29462[(0)]):(cljs.core.truth_(G__29087_29459)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__29080_29468 = ((G__29085_29457)?(G__29074_29462[(1)]):(cljs.core.truth_(G__29087_29459)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__29081_29469 = ((G__29085_29457)?(G__29074_29462[(2)]):(cljs.core.truth_(G__29087_29459)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__29082_29470 = ((G__29086_29458)?(G__29075_29463[(0)]):(cljs.core.truth_(G__29088_29460)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__29083_29471 = ((G__29086_29458)?(G__29075_29463[(1)]):(cljs.core.truth_(G__29088_29460)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__29084_29472 = ((G__29086_29458)?(G__29075_29463[(2)]):(cljs.core.truth_(G__29088_29460)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__24053__auto__[(0)] = ((G__29076_29464 * G__29079_29467) + G__29082_29470));

(dest__24053__auto__[(1)] = ((G__29077_29465 * G__29080_29468) + G__29083_29471));

(dest__24053__auto__[(2)] = ((G__29078_29466 * G__29081_29469) + G__29084_29472));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__29101_29473 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29102_29474 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29103_29475 = ((!(G__29101_29473))?typeof a === 'number':null);
var G__29104_29476 = ((!(G__29102_29474))?typeof b === 'number':null);
var G__29089_29477 = self__.buf;
var G__29090_29478 = ((G__29101_29473)?a.buf:null);
var G__29091_29479 = ((G__29102_29474)?b.buf:null);
var G__29092_29480 = (G__29089_29477[(0)]);
var G__29093_29481 = (G__29089_29477[(1)]);
var G__29094_29482 = (G__29089_29477[(2)]);
var G__29095_29483 = ((G__29101_29473)?(G__29090_29478[(0)]):(cljs.core.truth_(G__29103_29475)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__29096_29484 = ((G__29101_29473)?(G__29090_29478[(1)]):(cljs.core.truth_(G__29103_29475)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__29097_29485 = ((G__29101_29473)?(G__29090_29478[(2)]):(cljs.core.truth_(G__29103_29475)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__29098_29486 = ((G__29102_29474)?(G__29091_29479[(0)]):(cljs.core.truth_(G__29104_29476)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__29099_29487 = ((G__29102_29474)?(G__29091_29479[(1)]):(cljs.core.truth_(G__29104_29476)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__29100_29488 = ((G__29102_29474)?(G__29091_29479[(2)]):(cljs.core.truth_(G__29104_29476)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__24053__auto__[(0)] = ((G__29092_29480 + G__29095_29483) * G__29098_29486));

(dest__24053__auto__[(1)] = ((G__29093_29481 + G__29096_29484) * G__29099_29487));

(dest__24053__auto__[(2)] = ((G__29094_29482 + G__29097_29485) * G__29100_29488));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24025__auto__ = (new Float32Array((3)));
var G__29105_29489 = self__.buf;
(dest__24025__auto__[(0)] = ((1) / (G__29105_29489[(0)])));

(dest__24025__auto__[(1)] = ((1) / (G__29105_29489[(1)])));

(dest__24025__auto__[(2)] = ((1) / (G__29105_29489[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__24025__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__29106_29490 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29107_29491 = v.buf;
(dest__24042__auto__[(0)] = ((G__29106_29490[(0)]) / (G__29107_29491[(0)])));

(dest__24042__auto__[(1)] = ((G__29106_29490[(1)]) / (G__29107_29491[(1)])));

(dest__24042__auto__[(2)] = ((G__29106_29490[(2)]) / (G__29107_29491[(2)])));
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = ((G__29106_29490[(0)]) / v));

(dest__24042__auto__[(1)] = ((G__29106_29490[(1)]) / v));

(dest__24042__auto__[(2)] = ((G__29106_29490[(2)]) / v));
} else {
(dest__24042__auto__[(0)] = ((G__29106_29490[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__24042__auto__[(1)] = ((G__29106_29490[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__24042__auto__[(2)] = ((G__29106_29490[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__29120_29492 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29121_29493 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29122_29494 = ((!(G__29120_29492))?typeof v1 === 'number':null);
var G__29123_29495 = ((!(G__29121_29493))?typeof v2 === 'number':null);
var G__29108_29496 = self__.buf;
var G__29109_29497 = ((G__29120_29492)?v1.buf:null);
var G__29110_29498 = ((G__29121_29493)?v2.buf:null);
var G__29111_29499 = (G__29108_29496[(0)]);
var G__29112_29500 = (G__29108_29496[(1)]);
var G__29113_29501 = (G__29108_29496[(2)]);
var G__29114_29502 = ((G__29120_29492)?(G__29109_29497[(0)]):(cljs.core.truth_(G__29122_29494)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29115_29503 = ((G__29120_29492)?(G__29109_29497[(1)]):(cljs.core.truth_(G__29122_29494)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29116_29504 = ((G__29120_29492)?(G__29109_29497[(2)]):(cljs.core.truth_(G__29122_29494)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29117_29505 = ((G__29121_29493)?(G__29110_29498[(0)]):(cljs.core.truth_(G__29123_29495)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29118_29506 = ((G__29121_29493)?(G__29110_29498[(1)]):(cljs.core.truth_(G__29123_29495)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29119_29507 = ((G__29121_29493)?(G__29110_29498[(2)]):(cljs.core.truth_(G__29123_29495)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24053__auto__[(0)] = ((G__29111_29499 / G__29114_29502) / G__29117_29505));

(dest__24053__auto__[(1)] = ((G__29112_29500 / G__29115_29503) / G__29118_29506));

(dest__24053__auto__[(2)] = ((G__29113_29501 / G__29116_29504) / G__29119_29507));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29124 = self__.buf;
var dest__24031__auto__ = (new Float32Array((3)));
(dest__24031__auto__[(0)] = ((G__29124[(0)]) / x));

(dest__24031__auto__[(1)] = ((G__29124[(1)]) / y));

(dest__24031__auto__[(2)] = ((G__29124[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__24031__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24042__auto__ = (new Float32Array((3)));
var G__29125_29508 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29126_29509 = v.buf;
(dest__24042__auto__[(0)] = ((G__29125_29508[(0)]) + (G__29126_29509[(0)])));

(dest__24042__auto__[(1)] = ((G__29125_29508[(1)]) + (G__29126_29509[(1)])));

(dest__24042__auto__[(2)] = ((G__29125_29508[(2)]) + (G__29126_29509[(2)])));
} else {
if(typeof v === 'number'){
(dest__24042__auto__[(0)] = ((G__29125_29508[(0)]) + v));

(dest__24042__auto__[(1)] = ((G__29125_29508[(1)]) + v));

(dest__24042__auto__[(2)] = ((G__29125_29508[(2)]) + v));
} else {
(dest__24042__auto__[(0)] = ((G__29125_29508[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__24042__auto__[(1)] = ((G__29125_29508[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__24042__auto__[(2)] = ((G__29125_29508[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24042__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__29139_29510 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29140_29511 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29141_29512 = ((!(G__29139_29510))?typeof v1 === 'number':null);
var G__29142_29513 = ((!(G__29140_29511))?typeof v2 === 'number':null);
var G__29127_29514 = self__.buf;
var G__29128_29515 = ((G__29139_29510)?v1.buf:null);
var G__29129_29516 = ((G__29140_29511)?v2.buf:null);
var G__29130_29517 = (G__29127_29514[(0)]);
var G__29131_29518 = (G__29127_29514[(1)]);
var G__29132_29519 = (G__29127_29514[(2)]);
var G__29133_29520 = ((G__29139_29510)?(G__29128_29515[(0)]):(cljs.core.truth_(G__29141_29512)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29134_29521 = ((G__29139_29510)?(G__29128_29515[(1)]):(cljs.core.truth_(G__29141_29512)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29135_29522 = ((G__29139_29510)?(G__29128_29515[(2)]):(cljs.core.truth_(G__29141_29512)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29136_29523 = ((G__29140_29511)?(G__29129_29516[(0)]):(cljs.core.truth_(G__29142_29513)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29137_29524 = ((G__29140_29511)?(G__29129_29516[(1)]):(cljs.core.truth_(G__29142_29513)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29138_29525 = ((G__29140_29511)?(G__29129_29516[(2)]):(cljs.core.truth_(G__29142_29513)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24053__auto__[(0)] = ((G__29130_29517 + G__29133_29520) + G__29136_29523));

(dest__24053__auto__[(1)] = ((G__29131_29518 + G__29134_29521) + G__29137_29524));

(dest__24053__auto__[(2)] = ((G__29132_29519 + G__29135_29522) + G__29138_29525));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29143 = self__.buf;
var dest__24031__auto__ = (new Float32Array((3)));
(dest__24031__auto__[(0)] = ((G__29143[(0)]) + x));

(dest__24031__auto__[(1)] = ((G__29143[(1)]) + y));

(dest__24031__auto__[(2)] = ((G__29143[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__24031__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24025__auto__ = (new Float32Array((3)));
var G__29144_29526 = self__.buf;
(dest__24025__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__29144_29526[(0)])));

(dest__24025__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__29144_29526[(1)])));

(dest__24025__auto__[(2)] = thi.ng.math.core.abs_STAR_.call(null,(G__29144_29526[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__24025__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24053__auto__ = (new Float32Array((3)));
var G__28850_29527 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28851_29528 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28852_29529 = ((!(G__28850_29527))?typeof a === 'number':null);
var G__28853_29530 = ((!(G__28851_29528))?typeof b === 'number':null);
var G__28838_29531 = self__.buf;
var G__28839_29532 = ((G__28850_29527)?a.buf:null);
var G__28840_29533 = ((G__28851_29528)?b.buf:null);
var G__28841_29534 = (G__28838_29531[(0)]);
var G__28842_29535 = (G__28838_29531[(1)]);
var G__28843_29536 = (G__28838_29531[(2)]);
var G__28844_29537 = ((G__28850_29527)?(G__28839_29532[(0)]):(cljs.core.truth_(G__28852_29529)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28845_29538 = ((G__28850_29527)?(G__28839_29532[(1)]):(cljs.core.truth_(G__28852_29529)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28846_29539 = ((G__28850_29527)?(G__28839_29532[(2)]):(cljs.core.truth_(G__28852_29529)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__28847_29540 = ((G__28851_29528)?(G__28840_29533[(0)]):(cljs.core.truth_(G__28853_29530)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28848_29541 = ((G__28851_29528)?(G__28840_29533[(1)]):(cljs.core.truth_(G__28853_29530)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__28849_29542 = ((G__28851_29528)?(G__28840_29533[(2)]):(cljs.core.truth_(G__28853_29530)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__24053__auto__[(0)] = ((G__28841_29534 - G__28844_29537) * G__28847_29540));

(dest__24053__auto__[(1)] = ((G__28842_29535 - G__28845_29538) * G__28848_29541));

(dest__24053__auto__[(2)] = ((G__28843_29536 - G__28846_29539) * G__28849_29542));

return (new thi.ng.geom.vector.Vec3(dest__24053__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3";

thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.vector/Vec3");
});

thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__29545){
var G__29543 = (((G__29545 instanceof thi.ng.geom.vector.Vec2))?G__29545.buf:G__29545.buf);
return (G__29543[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__29548){
var G__29546 = (((G__29548 instanceof thi.ng.geom.vector.Vec2))?G__29548.buf:G__29548.buf);
var G__29547 = (new Float32Array(2));
(G__29547[(0)] = (G__29546[(0)]));

(G__29547[(1)] = (G__29546[(0)]));

return (new thi.ng.geom.vector.Vec2(G__29547,null,cljs.core.meta.call(null,G__29548)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__29551){
var G__29549 = (((G__29551 instanceof thi.ng.geom.vector.Vec2))?G__29551.buf:G__29551.buf);
var G__29550 = (new Float32Array(3));
(G__29550[(0)] = (G__29549[(0)]));

(G__29550[(1)] = (G__29549[(0)]));

(G__29550[(2)] = (G__29549[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29550,null,cljs.core.meta.call(null,G__29551)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__29554){
var G__29552 = (((G__29554 instanceof thi.ng.geom.vector.Vec2))?G__29554.buf:G__29554.buf);
var G__29553 = (new Float32Array(3));
(G__29553[(0)] = (G__29552[(0)]));

(G__29553[(1)] = (G__29552[(0)]));

(G__29553[(2)] = (G__29552[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29553,null,cljs.core.meta.call(null,G__29554)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__29557){
var G__29555 = (((G__29557 instanceof thi.ng.geom.vector.Vec2))?G__29557.buf:G__29557.buf);
var G__29556 = (new Float32Array(3));
(G__29556[(0)] = (G__29555[(0)]));

(G__29556[(1)] = (G__29555[(0)]));

(G__29556[(2)] = (G__29555[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29556,null,cljs.core.meta.call(null,G__29557)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__29560){
var G__29558 = (((G__29560 instanceof thi.ng.geom.vector.Vec2))?G__29560.buf:G__29560.buf);
var G__29559 = (new Float32Array(2));
(G__29559[(0)] = (G__29558[(0)]));

(G__29559[(1)] = (G__29558[(1)]));

return (new thi.ng.geom.vector.Vec2(G__29559,null,cljs.core.meta.call(null,G__29560)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__29563){
var G__29561 = (((G__29563 instanceof thi.ng.geom.vector.Vec2))?G__29563.buf:G__29563.buf);
var G__29562 = (new Float32Array(3));
(G__29562[(0)] = (G__29561[(0)]));

(G__29562[(1)] = (G__29561[(1)]));

(G__29562[(2)] = (G__29561[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29562,null,cljs.core.meta.call(null,G__29563)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__29566){
var G__29564 = (((G__29566 instanceof thi.ng.geom.vector.Vec2))?G__29566.buf:G__29566.buf);
var G__29565 = (new Float32Array(3));
(G__29565[(0)] = (G__29564[(0)]));

(G__29565[(1)] = (G__29564[(1)]));

(G__29565[(2)] = (G__29564[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29565,null,cljs.core.meta.call(null,G__29566)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__29569){
var G__29567 = (((G__29569 instanceof thi.ng.geom.vector.Vec2))?G__29569.buf:G__29569.buf);
var G__29568 = (new Float32Array(3));
(G__29568[(0)] = (G__29567[(0)]));

(G__29568[(1)] = (G__29567[(1)]));

(G__29568[(2)] = (G__29567[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29568,null,cljs.core.meta.call(null,G__29569)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__29572){
var G__29570 = (((G__29572 instanceof thi.ng.geom.vector.Vec2))?G__29572.buf:G__29572.buf);
var G__29571 = (new Float32Array(2));
(G__29571[(0)] = (G__29570[(0)]));

(G__29571[(1)] = (G__29570[(2)]));

return (new thi.ng.geom.vector.Vec2(G__29571,null,cljs.core.meta.call(null,G__29572)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__29575){
var G__29573 = (((G__29575 instanceof thi.ng.geom.vector.Vec2))?G__29575.buf:G__29575.buf);
var G__29574 = (new Float32Array(3));
(G__29574[(0)] = (G__29573[(0)]));

(G__29574[(1)] = (G__29573[(2)]));

(G__29574[(2)] = (G__29573[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29574,null,cljs.core.meta.call(null,G__29575)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__29578){
var G__29576 = (((G__29578 instanceof thi.ng.geom.vector.Vec2))?G__29578.buf:G__29578.buf);
var G__29577 = (new Float32Array(3));
(G__29577[(0)] = (G__29576[(0)]));

(G__29577[(1)] = (G__29576[(2)]));

(G__29577[(2)] = (G__29576[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29577,null,cljs.core.meta.call(null,G__29578)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__29581){
var G__29579 = (((G__29581 instanceof thi.ng.geom.vector.Vec2))?G__29581.buf:G__29581.buf);
var G__29580 = (new Float32Array(3));
(G__29580[(0)] = (G__29579[(0)]));

(G__29580[(1)] = (G__29579[(2)]));

(G__29580[(2)] = (G__29579[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29580,null,cljs.core.meta.call(null,G__29581)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__29584){
var G__29582 = (((G__29584 instanceof thi.ng.geom.vector.Vec2))?G__29584.buf:G__29584.buf);
return (G__29582[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__29587){
var G__29585 = (((G__29587 instanceof thi.ng.geom.vector.Vec2))?G__29587.buf:G__29587.buf);
var G__29586 = (new Float32Array(2));
(G__29586[(0)] = (G__29585[(1)]));

(G__29586[(1)] = (G__29585[(0)]));

return (new thi.ng.geom.vector.Vec2(G__29586,null,cljs.core.meta.call(null,G__29587)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__29590){
var G__29588 = (((G__29590 instanceof thi.ng.geom.vector.Vec2))?G__29590.buf:G__29590.buf);
var G__29589 = (new Float32Array(3));
(G__29589[(0)] = (G__29588[(1)]));

(G__29589[(1)] = (G__29588[(0)]));

(G__29589[(2)] = (G__29588[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29589,null,cljs.core.meta.call(null,G__29590)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__29593){
var G__29591 = (((G__29593 instanceof thi.ng.geom.vector.Vec2))?G__29593.buf:G__29593.buf);
var G__29592 = (new Float32Array(3));
(G__29592[(0)] = (G__29591[(1)]));

(G__29592[(1)] = (G__29591[(0)]));

(G__29592[(2)] = (G__29591[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29592,null,cljs.core.meta.call(null,G__29593)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__29596){
var G__29594 = (((G__29596 instanceof thi.ng.geom.vector.Vec2))?G__29596.buf:G__29596.buf);
var G__29595 = (new Float32Array(3));
(G__29595[(0)] = (G__29594[(1)]));

(G__29595[(1)] = (G__29594[(0)]));

(G__29595[(2)] = (G__29594[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29595,null,cljs.core.meta.call(null,G__29596)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__29599){
var G__29597 = (((G__29599 instanceof thi.ng.geom.vector.Vec2))?G__29599.buf:G__29599.buf);
var G__29598 = (new Float32Array(2));
(G__29598[(0)] = (G__29597[(1)]));

(G__29598[(1)] = (G__29597[(1)]));

return (new thi.ng.geom.vector.Vec2(G__29598,null,cljs.core.meta.call(null,G__29599)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__29602){
var G__29600 = (((G__29602 instanceof thi.ng.geom.vector.Vec2))?G__29602.buf:G__29602.buf);
var G__29601 = (new Float32Array(3));
(G__29601[(0)] = (G__29600[(1)]));

(G__29601[(1)] = (G__29600[(1)]));

(G__29601[(2)] = (G__29600[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29601,null,cljs.core.meta.call(null,G__29602)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__29605){
var G__29603 = (((G__29605 instanceof thi.ng.geom.vector.Vec2))?G__29605.buf:G__29605.buf);
var G__29604 = (new Float32Array(3));
(G__29604[(0)] = (G__29603[(1)]));

(G__29604[(1)] = (G__29603[(1)]));

(G__29604[(2)] = (G__29603[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29604,null,cljs.core.meta.call(null,G__29605)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__29608){
var G__29606 = (((G__29608 instanceof thi.ng.geom.vector.Vec2))?G__29608.buf:G__29608.buf);
var G__29607 = (new Float32Array(3));
(G__29607[(0)] = (G__29606[(1)]));

(G__29607[(1)] = (G__29606[(1)]));

(G__29607[(2)] = (G__29606[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29607,null,cljs.core.meta.call(null,G__29608)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__29611){
var G__29609 = (((G__29611 instanceof thi.ng.geom.vector.Vec2))?G__29611.buf:G__29611.buf);
var G__29610 = (new Float32Array(2));
(G__29610[(0)] = (G__29609[(1)]));

(G__29610[(1)] = (G__29609[(2)]));

return (new thi.ng.geom.vector.Vec2(G__29610,null,cljs.core.meta.call(null,G__29611)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__29614){
var G__29612 = (((G__29614 instanceof thi.ng.geom.vector.Vec2))?G__29614.buf:G__29614.buf);
var G__29613 = (new Float32Array(3));
(G__29613[(0)] = (G__29612[(1)]));

(G__29613[(1)] = (G__29612[(2)]));

(G__29613[(2)] = (G__29612[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29613,null,cljs.core.meta.call(null,G__29614)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__29617){
var G__29615 = (((G__29617 instanceof thi.ng.geom.vector.Vec2))?G__29617.buf:G__29617.buf);
var G__29616 = (new Float32Array(3));
(G__29616[(0)] = (G__29615[(1)]));

(G__29616[(1)] = (G__29615[(2)]));

(G__29616[(2)] = (G__29615[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29616,null,cljs.core.meta.call(null,G__29617)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__29620){
var G__29618 = (((G__29620 instanceof thi.ng.geom.vector.Vec2))?G__29620.buf:G__29620.buf);
var G__29619 = (new Float32Array(3));
(G__29619[(0)] = (G__29618[(1)]));

(G__29619[(1)] = (G__29618[(2)]));

(G__29619[(2)] = (G__29618[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29619,null,cljs.core.meta.call(null,G__29620)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__29623){
var G__29621 = (((G__29623 instanceof thi.ng.geom.vector.Vec2))?G__29623.buf:G__29623.buf);
return (G__29621[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__29626){
var G__29624 = (((G__29626 instanceof thi.ng.geom.vector.Vec2))?G__29626.buf:G__29626.buf);
var G__29625 = (new Float32Array(2));
(G__29625[(0)] = (G__29624[(2)]));

(G__29625[(1)] = (G__29624[(0)]));

return (new thi.ng.geom.vector.Vec2(G__29625,null,cljs.core.meta.call(null,G__29626)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__29629){
var G__29627 = (((G__29629 instanceof thi.ng.geom.vector.Vec2))?G__29629.buf:G__29629.buf);
var G__29628 = (new Float32Array(3));
(G__29628[(0)] = (G__29627[(2)]));

(G__29628[(1)] = (G__29627[(0)]));

(G__29628[(2)] = (G__29627[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29628,null,cljs.core.meta.call(null,G__29629)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__29632){
var G__29630 = (((G__29632 instanceof thi.ng.geom.vector.Vec2))?G__29632.buf:G__29632.buf);
var G__29631 = (new Float32Array(3));
(G__29631[(0)] = (G__29630[(2)]));

(G__29631[(1)] = (G__29630[(0)]));

(G__29631[(2)] = (G__29630[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29631,null,cljs.core.meta.call(null,G__29632)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__29635){
var G__29633 = (((G__29635 instanceof thi.ng.geom.vector.Vec2))?G__29635.buf:G__29635.buf);
var G__29634 = (new Float32Array(3));
(G__29634[(0)] = (G__29633[(2)]));

(G__29634[(1)] = (G__29633[(0)]));

(G__29634[(2)] = (G__29633[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29634,null,cljs.core.meta.call(null,G__29635)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__29638){
var G__29636 = (((G__29638 instanceof thi.ng.geom.vector.Vec2))?G__29638.buf:G__29638.buf);
var G__29637 = (new Float32Array(2));
(G__29637[(0)] = (G__29636[(2)]));

(G__29637[(1)] = (G__29636[(1)]));

return (new thi.ng.geom.vector.Vec2(G__29637,null,cljs.core.meta.call(null,G__29638)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__29641){
var G__29639 = (((G__29641 instanceof thi.ng.geom.vector.Vec2))?G__29641.buf:G__29641.buf);
var G__29640 = (new Float32Array(3));
(G__29640[(0)] = (G__29639[(2)]));

(G__29640[(1)] = (G__29639[(1)]));

(G__29640[(2)] = (G__29639[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29640,null,cljs.core.meta.call(null,G__29641)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__29644){
var G__29642 = (((G__29644 instanceof thi.ng.geom.vector.Vec2))?G__29644.buf:G__29644.buf);
var G__29643 = (new Float32Array(3));
(G__29643[(0)] = (G__29642[(2)]));

(G__29643[(1)] = (G__29642[(1)]));

(G__29643[(2)] = (G__29642[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29643,null,cljs.core.meta.call(null,G__29644)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__29647){
var G__29645 = (((G__29647 instanceof thi.ng.geom.vector.Vec2))?G__29647.buf:G__29647.buf);
var G__29646 = (new Float32Array(3));
(G__29646[(0)] = (G__29645[(2)]));

(G__29646[(1)] = (G__29645[(1)]));

(G__29646[(2)] = (G__29645[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29646,null,cljs.core.meta.call(null,G__29647)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__29650){
var G__29648 = (((G__29650 instanceof thi.ng.geom.vector.Vec2))?G__29650.buf:G__29650.buf);
var G__29649 = (new Float32Array(2));
(G__29649[(0)] = (G__29648[(2)]));

(G__29649[(1)] = (G__29648[(2)]));

return (new thi.ng.geom.vector.Vec2(G__29649,null,cljs.core.meta.call(null,G__29650)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__29653){
var G__29651 = (((G__29653 instanceof thi.ng.geom.vector.Vec2))?G__29653.buf:G__29653.buf);
var G__29652 = (new Float32Array(3));
(G__29652[(0)] = (G__29651[(2)]));

(G__29652[(1)] = (G__29651[(2)]));

(G__29652[(2)] = (G__29651[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29652,null,cljs.core.meta.call(null,G__29653)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__29656){
var G__29654 = (((G__29656 instanceof thi.ng.geom.vector.Vec2))?G__29656.buf:G__29656.buf);
var G__29655 = (new Float32Array(3));
(G__29655[(0)] = (G__29654[(2)]));

(G__29655[(1)] = (G__29654[(2)]));

(G__29655[(2)] = (G__29654[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29655,null,cljs.core.meta.call(null,G__29656)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__29659){
var G__29657 = (((G__29659 instanceof thi.ng.geom.vector.Vec2))?G__29659.buf:G__29659.buf);
var G__29658 = (new Float32Array(3));
(G__29658[(0)] = (G__29657[(2)]));

(G__29658[(1)] = (G__29657[(2)]));

(G__29658[(2)] = (G__29657[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29658,null,cljs.core.meta.call(null,G__29659)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__5718__auto__ = (function (){var and__19795__auto__ = ((1) === c);
if(and__19795__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__19795__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var idx = temp__5718__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__5718__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__29660 = (i + (1));
var G__29661 = cljs.core.next.call(null,n__$1);
i = G__29660;
n__$1 = G__29661;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.vector.vec2_reduce_STAR_ = (function thi$ng$geom$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__29662 = null;
var G__29662__1 = (function (a){
return a;
});
var G__29662__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__29662 = function(a,b){
switch(arguments.length){
case 1:
return G__29662__1.call(this,a);
case 2:
return G__29662__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29662.cljs$core$IFn$_invoke$arity$1 = G__29662__1;
G__29662.cljs$core$IFn$_invoke$arity$2 = G__29662__2;
return G__29662;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__29663 = null;
var G__29663__1 = (function (a){
return a;
});
var G__29663__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__29663 = function(a,b){
switch(arguments.length){
case 1:
return G__29663__1.call(this,a);
case 2:
return G__29663__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29663.cljs$core$IFn$_invoke$arity$1 = G__29663__1;
G__29663.cljs$core$IFn$_invoke$arity$2 = G__29663__2;
return G__29663;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var args29664 = [];
var len__21023__auto___29667 = arguments.length;
var i__21024__auto___29668 = (0);
while(true){
if((i__21024__auto___29668 < len__21023__auto___29667)){
args29664.push((arguments[i__21024__auto___29668]));

var G__29669 = (i__21024__auto___29668 + (1));
i__21024__auto___29668 = G__29669;
continue;
} else {
}
break;
}

var G__29666 = args29664.length;
switch (G__29666) {
case 0:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29664.length)].join('')));

}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V2;
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,null));
});

thi.ng.geom.vector.vec2.cljs$lang$maxFixedArity = 2;

thi.ng.geom.vector.vec3 = (function thi$ng$geom$vector$vec3(var_args){
var args29671 = [];
var len__21023__auto___29674 = arguments.length;
var i__21024__auto___29675 = (0);
while(true){
if((i__21024__auto___29675 < len__21023__auto___29674)){
args29671.push((arguments[i__21024__auto___29675]));

var G__29676 = (i__21024__auto___29675 + (1));
i__21024__auto___29675 = G__29676;
continue;
} else {
}
break;
}

var G__29673 = args29671.length;
switch (G__29673) {
case 0:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29671.length)].join('')));

}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V3;
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,null));
});

thi.ng.geom.vector.vec3.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec2_with_meta = (function thi$ng$geom$vector$vec2_with_meta(var_args){
var args29678 = [];
var len__21023__auto___29681 = arguments.length;
var i__21024__auto___29682 = (0);
while(true){
if((i__21024__auto___29682 < len__21023__auto___29681)){
args29678.push((arguments[i__21024__auto___29682]));

var G__29683 = (i__21024__auto___29682 + (1));
i__21024__auto___29682 = G__29683;
continue;
} else {
}
break;
}

var G__29680 = args29678.length;
switch (G__29680) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29678.length)].join('')));

}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,meta));
});

thi.ng.geom.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec3_with_meta = (function thi$ng$geom$vector$vec3_with_meta(var_args){
var args29685 = [];
var len__21023__auto___29688 = arguments.length;
var i__21024__auto___29689 = (0);
while(true){
if((i__21024__auto___29689 < len__21023__auto___29688)){
args29685.push((arguments[i__21024__auto___29689]));

var G__29690 = (i__21024__auto___29689 + (1));
i__21024__auto___29689 = G__29690;
continue;
} else {
}
break;
}

var G__29687 = args29685.length;
switch (G__29687) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29685.length)].join('')));

}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,meta));
});

thi.ng.geom.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;

thi.ng.geom.vector.vec2_QMARK_ = (function thi$ng$geom$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec2);
});
thi.ng.geom.vector.vec3_QMARK_ = (function thi$ng$geom$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec3);
});
thi.ng.geom.vector.V2X = thi.ng.geom.vector.vec2.call(null,(1),(0));
thi.ng.geom.vector.V2Y = thi.ng.geom.vector.vec2.call(null,(0),(1));
thi.ng.geom.vector.V3X = thi.ng.geom.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.vector.V3Y = thi.ng.geom.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.vector.V3Z = thi.ng.geom.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.vector.V2INF_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V2INF_PLUS_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.V3INF_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V3INF_PLUS_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.randvec2 = (function thi$ng$geom$vector$randvec2(var_args){
var args29692 = [];
var len__21023__auto___29695 = arguments.length;
var i__21024__auto___29696 = (0);
while(true){
if((i__21024__auto___29696 < len__21023__auto___29695)){
args29692.push((arguments[i__21024__auto___29696]));

var G__29697 = (i__21024__auto___29696 + (1));
i__21024__auto___29696 = G__29697;
continue;
} else {
}
break;
}

var G__29694 = args29692.length;
switch (G__29694) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29692.length)].join('')));

}
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec2.cljs$lang$maxFixedArity = 1;

thi.ng.geom.vector.randvec3 = (function thi$ng$geom$vector$randvec3(var_args){
var args29699 = [];
var len__21023__auto___29702 = arguments.length;
var i__21024__auto___29703 = (0);
while(true){
if((i__21024__auto___29703 < len__21023__auto___29702)){
args29699.push((arguments[i__21024__auto___29703]));

var G__29704 = (i__21024__auto___29703 + (1));
i__21024__auto___29703 = G__29704;
continue;
} else {
}
break;
}

var G__29701 = args29699.length;
switch (G__29701) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29699.length)].join('')));

}
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec3.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=vector.js.map