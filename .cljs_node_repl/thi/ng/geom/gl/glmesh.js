// Compiled by ClojureScript 1.9.293 {:target :nodejs}
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
return (function (p1__33405_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,tx,p1__33405_SHARP_);
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
return (function (p1__33402_SHARP_){
return thi.ng.math.core._STAR__BANG_.call(null,p1__33402_SHARP_,s);
});})(___$1))
,self__.vertices,(self__.id * (9)));

return ___$1;
});

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_33410 = thi.ng.geom.core.centroid.call(null,___$1);
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (c_33410,___$1){
return (function (p1__33403_SHARP_){
return thi.ng.math.core.madd_BANG_.call(null,thi.ng.math.core.__BANG_.call(null,p1__33403_SHARP_,c_33410),s,c_33410);
});})(c_33410,___$1))
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
var G__33411 = cljs.core.conj_BANG_.call(null,acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__33412 = (i + (3));
acc = G__33411;
i = G__33412;
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
return (function (p1__33404_SHARP_){
return thi.ng.math.core._PLUS__BANG_.call(null,p1__33404_SHARP_,t);
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

thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__33406){
var self__ = this;
var map__33407 = p__33406;
var map__33407__$1 = ((((!((map__33407 == null)))?((((map__33407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33407):map__33407);
var opts = map__33407__$1;
var attribs__$1 = cljs.core.get.call(null,map__33407__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__33409 = cljs.core.PersistentArrayMap.fromArray([cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)], true, false);
var G__33409__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.call(null,G__33409,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__33409);
var G__33409__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.call(null,G__33409__$1,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__33409__$1);
var G__33409__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.call(null,G__33409__$2,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__33409__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.call(null,G__33409__$3,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__33409__$3;
}
})(),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(function (){var or__19807__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
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

thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.gl.glmesh/GLMesh");
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
return (function (p1__33416_SHARP_){
return thi.ng.geom.core.transform_vector.call(null,tx,p1__33416_SHARP_);
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
return (function (p1__33413_SHARP_){
return thi.ng.math.core._STAR__BANG_.call(null,p1__33413_SHARP_,s);
});})(___$1))
,self__.vertices,(self__.id * (3)));

return ___$1;
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_33424 = thi.ng.geom.core.centroid.call(null,___$1);
thi.ng.geom.gl.glmesh.transform_vertices.call(null,((function (c_33424,___$1){
return (function (p1__33414_SHARP_){
return thi.ng.math.core.madd_BANG_.call(null,thi.ng.math.core.__BANG_.call(null,p1__33414_SHARP_,c_33424),s,c_33424);
});})(c_33424,___$1))
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
var G__33417 = (((cljs.core.keyword.call(null,k) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,k).fqn:null);
switch (G__33417) {
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
var G__33418_33426 = (((cljs.core.keyword.call(null,k) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,k).fqn:null);
switch (G__33418_33426) {
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
var G__33419_33428 = (((cljs.core.keyword.call(null,k) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,k).fqn:null);
switch (G__33419_33428) {
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
var G__33430 = cljs.core.conj_BANG_.call(null,acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__33431 = (i + (3));
acc = G__33430;
i = G__33431;
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
return (function (p1__33415_SHARP_){
return thi.ng.math.core._PLUS__BANG_.call(null,p1__33415_SHARP_,t);
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

thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__33420){
var self__ = this;
var map__33421 = p__33420;
var map__33421__$1 = ((((!((map__33421 == null)))?((((map__33421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33421):map__33421);
var opts = map__33421__$1;
var attribs__$1 = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__33423 = cljs.core.PersistentArrayMap.fromArray([cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)], true, false);
var G__33423__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.call(null,G__33423,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__33423);
var G__33423__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.call(null,G__33423__$1,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__33423__$1);
var G__33423__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.call(null,G__33423__$2,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__33423__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.call(null,G__33423__$3,cljs.core.get.call(null,attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__33423__$3;
}
})(),new cljs.core.Keyword(null,"indices","indices",-1218138343),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),self__.indices], null),new cljs.core.Keyword(null,"num-items","num-items",-887909266),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"num-items","num-items",-887909266),self__.fid),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),self__.id,new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles)], null);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cols","cols",-274269768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"indices","indices",422393184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Uint16Array","js/Uint16Array",-221456844,null)], null)),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fid","fid",639980196,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$type = true;

thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorStr = "thi.ng.geom.gl.glmesh/IndexedGLMesh";

thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.gl.glmesh/IndexedGLMesh");
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
var args33432 = [];
var len__21023__auto___33435 = arguments.length;
var i__21024__auto___33436 = (0);
while(true){
if((i__21024__auto___33436 < len__21023__auto___33435)){
args33432.push((arguments[i__21024__auto___33436]));

var G__33437 = (i__21024__auto___33436 + (1));
i__21024__auto___33436 = G__33437;
continue;
} else {
}
break;
}

var G__33434 = args33432.length;
switch (G__33434) {
case 1:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33432.length)].join('')));

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
var args33439 = [];
var len__21023__auto___33442 = arguments.length;
var i__21024__auto___33443 = (0);
while(true){
if((i__21024__auto___33443 < len__21023__auto___33442)){
args33439.push((arguments[i__21024__auto___33443]));

var G__33444 = (i__21024__auto___33443 + (1));
i__21024__auto___33443 = G__33444;
continue;
} else {
}
break;
}

var G__33441 = args33439.length;
switch (G__33441) {
case 1:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33439.length)].join('')));

}
});

thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1 = (function (numf){
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.call(null,numf,null);
});

thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2 = (function (numf,attribs){
return (new thi.ng.geom.gl.glmesh.IndexedGLMesh(thi.ng.typedarrays.core.float32.call(null,(numf * (9))),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408)))?thi.ng.typedarrays.core.float32.call(null,(numf * (9))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)))?thi.ng.typedarrays.core.float32.call(null,(numf * (9))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)))?thi.ng.typedarrays.core.float32.call(null,(numf * (6))):null),(cljs.core.truth_(cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"col","col",-1959363084)))?thi.ng.typedarrays.core.float32.call(null,(numf * (12))):null),thi.ng.typedarrays.core.uint16.call(null,(numf * (3))),attribs,cljs.core.PersistentArrayMap.EMPTY,(0),(0)));
});

thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$lang$maxFixedArity = 2;

thi.ng.geom.gl.glmesh.add_face_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_STAR_(m,p__33447){
var vec__33451 = p__33447;
var verts = cljs.core.nth.call(null,vec__33451,(0),null);
var attribs = cljs.core.nth.call(null,vec__33451,(1),null);
var f = vec__33451;
if((cljs.core.count.call(null,verts) > (3))){
cljs.core.run_BANG_.call(null,((function (vec__33451,verts,attribs,f){
return (function (p1__33446_SHARP_){
return thi.ng.geom.gl.glmesh.add_face_STAR_.call(null,m,p1__33446_SHARP_);
});})(vec__33451,verts,attribs,f))
,thi.ng.geom.utils.tessellate_face.call(null,thi.ng.geom.utils.tessellate_with_first).call(null,f));
} else {
var vertices_33454 = m.vertices;
var fnormals_33455 = m.fnormals;
var vnormals_33456 = m.vnormals;
var uvs_33457 = m.uvs;
var cols_33458 = m.cols;
var id_33459 = m.id;
var idv_33460 = (id_33459 * (9));
var iduv_33461 = (id_33459 * (6));
var idcol_33462 = (id_33459 * (12));
vertices_33454.set(cljs.core.first.call(null,verts).buf,idv_33460);

vertices_33454.set(cljs.core.nth.call(null,verts,(1)).buf,(idv_33460 + (3)));

vertices_33454.set(cljs.core.nth.call(null,verts,(2)).buf,(idv_33460 + (6)));

if(cljs.core.truth_(fnormals_33455)){
var n_33463 = (function (){var or__19807__auto__ = cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.call(null,verts);
}
})();
var nb_33464 = n_33463.buf;
fnormals_33455.set(nb_33464,idv_33460);

fnormals_33455.set(nb_33464,(idv_33460 + (3)));

fnormals_33455.set(nb_33464,(idv_33460 + (6)));
} else {
}

var temp__5720__auto___33465 = (cljs.core.truth_(vnormals_33456)?cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)):null);
if(cljs.core.truth_(temp__5720__auto___33465)){
var vn_33466 = temp__5720__auto___33465;
vnormals_33456.set(cljs.core.first.call(null,vn_33466).buf,idv_33460);

vnormals_33456.set(cljs.core.nth.call(null,vn_33466,(1)).buf,(idv_33460 + (3)));

vnormals_33456.set(cljs.core.nth.call(null,vn_33466,(2)).buf,(idv_33460 + (6)));
} else {
}

var temp__5720__auto___33467 = (cljs.core.truth_(uvs_33457)?cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)):null);
if(cljs.core.truth_(temp__5720__auto___33467)){
var uv_33468 = temp__5720__auto___33467;
uvs_33457.set(cljs.core.first.call(null,uv_33468).buf,iduv_33461);

uvs_33457.set(cljs.core.nth.call(null,uv_33468,(1)).buf,(iduv_33461 + (2)));

uvs_33457.set(cljs.core.nth.call(null,uv_33468,(2)).buf,(iduv_33461 + (4)));
} else {
}

var temp__5720__auto___33469 = (cljs.core.truth_(cols_33458)?cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"col","col",-1959363084)):null);
if(cljs.core.truth_(temp__5720__auto___33469)){
var col_33470 = temp__5720__auto___33469;
thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.nth.call(null,col_33470,(2)),cols_33458,(4),thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.nth.call(null,col_33470,(1)),cols_33458,(4),thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.first.call(null,col_33470),cols_33458,(4),idcol_33462)));
} else {
}

m.id = (id_33459 + (1));
}

return m;
});
thi.ng.geom.gl.glmesh.index_vertex_STAR_ = (function thi$ng$geom$gl$glmesh$index_vertex_STAR_(m,va,vertices,fnormals,vnormals,cols,uvs){
var or__19807__auto__ = cljs.core.get.call(null,thi.ng.geom.core.get_prop.call(null,m,new cljs.core.Keyword(null,"index","index",-1531685915)),va);
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
var index = m.index;
var id = m.id;
var idv = (id * (3));
var vec__33474 = va;
var v = cljs.core.nth.call(null,vec__33474,(0),null);
var fn = cljs.core.nth.call(null,vec__33474,(1),null);
var vn = cljs.core.nth.call(null,vec__33474,(2),null);
var col = cljs.core.nth.call(null,vec__33474,(3),null);
var uv = cljs.core.nth.call(null,vec__33474,(4),null);
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
thi.ng.geom.gl.glmesh.add_face_indexed_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_indexed_STAR_(m,p__33478){
var vec__33484 = p__33478;
var verts = cljs.core.nth.call(null,vec__33484,(0),null);
var attribs = cljs.core.nth.call(null,vec__33484,(1),null);
var f = vec__33484;
if((cljs.core.count.call(null,verts) > (3))){
cljs.core.run_BANG_.call(null,((function (vec__33484,verts,attribs,f){
return (function (p1__33477_SHARP_){
return thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.call(null,m,p1__33477_SHARP_);
});})(vec__33484,verts,attribs,f))
,thi.ng.geom.utils.tessellate_face.call(null,thi.ng.geom.utils.tessellate_with_first).call(null,f));
} else {
var vertices_33489 = m.vertices;
var fnormals_33490 = m.fnormals;
var vnormals_33491 = m.vnormals;
var uvs_33492 = m.uvs;
var cols_33493 = m.cols;
var indices_33494 = m.indices;
var fid_33495 = m.fid;
var map__33487_33496 = attribs;
var map__33487_33497__$1 = ((((!((map__33487_33496 == null)))?((((map__33487_33496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33487_33496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33487_33496):map__33487_33496);
var vnorm_33498 = cljs.core.get.call(null,map__33487_33497__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302));
var uv_33499 = cljs.core.get.call(null,map__33487_33497__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var col_33500 = cljs.core.get.call(null,map__33487_33497__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var fnorm_33501 = (cljs.core.truth_(fnormals_33490)?(function (){var or__19807__auto__ = cljs.core.get.call(null,attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.call(null,verts);
}
})():null);
(indices_33494[fid_33495] = thi.ng.geom.gl.glmesh.index_vertex_STAR_.call(null,m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,verts,(0)),fnorm_33501,cljs.core.nth.call(null,vnorm_33498,(0),null),cljs.core.nth.call(null,col_33500,(0),null),cljs.core.nth.call(null,uv_33499,(0),null)], null),vertices_33489,fnormals_33490,vnormals_33491,cols_33493,uvs_33492));

(indices_33494[(fid_33495 + (1))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_.call(null,m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,verts,(1)),fnorm_33501,cljs.core.nth.call(null,vnorm_33498,(1),null),cljs.core.nth.call(null,col_33500,(1),null),cljs.core.nth.call(null,uv_33499,(1),null)], null),vertices_33489,fnormals_33490,vnormals_33491,cols_33493,uvs_33492));

(indices_33494[(fid_33495 + (2))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_.call(null,m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,verts,(2)),fnorm_33501,cljs.core.nth.call(null,vnorm_33498,(2),null),cljs.core.nth.call(null,col_33500,(2),null),cljs.core.nth.call(null,uv_33499,(2),null)], null),vertices_33489,fnormals_33490,vnormals_33491,cols_33493,uvs_33492));

m.fid = (fid_33495 + (3));
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

var G__33502 = (i + (3));
i = G__33502;
continue;
} else {
return null;
}
break;
}
});
thi.ng.geom.gl.glmesh.into_glmesh_STAR_ = (function thi$ng$geom$gl$glmesh$into_glmesh_STAR_(dest,src){
var map__33507 = src;
var map__33507__$1 = ((((!((map__33507 == null)))?((((map__33507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33507):map__33507);
var sverts = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var sfn = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var svn = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var scol = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var suv = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__33508 = dest;
var map__33508__$1 = ((((!((map__33508 == null)))?((((map__33508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33508):map__33508);
var dverts = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfn = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dvn = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dcol = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var duv = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var did = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
return cljs.core.reduce_kv.call(null,(function (p__33515,v,id){
var vec__33516 = p__33515;
var idx = cljs.core.nth.call(null,vec__33516,(0),null);
var nid = cljs.core.nth.call(null,vec__33516,(1),null);
var s = vec__33516;
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
var map__33526 = src;
var map__33526__$1 = ((((!((map__33526 == null)))?((((map__33526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33526):map__33526);
var suv = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sfid = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var sfn = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var sidx = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var svn = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var sindex = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var scol = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var sverts = cljs.core.get.call(null,map__33526__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var map__33527 = dest;
var map__33527__$1 = ((((!((map__33527 == null)))?((((map__33527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33527):map__33527);
var didx = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var dverts = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfid = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var dvn = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dindex = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var dfn = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dcol = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var did = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var duv = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var vec__33528 = thi.ng.geom.gl.glmesh.build_rindex.call(null,dindex,sindex,did);
var rindex = cljs.core.nth.call(null,vec__33528,(0),null);
var did_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__33528,(1),null);
var dindex__$1 = thi.ng.geom.gl.glmesh.merge_index.call(null,dindex,cljs.core.persistent_BANG_.call(null,rindex));
var sidv = sfid;
var fn_QMARK_ = (cljs.core.truth_(dfn)?sfn:null);
var vn_QMARK_ = (cljs.core.truth_(dvn)?svn:null);
var col_QMARK_ = (cljs.core.truth_(dcol)?scol:null);
var uv_QMARK_ = (cljs.core.truth_(duv)?suv:null);
var i_33533 = (0);
while(true){
if((i_33533 < sidv)){
var temp__5718__auto___33534 = cljs.core.first.call(null,cljs.core.get.call(null,rindex,(sidx[i_33533])));
if(cljs.core.truth_(temp__5718__auto___33534)){
var nid_33535 = temp__5718__auto___33534;
var sid_33536__$1 = (sidx[i_33533]);
var sidv_33537__$1 = (sid_33536__$1 * (3));
var didv_33538 = (nid_33535 * (3));
var sidcol_33539 = (sid_33536__$1 * (4));
var siduv_33540 = (sid_33536__$1 * (2));
(didx[(dfid + i_33533)] = nid_33535);

dverts.set(sverts.slice(sidv_33537__$1,(sidv_33537__$1 + (3))),didv_33538);

if(cljs.core.truth_(fn_QMARK_)){
dfn.set(sfn.slice(sidv_33537__$1,(sidv_33537__$1 + (3))),didv_33538);
} else {
}

if(cljs.core.truth_(vn_QMARK_)){
dvn.set(svn.slice(sidv_33537__$1,(sidv_33537__$1 + (3))),didv_33538);
} else {
}

if(cljs.core.truth_(col_QMARK_)){
dcol.set(scol.slice(sidcol_33539,(sidcol_33539 + (4))),(nid_33535 * (4)));
} else {
}

if(cljs.core.truth_(uv_QMARK_)){
duv.set(suv.slice(siduv_33540,(siduv_33540 + (2))),(nid_33535 * (2)));
} else {
}
} else {
(didx[(dfid + i_33533)] = (sidx[i_33533]));
}

var G__33541 = (i_33533 + (1));
i_33533 = G__33541;
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