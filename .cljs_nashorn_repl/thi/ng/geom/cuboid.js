// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.cuboid');
goog.require('cljs.core');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.plane');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.tetrahedron');
thi.ng.geom.cuboid.cuboid = (function thi$ng$geom$cuboid$cuboid(var_args){
var args25748 = [];
var len__21238__auto___25757 = arguments.length;
var i__21239__auto___25758 = (0);
while(true){
if((i__21239__auto___25758 < len__21238__auto___25757)){
args25748.push((arguments[i__21239__auto___25758]));

var G__25759 = (i__21239__auto___25758 + (1));
i__21239__auto___25758 = G__25759;
continue;
} else {
}
break;
}

var G__25750 = args25748.length;
switch (G__25750) {
case 0:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0();

break;
case 8:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 1:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25748.length)].join('')));

}
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.cuboid.cuboid.call(null,1.0);
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,thi.ng.geom.vector.vec3,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null)),null,null,null));
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(typeof x === 'number'){
return thi.ng.geom.cuboid.cuboid.call(null,thi.ng.geom.vector.vec3.call(null),x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return thi.ng.geom.cuboid.cuboid.call(null,cljs.core.get.call(null,x,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,x,new cljs.core.Keyword(null,"size","size",1098693007)));
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
if(((8) === cljs.core.count.call(null,x))){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,thi.ng.geom.vector.vec3,x),null,null,null));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,"Wrong number of points, expected 8 but got",cljs.core.count.call(null,x));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,x);

}
}
}
});

thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
var vec__25751 = thi.ng.geom.vector.vec3.call(null,o);
var x1 = cljs.core.nth.call(null,vec__25751,(0),null);
var y1 = cljs.core.nth.call(null,vec__25751,(1),null);
var z1 = cljs.core.nth.call(null,vec__25751,(2),null);
var a = vec__25751;
var vec__25754 = thi.ng.math.core._PLUS_.call(null,a,size);
var x2 = cljs.core.nth.call(null,vec__25754,(0),null);
var y2 = cljs.core.nth.call(null,vec__25754,(1),null);
var z2 = cljs.core.nth.call(null,vec__25754,(2),null);
var g = vec__25754;
var b = thi.ng.geom.vector.vec3.call(null,x1,y1,z2);
var c = thi.ng.geom.vector.vec3.call(null,x2,y1,z2);
var d = thi.ng.geom.vector.vec3.call(null,x2,y1,z1);
var e = thi.ng.geom.vector.vec3.call(null,x1,y2,z1);
var f = thi.ng.geom.vector.vec3.call(null,x1,y2,z2);
var h = thi.ng.geom.vector.vec3.call(null,x2,y2,z1);
return (new thi.ng.geom.types.Cuboid(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null),null,null,null));
});

thi.ng.geom.cuboid.cuboid.cljs$lang$maxFixedArity = 8;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__25769_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__25769_SHARP_);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__25761_SHARP_){
return cljs.core.apply.call(null,thi.ng.geom.utils.tri_area3,p1__25761_SHARP_);
});})(___$1))
),cljs.core._PLUS_,thi.ng.geom.core.tessellate.call(null,___$1));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (___$1){
return (function (acc,f){
var p_SINGLEQUOTE_ = thi.ng.geom.core.closest_point.call(null,thi.ng.geom.plane.plane_from_points.call(null,f),p);
var d = thi.ng.geom.core.dist_squared.call(null,p,p_SINGLEQUOTE_);
if((d < acc.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_SINGLEQUOTE_,d], null);
} else {
return acc;
}
});})(___$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1.0E100], null),thi.ng.geom.core.faces.call(null,___$1)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (p__25771,p__25772){
var map__25773 = p__25771;
var map__25773__$1 = ((((!((map__25773 == null)))?((((map__25773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25773):map__25773);
var points = cljs.core.get.call(null,map__25773__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__25774 = p__25772;
var map__25774__$1 = ((((!((map__25774 == null)))?((((map__25774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25774):map__25774);
var num = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var map__25777 = this;
var map__25777__$1 = ((((!((map__25777 == null)))?((((map__25777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25777):map__25777);
var points__$1 = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ru = cljs.core.partition.call(null,(2),(1),thi.ng.math.core.norm_range.call(null,(function (){var or__20022__auto__ = cols;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})()));
var rv = cljs.core.partition.call(null,(2),(1),thi.ng.math.core.norm_range.call(null,(function (){var or__20022__auto__ = rows;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})()));
var rw = cljs.core.partition.call(null,(2),(1),thi.ng.math.core.norm_range.call(null,(function (){var or__20022__auto__ = slices;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})()));
var map_p = ((function (ru,rv,rw,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function (p){
return thi.ng.geom.vector.vec3.call(null,cljs.core.mapv.call(null,((function (ru,rv,rw,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function (p1__25762_SHARP_){
return thi.ng.math.core.roundto.call(null,p1__25762_SHARP_,thi.ng.math.core._STAR_eps_STAR_);
});})(ru,rv,rw,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
,thi.ng.geom.utils.map_trilinear.call(null,points__$1,p)));
});})(ru,rv,rw,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
;
var iter__20879__auto__ = ((function (ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__25779(s__25780){
return (new cljs.core.LazySeq(null,((function (ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function (){
var s__25780__$1 = s__25780;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25780__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__25820 = cljs.core.first.call(null,xs__6277__auto__);
var w1 = cljs.core.nth.call(null,vec__25820,(0),null);
var w2 = cljs.core.nth.call(null,vec__25820,(1),null);
var iterys__20875__auto__ = ((function (s__25780__$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__25779_$_iter__25781(s__25782){
return (new cljs.core.LazySeq(null,((function (s__25780__$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function (){
var s__25782__$1 = s__25782;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__25782__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var vec__25838 = cljs.core.first.call(null,xs__6277__auto____$1);
var v1 = cljs.core.nth.call(null,vec__25838,(0),null);
var v2 = cljs.core.nth.call(null,vec__25838,(1),null);
var iterys__20875__auto__ = ((function (s__25782__$1,s__25780__$1,vec__25838,v1,v2,xs__6277__auto____$1,temp__5720__auto____$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__25779_$_iter__25781_$_iter__25783(s__25784){
return (new cljs.core.LazySeq(null,((function (s__25782__$1,s__25780__$1,vec__25838,v1,v2,xs__6277__auto____$1,temp__5720__auto____$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices){
return (function (){
var s__25784__$1 = s__25784;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__25784__$1);
if(temp__5720__auto____$2){
var s__25784__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25784__$2)){
var c__20877__auto__ = cljs.core.chunk_first.call(null,s__25784__$2);
var size__20878__auto__ = cljs.core.count.call(null,c__20877__auto__);
var b__25786 = cljs.core.chunk_buffer.call(null,size__20878__auto__);
if((function (){var i__25785 = (0);
while(true){
if((i__25785 < size__20878__auto__)){
var vec__25847 = cljs.core._nth.call(null,c__20877__auto__,i__25785);
var u1 = cljs.core.nth.call(null,vec__25847,(0),null);
var u2 = cljs.core.nth.call(null,vec__25847,(1),null);
cljs.core.chunk_append.call(null,b__25786,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)),null,null,null)));

var G__25896 = (i__25785 + (1));
i__25785 = G__25896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25786),thi$ng$geom$cuboid$iter__25779_$_iter__25781_$_iter__25783.call(null,cljs.core.chunk_rest.call(null,s__25784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25786),null);
}
} else {
var vec__25850 = cljs.core.first.call(null,s__25784__$2);
var u1 = cljs.core.nth.call(null,vec__25850,(0),null);
var u2 = cljs.core.nth.call(null,vec__25850,(1),null);
return cljs.core.cons.call(null,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)),null,null,null)),thi$ng$geom$cuboid$iter__25779_$_iter__25781_$_iter__25783.call(null,cljs.core.rest.call(null,s__25784__$2)));
}
} else {
return null;
}
break;
}
});})(s__25782__$1,s__25780__$1,vec__25838,v1,v2,xs__6277__auto____$1,temp__5720__auto____$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
,null,null));
});})(s__25782__$1,s__25780__$1,vec__25838,v1,v2,xs__6277__auto____$1,temp__5720__auto____$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
;
var fs__20876__auto__ = cljs.core.seq.call(null,iterys__20875__auto__.call(null,ru));
if(fs__20876__auto__){
return cljs.core.concat.call(null,fs__20876__auto__,thi$ng$geom$cuboid$iter__25779_$_iter__25781.call(null,cljs.core.rest.call(null,s__25782__$1)));
} else {
var G__25897 = cljs.core.rest.call(null,s__25782__$1);
s__25782__$1 = G__25897;
continue;
}
} else {
return null;
}
break;
}
});})(s__25780__$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
,null,null));
});})(s__25780__$1,vec__25820,w1,w2,xs__6277__auto__,temp__5720__auto__,ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
;
var fs__20876__auto__ = cljs.core.seq.call(null,iterys__20875__auto__.call(null,rv));
if(fs__20876__auto__){
return cljs.core.concat.call(null,fs__20876__auto__,thi$ng$geom$cuboid$iter__25779.call(null,cljs.core.rest.call(null,s__25780__$1)));
} else {
var G__25898 = cljs.core.rest.call(null,s__25780__$1);
s__25780__$1 = G__25898;
continue;
}
} else {
return null;
}
break;
}
});})(ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
,null,null));
});})(ru,rv,rw,map_p,map__25777,map__25777__$1,points__$1,map__25773,map__25773__$1,points,map__25774,map__25774__$1,num,cols,rows,slices))
;
return iter__20879__auto__.call(null,rw);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (p__25853){
var map__25854 = p__25853;
var map__25854__$1 = ((((!((map__25854 == null)))?((((map__25854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25854):map__25854);
var p = cljs.core.get.call(null,map__25854__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__25854__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__25856 = this;
var map__25856__$1 = ((((!((map__25856 == null)))?((((map__25856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25856):map__25856);
var p__$1 = cljs.core.get.call(null,map__25856__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__25856__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__25858 = p__$1;
var x1 = cljs.core.nth.call(null,vec__25858,(0),null);
var y1 = cljs.core.nth.call(null,vec__25858,(1),null);
var z1 = cljs.core.nth.call(null,vec__25858,(2),null);
var vec__25861 = thi.ng.math.core._PLUS_.call(null,p__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__25861,(0),null);
var y2 = cljs.core.nth.call(null,vec__25861,(1),null);
var z2 = cljs.core.nth.call(null,vec__25861,(2),null);
return thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),thi.ng.math.core.random.call(null,y1,y2),thi.ng.math.core.random.call(null,z1,z2));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__25864){
var map__25865 = p__25864;
var map__25865__$1 = ((((!((map__25865 == null)))?((((map__25865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25865):map__25865);
var p = cljs.core.get.call(null,map__25865__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__25865__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__25867 = this;
var map__25867__$1 = ((((!((map__25867 == null)))?((((map__25867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25867):map__25867);
var p__$1 = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__25869 = p__$1;
var x1 = cljs.core.nth.call(null,vec__25869,(0),null);
var y1 = cljs.core.nth.call(null,vec__25869,(1),null);
var z1 = cljs.core.nth.call(null,vec__25869,(2),null);
var vec__25872 = thi.ng.math.core._PLUS_.call(null,p__$1,size__$1);
var x2 = cljs.core.nth.call(null,vec__25872,(0),null);
var y2 = cljs.core.nth.call(null,vec__25872,(1),null);
var z2 = cljs.core.nth.call(null,vec__25872,(2),null);
var id = (thi.ng.math.core.random.call(null,(6)) | (0));
if((id < (2))){
return thi.ng.geom.vector.vec3.call(null,(((id === (0)))?x1:x2),thi.ng.math.core.random.call(null,y1,y2),thi.ng.math.core.random.call(null,z1,z2));
} else {
if((id < (4))){
return thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),((cljs.core._EQ_.call(null,(2),id))?y1:y2),thi.ng.math.core.random.call(null,z1,z2));
} else {
return thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),thi.ng.math.core.random.call(null,y1,y2),((cljs.core._EQ_.call(null,(4),id))?z1:z2));

}
}
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__25767_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__25767_SHARP_,s);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.scale_size.call(null,s,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.utils.map_trilinear.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),p);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__25875){
var map__25876 = p__25875;
var map__25876__$1 = ((((!((map__25876 == null)))?((((map__25876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25876):map__25876);
var mesh = cljs.core.get.call(null,map__25876__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.call(null,map__25876__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var attribs = cljs.core.get.call(null,map__25876__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var vec__25878 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__25878,(0),null);
var b = cljs.core.nth.call(null,vec__25878,(1),null);
var c = cljs.core.nth.call(null,vec__25878,(2),null);
var d = cljs.core.nth.call(null,vec__25878,(3),null);
var e = cljs.core.nth.call(null,vec__25878,(4),null);
var f = cljs.core.nth.call(null,vec__25878,(5),null);
var g = cljs.core.nth.call(null,vec__25878,(6),null);
var h = cljs.core.nth.call(null,vec__25878,(7),null);
var vec__25881 = thi.ng.dstruct.core.demunge_flags_seq.call(null,flags,"nsewfb");
var north = cljs.core.nth.call(null,vec__25881,(0),null);
var south = cljs.core.nth.call(null,vec__25881,(1),null);
var east = cljs.core.nth.call(null,vec__25881,(2),null);
var west = cljs.core.nth.call(null,vec__25881,(3),null);
var front = cljs.core.nth.call(null,vec__25881,(4),null);
var back = cljs.core.nth.call(null,vec__25881,(5),null);
return thi.ng.geom.core.into.call(null,(function (){var or__20022__auto__ = mesh;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.sequence.call(null,cljs.core.filter.call(null,cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(east)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),(0),attribs,null):null),(cljs.core.truth_(west)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),(1),attribs,null):null),(cljs.core.truth_(north)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),(2),attribs,null):null),(cljs.core.truth_(south)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),(3),attribs,null):null),(cljs.core.truth_(front)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),(4),attribs,null):null),(cljs.core.truth_(back)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null),(5),attribs,null):null)], null)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__25884 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__25884,(0),null);
var b = cljs.core.nth.call(null,vec__25884,(1),null);
var c = cljs.core.nth.call(null,vec__25884,(2),null);
var d = cljs.core.nth.call(null,vec__25884,(3),null);
var e = cljs.core.nth.call(null,vec__25884,(4),null);
var f = cljs.core.nth.call(null,vec__25884,(5),null);
var g = cljs.core.nth.call(null,vec__25884,(6),null);
var h = cljs.core.nth.call(null,vec__25884,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null)], null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__25768_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__25768_SHARP_,t);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return (- cljs.core.reduce.call(null,((function (___$1){
return (function (c,f){
var c_SINGLEQUOTE_ = thi.ng.geom.core.classify_point.call(null,thi.ng.geom.plane.plane_from_points.call(null,f),p);
if((c_SINGLEQUOTE_ > (0))){
return cljs.core.reduced.call(null,c_SINGLEQUOTE_);
} else {
var x__20355__auto__ = c;
var y__20356__auto__ = c_SINGLEQUOTE_;
return ((x__20355__auto__ > y__20356__auto__) ? x__20355__auto__ : y__20356__auto__);
}
});})(___$1))
,-1.0,thi.ng.geom.core.faces.call(null,___$1)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.center.call(null,thi.ng.geom.vector.vec3.call(null),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.vector.vec3.call(null,o),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.classify_point.call(null,___$1,p) >= (0));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__25763_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__25763_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__25764_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__25764_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__25765_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__25765_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__25766_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__25766_SHARP_,axis,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__25887 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__25887,(0),null);
var b = cljs.core.nth.call(null,vec__25887,(1),null);
var c = cljs.core.nth.call(null,vec__25887,(2),null);
var d = cljs.core.nth.call(null,vec__25887,(3),null);
var e = cljs.core.nth.call(null,vec__25887,(4),null);
var f = cljs.core.nth.call(null,vec__25887,(5),null);
var g = cljs.core.nth.call(null,vec__25887,(6),null);
var h = cljs.core.nth.call(null,vec__25887,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
var vec__25890 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__25890,(0),null);
var b = cljs.core.nth.call(null,vec__25890,(1),null);
var c = cljs.core.nth.call(null,vec__25890,(2),null);
var d = cljs.core.nth.call(null,vec__25890,(3),null);
var e = cljs.core.nth.call(null,vec__25890,(4),null);
var f = cljs.core.nth.call(null,vec__25890,(5),null);
var g = cljs.core.nth.call(null,vec__25890,(6),null);
var h = cljs.core.nth.call(null,vec__25890,(7),null);
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (vec__25890,a,b,c,d,e,f,g,h,___$1){
return (function (p1__25770_SHARP_){
return thi.ng.math.core.abs_STAR_.call(null,thi.ng.geom.core.volume.call(null,thi.ng.geom.tetrahedron.tetrahedron.call(null,p1__25770_SHARP_)));
});})(vec__25890,a,b,c,d,e,f,g,h,___$1))
),cljs.core._PLUS_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,d,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,e,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,d,e,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f,g,e], null)], null));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__25893){
var map__25894 = p__25893;
var map__25894__$1 = ((((!((map__25894 == null)))?((((map__25894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25894):map__25894);
var opts = map__25894__$1;
var f = cljs.core.get.call(null,map__25894__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.core.faces),cljs.core.mapcat.call(null,f)),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(2),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

//# sourceMappingURL=cuboid.js.map