// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.meshface');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
thi.ng.geom.meshface.xf_face_verts = (function thi$ng$geom$meshface$xf_face_verts(mesh){
return cljs.core.map.call(null,(function (p1__32730_SHARP_){
return cljs.core.first.call(null,thi.ng.geom.core.raw.call(null,p1__32730_SHARP_,mesh));
}));
});

/**
* @constructor
 * @implements {thi.ng.geom.core.IAttributeAccess}
 * @implements {thi.ng.geom.meshface.Object}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.geom.core.IRawAccess}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.meshface.MeshFace = (function (vertices,_hash){
this.vertices = vertices;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 2048;
})
thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.vertices;
});

thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return self__.vertices;
});

thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IAttributeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IAttributeAccess$attribs$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
});

thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IRawAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IRawAccess$raw$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.vertices], null);
});

thi.ng.geom.meshface.MeshFace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str(self__.vertices),cljs.core.str("]")].join('');
});

thi.ng.geom.meshface.MeshFace.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__19807__auto__ = self__._hash;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return self__._hash = cljs.core.hash.call(null,self__.vertices);
}
});

thi.ng.geom.meshface.MeshFace.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core.compare.call(null,self__.vertices,o.vertices);
});

thi.ng.geom.meshface.MeshFace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.geom.meshface.MeshFace.cljs$lang$type = true;

thi.ng.geom.meshface.MeshFace.cljs$lang$ctorStr = "thi.ng.geom.meshface/MeshFace";

thi.ng.geom.meshface.MeshFace.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.meshface/MeshFace");
});

thi.ng.geom.meshface.__GT_MeshFace = (function thi$ng$geom$meshface$__GT_MeshFace(vertices,_hash){
return (new thi.ng.geom.meshface.MeshFace(vertices,_hash));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.IAttributeAccess}
 * @implements {thi.ng.geom.meshface.Object}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.geom.core.IRawAccess}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.meshface.IndexedMeshFace = (function (vertices,attribs,_hash){
this.vertices = vertices;
this.attribs = attribs;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 2048;
})
thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (_,mesh){
var self__ = this;
var ___$1 = this;
var idx = new cljs.core.Keyword(null,"id->v","id->v",1642967604).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(mesh));
return cljs.core.mapv.call(null,((function (idx,___$1){
return (function (p1__32731_SHARP_){
return cljs.core.get.call(null,idx,p1__32731_SHARP_);
});})(idx,___$1))
,self__.vertices);
});

thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IAttributeAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IAttributeAccess$attribs$arity$2 = (function (_,mesh){
var self__ = this;
var ___$1 = this;
var mattr = cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
return cljs.core.reduce_kv.call(null,((function (mattr,___$1){
return (function (acc,k,v){
var idx = cljs.core.get.call(null,cljs.core.get.call(null,mattr,k),new cljs.core.Keyword(null,"id->v","id->v",1642967604));
return cljs.core.assoc.call(null,acc,k,((cljs.core.sequential_QMARK_.call(null,v))?cljs.core.mapv.call(null,((function (idx,mattr,___$1){
return (function (p1__32732_SHARP_){
return cljs.core.get.call(null,idx,p1__32732_SHARP_);
});})(idx,mattr,___$1))
,v):cljs.core.get.call(null,idx,v)));
});})(mattr,___$1))
,cljs.core.PersistentArrayMap.EMPTY,self__.attribs);
});

thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IAttributeAccess$attribs$arity$3 = (function (_,mesh,attr){
var self__ = this;
var ___$1 = this;
var idx = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,mesh,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),attr),new cljs.core.Keyword(null,"id->v","id->v",1642967604));
var aval = self__.attribs.call(null,attr);
if(cljs.core.sequential_QMARK_.call(null,aval)){
return cljs.core.mapv.call(null,idx,self__.attribs);
} else {
return idx.call(null,aval);
}
});

thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IRawAccess$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IRawAccess$raw$arity$2 = (function (_,mesh){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vertices.call(null,___$1,mesh),thi.ng.geom.core.attribs.call(null,___$1,mesh)], null);
});

thi.ng.geom.meshface.IndexedMeshFace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str(self__.vertices),cljs.core.str(" "),cljs.core.str(self__.attribs),cljs.core.str("]")].join('');
});

thi.ng.geom.meshface.IndexedMeshFace.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__19807__auto__ = self__._hash;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return self__._hash = ((cljs.core.imul.call(null,cljs.core.hash.call(null,self__.vertices),(31)) + cljs.core.hash.call(null,self__.attribs)) | (0));
}
});

thi.ng.geom.meshface.IndexedMeshFace.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
var c = cljs.core.compare.call(null,self__.vertices,o.vertices);
if((c === (0))){
return cljs.core.compare.call(null,self__.attribs,o.attribs);
} else {
return c;
}
});

thi.ng.geom.meshface.IndexedMeshFace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.geom.meshface.IndexedMeshFace.cljs$lang$type = true;

thi.ng.geom.meshface.IndexedMeshFace.cljs$lang$ctorStr = "thi.ng.geom.meshface/IndexedMeshFace";

thi.ng.geom.meshface.IndexedMeshFace.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.geom.meshface/IndexedMeshFace");
});

thi.ng.geom.meshface.__GT_IndexedMeshFace = (function thi$ng$geom$meshface$__GT_IndexedMeshFace(vertices,attribs,_hash){
return (new thi.ng.geom.meshface.IndexedMeshFace(vertices,attribs,_hash));
});


//# sourceMappingURL=meshface.js.map