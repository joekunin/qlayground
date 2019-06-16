// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.dstruct.streams');
goog.require('cljs.core');
goog.require('thi.ng.xerror.core');


/**
 * @interface
 */
thi.ng.dstruct.streams.IInputStream = function(){};

thi.ng.dstruct.streams.read_utf8_line = (function thi$ng$dstruct$streams$read_utf8_line(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_utf8_line$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_utf8_line$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_utf8_line[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_utf8_line["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-utf8-line",_);
}
}
}
});

thi.ng.dstruct.streams.read_uint8 = (function thi$ng$dstruct$streams$read_uint8(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_uint8[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_uint8["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint8",_);
}
}
}
});

thi.ng.dstruct.streams.read_uint16_le = (function thi$ng$dstruct$streams$read_uint16_le(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_uint16_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_uint16_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint16-le",_);
}
}
}
});

thi.ng.dstruct.streams.read_uint16_be = (function thi$ng$dstruct$streams$read_uint16_be(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_uint16_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_uint16_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint16-be",_);
}
}
}
});

thi.ng.dstruct.streams.read_uint32_le = (function thi$ng$dstruct$streams$read_uint32_le(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_uint32_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_uint32_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint32-le",_);
}
}
}
});

thi.ng.dstruct.streams.read_uint32_be = (function thi$ng$dstruct$streams$read_uint32_be(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_uint32_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_uint32_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-uint32-be",_);
}
}
}
});

thi.ng.dstruct.streams.read_float_le = (function thi$ng$dstruct$streams$read_float_le(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_float_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_float_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-float-le",_);
}
}
}
});

thi.ng.dstruct.streams.read_float_be = (function thi$ng$dstruct$streams$read_float_be(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_float_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_float_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-float-be",_);
}
}
}
});

thi.ng.dstruct.streams.read_double_le = (function thi$ng$dstruct$streams$read_double_le(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_double_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_double_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-double-le",_);
}
}
}
});

thi.ng.dstruct.streams.read_double_be = (function thi$ng$dstruct$streams$read_double_be(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_double_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_double_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-double-be",_);
}
}
}
});

thi.ng.dstruct.streams.read_vec2f_le = (function thi$ng$dstruct$streams$read_vec2f_le(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_vec2f_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_vec2f_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec2f-le",_);
}
}
}
});

thi.ng.dstruct.streams.read_vec2f_be = (function thi$ng$dstruct$streams$read_vec2f_be(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_vec2f_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_vec2f_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec2f-be",_);
}
}
}
});

thi.ng.dstruct.streams.read_vec3f_le = (function thi$ng$dstruct$streams$read_vec3f_le(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_vec3f_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_vec3f_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec3f-le",_);
}
}
}
});

thi.ng.dstruct.streams.read_vec3f_be = (function thi$ng$dstruct$streams$read_vec3f_be(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.read_vec3f_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.read_vec3f_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInputStream.read-vec3f-be",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IOutputStream = function(){};

thi.ng.dstruct.streams.write_utf8_bytes = (function thi$ng$dstruct$streams$write_utf8_bytes(_,str){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2(_,str);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_utf8_bytes[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,str);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_utf8_bytes["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,str);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-utf8-bytes",_);
}
}
}
});

thi.ng.dstruct.streams.write_uint8 = (function thi$ng$dstruct$streams$write_uint8(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_uint8[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_uint8["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint8",_);
}
}
}
});

thi.ng.dstruct.streams.write_uint16_le = (function thi$ng$dstruct$streams$write_uint16_le(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_uint16_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_uint16_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint16-le",_);
}
}
}
});

thi.ng.dstruct.streams.write_uint16_be = (function thi$ng$dstruct$streams$write_uint16_be(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_uint16_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_uint16_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint16-be",_);
}
}
}
});

thi.ng.dstruct.streams.write_uint32_le = (function thi$ng$dstruct$streams$write_uint32_le(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_uint32_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_uint32_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint32-le",_);
}
}
}
});

thi.ng.dstruct.streams.write_uint32_be = (function thi$ng$dstruct$streams$write_uint32_be(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_uint32_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_uint32_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-uint32-be",_);
}
}
}
});

thi.ng.dstruct.streams.write_float_le = (function thi$ng$dstruct$streams$write_float_le(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_float_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_float_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-float-le",_);
}
}
}
});

thi.ng.dstruct.streams.write_float_be = (function thi$ng$dstruct$streams$write_float_be(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_float_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_float_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-float-be",_);
}
}
}
});

thi.ng.dstruct.streams.write_double_le = (function thi$ng$dstruct$streams$write_double_le(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_double_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_double_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-double-le",_);
}
}
}
});

thi.ng.dstruct.streams.write_double_be = (function thi$ng$dstruct$streams$write_double_be(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_double_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_double_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-double-be",_);
}
}
}
});

thi.ng.dstruct.streams.write_vec2f_le = (function thi$ng$dstruct$streams$write_vec2f_le(_,v){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_vec2f_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_vec2f_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec2f-le",_);
}
}
}
});

thi.ng.dstruct.streams.write_vec2f_be = (function thi$ng$dstruct$streams$write_vec2f_be(_,v){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_vec2f_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_vec2f_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec2f-be",_);
}
}
}
});

thi.ng.dstruct.streams.write_vec3f_le = (function thi$ng$dstruct$streams$write_vec3f_le(_,v){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_vec3f_le[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_vec3f_le["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec3f-le",_);
}
}
}
});

thi.ng.dstruct.streams.write_vec3f_be = (function thi$ng$dstruct$streams$write_vec3f_be(_,v){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.write_vec3f_be[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.write_vec3f_be["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IOutputStream.write-vec3f-be",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IStreamPosition = function(){};

thi.ng.dstruct.streams.skip = (function thi$ng$dstruct$streams$skip(_,x){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2 == null)))){
return _.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.skip[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.skip["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IStreamPosition.skip",_);
}
}
}
});

thi.ng.dstruct.streams.get_position = (function thi$ng$dstruct$streams$get_position(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.get_position[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.get_position["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IStreamPosition.get-position",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IBuffer = function(){};

thi.ng.dstruct.streams.get_byte_buffer = (function thi$ng$dstruct$streams$get_byte_buffer(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.get_byte_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.get_byte_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-byte-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.get_float_buffer = (function thi$ng$dstruct$streams$get_float_buffer(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.get_float_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.get_float_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-float-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.get_double_buffer = (function thi$ng$dstruct$streams$get_double_buffer(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.get_double_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.get_double_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-double-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.get_short_buffer = (function thi$ng$dstruct$streams$get_short_buffer(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.get_short_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.get_short_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-short-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.get_int_buffer = (function thi$ng$dstruct$streams$get_int_buffer(_){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1 == null)))){
return _.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.get_int_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.get_int_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.get-int-buffer",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IIntoBuffer = function(){};

thi.ng.dstruct.streams.into_byte_buffer = (function thi$ng$dstruct$streams$into_byte_buffer(_,dest,stride,idx){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$arity$4 == null)))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$arity$4(_,dest,stride,idx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.into_byte_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,dest,stride,idx);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.into_byte_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-byte-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.into_float_buffer = (function thi$ng$dstruct$streams$into_float_buffer(_,dest,stride,idx){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 == null)))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4(_,dest,stride,idx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.into_float_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,dest,stride,idx);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.into_float_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-float-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.into_double_buffer = (function thi$ng$dstruct$streams$into_double_buffer(_,dest,stride,idx){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$arity$4 == null)))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$arity$4(_,dest,stride,idx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.into_double_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,dest,stride,idx);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.into_double_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-double-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.into_short_buffer = (function thi$ng$dstruct$streams$into_short_buffer(_,dest,stride,idx){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$arity$4 == null)))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$arity$4(_,dest,stride,idx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.into_short_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,dest,stride,idx);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.into_short_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-short-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.into_int_buffer = (function thi$ng$dstruct$streams$into_int_buffer(_,dest,stride,idx){
if((!((_ == null))) && (!((_.thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$arity$4 == null)))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$arity$4(_,dest,stride,idx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.dstruct.streams.into_int_buffer[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,dest,stride,idx);
} else {
var m__20521__auto____$1 = (thi.ng.dstruct.streams.into_int_buffer["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,dest,stride,idx);
} else {
throw cljs.core.missing_protocol.call(null,"IIntoBuffer.into-int-buffer",_);
}
}
}
});

thi.ng.dstruct.streams.utf8_str = (function thi$ng$dstruct$streams$utf8_str(str){
return unescape(encodeURIComponent(str));
});

/**
* @constructor
 * @implements {thi.ng.dstruct.streams.IStreamPosition}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.dstruct.streams.IInputStream}
*/
thi.ng.dstruct.streams.InputStreamWrapper = (function (buf,dv,pos){
this.buf = buf;
this.dv = dv;
this.pos = pos;
})
thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(8));

var x = self__.dv.getFloat64(self__.pos);
self__.pos = (self__.pos + (8));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_le.call(null,___$1),thi.ng.dstruct.streams.read_float_le.call(null,___$1),thi.ng.dstruct.streams.read_float_le.call(null,___$1)], null);
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getUint32(self__.pos);
self__.pos = (self__.pos + (4));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(1));

var x = self__.dv.getUint8(self__.pos);
self__.pos = (self__.pos + (1));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_be.call(null,___$1),thi.ng.dstruct.streams.read_float_be.call(null,___$1),thi.ng.dstruct.streams.read_float_be.call(null,___$1)], null);
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getUint32(self__.pos,true);
self__.pos = (self__.pos + (4));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_le.call(null,___$1),thi.ng.dstruct.streams.read_float_le.call(null,___$1)], null);
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.dstruct.streams.read_float_be.call(null,___$1),thi.ng.dstruct.streams.read_float_be.call(null,___$1)], null);
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(8));

var x = self__.dv.getFloat64(self__.pos,true);
self__.pos = (self__.pos + (8));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(2));

var x = self__.dv.getUint16(self__.pos);
self__.pos = (self__.pos + (2));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(2));

var x = self__.dv.getUint16(self__.pos,true);
self__.pos = (self__.pos + (2));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getFloat32(self__.pos,true);
self__.pos = (self__.pos + (4));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4));

var x = self__.dv.getFloat32(self__.pos);
self__.pos = (self__.pos + (4));

return x;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_readable.call(null,___$1,x);

self__.pos = (self__.pos + x);

return ___$1;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint8Array(self__.buf));
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float32Array(self__.buf));
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float64Array(self__.buf));
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint16Array(self__.buf));
});

thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint32Array(self__.buf));
});

thi.ng.dstruct.streams.InputStreamWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","ArrayBuffer","js/ArrayBuffer",1951874202,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dv","dv",-1873120611,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","DataView","js/DataView",-1837680350,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$type = true;

thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$ctorStr = "thi.ng.dstruct.streams/InputStreamWrapper";

thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.dstruct.streams/InputStreamWrapper");
});

thi.ng.dstruct.streams.__GT_InputStreamWrapper = (function thi$ng$dstruct$streams$__GT_InputStreamWrapper(buf,dv,pos){
return (new thi.ng.dstruct.streams.InputStreamWrapper(buf,dv,pos));
});


/**
* @constructor
 * @implements {thi.ng.dstruct.streams.IStreamPosition}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.dstruct.streams.IOutputStream}
*/
thi.ng.dstruct.streams.OutputStreamWrapper = (function (buf,dv,pos){
this.buf = buf;
this.dv = dv;
this.pos = pos;
})
thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2 = (function (_,str){
var self__ = this;
var ___$1 = this;
var utf8_29708 = thi.ng.dstruct.streams.utf8_str.call(null,str);
var len_29709 = cljs.core.count.call(null,utf8_29708);
thi.ng.dstruct.streams.ensure_size.call(null,___$1,cljs.core.count.call(null,utf8_29708));

var i_29710 = (0);
var p_29711 = self__.pos;
while(true){
if((i_29710 < len_29709)){
self__.dv.setUint8(p_29711,utf8_29708.charCodeAt(i_29710));

var G__29712 = (i_29710 + (1));
var G__29713 = (p_29711 + (1));
i_29710 = G__29712;
p_29711 = G__29713;
continue;
} else {
self__.pos = p_29711;
}
break;
}

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(2));

self__.dv.setUint16(self__.pos,x);

self__.pos = (self__.pos + (2));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(2));

self__.dv.setUint16(self__.pos,x,true);

self__.pos = (self__.pos + (2));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setUint32(self__.pos,x);

self__.pos = (self__.pos + (4));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(12));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v),true);

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)),true);

self__.dv.setFloat32((self__.pos + (8)),cljs.core.nth.call(null,v,(2)),true);

self__.pos = (self__.pos + (12));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(12));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v));

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)));

self__.dv.setFloat32((self__.pos + (8)),cljs.core.nth.call(null,v,(2)));

self__.pos = (self__.pos + (12));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat64(self__.pos,x);

self__.pos = (self__.pos + (8));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(1));

self__.dv.setUint8(self__.pos,x);

self__.pos = (self__.pos + (1));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setFloat32(self__.pos,x);

self__.pos = (self__.pos + (4));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setFloat32(self__.pos,x,true);

self__.pos = (self__.pos + (4));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4));

self__.dv.setUint32(self__.pos,x,true);

self__.pos = (self__.pos + (4));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v));

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)));

self__.pos = (self__.pos + (8));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat64(self__.pos,x,true);

self__.pos = (self__.pos + (8));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8));

self__.dv.setFloat32(self__.pos,cljs.core.first.call(null,v),true);

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.call(null,v,(1)),true);

self__.pos = (self__.pos + (8));

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
thi.ng.dstruct.streams.ensure_size.call(null,___$1,x);

self__.pos = (self__.pos + x);

return ___$1;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint8Array(self__.buf,(0),self__.pos));
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float32Array(self__.buf,(0),(self__.pos >>> (2))));
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float64Array(self__.buf,(0),(self__.pos >>> (3))));
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint16Array(self__.buf,(0),(self__.pos >>> (1))));
});

thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint32Array(self__.buf,(0),(self__.pos >>> (2))));
});

thi.ng.dstruct.streams.OutputStreamWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","ArrayBuffer","js/ArrayBuffer",1951874202,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dv","dv",-1873120611,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","DataView","js/DataView",-1837680350,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$type = true;

thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$ctorStr = "thi.ng.dstruct.streams/OutputStreamWrapper";

thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"thi.ng.dstruct.streams/OutputStreamWrapper");
});

thi.ng.dstruct.streams.__GT_OutputStreamWrapper = (function thi$ng$dstruct$streams$__GT_OutputStreamWrapper(buf,dv,pos){
return (new thi.ng.dstruct.streams.OutputStreamWrapper(buf,dv,pos));
});

thi.ng.dstruct.streams.ensure_readable = (function thi$ng$dstruct$streams$ensure_readable(in$,size){
if(((in$.pos + size) > in$.buf.byteLength)){
throw (new Error([cljs.core.str("EOF overrun, current pos: "),cljs.core.str(in$.pos),cljs.core.str(", requested read length: "),cljs.core.str(size),cljs.core.str(", but length: "),cljs.core.str(in$.buf.byteLength)].join('')));
} else {
return null;
}
});
thi.ng.dstruct.streams.ensure_size = (function thi$ng$dstruct$streams$ensure_size(out,size){
var len = out.buf.byteLength;
if(((out.pos + size) > len)){
var buf_SINGLEQUOTE_ = (new ArrayBuffer((len + (16384))));
(new Uint8Array(buf_SINGLEQUOTE_)).set((new Uint8Array(out.buf,(0),out.pos)));

out.buf = buf_SINGLEQUOTE_;

return out.dv = (new DataView(buf_SINGLEQUOTE_));
} else {
return null;
}
});
/**
 * Takes an input or outputstream and optional mime type, returns
 *   contents as data url wrapped in a volatile. The volatile's value is
 *   initially nil and will only become realized after the function
 *   returned.
 */
thi.ng.dstruct.streams.as_data_url = (function thi$ng$dstruct$streams$as_data_url(var_args){
var args29714 = [];
var len__21023__auto___29717 = arguments.length;
var i__21024__auto___29718 = (0);
while(true){
if((i__21024__auto___29718 < len__21023__auto___29717)){
args29714.push((arguments[i__21024__auto___29718]));

var G__29719 = (i__21024__auto___29718 + (1));
i__21024__auto___29718 = G__29719;
continue;
} else {
}
break;
}

var G__29716 = args29714.length;
switch (G__29716) {
case 1:
return thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29714.length)].join('')));

}
});

thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return thi.ng.dstruct.streams.as_data_url.call(null,stream,"application/octet-stream");
});

thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$2 = (function (stream,mime){
var fr = (new FileReader());
var uri = cljs.core.volatile_BANG_.call(null,null);
fr.onload = ((function (fr,uri){
return (function (e){
return cljs.core.vreset_BANG_.call(null,uri,e.target.result);
});})(fr,uri))
;

fr.readAsDataURL((new Blob([thi.ng.dstruct.streams.get_byte_buffer.call(null,stream)],({"type": mime}))));

return uri;
});

thi.ng.dstruct.streams.as_data_url.cljs$lang$maxFixedArity = 2;

/**
 * Takes an input or outputstream, callback fn and optional mime
 *   type, calls fn with data url string, returns nil.
 */
thi.ng.dstruct.streams.as_data_url_async = (function thi$ng$dstruct$streams$as_data_url_async(var_args){
var args29722 = [];
var len__21023__auto___29725 = arguments.length;
var i__21024__auto___29726 = (0);
while(true){
if((i__21024__auto___29726 < len__21023__auto___29725)){
args29722.push((arguments[i__21024__auto___29726]));

var G__29727 = (i__21024__auto___29726 + (1));
i__21024__auto___29726 = G__29727;
continue;
} else {
}
break;
}

var G__29724 = args29722.length;
switch (G__29724) {
case 2:
return thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29722.length)].join('')));

}
});

thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$2 = (function (stream,cb){
return thi.ng.dstruct.streams.as_data_url_async.call(null,stream,cb,"application/octet-stream");
});

thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$3 = (function (stream,cb,mime){
var fr = (new FileReader());
fr.onload = ((function (fr){
return (function (p1__29721_SHARP_){
return cb.call(null,p1__29721_SHARP_.target.result);
});})(fr))
;

fr.readAsDataURL((new Blob([thi.ng.dstruct.streams.get_byte_buffer.call(null,stream)],({"type": mime}))));

return null;
});

thi.ng.dstruct.streams.as_data_url_async.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.streams.input_stream = (function thi$ng$dstruct$streams$input_stream(var_args){
var args29729 = [];
var len__21023__auto___29732 = arguments.length;
var i__21024__auto___29733 = (0);
while(true){
if((i__21024__auto___29733 < len__21023__auto___29732)){
args29729.push((arguments[i__21024__auto___29733]));

var G__29734 = (i__21024__auto___29733 + (1));
i__21024__auto___29733 = G__29734;
continue;
} else {
}
break;
}

var G__29731 = args29729.length;
switch (G__29731) {
case 1:
return thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29729.length)].join('')));

}
});

thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return thi.ng.dstruct.streams.input_stream.call(null,buf,(0));
});

thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$2 = (function (buf,pos){
return (new thi.ng.dstruct.streams.InputStreamWrapper(buf,(new DataView(buf)),pos));
});

thi.ng.dstruct.streams.input_stream.cljs$lang$maxFixedArity = 2;

thi.ng.dstruct.streams.output_stream = (function thi$ng$dstruct$streams$output_stream(var_args){
var args29736 = [];
var len__21023__auto___29739 = arguments.length;
var i__21024__auto___29740 = (0);
while(true){
if((i__21024__auto___29740 < len__21023__auto___29739)){
args29736.push((arguments[i__21024__auto___29740]));

var G__29741 = (i__21024__auto___29740 + (1));
i__21024__auto___29740 = G__29741;
continue;
} else {
}
break;
}

var G__29738 = args29736.length;
switch (G__29738) {
case 0:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29736.length)].join('')));

}
});

thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.dstruct.streams.output_stream.call(null,(4096));
});

thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$1 = (function (size){
return thi.ng.dstruct.streams.output_stream.call(null,(new ArrayBuffer(size)),(0));
});

thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$2 = (function (buf,pos){
return (new thi.ng.dstruct.streams.OutputStreamWrapper(buf,(new DataView(buf)),pos));
});

thi.ng.dstruct.streams.output_stream.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=streams.js.map