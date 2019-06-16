// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.basicmesh');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.meshface');
thi.ng.geom.basicmesh.add_face_STAR_ = (function thi$ng$geom$basicmesh$add_face_STAR_(mesh,p__32711){
var vec__32715 = p__32711;
var fverts = cljs.core.nth.call(null,vec__32715,(0),null);
return (new thi.ng.geom.types.BasicMesh(cljs.core.into.call(null,cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),fverts),cljs.core.conj.call(null,cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"faces","faces",-73909544)),(new thi.ng.geom.meshface.MeshFace(fverts,null))),cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),null,null,null));
});
/**
 * Builds a new 3d mesh data structure and (optionally) populates it with
 *   the given items (a seq of existing meshes and/or faces). Faces are defined
 *   as vectors of their vertices.
 */
thi.ng.geom.basicmesh.basic_mesh = (function thi$ng$geom$basicmesh$basic_mesh(){
return (new thi.ng.geom.types.BasicMesh(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
});
thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face_STAR_,m);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_area_3d.call(null,thi.ng.geom.meshface.xf_face_verts.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,faces){
var ___$1 = this;
return thi.ng.geom.utils.into_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face_STAR_,faces);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face_STAR_,((function (___$1){
return (function (p1__32723_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__32723_SHARP_,s);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var c = thi.ng.geom.core.centroid.call(null,___$1);
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face_STAR_,((function (c,___$1){
return (function (p1__32724_SHARP_){
return thi.ng.math.core.madd.call(null,thi.ng.math.core._.call(null,p1__32724_SHARP_,c),s,c);
});})(c,___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh.call(null,((function (___$1){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.rseq.call(null,f))], null);
});})(___$1))
,___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var ___$1 = this;
if(cljs.core.truth_(opts)){
return cljs.core.map.call(null,((function (___$1){
return (function (p1__32720_SHARP_){
return thi.ng.geom.core.raw.call(null,p1__32720_SHARP_,___$1);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
} else {
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,face){
var ___$1 = this;
return thi.ng.geom.basicmesh.add_face_STAR_.call(null,___$1,face);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2 = (function (_,v){
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__32721_SHARP_){
return thi.ng.geom.core.vertices.call(null,p1__32721_SHARP_,___$1);
});})(___$1))
),cljs.core.filter.call(null,((function (___$1){
return (function (p1__32722_SHARP_){
return (thi.ng.dstruct.core.index_of.call(null,p1__32722_SHARP_,v) > (0));
});})(___$1))
),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544))));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$remove_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.basicmesh.add_face_STAR_,((function (___$1){
return (function (p1__32725_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__32725_SHARP_,t);
});})(___$1))
);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$face_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.seq.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)))){
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
} else {
if(cljs.core.truth_(force_QMARK_)){
return cljs.core.get.call(null,thi.ng.geom.core.compute_face_normals.call(null,___$1),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
} else {
return null;
}
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$face_normal$arity$2 = (function (_,f){
var ___$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),f);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.truth_(force_QMARK_)){
return thi.ng.xerror.core.unsupported_BANG_.call(null);
} else {
return null;
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1 = (function (_){
var ___$1 = this;
var fnorms = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var faces = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
while(true){
if(cljs.core.truth_(faces)){
var f = cljs.core.first.call(null,faces);
var G__32726 = cljs.core.assoc_BANG_.call(null,fnorms,f,thi.ng.geom.utils.ortho_normal.call(null,thi.ng.geom.core.vertices.call(null,f,___$1)));
var G__32727 = cljs.core.next.call(null,faces);
fnorms = G__32726;
faces = G__32727;
continue;
} else {
return cljs.core.assoc.call(null,___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.persistent_BANG_.call(null,fnorms));
}
break;
}
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.center.call(null,___$1,thi.ng.geom.vector.vec3.call(null));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.core.translate.call(null,___$1,thi.ng.math.core._.call(null,o,thi.ng.geom.core.centroid.call(null,___$1)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.basicmesh.basic_mesh.call(null);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__32718_SHARP_){
return thi.ng.geom.core.vertices.call(null,p1__32718_SHARP_,___$1);
});})(___$1))
),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__32719_SHARP_){
return thi.ng.dstruct.core.successive_nth.call(null,(2),cljs.core.conj.call(null,p1__32719_SHARP_,cljs.core.first.call(null,p1__32719_SHARP_)));
});})(___$1))
),cljs.core.map.call(null,cljs.core.set)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_volume.call(null,thi.ng.geom.meshface.xf_face_verts.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh.call(null,(function (){var or__19807__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.utils.tessellate_face.call(null,thi.ng.geom.utils.tessellate_with_first);
}
})(),___$1);
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
});

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(2),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
});

//# sourceMappingURL=basicmesh.js.map