// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.attribs');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
/**
 * Vertex attribute generator using given seq of attribs. The seq
 *   should contain at least the same number of elements as there are
 *   faces to be generated. Each item itself is a vector of attrib
 *   values (in vertex order) to be assigned to each vertex. Returns
 *   generator fn.
 */
thi.ng.geom.attribs.face_attribs = (function thi$ng$geom$attribs$face_attribs(fattribs){
return (function (fid,vid,_,___$1){
return cljs.core.nth.call(null,cljs.core.nth.call(null,fattribs,fid),vid);
});
});
/**
 * Similar to face-attribs fn, but for attributes which are constant
 *   for all vertices of a single face. Takes a seq of attrib values and
 *   returns generator fn.
 */
thi.ng.geom.attribs.const_face_attribs = (function thi$ng$geom$attribs$const_face_attribs(fattribs){
return (function (fid,_,___$1,___$2){
return cljs.core.nth.call(null,fattribs,fid);
});
});
/**
 * Takes a vector of face vertices, face id, a map of vertex attribute
 *   generator fns and an options arg passed to the attribute generator
 *   fns. Returns 2-elem vector of [verts vert-attribs]. The generator
 *   fns themselves take these 4 args and should return the attribute for
 *   a single vertex: face-id, vertex-id, vertex, opts (a map).
 */
thi.ng.geom.attribs.generate_face_attribs = (function thi$ng$geom$attribs$generate_face_attribs(verts,face_id,attribs,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts,((cljs.core.seq.call(null,attribs))?cljs.core.reduce_kv.call(null,(function (acc,k,f){
return cljs.core.assoc.call(null,acc,k,cljs.core.map_indexed.call(null,(function (p1__32191_SHARP_,p2__32192_SHARP_){
return f.call(null,face_id,p1__32191_SHARP_,p2__32192_SHARP_,opts);
}),verts));
}),cljs.core.PersistentArrayMap.EMPTY,attribs):null)], null);
});
/**
 * Higher order helper, returns attribute generator fn for types which
 *   emit pre-computed values as part of their `as-mesh` impl. Takes
 *   attrib key and for each vertex looks up value in opts map (which is
 *   supplied by supporting types, e.g. sphere). If called via 2 args,
 *   the looked up values will also be passed to transformation fn (2nd
 *   arg).
 */
thi.ng.geom.attribs.supplied_attrib = (function thi$ng$geom$attribs$supplied_attrib(var_args){
var args32193 = [];
var len__21023__auto___32196 = arguments.length;
var i__21024__auto___32197 = (0);
while(true){
if((i__21024__auto___32197 < len__21023__auto___32196)){
args32193.push((arguments[i__21024__auto___32197]));

var G__32198 = (i__21024__auto___32197 + (1));
i__21024__auto___32197 = G__32198;
continue;
} else {
}
break;
}

var G__32195 = args32193.length;
switch (G__32195) {
case 1:
return thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32193.length)].join('')));

}
});

thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$1 = (function (attrib){
return (function (_,id,___$1,opts){
return cljs.core.nth.call(null,cljs.core.get.call(null,opts,attrib),id);
});
});

thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$2 = (function (attrib,tx){
return (function (_,id,___$1,opts){
return tx.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,opts,attrib),id));
});
});

thi.ng.geom.attribs.supplied_attrib.cljs$lang$maxFixedArity = 2;

thi.ng.geom.attribs.uv_rect_for_size = (function thi$ng$geom$attribs$uv_rect_for_size(var_args){
var args32201 = [];
var len__21023__auto___32204 = arguments.length;
var i__21024__auto___32205 = (0);
while(true){
if((i__21024__auto___32205 < len__21023__auto___32204)){
args32201.push((arguments[i__21024__auto___32205]));

var G__32206 = (i__21024__auto___32205 + (1));
i__21024__auto___32205 = G__32206;
continue;
} else {
}
break;
}

var G__32203 = args32201.length;
switch (G__32203) {
case 1:
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32201.length)].join('')));

}
});

thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$1 = (function (w){
return thi.ng.geom.attribs.uv_rect_for_size.call(null,w,w);
});

thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return thi.ng.geom.attribs.uv_rect_for_size.call(null,w,w,0.0,0.0,1.0,1.0);
});

thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$6 = (function (w,h,x,y,uw,vh){
var u = (0.5 * (uw / w));
var v = (0.5 * (vh / h));
var iu = (uw - u);
var iv = (vh - v);
return cljs.core.mapv.call(null,((function (u,v,iu,iv){
return (function (p1__32200_SHARP_){
return thi.ng.math.core._PLUS_.call(null,p1__32200_SHARP_,x,y);
});})(u,v,iu,iv))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,u,v),thi.ng.geom.vector.vec2.call(null,iu,v),thi.ng.geom.vector.vec2.call(null,iu,iv),thi.ng.geom.vector.vec2.call(null,u,iv)], null));
});

thi.ng.geom.attribs.uv_rect_for_size.cljs$lang$maxFixedArity = 6;

thi.ng.geom.attribs.uv_cube_map_h = (function thi$ng$geom$attribs$uv_cube_map_h(var_args){
var args32209 = [];
var len__21023__auto___32212 = arguments.length;
var i__21024__auto___32213 = (0);
while(true){
if((i__21024__auto___32213 < len__21023__auto___32212)){
args32209.push((arguments[i__21024__auto___32213]));

var G__32214 = (i__21024__auto___32213 + (1));
i__21024__auto___32213 = G__32214;
continue;
} else {
}
break;
}

var G__32211 = args32209.length;
switch (G__32211) {
case 1:
return thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32209.length)].join('')));

}
});

thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$1 = (function (h){
return thi.ng.geom.attribs.uv_cube_map_h.call(null,h,false);
});

thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$2 = (function (h,pow2_QMARK_){
var w = (h * (6));
var tw = (cljs.core.truth_(pow2_QMARK_)?thi.ng.math.core.ceil_pow2.call(null,w):w);
var fw = ((w / tw) / 6.0);
return cljs.core.mapv.call(null,((function (w,tw,fw){
return (function (p1__32208_SHARP_){
return thi.ng.geom.attribs.uv_rect_for_size.call(null,h,h,(p1__32208_SHARP_ * fw),0.0,fw,1.0);
});})(w,tw,fw))
,cljs.core.range.call(null,(6)));
});

thi.ng.geom.attribs.uv_cube_map_h.cljs$lang$maxFixedArity = 2;

thi.ng.geom.attribs.uv_cube_map_v = (function thi$ng$geom$attribs$uv_cube_map_v(var_args){
var args32217 = [];
var len__21023__auto___32220 = arguments.length;
var i__21024__auto___32221 = (0);
while(true){
if((i__21024__auto___32221 < len__21023__auto___32220)){
args32217.push((arguments[i__21024__auto___32221]));

var G__32222 = (i__21024__auto___32221 + (1));
i__21024__auto___32221 = G__32222;
continue;
} else {
}
break;
}

var G__32219 = args32217.length;
switch (G__32219) {
case 1:
return thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32217.length)].join('')));

}
});

thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$1 = (function (h){
return thi.ng.geom.attribs.uv_cube_map_v.call(null,h,false);
});

thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$2 = (function (w,pow2_QMARK_){
var h = (w * (6));
var th = (cljs.core.truth_(pow2_QMARK_)?thi.ng.math.core.ceil_pow2.call(null,h):h);
var fh = ((h / th) / 6.0);
return cljs.core.mapv.call(null,((function (h,th,fh){
return (function (p1__32216_SHARP_){
return thi.ng.geom.attribs.uv_rect_for_size.call(null,w,w,0.0,(p1__32216_SHARP_ * fh),1.0,fh);
});})(h,th,fh))
,cljs.core.range.call(null,(6)));
});

thi.ng.geom.attribs.uv_cube_map_v.cljs$lang$maxFixedArity = 2;

thi.ng.geom.attribs.uv_default_rect = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null),thi.ng.geom.vector.vec2.call(null,1.0,0.0),thi.ng.geom.vector.vec2.call(null,1.0),thi.ng.geom.vector.vec2.call(null,0.0,1.0)], null);
thi.ng.geom.attribs.uv_faces = thi.ng.geom.attribs.face_attribs.call(null,cljs.core.repeat.call(null,thi.ng.geom.attribs.uv_default_rect));
/**
 * Generates tubular UV coordinates, using data provided in
 *   options map (:u :v :du :dv keys)
 */
thi.ng.geom.attribs.uv_tube = (function thi$ng$geom$attribs$uv_tube(_,vid,___$1,p__32224){
var map__32228 = p__32224;
var map__32228__$1 = ((((!((map__32228 == null)))?((((map__32228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32228):map__32228);
var u = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"v","v",21465059));
var du = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"du","du",1000321745));
var dv = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"dv","dv",781315158));
var G__32230 = (vid | (0));
switch (G__32230) {
case (0):
return thi.ng.geom.vector.vec2.call(null,u,v);

break;
case (1):
return thi.ng.geom.vector.vec2.call(null,(u + du),v);

break;
case (2):
return thi.ng.geom.vector.vec2.call(null,(u + du),(v + dv));

break;
default:
return thi.ng.geom.vector.vec2.call(null,u,(v + dv));

}
});
/**
 * Generates UV coordinates for a circle/trianglefan, using data
 *   provided in options map (:theta & :r keys). The first vertex of each
 *   triangle is assumed to be in the center of the circle, the other 2
 *   vertices are located at the circles perimeter.
 */
thi.ng.geom.attribs.uv_flat_disc = (function thi$ng$geom$attribs$uv_flat_disc(_,vid,___$1,p__32232){
var map__32236 = p__32232;
var map__32236__$1 = ((((!((map__32236 == null)))?((((map__32236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);
var opts = map__32236__$1;
var theta = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var r = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var G__32238 = (vid | (0));
switch (G__32238) {
case (0):
return thi.ng.geom.vector.vec2.call(null,0.5);

break;
case (1):
return thi.ng.geom.vector.vec2.call(null,((Math.cos(theta) * r) + 0.5),((Math.sin(theta) * r) + 0.5));

break;
default:
var theta__$1 = (theta + cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"delta","delta",108939957)));
return thi.ng.geom.vector.vec2.call(null,((Math.cos(theta__$1) * r) + 0.5),((Math.sin(theta__$1) * r) + 0.5));

}
});
/**
 * HOF UV generator for polygons/polyhedras. Takes polygon resolution
 *   and computes N UV coords, returns generator fn
 */
thi.ng.geom.attribs.uv_polygon_disc = (function thi$ng$geom$attribs$uv_polygon_disc(res){
return thi.ng.geom.attribs.face_attribs.call(null,cljs.core.repeat.call(null,cljs.core.mapv.call(null,(function (p1__32240_SHARP_){
return thi.ng.math.core._PLUS_.call(null,thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,0.5,(p1__32240_SHARP_ * thi.ng.math.core.TWO_PI))),0.5);
}),thi.ng.math.core.norm_range.call(null,res))));
});

//# sourceMappingURL=attribs.js.map