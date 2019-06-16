// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.gl.buffers');
goog.require('cljs.core');
goog.require('thi.ng.geom.gl.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.gl.webgl.constants');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {thi.ng.geom.gl.core.IConfigure}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.gl.core.IRelease}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.gl.core.IBind}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.gl.buffers.Texture2D = (function (gl,id,target,__meta,__extmap,__hash){
this.gl = gl;
this.id = id;
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$bind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.gl.core.bind.call(null,___$1,(0));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$bind$arity$2 = (function (_,unit){
var self__ = this;
var ___$1 = this;
self__.gl.activeTexture((thi.ng.geom.gl.webgl.constants.texture0 + unit));

self__.gl.bindTexture(self__.target,self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.gl.core.unbind.call(null,___$1,(0));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$2 = (function (_,unit){
var self__ = this;
var ___$1 = this;
self__.gl.activeTexture((thi.ng.geom.gl.webgl.constants.texture0 + unit));

self__.gl.bindTexture(self__.target,null);

return ___$1;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k27027,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__27029 = (((k27027 instanceof cljs.core.Keyword))?k27027.fqn:null);
switch (G__27029) {
case "gl":
return self__.gl;

break;
case "id":
return self__.id;

break;
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27027,else__20695__auto__);

}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteTexture(self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.gl.buffers.Texture2D{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27026){
var self__ = this;
var G__27026__$1 = this;
return (new cljs.core.RecordIter((0),G__27026__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
var self__ = this;
var this__20687__auto____$1 = this;
var h__20459__auto__ = self__.__hash;
if(!((h__20459__auto__ == null))){
return h__20459__auto__;
} else {
var h__20459__auto____$1 = cljs.core.hash_imap.call(null,this__20687__auto____$1);
self__.__hash = h__20459__auto____$1;

return h__20459__auto____$1;
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
var self__ = this;
var this__20688__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20010__auto__ = other__20689__auto__;
if(cljs.core.truth_(and__20010__auto__)){
var and__20010__auto____$1 = (this__20688__auto____$1.constructor === other__20689__auto__.constructor);
if(and__20010__auto____$1){
return cljs.core.equiv_map.call(null,this__20688__auto____$1,other__20689__auto__);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IConfigure$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IConfigure$configure$arity$2 = (function (_,p__27030){
var self__ = this;
var map__27031 = p__27030;
var map__27031__$1 = ((((!((map__27031 == null)))?((((map__27031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27031):map__27031);
var config = map__27031__$1;
var pixels = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"pixels","pixels",-40523077));
var height = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var format = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgb);
var wrap = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var flip = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"flip","flip",2033871302));
var width = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var type = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.unsigned_byte);
var filter = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var premultiply = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"premultiply","premultiply",1801768564));
var image = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var ___$1 = this;
if(cljs.core.truth_(filter)){
var vec__27033_27043 = ((cljs.core.sequential_QMARK_.call(null,filter))?filter:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter,filter], null));
var min_27044 = cljs.core.nth.call(null,vec__27033_27043,(0),null);
var mag_27045 = cljs.core.nth.call(null,vec__27033_27043,(1),null);
self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_min_filter,min_27044);

self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_mag_filter,mag_27045);
} else {
}

if(cljs.core.truth_(wrap)){
var vec__27036_27046 = ((cljs.core.sequential_QMARK_.call(null,wrap))?wrap:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,wrap], null));
var ws_27047 = cljs.core.nth.call(null,vec__27036_27046,(0),null);
var wt_27048 = cljs.core.nth.call(null,vec__27036_27046,(1),null);
self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_wrap_s,ws_27047);

self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_wrap_t,wt_27048);
} else {
}

if(!((flip == null))){
self__.gl.pixelStorei(thi.ng.geom.gl.webgl.constants.unpack_flip_y_webgl,flip);
} else {
}

if(!((premultiply == null))){
self__.gl.pixelStorei(thi.ng.geom.gl.webgl.constants.unpack_premultiply_alpha_webgl,premultiply);
} else {
}

if(cljs.core.truth_(image)){
self__.gl.texImage2D(self__.target,(0),format,format,type,image);
} else {
if(cljs.core.truth_((function (){var and__20010__auto__ = width;
if(cljs.core.truth_(and__20010__auto__)){
return height;
} else {
return and__20010__auto__;
}
})())){
self__.gl.texImage2D(self__.target,(0),format,width,height,(0),format,type,pixels);
} else {
}
}

return ___$1;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__27026){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__27039 = cljs.core.keyword_identical_QMARK_;
var expr__27040 = k__20700__auto__;
if(cljs.core.truth_(pred__27039.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__27040))){
return (new thi.ng.geom.gl.buffers.Texture2D(G__27026,self__.id,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27039.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__27040))){
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,G__27026,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27039.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__27040))){
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,G__27026,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__27026),null));
}
}
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__27026){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,G__27026,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.gl.buffers.Texture2D.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

thi.ng.geom.gl.buffers.Texture2D.cljs$lang$type = true;

thi.ng.geom.gl.buffers.Texture2D.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.gl.buffers/Texture2D");
});

thi.ng.geom.gl.buffers.Texture2D.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.gl.buffers/Texture2D");
});

thi.ng.geom.gl.buffers.__GT_Texture2D = (function thi$ng$geom$gl$buffers$__GT_Texture2D(gl,id,target){
return (new thi.ng.geom.gl.buffers.Texture2D(gl,id,target,null,null,null));
});

thi.ng.geom.gl.buffers.map__GT_Texture2D = (function thi$ng$geom$gl$buffers$map__GT_Texture2D(G__27028){
return (new thi.ng.geom.gl.buffers.Texture2D(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__27028),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__27028),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__27028),null,cljs.core.dissoc.call(null,G__27028,new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"target","target",253001721)),null));
});

thi.ng.geom.gl.buffers.make_texture = (function thi$ng$geom$gl$buffers$make_texture(gl,opts){
var tex = (new thi.ng.geom.gl.buffers.Texture2D(gl,gl.createTexture(),opts.call(null,new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.texture_2d),null,null,null));
var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgba,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.unsigned_byte], null),opts);
thi.ng.geom.gl.core.bind.call(null,tex);

return thi.ng.geom.gl.core.configure.call(null,tex,opts__$1);
});
thi.ng.geom.gl.buffers.make_canvas_texture = (function thi$ng$geom$gl$buffers$make_canvas_texture(var_args){
var args27049 = [];
var len__21238__auto___27052 = arguments.length;
var i__21239__auto___27053 = (0);
while(true){
if((i__21239__auto___27053 < len__21238__auto___27052)){
args27049.push((arguments[i__21239__auto___27053]));

var G__27054 = (i__21239__auto___27053 + (1));
i__21239__auto___27053 = G__27054;
continue;
} else {
}
break;
}

var G__27051 = args27049.length;
switch (G__27051) {
case 2:
return thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27049.length)].join('')));

}
});

thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$2 = (function (gl,canvas){
return thi.ng.geom.gl.buffers.make_canvas_texture.call(null,gl,canvas,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$3 = (function (gl,canvas,opts){
return thi.ng.geom.gl.buffers.make_texture.call(null,gl,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"image","image",-58725096),canvas,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.linear,thi.ng.geom.gl.webgl.constants.linear], null),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.clamp_to_edge,thi.ng.geom.gl.webgl.constants.clamp_to_edge], null),new cljs.core.Keyword(null,"flip","flip",2033871302),false,new cljs.core.Keyword(null,"premultiply","premultiply",1801768564),true], null),opts));
});

thi.ng.geom.gl.buffers.make_canvas_texture.cljs$lang$maxFixedArity = 3;

thi.ng.geom.gl.buffers.load_texture = (function thi$ng$geom$gl$buffers$load_texture(gl,opts){
var tex = thi.ng.geom.gl.buffers.make_texture.call(null,gl,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgba,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.linear,thi.ng.geom.gl.webgl.constants.linear], null),new cljs.core.Keyword(null,"wrap","wrap",851669987),thi.ng.geom.gl.webgl.constants.clamp_to_edge], null),opts));
var img = (new Image());
img.onload = ((function (tex,img){
return (function (){
var G__27057_27058 = tex;
thi.ng.geom.gl.core.bind.call(null,G__27057_27058);

thi.ng.geom.gl.core.configure.call(null,G__27057_27058,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flip","flip",2033871302),false,new cljs.core.Keyword(null,"image","image",-58725096),img], null),opts));


var temp__5720__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"callback","callback",-705136228));
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
return cb.call(null,tex,img);
} else {
return null;
}
});})(tex,img))
;

var temp__5720__auto___27059 = new cljs.core.Keyword(null,"error-callback","error-callback",-695698903).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto___27059)){
var ecb_27060 = temp__5720__auto___27059;
img.onerror = ecb_27060;
} else {
}

var temp__5720__auto___27061 = new cljs.core.Keyword(null,"cors","cors",1066181665).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto___27061)){
var cors_27062 = temp__5720__auto___27061;
img.crossOrigin = cors_27062;
} else {
}

img.src = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"src","src",-1651076051));

return tex;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {thi.ng.geom.gl.core.IConfigure}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.gl.core.IRelease}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.gl.core.IBind}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.gl.buffers.RenderBuffer = (function (gl,id,format,width,height,__meta,__extmap,__hash){
this.gl = gl;
this.id = id;
this.format = format;
this.width = width;
this.height = height;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$bind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindRenderbuffer(thi.ng.geom.gl.webgl.constants.renderbuffer,self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$bind$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindRenderbuffer(thi.ng.geom.gl.webgl.constants.renderbuffer,null);

return ___$1;
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k27064,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__27066 = (((k27064 instanceof cljs.core.Keyword))?k27064.fqn:null);
switch (G__27066) {
case "gl":
return self__.gl;

break;
case "id":
return self__.id;

break;
case "format":
return self__.format;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27064,else__20695__auto__);

}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteRenderbuffer(self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.gl.buffers.RenderBuffer{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format","format",-1306924766),self__.format],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27063){
var self__ = this;
var G__27063__$1 = this;
return (new cljs.core.RecordIter((0),G__27063__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
var self__ = this;
var this__20687__auto____$1 = this;
var h__20459__auto__ = self__.__hash;
if(!((h__20459__auto__ == null))){
return h__20459__auto__;
} else {
var h__20459__auto____$1 = cljs.core.hash_imap.call(null,this__20687__auto____$1);
self__.__hash = h__20459__auto____$1;

return h__20459__auto____$1;
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
var self__ = this;
var this__20688__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20010__auto__ = other__20689__auto__;
if(cljs.core.truth_(and__20010__auto__)){
var and__20010__auto____$1 = (this__20688__auto____$1.constructor === other__20689__auto__.constructor);
if(and__20010__auto____$1){
return cljs.core.equiv_map.call(null,this__20688__auto____$1,other__20689__auto__);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IConfigure$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IConfigure$configure$arity$2 = (function (_,p__27067){
var self__ = this;
var map__27068 = p__27067;
var map__27068__$1 = ((((!((map__27068 == null)))?((((map__27068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27068):map__27068);
var format__$1 = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var width__$1 = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__27068__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ___$1 = this;
thi.ng.geom.gl.core.bind.call(null,___$1);

self__.gl.renderbufferStorage(thi.ng.geom.gl.webgl.constants.renderbuffer,format__$1,width__$1,height__$1);

thi.ng.geom.gl.core.unbind.call(null,___$1);

return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,format__$1,width__$1,height__$1,null,null,null));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__27063){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__27070 = cljs.core.keyword_identical_QMARK_;
var expr__27071 = k__20700__auto__;
if(cljs.core.truth_(pred__27070.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__27071))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(G__27063,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27070.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__27071))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,G__27063,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27070.call(null,new cljs.core.Keyword(null,"format","format",-1306924766),expr__27071))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,G__27063,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27070.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__27071))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,G__27063,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27070.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__27071))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,G__27063,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__27063),null));
}
}
}
}
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format","format",-1306924766),self__.format],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__27063){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,G__27063,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.gl.buffers.RenderBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"format","format",333606761,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null);
});

thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$type = true;

thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.gl.buffers/RenderBuffer");
});

thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.gl.buffers/RenderBuffer");
});

thi.ng.geom.gl.buffers.__GT_RenderBuffer = (function thi$ng$geom$gl$buffers$__GT_RenderBuffer(gl,id,format,width,height){
return (new thi.ng.geom.gl.buffers.RenderBuffer(gl,id,format,width,height,null,null,null));
});

thi.ng.geom.gl.buffers.map__GT_RenderBuffer = (function thi$ng$geom$gl$buffers$map__GT_RenderBuffer(G__27065){
return (new thi.ng.geom.gl.buffers.RenderBuffer(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__27065),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__27065),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(G__27065),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__27065),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__27065),null,cljs.core.dissoc.call(null,G__27065,new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)),null));
});

thi.ng.geom.gl.buffers.make_render_buffer = (function thi$ng$geom$gl$buffers$make_render_buffer(var_args){
var args27074 = [];
var len__21238__auto___27077 = arguments.length;
var i__21239__auto___27078 = (0);
while(true){
if((i__21239__auto___27078 < len__21238__auto___27077)){
args27074.push((arguments[i__21239__auto___27078]));

var G__27079 = (i__21239__auto___27078 + (1));
i__21239__auto___27078 = G__27079;
continue;
} else {
}
break;
}

var G__27076 = args27074.length;
switch (G__27076) {
case 1:
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27074.length)].join('')));

}
});

thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$1 = (function (gl){
return thi.ng.geom.gl.buffers.make_render_buffer.call(null,gl,null);
});

thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,opts){
var buf = (new thi.ng.geom.gl.buffers.RenderBuffer(gl,gl.createRenderbuffer(),null,null,null,null,null,null));
if(cljs.core.truth_(opts)){
return thi.ng.geom.gl.core.configure.call(null,buf,opts);
} else {
return buf;
}
});

thi.ng.geom.gl.buffers.make_render_buffer.cljs$lang$maxFixedArity = 2;

thi.ng.geom.gl.buffers.make_depth_buffer = (function thi$ng$geom$gl$buffers$make_depth_buffer(var_args){
var args27081 = [];
var len__21238__auto___27084 = arguments.length;
var i__21239__auto___27085 = (0);
while(true){
if((i__21239__auto___27085 < len__21238__auto___27084)){
args27081.push((arguments[i__21239__auto___27085]));

var G__27086 = (i__21239__auto___27085 + (1));
i__21239__auto___27085 = G__27086;
continue;
} else {
}
break;
}

var G__27083 = args27081.length;
switch (G__27083) {
case 2:
return thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27081.length)].join('')));

}
});

thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,size){
return thi.ng.geom.gl.buffers.make_depth_buffer.call(null,gl,size,size);
});

thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$3 = (function (gl,width,height){
return thi.ng.geom.gl.buffers.make_render_buffer.call(null,gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.depth_component16,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
});

thi.ng.geom.gl.buffers.make_depth_buffer.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.gl.core.IRelease}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.gl.core.IFramebuffer}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.gl.core.IBind}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.gl.buffers.FBO = (function (gl,id,__meta,__extmap,__hash){
this.gl = gl;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$bind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindFramebuffer(thi.ng.geom.gl.webgl.constants.framebuffer,self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$bind$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return thi.ng.xerror.core.unsupported_BANG_.call(null);
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindFramebuffer(thi.ng.geom.gl.webgl.constants.framebuffer,null);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k27089,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__27091 = (((k27089 instanceof cljs.core.Keyword))?k27089.fqn:null);
switch (G__27091) {
case "gl":
return self__.gl;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27089,else__20695__auto__);

}
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteFramebuffer(self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.gl.buffers.FBO{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27088){
var self__ = this;
var G__27088__$1 = this;
return (new cljs.core.RecordIter((0),G__27088__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2 = (function (_,p__27092){
var self__ = this;
var map__27093 = p__27092;
var map__27093__$1 = ((((!((map__27093 == null)))?((((map__27093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27093):map__27093);
var id__$1 = cljs.core.get.call(null,map__27093__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
self__.gl.framebufferTexture2D(thi.ng.geom.gl.webgl.constants.framebuffer,thi.ng.geom.gl.webgl.constants.color_attachment0,thi.ng.geom.gl.webgl.constants.texture_2d,id__$1,(0));

thi.ng.geom.gl.buffers.check_fbo.call(null,self__.gl);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2 = (function (_,p__27095){
var self__ = this;
var map__27096 = p__27095;
var map__27096__$1 = ((((!((map__27096 == null)))?((((map__27096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27096):map__27096);
var id__$1 = cljs.core.get.call(null,map__27096__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
self__.gl.framebufferRenderbuffer(thi.ng.geom.gl.webgl.constants.framebuffer,thi.ng.geom.gl.webgl.constants.depth_attachment,thi.ng.geom.gl.webgl.constants.renderbuffer,id__$1);

thi.ng.geom.gl.buffers.check_fbo.call(null,self__.gl);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
var self__ = this;
var this__20687__auto____$1 = this;
var h__20459__auto__ = self__.__hash;
if(!((h__20459__auto__ == null))){
return h__20459__auto__;
} else {
var h__20459__auto____$1 = cljs.core.hash_imap.call(null,this__20687__auto____$1);
self__.__hash = h__20459__auto____$1;

return h__20459__auto____$1;
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
var self__ = this;
var this__20688__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20010__auto__ = other__20689__auto__;
if(cljs.core.truth_(and__20010__auto__)){
var and__20010__auto____$1 = (this__20688__auto____$1.constructor === other__20689__auto__.constructor);
if(and__20010__auto____$1){
return cljs.core.equiv_map.call(null,this__20688__auto____$1,other__20689__auto__);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__27088){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__27098 = cljs.core.keyword_identical_QMARK_;
var expr__27099 = k__20700__auto__;
if(cljs.core.truth_(pred__27098.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__27099))){
return (new thi.ng.geom.gl.buffers.FBO(G__27088,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27098.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__27099))){
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,G__27088,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__27088),null));
}
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__27088){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,G__27088,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.gl.buffers.FBO.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

thi.ng.geom.gl.buffers.FBO.cljs$lang$type = true;

thi.ng.geom.gl.buffers.FBO.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.gl.buffers/FBO");
});

thi.ng.geom.gl.buffers.FBO.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.gl.buffers/FBO");
});

thi.ng.geom.gl.buffers.__GT_FBO = (function thi$ng$geom$gl$buffers$__GT_FBO(gl,id){
return (new thi.ng.geom.gl.buffers.FBO(gl,id,null,null,null));
});

thi.ng.geom.gl.buffers.map__GT_FBO = (function thi$ng$geom$gl$buffers$map__GT_FBO(G__27090){
return (new thi.ng.geom.gl.buffers.FBO(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__27090),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__27090),null,cljs.core.dissoc.call(null,G__27090,new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});

thi.ng.geom.gl.buffers.check_fbo = (function thi$ng$geom$gl$buffers$check_fbo(gl){
var pred__27105 = cljs.core._EQ__EQ_;
var expr__27106 = gl.checkFramebufferStatus(thi.ng.geom.gl.webgl.constants.framebuffer);
if(cljs.core.truth_(pred__27105.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_unsupported,expr__27106))){
return thi.ng.xerror.core.throw_BANG_.call(null,"FBO unsupported");
} else {
if(cljs.core.truth_(pred__27105.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_attachment,expr__27106))){
return thi.ng.xerror.core.throw_BANG_.call(null,"FBO incomplete attachment");
} else {
if(cljs.core.truth_(pred__27105.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_dimensions,expr__27106))){
return thi.ng.xerror.core.throw_BANG_.call(null,"FBO incomplete dimensions");
} else {
if(cljs.core.truth_(pred__27105.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_missing_attachment,expr__27106))){
return thi.ng.xerror.core.throw_BANG_.call(null,"FBO incomplete missing attachment");
} else {
return gl;
}
}
}
}
});
thi.ng.geom.gl.buffers.make_fbo = (function thi$ng$geom$gl$buffers$make_fbo(gl){
return (new thi.ng.geom.gl.buffers.FBO(gl,gl.createFramebuffer(),null,null,null));
});
thi.ng.geom.gl.buffers.make_fbo_with_attachments = (function thi$ng$geom$gl$buffers$make_fbo_with_attachments(gl,p__27108){
var map__27111 = p__27108;
var map__27111__$1 = ((((!((map__27111 == null)))?((((map__27111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27111):map__27111);
var tex = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var width = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var depth_QMARK_ = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"depth?","depth?",1481823261));
var fbo = thi.ng.geom.gl.buffers.make_fbo.call(null,gl);
thi.ng.geom.gl.core.bind.call(null,fbo);

thi.ng.geom.gl.core.set_fbo_color_texture.call(null,fbo,tex);

if(cljs.core.truth_(depth_QMARK_)){
thi.ng.geom.gl.core.set_fbo_depth_buffer.call(null,fbo,thi.ng.geom.gl.buffers.make_depth_buffer.call(null,gl,width,height));
} else {
}

return thi.ng.geom.gl.core.unbind.call(null,fbo);
});

//# sourceMappingURL=buffers.js.map