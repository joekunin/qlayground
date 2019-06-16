// Compiled by ClojureScript 1.9.293 {:target :nodejs}
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.as_gl_buffer_spec[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.as_gl_buffer_spec["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.release[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.release["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
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
var args32934 = [];
var len__21023__auto___32940 = arguments.length;
var i__21024__auto___32941 = (0);
while(true){
if((i__21024__auto___32941 < len__21023__auto___32940)){
args32934.push((arguments[i__21024__auto___32941]));

var G__32942 = (i__21024__auto___32941 + (1));
i__21024__auto___32941 = G__32942;
continue;
} else {
}
break;
}

var G__32936 = args32934.length;
switch (G__32936) {
case 1:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32934.length)].join('')));

}
});

thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IBind$bind$arity$1 == null)))){
return _.thi$ng$geom$gl$core$IBind$bind$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.bind["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.bind["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IBind.bind",_);
}
}
}
});

thi.ng.geom.gl.core.bind.cljs$lang$maxFixedArity = 2;


thi.ng.geom.gl.core.unbind = (function thi$ng$geom$gl$core$unbind(var_args){
var args32937 = [];
var len__21023__auto___32944 = arguments.length;
var i__21024__auto___32945 = (0);
while(true){
if((i__21024__auto___32945 < len__21023__auto___32944)){
args32937.push((arguments[i__21024__auto___32945]));

var G__32946 = (i__21024__auto___32945 + (1));
i__21024__auto___32945 = G__32946;
continue;
} else {
}
break;
}

var G__32939 = args32937.length;
switch (G__32939) {
case 1:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32937.length)].join('')));

}
});

thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$gl$core$IBind$unbind$arity$1 == null)))){
return _.thi$ng$geom$gl$core$IBind$unbind$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.unbind["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.unbind["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.configure[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.configure["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.set_texture_filter[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,min,mag);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.set_texture_filter["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,min,mag);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.set_texture_wrap[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,wrap_s,wrap_t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.set_texture_wrap["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,wrap_s,wrap_t);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.set_fbo_color_texture[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,tex);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.set_fbo_color_texture["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,tex);
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
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.gl.core.set_fbo_depth_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,depth_buffer);
} else {
var m__20521__auto____$1 = (thi.ng.geom.gl.core.set_fbo_depth_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,depth_buffer);
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
var vbuf_32948 = v.buf;
var idx_32949__$1 = (0);
var num_32950__$1 = num;
while(true){
if((num_32950__$1 > (0))){
buf.set(vbuf_32948,idx_32949__$1);

var G__32951 = (idx_32949__$1 + stride);
var G__32952 = (num_32950__$1 - (1));
idx_32949__$1 = G__32951;
num_32950__$1 = G__32952;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer_vec3 = (function thi$ng$geom$gl$core$fill_buffer_vec3(buf,idx,v,num,stride){
var vbuf_32953 = v.buf;
var idx_32954__$1 = (0);
var num_32955__$1 = num;
while(true){
if((num_32955__$1 > (0))){
buf.set(vbuf_32953,idx_32954__$1);

var G__32956 = (idx_32954__$1 + stride);
var G__32957 = (num_32955__$1 - (1));
idx_32954__$1 = G__32956;
num_32955__$1 = G__32957;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer = (function thi$ng$geom$gl$core$fill_buffer(buf,idx,coll,n,stride){
var b = thi.ng.typedarrays.core.float32.call(null,thi.ng.geom.gl.core.zero_fill_coll.call(null,coll,stride));
var i_32958 = idx;
var n_32959__$1 = n;
while(true){
if((n_32959__$1 > (0))){
buf.set(b,i_32958);

var G__32960 = (i_32958 + stride);
var G__32961 = (n_32959__$1 - (1));
i_32958 = G__32960;
n_32959__$1 = G__32961;
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
var G__32962 = (thi.ng.dstruct.streams.into_float_buffer.call(null,cljs.core.first.call(null,coll__$1),buf,stride,i) | (0));
var G__32963 = cljs.core.next.call(null,coll__$1);
i = G__32962;
coll__$1 = G__32963;
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
var G__32964 = (f.call(null,cljs.core.nth.call(null,fv,(2)),buf,stride,f.call(null,cljs.core.nth.call(null,fv,(1)),buf,stride,f.call(null,cljs.core.first.call(null,fv),buf,stride,i))) | (0));
var G__32965 = cljs.core.next.call(null,coll__$1);
i = G__32964;
coll__$1 = G__32965;
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

var G__32966 = cljs.core.next.call(null,faces__$1);
var G__32967 = (idx + (9));
faces__$1 = G__32966;
idx = G__32967;
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

var G__32968 = (idx + (9));
var G__32969 = cljs.core.next.call(null,faces__$1);
faces__$1 = G__32968;
idx = G__32969;
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

var G__32970 = (idx + (9));
var G__32971 = cljs.core.next.call(null,faces__$1);
faces__$1 = G__32970;
idx = G__32971;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.common_attrib_buffer_specs = (function thi$ng$geom$gl$core$common_attrib_buffer_specs(p__32972,p__32973){
var map__32979 = p__32972;
var map__32979__$1 = ((((!((map__32979 == null)))?((((map__32979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var acc = map__32979__$1;
var num_vertices = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
var map__32980 = p__32973;
var map__32980__$1 = ((((!((map__32980 == null)))?((((map__32980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32980):map__32980);
var normals = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var fixed_normal = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463));
var uv = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var colors = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var fixed_color = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"fixed-color","fixed-color",1717626731));
var c_stride = (cljs.core.truth_(colors)?cljs.core.count.call(null,cljs.core.first.call(null,colors)):(cljs.core.truth_(fixed_color)?cljs.core.count.call(null,fixed_color):null));
var G__32983 = acc;
var G__32983__$1 = (cljs.core.truth_(normals)?cljs.core.assoc_in.call(null,G__32983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),normals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__32983);
var G__32983__$2 = (cljs.core.truth_(fixed_normal)?cljs.core.assoc_in.call(null,G__32983__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer_vec3.call(null,thi.ng.typedarrays.core.float32.call(null,(num_vertices * (3))),(0),fixed_normal,num_vertices,(3)),new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__32983__$1);
var G__32983__$3 = (cljs.core.truth_(uv)?cljs.core.assoc_in.call(null,G__32983__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,((2) * cljs.core.count.call(null,uv))),uv,(2)),new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__32983__$2);
var G__32983__$4 = (cljs.core.truth_(colors)?cljs.core.assoc_in.call(null,G__32983__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(c_stride * cljs.core.count.call(null,colors))),colors,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null)):G__32983__$3);
if(cljs.core.truth_(fixed_color)){
return cljs.core.assoc_in.call(null,G__32983__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(num_vertices * c_stride)),(0),fixed_color,num_vertices,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null));
} else {
return G__32983__$4;
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
var into_STAR_ = (function (){var pred__32984 = cljs.core._EQ_;
var expr__32985 = t;
if(cljs.core.truth_(pred__32984.call(null,thi.ng.geom.vector.Vec2,expr__32985))){
return thi.ng.geom.gl.core.into_float_buffer_vec2;
} else {
if(cljs.core.truth_(pred__32984.call(null,thi.ng.geom.vector.Vec3,expr__32985))){
return thi.ng.geom.gl.core.into_float_buffer_vec3;
} else {
return thi.ng.dstruct.streams.into_float_buffer;
}
}
})();
var G__32987 = cljs.core.count.call(null,___$1);
switch (G__32987) {
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
var G__32989 = into_STAR_.call(null,cljs.core.first.call(null,xs),buf,stride,idx__$1);
var G__32990 = cljs.core.next.call(null,xs);
idx__$1 = G__32989;
xs = G__32990;
continue;
} else {
return idx__$1;
}
break;
}

}
});
thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__32991,p__32992){
var map__32993 = p__32991;
var map__32993__$1 = ((((!((map__32993 == null)))?((((map__32993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32993):map__32993);
var points = cljs.core.get.call(null,map__32993__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__32994 = p__32992;
var map__32994__$1 = ((((!((map__32994 == null)))?((((map__32994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32994):map__32994);
var spec = map__32994__$1;
var stride = cljs.core.get.call(null,map__32994__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var map__32997 = this;
var map__32997__$1 = ((((!((map__32997 == null)))?((((map__32997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32997):map__32997);
var points__$1 = cljs.core.get.call(null,map__32997__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count.call(null,points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
});
thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__32999,p__33000){
var map__33001 = p__32999;
var map__33001__$1 = ((((!((map__33001 == null)))?((((map__33001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33001):map__33001);
var points = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__33002 = p__33000;
var map__33002__$1 = ((((!((map__33002 == null)))?((((map__33002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33002):map__33002);
var spec = map__33002__$1;
var stride = cljs.core.get.call(null,map__33002__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var map__33005 = this;
var map__33005__$1 = ((((!((map__33005 == null)))?((((map__33005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33005):map__33005);
var points__$1 = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count.call(null,points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,(numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (r,p__33007){
var map__33008 = p__33007;
var map__33008__$1 = ((((!((map__33008 == null)))?((((map__33008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33008):map__33008);
var spec = map__33008__$1;
var stride = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var normals = cljs.core.get.call(null,map__33008__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var r__$1 = this;
var vec__33010 = thi.ng.geom.core.vertices.call(null,r__$1);
var a = cljs.core.nth.call(null,vec__33010,(0),null);
var b = cljs.core.nth.call(null,vec__33010,(1),null);
var c = cljs.core.nth.call(null,vec__33010,(2),null);
var d = cljs.core.nth.call(null,vec__33010,(3),null);
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer.call(null,thi.ng.typedarrays.core.float32.call(null,((4) * stride)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null),stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangle_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(4)], null),(cljs.core.truth_(normals)?cljs.core.dissoc.call(null,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463),thi.ng.geom.vector.V3Z),new cljs.core.Keyword(null,"normals","normals",-1508109067)):spec));
});
thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__33013){
var map__33014 = p__33013;
var map__33014__$1 = ((((!((map__33014 == null)))?((((map__33014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33014):map__33014);
var spec = map__33014__$1;
var normals = cljs.core.get.call(null,map__33014__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067),true);
var stride = cljs.core.get.call(null,map__33014__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var mode = cljs.core.get.call(null,map__33014__$1,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles);
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

thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__33017){
var map__33018 = p__33017;
var map__33018__$1 = ((((!((map__33018 == null)))?((((map__33018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33018):map__33018);
var spec = map__33018__$1;
var fnormals = cljs.core.get.call(null,map__33018__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.call(null,map__33018__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.call(null,map__33018__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate.call(null,___$1):___$1);
var faces = cljs.core.map.call(null,((function (m,___$1,map__33018,map__33018__$1,spec,fnormals,tessellate,stride){
return (function (p1__33016_SHARP_){
return thi.ng.geom.core.vertices.call(null,p1__33016_SHARP_,m);
});})(m,___$1,map__33018,map__33018__$1,spec,fnormals,tessellate,stride))
,thi.ng.geom.core.faces.call(null,m));
var num_faces = cljs.core.count.call(null,faces);
var num_verts = (num_faces * (3));
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces.call(null,thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32.call(null,(num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer.call(null,m):null)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__33021){
var map__33022 = p__33021;
var map__33022__$1 = ((((!((map__33022 == null)))?((((map__33022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33022):map__33022);
var spec = map__33022__$1;
var vnormals = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var fnormals = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.call(null,map__33022__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate.call(null,___$1):___$1);
var faces = cljs.core.map.call(null,((function (m,___$1,map__33022,map__33022__$1,spec,vnormals,fnormals,tessellate,stride){
return (function (p1__33020_SHARP_){
return thi.ng.geom.core.vertices.call(null,p1__33020_SHARP_,m);
});})(m,___$1,map__33022,map__33022__$1,spec,vnormals,fnormals,tessellate,stride))
,thi.ng.geom.core.faces.call(null,m));
var num_faces = cljs.core.count.call(null,faces);
var num_verts = (num_faces * (3));
var normals = (cljs.core.truth_(vnormals)?thi.ng.geom.gl.core.mesh_vertex_normals_buffer.call(null,m):(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer.call(null,m):null
));
return thi.ng.geom.gl.core.common_attrib_buffer_specs.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces.call(null,thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32.call(null,(num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),normals));
});
thi.ng.geom.gl.core.context_default_attribs = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",333849513),false,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",173664672),false,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),false,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),false], null);
thi.ng.geom.gl.core.gl_context = (function thi$ng$geom$gl$core$gl_context(var_args){
var args33025 = [];
var len__21023__auto___33029 = arguments.length;
var i__21024__auto___33030 = (0);
while(true){
if((i__21024__auto___33030 < len__21023__auto___33029)){
args33025.push((arguments[i__21024__auto___33030]));

var G__33031 = (i__21024__auto___33030 + (1));
i__21024__auto___33030 = G__33031;
continue;
} else {
}
break;
}

var G__33027 = args33025.length;
switch (G__33027) {
case 1:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33025.length)].join('')));

}
});

thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1 = (function (canvas){
return thi.ng.geom.gl.core.gl_context.call(null,canvas,cljs.core.PersistentArrayMap.EMPTY);
});

thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2 = (function (canvas,attribs){
var canvas__$1 = ((typeof canvas === 'string')?document.getElementById(canvas):canvas);
var attribs__$1 = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,thi.ng.geom.gl.core.context_default_attribs,attribs));
var getctx = ((function (canvas__$1,attribs__$1){
return (function (p1__33024_SHARP_){
try{var ctx = canvas__$1.getContext(p1__33024_SHARP_,attribs__$1);
canvas__$1.onselectstart = cljs.core.constantly.call(null,false);

return ctx;
}catch (e33028){if((e33028 instanceof Error)){
var e = e33028;
return null;
} else {
throw e33028;

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
var G__33033 = cljs.core.next.call(null,ids);
ids = G__33033;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19807__auto__ = ctx;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.xerror.core.unsupported_BANG_.call(null,"WebGL not available");
}
});

thi.ng.geom.gl.core.gl_context.cljs$lang$maxFixedArity = 2;

thi.ng.geom.gl.core.clear_color_buffer = (function thi$ng$geom$gl$core$clear_color_buffer(var_args){
var args33034 = [];
var len__21023__auto___33038 = arguments.length;
var i__21024__auto___33039 = (0);
while(true){
if((i__21024__auto___33039 < len__21023__auto___33038)){
args33034.push((arguments[i__21024__auto___33039]));

var G__33040 = (i__21024__auto___33039 + (1));
i__21024__auto___33039 = G__33040;
continue;
} else {
}
break;
}

var G__33036 = args33034.length;
switch (G__33036) {
case 2:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33034.length)].join('')));

}
});

thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,col){
var c = thi.ng.color.core.as_rgba.call(null,col);
return thi.ng.geom.gl.core.clear_color_buffer.call(null,gl,c.r,c.g,c.b,c.a);
});

thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5 = (function (gl,r,g,b,a){
var G__33037 = gl;
G__33037.clearColor(r,g,b,a);

G__33037.clear(thi.ng.geom.gl.webgl.constants.color_buffer_bit);

return G__33037;
});

thi.ng.geom.gl.core.clear_color_buffer.cljs$lang$maxFixedArity = 5;

thi.ng.geom.gl.core.clear_depth_buffer = (function thi$ng$geom$gl$core$clear_depth_buffer(gl,d){
var G__33043 = gl;
G__33043.clearDepth(d);

G__33043.clear(thi.ng.geom.gl.webgl.constants.depth_buffer_bit);

return G__33043;
});
thi.ng.geom.gl.core.clear_color_and_depth_buffer = (function thi$ng$geom$gl$core$clear_color_and_depth_buffer(var_args){
var args33044 = [];
var len__21023__auto___33048 = arguments.length;
var i__21024__auto___33049 = (0);
while(true){
if((i__21024__auto___33049 < len__21023__auto___33048)){
args33044.push((arguments[i__21024__auto___33049]));

var G__33050 = (i__21024__auto___33049 + (1));
i__21024__auto___33049 = G__33050;
continue;
} else {
}
break;
}

var G__33046 = args33044.length;
switch (G__33046) {
case 3:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33044.length)].join('')));

}
});

thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3 = (function (gl,col,d){
var c = thi.ng.color.core.as_rgba.call(null,col);
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.call(null,gl,c.r,c.g,c.b,c.a,d);
});

thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6 = (function (gl,r,g,b,a,d){
var G__33047 = gl;
G__33047.clearColor(r,g,b,a);

G__33047.clearDepth(d);

G__33047.clear((thi.ng.geom.gl.webgl.constants.depth_buffer_bit | thi.ng.geom.gl.webgl.constants.color_buffer_bit));

return G__33047;
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
var args33052 = [];
var len__21023__auto___33065 = arguments.length;
var i__21024__auto___33066 = (0);
while(true){
if((i__21024__auto___33066 < len__21023__auto___33065)){
args33052.push((arguments[i__21024__auto___33066]));

var G__33067 = (i__21024__auto___33066 + (1));
i__21024__auto___33066 = G__33067;
continue;
} else {
}
break;
}

var G__33054 = args33052.length;
switch (G__33054) {
case 2:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33052.length)].join('')));

}
});

thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__33055){
var map__33056 = p__33055;
var map__33056__$1 = ((((!((map__33056 == null)))?((((map__33056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33056):map__33056);
var vec__33057 = cljs.core.get.call(null,map__33056__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.call(null,vec__33057,(0),null);
var y = cljs.core.nth.call(null,vec__33057,(1),null);
var vec__33060 = cljs.core.get.call(null,map__33056__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__33060,(0),null);
var h = cljs.core.nth.call(null,vec__33060,(1),null);
return thi.ng.geom.gl.core.scissor_test.call(null,gl,x,y,w,h);
});

thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5 = (function (gl,x,y,w,h){
var G__33064 = gl;
G__33064.enable(thi.ng.geom.gl.webgl.constants.scissor_test);

G__33064.scissor(x,y,w,h);

return G__33064;
});

thi.ng.geom.gl.core.scissor_test.cljs$lang$maxFixedArity = 5;

thi.ng.geom.gl.core.cull_faces = (function thi$ng$geom$gl$core$cull_faces(gl,side){
var G__33070 = gl;
G__33070.enable(thi.ng.geom.gl.webgl.constants.cull_face);

G__33070.cullFace(side);

return G__33070;
});
thi.ng.geom.gl.core.set_viewport = (function thi$ng$geom$gl$core$set_viewport(var_args){
var args33071 = [];
var len__21023__auto___33083 = arguments.length;
var i__21024__auto___33084 = (0);
while(true){
if((i__21024__auto___33084 < len__21023__auto___33083)){
args33071.push((arguments[i__21024__auto___33084]));

var G__33085 = (i__21024__auto___33084 + (1));
i__21024__auto___33084 = G__33085;
continue;
} else {
}
break;
}

var G__33073 = args33071.length;
switch (G__33073) {
case 2:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33071.length)].join('')));

}
});

thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__33074){
var map__33075 = p__33074;
var map__33075__$1 = ((((!((map__33075 == null)))?((((map__33075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33075):map__33075);
var vec__33076 = cljs.core.get.call(null,map__33075__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.call(null,vec__33076,(0),null);
var y = cljs.core.nth.call(null,vec__33076,(1),null);
var vec__33079 = cljs.core.get.call(null,map__33075__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__33079,(0),null);
var h = cljs.core.nth.call(null,vec__33079,(1),null);
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
var vec__33091 = cljs.core.map.call(null,(function (p1__33087_SHARP_){
return gl.getExtension(p1__33087_SHARP_);
}),thi.ng.geom.gl.core.float_ext_ids);
var s_tex = cljs.core.nth.call(null,vec__33091,(0),null);
var h_tex = cljs.core.nth.call(null,vec__33091,(1),null);
var s_lin = cljs.core.nth.call(null,vec__33091,(2),null);
var h_lin = cljs.core.nth.call(null,vec__33091,(3),null);
var s_fbo = cljs.core.nth.call(null,vec__33091,(4),null);
var h_fbo = cljs.core.nth.call(null,vec__33091,(5),null);
var ext = vec__33091;
return cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.map.call(null,((function (vec__33091,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (c){
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__33091,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (pref,score){
if(cljs.core.truth_(c.call(null,pref))){
return score;
} else {
return (0);
}
});})(vec__33091,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"prefer","prefer",1694203909)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(64),(32),(16),(8),(4),(2),(1)], null))));
});})(vec__33091,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,cljs.core.reduce.call(null,((function (vec__33091,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (acc,c){
if(cljs.core.truth_((function (){var and__19795__auto__ = cljs.core.get.call(null,c,new cljs.core.Keyword(null,"texture","texture",-266291651));
if(cljs.core.truth_(and__19795__auto__)){
return cljs.core.every_QMARK_.call(null,c,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"require","require",-468001333)));
} else {
return and__19795__auto__;
}
})())){
return cljs.core.conj.call(null,acc,c);
} else {
return acc;
}
});})(vec__33091,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
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
return cljs.core.reduce_kv.call(null,(function (attribs__$1,id,p__33097){
var map__33098 = p__33097;
var map__33098__$1 = ((((!((map__33098 == null)))?((((map__33098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);
var data = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var target = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.array_buffer);
return cljs.core.update_in.call(null,attribs__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer.call(null,gl,target,mode,data),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null));
}),attribs,attribs);
});
thi.ng.geom.gl.core.make_buffers_in_spec = (function thi$ng$geom$gl$core$make_buffers_in_spec(spec,gl,mode){
var spec__$1 = cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (p1__33100_SHARP_){
return thi.ng.geom.gl.core.make_attribute_buffers.call(null,gl,mode,p1__33100_SHARP_);
}));
if(cljs.core.truth_(cljs.core.get.call(null,spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343)))){
return cljs.core.update.call(null,spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343),((function (spec__$1){
return (function (p1__33101_SHARP_){
return cljs.core.merge.call(null,p1__33101_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer.call(null,gl,thi.ng.geom.gl.webgl.constants.element_array_buffer,mode,cljs.core.get.call(null,p1__33101_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377))),new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null));
});})(spec__$1))
);
} else {
return spec__$1;
}
});
thi.ng.geom.gl.core.update_buffer_in_spec = (function thi$ng$geom$gl$core$update_buffer_in_spec(gl,spec,id,coll){
var map__33104 = id.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(spec));
var map__33104__$1 = ((((!((map__33104 == null)))?((((map__33104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33104):map__33104);
var target = cljs.core.get.call(null,map__33104__$1,new cljs.core.Keyword(null,"target","target",253001721));
var data = cljs.core.get.call(null,map__33104__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var buffer = cljs.core.get.call(null,map__33104__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var buffer_mode = cljs.core.get.call(null,map__33104__$1,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764));
var size = cljs.core.get.call(null,map__33104__$1,new cljs.core.Keyword(null,"size","size",1098693007));
thi.ng.geom.gl.core.fill_vertex_buffer.call(null,data,coll,size);

gl.bindBuffer(target,buffer);

gl.bufferData(target,data,buffer_mode);

return gl;
});
thi.ng.geom.gl.core.begin_shader = (function thi$ng$geom$gl$core$begin_shader(gl,shader,uniforms,attribs,indices){
gl.useProgram(cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"program","program",781564284)));

thi.ng.geom.gl.shaders.apply_default_uniforms.call(null,shader,uniforms);

cljs.core.reduce_kv.call(null,(function (p1__33108_SHARP_,p2__33106_SHARP_,p3__33107_SHARP_){
return thi.ng.geom.gl.shaders.set_uniform.call(null,shader,uniforms,p2__33106_SHARP_,p3__33107_SHARP_);
}),null,uniforms);

cljs.core.reduce_kv.call(null,(function (p1__33111_SHARP_,p2__33109_SHARP_,p3__33110_SHARP_){
return thi.ng.geom.gl.shaders.set_attribute.call(null,gl,shader,p2__33109_SHARP_,p3__33110_SHARP_);
}),null,attribs);

if(cljs.core.truth_(indices)){
return gl.bindBuffer(thi.ng.geom.gl.webgl.constants.element_array_buffer,cljs.core.get.call(null,indices,new cljs.core.Keyword(null,"buffer","buffer",617295198)));
} else {
return null;
}
});
thi.ng.geom.gl.core.end_shader = (function thi$ng$geom$gl$core$end_shader(gl,shader){
return cljs.core.reduce.call(null,(function (p1__33113_SHARP_,p2__33112_SHARP_){
return thi.ng.geom.gl.shaders.disable_attribute.call(null,gl,shader,cljs.core.key.call(null,p2__33112_SHARP_));
}),null,cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)));
});
thi.ng.geom.gl.core.bind_sequentially = (function thi$ng$geom$gl$core$bind_sequentially(coll){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
var temp__5720__auto___33114 = cljs.core.first.call(null,coll__$1);
if(cljs.core.truth_(temp__5720__auto___33114)){
var x_33115 = temp__5720__auto___33114;
thi.ng.geom.gl.core.bind.call(null,x_33115,i);
} else {
}

var G__33116 = (i + (1));
var G__33117 = cljs.core.next.call(null,coll__$1);
i = G__33116;
coll__$1 = G__33117;
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
thi.ng.geom.gl.core.prepare_render_state = (function thi$ng$geom$gl$core$prepare_render_state(gl,p__33118){
var map__33125 = p__33118;
var map__33125__$1 = ((((!((map__33125 == null)))?((((map__33125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33125):map__33125);
var state = cljs.core.get.call(null,map__33125__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(state)){
if(cljs.core.truth_(cljs.core.get.call(null,state,new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),true))){
thi.ng.geom.gl.core.enable.call(null,gl,thi.ng.geom.gl.webgl.constants.depth_test);
} else {
thi.ng.geom.gl.core.disable.call(null,gl,thi.ng.geom.gl.webgl.constants.depth_test);
}

if(cljs.core.truth_(cljs.core.get.call(null,state,new cljs.core.Keyword(null,"blend","blend",249565561)))){
var vec__33127_33131 = (function (){var or__19807__auto__ = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"blend-fn","blend-fn",-1294135525));
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.src_alpha,thi.ng.geom.gl.webgl.constants.one], null);
}
})();
var src_33132 = cljs.core.nth.call(null,vec__33127_33131,(0),null);
var dest_33133 = cljs.core.nth.call(null,vec__33127_33131,(1),null);
var eq_33134 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"blend-eq","blend-eq",1223359361),thi.ng.geom.gl.webgl.constants.func_add);
var G__33130_33135 = gl;
thi.ng.geom.gl.core.enable.call(null,G__33130_33135,thi.ng.geom.gl.webgl.constants.blend);

G__33130_33135.blendFunc(src_33132,dest_33133);

G__33130_33135.blendEquation(eq_33134);

} else {
thi.ng.geom.gl.core.disable.call(null,gl,thi.ng.geom.gl.webgl.constants.blend);
}

var temp__5720__auto___33136 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"tex","tex",1307057959));
if(cljs.core.truth_(temp__5720__auto___33136)){
var tex_33137 = temp__5720__auto___33136;
if(cljs.core.sequential_QMARK_.call(null,tex_33137)){
thi.ng.geom.gl.core.bind_sequentially.call(null,tex_33137);
} else {
thi.ng.geom.gl.core.bind.call(null,tex_33137,(0));
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
return thi.ng.geom.gl.core.compute_normal_matrix.call(null,(function (){var or__19807__auto__ = cljs.core.get.call(null,uniforms,model_id);
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return cljs.core.get_in.call(null,shader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),model_id,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})(),(function (){var or__19807__auto__ = cljs.core.get.call(null,uniforms,view_id);
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
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
thi.ng.geom.gl.core.draw_with_shader = (function thi$ng$geom$gl$core$draw_with_shader(gl,p__33138){
var map__33141 = p__33138;
var map__33141__$1 = ((((!((map__33141 == null)))?((((map__33141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);
var spec = map__33141__$1;
var shader = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
thi.ng.geom.gl.core.prepare_render_state.call(null,gl,shader);

thi.ng.geom.gl.core.begin_shader.call(null,gl,shader,cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)),cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"indices","indices",-1218138343)));

thi.ng.geom.gl.core.draw.call(null,gl,spec);

thi.ng.geom.gl.core.end_shader.call(null,gl,shader);

return gl;
});

//# sourceMappingURL=core.js.map