// Compiled by ClojureScript 1.9.293 {:target :nodejs}
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

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k32846,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__32848 = (((k32846 instanceof cljs.core.Keyword))?k32846.fqn:null);
switch (G__32848) {
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
return cljs.core.get.call(null,self__.__extmap,k32846,else__20480__auto__);

}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteTexture(self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.gl.buffers.Texture2D{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32845){
var self__ = this;
var G__32845__$1 = this;
return (new cljs.core.RecordIter((0),G__32845__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IConfigure$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IConfigure$configure$arity$2 = (function (_,p__32849){
var self__ = this;
var map__32850 = p__32849;
var map__32850__$1 = ((((!((map__32850 == null)))?((((map__32850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32850):map__32850);
var config = map__32850__$1;
var pixels = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"pixels","pixels",-40523077));
var height = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var format = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgb);
var wrap = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var flip = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"flip","flip",2033871302));
var width = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var type = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.unsigned_byte);
var filter = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var premultiply = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"premultiply","premultiply",1801768564));
var image = cljs.core.get.call(null,map__32850__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var ___$1 = this;
if(cljs.core.truth_(filter)){
var vec__32852_32862 = ((cljs.core.sequential_QMARK_.call(null,filter))?filter:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter,filter], null));
var min_32863 = cljs.core.nth.call(null,vec__32852_32862,(0),null);
var mag_32864 = cljs.core.nth.call(null,vec__32852_32862,(1),null);
self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_min_filter,min_32863);

self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_mag_filter,mag_32864);
} else {
}

if(cljs.core.truth_(wrap)){
var vec__32855_32865 = ((cljs.core.sequential_QMARK_.call(null,wrap))?wrap:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,wrap], null));
var ws_32866 = cljs.core.nth.call(null,vec__32855_32865,(0),null);
var wt_32867 = cljs.core.nth.call(null,vec__32855_32865,(1),null);
self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_wrap_s,ws_32866);

self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_wrap_t,wt_32867);
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
if(cljs.core.truth_((function (){var and__19795__auto__ = width;
if(cljs.core.truth_(and__19795__auto__)){
return height;
} else {
return and__19795__auto__;
}
})())){
self__.gl.texImage2D(self__.target,(0),format,width,height,(0),format,type,pixels);
} else {
}
}

return ___$1;
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__32845){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__32858 = cljs.core.keyword_identical_QMARK_;
var expr__32859 = k__20485__auto__;
if(cljs.core.truth_(pred__32858.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__32859))){
return (new thi.ng.geom.gl.buffers.Texture2D(G__32845,self__.id,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32858.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__32859))){
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,G__32845,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32858.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__32859))){
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,G__32845,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__32845),null));
}
}
}
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__32845){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,G__32845,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.gl.buffers.Texture2D.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

thi.ng.geom.gl.buffers.Texture2D.cljs$lang$type = true;

thi.ng.geom.gl.buffers.Texture2D.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.gl.buffers/Texture2D");
});

thi.ng.geom.gl.buffers.Texture2D.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.gl.buffers/Texture2D");
});

thi.ng.geom.gl.buffers.__GT_Texture2D = (function thi$ng$geom$gl$buffers$__GT_Texture2D(gl,id,target){
return (new thi.ng.geom.gl.buffers.Texture2D(gl,id,target,null,null,null));
});

thi.ng.geom.gl.buffers.map__GT_Texture2D = (function thi$ng$geom$gl$buffers$map__GT_Texture2D(G__32847){
return (new thi.ng.geom.gl.buffers.Texture2D(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__32847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__32847),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__32847),null,cljs.core.dissoc.call(null,G__32847,new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"target","target",253001721)),null));
});

thi.ng.geom.gl.buffers.make_texture = (function thi$ng$geom$gl$buffers$make_texture(gl,opts){
var tex = (new thi.ng.geom.gl.buffers.Texture2D(gl,gl.createTexture(),opts.call(null,new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.texture_2d),null,null,null));
var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgba,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.unsigned_byte], null),opts);
thi.ng.geom.gl.core.bind.call(null,tex);

return thi.ng.geom.gl.core.configure.call(null,tex,opts__$1);
});
thi.ng.geom.gl.buffers.make_canvas_texture = (function thi$ng$geom$gl$buffers$make_canvas_texture(var_args){
var args32868 = [];
var len__21023__auto___32871 = arguments.length;
var i__21024__auto___32872 = (0);
while(true){
if((i__21024__auto___32872 < len__21023__auto___32871)){
args32868.push((arguments[i__21024__auto___32872]));

var G__32873 = (i__21024__auto___32872 + (1));
i__21024__auto___32872 = G__32873;
continue;
} else {
}
break;
}

var G__32870 = args32868.length;
switch (G__32870) {
case 2:
return thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32868.length)].join('')));

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
var G__32876_32877 = tex;
thi.ng.geom.gl.core.bind.call(null,G__32876_32877);

thi.ng.geom.gl.core.configure.call(null,G__32876_32877,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flip","flip",2033871302),false,new cljs.core.Keyword(null,"image","image",-58725096),img], null),opts));


var temp__5720__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"callback","callback",-705136228));
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
return cb.call(null,tex,img);
} else {
return null;
}
});})(tex,img))
;

var temp__5720__auto___32878 = new cljs.core.Keyword(null,"error-callback","error-callback",-695698903).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto___32878)){
var ecb_32879 = temp__5720__auto___32878;
img.onerror = ecb_32879;
} else {
}

var temp__5720__auto___32880 = new cljs.core.Keyword(null,"cors","cors",1066181665).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto___32880)){
var cors_32881 = temp__5720__auto___32880;
img.crossOrigin = cors_32881;
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

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k32883,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__32885 = (((k32883 instanceof cljs.core.Keyword))?k32883.fqn:null);
switch (G__32885) {
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
return cljs.core.get.call(null,self__.__extmap,k32883,else__20480__auto__);

}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteRenderbuffer(self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.gl.buffers.RenderBuffer{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format","format",-1306924766),self__.format],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32882){
var self__ = this;
var G__32882__$1 = this;
return (new cljs.core.RecordIter((0),G__32882__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IConfigure$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IConfigure$configure$arity$2 = (function (_,p__32886){
var self__ = this;
var map__32887 = p__32886;
var map__32887__$1 = ((((!((map__32887 == null)))?((((map__32887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32887):map__32887);
var format__$1 = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var width__$1 = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ___$1 = this;
thi.ng.geom.gl.core.bind.call(null,___$1);

self__.gl.renderbufferStorage(thi.ng.geom.gl.webgl.constants.renderbuffer,format__$1,width__$1,height__$1);

thi.ng.geom.gl.core.unbind.call(null,___$1);

return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,format__$1,width__$1,height__$1,null,null,null));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__32882){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__32889 = cljs.core.keyword_identical_QMARK_;
var expr__32890 = k__20485__auto__;
if(cljs.core.truth_(pred__32889.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__32890))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(G__32882,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32889.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__32890))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,G__32882,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32889.call(null,new cljs.core.Keyword(null,"format","format",-1306924766),expr__32890))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,G__32882,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32889.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__32890))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,G__32882,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32889.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__32890))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,G__32882,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__32882),null));
}
}
}
}
}
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format","format",-1306924766),self__.format],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__32882){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,G__32882,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.gl.buffers.RenderBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"format","format",333606761,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null);
});

thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$type = true;

thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.gl.buffers/RenderBuffer");
});

thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.gl.buffers/RenderBuffer");
});

thi.ng.geom.gl.buffers.__GT_RenderBuffer = (function thi$ng$geom$gl$buffers$__GT_RenderBuffer(gl,id,format,width,height){
return (new thi.ng.geom.gl.buffers.RenderBuffer(gl,id,format,width,height,null,null,null));
});

thi.ng.geom.gl.buffers.map__GT_RenderBuffer = (function thi$ng$geom$gl$buffers$map__GT_RenderBuffer(G__32884){
return (new thi.ng.geom.gl.buffers.RenderBuffer(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__32884),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__32884),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(G__32884),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__32884),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__32884),null,cljs.core.dissoc.call(null,G__32884,new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)),null));
});

thi.ng.geom.gl.buffers.make_render_buffer = (function thi$ng$geom$gl$buffers$make_render_buffer(var_args){
var args32893 = [];
var len__21023__auto___32896 = arguments.length;
var i__21024__auto___32897 = (0);
while(true){
if((i__21024__auto___32897 < len__21023__auto___32896)){
args32893.push((arguments[i__21024__auto___32897]));

var G__32898 = (i__21024__auto___32897 + (1));
i__21024__auto___32897 = G__32898;
continue;
} else {
}
break;
}

var G__32895 = args32893.length;
switch (G__32895) {
case 1:
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32893.length)].join('')));

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
var args32900 = [];
var len__21023__auto___32903 = arguments.length;
var i__21024__auto___32904 = (0);
while(true){
if((i__21024__auto___32904 < len__21023__auto___32903)){
args32900.push((arguments[i__21024__auto___32904]));

var G__32905 = (i__21024__auto___32904 + (1));
i__21024__auto___32904 = G__32905;
continue;
} else {
}
break;
}

var G__32902 = args32900.length;
switch (G__32902) {
case 2:
return thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32900.length)].join('')));

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

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k32908,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__32910 = (((k32908 instanceof cljs.core.Keyword))?k32908.fqn:null);
switch (G__32910) {
case "gl":
return self__.gl;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32908,else__20480__auto__);

}
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteFramebuffer(self__.id);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.gl.buffers.FBO{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32907){
var self__ = this;
var G__32907__$1 = this;
return (new cljs.core.RecordIter((0),G__32907__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2 = (function (_,p__32911){
var self__ = this;
var map__32912 = p__32911;
var map__32912__$1 = ((((!((map__32912 == null)))?((((map__32912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32912):map__32912);
var id__$1 = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
self__.gl.framebufferTexture2D(thi.ng.geom.gl.webgl.constants.framebuffer,thi.ng.geom.gl.webgl.constants.color_attachment0,thi.ng.geom.gl.webgl.constants.texture_2d,id__$1,(0));

thi.ng.geom.gl.buffers.check_fbo.call(null,self__.gl);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2 = (function (_,p__32914){
var self__ = this;
var map__32915 = p__32914;
var map__32915__$1 = ((((!((map__32915 == null)))?((((map__32915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32915):map__32915);
var id__$1 = cljs.core.get.call(null,map__32915__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
self__.gl.framebufferRenderbuffer(thi.ng.geom.gl.webgl.constants.framebuffer,thi.ng.geom.gl.webgl.constants.depth_attachment,thi.ng.geom.gl.webgl.constants.renderbuffer,id__$1);

thi.ng.geom.gl.buffers.check_fbo.call(null,self__.gl);

return ___$1;
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__32907){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__32917 = cljs.core.keyword_identical_QMARK_;
var expr__32918 = k__20485__auto__;
if(cljs.core.truth_(pred__32917.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__32918))){
return (new thi.ng.geom.gl.buffers.FBO(G__32907,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32917.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__32918))){
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,G__32907,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__32907),null));
}
}
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__32907){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,G__32907,self__.__extmap,self__.__hash));
});

thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.gl.buffers.FBO.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

thi.ng.geom.gl.buffers.FBO.cljs$lang$type = true;

thi.ng.geom.gl.buffers.FBO.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.gl.buffers/FBO");
});

thi.ng.geom.gl.buffers.FBO.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.gl.buffers/FBO");
});

thi.ng.geom.gl.buffers.__GT_FBO = (function thi$ng$geom$gl$buffers$__GT_FBO(gl,id){
return (new thi.ng.geom.gl.buffers.FBO(gl,id,null,null,null));
});

thi.ng.geom.gl.buffers.map__GT_FBO = (function thi$ng$geom$gl$buffers$map__GT_FBO(G__32909){
return (new thi.ng.geom.gl.buffers.FBO(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__32909),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__32909),null,cljs.core.dissoc.call(null,G__32909,new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});

thi.ng.geom.gl.buffers.check_fbo = (function thi$ng$geom$gl$buffers$check_fbo(gl){
var pred__32924 = cljs.core._EQ__EQ_;
var expr__32925 = gl.checkFramebufferStatus(thi.ng.geom.gl.webgl.constants.framebuffer);
if(cljs.core.truth_(pred__32924.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_unsupported,expr__32925))){
return thi.ng.xerror.core.throw_BANG_.call(null,"FBO unsupported");
} else {
if(cljs.core.truth_(pred__32924.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_attachment,expr__32925))){
return thi.ng.xerror.core.throw_BANG_.call(null,"FBO incomplete attachment");
} else {
if(cljs.core.truth_(pred__32924.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_dimensions,expr__32925))){
return thi.ng.xerror.core.throw_BANG_.call(null,"FBO incomplete dimensions");
} else {
if(cljs.core.truth_(pred__32924.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_missing_attachment,expr__32925))){
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
thi.ng.geom.gl.buffers.make_fbo_with_attachments = (function thi$ng$geom$gl$buffers$make_fbo_with_attachments(gl,p__32927){
var map__32930 = p__32927;
var map__32930__$1 = ((((!((map__32930 == null)))?((((map__32930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32930):map__32930);
var tex = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var width = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var depth_QMARK_ = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"depth?","depth?",1481823261));
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