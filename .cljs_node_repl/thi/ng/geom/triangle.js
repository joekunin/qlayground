// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.triangle');
goog.require('cljs.core');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.triangle.triangle2 = (function thi$ng$geom$triangle$triangle2(var_args){
var args31911 = [];
var len__21023__auto___31914 = arguments.length;
var i__21024__auto___31915 = (0);
while(true){
if((i__21024__auto___31915 < len__21023__auto___31914)){
args31911.push((arguments[i__21024__auto___31915]));

var G__31916 = (i__21024__auto___31915 + (1));
i__21024__auto___31915 = G__31916;
continue;
} else {
}
break;
}

var G__31913 = args31911.length;
switch (G__31913) {
case 1:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31911.length)].join('')));

}
});

thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"a","a",-2123407586))),thi.ng.geom.vector.vec2.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"b","b",1482224470))),thi.ng.geom.vector.vec2.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"c","c",-1763192079)))], null),null,null,null));
} else {
if(cljs.core.sequential_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,cljs.core.first.call(null,t)),thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,t,(1))),thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,t,(2)))], null),null,null,null));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,t);

}
}
});

thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,a),thi.ng.geom.vector.vec2.call(null,b),thi.ng.geom.vector.vec2.call(null,c)], null),null,null,null));
});

thi.ng.geom.triangle.triangle2.cljs$lang$maxFixedArity = 3;

thi.ng.geom.triangle.triangle3 = (function thi$ng$geom$triangle$triangle3(var_args){
var args31918 = [];
var len__21023__auto___31921 = arguments.length;
var i__21024__auto___31922 = (0);
while(true){
if((i__21024__auto___31922 < len__21023__auto___31921)){
args31918.push((arguments[i__21024__auto___31922]));

var G__31923 = (i__21024__auto___31922 + (1));
i__21024__auto___31922 = G__31923;
continue;
} else {
}
break;
}

var G__31920 = args31918.length;
switch (G__31920) {
case 1:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31918.length)].join('')));

}
});

thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"a","a",-2123407586))),thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"b","b",1482224470))),thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"c","c",-1763192079)))], null),null,null,null));
} else {
if(cljs.core.sequential_QMARK_.call(null,t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,cljs.core.first.call(null,t)),thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,t,(1))),thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,t,(2)))], null),null,null,null));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,t);

}
}
});

thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,a),thi.ng.geom.vector.vec3.call(null,b),thi.ng.geom.vector.vec3.call(null,c)], null),null,null,null));
});

thi.ng.geom.triangle.triangle3.cljs$lang$maxFixedArity = 3;

thi.ng.geom.triangle.equilateral2 = (function thi$ng$geom$triangle$equilateral2(var_args){
var args31925 = [];
var len__21023__auto___31928 = arguments.length;
var i__21024__auto___31929 = (0);
while(true){
if((i__21024__auto___31929 < len__21023__auto___31928)){
args31925.push((arguments[i__21024__auto___31929]));

var G__31930 = (i__21024__auto___31929 + (1));
i__21024__auto___31929 = G__31930;
continue;
} else {
}
break;
}

var G__31927 = args31925.length;
switch (G__31927) {
case 1:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31925.length)].join('')));

}
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1 = (function (l){
if(cljs.core.map_QMARK_.call(null,l)){
return thi.ng.geom.triangle.equilateral2.call(null,cljs.core.get.call(null,l,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,l,new cljs.core.Keyword(null,"q","q",689001697)));
} else {
if(cljs.core.sequential_QMARK_.call(null,l)){
return thi.ng.geom.triangle.equilateral2.call(null,cljs.core.first.call(null,l),cljs.core.nth.call(null,l,(1)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,l);

}
}
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = thi.ng.geom.vector.vec2.call(null,a);
var b__$1 = thi.ng.geom.vector.vec2.call(null,b);
var dir = thi.ng.math.core._.call(null,a__$1,b__$1);
var n = thi.ng.geom.core.normal.call(null,dir);
var c = thi.ng.math.core._PLUS_.call(null,thi.ng.math.core.normalize.call(null,n,((thi.ng.math.core.mag.call(null,dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.math.core.mix.call(null,a__$1,b__$1));
return thi.ng.geom.triangle.triangle2.call(null,a__$1,b__$1,c);
});

thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return thi.ng.geom.triangle.equilateral2.call(null,thi.ng.geom.vector.vec2.call(null,x1,y1),thi.ng.geom.vector.vec2.call(null,x2,y2));
});

thi.ng.geom.triangle.equilateral2.cljs$lang$maxFixedArity = 4;

thi.ng.geom.triangle.equilateral3 = (function thi$ng$geom$triangle$equilateral3(a,b,n){
var a__$1 = thi.ng.geom.vector.vec3.call(null,a);
var b__$1 = thi.ng.geom.vector.vec3.call(null,b);
var dir = thi.ng.math.core._.call(null,b__$1,a__$1);
var n__$1 = thi.ng.math.core.normalize.call(null,thi.ng.math.core.cross.call(null,dir,n));
var c = thi.ng.math.core._PLUS_.call(null,thi.ng.math.core.normalize.call(null,n__$1,((thi.ng.math.core.mag.call(null,dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.math.core.mix.call(null,a__$1,b__$1));
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c], null),null,null,null));
});
thi.ng.geom.triangle.other_point_in_tri = (function thi$ng$geom$triangle$other_point_in_tri(p__31932,a,b){
var vec__31936 = p__31932;
var ta = cljs.core.nth.call(null,vec__31936,(0),null);
var tb = cljs.core.nth.call(null,vec__31936,(1),null);
var tc = cljs.core.nth.call(null,vec__31936,(2),null);
if(cljs.core._EQ_.call(null,a,ta)){
if(cljs.core._EQ_.call(null,b,tb)){
return tc;
} else {
return tb;
}
} else {
if(cljs.core._EQ_.call(null,a,tb)){
if(cljs.core._EQ_.call(null,b,ta)){
return tc;
} else {
return ta;
}
} else {
if(cljs.core._EQ_.call(null,b,ta)){
return tb;
} else {
return ta;
}
}
}
});
thi.ng.geom.triangle.altitude = (function thi$ng$geom$triangle$altitude(var_args){
var args31939 = [];
var len__21023__auto___31947 = arguments.length;
var i__21024__auto___31948 = (0);
while(true){
if((i__21024__auto___31948 < len__21023__auto___31947)){
args31939.push((arguments[i__21024__auto___31948]));

var G__31949 = (i__21024__auto___31948 + (1));
i__21024__auto___31948 = G__31949;
continue;
} else {
}
break;
}

var G__31941 = args31939.length;
switch (G__31941) {
case 2:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31939.length)].join('')));

}
});

thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2 = (function (p__31942,id){
var vec__31943 = p__31942;
var a = cljs.core.nth.call(null,vec__31943,(0),null);
var b = cljs.core.nth.call(null,vec__31943,(1),null);
var c = cljs.core.nth.call(null,vec__31943,(2),null);
var G__31946 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__31946) {
case "a":
return thi.ng.geom.triangle.altitude.call(null,b,c,a);

break;
case "b":
return thi.ng.geom.triangle.altitude.call(null,a,c,b);

break;
case "c":
return thi.ng.geom.triangle.altitude.call(null,a,b,c);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(id)].join('')));

}
});

thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.call(null,a,b,thi.ng.geom.utils.closest_point_coeff.call(null,c,a,b)),c], null);
});

thi.ng.geom.triangle.altitude.cljs$lang$maxFixedArity = 3;

thi.ng.geom.triangle.norm_altitude = (function thi$ng$geom$triangle$norm_altitude(var_args){
var args31952 = [];
var len__21023__auto___31958 = arguments.length;
var i__21024__auto___31959 = (0);
while(true){
if((i__21024__auto___31959 < len__21023__auto___31958)){
args31952.push((arguments[i__21024__auto___31959]));

var G__31960 = (i__21024__auto___31959 + (1));
i__21024__auto___31959 = G__31960;
continue;
} else {
}
break;
}

var G__31954 = args31952.length;
switch (G__31954) {
case 2:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31952.length)].join('')));

}
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2 = (function (points,id){
var vec__31955 = thi.ng.geom.triangle.altitude.call(null,points,id);
var a = cljs.core.nth.call(null,vec__31955,(0),null);
var b = cljs.core.nth.call(null,vec__31955,(1),null);
return thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,b,a));
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,c,thi.ng.math.core.mix.call(null,a,b,thi.ng.geom.utils.closest_point_coeff.call(null,c,a,b))));
});

thi.ng.geom.triangle.norm_altitude.cljs$lang$maxFixedArity = 3;

thi.ng.geom.triangle.centroid = (function thi$ng$geom$triangle$centroid(var_args){
var args31962 = [];
var len__21023__auto___31969 = arguments.length;
var i__21024__auto___31970 = (0);
while(true){
if((i__21024__auto___31970 < len__21023__auto___31969)){
args31962.push((arguments[i__21024__auto___31970]));

var G__31971 = (i__21024__auto___31970 + (1));
i__21024__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var G__31964 = args31962.length;
switch (G__31964) {
case 3:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31962.length)].join('')));

}
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core._STAR_.call(null,thi.ng.math.core._PLUS_.call(null,a,b,c),thi.ng.math.core.THIRD);
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1 = (function (p__31965){
var vec__31966 = p__31965;
var a = cljs.core.nth.call(null,vec__31966,(0),null);
var b = cljs.core.nth.call(null,vec__31966,(1),null);
var c = cljs.core.nth.call(null,vec__31966,(2),null);
return thi.ng.math.core._STAR_.call(null,thi.ng.math.core._PLUS_.call(null,a,b,c),thi.ng.math.core.THIRD);
});

thi.ng.geom.triangle.centroid.cljs$lang$maxFixedArity = 3;

thi.ng.geom.triangle.check_edge = (function thi$ng$geom$triangle$check_edge(splits,classifier,e,p,q,add_p_QMARK_,add_q_QMARK_){
var pc = classifier.call(null,e,p);
var qc = classifier.call(null,e,q);
var splits__$1 = (cljs.core.truth_(add_p_QMARK_)?cljs.core.conj.call(null,splits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,pc], null)):splits);
if(((pc * qc) < (0))){
var ip = cljs.core.get.call(null,thi.ng.geom.core.intersect_line.call(null,e,p,q),new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null));
}
} else {
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.call(null,splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return splits__$1;
}
}
});
thi.ng.geom.triangle.slice_with_STAR_ = (function thi$ng$geom$triangle$slice_with_STAR_(var_args){
var args31973 = [];
var len__21023__auto___31991 = arguments.length;
var i__21024__auto___31992 = (0);
while(true){
if((i__21024__auto___31992 < len__21023__auto___31991)){
args31973.push((arguments[i__21024__auto___31992]));

var G__31993 = (i__21024__auto___31992 + (1));
i__21024__auto___31992 = G__31993;
continue;
} else {
}
break;
}

var G__31975 = args31973.length;
switch (G__31975) {
case 2:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31973.length)].join('')));

}
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (t,e){
return thi.ng.geom.triangle.slice_with_STAR_.call(null,t,e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (p__31976,e,classifier){
var vec__31977 = p__31976;
var a = cljs.core.nth.call(null,vec__31977,(0),null);
var b = cljs.core.nth.call(null,vec__31977,(1),null);
var c = cljs.core.nth.call(null,vec__31977,(2),null);
return thi.ng.geom.triangle.slice_with_STAR_.call(null,a,b,c,e,classifier);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,e,classifier){
var verts = thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,cljs.core.PersistentVector.EMPTY,classifier,e,a,b,true,true),classifier,e,b,c,false,true),classifier,e,c,a,false,false);
var cmap = ((function (verts){
return (function (ids){
return cljs.core.reduce.call(null,((function (verts){
return (function (m,p__31980){
var vec__31981 = p__31980;
var a__$1 = cljs.core.nth.call(null,vec__31981,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31981,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__31981,(2),null);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(1))], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(0)),b__$1.call(null,(0)),c__$1.call(null,(0))], null));
});})(verts))
,new cljs.core.PersistentArrayMap(null, 2, [(-1),cljs.core.PersistentVector.EMPTY,(1),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,((function (verts){
return (function (p__31984){
var vec__31985 = p__31984;
var a__$1 = cljs.core.nth.call(null,vec__31985,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31985,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__31985,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts.call(null,a__$1),verts.call(null,b__$1),verts.call(null,c__$1)], null);
});})(verts))
,ids));
});})(verts))
;
var pred__31988 = cljs.core._EQ_;
var expr__31989 = cljs.core.count.call(null,verts);
if(cljs.core.truth_(pred__31988.call(null,(4),expr__31989))){
var triverts = cljs.core.PersistentHashSet.fromArray([a,c,b], true);
var d = (function (){var i = (3);
while(true){
var temp__5718__auto__ = verts.call(null,i);
if(cljs.core.truth_(temp__5718__auto__)){
var vc = temp__5718__auto__;
if(cljs.core.truth_((function (){var and__19795__auto__ = (vc.call(null,(1)) === (0));
if(and__19795__auto__){
return triverts.call(null,vc.call(null,(0)));
} else {
return and__19795__auto__;
}
})())){
return i;
} else {
var G__31995 = (i - (1));
i = G__31995;
continue;
}
} else {
return null;
}
break;
}
})();
return cmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range.call(null,(d + (1)),(4)),thi.ng.math.core.wrap_range.call(null,(d + (2)),(4)),d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range.call(null,(d - (1)),(4)),d,thi.ng.math.core.wrap_range.call(null,(d + (2)),(4))], null)], null));
} else {
if(cljs.core.truth_(pred__31988.call(null,(5),expr__31989))){
if((cljs.core.get_in.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)) === (0))){
if((cljs.core.get_in.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)) === (0))){
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1)], null)], null));
} else {
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4)], null)], null));
}
} else {
return cmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(2)], null)], null));
}
} else {
return null;
}
}
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$lang$maxFixedArity = 5;

thi.ng.geom.triangle.circumcircle_raw = (function thi$ng$geom$triangle$circumcircle_raw(p__31996,p__31997,p__31998){
var vec__32008 = p__31996;
var ax = cljs.core.nth.call(null,vec__32008,(0),null);
var ay = cljs.core.nth.call(null,vec__32008,(1),null);
var a = vec__32008;
var vec__32011 = p__31997;
var bx = cljs.core.nth.call(null,vec__32011,(0),null);
var by = cljs.core.nth.call(null,vec__32011,(1),null);
var b = vec__32011;
var vec__32014 = p__31998;
var cx = cljs.core.nth.call(null,vec__32014,(0),null);
var cy = cljs.core.nth.call(null,vec__32014,(1),null);
var c = vec__32014;
var eq_ab_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,ay,by,thi.ng.math.core._STAR_eps_STAR_);
var eq_bc_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,by,cy,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_((function (){var and__19795__auto__ = eq_ab_QMARK_;
if(cljs.core.truth_(and__19795__auto__)){
return eq_bc_QMARK_;
} else {
return and__19795__auto__;
}
})())){
return null;
} else {
var o = (cljs.core.truth_(eq_ab_QMARK_)?(function (){var cx__$1 = ((ax + bx) * 0.5);
return thi.ng.geom.vector.vec2.call(null,cx__$1,(((cx__$1 - ((bx + cx__$1) * 0.5)) * (- ((cx__$1 - bx) / (cy - by)))) + ((by + cy) * 0.5)));
})():(cljs.core.truth_(eq_bc_QMARK_)?(function (){var cx__$1 = ((bx + cx) * 0.5);
return thi.ng.geom.vector.vec2.call(null,cx__$1,(((cx__$1 - ((ax + bx) * 0.5)) * (- ((bx - ax) / (by - ay)))) + ((ay + by) * 0.5)));
})():(function (){var m1 = (- ((bx - ax) / (by - ay)));
var m2 = (- ((cx - bx) / (cy - by)));
var mx1 = ((ax + bx) * 0.5);
var my1 = ((ay + by) * 0.5);
var cx__$1 = (((((m1 * mx1) - (m2 * ((bx + cx) * 0.5))) + ((by + cy) * 0.5)) + (- my1)) / (m1 - m2));
return thi.ng.geom.vector.vec2.call(null,cx__$1,(((cx__$1 - mx1) * m1) + my1));
})()
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,thi.ng.geom.core.dist.call(null,o,b)], null);
}
});
thi.ng.geom.triangle.circumcircle = (function thi$ng$geom$triangle$circumcircle(var_args){
var args32017 = [];
var len__21023__auto___32023 = arguments.length;
var i__21024__auto___32024 = (0);
while(true){
if((i__21024__auto___32024 < len__21023__auto___32023)){
args32017.push((arguments[i__21024__auto___32024]));

var G__32025 = (i__21024__auto___32024 + (1));
i__21024__auto___32024 = G__32025;
continue;
} else {
}
break;
}

var G__32019 = args32017.length;
switch (G__32019) {
case 1:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32017.length)].join('')));

}
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1 = (function (t){
return thi.ng.geom.triangle.circumcircle.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.get.call(null,t,new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.get.call(null,t,new cljs.core.Keyword(null,"c","c",-1763192079)));
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var vec__32020 = thi.ng.geom.triangle.circumcircle_raw.call(null,a,b,c);
var o = cljs.core.nth.call(null,vec__32020,(0),null);
var r = cljs.core.nth.call(null,vec__32020,(1),null);
return (new thi.ng.geom.types.Circle2(o,r,null,null,null));
});

thi.ng.geom.triangle.circumcircle.cljs$lang$maxFixedArity = 3;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32032_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__32032_SHARP_);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.utils.tri_area2,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.call(null,((function (___$1){
return (function (p1__32028_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__32028_SHARP_,null,null,null));
});})(___$1))
,thi.ng.geom.utils.tessellate_with_point.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__32033,t){
var map__32034 = p__32033;
var map__32034__$1 = ((((!((map__32034 == null)))?((((map__32034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32034):map__32034);
var p = cljs.core.get.call(null,map__32034__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__32036 = this;
var map__32036__$1 = ((((!((map__32036 == null)))?((((map__32036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32036):map__32036);
var p__$1 = cljs.core.get.call(null,map__32036__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__32038){
var map__32039 = p__32038;
var map__32039__$1 = ((((!((map__32039 == null)))?((((map__32039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32039):map__32039);
var p = cljs.core.get.call(null,map__32039__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__32041 = this;
var map__32041__$1 = ((((!((map__32041 == null)))?((((map__32041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32041):map__32041);
var p__$1 = cljs.core.get.call(null,map__32041__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (p__32043,udist,include_last_QMARK_){
var map__32044 = p__32043;
var map__32044__$1 = ((((!((map__32044 == null)))?((((map__32044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32044):map__32044);
var p = cljs.core.get.call(null,map__32044__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__32046 = this;
var map__32046__$1 = ((((!((map__32046 == null)))?((((map__32046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32046):map__32046);
var p__$1 = cljs.core.get.call(null,map__32046__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32029_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__32029_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32030_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__32030_SHARP_,s);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.utils.scale_size.call(null,s,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.reverse.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__19807__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.attribs.generate_face_attribs.call(null,cljs.core.mapv.call(null,thi.ng.geom.vector.vec3,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),(0),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),opts));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,p__32048){
var map__32049 = p__32048;
var map__32049__$1 = ((((!((map__32049 == null)))?((((map__32049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32049):map__32049);
var vec__32050 = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__32050,(0),null);
var q = cljs.core.nth.call(null,vec__32050,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,p);
if(cljs.core.truth_(and__19795__auto__)){
return thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,q);
} else {
return and__19795__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301)], null);
} else {
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_.call(null,p,q,thi.ng.geom.core.edges.call(null,___$1));
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__32054 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.call(null,vec__32054,(0),null);
var dir = cljs.core.nth.call(null,vec__32054,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__32068,v){
var map__32069 = p__32068;
var map__32069__$1 = ((((!((map__32069 == null)))?((((map__32069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32069):map__32069);
var vec__32070 = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32070,(0),null);
var b = cljs.core.nth.call(null,vec__32070,(1),null);
var c = cljs.core.nth.call(null,vec__32070,(2),null);
var map__32074 = this;
var map__32074__$1 = ((((!((map__32074 == null)))?((((map__32074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var vec__32075 = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32075,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32075,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32075,(2),null);
var pred__32079 = cljs.core._EQ_;
var expr__32080 = v;
if(cljs.core.truth_(pred__32079.call(null,a__$1,expr__32080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__32079.call(null,b__$1,expr__32080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__32079.call(null,c__$1,expr__32080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32031_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__32031_SHARP_,t);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISlice$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,classifier);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,((function (___$1){
return (function (p1__32027_SHARP_){
return thi.ng.math.core.signum.call(null,cljs.core.apply.call(null,thi.ng.geom.utils.closest_point_coeff,p,p1__32027_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
});})(___$1))
,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.utils.center.call(null,thi.ng.geom.vector.vec2.call(null),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.vector.vec2.call(null,o),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.utils.point_in_triangle2_QMARK_,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__32082){
var map__32083 = p__32082;
var map__32083__$1 = ((((!((map__32083 == null)))?((((map__32083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32083):map__32083);
var vec__32084 = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32084,(0),null);
var b = cljs.core.nth.call(null,vec__32084,(1),null);
var c = cljs.core.nth.call(null,vec__32084,(2),null);
var map__32088 = this;
var map__32088__$1 = ((((!((map__32088 == null)))?((((map__32088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32088):map__32088);
var vec__32089 = cljs.core.get.call(null,map__32088__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32089,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32089,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32089,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_circle.call(null,thi.ng.geom.core.centroid.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_rect.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IPolygonConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),null,null,null));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__32057){
var map__32058 = p__32057;
var map__32058__$1 = ((((!((map__32058 == null)))?((((map__32058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32058):map__32058);
var vec__32059 = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32059,(0),null);
var b = cljs.core.nth.call(null,vec__32059,(1),null);
var c = cljs.core.nth.call(null,vec__32059,(2),null);
var map__32063 = this;
var map__32063__$1 = ((((!((map__32063 == null)))?((((map__32063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32063):map__32063);
var vec__32064 = cljs.core.get.call(null,map__32063__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32064,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32064,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32064,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});
thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32101_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__32101_SHARP_);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.utils.tri_area3,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.call(null,((function (___$1){
return (function (p1__32093_SHARP_){
return (new thi.ng.geom.types.Triangle3(p1__32093_SHARP_,null,null,null));
});})(___$1))
,thi.ng.geom.utils.tessellate_with_point.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__32102,t){
var map__32103 = p__32102;
var map__32103__$1 = ((((!((map__32103 == null)))?((((map__32103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32103):map__32103);
var p = cljs.core.get.call(null,map__32103__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__32105 = this;
var map__32105__$1 = ((((!((map__32105 == null)))?((((map__32105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32105):map__32105);
var p__$1 = cljs.core.get.call(null,map__32105__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__32107){
var map__32108 = p__32107;
var map__32108__$1 = ((((!((map__32108 == null)))?((((map__32108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32108):map__32108);
var p = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__32110 = this;
var map__32110__$1 = ((((!((map__32110 == null)))?((((map__32110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32110):map__32110);
var p__$1 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (p__32112,udist,include_last_QMARK_){
var map__32113 = p__32112;
var map__32113__$1 = ((((!((map__32113 == null)))?((((map__32113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);
var p = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__32115 = this;
var map__32115__$1 = ((((!((map__32115 == null)))?((((map__32115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32115):map__32115);
var p__$1 = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32094_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__32094_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32099_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__32099_SHARP_,s);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.utils.scale_size.call(null,s,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.reverse.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__19807__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.attribs.generate_face_attribs.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),(0),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),opts));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (p__32117,ray){
var map__32118 = p__32117;
var map__32118__$1 = ((((!((map__32118 == null)))?((((map__32118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32118):map__32118);
var vec__32119 = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32119,(0),null);
var b = cljs.core.nth.call(null,vec__32119,(1),null);
var c = cljs.core.nth.call(null,vec__32119,(2),null);
var map__32123 = this;
var map__32123__$1 = ((((!((map__32123 == null)))?((((map__32123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32123):map__32123);
var vec__32124 = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32124,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32124,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32124,(2),null);
var vec__32128 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.call(null,vec__32128,(0),null);
var dir = cljs.core.nth.call(null,vec__32128,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (p__32131,p,dir){
var map__32132 = p__32131;
var map__32132__$1 = ((((!((map__32132 == null)))?((((map__32132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32132):map__32132);
var vec__32133 = cljs.core.get.call(null,map__32132__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32133,(0),null);
var b = cljs.core.nth.call(null,vec__32133,(1),null);
var c = cljs.core.nth.call(null,vec__32133,(2),null);
var map__32137 = this;
var map__32137__$1 = ((((!((map__32137 == null)))?((((map__32137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32137):map__32137);
var vec__32138 = cljs.core.get.call(null,map__32137__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32138,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32138,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32138,(2),null);
return thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__32153,v){
var map__32154 = p__32153;
var map__32154__$1 = ((((!((map__32154 == null)))?((((map__32154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32154):map__32154);
var vec__32155 = cljs.core.get.call(null,map__32154__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32155,(0),null);
var b = cljs.core.nth.call(null,vec__32155,(1),null);
var c = cljs.core.nth.call(null,vec__32155,(2),null);
var map__32159 = this;
var map__32159__$1 = ((((!((map__32159 == null)))?((((map__32159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32159):map__32159);
var vec__32160 = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32160,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32160,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32160,(2),null);
var pred__32164 = cljs.core._EQ_;
var expr__32165 = v;
if(cljs.core.truth_(pred__32164.call(null,a__$1,expr__32165))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__32164.call(null,b__$1,expr__32165))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__32164.call(null,c__$1,expr__32165))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))).call(null,v))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32100_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__32100_SHARP_,t);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISlice$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,classifier);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
var a = cljs.core.first.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var n = thi.ng.geom.utils.ortho_normal.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var w = (- thi.ng.math.core.dot.call(null,n,a));
return thi.ng.math.core.signum.call(null,(thi.ng.math.core.dot.call(null,n,p) + w),thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.utils.center.call(null,thi.ng.geom.vector.vec3.call(null),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.vector.vec3.call(null,o),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.call(null,thi.ng.geom.utils.point_in_triangle3_QMARK_,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32095_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__32095_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32096_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__32096_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32097_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__32097_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__32098_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__32098_SHARP_,axis,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__32167){
var map__32168 = p__32167;
var map__32168__$1 = ((((!((map__32168 == null)))?((((map__32168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32168):map__32168);
var vec__32169 = cljs.core.get.call(null,map__32168__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32169,(0),null);
var b = cljs.core.nth.call(null,vec__32169,(1),null);
var c = cljs.core.nth.call(null,vec__32169,(2),null);
var map__32173 = this;
var map__32173__$1 = ((((!((map__32173 == null)))?((((map__32173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32173):map__32173);
var vec__32174 = cljs.core.get.call(null,map__32173__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32174,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32174,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32174,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$signed_volume$arity$1 = (function (p__32178){
var map__32179 = p__32178;
var map__32179__$1 = ((((!((map__32179 == null)))?((((map__32179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32179):map__32179);
var vec__32180 = cljs.core.get.call(null,map__32179__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32180,(0),null);
var b = cljs.core.nth.call(null,vec__32180,(1),null);
var c = cljs.core.nth.call(null,vec__32180,(2),null);
var map__32184 = this;
var map__32184__$1 = ((((!((map__32184 == null)))?((((map__32184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32184):map__32184);
var vec__32185 = cljs.core.get.call(null,map__32184__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32185,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32185,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32185,(2),null);
return (thi.ng.math.core.dot.call(null,a__$1,thi.ng.math.core.cross.call(null,b__$1,c__$1)) / 6.0);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(2),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__32142){
var map__32143 = p__32142;
var map__32143__$1 = ((((!((map__32143 == null)))?((((map__32143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32143):map__32143);
var vec__32144 = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__32144,(0),null);
var b = cljs.core.nth.call(null,vec__32144,(1),null);
var c = cljs.core.nth.call(null,vec__32144,(2),null);
var map__32148 = this;
var map__32148__$1 = ((((!((map__32148 == null)))?((((map__32148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32148):map__32148);
var vec__32149 = cljs.core.get.call(null,map__32148__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__32149,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__32149,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__32149,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});

//# sourceMappingURL=triangle.js.map