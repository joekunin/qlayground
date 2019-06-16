// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.matrix');
goog.require('cljs.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');

/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.matrix.Object}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IShear}
 * @implements {thi.ng.math.core.IDeterminant}
 * @implements {thi.ng.math.core.ITranspose}
 * @implements {thi.ng.geom.core.IVectorTransform}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
*/
thi.ng.geom.matrix.Matrix32 = (function (m00,m01,m02,m10,m11,m12,_hasheq,_meta){
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this._hasheq = _hasheq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 31850714;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,matrix){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._STAR_.call(null,___$1,matrix);
});

thi.ng.geom.matrix.Matrix32.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str(self__.m00),cljs.core.str(" "),cljs.core.str(self__.m01),cljs.core.str(" "),cljs.core.str(self__.m02),cljs.core.str(" "),cljs.core.str(self__.m10),cljs.core.str(" "),cljs.core.str(self__.m11),cljs.core.str(" "),cljs.core.str(self__.m12),cljs.core.str("]")].join('');
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IDeterminant$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IDeterminant$determinant$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__30087 = (k | (0));
switch (G__30087) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m10;

break;
case (4):
return self__.m11;

break;
case (5):
return self__.m12;

break;
default:
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,k);

}
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__30088 = (k | (0));
switch (G__30088) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m10;

break;
case (4):
return self__.m11;

break;
case (5):
return self__.m12;

break;
default:
return nf;

}
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IShear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IShear$shear$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._STAR_.call(null,___$1,(new thi.ng.geom.matrix.Matrix32(1.0,((typeof s === 'number')?s:cljs.core.nth.call(null,s,(0))),0.0,((typeof s === 'number')?s:cljs.core.nth.call(null,s,(1))),1.0,0.0,null,self__._meta)));
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m10,self__.m11,self__.m12], null));
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (6);
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
return thi.ng.math.core._STAR_.call(null,___$1,(new thi.ng.geom.matrix.Matrix32(c,(- s),0.0,s,c,0.0,null,self__._meta)));
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var d = thi.ng.math.core.determinant.call(null,___$1);
if((d === (0))){
return null;
} else {
return (new thi.ng.geom.matrix.Matrix32((self__.m11 / d),(- (self__.m01 / d)),(((self__.m01 * self__.m12) - (self__.m11 * self__.m02)) / d),(- (self__.m10 / d)),(self__.m00 / d),(((self__.m10 * self__.m02) - (self__.m00 * self__.m12)) / d),null,self__._meta));
}
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._STAR_.call(null,___$1,(new thi.ng.geom.matrix.Matrix32(((typeof s === 'number')?s:cljs.core.nth.call(null,s,(0))),0.0,0.0,0.0,((typeof s === 'number')?s:cljs.core.nth.call(null,s,(1))),0.0,null,self__._meta)));
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__19807__auto__ = self__._hasheq;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return self__._hasheq = cljs.core.hash_ordered_coll.call(null,___$1);
}
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,m,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,m,eps){
var self__ = this;
var ___$1 = this;
var and__19795__auto__ = cljs.core.sequential_QMARK_.call(null,m);
if(and__19795__auto__){
var and__19795__auto____$1 = ((6) === cljs.core.count.call(null,m));
if(and__19795__auto____$1){
var and__19795__auto____$2 = thi.ng.math.core.delta_EQ_.call(null,self__.m00,cljs.core.first.call(null,m),eps);
if(cljs.core.truth_(and__19795__auto____$2)){
var and__19795__auto____$3 = thi.ng.math.core.delta_EQ_.call(null,self__.m01,cljs.core.nth.call(null,m,(1)),eps);
if(cljs.core.truth_(and__19795__auto____$3)){
var and__19795__auto____$4 = thi.ng.math.core.delta_EQ_.call(null,self__.m02,cljs.core.nth.call(null,m,(2)),eps);
if(cljs.core.truth_(and__19795__auto____$4)){
var and__19795__auto____$5 = thi.ng.math.core.delta_EQ_.call(null,self__.m10,cljs.core.nth.call(null,m,(3)),eps);
if(cljs.core.truth_(and__19795__auto____$5)){
var and__19795__auto____$6 = thi.ng.math.core.delta_EQ_.call(null,self__.m11,cljs.core.nth.call(null,m,(4)),eps);
if(cljs.core.truth_(and__19795__auto____$6)){
return thi.ng.math.core.delta_EQ_.call(null,self__.m12,cljs.core.nth.call(null,m,(5)),eps);
} else {
return and__19795__auto____$6;
}
} else {
return and__19795__auto____$5;
}
} else {
return and__19795__auto____$4;
}
} else {
return and__19795__auto____$3;
}
} else {
return and__19795__auto____$2;
}
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (cljs.core.sequential_QMARK_.call(null,o)) && (((6) === cljs.core.count.call(null,o))) && (cljs.core.every_QMARK_.call(null,((function (___$1){
return (function (p1__30086_SHARP_){
return cljs.core._EQ_.call(null,p1__30086_SHARP_.call(null,(0)),p1__30086_SHARP_.call(null,(1)));
});})(___$1))
,cljs.core.map.call(null,cljs.core.vector,___$1,o)));
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._STAR_.call(null,___$1,(new thi.ng.geom.matrix.Matrix32(1.0,0.0,((typeof t === 'number')?t:cljs.core.nth.call(null,t,(0))),0.0,1.0,((typeof t === 'number')?t:cljs.core.nth.call(null,t,(1))),null,self__._meta)));
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2 = (function (_,p__30089){
var self__ = this;
var vec__30090 = p__30089;
var x = cljs.core.nth.call(null,vec__30090,(0),null);
var y = cljs.core.nth.call(null,vec__30090,(1),null);
var v = vec__30090;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (((x * self__.m00) + (y * self__.m01)) + self__.m02));

(b[(1)] = (((x * self__.m10) + (y * self__.m11)) + self__.m12));

return (new thi.ng.geom.vector.Vec2(b,null,cljs.core.meta.call(null,v)));
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m10,self__.m11,self__.m12], null));
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m00;
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.matrix.Matrix32(self__.m00,self__.m01,self__.m02,self__.m10,self__.m11,self__.m12,self__._hasheq,m));
});

thi.ng.geom.matrix.Matrix32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m00,self__.m01,self__.m02,self__.m10,self__.m11,self__.m12,x], null);
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$ITranspose$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$ITranspose$transpose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.matrix.Matrix32(self__.m00,self__.m10,self__.m01,self__.m11,self__.m02,self__.m12,null,self__._meta));
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.matrix.Matrix32((self__.m00 + m__$1.m00),(self__.m01 + m__$1.m01),(self__.m02 + m__$1.m02),(self__.m10 + m__$1.m10),(self__.m11 + m__$1.m11),(self__.m12 + m__$1.m12),null,self__._meta));
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.matrix.Matrix32((self__.m00 - m__$1.m00),(self__.m01 - m__$1.m01),(self__.m02 - m__$1.m02),(self__.m10 - m__$1.m10),(self__.m11 - m__$1.m11),(self__.m12 - m__$1.m12),null,self__._meta));
});

thi.ng.geom.matrix.Matrix32.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.matrix.Matrix32(((self__.m00 * m__$1.m00) + (self__.m01 * m__$1.m10)),((self__.m00 * m__$1.m01) + (self__.m01 * m__$1.m11)),(((self__.m00 * m__$1.m02) + (self__.m01 * m__$1.m12)) + self__.m02),((self__.m10 * m__$1.m00) + (self__.m11 * m__$1.m10)),((self__.m10 * m__$1.m01) + (self__.m11 * m__$1.m11)),(((self__.m10 * m__$1.m02) + (self__.m11 * m__$1.m12)) + self__.m12),null,self__._meta));
});

thi.ng.geom.matrix.Matrix32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m00","m00",236909271,null),new cljs.core.Symbol(null,"m01","m01",-1573844190,null),new cljs.core.Symbol(null,"m02","m02",1667378534,null),new cljs.core.Symbol(null,"m10","m10",930266779,null),new cljs.core.Symbol(null,"m11","m11",-106606220,null),new cljs.core.Symbol(null,"m12","m12",405722345,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hasheq","_hasheq",-1509801429,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.matrix.Matrix32.cljs$lang$type = true;

thi.ng.geom.matrix.Matrix32.cljs$lang$ctorStr = "thi.ng.geom.matrix/Matrix32";

thi.ng.geom.matrix.Matrix32.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.matrix/Matrix32");
});

thi.ng.geom.matrix.__GT_Matrix32 = (function thi$ng$geom$matrix$__GT_Matrix32(m00,m01,m02,m10,m11,m12,_hasheq,_meta){
return (new thi.ng.geom.matrix.Matrix32(m00,m01,m02,m10,m11,m12,_hasheq,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.geom.matrix.Object}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.math.core.IDeterminant}
 * @implements {thi.ng.math.core.ITranspose}
 * @implements {thi.ng.geom.core.IVectorTransform}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
*/
thi.ng.geom.matrix.Matrix44 = (function (m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,_hasheq,_meta){
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
this._hasheq = _hasheq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 31850714;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,matrix){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._STAR_.call(null,___$1,matrix);
});

thi.ng.geom.matrix.Matrix44.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,"[",cljs.core.interpose.call(null," ",_),"]"));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IDeterminant$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IDeterminant$determinant$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b00 = ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));
var b01 = ((self__.m00 * self__.m12) - (self__.m02 * self__.m10));
var b02 = ((self__.m00 * self__.m13) - (self__.m03 * self__.m10));
var b03 = ((self__.m01 * self__.m12) - (self__.m02 * self__.m11));
var b04 = ((self__.m01 * self__.m13) - (self__.m03 * self__.m11));
var b05 = ((self__.m02 * self__.m13) - (self__.m03 * self__.m12));
var b06 = ((self__.m20 * self__.m31) - (self__.m21 * self__.m30));
var b07 = ((self__.m20 * self__.m32) - (self__.m22 * self__.m30));
var b08 = ((self__.m20 * self__.m33) - (self__.m23 * self__.m30));
var b09 = ((self__.m21 * self__.m32) - (self__.m22 * self__.m31));
var b10 = ((self__.m21 * self__.m33) - (self__.m23 * self__.m31));
var b11 = ((self__.m22 * self__.m33) - (self__.m23 * self__.m32));
return ((((b00 * b11) - (b01 * b10)) - (b04 * b07)) + (((b02 * b09) + (b03 * b08)) + (b05 * b06)));
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__30098 = (k | (0));
switch (G__30098) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m03;

break;
case (4):
return self__.m10;

break;
case (5):
return self__.m11;

break;
case (6):
return self__.m12;

break;
case (7):
return self__.m13;

break;
case (8):
return self__.m20;

break;
case (9):
return self__.m21;

break;
case (10):
return self__.m22;

break;
case (11):
return self__.m23;

break;
case (12):
return self__.m30;

break;
case (13):
return self__.m31;

break;
case (14):
return self__.m32;

break;
case (15):
return self__.m33;

break;
default:
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,k);

}
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__30099 = (k | (0));
switch (G__30099) {
case (0):
return self__.m00;

break;
case (1):
return self__.m01;

break;
case (2):
return self__.m02;

break;
case (3):
return self__.m03;

break;
case (4):
return self__.m10;

break;
case (5):
return self__.m11;

break;
case (6):
return self__.m12;

break;
case (7):
return self__.m13;

break;
case (8):
return self__.m20;

break;
case (9):
return self__.m21;

break;
case (10):
return self__.m22;

break;
case (11):
return self__.m23;

break;
case (12):
return self__.m30;

break;
case (13):
return self__.m31;

break;
case (14):
return self__.m32;

break;
case (15):
return self__.m33;

break;
default:
return nf;

}
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33], null));
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (16);
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n00 = ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));
var n01 = ((self__.m00 * self__.m12) - (self__.m02 * self__.m10));
var n02 = ((self__.m00 * self__.m13) - (self__.m03 * self__.m10));
var n03 = ((self__.m01 * self__.m12) - (self__.m02 * self__.m11));
var n04 = ((self__.m01 * self__.m13) - (self__.m03 * self__.m11));
var n05 = ((self__.m02 * self__.m13) - (self__.m03 * self__.m12));
var n06 = ((self__.m20 * self__.m31) - (self__.m21 * self__.m30));
var n07 = ((self__.m20 * self__.m32) - (self__.m22 * self__.m30));
var n08 = ((self__.m20 * self__.m33) - (self__.m23 * self__.m30));
var n09 = ((self__.m21 * self__.m32) - (self__.m22 * self__.m31));
var n10 = ((self__.m21 * self__.m33) - (self__.m23 * self__.m31));
var n11 = ((self__.m22 * self__.m33) - (self__.m23 * self__.m32));
var d = ((((n00 * n11) - (n01 * n10)) - (n04 * n07)) + (((n02 * n09) + (n03 * n08)) + (n05 * n06)));
if((d === (0))){
return null;
} else {
var invd = (1.0 / d);
return (new thi.ng.geom.matrix.Matrix44(((((self__.m11 * n11) - (self__.m12 * n10)) + (self__.m13 * n09)) * invd),((((self__.m02 * n10) - (self__.m03 * n09)) + ((- self__.m01) * n11)) * invd),((((self__.m31 * n05) - (self__.m32 * n04)) + (self__.m33 * n03)) * invd),((((self__.m22 * n04) - (self__.m23 * n03)) + ((- self__.m21) * n05)) * invd),((((self__.m12 * n08) - (self__.m13 * n07)) + ((- self__.m10) * n11)) * invd),((((self__.m00 * n11) - (self__.m02 * n08)) + (self__.m03 * n07)) * invd),((((self__.m32 * n02) - (self__.m33 * n01)) + ((- self__.m30) * n05)) * invd),((((self__.m20 * n05) - (self__.m22 * n02)) + (self__.m23 * n01)) * invd),((((self__.m10 * n10) - (self__.m11 * n08)) + (self__.m13 * n06)) * invd),((((self__.m01 * n08) - (self__.m03 * n06)) + ((- self__.m00) * n10)) * invd),((((self__.m30 * n04) - (self__.m31 * n02)) + (self__.m33 * n00)) * invd),((((self__.m21 * n02) - (self__.m23 * n00)) + ((- self__.m20) * n04)) * invd),((((self__.m11 * n07) - (self__.m12 * n06)) + ((- self__.m10) * n09)) * invd),((((self__.m00 * n09) - (self__.m01 * n07)) + (self__.m02 * n06)) * invd),((((self__.m31 * n01) - (self__.m32 * n00)) + ((- self__.m30) * n03)) * invd),((((self__.m20 * n03) - (self__.m21 * n01)) + (self__.m22 * n00)) * invd),null,self__._meta));
}
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var vec__30100 = ((typeof s === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,s,s], null):s);
var x = cljs.core.nth.call(null,vec__30100,(0),null);
var y = cljs.core.nth.call(null,vec__30100,(1),null);
var z = cljs.core.nth.call(null,vec__30100,(2),null);
return (new thi.ng.geom.matrix.Matrix44((self__.m00 * x),(self__.m01 * x),(self__.m02 * x),(self__.m03 * x),(self__.m10 * y),(self__.m11 * y),(self__.m12 * y),(self__.m13 * y),(self__.m20 * z),(self__.m21 * z),(self__.m22 * z),(self__.m23 * z),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__19807__auto__ = self__._hasheq;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return self__._hasheq = cljs.core.hash_ordered_coll.call(null,___$1);
}
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,m,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,m,eps){
var self__ = this;
var ___$1 = this;
var and__19795__auto__ = cljs.core.sequential_QMARK_.call(null,m);
if(and__19795__auto__){
var and__19795__auto____$1 = ((16) === cljs.core.count.call(null,m));
if(and__19795__auto____$1){
return thi.ng.math.core.delta_EQ_.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,___$1),m,eps);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (cljs.core.sequential_QMARK_.call(null,o)) && (((16) === cljs.core.count.call(null,o))) && (cljs.core.every_QMARK_.call(null,((function (___$1){
return (function (p1__30097_SHARP_){
return cljs.core._EQ_.call(null,p1__30097_SHARP_.call(null,(0)),p1__30097_SHARP_.call(null,(1)));
});})(___$1))
,cljs.core.map.call(null,cljs.core.vector,___$1,o)));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
var vec__30103 = ((typeof t === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,t,t], null):t);
var x = cljs.core.nth.call(null,vec__30103,(0),null);
var y = cljs.core.nth.call(null,vec__30103,(1),null);
var z = cljs.core.nth.call(null,vec__30103,(2),null);
return (new thi.ng.geom.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,((((self__.m00 * x) + (self__.m10 * y)) + (self__.m20 * z)) + self__.m30),((((self__.m01 * x) + (self__.m11 * y)) + (self__.m21 * z)) + self__.m31),((((self__.m02 * x) + (self__.m12 * y)) + (self__.m22 * z)) + self__.m32),((((self__.m03 * x) + (self__.m13 * y)) + (self__.m23 * z)) + self__.m33),null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2 = (function (_,p__30106){
var self__ = this;
var vec__30107 = p__30106;
var x = cljs.core.nth.call(null,vec__30107,(0),null);
var y = cljs.core.nth.call(null,vec__30107,(1),null);
var z = cljs.core.nth.call(null,vec__30107,(2),null);
var w = cljs.core.nth.call(null,vec__30107,(3),null);
var v = vec__30107;
var ___$1 = this;
if(cljs.core.truth_(w)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((x * self__.m00) + (y * self__.m10)) + (z * self__.m20)) + (w * self__.m30)),((((x * self__.m01) + (y * self__.m11)) + (z * self__.m21)) + (w * self__.m31)),((((x * self__.m02) + (y * self__.m12)) + (z * self__.m22)) + (w * self__.m32)),((((x * self__.m03) + (y * self__.m13)) + (z * self__.m23)) + (w * self__.m33))], null);
} else {
var b = (new Float32Array((3)));
(b[(0)] = ((((x * self__.m00) + (y * self__.m10)) + (z * self__.m20)) + self__.m30));

(b[(1)] = ((((x * self__.m01) + (y * self__.m11)) + (z * self__.m21)) + self__.m31));

(b[(2)] = ((((x * self__.m02) + (y * self__.m12)) + (z * self__.m22)) + self__.m32));

return (new thi.ng.geom.vector.Vec3(b,null,cljs.core.meta.call(null,v)));
}
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.next.call(null,___$1);
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m00;
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
return (new thi.ng.geom.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,((self__.m10 * c) + (self__.m20 * s)),((self__.m11 * c) + (self__.m21 * s)),((self__.m12 * c) + (self__.m22 * s)),((self__.m13 * c) + (self__.m23 * s)),((self__.m20 * c) - (self__.m10 * s)),((self__.m21 * c) - (self__.m11 * s)),((self__.m22 * c) - (self__.m12 * s)),((self__.m23 * c) - (self__.m13 * s)),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
return (new thi.ng.geom.matrix.Matrix44(((self__.m00 * c) - (self__.m20 * s)),((self__.m01 * c) - (self__.m21 * s)),((self__.m02 * c) - (self__.m22 * s)),((self__.m03 * c) - (self__.m23 * s)),self__.m10,self__.m11,self__.m12,self__.m13,((self__.m00 * s) + (self__.m20 * c)),((self__.m01 * s) + (self__.m21 * c)),((self__.m02 * s) + (self__.m22 * c)),((self__.m03 * s) + (self__.m23 * c)),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
return (new thi.ng.geom.matrix.Matrix44(((self__.m00 * c) + (self__.m10 * s)),((self__.m01 * c) + (self__.m11 * s)),((self__.m02 * c) + (self__.m12 * s)),((self__.m03 * c) + (self__.m13 * s)),((self__.m10 * c) - (self__.m00 * s)),((self__.m11 * c) - (self__.m01 * s)),((self__.m12 * c) - (self__.m02 * s)),((self__.m13 * c) - (self__.m03 * s)),self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,p__30110,theta){
var self__ = this;
var vec__30111 = p__30110;
var x = cljs.core.nth.call(null,vec__30111,(0),null);
var y = cljs.core.nth.call(null,vec__30111,(1),null);
var z = cljs.core.nth.call(null,vec__30111,(2),null);
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var sx = (s * x);
var sy = (s * y);
var sz = (s * z);
var t = (1.0 - c);
var tx = (t * x);
var ty = (t * y);
var b00 = ((tx * x) + c);
var b01 = ((tx * y) + sz);
var b02 = ((tx * z) - sy);
var b10 = ((ty * x) - sz);
var b11 = ((ty * y) + c);
var b12 = ((ty * z) + sx);
var b20 = ((tx * z) + sy);
var b21 = ((ty * z) - sx);
var b22 = (((t * z) * z) + c);
return (new thi.ng.geom.matrix.Matrix44((((self__.m00 * b00) + (self__.m10 * b01)) + (self__.m20 * b02)),(((self__.m01 * b00) + (self__.m11 * b01)) + (self__.m21 * b02)),(((self__.m02 * b00) + (self__.m12 * b01)) + (self__.m22 * b02)),(((self__.m03 * b00) + (self__.m13 * b01)) + (self__.m23 * b02)),(((self__.m00 * b10) + (self__.m10 * b11)) + (self__.m20 * b12)),(((self__.m01 * b10) + (self__.m11 * b11)) + (self__.m21 * b12)),(((self__.m02 * b10) + (self__.m12 * b11)) + (self__.m22 * b12)),(((self__.m03 * b10) + (self__.m13 * b11)) + (self__.m23 * b12)),(((self__.m00 * b20) + (self__.m10 * b21)) + (self__.m20 * b22)),(((self__.m01 * b20) + (self__.m11 * b21)) + (self__.m21 * b22)),(((self__.m02 * b20) + (self__.m12 * b21)) + (self__.m22 * b22)),(((self__.m03 * b20) + (self__.m13 * b21)) + (self__.m23 * b22)),self__.m30,self__.m31,self__.m32,self__.m33,null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33,self__._hasheq,m));
});

thi.ng.geom.matrix.Matrix44.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33,x], null);
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$ITranspose$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$ITranspose$transpose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.matrix.Matrix44(self__.m00,self__.m10,self__.m20,self__.m30,self__.m01,self__.m11,self__.m21,self__.m31,self__.m02,self__.m12,self__.m22,self__.m32,self__.m03,self__.m13,self__.m23,self__.m33,null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.matrix.Matrix44((self__.m00 + m__$1.m00),(self__.m01 + m__$1.m01),(self__.m02 + m__$1.m02),(self__.m03 + m__$1.m03),(self__.m10 + m__$1.m10),(self__.m11 + m__$1.m11),(self__.m12 + m__$1.m12),(self__.m13 + m__$1.m13),(self__.m20 + m__$1.m20),(self__.m21 + m__$1.m21),(self__.m22 + m__$1.m22),(self__.m23 + m__$1.m23),(self__.m30 + m__$1.m30),(self__.m31 + m__$1.m31),(self__.m32 + m__$1.m32),(self__.m33 + m__$1.m33),null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.matrix.Matrix44((self__.m00 - m__$1.m00),(self__.m01 - m__$1.m01),(self__.m02 - m__$1.m02),(self__.m03 - m__$1.m03),(self__.m10 - m__$1.m10),(self__.m11 - m__$1.m11),(self__.m12 - m__$1.m12),(self__.m13 - m__$1.m13),(self__.m20 - m__$1.m20),(self__.m21 - m__$1.m21),(self__.m22 - m__$1.m22),(self__.m23 - m__$1.m23),(self__.m30 - m__$1.m30),(self__.m31 - m__$1.m31),(self__.m32 - m__$1.m32),(self__.m33 - m__$1.m33),null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var m__$1 = m;
return (new thi.ng.geom.matrix.Matrix44(((((self__.m00 * m__$1.m00) + (self__.m10 * m__$1.m01)) + (self__.m20 * m__$1.m02)) + (self__.m30 * m__$1.m03)),((((self__.m01 * m__$1.m00) + (self__.m11 * m__$1.m01)) + (self__.m21 * m__$1.m02)) + (self__.m31 * m__$1.m03)),((((self__.m02 * m__$1.m00) + (self__.m12 * m__$1.m01)) + (self__.m22 * m__$1.m02)) + (self__.m32 * m__$1.m03)),((((self__.m03 * m__$1.m00) + (self__.m13 * m__$1.m01)) + (self__.m23 * m__$1.m02)) + (self__.m33 * m__$1.m03)),((((self__.m00 * m__$1.m10) + (self__.m10 * m__$1.m11)) + (self__.m20 * m__$1.m12)) + (self__.m30 * m__$1.m13)),((((self__.m01 * m__$1.m10) + (self__.m11 * m__$1.m11)) + (self__.m21 * m__$1.m12)) + (self__.m31 * m__$1.m13)),((((self__.m02 * m__$1.m10) + (self__.m12 * m__$1.m11)) + (self__.m22 * m__$1.m12)) + (self__.m32 * m__$1.m13)),((((self__.m03 * m__$1.m10) + (self__.m13 * m__$1.m11)) + (self__.m23 * m__$1.m12)) + (self__.m33 * m__$1.m13)),((((self__.m00 * m__$1.m20) + (self__.m10 * m__$1.m21)) + (self__.m20 * m__$1.m22)) + (self__.m30 * m__$1.m23)),((((self__.m01 * m__$1.m20) + (self__.m11 * m__$1.m21)) + (self__.m21 * m__$1.m22)) + (self__.m31 * m__$1.m23)),((((self__.m02 * m__$1.m20) + (self__.m12 * m__$1.m21)) + (self__.m22 * m__$1.m22)) + (self__.m32 * m__$1.m23)),((((self__.m03 * m__$1.m20) + (self__.m13 * m__$1.m21)) + (self__.m23 * m__$1.m22)) + (self__.m33 * m__$1.m23)),((((self__.m00 * m__$1.m30) + (self__.m10 * m__$1.m31)) + (self__.m20 * m__$1.m32)) + (self__.m30 * m__$1.m33)),((((self__.m01 * m__$1.m30) + (self__.m11 * m__$1.m31)) + (self__.m21 * m__$1.m32)) + (self__.m31 * m__$1.m33)),((((self__.m02 * m__$1.m30) + (self__.m12 * m__$1.m31)) + (self__.m22 * m__$1.m32)) + (self__.m32 * m__$1.m33)),((((self__.m03 * m__$1.m30) + (self__.m13 * m__$1.m31)) + (self__.m23 * m__$1.m32)) + (self__.m33 * m__$1.m33)),null,self__._meta));
});

thi.ng.geom.matrix.Matrix44.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m00","m00",236909271,null),new cljs.core.Symbol(null,"m01","m01",-1573844190,null),new cljs.core.Symbol(null,"m02","m02",1667378534,null),new cljs.core.Symbol(null,"m03","m03",-1771613944,null),new cljs.core.Symbol(null,"m10","m10",930266779,null),new cljs.core.Symbol(null,"m11","m11",-106606220,null),new cljs.core.Symbol(null,"m12","m12",405722345,null),new cljs.core.Symbol(null,"m13","m13",446740010,null),new cljs.core.Symbol(null,"m20","m20",893570591,null),new cljs.core.Symbol(null,"m21","m21",-832208920,null),new cljs.core.Symbol(null,"m22","m22",-939822876,null),new cljs.core.Symbol(null,"m23","m23",-565099055,null),new cljs.core.Symbol(null,"m30","m30",-890772748,null),new cljs.core.Symbol(null,"m31","m31",961901948,null),new cljs.core.Symbol(null,"m32","m32",-1947713286,null),new cljs.core.Symbol(null,"m33","m33",-1504718133,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hasheq","_hasheq",-1509801429,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.matrix.Matrix44.cljs$lang$type = true;

thi.ng.geom.matrix.Matrix44.cljs$lang$ctorStr = "thi.ng.geom.matrix/Matrix44";

thi.ng.geom.matrix.Matrix44.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.matrix/Matrix44");
});

thi.ng.geom.matrix.__GT_Matrix44 = (function thi$ng$geom$matrix$__GT_Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,_hasheq,_meta){
return (new thi.ng.geom.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,_hasheq,_meta));
});

thi.ng.geom.matrix.M32 = (new thi.ng.geom.matrix.Matrix32(1.0,0.0,0.0,0.0,1.0,0.0,null,null));
thi.ng.geom.matrix.M44 = (new thi.ng.geom.matrix.Matrix44(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,null,null));
thi.ng.geom.matrix.matrix32 = (function thi$ng$geom$matrix$matrix32(var_args){
var args30116 = [];
var len__21023__auto___30123 = arguments.length;
var i__21024__auto___30124 = (0);
while(true){
if((i__21024__auto___30124 < len__21023__auto___30123)){
args30116.push((arguments[i__21024__auto___30124]));

var G__30125 = (i__21024__auto___30124 + (1));
i__21024__auto___30124 = G__30125;
continue;
} else {
}
break;
}

var G__30118 = args30116.length;
switch (G__30118) {
case 0:
return thi.ng.geom.matrix.matrix32.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.matrix.matrix32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 6:
return thi.ng.geom.matrix.matrix32.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30116.length)].join('')));

}
});

thi.ng.geom.matrix.matrix32.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.matrix.M32;
});

thi.ng.geom.matrix.matrix32.cljs$core$IFn$_invoke$arity$1 = (function (p__30119){
var vec__30120 = p__30119;
var m00 = cljs.core.nth.call(null,vec__30120,(0),null);
var m01 = cljs.core.nth.call(null,vec__30120,(1),null);
var m02 = cljs.core.nth.call(null,vec__30120,(2),null);
var m10 = cljs.core.nth.call(null,vec__30120,(3),null);
var m11 = cljs.core.nth.call(null,vec__30120,(4),null);
var m12 = cljs.core.nth.call(null,vec__30120,(5),null);
return (new thi.ng.geom.matrix.Matrix32(m00,m01,m02,m10,m11,m12,null,null));
});

thi.ng.geom.matrix.matrix32.cljs$core$IFn$_invoke$arity$6 = (function (m00,m01,m02,m10,m11,m12){
return (new thi.ng.geom.matrix.Matrix32(m00,m01,m02,m10,m11,m12,null,null));
});

thi.ng.geom.matrix.matrix32.cljs$lang$maxFixedArity = 6;

thi.ng.geom.matrix.matrix44 = (function thi$ng$geom$matrix$matrix44(var_args){
var args30127 = [];
var len__21023__auto___30134 = arguments.length;
var i__21024__auto___30135 = (0);
while(true){
if((i__21024__auto___30135 < len__21023__auto___30134)){
args30127.push((arguments[i__21024__auto___30135]));

var G__30136 = (i__21024__auto___30135 + (1));
i__21024__auto___30135 = G__30136;
continue;
} else {
}
break;
}

var G__30129 = args30127.length;
switch (G__30129) {
case 0:
return thi.ng.geom.matrix.matrix44.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.matrix.matrix44.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 16:
return thi.ng.geom.matrix.matrix44.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30127.length)].join('')));

}
});

thi.ng.geom.matrix.matrix44.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.matrix.M44;
});

thi.ng.geom.matrix.matrix44.cljs$core$IFn$_invoke$arity$1 = (function (p__30130){
var vec__30131 = p__30130;
var m00 = cljs.core.nth.call(null,vec__30131,(0),null);
var m01 = cljs.core.nth.call(null,vec__30131,(1),null);
var m02 = cljs.core.nth.call(null,vec__30131,(2),null);
var m03 = cljs.core.nth.call(null,vec__30131,(3),null);
var m10 = cljs.core.nth.call(null,vec__30131,(4),null);
var m11 = cljs.core.nth.call(null,vec__30131,(5),null);
var m12 = cljs.core.nth.call(null,vec__30131,(6),null);
var m13 = cljs.core.nth.call(null,vec__30131,(7),null);
var m20 = cljs.core.nth.call(null,vec__30131,(8),null);
var m21 = cljs.core.nth.call(null,vec__30131,(9),null);
var m22 = cljs.core.nth.call(null,vec__30131,(10),null);
var m23 = cljs.core.nth.call(null,vec__30131,(11),null);
var m30 = cljs.core.nth.call(null,vec__30131,(12),null);
var m31 = cljs.core.nth.call(null,vec__30131,(13),null);
var m32 = cljs.core.nth.call(null,vec__30131,(14),null);
var m33 = cljs.core.nth.call(null,vec__30131,(15),null);
return (new thi.ng.geom.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,null,null));
});

thi.ng.geom.matrix.matrix44.cljs$core$IFn$_invoke$arity$16 = (function (m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){
return (new thi.ng.geom.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33,null,null));
});

thi.ng.geom.matrix.matrix44.cljs$lang$maxFixedArity = 16;

thi.ng.geom.matrix.matrix44__GT_matrix33 = (function thi$ng$geom$matrix$matrix44__GT_matrix33(p__30138){
var vec__30142 = p__30138;
var m00 = cljs.core.nth.call(null,vec__30142,(0),null);
var m01 = cljs.core.nth.call(null,vec__30142,(1),null);
var m02 = cljs.core.nth.call(null,vec__30142,(2),null);
var _ = cljs.core.nth.call(null,vec__30142,(3),null);
var m10 = cljs.core.nth.call(null,vec__30142,(4),null);
var m11 = cljs.core.nth.call(null,vec__30142,(5),null);
var m12 = cljs.core.nth.call(null,vec__30142,(6),null);
var ___$1 = cljs.core.nth.call(null,vec__30142,(7),null);
var m20 = cljs.core.nth.call(null,vec__30142,(8),null);
var m21 = cljs.core.nth.call(null,vec__30142,(9),null);
var m22 = cljs.core.nth.call(null,vec__30142,(10),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [m00,m01,m02,m10,m11,m12,m20,m21,m22], null);
});
thi.ng.geom.matrix.matrix44__GT_matrix33_rot = (function thi$ng$geom$matrix$matrix44__GT_matrix33_rot(p__30145){
var vec__30149 = p__30145;
var m00 = cljs.core.nth.call(null,vec__30149,(0),null);
var m01 = cljs.core.nth.call(null,vec__30149,(1),null);
var m02 = cljs.core.nth.call(null,vec__30149,(2),null);
var _ = cljs.core.nth.call(null,vec__30149,(3),null);
var m10 = cljs.core.nth.call(null,vec__30149,(4),null);
var m11 = cljs.core.nth.call(null,vec__30149,(5),null);
var m12 = cljs.core.nth.call(null,vec__30149,(6),null);
var ___$1 = cljs.core.nth.call(null,vec__30149,(7),null);
var m20 = cljs.core.nth.call(null,vec__30149,(8),null);
var m21 = cljs.core.nth.call(null,vec__30149,(9),null);
var m22 = cljs.core.nth.call(null,vec__30149,(10),null);
var b01 = ((m22 * m11) - (m12 * m21));
var b11 = ((m12 * m20) - (m22 * m10));
var b21 = ((m21 * m10) - (m11 * m20));
var invd = ((1) / (((m00 * b01) + (m01 * b11)) + (m02 * b21)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(b01 * invd),(b11 * invd),(b21 * invd),(((m02 * m21) - (m22 * m01)) * invd),(((m22 * m00) - (m02 * m20)) * invd),(((m01 * m20) - (m21 * m00)) * invd),(((m12 * m01) - (m02 * m11)) * invd),(((m02 * m10) - (m12 * m00)) * invd),(((m11 * m00) - (m01 * m10)) * invd)], null);
});
/**
 * Sets up a viewing frustum, shaped like a truncated pyramid with the
 *   camera where the tip of the pyramid would be.
 *   This emulates the OpenGL function glFrustum().
 */
thi.ng.geom.matrix.frustum = (function thi$ng$geom$matrix$frustum(l,t,r,b,n,f){
var dx = ((1) / (r - l));
var dy = ((1) / (t - b));
var dz = ((1) / (n - f));
var n2 = (2.0 * n);
return (new thi.ng.geom.matrix.Matrix44((n2 * dx),0.0,0.0,0.0,0.0,(n2 * dy),0.0,0.0,((l + r) * dx),((t + b) * dy),((n + f) * dz),-1.0,0.0,0.0,((n2 * f) * dz),0.0,null,null));
});
/**
 * Given vertical FOV in degrees, aspect ratio and near plane
 *   distance, computes map of left/right/top/bottom view frustum
 *   bounds.
 */
thi.ng.geom.matrix.frustum_bounds = (function thi$ng$geom$matrix$frustum_bounds(fovy,aspect,near){
var top = (near * Math.tan((0.5 * thi.ng.math.core.radians.call(null,fovy))));
var right = (top * aspect);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(- right),new cljs.core.Keyword(null,"right","right",-452581833),right,new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(- top)], null);
});
/**
 * Given a view matrix & projection matrix, returns vector of the
 *   frustum's 6 plane parameters, each a 2-element vector: [normal w]
 *   Planes are ordered: left, right, top, bottom, near, far. These
 *   coefficients can then (for example) be used for AABB-frustum culling
 *   with thi.ng.geom.utils.intersect/intersect-aabb-frustum?
 */
thi.ng.geom.matrix.frustum_planes = (function thi$ng$geom$matrix$frustum_planes(view,proj){
var pv = thi.ng.math.core.transpose.call(null,thi.ng.math.core._STAR_.call(null,proj,view));
var m30 = (- pv.m30);
var m31 = (- pv.m31);
var m32 = (- pv.m32);
var m33 = (- pv.m33);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(m30 - pv.m00),(m31 - pv.m01),(m32 - pv.m02)),(m33 - pv.m03)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(m30 + pv.m00),(m31 + pv.m01),(m32 + pv.m02)),(m33 + pv.m03)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(m30 - pv.m10),(m31 - pv.m11),(m32 - pv.m12)),(m33 - pv.m13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(m30 + pv.m10),(m31 + pv.m11),(m32 + pv.m12)),(m33 + pv.m13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(m30 - pv.m20),(m31 - pv.m21),(m32 - pv.m22)),(m33 - pv.m23)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(m30 + pv.m20),(m31 + pv.m21),(m32 + pv.m22)),(m33 + pv.m23)], null)], null);
});
/**
 * Returns an orthographic projection matrix, in which objects are the
 *   same size no matter how far away or nearby they are. This emulates
 *   the OpenGL function glOrtho().
 */
thi.ng.geom.matrix.ortho = (function thi$ng$geom$matrix$ortho(var_args){
var args30152 = [];
var len__21023__auto___30155 = arguments.length;
var i__21024__auto___30156 = (0);
while(true){
if((i__21024__auto___30156 < len__21023__auto___30155)){
args30152.push((arguments[i__21024__auto___30156]));

var G__30157 = (i__21024__auto___30156 + (1));
i__21024__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var G__30154 = args30152.length;
switch (G__30154) {
case 0:
return thi.ng.geom.matrix.ortho.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.matrix.ortho.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 6:
return thi.ng.geom.matrix.ortho.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30152.length)].join('')));

}
});

thi.ng.geom.matrix.ortho.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.matrix.ortho.call(null,(-1),(-1),(1),(1),(-1),(1));
});

thi.ng.geom.matrix.ortho.cljs$core$IFn$_invoke$arity$1 = (function (view_rect){
var a = cljs.core.apply.call(null,cljs.core._SLASH_,cljs.core.get.call(null,view_rect,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
return thi.ng.geom.matrix.ortho.call(null,(- a),(1),a,(-1),(-1),(1));
});

thi.ng.geom.matrix.ortho.cljs$core$IFn$_invoke$arity$6 = (function (left,top,right,bottom,near,far){
var dx = ((1) / (left - right));
var dy = ((1) / (bottom - top));
var dz = ((1) / (near - far));
return (new thi.ng.geom.matrix.Matrix44((-2.0 * dx),0.0,0.0,0.0,0.0,(-2.0 * dy),0.0,0.0,0.0,0.0,(2.0 * dz),0.0,((left + right) * dx),((top + bottom) * dy),((near + far) * dz),1.0,null,null));
});

thi.ng.geom.matrix.ortho.cljs$lang$maxFixedArity = 6;

/**
 * Returns a perspective transform matrix, which makes far away
 *   objects appear smaller than nearby objects. `fovy` is the vertical
 *   angle of the field of view in degrees. The `aspect` argument should
 *   be a rect, a map with a `:size` key (vec2) or the width divided by
 *   the height of your viewport. `near` and `far` are the distances of
 *   the clipping planes.
 */
thi.ng.geom.matrix.perspective = (function thi$ng$geom$matrix$perspective(fovy,aspect,near,far){
var f = ((1) / Math.tan((0.5 * thi.ng.math.core.radians.call(null,fovy))));
var nf = ((1) / (near - far));
var aspect__$1 = ((cljs.core.map_QMARK_.call(null,aspect))?cljs.core.apply.call(null,cljs.core._SLASH_,cljs.core.get.call(null,aspect,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))):aspect);
return (new thi.ng.geom.matrix.Matrix44((f / aspect__$1),0.0,0.0,0.0,0.0,f,0.0,0.0,0.0,0.0,((near + far) * nf),-1.0,0.0,0.0,(((2.0 * near) * far) * nf),0.0,null,null));
});
thi.ng.geom.matrix.perspective_frustum = (function thi$ng$geom$matrix$perspective_frustum(fov,aspect,near,far){
var map__30161 = thi.ng.geom.matrix.frustum_bounds.call(null,fov,aspect,near);
var map__30161__$1 = ((((!((map__30161 == null)))?((((map__30161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30161):map__30161);
var left = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var top = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var bottom = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
return thi.ng.geom.matrix.frustum.call(null,left,top,right,bottom,near,far);
});
/**
 * Takes 6 numbers representing eye & target positions, computes up
 *   vector and returns vector of all three vec3's.
 */
thi.ng.geom.matrix.look_at_vectors = (function thi$ng$geom$matrix$look_at_vectors(ex,ey,ez,tx,ty,tz){
var eye = thi.ng.geom.vector.vec3.call(null,ex,ey,ez);
var target = thi.ng.geom.vector.vec3.call(null,tx,ty,tz);
var up = thi.ng.geom.utils.ortho_normal.call(null,thi.ng.math.core._.call(null,eye,target),thi.ng.geom.vector.V3X);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [eye,target,up], null);
});
/**
 * Returns a matrix that puts the camera at the eye position looking
 *   toward the target point with the given up direction.
 */
thi.ng.geom.matrix.look_at = (function thi$ng$geom$matrix$look_at(eye,target,up){
var dir = thi.ng.math.core._.call(null,eye,target);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.vector.V3,dir))){
return thi.ng.geom.matrix.M44;
} else {
var vec__30172 = thi.ng.math.core.normalize.call(null,dir);
var zx = cljs.core.nth.call(null,vec__30172,(0),null);
var zy = cljs.core.nth.call(null,vec__30172,(1),null);
var zz = cljs.core.nth.call(null,vec__30172,(2),null);
var z = vec__30172;
var vec__30175 = thi.ng.geom.utils.ortho_normal.call(null,up,z);
var xx = cljs.core.nth.call(null,vec__30175,(0),null);
var xy = cljs.core.nth.call(null,vec__30175,(1),null);
var xz = cljs.core.nth.call(null,vec__30175,(2),null);
var x = vec__30175;
var vec__30178 = thi.ng.geom.utils.ortho_normal.call(null,z,x);
var yx = cljs.core.nth.call(null,vec__30178,(0),null);
var yy = cljs.core.nth.call(null,vec__30178,(1),null);
var yz = cljs.core.nth.call(null,vec__30178,(2),null);
var y = vec__30178;
return (new thi.ng.geom.matrix.Matrix44(xx,yx,zx,0.0,xy,yy,zy,0.0,xz,yz,zz,0.0,(- thi.ng.math.core.dot.call(null,x,eye)),(- thi.ng.math.core.dot.call(null,y,eye)),(- thi.ng.math.core.dot.call(null,z,eye)),1.0,null,null));
}
});
/**
 * Given viewport width/height, computes a 2D transformation matrix
 *   mapping normalized coordinates to screen space. If invert-y? is
 *   true, the Y axis is flipped.
 */
thi.ng.geom.matrix.viewport_matrix = (function thi$ng$geom$matrix$viewport_matrix(var_args){
var args30181 = [];
var len__21023__auto___30184 = arguments.length;
var i__21024__auto___30185 = (0);
while(true){
if((i__21024__auto___30185 < len__21023__auto___30184)){
args30181.push((arguments[i__21024__auto___30185]));

var G__30186 = (i__21024__auto___30185 + (1));
i__21024__auto___30185 = G__30186;
continue;
} else {
}
break;
}

var G__30183 = args30181.length;
switch (G__30183) {
case 2:
return thi.ng.geom.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30181.length)].join('')));

}
});

thi.ng.geom.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return thi.ng.geom.matrix.viewport_matrix.call(null,width,height,false);
});

thi.ng.geom.matrix.viewport_matrix.cljs$core$IFn$_invoke$arity$3 = (function (width,height,invert_y_QMARK_){
var w2 = (width / 2.0);
var h2 = (height / 2.0);
return thi.ng.math.core._STAR_.call(null,thi.ng.geom.core.translate.call(null,thi.ng.geom.matrix.M32,thi.ng.geom.vector.vec2.call(null,w2,h2)),thi.ng.geom.core.scale.call(null,thi.ng.geom.matrix.M32,thi.ng.geom.vector.vec2.call(null,w2,(cljs.core.truth_(invert_y_QMARK_)?h2:(- h2)))));
});

thi.ng.geom.matrix.viewport_matrix.cljs$lang$maxFixedArity = 3;

/**
 * Projects 3D point p using MVP matrix into 2D and the applies
 *   viewport matrix to produce screen coordinate.
 */
thi.ng.geom.matrix.project_point = (function thi$ng$geom$matrix$project_point(p,mvp,vtx){
var vec__30191 = thi.ng.geom.core.transform_vector.call(null,mvp,cljs.core.conj.call(null,thi.ng.geom.vector.vec3.call(null,p),(1)));
var x = cljs.core.nth.call(null,vec__30191,(0),null);
var y = cljs.core.nth.call(null,vec__30191,(1),null);
var _ = cljs.core.nth.call(null,vec__30191,(2),null);
var w = cljs.core.nth.call(null,vec__30191,(3),null);
return thi.ng.geom.core.transform_vector.call(null,vtx,thi.ng.math.core.div.call(null,thi.ng.geom.vector.vec2.call(null,x,y),w));
});
/**
 * Like project-point, but returns vec3 with z component representing
 *   depth value.
 */
thi.ng.geom.matrix.project_point_z = (function thi$ng$geom$matrix$project_point_z(p,mvp,vtx){
var vec__30197 = thi.ng.geom.core.transform_vector.call(null,mvp,cljs.core.conj.call(null,thi.ng.geom.vector.vec3.call(null,p),(1)));
var x = cljs.core.nth.call(null,vec__30197,(0),null);
var y = cljs.core.nth.call(null,vec__30197,(1),null);
var z = cljs.core.nth.call(null,vec__30197,(2),null);
var w = cljs.core.nth.call(null,vec__30197,(3),null);
return thi.ng.geom.vector.vec3.call(null,thi.ng.geom.core.transform_vector.call(null,vtx,thi.ng.math.core.div.call(null,thi.ng.geom.vector.vec2.call(null,x,y),w)),(z / w));
});
/**
 * Takes a vec3 in screenspace, view matrix, projection matrix and
 *   screen rect. A second arity exists accepting an already inverted
 *   view-projection matrix instead of having to supply view & proj
 *   separately. Returns vector in world space or nil if matrix is not
 *   invertible.
 */
thi.ng.geom.matrix.unproject_point = (function thi$ng$geom$matrix$unproject_point(var_args){
var args30200 = [];
var len__21023__auto___30216 = arguments.length;
var i__21024__auto___30217 = (0);
while(true){
if((i__21024__auto___30217 < len__21023__auto___30216)){
args30200.push((arguments[i__21024__auto___30217]));

var G__30218 = (i__21024__auto___30217 + (1));
i__21024__auto___30217 = G__30218;
continue;
} else {
}
break;
}

var G__30202 = args30200.length;
switch (G__30202) {
case 4:
return thi.ng.geom.matrix.unproject_point.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.matrix.unproject_point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.geom.matrix.unproject_point.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30200.length)].join('')));

}
});

thi.ng.geom.matrix.unproject_point.cljs$core$IFn$_invoke$arity$4 = (function (p,view,proj,screen_rect){
var temp__5718__auto__ = thi.ng.math.core.invert.call(null,thi.ng.math.core._STAR_.call(null,proj,view));
if(cljs.core.truth_(temp__5718__auto__)){
var inv_mat = temp__5718__auto__;
return thi.ng.geom.matrix.unproject_point.call(null,p,inv_mat,screen_rect);
} else {
return null;
}
});

thi.ng.geom.matrix.unproject_point.cljs$core$IFn$_invoke$arity$3 = (function (p,inv_mat,p__30203){
var map__30204 = p__30203;
var map__30204__$1 = ((((!((map__30204 == null)))?((((map__30204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30204):map__30204);
var vec__30205 = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vx = cljs.core.nth.call(null,vec__30205,(0),null);
var vy = cljs.core.nth.call(null,vec__30205,(1),null);
var vec__30208 = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__30208,(0),null);
var h = cljs.core.nth.call(null,vec__30208,(1),null);
return thi.ng.geom.matrix.unproject_point.call(null,p,inv_mat,vx,vy,w,h);
});

thi.ng.geom.matrix.unproject_point.cljs$core$IFn$_invoke$arity$6 = (function (p__30212,inv_mat,vx,vy,w,h){
var vec__30213 = p__30212;
var x = cljs.core.nth.call(null,vec__30213,(0),null);
var y = cljs.core.nth.call(null,vec__30213,(1),null);
var z = cljs.core.nth.call(null,vec__30213,(2),null);
var x_SINGLEQUOTE_ = (((2.0 * (x - vx)) / w) - (1));
var y_SINGLEQUOTE_ = (((2.0 * (((h - y) - (1)) - vy)) / h) - (1));
var z_SINGLEQUOTE_ = ((z * 2.0) - (1));
var p_SINGLEQUOTE_ = thi.ng.geom.core.transform_vector.call(null,inv_mat,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_SINGLEQUOTE_,y_SINGLEQUOTE_,z_SINGLEQUOTE_], null));
return thi.ng.math.core._STAR_.call(null,p_SINGLEQUOTE_,((1) / ((((x_SINGLEQUOTE_ * inv_mat.m03) + (y_SINGLEQUOTE_ * inv_mat.m13)) + (z_SINGLEQUOTE_ * inv_mat.m23)) + inv_mat.m33)));
});

thi.ng.geom.matrix.unproject_point.cljs$lang$maxFixedArity = 6;


//# sourceMappingURL=matrix.js.map