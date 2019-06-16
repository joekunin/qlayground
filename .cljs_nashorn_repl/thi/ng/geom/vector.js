// Compiled by ClojureScript 1.9.293 {}
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
var G__28271_28620 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28272_28621 = v.buf;
(self__.buf[(0)] = ((G__28271_28620[(0)]) - (G__28272_28621[(0)])));

(self__.buf[(1)] = ((G__28271_28620[(1)]) - (G__28272_28621[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28271_28620[(0)]) - v));

(self__.buf[(1)] = ((G__28271_28620[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28271_28620[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28271_28620[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28280_28622 = typeof v1 === 'number';
var G__28281_28623 = typeof v2 === 'number';
if(((G__28280_28622)?G__28281_28623:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__28282_28624 = ((!(G__28280_28622))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28283_28625 = ((!(G__28281_28623))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28274_28626 = (cljs.core.truth_(G__28282_28624)?v1.buf:null);
var G__28275_28627 = (cljs.core.truth_(G__28283_28625)?v2.buf:null);
var G__28276_28628 = (cljs.core.truth_(G__28282_28624)?(G__28274_28626[(0)]):((G__28280_28622)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28277_28629 = (cljs.core.truth_(G__28282_28624)?(G__28274_28626[(1)]):((G__28280_28622)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28278_28630 = (cljs.core.truth_(G__28283_28625)?(G__28275_28627[(0)]):((G__28281_28623)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28279_28631 = (cljs.core.truth_(G__28283_28625)?(G__28275_28627[(1)]):((G__28281_28623)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__28276_28628) - G__28278_28630));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__28277_28629) - G__28279_28631));
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
var G__28284_28632 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28285_28633 = v.buf;
(self__.buf[(0)] = ((G__28284_28632[(0)]) * (G__28285_28633[(0)])));

(self__.buf[(1)] = ((G__28284_28632[(1)]) * (G__28285_28633[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28284_28632[(0)]) * v));

(self__.buf[(1)] = ((G__28284_28632[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28284_28632[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28284_28632[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28293_28634 = typeof v1 === 'number';
var G__28294_28635 = typeof v2 === 'number';
if(((G__28293_28634)?G__28294_28635:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__28295_28636 = ((!(G__28293_28634))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28296_28637 = ((!(G__28294_28635))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28287_28638 = (cljs.core.truth_(G__28295_28636)?v1.buf:null);
var G__28288_28639 = (cljs.core.truth_(G__28296_28637)?v2.buf:null);
var G__28289_28640 = (cljs.core.truth_(G__28295_28636)?(G__28287_28638[(0)]):((G__28293_28634)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28290_28641 = (cljs.core.truth_(G__28295_28636)?(G__28287_28638[(1)]):((G__28293_28634)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28291_28642 = (cljs.core.truth_(G__28296_28637)?(G__28288_28639[(0)]):((G__28294_28635)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28292_28643 = (cljs.core.truth_(G__28296_28637)?(G__28288_28639[(1)]):((G__28294_28635)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__28289_28640) * G__28291_28642));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__28290_28641) * G__28292_28643));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28306_28644 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28307_28645 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28308_28646 = ((!(G__28306_28644))?typeof a === 'number':null);
var G__28309_28647 = ((!(G__28307_28645))?typeof b === 'number':null);
var G__28297_28648 = self__.buf;
var G__28298_28649 = ((G__28306_28644)?a.buf:null);
var G__28299_28650 = ((G__28307_28645)?b.buf:null);
var G__28300_28651 = (G__28297_28648[(0)]);
var G__28301_28652 = (G__28297_28648[(1)]);
var G__28302_28653 = ((G__28306_28644)?(G__28298_28649[(0)]):(cljs.core.truth_(G__28308_28646)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28303_28654 = ((G__28306_28644)?(G__28298_28649[(1)]):(cljs.core.truth_(G__28308_28646)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28304_28655 = ((G__28307_28645)?(G__28299_28650[(0)]):(cljs.core.truth_(G__28309_28647)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28305_28656 = ((G__28307_28645)?(G__28299_28650[(1)]):(cljs.core.truth_(G__28309_28647)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__28300_28651 - G__28302_28653) * G__28304_28655));

(self__.buf[(1)] = ((G__28301_28652 - G__28303_28654) * G__28305_28656));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28319_28657 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28320_28658 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28321_28659 = ((!(G__28319_28657))?typeof a === 'number':null);
var G__28322_28660 = ((!(G__28320_28658))?typeof b === 'number':null);
var G__28310_28661 = self__.buf;
var G__28311_28662 = ((G__28319_28657)?a.buf:null);
var G__28312_28663 = ((G__28320_28658)?b.buf:null);
var G__28313_28664 = (G__28310_28661[(0)]);
var G__28314_28665 = (G__28310_28661[(1)]);
var G__28315_28666 = ((G__28319_28657)?(G__28311_28662[(0)]):(cljs.core.truth_(G__28321_28659)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28316_28667 = ((G__28319_28657)?(G__28311_28662[(1)]):(cljs.core.truth_(G__28321_28659)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28317_28668 = ((G__28320_28658)?(G__28312_28663[(0)]):(cljs.core.truth_(G__28322_28660)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28318_28669 = ((G__28320_28658)?(G__28312_28663[(1)]):(cljs.core.truth_(G__28322_28660)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__28313_28664 * G__28315_28666) - G__28317_28668));

(self__.buf[(1)] = ((G__28314_28665 * G__28316_28667) - G__28318_28669));

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
var G__28332_28670 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28333_28671 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28334_28672 = ((!(G__28332_28670))?typeof a === 'number':null);
var G__28335_28673 = ((!(G__28333_28671))?typeof b === 'number':null);
var G__28323_28674 = self__.buf;
var G__28324_28675 = ((G__28332_28670)?a.buf:null);
var G__28325_28676 = ((G__28333_28671)?b.buf:null);
var G__28326_28677 = (G__28323_28674[(0)]);
var G__28327_28678 = (G__28323_28674[(1)]);
var G__28328_28679 = ((G__28332_28670)?(G__28324_28675[(0)]):(cljs.core.truth_(G__28334_28672)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28329_28680 = ((G__28332_28670)?(G__28324_28675[(1)]):(cljs.core.truth_(G__28334_28672)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28330_28681 = ((G__28333_28671)?(G__28325_28676[(0)]):(cljs.core.truth_(G__28335_28673)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28331_28682 = ((G__28333_28671)?(G__28325_28676[(1)]):(cljs.core.truth_(G__28335_28673)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__28326_28677 * G__28328_28679) + G__28330_28681));

(self__.buf[(1)] = ((G__28327_28678 * G__28329_28680) + G__28331_28682));

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
var G__28336_28683 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28337_28684 = v.buf;
(self__.buf[(0)] = ((G__28336_28683[(0)]) / (G__28337_28684[(0)])));

(self__.buf[(1)] = ((G__28336_28683[(1)]) / (G__28337_28684[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28336_28683[(0)]) / v));

(self__.buf[(1)] = ((G__28336_28683[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28336_28683[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28336_28683[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28345_28685 = typeof v1 === 'number';
var G__28346_28686 = typeof v2 === 'number';
if(((G__28345_28685)?G__28346_28686:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__28347_28687 = ((!(G__28345_28685))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28348_28688 = ((!(G__28346_28686))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28339_28689 = (cljs.core.truth_(G__28347_28687)?v1.buf:null);
var G__28340_28690 = (cljs.core.truth_(G__28348_28688)?v2.buf:null);
var G__28341_28691 = (cljs.core.truth_(G__28347_28687)?(G__28339_28689[(0)]):((G__28345_28685)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28342_28692 = (cljs.core.truth_(G__28347_28687)?(G__28339_28689[(1)]):((G__28345_28685)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28343_28693 = (cljs.core.truth_(G__28348_28688)?(G__28340_28690[(0)]):((G__28346_28686)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28344_28694 = (cljs.core.truth_(G__28348_28688)?(G__28340_28690[(1)]):((G__28346_28686)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__28341_28691) / G__28343_28693));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__28342_28692) / G__28344_28694));
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
var G__28349_28695 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28350_28696 = v.buf;
(self__.buf[(0)] = ((G__28349_28695[(0)]) + (G__28350_28696[(0)])));

(self__.buf[(1)] = ((G__28349_28695[(1)]) + (G__28350_28696[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28349_28695[(0)]) + v));

(self__.buf[(1)] = ((G__28349_28695[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28349_28695[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28349_28695[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28358_28697 = typeof v1 === 'number';
var G__28359_28698 = typeof v2 === 'number';
if(((G__28358_28697)?G__28359_28698:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__28360_28699 = ((!(G__28358_28697))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28361_28700 = ((!(G__28359_28698))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28352_28701 = (cljs.core.truth_(G__28360_28699)?v1.buf:null);
var G__28353_28702 = (cljs.core.truth_(G__28361_28700)?v2.buf:null);
var G__28354_28703 = (cljs.core.truth_(G__28360_28699)?(G__28352_28701[(0)]):((G__28358_28697)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28355_28704 = (cljs.core.truth_(G__28360_28699)?(G__28352_28701[(1)]):((G__28358_28697)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28356_28705 = (cljs.core.truth_(G__28361_28700)?(G__28353_28702[(0)]):((G__28359_28698)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28357_28706 = (cljs.core.truth_(G__28361_28700)?(G__28353_28702[(1)]):((G__28359_28698)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__28354_28703) + G__28356_28705));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__28355_28704) + G__28357_28706));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28371_28707 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28372_28708 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28373_28709 = ((!(G__28371_28707))?typeof a === 'number':null);
var G__28374_28710 = ((!(G__28372_28708))?typeof b === 'number':null);
var G__28362_28711 = self__.buf;
var G__28363_28712 = ((G__28371_28707)?a.buf:null);
var G__28364_28713 = ((G__28372_28708)?b.buf:null);
var G__28365_28714 = (G__28362_28711[(0)]);
var G__28366_28715 = (G__28362_28711[(1)]);
var G__28367_28716 = ((G__28371_28707)?(G__28363_28712[(0)]):(cljs.core.truth_(G__28373_28709)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28368_28717 = ((G__28371_28707)?(G__28363_28712[(1)]):(cljs.core.truth_(G__28373_28709)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28369_28718 = ((G__28372_28708)?(G__28364_28713[(0)]):(cljs.core.truth_(G__28374_28710)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28370_28719 = ((G__28372_28708)?(G__28364_28713[(1)]):(cljs.core.truth_(G__28374_28710)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__28365_28714 + G__28367_28716) * G__28369_28718));

(self__.buf[(1)] = ((G__28366_28715 + G__28368_28717) * G__28370_28719));

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
var G__28375 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28376 = v.buf;
return (((G__28375[(0)]) * (G__28376[(1)])) - ((G__28375[(1)]) * (G__28376[(0)])));
} else {
return (((G__28375[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__28375[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
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
var G__28390 = self__.buf;
var G__28392 = (G__28390[(0)]);
var G__28393 = (G__28390[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28391 = v.buf;
var G__28394 = (G__28391[(0)]);
var G__28395 = (G__28391[(1)]);
var d = (((G__28392 * G__28394) + (G__28393 * G__28395)) * 2.0);
(b[(0)] = ((G__28394 * d) - G__28392));

(b[(1)] = ((G__28395 * d) - G__28393));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__28394 = cljs.core.nth.call(null,v,(0),0.0);
var G__28395 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__28392 * G__28394) + (G__28393 * G__28395)) * 2.0);
(b[(0)] = ((G__28394 * d) - G__28392));

(b[(1)] = ((G__28395 * d) - G__28393));

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
var G__28396 = self__.buf;
var G__28398 = (G__28396[(0)]);
var G__28399 = (G__28396[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28397 = v.buf;
var G__28400 = (G__28397[(0)]);
var G__28401 = (G__28397[(1)]);
var dx = (G__28398 - G__28400);
var dy = (G__28399 - G__28401);
return ((dx * dx) + (dy * dy));
} else {
var G__28400 = cljs.core.nth.call(null,v,(0),0.0);
var G__28401 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__28398 - G__28400);
var dy = (G__28399 - G__28401);
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
var G__28402 = self__.buf;
var G__28403 = (G__28402[(0)]);
var G__28404 = (G__28402[(1)]);
(b[(0)] = ((G__28403 * c) - (G__28404 * s)));

(b[(1)] = ((G__28403 * s) + (G__28404 * c)));

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
var dest__24152__auto__ = (new Float32Array((2)));
var G__28405_28720 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28406_28721 = v.buf;
(dest__24152__auto__[(0)] = ((G__28405_28720[(0)]) * (G__28406_28721[(0)])));

(dest__24152__auto__[(1)] = ((G__28405_28720[(1)]) * (G__28406_28721[(1)])));
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = ((G__28405_28720[(0)]) * v));

(dest__24152__auto__[(1)] = ((G__28405_28720[(1)]) * v));
} else {
(dest__24152__auto__[(0)] = ((G__28405_28720[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__24152__auto__[(1)] = ((G__28405_28720[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__20022__auto__ = self__._hash;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
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
var G__28407 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28408 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28407[(0)]),(G__28408[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28407[(1)]),(G__28408[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__28407[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__28407[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
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
var G__28409 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28410 = v.buf;
return (((G__28409[(0)]) * (G__28410[(0)])) + ((G__28409[(1)]) * (G__28410[(1)])));
} else {
return (((G__28409[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__28409[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
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
var dest__24152__auto__ = (new Float32Array((2)));
var G__28411_28722 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28412_28723 = v.buf;
(dest__24152__auto__[(0)] = ((G__28411_28722[(0)]) + (G__28412_28723[(0)])));

(dest__24152__auto__[(1)] = ((G__28411_28722[(1)]) + (G__28412_28723[(1)])));
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = ((G__28411_28722[(0)]) + v));

(dest__24152__auto__[(1)] = ((G__28411_28722[(1)]) + v));
} else {
(dest__24152__auto__[(0)] = ((G__28411_28722[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__24152__auto__[(1)] = ((G__28411_28722[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
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
var G__28413_28724 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28414_28725 = v.buf;
(b[(0)] = (((G__28413_28724[(0)]) + (G__28414_28725[(0)])) * 0.5));

(b[(1)] = (((G__28413_28724[(1)]) + (G__28414_28725[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__28413_28724[(0)]) + v) * 0.5));

(b[(1)] = (((G__28413_28724[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__28413_28724[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__28413_28724[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28424_28726 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28425_28727 = (t instanceof thi.ng.geom.vector.Vec2);
var G__28426_28728 = ((!(G__28424_28726))?typeof v === 'number':null);
var G__28427_28729 = ((!(G__28425_28727))?typeof t === 'number':null);
var G__28415_28730 = self__.buf;
var G__28416_28731 = ((G__28424_28726)?v.buf:null);
var G__28417_28732 = ((G__28425_28727)?t.buf:null);
var G__28418_28733 = (G__28415_28730[(0)]);
var G__28419_28734 = (G__28415_28730[(1)]);
var G__28420_28735 = ((G__28424_28726)?(G__28416_28731[(0)]):(cljs.core.truth_(G__28426_28728)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28421_28736 = ((G__28424_28726)?(G__28416_28731[(1)]):(cljs.core.truth_(G__28426_28728)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28422_28737 = ((G__28425_28727)?(G__28417_28732[(0)]):(cljs.core.truth_(G__28427_28729)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__28423_28738 = ((G__28425_28727)?(G__28417_28732[(1)]):(cljs.core.truth_(G__28427_28729)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = (((G__28420_28735 - G__28418_28733) * G__28422_28737) + G__28418_28733));

(b[(1)] = (((G__28421_28736 - G__28419_28734) * G__28423_28738) + G__28419_28734));

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
var G__28437_28739 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28438_28740 = (c instanceof thi.ng.geom.vector.Vec2);
var G__28439_28741 = ((!(G__28437_28739))?typeof b === 'number':null);
var G__28440_28742 = ((!(G__28438_28740))?typeof c === 'number':null);
var G__28428_28743 = self__.buf;
var G__28429_28744 = ((G__28437_28739)?b.buf:null);
var G__28430_28745 = ((G__28438_28740)?c.buf:null);
var G__28431_28746 = (G__28428_28743[(0)]);
var G__28432_28747 = (G__28428_28743[(1)]);
var G__28433_28748 = ((G__28437_28739)?(G__28429_28744[(0)]):(cljs.core.truth_(G__28439_28741)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28434_28749 = ((G__28437_28739)?(G__28429_28744[(1)]):(cljs.core.truth_(G__28439_28741)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28435_28750 = ((G__28438_28740)?(G__28430_28745[(0)]):(cljs.core.truth_(G__28440_28742)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__28436_28751 = ((G__28438_28740)?(G__28430_28745[(1)]):(cljs.core.truth_(G__28440_28742)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_28752 = (((G__28433_28748 - G__28431_28746) * u) + G__28431_28746);
var y1_28753 = (((G__28434_28749 - G__28432_28747) * u) + G__28432_28747);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__28435_28750) * u) + G__28435_28750) - x1_28752) * v) + x1_28752));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__28436_28751) * u) + G__28436_28751) - y1_28753) * v) + y1_28753));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28450_28754 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28451_28755 = (t instanceof thi.ng.geom.vector.Vec2);
var G__28452_28756 = ((!(G__28450_28754))?typeof v === 'number':null);
var G__28453_28757 = ((!(G__28451_28755))?typeof t === 'number':null);
var G__28441_28758 = self__.buf;
var G__28442_28759 = ((G__28450_28754)?v.buf:null);
var G__28443_28760 = ((G__28451_28755)?t.buf:null);
var G__28444_28761 = (G__28441_28758[(0)]);
var G__28445_28762 = (G__28441_28758[(1)]);
var G__28446_28763 = ((G__28450_28754)?(G__28442_28759[(0)]):(cljs.core.truth_(G__28452_28756)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28447_28764 = ((G__28450_28754)?(G__28442_28759[(1)]):(cljs.core.truth_(G__28452_28756)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28448_28765 = ((G__28451_28755)?(G__28443_28760[(0)]):(cljs.core.truth_(G__28453_28757)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__28449_28766 = ((G__28451_28755)?(G__28443_28760[(1)]):(cljs.core.truth_(G__28453_28757)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = f.call(null,G__28444_28761,G__28446_28763,G__28448_28765));

(b[(1)] = f.call(null,G__28445_28762,G__28447_28764,G__28449_28766));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28454_28767 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__28455_28768 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__28455_28768[(0)]),(G__28454_28767[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__28455_28768[(1)]),(G__28454_28767[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__28454_28767[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__28454_28767[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__28454_28767[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__28454_28767[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__28465_28769 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__28466_28770 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__28467_28771 = ((!(G__28465_28769))?typeof e1 === 'number':null);
var G__28468_28772 = ((!(G__28466_28770))?typeof e2 === 'number':null);
var G__28456_28773 = self__.buf;
var G__28457_28774 = ((G__28465_28769)?e1.buf:null);
var G__28458_28775 = ((G__28466_28770)?e2.buf:null);
var G__28459_28776 = (G__28456_28773[(0)]);
var G__28460_28777 = (G__28456_28773[(1)]);
var G__28461_28778 = ((G__28465_28769)?(G__28457_28774[(0)]):(cljs.core.truth_(G__28467_28771)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__28462_28779 = ((G__28465_28769)?(G__28457_28774[(1)]):(cljs.core.truth_(G__28467_28771)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__28463_28780 = ((G__28466_28770)?(G__28458_28775[(0)]):(cljs.core.truth_(G__28468_28772)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__28464_28781 = ((G__28466_28770)?(G__28458_28775[(1)]):(cljs.core.truth_(G__28468_28772)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__28461_28778,G__28463_28780,G__28459_28776));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__28461_28778,G__28464_28781,G__28460_28777));

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
var dest__24152__auto__ = (new Float32Array((2)));
var G__28469_28782 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28470_28783 = v.buf;
(dest__24152__auto__[(0)] = (function (){var a__23725__auto__ = (G__28469_28782[(0)]);
var b__23726__auto__ = (G__28470_28783[(0)]);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24152__auto__[(1)] = (function (){var a__23725__auto__ = (G__28469_28782[(1)]);
var b__23726__auto__ = (G__28470_28783[(1)]);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = (function (){var a__23725__auto__ = (G__28469_28782[(0)]);
var b__23726__auto__ = v;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24152__auto__[(1)] = (function (){var a__23725__auto__ = (G__28469_28782[(1)]);
var b__23726__auto__ = v;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());
} else {
(dest__24152__auto__[(0)] = (function (){var a__23725__auto__ = (G__28469_28782[(0)]);
var b__23726__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24152__auto__[(1)] = (function (){var a__23725__auto__ = (G__28469_28782[(1)]);
var b__23726__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__24163__auto__ = (new Float32Array((2)));
var G__28480_28784 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28481_28785 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__28482_28786 = ((!(G__28480_28784))?typeof v === 'number':null);
var G__28483_28787 = ((!(G__28481_28785))?typeof v2 === 'number':null);
var G__28471_28788 = self__.buf;
var G__28472_28789 = ((G__28480_28784)?v.buf:null);
var G__28473_28790 = ((G__28481_28785)?v2.buf:null);
var G__28474_28791 = (G__28471_28788[(0)]);
var G__28475_28792 = (G__28471_28788[(1)]);
var G__28476_28793 = ((G__28480_28784)?(G__28472_28789[(0)]):(cljs.core.truth_(G__28482_28786)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28477_28794 = ((G__28480_28784)?(G__28472_28789[(1)]):(cljs.core.truth_(G__28482_28786)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28478_28795 = ((G__28481_28785)?(G__28473_28790[(0)]):(cljs.core.truth_(G__28483_28787)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28479_28796 = ((G__28481_28785)?(G__28473_28790[(1)]):(cljs.core.truth_(G__28483_28787)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__24163__auto__[(0)] = (function (){var a__23725__auto__ = (function (){var a__23725__auto__ = G__28474_28791;
var b__23726__auto__ = G__28476_28793;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})();
var b__23726__auto__ = G__28478_28795;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24163__auto__[(1)] = (function (){var a__23725__auto__ = (function (){var a__23725__auto__ = G__28475_28792;
var b__23726__auto__ = G__28477_28794;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})();
var b__23726__auto__ = G__28479_28796;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__24163__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24152__auto__ = (new Float32Array((2)));
var G__28484_28797 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28485_28798 = v.buf;
(dest__24152__auto__[(0)] = (function (){var a__23732__auto__ = (G__28484_28797[(0)]);
var b__23733__auto__ = (G__28485_28798[(0)]);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24152__auto__[(1)] = (function (){var a__23732__auto__ = (G__28484_28797[(1)]);
var b__23733__auto__ = (G__28485_28798[(1)]);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = (function (){var a__23732__auto__ = (G__28484_28797[(0)]);
var b__23733__auto__ = v;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24152__auto__[(1)] = (function (){var a__23732__auto__ = (G__28484_28797[(1)]);
var b__23733__auto__ = v;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());
} else {
(dest__24152__auto__[(0)] = (function (){var a__23732__auto__ = (G__28484_28797[(0)]);
var b__23733__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24152__auto__[(1)] = (function (){var a__23732__auto__ = (G__28484_28797[(1)]);
var b__23733__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__24163__auto__ = (new Float32Array((2)));
var G__28495_28799 = (v instanceof thi.ng.geom.vector.Vec2);
var G__28496_28800 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__28497_28801 = ((!(G__28495_28799))?typeof v === 'number':null);
var G__28498_28802 = ((!(G__28496_28800))?typeof v2 === 'number':null);
var G__28486_28803 = self__.buf;
var G__28487_28804 = ((G__28495_28799)?v.buf:null);
var G__28488_28805 = ((G__28496_28800)?v2.buf:null);
var G__28489_28806 = (G__28486_28803[(0)]);
var G__28490_28807 = (G__28486_28803[(1)]);
var G__28491_28808 = ((G__28495_28799)?(G__28487_28804[(0)]):(cljs.core.truth_(G__28497_28801)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__28492_28809 = ((G__28495_28799)?(G__28487_28804[(1)]):(cljs.core.truth_(G__28497_28801)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__28493_28810 = ((G__28496_28800)?(G__28488_28805[(0)]):(cljs.core.truth_(G__28498_28802)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28494_28811 = ((G__28496_28800)?(G__28488_28805[(1)]):(cljs.core.truth_(G__28498_28802)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__24163__auto__[(0)] = (function (){var a__23732__auto__ = (function (){var a__23732__auto__ = G__28489_28806;
var b__23733__auto__ = G__28491_28808;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})();
var b__23733__auto__ = G__28493_28810;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24163__auto__[(1)] = (function (){var a__23732__auto__ = (function (){var a__23732__auto__ = G__28490_28807;
var b__23733__auto__ = G__28492_28809;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})();
var b__23733__auto__ = G__28494_28811;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__24163__auto__,null,self__._meta));
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
var G__28812 = null;
var G__28812__2 = (function (self__,k){
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
var G__28812__3 = (function (self__,k,nf){
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
G__28812 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__28812__2.call(this,self__,k);
case 3:
return G__28812__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28812.cljs$core$IFn$_invoke$arity$2 = G__28812__2;
G__28812.cljs$core$IFn$_invoke$arity$3 = G__28812__3;
return G__28812;
})()
;

thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args28270){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28270)));
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
var G__28499 = self__.buf;
var G__28500 = (G__28499[(0)]);
var G__28501 = (G__28499[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__28500 * Math.cos(G__28501)));

(b[(1)] = (G__28500 * Math.sin(G__28501)));

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
var G__28502 = self__.buf;
var G__28503 = (G__28502[(0)]);
var G__28504 = (G__28502[(1)]);
var l = Math.sqrt(((G__28503 * G__28503) + (G__28504 * G__28504)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__28503 / l));

(b[(1)] = (G__28504 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__28505 = self__.buf;
var G__28506 = (G__28505[(0)]);
var G__28507 = (G__28505[(1)]);
var l = Math.sqrt(((G__28506 * G__28506) + (G__28507 * G__28507)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__28506 * l__$1));

(b[(1)] = (G__28507 * l__$1));

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
var G__28508 = self__.buf;
var G__28509 = (G__28508[(0)]);
var G__28510 = (G__28508[(1)]);
return Math.sqrt(((G__28509 * G__28509) + (G__28510 * G__28510)));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__28511 = self__.buf;
var G__28512 = (G__28511[(0)]);
var G__28513 = (G__28511[(1)]);
return ((G__28512 * G__28512) + (G__28513 * G__28513));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24163__auto__ = (new Float32Array((2)));
var G__28523_28813 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28524_28814 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28525_28815 = ((!(G__28523_28813))?typeof a === 'number':null);
var G__28526_28816 = ((!(G__28524_28814))?typeof b === 'number':null);
var G__28514_28817 = self__.buf;
var G__28515_28818 = ((G__28523_28813)?a.buf:null);
var G__28516_28819 = ((G__28524_28814)?b.buf:null);
var G__28517_28820 = (G__28514_28817[(0)]);
var G__28518_28821 = (G__28514_28817[(1)]);
var G__28519_28822 = ((G__28523_28813)?(G__28515_28818[(0)]):(cljs.core.truth_(G__28525_28815)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28520_28823 = ((G__28523_28813)?(G__28515_28818[(1)]):(cljs.core.truth_(G__28525_28815)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28521_28824 = ((G__28524_28814)?(G__28516_28819[(0)]):(cljs.core.truth_(G__28526_28816)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28522_28825 = ((G__28524_28814)?(G__28516_28819[(1)]):(cljs.core.truth_(G__28526_28816)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__24163__auto__[(0)] = ((G__28517_28820 * G__28519_28822) - G__28521_28824));

(dest__24163__auto__[(1)] = ((G__28518_28821 * G__28520_28823) - G__28522_28825));

return (new thi.ng.geom.vector.Vec2(dest__24163__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24152__auto__ = (new Float32Array((2)));
var G__28527_28826 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28528_28827 = v.buf;
(dest__24152__auto__[(0)] = ((G__28527_28826[(0)]) * (G__28528_28827[(0)])));

(dest__24152__auto__[(1)] = ((G__28527_28826[(1)]) * (G__28528_28827[(1)])));
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = ((G__28527_28826[(0)]) * v));

(dest__24152__auto__[(1)] = ((G__28527_28826[(1)]) * v));
} else {
(dest__24152__auto__[(0)] = ((G__28527_28826[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__24152__auto__[(1)] = ((G__28527_28826[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28529 = self__.buf;
var G__28532 = (new Float32Array((2)));
var G__28533 = (G__28529[(0)]);
var G__28534 = (G__28529[(1)]);
var G__28539 = typeof v1 === 'number';
var G__28540 = typeof v2 === 'number';
if(((G__28539)?G__28540:false)){
(G__28532[(0)] = (G__28533 * v1));

(G__28532[(1)] = (G__28534 * v2));
} else {
var G__28541_28828 = ((!(G__28539))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28542_28829 = ((!(G__28540))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28530_28830 = (cljs.core.truth_(G__28541_28828)?v1.buf:null);
var G__28531_28831 = (cljs.core.truth_(G__28542_28829)?v2.buf:null);
var G__28535_28832 = (cljs.core.truth_(G__28541_28828)?(G__28530_28830[(0)]):((G__28539)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__28536_28833 = (cljs.core.truth_(G__28541_28828)?(G__28530_28830[(1)]):((G__28539)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__28537_28834 = (cljs.core.truth_(G__28542_28829)?(G__28531_28831[(0)]):((G__28540)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__28538_28835 = (cljs.core.truth_(G__28542_28829)?(G__28531_28831[(1)]):((G__28540)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__28532[(0)] = ((G__28533 * G__28535_28832) * G__28537_28834));

(G__28532[(1)] = ((G__28534 * G__28536_28833) * G__28538_28835));
}

return (new thi.ng.geom.vector.Vec2(G__28532,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24122__auto__ = (new Float32Array((2)));
var G__28543_28836 = self__.buf;
(dest__24122__auto__[(0)] = (- (G__28543_28836[(0)])));

(dest__24122__auto__[(1)] = (- (G__28543_28836[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__24122__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24152__auto__ = (new Float32Array((2)));
var G__28544_28837 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28545_28838 = v.buf;
(dest__24152__auto__[(0)] = ((G__28544_28837[(0)]) - (G__28545_28838[(0)])));

(dest__24152__auto__[(1)] = ((G__28544_28837[(1)]) - (G__28545_28838[(1)])));
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = ((G__28544_28837[(0)]) - v));

(dest__24152__auto__[(1)] = ((G__28544_28837[(1)]) - v));
} else {
(dest__24152__auto__[(0)] = ((G__28544_28837[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__24152__auto__[(1)] = ((G__28544_28837[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28546 = self__.buf;
var G__28549 = (new Float32Array((2)));
var G__28550 = (G__28546[(0)]);
var G__28551 = (G__28546[(1)]);
var G__28556 = typeof v1 === 'number';
var G__28557 = typeof v2 === 'number';
if(((G__28556)?G__28557:false)){
(G__28549[(0)] = (G__28550 - v1));

(G__28549[(1)] = (G__28551 - v2));
} else {
var G__28558_28839 = ((!(G__28556))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28559_28840 = ((!(G__28557))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28547_28841 = (cljs.core.truth_(G__28558_28839)?v1.buf:null);
var G__28548_28842 = (cljs.core.truth_(G__28559_28840)?v2.buf:null);
var G__28552_28843 = (cljs.core.truth_(G__28558_28839)?(G__28547_28841[(0)]):((G__28556)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28553_28844 = (cljs.core.truth_(G__28558_28839)?(G__28547_28841[(1)]):((G__28556)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28554_28845 = (cljs.core.truth_(G__28559_28840)?(G__28548_28842[(0)]):((G__28557)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28555_28846 = (cljs.core.truth_(G__28559_28840)?(G__28548_28842[(1)]):((G__28557)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__28549[(0)] = ((G__28550 - G__28552_28843) - G__28554_28845));

(G__28549[(1)] = ((G__28551 - G__28553_28844) - G__28555_28846));
}

return (new thi.ng.geom.vector.Vec2(G__28549,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24163__auto__ = (new Float32Array((2)));
var G__28569_28847 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28570_28848 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28571_28849 = ((!(G__28569_28847))?typeof a === 'number':null);
var G__28572_28850 = ((!(G__28570_28848))?typeof b === 'number':null);
var G__28560_28851 = self__.buf;
var G__28561_28852 = ((G__28569_28847)?a.buf:null);
var G__28562_28853 = ((G__28570_28848)?b.buf:null);
var G__28563_28854 = (G__28560_28851[(0)]);
var G__28564_28855 = (G__28560_28851[(1)]);
var G__28565_28856 = ((G__28569_28847)?(G__28561_28852[(0)]):(cljs.core.truth_(G__28571_28849)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28566_28857 = ((G__28569_28847)?(G__28561_28852[(1)]):(cljs.core.truth_(G__28571_28849)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28567_28858 = ((G__28570_28848)?(G__28562_28853[(0)]):(cljs.core.truth_(G__28572_28850)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28568_28859 = ((G__28570_28848)?(G__28562_28853[(1)]):(cljs.core.truth_(G__28572_28850)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__24163__auto__[(0)] = ((G__28563_28854 * G__28565_28856) + G__28567_28858));

(dest__24163__auto__[(1)] = ((G__28564_28855 * G__28566_28857) + G__28568_28859));

return (new thi.ng.geom.vector.Vec2(dest__24163__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24163__auto__ = (new Float32Array((2)));
var G__28582_28860 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28583_28861 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28584_28862 = ((!(G__28582_28860))?typeof a === 'number':null);
var G__28585_28863 = ((!(G__28583_28861))?typeof b === 'number':null);
var G__28573_28864 = self__.buf;
var G__28574_28865 = ((G__28582_28860)?a.buf:null);
var G__28575_28866 = ((G__28583_28861)?b.buf:null);
var G__28576_28867 = (G__28573_28864[(0)]);
var G__28577_28868 = (G__28573_28864[(1)]);
var G__28578_28869 = ((G__28582_28860)?(G__28574_28865[(0)]):(cljs.core.truth_(G__28584_28862)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28579_28870 = ((G__28582_28860)?(G__28574_28865[(1)]):(cljs.core.truth_(G__28584_28862)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28580_28871 = ((G__28583_28861)?(G__28575_28866[(0)]):(cljs.core.truth_(G__28585_28863)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28581_28872 = ((G__28583_28861)?(G__28575_28866[(1)]):(cljs.core.truth_(G__28585_28863)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__24163__auto__[(0)] = ((G__28576_28867 + G__28578_28869) * G__28580_28871));

(dest__24163__auto__[(1)] = ((G__28577_28868 + G__28579_28870) * G__28581_28872));

return (new thi.ng.geom.vector.Vec2(dest__24163__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24122__auto__ = (new Float32Array((2)));
var G__28586_28873 = self__.buf;
(dest__24122__auto__[(0)] = ((1) / (G__28586_28873[(0)])));

(dest__24122__auto__[(1)] = ((1) / (G__28586_28873[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__24122__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24152__auto__ = (new Float32Array((2)));
var G__28587_28874 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28588_28875 = v.buf;
(dest__24152__auto__[(0)] = ((G__28587_28874[(0)]) / (G__28588_28875[(0)])));

(dest__24152__auto__[(1)] = ((G__28587_28874[(1)]) / (G__28588_28875[(1)])));
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = ((G__28587_28874[(0)]) / v));

(dest__24152__auto__[(1)] = ((G__28587_28874[(1)]) / v));
} else {
(dest__24152__auto__[(0)] = ((G__28587_28874[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__24152__auto__[(1)] = ((G__28587_28874[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28589 = self__.buf;
var G__28592 = (new Float32Array((2)));
var G__28593 = (G__28589[(0)]);
var G__28594 = (G__28589[(1)]);
var G__28599 = typeof v1 === 'number';
var G__28600 = typeof v2 === 'number';
if(((G__28599)?G__28600:false)){
(G__28592[(0)] = (G__28593 / v1));

(G__28592[(1)] = (G__28594 / v2));
} else {
var G__28601_28876 = ((!(G__28599))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28602_28877 = ((!(G__28600))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28590_28878 = (cljs.core.truth_(G__28601_28876)?v1.buf:null);
var G__28591_28879 = (cljs.core.truth_(G__28602_28877)?v2.buf:null);
var G__28595_28880 = (cljs.core.truth_(G__28601_28876)?(G__28590_28878[(0)]):((G__28599)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28596_28881 = (cljs.core.truth_(G__28601_28876)?(G__28590_28878[(1)]):((G__28599)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28597_28882 = (cljs.core.truth_(G__28602_28877)?(G__28591_28879[(0)]):((G__28600)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28598_28883 = (cljs.core.truth_(G__28602_28877)?(G__28591_28879[(1)]):((G__28600)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__28592[(0)] = ((G__28593 / G__28595_28880) / G__28597_28882));

(G__28592[(1)] = ((G__28594 / G__28596_28881) / G__28598_28883));
}

return (new thi.ng.geom.vector.Vec2(G__28592,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24152__auto__ = (new Float32Array((2)));
var G__28603_28884 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__28604_28885 = v.buf;
(dest__24152__auto__[(0)] = ((G__28603_28884[(0)]) + (G__28604_28885[(0)])));

(dest__24152__auto__[(1)] = ((G__28603_28884[(1)]) + (G__28604_28885[(1)])));
} else {
if(typeof v === 'number'){
(dest__24152__auto__[(0)] = ((G__28603_28884[(0)]) + v));

(dest__24152__auto__[(1)] = ((G__28603_28884[(1)]) + v));
} else {
(dest__24152__auto__[(0)] = ((G__28603_28884[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__24152__auto__[(1)] = ((G__28603_28884[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__24152__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28605 = self__.buf;
var G__28608 = (new Float32Array((2)));
var G__28609 = (G__28605[(0)]);
var G__28610 = (G__28605[(1)]);
var G__28615 = typeof v1 === 'number';
var G__28616 = typeof v2 === 'number';
if(((G__28615)?G__28616:false)){
(G__28608[(0)] = (G__28609 + v1));

(G__28608[(1)] = (G__28610 + v2));
} else {
var G__28617_28886 = ((!(G__28615))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__28618_28887 = ((!(G__28616))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__28606_28888 = (cljs.core.truth_(G__28617_28886)?v1.buf:null);
var G__28607_28889 = (cljs.core.truth_(G__28618_28887)?v2.buf:null);
var G__28611_28890 = (cljs.core.truth_(G__28617_28886)?(G__28606_28888[(0)]):((G__28615)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28612_28891 = (cljs.core.truth_(G__28617_28886)?(G__28606_28888[(1)]):((G__28615)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28613_28892 = (cljs.core.truth_(G__28618_28887)?(G__28607_28889[(0)]):((G__28616)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28614_28893 = (cljs.core.truth_(G__28618_28887)?(G__28607_28889[(1)]):((G__28616)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__28608[(0)] = ((G__28609 + G__28611_28890) + G__28613_28892));

(G__28608[(1)] = ((G__28610 + G__28612_28891) + G__28614_28893));
}

return (new thi.ng.geom.vector.Vec2(G__28608,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24122__auto__ = (new Float32Array((2)));
var G__28619_28894 = self__.buf;
(dest__24122__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__28619_28894[(0)])));

(dest__24122__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__28619_28894[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__24122__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24163__auto__ = (new Float32Array((2)));
var G__28386_28895 = (a instanceof thi.ng.geom.vector.Vec2);
var G__28387_28896 = (b instanceof thi.ng.geom.vector.Vec2);
var G__28388_28897 = ((!(G__28386_28895))?typeof a === 'number':null);
var G__28389_28898 = ((!(G__28387_28896))?typeof b === 'number':null);
var G__28377_28899 = self__.buf;
var G__28378_28900 = ((G__28386_28895)?a.buf:null);
var G__28379_28901 = ((G__28387_28896)?b.buf:null);
var G__28380_28902 = (G__28377_28899[(0)]);
var G__28381_28903 = (G__28377_28899[(1)]);
var G__28382_28904 = ((G__28386_28895)?(G__28378_28900[(0)]):(cljs.core.truth_(G__28388_28897)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28383_28905 = ((G__28386_28895)?(G__28378_28900[(1)]):(cljs.core.truth_(G__28388_28897)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28384_28906 = ((G__28387_28896)?(G__28379_28901[(0)]):(cljs.core.truth_(G__28389_28898)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28385_28907 = ((G__28387_28896)?(G__28379_28901[(1)]):(cljs.core.truth_(G__28389_28898)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__24163__auto__[(0)] = ((G__28380_28902 - G__28382_28904) * G__28384_28906));

(dest__24163__auto__[(1)] = ((G__28381_28903 - G__28383_28905) * G__28385_28907));

return (new thi.ng.geom.vector.Vec2(dest__24163__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2";

thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"thi.ng.geom.vector/Vec2");
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
var G__28909_29360 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28910_29361 = v.buf;
(self__.buf[(0)] = ((G__28909_29360[(0)]) - (G__28910_29361[(0)])));

(self__.buf[(1)] = ((G__28909_29360[(1)]) - (G__28910_29361[(1)])));

(self__.buf[(2)] = ((G__28909_29360[(2)]) - (G__28910_29361[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28909_29360[(0)]) - v));

(self__.buf[(1)] = ((G__28909_29360[(1)]) - v));

(self__.buf[(2)] = ((G__28909_29360[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28909_29360[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28909_29360[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28909_29360[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28923_29362 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__28924_29363 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28925_29364 = ((!(G__28923_29362))?typeof v1 === 'number':null);
var G__28926_29365 = ((!(G__28924_29363))?typeof v2 === 'number':null);
var G__28911_29366 = self__.buf;
var G__28912_29367 = ((G__28923_29362)?v1.buf:null);
var G__28913_29368 = ((G__28924_29363)?v2.buf:null);
var G__28914_29369 = (G__28911_29366[(0)]);
var G__28915_29370 = (G__28911_29366[(1)]);
var G__28916_29371 = (G__28911_29366[(2)]);
var G__28917_29372 = ((G__28923_29362)?(G__28912_29367[(0)]):(cljs.core.truth_(G__28925_29364)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28918_29373 = ((G__28923_29362)?(G__28912_29367[(1)]):(cljs.core.truth_(G__28925_29364)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28919_29374 = ((G__28923_29362)?(G__28912_29367[(2)]):(cljs.core.truth_(G__28925_29364)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28920_29375 = ((G__28924_29363)?(G__28913_29368[(0)]):(cljs.core.truth_(G__28926_29365)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28921_29376 = ((G__28924_29363)?(G__28913_29368[(1)]):(cljs.core.truth_(G__28926_29365)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28922_29377 = ((G__28924_29363)?(G__28913_29368[(2)]):(cljs.core.truth_(G__28926_29365)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28914_29369 - G__28917_29372) - G__28920_29375));

(self__.buf[(1)] = ((G__28915_29370 - G__28918_29373) - G__28921_29376));

(self__.buf[(2)] = ((G__28916_29371 - G__28919_29374) - G__28922_29377));

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
var G__28927_29378 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28928_29379 = v.buf;
(self__.buf[(0)] = ((G__28927_29378[(0)]) * (G__28928_29379[(0)])));

(self__.buf[(1)] = ((G__28927_29378[(1)]) * (G__28928_29379[(1)])));

(self__.buf[(2)] = ((G__28927_29378[(2)]) * (G__28928_29379[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28927_29378[(0)]) * v));

(self__.buf[(1)] = ((G__28927_29378[(1)]) * v));

(self__.buf[(2)] = ((G__28927_29378[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28927_29378[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28927_29378[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28927_29378[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__28941_29380 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__28942_29381 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__28943_29382 = ((!(G__28941_29380))?typeof v1 === 'number':null);
var G__28944_29383 = ((!(G__28942_29381))?typeof v2 === 'number':null);
var G__28929_29384 = self__.buf;
var G__28930_29385 = ((G__28941_29380)?v1.buf:null);
var G__28931_29386 = ((G__28942_29381)?v2.buf:null);
var G__28932_29387 = (G__28929_29384[(0)]);
var G__28933_29388 = (G__28929_29384[(1)]);
var G__28934_29389 = (G__28929_29384[(2)]);
var G__28935_29390 = ((G__28941_29380)?(G__28930_29385[(0)]):(cljs.core.truth_(G__28943_29382)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__28936_29391 = ((G__28941_29380)?(G__28930_29385[(1)]):(cljs.core.truth_(G__28943_29382)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__28937_29392 = ((G__28941_29380)?(G__28930_29385[(2)]):(cljs.core.truth_(G__28943_29382)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__28938_29393 = ((G__28942_29381)?(G__28931_29386[(0)]):(cljs.core.truth_(G__28944_29383)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__28939_29394 = ((G__28942_29381)?(G__28931_29386[(1)]):(cljs.core.truth_(G__28944_29383)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__28940_29395 = ((G__28942_29381)?(G__28931_29386[(2)]):(cljs.core.truth_(G__28944_29383)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28932_29387 * G__28935_29390) * G__28938_29393));

(self__.buf[(1)] = ((G__28933_29388 * G__28936_29391) * G__28939_29394));

(self__.buf[(2)] = ((G__28934_29389 * G__28937_29392) * G__28940_29395));

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
var G__28957_29396 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28958_29397 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28959_29398 = ((!(G__28957_29396))?typeof a === 'number':null);
var G__28960_29399 = ((!(G__28958_29397))?typeof b === 'number':null);
var G__28945_29400 = self__.buf;
var G__28946_29401 = ((G__28957_29396)?a.buf:null);
var G__28947_29402 = ((G__28958_29397)?b.buf:null);
var G__28948_29403 = (G__28945_29400[(0)]);
var G__28949_29404 = (G__28945_29400[(1)]);
var G__28950_29405 = (G__28945_29400[(2)]);
var G__28951_29406 = ((G__28957_29396)?(G__28946_29401[(0)]):(cljs.core.truth_(G__28959_29398)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__28952_29407 = ((G__28957_29396)?(G__28946_29401[(1)]):(cljs.core.truth_(G__28959_29398)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__28953_29408 = ((G__28957_29396)?(G__28946_29401[(2)]):(cljs.core.truth_(G__28959_29398)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__28954_29409 = ((G__28958_29397)?(G__28947_29402[(0)]):(cljs.core.truth_(G__28960_29399)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__28955_29410 = ((G__28958_29397)?(G__28947_29402[(1)]):(cljs.core.truth_(G__28960_29399)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__28956_29411 = ((G__28958_29397)?(G__28947_29402[(2)]):(cljs.core.truth_(G__28960_29399)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__28948_29403 - G__28951_29406) * G__28954_29409));

(self__.buf[(1)] = ((G__28949_29404 - G__28952_29407) * G__28955_29410));

(self__.buf[(2)] = ((G__28950_29405 - G__28953_29408) * G__28956_29411));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__28973_29412 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28974_29413 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28975_29414 = ((!(G__28973_29412))?typeof a === 'number':null);
var G__28976_29415 = ((!(G__28974_29413))?typeof b === 'number':null);
var G__28961_29416 = self__.buf;
var G__28962_29417 = ((G__28973_29412)?a.buf:null);
var G__28963_29418 = ((G__28974_29413)?b.buf:null);
var G__28964_29419 = (G__28961_29416[(0)]);
var G__28965_29420 = (G__28961_29416[(1)]);
var G__28966_29421 = (G__28961_29416[(2)]);
var G__28967_29422 = ((G__28973_29412)?(G__28962_29417[(0)]):(cljs.core.truth_(G__28975_29414)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28968_29423 = ((G__28973_29412)?(G__28962_29417[(1)]):(cljs.core.truth_(G__28975_29414)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28969_29424 = ((G__28973_29412)?(G__28962_29417[(2)]):(cljs.core.truth_(G__28975_29414)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28970_29425 = ((G__28974_29413)?(G__28963_29418[(0)]):(cljs.core.truth_(G__28976_29415)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28971_29426 = ((G__28974_29413)?(G__28963_29418[(1)]):(cljs.core.truth_(G__28976_29415)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28972_29427 = ((G__28974_29413)?(G__28963_29418[(2)]):(cljs.core.truth_(G__28976_29415)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__28964_29419 * G__28967_29422) - G__28970_29425));

(self__.buf[(1)] = ((G__28965_29420 * G__28968_29423) - G__28971_29426));

(self__.buf[(2)] = ((G__28966_29421 * G__28969_29424) - G__28972_29427));

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
var G__28989_29428 = (a instanceof thi.ng.geom.vector.Vec3);
var G__28990_29429 = (b instanceof thi.ng.geom.vector.Vec3);
var G__28991_29430 = ((!(G__28989_29428))?typeof a === 'number':null);
var G__28992_29431 = ((!(G__28990_29429))?typeof b === 'number':null);
var G__28977_29432 = self__.buf;
var G__28978_29433 = ((G__28989_29428)?a.buf:null);
var G__28979_29434 = ((G__28990_29429)?b.buf:null);
var G__28980_29435 = (G__28977_29432[(0)]);
var G__28981_29436 = (G__28977_29432[(1)]);
var G__28982_29437 = (G__28977_29432[(2)]);
var G__28983_29438 = ((G__28989_29428)?(G__28978_29433[(0)]):(cljs.core.truth_(G__28991_29430)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__28984_29439 = ((G__28989_29428)?(G__28978_29433[(1)]):(cljs.core.truth_(G__28991_29430)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__28985_29440 = ((G__28989_29428)?(G__28978_29433[(2)]):(cljs.core.truth_(G__28991_29430)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__28986_29441 = ((G__28990_29429)?(G__28979_29434[(0)]):(cljs.core.truth_(G__28992_29431)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__28987_29442 = ((G__28990_29429)?(G__28979_29434[(1)]):(cljs.core.truth_(G__28992_29431)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__28988_29443 = ((G__28990_29429)?(G__28979_29434[(2)]):(cljs.core.truth_(G__28992_29431)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__28980_29435 * G__28983_29438) + G__28986_29441));

(self__.buf[(1)] = ((G__28981_29436 * G__28984_29439) + G__28987_29442));

(self__.buf[(2)] = ((G__28982_29437 * G__28985_29440) + G__28988_29443));

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
var G__28993_29444 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__28994_29445 = v.buf;
(self__.buf[(0)] = ((G__28993_29444[(0)]) / (G__28994_29445[(0)])));

(self__.buf[(1)] = ((G__28993_29444[(1)]) / (G__28994_29445[(1)])));

(self__.buf[(2)] = ((G__28993_29444[(2)]) / (G__28994_29445[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__28993_29444[(0)]) / v));

(self__.buf[(1)] = ((G__28993_29444[(1)]) / v));

(self__.buf[(2)] = ((G__28993_29444[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__28993_29444[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__28993_29444[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__28993_29444[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__29007_29446 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29008_29447 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29009_29448 = ((!(G__29007_29446))?typeof v1 === 'number':null);
var G__29010_29449 = ((!(G__29008_29447))?typeof v2 === 'number':null);
var G__28995_29450 = self__.buf;
var G__28996_29451 = ((G__29007_29446)?v1.buf:null);
var G__28997_29452 = ((G__29008_29447)?v2.buf:null);
var G__28998_29453 = (G__28995_29450[(0)]);
var G__28999_29454 = (G__28995_29450[(1)]);
var G__29000_29455 = (G__28995_29450[(2)]);
var G__29001_29456 = ((G__29007_29446)?(G__28996_29451[(0)]):(cljs.core.truth_(G__29009_29448)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29002_29457 = ((G__29007_29446)?(G__28996_29451[(1)]):(cljs.core.truth_(G__29009_29448)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29003_29458 = ((G__29007_29446)?(G__28996_29451[(2)]):(cljs.core.truth_(G__29009_29448)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29004_29459 = ((G__29008_29447)?(G__28997_29452[(0)]):(cljs.core.truth_(G__29010_29449)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29005_29460 = ((G__29008_29447)?(G__28997_29452[(1)]):(cljs.core.truth_(G__29010_29449)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29006_29461 = ((G__29008_29447)?(G__28997_29452[(2)]):(cljs.core.truth_(G__29010_29449)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__28998_29453 / G__29001_29456) / G__29004_29459));

(self__.buf[(1)] = ((G__28999_29454 / G__29002_29457) / G__29005_29460));

(self__.buf[(2)] = ((G__29000_29455 / G__29003_29458) / G__29006_29461));

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
var G__29011_29462 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29012_29463 = v.buf;
(self__.buf[(0)] = ((G__29011_29462[(0)]) + (G__29012_29463[(0)])));

(self__.buf[(1)] = ((G__29011_29462[(1)]) + (G__29012_29463[(1)])));

(self__.buf[(2)] = ((G__29011_29462[(2)]) + (G__29012_29463[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__29011_29462[(0)]) + v));

(self__.buf[(1)] = ((G__29011_29462[(1)]) + v));

(self__.buf[(2)] = ((G__29011_29462[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__29011_29462[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__29011_29462[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__29011_29462[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__29025_29464 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29026_29465 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29027_29466 = ((!(G__29025_29464))?typeof v1 === 'number':null);
var G__29028_29467 = ((!(G__29026_29465))?typeof v2 === 'number':null);
var G__29013_29468 = self__.buf;
var G__29014_29469 = ((G__29025_29464)?v1.buf:null);
var G__29015_29470 = ((G__29026_29465)?v2.buf:null);
var G__29016_29471 = (G__29013_29468[(0)]);
var G__29017_29472 = (G__29013_29468[(1)]);
var G__29018_29473 = (G__29013_29468[(2)]);
var G__29019_29474 = ((G__29025_29464)?(G__29014_29469[(0)]):(cljs.core.truth_(G__29027_29466)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29020_29475 = ((G__29025_29464)?(G__29014_29469[(1)]):(cljs.core.truth_(G__29027_29466)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29021_29476 = ((G__29025_29464)?(G__29014_29469[(2)]):(cljs.core.truth_(G__29027_29466)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29022_29477 = ((G__29026_29465)?(G__29015_29470[(0)]):(cljs.core.truth_(G__29028_29467)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29023_29478 = ((G__29026_29465)?(G__29015_29470[(1)]):(cljs.core.truth_(G__29028_29467)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29024_29479 = ((G__29026_29465)?(G__29015_29470[(2)]):(cljs.core.truth_(G__29028_29467)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__29016_29471 + G__29019_29474) + G__29022_29477));

(self__.buf[(1)] = ((G__29017_29472 + G__29020_29475) + G__29023_29478));

(self__.buf[(2)] = ((G__29018_29473 + G__29021_29476) + G__29024_29479));

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
var G__29041_29480 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29042_29481 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29043_29482 = ((!(G__29041_29480))?typeof a === 'number':null);
var G__29044_29483 = ((!(G__29042_29481))?typeof b === 'number':null);
var G__29029_29484 = self__.buf;
var G__29030_29485 = ((G__29041_29480)?a.buf:null);
var G__29031_29486 = ((G__29042_29481)?b.buf:null);
var G__29032_29487 = (G__29029_29484[(0)]);
var G__29033_29488 = (G__29029_29484[(1)]);
var G__29034_29489 = (G__29029_29484[(2)]);
var G__29035_29490 = ((G__29041_29480)?(G__29030_29485[(0)]):(cljs.core.truth_(G__29043_29482)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__29036_29491 = ((G__29041_29480)?(G__29030_29485[(1)]):(cljs.core.truth_(G__29043_29482)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__29037_29492 = ((G__29041_29480)?(G__29030_29485[(2)]):(cljs.core.truth_(G__29043_29482)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__29038_29493 = ((G__29042_29481)?(G__29031_29486[(0)]):(cljs.core.truth_(G__29044_29483)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__29039_29494 = ((G__29042_29481)?(G__29031_29486[(1)]):(cljs.core.truth_(G__29044_29483)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__29040_29495 = ((G__29042_29481)?(G__29031_29486[(2)]):(cljs.core.truth_(G__29044_29483)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__29032_29487 + G__29035_29490) * G__29038_29493));

(self__.buf[(1)] = ((G__29033_29488 + G__29036_29491) * G__29039_29494));

(self__.buf[(2)] = ((G__29034_29489 + G__29037_29492) * G__29040_29495));

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
var G__29045_29496 = self__.buf;
var G__29047_29497 = (G__29045_29496[(0)]);
var G__29048_29498 = (G__29045_29496[(1)]);
var G__29049_29499 = (G__29045_29496[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29046_29500 = v.buf;
var G__29050_29501 = (G__29046_29500[(0)]);
var G__29051_29502 = (G__29046_29500[(1)]);
var G__29052_29503 = (G__29046_29500[(2)]);
(b[(0)] = ((G__29048_29498 * G__29052_29503) - (G__29051_29502 * G__29049_29499)));

(b[(1)] = ((G__29049_29499 * G__29050_29501) - (G__29052_29503 * G__29047_29497)));

(b[(2)] = ((G__29047_29497 * G__29051_29502) - (G__29050_29501 * G__29048_29498)));
} else {
var G__29050_29504 = cljs.core.nth.call(null,v,(0),0.0);
var G__29051_29505 = cljs.core.nth.call(null,v,(1),0.0);
var G__29052_29506 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__29048_29498 * G__29052_29506) - (G__29051_29505 * G__29049_29499)));

(b[(1)] = ((G__29049_29499 * G__29050_29504) - (G__29052_29506 * G__29047_29497)));

(b[(2)] = ((G__29047_29497 * G__29051_29505) - (G__29050_29504 * G__29048_29498)));
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
var G__29069 = self__.buf;
var G__29071 = (G__29069[(0)]);
var G__29072 = (G__29069[(1)]);
var G__29073 = (G__29069[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29070 = v.buf;
var G__29074 = (G__29070[(0)]);
var G__29075 = (G__29070[(1)]);
var G__29076 = (G__29070[(2)]);
var d = ((((G__29071 * G__29074) + (G__29072 * G__29075)) + (G__29073 * G__29076)) * 2.0);
(b[(0)] = ((G__29074 * d) - G__29071));

(b[(1)] = ((G__29075 * d) - G__29072));

(b[(2)] = ((G__29076 * d) - G__29073));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__29074 = cljs.core.nth.call(null,v,(0),0.0);
var G__29075 = cljs.core.nth.call(null,v,(1),0.0);
var G__29076 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__29071 * G__29074) + (G__29072 * G__29075)) + (G__29073 * G__29076)) * 2.0);
(b[(0)] = ((G__29074 * d) - G__29071));

(b[(1)] = ((G__29075 * d) - G__29072));

(b[(2)] = ((G__29076 * d) - G__29073));

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
var G__29077 = self__.buf;
var G__29079 = (G__29077[(0)]);
var G__29080 = (G__29077[(1)]);
var G__29081 = (G__29077[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29078 = v.buf;
var G__29082 = (G__29078[(0)]);
var G__29083 = (G__29078[(1)]);
var G__29084 = (G__29078[(2)]);
var dx = (G__29079 - G__29082);
var dy = (G__29080 - G__29083);
var dz = (G__29081 - G__29084);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__29082 = cljs.core.nth.call(null,v,(0),0.0);
var G__29083 = cljs.core.nth.call(null,v,(1),0.0);
var G__29084 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__29079 - G__29082);
var dy = (G__29080 - G__29083);
var dz = (G__29081 - G__29084);
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
var dest__24257__auto__ = (new Float32Array((3)));
var G__29085_29507 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29086_29508 = v.buf;
(dest__24257__auto__[(0)] = ((G__29085_29507[(0)]) * (G__29086_29508[(0)])));

(dest__24257__auto__[(1)] = ((G__29085_29507[(1)]) * (G__29086_29508[(1)])));

(dest__24257__auto__[(2)] = ((G__29085_29507[(2)]) * (G__29086_29508[(2)])));
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = ((G__29085_29507[(0)]) * v));

(dest__24257__auto__[(1)] = ((G__29085_29507[(1)]) * v));

(dest__24257__auto__[(2)] = ((G__29085_29507[(2)]) * v));
} else {
(dest__24257__auto__[(0)] = ((G__29085_29507[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__24257__auto__[(1)] = ((G__29085_29507[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__24257__auto__[(2)] = ((G__29085_29507[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__20022__auto__ = self__._hash;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
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
var G__29087 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29088 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__29087[(0)]),(G__29088[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__29087[(1)]),(G__29088[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__29087[(2)]),(G__29088[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__29087[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__29087[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__29087[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
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
var G__29089 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29090 = v.buf;
return ((((G__29089[(0)]) * (G__29090[(0)])) + ((G__29089[(1)]) * (G__29090[(1)]))) + ((G__29089[(2)]) * (G__29090[(2)])));
} else {
return ((((G__29089[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__29089[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__29089[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
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
var dest__24257__auto__ = (new Float32Array((3)));
var G__29091_29509 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29092_29510 = v.buf;
(dest__24257__auto__[(0)] = ((G__29091_29509[(0)]) + (G__29092_29510[(0)])));

(dest__24257__auto__[(1)] = ((G__29091_29509[(1)]) + (G__29092_29510[(1)])));

(dest__24257__auto__[(2)] = ((G__29091_29509[(2)]) + (G__29092_29510[(2)])));
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = ((G__29091_29509[(0)]) + v));

(dest__24257__auto__[(1)] = ((G__29091_29509[(1)]) + v));

(dest__24257__auto__[(2)] = ((G__29091_29509[(2)]) + v));
} else {
(dest__24257__auto__[(0)] = ((G__29091_29509[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__24257__auto__[(1)] = ((G__29091_29509[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__24257__auto__[(2)] = ((G__29091_29509[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
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
var G__29093_29511 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29094_29512 = v.buf;
(b[(0)] = (((G__29093_29511[(0)]) + (G__29094_29512[(0)])) * 0.5));

(b[(1)] = (((G__29093_29511[(1)]) + (G__29094_29512[(1)])) * 0.5));

(b[(2)] = (((G__29093_29511[(2)]) + (G__29094_29512[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__29093_29511[(0)]) + v) * 0.5));

(b[(1)] = (((G__29093_29511[(1)]) + v) * 0.5));

(b[(2)] = (((G__29093_29511[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__29093_29511[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__29093_29511[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__29093_29511[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__29107_29513 = (v instanceof thi.ng.geom.vector.Vec3);
var G__29108_29514 = (t instanceof thi.ng.geom.vector.Vec3);
var G__29109_29515 = ((!(G__29107_29513))?typeof v === 'number':null);
var G__29110_29516 = ((!(G__29108_29514))?typeof t === 'number':null);
var G__29095_29517 = self__.buf;
var G__29096_29518 = ((G__29107_29513)?v.buf:null);
var G__29097_29519 = ((G__29108_29514)?t.buf:null);
var G__29098_29520 = (G__29095_29517[(0)]);
var G__29099_29521 = (G__29095_29517[(1)]);
var G__29100_29522 = (G__29095_29517[(2)]);
var G__29101_29523 = ((G__29107_29513)?(G__29096_29518[(0)]):(cljs.core.truth_(G__29109_29515)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__29102_29524 = ((G__29107_29513)?(G__29096_29518[(1)]):(cljs.core.truth_(G__29109_29515)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__29103_29525 = ((G__29107_29513)?(G__29096_29518[(2)]):(cljs.core.truth_(G__29109_29515)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__29104_29526 = ((G__29108_29514)?(G__29097_29519[(0)]):(cljs.core.truth_(G__29110_29516)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__29105_29527 = ((G__29108_29514)?(G__29097_29519[(1)]):(cljs.core.truth_(G__29110_29516)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__29106_29528 = ((G__29108_29514)?(G__29097_29519[(2)]):(cljs.core.truth_(G__29110_29516)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = (((G__29101_29523 - G__29098_29520) * G__29104_29526) + G__29098_29520));

(b[(1)] = (((G__29102_29524 - G__29099_29521) * G__29105_29527) + G__29099_29521));

(b[(2)] = (((G__29103_29525 - G__29100_29522) * G__29106_29528) + G__29100_29522));

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
var G__29123_29529 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29124_29530 = (c instanceof thi.ng.geom.vector.Vec3);
var G__29125_29531 = ((!(G__29123_29529))?typeof b === 'number':null);
var G__29126_29532 = ((!(G__29124_29530))?typeof c === 'number':null);
var G__29111_29533 = self__.buf;
var G__29112_29534 = ((G__29123_29529)?b.buf:null);
var G__29113_29535 = ((G__29124_29530)?c.buf:null);
var G__29114_29536 = (G__29111_29533[(0)]);
var G__29115_29537 = (G__29111_29533[(1)]);
var G__29116_29538 = (G__29111_29533[(2)]);
var G__29117_29539 = ((G__29123_29529)?(G__29112_29534[(0)]):(cljs.core.truth_(G__29125_29531)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__29118_29540 = ((G__29123_29529)?(G__29112_29534[(1)]):(cljs.core.truth_(G__29125_29531)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__29119_29541 = ((G__29123_29529)?(G__29112_29534[(2)]):(cljs.core.truth_(G__29125_29531)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__29120_29542 = ((G__29124_29530)?(G__29113_29535[(0)]):(cljs.core.truth_(G__29126_29532)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__29121_29543 = ((G__29124_29530)?(G__29113_29535[(1)]):(cljs.core.truth_(G__29126_29532)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__29122_29544 = ((G__29124_29530)?(G__29113_29535[(2)]):(cljs.core.truth_(G__29126_29532)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_29545 = (((G__29117_29539 - G__29114_29536) * u) + G__29114_29536);
var y1_29546 = (((G__29118_29540 - G__29115_29537) * u) + G__29115_29537);
var z1_29547 = (((G__29119_29541 - G__29116_29538) * u) + G__29116_29538);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__29120_29542) * u) + G__29120_29542) - x1_29545) * v) + x1_29545));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__29121_29543) * u) + G__29121_29543) - y1_29546) * v) + y1_29546));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__29122_29544) * u) + G__29122_29544) - z1_29547) * v) + z1_29547));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__29139_29548 = (v instanceof thi.ng.geom.vector.Vec3);
var G__29140_29549 = (t instanceof thi.ng.geom.vector.Vec3);
var G__29141_29550 = ((!(G__29139_29548))?typeof v === 'number':null);
var G__29142_29551 = ((!(G__29140_29549))?typeof t === 'number':null);
var G__29127_29552 = self__.buf;
var G__29128_29553 = ((G__29139_29548)?v.buf:null);
var G__29129_29554 = ((G__29140_29549)?t.buf:null);
var G__29130_29555 = (G__29127_29552[(0)]);
var G__29131_29556 = (G__29127_29552[(1)]);
var G__29132_29557 = (G__29127_29552[(2)]);
var G__29133_29558 = ((G__29139_29548)?(G__29128_29553[(0)]):(cljs.core.truth_(G__29141_29550)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__29134_29559 = ((G__29139_29548)?(G__29128_29553[(1)]):(cljs.core.truth_(G__29141_29550)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__29135_29560 = ((G__29139_29548)?(G__29128_29553[(2)]):(cljs.core.truth_(G__29141_29550)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__29136_29561 = ((G__29140_29549)?(G__29129_29554[(0)]):(cljs.core.truth_(G__29142_29551)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__29137_29562 = ((G__29140_29549)?(G__29129_29554[(1)]):(cljs.core.truth_(G__29142_29551)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__29138_29563 = ((G__29140_29549)?(G__29129_29554[(2)]):(cljs.core.truth_(G__29142_29551)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = f.call(null,G__29130_29555,G__29133_29558,G__29136_29561));

(b[(1)] = f.call(null,G__29131_29556,G__29134_29559,G__29137_29562));

(b[(2)] = f.call(null,G__29132_29557,G__29135_29560,G__29138_29563));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__29143_29564 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__29144_29565 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__29144_29565[(0)]),(G__29143_29564[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__29144_29565[(1)]),(G__29143_29564[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,(G__29144_29565[(2)]),(G__29143_29564[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__29143_29564[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__29143_29564[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,e,(G__29143_29564[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__29143_29564[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__29143_29564[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(2),0.0),(G__29143_29564[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__29157_29566 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__29158_29567 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__29159_29568 = ((!(G__29157_29566))?typeof e1 === 'number':null);
var G__29160_29569 = ((!(G__29158_29567))?typeof e2 === 'number':null);
var G__29145_29570 = self__.buf;
var G__29146_29571 = ((G__29157_29566)?e1.buf:null);
var G__29147_29572 = ((G__29158_29567)?e2.buf:null);
var G__29148_29573 = (G__29145_29570[(0)]);
var G__29149_29574 = (G__29145_29570[(1)]);
var G__29150_29575 = (G__29145_29570[(2)]);
var G__29151_29576 = ((G__29157_29566)?(G__29146_29571[(0)]):(cljs.core.truth_(G__29159_29568)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__29152_29577 = ((G__29157_29566)?(G__29146_29571[(1)]):(cljs.core.truth_(G__29159_29568)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__29153_29578 = ((G__29157_29566)?(G__29146_29571[(2)]):(cljs.core.truth_(G__29159_29568)?e1:cljs.core.nth.call(null,e1,(2),0.0)));
var G__29154_29579 = ((G__29158_29567)?(G__29147_29572[(0)]):(cljs.core.truth_(G__29160_29569)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__29155_29580 = ((G__29158_29567)?(G__29147_29572[(1)]):(cljs.core.truth_(G__29160_29569)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
var G__29156_29581 = ((G__29158_29567)?(G__29147_29572[(2)]):(cljs.core.truth_(G__29160_29569)?e2:cljs.core.nth.call(null,e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__29151_29576,G__29154_29579,G__29148_29573));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__29152_29577,G__29155_29580,G__29149_29574));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__29153_29578,G__29156_29581,G__29150_29575));

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
var dest__24257__auto__ = (new Float32Array((3)));
var G__29161_29582 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29162_29583 = v.buf;
(dest__24257__auto__[(0)] = (function (){var a__23725__auto__ = (G__29161_29582[(0)]);
var b__23726__auto__ = (G__29162_29583[(0)]);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24257__auto__[(1)] = (function (){var a__23725__auto__ = (G__29161_29582[(1)]);
var b__23726__auto__ = (G__29162_29583[(1)]);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24257__auto__[(2)] = (function (){var a__23725__auto__ = (G__29161_29582[(2)]);
var b__23726__auto__ = (G__29162_29583[(2)]);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = (function (){var a__23725__auto__ = (G__29161_29582[(0)]);
var b__23726__auto__ = v;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24257__auto__[(1)] = (function (){var a__23725__auto__ = (G__29161_29582[(1)]);
var b__23726__auto__ = v;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24257__auto__[(2)] = (function (){var a__23725__auto__ = (G__29161_29582[(2)]);
var b__23726__auto__ = v;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());
} else {
(dest__24257__auto__[(0)] = (function (){var a__23725__auto__ = (G__29161_29582[(0)]);
var b__23726__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24257__auto__[(1)] = (function (){var a__23725__auto__ = (G__29161_29582[(1)]);
var b__23726__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24257__auto__[(2)] = (function (){var a__23725__auto__ = (G__29161_29582[(2)]);
var b__23726__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29175_29584 = (v instanceof thi.ng.geom.vector.Vec3);
var G__29176_29585 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29177_29586 = ((!(G__29175_29584))?typeof v === 'number':null);
var G__29178_29587 = ((!(G__29176_29585))?typeof v2 === 'number':null);
var G__29163_29588 = self__.buf;
var G__29164_29589 = ((G__29175_29584)?v.buf:null);
var G__29165_29590 = ((G__29176_29585)?v2.buf:null);
var G__29166_29591 = (G__29163_29588[(0)]);
var G__29167_29592 = (G__29163_29588[(1)]);
var G__29168_29593 = (G__29163_29588[(2)]);
var G__29169_29594 = ((G__29175_29584)?(G__29164_29589[(0)]):(cljs.core.truth_(G__29177_29586)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__29170_29595 = ((G__29175_29584)?(G__29164_29589[(1)]):(cljs.core.truth_(G__29177_29586)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__29171_29596 = ((G__29175_29584)?(G__29164_29589[(2)]):(cljs.core.truth_(G__29177_29586)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__29172_29597 = ((G__29176_29585)?(G__29165_29590[(0)]):(cljs.core.truth_(G__29178_29587)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29173_29598 = ((G__29176_29585)?(G__29165_29590[(1)]):(cljs.core.truth_(G__29178_29587)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29174_29599 = ((G__29176_29585)?(G__29165_29590[(2)]):(cljs.core.truth_(G__29178_29587)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24268__auto__[(0)] = (function (){var a__23725__auto__ = (function (){var a__23725__auto__ = G__29166_29591;
var b__23726__auto__ = G__29169_29594;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})();
var b__23726__auto__ = G__29172_29597;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24268__auto__[(1)] = (function (){var a__23725__auto__ = (function (){var a__23725__auto__ = G__29167_29592;
var b__23726__auto__ = G__29170_29595;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})();
var b__23726__auto__ = G__29173_29598;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

(dest__24268__auto__[(2)] = (function (){var a__23725__auto__ = (function (){var a__23725__auto__ = G__29168_29593;
var b__23726__auto__ = G__29171_29596;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})();
var b__23726__auto__ = G__29174_29599;
if((a__23725__auto__ <= b__23726__auto__)){
return a__23725__auto__;
} else {
return b__23726__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24257__auto__ = (new Float32Array((3)));
var G__29179_29600 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29180_29601 = v.buf;
(dest__24257__auto__[(0)] = (function (){var a__23732__auto__ = (G__29179_29600[(0)]);
var b__23733__auto__ = (G__29180_29601[(0)]);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24257__auto__[(1)] = (function (){var a__23732__auto__ = (G__29179_29600[(1)]);
var b__23733__auto__ = (G__29180_29601[(1)]);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24257__auto__[(2)] = (function (){var a__23732__auto__ = (G__29179_29600[(2)]);
var b__23733__auto__ = (G__29180_29601[(2)]);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = (function (){var a__23732__auto__ = (G__29179_29600[(0)]);
var b__23733__auto__ = v;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24257__auto__[(1)] = (function (){var a__23732__auto__ = (G__29179_29600[(1)]);
var b__23733__auto__ = v;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24257__auto__[(2)] = (function (){var a__23732__auto__ = (G__29179_29600[(2)]);
var b__23733__auto__ = v;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());
} else {
(dest__24257__auto__[(0)] = (function (){var a__23732__auto__ = (G__29179_29600[(0)]);
var b__23733__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24257__auto__[(1)] = (function (){var a__23732__auto__ = (G__29179_29600[(1)]);
var b__23733__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24257__auto__[(2)] = (function (){var a__23732__auto__ = (G__29179_29600[(2)]);
var b__23733__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29193_29602 = (v instanceof thi.ng.geom.vector.Vec3);
var G__29194_29603 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29195_29604 = ((!(G__29193_29602))?typeof v === 'number':null);
var G__29196_29605 = ((!(G__29194_29603))?typeof v2 === 'number':null);
var G__29181_29606 = self__.buf;
var G__29182_29607 = ((G__29193_29602)?v.buf:null);
var G__29183_29608 = ((G__29194_29603)?v2.buf:null);
var G__29184_29609 = (G__29181_29606[(0)]);
var G__29185_29610 = (G__29181_29606[(1)]);
var G__29186_29611 = (G__29181_29606[(2)]);
var G__29187_29612 = ((G__29193_29602)?(G__29182_29607[(0)]):(cljs.core.truth_(G__29195_29604)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__29188_29613 = ((G__29193_29602)?(G__29182_29607[(1)]):(cljs.core.truth_(G__29195_29604)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__29189_29614 = ((G__29193_29602)?(G__29182_29607[(2)]):(cljs.core.truth_(G__29195_29604)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__29190_29615 = ((G__29194_29603)?(G__29183_29608[(0)]):(cljs.core.truth_(G__29196_29605)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29191_29616 = ((G__29194_29603)?(G__29183_29608[(1)]):(cljs.core.truth_(G__29196_29605)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29192_29617 = ((G__29194_29603)?(G__29183_29608[(2)]):(cljs.core.truth_(G__29196_29605)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24268__auto__[(0)] = (function (){var a__23732__auto__ = (function (){var a__23732__auto__ = G__29184_29609;
var b__23733__auto__ = G__29187_29612;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})();
var b__23733__auto__ = G__29190_29615;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24268__auto__[(1)] = (function (){var a__23732__auto__ = (function (){var a__23732__auto__ = G__29185_29610;
var b__23733__auto__ = G__29188_29613;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})();
var b__23733__auto__ = G__29191_29616;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

(dest__24268__auto__[(2)] = (function (){var a__23732__auto__ = (function (){var a__23732__auto__ = G__29186_29611;
var b__23733__auto__ = G__29189_29614;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})();
var b__23733__auto__ = G__29192_29617;
if((a__23732__auto__ >= b__23733__auto__)){
return a__23732__auto__;
} else {
return b__23733__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__29197 = self__.buf;
var G__29198 = (G__29197[(0)]);
var G__29199 = (G__29197[(1)]);
var G__29200 = (G__29197[(2)]);
(b[(0)] = G__29198);

(b[(1)] = ((G__29199 * c) - (G__29200 * s)));

(b[(2)] = ((G__29199 * s) + (G__29200 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__29201 = self__.buf;
var G__29202 = (G__29201[(0)]);
var G__29203 = (G__29201[(1)]);
var G__29204 = (G__29201[(2)]);
(b[(0)] = ((G__29202 * c) + (G__29204 * s)));

(b[(1)] = G__29203);

(b[(2)] = ((G__29204 * c) - (G__29202 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__29205 = self__.buf;
var G__29206 = (G__29205[(0)]);
var G__29207 = (G__29205[(1)]);
var G__29208 = (G__29205[(2)]);
(b[(0)] = ((G__29206 * c) - (G__29207 * s)));

(b[(1)] = ((G__29206 * s) + (G__29207 * c)));

(b[(2)] = G__29208);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__29209 = self__.buf;
var G__29211 = (G__29209[(0)]);
var G__29212 = (G__29209[(1)]);
var G__29213 = (G__29209[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29210 = v.buf;
var G__29214 = (G__29210[(0)]);
var G__29215 = (G__29210[(1)]);
var G__29216 = (G__29210[(2)]);
var ux_SINGLEQUOTE_ = (G__29214 * G__29211);
var uy_SINGLEQUOTE_ = (G__29214 * G__29212);
var uz_SINGLEQUOTE_ = (G__29214 * G__29213);
var vx_SINGLEQUOTE_ = (G__29215 * G__29211);
var vy_SINGLEQUOTE_ = (G__29215 * G__29212);
var vz_SINGLEQUOTE_ = (G__29215 * G__29213);
var wx_SINGLEQUOTE_ = (G__29216 * G__29211);
var wy_SINGLEQUOTE_ = (G__29216 * G__29212);
var wz_SINGLEQUOTE_ = (G__29216 * G__29213);
var vx2 = (G__29214 * G__29214);
var vy2 = (G__29215 * G__29215);
var vz2 = (G__29216 * G__29216);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__29214) + ((((vy2 + vz2) * G__29211) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__29214)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__29215) + ((((vx2 + vz2) * G__29212) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__29215)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__29216) + ((((vx2 + vy2) * G__29213) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__29216)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__29214 = cljs.core.nth.call(null,v,(0),0.0);
var G__29215 = cljs.core.nth.call(null,v,(1),0.0);
var G__29216 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__29214 * G__29211);
var uy_SINGLEQUOTE_ = (G__29214 * G__29212);
var uz_SINGLEQUOTE_ = (G__29214 * G__29213);
var vx_SINGLEQUOTE_ = (G__29215 * G__29211);
var vy_SINGLEQUOTE_ = (G__29215 * G__29212);
var vz_SINGLEQUOTE_ = (G__29215 * G__29213);
var wx_SINGLEQUOTE_ = (G__29216 * G__29211);
var wy_SINGLEQUOTE_ = (G__29216 * G__29212);
var wz_SINGLEQUOTE_ = (G__29216 * G__29213);
var vx2 = (G__29214 * G__29214);
var vy2 = (G__29215 * G__29215);
var vz2 = (G__29216 * G__29216);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__29214) + ((((vy2 + vz2) * G__29211) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__29214)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__29215) + ((((vx2 + vz2) * G__29212) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__29215)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__29216) + ((((vx2 + vy2) * G__29213) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__29216)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

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
var G__29618 = null;
var G__29618__2 = (function (self__,k){
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
var G__29618__3 = (function (self__,k,nf){
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
G__29618 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__29618__2.call(this,self__,k);
case 3:
return G__29618__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29618.cljs$core$IFn$_invoke$arity$2 = G__29618__2;
G__29618.cljs$core$IFn$_invoke$arity$3 = G__29618__3;
return G__29618;
})()
;

thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args28908){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28908)));
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
var G__29217 = self__.buf;
var G__29218 = (G__29217[(0)]);
var G__29219 = (G__29217[(1)]);
var G__29220 = (G__29217[(2)]);
var l = Math.sqrt((((G__29218 * G__29218) + (G__29219 * G__29219)) + (G__29220 * G__29220)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__29218 / l));

(b[(1)] = (G__29219 / l));

(b[(2)] = (G__29220 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__29221 = self__.buf;
var G__29222 = (G__29221[(0)]);
var G__29223 = (G__29221[(1)]);
var G__29224 = (G__29221[(2)]);
var l = Math.sqrt((((G__29222 * G__29222) + (G__29223 * G__29223)) + (G__29224 * G__29224)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__29222 * l__$1));

(b[(1)] = (G__29223 * l__$1));

(b[(2)] = (G__29224 * l__$1));

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
var G__29225 = self__.buf;
var G__29226 = (G__29225[(0)]);
var G__29227 = (G__29225[(1)]);
var G__29228 = (G__29225[(2)]);
return Math.sqrt((((G__29226 * G__29226) + (G__29227 * G__29227)) + (G__29228 * G__29228)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29229 = self__.buf;
var G__29230 = (G__29229[(0)]);
var G__29231 = (G__29229[(1)]);
var G__29232 = (G__29229[(2)]);
return (((G__29230 * G__29230) + (G__29231 * G__29231)) + (G__29232 * G__29232));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29245_29619 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29246_29620 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29247_29621 = ((!(G__29245_29619))?typeof a === 'number':null);
var G__29248_29622 = ((!(G__29246_29620))?typeof b === 'number':null);
var G__29233_29623 = self__.buf;
var G__29234_29624 = ((G__29245_29619)?a.buf:null);
var G__29235_29625 = ((G__29246_29620)?b.buf:null);
var G__29236_29626 = (G__29233_29623[(0)]);
var G__29237_29627 = (G__29233_29623[(1)]);
var G__29238_29628 = (G__29233_29623[(2)]);
var G__29239_29629 = ((G__29245_29619)?(G__29234_29624[(0)]):(cljs.core.truth_(G__29247_29621)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__29240_29630 = ((G__29245_29619)?(G__29234_29624[(1)]):(cljs.core.truth_(G__29247_29621)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__29241_29631 = ((G__29245_29619)?(G__29234_29624[(2)]):(cljs.core.truth_(G__29247_29621)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__29242_29632 = ((G__29246_29620)?(G__29235_29625[(0)]):(cljs.core.truth_(G__29248_29622)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__29243_29633 = ((G__29246_29620)?(G__29235_29625[(1)]):(cljs.core.truth_(G__29248_29622)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__29244_29634 = ((G__29246_29620)?(G__29235_29625[(2)]):(cljs.core.truth_(G__29248_29622)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__24268__auto__[(0)] = ((G__29236_29626 * G__29239_29629) - G__29242_29632));

(dest__24268__auto__[(1)] = ((G__29237_29627 * G__29240_29630) - G__29243_29633));

(dest__24268__auto__[(2)] = ((G__29238_29628 * G__29241_29631) - G__29244_29634));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24257__auto__ = (new Float32Array((3)));
var G__29249_29635 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29250_29636 = v.buf;
(dest__24257__auto__[(0)] = ((G__29249_29635[(0)]) * (G__29250_29636[(0)])));

(dest__24257__auto__[(1)] = ((G__29249_29635[(1)]) * (G__29250_29636[(1)])));

(dest__24257__auto__[(2)] = ((G__29249_29635[(2)]) * (G__29250_29636[(2)])));
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = ((G__29249_29635[(0)]) * v));

(dest__24257__auto__[(1)] = ((G__29249_29635[(1)]) * v));

(dest__24257__auto__[(2)] = ((G__29249_29635[(2)]) * v));
} else {
(dest__24257__auto__[(0)] = ((G__29249_29635[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__24257__auto__[(1)] = ((G__29249_29635[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__24257__auto__[(2)] = ((G__29249_29635[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29263_29637 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29264_29638 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29265_29639 = ((!(G__29263_29637))?typeof v1 === 'number':null);
var G__29266_29640 = ((!(G__29264_29638))?typeof v2 === 'number':null);
var G__29251_29641 = self__.buf;
var G__29252_29642 = ((G__29263_29637)?v1.buf:null);
var G__29253_29643 = ((G__29264_29638)?v2.buf:null);
var G__29254_29644 = (G__29251_29641[(0)]);
var G__29255_29645 = (G__29251_29641[(1)]);
var G__29256_29646 = (G__29251_29641[(2)]);
var G__29257_29647 = ((G__29263_29637)?(G__29252_29642[(0)]):(cljs.core.truth_(G__29265_29639)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29258_29648 = ((G__29263_29637)?(G__29252_29642[(1)]):(cljs.core.truth_(G__29265_29639)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29259_29649 = ((G__29263_29637)?(G__29252_29642[(2)]):(cljs.core.truth_(G__29265_29639)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29260_29650 = ((G__29264_29638)?(G__29253_29643[(0)]):(cljs.core.truth_(G__29266_29640)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29261_29651 = ((G__29264_29638)?(G__29253_29643[(1)]):(cljs.core.truth_(G__29266_29640)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29262_29652 = ((G__29264_29638)?(G__29253_29643[(2)]):(cljs.core.truth_(G__29266_29640)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24268__auto__[(0)] = ((G__29254_29644 * G__29257_29647) * G__29260_29650));

(dest__24268__auto__[(1)] = ((G__29255_29645 * G__29258_29648) * G__29261_29651));

(dest__24268__auto__[(2)] = ((G__29256_29646 * G__29259_29649) * G__29262_29652));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29267 = self__.buf;
var dest__24246__auto__ = (new Float32Array((3)));
(dest__24246__auto__[(0)] = ((G__29267[(0)]) * x));

(dest__24246__auto__[(1)] = ((G__29267[(1)]) * y));

(dest__24246__auto__[(2)] = ((G__29267[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__24246__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24240__auto__ = (new Float32Array((3)));
var G__29268_29653 = self__.buf;
(dest__24240__auto__[(0)] = (- (G__29268_29653[(0)])));

(dest__24240__auto__[(1)] = (- (G__29268_29653[(1)])));

(dest__24240__auto__[(2)] = (- (G__29268_29653[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__24240__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24257__auto__ = (new Float32Array((3)));
var G__29269_29654 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29270_29655 = v.buf;
(dest__24257__auto__[(0)] = ((G__29269_29654[(0)]) - (G__29270_29655[(0)])));

(dest__24257__auto__[(1)] = ((G__29269_29654[(1)]) - (G__29270_29655[(1)])));

(dest__24257__auto__[(2)] = ((G__29269_29654[(2)]) - (G__29270_29655[(2)])));
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = ((G__29269_29654[(0)]) - v));

(dest__24257__auto__[(1)] = ((G__29269_29654[(1)]) - v));

(dest__24257__auto__[(2)] = ((G__29269_29654[(2)]) - v));
} else {
(dest__24257__auto__[(0)] = ((G__29269_29654[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__24257__auto__[(1)] = ((G__29269_29654[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__24257__auto__[(2)] = ((G__29269_29654[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29283_29656 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29284_29657 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29285_29658 = ((!(G__29283_29656))?typeof v1 === 'number':null);
var G__29286_29659 = ((!(G__29284_29657))?typeof v2 === 'number':null);
var G__29271_29660 = self__.buf;
var G__29272_29661 = ((G__29283_29656)?v1.buf:null);
var G__29273_29662 = ((G__29284_29657)?v2.buf:null);
var G__29274_29663 = (G__29271_29660[(0)]);
var G__29275_29664 = (G__29271_29660[(1)]);
var G__29276_29665 = (G__29271_29660[(2)]);
var G__29277_29666 = ((G__29283_29656)?(G__29272_29661[(0)]):(cljs.core.truth_(G__29285_29658)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29278_29667 = ((G__29283_29656)?(G__29272_29661[(1)]):(cljs.core.truth_(G__29285_29658)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29279_29668 = ((G__29283_29656)?(G__29272_29661[(2)]):(cljs.core.truth_(G__29285_29658)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29280_29669 = ((G__29284_29657)?(G__29273_29662[(0)]):(cljs.core.truth_(G__29286_29659)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29281_29670 = ((G__29284_29657)?(G__29273_29662[(1)]):(cljs.core.truth_(G__29286_29659)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29282_29671 = ((G__29284_29657)?(G__29273_29662[(2)]):(cljs.core.truth_(G__29286_29659)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24268__auto__[(0)] = ((G__29274_29663 - G__29277_29666) - G__29280_29669));

(dest__24268__auto__[(1)] = ((G__29275_29664 - G__29278_29667) - G__29281_29670));

(dest__24268__auto__[(2)] = ((G__29276_29665 - G__29279_29668) - G__29282_29671));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29287 = self__.buf;
var dest__24246__auto__ = (new Float32Array((3)));
(dest__24246__auto__[(0)] = ((G__29287[(0)]) - x));

(dest__24246__auto__[(1)] = ((G__29287[(1)]) - y));

(dest__24246__auto__[(2)] = ((G__29287[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__24246__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29300_29672 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29301_29673 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29302_29674 = ((!(G__29300_29672))?typeof a === 'number':null);
var G__29303_29675 = ((!(G__29301_29673))?typeof b === 'number':null);
var G__29288_29676 = self__.buf;
var G__29289_29677 = ((G__29300_29672)?a.buf:null);
var G__29290_29678 = ((G__29301_29673)?b.buf:null);
var G__29291_29679 = (G__29288_29676[(0)]);
var G__29292_29680 = (G__29288_29676[(1)]);
var G__29293_29681 = (G__29288_29676[(2)]);
var G__29294_29682 = ((G__29300_29672)?(G__29289_29677[(0)]):(cljs.core.truth_(G__29302_29674)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__29295_29683 = ((G__29300_29672)?(G__29289_29677[(1)]):(cljs.core.truth_(G__29302_29674)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__29296_29684 = ((G__29300_29672)?(G__29289_29677[(2)]):(cljs.core.truth_(G__29302_29674)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__29297_29685 = ((G__29301_29673)?(G__29290_29678[(0)]):(cljs.core.truth_(G__29303_29675)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__29298_29686 = ((G__29301_29673)?(G__29290_29678[(1)]):(cljs.core.truth_(G__29303_29675)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__29299_29687 = ((G__29301_29673)?(G__29290_29678[(2)]):(cljs.core.truth_(G__29303_29675)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__24268__auto__[(0)] = ((G__29291_29679 * G__29294_29682) + G__29297_29685));

(dest__24268__auto__[(1)] = ((G__29292_29680 * G__29295_29683) + G__29298_29686));

(dest__24268__auto__[(2)] = ((G__29293_29681 * G__29296_29684) + G__29299_29687));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29316_29688 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29317_29689 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29318_29690 = ((!(G__29316_29688))?typeof a === 'number':null);
var G__29319_29691 = ((!(G__29317_29689))?typeof b === 'number':null);
var G__29304_29692 = self__.buf;
var G__29305_29693 = ((G__29316_29688)?a.buf:null);
var G__29306_29694 = ((G__29317_29689)?b.buf:null);
var G__29307_29695 = (G__29304_29692[(0)]);
var G__29308_29696 = (G__29304_29692[(1)]);
var G__29309_29697 = (G__29304_29692[(2)]);
var G__29310_29698 = ((G__29316_29688)?(G__29305_29693[(0)]):(cljs.core.truth_(G__29318_29690)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__29311_29699 = ((G__29316_29688)?(G__29305_29693[(1)]):(cljs.core.truth_(G__29318_29690)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__29312_29700 = ((G__29316_29688)?(G__29305_29693[(2)]):(cljs.core.truth_(G__29318_29690)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__29313_29701 = ((G__29317_29689)?(G__29306_29694[(0)]):(cljs.core.truth_(G__29319_29691)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__29314_29702 = ((G__29317_29689)?(G__29306_29694[(1)]):(cljs.core.truth_(G__29319_29691)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__29315_29703 = ((G__29317_29689)?(G__29306_29694[(2)]):(cljs.core.truth_(G__29319_29691)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__24268__auto__[(0)] = ((G__29307_29695 + G__29310_29698) * G__29313_29701));

(dest__24268__auto__[(1)] = ((G__29308_29696 + G__29311_29699) * G__29314_29702));

(dest__24268__auto__[(2)] = ((G__29309_29697 + G__29312_29700) * G__29315_29703));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24240__auto__ = (new Float32Array((3)));
var G__29320_29704 = self__.buf;
(dest__24240__auto__[(0)] = ((1) / (G__29320_29704[(0)])));

(dest__24240__auto__[(1)] = ((1) / (G__29320_29704[(1)])));

(dest__24240__auto__[(2)] = ((1) / (G__29320_29704[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__24240__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24257__auto__ = (new Float32Array((3)));
var G__29321_29705 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29322_29706 = v.buf;
(dest__24257__auto__[(0)] = ((G__29321_29705[(0)]) / (G__29322_29706[(0)])));

(dest__24257__auto__[(1)] = ((G__29321_29705[(1)]) / (G__29322_29706[(1)])));

(dest__24257__auto__[(2)] = ((G__29321_29705[(2)]) / (G__29322_29706[(2)])));
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = ((G__29321_29705[(0)]) / v));

(dest__24257__auto__[(1)] = ((G__29321_29705[(1)]) / v));

(dest__24257__auto__[(2)] = ((G__29321_29705[(2)]) / v));
} else {
(dest__24257__auto__[(0)] = ((G__29321_29705[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__24257__auto__[(1)] = ((G__29321_29705[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__24257__auto__[(2)] = ((G__29321_29705[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29335_29707 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29336_29708 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29337_29709 = ((!(G__29335_29707))?typeof v1 === 'number':null);
var G__29338_29710 = ((!(G__29336_29708))?typeof v2 === 'number':null);
var G__29323_29711 = self__.buf;
var G__29324_29712 = ((G__29335_29707)?v1.buf:null);
var G__29325_29713 = ((G__29336_29708)?v2.buf:null);
var G__29326_29714 = (G__29323_29711[(0)]);
var G__29327_29715 = (G__29323_29711[(1)]);
var G__29328_29716 = (G__29323_29711[(2)]);
var G__29329_29717 = ((G__29335_29707)?(G__29324_29712[(0)]):(cljs.core.truth_(G__29337_29709)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29330_29718 = ((G__29335_29707)?(G__29324_29712[(1)]):(cljs.core.truth_(G__29337_29709)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29331_29719 = ((G__29335_29707)?(G__29324_29712[(2)]):(cljs.core.truth_(G__29337_29709)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29332_29720 = ((G__29336_29708)?(G__29325_29713[(0)]):(cljs.core.truth_(G__29338_29710)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29333_29721 = ((G__29336_29708)?(G__29325_29713[(1)]):(cljs.core.truth_(G__29338_29710)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29334_29722 = ((G__29336_29708)?(G__29325_29713[(2)]):(cljs.core.truth_(G__29338_29710)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24268__auto__[(0)] = ((G__29326_29714 / G__29329_29717) / G__29332_29720));

(dest__24268__auto__[(1)] = ((G__29327_29715 / G__29330_29718) / G__29333_29721));

(dest__24268__auto__[(2)] = ((G__29328_29716 / G__29331_29719) / G__29334_29722));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29339 = self__.buf;
var dest__24246__auto__ = (new Float32Array((3)));
(dest__24246__auto__[(0)] = ((G__29339[(0)]) / x));

(dest__24246__auto__[(1)] = ((G__29339[(1)]) / y));

(dest__24246__auto__[(2)] = ((G__29339[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__24246__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__24257__auto__ = (new Float32Array((3)));
var G__29340_29723 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__29341_29724 = v.buf;
(dest__24257__auto__[(0)] = ((G__29340_29723[(0)]) + (G__29341_29724[(0)])));

(dest__24257__auto__[(1)] = ((G__29340_29723[(1)]) + (G__29341_29724[(1)])));

(dest__24257__auto__[(2)] = ((G__29340_29723[(2)]) + (G__29341_29724[(2)])));
} else {
if(typeof v === 'number'){
(dest__24257__auto__[(0)] = ((G__29340_29723[(0)]) + v));

(dest__24257__auto__[(1)] = ((G__29340_29723[(1)]) + v));

(dest__24257__auto__[(2)] = ((G__29340_29723[(2)]) + v));
} else {
(dest__24257__auto__[(0)] = ((G__29340_29723[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__24257__auto__[(1)] = ((G__29340_29723[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__24257__auto__[(2)] = ((G__29340_29723[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__24257__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29354_29725 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__29355_29726 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__29356_29727 = ((!(G__29354_29725))?typeof v1 === 'number':null);
var G__29357_29728 = ((!(G__29355_29726))?typeof v2 === 'number':null);
var G__29342_29729 = self__.buf;
var G__29343_29730 = ((G__29354_29725)?v1.buf:null);
var G__29344_29731 = ((G__29355_29726)?v2.buf:null);
var G__29345_29732 = (G__29342_29729[(0)]);
var G__29346_29733 = (G__29342_29729[(1)]);
var G__29347_29734 = (G__29342_29729[(2)]);
var G__29348_29735 = ((G__29354_29725)?(G__29343_29730[(0)]):(cljs.core.truth_(G__29356_29727)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__29349_29736 = ((G__29354_29725)?(G__29343_29730[(1)]):(cljs.core.truth_(G__29356_29727)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__29350_29737 = ((G__29354_29725)?(G__29343_29730[(2)]):(cljs.core.truth_(G__29356_29727)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__29351_29738 = ((G__29355_29726)?(G__29344_29731[(0)]):(cljs.core.truth_(G__29357_29728)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__29352_29739 = ((G__29355_29726)?(G__29344_29731[(1)]):(cljs.core.truth_(G__29357_29728)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__29353_29740 = ((G__29355_29726)?(G__29344_29731[(2)]):(cljs.core.truth_(G__29357_29728)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__24268__auto__[(0)] = ((G__29345_29732 + G__29348_29735) + G__29351_29738));

(dest__24268__auto__[(1)] = ((G__29346_29733 + G__29349_29736) + G__29352_29739));

(dest__24268__auto__[(2)] = ((G__29347_29734 + G__29350_29737) + G__29353_29740));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__29358 = self__.buf;
var dest__24246__auto__ = (new Float32Array((3)));
(dest__24246__auto__[(0)] = ((G__29358[(0)]) + x));

(dest__24246__auto__[(1)] = ((G__29358[(1)]) + y));

(dest__24246__auto__[(2)] = ((G__29358[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__24246__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__24240__auto__ = (new Float32Array((3)));
var G__29359_29741 = self__.buf;
(dest__24240__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__29359_29741[(0)])));

(dest__24240__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__29359_29741[(1)])));

(dest__24240__auto__[(2)] = thi.ng.math.core.abs_STAR_.call(null,(G__29359_29741[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__24240__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__24268__auto__ = (new Float32Array((3)));
var G__29065_29742 = (a instanceof thi.ng.geom.vector.Vec3);
var G__29066_29743 = (b instanceof thi.ng.geom.vector.Vec3);
var G__29067_29744 = ((!(G__29065_29742))?typeof a === 'number':null);
var G__29068_29745 = ((!(G__29066_29743))?typeof b === 'number':null);
var G__29053_29746 = self__.buf;
var G__29054_29747 = ((G__29065_29742)?a.buf:null);
var G__29055_29748 = ((G__29066_29743)?b.buf:null);
var G__29056_29749 = (G__29053_29746[(0)]);
var G__29057_29750 = (G__29053_29746[(1)]);
var G__29058_29751 = (G__29053_29746[(2)]);
var G__29059_29752 = ((G__29065_29742)?(G__29054_29747[(0)]):(cljs.core.truth_(G__29067_29744)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__29060_29753 = ((G__29065_29742)?(G__29054_29747[(1)]):(cljs.core.truth_(G__29067_29744)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__29061_29754 = ((G__29065_29742)?(G__29054_29747[(2)]):(cljs.core.truth_(G__29067_29744)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__29062_29755 = ((G__29066_29743)?(G__29055_29748[(0)]):(cljs.core.truth_(G__29068_29745)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__29063_29756 = ((G__29066_29743)?(G__29055_29748[(1)]):(cljs.core.truth_(G__29068_29745)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__29064_29757 = ((G__29066_29743)?(G__29055_29748[(2)]):(cljs.core.truth_(G__29068_29745)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__24268__auto__[(0)] = ((G__29056_29749 - G__29059_29752) * G__29062_29755));

(dest__24268__auto__[(1)] = ((G__29057_29750 - G__29060_29753) * G__29063_29756));

(dest__24268__auto__[(2)] = ((G__29058_29751 - G__29061_29754) * G__29064_29757));

return (new thi.ng.geom.vector.Vec3(dest__24268__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3";

thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"thi.ng.geom.vector/Vec3");
});

thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__29760){
var G__29758 = (((G__29760 instanceof thi.ng.geom.vector.Vec2))?G__29760.buf:G__29760.buf);
return (G__29758[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__29763){
var G__29761 = (((G__29763 instanceof thi.ng.geom.vector.Vec2))?G__29763.buf:G__29763.buf);
var G__29762 = (new Float32Array(2));
(G__29762[(0)] = (G__29761[(0)]));

(G__29762[(1)] = (G__29761[(0)]));

return (new thi.ng.geom.vector.Vec2(G__29762,null,cljs.core.meta.call(null,G__29763)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__29766){
var G__29764 = (((G__29766 instanceof thi.ng.geom.vector.Vec2))?G__29766.buf:G__29766.buf);
var G__29765 = (new Float32Array(3));
(G__29765[(0)] = (G__29764[(0)]));

(G__29765[(1)] = (G__29764[(0)]));

(G__29765[(2)] = (G__29764[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29765,null,cljs.core.meta.call(null,G__29766)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__29769){
var G__29767 = (((G__29769 instanceof thi.ng.geom.vector.Vec2))?G__29769.buf:G__29769.buf);
var G__29768 = (new Float32Array(3));
(G__29768[(0)] = (G__29767[(0)]));

(G__29768[(1)] = (G__29767[(0)]));

(G__29768[(2)] = (G__29767[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29768,null,cljs.core.meta.call(null,G__29769)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__29772){
var G__29770 = (((G__29772 instanceof thi.ng.geom.vector.Vec2))?G__29772.buf:G__29772.buf);
var G__29771 = (new Float32Array(3));
(G__29771[(0)] = (G__29770[(0)]));

(G__29771[(1)] = (G__29770[(0)]));

(G__29771[(2)] = (G__29770[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29771,null,cljs.core.meta.call(null,G__29772)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__29775){
var G__29773 = (((G__29775 instanceof thi.ng.geom.vector.Vec2))?G__29775.buf:G__29775.buf);
var G__29774 = (new Float32Array(2));
(G__29774[(0)] = (G__29773[(0)]));

(G__29774[(1)] = (G__29773[(1)]));

return (new thi.ng.geom.vector.Vec2(G__29774,null,cljs.core.meta.call(null,G__29775)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__29778){
var G__29776 = (((G__29778 instanceof thi.ng.geom.vector.Vec2))?G__29778.buf:G__29778.buf);
var G__29777 = (new Float32Array(3));
(G__29777[(0)] = (G__29776[(0)]));

(G__29777[(1)] = (G__29776[(1)]));

(G__29777[(2)] = (G__29776[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29777,null,cljs.core.meta.call(null,G__29778)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__29781){
var G__29779 = (((G__29781 instanceof thi.ng.geom.vector.Vec2))?G__29781.buf:G__29781.buf);
var G__29780 = (new Float32Array(3));
(G__29780[(0)] = (G__29779[(0)]));

(G__29780[(1)] = (G__29779[(1)]));

(G__29780[(2)] = (G__29779[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29780,null,cljs.core.meta.call(null,G__29781)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__29784){
var G__29782 = (((G__29784 instanceof thi.ng.geom.vector.Vec2))?G__29784.buf:G__29784.buf);
var G__29783 = (new Float32Array(3));
(G__29783[(0)] = (G__29782[(0)]));

(G__29783[(1)] = (G__29782[(1)]));

(G__29783[(2)] = (G__29782[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29783,null,cljs.core.meta.call(null,G__29784)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__29787){
var G__29785 = (((G__29787 instanceof thi.ng.geom.vector.Vec2))?G__29787.buf:G__29787.buf);
var G__29786 = (new Float32Array(2));
(G__29786[(0)] = (G__29785[(0)]));

(G__29786[(1)] = (G__29785[(2)]));

return (new thi.ng.geom.vector.Vec2(G__29786,null,cljs.core.meta.call(null,G__29787)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__29790){
var G__29788 = (((G__29790 instanceof thi.ng.geom.vector.Vec2))?G__29790.buf:G__29790.buf);
var G__29789 = (new Float32Array(3));
(G__29789[(0)] = (G__29788[(0)]));

(G__29789[(1)] = (G__29788[(2)]));

(G__29789[(2)] = (G__29788[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29789,null,cljs.core.meta.call(null,G__29790)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__29793){
var G__29791 = (((G__29793 instanceof thi.ng.geom.vector.Vec2))?G__29793.buf:G__29793.buf);
var G__29792 = (new Float32Array(3));
(G__29792[(0)] = (G__29791[(0)]));

(G__29792[(1)] = (G__29791[(2)]));

(G__29792[(2)] = (G__29791[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29792,null,cljs.core.meta.call(null,G__29793)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__29796){
var G__29794 = (((G__29796 instanceof thi.ng.geom.vector.Vec2))?G__29796.buf:G__29796.buf);
var G__29795 = (new Float32Array(3));
(G__29795[(0)] = (G__29794[(0)]));

(G__29795[(1)] = (G__29794[(2)]));

(G__29795[(2)] = (G__29794[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29795,null,cljs.core.meta.call(null,G__29796)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__29799){
var G__29797 = (((G__29799 instanceof thi.ng.geom.vector.Vec2))?G__29799.buf:G__29799.buf);
return (G__29797[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__29802){
var G__29800 = (((G__29802 instanceof thi.ng.geom.vector.Vec2))?G__29802.buf:G__29802.buf);
var G__29801 = (new Float32Array(2));
(G__29801[(0)] = (G__29800[(1)]));

(G__29801[(1)] = (G__29800[(0)]));

return (new thi.ng.geom.vector.Vec2(G__29801,null,cljs.core.meta.call(null,G__29802)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__29805){
var G__29803 = (((G__29805 instanceof thi.ng.geom.vector.Vec2))?G__29805.buf:G__29805.buf);
var G__29804 = (new Float32Array(3));
(G__29804[(0)] = (G__29803[(1)]));

(G__29804[(1)] = (G__29803[(0)]));

(G__29804[(2)] = (G__29803[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29804,null,cljs.core.meta.call(null,G__29805)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__29808){
var G__29806 = (((G__29808 instanceof thi.ng.geom.vector.Vec2))?G__29808.buf:G__29808.buf);
var G__29807 = (new Float32Array(3));
(G__29807[(0)] = (G__29806[(1)]));

(G__29807[(1)] = (G__29806[(0)]));

(G__29807[(2)] = (G__29806[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29807,null,cljs.core.meta.call(null,G__29808)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__29811){
var G__29809 = (((G__29811 instanceof thi.ng.geom.vector.Vec2))?G__29811.buf:G__29811.buf);
var G__29810 = (new Float32Array(3));
(G__29810[(0)] = (G__29809[(1)]));

(G__29810[(1)] = (G__29809[(0)]));

(G__29810[(2)] = (G__29809[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29810,null,cljs.core.meta.call(null,G__29811)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__29814){
var G__29812 = (((G__29814 instanceof thi.ng.geom.vector.Vec2))?G__29814.buf:G__29814.buf);
var G__29813 = (new Float32Array(2));
(G__29813[(0)] = (G__29812[(1)]));

(G__29813[(1)] = (G__29812[(1)]));

return (new thi.ng.geom.vector.Vec2(G__29813,null,cljs.core.meta.call(null,G__29814)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__29817){
var G__29815 = (((G__29817 instanceof thi.ng.geom.vector.Vec2))?G__29817.buf:G__29817.buf);
var G__29816 = (new Float32Array(3));
(G__29816[(0)] = (G__29815[(1)]));

(G__29816[(1)] = (G__29815[(1)]));

(G__29816[(2)] = (G__29815[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29816,null,cljs.core.meta.call(null,G__29817)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__29820){
var G__29818 = (((G__29820 instanceof thi.ng.geom.vector.Vec2))?G__29820.buf:G__29820.buf);
var G__29819 = (new Float32Array(3));
(G__29819[(0)] = (G__29818[(1)]));

(G__29819[(1)] = (G__29818[(1)]));

(G__29819[(2)] = (G__29818[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29819,null,cljs.core.meta.call(null,G__29820)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__29823){
var G__29821 = (((G__29823 instanceof thi.ng.geom.vector.Vec2))?G__29823.buf:G__29823.buf);
var G__29822 = (new Float32Array(3));
(G__29822[(0)] = (G__29821[(1)]));

(G__29822[(1)] = (G__29821[(1)]));

(G__29822[(2)] = (G__29821[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29822,null,cljs.core.meta.call(null,G__29823)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__29826){
var G__29824 = (((G__29826 instanceof thi.ng.geom.vector.Vec2))?G__29826.buf:G__29826.buf);
var G__29825 = (new Float32Array(2));
(G__29825[(0)] = (G__29824[(1)]));

(G__29825[(1)] = (G__29824[(2)]));

return (new thi.ng.geom.vector.Vec2(G__29825,null,cljs.core.meta.call(null,G__29826)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__29829){
var G__29827 = (((G__29829 instanceof thi.ng.geom.vector.Vec2))?G__29829.buf:G__29829.buf);
var G__29828 = (new Float32Array(3));
(G__29828[(0)] = (G__29827[(1)]));

(G__29828[(1)] = (G__29827[(2)]));

(G__29828[(2)] = (G__29827[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29828,null,cljs.core.meta.call(null,G__29829)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__29832){
var G__29830 = (((G__29832 instanceof thi.ng.geom.vector.Vec2))?G__29832.buf:G__29832.buf);
var G__29831 = (new Float32Array(3));
(G__29831[(0)] = (G__29830[(1)]));

(G__29831[(1)] = (G__29830[(2)]));

(G__29831[(2)] = (G__29830[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29831,null,cljs.core.meta.call(null,G__29832)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__29835){
var G__29833 = (((G__29835 instanceof thi.ng.geom.vector.Vec2))?G__29835.buf:G__29835.buf);
var G__29834 = (new Float32Array(3));
(G__29834[(0)] = (G__29833[(1)]));

(G__29834[(1)] = (G__29833[(2)]));

(G__29834[(2)] = (G__29833[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29834,null,cljs.core.meta.call(null,G__29835)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__29838){
var G__29836 = (((G__29838 instanceof thi.ng.geom.vector.Vec2))?G__29838.buf:G__29838.buf);
return (G__29836[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__29841){
var G__29839 = (((G__29841 instanceof thi.ng.geom.vector.Vec2))?G__29841.buf:G__29841.buf);
var G__29840 = (new Float32Array(2));
(G__29840[(0)] = (G__29839[(2)]));

(G__29840[(1)] = (G__29839[(0)]));

return (new thi.ng.geom.vector.Vec2(G__29840,null,cljs.core.meta.call(null,G__29841)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__29844){
var G__29842 = (((G__29844 instanceof thi.ng.geom.vector.Vec2))?G__29844.buf:G__29844.buf);
var G__29843 = (new Float32Array(3));
(G__29843[(0)] = (G__29842[(2)]));

(G__29843[(1)] = (G__29842[(0)]));

(G__29843[(2)] = (G__29842[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29843,null,cljs.core.meta.call(null,G__29844)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__29847){
var G__29845 = (((G__29847 instanceof thi.ng.geom.vector.Vec2))?G__29847.buf:G__29847.buf);
var G__29846 = (new Float32Array(3));
(G__29846[(0)] = (G__29845[(2)]));

(G__29846[(1)] = (G__29845[(0)]));

(G__29846[(2)] = (G__29845[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29846,null,cljs.core.meta.call(null,G__29847)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__29850){
var G__29848 = (((G__29850 instanceof thi.ng.geom.vector.Vec2))?G__29850.buf:G__29850.buf);
var G__29849 = (new Float32Array(3));
(G__29849[(0)] = (G__29848[(2)]));

(G__29849[(1)] = (G__29848[(0)]));

(G__29849[(2)] = (G__29848[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29849,null,cljs.core.meta.call(null,G__29850)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__29853){
var G__29851 = (((G__29853 instanceof thi.ng.geom.vector.Vec2))?G__29853.buf:G__29853.buf);
var G__29852 = (new Float32Array(2));
(G__29852[(0)] = (G__29851[(2)]));

(G__29852[(1)] = (G__29851[(1)]));

return (new thi.ng.geom.vector.Vec2(G__29852,null,cljs.core.meta.call(null,G__29853)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__29856){
var G__29854 = (((G__29856 instanceof thi.ng.geom.vector.Vec2))?G__29856.buf:G__29856.buf);
var G__29855 = (new Float32Array(3));
(G__29855[(0)] = (G__29854[(2)]));

(G__29855[(1)] = (G__29854[(1)]));

(G__29855[(2)] = (G__29854[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29855,null,cljs.core.meta.call(null,G__29856)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__29859){
var G__29857 = (((G__29859 instanceof thi.ng.geom.vector.Vec2))?G__29859.buf:G__29859.buf);
var G__29858 = (new Float32Array(3));
(G__29858[(0)] = (G__29857[(2)]));

(G__29858[(1)] = (G__29857[(1)]));

(G__29858[(2)] = (G__29857[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29858,null,cljs.core.meta.call(null,G__29859)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__29862){
var G__29860 = (((G__29862 instanceof thi.ng.geom.vector.Vec2))?G__29862.buf:G__29862.buf);
var G__29861 = (new Float32Array(3));
(G__29861[(0)] = (G__29860[(2)]));

(G__29861[(1)] = (G__29860[(1)]));

(G__29861[(2)] = (G__29860[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29861,null,cljs.core.meta.call(null,G__29862)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__29865){
var G__29863 = (((G__29865 instanceof thi.ng.geom.vector.Vec2))?G__29865.buf:G__29865.buf);
var G__29864 = (new Float32Array(2));
(G__29864[(0)] = (G__29863[(2)]));

(G__29864[(1)] = (G__29863[(2)]));

return (new thi.ng.geom.vector.Vec2(G__29864,null,cljs.core.meta.call(null,G__29865)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__29868){
var G__29866 = (((G__29868 instanceof thi.ng.geom.vector.Vec2))?G__29868.buf:G__29868.buf);
var G__29867 = (new Float32Array(3));
(G__29867[(0)] = (G__29866[(2)]));

(G__29867[(1)] = (G__29866[(2)]));

(G__29867[(2)] = (G__29866[(0)]));

return (new thi.ng.geom.vector.Vec3(G__29867,null,cljs.core.meta.call(null,G__29868)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__29871){
var G__29869 = (((G__29871 instanceof thi.ng.geom.vector.Vec2))?G__29871.buf:G__29871.buf);
var G__29870 = (new Float32Array(3));
(G__29870[(0)] = (G__29869[(2)]));

(G__29870[(1)] = (G__29869[(2)]));

(G__29870[(2)] = (G__29869[(1)]));

return (new thi.ng.geom.vector.Vec3(G__29870,null,cljs.core.meta.call(null,G__29871)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__29874){
var G__29872 = (((G__29874 instanceof thi.ng.geom.vector.Vec2))?G__29874.buf:G__29874.buf);
var G__29873 = (new Float32Array(3));
(G__29873[(0)] = (G__29872[(2)]));

(G__29873[(1)] = (G__29872[(2)]));

(G__29873[(2)] = (G__29872[(2)]));

return (new thi.ng.geom.vector.Vec3(G__29873,null,cljs.core.meta.call(null,G__29874)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__5718__auto__ = (function (){var and__20010__auto__ = ((1) === c);
if(and__20010__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__20010__auto__;
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

var G__29875 = (i + (1));
var G__29876 = cljs.core.next.call(null,n__$1);
i = G__29875;
n__$1 = G__29876;
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
var G__29877 = null;
var G__29877__1 = (function (a){
return a;
});
var G__29877__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__29877 = function(a,b){
switch(arguments.length){
case 1:
return G__29877__1.call(this,a);
case 2:
return G__29877__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29877.cljs$core$IFn$_invoke$arity$1 = G__29877__1;
G__29877.cljs$core$IFn$_invoke$arity$2 = G__29877__2;
return G__29877;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__29878 = null;
var G__29878__1 = (function (a){
return a;
});
var G__29878__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__29878 = function(a,b){
switch(arguments.length){
case 1:
return G__29878__1.call(this,a);
case 2:
return G__29878__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29878.cljs$core$IFn$_invoke$arity$1 = G__29878__1;
G__29878.cljs$core$IFn$_invoke$arity$2 = G__29878__2;
return G__29878;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var args29879 = [];
var len__21238__auto___29882 = arguments.length;
var i__21239__auto___29883 = (0);
while(true){
if((i__21239__auto___29883 < len__21238__auto___29882)){
args29879.push((arguments[i__21239__auto___29883]));

var G__29884 = (i__21239__auto___29883 + (1));
i__21239__auto___29883 = G__29884;
continue;
} else {
}
break;
}

var G__29881 = args29879.length;
switch (G__29881) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29879.length)].join('')));

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
var args29886 = [];
var len__21238__auto___29889 = arguments.length;
var i__21239__auto___29890 = (0);
while(true){
if((i__21239__auto___29890 < len__21238__auto___29889)){
args29886.push((arguments[i__21239__auto___29890]));

var G__29891 = (i__21239__auto___29890 + (1));
i__21239__auto___29890 = G__29891;
continue;
} else {
}
break;
}

var G__29888 = args29886.length;
switch (G__29888) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29886.length)].join('')));

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
var args29893 = [];
var len__21238__auto___29896 = arguments.length;
var i__21239__auto___29897 = (0);
while(true){
if((i__21239__auto___29897 < len__21238__auto___29896)){
args29893.push((arguments[i__21239__auto___29897]));

var G__29898 = (i__21239__auto___29897 + (1));
i__21239__auto___29897 = G__29898;
continue;
} else {
}
break;
}

var G__29895 = args29893.length;
switch (G__29895) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29893.length)].join('')));

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
var args29900 = [];
var len__21238__auto___29903 = arguments.length;
var i__21239__auto___29904 = (0);
while(true){
if((i__21239__auto___29904 < len__21238__auto___29903)){
args29900.push((arguments[i__21239__auto___29904]));

var G__29905 = (i__21239__auto___29904 + (1));
i__21239__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var G__29902 = args29900.length;
switch (G__29902) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29900.length)].join('')));

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
var args29907 = [];
var len__21238__auto___29910 = arguments.length;
var i__21239__auto___29911 = (0);
while(true){
if((i__21239__auto___29911 < len__21238__auto___29910)){
args29907.push((arguments[i__21239__auto___29911]));

var G__29912 = (i__21239__auto___29911 + (1));
i__21239__auto___29911 = G__29912;
continue;
} else {
}
break;
}

var G__29909 = args29907.length;
switch (G__29909) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29907.length)].join('')));

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
var args29914 = [];
var len__21238__auto___29917 = arguments.length;
var i__21239__auto___29918 = (0);
while(true){
if((i__21239__auto___29918 < len__21238__auto___29917)){
args29914.push((arguments[i__21239__auto___29918]));

var G__29919 = (i__21239__auto___29918 + (1));
i__21239__auto___29918 = G__29919;
continue;
} else {
}
break;
}

var G__29916 = args29914.length;
switch (G__29916) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29914.length)].join('')));

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