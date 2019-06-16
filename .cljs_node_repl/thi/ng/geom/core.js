// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.core');
goog.require('cljs.core');
thi.ng.geom.core._STAR_resolution_STAR_ = (20);

/**
 * @interface
 */
thi.ng.geom.core.IDistance = function(){};

thi.ng.geom.core.dist = (function thi$ng$geom$core$dist(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDistance$dist$arity$2 == null)))){
return _.thi$ng$geom$core$IDistance$dist$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.dist[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.dist["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IDistance.dist",_);
}
}
}
});

thi.ng.geom.core.dist_squared = (function thi$ng$geom$core$dist_squared(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDistance$dist_squared$arity$2 == null)))){
return _.thi$ng$geom$core$IDistance$dist_squared$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.dist_squared[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.dist_squared["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IDistance.dist-squared",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IHeading = function(){};

thi.ng.geom.core.heading = (function thi$ng$geom$core$heading(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.heading[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.heading["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.heading",_);
}
}
}
});

thi.ng.geom.core.heading_xy = (function thi$ng$geom$core$heading_xy(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading_xy$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading_xy$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.heading_xy[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.heading_xy["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.heading-xy",_);
}
}
}
});

thi.ng.geom.core.heading_xz = (function thi$ng$geom$core$heading_xz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading_xz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading_xz$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.heading_xz[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.heading_xz["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.heading-xz",_);
}
}
}
});

thi.ng.geom.core.heading_yz = (function thi$ng$geom$core$heading_yz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading_yz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading_yz$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.heading_yz[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.heading_yz["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.heading-yz",_);
}
}
}
});

thi.ng.geom.core.angle_between = (function thi$ng$geom$core$angle_between(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$angle_between$arity$2 == null)))){
return _.thi$ng$geom$core$IHeading$angle_between$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.angle_between[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.angle_between["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.angle-between",_);
}
}
}
});

thi.ng.geom.core.slope_xy = (function thi$ng$geom$core$slope_xy(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$slope_xy$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$slope_xy$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.slope_xy[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.slope_xy["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.slope-xy",_);
}
}
}
});

thi.ng.geom.core.slope_xz = (function thi$ng$geom$core$slope_xz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$slope_xz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$slope_xz$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.slope_xz[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.slope_xz["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.slope-xz",_);
}
}
}
});

thi.ng.geom.core.slope_yz = (function thi$ng$geom$core$slope_yz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$slope_yz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$slope_yz$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.slope_yz[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.slope_yz["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHeading.slope-yz",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.INormal = function(){};

thi.ng.geom.core.normal = (function thi$ng$geom$core$normal(var_args){
var args29961 = [];
var len__21023__auto___29964 = arguments.length;
var i__21024__auto___29965 = (0);
while(true){
if((i__21024__auto___29965 < len__21023__auto___29964)){
args29961.push((arguments[i__21024__auto___29965]));

var G__29966 = (i__21024__auto___29965 + (1));
i__21024__auto___29965 = G__29966;
continue;
} else {
}
break;
}

var G__29963 = args29961.length;
switch (G__29963) {
case 1:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29961.length)].join('')));

}
});

thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormal$normal$arity$1 == null)))){
return _.thi$ng$geom$core$INormal$normal$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.normal["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INormal.normal",_);
}
}
}
});

thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormal$normal$arity$2 == null)))){
return _.thi$ng$geom$core$INormal$normal$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.normal["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"INormal.normal",_);
}
}
}
});

thi.ng.geom.core.normal.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IPolar = function(){};

thi.ng.geom.core.as_polar = (function thi$ng$geom$core$as_polar(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolar$as_polar$arity$1 == null)))){
return _.thi$ng$geom$core$IPolar$as_polar$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_polar[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_polar["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPolar.as-polar",_);
}
}
}
});

thi.ng.geom.core.as_cartesian = (function thi$ng$geom$core$as_cartesian(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolar$as_cartesian$arity$1 == null)))){
return _.thi$ng$geom$core$IPolar$as_cartesian$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_cartesian[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_cartesian["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPolar.as-cartesian",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IVectorReduce = function(){};

thi.ng.geom.core.reduce_vector = (function thi$ng$geom$core$reduce_vector(var_args){
var args29968 = [];
var len__21023__auto___29971 = arguments.length;
var i__21024__auto___29972 = (0);
while(true){
if((i__21024__auto___29972 < len__21023__auto___29971)){
args29968.push((arguments[i__21024__auto___29972]));

var G__29973 = (i__21024__auto___29972 + (1));
i__21024__auto___29972 = G__29973;
continue;
} else {
}
break;
}

var G__29970 = args29968.length;
switch (G__29970) {
case 3:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29968.length)].join('')));

}
});

thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3 = (function (_,f,xs){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 == null)))){
return _.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3(_,f,xs);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,f,xs);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.reduce_vector["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,f,xs);
} else {
throw cljs.core.missing_protocol.call(null,"IVectorReduce.reduce-vector",_);
}
}
}
});

thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4 = (function (_,f,f2,xs){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 == null)))){
return _.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4(_,f,f2,xs);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,f,f2,xs);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.reduce_vector["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,f,f2,xs);
} else {
throw cljs.core.missing_protocol.call(null,"IVectorReduce.reduce-vector",_);
}
}
}
});

thi.ng.geom.core.reduce_vector.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
thi.ng.geom.core.IRotate = function(){};

thi.ng.geom.core.rotate = (function thi$ng$geom$core$rotate(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate$rotate$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate$rotate$arity$2(_,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.rotate[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.rotate["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"IRotate.rotate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IRotate3D = function(){};

thi.ng.geom.core.rotate_x = (function thi$ng$geom$core$rotate_x(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_x$arity$2(_,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.rotate_x[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.rotate_x["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"IRotate3D.rotate-x",_);
}
}
}
});

thi.ng.geom.core.rotate_y = (function thi$ng$geom$core$rotate_y(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_y$arity$2(_,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.rotate_y[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.rotate_y["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"IRotate3D.rotate-y",_);
}
}
}
});

thi.ng.geom.core.rotate_z = (function thi$ng$geom$core$rotate_z(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_z$arity$2(_,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.rotate_z[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.rotate_z["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"IRotate3D.rotate-z",_);
}
}
}
});

thi.ng.geom.core.rotate_around_axis = (function thi$ng$geom$core$rotate_around_axis(_,a,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3(_,a,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.rotate_around_axis[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.rotate_around_axis["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,t);
} else {
throw cljs.core.missing_protocol.call(null,"IRotate3D.rotate-around-axis",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IReflect = function(){};

thi.ng.geom.core.reflect = (function thi$ng$geom$core$reflect(_,r){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IReflect$reflect$arity$2 == null)))){
return _.thi$ng$geom$core$IReflect$reflect$arity$2(_,r);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.reflect[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,r);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.reflect["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,r);
} else {
throw cljs.core.missing_protocol.call(null,"IReflect.reflect",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IScale = function(){};

thi.ng.geom.core.scale = (function thi$ng$geom$core$scale(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IScale$scale$arity$2 == null)))){
return _.thi$ng$geom$core$IScale$scale$arity$2(_,s);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,s);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.scale["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"IScale.scale",_);
}
}
}
});

thi.ng.geom.core.scale_size = (function thi$ng$geom$core$scale_size(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IScale$scale_size$arity$2 == null)))){
return _.thi$ng$geom$core$IScale$scale_size$arity$2(_,s);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.scale_size[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,s);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.scale_size["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"IScale.scale-size",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IShear = function(){};

thi.ng.geom.core.shear = (function thi$ng$geom$core$shear(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IShear$shear$arity$2 == null)))){
return _.thi$ng$geom$core$IShear$shear$arity$2(_,s);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,s);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.shear["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"IShear.shear",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITransform = function(){};

thi.ng.geom.core.transform = (function thi$ng$geom$core$transform(_,tx){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITransform$transform$arity$2 == null)))){
return _.thi$ng$geom$core$ITransform$transform$arity$2(_,tx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.transform[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,tx);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.transform["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.transform",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITranslate = function(){};

thi.ng.geom.core.translate = (function thi$ng$geom$core$translate(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITranslate$translate$arity$2 == null)))){
return _.thi$ng$geom$core$ITranslate$translate$arity$2(_,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.translate["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"ITranslate.translate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IVectorTransform = function(){};

thi.ng.geom.core.transform_vector = (function thi$ng$geom$core$transform_vector(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2 == null)))){
return _.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.transform_vector[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.transform_vector["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IVectorTransform.transform-vector",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMatrixConvert = function(){};

thi.ng.geom.core.as_matrix = (function thi$ng$geom$core$as_matrix(var_args){
var args29975 = [];
var len__21023__auto___29978 = arguments.length;
var i__21024__auto___29979 = (0);
while(true){
if((i__21024__auto___29979 < len__21023__auto___29978)){
args29975.push((arguments[i__21024__auto___29979]));

var G__29980 = (i__21024__auto___29979 + (1));
i__21024__auto___29979 = G__29980;
continue;
} else {
}
break;
}

var G__29977 = args29975.length;
switch (G__29977) {
case 1:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29975.length)].join('')));

}
});

thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$1 == null)))){
return _.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_matrix["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMatrixConvert.as-matrix",_);
}
}
}
});

thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2 == null)))){
return _.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_matrix["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IMatrixConvert.as-matrix",_);
}
}
}
});

thi.ng.geom.core.as_matrix.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IGraph = function(){};

thi.ng.geom.core.connected_components = (function thi$ng$geom$core$connected_components(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$connected_components$arity$1 == null)))){
return _.thi$ng$geom$core$IGraph$connected_components$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.connected_components[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.connected_components["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IGraph.connected-components",_);
}
}
}
});

thi.ng.geom.core.cyclic_QMARK_ = (function thi$ng$geom$core$cyclic_QMARK_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$cyclic_QMARK_$arity$1 == null)))){
return _.thi$ng$geom$core$IGraph$cyclic_QMARK_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.cyclic_QMARK_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.cyclic_QMARK_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IGraph.cyclic?",_);
}
}
}
});

thi.ng.geom.core.vertex_valence = (function thi$ng$geom$core$vertex_valence(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$vertex_valence$arity$2 == null)))){
return _.thi$ng$geom$core$IGraph$vertex_valence$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.vertex_valence[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.vertex_valence["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IGraph.vertex-valence",_);
}
}
}
});

thi.ng.geom.core.vertex_neighbors = (function thi$ng$geom$core$vertex_neighbors(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 == null)))){
return _.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.vertex_neighbors[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.vertex_neighbors["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IGraph.vertex-neighbors",_);
}
}
}
});

thi.ng.geom.core.remove_vertex = (function thi$ng$geom$core$remove_vertex(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$remove_vertex$arity$2 == null)))){
return _.thi$ng$geom$core$IGraph$remove_vertex$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.remove_vertex[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.remove_vertex["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IGraph.remove-vertex",_);
}
}
}
});

thi.ng.geom.core.replace_vertex = (function thi$ng$geom$core$replace_vertex(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$replace_vertex$arity$3 == null)))){
return _.thi$ng$geom$core$IGraph$replace_vertex$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.replace_vertex[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.replace_vertex["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IGraph.replace-vertex",_);
}
}
}
});

thi.ng.geom.core.merge_vertices = (function thi$ng$geom$core$merge_vertices(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$merge_vertices$arity$3 == null)))){
return _.thi$ng$geom$core$IGraph$merge_vertices$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.merge_vertices[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.merge_vertices["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IGraph.merge-vertices",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IDirectedGraph = function(){};

thi.ng.geom.core.in_vertices = (function thi$ng$geom$core$in_vertices(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDirectedGraph$in_vertices$arity$2 == null)))){
return _.thi$ng$geom$core$IDirectedGraph$in_vertices$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.in_vertices[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.in_vertices["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IDirectedGraph.in-vertices",_);
}
}
}
});

thi.ng.geom.core.out_vertices = (function thi$ng$geom$core$out_vertices(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDirectedGraph$out_vertices$arity$2 == null)))){
return _.thi$ng$geom$core$IDirectedGraph$out_vertices$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.out_vertices[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.out_vertices["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IDirectedGraph.out-vertices",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IGraphConvert = function(){};

thi.ng.geom.core.as_graph = (function thi$ng$geom$core$as_graph(var_args){
var args29982 = [];
var len__21023__auto___29985 = arguments.length;
var i__21024__auto___29986 = (0);
while(true){
if((i__21024__auto___29986 < len__21023__auto___29985)){
args29982.push((arguments[i__21024__auto___29986]));

var G__29987 = (i__21024__auto___29986 + (1));
i__21024__auto___29986 = G__29987;
continue;
} else {
}
break;
}

var G__29984 = args29982.length;
switch (G__29984) {
case 1:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29982.length)].join('')));

}
});

thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraphConvert$as_graph$arity$1 == null)))){
return _.thi$ng$geom$core$IGraphConvert$as_graph$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_graph["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IGraphConvert.as-graph",_);
}
}
}
});

thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraphConvert$as_graph$arity$2 == null)))){
return _.thi$ng$geom$core$IGraphConvert$as_graph$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_graph["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IGraphConvert.as-graph",_);
}
}
}
});

thi.ng.geom.core.as_graph.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IVertexAccess = function(){};

thi.ng.geom.core.vertices = (function thi$ng$geom$core$vertices(var_args){
var args29989 = [];
var len__21023__auto___29992 = arguments.length;
var i__21024__auto___29993 = (0);
while(true){
if((i__21024__auto___29993 < len__21023__auto___29992)){
args29989.push((arguments[i__21024__auto___29993]));

var G__29994 = (i__21024__auto___29993 + (1));
i__21024__auto___29993 = G__29994;
continue;
} else {
}
break;
}

var G__29991 = args29989.length;
switch (G__29991) {
case 1:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29989.length)].join('')));

}
});

thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVertexAccess$vertices$arity$1 == null)))){
return _.thi$ng$geom$core$IVertexAccess$vertices$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.vertices["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IVertexAccess.vertices",_);
}
}
}
});

thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVertexAccess$vertices$arity$2 == null)))){
return _.thi$ng$geom$core$IVertexAccess$vertices$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.vertices["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IVertexAccess.vertices",_);
}
}
}
});

thi.ng.geom.core.vertices.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IEdgeAccess = function(){};

thi.ng.geom.core.edges = (function thi$ng$geom$core$edges(var_args){
var args29996 = [];
var len__21023__auto___29999 = arguments.length;
var i__21024__auto___30000 = (0);
while(true){
if((i__21024__auto___30000 < len__21023__auto___29999)){
args29996.push((arguments[i__21024__auto___30000]));

var G__30001 = (i__21024__auto___30000 + (1));
i__21024__auto___30000 = G__30001;
continue;
} else {
}
break;
}

var G__29998 = args29996.length;
switch (G__29998) {
case 1:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29996.length)].join('')));

}
});

thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IEdgeAccess$edges$arity$1 == null)))){
return _.thi$ng$geom$core$IEdgeAccess$edges$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.edges["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IEdgeAccess.edges",_);
}
}
}
});

thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IEdgeAccess$edges$arity$2 == null)))){
return _.thi$ng$geom$core$IEdgeAccess$edges$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.edges["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IEdgeAccess.edges",_);
}
}
}
});

thi.ng.geom.core.edges.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IFaceAccess = function(){};

/**
 * Adds a new face to a mesh. The face arg is a 2-element vector
 *  of [vertices attributes], where attributes is a map of arbitrary
 *  vertex attributes. E.g. (g/add-face m [verts {:uv [[0 0] [1 0] [1 1]]}])
 */
thi.ng.geom.core.add_face = (function thi$ng$geom$core$add_face(_,face){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$add_face$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$add_face$arity$2(_,face);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.add_face[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,face);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.add_face["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,face);
} else {
throw cljs.core.missing_protocol.call(null,"IFaceAccess.add-face",_);
}
}
}
});

/**
 * Returns a mesh's face collection. If called without opts arg,
 *  returns faces directly as used internally by the mesh. If opts is
 *  truthy, returns each face as vector with a vector of face vertices
 *  as its first element. If the mesh supports vertex attributes,
 *  they're returned as the 2nd element in each face vector.
 */
thi.ng.geom.core.faces = (function thi$ng$geom$core$faces(var_args){
var args30003 = [];
var len__21023__auto___30006 = arguments.length;
var i__21024__auto___30007 = (0);
while(true){
if((i__21024__auto___30007 < len__21023__auto___30006)){
args30003.push((arguments[i__21024__auto___30007]));

var G__30008 = (i__21024__auto___30007 + (1));
i__21024__auto___30007 = G__30008;
continue;
} else {
}
break;
}

var G__30005 = args30003.length;
switch (G__30005) {
case 1:
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30003.length)].join('')));

}
});

thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$faces$arity$1 == null)))){
return _.thi$ng$geom$core$IFaceAccess$faces$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.faces["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IFaceAccess.faces",_);
}
}
}
});

thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$faces$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$faces$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.faces["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IFaceAccess.faces",_);
}
}
}
});

thi.ng.geom.core.faces.cljs$lang$maxFixedArity = 2;


/**
 * Takes a vector of vertices defining a face in the mesh and
 *  returns updated mesh without that face.
 */
thi.ng.geom.core.remove_face = (function thi$ng$geom$core$remove_face(_,fverts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$remove_face$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$remove_face$arity$2(_,fverts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.remove_face[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,fverts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.remove_face["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,fverts);
} else {
throw cljs.core.missing_protocol.call(null,"IFaceAccess.remove-face",_);
}
}
}
});

/**
 * Returns seq of faces the given vertex is part of.
 */
thi.ng.geom.core.vertex_faces = (function thi$ng$geom$core$vertex_faces(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.vertex_faces[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.vertex_faces["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"IFaceAccess.vertex-faces",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.INormalAccess = function(){};

thi.ng.geom.core.compute_face_normals = (function thi$ng$geom$core$compute_face_normals(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1 == null)))){
return _.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.compute_face_normals[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.compute_face_normals["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalAccess.compute-face-normals",_);
}
}
}
});

thi.ng.geom.core.compute_vertex_normals = (function thi$ng$geom$core$compute_vertex_normals(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1 == null)))){
return _.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.compute_vertex_normals[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.compute_vertex_normals["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalAccess.compute-vertex-normals",_);
}
}
}
});

thi.ng.geom.core.face_normals = (function thi$ng$geom$core$face_normals(_,force_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$face_normals$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$face_normals$arity$2(_,force_QMARK_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.face_normals[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,force_QMARK_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.face_normals["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,force_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalAccess.face-normals",_);
}
}
}
});

thi.ng.geom.core.face_normal = (function thi$ng$geom$core$face_normal(_,f){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$face_normal$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$face_normal$arity$2(_,f);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.face_normal[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,f);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.face_normal["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"INormalAccess.face-normal",_);
}
}
}
});

thi.ng.geom.core.vertex_normals = (function thi$ng$geom$core$vertex_normals(_,force_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2(_,force_QMARK_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.vertex_normals[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,force_QMARK_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.vertex_normals["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,force_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalAccess.vertex-normals",_);
}
}
}
});

thi.ng.geom.core.vertex_normal = (function thi$ng$geom$core$vertex_normal(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2(_,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.vertex_normal[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.vertex_normal["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,v);
} else {
throw cljs.core.missing_protocol.call(null,"INormalAccess.vertex-normal",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IAttributeAccess = function(){};

thi.ng.geom.core.attribs = (function thi$ng$geom$core$attribs(var_args){
var args30010 = [];
var len__21023__auto___30013 = arguments.length;
var i__21024__auto___30014 = (0);
while(true){
if((i__21024__auto___30014 < len__21023__auto___30013)){
args30010.push((arguments[i__21024__auto___30014]));

var G__30015 = (i__21024__auto___30014 + (1));
i__21024__auto___30014 = G__30015;
continue;
} else {
}
break;
}

var G__30012 = args30010.length;
switch (G__30012) {
case 2:
return thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30010.length)].join('')));

}
});

thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$2 = (function (_,ctx){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IAttributeAccess$attribs$arity$2 == null)))){
return _.thi$ng$geom$core$IAttributeAccess$attribs$arity$2(_,ctx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.attribs[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,ctx);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.attribs["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,ctx);
} else {
throw cljs.core.missing_protocol.call(null,"IAttributeAccess.attribs",_);
}
}
}
});

thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$3 = (function (_,ctx,attr){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IAttributeAccess$attribs$arity$3 == null)))){
return _.thi$ng$geom$core$IAttributeAccess$attribs$arity$3(_,ctx,attr);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.attribs[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,ctx,attr);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.attribs["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,ctx,attr);
} else {
throw cljs.core.missing_protocol.call(null,"IAttributeAccess.attribs",_);
}
}
}
});

thi.ng.geom.core.attribs.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
thi.ng.geom.core.IRawAccess = function(){};

thi.ng.geom.core.raw = (function thi$ng$geom$core$raw(_,ctx){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRawAccess$raw$arity$2 == null)))){
return _.thi$ng$geom$core$IRawAccess$raw$arity$2(_,ctx);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.raw[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,ctx);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.raw["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,ctx);
} else {
throw cljs.core.missing_protocol.call(null,"IRawAccess.raw",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IAlign = function(){};

/**
 * Returns updated entity aligned with `x` in the specified manner
 */
thi.ng.geom.core.align_with = (function thi$ng$geom$core$align_with(_,x,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IAlign$align_with$arity$3 == null)))){
return _.thi$ng$geom$core$IAlign$align_with$arity$3(_,x,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.align_with[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.align_with["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IAlign.align-with",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IArea = function(){};

/**
 * Returns an entity's total surface area
 */
thi.ng.geom.core.area = (function thi$ng$geom$core$area(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IArea$area$arity$1 == null)))){
return _.thi$ng$geom$core$IArea$area$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.area[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.area["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IArea.area",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundary = function(){};

thi.ng.geom.core.contains_entity_QMARK_ = (function thi$ng$geom$core$contains_entity_QMARK_(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundary$contains_entity_QMARK_$arity$2 == null)))){
return _.thi$ng$geom$core$IBoundary$contains_entity_QMARK_$arity$2(_,s);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.contains_entity_QMARK_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,s);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.contains_entity_QMARK_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"IBoundary.contains-entity?",_);
}
}
}
});

thi.ng.geom.core.contains_point_QMARK_ = (function thi$ng$geom$core$contains_point_QMARK_(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 == null)))){
return _.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2(_,p);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.contains_point_QMARK_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.contains_point_QMARK_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"IBoundary.contains-point?",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundingCircle = function(){};

thi.ng.geom.core.bounding_circle = (function thi$ng$geom$core$bounding_circle(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 == null)))){
return _.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.bounding_circle[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.bounding_circle["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBoundingCircle.bounding-circle",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundingSphere = function(){};

thi.ng.geom.core.bounding_sphere = (function thi$ng$geom$core$bounding_sphere(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 == null)))){
return _.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.bounding_sphere[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.bounding_sphere["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBoundingSphere.bounding-sphere",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBounds = function(){};

/**
 * Returns bounding rect for 2d entities or box for 3d
 */
thi.ng.geom.core.bounds = (function thi$ng$geom$core$bounds(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$bounds$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$bounds$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.bounds[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.bounds["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBounds.bounds",_);
}
}
}
});

/**
 * Returns entity's extent along Z (zero for 2d)
 */
thi.ng.geom.core.depth = (function thi$ng$geom$core$depth(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$depth$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$depth$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.depth[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.depth["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBounds.depth",_);
}
}
}
});

/**
 * Returns entity's extent along Y axis
 */
thi.ng.geom.core.height = (function thi$ng$geom$core$height(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$height$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$height$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.height[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.height["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBounds.height",_);
}
}
}
});

/**
 * Returns entity's extent along X axis
 */
thi.ng.geom.core.width = (function thi$ng$geom$core$width(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$width$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$width$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.width[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.width["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IBounds.width",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ICenter = function(){};

/**
 * Returns updated entity centered around world origin or given point
 */
thi.ng.geom.core.center = (function thi$ng$geom$core$center(var_args){
var args30017 = [];
var len__21023__auto___30020 = arguments.length;
var i__21024__auto___30021 = (0);
while(true){
if((i__21024__auto___30021 < len__21023__auto___30020)){
args30017.push((arguments[i__21024__auto___30021]));

var G__30022 = (i__21024__auto___30021 + (1));
i__21024__auto___30021 = G__30022;
continue;
} else {
}
break;
}

var G__30019 = args30017.length;
switch (G__30019) {
case 1:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30017.length)].join('')));

}
});

thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICenter$center$arity$1 == null)))){
return _.thi$ng$geom$core$ICenter$center$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.center["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICenter.center",_);
}
}
}
});

thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2 = (function (_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICenter$center$arity$2 == null)))){
return _.thi$ng$geom$core$ICenter$center$arity$2(_,p);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.center["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"ICenter.center",_);
}
}
}
});

thi.ng.geom.core.center.cljs$lang$maxFixedArity = 2;


/**
 * Returns centroid of entity
 */
thi.ng.geom.core.centroid = (function thi$ng$geom$core$centroid(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICenter$centroid$arity$1 == null)))){
return _.thi$ng$geom$core$ICenter$centroid$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.centroid[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.centroid["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICenter.centroid",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ICircumference = function(){};

/**
 * Returns an entity's circumference
 */
thi.ng.geom.core.circumference = (function thi$ng$geom$core$circumference(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICircumference$circumference$arity$1 == null)))){
return _.thi$ng$geom$core$ICircumference$circumference$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.circumference[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.circumference["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICircumference.circumference",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClassify = function(){};

thi.ng.geom.core.classify_point = (function thi$ng$geom$core$classify_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClassify$classify_point$arity$2 == null)))){
return _.thi$ng$geom$core$IClassify$classify_point$arity$2(_,p);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.classify_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.classify_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"IClassify.classify-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClear = function(){};

thi.ng.geom.core.clear_STAR_ = (function thi$ng$geom$core$clear_STAR_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClear$clear_STAR_$arity$1 == null)))){
return _.thi$ng$geom$core$IClear$clear_STAR_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.clear_STAR_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.clear_STAR_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IClear.clear*",_);
}
}
}
});

thi.ng.geom.core.clear_BANG_ = (function thi$ng$geom$core$clear_BANG_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClear$clear_BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$IClear$clear_BANG_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.clear_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.clear_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IClear.clear!",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClip = function(){};

thi.ng.geom.core.clip_with = (function thi$ng$geom$core$clip_with(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClip$clip_with$arity$2 == null)))){
return _.thi$ng$geom$core$IClip$clip_with$arity$2(_,s);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.clip_with[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,s);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.clip_with["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"IClip.clip-with",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IConvexHull = function(){};

thi.ng.geom.core.convex_hull = (function thi$ng$geom$core$convex_hull(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IConvexHull$convex_hull$arity$1 == null)))){
return _.thi$ng$geom$core$IConvexHull$convex_hull$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.convex_hull[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.convex_hull["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IConvexHull.convex-hull",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IExtrude = function(){};

thi.ng.geom.core.extrude = (function thi$ng$geom$core$extrude(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IExtrude$extrude$arity$2 == null)))){
return _.thi$ng$geom$core$IExtrude$extrude$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.extrude[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.extrude["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IExtrude.extrude",_);
}
}
}
});

thi.ng.geom.core.extrude_shell = (function thi$ng$geom$core$extrude_shell(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 == null)))){
return _.thi$ng$geom$core$IExtrude$extrude_shell$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.extrude_shell[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.extrude_shell["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IExtrude.extrude-shell",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IFlip = function(){};

thi.ng.geom.core.flip = (function thi$ng$geom$core$flip(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFlip$flip$arity$1 == null)))){
return _.thi$ng$geom$core$IFlip$flip$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.flip[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.flip["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IFlip.flip",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IGeomContainer = function(){};

thi.ng.geom.core.into = (function thi$ng$geom$core$into(_,m){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGeomContainer$into$arity$2 == null)))){
return _.thi$ng$geom$core$IGeomContainer$into$arity$2(_,m);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.into[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,m);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.into["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,m);
} else {
throw cljs.core.missing_protocol.call(null,"IGeomContainer.into",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IInset = function(){};

thi.ng.geom.core.inset = (function thi$ng$geom$core$inset(_,inset){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IInset$inset$arity$2 == null)))){
return _.thi$ng$geom$core$IInset$inset$arity$2(_,inset);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.inset[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,inset);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.inset["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,inset);
} else {
throw cljs.core.missing_protocol.call(null,"IInset.inset",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IIntersect = function(){};

thi.ng.geom.core.intersect_line = (function thi$ng$geom$core$intersect_line(var_args){
var args30024 = [];
var len__21023__auto___30030 = arguments.length;
var i__21024__auto___30031 = (0);
while(true){
if((i__21024__auto___30031 < len__21023__auto___30030)){
args30024.push((arguments[i__21024__auto___30031]));

var G__30032 = (i__21024__auto___30031 + (1));
i__21024__auto___30031 = G__30032;
continue;
} else {
}
break;
}

var G__30026 = args30024.length;
switch (G__30026) {
case 2:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30024.length)].join('')));

}
});

thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2 = (function (_,l){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_line$arity$2 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_line$arity$2(_,l);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,l);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.intersect_line["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,l);
} else {
throw cljs.core.missing_protocol.call(null,"IIntersect.intersect-line",_);
}
}
}
});

thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3 = (function (_,p,q){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_line$arity$3 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_line$arity$3(_,p,q);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p,q);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.intersect_line["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p,q);
} else {
throw cljs.core.missing_protocol.call(null,"IIntersect.intersect-line",_);
}
}
}
});

thi.ng.geom.core.intersect_line.cljs$lang$maxFixedArity = 3;


thi.ng.geom.core.intersect_ray = (function thi$ng$geom$core$intersect_ray(var_args){
var args30027 = [];
var len__21023__auto___30034 = arguments.length;
var i__21024__auto___30035 = (0);
while(true){
if((i__21024__auto___30035 < len__21023__auto___30034)){
args30027.push((arguments[i__21024__auto___30035]));

var G__30036 = (i__21024__auto___30035 + (1));
i__21024__auto___30035 = G__30036;
continue;
} else {
}
break;
}

var G__30029 = args30027.length;
switch (G__30029) {
case 2:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30027.length)].join('')));

}
});

thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2 = (function (_,r){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_ray$arity$2(_,r);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,r);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.intersect_ray["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,r);
} else {
throw cljs.core.missing_protocol.call(null,"IIntersect.intersect-ray",_);
}
}
}
});

thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3 = (function (_,p,dir){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_ray$arity$3(_,p,dir);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p,dir);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.intersect_ray["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p,dir);
} else {
throw cljs.core.missing_protocol.call(null,"IIntersect.intersect-ray",_);
}
}
}
});

thi.ng.geom.core.intersect_ray.cljs$lang$maxFixedArity = 3;


thi.ng.geom.core.intersect_shape = (function thi$ng$geom$core$intersect_shape(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_shape$arity$2(_,s);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.intersect_shape[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,s);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.intersect_shape["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"IIntersect.intersect-shape",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMeshConvert = function(){};

/**
 * Transforms the current enitity into a mesh instance
 */
thi.ng.geom.core.as_mesh = (function thi$ng$geom$core$as_mesh(var_args){
var args30038 = [];
var len__21023__auto___30041 = arguments.length;
var i__21024__auto___30042 = (0);
while(true){
if((i__21024__auto___30042 < len__21023__auto___30041)){
args30038.push((arguments[i__21024__auto___30042]));

var G__30043 = (i__21024__auto___30042 + (1));
i__21024__auto___30042 = G__30043;
continue;
} else {
}
break;
}

var G__30040 = args30038.length;
switch (G__30040) {
case 1:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30038.length)].join('')));

}
});

thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 == null)))){
return _.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_mesh["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMeshConvert.as-mesh",_);
}
}
}
});

thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 == null)))){
return _.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_mesh["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IMeshConvert.as-mesh",_);
}
}
}
});

thi.ng.geom.core.as_mesh.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IPointMap = function(){};

thi.ng.geom.core.map_point = (function thi$ng$geom$core$map_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPointMap$map_point$arity$2 == null)))){
return _.thi$ng$geom$core$IPointMap$map_point$arity$2(_,p);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.map_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.map_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"IPointMap.map-point",_);
}
}
}
});

thi.ng.geom.core.unmap_point = (function thi$ng$geom$core$unmap_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPointMap$unmap_point$arity$2 == null)))){
return _.thi$ng$geom$core$IPointMap$unmap_point$arity$2(_,p);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.unmap_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.unmap_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"IPointMap.unmap-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IPolygonConvert = function(){};

/**
 * Transforms current entity into a Polygon2 instance
 */
thi.ng.geom.core.as_polygon = (function thi$ng$geom$core$as_polygon(var_args){
var args30045 = [];
var len__21023__auto___30048 = arguments.length;
var i__21024__auto___30049 = (0);
while(true){
if((i__21024__auto___30049 < len__21023__auto___30048)){
args30045.push((arguments[i__21024__auto___30049]));

var G__30050 = (i__21024__auto___30049 + (1));
i__21024__auto___30049 = G__30050;
continue;
} else {
}
break;
}

var G__30047 = args30045.length;
switch (G__30047) {
case 1:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30045.length)].join('')));

}
});

thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 == null)))){
return _.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_polygon["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPolygonConvert.as-polygon",_);
}
}
}
});

thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2 = (function (_,res){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$2 == null)))){
return _.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$2(_,res);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,res);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.as_polygon["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,res);
} else {
throw cljs.core.missing_protocol.call(null,"IPolygonConvert.as-polygon",_);
}
}
}
});

thi.ng.geom.core.as_polygon.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IProximity = function(){};

thi.ng.geom.core.closest_point = (function thi$ng$geom$core$closest_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IProximity$closest_point$arity$2 == null)))){
return _.thi$ng$geom$core$IProximity$closest_point$arity$2(_,p);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.closest_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.closest_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"IProximity.closest-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISample = function(){};

thi.ng.geom.core.point_at = (function thi$ng$geom$core$point_at(var_args){
var args30052 = [];
var len__21023__auto___30055 = arguments.length;
var i__21024__auto___30056 = (0);
while(true){
if((i__21024__auto___30056 < len__21023__auto___30055)){
args30052.push((arguments[i__21024__auto___30056]));

var G__30057 = (i__21024__auto___30056 + (1));
i__21024__auto___30056 = G__30057;
continue;
} else {
}
break;
}

var G__30054 = args30052.length;
switch (G__30054) {
case 2:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30052.length)].join('')));

}
});

thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2 = (function (_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$point_at$arity$2 == null)))){
return _.thi$ng$geom$core$ISample$point_at$arity$2(_,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,t);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.point_at["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"ISample.point-at",_);
}
}
}
});

thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3 = (function (_,u,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$point_at$arity$3 == null)))){
return _.thi$ng$geom$core$ISample$point_at$arity$3(_,u,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,u,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.point_at["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISample.point-at",_);
}
}
}
});

thi.ng.geom.core.point_at.cljs$lang$maxFixedArity = 3;


thi.ng.geom.core.random_point = (function thi$ng$geom$core$random_point(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$random_point$arity$1 == null)))){
return _.thi$ng$geom$core$ISample$random_point$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.random_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.random_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ISample.random-point",_);
}
}
}
});

thi.ng.geom.core.random_point_inside = (function thi$ng$geom$core$random_point_inside(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$random_point_inside$arity$1 == null)))){
return _.thi$ng$geom$core$ISample$random_point_inside$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.random_point_inside[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.random_point_inside["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ISample.random-point-inside",_);
}
}
}
});

thi.ng.geom.core.sample_uniform = (function thi$ng$geom$core$sample_uniform(_,dist,include_last_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$sample_uniform$arity$3 == null)))){
return _.thi$ng$geom$core$ISample$sample_uniform$arity$3(_,dist,include_last_QMARK_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.sample_uniform[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,dist,include_last_QMARK_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.sample_uniform["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,dist,include_last_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"ISample.sample-uniform",_);
}
}
}
});

thi.ng.geom.core.sample_with_resolution = (function thi$ng$geom$core$sample_with_resolution(_,res){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$sample_with_resolution$arity$2 == null)))){
return _.thi$ng$geom$core$ISample$sample_with_resolution$arity$2(_,res);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.sample_with_resolution[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,res);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.sample_with_resolution["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,res);
} else {
throw cljs.core.missing_protocol.call(null,"ISample.sample-with-resolution",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISlice = function(){};

thi.ng.geom.core.slice_with = (function thi$ng$geom$core$slice_with(var_args){
var args30059 = [];
var len__21023__auto___30062 = arguments.length;
var i__21024__auto___30063 = (0);
while(true){
if((i__21024__auto___30063 < len__21023__auto___30062)){
args30059.push((arguments[i__21024__auto___30063]));

var G__30064 = (i__21024__auto___30063 + (1));
i__21024__auto___30063 = G__30064;
continue;
} else {
}
break;
}

var G__30061 = args30059.length;
switch (G__30061) {
case 2:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30059.length)].join('')));

}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2 = (function (_,e){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISlice$slice_with$arity$2 == null)))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$2(_,e);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,e);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,e);
} else {
throw cljs.core.missing_protocol.call(null,"ISlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3 = (function (_,e,classifier){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISlice$slice_with$arity$3 == null)))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$3(_,e,classifier);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,e,classifier);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,e,classifier);
} else {
throw cljs.core.missing_protocol.call(null,"ISlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4 = (function (_,e,classifier,parts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISlice$slice_with$arity$4 == null)))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$4(_,e,classifier,parts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,e,classifier,parts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,e,classifier,parts);
} else {
throw cljs.core.missing_protocol.call(null,"ISlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
thi.ng.geom.core.ISubdivide = function(){};

thi.ng.geom.core.subdivide = (function thi$ng$geom$core$subdivide(var_args){
var args30066 = [];
var len__21023__auto___30069 = arguments.length;
var i__21024__auto___30070 = (0);
while(true){
if((i__21024__auto___30070 < len__21023__auto___30069)){
args30066.push((arguments[i__21024__auto___30070]));

var G__30071 = (i__21024__auto___30070 + (1));
i__21024__auto___30070 = G__30071;
continue;
} else {
}
break;
}

var G__30068 = args30066.length;
switch (G__30068) {
case 1:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30066.length)].join('')));

}
});

thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide$arity$1 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.subdivide["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ISubdivide.subdivide",_);
}
}
}
});

thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide$arity$2 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.subdivide["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"ISubdivide.subdivide",_);
}
}
}
});

thi.ng.geom.core.subdivide.cljs$lang$maxFixedArity = 2;


thi.ng.geom.core.subdivide_edge = (function thi$ng$geom$core$subdivide_edge(_,a,b,splits){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide_edge$arity$4 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide_edge$arity$4(_,a,b,splits);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.subdivide_edge[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,splits);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.subdivide_edge["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,splits);
} else {
throw cljs.core.missing_protocol.call(null,"ISubdivide.subdivide-edge",_);
}
}
}
});

thi.ng.geom.core.subdivide_face = (function thi$ng$geom$core$subdivide_face(_,f,p,displace,splits){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide_face$arity$5 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide_face$arity$5(_,f,p,displace,splits);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.subdivide_face[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,f,p,displace,splits);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.subdivide_face["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,f,p,displace,splits);
} else {
throw cljs.core.missing_protocol.call(null,"ISubdivide.subdivide-face",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITessellate = function(){};

thi.ng.geom.core.tessellate = (function thi$ng$geom$core$tessellate(var_args){
var args30073 = [];
var len__21023__auto___30076 = arguments.length;
var i__21024__auto___30077 = (0);
while(true){
if((i__21024__auto___30077 < len__21023__auto___30076)){
args30073.push((arguments[i__21024__auto___30077]));

var G__30078 = (i__21024__auto___30077 + (1));
i__21024__auto___30077 = G__30078;
continue;
} else {
}
break;
}

var G__30075 = args30073.length;
switch (G__30075) {
case 1:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30073.length)].join('')));

}
});

thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITessellate$tessellate$arity$1 == null)))){
return _.thi$ng$geom$core$ITessellate$tessellate$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.tessellate["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITessellate.tessellate",_);
}
}
}
});

thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITessellate$tessellate$arity$2 == null)))){
return _.thi$ng$geom$core$ITessellate$tessellate$arity$2(_,opts);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,opts);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.tessellate["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"ITessellate.tessellate",_);
}
}
}
});

thi.ng.geom.core.tessellate.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IVolume = function(){};

/**
 * Returns an entity's inner volume.
 */
thi.ng.geom.core.volume = (function thi$ng$geom$core$volume(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVolume$volume$arity$1 == null)))){
return _.thi$ng$geom$core$IVolume$volume$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.volume[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.volume["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IVolume.volume",_);
}
}
}
});

thi.ng.geom.core.signed_volume = (function thi$ng$geom$core$signed_volume(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVolume$signed_volume$arity$1 == null)))){
return _.thi$ng$geom$core$IVolume$signed_volume$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.signed_volume[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.signed_volume["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IVolume.signed-volume",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISpatialTree = function(){};

thi.ng.geom.core.add_point = (function thi$ng$geom$core$add_point(_,p,d){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$add_point$arity$3 == null)))){
return _.thi$ng$geom$core$ISpatialTree$add_point$arity$3(_,p,d);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.add_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p,d);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.add_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p,d);
} else {
throw cljs.core.missing_protocol.call(null,"ISpatialTree.add-point",_);
}
}
}
});

thi.ng.geom.core.delete_point = (function thi$ng$geom$core$delete_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$delete_point$arity$2 == null)))){
return _.thi$ng$geom$core$ISpatialTree$delete_point$arity$2(_,p);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.delete_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,p);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.delete_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,p);
} else {
throw cljs.core.missing_protocol.call(null,"ISpatialTree.delete-point",_);
}
}
}
});

thi.ng.geom.core.get_point = (function thi$ng$geom$core$get_point(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$get_point$arity$1 == null)))){
return _.thi$ng$geom$core$ISpatialTree$get_point$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.get_point[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.get_point["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ISpatialTree.get-point",_);
}
}
}
});

thi.ng.geom.core.get_point_data = (function thi$ng$geom$core$get_point_data(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$get_point_data$arity$1 == null)))){
return _.thi$ng$geom$core$ISpatialTree$get_point_data$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.get_point_data[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.get_point_data["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ISpatialTree.get-point-data",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMutableProps = function(){};

thi.ng.geom.core.get_prop = (function thi$ng$geom$core$get_prop(_,k){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMutableProps$get_prop$arity$2 == null)))){
return _.thi$ng$geom$core$IMutableProps$get_prop$arity$2(_,k);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.get_prop[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,k);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.get_prop["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,k);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableProps.get-prop",_);
}
}
}
});

thi.ng.geom.core.set_prop_BANG_ = (function thi$ng$geom$core$set_prop_BANG_(_,k,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3(_,k,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.set_prop_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,k,v);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.set_prop_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableProps.set-prop!",_);
}
}
}
});

thi.ng.geom.core.update_prop_BANG_ = (function thi$ng$geom$core$update_prop_BANG_(_,k,f){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3(_,k,f);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.geom.core.update_prop_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,k,f);
} else {
var m__20521__auto____$1 = (thi.ng.geom.core.update_prop_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,k,f);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableProps.update-prop!",_);
}
}
}
});


//# sourceMappingURL=core.js.map