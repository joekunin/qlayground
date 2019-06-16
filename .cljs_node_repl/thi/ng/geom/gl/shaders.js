// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.gl.shaders');
goog.require('cljs.core');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.gl.utils');
goog.require('thi.ng.glsl.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.gl.webgl.constants');
goog.require('thi.ng.dstruct.streams');
goog.require('clojure.string');
goog.require('thi.ng.typedarrays.core');
thi.ng.geom.gl.shaders.bool__GT_int = (function thi$ng$geom$gl$shaders$bool__GT_int(x){
if(cljs.core.truth_(x)){
return (1);
} else {
return (0);
}
});
thi.ng.geom.gl.shaders.bool__GT_ivec = (function thi$ng$geom$gl$shaders$bool__GT_ivec(coll){
return thi.ng.typedarrays.core.int32.call(null,cljs.core.mapv.call(null,thi.ng.geom.gl.shaders.bool__GT_int,coll));
});
thi.ng.geom.gl.shaders.uniform_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bvec3","bvec3",-635324058),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"mat3","mat3",402087048),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"ivec4","ivec4",-537108439),new cljs.core.Keyword(null,"mat2","mat2",238424363),new cljs.core.Keyword(null,"ivec2","ivec2",148465998),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"bvec2","bvec2",-148389679),new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"bvec4","bvec4",1798744632),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"ivec3","ivec3",-104254851)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3iv",thi.ng.typedarrays.core.int32,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix3fv",thi.ng.typedarrays.core.float32,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3fv",thi.ng.typedarrays.core.float32,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1f",cljs.core.float$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4iv",thi.ng.typedarrays.core.int32,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix2fv",thi.ng.typedarrays.core.float32,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2iv",thi.ng.typedarrays.core.int32,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4fv",thi.ng.typedarrays.core.float32,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2fv",thi.ng.typedarrays.core.float32,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2iv",thi.ng.typedarrays.core.int32,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix4fv",thi.ng.typedarrays.core.float32,(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4iv",thi.ng.typedarrays.core.int32,(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3iv",thi.ng.typedarrays.core.int32,(3)], null)]);
thi.ng.geom.gl.shaders.init_shader_uniforms = (function thi$ng$geom$gl$shaders$init_shader_uniforms(gl,prog,uniforms){
return cljs.core.reduce_kv.call(null,(function (umap,id,type){
var loc = gl.getUniformLocation(prog,cljs.core.name.call(null,id));
var vec__30816 = ((cljs.core.sequential_QMARK_.call(null,type))?type:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
var type__$1 = cljs.core.nth.call(null,vec__30816,(0),null);
var default$ = cljs.core.nth.call(null,vec__30816,(1),null);
var opt = cljs.core.nth.call(null,vec__30816,(2),null);
var vec__30819 = thi.ng.geom.gl.shaders.uniform_types.call(null,type__$1);
var setter = cljs.core.nth.call(null,vec__30819,(0),null);
var u_cast = cljs.core.nth.call(null,vec__30819,(1),null);
var u_len = cljs.core.nth.call(null,vec__30819,(2),null);
var setter__$1 = (gl[[cljs.core.str("uniform"),cljs.core.str(setter)].join('')]);
return cljs.core.assoc.call(null,umap,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$,new cljs.core.Keyword(null,"setter","setter",1948354926),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"int","int",-1741416922),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null,new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),null], null), null).call(null,type__$1))?((function (loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1){
return (function (x){
return setter__$1.call(gl,loc,u_cast.call(null,x));
});})(loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1))
:(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mat3","mat3",402087048),null,new cljs.core.Keyword(null,"mat2","mat2",238424363),null,new cljs.core.Keyword(null,"mat4","mat4",-237531594),null], null), null).call(null,type__$1))?((function (loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1){
return (function (x){
return setter__$1.call(gl,loc,cljs.core.boolean$.call(null,opt),(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))?x:u_cast.call(null,x)));
});})(loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1))
:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vec2","vec2",-762258640),type__$1))?((function (loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1){
return (function (x){
var x__$1 = (cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))?x:((((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.thi$ng$dstruct$streams$IBuffer$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,thi.ng.dstruct.streams.IBuffer,x):false)):cljs.core.native_satisfies_QMARK_.call(null,thi.ng.dstruct.streams.IBuffer,x)))?thi.ng.dstruct.streams.get_float_buffer.call(null,x):((typeof x === 'number')?u_cast.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null)):u_cast.call(null,x)
)));
return setter__$1.call(gl,loc,x__$1);
});})(loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1))
:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vec3","vec3",1116680488),type__$1))?((function (loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1){
return (function (x){
var x__$1 = (cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))?x:((((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.thi$ng$dstruct$streams$IBuffer$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,thi.ng.dstruct.streams.IBuffer,x):false)):cljs.core.native_satisfies_QMARK_.call(null,thi.ng.dstruct.streams.IBuffer,x)))?thi.ng.dstruct.streams.get_float_buffer.call(null,x):((typeof x === 'number')?u_cast.call(null,cljs.core.subvec.call(null,cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.int24.call(null,x))),(0),(3))):u_cast.call(null,x)
)));
return setter__$1.call(gl,loc,x__$1);
});})(loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1))
:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vec4","vec4",631182126),type__$1))?((function (loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1){
return (function (x){
var x__$1 = (cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))?x:((((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.thi$ng$dstruct$streams$IBuffer$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,thi.ng.dstruct.streams.IBuffer,x):false)):cljs.core.native_satisfies_QMARK_.call(null,thi.ng.dstruct.streams.IBuffer,x)))?thi.ng.dstruct.streams.get_float_buffer.call(null,x):((typeof x === 'number')?thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.int24.call(null,x))):((typeof x === 'string')?thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.css.call(null,x))):u_cast.call(null,x)
))));
return setter__$1.call(gl,loc,x__$1);
});})(loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1))
:((function (loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1){
return (function (x){
return setter__$1.call(gl,loc,(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))?x:u_cast.call(null,((!(cljs.core.sequential_QMARK_.call(null,x)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null):x))));
});})(loc,vec__30816,type__$1,default$,opt,vec__30819,setter,u_cast,u_len,setter__$1))

))))),new cljs.core.Keyword(null,"loc","loc",-584284901),loc], null));
}),cljs.core.PersistentArrayMap.EMPTY,uniforms);
});
thi.ng.geom.gl.shaders.set_uniform = (function thi$ng$geom$gl$shaders$set_uniform(shader,uniforms,id,val){
var temp__5718__auto__ = cljs.core.get.call(null,cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)),id);
if(cljs.core.truth_(temp__5718__auto__)){
var u_spec = temp__5718__auto__;
return cljs.core.get.call(null,u_spec,new cljs.core.Keyword(null,"setter","setter",1948354926)).call(null,((cljs.core.fn_QMARK_.call(null,val))?val.call(null,shader,uniforms):val));
} else {
return console.warn((new Date()),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20736__auto__ = id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20736__auto__);
})(),"Unknown shader uniform: "),"WARN"))));
}
});
thi.ng.geom.gl.shaders.apply_default_uniforms = (function thi$ng$geom$gl$shaders$apply_default_uniforms(shader,uniforms){
return cljs.core.reduce_kv.call(null,(function (_,id,val){
if(cljs.core.not.call(null,cljs.core.get.call(null,uniforms,id))){
var temp__5718__auto__ = cljs.core.get.call(null,val,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5718__auto__)){
var d = temp__5718__auto__;
return thi.ng.geom.gl.shaders.set_uniform.call(null,shader,uniforms,id,d);
} else {
return null;
}
} else {
return null;
}
}),null,cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)));
});
thi.ng.geom.gl.shaders.init_shader_attribs = (function thi$ng$geom$gl$shaders$init_shader_attribs(gl,prog,attribs){
return cljs.core.reduce_kv.call(null,(function (acc,id,_){
return cljs.core.assoc.call(null,acc,id,gl.getAttribLocation(prog,cljs.core.name.call(null,id)));
}),cljs.core.PersistentArrayMap.EMPTY,attribs);
});
thi.ng.geom.gl.shaders.set_attribute = (function thi$ng$geom$gl$shaders$set_attribute(gl,shader,id,attrib_spec){
var map__30828 = attrib_spec;
var map__30828__$1 = ((((!((map__30828 == null)))?((((map__30828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30828):map__30828);
var buffer = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var stride = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var size = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var offset = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var loc = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var temp__5718__auto__ = (cljs.core.get.call(null,cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),id) | (0));
if(cljs.core.truth_(temp__5718__auto__)){
var loc__$1 = temp__5718__auto__;
var G__30830 = gl;
G__30830.bindBuffer(thi.ng.geom.gl.webgl.constants.array_buffer,buffer);

G__30830.enableVertexAttribArray(loc__$1);

G__30830.vertexAttribPointer(loc__$1,(size | (0)),(function (){var or__19807__auto__ = type;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.gl.webgl.constants.float$;
}
})(),cljs.core.boolean$.call(null,normalized_QMARK_),(function (){var or__19807__auto__ = stride;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return (0);
}
})(),(function (){var or__19807__auto__ = offset;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return (0);
}
})());

return G__30830;
} else {
return console.warn((new Date()),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,(function (){var x__20736__auto__ = [cljs.core.str("Unknown shader attribute: "),cljs.core.str(id)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20736__auto__);
})(),"WARN"))));
}
});
thi.ng.geom.gl.shaders.disable_attribute = (function thi$ng$geom$gl$shaders$disable_attribute(gl,shader,id){
var temp__5718__auto__ = cljs.core.get.call(null,cljs.core.get.call(null,shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),id);
if(cljs.core.truth_(temp__5718__auto__)){
var loc = temp__5718__auto__;
gl.disableVertexAttribArray(loc);

return gl;
} else {
return console.warn((new Date()),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,(function (){var x__20736__auto__ = [cljs.core.str("Unknown shader attribute: "),cljs.core.str(id)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20736__auto__);
})(),"WARN"))));
}
});
thi.ng.geom.gl.shaders.default_prelude = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp int;\n  precision highp float;\n  #else\n  precision mediump int;\n  precision mediump float;\n  #endif\n  #ifndef PI\n  #define PI      3.141592653589793\n  #endif\n  #ifndef TWO_PI\n  #define TWO_PI  6.283185307179586\n  #endif\n  #ifndef HALF_PI\n  #define HALF_PI 1.570796326794896\n  #endif\n  #ifndef RAD\n  #define RAD     0.008726646259972\n  #endif\n  ";
thi.ng.geom.gl.shaders.compile_glsl_vars = (function thi$ng$geom$gl$shaders$compile_glsl_vars(qualifier,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p__30835){
var vec__30836 = p__30835;
var id = cljs.core.nth.call(null,vec__30836,(0),null);
var type = cljs.core.nth.call(null,vec__30836,(1),null);
return [cljs.core.str(qualifier),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,((cljs.core.sequential_QMARK_.call(null,type))?cljs.core.first.call(null,type):type))),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str(";\n")].join('');
}),coll));
});
thi.ng.geom.gl.shaders.compile_glsl3_attribs = (function thi$ng$geom$gl$shaders$compile_glsl3_attribs(coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p__30843){
var vec__30844 = p__30843;
var id = cljs.core.nth.call(null,vec__30844,(0),null);
var type = cljs.core.nth.call(null,vec__30844,(1),null);
if(cljs.core.sequential_QMARK_.call(null,type)){
return [cljs.core.str("layout(location="),cljs.core.str(cljs.core.nth.call(null,type,(1))),cljs.core.str(") in "),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,type))),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str(";\n")].join('');
} else {
return [cljs.core.str("in "),cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str(";\n")].join('');
}
}),coll));
});
thi.ng.geom.gl.shaders.prepare_shader_sources = (function thi$ng$geom$gl$shaders$prepare_shader_sources(p__30847){
var map__30850 = p__30847;
var map__30850__$1 = ((((!((map__30850 == null)))?((((map__30850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30850):map__30850);
var vs = cljs.core.get.call(null,map__30850__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var fs = cljs.core.get.call(null,map__30850__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var uniforms = cljs.core.get.call(null,map__30850__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var attribs = cljs.core.get.call(null,map__30850__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var varying = cljs.core.get.call(null,map__30850__$1,new cljs.core.Keyword(null,"varying","varying",685535123));
var prelude = cljs.core.get.call(null,map__30850__$1,new cljs.core.Keyword(null,"prelude","prelude",-138977836));
var version = cljs.core.get.call(null,map__30850__$1,new cljs.core.Keyword(null,"version","version",425292698));
var gl3_QMARK_ = (function (){var and__19795__auto__ = version;
if(cljs.core.truth_(and__19795__auto__)){
return (version >= (300));
} else {
return and__19795__auto__;
}
})();
var u_src = thi.ng.geom.gl.shaders.compile_glsl_vars.call(null,"uniform",uniforms);
var a_src = (cljs.core.truth_(gl3_QMARK_)?thi.ng.geom.gl.shaders.compile_glsl3_attribs.call(null,attribs):thi.ng.geom.gl.shaders.compile_glsl_vars.call(null,"attribute",attribs));
var v_src_vs = thi.ng.geom.gl.shaders.compile_glsl_vars.call(null,(cljs.core.truth_(gl3_QMARK_)?"out":"varying"),varying);
var v_src_fs = thi.ng.geom.gl.shaders.compile_glsl_vars.call(null,(cljs.core.truth_(gl3_QMARK_)?"in":"varying"),varying);
var src = (cljs.core.truth_(version)?[cljs.core.str("#version "),cljs.core.str(version),cljs.core.str("\n")].join(''):"");
var src__$1 = [cljs.core.str(src),cljs.core.str((function (){var or__19807__auto__ = prelude;
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return thi.ng.geom.gl.shaders.default_prelude;
}
})()),cljs.core.str(u_src)].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vs-src","vs-src",-692281053),[cljs.core.str(src__$1),cljs.core.str(v_src_vs),cljs.core.str(a_src),cljs.core.str(vs)].join(''),new cljs.core.Keyword(null,"fs-src","fs-src",1463465927),[cljs.core.str(src__$1),cljs.core.str(v_src_fs),cljs.core.str(fs)].join('')], null);
});
thi.ng.geom.gl.shaders.parse_and_throw_error = (function thi$ng$geom$gl$shaders$parse_and_throw_error(gl,shader,src){
var src_lines = cljs.core.vec.call(null,clojure.string.split_lines.call(null,src));
var errors = clojure.string.join.call(null,"\n",cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (src_lines){
return (function (line){
var vec__30855 = cljs.core.re_find.call(null,/ERROR: \d+:(\d+): (.*)/,line);
var _ = cljs.core.nth.call(null,vec__30855,(0),null);
var ln = cljs.core.nth.call(null,vec__30855,(1),null);
var msg = cljs.core.nth.call(null,vec__30855,(2),null);
if(cljs.core.truth_(ln)){
return [cljs.core.str("line "),cljs.core.str(ln),cljs.core.str(": "),cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str(cljs.core.nth.call(null,src_lines,parseInt(ln,(10))))].join('');
} else {
return null;
}
});})(src_lines))
,clojure.string.split_lines.call(null,gl.getShaderInfoLog(shader)))));
gl.deleteShader(shader);

return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Error compiling shader:\n"),cljs.core.str(errors)].join(''));
});
thi.ng.geom.gl.shaders.compile_shader = (function thi$ng$geom$gl$shaders$compile_shader(gl,src,type){
var temp__5718__auto__ = gl.createShader(type);
if(cljs.core.truth_(temp__5718__auto__)){
var shader = temp__5718__auto__;
gl.shaderSource(shader,src);

gl.compileShader(shader);

if(cljs.core.truth_(gl.getShaderParameter(shader,thi.ng.geom.gl.webgl.constants.compile_status))){
return shader;
} else {
return thi.ng.geom.gl.shaders.parse_and_throw_error.call(null,gl,shader,src);
}
} else {
return thi.ng.xerror.core.throw_BANG_.call(null,"Can't create shader");
}
});
thi.ng.geom.gl.shaders.bind_attrib_locations = (function thi$ng$geom$gl$shaders$bind_attrib_locations(gl,program,attribs){
return cljs.core.reduce_kv.call(null,(function (_,id,att){
if(cljs.core.sequential_QMARK_.call(null,att)){
console.debug((new Date()),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20736__auto__ = id;
return cljs.core._conj.call(null,(function (){var x__20736__auto____$1 = cljs.core.nth.call(null,att,(1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20736__auto____$1);
})(),x__20736__auto__);
})(),new cljs.core.Keyword(null,"bind-attr","bind-attr",393092719)),"DEBUG"))));

return gl.bindAttribLocation(program,cljs.core.nth.call(null,att,(1)),cljs.core.name.call(null,id));
} else {
return null;
}
}),null,attribs);
});
thi.ng.geom.gl.shaders.make_shader_from_spec = (function thi$ng$geom$gl$shaders$make_shader_from_spec(gl,spec){
var map__30864 = spec;
var map__30864__$1 = ((((!((map__30864 == null)))?((((map__30864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30864):map__30864);
var uniforms = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var attribs = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var map__30865 = thi.ng.geom.gl.shaders.prepare_shader_sources.call(null,spec);
var map__30865__$1 = ((((!((map__30865 == null)))?((((map__30865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30865):map__30865);
var vs_src = cljs.core.get.call(null,map__30865__$1,new cljs.core.Keyword(null,"vs-src","vs-src",-692281053));
var fs_src = cljs.core.get.call(null,map__30865__$1,new cljs.core.Keyword(null,"fs-src","fs-src",1463465927));
var vs = thi.ng.geom.gl.shaders.compile_shader.call(null,gl,vs_src,thi.ng.geom.gl.webgl.constants.vertex_shader);
var fs = thi.ng.geom.gl.shaders.compile_shader.call(null,gl,fs_src,thi.ng.geom.gl.webgl.constants.fragment_shader);
var prog = gl.createProgram();
var G__30868_30870 = gl;
G__30868_30870.attachShader(prog,vs);

G__30868_30870.attachShader(prog,fs);

thi.ng.geom.gl.shaders.bind_attrib_locations.call(null,G__30868_30870,prog,attribs);

G__30868_30870.linkProgram(prog);


if(cljs.core.truth_(gl.getProgramParameter(prog,thi.ng.geom.gl.webgl.constants.link_status))){
var attribs__$1 = thi.ng.geom.gl.shaders.init_shader_attribs.call(null,gl,prog,attribs);
var uniforms__$1 = thi.ng.geom.gl.shaders.init_shader_uniforms.call(null,gl,prog,uniforms);
var G__30869_30871 = gl;
G__30869_30871.deleteShader(vs);

G__30869_30871.deleteShader(fs);


return cljs.core.merge.call(null,spec,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"program","program",781564284),prog,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),uniforms__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093),attribs__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs_src,new cljs.core.Keyword(null,"fs","fs",-2122926244),fs_src], null));
} else {
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Shader failed to link:"),cljs.core.str(gl.getProgramInfoLog(prog))].join(''));
}
});
thi.ng.geom.gl.shaders.make_shader_from_dom = (function thi$ng$geom$gl$shaders$make_shader_from_dom(gl,p__30872){
var map__30875 = p__30872;
var map__30875__$1 = ((((!((map__30875 == null)))?((((map__30875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30875):map__30875);
var spec = map__30875__$1;
var vs = cljs.core.get.call(null,map__30875__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var fs = cljs.core.get.call(null,map__30875__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
return thi.ng.geom.gl.shaders.make_shader_from_spec.call(null,gl,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"vs","vs",-2022097090),thi.ng.geom.gl.utils.get_script_text.call(null,vs),new cljs.core.Keyword(null,"fs","fs",-2122926244),thi.ng.geom.gl.utils.get_script_text.call(null,fs)));
});

//# sourceMappingURL=shaders.js.map