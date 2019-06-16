// Compiled by ClojureScript 1.9.293 {}
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
var args26092 = [];
var len__21238__auto___26095 = arguments.length;
var i__21239__auto___26096 = (0);
while(true){
if((i__21239__auto___26096 < len__21238__auto___26095)){
args26092.push((arguments[i__21239__auto___26096]));

var G__26097 = (i__21239__auto___26096 + (1));
i__21239__auto___26096 = G__26097;
continue;
} else {
}
break;
}

var G__26094 = args26092.length;
switch (G__26094) {
case 1:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26092.length)].join('')));

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
var args26099 = [];
var len__21238__auto___26102 = arguments.length;
var i__21239__auto___26103 = (0);
while(true){
if((i__21239__auto___26103 < len__21238__auto___26102)){
args26099.push((arguments[i__21239__auto___26103]));

var G__26104 = (i__21239__auto___26103 + (1));
i__21239__auto___26103 = G__26104;
continue;
} else {
}
break;
}

var G__26101 = args26099.length;
switch (G__26101) {
case 1:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26099.length)].join('')));

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
var args26106 = [];
var len__21238__auto___26109 = arguments.length;
var i__21239__auto___26110 = (0);
while(true){
if((i__21239__auto___26110 < len__21238__auto___26109)){
args26106.push((arguments[i__21239__auto___26110]));

var G__26111 = (i__21239__auto___26110 + (1));
i__21239__auto___26110 = G__26111;
continue;
} else {
}
break;
}

var G__26108 = args26106.length;
switch (G__26108) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26106.length)].join('')));

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
thi.ng.geom.triangle.other_point_in_tri = (function thi$ng$geom$triangle$other_point_in_tri(p__26113,a,b){
var vec__26117 = p__26113;
var ta = cljs.core.nth.call(null,vec__26117,(0),null);
var tb = cljs.core.nth.call(null,vec__26117,(1),null);
var tc = cljs.core.nth.call(null,vec__26117,(2),null);
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
var args26120 = [];
var len__21238__auto___26128 = arguments.length;
var i__21239__auto___26129 = (0);
while(true){
if((i__21239__auto___26129 < len__21238__auto___26128)){
args26120.push((arguments[i__21239__auto___26129]));

var G__26130 = (i__21239__auto___26129 + (1));
i__21239__auto___26129 = G__26130;
continue;
} else {
}
break;
}

var G__26122 = args26120.length;
switch (G__26122) {
case 2:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26120.length)].join('')));

}
});

thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2 = (function (p__26123,id){
var vec__26124 = p__26123;
var a = cljs.core.nth.call(null,vec__26124,(0),null);
var b = cljs.core.nth.call(null,vec__26124,(1),null);
var c = cljs.core.nth.call(null,vec__26124,(2),null);
var G__26127 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__26127) {
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
var args26133 = [];
var len__21238__auto___26139 = arguments.length;
var i__21239__auto___26140 = (0);
while(true){
if((i__21239__auto___26140 < len__21238__auto___26139)){
args26133.push((arguments[i__21239__auto___26140]));

var G__26141 = (i__21239__auto___26140 + (1));
i__21239__auto___26140 = G__26141;
continue;
} else {
}
break;
}

var G__26135 = args26133.length;
switch (G__26135) {
case 2:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26133.length)].join('')));

}
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2 = (function (points,id){
var vec__26136 = thi.ng.geom.triangle.altitude.call(null,points,id);
var a = cljs.core.nth.call(null,vec__26136,(0),null);
var b = cljs.core.nth.call(null,vec__26136,(1),null);
return thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,b,a));
});

thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,c,thi.ng.math.core.mix.call(null,a,b,thi.ng.geom.utils.closest_point_coeff.call(null,c,a,b))));
});

thi.ng.geom.triangle.norm_altitude.cljs$lang$maxFixedArity = 3;

thi.ng.geom.triangle.centroid = (function thi$ng$geom$triangle$centroid(var_args){
var args26143 = [];
var len__21238__auto___26150 = arguments.length;
var i__21239__auto___26151 = (0);
while(true){
if((i__21239__auto___26151 < len__21238__auto___26150)){
args26143.push((arguments[i__21239__auto___26151]));

var G__26152 = (i__21239__auto___26151 + (1));
i__21239__auto___26151 = G__26152;
continue;
} else {
}
break;
}

var G__26145 = args26143.length;
switch (G__26145) {
case 3:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26143.length)].join('')));

}
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core._STAR_.call(null,thi.ng.math.core._PLUS_.call(null,a,b,c),thi.ng.math.core.THIRD);
});

thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1 = (function (p__26146){
var vec__26147 = p__26146;
var a = cljs.core.nth.call(null,vec__26147,(0),null);
var b = cljs.core.nth.call(null,vec__26147,(1),null);
var c = cljs.core.nth.call(null,vec__26147,(2),null);
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
var args26154 = [];
var len__21238__auto___26172 = arguments.length;
var i__21239__auto___26173 = (0);
while(true){
if((i__21239__auto___26173 < len__21238__auto___26172)){
args26154.push((arguments[i__21239__auto___26173]));

var G__26174 = (i__21239__auto___26173 + (1));
i__21239__auto___26173 = G__26174;
continue;
} else {
}
break;
}

var G__26156 = args26154.length;
switch (G__26156) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26154.length)].join('')));

}
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (t,e){
return thi.ng.geom.triangle.slice_with_STAR_.call(null,t,e,thi.ng.geom.core.classify_point);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (p__26157,e,classifier){
var vec__26158 = p__26157;
var a = cljs.core.nth.call(null,vec__26158,(0),null);
var b = cljs.core.nth.call(null,vec__26158,(1),null);
var c = cljs.core.nth.call(null,vec__26158,(2),null);
return thi.ng.geom.triangle.slice_with_STAR_.call(null,a,b,c,e,classifier);
});

thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,e,classifier){
var verts = thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,thi.ng.geom.triangle.check_edge.call(null,cljs.core.PersistentVector.EMPTY,classifier,e,a,b,true,true),classifier,e,b,c,false,true),classifier,e,c,a,false,false);
var cmap = ((function (verts){
return (function (ids){
return cljs.core.reduce.call(null,((function (verts){
return (function (m,p__26161){
var vec__26162 = p__26161;
var a__$1 = cljs.core.nth.call(null,vec__26162,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26162,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26162,(2),null);
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(1))], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1.call(null,(0)),b__$1.call(null,(0)),c__$1.call(null,(0))], null));
});})(verts))
,new cljs.core.PersistentArrayMap(null, 2, [(-1),cljs.core.PersistentVector.EMPTY,(1),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,((function (verts){
return (function (p__26165){
var vec__26166 = p__26165;
var a__$1 = cljs.core.nth.call(null,vec__26166,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26166,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26166,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts.call(null,a__$1),verts.call(null,b__$1),verts.call(null,c__$1)], null);
});})(verts))
,ids));
});})(verts))
;
var pred__26169 = cljs.core._EQ_;
var expr__26170 = cljs.core.count.call(null,verts);
if(cljs.core.truth_(pred__26169.call(null,(4),expr__26170))){
var triverts = cljs.core.PersistentHashSet.fromArray([a,c,b], true);
var d = (function (){var i = (3);
while(true){
var temp__5718__auto__ = verts.call(null,i);
if(cljs.core.truth_(temp__5718__auto__)){
var vc = temp__5718__auto__;
if(cljs.core.truth_((function (){var and__20010__auto__ = (vc.call(null,(1)) === (0));
if(and__20010__auto__){
return triverts.call(null,vc.call(null,(0)));
} else {
return and__20010__auto__;
}
})())){
return i;
} else {
var G__26176 = (i - (1));
i = G__26176;
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
if(cljs.core.truth_(pred__26169.call(null,(5),expr__26170))){
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

thi.ng.geom.triangle.circumcircle_raw = (function thi$ng$geom$triangle$circumcircle_raw(p__26177,p__26178,p__26179){
var vec__26189 = p__26177;
var ax = cljs.core.nth.call(null,vec__26189,(0),null);
var ay = cljs.core.nth.call(null,vec__26189,(1),null);
var a = vec__26189;
var vec__26192 = p__26178;
var bx = cljs.core.nth.call(null,vec__26192,(0),null);
var by = cljs.core.nth.call(null,vec__26192,(1),null);
var b = vec__26192;
var vec__26195 = p__26179;
var cx = cljs.core.nth.call(null,vec__26195,(0),null);
var cy = cljs.core.nth.call(null,vec__26195,(1),null);
var c = vec__26195;
var eq_ab_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,ay,by,thi.ng.math.core._STAR_eps_STAR_);
var eq_bc_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,by,cy,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_((function (){var and__20010__auto__ = eq_ab_QMARK_;
if(cljs.core.truth_(and__20010__auto__)){
return eq_bc_QMARK_;
} else {
return and__20010__auto__;
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
var args26198 = [];
var len__21238__auto___26204 = arguments.length;
var i__21239__auto___26205 = (0);
while(true){
if((i__21239__auto___26205 < len__21238__auto___26204)){
args26198.push((arguments[i__21239__auto___26205]));

var G__26206 = (i__21239__auto___26205 + (1));
i__21239__auto___26205 = G__26206;
continue;
} else {
}
break;
}

var G__26200 = args26198.length;
switch (G__26200) {
case 1:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26198.length)].join('')));

}
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1 = (function (t){
return thi.ng.geom.triangle.circumcircle.call(null,cljs.core.get.call(null,t,new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.get.call(null,t,new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.get.call(null,t,new cljs.core.Keyword(null,"c","c",-1763192079)));
});

thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var vec__26201 = thi.ng.geom.triangle.circumcircle_raw.call(null,a,b,c);
var o = cljs.core.nth.call(null,vec__26201,(0),null);
var r = cljs.core.nth.call(null,vec__26201,(1),null);
return (new thi.ng.geom.types.Circle2(o,r,null,null,null));
});

thi.ng.geom.triangle.circumcircle.cljs$lang$maxFixedArity = 3;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26213_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__26213_SHARP_);
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
return (function (p1__26209_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__26209_SHARP_,null,null,null));
});})(___$1))
,thi.ng.geom.utils.tessellate_with_point.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__26214,t){
var map__26215 = p__26214;
var map__26215__$1 = ((((!((map__26215 == null)))?((((map__26215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26215):map__26215);
var p = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26217 = this;
var map__26217__$1 = ((((!((map__26217 == null)))?((((map__26217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26217):map__26217);
var p__$1 = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__26219){
var map__26220 = p__26219;
var map__26220__$1 = ((((!((map__26220 == null)))?((((map__26220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26220):map__26220);
var p = cljs.core.get.call(null,map__26220__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26222 = this;
var map__26222__$1 = ((((!((map__26222 == null)))?((((map__26222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26222):map__26222);
var p__$1 = cljs.core.get.call(null,map__26222__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (p__26224,udist,include_last_QMARK_){
var map__26225 = p__26224;
var map__26225__$1 = ((((!((map__26225 == null)))?((((map__26225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26225):map__26225);
var p = cljs.core.get.call(null,map__26225__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26227 = this;
var map__26227__$1 = ((((!((map__26227 == null)))?((((map__26227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26227):map__26227);
var p__$1 = cljs.core.get.call(null,map__26227__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26210_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__26210_SHARP_,theta);
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
return (function (p1__26211_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__26211_SHARP_,s);
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
return thi.ng.geom.core.add_face.call(null,(function (){var or__20022__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.attribs.generate_face_attribs.call(null,cljs.core.mapv.call(null,thi.ng.geom.vector.vec3,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),(0),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),opts));
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,p__26229){
var map__26230 = p__26229;
var map__26230__$1 = ((((!((map__26230 == null)))?((((map__26230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26230):map__26230);
var vec__26231 = cljs.core.get.call(null,map__26230__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__26231,(0),null);
var q = cljs.core.nth.call(null,vec__26231,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__20010__auto__ = thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,p);
if(cljs.core.truth_(and__20010__auto__)){
return thi.ng.geom.core.contains_point_QMARK_.call(null,___$1,q);
} else {
return and__20010__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301)], null);
} else {
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_.call(null,p,q,thi.ng.geom.core.edges.call(null,___$1));
}
});

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__26235 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.call(null,vec__26235,(0),null);
var dir = cljs.core.nth.call(null,vec__26235,(1),null);
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

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__26249,v){
var map__26250 = p__26249;
var map__26250__$1 = ((((!((map__26250 == null)))?((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
var vec__26251 = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26251,(0),null);
var b = cljs.core.nth.call(null,vec__26251,(1),null);
var c = cljs.core.nth.call(null,vec__26251,(2),null);
var map__26255 = this;
var map__26255__$1 = ((((!((map__26255 == null)))?((((map__26255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26255):map__26255);
var vec__26256 = cljs.core.get.call(null,map__26255__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26256,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26256,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26256,(2),null);
var pred__26260 = cljs.core._EQ_;
var expr__26261 = v;
if(cljs.core.truth_(pred__26260.call(null,a__$1,expr__26261))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__26260.call(null,b__$1,expr__26261))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__26260.call(null,c__$1,expr__26261))){
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
return (function (p1__26212_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__26212_SHARP_,t);
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
return (function (p1__26208_SHARP_){
return thi.ng.math.core.signum.call(null,cljs.core.apply.call(null,thi.ng.geom.utils.closest_point_coeff,p,p1__26208_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
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

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__26263){
var map__26264 = p__26263;
var map__26264__$1 = ((((!((map__26264 == null)))?((((map__26264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26264):map__26264);
var vec__26265 = cljs.core.get.call(null,map__26264__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26265,(0),null);
var b = cljs.core.nth.call(null,vec__26265,(1),null);
var c = cljs.core.nth.call(null,vec__26265,(2),null);
var map__26269 = this;
var map__26269__$1 = ((((!((map__26269 == null)))?((((map__26269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26269):map__26269);
var vec__26270 = cljs.core.get.call(null,map__26269__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26270,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26270,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26270,(2),null);
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

thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__26238){
var map__26239 = p__26238;
var map__26239__$1 = ((((!((map__26239 == null)))?((((map__26239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26239):map__26239);
var vec__26240 = cljs.core.get.call(null,map__26239__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26240,(0),null);
var b = cljs.core.nth.call(null,vec__26240,(1),null);
var c = cljs.core.nth.call(null,vec__26240,(2),null);
var map__26244 = this;
var map__26244__$1 = ((((!((map__26244 == null)))?((((map__26244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26244):map__26244);
var vec__26245 = cljs.core.get.call(null,map__26244__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26245,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26245,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26245,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});
thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26282_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__26282_SHARP_);
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
return (function (p1__26274_SHARP_){
return (new thi.ng.geom.types.Triangle3(p1__26274_SHARP_,null,null,null));
});})(___$1))
,thi.ng.geom.utils.tessellate_with_point.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__26283,t){
var map__26284 = p__26283;
var map__26284__$1 = ((((!((map__26284 == null)))?((((map__26284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26284):map__26284);
var p = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26286 = this;
var map__26286__$1 = ((((!((map__26286 == null)))?((((map__26286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26286):map__26286);
var p__$1 = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,t,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__26288){
var map__26289 = p__26288;
var map__26289__$1 = ((((!((map__26289 == null)))?((((map__26289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26289):map__26289);
var p = cljs.core.get.call(null,map__26289__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26291 = this;
var map__26291__$1 = ((((!((map__26291 == null)))?((((map__26291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26291):map__26291);
var p__$1 = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.call(null,thi.ng.math.core.random.call(null),cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),thi.ng.math.core.normdist_weights.call(null,(3)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (p__26293,udist,include_last_QMARK_){
var map__26294 = p__26293;
var map__26294__$1 = ((((!((map__26294 == null)))?((((map__26294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26294):map__26294);
var p = cljs.core.get.call(null,map__26294__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__26296 = this;
var map__26296__$1 = ((((!((map__26296 == null)))?((((map__26296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26296):map__26296);
var p__$1 = cljs.core.get.call(null,map__26296__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,p__$1,cljs.core.first.call(null,p__$1)));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26275_SHARP_){
return thi.ng.geom.core.rotate.call(null,p1__26275_SHARP_,theta);
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
return (function (p1__26280_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__26280_SHARP_,s);
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
return thi.ng.geom.core.add_face.call(null,(function (){var or__20022__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.attribs.generate_face_attribs.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),(0),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),opts));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (p__26298,ray){
var map__26299 = p__26298;
var map__26299__$1 = ((((!((map__26299 == null)))?((((map__26299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26299):map__26299);
var vec__26300 = cljs.core.get.call(null,map__26299__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26300,(0),null);
var b = cljs.core.nth.call(null,vec__26300,(1),null);
var c = cljs.core.nth.call(null,vec__26300,(2),null);
var map__26304 = this;
var map__26304__$1 = ((((!((map__26304 == null)))?((((map__26304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26304):map__26304);
var vec__26305 = cljs.core.get.call(null,map__26304__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26305,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26305,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26305,(2),null);
var vec__26309 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.call(null,vec__26309,(0),null);
var dir = cljs.core.nth.call(null,vec__26309,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (p__26312,p,dir){
var map__26313 = p__26312;
var map__26313__$1 = ((((!((map__26313 == null)))?((((map__26313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26313):map__26313);
var vec__26314 = cljs.core.get.call(null,map__26313__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26314,(0),null);
var b = cljs.core.nth.call(null,vec__26314,(1),null);
var c = cljs.core.nth.call(null,vec__26314,(2),null);
var map__26318 = this;
var map__26318__$1 = ((((!((map__26318 == null)))?((((map__26318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26318):map__26318);
var vec__26319 = cljs.core.get.call(null,map__26318__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26319,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26319,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26319,(2),null);
return thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_.call(null,p,dir,a__$1,b__$1,c__$1);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__26334,v){
var map__26335 = p__26334;
var map__26335__$1 = ((((!((map__26335 == null)))?((((map__26335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26335):map__26335);
var vec__26336 = cljs.core.get.call(null,map__26335__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26336,(0),null);
var b = cljs.core.nth.call(null,vec__26336,(1),null);
var c = cljs.core.nth.call(null,vec__26336,(2),null);
var map__26340 = this;
var map__26340__$1 = ((((!((map__26340 == null)))?((((map__26340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26340):map__26340);
var vec__26341 = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26341,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26341,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26341,(2),null);
var pred__26345 = cljs.core._EQ_;
var expr__26346 = v;
if(cljs.core.truth_(pred__26345.call(null,a__$1,expr__26346))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_(pred__26345.call(null,b__$1,expr__26346))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_(pred__26345.call(null,c__$1,expr__26346))){
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
return (function (p1__26281_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__26281_SHARP_,t);
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
return (function (p1__26276_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__26276_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26277_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__26277_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26278_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__26278_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26279_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__26279_SHARP_,axis,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__26348){
var map__26349 = p__26348;
var map__26349__$1 = ((((!((map__26349 == null)))?((((map__26349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26349):map__26349);
var vec__26350 = cljs.core.get.call(null,map__26349__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26350,(0),null);
var b = cljs.core.nth.call(null,vec__26350,(1),null);
var c = cljs.core.nth.call(null,vec__26350,(2),null);
var map__26354 = this;
var map__26354__$1 = ((((!((map__26354 == null)))?((((map__26354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26354):map__26354);
var vec__26355 = cljs.core.get.call(null,map__26354__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26355,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26355,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26355,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$signed_volume$arity$1 = (function (p__26359){
var map__26360 = p__26359;
var map__26360__$1 = ((((!((map__26360 == null)))?((((map__26360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26360):map__26360);
var vec__26361 = cljs.core.get.call(null,map__26360__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26361,(0),null);
var b = cljs.core.nth.call(null,vec__26361,(1),null);
var c = cljs.core.nth.call(null,vec__26361,(2),null);
var map__26365 = this;
var map__26365__$1 = ((((!((map__26365 == null)))?((((map__26365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26365):map__26365);
var vec__26366 = cljs.core.get.call(null,map__26365__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26366,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26366,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26366,(2),null);
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

thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__26323){
var map__26324 = p__26323;
var map__26324__$1 = ((((!((map__26324 == null)))?((((map__26324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26324):map__26324);
var vec__26325 = cljs.core.get.call(null,map__26324__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26325,(0),null);
var b = cljs.core.nth.call(null,vec__26325,(1),null);
var c = cljs.core.nth.call(null,vec__26325,(2),null);
var map__26329 = this;
var map__26329__$1 = ((((!((map__26329 == null)))?((((map__26329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26329):map__26329);
var vec__26330 = cljs.core.get.call(null,map__26329__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26330,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26330,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26330,(2),null);
return ((thi.ng.geom.core.dist.call(null,a__$1,b__$1) + thi.ng.geom.core.dist.call(null,b__$1,c__$1)) + thi.ng.geom.core.dist.call(null,c__$1,a__$1));
});

//# sourceMappingURL=triangle.js.map