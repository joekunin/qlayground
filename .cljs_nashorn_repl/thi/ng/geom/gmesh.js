// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.gmesh');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.core');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.meshface');
thi.ng.geom.gmesh.add_face_STAR_ = (function thi$ng$geom$gmesh$add_face_STAR_(p__27468,p__27469){
var map__27479 = p__27468;
var map__27479__$1 = ((((!((map__27479 == null)))?((((map__27479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27479):map__27479);
var mesh = map__27479__$1;
var vertices = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var edges = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var faces = cljs.core.get.call(null,map__27479__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var vec__27480 = p__27469;
var verts = cljs.core.nth.call(null,vec__27480,(0),null);
var f = cljs.core.mapv.call(null,((function (map__27479,map__27479__$1,mesh,vertices,edges,faces,vec__27480,verts){
return (function (p1__27467_SHARP_){
return cljs.core.get.call(null,cljs.core.find.call(null,vertices,p1__27467_SHARP_),(0),p1__27467_SHARP_);
});})(map__27479,map__27479__$1,mesh,vertices,edges,faces,vec__27480,verts))
,verts);
if(((cljs.core.get.call(null,faces,f) == null)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,f),cljs.core.count.call(null,cljs.core.set.call(null,f))))){
var mf = (new thi.ng.geom.meshface.MeshFace(f,null));
var vertices__$1 = cljs.core.reduce.call(null,((function (mf,f,map__27479,map__27479__$1,mesh,vertices,edges,faces,vec__27480,verts){
return (function (acc,p__27484){
var vec__27485 = p__27484;
var p = cljs.core.nth.call(null,vec__27485,(0),null);
var c = cljs.core.nth.call(null,vec__27485,(1),null);
var n = cljs.core.nth.call(null,vec__27485,(2),null);
return thi.ng.dstruct.core.index_kv.call(null,acc,c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next","next",-117701485),n,new cljs.core.Keyword(null,"prev","prev",-1597069226),p,new cljs.core.Keyword(null,"f","f",-1597136552),mf], null));
});})(mf,f,map__27479,map__27479__$1,mesh,vertices,edges,faces,vec__27480,verts))
,vertices,cljs.core.partition.call(null,(3),(1),thi.ng.dstruct.core.wrap_seq.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,f)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,f)], null))));
var edges__$1 = cljs.core.reduce.call(null,((function (mf,vertices__$1,f,map__27479,map__27479__$1,mesh,vertices,edges,faces,vec__27480,verts){
return (function (acc,pair){
return thi.ng.dstruct.core.index_kv.call(null,acc,cljs.core.set.call(null,pair),mf);
});})(mf,vertices__$1,f,map__27479,map__27479__$1,mesh,vertices,edges,faces,vec__27480,verts))
,edges,cljs.core.partition.call(null,(2),(1),cljs.core.conj.call(null,f,cljs.core.first.call(null,f))));
return cljs.core.assoc.call(null,mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731),vertices__$1,new cljs.core.Keyword(null,"edges","edges",-694791395),edges__$1,new cljs.core.Keyword(null,"faces","faces",-73909544),cljs.core.conj.call(null,faces,mf));
} else {
return mesh;
}
});
thi.ng.geom.gmesh.vertices_planar_QMARK_ = (function thi$ng$geom$gmesh$vertices_planar_QMARK_(p__27489){
var vec__27493 = p__27489;
var a = cljs.core.nth.call(null,vec__27493,(0),null);
var b = cljs.core.nth.call(null,vec__27493,(1),null);
var c = cljs.core.nth.call(null,vec__27493,(2),null);
var verts = vec__27493;
var or__20022__auto__ = (cljs.core.count.call(null,verts) < (4));
if(or__20022__auto__){
return or__20022__auto__;
} else {
var n = thi.ng.geom.utils.ortho_normal.call(null,a,b,c);
return cljs.core.every_QMARK_.call(null,((function (n,or__20022__auto__,vec__27493,a,b,c,verts){
return (function (p1__27488_SHARP_){
return thi.ng.math.core.delta_EQ_.call(null,n,thi.ng.geom.utils.ortho_normal.call(null,p1__27488_SHARP_));
});})(n,or__20022__auto__,vec__27493,a,b,c,verts))
,cljs.core.partition.call(null,(3),(1),cljs.core.conj.call(null,cljs.core.rest.call(null,verts),a)));
}
});
thi.ng.geom.gmesh.face_neighbors_shared_edges = (function thi$ng$geom$gmesh$face_neighbors_shared_edges(p__27496,f){
var map__27499 = p__27496;
var map__27499__$1 = ((((!((map__27499 == null)))?((((map__27499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27499):map__27499);
var edges = cljs.core.get.call(null,map__27499__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.reduce.call(null,((function (map__27499,map__27499__$1,edges){
return (function (acc,pair){
return cljs.core.into.call(null,acc,cljs.core.disj.call(null,edges.call(null,cljs.core.set.call(null,pair)),f));
});})(map__27499,map__27499__$1,edges))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),(1),cljs.core.conj.call(null,f,cljs.core.first.call(null,f))));
});
thi.ng.geom.gmesh.vertex_neighbors_STAR_ = (function thi$ng$geom$gmesh$vertex_neighbors_STAR_(p__27501,v){
var map__27504 = p__27501;
var map__27504__$1 = ((((!((map__27504 == null)))?((((map__27504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27504):map__27504);
var vertices = cljs.core.get.call(null,map__27504__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
return clojure.set.union.call(null,thi.ng.dstruct.core.value_set.call(null,new cljs.core.Keyword(null,"next","next",-117701485),vertices,v),thi.ng.dstruct.core.value_set.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),vertices,v));
});
thi.ng.geom.gmesh.vertex_valence_STAR_ = (function thi$ng$geom$gmesh$vertex_valence_STAR_(mesh,v){
return (cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),v)) + (1));
});
thi.ng.geom.gmesh.vertex_faces_STAR_ = (function thi$ng$geom$gmesh$vertex_faces_STAR_(mesh,v){
return thi.ng.dstruct.core.value_set.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),v);
});
thi.ng.geom.gmesh.remove_vertex_STAR_ = (function thi$ng$geom$gmesh$remove_vertex_STAR_(mesh,v){
if(cljs.core.truth_(cljs.core.find.call(null,cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),v))){
return cljs.core.reduce.call(null,thi.ng.geom.core.remove_face,mesh,thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,v));
} else {
return mesh;
}
});
thi.ng.geom.gmesh.replace_vertex_STAR_ = (function thi$ng$geom$gmesh$replace_vertex_STAR_(var_args){
var args27508 = [];
var len__21238__auto___27511 = arguments.length;
var i__21239__auto___27512 = (0);
while(true){
if((i__21239__auto___27512 < len__21238__auto___27511)){
args27508.push((arguments[i__21239__auto___27512]));

var G__27513 = (i__21239__auto___27512 + (1));
i__21239__auto___27512 = G__27513;
continue;
} else {
}
break;
}

var G__27510 = args27508.length;
switch (G__27510) {
case 3:
return thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27508.length)].join('')));

}
});

thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (mesh,v,v2){
var vfaces = thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,v);
return thi.ng.geom.gmesh.replace_vertex_STAR_.call(null,cljs.core.reduce.call(null,thi.ng.geom.core.remove_face,mesh,vfaces),v,v2,vfaces);
});

thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (mesh,v,v2,faces){
return cljs.core.reduce.call(null,(function (p1__27506_SHARP_,p2__27507_SHARP_){
return thi.ng.geom.gmesh.add_face_STAR_.call(null,p1__27506_SHARP_,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([v,v2], true, false),p2__27507_SHARP_));
}),mesh,faces);
});

thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.gmesh.merge_vertices_STAR_ = (function thi$ng$geom$gmesh$merge_vertices_STAR_(mesh,a,b){
if(cljs.core.truth_(thi.ng.geom.gmesh.vertex_neighbors_STAR_.call(null,mesh,a).call(null,b))){
var fa = thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,a);
var fb = thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,b);
var ab_isec = clojure.set.intersection.call(null,fa,fb);
var a_xor = clojure.set.difference.call(null,fa,ab_isec);
var b_xor = clojure.set.difference.call(null,fb,ab_isec);
var mp = thi.ng.math.core.mix.call(null,a,b);
return thi.ng.geom.gmesh.replace_vertex_STAR_.call(null,thi.ng.geom.gmesh.replace_vertex_STAR_.call(null,cljs.core.reduce.call(null,thi.ng.geom.core.remove_face,mesh,clojure.set.union.call(null,ab_isec,a_xor,b_xor)),a,mp,a_xor),b,mp,b_xor);
} else {
return mesh;
}
});
/**
 * Builds a new 3d mesh data structure and (optionally) populates it with
 *   the given items (a seq of existing meshes and/or faces). Faces are defined
 *   as vectors of their vertices.
 */
thi.ng.geom.gmesh.gmesh = (function thi$ng$geom$gmesh$gmesh(){
return (new thi.ng.geom.types.GMesh(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null,null));
});
thi.ng.geom.gmesh.lathe_mesh = (function thi$ng$geom$gmesh$lathe_mesh(var_args){
var args27516 = [];
var len__21238__auto___27531 = arguments.length;
var i__21239__auto___27532 = (0);
while(true){
if((i__21239__auto___27532 < len__21238__auto___27531)){
args27516.push((arguments[i__21239__auto___27532]));

var G__27533 = (i__21239__auto___27532 + (1));
i__21239__auto___27532 = G__27533;
continue;
} else {
}
break;
}

var G__27518 = args27516.length;
switch (G__27518) {
case 4:
return thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27516.length)].join('')));

}
});

thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$4 = (function (points,res,phi,rot_fn){
return thi.ng.geom.gmesh.lathe_mesh.call(null,points,res,phi,rot_fn,null);
});

thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$5 = (function (points,res,phi,rot_fn,face_fn){
var strips = cljs.core.mapv.call(null,(function (i){
var theta = (i * phi);
return cljs.core.mapv.call(null,((function (theta){
return (function (p1__27515_SHARP_){
var p = rot_fn.call(null,p1__27515_SHARP_,theta);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,p,p1__27515_SHARP_,thi.ng.math.core._STAR_eps_STAR_))){
return p1__27515_SHARP_;
} else {
return p;
}
});})(theta))
,points);
}),cljs.core.butlast.call(null,thi.ng.math.core.norm_range.call(null,res)));
var strips__$1 = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,phi,thi.ng.math.core.TWO_PI))?cljs.core.conj.call(null,strips,cljs.core.first.call(null,strips)):strips);
var make_face = ((function (strips,strips__$1){
return (function (p__27519,p__27520){
var vec__27521 = p__27519;
var a1 = cljs.core.nth.call(null,vec__27521,(0),null);
var a2 = cljs.core.nth.call(null,vec__27521,(1),null);
var vec__27524 = p__27520;
var b1 = cljs.core.nth.call(null,vec__27524,(0),null);
var b2 = cljs.core.nth.call(null,vec__27524,(1),null);
var f = (((cljs.core.count.call(null,cljs.core.PersistentHashSet.fromArray([a1,a2,b1,b2],true)) < (3)))?null:((cljs.core._EQ_.call(null,a1,b1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,a2], null):((cljs.core._EQ_.call(null,a2,b2))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,a2,a1], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,a2,a1], null)
)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__20010__auto__ = f;
if(cljs.core.truth_(and__20010__auto__)){
return face_fn;
} else {
return and__20010__auto__;
}
})())?face_fn.call(null,f):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))], null);
});})(strips,strips__$1))
;
return thi.ng.geom.utils.into_mesh.call(null,thi.ng.geom.gmesh.gmesh.call(null),thi.ng.geom.gmesh.add_face_STAR_,cljs.core.mapcat.call(null,((function (strips,strips__$1,make_face){
return (function (p__27527){
var vec__27528 = p__27527;
var sa = cljs.core.nth.call(null,vec__27528,(0),null);
var sb = cljs.core.nth.call(null,vec__27528,(1),null);
return cljs.core.mapcat.call(null,make_face,cljs.core.partition.call(null,(2),(1),sa),cljs.core.partition.call(null,(2),(1),sb));
});})(strips,strips__$1,make_face))
,cljs.core.partition.call(null,(2),(1),strips__$1)));
});

thi.ng.geom.gmesh.lathe_mesh.cljs$lang$maxFixedArity = 5;

thi.ng.geom.gmesh.saddle = (function thi$ng$geom$gmesh$saddle(s){
var sv = thi.ng.geom.vector.vec3.call(null,s);
return cljs.core.reduce.call(null,((function (sv){
return (function (m,p__27539){
var vec__27540 = p__27539;
var p = cljs.core.nth.call(null,vec__27540,(0),null);
var flags = cljs.core.nth.call(null,vec__27540,(1),null);
return thi.ng.geom.utils.into_mesh.call(null,m,thi.ng.geom.gmesh.add_face_STAR_,thi.ng.geom.core.as_mesh.call(null,(new thi.ng.geom.types.AABB(p,s,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flags","flags",1775418075),flags], null)));
});})(sv))
,thi.ng.geom.gmesh.gmesh.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null),new cljs.core.Keyword(null,"ewsfb","ewsfb",140980189)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(0),s,(0)),new cljs.core.Keyword(null,"wfb","wfb",821918881)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,s,s,(0)),new cljs.core.Keyword(null,"ensfb","ensfb",-964424291)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.call(null,(0),(s * (2)),(0)),new cljs.core.Keyword(null,"ewnfb","ewnfb",92377605)], null)], null));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.gmesh.add_face_STAR_,tx);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_area_3d.call(null,thi.ng.geom.meshface.xf_face_verts.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,faces){
var ___$1 = this;
return thi.ng.geom.utils.into_mesh.call(null,___$1,thi.ng.geom.gmesh.add_face_STAR_,faces);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.gmesh.add_face_STAR_,((function (___$1){
return (function (p1__27546_SHARP_){
return thi.ng.math.core._STAR_.call(null,p1__27546_SHARP_,s);
});})(___$1))
);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var c = thi.ng.geom.core.centroid.call(null,___$1);
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.gmesh.add_face_STAR_,((function (c,___$1){
return (function (p1__27547_SHARP_){
return thi.ng.math.core.madd.call(null,thi.ng.math.core._.call(null,p1__27547_SHARP_,c),s,c);
});})(c,___$1))
);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh.call(null,((function (___$1){
return (function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.rseq.call(null,f))], null);
});})(___$1))
,___$1);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mesh","mesh",456320595)),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.keys.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$connected_components$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.vertex_neighbors_STAR_.call(null,___$1,v);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.vertex_valence_STAR_.call(null,___$1,v);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$remove_vertex$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.remove_vertex_STAR_.call(null,___$1,v);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$replace_vertex$arity$3 = (function (_,v,v2){
var ___$1 = this;
return thi.ng.geom.gmesh.replace_vertex_STAR_.call(null,___$1,v,v2);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$merge_vertices$arity$3 = (function (_,a,b){
var ___$1 = this;
return thi.ng.geom.gmesh.merge_vertices_STAR_.call(null,___$1,a,b);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var ___$1 = this;
if(cljs.core.truth_(opts)){
return cljs.core.map.call(null,((function (___$1){
return (function (p1__27543_SHARP_){
return thi.ng.geom.core.raw.call(null,p1__27543_SHARP_,___$1);
});})(___$1))
,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
} else {
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
}
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,face){
var ___$1 = this;
return thi.ng.geom.gmesh.add_face_STAR_.call(null,___$1,face);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,___$1,v);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$remove_face$arity$2 = (function (p__27549,f){
var map__27550 = p__27549;
var map__27550__$1 = ((((!((map__27550 == null)))?((((map__27550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27550):map__27550);
var _ = map__27550__$1;
var vertices = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var edges = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var faces = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var fnormals = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var vnormals = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var map__27552 = this;
var map__27552__$1 = ((((!((map__27552 == null)))?((((map__27552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27552):map__27552);
var ___$1 = map__27552__$1;
var vertices__$1 = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var edges__$1 = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var faces__$1 = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var fnormals__$1 = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var vnormals__$1 = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
if(cljs.core.truth_(cljs.core.get.call(null,faces__$1,f))){
var fv = thi.ng.geom.core.vertices.call(null,f,___$1);
var verts = vertices__$1;
var vnorms = vnormals__$1;
var edges__$2 = edges__$1;
var fedges = cljs.core.partition.call(null,(2),(1),cljs.core.conj.call(null,fv,cljs.core.first.call(null,fv)));
while(true){
if(cljs.core.truth_(fedges)){
var vec__27554 = cljs.core.first.call(null,fedges);
var a = cljs.core.nth.call(null,vec__27554,(0),null);
var b = cljs.core.nth.call(null,vec__27554,(1),null);
var e = cljs.core.PersistentHashSet.fromArray([a,b], true);
var efaces = cljs.core.disj.call(null,cljs.core.get.call(null,edges__$2,e),f);
var edges__$3 = ((cljs.core.seq.call(null,efaces))?cljs.core.assoc.call(null,edges__$2,e,efaces):cljs.core.dissoc.call(null,edges__$2,e));
var ve = cljs.core.filter.call(null,((function (verts,vnorms,edges__$2,fedges,vec__27554,a,b,e,efaces,edges__$3,fv,map__27552,map__27552__$1,___$1,vertices__$1,edges__$1,faces__$1,fnormals__$1,vnormals__$1,map__27550,map__27550__$1,_,vertices,edges,faces,fnormals,vnormals){
return (function (p1__27544_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.get.call(null,p1__27544_SHARP_,new cljs.core.Keyword(null,"f","f",-1597136552)),f);
});})(verts,vnorms,edges__$2,fedges,vec__27554,a,b,e,efaces,edges__$3,fv,map__27552,map__27552__$1,___$1,vertices__$1,edges__$1,faces__$1,fnormals__$1,vnormals__$1,map__27550,map__27550__$1,_,vertices,edges,faces,fnormals,vnormals))
,cljs.core.get.call(null,verts,a));
if(cljs.core.seq.call(null,ve)){
var G__27565 = cljs.core.assoc.call(null,verts,a,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,ve));
var G__27566 = vnorms;
var G__27567 = edges__$3;
var G__27568 = cljs.core.next.call(null,fedges);
verts = G__27565;
vnorms = G__27566;
edges__$2 = G__27567;
fedges = G__27568;
continue;
} else {
var G__27569 = cljs.core.dissoc.call(null,verts,a);
var G__27570 = cljs.core.dissoc.call(null,vnorms,a);
var G__27571 = edges__$3;
var G__27572 = cljs.core.next.call(null,fedges);
verts = G__27569;
vnorms = G__27570;
edges__$2 = G__27571;
fedges = G__27572;
continue;
}
} else {
return cljs.core.assoc.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731),verts,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),vnorms,new cljs.core.Keyword(null,"edges","edges",-694791395),edges__$2,new cljs.core.Keyword(null,"faces","faces",-73909544),cljs.core.disj.call(null,faces__$1,f),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.dissoc.call(null,fnormals__$1,f));
}
break;
}
} else {
return ___$1;
}
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh.call(null,___$1,thi.ng.geom.gmesh.add_face_STAR_,((function (___$1){
return (function (p1__27548_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__27548_SHARP_,t);
});})(___$1))
);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$face_normals$arity$2 = (function (_,force_QMARK_){
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

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$face_normal$arity$2 = (function (_,f){
var ___$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),f);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.seq.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284)))){
return cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
} else {
if(cljs.core.truth_(force_QMARK_)){
return cljs.core.get.call(null,thi.ng.geom.core.compute_vertex_normals.call(null,___$1),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
} else {
return null;
}
}
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2 = (function (_,v){
var ___$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284)),v);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1 = (function (_){
var ___$1 = this;
var norms = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var fnorms = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
var faces = cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
while(true){
if(cljs.core.truth_(faces)){
var f = cljs.core.first.call(null,faces);
var vec__27557 = thi.ng.dstruct.core.index_BANG_.call(null,norms,thi.ng.geom.utils.ortho_normal.call(null,f.vertices));
var norms__$1 = cljs.core.nth.call(null,vec__27557,(0),null);
var n = cljs.core.nth.call(null,vec__27557,(1),null);
var G__27573 = norms__$1;
var G__27574 = cljs.core.assoc_BANG_.call(null,fnorms,f,n);
var G__27575 = cljs.core.next.call(null,faces);
norms = G__27573;
fnorms = G__27574;
faces = G__27575;
continue;
} else {
return cljs.core.assoc.call(null,___$1,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.persistent_BANG_.call(null,norms),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.persistent_BANG_.call(null,fnorms));
}
break;
}
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1 = (function (_){
var ___$1 = this;
var this$ = ((cljs.core.seq.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563))))?___$1:thi.ng.geom.core.compute_face_normals.call(null,___$1));
var map__27560 = this$;
var map__27560__$1 = ((((!((map__27560 == null)))?((((map__27560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27560):map__27560);
var vertices = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var normals = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var fnormals = cljs.core.get.call(null,map__27560__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var ntx = cljs.core.map.call(null,((function (this$,map__27560,map__27560__$1,vertices,normals,fnormals,___$1){
return (function (p1__27545_SHARP_){
return cljs.core.get.call(null,fnormals,p1__27545_SHARP_);
});})(this$,map__27560,map__27560__$1,vertices,normals,fnormals,___$1))
);
var norms = cljs.core.transient$.call(null,normals);
var vnorms = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
var verts = cljs.core.keys.call(null,vertices);
while(true){
if(cljs.core.truth_(verts)){
var v = cljs.core.first.call(null,verts);
var vec__27562 = thi.ng.dstruct.core.index_BANG_.call(null,norms,thi.ng.math.core.normalize.call(null,cljs.core.transduce.call(null,ntx,thi.ng.math.core._PLUS_,thi.ng.geom.vector.V3,thi.ng.dstruct.core.value_set.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),vertices,v))));
var norms__$1 = cljs.core.nth.call(null,vec__27562,(0),null);
var n = cljs.core.nth.call(null,vec__27562,(1),null);
var G__27576 = norms__$1;
var G__27577 = cljs.core.assoc_BANG_.call(null,vnorms,v,n);
var G__27578 = cljs.core.next.call(null,verts);
norms = G__27576;
vnorms = G__27577;
verts = G__27578;
continue;
} else {
return cljs.core.assoc.call(null,this$,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.persistent_BANG_.call(null,norms),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),cljs.core.persistent_BANG_.call(null,vnorms));
}
break;
}
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.center.call(null,___$1,thi.ng.geom.vector.vec3.call(null));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.core.translate.call(null,___$1,thi.ng.math.core._.call(null,o,thi.ng.geom.core.centroid.call(null,___$1)));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.gmesh.gmesh.call(null);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.keys.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"edges","edges",-694791395)));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_volume.call(null,thi.ng.geom.meshface.xf_face_verts.call(null,___$1),cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh.call(null,(function (){var or__20022__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.utils.tessellate_face.call(null,thi.ng.geom.utils.tessellate_with_first);
}
})(),___$1);
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),cljs.core.keys.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),cljs.core.keys.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
});

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(2),cljs.core.keys.call(null,cljs.core.get.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
});

//# sourceMappingURL=gmesh.js.map