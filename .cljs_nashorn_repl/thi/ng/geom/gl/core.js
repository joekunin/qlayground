// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.gl.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.gl.shaders');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.rect');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gl.webgl.constants');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.typedarrays.core');

/**
 * @interface
 */
thi.ng.geom.gl.core.IGLConvert = function(){};

thi.ng.geom.gl.core.as_gl_buffer_spec = (function thi$ng$geom$gl$core$as_gl_buffer_spec(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 == null)))){
return _.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2(_,opts);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.as_gl_buffer_spec[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,opts);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.as_gl_buffer_spec["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IGLConvert.as-gl-buffer-spec",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IRelease = function(){};

thi.ng.geom.gl.core.release = (function thi$ng$geom$gl$core$release(_){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IRelease$release$arity$1 == null)))){
return _.thi$ng$geom$gl$core$IRelease$release$arity$1(_);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.release[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.release["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IRelease.release",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IBind = function(){};

thi.ng.geom.gl.core.bind = (function thi$ng$geom$gl$core$bind(var_args){
var args27115 = [];
var len__21238__auto___27121 = arguments.length;
var i__21239__auto___27122 = (0);
while(true){
if((i__21239__auto___27122 < len__21238__auto___27121)){
args27115.push((arguments[i__21239__auto___27122]));

var G__27123 = (i__21239__auto___27122 + (1));
i__21239__auto___27122 = G__27123;
continue;
} else {
}
break;
}

var G__27117 = args27115.length;
switch (G__27117) {
case 1:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27115.length)].join('')));

}
});

thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IBind$bind$arity$1 == null)))){
return _.thi$ng$geom$gl$core$IBind$bind$arity$1(_);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.bind["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBind.bind",_);
}
}
}
});

thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IBind$bind$arity$2 == null)))){
return _.thi$ng$geom$gl$core$IBind$bind$arity$2(_,opts);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,opts);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.bind["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IBind.bind",_);
}
}
}
});

thi.ng.geom.gl.core.bind.cljs$lang$maxFixedArity = 2;


thi.ng.geom.gl.core.unbind = (function thi$ng$geom$gl$core$unbind(var_args){
var args27118 = [];
var len__21238__auto___27125 = arguments.length;
var i__21239__auto___27126 = (0);
while(true){
if((i__21239__auto___27126 < len__21238__auto___27125)){
args27118.push((arguments[i__21239__auto___27126]));

var G__27127 = (i__21239__auto___27126 + (1));
i__21239__auto___27126 = G__27127;
continue;
} else {
}
break;
}

var G__27120 = args27118.length;
switch (G__27120) {
case 1:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27118.length)].join('')));

}
});

thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IBind$unbind$arity$1 == null)))){
return _.thi$ng$geom$gl$core$IBind$unbind$arity$1(_);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.unbind["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBind.unbind",_);
}
}
}
});

thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IBind$unbind$arity$2 == null)))){
return _.thi$ng$geom$gl$core$IBind$unbind$arity$2(_,opts);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,opts);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.unbind["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IBind.unbind",_);
}
}
}
});

thi.ng.geom.gl.core.unbind.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.gl.core.IConfigure = function(){};

thi.ng.geom.gl.core.configure = (function thi$ng$geom$gl$core$configure(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IConfigure$configure$arity$2 == null)))){
return _.thi$ng$geom$gl$core$IConfigure$configure$arity$2(_,opts);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.configure[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,opts);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.configure["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IConfigure.configure",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.ITexture = function(){};

thi.ng.geom.gl.core.set_texture_filter = (function thi$ng$geom$gl$core$set_texture_filter(_,min,mag){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$ITexture$set_texture_filter$arity$3 == null)))){
return _.thi$ng$geom$gl$core$ITexture$set_texture_filter$arity$3(_,min,mag);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.set_texture_filter[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,min,mag);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.set_texture_filter["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,min,mag);
} else {
throw cljs.core.missing_protocol.call(null,"ITexture.set-texture-filter",_);
}
}
}
});

thi.ng.geom.gl.core.set_texture_wrap = (function thi$ng$geom$gl$core$set_texture_wrap(_,wrap_s,wrap_t){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$ITexture$set_texture_wrap$arity$3 == null)))){
return _.thi$ng$geom$gl$core$ITexture$set_texture_wrap$arity$3(_,wrap_s,wrap_t);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.set_texture_wrap[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,wrap_s,wrap_t);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.set_texture_wrap["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,wrap_s,wrap_t);
} else {
throw cljs.core.missing_protocol.call(null,"ITexture.set-texture-wrap",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IFramebuffer = function(){};

thi.ng.geom.gl.core.set_fbo_color_texture = (function thi$ng$geom$gl$core$set_fbo_color_texture(_,tex){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2 == null)))){
return _.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2(_,tex);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.set_fbo_color_texture[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,tex);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.set_fbo_color_texture["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,tex);
} else {
throw cljs.core.missing_protocol.call(null,"IFramebuffer.set-fbo-color-texture",_);
}
}
}
});

thi.ng.geom.gl.core.set_fbo_depth_buffer = (function thi$ng$geom$gl$core$set_fbo_depth_buffer(_,depth_buffer){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2 == null)))){
return _.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2(_,depth_buffer);
} else {
var x__20735__auto__ = (((_ == null))?null:_);
var m__20736__auto__ = (thi.ng.geom.gl.core.set_fbo_depth_buffer[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,_,depth_buffer);
} else {
var m__20736__auto____$1 = (thi.ng.geom.gl.core.set_fbo_depth_buffer["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,_,depth_buffer);
} else {
throw cljs.core.missing_protocol.call(null,"IFramebuffer.set-fbo-depth-buffer",_);
}
}
}
});

thi.ng.geom.gl.core.zero_fill_coll = (function thi$ng$geom$gl$core$zero_fill_coll(coll,stride){
var len = cljs.core.count.call(null,coll);
if((len < stride)){
return cljs.core.take.call(null,stride,cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,(0))));
} else {
if((len > stride)){
return cljs.core.take.call(null,stride,coll);
} else {
return coll;

}
}
});
thi.ng.geom.gl.core.fill_buffer_vec2 = (function thi$ng$geom$gl$core$fill_buffer_vec2(buf,idx,v,num,stride){
var vbuf_27129 = v.buf;
var idx_27130__$1 = (0);
var num_27131__$1 = num;
while(true){
if((num_27131__$1 > (0))){
buf.set(vbuf_27129,idx_27130__$1);

var G__27132 = (idx_27130__$1 + stride);
var G__27133 = (num_27131__$1 - (1));
idx_27130__$1 = G__27132;
num_27131__$1 = G__27133;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer_vec3 = (function thi$ng$geom$gl$core$fill_buffer_vec3(buf,idx,v,num,stride){
var vbuf_27134 = v.buf;
var idx_27135__$1 = (0);
var num_27136__$1 = num;
while(true){
if((num_27136__$1 > (0))){
buf.set(vbuf_27134,idx_27135__$1);

var G__27137 = (idx_27135__$1 + stride);
var G__27138 = (num_27136__$1 - (1));
idx_27135__$1 = G__27137;
num_27136__$1 = G__27138;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer = (function thi$ng$geom$gl$core$fill_buffer(buf,idx,coll,n,stride){
var b = thi.ng.typedarrays.core.float32.call(null,thi.ng.geom.gl.core.zero_fill_coll.call(null,coll,stride));
var i_27139 = idx;
var n_27140__$1 = n;
while(true){
if((n_27140__$1 > (0))){
buf.set(b,i_27139);

var G__27141 = (i_27139 + stride);
var G__27142 = (n_27140__$1 - (1));
i_27139 = G__27141;
n_27140__$1 = G__27142;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_vertex_buffer = (function thi$ng$geom$gl$core$fill_vertex_buffer(buf,coll,stride){
var i = (0);
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(coll__$1){
var G__27143 = (thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.first.call(null,coll__$1),buf,stride,i) | (0));
var G__27144 = cljs.core.next.call(null,coll__$1);
i = G__27143;
coll__$1 = G__27144;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.fill_vertex_buffer_faces = (function thi$ng$geom$gl$core$fill_vertex_buffer_faces(f,buf,coll,stride){
var i = (0);
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(coll__$1){
var fv = cljs.core.first.call(null,coll__$1);
var G__27145 = (f.call(null,cljs.core.nth.call(null,fv,(2)),buf,stride,f.call(null,cljs.core.nth.call(null,fv,(1)),buf,stride,f.call(null,cljs.core.first.call(null,fv),buf,stride,i))) | (0));
var G__27146 = cljs.core.next.call(null,coll__$1);
i = G__27145;
coll__$1 = G__27146;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.face_normals_buffer = (function thi$ng$geom$gl$core$face_normals_buffer(faces){
var buf = thi.ng.typedarrays.core.float32.call(null,((cljs.core.count.call(null,faces) * (3)) * (3)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var nbuf = thi.ng.geom.utils.ortho_normal.call(null,cljs.core.first.call(null,faces__$1)).buf;
buf.set(nbuf,idx);

buf.set(nbuf,(idx + (3)));

buf.set(nbuf,(idx + (6)));

var G__27147 = cljs.core.next.call(null,faces__$1);
var G__27148 = (idx + (9));
faces__$1 = G__27147;
idx = G__27148;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.mesh_face_normals_buffer = (function thi$ng$geom$gl$core$mesh_face_normals_buffer(m){
var fnorms = thi.ng.geom.core.face_normals.call(null,m,true);
var faces = thi.ng.geom.core.faces.call(null,m);
var buf = thi.ng.typedarrays.core.float32.call(null,(cljs.core.count.call(null,faces) * (9)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var nbuf = fnorms.call(null,cljs.core.first.call(null,faces__$1)).buf;
buf.set(nbuf,idx);

buf.set(nbuf,(idx + (3)));

buf.set(nbuf,(idx + (6)));

var G__27149 = (idx + (9));
var G__27150 = cljs.core.next.call(null,faces__$1);
faces__$1 = G__27149;
idx = G__27150;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.mesh_vertex_normals_buffer = (function thi$ng$geom$gl$core$mesh_vertex_normals_buffer(m){
var vnorms = thi.ng.geom.core.vertex_normals.call(null,m,true);
var faces = thi.ng.geom.core.faces.call(null,m);
var buf = thi.ng.typedarrays.core.float32.call(null,(cljs.core.count.call(null,faces) * (9)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var f = cljs.core.first.call(null,faces__$1);
buf.set(cljs.core.get.call(null,vnorms,cljs.core.first.call(null,f)).buf,idx);

buf.set(cljs.core.get.call(null,vnorms,cljs.core.nth.call(null,f,(1))).buf,(idx + (3)));

buf.set(cljs.core.get.call(null,vnorms,cljs.core.nth.call(null,f,(2))).buf,(idx + (6)));

var G__27151 = (idx + (9));
var G__27152 = cljs.core.next.call(null,faces__$1);
faces__$1 = G__27151;
idx = G__27152;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.common_attrib_buffer_specs = (function thi$ng$geom$gl$core$common_attrib_buffer_specs(p__27153,p__27154){
var map__27160 = p__27153;
var map__27160__$1 = ((((!((map__27160 == null)))?((((map__27160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27160):map__27160);
var acc = map__27160__$1;
var num_vertices = cljs.core.get.call(null,map__27160__$1,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
var map__27161 = p__27154;
var map__27161__$1 = ((((!((map__27161 == null)))?((((map__27161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27161):map__27161);
var normals = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var fixed_normal = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463));
var uv = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var colors = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var fixed_color = cljs.core.get.call(null,map__27161__$1,new cljs.core.Keyword(null,"fixed-color","fixed-color",1717626731));
var c_stride = (cljs.core.truth_(colors)?cljs.core.count.call(null,cljs.core.first.call(null,colors)):(cljs.core.truth_(fixed_color)?cljs.core.count.call(null,fixed_color):null));
var G__27164 = acc;
var G__27164__$1 = (cljs.core.truth_(normals)?cljs.core.assoc_in.call(null,G__27164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),normals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__27164);
var G__27164__$2 = (cljs.core.truth_(fixed_normal)?cljs.core.assoc_in.call(null,G__27164__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer_vec3.call(null,thi.ng.typedarrays.core.float32.call(null,(num_vertices * (3))),(0),fixed_normal,num_vertices,(3)),new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__27164__$1);
var G__27164__$3 = (cljs.core.truth_(uv)?cljs.core.assoc_in.call(null,G__27164__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,((2) * cljs.core.count.call(null,uv))),uv,(2)),new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__27164__$2);
var G__27164__$4 = (cljs.core.truth_(colors)?cljs.core.assoc_in.call(null,G__27164__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(c_stride * cljs.core.count.call(null,colors))),colors,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null)):G__27164__$3);
if(cljs.core.truth_(fixed_color)){
return cljs.core.assoc_in.call(null,G__27164__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(num_vertices * c_stride)),(0),fixed_color,num_vertices,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null));
} else {
return G__27164__$4;
}
});
thi.ng.geom.gl.core.into_float_buffer_vec2 = (function thi$ng$geom$gl$core$into_float_buffer_vec2(v,buf,stride,idx){
buf.set(v.buf,idx);

return (idx + stride);
});
thi.ng.geom.gl.core.into_float_buffer_vec3 = (function thi$ng$geom$gl$core$into_float_buffer_vec3(v,buf,stride,idx){
buf.set(v.buf,idx);

return (idx + stride);
});
cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.typedarrays.core.float32.call(null,___$1);
});

cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,buf,stride,idx){
var ___$1 = this;
var t = cljs.core.type.call(null,cljs.core.first.call(null,___$1));
var into_STAR_ = (function (){var pred__27165 = cljs.core._EQ_;
var expr__27166 = t;
if(cljs.core.truth_(pred__27165.call(null,thi.ng.geom.vector.Vec2,expr__27166))){
return thi.ng.geom.gl.core.into_float_buffer_vec2;
} else {
if(cljs.core.truth_(pred__27165.call(null,thi.ng.geom.vector.Vec3,expr__27166))){
return thi.ng.geom.gl.core.into_float_buffer_vec3;
} else {
return thi.ng.dstruct.streams.into_float_buffer;
}
}
})();
var G__27168 = cljs.core.count.call(null,___$1);
switch (G__27168) {
case (2):
return into_STAR_.call(null,cljs.core.nth.call(null,___$1,(1)),buf,stride,into_STAR_.call(null,cljs.core.first.call(null,___$1),buf,stride,idx));

break;
case (3):
return into_STAR_.call(null,cljs.core.nth.call(null,___$1,(2)),buf,stride,into_STAR_.call(null,cljs.core.nth.call(null,___$1,(1)),buf,stride,into_STAR_.call(null,cljs.core.first.call(null,___$1),buf,stride,idx)));

break;
case (4):
return into_STAR_.call(null,cljs.core.nth.call(null,___$1,(3)),buf,stride,into_STAR_.call(null,cljs.core.nth.call(null,___$1,(2)),buf,stride,into_STAR_.call(null,cljs.core.nth.call(null,___$1,(1)),buf,stride,into_STAR_.call(null,cljs.core.first.call(null,___$1),buf,stride,idx))));

break;
default:
var idx__$1 = idx;
var xs = ___$1;
while(true){
if(cljs.core.truth_(xs)){
var G__27170 = into_STAR_.call(null,cljs.core.first.call(null,xs),buf,stride,idx__$1);
var G__27171 = cljs.core.next.call(null,xs);
idx__$1 = G__27170;
xs = G__27171;
continue;
} else {
return idx__$1;
}
break;
}

}
});
thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__27172,p__27173){
var map__27174 = p__27172;
var map__27174__$1 = ((((!((map__27174 == null)))?((((map__27174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27174):map__27174);
var points = cljs.core.get.call(null,map__27174__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27175 = p__27173;
var map__27175__$1 = ((((!((map__27175 == null)))?((((map__27175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27175):map__27175);
var spec = map__27175__$1;
var stride = cljs.core.get.call(null,map__27175__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var map__27178 = this;
var map__27178__$1 = ((((!((map__27178 == null)))?((((map__27178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27178):map__27178);
var points__$1 = cljs.core.get.call(null,map__27178__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count.call(null,points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
});
thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__27180,p__27181){
var map__27182 = p__27180;
var map__27182__$1 = ((((!((map__27182 == null)))?((((map__27182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27182):map__27182);
var points = cljs.core.get.call(null,map__27182__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__27183 = p__27181;
var map__27183__$1 = ((((!((map__27183 == null)))?((((map__27183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27183):map__27183);
var spec = map__27183__$1;
var stride = cljs.core.get.call(null,map__27183__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var map__27186 = this;
var map__27186__$1 = ((((!((map__27186 == null)))?((((map__27186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27186):map__27186);
var points__$1 = cljs.core.get.call(null,map__27186__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count.call(null,points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (r,p__27188){
var map__27189 = p__27188;
var map__27189__$1 = ((((!((map__27189 == null)))?((((map__27189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27189):map__27189);
var spec = map__27189__$1;
var stride = cljs.core.get.call(null,map__27189__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var normals = cljs.core.get.call(null,map__27189__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var r__$1 = this;
var vec__27191 = thi.ng.geom.core.vertices.call(null,r__$1);
var a = cljs.core.nth.call(null,vec__27191,(0),null);
var b = cljs.core.nth.call(null,vec__27191,(1),null);
var c = cljs.core.nth.call(null,vec__27191,(2),null);
var d = cljs.core.nth.call(null,vec__27191,(3),null);
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,((4) * stride)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null),stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangle_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(4)], null),(cljs.core.truth_(normals)?cljs.core.dissoc.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463),thi.ng.geom.vector.V3Z),new cljs.core.Keyword(null,"normals","normals",-1508109067)):spec));
});
thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__27194){
var map__27195 = p__27194;
var map__27195__$1 = ((((!((map__27195 == null)))?((((map__27195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27195):map__27195);
var spec = map__27195__$1;
var normals = cljs.core.get.call(null,map__27195__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067),true);
var stride = cljs.core.get.call(null,map__27195__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var mode = cljs.core.get.call(null,map__27195__$1,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles);
var ___$1 = this;
if(cljs.core._EQ_.call(null,thi.ng.geom.gl.webgl.constants.triangles,mode)){
var faces = thi.ng.geom.core.tessellate.call(null,___$1);
var num_faces = cljs.core.count.call(null,faces);
var num_verts = (num_faces * (3));
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),(cljs.core.truth_(normals)?cljs.core.dissoc.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463),thi.ng.geom.vector.V3Z),new cljs.core.Keyword(null,"normals","normals",-1508109067)):spec));
} else {
var verts = thi.ng.geom.core.vertices.call(null,___$1);
var verts__$1 = cljs.core.conj.call(null,verts,cljs.core.first.call(null,verts));
var num_verts = cljs.core.count.call(null,verts__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(num_verts * stride)),verts__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts], null),cljs.core.dissoc.call(null,spec,new cljs.core.Keyword(null,"normals","normals",-1508109067)));
}
});
thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__27198){
var map__27199 = p__27198;
var map__27199__$1 = ((((!((map__27199 == null)))?((((map__27199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27199):map__27199);
var spec = map__27199__$1;
var fnormals = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.call(null,map__27199__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate.call(null,___$1):___$1);
var faces = cljs.core.map.call(null,((function (m,___$1,map__27199,map__27199__$1,spec,fnormals,tessellate,stride){
return (function (p1__27197_SHARP_){
return thi.ng.geom.core.vertices.call(null,p1__27197_SHARP_,m);
});})(m,___$1,map__27199,map__27199__$1,spec,fnormals,tessellate,stride))
,thi.ng.geom.core.faces.call(null,m));
var num_faces = cljs.core.count.call(null,faces);
var num_verts = (num_faces * (3));
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces.call(null,thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32.call(null,(num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer.call(null,m):null)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__27202){
var map__27203 = p__27202;
var map__27203__$1 = ((((!((map__27203 == null)))?((((map__27203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27203):map__27203);
var spec = map__27203__$1;
var vnormals = cljs.core.get.call(null,map__27203__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var fnormals = cljs.core.get.call(null,map__27203__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.call(null,map__27203__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.call(null,map__27203__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate.call(null,___$1):___$1);
var faces = cljs.core.map.call(null,((function (m,___$1,map__27203,map__27203__$1,spec,vnormals,fnormals,tessellate,stride){
return (function (p1__27201_SHARP_){
return thi.ng.geom.core.vertices.call(null,p1__27201_SHARP_,m);
});})(m,___$1,map__27203,map__27203__$1,spec,vnormals,fnormals,tessellate,stride))
,thi.ng.geom.core.faces.call(null,m));
var num_faces = cljs.core.count.call(null,faces);
var num_verts = (num_faces * (3));
var normals = (cljs.core.truth_(vnormals)?thi.ng.geom.gl.core.mesh_vertex_normals_buffer.call(null,m):(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer.call(null,m):null
));
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces.call(null,thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32.call(null,(num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),normals));
});
thi.ng.geom.gl.core.context_default_attribs = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",333849513),false,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",173664672),false,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),false,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),false], null);
thi.ng.geom.gl.core.gl_context = (function thi$ng$geom$gl$core$gl_context(var_args){
var args27206 = [];
var len__21238__auto___27210 = arguments.length;
var i__21239__auto___27211 = (0);
while(true){
if((i__21239__auto___27211 < len__21238__auto___27210)){
args27206.push((arguments[i__21239__auto___27211]));

var G__27212 = (i__21239__auto___27211 + (1));
i__21239__auto___27211 = G__27212;
continue;
} else {
}
break;
}

var G__27208 = args27206.length;
switch (G__27208) {
case 1:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27206.length)].join('')));

}
});

thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1 = (function (canvas){
return thi.ng.geom.gl.core.gl_context.call(null,canvas,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2 = (function (canvas,attribs){
var canvas__$1 = ((typeof canvas === 'string')?document.getElementById(canvas):canvas);
var attribs__$1 = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,thi.ng.geom.gl.core.context_default_attribs,attribs));
var getctx = ((function (canvas__$1,attribs__$1){
return (function (p1__27205_SHARP_){
try{var ctx = canvas__$1.getContext(p1__27205_SHARP_,attribs__$1);
canvas__$1.onselectstart = cljs.core.constantly.call(null,false);

return ctx;
}catch (e27209){if((e27209 instanceof Error)){
var e = e27209;
return null;
} else {
throw e27209;

}
}});})(canvas__$1,attribs__$1))
;
var ctx = (function (){var ids = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webgl","experimental-webgl","webkit-3d","moz-webgl"], null);
while(true){
if(cljs.core.truth_(ids)){
var temp__5718__auto__ = getctx.call(null,cljs.core.first.call(null,ids));
if(cljs.core.truth_(temp__5718__auto__)){
var ctx = temp__5718__auto__;
return ctx;
} else {
var G__27214 = cljs.core.next.call(null,ids);
ids = G__27214;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20022__auto__ = ctx;
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.xerror.core.unsupported_BANG_.call(null,"WebGL not available");
}
});

thi.ng.geom.gl.core.gl_context.cljs$lang$maxFixedArity = 2;

thi.ng.geom.gl.core.clear_color_buffer = (function thi$ng$geom$gl$core$clear_color_buffer(var_args){
var args27215 = [];
var len__21238__auto___27219 = arguments.length;
var i__21239__auto___27220 = (0);
while(true){
if((i__21239__auto___27220 < len__21238__auto___27219)){
args27215.push((arguments[i__21239__auto___27220]));

var G__27221 = (i__21239__auto___27220 + (1));
i__21239__auto___27220 = G__27221;
continue;
} else {
}
break;
}

var G__27217 = args27215.length;
switch (G__27217) {
case 2:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27215.length)].join('')));

}
});

thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,col){
var c = thi.ng.color.core.as_rgba.call(null,col);
return thi.ng.geom.gl.core.clear_color_buffer.call(null,gl,c.r,c.g,c.b,c.a);
});

thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5 = (function (gl,r,g,b,a){
var G__27218 = gl;
G__27218.clearColor(r,g,b,a);

G__27218.clear(thi.ng.geom.gl.webgl.constants.color_buffer_bit);

return G__27218;
});

thi.ng.geom.gl.core.clear_color_buffer.cljs$lang$maxFixedArity = 5;

thi.ng.geom.gl.core.clear_depth_buffer = (function thi$ng$geom$gl$core$clear_depth_buffer(gl,d){
var G__27224 = gl;
G__27224.clearDepth(d);

G__27224.clear(thi.ng.geom.gl.webgl.constants.depth_buffer_bit);

return G__27224;
});
thi.ng.geom.gl.core.clear_color_and_depth_buffer = (function thi$ng$geom$gl$core$clear_color_and_depth_buffer(var_args){
var args27225 = [];
var len__21238__auto___27229 = arguments.length;
var i__21239__auto___27230 = (0);
while(true){
if((i__21239__auto___27230 < len__21238__auto___27229)){
args27225.push((arguments[i__21239__auto___27230]));

var G__27231 = (i__21239__auto___27230 + (1));
i__21239__auto___27230 = G__27231;
continue;
} else {
}
break;
}

var G__27227 = args27225.length;
switch (G__27227) {
case 3:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27225.length)].join('')));

}
});

thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3 = (function (gl,col,d){
var c = thi.ng.color.core.as_rgba.call(null,col);
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.call(null,gl,c.r,c.g,c.b,c.a,d);
});

thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6 = (function (gl,r,g,b,a,d){
var G__27228 = gl;
G__27228.clearColor(r,g,b,a);

G__27228.clearDepth(d);

G__27228.clear((thi.ng.geom.gl.webgl.constants.depth_buffer_bit | thi.ng.geom.gl.webgl.constants.color_buffer_bit));

return G__27228;
});

thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$lang$maxFixedArity = 6;

thi.ng.geom.gl.core.disable = (function thi$ng$geom$gl$core$disable(gl,flag){
gl.disable(flag);

return gl;
});
thi.ng.geom.gl.core.enable = (function thi$ng$geom$gl$core$enable(gl,flag){
gl.enable(flag);

return gl;
});
thi.ng.geom.gl.core.scissor_test = (function thi$ng$geom$gl$core$scissor_test(var_args){
var args27233 = [];
var len__21238__auto___27246 = arguments.length;
var i__21239__auto___27247 = (0);
while(true){
if((i__21239__auto___27247 < len__21238__auto___27246)){
args27233.push((arguments[i__21239__auto___27247]));

var G__27248 = (i__21239__auto___27247 + (1));
i__21239__auto___27247 = G__27248;
continue;
} else {
}
break;
}

var G__27235 = args27233.length;
switch (G__27235) {
case 2:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27233.length)].join('')));

}
});

thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__27236){
var map__27237 = p__27236;
var map__27237__$1 = ((((!((map__27237 == null)))?((((map__27237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27237):map__27237);
var vec__27238 = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.call(null,vec__27238,(0),null);
var y = cljs.core.nth.call(null,vec__27238,(1),null);
var vec__27241 = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__27241,(0),null);
var h = cljs.core.nth.call(null,vec__27241,(1),null);
return thi.ng.geom.gl.core.scissor_test.call(null,gl,x,y,w,h);
});

thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5 = (function (gl,x,y,w,h){
var G__27245 = gl;
G__27245.enable(thi.ng.geom.gl.webgl.constants.scissor_test);

G__27245.scissor(x,y,w,h);

return G__27245;
});

thi.ng.geom.gl.core.scissor_test.cljs$lang$maxFixedArity = 5;

thi.ng.geom.gl.core.cull_faces = (function thi$ng$geom$gl$core$cull_faces(gl,side){
var G__27251 = gl;
G__27251.enable(thi.ng.geom.gl.webgl.constants.cull_face);

G__27251.cullFace(side);

return G__27251;
});
thi.ng.geom.gl.core.set_viewport = (function thi$ng$geom$gl$core$set_viewport(var_args){
var args27252 = [];
var len__21238__auto___27264 = arguments.length;
var i__21239__auto___27265 = (0);
while(true){
if((i__21239__auto___27265 < len__21238__auto___27264)){
args27252.push((arguments[i__21239__auto___27265]));

var G__27266 = (i__21239__auto___27265 + (1));
i__21239__auto___27265 = G__27266;
continue;
} else {
}
break;
}

var G__27254 = args27252.length;
switch (G__27254) {
case 2:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27252.length)].join('')));

}
});

thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__27255){
var map__27256 = p__27255;
var map__27256__$1 = ((((!((map__27256 == null)))?((((map__27256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27256):map__27256);
var vec__27257 = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.call(null,vec__27257,(0),null);
var y = cljs.core.nth.call(null,vec__27257,(1),null);
var vec__27260 = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__27260,(0),null);
var h = cljs.core.nth.call(null,vec__27260,(1),null);
gl.viewport(x,y,w,h);

return gl;
});

thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$5 = (function (gl,x,y,w,h){
gl.viewport(x,y,w,h);

return gl;
});

thi.ng.geom.gl.core.set_viewport.cljs$lang$maxFixedArity = 5;

thi.ng.geom.gl.core.get_viewport_rect = (function thi$ng$geom$gl$core$get_viewport_rect(gl){
var b = gl.getParameter(thi.ng.geom.gl.webgl.constants.viewport);
return thi.ng.geom.rect.rect.call(null,(b[(0)]),(b[(1)]),(b[(2)]),(b[(3)]));
});
thi.ng.geom.gl.core.perspective = thi.ng.geom.matrix.perspective;
thi.ng.geom.gl.core.ortho = thi.ng.geom.matrix.ortho;
thi.ng.geom.gl.core.float_ext_ids = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_color_buffer_float","EXT_color_buffer_half_float"], null);
thi.ng.geom.gl.core.get_extension = (function thi$ng$geom$gl$core$get_extension(gl,ext){
return gl.getExtension(ext);
});
thi.ng.geom.gl.core.get_float_extension = (function thi$ng$geom$gl$core$get_float_extension(gl,spec){
var vec__27272 = cljs.core.map.call(null,(function (p1__27268_SHARP_){
return gl.getExtension(p1__27268_SHARP_);
}),thi.ng.geom.gl.core.float_ext_ids);
var s_tex = cljs.core.nth.call(null,vec__27272,(0),null);
var h_tex = cljs.core.nth.call(null,vec__27272,(1),null);
var s_lin = cljs.core.nth.call(null,vec__27272,(2),null);
var h_lin = cljs.core.nth.call(null,vec__27272,(3),null);
var s_fbo = cljs.core.nth.call(null,vec__27272,(4),null);
var h_fbo = cljs.core.nth.call(null,vec__27272,(5),null);
var ext = vec__27272;
return cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.map.call(null,((function (vec__27272,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (c){
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__27272,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (pref,score){
if(cljs.core.truth_(c.call(null,pref))){
return score;
} else {
return (0);
}
});})(vec__27272,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"prefer","prefer",1694203909)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(64),(32),(16),(8),(4),(2),(1)], null))));
});})(vec__27272,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,cljs.core.reduce.call(null,((function (vec__27272,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (acc,c){
if(cljs.core.truth_((function (){var and__20010__auto__ = cljs.core.get.call(null,c,new cljs.core.Keyword(null,"texture","texture",-266291651));
if(cljs.core.truth_(and__20010__auto__)){
return cljs.core.every_QMARK_.call(null,c,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"require","require",-468001333)));
} else {
return and__20010__auto__;
}
})())){
return cljs.core.conj.call(null,acc,c);
} else {
return acc;
}
});})(vec__27272,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",-266291651),s_tex,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),s_lin,new cljs.core.Keyword(null,"renderable","renderable",-1247325782),s_fbo,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.float$,new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.Keyword(null,"single","single",1551466437),new cljs.core.Keyword(null,"single","single",1551466437),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",-266291651),h_tex,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),h_lin,new cljs.core.Keyword(null,"renderable","renderable",-1247325782),h_fbo,new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(h_tex)?h_tex.HALF_FLOAT_OES:null),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.Keyword(null,"half","half",741990005),new cljs.core.Keyword(null,"half","half",741990005),true], null)], null)))));
});
thi.ng.geom.gl.core.get_supported_extensions = (function thi$ng$geom$gl$core$get_supported_extensions(gl){
return gl.getSupportedExtensions();
});
thi.ng.geom.gl.core.make_array_buffer = (function thi$ng$geom$gl$core$make_array_buffer(gl,target,mode,data){
var buffer = gl.createBuffer();
gl.bindBuffer(target,buffer);

gl.bufferData(target,data,mode);

return buffer;
});
thi.ng.geom.gl.core.make_attribute_buffers = (function thi$ng$geom$gl$core$make_attribute_buffers(gl,mode,attribs){
return cljs.core.reduce_kv.call(null,(function (attribs__$1,id,p__27278){
var map__27279 = p__27278;
var map__27279__$1 = ((((!((map__27279 == null)))?((((map__27279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27279):map__27279);
var data = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var target = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.array_buffer);
return cljs.core.update_in.call(null,attribs__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer.call(null,gl,target,mode,data),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null));
}),attribs,attribs);
});
thi.ng.geom.gl.core.make_buffers_in_spec = (function thi$ng$geom$gl$core$make_buffers_in_spec(spec,gl,mode){
var spec__$1 = cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (p1__27281_SHARP_){
return thi.ng.geom.gl.core.make_attribute_buffers.call(null,gl,mode,p1__27281_SHARP_);
}));
if(cljs.core.truth_(cljs.core.get.call(null,spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343)))){
return cljs.core.update.call(null,spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343),((function (spec__$1){
return (function (p1__27282_SHARP_){
return cljs.core.merge.call(null,p1__27282_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer.call(null,gl,thi.ng.geom.gl.webgl.constants.element_array_buffer,mode,cljs.core.get.call(null,p1__27282_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377))),new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null));
});})(spec__$1))
);
} else {
return spec__$1;
}
});
thi.ng.geom.gl.core.update_buffer_in_spec = (function thi$ng$geom$gl$core$update_buffer_in_spec(gl,spec,id,coll){
var map__27285 = id.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(spec));
var map__27285__$1 = ((((!((map__27285 == null)))?((((map__27285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27285):map__27285);
var target = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"target","target",253001721));
var data = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var buffer = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var buffer_mode = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764));
var size = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"size","size",1098693007));
thi.ng.geom.gl.core.fill_vertex_buffer.call(null,data,coll,size);

gl.bindBuffer(target,buffer);

gl.bufferData(target,data,buffer_mode);

return gl;
});
thi.ng.geom.gl.core.begin_shader = (function thi$ng$geom$gl$core$begin_shader(gl,shader,uniforms,attribs,indices){
gl.useProgram(cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"program","program",781564284)));

thi.ng.geom.gl.shaders.apply_default_uniforms.call(null,shader,uniforms);

cljs.core.reduce_kv.call(null,(function (p1__27289_SHARP_,p2__27287_SHARP_,p3__27288_SHARP_){
return thi.ng.geom.gl.shaders.set_uniform.call(null,shader,uniforms,p2__27287_SHARP_,p3__27288_SHARP_);
}),null,uniforms);

cljs.core.reduce_kv.call(null,(function (p1__27292_SHARP_,p2__27290_SHARP_,p3__27291_SHARP_){
return thi.ng.geom.gl.shaders.set_attribute.call(null,gl,shader,p2__27290_SHARP_,p3__27291_SHARP_);
}),null,attribs);

if(cljs.core.truth_(indices)){
return gl.bindBuffer(thi.ng.geom.gl.webgl.constants.element_array_buffer,cljs.core.get.call(null,indices,new cljs.core.Keyword(null,"buffer","buffer",617295198)));
} else {
return null;
}
});
thi.ng.geom.gl.core.end_shader = (function thi$ng$geom$gl$core$end_shader(gl,shader){
return cljs.core.reduce.call(null,(function (p1__27294_SHARP_,p2__27293_SHARP_){
return thi.ng.geom.gl.shaders.disable_attribute.call(null,gl,shader,cljs.core.key.call(null,p2__27293_SHARP_));
}),null,cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)));
});
thi.ng.geom.gl.core.bind_sequentially = (function thi$ng$geom$gl$core$bind_sequentially(coll){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
var temp__5720__auto___27295 = cljs.core.first.call(null,coll__$1);
if(cljs.core.truth_(temp__5720__auto___27295)){
var x_27296 = temp__5720__auto___27295;
thi.ng.geom.gl.core.bind.call(null,x_27296,i);
} else {
}

var G__27297 = (i + (1));
var G__27298 = cljs.core.next.call(null,coll__$1);
i = G__27297;
coll__$1 = G__27298;
continue;
} else {
return null;
}
break;
}
});
/**
 * Takes a GL context and shader spec, sets GL render flags stored
 *   under :state key (only if :state is present).
 */
thi.ng.geom.gl.core.prepare_render_state = (function thi$ng$geom$gl$core$prepare_render_state(gl,p__27299){
var map__27306 = p__27299;
var map__27306__$1 = ((((!((map__27306 == null)))?((((map__27306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27306):map__27306);
var state = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(state)){
if(cljs.core.truth_(cljs.core.get.call(null,state,new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),true))){
thi.ng.geom.gl.core.enable.call(null,gl,thi.ng.geom.gl.webgl.constants.depth_test);
} else {
thi.ng.geom.gl.core.disable.call(null,gl,thi.ng.geom.gl.webgl.constants.depth_test);
}

if(cljs.core.truth_(cljs.core.get.call(null,state,new cljs.core.Keyword(null,"blend","blend",249565561)))){
var vec__27308_27312 = (function (){var or__20022__auto__ = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"blend-fn","blend-fn",-1294135525));
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.src_alpha,thi.ng.geom.gl.webgl.constants.one], null);
}
})();
var src_27313 = cljs.core.nth.call(null,vec__27308_27312,(0),null);
var dest_27314 = cljs.core.nth.call(null,vec__27308_27312,(1),null);
var eq_27315 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"blend-eq","blend-eq",1223359361),thi.ng.geom.gl.webgl.constants.func_add);
var G__27311_27316 = gl;
thi.ng.geom.gl.core.enable.call(null,G__27311_27316,thi.ng.geom.gl.webgl.constants.blend);

G__27311_27316.blendFunc(src_27313,dest_27314);

G__27311_27316.blendEquation(eq_27315);

} else {
thi.ng.geom.gl.core.disable.call(null,gl,thi.ng.geom.gl.webgl.constants.blend);
}

var temp__5720__auto___27317 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"tex","tex",1307057959));
if(cljs.core.truth_(temp__5720__auto___27317)){
var tex_27318 = temp__5720__auto___27317;
if(cljs.core.sequential_QMARK_.call(null,tex_27318)){
thi.ng.geom.gl.core.bind_sequentially.call(null,tex_27318);
} else {
thi.ng.geom.gl.core.bind.call(null,tex_27318,(0));
}
} else {
}
} else {
}

return gl;
});
thi.ng.geom.gl.core.compute_normal_matrix = (function thi$ng$geom$gl$core$compute_normal_matrix(m,v){
return thi.ng.math.core.transpose.call(null,thi.ng.math.core.invert.call(null,thi.ng.math.core._STAR_.call(null,v,m)));
});
thi.ng.geom.gl.core.auto_normal_matrix = (function thi$ng$geom$gl$core$auto_normal_matrix(model_id,view_id){
return (function (shader,uniforms){
return thi.ng.geom.gl.core.compute_normal_matrix.call(null,(function (){var or__20022__auto__ = cljs.core.get.call(null,uniforms,model_id);
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return cljs.core.get_in.call(null,shader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),model_id,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})(),(function (){var or__20022__auto__ = cljs.core.get.call(null,uniforms,view_id);
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return cljs.core.get_in.call(null,shader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),view_id,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})());
});
});
thi.ng.geom.gl.core.inject_normal_matrix = (function thi$ng$geom$gl$core$inject_normal_matrix(spec,model_mat,view_mat,normal_mat_id){
var model_mat__$1 = (((model_mat instanceof cljs.core.Keyword))?model_mat.call(null,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(spec)):model_mat);
var view_mat__$1 = (((view_mat instanceof cljs.core.Keyword))?view_mat.call(null,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(spec)):view_mat);
return cljs.core.assoc_in.call(null,spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),normal_mat_id], null),thi.ng.geom.gl.core.compute_normal_matrix.call(null,model_mat__$1,view_mat__$1));
});
thi.ng.geom.gl.core.draw = (function thi$ng$geom$gl$core$draw(gl,spec){
var mode = cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles);
if(cljs.core.truth_(cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"indices","indices",-1218138343)))){
gl.drawElements(mode,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"num-items","num-items",-887909266)),thi.ng.geom.gl.webgl.constants.unsigned_short,(0));
} else {
gl.drawArrays(mode,(0),cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051)));
}

return gl;
});
thi.ng.geom.gl.core.draw_with_shader = (function thi$ng$geom$gl$core$draw_with_shader(gl,p__27319){
var map__27322 = p__27319;
var map__27322__$1 = ((((!((map__27322 == null)))?((((map__27322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27322.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27322):map__27322);
var spec = map__27322__$1;
var shader = cljs.core.get.call(null,map__27322__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
thi.ng.geom.gl.core.prepare_render_state.call(null,gl,shader);

thi.ng.geom.gl.core.begin_shader.call(null,gl,shader,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)),cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"indices","indices",-1218138343)));

thi.ng.geom.gl.core.draw.call(null,gl,spec);

thi.ng.geom.gl.core.end_shader.call(null,gl,shader);

return gl;
});

//# sourceMappingURL=core.js.map