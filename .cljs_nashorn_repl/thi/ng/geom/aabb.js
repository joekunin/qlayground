// Compiled by ClojureScript 1.9.293 {}
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
var args25615 = [];
var len__21238__auto___25618 = arguments.length;
var i__21239__auto___25619 = (0);
while(true){
if((i__21239__auto___25619 < len__21238__auto___25618)){
args25615.push((arguments[i__21239__auto___25619]));

var G__25620 = (i__21239__auto___25619 + (1));
i__21239__auto___25619 = G__25620;
continue;
} else {
}
break;
}

var G__25617 = args25615.length;
switch (G__25617) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25615.length)].join('')));

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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (p__25623){
var map__25624 = p__25623;
var map__25624__$1 = ((((!((map__25624 == null)))?((((map__25624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25624):map__25624);
var vec__25625 = cljs.core.get.call(null,map__25624__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__25625,(0),null);
var h = cljs.core.nth.call(null,vec__25625,(1),null);
var d = cljs.core.nth.call(null,vec__25625,(2),null);
var map__25629 = this;
var map__25629__$1 = ((((!((map__25629 == null)))?((((map__25629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25629):map__25629);
var vec__25630 = cljs.core.get.call(null,map__25629__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__25630,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__25630,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__25630,(2),null);
return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__25634,q){
var map__25635 = p__25634;
var map__25635__$1 = ((((!((map__25635 == null)))?((((map__25635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25635):map__25635);
var vec__25636 = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__25636,(0),null);
var py = cljs.core.nth.call(null,vec__25636,(1),null);
var pz = cljs.core.nth.call(null,vec__25636,(2),null);
var size = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__25640 = this;
var map__25640__$1 = ((((!((map__25640 == null)))?((((map__25640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25640):map__25640);
var vec__25641 = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.call(null,vec__25641,(0),null);
var py__$1 = cljs.core.nth.call(null,vec__25641,(1),null);
var pz__$1 = cljs.core.nth.call(null,vec__25641,(2),null);
var size__$1 = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.clamp.call(null,cljs.core.nth.call(null,q,(0)),px__$1,(px__$1 + cljs.core.nth.call(null,size__$1,(0)))),thi.ng.math.core.clamp.call(null,cljs.core.nth.call(null,q,(1)),py__$1,(py__$1 + cljs.core.nth.call(null,size__$1,(1)))),thi.ng.math.core.clamp.call(null,cljs.core.nth.call(null,q,(2)),pz__$1,(pz__$1 + cljs.core.nth.call(null,size__$1,(2)))));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (_,p__25645){
var map__25646 = p__25645;
var map__25646__$1 = ((((!((map__25646 == null)))?((((map__25646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25646):map__25646);
var num = cljs.core.get.call(null,map__25646__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.call(null,map__25646__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.call(null,map__25646__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.call(null,map__25646__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var ___$1 = this;
var sx = (function (){var or__20022__auto__ = cols;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})();
var sy = (function (){var or__20022__auto__ = rows;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})();
var sz = (function (){var or__20022__auto__ = slices;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})();
var p = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007));
var s = thi.ng.math.core.div.call(null,size,sx,sy,sz);
var iter__20879__auto__ = ((function (sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__25648(s__25649){
return (new cljs.core.LazySeq(null,((function (sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices){
return (function (){
var s__25649__$1 = s__25649;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25649__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var z = cljs.core.first.call(null,xs__6277__auto__);
var iterys__20875__auto__ = ((function (s__25649__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__25648_$_iter__25650(s__25651){
return (new cljs.core.LazySeq(null,((function (s__25649__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices){
return (function (){
var s__25651__$1 = s__25651;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__25651__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var y = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__20875__auto__ = ((function (s__25651__$1,s__25649__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__25648_$_iter__25650_$_iter__25652(s__25653){
return (new cljs.core.LazySeq(null,((function (s__25651__$1,s__25649__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices){
return (function (){
var s__25653__$1 = s__25653;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__25653__$1);
if(temp__5720__auto____$2){
var s__25653__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25653__$2)){
var c__20877__auto__ = cljs.core.chunk_first.call(null,s__25653__$2);
var size__20878__auto__ = cljs.core.count.call(null,c__20877__auto__);
var b__25655 = cljs.core.chunk_buffer.call(null,size__20878__auto__);
if((function (){var i__25654 = (0);
while(true){
if((i__25654 < size__20878__auto__)){
var x = cljs.core._nth.call(null,c__20877__auto__,i__25654);
cljs.core.chunk_append.call(null,b__25655,(new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,thi.ng.geom.vector.vec3.call(null,x,y,z),size,p),s,null,null,null)));

var G__25743 = (i__25654 + (1));
i__25654 = G__25743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25655),thi$ng$geom$aabb$iter__25648_$_iter__25650_$_iter__25652.call(null,cljs.core.chunk_rest.call(null,s__25653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25655),null);
}
} else {
var x = cljs.core.first.call(null,s__25653__$2);
return cljs.core.cons.call(null,(new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,thi.ng.geom.vector.vec3.call(null,x,y,z),size,p),s,null,null,null)),thi$ng$geom$aabb$iter__25648_$_iter__25650_$_iter__25652.call(null,cljs.core.rest.call(null,s__25653__$2)));
}
} else {
return null;
}
break;
}
});})(s__25651__$1,s__25649__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices))
,null,null));
});})(s__25651__$1,s__25649__$1,y,xs__6277__auto____$1,temp__5720__auto____$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices))
;
var fs__20876__auto__ = cljs.core.seq.call(null,iterys__20875__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sx))));
if(fs__20876__auto__){
return cljs.core.concat.call(null,fs__20876__auto__,thi$ng$geom$aabb$iter__25648_$_iter__25650.call(null,cljs.core.rest.call(null,s__25651__$1)));
} else {
var G__25744 = cljs.core.rest.call(null,s__25651__$1);
s__25651__$1 = G__25744;
continue;
}
} else {
return null;
}
break;
}
});})(s__25649__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices))
,null,null));
});})(s__25649__$1,z,xs__6277__auto__,temp__5720__auto__,sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices))
;
var fs__20876__auto__ = cljs.core.seq.call(null,iterys__20875__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sy))));
if(fs__20876__auto__){
return cljs.core.concat.call(null,fs__20876__auto__,thi$ng$geom$aabb$iter__25648.call(null,cljs.core.rest.call(null,s__25649__$1)));
} else {
var G__25745 = cljs.core.rest.call(null,s__25649__$1);
s__25649__$1 = G__25745;
continue;
}
} else {
return null;
}
break;
}
});})(sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices))
,null,null));
});})(sx,sy,sz,p,size,s,___$1,map__25646,map__25646__$1,num,cols,rows,slices))
;
return iter__20879__auto__.call(null,cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,sz)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
var vec__25656 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__25656,(0),null);
var y1 = cljs.core.nth.call(null,vec__25656,(1),null);
var z1 = cljs.core.nth.call(null,vec__25656,(2),null);
var p = vec__25656;
var vec__25659 = thi.ng.math.core._PLUS_.call(null,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__25659,(0),null);
var y2 = cljs.core.nth.call(null,vec__25659,(1),null);
var z2 = cljs.core.nth.call(null,vec__25659,(2),null);
return thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.random.call(null,x1,x2),thi.ng.math.core.random.call(null,y1,y2),thi.ng.math.core.random.call(null,z1,z2));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
var vec__25662 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__25662,(0),null);
var y1 = cljs.core.nth.call(null,vec__25662,(1),null);
var z1 = cljs.core.nth.call(null,vec__25662,(2),null);
var p = vec__25662;
var vec__25665 = thi.ng.math.core._PLUS_.call(null,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__25665,(0),null);
var y2 = cljs.core.nth.call(null,vec__25665,(1),null);
var z2 = cljs.core.nth.call(null,vec__25665,(2),null);
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (p__25668,q){
var map__25669 = p__25668;
var map__25669__$1 = ((((!((map__25669 == null)))?((((map__25669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25669):map__25669);
var p = cljs.core.get.call(null,map__25669__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__25669__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__25671 = this;
var map__25671__$1 = ((((!((map__25671 == null)))?((((map__25671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25671):map__25671);
var p__$1 = cljs.core.get.call(null,map__25671__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__25671__$1,new cljs.core.Keyword(null,"size","size",1098693007));
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
return (function (p1__25622_SHARP_){
return (p1__25622_SHARP_ >= 0.0);
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

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__25673){
var map__25674 = p__25673;
var map__25674__$1 = ((((!((map__25674 == null)))?((((map__25674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25674):map__25674);
var mesh = cljs.core.get.call(null,map__25674__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.call(null,map__25674__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var attribs = cljs.core.get.call(null,map__25674__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var vec__25676 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__25676,(0),null);
var b = cljs.core.nth.call(null,vec__25676,(1),null);
var c = cljs.core.nth.call(null,vec__25676,(2),null);
var d = cljs.core.nth.call(null,vec__25676,(3),null);
var e = cljs.core.nth.call(null,vec__25676,(4),null);
var f = cljs.core.nth.call(null,vec__25676,(5),null);
var g = cljs.core.nth.call(null,vec__25676,(6),null);
var h = cljs.core.nth.call(null,vec__25676,(7),null);
var vec__25679 = thi.ng.dstruct.core.demunge_flags_seq.call(null,flags,"nsewfb");
var north = cljs.core.nth.call(null,vec__25679,(0),null);
var south = cljs.core.nth.call(null,vec__25679,(1),null);
var east = cljs.core.nth.call(null,vec__25679,(2),null);
var west = cljs.core.nth.call(null,vec__25679,(3),null);
var front = cljs.core.nth.call(null,vec__25679,(4),null);
var back = cljs.core.nth.call(null,vec__25679,(5),null);
return thi.ng.geom.core.into.call(null,(function (){var or__20022__auto__ = mesh;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
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
var vec__25682 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__25682,(0),null);
var y1 = cljs.core.nth.call(null,vec__25682,(1),null);
var z1 = cljs.core.nth.call(null,vec__25682,(2),null);
var a = vec__25682;
var vec__25685 = thi.ng.math.core._PLUS_.call(null,a,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__25685,(0),null);
var y2 = cljs.core.nth.call(null,vec__25685,(1),null);
var z2 = cljs.core.nth.call(null,vec__25685,(2),null);
var g = vec__25685;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.vector.vec3.call(null,x1,y1,z2),thi.ng.geom.vector.vec3.call(null,x2,y1,z2),thi.ng.geom.vector.vec3.call(null,x2,y1,z1),thi.ng.geom.vector.vec3.call(null,x1,y2,z1),thi.ng.geom.vector.vec3.call(null,x1,y2,z2),g,thi.ng.geom.vector.vec3.call(null,x2,y2,z1)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__25688 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__25688,(0),null);
var b = cljs.core.nth.call(null,vec__25688,(1),null);
var c = cljs.core.nth.call(null,vec__25688,(2),null);
var d = cljs.core.nth.call(null,vec__25688,(3),null);
var e = cljs.core.nth.call(null,vec__25688,(4),null);
var f = cljs.core.nth.call(null,vec__25688,(5),null);
var g = cljs.core.nth.call(null,vec__25688,(6),null);
var h = cljs.core.nth.call(null,vec__25688,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._PLUS_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p__25691){
var vec__25692 = p__25691;
var x = cljs.core.nth.call(null,vec__25692,(0),null);
var y = cljs.core.nth.call(null,vec__25692,(1),null);
var z = cljs.core.nth.call(null,vec__25692,(2),null);
var ___$1 = this;
var vec__25695 = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.call(null,vec__25695,(0),null);
var y1 = cljs.core.nth.call(null,vec__25695,(1),null);
var z1 = cljs.core.nth.call(null,vec__25695,(2),null);
var p = vec__25695;
var vec__25698 = thi.ng.math.core._PLUS_.call(null,p,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.call(null,vec__25698,(0),null);
var y2 = cljs.core.nth.call(null,vec__25698,(1),null);
var z2 = cljs.core.nth.call(null,vec__25698,(2),null);
var on_plane_QMARK_ = ((function (vec__25695,x1,y1,z1,p,vec__25698,x2,y2,z2,___$1,vec__25692,x,y,z){
return (function (p__25701){
var vec__25702 = p__25701;
var minp = cljs.core.nth.call(null,vec__25702,(0),null);
var maxp = cljs.core.nth.call(null,vec__25702,(1),null);
var p__$1 = cljs.core.nth.call(null,vec__25702,(2),null);
var min1 = cljs.core.nth.call(null,vec__25702,(3),null);
var max1 = cljs.core.nth.call(null,vec__25702,(4),null);
var min2 = cljs.core.nth.call(null,vec__25702,(5),null);
var max2 = cljs.core.nth.call(null,vec__25702,(6),null);
var c1 = cljs.core.nth.call(null,vec__25702,(7),null);
var c2 = cljs.core.nth.call(null,vec__25702,(8),null);
var and__20010__auto__ = (function (){var or__20022__auto__ = thi.ng.math.core.delta_EQ_.call(null,minp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,maxp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
}
})();
if(cljs.core.truth_(and__20010__auto__)){
var and__20010__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,min1,max1,c1);
if(cljs.core.truth_(and__20010__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,min2,max2,c2);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
});})(vec__25695,x1,y1,z1,p,vec__25698,x2,y2,z2,___$1,vec__25692,x,y,z))
;
if(cljs.core.truth_(cljs.core.some.call(null,on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__20010__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,x1,x2,x);
if(cljs.core.truth_(and__20010__auto__)){
var and__20010__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,y1,y2,y);
if(cljs.core.truth_(and__20010__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,z1,z2,z);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
})())){
return (1);
} else {
return (-1);
}
}
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__25705){
var map__25706 = p__25705;
var map__25706__$1 = ((((!((map__25706 == null)))?((((map__25706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25706):map__25706);
var size = cljs.core.get.call(null,map__25706__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__25708 = this;
var map__25708__$1 = ((((!((map__25708 == null)))?((((map__25708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25708):map__25708);
var size__$1 = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core._STAR_.call(null,size__$1,-0.5),size__$1,null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__25710,q){
var map__25711 = p__25710;
var map__25711__$1 = ((((!((map__25711 == null)))?((((map__25711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25711):map__25711);
var size = cljs.core.get.call(null,map__25711__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__25713 = this;
var map__25713__$1 = ((((!((map__25713 == null)))?((((map__25713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25713):map__25713);
var size__$1 = cljs.core.get.call(null,map__25713__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,size__$1,-0.5,q),size__$1,null,null,null));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.madd.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)));
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__25715,q){
var map__25716 = p__25715;
var map__25716__$1 = ((((!((map__25716 == null)))?((((map__25716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25716):map__25716);
var vec__25717 = cljs.core.get.call(null,map__25716__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__25717,(0),null);
var py = cljs.core.nth.call(null,vec__25717,(1),null);
var pz = cljs.core.nth.call(null,vec__25717,(2),null);
var s = cljs.core.get.call(null,map__25716__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__25721 = this;
var map__25721__$1 = ((((!((map__25721 == null)))?((((map__25721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25721):map__25721);
var vec__25722 = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.call(null,vec__25722,(0),null);
var py__$1 = cljs.core.nth.call(null,vec__25722,(1),null);
var pz__$1 = cljs.core.nth.call(null,vec__25722,(2),null);
var s__$1 = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var and__20010__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,px__$1,(px__$1 + cljs.core.nth.call(null,s__$1,(0))),cljs.core.nth.call(null,q,(0)));
if(cljs.core.truth_(and__20010__auto__)){
var and__20010__auto____$1 = thi.ng.math.core.in_range_QMARK_.call(null,py__$1,(py__$1 + cljs.core.nth.call(null,s__$1,(1))),cljs.core.nth.call(null,q,(1)));
if(cljs.core.truth_(and__20010__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.call(null,pz__$1,(pz__$1 + cljs.core.nth.call(null,s__$1,(2))),cljs.core.nth.call(null,q,(2)));
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
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
var vec__25726 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__25726,(0),null);
var b = cljs.core.nth.call(null,vec__25726,(1),null);
var c = cljs.core.nth.call(null,vec__25726,(2),null);
var d = cljs.core.nth.call(null,vec__25726,(3),null);
var e = cljs.core.nth.call(null,vec__25726,(4),null);
var f = cljs.core.nth.call(null,vec__25726,(5),null);
var g = cljs.core.nth.call(null,vec__25726,(6),null);
var h = cljs.core.nth.call(null,vec__25726,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__25729){
var map__25730 = p__25729;
var map__25730__$1 = ((((!((map__25730 == null)))?((((map__25730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25730):map__25730);
var vec__25731 = cljs.core.get.call(null,map__25730__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__25731,(0),null);
var h = cljs.core.nth.call(null,vec__25731,(1),null);
var d = cljs.core.nth.call(null,vec__25731,(2),null);
var map__25735 = this;
var map__25735__$1 = ((((!((map__25735 == null)))?((((map__25735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25735):map__25735);
var vec__25736 = cljs.core.get.call(null,map__25735__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__25736,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__25736,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__25736,(2),null);
return ((w__$1 * h__$1) * d__$1);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__25740){
var map__25741 = p__25740;
var map__25741__$1 = ((((!((map__25741 == null)))?((((map__25741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25741):map__25741);
var opts = map__25741__$1;
var f = cljs.core.get.call(null,map__25741__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
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