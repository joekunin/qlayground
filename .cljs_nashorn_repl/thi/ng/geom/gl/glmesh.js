// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.gl.glmesh');
goog.require('cljs.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.gl.webgl.constants');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.geom.gl.core');
goog.require('thi.ng.typedarrays.core');






/**
* @constructor
 * @implements {thi.ng.geom.core.IFaceAccess}
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {thi.ng.geom.core.IMutableProps}
 * @implements {thi.ng.geom.core.ICenter}
 * @implements {thi.ng.geom.gl.core.IGLConvert}
 * @implements {thi.ng.geom.core.IBounds}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.geom.core.IBoundingSphere}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {thi.ng.geom.core.IGeomContainer}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.gl.glmesh.GLMesh = (function (vertices,fnormals,vnormals,uvs,cols,id,attribs){
this.vertices = vertices;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.uvs = uvs;
this.cols = cols;
this.id = id;
this.attribs = attribs;
})
thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var self__ = this;
var ___$1 = this;
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (___$1){
return (function (p1__27586_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,tx,p1__27586_SHARP_);
});})(___$1))
,self__.vertices,(self__.id * (9)));

return ___$1;
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,faces){
var self__ = this;
var ___$1 = this;
if((faces instanceof thi.ng.geom.gl.glmesh.GLMesh)){
return thi.ng.geom.gl.glmesh.into_glmesh_STAR_.call(null,___$1,faces);
} else {
return thi.ng.geom.utils.into_mesh.call(null,___$1,thi.ng.geom.gl.glmesh.add_face_STAR_,faces);
}
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (___$1){
return (function (p1__27583_SHARP_){
return thi.ng.math.core._STAR__BANG_.call(null,p1__27583_SHARP_,s);
});})(___$1))
,self__.vertices,(self__.id * (9)));

return ___$1;
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_27591 = thi.ng.geom.core.centroid.call(null,___$1);
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (c_27591,___$1){
return (function (p1__27584_SHARP_){
return thi.ng.math.core.madd_BANG_.call(null,thi.ng.math.core.__BANG_.call(null,p1__27584_SHARP_,c_27591),s,c_27591);
});})(c_27591,___$1))
,self__.vertices,(self__.id * (9)));

return ___$1;
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$get_prop$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),k)){
return self__.id;
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,k);
}
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),k)){
self__.id = v;
} else {
thi.ng.xerror.core.illegal_arg_BANG_.call(null,k);
}

return ___$1;
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var num = (self__.id * (9));
var acc = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var i = (0);
while(true){
if((i < num)){
var G__27592 = cljs.core.conj_BANG_.call(null,acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__27593 = (i + (3));
acc = G__27592;
i = G__27593;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.gl.glmesh.add_face_STAR_.call(null,___$1,f);
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (___$1){
return (function (p1__27585_SHARP_){
return thi.ng.math.core._PLUS__BANG_.call(null,p1__27585_SHARP_,t);
});})(___$1))
,self__.vertices,(self__.id * (9)));

return ___$1;
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.center.call(null,___$1,thi.ng.geom.vector.vec3.call(null));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.translate.call(null,___$1,thi.ng.math.core._.call(null,o,thi.ng.geom.core.centroid.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.centroid.call(null,thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.gl.glmesh.gl_mesh.call(null,((self__.vertices.length / (9)) | (0)),self__.attribs);
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.id = (0);

return ___$1;
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_box.call(null,cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(2),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__27587){
var self__ = this;
var map__27588 = p__27587;
var map__27588__$1 = ((((!((map__27588 == null)))?((((map__27588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);
var opts = map__27588__$1;
var attribs__$1 = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__27590 = cljs.core.PersistentArrayMap.fromArray([cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)], true, false);
var G__27590__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.call(null,G__27590,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__27590);
var G__27590__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.call(null,G__27590__$1,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__27590__$1);
var G__27590__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.call(null,G__27590__$2,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__27590__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.call(null,G__27590__$3,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__27590__$3;
}
})(),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(function (){var or__20022__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return (self__.id * (3));
}
})(),new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles)], null);
});

thi.ng.geom.gl.glmesh.GLMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cols","cols",-274269768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$type = true;

thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$ctorStr = "thi.ng.geom.gl.glmesh/GLMesh";

thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"thi.ng.geom.gl.glmesh/GLMesh");
});

thi.ng.geom.gl.glmesh.__GT_GLMesh = (function thi$ng$geom$gl$glmesh$__GT_GLMesh(vertices,fnormals,vnormals,uvs,cols,id,attribs){
return (new thi.ng.geom.gl.glmesh.GLMesh(vertices,fnormals,vnormals,uvs,cols,id,attribs));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.IFaceAccess}
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {thi.ng.geom.core.IMutableProps}
 * @implements {thi.ng.geom.core.ICenter}
 * @implements {thi.ng.geom.gl.core.IGLConvert}
 * @implements {thi.ng.geom.core.IBounds}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.geom.core.IBoundingSphere}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {thi.ng.geom.core.IGeomContainer}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.gl.glmesh.IndexedGLMesh = (function (vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid){
this.vertices = vertices;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.uvs = uvs;
this.cols = cols;
this.indices = indices;
this.attribs = attribs;
this.index = index;
this.id = id;
this.fid = fid;
})
thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var self__ = this;
var ___$1 = this;
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (___$1){
return (function (p1__27597_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,tx,p1__27597_SHARP_);
});})(___$1))
,self__.vertices,(self__.id * (3)));

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
if((m instanceof thi.ng.geom.gl.glmesh.IndexedGLMesh)){
return thi.ng.geom.gl.glmesh.into_iglmesh_STAR_.call(null,___$1,m);
} else {
return thi.ng.geom.utils.into_mesh.call(null,___$1,thi.ng.geom.gl.glmesh.add_face_indexed_STAR_,m);
}
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (___$1){
return (function (p1__27594_SHARP_){
return thi.ng.math.core._STAR__BANG_.call(null,p1__27594_SHARP_,s);
});})(___$1))
,self__.vertices,(self__.id * (3)));

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_27605 = thi.ng.geom.core.centroid.call(null,___$1);
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (c_27605,___$1){
return (function (p1__27595_SHARP_){
return thi.ng.math.core.madd_BANG_.call(null,thi.ng.math.core.__BANG_.call(null,p1__27595_SHARP_,c_27605),s,c_27605);
});})(c_27605,___$1))
,self__.vertices,(self__.id * (3)));

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$get_prop$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__27598 = (((cljs.core.keyword.call(null,k) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,k).fqn:null);
switch (G__27598) {
case "id":
return self__.id;

break;
case "fid":
return self__.fid;

break;
case "index":
return self__.index;

break;
default:
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,k);

}
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var G__27599_27607 = (((cljs.core.keyword.call(null,k) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,k).fqn:null);
switch (G__27599_27607) {
case "id":
self__.id = v;

break;
case "fid":
self__.fid = v;

break;
case "index":
self__.index = v;

break;
default:
thi.ng.xerror.core.illegal_arg_BANG_.call(null,k);

}

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3 = (function (_,k,f){
var self__ = this;
var ___$1 = this;
var G__27600_27609 = (((cljs.core.keyword.call(null,k) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,k).fqn:null);
switch (G__27600_27609) {
case "id":
self__.id = f.call(null,self__.id);

break;
case "fid":
self__.fid = f.call(null,self__.fid);

break;
case "index":
self__.index = f.call(null,self__.index);

break;
default:
thi.ng.xerror.core.illegal_arg_BANG_.call(null,k);

}

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var num = (self__.id * (3));
var acc = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var i = (0);
while(true){
if((i < num)){
var G__27611 = cljs.core.conj_BANG_.call(null,acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__27612 = (i + (3));
acc = G__27611;
i = G__27612;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.call(null,___$1,f);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (___$1){
return (function (p1__27596_SHARP_){
return thi.ng.math.core._PLUS__BANG_.call(null,p1__27596_SHARP_,t);
});})(___$1))
,self__.vertices,(self__.id * (3)));

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.center.call(null,___$1,thi.ng.geom.vector.vec3.call(null));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.translate.call(null,___$1,thi.ng.math.core._.call(null,o,thi.ng.geom.core.centroid.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.centroid.call(null,thi.ng.geom.core.vertices.call(null,___$1));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.call(null,((self__.vertices.length / (9)) | (0)),self__.attribs);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.id = (0);

self__.fid = (0);

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_box.call(null,cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(0),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(1),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range.call(null,(2),cljs.core.seq.call(null,thi.ng.geom.core.vertices.call(null,___$1)));
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__27601){
var self__ = this;
var map__27602 = p__27601;
var map__27602__$1 = ((((!((map__27602 == null)))?((((map__27602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27602):map__27602);
var opts = map__27602__$1;
var attribs__$1 = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__27604 = cljs.core.PersistentArrayMap.fromArray([cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)], true, false);
var G__27604__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.call(null,G__27604,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__27604);
var G__27604__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.call(null,G__27604__$1,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__27604__$1);
var G__27604__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.call(null,G__27604__$2,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__27604__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.call(null,G__27604__$3,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__27604__$3;
}
})(),new cljs.core.Keyword(null,"indices","indices",-1218138343),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),self__.indices], null),new cljs.core.Keyword(null,"num-items","num-items",-887909266),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"num-items","num-items",-887909266),self__.fid),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),self__.id,new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles)], null);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cols","cols",-274269768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"indices","indices",422393184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Uint16Array","js/Uint16Array",-221456844,null)], null)),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fid","fid",639980196,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$type = true;

thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorStr = "thi.ng.geom.gl.glmesh/IndexedGLMesh";

thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"thi.ng.geom.gl.glmesh/IndexedGLMesh");
});

thi.ng.geom.gl.glmesh.__GT_IndexedGLMesh = (function thi$ng$geom$gl$glmesh$__GT_IndexedGLMesh(vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid){
return (new thi.ng.geom.gl.glmesh.IndexedGLMesh(vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid));
});

/**
 * Builds a fixed size mesh with given face count & attribs (a set of
 *   #{:fnorm :vnorm :uv :col}). All attributes (incl. vertices) are
 *   stored directly in typed array buffers.
 */
thi.ng.geom.gl.glmesh.gl_mesh = (function thi$ng$geom$gl$glmesh$gl_mesh(var_args){
var args27613 = [];
var len__21238__auto___27616 = arguments.length;
var i__21239__auto___27617 = (0);
while(true){
if((i__21239__auto___27617 < len__21238__auto___27616)){
args27613.push((arguments[i__21239__auto___27617]));

var G__27618 = (i__21239__auto___27617 + (1));
i__21239__auto___27617 = G__27618;
continue;
} else {
}
break;
}

var G__27615 = args27613.length;
switch (G__27615) {
case 1:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27613.length)].join('')));

}
});

thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1 = (function (numf){
return thi.ng.geom.gl.glmesh.gl_mesh.call(null,numf,null);
});

thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2 = (function (numf,attribs){
return (new thi.ng.geom.gl.glmesh.GLMesh(thi.ng.typedarrays.core.float32.call(null,(numf * (9))),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408)))?thi.ng.typedarrays.core.float32.call(null,(numf * (9))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)))?thi.ng.typedarrays.core.float32.call(null,(numf * (9))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)))?thi.ng.typedarrays.core.float32.call(null,(numf * (6))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"col","col",-1959363084)))?thi.ng.typedarrays.core.float32.call(null,(numf * (12))):null),(0),attribs));
});

thi.ng.geom.gl.glmesh.gl_mesh.cljs$lang$maxFixedArity = 2;

/**
 * Builds a fixed size, indexed mesh with given face count & optional
 *   attribs (a set of #{:fnorm :vnorm :uv :col}). All attributes (incl.
 *   vertices) are stored directly in typed array buffers. Internally
 *   builds index of unique vertices (position + attribs) and re-uses
 *   indices where possible.
 */
thi.ng.geom.gl.glmesh.indexed_gl_mesh = (function thi$ng$geom$gl$glmesh$indexed_gl_mesh(var_args){
var args27620 = [];
var len__21238__auto___27623 = arguments.length;
var i__21239__auto___27624 = (0);
while(true){
if((i__21239__auto___27624 < len__21238__auto___27623)){
args27620.push((arguments[i__21239__auto___27624]));

var G__27625 = (i__21239__auto___27624 + (1));
i__21239__auto___27624 = G__27625;
continue;
} else {
}
break;
}

var G__27622 = args27620.length;
switch (G__27622) {
case 1:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27620.length)].join('')));

}
});

thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1 = (function (numf){
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.call(null,numf,null);
});

thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2 = (function (numf,attribs){
return (new thi.ng.geom.gl.glmesh.IndexedGLMesh(thi.ng.typedarrays.core.float32.call(null,(numf * (9))),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408)))?thi.ng.typedarrays.core.float32.call(null,(numf * (9))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)))?thi.ng.typedarrays.core.float32.call(null,(numf * (9))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)))?thi.ng.typedarrays.core.float32.call(null,(numf * (6))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"col","col",-1959363084)))?thi.ng.typedarrays.core.float32.call(null,(numf * (12))):null),thi.ng.typedarrays.core.uint16.call(null,(numf * (3))),attribs,cljs.core.PersistentArrayMap.EMPTY,(0),(0)));
});

thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$lang$maxFixedArity = 2;

thi.ng.geom.gl.glmesh.add_face_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_STAR_(m,p__27628){
var vec__27632 = p__27628;
var verts = cljs.core.nth.call(null,vec__27632,(0),null);
var attribs = cljs.core.nth.call(null,vec__27632,(1),null);
var f = vec__27632;
if((cljs.core.count.call(null,verts) > (3))){
cljs.core.run_BANG_.call(null,((function (vec__27632,verts,attribs,f){
return (function (p1__27627_SHARP_){
return thi.ng.geom.gl.glmesh.add_face_STAR_.call(null,m,p1__27627_SHARP_);
});})(vec__27632,verts,attribs,f))
,thi.ng.geom.utils.tessellate_face.call(null,thi.ng.geom.utils.tessellate_with_first).call(null,f));
} else {
var vertices_27635 = m.vertices;
var fnormals_27636 = m.fnormals;
var vnormals_27637 = m.vnormals;
var uvs_27638 = m.uvs;
var cols_27639 = m.cols;
var id_27640 = m.id;
var idv_27641 = (id_27640 * (9));
var iduv_27642 = (id_27640 * (6));
var idcol_27643 = (id_27640 * (12));
vertices_27635.set(cljs.core.first.call(null,verts).buf,idv_27641);

vertices_27635.set(cljs.core.nth.call(null,verts,(1)).buf,(idv_27641 + (3)));

vertices_27635.set(cljs.core.nth.call(null,verts,(2)).buf,(idv_27641 + (6)));

if(cljs.core.truth_(fnormals_27636)){
var n_27644 = (function (){var or__20022__auto__ = cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.call(null,verts);
}
})();
var nb_27645 = n_27644.buf;
fnormals_27636.set(nb_27645,idv_27641);

fnormals_27636.set(nb_27645,(idv_27641 + (3)));

fnormals_27636.set(nb_27645,(idv_27641 + (6)));
} else {
}

var temp__5720__auto___27646 = (cljs.core.truth_(vnormals_27637)?cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)):null);
if(cljs.core.truth_(temp__5720__auto___27646)){
var vn_27647 = temp__5720__auto___27646;
vnormals_27637.set(cljs.core.first.call(null,vn_27647).buf,idv_27641);

vnormals_27637.set(cljs.core.nth.call(null,vn_27647,(1)).buf,(idv_27641 + (3)));

vnormals_27637.set(cljs.core.nth.call(null,vn_27647,(2)).buf,(idv_27641 + (6)));
} else {
}

var temp__5720__auto___27648 = (cljs.core.truth_(uvs_27638)?cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)):null);
if(cljs.core.truth_(temp__5720__auto___27648)){
var uv_27649 = temp__5720__auto___27648;
uvs_27638.set(cljs.core.first.call(null,uv_27649).buf,iduv_27642);

uvs_27638.set(cljs.core.nth.call(null,uv_27649,(1)).buf,(iduv_27642 + (2)));

uvs_27638.set(cljs.core.nth.call(null,uv_27649,(2)).buf,(iduv_27642 + (4)));
} else {
}

var temp__5720__auto___27650 = (cljs.core.truth_(cols_27639)?cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"col","col",-1959363084)):null);
if(cljs.core.truth_(temp__5720__auto___27650)){
var col_27651 = temp__5720__auto___27650;
thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.nth.call(null,col_27651,(2)),cols_27639,(4),thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.nth.call(null,col_27651,(1)),cols_27639,(4),thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.first.call(null,col_27651),cols_27639,(4),idcol_27643)));
} else {
}

m.id = (id_27640 + (1));
}

return m;
});
thi.ng.geom.gl.glmesh.index_vertex_STAR_ = (function thi$ng$geom$gl$glmesh$index_vertex_STAR_(m,va,vertices,fnormals,vnormals,cols,uvs){
var or__20022__auto__ = cljs.core.get.call(null,thi.ng.geom.core.get_prop.call(null,m,new cljs.core.Keyword(null,"index","index",-1531685915)),va);
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
var index = m.index;
var id = m.id;
var idv = (id * (3));
var vec__27655 = va;
var v = cljs.core.nth.call(null,vec__27655,(0),null);
var fn = cljs.core.nth.call(null,vec__27655,(1),null);
var vn = cljs.core.nth.call(null,vec__27655,(2),null);
var col = cljs.core.nth.call(null,vec__27655,(3),null);
var uv = cljs.core.nth.call(null,vec__27655,(4),null);
vertices.set(v.buf,idv);

if(cljs.core.truth_((cljs.core.truth_(fnormals)?fn:null))){
fnormals.set(fn.buf,idv);
} else {
if(cljs.core.truth_((cljs.core.truth_(vnormals)?vn:null))){
vnormals.set(vn.buf,idv);
} else {
}
}

if(cljs.core.truth_((cljs.core.truth_(cols)?col:null))){
thi.ng.dstruct.streams.into_float_buffer.call(null,col,cols,(4),(id * (4)));
} else {
}

if(cljs.core.truth_((cljs.core.truth_(uvs)?uv:null))){
uvs.set(uv.buf,(id * (2)));
} else {
}

m.index = cljs.core.assoc.call(null,index,va,id);

m.id = (id + (1));

return id;
}
});
thi.ng.geom.gl.glmesh.add_face_indexed_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_indexed_STAR_(m,p__27659){
var vec__27665 = p__27659;
var verts = cljs.core.nth.call(null,vec__27665,(0),null);
var attribs = cljs.core.nth.call(null,vec__27665,(1),null);
var f = vec__27665;
if((cljs.core.count.call(null,verts) > (3))){
cljs.core.run_BANG_.call(null,((function (vec__27665,verts,attribs,f){
return (function (p1__27658_SHARP_){
return thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.call(null,m,p1__27658_SHARP_);
});})(vec__27665,verts,attribs,f))
,thi.ng.geom.utils.tessellate_face.call(null,thi.ng.geom.utils.tessellate_with_first).call(null,f));
} else {
var vertices_27670 = m.vertices;
var fnormals_27671 = m.fnormals;
var vnormals_27672 = m.vnormals;
var uvs_27673 = m.uvs;
var cols_27674 = m.cols;
var indices_27675 = m.indices;
var fid_27676 = m.fid;
var map__27668_27677 = attribs;
var map__27668_27678__$1 = ((((!((map__27668_27677 == null)))?((((map__27668_27677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27668_27677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27668_27677):map__27668_27677);
var vnorm_27679 = cljs.core.get.call(null,map__27668_27678__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302));
var uv_27680 = cljs.core.get.call(null,map__27668_27678__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var col_27681 = cljs.core.get.call(null,map__27668_27678__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var fnorm_27682 = (cljs.core.truth_(fnormals_27671)?(function (){var or__20022__auto__ = cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.call(null,verts);
}
})():null);
(indices_27675[fid_27676] = thi.ng.geom.gl.glmesh.index_vertex_STAR_.call(null,m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,verts,(0)),fnorm_27682,cljs.core.nth.call(null,vnorm_27679,(0),null),cljs.core.nth.call(null,col_27681,(0),null),cljs.core.nth.call(null,uv_27680,(0),null)], null),vertices_27670,fnormals_27671,vnormals_27672,cols_27674,uvs_27673));

(indices_27675[(fid_27676 + (1))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_.call(null,m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,verts,(1)),fnorm_27682,cljs.core.nth.call(null,vnorm_27679,(1),null),cljs.core.nth.call(null,col_27681,(1),null),cljs.core.nth.call(null,uv_27680,(1),null)], null),vertices_27670,fnormals_27671,vnormals_27672,cols_27674,uvs_27673));

(indices_27675[(fid_27676 + (2))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_.call(null,m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,verts,(2)),fnorm_27682,cljs.core.nth.call(null,vnorm_27679,(2),null),cljs.core.nth.call(null,col_27681,(2),null),cljs.core.nth.call(null,uv_27680,(2),null)], null),vertices_27670,fnormals_27671,vnormals_27672,cols_27674,uvs_27673));

m.fid = (fid_27676 + (3));
}

return m;
});
thi.ng.geom.gl.glmesh.transform_vertices = (function thi$ng$geom$gl$glmesh$transform_vertices(f,buf,num){
var tv = thi.ng.geom.vector.vec3.call(null,(0));
var tb = tv.buf;
var i = (0);
while(true){
if((i < num)){
tb.set(buf.slice(i,(i + (3))),(0));

buf.set(f.call(null,tv).buf,i);

var G__27683 = (i + (3));
i = G__27683;
continue;
} else {
return null;
}
break;
}
});
thi.ng.geom.gl.glmesh.into_glmesh_STAR_ = (function thi$ng$geom$gl$glmesh$into_glmesh_STAR_(dest,src){
var map__27688 = src;
var map__27688__$1 = ((((!((map__27688 == null)))?((((map__27688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27688):map__27688);
var sverts = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var sfn = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var svn = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var scol = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var suv = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__27689 = dest;
var map__27689__$1 = ((((!((map__27689 == null)))?((((map__27689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27689):map__27689);
var dverts = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfn = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dvn = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dcol = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var duv = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var did = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sidv = (sid * (9));
var didv = (did * (9));
dverts.set(sverts.slice((0),sidv),didv);

if(cljs.core.truth_((cljs.core.truth_(dfn)?sfn:null))){
dfn.set(sfn.slice((0),sidv),didv);
} else {
}

if(cljs.core.truth_((cljs.core.truth_(dvn)?svn:null))){
dvn.set(svn.slice((0),sidv),didv);
} else {
}

if(cljs.core.truth_((cljs.core.truth_(dcol)?scol:null))){
dcol.set(scol.slice((0),(sid * (12))),(did * (12)));
} else {
}

if(cljs.core.truth_((cljs.core.truth_(duv)?suv:null))){
duv.set(suv.slice((0),(sid * (6))),(did * (6)));
} else {
}

dest.id = (did + sid);

return dest;
});
thi.ng.geom.gl.glmesh.build_rindex = (function thi$ng$geom$gl$glmesh$build_rindex(dindex,sindex,start){
return cljs.core.reduce_kv.call(null,(function (p__27696,v,id){
var vec__27697 = p__27696;
var idx = cljs.core.nth.call(null,vec__27697,(0),null);
var nid = cljs.core.nth.call(null,vec__27697,(1),null);
var s = vec__27697;
if(cljs.core.truth_(cljs.core.get.call(null,dindex,v))){
return s;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.call(null,idx,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,v], null)),(nid + (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),start], null),sindex);
});
thi.ng.geom.gl.glmesh.merge_index = (function thi$ng$geom$gl$glmesh$merge_index(dindex,rindex){
return cljs.core.into.call(null,dindex,cljs.core.map.call(null,(function (kv){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,cljs.core.val.call(null,kv)),cljs.core.key.call(null,kv)], null);
})),rindex);
});
thi.ng.geom.gl.glmesh.into_iglmesh_STAR_ = (function thi$ng$geom$gl$glmesh$into_iglmesh_STAR_(dest,src){
var map__27707 = src;
var map__27707__$1 = ((((!((map__27707 == null)))?((((map__27707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27707):map__27707);
var suv = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sfid = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var sfn = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var sidx = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var svn = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var sindex = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var scol = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var sverts = cljs.core.get.call(null,map__27707__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var map__27708 = dest;
var map__27708__$1 = ((((!((map__27708 == null)))?((((map__27708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);
var didx = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var dverts = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfid = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var dvn = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dindex = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var dfn = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dcol = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var did = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var duv = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var vec__27709 = thi.ng.geom.gl.glmesh.build_rindex.call(null,dindex,sindex,did);
var rindex = cljs.core.nth.call(null,vec__27709,(0),null);
var did_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27709,(1),null);
var dindex__$1 = thi.ng.geom.gl.glmesh.merge_index.call(null,dindex,cljs.core.persistent_BANG_.call(null,rindex));
var sidv = sfid;
var fn_QMARK_ = (cljs.core.truth_(dfn)?sfn:null);
var vn_QMARK_ = (cljs.core.truth_(dvn)?svn:null);
var col_QMARK_ = (cljs.core.truth_(dcol)?scol:null);
var uv_QMARK_ = (cljs.core.truth_(duv)?suv:null);
var i_27714 = (0);
while(true){
if((i_27714 < sidv)){
var temp__5718__auto___27715 = cljs.core.first.call(null,cljs.core.get.call(null,rindex,(sidx[i_27714])));
if(cljs.core.truth_(temp__5718__auto___27715)){
var nid_27716 = temp__5718__auto___27715;
var sid_27717__$1 = (sidx[i_27714]);
var sidv_27718__$1 = (sid_27717__$1 * (3));
var didv_27719 = (nid_27716 * (3));
var sidcol_27720 = (sid_27717__$1 * (4));
var siduv_27721 = (sid_27717__$1 * (2));
(didx[(dfid + i_27714)] = nid_27716);

dverts.set(sverts.slice(sidv_27718__$1,(sidv_27718__$1 + (3))),didv_27719);

if(cljs.core.truth_(fn_QMARK_)){
dfn.set(sfn.slice(sidv_27718__$1,(sidv_27718__$1 + (3))),didv_27719);
} else {
}

if(cljs.core.truth_(vn_QMARK_)){
dvn.set(svn.slice(sidv_27718__$1,(sidv_27718__$1 + (3))),didv_27719);
} else {
}

if(cljs.core.truth_(col_QMARK_)){
dcol.set(scol.slice(sidcol_27720,(sidcol_27720 + (4))),(nid_27716 * (4)));
} else {
}

if(cljs.core.truth_(uv_QMARK_)){
duv.set(suv.slice(siduv_27721,(siduv_27721 + (2))),(nid_27716 * (2)));
} else {
}
} else {
(didx[(dfid + i_27714)] = (sidx[i_27714]));
}

var G__27722 = (i_27714 + (1));
i_27714 = G__27722;
continue;
} else {
}
break;
}

dest.index = dindex__$1;

dest.id = did_SINGLEQUOTE_;

dest.fid = (dfid + sfid);

return dest;
});

//# sourceMappingURL=glmesh.js.map