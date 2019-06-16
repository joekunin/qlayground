// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.aabb');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.cuboid');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
/**
 * Creates a new axis-aligned bounding box.
 */
thi.ng.geom.aabb.aabb = (function thi$ng$geom$aabb$aabb(var_args){
var args31434 = [];
var len__21023__auto___31437 = arguments.length;
var i__21024__auto___31438 = (0);
while(true){
if((i__21024__auto___31438 < len__21023__auto___31437)){
args31434.push((arguments[i__21024__auto___31438]));

var G__31439 = (i__21024__auto___31438 + (1));
i__21024__auto___31438 = G__31439;
continue;
} else {
}
break;
}

var G__31436 = args31434.length;
switch (G__31436) {
case 0:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31434.length)].join('')));

}
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.call(null,0.0),thi.ng.geom.vector.vec3.call(null,1.0),null,null,null));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1 = (function (size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.call(null,0.0),thi.ng.geom.vector.vec3.call(null,size),null,null,null));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.call(null,o),thi.ng.geom.vector.vec3.call(null,size),null,null,null));
});

thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.call(null,0.0),thi.ng.geom.vector.vec3.call(null,sx,sy,sz),null,null,null));
});

thi.ng.geom.aabb.aabb.cljs$lang$maxFixedArity = 3;

thi.ng.geom.aabb.aabb_from_minmax = (function thi$ng$geom$aabb$aabb_from_minmax(p,q){
var p__$1 = thi.ng.geom.vector.vec3.call(null,p);
var q__$1 = thi.ng.geom.vector.vec3.call(null,q);
var p__$2 = thi.ng.math.core.min.call(null,p__$1,q__$1);
return (new thi.ng.geom.types.AABB(p__$2,thi.ng.math.core._.call(null,thi.ng.math.core.max.call(null,p__$2,q__$1),p__$2),null,null,null));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform.call(null,thi.ng.geom.cuboid.cuboid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),m);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (p__31442){
var map__31443 = p__31442;
var map__31443__$1 = ((((!((map__31443 == null)))?((((map__31443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31443):map__31443);
var vec__31444 = cljs.core.get.call(null,map__31443__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__31444,(0),null);
var h = cljs.core.nth.call(null,vec__31444,(1),null);
var d = cljs.core.nth.call(null,vec__31444,(2),null);
var map__31448 = this;
var map__31448__$1 = ((((!((map__31448 == null)))?((((map__31448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31448):map__31448);
var vec__31449 = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__31449,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__31449,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__31449,(2),null);
return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__31453,q){
var map__31454 = p__31453;
var map__31454__$1 = ((((!((map__31454 == null)))?((((map__31454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31454):map__31454);
var vec__31455 = cljs.core.get.call(null,map__31454__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__31455,(0),null);
var py = cljs.core.nth.call(null,vec__31455,(1),null);
var pz = cljs.core.nth.call(null,vec__31455,(2),null);
var size = cljs.core.get.call(null,map__31454__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__31459 = this;
var map__31459__$1 = ((((!((map__31459 == null)))?((((map__31459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31459):map__31459);
var vec__31460 = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.call(null,vec__31460,(0),null);
var py__$1 = cljs.core.nth.call(null,vec__31460,(1),null);
var pz__$1 = cljs.core.nth.call(null,vec__31460,(2),null);
var size__$1 = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.clamp.call(null,cljs.core.nth.call(null,q,(0)),px__$1,(px__$1 + cljs.core.nth.call(null,size__$1,(0)))),thi.ng.math.core.clamp.call(null,cljs.core.nth.call(null,q,(1)),py__$1,(py__$1 + cljs.core.nth.call(null,size__$1,(1)))),thi.ng.math.core.clamp.call(null,cljs.core.nth.call(null,q,(2)),pz__$1,(pz__$1 + cljs.core.nth.call(null,size__$1,(2)))));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (_,p__31464){
var map__31465 = p__31464;
var map__31465__$1 = ((((!((map__31465 == null)))?((((map__31465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31465):map__31465);
var num = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.call(null,map__31465__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var ___$1 = this;
var sx = (function (){var or__19807__auto__ = cols;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return num;
}
})();
var sy = (function (){var or__19807__auto__ = rows;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return num;
}
})();
var sz = (function (){var or__19807__auto__ = slices;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return num;
}
})();
var p = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007));
var s = thi.ng.math.core.div.call(null,size,sx,sy,sz);
var iter__20664__auto__ = ((function (sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__31467(s__31468){
return (new cljs.core.LazySeq(null,((function (sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices){
return (function (){
var s__31468__$1 = s__31468;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31468__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var z = cljs.core.first.call(null,xs__6277__auto__);
var iterys__20660__auto__ = ((function (s__31468__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__31467_$_iter__31469(s__31470){
return (new cljs.core.LazySeq(null,((function (s__31468__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices){
return (function (){
var s__31470__$1 = s__31470;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__31470__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var y = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__20660__auto__ = ((function (s__31470__$1,s__31468__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__31467_$_iter__31469_$_iter__31471(s__31472){
return (new cljs.core.LazySeq(null,((function (s__31470__$1,s__31468__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices){
return (function (){
var s__31472__$1 = s__31472;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__31472__$1);
if(temp__5720__auto____$2){
var s__31472__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31472__$2)){
var c__20662__auto__ = cljs.core.chunk_first.call(null,s__31472__$2);
var size__20663__auto__ = cljs.core.count.call(null,c__20662__auto__);
var b__31474 = cljs.core.chunk_buffer.call(null,size__20663__auto__);
if((function (){var i__31473 = (0);
while(true){
if((i__31473 < size__20663__auto__)){
var x = cljs.core._nth.call(null,c__20662__auto__,i__31473);
cljs.core.chunk_append.call(null,b__31474,(new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,thi.ng.geom.vector.vec3.call(null,x,y,z),size,p),s,null,null,null)));

var G__31562 = (i__31473 + (1));
i__31473 = G__31562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31474),thi$ng$geom$aabb$iter__31467_$_iter__31469_$_iter__31471.call(null,cljs.core.chunk_rest.call(null,s__31472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31474),null);
}
} else {
var x = cljs.core.first.call(null,s__31472__$2);
return cljs.core.cons.call(null,(new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,thi.ng.geom.vector.vec3.call(null,x,y,z),size,p),s,null,null,null)),thi$ng$geom$aabb$iter__31467_$_iter__31469_$_iter__31471.call(null,cljs.core.rest.call(null,s__31472__$2)));
}
} else {
return null;
}
break;
}
});})(s__31470__$1,s__31468__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices))
,null,null));
});})(s__31470__$1,s__31468__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices))
;
var fs__20661__auto__ = cljs.core.seq.call(null,iterys__20660__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sx))));
if(fs__20661__auto__){
return cljs.core.concat.call(null,fs__20661__auto__,thi$ng$geom$aabb$iter__31467_$_iter__31469.call(null,cljs.core.rest.call(null,s__31470__$1)));
} else {
var G__31563 = cljs.core.rest.call(null,s__31470__$1);
s__31470__$1 = G__31563;
continue;
}
} else {
return null;
}
break;
}
});})(s__31468__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices))
,null,null));
});})(s__31468__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices))
;
var fs__20661__auto__ = cljs.core.seq.call(null,iterys__20660__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sy))));
if(fs__20661__auto__){
return cljs.core.concat.call(null,fs__20661__auto__,thi$ng$geom$aabb$iter__31467.call(null,cljs.core.rest.call(null,s__31468__$1)));
} else {
var G__31564 = cljs.core.rest.call(null,s__31468__$1);
s__31468__$1 = G__31564;
continue;
}
} else {
return null;
}
break;
}
});})(sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices))
,null,null));
});})(sx,sy,sz,p,size,s,___$1,map__31465,map__31465__$1,num,cols,rows,slices))
;
return iter__20664__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sz)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
var vec__31475 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__31475,(0),null);
var y1 = cljs.core.nth.call(null,vec__31475,(1),null);
var z1 = cljs.core.nth.call(null,vec__31475,(2),null);
var p = vec__31475;
var vec__31478 = thi.ng.math.core._PLUS_.call(null,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__31478,(0),null);
var y2 = cljs.core.nth.call(null,vec__31478,(1),null);
var z2 = cljs.core.nth.call(null,vec__31478,(2),null);
return thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),thi.ng.math.core.random.call(null,y1,y2),thi.ng.math.core.random.call(null,z1,z2));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
var vec__31481 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__31481,(0),null);
var y1 = cljs.core.nth.call(null,vec__31481,(1),null);
var z1 = cljs.core.nth.call(null,vec__31481,(2),null);
var p = vec__31481;
var vec__31484 = thi.ng.math.core._PLUS_.call(null,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__31484,(0),null);
var y2 = cljs.core.nth.call(null,vec__31484,(1),null);
var z2 = cljs.core.nth.call(null,vec__31484,(2),null);
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,thi.ng.geom.cuboid.cuboid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),s),thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s),null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s);
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,thi.ng.math.core._.call(null,s_SINGLEQUOTE_,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),-0.5,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309))),s_SINGLEQUOTE_,null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (p__31487,q){
var map__31488 = p__31487;
var map__31488__$1 = ((((!((map__31488 == null)))?((((map__31488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31488):map__31488);
var p = cljs.core.get.call(null,map__31488__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__31488__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__31490 = this;
var map__31490__$1 = ((((!((map__31490 == null)))?((((map__31490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31490):map__31490);
var p__$1 = cljs.core.get.call(null,map__31490__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__31490__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec3.call(null,((cljs.core.nth.call(null,q,(0)) - cljs.core.nth.call(null,p__$1,(0))) / cljs.core.nth.call(null,size__$1,(0))),((cljs.core.nth.call(null,q,(1)) - cljs.core.nth.call(null,p__$1,(1))) / cljs.core.nth.call(null,size__$1,(1))),((cljs.core.nth.call(null,q,(2)) - cljs.core.nth.call(null,p__$1,(2))) / cljs.core.nth.call(null,size__$1,(2))));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.math.core.madd.call(null,q,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$union$arity$2 = (function (_,b){
var ___$1 = this;
var pa = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var pb = cljs.core.get.call(null,b,new cljs.core.Keyword(null,"p","p",151049309));
var p = thi.ng.math.core.min.call(null,pa,pb);
return (new thi.ng.geom.types.AABB(p,thi.ng.math.core._.call(null,thi.ng.math.core.max.call(null,thi.ng.math.core._PLUS_.call(null,pa,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),thi.ng.math.core._PLUS_.call(null,pb,cljs.core.get.call(null,b,new cljs.core.Keyword(null,"size","size",1098693007)))),p),null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$intersection$arity$2 = (function (_,b){
var ___$1 = this;
var pa = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var qa = thi.ng.math.core._PLUS_.call(null,pa,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var pb = cljs.core.get.call(null,b,new cljs.core.Keyword(null,"p","p",151049309));
var qb = thi.ng.math.core._PLUS_.call(null,pb,cljs.core.get.call(null,b,new cljs.core.Keyword(null,"size","size",1098693007)));
var p_SINGLEQUOTE_ = thi.ng.math.core.max.call(null,pa,pb);
var q_SINGLEQUOTE_ = thi.ng.math.core.min.call(null,qa,qb);
var s_SINGLEQUOTE_ = thi.ng.math.core._.call(null,q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_.call(null,((function (pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s_SINGLEQUOTE_,___$1){
return (function (p1__31441_SHARP_){
return (p1__31441_SHARP_ >= 0.0);
});})(pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s_SINGLEQUOTE_,___$1))
,s_SINGLEQUOTE_)){
return (new thi.ng.geom.types.AABB(p_SINGLEQUOTE_,s_SINGLEQUOTE_,null,null,null));
} else {
return null;
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
var ext = thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5);
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.math.core._PLUS_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),ext),thi.ng.math.core.mag.call(null,ext));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__31492){
var map__31493 = p__31492;
var map__31493__$1 = ((((!((map__31493 == null)))?((((map__31493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31493):map__31493);
var mesh = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var attribs = cljs.core.get.call(null,map__31493__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var vec__31495 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__31495,(0),null);
var b = cljs.core.nth.call(null,vec__31495,(1),null);
var c = cljs.core.nth.call(null,vec__31495,(2),null);
var d = cljs.core.nth.call(null,vec__31495,(3),null);
var e = cljs.core.nth.call(null,vec__31495,(4),null);
var f = cljs.core.nth.call(null,vec__31495,(5),null);
var g = cljs.core.nth.call(null,vec__31495,(6),null);
var h = cljs.core.nth.call(null,vec__31495,(7),null);
var vec__31498 = thi.ng.dstruct.core.demunge_flags_seq.call(null,flags,"nsewfb");
var north = cljs.core.nth.call(null,vec__31498,(0),null);
var south = cljs.core.nth.call(null,vec__31498,(1),null);
var east = cljs.core.nth.call(null,vec__31498,(2),null);
var west = cljs.core.nth.call(null,vec__31498,(3),null);
var front = cljs.core.nth.call(null,vec__31498,(4),null);
var back = cljs.core.nth.call(null,vec__31498,(5),null);
return thi.ng.geom.core.into.call(null,(function (){var or__19807__auto__ = mesh;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),cljs.core.eduction.call(null,cljs.core.filter.call(null,cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(east)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),(0),attribs,null):null),(cljs.core.truth_(west)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),(1),attribs,null):null),(cljs.core.truth_(north)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),(2),attribs,null):null),(cljs.core.truth_(south)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),(3),attribs,null):null),(cljs.core.truth_(front)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),(4),attribs,null):null),(cljs.core.truth_(back)?thi.ng.geom.attribs.generate_face_attribs.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null),(5),attribs,null):null)], null)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.AABB)){
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.call(null,___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.call(null,___$1,s);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"AABB",s);

}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var vec__31501 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__31501,(0),null);
var y1 = cljs.core.nth.call(null,vec__31501,(1),null);
var z1 = cljs.core.nth.call(null,vec__31501,(2),null);
var a = vec__31501;
var vec__31504 = thi.ng.math.core._PLUS_.call(null,a,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__31504,(0),null);
var y2 = cljs.core.nth.call(null,vec__31504,(1),null);
var z2 = cljs.core.nth.call(null,vec__31504,(2),null);
var g = vec__31504;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.vector.vec3.call(null,x1,y1,z2),thi.ng.geom.vector.vec3.call(null,x2,y1,z2),thi.ng.geom.vector.vec3.call(null,x2,y1,z1),thi.ng.geom.vector.vec3.call(null,x1,y2,z1),thi.ng.geom.vector.vec3.call(null,x1,y2,z2),g,thi.ng.geom.vector.vec3.call(null,x2,y2,z1)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__31507 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__31507,(0),null);
var b = cljs.core.nth.call(null,vec__31507,(1),null);
var c = cljs.core.nth.call(null,vec__31507,(2),null);
var d = cljs.core.nth.call(null,vec__31507,(3),null);
var e = cljs.core.nth.call(null,vec__31507,(4),null);
var f = cljs.core.nth.call(null,vec__31507,(5),null);
var g = cljs.core.nth.call(null,vec__31507,(6),null);
var h = cljs.core.nth.call(null,vec__31507,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._PLUS_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p__31510){
var vec__31511 = p__31510;
var x = cljs.core.nth.call(null,vec__31511,(0),null);
var y = cljs.core.nth.call(null,vec__31511,(1),null);
var z = cljs.core.nth.call(null,vec__31511,(2),null);
var ___$1 = this;
var vec__31514 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__31514,(0),null);
var y1 = cljs.core.nth.call(null,vec__31514,(1),null);
var z1 = cljs.core.nth.call(null,vec__31514,(2),null);
var p = vec__31514;
var vec__31517 = thi.ng.math.core._PLUS_.call(null,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__31517,(0),null);
var y2 = cljs.core.nth.call(null,vec__31517,(1),null);
var z2 = cljs.core.nth.call(null,vec__31517,(2),null);
var on_plane_QMARK_ = ((function (vec__31514,x1,y1,z1,p,vec__31517,x2,y2,z2,___$1,vec__31511,x,y,z){
return (function (p__31520){
var vec__31521 = p__31520;
var minp = cljs.core.nth.call(null,vec__31521,(0),null);
var maxp = cljs.core.nth.call(null,vec__31521,(1),null);
var p__$1 = cljs.core.nth.call(null,vec__31521,(2),null);
var min1 = cljs.core.nth.call(null,vec__31521,(3),null);
var max1 = cljs.core.nth.call(null,vec__31521,(4),null);
var min2 = cljs.core.nth.call(null,vec__31521,(5),null);
var max2 = cljs.core.nth.call(null,vec__31521,(6),null);
var c1 = cljs.core.nth.call(null,vec__31521,(7),null);
var c2 = cljs.core.nth.call(null,vec__31521,(8),null);
var and__19795__auto__ = (function (){var or__19807__auto__ = thi.ng.math.core.delta_EQ_.call(null,minp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,maxp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
}
})();
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,min1,max1,c1);
if(cljs.core.truth_(and__19795__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,min2,max2,c2);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
});})(vec__31514,x1,y1,z1,p,vec__31517,x2,y2,z2,___$1,vec__31511,x,y,z))
;
if(cljs.core.truth_(cljs.core.some.call(null,on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__19795__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,x1,x2,x);
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,y1,y2,y);
if(cljs.core.truth_(and__19795__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,z1,z2,z);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return (1);
} else {
return (-1);
}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__31524){
var map__31525 = p__31524;
var map__31525__$1 = ((((!((map__31525 == null)))?((((map__31525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31525):map__31525);
var size = cljs.core.get.call(null,map__31525__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__31527 = this;
var map__31527__$1 = ((((!((map__31527 == null)))?((((map__31527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31527):map__31527);
var size__$1 = cljs.core.get.call(null,map__31527__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core._STAR_.call(null,size__$1,-0.5),size__$1,null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__31529,q){
var map__31530 = p__31529;
var map__31530__$1 = ((((!((map__31530 == null)))?((((map__31530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31530):map__31530);
var size = cljs.core.get.call(null,map__31530__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__31532 = this;
var map__31532__$1 = ((((!((map__31532 == null)))?((((map__31532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31532):map__31532);
var size__$1 = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,size__$1,-0.5,q),size__$1,null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.madd.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__31534,q){
var map__31535 = p__31534;
var map__31535__$1 = ((((!((map__31535 == null)))?((((map__31535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31535):map__31535);
var vec__31536 = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__31536,(0),null);
var py = cljs.core.nth.call(null,vec__31536,(1),null);
var pz = cljs.core.nth.call(null,vec__31536,(2),null);
var s = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__31540 = this;
var map__31540__$1 = ((((!((map__31540 == null)))?((((map__31540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31540):map__31540);
var vec__31541 = cljs.core.get.call(null,map__31540__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.call(null,vec__31541,(0),null);
var py__$1 = cljs.core.nth.call(null,vec__31541,(1),null);
var pz__$1 = cljs.core.nth.call(null,vec__31541,(2),null);
var s__$1 = cljs.core.get.call(null,map__31540__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var and__19795__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,px__$1,(px__$1 + cljs.core.nth.call(null,s__$1,(0))),cljs.core.nth.call(null,q,(0)));
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,py__$1,(py__$1 + cljs.core.nth.call(null,s__$1,(1))),cljs.core.nth.call(null,q,(1)));
if(cljs.core.truth_(and__19795__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,pz__$1,(pz__$1 + cljs.core.nth.call(null,s__$1,(2))),cljs.core.nth.call(null,q,(2)));
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_x.call(null,thi.ng.geom.cuboid.cuboid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_y.call(null,thi.ng.geom.cuboid.cuboid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,thi.ng.geom.cuboid.cuboid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_around_axis.call(null,thi.ng.geom.cuboid.cuboid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))),axis,theta);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__31545 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__31545,(0),null);
var b = cljs.core.nth.call(null,vec__31545,(1),null);
var c = cljs.core.nth.call(null,vec__31545,(2),null);
var d = cljs.core.nth.call(null,vec__31545,(3),null);
var e = cljs.core.nth.call(null,vec__31545,(4),null);
var f = cljs.core.nth.call(null,vec__31545,(5),null);
var g = cljs.core.nth.call(null,vec__31545,(6),null);
var h = cljs.core.nth.call(null,vec__31545,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__31548){
var map__31549 = p__31548;
var map__31549__$1 = ((((!((map__31549 == null)))?((((map__31549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31549):map__31549);
var vec__31550 = cljs.core.get.call(null,map__31549__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__31550,(0),null);
var h = cljs.core.nth.call(null,vec__31550,(1),null);
var d = cljs.core.nth.call(null,vec__31550,(2),null);
var map__31554 = this;
var map__31554__$1 = ((((!((map__31554 == null)))?((((map__31554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31554):map__31554);
var vec__31555 = cljs.core.get.call(null,map__31554__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__31555,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__31555,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__31555,(2),null);
return ((w__$1 * h__$1) * d__$1);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__31559){
var map__31560 = p__31559;
var map__31560__$1 = ((((!((map__31560 == null)))?((((map__31560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31560):map__31560);
var opts = map__31560__$1;
var f = cljs.core.get.call(null,map__31560__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.mapcat.call(null,thi.ng.geom.core.faces),cljs.core.mapcat.call(null,f)),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(0));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(1));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(2));
});

//# sourceMappingURL=aabb.js.map