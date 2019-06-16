// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.rect');
goog.require('cljs.core');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.rect.rect = (function thi$ng$geom$rect$rect(var_args){
var args27326 = [];
var len__21238__auto___27332 = arguments.length;
var i__21239__auto___27333 = (0);
while(true){
if((i__21239__auto___27333 < len__21238__auto___27332)){
args27326.push((arguments[i__21239__auto___27333]));

var G__27334 = (i__21239__auto___27333 + (1));
i__21239__auto___27333 = G__27334;
continue;
} else {
}
break;
}

var G__27328 = args27326.length;
switch (G__27328) {
case 0:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27326.length)].join('')));

}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null),thi.ng.geom.vector.vec2.call(null,1.0),null,null,null));
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1 = (function (w){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null),thi.ng.geom.vector.vec2.call(null,w),null,null,null));
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
if(cljs.core.coll_QMARK_.call(null,p)){
if(cljs.core.coll_QMARK_.call(null,q)){
var p__$1 = thi.ng.geom.vector.vec2.call(null,p);
var q__$1 = thi.ng.geom.vector.vec2.call(null,q);
var vec__27329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.min.call(null,p__$1,q__$1),thi.ng.math.core.max.call(null,p__$1,q__$1)], null);
var p__$2 = cljs.core.nth.call(null,vec__27329,(0),null);
var q__$2 = cljs.core.nth.call(null,vec__27329,(1),null);
return (new thi.ng.geom.types.Rect2(p__$2,thi.ng.math.core._.call(null,q__$2,p__$2),null,null,null));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null,p),thi.ng.geom.vector.vec2.call(null,q),null,null,null));
}
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null),thi.ng.geom.vector.vec2.call(null,p,q),null,null,null));
}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3 = (function (x,y,w){
if(typeof x === 'number'){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null,x,y),thi.ng.geom.vector.vec2.call(null,w),null,null,null));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null,x),thi.ng.geom.vector.vec2.call(null,y,w),null,null,null));
}
});

thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null,x,y),thi.ng.geom.vector.vec2.call(null,w,h),null,null,null));
});

thi.ng.geom.rect.rect.cljs$lang$maxFixedArity = 4;

thi.ng.geom.rect.union = (function thi$ng$geom$rect$union(p__27336,p__27337){
var map__27351 = p__27336;
var map__27351__$1 = ((((!((map__27351 == null)))?((((map__27351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27351):map__27351);
var p = cljs.core.get.call(null,map__27351__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__27352 = cljs.core.get.call(null,map__27351__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__27352,(0),null);
var h = cljs.core.nth.call(null,vec__27352,(1),null);
var map__27355 = p__27337;
var map__27355__$1 = ((((!((map__27355 == null)))?((((map__27355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27355):map__27355);
var q = cljs.core.get.call(null,map__27355__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__27356 = cljs.core.get.call(null,map__27355__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.call(null,vec__27356,(0),null);
var qh = cljs.core.nth.call(null,vec__27356,(1),null);
var vec__27361 = thi.ng.math.core.min.call(null,p,q);
var x1 = cljs.core.nth.call(null,vec__27361,(0),null);
var y1 = cljs.core.nth.call(null,vec__27361,(1),null);
var p_SINGLEQUOTE_ = vec__27361;
var x2 = (function (){var x__20355__auto__ = (p.call(null,(0)) + w);
var y__20356__auto__ = (q.call(null,(0)) + qw);
return ((x__20355__auto__ > y__20356__auto__) ? x__20355__auto__ : y__20356__auto__);
})();
var y2 = (function (){var x__20355__auto__ = (p.call(null,(1)) + h);
var y__20356__auto__ = (q.call(null,(1)) + qh);
return ((x__20355__auto__ > y__20356__auto__) ? x__20355__auto__ : y__20356__auto__);
})();
var w__$1 = (x2 - x1);
var h__$1 = (y2 - y1);
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,thi.ng.geom.vector.vec2.call(null,w__$1,h__$1),null,null,null));
});
thi.ng.geom.rect.left = (function thi$ng$geom$rect$left(r){
return thi.ng.geom.vector.x.call(null,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"p","p",151049309)));
});
thi.ng.geom.rect.right = (function thi$ng$geom$rect$right(r){
return (thi.ng.geom.vector.x.call(null,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"p","p",151049309))) + thi.ng.geom.vector.x.call(null,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"size","size",1098693007))));
});
thi.ng.geom.rect.bottom = (function thi$ng$geom$rect$bottom(r){
return thi.ng.geom.vector.y.call(null,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"p","p",151049309)));
});
thi.ng.geom.rect.bottom_left = (function thi$ng$geom$rect$bottom_left(r){
return cljs.core.get.call(null,r,new cljs.core.Keyword(null,"p","p",151049309));
});
thi.ng.geom.rect.top = (function thi$ng$geom$rect$top(r){
return (thi.ng.geom.vector.y.call(null,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"p","p",151049309))) + thi.ng.geom.vector.y.call(null,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"size","size",1098693007))));
});
thi.ng.geom.rect.top_right = (function thi$ng$geom$rect$top_right(r){
return thi.ng.math.core._PLUS_.call(null,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,r,new cljs.core.Keyword(null,"size","size",1098693007)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),m);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first.call(null,thi.ng.geom.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (_,p__27368){
var map__27369 = p__27368;
var map__27369__$1 = ((((!((map__27369 == null)))?((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var num = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"num","num",1985240673),(2));
var cols = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ___$1 = this;
var dx = (1.0 / (function (){var or__20022__auto__ = cols;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})());
var dy = (1.0 / (function (){var or__20022__auto__ = rows;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return num;
}
})());
var rx = cljs.core.range.call(null,0.0,1.0,dx);
var ry = cljs.core.range.call(null,0.0,1.0,dy);
var s = thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),dx,dy);
var iter__20879__auto__ = ((function (dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__27371(s__27372){
return (new cljs.core.LazySeq(null,((function (dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows){
return (function (){
var s__27372__$1 = s__27372;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27372__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var y = cljs.core.first.call(null,xs__6277__auto__);
var iterys__20875__auto__ = ((function (s__27372__$1,y,xs__6277__auto__,temp__5720__auto__,dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__27371_$_iter__27373(s__27374){
return (new cljs.core.LazySeq(null,((function (s__27372__$1,y,xs__6277__auto__,temp__5720__auto__,dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows){
return (function (){
var s__27374__$1 = s__27374;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__27374__$1);
if(temp__5720__auto____$1){
var s__27374__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27374__$2)){
var c__20877__auto__ = cljs.core.chunk_first.call(null,s__27374__$2);
var size__20878__auto__ = cljs.core.count.call(null,c__20877__auto__);
var b__27376 = cljs.core.chunk_buffer.call(null,size__20878__auto__);
if((function (){var i__27375 = (0);
while(true){
if((i__27375 < size__20878__auto__)){
var x = cljs.core._nth.call(null,c__20877__auto__,i__27375);
var vec__27395 = thi.ng.geom.core.unmap_point.call(null,___$1,thi.ng.geom.vector.vec2.call(null,x,y));
var px = cljs.core.nth.call(null,vec__27395,(0),null);
var py = cljs.core.nth.call(null,vec__27395,(1),null);
var px__$1 = thi.ng.math.core.roundto.call(null,px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto.call(null,py,thi.ng.math.core._STAR_eps_STAR_);
cljs.core.chunk_append.call(null,b__27376,(new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null,px__$1,py__$1),s,null,null,null)));

var G__27463 = (i__27375 + (1));
i__27375 = G__27463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27376),thi$ng$geom$rect$iter__27371_$_iter__27373.call(null,cljs.core.chunk_rest.call(null,s__27374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27376),null);
}
} else {
var x = cljs.core.first.call(null,s__27374__$2);
var vec__27398 = thi.ng.geom.core.unmap_point.call(null,___$1,thi.ng.geom.vector.vec2.call(null,x,y));
var px = cljs.core.nth.call(null,vec__27398,(0),null);
var py = cljs.core.nth.call(null,vec__27398,(1),null);
var px__$1 = thi.ng.math.core.roundto.call(null,px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto.call(null,py,thi.ng.math.core._STAR_eps_STAR_);
return cljs.core.cons.call(null,(new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.call(null,px__$1,py__$1),s,null,null,null)),thi$ng$geom$rect$iter__27371_$_iter__27373.call(null,cljs.core.rest.call(null,s__27374__$2)));
}
} else {
return null;
}
break;
}
});})(s__27372__$1,y,xs__6277__auto__,temp__5720__auto__,dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows))
,null,null));
});})(s__27372__$1,y,xs__6277__auto__,temp__5720__auto__,dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows))
;
var fs__20876__auto__ = cljs.core.seq.call(null,iterys__20875__auto__.call(null,rx));
if(fs__20876__auto__){
return cljs.core.concat.call(null,fs__20876__auto__,thi$ng$geom$rect$iter__27371.call(null,cljs.core.rest.call(null,s__27372__$1)));
} else {
var G__27464 = cljs.core.rest.call(null,s__27372__$1);
s__27372__$1 = G__27464;
continue;
}
} else {
return null;
}
break;
}
});})(dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows))
,null,null));
});})(dx,dy,rx,ry,s,___$1,map__27369,map__27369__$1,num,cols,rows))
;
return iter__20879__auto__.call(null,ry);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.point_at.call(null,t,cljs.core.conj.call(null,thi.ng.geom.core.vertices.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309))));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.call(null,___$1,thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core._PLUS_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),thi.ng.math.core.random.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)).call(null,(0))),thi.ng.math.core.random.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)).call(null,(1))));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,thi.ng.geom.core.vertices.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309))));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.rotate.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),m);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,p__27401){
var map__27402 = p__27401;
var map__27402__$1 = ((((!((map__27402 == null)))?((((map__27402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27402):map__27402);
var opts = map__27402__$1;
var depth = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.call(null,map__27402__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var ___$1 = this;
if(((scale === 1.0)) && ((offset == null))){
return thi.ng.geom.core.as_mesh.call(null,(new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309))),thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),depth),null,null,null)),opts);
} else {
return thi.ng.geom.core.extrude.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),s),thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s),null,null,null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s);
return (new thi.ng.geom.types.Rect2(thi.ng.math.core.madd.call(null,s_SINGLEQUOTE_,-0.5,thi.ng.geom.core.centroid.call(null,___$1)),s_SINGLEQUOTE_,null,null,null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (p__27404,q){
var map__27405 = p__27404;
var map__27405__$1 = ((((!((map__27405 == null)))?((((map__27405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
var p = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27407 = this;
var map__27407__$1 = ((((!((map__27407 == null)))?((((map__27407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27407):map__27407);
var p__$1 = cljs.core.get.call(null,map__27407__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.call(null,map__27407__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec2.call(null,((thi.ng.geom.vector.x.call(null,q) - thi.ng.geom.vector.x.call(null,p__$1)) / thi.ng.geom.vector.x.call(null,size__$1)),((thi.ng.geom.vector.y.call(null,q) - thi.ng.geom.vector.y.call(null,p__$1)) / thi.ng.geom.vector.y.call(null,size__$1)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.math.core.madd.call(null,q,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$union$arity$2 = (function (p__27409,p__27410){
var map__27411 = p__27409;
var map__27411__$1 = ((((!((map__27411 == null)))?((((map__27411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27411):map__27411);
var pa = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__27411__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27412 = p__27410;
var map__27412__$1 = ((((!((map__27412 == null)))?((((map__27412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27412):map__27412);
var pb = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__27412__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27415 = this;
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var pa__$1 = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa__$1 = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var p = thi.ng.math.core.min.call(null,pa__$1,pb);
return (new thi.ng.geom.types.Rect2(p,thi.ng.math.core._.call(null,thi.ng.math.core.max.call(null,thi.ng.math.core._PLUS_.call(null,pa__$1,sa__$1),thi.ng.math.core._PLUS_.call(null,pb,sb)),p),null,null,null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$intersection$arity$2 = (function (_,r){
var ___$1 = this;
var pa = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var qa = thi.ng.math.core._PLUS_.call(null,pa,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var pb = cljs.core.get.call(null,r,new cljs.core.Keyword(null,"p","p",151049309));
var qb = thi.ng.math.core._PLUS_.call(null,pb,cljs.core.get.call(null,r,new cljs.core.Keyword(null,"size","size",1098693007)));
var p_SINGLEQUOTE_ = thi.ng.math.core.max.call(null,pa,pb);
var q_SINGLEQUOTE_ = thi.ng.math.core.min.call(null,qa,qb);
var s = thi.ng.math.core._.call(null,q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_.call(null,((function (pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s,___$1){
return (function (p1__27365_SHARP_){
return (p1__27365_SHARP_ >= (0));
});})(pa,qa,pb,qb,p_SINGLEQUOTE_,q_SINGLEQUOTE_,s,___$1))
,s)){
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,s,null,null,null));
} else {
return null;
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face.call(null,(function (){var or__20022__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.attribs.generate_face_attribs.call(null,cljs.core.mapv.call(null,thi.ng.geom.vector.vec3,thi.ng.geom.core.vertices.call(null,___$1)),(0),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uv","uv",-1197749379),thi.ng.geom.attribs.uv_default_rect], null),opts)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,p__27417){
var map__27418 = p__27417;
var map__27418__$1 = ((((!((map__27418 == null)))?((((map__27418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27418):map__27418);
var vec__27419 = cljs.core.get.call(null,map__27418__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.call(null,vec__27419,(0),null);
var q = cljs.core.nth.call(null,vec__27419,(1),null);
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

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__27423 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.call(null,vec__27423,(0),null);
var dir = cljs.core.nth.call(null,vec__27423,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_.call(null,p,dir,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Line2)){
return thi.ng.geom.core.intersect_line.call(null,___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Rect2)){
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.call(null,___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Circle2)){
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.call(null,___$1,s);
} else {
return thi.ng.xerror.core.unsupported_BANG_.call(null,[cljs.core.str("can't intersect w/ "),cljs.core.str(s)].join(''));

}
}
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var c = thi.ng.math.core._PLUS_.call(null,a,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.vector.vec2.call(null,c.call(null,(0)),a.call(null,(1))),c,thi.ng.geom.vector.vec2.call(null,a.call(null,(0)),c.call(null,(1)))], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors.call(null,thi.ng.geom.vector.vec2.call(null,v),thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,thi.ng.geom.core.vertices.call(null,___$1)).call(null,thi.ng.geom.vector.vec2.call(null,v)))){
return (2);
} else {
return (0);
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._PLUS_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),null,null,null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,q){
var ___$1 = this;
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__27364_SHARP_){
return thi.ng.math.core.signum.call(null,cljs.core.apply.call(null,thi.ng.geom.utils.closest_point_coeff,q,p1__27364_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
});})(___$1))
),cljs.core.min,thi.ng.geom.core.edges.call(null,___$1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__27426){
var map__27427 = p__27426;
var map__27427__$1 = ((((!((map__27427 == null)))?((((map__27427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27427):map__27427);
var s = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27429 = this;
var map__27429__$1 = ((((!((map__27429 == null)))?((((map__27429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27429):map__27429);
var s__$1 = cljs.core.get.call(null,map__27429__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._STAR_.call(null,s__$1,-0.5),s__$1,null,null,null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__27431,o){
var map__27432 = p__27431;
var map__27432__$1 = ((((!((map__27432 == null)))?((((map__27432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27432):map__27432);
var s = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27434 = this;
var map__27434__$1 = ((((!((map__27434 == null)))?((((map__27434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27434):map__27434);
var s__$1 = cljs.core.get.call(null,map__27434__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.math.core.madd.call(null,s__$1,-0.5,o),s__$1,null,null,null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.madd.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309)));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__27436,p__27437){
var map__27438 = p__27436;
var map__27438__$1 = ((((!((map__27438 == null)))?((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var vec__27439 = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__27439,(0),null);
var py = cljs.core.nth.call(null,vec__27439,(1),null);
var vec__27442 = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__27442,(0),null);
var h = cljs.core.nth.call(null,vec__27442,(1),null);
var vec__27445 = p__27437;
var x = cljs.core.nth.call(null,vec__27445,(0),null);
var y = cljs.core.nth.call(null,vec__27445,(1),null);
var map__27449 = this;
var map__27449__$1 = ((((!((map__27449 == null)))?((((map__27449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27449):map__27449);
var vec__27450 = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.call(null,vec__27450,(0),null);
var py__$1 = cljs.core.nth.call(null,vec__27450,(1),null);
var vec__27453 = cljs.core.get.call(null,map__27449__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.call(null,vec__27453,(0),null);
var h__$1 = cljs.core.nth.call(null,vec__27453,(1),null);
var and__20010__auto__ = thi.ng.math.core.in_range_QMARK_.call(null,0.0,w__$1,(x - px__$1));
if(cljs.core.truth_(and__20010__auto__)){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,h__$1,(y - py__$1));
} else {
return and__20010__auto__;
}
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309));
var c = thi.ng.math.core._PLUS_.call(null,a,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var b = thi.ng.geom.vector.vec2.call(null,c.call(null,(0)),a.call(null,(1)));
var d = thi.ng.geom.vector.vec2.call(null,a.call(null,(0)),c.call(null,(1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null)], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
var c = thi.ng.geom.core.centroid.call(null,___$1);
return thi.ng.geom.utils.bounding_circle.call(null,c,thi.ng.geom.core.dist.call(null,c,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"p","p",151049309))));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
var vec__27457 = thi.ng.geom.core.vertices.call(null,___$1);
var a = cljs.core.nth.call(null,vec__27457,(0),null);
var b = cljs.core.nth.call(null,vec__27457,(1),null);
var c = cljs.core.nth.call(null,vec__27457,(2),null);
var d = cljs.core.nth.call(null,vec__27457,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),null,null,null)),(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null),null,null,null))], null);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__27460){
var map__27461 = p__27460;
var map__27461__$1 = ((((!((map__27461 == null)))?((((map__27461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27461):map__27461);
var opts = map__27461__$1;
var tess_fn = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.mapcat.call(null,((function (___$1,map__27461,map__27461__$1,opts,tess_fn){
return (function (p1__27366_SHARP_){
return tess_fn.call(null,thi.ng.geom.core.vertices.call(null,p1__27366_SHARP_));
});})(___$1,map__27461,map__27461__$1,opts,tess_fn))
),cljs.core.map.call(null,((function (___$1,map__27461,map__27461__$1,opts,tess_fn){
return (function (p1__27367_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__27367_SHARP_,null,null,null));
});})(___$1,map__27461,map__27461__$1,opts,tess_fn))
)),thi.ng.geom.core.subdivide.call(null,___$1,opts));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)).call(null,(0));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007)).call(null,(1));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPolygonConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.vertices.call(null,___$1),null,null,null));
});

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"size","size",1098693007))));
});

//# sourceMappingURL=rect.js.map