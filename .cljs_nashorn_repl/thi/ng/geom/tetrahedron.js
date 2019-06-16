// Compiled by ClojureScript 1.9.293 {}
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
thi.ng.geom.tetrahedron.orient_tetra = (function thi$ng$geom$tetrahedron$orient_tetra(p__26003){
var vec__26007 = p__26003;
var a = cljs.core.nth.call(null,vec__26007,(0),null);
var b = cljs.core.nth.call(null,vec__26007,(1),null);
var c = cljs.core.nth.call(null,vec__26007,(2),null);
var d = cljs.core.nth.call(null,vec__26007,(3),null);
var t = vec__26007;
var dp = thi.ng.math.core.dot.call(null,thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,d,a)),thi.ng.geom.utils.ortho_normal.call(null,a,b,c));
if((dp < (0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,b,d], null);
}
});
thi.ng.geom.tetrahedron.tetrahedron = (function thi$ng$geom$tetrahedron$tetrahedron(var_args){
var args26010 = [];
var len__21238__auto___26013 = arguments.length;
var i__21239__auto___26014 = (0);
while(true){
if((i__21239__auto___26014 < len__21238__auto___26013)){
args26010.push((arguments[i__21239__auto___26014]));

var G__26015 = (i__21239__auto___26014 + (1));
i__21239__auto___26014 = G__26015;
continue;
} else {
}
break;
}

var G__26012 = args26010.length;
switch (G__26012) {
case 1:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26010.length)].join('')));

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
return (function (p1__26025_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,m,p1__26025_SHARP_);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__26017_SHARP_){
return thi.ng.math.core.abs_STAR_.call(null,cljs.core.apply.call(null,thi.ng.geom.utils.tri_area3,p1__26017_SHARP_));
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
return (function (p1__26018_SHARP_){
return thi.ng.geom.tetrahedron.tetrahedron.call(null,cljs.core.conj.call(null,p1__26018_SHARP_,cp));
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
return (function (p1__26023_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__26023_SHARP_,s);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.scale_size.call(null,s,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (p__26026){
var map__26027 = p__26026;
var map__26027__$1 = ((((!((map__26027 == null)))?((((map__26027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26027):map__26027);
var vec__26028 = cljs.core.get.call(null,map__26027__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26028,(0),null);
var b = cljs.core.nth.call(null,vec__26028,(1),null);
var c = cljs.core.nth.call(null,vec__26028,(2),null);
var d = cljs.core.nth.call(null,vec__26028,(3),null);
var map__26032 = this;
var map__26032__$1 = ((((!((map__26032 == null)))?((((map__26032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26032):map__26032);
var vec__26033 = cljs.core.get.call(null,map__26032__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26033,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26033,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26033,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__26033,(3),null);
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
var vec__26037 = thi.ng.geom.tetrahedron.orient_tetra.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var a = cljs.core.nth.call(null,vec__26037,(0),null);
var b = cljs.core.nth.call(null,vec__26037,(1),null);
var c = cljs.core.nth.call(null,vec__26037,(2),null);
var d = cljs.core.nth.call(null,vec__26037,(3),null);
return thi.ng.geom.core.into.call(null,(function (){var or__20022__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
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

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,p__26040){
var map__26041 = p__26040;
var map__26041__$1 = ((((!((map__26041 == null)))?((((map__26041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26041):map__26041);
var p = cljs.core.get.call(null,map__26041__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.call(null,map__26041__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__26043,v){
var map__26044 = p__26043;
var map__26044__$1 = ((((!((map__26044 == null)))?((((map__26044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26044):map__26044);
var vec__26045 = cljs.core.get.call(null,map__26044__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26045,(0),null);
var b = cljs.core.nth.call(null,vec__26045,(1),null);
var c = cljs.core.nth.call(null,vec__26045,(2),null);
var d = cljs.core.nth.call(null,vec__26045,(3),null);
var map__26049 = this;
var map__26049__$1 = ((((!((map__26049 == null)))?((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26049):map__26049);
var vec__26050 = cljs.core.get.call(null,map__26049__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26050,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26050,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26050,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__26050,(3),null);
var pred__26054 = cljs.core._EQ_;
var expr__26055 = v;
if(cljs.core.truth_(pred__26054.call(null,a__$1,expr__26055))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1,d__$1], null);
} else {
if(cljs.core.truth_(pred__26054.call(null,b__$1,expr__26055))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1,d__$1], null);
} else {
if(cljs.core.truth_(pred__26054.call(null,c__$1,expr__26055))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1,d__$1], null);
} else {
if(cljs.core.truth_(pred__26054.call(null,d__$1,expr__26055))){
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

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (p__26057){
var map__26058 = p__26057;
var map__26058__$1 = ((((!((map__26058 == null)))?((((map__26058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26058):map__26058);
var vec__26059 = cljs.core.get.call(null,map__26058__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26059,(0),null);
var b = cljs.core.nth.call(null,vec__26059,(1),null);
var c = cljs.core.nth.call(null,vec__26059,(2),null);
var d = cljs.core.nth.call(null,vec__26059,(3),null);
var map__26063 = this;
var map__26063__$1 = ((((!((map__26063 == null)))?((((map__26063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26063):map__26063);
var vec__26064 = cljs.core.get.call(null,map__26063__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26064,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26064,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26064,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__26064,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1,b__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1,a__$1], null)], null)], null);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26024_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__26024_SHARP_,t);
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
return (function (p1__26019_SHARP_){
return thi.ng.geom.core.rotate_x.call(null,p1__26019_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26020_SHARP_){
return thi.ng.geom.core.rotate_y.call(null,p1__26020_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26021_SHARP_){
return thi.ng.geom.core.rotate_z.call(null,p1__26021_SHARP_,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__26022_SHARP_){
return thi.ng.geom.core.rotate_around_axis.call(null,p1__26022_SHARP_,axis,theta);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__26068){
var map__26069 = p__26068;
var map__26069__$1 = ((((!((map__26069 == null)))?((((map__26069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26069):map__26069);
var vec__26070 = cljs.core.get.call(null,map__26069__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26070,(0),null);
var b = cljs.core.nth.call(null,vec__26070,(1),null);
var c = cljs.core.nth.call(null,vec__26070,(2),null);
var d = cljs.core.nth.call(null,vec__26070,(3),null);
var map__26074 = this;
var map__26074__$1 = ((((!((map__26074 == null)))?((((map__26074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26074):map__26074);
var vec__26075 = cljs.core.get.call(null,map__26074__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26075,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26075,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26075,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__26075,(3),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1], null)], null);
});

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__26079){
var map__26080 = p__26079;
var map__26080__$1 = ((((!((map__26080 == null)))?((((map__26080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26080):map__26080);
var vec__26081 = cljs.core.get.call(null,map__26080__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.call(null,vec__26081,(0),null);
var b = cljs.core.nth.call(null,vec__26081,(1),null);
var c = cljs.core.nth.call(null,vec__26081,(2),null);
var d = cljs.core.nth.call(null,vec__26081,(3),null);
var map__26085 = this;
var map__26085__$1 = ((((!((map__26085 == null)))?((((map__26085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26085):map__26085);
var vec__26086 = cljs.core.get.call(null,map__26085__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.call(null,vec__26086,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__26086,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__26086,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__26086,(3),null);
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