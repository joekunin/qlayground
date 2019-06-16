// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.call(null,"object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))){
return cljs.core.get.call(null,thi.ng.typedarrays.core.array_types,cljs.core.first.call(null,cljs.core.re_find.call(null,/((Uint|Int|Float)\d+(Clamped)?Array)/,[cljs.core.str(x.constructor)].join(''))));
} else {
return null;
}
}
});
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_arrays_supported_QMARK_)){
cljs.core.run_BANG_.call(null,(function (type){
if(cljs.core.truth_((self[type]).prototype.slice)){
return null;
} else {
return (self[type]).prototype.slice = (function (from,to){
var this$ = this;
var from__$1 = (((from < (0)))?((this$.length + from) | (0)):(from | (0)));
var to__$1 = (cljs.core.truth_(goog.isNumber(to))?(((to < (0)))?((this$.length + to) | (0)):Math.min(to,this$.length)):this$.length);
var len = Math.max((to__$1 - from__$1),(0));
var ctor = this$.constructor;
var dest = new ctor(len);
var i_30879 = (0);
while(true){
if((i_30879 < len)){
(dest[i_30879] = (this$[(from__$1 + i_30879)]));

var G__30880 = (i_30879 + (1));
i_30879 = G__30880;
continue;
} else {
}
break;
}

return dest;
});
}
}),cljs.core.keys.call(null,thi.ng.typedarrays.core.array_types));
} else {
}
/**
 * Creates a native Int8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_30881 = (0);
var coll_30882 = size_or_coll;
while(true){
if((i_30881 < len)){
(buf[i_30881] = cljs.core.first.call(null,coll_30882));

var G__30883 = (i_30881 + (1));
var G__30884 = cljs.core.next.call(null,coll_30882);
i_30881 = G__30883;
coll_30882 = G__30884;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int8_view = (function thi$ng$typedarrays$core$int8_view(var_args){
var args30885 = [];
var len__21023__auto___30888 = arguments.length;
var i__21024__auto___30889 = (0);
while(true){
if((i__21024__auto___30889 < len__21023__auto___30888)){
args30885.push((arguments[i__21024__auto___30889]));

var G__30890 = (i__21024__auto___30889 + (1));
i__21024__auto___30889 = G__30890;
continue;
} else {
}
break;
}

var G__30887 = args30885.length;
switch (G__30887) {
case 1:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30885.length)].join('')));

}
});

thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int8Array(a.buffer));
});

thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int8Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int8_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_30892 = (0);
var coll_30893 = size_or_coll;
while(true){
if((i_30892 < len)){
(buf[i_30892] = cljs.core.first.call(null,coll_30893));

var G__30894 = (i_30892 + (1));
var G__30895 = cljs.core.next.call(null,coll_30893);
i_30892 = G__30894;
coll_30893 = G__30895;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_view = (function thi$ng$typedarrays$core$uint8_view(var_args){
var args30896 = [];
var len__21023__auto___30899 = arguments.length;
var i__21024__auto___30900 = (0);
while(true){
if((i__21024__auto___30900 < len__21023__auto___30899)){
args30896.push((arguments[i__21024__auto___30900]));

var G__30901 = (i__21024__auto___30900 + (1));
i__21024__auto___30900 = G__30901;
continue;
} else {
}
break;
}

var G__30898 = args30896.length;
switch (G__30898) {
case 1:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30896.length)].join('')));

}
});

thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8Array(a.buffer));
});

thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint8_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_30903 = (0);
var coll_30904 = size_or_coll;
while(true){
if((i_30903 < len)){
(buf[i_30903] = cljs.core.first.call(null,coll_30904));

var G__30905 = (i_30903 + (1));
var G__30906 = cljs.core.next.call(null,coll_30904);
i_30903 = G__30905;
coll_30904 = G__30906;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8ClampedArray view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_clamped_view = (function thi$ng$typedarrays$core$uint8_clamped_view(var_args){
var args30907 = [];
var len__21023__auto___30910 = arguments.length;
var i__21024__auto___30911 = (0);
while(true){
if((i__21024__auto___30911 < len__21023__auto___30910)){
args30907.push((arguments[i__21024__auto___30911]));

var G__30912 = (i__21024__auto___30911 + (1));
i__21024__auto___30911 = G__30912;
continue;
} else {
}
break;
}

var G__30909 = args30907.length;
switch (G__30909) {
case 1:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30907.length)].join('')));

}
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8ClampedArray(a.buffer));
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8ClampedArray(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Int16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_30914 = (0);
var coll_30915 = size_or_coll;
while(true){
if((i_30914 < len)){
(buf[i_30914] = cljs.core.first.call(null,coll_30915));

var G__30916 = (i_30914 + (1));
var G__30917 = cljs.core.next.call(null,coll_30915);
i_30914 = G__30916;
coll_30915 = G__30917;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int16_view = (function thi$ng$typedarrays$core$int16_view(var_args){
var args30918 = [];
var len__21023__auto___30921 = arguments.length;
var i__21024__auto___30922 = (0);
while(true){
if((i__21024__auto___30922 < len__21023__auto___30921)){
args30918.push((arguments[i__21024__auto___30922]));

var G__30923 = (i__21024__auto___30922 + (1));
i__21024__auto___30922 = G__30923;
continue;
} else {
}
break;
}

var G__30920 = args30918.length;
switch (G__30920) {
case 1:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30918.length)].join('')));

}
});

thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int16Array(a.buffer));
});

thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int16Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int16_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_30925 = (0);
var coll_30926 = size_or_coll;
while(true){
if((i_30925 < len)){
(buf[i_30925] = cljs.core.first.call(null,coll_30926));

var G__30927 = (i_30925 + (1));
var G__30928 = cljs.core.next.call(null,coll_30926);
i_30925 = G__30927;
coll_30926 = G__30928;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint16_view = (function thi$ng$typedarrays$core$uint16_view(var_args){
var args30929 = [];
var len__21023__auto___30932 = arguments.length;
var i__21024__auto___30933 = (0);
while(true){
if((i__21024__auto___30933 < len__21023__auto___30932)){
args30929.push((arguments[i__21024__auto___30933]));

var G__30934 = (i__21024__auto___30933 + (1));
i__21024__auto___30933 = G__30934;
continue;
} else {
}
break;
}

var G__30931 = args30929.length;
switch (G__30931) {
case 1:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30929.length)].join('')));

}
});

thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint16Array(a.buffer));
});

thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint16Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint16_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Int32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_30936 = (0);
var coll_30937 = size_or_coll;
while(true){
if((i_30936 < len)){
(buf[i_30936] = cljs.core.first.call(null,coll_30937));

var G__30938 = (i_30936 + (1));
var G__30939 = cljs.core.next.call(null,coll_30937);
i_30936 = G__30938;
coll_30937 = G__30939;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int32_view = (function thi$ng$typedarrays$core$int32_view(var_args){
var args30940 = [];
var len__21023__auto___30943 = arguments.length;
var i__21024__auto___30944 = (0);
while(true){
if((i__21024__auto___30944 < len__21023__auto___30943)){
args30940.push((arguments[i__21024__auto___30944]));

var G__30945 = (i__21024__auto___30944 + (1));
i__21024__auto___30944 = G__30945;
continue;
} else {
}
break;
}

var G__30942 = args30940.length;
switch (G__30942) {
case 1:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30940.length)].join('')));

}
});

thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int32Array(a.buffer));
});

thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_30947 = (0);
var coll_30948 = size_or_coll;
while(true){
if((i_30947 < len)){
(buf[i_30947] = cljs.core.first.call(null,coll_30948));

var G__30949 = (i_30947 + (1));
var G__30950 = cljs.core.next.call(null,coll_30948);
i_30947 = G__30949;
coll_30948 = G__30950;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint32_view = (function thi$ng$typedarrays$core$uint32_view(var_args){
var args30951 = [];
var len__21023__auto___30954 = arguments.length;
var i__21024__auto___30955 = (0);
while(true){
if((i__21024__auto___30955 < len__21023__auto___30954)){
args30951.push((arguments[i__21024__auto___30955]));

var G__30956 = (i__21024__auto___30955 + (1));
i__21024__auto___30955 = G__30956;
continue;
} else {
}
break;
}

var G__30953 = args30951.length;
switch (G__30953) {
case 1:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30951.length)].join('')));

}
});

thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint32Array(a.buffer));
});

thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Float32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_30958 = (0);
var coll_30959 = size_or_coll;
while(true){
if((i_30958 < len)){
(buf[i_30958] = cljs.core.first.call(null,coll_30959));

var G__30960 = (i_30958 + (1));
var G__30961 = cljs.core.next.call(null,coll_30959);
i_30958 = G__30960;
coll_30959 = G__30961;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float32_view = (function thi$ng$typedarrays$core$float32_view(var_args){
var args30962 = [];
var len__21023__auto___30965 = arguments.length;
var i__21024__auto___30966 = (0);
while(true){
if((i__21024__auto___30966 < len__21023__auto___30965)){
args30962.push((arguments[i__21024__auto___30966]));

var G__30967 = (i__21024__auto___30966 + (1));
i__21024__auto___30966 = G__30967;
continue;
} else {
}
break;
}

var G__30964 = args30962.length;
switch (G__30964) {
case 1:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30962.length)].join('')));

}
});

thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float32Array(a.buffer));
});

thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.float32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Float64Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_30969 = (0);
var coll_30970 = size_or_coll;
while(true){
if((i_30969 < len)){
(buf[i_30969] = cljs.core.first.call(null,coll_30970));

var G__30971 = (i_30969 + (1));
var G__30972 = cljs.core.next.call(null,coll_30970);
i_30969 = G__30971;
coll_30970 = G__30972;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float64Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float64_view = (function thi$ng$typedarrays$core$float64_view(var_args){
var args30973 = [];
var len__21023__auto___30976 = arguments.length;
var i__21024__auto___30977 = (0);
while(true){
if((i__21024__auto___30977 < len__21023__auto___30976)){
args30973.push((arguments[i__21024__auto___30977]));

var G__30978 = (i__21024__auto___30977 + (1));
i__21024__auto___30977 = G__30978;
continue;
} else {
}
break;
}

var G__30975 = args30973.length;
switch (G__30975) {
case 1:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30973.length)].join('')));

}
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float64Array(a.buffer));
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float64Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.float64_view.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map