// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.utils.intersect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
thi.ng.geom.utils.intersect.sq = (function thi$ng$geom$utils$intersect$sq(x){
return (x * x);
});
thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_circle_circle_QMARK_(var_args){
var args32243 = [];
var len__21023__auto___32252 = arguments.length;
var i__21024__auto___32253 = (0);
while(true){
if((i__21024__auto___32253 < len__21023__auto___32252)){
args32243.push((arguments[i__21024__auto___32253]));

var G__32254 = (i__21024__auto___32253 + (1));
i__21024__auto___32253 = G__32254;
continue;
} else {
}
break;
}

var G__32245 = args32243.length;
switch (G__32245) {
case 2:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32243.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32246,p__32247){
var map__32248 = p__32246;
var map__32248__$1 = ((((!((map__32248 == null)))?((((map__32248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32248):map__32248);
var p = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__32248__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__32249 = p__32247;
var map__32249__$1 = ((((!((map__32249 == null)))?((((map__32249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32249):map__32249);
var q = cljs.core.get.call(null,map__32249__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__32249__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.call(null,p,r1,q,r2);
});

thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.math.core._.call(null,q,p);
var d = thi.ng.math.core.mag.call(null,delta);
if(((d <= (r1 + r2))) && ((d >= thi.ng.math.core.abs_STAR_.call(null,(r1 - r2))))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.math.core.madd.call(null,delta,(a * invd),p);
var h = Math.sqrt(((r1 * r1) - (a * a)));
var perp = thi.ng.math.core._STAR_.call(null,thi.ng.geom.core.normal.call(null,delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_.call(null,p__$1,perp),thi.ng.math.core._.call(null,p__$1,perp)], null);
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_rect_QMARK_(var_args){
var args32256 = [];
var len__21023__auto___32293 = arguments.length;
var i__21024__auto___32294 = (0);
while(true){
if((i__21024__auto___32294 < len__21023__auto___32293)){
args32256.push((arguments[i__21024__auto___32294]));

var G__32295 = (i__21024__auto___32294 + (1));
i__21024__auto___32294 = G__32295;
continue;
} else {
}
break;
}

var G__32258 = args32256.length;
switch (G__32258) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32256.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32259,p__32260){
var map__32261 = p__32259;
var map__32261__$1 = ((((!((map__32261 == null)))?((((map__32261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32261):map__32261);
var vec__32262 = cljs.core.get.call(null,map__32261__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__32262,(0),null);
var py = cljs.core.nth.call(null,vec__32262,(1),null);
var vec__32265 = cljs.core.get.call(null,map__32261__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__32265,(0),null);
var h = cljs.core.nth.call(null,vec__32265,(1),null);
var map__32268 = p__32260;
var map__32268__$1 = ((((!((map__32268 == null)))?((((map__32268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32268):map__32268);
var vec__32269 = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.call(null,vec__32269,(0),null);
var qy = cljs.core.nth.call(null,vec__32269,(1),null);
var vec__32272 = cljs.core.get.call(null,map__32268__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.call(null,vec__32272,(0),null);
var qh = cljs.core.nth.call(null,vec__32272,(1),null);
return !(((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))));
});

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__32277,p__32278,p__32279,p__32280){
var vec__32281 = p__32277;
var px1 = cljs.core.nth.call(null,vec__32281,(0),null);
var py1 = cljs.core.nth.call(null,vec__32281,(1),null);
var vec__32284 = p__32278;
var qx1 = cljs.core.nth.call(null,vec__32284,(0),null);
var qy1 = cljs.core.nth.call(null,vec__32284,(1),null);
var vec__32287 = p__32279;
var px2 = cljs.core.nth.call(null,vec__32287,(0),null);
var py2 = cljs.core.nth.call(null,vec__32287,(1),null);
var vec__32290 = p__32280;
var qx2 = cljs.core.nth.call(null,vec__32290,(0),null);
var qy2 = cljs.core.nth.call(null,vec__32290,(1),null);
return !(((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)));
});

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_circle_QMARK_(var_args){
var args32297 = [];
var len__21023__auto___32318 = arguments.length;
var i__21024__auto___32319 = (0);
while(true){
if((i__21024__auto___32319 < len__21023__auto___32318)){
args32297.push((arguments[i__21024__auto___32319]));

var G__32320 = (i__21024__auto___32319 + (1));
i__21024__auto___32319 = G__32320;
continue;
} else {
}
break;
}

var G__32299 = args32297.length;
switch (G__32299) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32297.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32300,p__32301){
var map__32302 = p__32300;
var map__32302__$1 = ((((!((map__32302 == null)))?((((map__32302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32302):map__32302);
var p = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__32303 = p__32301;
var map__32303__$1 = ((((!((map__32303 == null)))?((((map__32303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32303):map__32303);
var s = cljs.core.get.call(null,map__32303__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__32303__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.call(null,p,thi.ng.math.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__32306,p__32307,p__32308,r){
var vec__32309 = p__32306;
var px = cljs.core.nth.call(null,vec__32309,(0),null);
var py = cljs.core.nth.call(null,vec__32309,(1),null);
var vec__32312 = p__32307;
var qx = cljs.core.nth.call(null,vec__32312,(0),null);
var qy = cljs.core.nth.call(null,vec__32312,(1),null);
var vec__32315 = p__32308;
var cx = cljs.core.nth.call(null,vec__32315,(0),null);
var cy = cljs.core.nth.call(null,vec__32315,(1),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq.call(null,(cy - qy)):0.0)));
return (ds__$1 <= (r * r));
});

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_aabb_QMARK_(var_args){
var args32322 = [];
var len__21023__auto___32331 = arguments.length;
var i__21024__auto___32332 = (0);
while(true){
if((i__21024__auto___32332 < len__21023__auto___32331)){
args32322.push((arguments[i__21024__auto___32332]));

var G__32333 = (i__21024__auto___32332 + (1));
i__21024__auto___32332 = G__32333;
continue;
} else {
}
break;
}

var G__32324 = args32322.length;
switch (G__32324) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32322.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32325,p__32326){
var map__32327 = p__32325;
var map__32327__$1 = ((((!((map__32327 == null)))?((((map__32327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32327):map__32327);
var pa = cljs.core.get.call(null,map__32327__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__32327__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__32328 = p__32326;
var map__32328__$1 = ((((!((map__32328 == null)))?((((map__32328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32328):map__32328);
var pb = cljs.core.get.call(null,map__32328__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__32328__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.call(null,pa,pb,thi.ng.math.core._PLUS_.call(null,pa,sa),thi.ng.math.core._PLUS_.call(null,pb,sb));
});

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((pa.call(null,(0)) <= qb.call(null,(0)))) && ((pb.call(null,(0)) <= qa.call(null,(0))))){
if(((pa.call(null,(1)) <= qb.call(null,(1)))) && ((pb.call(null,(1)) <= qa.call(null,(1))))){
return ((pa.call(null,(2)) <= qb.call(null,(2)))) && ((pb.call(null,(2)) <= qa.call(null,(2))));
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_sphere_QMARK_(var_args){
var args32335 = [];
var len__21023__auto___32356 = arguments.length;
var i__21024__auto___32357 = (0);
while(true){
if((i__21024__auto___32357 < len__21023__auto___32356)){
args32335.push((arguments[i__21024__auto___32357]));

var G__32358 = (i__21024__auto___32357 + (1));
i__21024__auto___32357 = G__32358;
continue;
} else {
}
break;
}

var G__32337 = args32335.length;
switch (G__32337) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32335.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32338,p__32339){
var map__32340 = p__32338;
var map__32340__$1 = ((((!((map__32340 == null)))?((((map__32340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32340):map__32340);
var p = cljs.core.get.call(null,map__32340__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__32340__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__32341 = p__32339;
var map__32341__$1 = ((((!((map__32341 == null)))?((((map__32341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32341):map__32341);
var s = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.call(null,p,thi.ng.math.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__32344,p__32345,p__32346,r){
var vec__32347 = p__32344;
var px = cljs.core.nth.call(null,vec__32347,(0),null);
var py = cljs.core.nth.call(null,vec__32347,(1),null);
var pz = cljs.core.nth.call(null,vec__32347,(2),null);
var vec__32350 = p__32345;
var qx = cljs.core.nth.call(null,vec__32350,(0),null);
var qy = cljs.core.nth.call(null,vec__32350,(1),null);
var qz = cljs.core.nth.call(null,vec__32350,(2),null);
var vec__32353 = p__32346;
var cx = cljs.core.nth.call(null,vec__32353,(0),null);
var cy = cljs.core.nth.call(null,vec__32353,(1),null);
var cz = cljs.core.nth.call(null,vec__32353,(2),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq.call(null,(cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.utils.intersect.sq.call(null,(cz - pz)):(((cz > qz))?thi.ng.geom.utils.intersect.sq.call(null,(cz - qz)):0.0)));
return (ds__$2 <= (r * r));
});

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Takes 2 vectors defining an AABB (min-p & size) and a seq of plane
 *   parameters (each element [normal w]). The plane normals must be
 *   pointing *inwards*. Returns :inside, :intersect or :outside
 */
thi.ng.geom.utils.intersect.intersect_aabb_frustum_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_frustum_QMARK_(p__32360,size,planes){
var vec__32374 = p__32360;
var px = cljs.core.nth.call(null,vec__32374,(0),null);
var py = cljs.core.nth.call(null,vec__32374,(1),null);
var pz = cljs.core.nth.call(null,vec__32374,(2),null);
var p = vec__32374;
var vec__32377 = thi.ng.math.core._PLUS_.call(null,p,size);
var qx = cljs.core.nth.call(null,vec__32377,(0),null);
var qy = cljs.core.nth.call(null,vec__32377,(1),null);
var qz = cljs.core.nth.call(null,vec__32377,(2),null);
return cljs.core.reduce.call(null,((function (vec__32377,qx,qy,qz,vec__32374,px,py,pz,p){
return (function (res,p__32380){
var vec__32381 = p__32380;
var vec__32384 = cljs.core.nth.call(null,vec__32381,(0),null);
var nx = cljs.core.nth.call(null,vec__32384,(0),null);
var ny = cljs.core.nth.call(null,vec__32384,(1),null);
var nz = cljs.core.nth.call(null,vec__32384,(2),null);
var w = cljs.core.nth.call(null,vec__32381,(1),null);
var vx = (((nx > (0)))?px:qx);
var vy = (((ny > (0)))?py:qy);
var vz = (((nz > (0)))?pz:qz);
if((((((nx * vx) + (ny * vy)) + (nz * vz)) + w) > (0))){
return cljs.core.reduced.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
} else {
var vx__$1 = (((nx > (0)))?qx:px);
var vy__$1 = (((ny > (0)))?qy:py);
var vz__$1 = (((nz > (0)))?qz:pz);
if((((((nx * vx__$1) + (ny * vy__$1)) + (nz * vz__$1)) + w) > (0))){
return new cljs.core.Keyword(null,"intersect","intersect",-2039792392);
} else {
return res;
}
}
});})(vec__32377,qx,qy,qz,vec__32374,px,py,pz,p))
,new cljs.core.Keyword(null,"inside","inside",1972503011),planes);
});
thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_sphere_sphere_QMARK_(var_args){
var args32387 = [];
var len__21023__auto___32396 = arguments.length;
var i__21024__auto___32397 = (0);
while(true){
if((i__21024__auto___32397 < len__21023__auto___32396)){
args32387.push((arguments[i__21024__auto___32397]));

var G__32398 = (i__21024__auto___32397 + (1));
i__21024__auto___32397 = G__32398;
continue;
} else {
}
break;
}

var G__32389 = args32387.length;
switch (G__32389) {
case 2:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32387.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32390,p__32391){
var map__32392 = p__32390;
var map__32392__$1 = ((((!((map__32392 == null)))?((((map__32392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32392):map__32392);
var p1 = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__32393 = p__32391;
var map__32393__$1 = ((((!((map__32393 == null)))?((((map__32393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32393):map__32393);
var p2 = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.call(null,p1,r1,p2,r2);
});

thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared.call(null,p1,p2) <= ((r1 + r2) * (r1 + r2)));
});

thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_sphere_QMARK_(var_args){
var args32400 = [];
var len__21023__auto___32409 = arguments.length;
var i__21024__auto___32410 = (0);
while(true){
if((i__21024__auto___32410 < len__21023__auto___32409)){
args32400.push((arguments[i__21024__auto___32410]));

var G__32411 = (i__21024__auto___32410 + (1));
i__21024__auto___32410 = G__32411;
continue;
} else {
}
break;
}

var G__32402 = args32400.length;
switch (G__32402) {
case 2:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32400.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__32403,p__32404){
var map__32405 = p__32403;
var map__32405__$1 = ((((!((map__32405 == null)))?((((map__32405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32405):map__32405);
var rp = cljs.core.get.call(null,map__32405__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.call(null,map__32405__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__32406 = p__32404;
var map__32406__$1 = ((((!((map__32406 == null)))?((((map__32406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32406):map__32406);
var p = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.call(null,rp,dir,p,r);
});

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.math.core._.call(null,p,rp);
var ds = thi.ng.math.core.mag_squared.call(null,q);
var v = (- thi.ng.math.core.dot.call(null,q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if(!(((a < (0))) && ((b < (0))))){
if(((a > (0))) && ((b > (0)))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.math.core._.call(null,b,a);
var v = thi.ng.math.core._.call(null,c,a);
var n = thi.ng.math.core.cross.call(null,u,v);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.vector.V3,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.math.core._.call(null,p,a);
var a_SINGLEQUOTE_ = (- thi.ng.math.core.dot.call(null,n,w0));
var b_SINGLEQUOTE_ = thi.ng.math.core.dot.call(null,n,d);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.math.core.madd.call(null,d,r,p);
var vec__32416 = thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,i,u,v);
var u__$1 = cljs.core.nth.call(null,vec__32416,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__32416,(1),null);
var w = cljs.core.nth.call(null,vec__32416,(2),null);
if(cljs.core.truth_((function (){var and__19795__auto__ = (u__$1 >= 0.0);
if(and__19795__auto__){
var and__19795__auto____$1 = (w >= 0.0);
if(and__19795__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.utils.intersect.triaabb_axis_test = (function thi$ng$geom$utils$intersect$triaabb_axis_test(pa1,pb1,pa2,pb2,a,b,fa,fb,sa,sb){
var q = ((a * pa1) + (b * pb1));
var r = ((a * pa2) + (b * pb2));
var vec__32422 = (((q < r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
var min = cljs.core.nth.call(null,vec__32422,(0),null);
var max = cljs.core.nth.call(null,vec__32422,(1),null);
var rad = ((fa * sa) + (fb * sb));
if((min <= rad)){
return (max >= (- rad));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e0 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e0(p__32425,p__32426,p__32427,p__32428,p__32429){
var vec__32448 = p__32425;
var ax = cljs.core.nth.call(null,vec__32448,(0),null);
var ay = cljs.core.nth.call(null,vec__32448,(1),null);
var az = cljs.core.nth.call(null,vec__32448,(2),null);
var a = vec__32448;
var vec__32451 = p__32426;
var bx = cljs.core.nth.call(null,vec__32451,(0),null);
var by = cljs.core.nth.call(null,vec__32451,(1),null);
var bz = cljs.core.nth.call(null,vec__32451,(2),null);
var b = vec__32451;
var vec__32454 = p__32427;
var cx = cljs.core.nth.call(null,vec__32454,(0),null);
var cy = cljs.core.nth.call(null,vec__32454,(1),null);
var cz = cljs.core.nth.call(null,vec__32454,(2),null);
var vec__32457 = p__32428;
var ex = cljs.core.nth.call(null,vec__32457,(0),null);
var ey = cljs.core.nth.call(null,vec__32457,(1),null);
var ez = cljs.core.nth.call(null,vec__32457,(2),null);
var e = vec__32457;
var vec__32460 = p__32429;
var sx = cljs.core.nth.call(null,vec__32460,(0),null);
var sy = cljs.core.nth.call(null,vec__32460,(1),null);
var sz = cljs.core.nth.call(null,vec__32460,(2),null);
var vec__32463 = thi.ng.math.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__32463,(0),null);
var fy = cljs.core.nth.call(null,vec__32463,(1),null);
var fz = cljs.core.nth.call(null,vec__32463,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e1 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e1(p__32466,p__32467,p__32468,p__32469,p__32470){
var vec__32489 = p__32466;
var ax = cljs.core.nth.call(null,vec__32489,(0),null);
var ay = cljs.core.nth.call(null,vec__32489,(1),null);
var az = cljs.core.nth.call(null,vec__32489,(2),null);
var vec__32492 = p__32467;
var bx = cljs.core.nth.call(null,vec__32492,(0),null);
var by = cljs.core.nth.call(null,vec__32492,(1),null);
var bz = cljs.core.nth.call(null,vec__32492,(2),null);
var b = vec__32492;
var vec__32495 = p__32468;
var cx = cljs.core.nth.call(null,vec__32495,(0),null);
var cy = cljs.core.nth.call(null,vec__32495,(1),null);
var cz = cljs.core.nth.call(null,vec__32495,(2),null);
var c = vec__32495;
var vec__32498 = p__32469;
var ex = cljs.core.nth.call(null,vec__32498,(0),null);
var ey = cljs.core.nth.call(null,vec__32498,(1),null);
var ez = cljs.core.nth.call(null,vec__32498,(2),null);
var e = vec__32498;
var vec__32501 = p__32470;
var sx = cljs.core.nth.call(null,vec__32501,(0),null);
var sy = cljs.core.nth.call(null,vec__32501,(1),null);
var sz = cljs.core.nth.call(null,vec__32501,(2),null);
var vec__32504 = thi.ng.math.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__32504,(0),null);
var fy = cljs.core.nth.call(null,vec__32504,(1),null);
var fz = cljs.core.nth.call(null,vec__32504,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,ey,fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,ay,bx,by,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e2 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e2(p__32507,p__32508,p__32509,p__32510,p__32511){
var vec__32530 = p__32507;
var ax = cljs.core.nth.call(null,vec__32530,(0),null);
var ay = cljs.core.nth.call(null,vec__32530,(1),null);
var az = cljs.core.nth.call(null,vec__32530,(2),null);
var a = vec__32530;
var vec__32533 = p__32508;
var bx = cljs.core.nth.call(null,vec__32533,(0),null);
var by = cljs.core.nth.call(null,vec__32533,(1),null);
var bz = cljs.core.nth.call(null,vec__32533,(2),null);
var vec__32536 = p__32509;
var cx = cljs.core.nth.call(null,vec__32536,(0),null);
var cy = cljs.core.nth.call(null,vec__32536,(1),null);
var cz = cljs.core.nth.call(null,vec__32536,(2),null);
var c = vec__32536;
var vec__32539 = p__32510;
var ex = cljs.core.nth.call(null,vec__32539,(0),null);
var ey = cljs.core.nth.call(null,vec__32539,(1),null);
var ez = cljs.core.nth.call(null,vec__32539,(2),null);
var e = vec__32539;
var vec__32542 = p__32511;
var sx = cljs.core.nth.call(null,vec__32542,(0),null);
var sy = cljs.core.nth.call(null,vec__32542,(1),null);
var sz = cljs.core.nth.call(null,vec__32542,(2),null);
var vec__32545 = thi.ng.math.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__32545,(0),null);
var fy = cljs.core.nth.call(null,vec__32545,(1),null);
var fz = cljs.core.nth.call(null,vec__32545,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ay,az,by,bz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,az,bx,bz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_minmax = (function thi$ng$geom$utils$intersect$triaabb_edge_minmax(a,b,c,s){
if(((function (){var x__20147__auto__ = (function (){var x__20147__auto__ = a;
var y__20148__auto__ = b;
return ((x__20147__auto__ < y__20148__auto__) ? x__20147__auto__ : y__20148__auto__);
})();
var y__20148__auto__ = c;
return ((x__20147__auto__ < y__20148__auto__) ? x__20147__auto__ : y__20148__auto__);
})() < s)){
return ((function (){var x__20140__auto__ = (function (){var x__20140__auto__ = a;
var y__20141__auto__ = b;
return ((x__20140__auto__ > y__20141__auto__) ? x__20140__auto__ : y__20141__auto__);
})();
var y__20141__auto__ = c;
return ((x__20140__auto__ > y__20141__auto__) ? x__20140__auto__ : y__20141__auto__);
})() >= (- s));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.intersect_triangle3_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_triangle3_aabb_QMARK_(a,b,c,p,s){
var vec__32560 = thi.ng.math.core._STAR_.call(null,s,0.5);
var sx = cljs.core.nth.call(null,vec__32560,(0),null);
var sy = cljs.core.nth.call(null,vec__32560,(1),null);
var sz = cljs.core.nth.call(null,vec__32560,(2),null);
var s__$1 = vec__32560;
var p__$1 = thi.ng.math.core._PLUS_.call(null,p,s__$1);
var vec__32563 = thi.ng.math.core._.call(null,a,p__$1);
var ax = cljs.core.nth.call(null,vec__32563,(0),null);
var ay = cljs.core.nth.call(null,vec__32563,(1),null);
var az = cljs.core.nth.call(null,vec__32563,(2),null);
var a__$1 = vec__32563;
var vec__32566 = thi.ng.math.core._.call(null,b,p__$1);
var bx = cljs.core.nth.call(null,vec__32566,(0),null);
var by = cljs.core.nth.call(null,vec__32566,(1),null);
var bz = cljs.core.nth.call(null,vec__32566,(2),null);
var b__$1 = vec__32566;
var vec__32569 = thi.ng.math.core._.call(null,c,p__$1);
var cx = cljs.core.nth.call(null,vec__32569,(0),null);
var cy = cljs.core.nth.call(null,vec__32569,(1),null);
var cz = cljs.core.nth.call(null,vec__32569,(2),null);
var c__$1 = vec__32569;
var e0 = thi.ng.math.core._.call(null,b__$1,a__$1);
var e1 = thi.ng.math.core._.call(null,c__$1,b__$1);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e0.call(null,a__$1,b__$1,c__$1,e0,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e1.call(null,a__$1,b__$1,c__$1,e1,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e2.call(null,a__$1,b__$1,c__$1,thi.ng.math.core._.call(null,a__$1,c__$1),s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax.call(null,ax,bx,cx,sx))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax.call(null,ay,by,cy,sy))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax.call(null,az,bz,cz,sz))){
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.call(null,a__$1,thi.ng.math.core.cross.call(null,e0,e1),s__$1);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_line2_QMARK_(p__32572,p__32573,p__32574,p__32575){
var vec__32588 = p__32572;
var px1 = cljs.core.nth.call(null,vec__32588,(0),null);
var py1 = cljs.core.nth.call(null,vec__32588,(1),null);
var p = vec__32588;
var vec__32591 = p__32573;
var qx1 = cljs.core.nth.call(null,vec__32591,(0),null);
var qy1 = cljs.core.nth.call(null,vec__32591,(1),null);
var q = vec__32591;
var vec__32594 = p__32574;
var px2 = cljs.core.nth.call(null,vec__32594,(0),null);
var py2 = cljs.core.nth.call(null,vec__32594,(1),null);
var lp = vec__32594;
var vec__32597 = p__32575;
var qx2 = cljs.core.nth.call(null,vec__32597,(0),null);
var qy2 = cljs.core.nth.call(null,vec__32597,(1),null);
var lq = vec__32597;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if(((na === (0))) && ((nb === (0)))){
var ip = thi.ng.geom.utils.closest_point_on_segment.call(null,lp,p,q);
var iq = thi.ng.geom.utils.closest_point_on_segment.call(null,lq,p,q);
if(cljs.core.truth_((function (){var or__19807__auto__ = thi.ng.math.core.delta_EQ_.call(null,ip,lp);
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.math.core.mix.call(null,p,q,ua);
if(((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first.call(null,cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__32605){
var vec__32606 = p__32605;
var p = cljs.core.nth.call(null,vec__32606,(0),null);
var q = cljs.core.nth.call(null,vec__32606,(1),null);
return thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_.call(null,rp,rq,p,q);
})),cljs.core.filter.call(null,(function (p1__32600_SHARP_){
if(cljs.core.truth_(cljs.core.get.call(null,p1__32600_SHARP_,new cljs.core.Keyword(null,"p","p",151049309)))){
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null),cljs.core.get.call(null,p1__32600_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348)));
} else {
return null;
}
}))),cljs.core.completing.call(null,(function (closest,isec){
var p = cljs.core.get.call(null,isec,new cljs.core.Keyword(null,"p","p",151049309));
var d = thi.ng.geom.core.dist_squared.call(null,rp,p);
if((d < closest.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_.call(null,rp,thi.ng.math.core.madd.call(null,rd,1.0E29,rp),edges);
});
thi.ng.geom.utils.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__19807__auto__ = thi.ng.math.core.delta_EQ_.call(null,aw,bw,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,an,bn,thi.ng.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.math.core.dot.call(null,an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.math.core.madd.call(null,an,u,thi.ng.math.core._STAR_.call(null,bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.utils.ortho_normal.call(null,an,bn)], null);
}
});
thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.math.core.dot.call(null,n,dir);
var dn = (thi.ng.math.core.dot.call(null,n,rp) + w);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,dp,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.math.core.madd.call(null,dir,du,rp);
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
/**
 * Takes a point & normal defining a plane and 2 vectors defining an
 *   AABB (min-p & size). Returns true if plane intersects box.
 */
thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_aabb_QMARK_(var_args){
var args32609 = [];
var len__21023__auto___32633 = arguments.length;
var i__21024__auto___32634 = (0);
while(true){
if((i__21024__auto___32634 < len__21023__auto___32633)){
args32609.push((arguments[i__21024__auto___32634]));

var G__32635 = (i__21024__auto___32634 + (1));
i__21024__auto___32634 = G__32635;
continue;
} else {
}
break;
}

var G__32611 = args32609.length;
switch (G__32611) {
case 4:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32609.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,n,q,s){
var s2 = thi.ng.math.core._STAR_.call(null,s,0.5);
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.call(null,thi.ng.math.core._.call(null,p,thi.ng.math.core._PLUS_.call(null,q,s2)),n,s2);
});

thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (p__32612,p__32613,p__32614){
var vec__32615 = p__32612;
var px = cljs.core.nth.call(null,vec__32615,(0),null);
var py = cljs.core.nth.call(null,vec__32615,(1),null);
var pz = cljs.core.nth.call(null,vec__32615,(2),null);
var vec__32618 = p__32613;
var nx = cljs.core.nth.call(null,vec__32618,(0),null);
var ny = cljs.core.nth.call(null,vec__32618,(1),null);
var nz = cljs.core.nth.call(null,vec__32618,(2),null);
var n = vec__32618;
var vec__32621 = p__32614;
var sx = cljs.core.nth.call(null,vec__32621,(0),null);
var sy = cljs.core.nth.call(null,vec__32621,(1),null);
var sz = cljs.core.nth.call(null,vec__32621,(2),null);
var vec__32624 = (((nx > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sx) - px),(sx - px)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - px),((- sx) - px)], null));
var vx1 = cljs.core.nth.call(null,vec__32624,(0),null);
var vx2 = cljs.core.nth.call(null,vec__32624,(1),null);
var vec__32627 = (((ny > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sy) - py),(sy - py)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sy - py),((- sy) - py)], null));
var vy1 = cljs.core.nth.call(null,vec__32627,(0),null);
var vy2 = cljs.core.nth.call(null,vec__32627,(1),null);
var vec__32630 = (((nz > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sz) - pz),(sz - pz)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sz - pz),((- sz) - pz)], null));
var vz1 = cljs.core.nth.call(null,vec__32630,(0),null);
var vz2 = cljs.core.nth.call(null,vec__32630,(1),null);
if(((((nx * vx1) + (ny * vy1)) + (nz * vz1)) <= 0.0)){
return ((((nx * vx2) + (ny * vy2)) + (nz * vz2)) >= 0.0);
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
return (thi.ng.math.core.abs_STAR_.call(null,(thi.ng.math.core.dot.call(null,n,p) + w)) <= r);
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.utils.intersect.subdot = (function thi$ng$geom$utils$intersect$subdot(a,b,c){
var d = thi.ng.math.core.subm.call(null,a,b,c);
return ((d.call(null,(0)) + d.call(null,(1))) + d.call(null,(2)));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 *  Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.utils.intersect.face_a = (function thi$ng$geom$utils$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.call(null,f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((((aff.call(null,(0)) > (0)))?(1):(0)) | (((aff.call(null,(1)) > (0)))?(2):(0))) | (((aff.call(null,(2)) > (0)))?(4):(0))) | (((aff.call(null,(3)) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 *  Returns true if all dot products are positive.
 */
thi.ng.geom.utils.intersect.face_b1_QMARK_ = (function thi$ng$geom$utils$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_.call(null,(function (p1__32637_SHARP_){
return (thi.ng.math.core.dot.call(null,p1__32637_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.utils.intersect.face_b2_QMARK_ = (function thi$ng$geom$utils$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_.call(null,(function (p1__32638_SHARP_){
return (thi.ng.geom.utils.intersect.subdot.call(null,p1__32638_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 *  separating plane between the faces shared by that edge.
 */
thi.ng.geom.utils.intersect.edge_a = (function thi$ng$geom$utils$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = ((function (xa,xb){
return (function (a,b,i,j){
var cp = ((ea.call(null,i) * eb.call(null,j)) - (ea.call(null,j) * eb.call(null,i)));
return (((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0)))) || (((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))));
});})(xa,xb))
;
return cljs.core.not.call(null,(function (){var or__19807__auto__ = cljs.core.not_EQ_.call(null,(15),(ma | mb));
if(or__19807__auto__){
return or__19807__auto__;
} else {
var or__19807__auto____$1 = edge.call(null,(1),(2),(1),(0));
if(cljs.core.truth_(or__19807__auto____$1)){
return or__19807__auto____$1;
} else {
var or__19807__auto____$2 = edge.call(null,(1),(4),(2),(0));
if(cljs.core.truth_(or__19807__auto____$2)){
return or__19807__auto____$2;
} else {
var or__19807__auto____$3 = edge.call(null,(1),(8),(3),(0));
if(cljs.core.truth_(or__19807__auto____$3)){
return or__19807__auto____$3;
} else {
var or__19807__auto____$4 = edge.call(null,(2),(4),(2),(1));
if(cljs.core.truth_(or__19807__auto____$4)){
return or__19807__auto____$4;
} else {
var or__19807__auto____$5 = edge.call(null,(2),(8),(3),(1));
if(cljs.core.truth_(or__19807__auto____$5)){
return or__19807__auto____$5;
} else {
return edge.call(null,(4),(8),(3),(2));
}
}
}
}
}
}
})());
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 *  points and an edge id. Looks up edge for given id and if not yet
 *  present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.utils.intersect.get_edge = (function thi$ng$geom$utils$intersect$get_edge(edges,epoints,id){
var e = edges.call(null,id);
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = epoints.call(null,id);
var e__$1 = thi.ng.math.core._.call(null,ep.call(null,(0)),ep.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 *  of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 *  and a seq of specs, each encoding a specific check (either calls to
 *  face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.utils.intersect.check_faces_a = (function thi$ng$geom$utils$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__32653 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__32653,(0),null);
var a = cljs.core.nth.call(null,vec__32653,(1),null);
var b = cljs.core.nth.call(null,vec__32653,(2),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f*","f*",-689873734),f))){
var vec__32656 = thi.ng.geom.utils.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__32656,(0),null);
var ea = cljs.core.nth.call(null,vec__32656,(1),null);
var vec__32659 = thi.ng.geom.utils.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__32659,(0),null);
var eb = cljs.core.nth.call(null,vec__32659,(1),null);
var n = thi.ng.math.core.cross.call(null,ea,eb);
var vec__32662 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__32656,edges__$1,ea,vec__32659,edges__$2,eb,n,vec__32653,f,a,b){
return (function (p1__32639_SHARP_){
return thi.ng.math.core.dot.call(null,p1__32639_SHARP_,n);
});})(masks,affine,edges,s,vec__32656,edges__$1,ea,vec__32659,edges__$2,eb,n,vec__32653,f,a,b))
,deltas):thi.ng.geom.utils.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__32656,edges__$1,ea,vec__32659,edges__$2,eb,n,vec__32653,f,a,b){
return (function (p1__32640_SHARP_){
return thi.ng.geom.utils.intersect.subdot.call(null,p1__32640_SHARP_,p,n);
});})(masks,affine,edges,s,vec__32656,edges__$1,ea,vec__32659,edges__$2,eb,n,vec__32653,f,a,b))
,verts));
var m = cljs.core.nth.call(null,vec__32662,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32662,(1),null);
if((m < (15))){
var G__32665 = cljs.core.conj.call(null,masks,m);
var G__32666 = cljs.core.conj.call(null,affine,a__$1);
var G__32667 = edges__$2;
var G__32668 = cljs.core.next.call(null,s);
masks = G__32665;
affine = G__32666;
edges = G__32667;
s = G__32668;
continue;
} else {
return null;
}
} else {
if(cljs.core.not.call(null,thi.ng.geom.utils.intersect.edge_a.call(null,masks.call(null,a),masks.call(null,b),affine.call(null,a),affine.call(null,b)))){
var G__32669 = masks;
var G__32670 = affine;
var G__32671 = edges;
var G__32672 = cljs.core.next.call(null,s);
masks = G__32669;
affine = G__32670;
edges = G__32671;
s = G__32672;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 *  Returns true if tetras do intersect.
 */
thi.ng.geom.utils.intersect.check_faces_b = (function thi$ng$geom$utils$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__32682 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__32682,(0),null);
var a = cljs.core.nth.call(null,vec__32682,(1),null);
var b = cljs.core.nth.call(null,vec__32682,(2),null);
var vec__32685 = thi.ng.geom.utils.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__32685,(0),null);
var ea = cljs.core.nth.call(null,vec__32685,(1),null);
var vec__32688 = thi.ng.geom.utils.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__32688,(0),null);
var eb = cljs.core.nth.call(null,vec__32688,(1),null);
if(cljs.core.not.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_b1_QMARK_.call(null,deltas,thi.ng.math.core.cross.call(null,ea,eb)):thi.ng.geom.utils.intersect.face_b2_QMARK_.call(null,verts,p,thi.ng.math.core.cross.call(null,ea,eb))))){
var G__32691 = edges__$2;
var G__32692 = cljs.core.next.call(null,s);
edges = G__32691;
s = G__32692;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 *  true if they intersect. Orientation of points is irrelevant (unlike
 *  in the original algorithm this implementation is based on).
 */
thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_tetrahedra_QMARK_(p__32695,p__32696){
var vec__32703 = p__32695;
var pa = cljs.core.nth.call(null,vec__32703,(0),null);
var pb = cljs.core.nth.call(null,vec__32703,(1),null);
var pc = cljs.core.nth.call(null,vec__32703,(2),null);
var pd = cljs.core.nth.call(null,vec__32703,(3),null);
var p = vec__32703;
var vec__32706 = p__32696;
var qa = cljs.core.nth.call(null,vec__32706,(0),null);
var qb = cljs.core.nth.call(null,vec__32706,(1),null);
var qc = cljs.core.nth.call(null,vec__32706,(2),null);
var qd = cljs.core.nth.call(null,vec__32706,(3),null);
var q = vec__32706;
var masks = thi.ng.geom.utils.intersect.check_faces_a.call(null,cljs.core.map.call(null,((function (vec__32703,pa,pb,pc,pd,p,vec__32706,qa,qb,qc,qd,q){
return (function (p1__32693_SHARP_){
return thi.ng.math.core._.call(null,p1__32693_SHARP_,pa);
});})(vec__32703,pa,pb,pc,pd,p,vec__32706,qa,qb,qc,qd,q))
,q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__19807__auto__ = cljs.core.not_EQ_.call(null,(15),cljs.core.reduce.call(null,cljs.core.bit_or,masks));
if(or__19807__auto__){
return or__19807__auto__;
} else {
return thi.ng.geom.utils.intersect.check_faces_b.call(null,cljs.core.map.call(null,((function (or__19807__auto__,masks,vec__32703,pa,pb,pc,pd,p,vec__32706,qa,qb,qc,qd,q){
return (function (p1__32694_SHARP_){
return thi.ng.math.core._.call(null,p1__32694_SHARP_,qa);
});})(or__19807__auto__,masks,vec__32703,pa,pb,pc,pd,p,vec__32706,qa,qb,qc,qd,q))
,p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=intersect.js.map