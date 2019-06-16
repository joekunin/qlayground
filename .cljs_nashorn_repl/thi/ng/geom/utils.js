// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.utils.closest_point_coeff = (function thi$ng$geom$utils$closest_point_coeff(p,a,b){
var d = thi.ng.math.core._.call(null,b,a);
return (thi.ng.math.core.dot.call(null,thi.ng.math.core._.call(null,p,a),d) / thi.ng.math.core.mag_squared.call(null,d));
});
thi.ng.geom.utils.closest_point_on_line = (function thi$ng$geom$utils$closest_point_on_line(p,a,b){
return thi.ng.math.core.mix.call(null,a,b,thi.ng.geom.utils.closest_point_coeff.call(null,p,a,b));
});
thi.ng.geom.utils.closest_point_on_segment = (function thi$ng$geom$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.utils.closest_point_coeff.call(null,p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.math.core.mix.call(null,a,b,t);
}
}
});
thi.ng.geom.utils.closest_point_on_segments = (function thi$ng$geom$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__30437_SHARP_){
return cljs.core.apply.call(null,thi.ng.geom.utils.closest_point_on_segment,p,p1__30437_SHARP_);
})),cljs.core.completing.call(null,(function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared.call(null,p,q);
if((d_SINGLEQUOTE_ < a.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.utils.closest_line_between = (function thi$ng$geom$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.math.core._.call(null,b2,a2);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.vector.V3,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.math.core._.call(null,b1,a1);
if(cljs.core.not.call(null,thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.vector.V3,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.math.core._.call(null,a1,a2);
var d1343 = thi.ng.math.core.dot.call(null,p13,p43);
var d4321 = thi.ng.math.core.dot.call(null,p43,p21);
var d1321 = thi.ng.math.core.dot.call(null,p13,p21);
var d4343 = thi.ng.math.core.dot.call(null,p43,p43);
var d2121 = thi.ng.math.core.dot.call(null,p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.math.core.madd.call(null,p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.math.core.madd.call(null,p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.dist_STAR_ = (function thi$ng$geom$utils$dist_STAR_(rf){
return (function (c,points){
return Math.sqrt(cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__30438_SHARP_){
return thi.ng.geom.core.dist_squared.call(null,c,p1__30438_SHARP_);
})),rf,(0),points));
});
});
thi.ng.geom.utils.min_dist = thi.ng.geom.utils.dist_STAR_.call(null,cljs.core.min);
thi.ng.geom.utils.max_dist = thi.ng.geom.utils.dist_STAR_.call(null,cljs.core.max);
thi.ng.geom.utils.arc_length_index = (function thi$ng$geom$utils$arc_length_index(points){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (p1__30439_SHARP_){
return thi.ng.geom.core.dist.call(null,cljs.core.nth.call(null,p1__30439_SHARP_,(0)),cljs.core.nth.call(null,p1__30439_SHARP_,(1)));
})),cljs.core.completing.call(null,(function (a,d){
return cljs.core.conj.call(null,a,(cljs.core.peek.call(null,a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.partition.call(null,(2),(1),points));
});
thi.ng.geom.utils.arc_length = (function thi$ng$geom$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.utils.centroid = (function thi$ng$geom$utils$centroid(coll){
var G__30441 = cljs.core.count.call(null,coll);
switch (G__30441) {
case (0):
return null;

break;
case (1):
return cljs.core.first.call(null,coll);

break;
case (2):
return thi.ng.math.core.mix.call(null,cljs.core.first.call(null,coll),cljs.core.nth.call(null,coll,(1)));

break;
default:
var s = (1.0 / cljs.core.count.call(null,coll));
var f = ((function (s,G__30441){
return (function (x,_){
return (x * s);
});})(s,G__30441))
;
return thi.ng.geom.core.reduce_vector.call(null,cljs.core.first.call(null,coll),cljs.core._PLUS_,f,cljs.core.rest.call(null,coll));

}
});
thi.ng.geom.utils.center = (function thi$ng$geom$utils$center(var_args){
var args30444 = [];
var len__21238__auto___30447 = arguments.length;
var i__21239__auto___30448 = (0);
while(true){
if((i__21239__auto___30448 < len__21238__auto___30447)){
args30444.push((arguments[i__21239__auto___30448]));

var G__30449 = (i__21239__auto___30448 + (1));
i__21239__auto___30448 = G__30449;
continue;
} else {
}
break;
}

var G__30446 = args30444.length;
switch (G__30446) {
case 2:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30444.length)].join('')));

}
});

thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.utils.center.call(null,thi.ng.geom.utils.centroid.call(null,coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.math.core._.call(null,c_SINGLEQUOTE_,c);
return cljs.core.mapv.call(null,((function (d){
return (function (p1__30443_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__30443_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.utils.center.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.scale_size = (function thi$ng$geom$utils$scale_size(var_args){
var args30452 = [];
var len__21238__auto___30455 = arguments.length;
var i__21239__auto___30456 = (0);
while(true){
if((i__21239__auto___30456 < len__21238__auto___30455)){
args30452.push((arguments[i__21239__auto___30456]));

var G__30457 = (i__21239__auto___30456 + (1));
i__21239__auto___30456 = G__30457;
continue;
} else {
}
break;
}

var G__30454 = args30452.length;
switch (G__30454) {
case 2:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30452.length)].join('')));

}
});

thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.utils.scale_size.call(null,thi.ng.geom.utils.centroid.call(null,coll),s,coll);
});

thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.call(null,(function (p1__30451_SHARP_){
return thi.ng.math.core.madd.call(null,thi.ng.math.core._.call(null,p1__30451_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.utils.scale_size.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.bounds_STAR_ = (function thi$ng$geom$utils$bounds_STAR_(zero,coll){
var c = cljs.core.count.call(null,coll);
if((c > (1))){
var vec__30462 = coll;
var seq__30463 = cljs.core.seq.call(null,vec__30462);
var first__30464 = cljs.core.first.call(null,seq__30463);
var seq__30463__$1 = cljs.core.next.call(null,seq__30463);
var x = first__30464;
var xs = seq__30463__$1;
var p = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.call(null,x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.math.core._.call(null,q,p)], null);
} else {
if((c === (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,coll),zero], null);
} else {
return null;

}
}
});
thi.ng.geom.utils.bounding_rect_raw = (function thi$ng$geom$utils$bounding_rect_raw(points){
return thi.ng.geom.utils.bounds_STAR_.call(null,thi.ng.geom.vector.V2,points);
});
thi.ng.geom.utils.bounding_box_raw = (function thi$ng$geom$utils$bounding_box_raw(points){
return thi.ng.geom.utils.bounds_STAR_.call(null,thi.ng.geom.vector.V3,points);
});
thi.ng.geom.utils.radial_bounds = (function thi$ng$geom$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor.call(null,c),((cljs.core.coll_QMARK_.call(null,r_or_points))?thi.ng.geom.utils.max_dist.call(null,c,r_or_points):r_or_points)], null);
});
thi.ng.geom.utils.axis_bounds = (function thi$ng$geom$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.call(null,(function (p1__30465_SHARP_){
return cljs.core.nth.call(null,p1__30465_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,xs),cljs.core.reduce.call(null,cljs.core.max,xs)], null);
});
thi.ng.geom.utils.axis_range = (function thi$ng$geom$utils$axis_range(axis,coll){
return (- cljs.core.apply.call(null,cljs.core._,thi.ng.geom.utils.axis_bounds.call(null,axis,coll)));
});
thi.ng.geom.utils.delta_contains = (function thi$ng$geom$utils$delta_contains(points,p,eps){
return cljs.core.some.call(null,(function (p1__30466_SHARP_){
return thi.ng.math.core.delta_EQ_.call(null,p,p1__30466_SHARP_,eps);
}),points);
});
thi.ng.geom.utils.from_barycentric = (function thi$ng$geom$utils$from_barycentric(points,weights){
return cljs.core.reduce.call(null,thi.ng.math.core._PLUS_,cljs.core.map.call(null,thi.ng.math.core._STAR_,points,weights));
});
/**
 * Takes a seq of points and normalized index (0.0 .. 1.0), returns
 *   interpolated point at position t.
 */
thi.ng.geom.utils.point_at_index = (function thi$ng$geom$utils$point_at_index(points,t){
var n = (cljs.core.count.call(null,points) - (1));
var t_SINGLEQUOTE_ = (t * n);
var ti = (t_SINGLEQUOTE_ | (0));
if((ti < n)){
return thi.ng.math.core.mix.call(null,cljs.core.nth.call(null,points,ti),cljs.core.nth.call(null,points,(ti + (1))),(t_SINGLEQUOTE_ - ti));
} else {
return cljs.core.nth.call(null,points,(((ti < (0)))?(0):n));
}
});
thi.ng.geom.utils.point_at_STAR_ = (function thi$ng$geom$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= idx.call(null,i__$1))){
var G__30467 = (i__$1 + (1));
i__$1 = G__30467;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = idx.call(null,i1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.call(null,cljs.core.nth.call(null,points,i1),cljs.core.nth.call(null,points,i__$1),((ct - pi) / (idx.call(null,i__$1) - pi))),i__$1], null);
});
thi.ng.geom.utils.point_at = (function thi$ng$geom$utils$point_at(var_args){
var args30468 = [];
var len__21238__auto___30471 = arguments.length;
var i__21239__auto___30472 = (0);
while(true){
if((i__21239__auto___30472 < len__21238__auto___30471)){
args30468.push((arguments[i__21239__auto___30472]));

var G__30473 = (i__21239__auto___30472 + (1));
i__21239__auto___30472 = G__30473;
continue;
} else {
}
break;
}

var G__30470 = args30468.length;
switch (G__30470) {
case 2:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30468.length)].join('')));

}
});

thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.utils.point_at.call(null,t,points,null);
});

thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,t))){
var n = cljs.core.count.call(null,points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first.call(null,points);
} else {
if((1.0 === t__$1)){
return cljs.core.last.call(null,points);
} else {
var idx__$1 = (function (){var or__20022__auto__ = idx;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.utils.arc_length_index.call(null,points);
}
})();
return cljs.core.first.call(null,thi.ng.geom.utils.point_at_STAR_.call(null,points,idx__$1,cljs.core.peek.call(null,idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.utils.point_at.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.sample_uniform_STAR_ = (function thi$ng$geom$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.utils.arc_length_index.call(null,points);
var total = cljs.core.peek.call(null,idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__30478 = thi.ng.geom.utils.point_at_STAR_.call(null,points,idx,total,t,i);
var p = cljs.core.nth.call(null,vec__30478,(0),null);
var i__$1 = cljs.core.nth.call(null,vec__30478,(1),null);
var G__30481 = (t + delta);
var G__30482 = (i__$1 | (0));
var G__30483 = cljs.core.conj.call(null,acc,p);
t = G__30481;
i = G__30482;
acc = G__30483;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.call(null,samples,cljs.core.last.call(null,points));
} else {
return samples;
}
});
thi.ng.geom.utils.sample_uniform = (function thi$ng$geom$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count.call(null,points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null);
} else {
return thi.ng.geom.utils.sample_uniform_STAR_.call(null,udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.utils.sample_segment_with_res = (function thi$ng$geom$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__20879__auto__ = (function thi$ng$geom$utils$sample_segment_with_res_$_iter__30488(s__30489){
return (new cljs.core.LazySeq(null,(function (){
var s__30489__$1 = s__30489;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30489__$1);
if(temp__5720__auto__){
var s__30489__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30489__$2)){
var c__20877__auto__ = cljs.core.chunk_first.call(null,s__30489__$2);
var size__20878__auto__ = cljs.core.count.call(null,c__20877__auto__);
var b__30491 = cljs.core.chunk_buffer.call(null,size__20878__auto__);
if((function (){var i__30490 = (0);
while(true){
if((i__30490 < size__20878__auto__)){
var t = cljs.core._nth.call(null,c__20877__auto__,i__30490);
cljs.core.chunk_append.call(null,b__30491,thi.ng.math.core.mix.call(null,a,b,t));

var G__30492 = (i__30490 + (1));
i__30490 = G__30492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30491),thi$ng$geom$utils$sample_segment_with_res_$_iter__30488.call(null,cljs.core.chunk_rest.call(null,s__30489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30491),null);
}
} else {
var t = cljs.core.first.call(null,s__30489__$2);
return cljs.core.cons.call(null,thi.ng.math.core.mix.call(null,a,b,t),thi$ng$geom$utils$sample_segment_with_res_$_iter__30488.call(null,cljs.core.rest.call(null,s__30489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20879__auto__.call(null,thi.ng.math.core.norm_range.call(null,res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast.call(null,ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.utils.map_bilinear = (function thi$ng$geom$utils$map_bilinear(p__30493,p__30494){
var vec__30501 = p__30493;
var a = cljs.core.nth.call(null,vec__30501,(0),null);
var b = cljs.core.nth.call(null,vec__30501,(1),null);
var c = cljs.core.nth.call(null,vec__30501,(2),null);
var d = cljs.core.nth.call(null,vec__30501,(3),null);
var vec__30504 = p__30494;
var u = cljs.core.nth.call(null,vec__30504,(0),null);
var v = cljs.core.nth.call(null,vec__30504,(1),null);
return thi.ng.math.core.mix.call(null,a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.utils.map_trilinear = (function thi$ng$geom$utils$map_trilinear(p__30507,p__30508){
var vec__30515 = p__30507;
var a = cljs.core.nth.call(null,vec__30515,(0),null);
var b = cljs.core.nth.call(null,vec__30515,(1),null);
var c = cljs.core.nth.call(null,vec__30515,(2),null);
var d = cljs.core.nth.call(null,vec__30515,(3),null);
var e = cljs.core.nth.call(null,vec__30515,(4),null);
var f = cljs.core.nth.call(null,vec__30515,(5),null);
var g = cljs.core.nth.call(null,vec__30515,(6),null);
var h = cljs.core.nth.call(null,vec__30515,(7),null);
var vec__30518 = p__30508;
var u = cljs.core.nth.call(null,vec__30518,(0),null);
var v = cljs.core.nth.call(null,vec__30518,(1),null);
var w = cljs.core.nth.call(null,vec__30518,(2),null);
return thi.ng.math.core.mix.call(null,thi.ng.math.core.mix.call(null,a,d,e,h,u,v),thi.ng.math.core.mix.call(null,b,c,f,g,u,v),w);
});
thi.ng.geom.utils.tessellate_with_point = (function thi$ng$geom$utils$tessellate_with_point(var_args){
var args30522 = [];
var len__21238__auto___30525 = arguments.length;
var i__21239__auto___30526 = (0);
while(true){
if((i__21239__auto___30526 < len__21238__auto___30525)){
args30522.push((arguments[i__21239__auto___30526]));

var G__30527 = (i__21239__auto___30526 + (1));
i__21239__auto___30526 = G__30527;
continue;
} else {
}
break;
}

var G__30524 = args30522.length;
switch (G__30524) {
case 1:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30522.length)].join('')));

}
});

thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.tessellate_with_point.call(null,thi.ng.geom.utils.centroid.call(null,points),points);
});

thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.call(null,(function (p1__30521_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,cljs.core.first.call(null,p1__30521_SHARP_),cljs.core.nth.call(null,p1__30521_SHARP_,(1))],null));
}),cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});

thi.ng.geom.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.tessellate_with_first = (function thi$ng$geom$utils$tessellate_with_first(points){
if((cljs.core.count.call(null,points) > (3))){
var v0 = cljs.core.first.call(null,points);
return cljs.core.mapv.call(null,((function (v0){
return (function (p__30533){
var vec__30534 = p__30533;
var a = cljs.core.nth.call(null,vec__30534,(0),null);
var b = cljs.core.nth.call(null,vec__30534,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(v0))
,cljs.core.partition.call(null,(2),(1),cljs.core.rest.call(null,points)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$utils$tessellate_tri_with_midpoints(p__30537){
var vec__30541 = p__30537;
var a = cljs.core.nth.call(null,vec__30541,(0),null);
var b = cljs.core.nth.call(null,vec__30541,(1),null);
var c = cljs.core.nth.call(null,vec__30541,(2),null);
var ab = thi.ng.math.core.mix.call(null,a,b);
var bc = thi.ng.math.core.mix.call(null,b,c);
var ca = thi.ng.math.core.mix.call(null,c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.utils.tessellate_3 = (function thi$ng$geom$utils$tessellate_3(points){
var pred__30550 = cljs.core._EQ__EQ_;
var expr__30551 = cljs.core.count.call(null,points);
if(cljs.core.truth_(pred__30550.call(null,(3),expr__30551))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_(pred__30550.call(null,(4),expr__30551))){
var vec__30553 = points;
var a = cljs.core.nth.call(null,vec__30553,(0),null);
var b = cljs.core.nth.call(null,vec__30553,(1),null);
var c = cljs.core.nth.call(null,vec__30553,(2),null);
var d = cljs.core.nth.call(null,vec__30553,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.call(null,points);
}
}
});
thi.ng.geom.utils.tessellate_max4 = (function thi$ng$geom$utils$tessellate_max4(points){
if((cljs.core.count.call(null,points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.call(null,points);
}
});
thi.ng.geom.utils.tessellate_face = (function thi$ng$geom$utils$tessellate_face(tess_fn){
return (function (p__30560){
var vec__30561 = p__30560;
var verts = cljs.core.nth.call(null,vec__30561,(0),null);
var attribs = cljs.core.nth.call(null,vec__30561,(1),null);
var verts__$1 = tess_fn.call(null,verts);
var attribs__$1 = cljs.core.reduce_kv.call(null,((function (verts__$1,vec__30561,verts,attribs){
return (function (acc,k,v){
return cljs.core.assoc.call(null,acc,k,tess_fn.call(null,v));
});})(verts__$1,vec__30561,verts,attribs))
,cljs.core.PersistentArrayMap.EMPTY,attribs);
return cljs.core.map_indexed.call(null,((function (verts__$1,attribs__$1,vec__30561,verts,attribs){
return (function (i,verts__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts__$2,cljs.core.reduce_kv.call(null,((function (verts__$1,attribs__$1,vec__30561,verts,attribs){
return (function (acc,k,v){
return cljs.core.assoc.call(null,acc,k,cljs.core.nth.call(null,v,i));
});})(verts__$1,attribs__$1,vec__30561,verts,attribs))
,cljs.core.PersistentArrayMap.EMPTY,attribs__$1)], null);
});})(verts__$1,attribs__$1,vec__30561,verts,attribs))
,verts__$1);
});
});
thi.ng.geom.utils.ortho_normal = (function thi$ng$geom$utils$ortho_normal(var_args){
var args30564 = [];
var len__21238__auto___30571 = arguments.length;
var i__21239__auto___30572 = (0);
while(true){
if((i__21239__auto___30572 < len__21238__auto___30571)){
args30564.push((arguments[i__21239__auto___30572]));

var G__30573 = (i__21239__auto___30572 + (1));
i__21239__auto___30572 = G__30573;
continue;
} else {
}
break;
}

var G__30566 = args30564.length;
switch (G__30566) {
case 1:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30564.length)].join('')));

}
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__30567){
var vec__30568 = p__30567;
var a = cljs.core.nth.call(null,vec__30568,(0),null);
var b = cljs.core.nth.call(null,vec__30568,(1),null);
var c = cljs.core.nth.call(null,vec__30568,(2),null);
return thi.ng.math.core.normalize.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)));
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.math.core.normalize.call(null,thi.ng.math.core.cross.call(null,a,b));
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)));
});

thi.ng.geom.utils.ortho_normal.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.norm_sign2 = (function thi$ng$geom$utils$norm_sign2(p__30575,p__30576,p__30577){
var vec__30587 = p__30575;
var ax = cljs.core.nth.call(null,vec__30587,(0),null);
var ay = cljs.core.nth.call(null,vec__30587,(1),null);
var vec__30590 = p__30576;
var bx = cljs.core.nth.call(null,vec__30590,(0),null);
var by = cljs.core.nth.call(null,vec__30590,(1),null);
var vec__30593 = p__30577;
var cx = cljs.core.nth.call(null,vec__30593,(0),null);
var cy = cljs.core.nth.call(null,vec__30593,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.utils.norm_sign3 = (function thi$ng$geom$utils$norm_sign3(a,b,c){
return thi.ng.math.core.mag.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)));
});
thi.ng.geom.utils.tri_area2 = (function thi$ng$geom$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign2.call(null,a,b,c));
});
thi.ng.geom.utils.tri_area3 = (function thi$ng$geom$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign3.call(null,a,b,c));
});
thi.ng.geom.utils.clockwise2_QMARK_ = (function thi$ng$geom$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.utils.norm_sign2.call(null,a,b,c) < (0));
});
thi.ng.geom.utils.clockwise3_QMARK_ = (function thi$ng$geom$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.math.core.dot.call(null,thi.ng.math.core.cross.call(null,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a)),n) > (0));
});
thi.ng.geom.utils.triangle_barycentric_coords = (function thi$ng$geom$utils$triangle_barycentric_coords(var_args){
var args30596 = [];
var len__21238__auto___30603 = arguments.length;
var i__21239__auto___30604 = (0);
while(true){
if((i__21239__auto___30604 < len__21238__auto___30603)){
args30596.push((arguments[i__21239__auto___30604]));

var G__30605 = (i__21239__auto___30604 + (1));
i__21239__auto___30604 = G__30605;
continue;
} else {
}
break;
}

var G__30598 = args30596.length;
switch (G__30598) {
case 2:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30596.length)].join('')));

}
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__30599,p){
var vec__30600 = p__30599;
var a = cljs.core.nth.call(null,vec__30600,(0),null);
var b = cljs.core.nth.call(null,vec__30600,(1),null);
var c = cljs.core.nth.call(null,vec__30600,(2),null);
return thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a));
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.math.core._.call(null,b,a),thi.ng.math.core._.call(null,c,a));
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.math.core._.call(null,p,a);
var uu = thi.ng.math.core.mag_squared.call(null,u);
var vv = thi.ng.math.core.mag_squared.call(null,v);
var uv = thi.ng.math.core.dot.call(null,u,v);
var wu = thi.ng.math.core.dot.call(null,w,u);
var wv = thi.ng.math.core.dot.call(null,w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;

thi.ng.geom.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.utils.clockwise2_QMARK_.call(null,a,b,c))){
return ((thi.ng.geom.utils.norm_sign2.call(null,a,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,b,a,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,c,b,p) >= 0.0));
} else {
return ((thi.ng.geom.utils.norm_sign2.call(null,b,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,a,b,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2.call(null,c,a,p) >= 0.0));
}
});
thi.ng.geom.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.math.core._.call(null,b,a);
var v = thi.ng.math.core._.call(null,c,a);
var n = thi.ng.geom.utils.ortho_normal.call(null,u,v);
var cl = (thi.ng.math.core.dot.call(null,n,p) - thi.ng.math.core.dot.call(null,n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,cl))){
var vec__30610 = thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,p,u,v);
var u__$1 = cljs.core.nth.call(null,vec__30610,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__30610,(1),null);
var w = cljs.core.nth.call(null,vec__30610,(2),null);
var and__20010__auto__ = (u__$1 >= 0.0);
if(and__20010__auto__){
var and__20010__auto____$1 = (w >= 0.0);
if(and__20010__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
} else {
return null;
}
});
thi.ng.geom.utils.tessellating_transducer = (function thi$ng$geom$utils$tessellating_transducer(f){
return cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.utils.tessellate_with_first),cljs.core.map.call(null,f));
});
thi.ng.geom.utils.area_xf = thi.ng.geom.utils.tessellating_transducer.call(null,(function (p1__30613_SHARP_){
return thi.ng.math.core.abs_STAR_.call(null,cljs.core.apply.call(null,thi.ng.geom.utils.tri_area3,p1__30613_SHARP_));
}));
thi.ng.geom.utils.volume_xf = thi.ng.geom.utils.tessellating_transducer.call(null,(function (p1__30614_SHARP_){
return thi.ng.math.core.dot.call(null,p1__30614_SHARP_.call(null,(0)),thi.ng.math.core.cross.call(null,p1__30614_SHARP_.call(null,(1)),p1__30614_SHARP_.call(null,(2))));
}));
thi.ng.geom.utils.total_area_3d = (function thi$ng$geom$utils$total_area_3d(var_args){
var args30615 = [];
var len__21238__auto___30618 = arguments.length;
var i__21239__auto___30619 = (0);
while(true){
if((i__21239__auto___30619 < len__21238__auto___30618)){
args30615.push((arguments[i__21239__auto___30619]));

var G__30620 = (i__21239__auto___30619 + (1));
i__21239__auto___30619 = G__30620;
continue;
} else {
}
break;
}

var G__30617 = args30615.length;
switch (G__30617) {
case 1:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30615.length)].join('')));

}
});

thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return cljs.core.transduce.call(null,thi.ng.geom.utils.area_xf,cljs.core._PLUS_,faces);
});

thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xf,thi.ng.geom.utils.area_xf),cljs.core._PLUS_,faces);
});

thi.ng.geom.utils.total_area_3d.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.total_volume = (function thi$ng$geom$utils$total_volume(var_args){
var args30622 = [];
var len__21238__auto___30625 = arguments.length;
var i__21239__auto___30626 = (0);
while(true){
if((i__21239__auto___30626 < len__21238__auto___30625)){
args30622.push((arguments[i__21239__auto___30626]));

var G__30627 = (i__21239__auto___30626 + (1));
i__21239__auto___30626 = G__30627;
continue;
} else {
}
break;
}

var G__30624 = args30622.length;
switch (G__30624) {
case 1:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30622.length)].join('')));

}
});

thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return (cljs.core.transduce.call(null,thi.ng.geom.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return (cljs.core.transduce.call(null,cljs.core.comp.call(null,xf,thi.ng.geom.utils.volume_xf),cljs.core._PLUS_,faces) / 6.0);
});

thi.ng.geom.utils.total_volume.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.bounding_rect = (function thi$ng$geom$utils$bounding_rect(points){
var vec__30632 = thi.ng.geom.utils.bounding_rect_raw.call(null,points);
var p = cljs.core.nth.call(null,vec__30632,(0),null);
var size = cljs.core.nth.call(null,vec__30632,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_box = (function thi$ng$geom$utils$bounding_box(points){
var vec__30638 = thi.ng.geom.utils.bounding_box_raw.call(null,points);
var p = cljs.core.nth.call(null,vec__30638,(0),null);
var size = cljs.core.nth.call(null,vec__30638,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_circle = (function thi$ng$geom$utils$bounding_circle(var_args){
var args30641 = [];
var len__21238__auto___30647 = arguments.length;
var i__21239__auto___30648 = (0);
while(true){
if((i__21239__auto___30648 < len__21238__auto___30647)){
args30641.push((arguments[i__21239__auto___30648]));

var G__30649 = (i__21239__auto___30648 + (1));
i__21239__auto___30648 = G__30649;
continue;
} else {
}
break;
}

var G__30643 = args30641.length;
switch (G__30643) {
case 1:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30641.length)].join('')));

}
});

thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_circle.call(null,thi.ng.geom.utils.centroid.call(null,points),points);
});

thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__30644 = thi.ng.geom.utils.radial_bounds.call(null,thi.ng.geom.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.call(null,vec__30644,(0),null);
var r = cljs.core.nth.call(null,vec__30644,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r,null,null,null));
});

thi.ng.geom.utils.bounding_circle.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.bounding_sphere = (function thi$ng$geom$utils$bounding_sphere(var_args){
var args30651 = [];
var len__21238__auto___30657 = arguments.length;
var i__21239__auto___30658 = (0);
while(true){
if((i__21239__auto___30658 < len__21238__auto___30657)){
args30651.push((arguments[i__21239__auto___30658]));

var G__30659 = (i__21239__auto___30658 + (1));
i__21239__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var G__30653 = args30651.length;
switch (G__30653) {
case 1:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30651.length)].join('')));

}
});

thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.utils.centroid.call(null,points),points);
});

thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__30654 = thi.ng.geom.utils.radial_bounds.call(null,thi.ng.geom.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.call(null,vec__30654,(0),null);
var r = cljs.core.nth.call(null,vec__30654,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r,null,null,null));
});

thi.ng.geom.utils.bounding_sphere.cljs$lang$maxFixedArity = 2;

/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 *   union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.utils.coll_bounds = (function thi$ng$geom$utils$coll_bounds(coll){
return cljs.core.reduce.call(null,thi.ng.math.core.union,cljs.core.mapv.call(null,thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 *   repositions all items to fit into given bounds. Returns lazyseq of
 *   transformed entities. Does not support collections of mixed 2D/3D
 *   entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.utils.fit_all_into_bounds = (function thi$ng$geom$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.utils.coll_bounds.call(null,coll);
var s = cljs.core.reduce.call(null,cljs.core.min,thi.ng.math.core.div.call(null,cljs.core.get.call(null,bounds,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.call(null,b,new cljs.core.Keyword(null,"size","size",1098693007))));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center.call(null,thi.ng.geom.core.scale.call(null,b,s),thi.ng.geom.core.centroid.call(null,bounds));
return cljs.core.map.call(null,((function (b,s,b_SINGLEQUOTE_){
return (function (p1__30661_SHARP_){
return thi.ng.geom.core.scale_size.call(null,thi.ng.geom.core.center.call(null,p1__30661_SHARP_,thi.ng.geom.core.unmap_point.call(null,b_SINGLEQUOTE_,thi.ng.geom.core.map_point.call(null,b,thi.ng.geom.core.centroid.call(null,p1__30661_SHARP_)))),s);
});})(b,s,b_SINGLEQUOTE_))
,coll);
});
/**
 * Takes a target mesh, its add-face fn and a source mesh or face
 *   sequence. Adds faces to target mesh and returns it.
 */
thi.ng.geom.utils.into_mesh = (function thi$ng$geom$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.call(null,add_face,mesh,((((!((mesh_or_faces == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === mesh_or_faces.thi$ng$geom$core$IFaceAccess$)))?true:(((!mesh_or_faces.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IFaceAccess,mesh_or_faces):false)):cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IFaceAccess,mesh_or_faces)))?thi.ng.geom.core.faces.call(null,mesh_or_faces,true):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 *   new mesh. Thus f should return a seq of raw faces (i.e. each face as
 *   2-elem vector of [verts attribs]. Returns new mesh.
 */
thi.ng.geom.utils.map_mesh = (function thi$ng$geom$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into.call(null,thi.ng.geom.core.clear_STAR_.call(null,mesh),cljs.core.mapcat.call(null,f,thi.ng.geom.core.faces.call(null,mesh,true)));
});
/**
 * Takes a mesh, its add-face fn and a vertex transformation fn.
 *   Transforms all mesh vertices and returns new mesh.
 */
thi.ng.geom.utils.transform_mesh = (function thi$ng$geom$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = ((((!((tx == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === tx.thi$ng$geom$core$IVectorTransform$)))?true:(((!tx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IVectorTransform,tx):false)):cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.IVectorTransform,tx)))?(function (v){
return thi.ng.geom.core.transform_vector.call(null,tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tx__$1){
return (function (acc,v){
return cljs.core.assoc_BANG_.call(null,acc,v,tx__$1.call(null,v));
});})(tx__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices.call(null,mesh)));
return cljs.core.reduce.call(null,((function (tx__$1,verts_SINGLEQUOTE_){
return (function (mesh__$1,p__30670){
var vec__30671 = p__30670;
var fv = cljs.core.nth.call(null,vec__30671,(0),null);
var fa = cljs.core.nth.call(null,vec__30671,(1),null);
return add_face.call(null,mesh__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,verts_SINGLEQUOTE_,fv),fa], null));
});})(tx__$1,verts_SINGLEQUOTE_))
,thi.ng.geom.core.clear_STAR_.call(null,mesh),thi.ng.geom.core.faces.call(null,mesh,true));
});

//# sourceMappingURL=utils.js.map