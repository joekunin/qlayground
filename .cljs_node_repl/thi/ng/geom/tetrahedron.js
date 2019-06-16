// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.tetrahedron');
goog.require('cljs.core');
goog.require('thi.ng.geom.triangle');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
/**
 * Takes a seq of 4 3D points, returns them as vector in the order so
 *   that the last point is on the opposite side of the plane defined by
 *   the first three points.
 */
thi.ng.geom.tetrahedron.orient_tetra = (function thi$ng$geom$tetrahedron$orient_tetra(p__31822){
var vec__31826 = p__31822;
var a = cljs.core.nth.call(null,vec__31826,(0),null);
var b = cljs.core.nth.call(null,vec__31826,(1),null);
var c = cljs.core.nth.call(null,vec__31826,(2),null);
var d = cljs.core.nth.call(null,vec__31826,(3),null);
var t = vec__31826;
var dp = thi.ng.math.core.dot.call(null,thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,d,a)),thi.ng.geom.utils.ortho_normal.call(null,a,b,c));
if((dp < (0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,b,d], null);
}
});
thi.ng.geom.tetrahedron.tetrahedron = (function thi$ng$geom$tetrahedron$tetrahedron(var_args){
var args31829 = [];
var len__21023__auto___31832 = arguments.length;
var i__21024__auto___31833 = (0);
while(true){
if((i__21024__auto___31833 < len__21023__auto___31832)){
args31829.push((arguments[i__21024__auto___31833]));

var G__31834 = (i__21024__auto___31833 + (1));
i__21024__auto___31833 = G__31834;
continue;
} else {
}
break;
}

var G__31831 = args31829.length;
switch (G__31831) {
case 1:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31829.length)].join('')));

}
});

thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.tetrahedron.orient_tetra.call(null,cljs.core.mapv.call(null,thi.ng.geom.vector.vec3,points)),null,null,null));
});

thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return thi.ng.geom.tetrahedron.tetrahedron.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null));
});

thi.ng.geom.tetrahedron.tetrahedron.cljs$lang$maxFixedArity = 4;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__31844_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__31844_SHARP_);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__31836_SHARP_){
return thi.ng.math.core.abs_STAR_.call(null,cljs.core.apply.call(null,thi.ng.geom.utils.tri_area3,p1__31836_SHARP_));
});})(___$1))
),cljs.core._PLUS_,thi.ng.geom.core.faces.call(null,___$1));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
var cp = thi.ng.geom.utils.centroid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return cljs.core.map.call(null,((function (cp,___$1){
return (function (p1__31837_SHARP_){
return thi.ng.geom.tetrahedron.tetrahedron.call(null,cljs.core.conj.call(null,p1__31837_SHARP_,cp));
});})(cp,___$1))
,thi.ng.geom.core.faces.call(null,___$1));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.call(null,___$1,thi.ng.math.core.random.call(null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric.call(null,thi.ng.geom.core.vertices.call(null,___$1),thi.ng.math.core.normdist_weights.call(null,(4)));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__31842_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__31842_SHARP_,s);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.scale_size.call(null,s,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (p__31845){
var map__31846 = p__31845;
var map__31846__$1 = ((((!((map__31846 == null)))?((((map__31846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31846):map__31846);
var vec__31847 = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__31847,(0),null);
var b = cljs.core.nth.call(null,vec__31847,(1),null);
var c = cljs.core.nth.call(null,vec__31847,(2),null);
var d = cljs.core.nth.call(null,vec__31847,(3),null);
var map__31851 = this;
var map__31851__$1 = ((((!((map__31851 == null)))?((((map__31851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31851):map__31851);
var vec__31852 = cljs.core.get.call(null,map__31851__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__31852,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31852,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__31852,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__31852,(3),null);
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1,c__$1,d__$1], null),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
var vec__31856 = thi.ng.geom.tetrahedron.orient_tetra.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var a = cljs.core.nth.call(null,vec__31856,(0),null);
var b = cljs.core.nth.call(null,vec__31856,(1),null);
var c = cljs.core.nth.call(null,vec__31856,(2),null);
var d = cljs.core.nth.call(null,vec__31856,(3),null);
return thi.ng.geom.core.into.call(null,(function (){var or__19807__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh.call(null);
}
})(),thi.ng.geom.core.faces.call(null,___$1));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Tetrahedron)){
return thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_.call(null,thi.ng.geom.tetrahedron.orient_tetra.call(null,thi.ng.geom.core.vertices.call(null,___$1)),thi.ng.geom.tetrahedron.orient_tetra.call(null,thi.ng.geom.core.vertices.call(null,s)));
} else {
if((cljs.core.sequential_QMARK_.call(null,s)) && (cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,s)))){
return thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_.call(null,thi.ng.geom.core.vertices.call(null,___$1),thi.ng.geom.tetrahedron.orient_tetra.call(null,s));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Tetrahedron",s);

}
}
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,p__31859){
var map__31860 = p__31859;
var map__31860__$1 = ((((!((map__31860 == null)))?((((map__31860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860):map__31860);
var p = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__31862,v){
var map__31863 = p__31862;
var map__31863__$1 = ((((!((map__31863 == null)))?((((map__31863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31863):map__31863);
var vec__31864 = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__31864,(0),null);
var b = cljs.core.nth.call(null,vec__31864,(1),null);
var c = cljs.core.nth.call(null,vec__31864,(2),null);
var d = cljs.core.nth.call(null,vec__31864,(3),null);
var map__31868 = this;
var map__31868__$1 = ((((!((map__31868 == null)))?((((map__31868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31868):map__31868);
var vec__31869 = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__31869,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31869,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__31869,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__31869,(3),null);
var pred__31873 = cljs.core._EQ_;
var expr__31874 = v;
if(cljs.core.truth_(pred__31873.call(null,a__$1,expr__31874))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1,d__$1], null);
} else {
if(cljs.core.truth_(pred__31873.call(null,b__$1,expr__31874))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1,d__$1], null);
} else {
if(cljs.core.truth_(pred__31873.call(null,c__$1,expr__31874))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1,d__$1], null);
} else {
if(cljs.core.truth_(pred__31873.call(null,d__$1,expr__31874))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null);
} else {
return null;
}
}
}
}
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))).call(null,v))){
return (3);
} else {
return (0);
}
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (t,_){
var t__$1 = this;
return thi.ng.geom.core.faces.call(null,t__$1);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (p__31876){
var map__31877 = p__31876;
var map__31877__$1 = ((((!((map__31877 == null)))?((((map__31877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31877):map__31877);
var vec__31878 = cljs.core.get.call(null,map__31877__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__31878,(0),null);
var b = cljs.core.nth.call(null,vec__31878,(1),null);
var c = cljs.core.nth.call(null,vec__31878,(2),null);
var d = cljs.core.nth.call(null,vec__31878,(3),null);
var map__31882 = this;
var map__31882__$1 = ((((!((map__31882 == null)))?((((map__31882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31882):map__31882);
var vec__31883 = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__31883,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31883,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__31883,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__31883,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1,b__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1,a__$1], null)], null)], null);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__31843_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__31843_SHARP_,t);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.center.call(null,thi.ng.geom.vector.V3,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.center.call(null,o,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return null;
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__31838_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__31838_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__31839_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__31839_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__31840_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__31840_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__31841_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__31841_SHARP_,axis,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__31887){
var map__31888 = p__31887;
var map__31888__$1 = ((((!((map__31888 == null)))?((((map__31888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31888):map__31888);
var vec__31889 = cljs.core.get.call(null,map__31888__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__31889,(0),null);
var b = cljs.core.nth.call(null,vec__31889,(1),null);
var c = cljs.core.nth.call(null,vec__31889,(2),null);
var d = cljs.core.nth.call(null,vec__31889,(3),null);
var map__31893 = this;
var map__31893__$1 = ((((!((map__31893 == null)))?((((map__31893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31893):map__31893);
var vec__31894 = cljs.core.get.call(null,map__31893__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__31894,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31894,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__31894,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__31894,(3),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1], null)], null);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__31898){
var map__31899 = p__31898;
var map__31899__$1 = ((((!((map__31899 == null)))?((((map__31899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31899):map__31899);
var vec__31900 = cljs.core.get.call(null,map__31899__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__31900,(0),null);
var b = cljs.core.nth.call(null,vec__31900,(1),null);
var c = cljs.core.nth.call(null,vec__31900,(2),null);
var d = cljs.core.nth.call(null,vec__31900,(3),null);
var map__31904 = this;
var map__31904__$1 = ((((!((map__31904 == null)))?((((map__31904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31904):map__31904);
var vec__31905 = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__31905,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__31905,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__31905,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__31905,(3),null);
var n = thi.ng.geom.utils.ortho_normal.call(null,a__$1,b__$1,c__$1);
return Math.abs(((thi.ng.math.core.THIRD * thi.ng.geom.utils.tri_area3.call(null,a__$1,b__$1,c__$1)) * (thi.ng.math.core.dot.call(null,n,d__$1) - thi.ng.math.core.dot.call(null,n,a__$1))));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.faces.call(null,___$1);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box.call(null,thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(2),thi.ng.geom.core.vertices.call(null,___$1));
});

//# sourceMappingURL=tetrahedron.js.map