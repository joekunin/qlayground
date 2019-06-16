// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.plane');
goog.require('cljs.core');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.quaternion');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.types');
thi.ng.geom.plane.plane = (function thi$ng$geom$plane$plane(n,w){
return (new thi.ng.geom.types.Plane(thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,n)),w,null,null,null));
});
thi.ng.geom.plane.plane_with_point = (function thi$ng$geom$plane$plane_with_point(p,n){
var n__$1 = thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,n));
return (new thi.ng.geom.types.Plane(n__$1,(- thi.ng.math.core.dot.call(null,n__$1,p)),null,null,null));
});
thi.ng.geom.plane.plane_from_points = (function thi$ng$geom$plane$plane_from_points(var_args){
var args31720 = [];
var len__21023__auto___31727 = arguments.length;
var i__21024__auto___31728 = (0);
while(true){
if((i__21024__auto___31728 < len__21023__auto___31727)){
args31720.push((arguments[i__21024__auto___31728]));

var G__31729 = (i__21024__auto___31728 + (1));
i__21024__auto___31728 = G__31729;
continue;
} else {
}
break;
}

var G__31722 = args31720.length;
switch (G__31722) {
case 1:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31720.length)].join('')));

}
});

thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1 = (function (p__31723){
var vec__31724 = p__31723;
var a = cljs.core.nth.call(null,vec__31724,(0),null);
var b = cljs.core.nth.call(null,vec__31724,(1),null);
var c = cljs.core.nth.call(null,vec__31724,(2),null);
return thi.ng.geom.plane.plane_from_points.call(null,a,b,c);
});

thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var n = thi.ng.geom.utils.ortho_normal.call(null,a,b,c);
return (new thi.ng.geom.types.Plane(n,(- thi.ng.math.core.dot.call(null,n,a)),null,null,null));
});

thi.ng.geom.plane.plane_from_points.cljs$lang$maxFixedArity = 3;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core.transform_vector.call(null,m,thi.ng.geom.core.centroid.call(null,___$1)),thi.ng.geom.core.transform_vector.call(null,m,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025))));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.INF_PLUS_;
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__31732,p){
var map__31733 = p__31732;
var map__31733__$1 = ((((!((map__31733 == null)))?((((map__31733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31733):map__31733);
var _ = map__31733__$1;
var n = cljs.core.get.call(null,map__31733__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__31735 = this;
var map__31735__$1 = ((((!((map__31735 == null)))?((((map__31735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31735):map__31735);
var ___$1 = map__31735__$1;
var n__$1 = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"n","n",562130025));
return thi.ng.math.core._.call(null,p,thi.ng.math.core.normalize.call(null,n__$1,(cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)) + thi.ng.math.core.dot.call(null,n__$1,p))));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.math.core.dot.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),p) + cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,p){
var ___$1 = this;
var d = thi.ng.geom.core.dist.call(null,___$1,p);
return (d * d);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,p__31737){
var map__31738 = p__31737;
var map__31738__$1 = ((((!((map__31738 == null)))?((((map__31738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31738):map__31738);
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.math.core._STAR_.call(null,thi.ng.geom.core.centroid.call(null,___$1),s),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(thi.ng.math.core._.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025))),(- cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001))),null,null,null));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.centroid.call(null,___$1),thi.ng.math.core.INF_PLUS_,null,null,null));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__31740){
var map__31741 = p__31740;
var map__31741__$1 = ((((!((map__31741 == null)))?((((map__31741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31741):map__31741);
var p = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"p","p",151049309));
var width = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var size = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"size","size",1098693007),1.0);
var mesh = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var attribs = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var w = ((function (){var or__19807__auto__ = width;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return size;
}
})() * 0.5);
var h = ((function (){var or__19807__auto__ = height;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return size;
}
})() * 0.5);
var flip_QMARK_ = thi.ng.math.core.delta_EQ_.call(null,-1.0,thi.ng.math.core.dot.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),thi.ng.geom.vector.V3Z));
var p__$1 = thi.ng.geom.core.closest_point.call(null,___$1,(function (){var or__19807__auto__ = p;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.vector.vec3.call(null);
}
})());
var q = (cljs.core.truth_(flip_QMARK_)?thi.ng.geom.quaternion.quat.call(null,(0),(0),(0),(1)):thi.ng.geom.quaternion.alignment_quat.call(null,thi.ng.geom.vector.V3Z,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025))));
var face = cljs.core.mapv.call(null,((function (w,h,flip_QMARK_,p__$1,q,___$1,map__31741,map__31741__$1,p,width,height,size,mesh,attribs){
return (function (p1__31731_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p__$1,thi.ng.geom.core.transform_vector.call(null,q,p1__31731_SHARP_));
});})(w,h,flip_QMARK_,p__$1,q,___$1,map__31741,map__31741__$1,p,width,height,size,mesh,attribs))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(- w),(- h),(0)),thi.ng.geom.vector.vec3.call(null,(- w),h,(0)),thi.ng.geom.vector.vec3.call(null,w,h,(0)),thi.ng.geom.vector.vec3.call(null,w,(- h),(0))], null));
var face__$1 = thi.ng.geom.attribs.generate_face_attribs.call(null,(cljs.core.truth_(flip_QMARK_)?face:cljs.core.rseq.call(null,face)),(0),attribs,null);
return thi.ng.geom.core.add_face.call(null,(function (){var or__19807__auto__ = mesh;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),face__$1);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
var vec__31743 = ((cljs.core.map_QMARK_.call(null,l))?cljs.core.get.call(null,l,new cljs.core.Keyword(null,"points","points",-1486596883)):l);
var p = cljs.core.nth.call(null,vec__31743,(0),null);
var q = cljs.core.nth.call(null,vec__31743,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_.call(null,p,thi.ng.math.core._.call(null,q,p),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$3 = (function (_,p,q){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_.call(null,p,thi.ng.math.core._.call(null,q,p),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__31746 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.call(null,vec__31746,(0),null);
var dir = cljs.core.nth.call(null,vec__31746,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_.call(null,p,dir,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_.call(null,p,dir,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Plane)){
return thi.ng.geom.utils.intersect.intersect_plane_plane_QMARK_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"w","w",354169001)));
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.utils.intersect.intersect_plane_sphere_QMARK_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001)),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.call(null,s,new cljs.core.Keyword(null,"r","r",-471384190)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,s);

}
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.math.core._PLUS_.call(null,thi.ng.geom.core.centroid.call(null,___$1),t),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.math.core.signum.call(null,(thi.ng.math.core.dot.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),p) + cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001))),thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),(0),null,null,null));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point.call(null,o,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core._STAR_.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025)),(- cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"w","w",354169001))));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
var s = thi.ng.geom.vector.vec3.call(null,thi.ng.geom.core.width.call(null,___$1),thi.ng.geom.core.height.call(null,___$1),thi.ng.geom.core.depth.call(null,___$1));
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd.call(null,s,-0.5,thi.ng.geom.core.centroid.call(null,___$1)),s,null,null,null));
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.math.core.abs.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025))),thi.ng.geom.vector.V3X,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.math.core.abs.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025))),thi.ng.geom.vector.V3Y,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
});

thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.math.core.abs.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"n","n",562130025))),thi.ng.geom.vector.V3Z,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
});

//# sourceMappingURL=plane.js.map