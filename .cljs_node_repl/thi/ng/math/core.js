// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.math.core');
goog.require('cljs.core');

/**
 * @interface
 */
thi.ng.math.core.IMathOps = function(){};

thi.ng.math.core._PLUS_ = (function thi$ng$math$core$_PLUS_(var_args){
var args29745 = [];
var len__21023__auto___29757 = arguments.length;
var i__21024__auto___29758 = (0);
while(true){
if((i__21024__auto___29758 < len__21023__auto___29757)){
args29745.push((arguments[i__21024__auto___29758]));

var G__29759 = (i__21024__auto___29758 + (1));
i__21024__auto___29758 = G__29759;
continue;
} else {
}
break;
}

var G__29747 = args29745.length;
switch (G__29747) {
case 1:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29745.length)].join('')));

}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core._ = (function thi$ng$math$core$_(var_args){
var args29748 = [];
var len__21023__auto___29761 = arguments.length;
var i__21024__auto___29762 = (0);
while(true){
if((i__21024__auto___29762 < len__21023__auto___29761)){
args29748.push((arguments[i__21024__auto___29762]));

var G__29763 = (i__21024__auto___29762 + (1));
i__21024__auto___29762 = G__29763;
continue;
} else {
}
break;
}

var G__29750 = args29748.length;
switch (G__29750) {
case 1:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29748.length)].join('')));

}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$lang$maxFixedArity = 4;


thi.ng.math.core._STAR_ = (function thi$ng$math$core$_STAR_(var_args){
var args29751 = [];
var len__21023__auto___29765 = arguments.length;
var i__21024__auto___29766 = (0);
while(true){
if((i__21024__auto___29766 < len__21023__auto___29765)){
args29751.push((arguments[i__21024__auto___29766]));

var G__29767 = (i__21024__auto___29766 + (1));
i__21024__auto___29766 = G__29767;
continue;
} else {
}
break;
}

var G__29753 = args29751.length;
switch (G__29753) {
case 1:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29751.length)].join('')));

}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.div = (function thi$ng$math$core$div(var_args){
var args29754 = [];
var len__21023__auto___29769 = arguments.length;
var i__21024__auto___29770 = (0);
while(true){
if((i__21024__auto___29770 < len__21023__auto___29769)){
args29754.push((arguments[i__21024__auto___29770]));

var G__29771 = (i__21024__auto___29770 + (1));
i__21024__auto___29770 = G__29771;
continue;
} else {
}
break;
}

var G__29756 = args29754.length;
switch (G__29756) {
case 1:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29754.length)].join('')));

}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.madd = (function thi$ng$math$core$madd(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$madd$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$madd$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.madd[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.madd["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.madd",_);
}
}
}
});

thi.ng.math.core.addm = (function thi$ng$math$core$addm(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$addm$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$addm$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.addm[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.addm["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.addm",_);
}
}
}
});

thi.ng.math.core.msub = (function thi$ng$math$core$msub(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$msub$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$msub$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.msub[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.msub["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.msub",_);
}
}
}
});

thi.ng.math.core.subm = (function thi$ng$math$core$subm(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$subm$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$subm$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.subm[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.subm["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.subm",_);
}
}
}
});

thi.ng.math.core.abs = (function thi$ng$math$core$abs(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$abs$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$abs$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.abs[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.abs["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMathOps.abs",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IMutableMathOps = function(){};

thi.ng.math.core._PLUS__BANG_ = (function thi$ng$math$core$_PLUS__BANG_(var_args){
var args29773 = [];
var len__21023__auto___29785 = arguments.length;
var i__21024__auto___29786 = (0);
while(true){
if((i__21024__auto___29786 < len__21023__auto___29785)){
args29773.push((arguments[i__21024__auto___29786]));

var G__29787 = (i__21024__auto___29786 + (1));
i__21024__auto___29786 = G__29787;
continue;
} else {
}
break;
}

var G__29775 = args29773.length;
switch (G__29775) {
case 1:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29773.length)].join('')));

}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.__BANG_ = (function thi$ng$math$core$__BANG_(var_args){
var args29776 = [];
var len__21023__auto___29789 = arguments.length;
var i__21024__auto___29790 = (0);
while(true){
if((i__21024__auto___29790 < len__21023__auto___29789)){
args29776.push((arguments[i__21024__auto___29790]));

var G__29791 = (i__21024__auto___29790 + (1));
i__21024__auto___29790 = G__29791;
continue;
} else {
}
break;
}

var G__29778 = args29776.length;
switch (G__29778) {
case 1:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29776.length)].join('')));

}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core._STAR__BANG_ = (function thi$ng$math$core$_STAR__BANG_(var_args){
var args29779 = [];
var len__21023__auto___29793 = arguments.length;
var i__21024__auto___29794 = (0);
while(true){
if((i__21024__auto___29794 < len__21023__auto___29793)){
args29779.push((arguments[i__21024__auto___29794]));

var G__29795 = (i__21024__auto___29794 + (1));
i__21024__auto___29794 = G__29795;
continue;
} else {
}
break;
}

var G__29781 = args29779.length;
switch (G__29781) {
case 1:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29779.length)].join('')));

}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.div_BANG_ = (function thi$ng$math$core$div_BANG_(var_args){
var args29782 = [];
var len__21023__auto___29797 = arguments.length;
var i__21024__auto___29798 = (0);
while(true){
if((i__21024__auto___29798 < len__21023__auto___29797)){
args29782.push((arguments[i__21024__auto___29798]));

var G__29799 = (i__21024__auto___29798 + (1));
i__21024__auto___29798 = G__29799;
continue;
} else {
}
break;
}

var G__29784 = args29782.length;
switch (G__29784) {
case 1:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29782.length)].join('')));

}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4(_,a,b,c);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.madd_BANG_ = (function thi$ng$math$core$madd_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.madd_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.madd_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.madd!",_);
}
}
}
});

thi.ng.math.core.addm_BANG_ = (function thi$ng$math$core$addm_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.addm_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.addm_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.addm!",_);
}
}
}
});

thi.ng.math.core.msub_BANG_ = (function thi$ng$math$core$msub_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.msub_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.msub_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.msub!",_);
}
}
}
});

thi.ng.math.core.subm_BANG_ = (function thi$ng$math$core$subm_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.subm_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.subm_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.subm!",_);
}
}
}
});

thi.ng.math.core.abs_BANG_ = (function thi$ng$math$core$abs_BANG_(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.abs_BANG_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.abs_BANG_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMutableMathOps.abs!",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IConjugate = function(){};

thi.ng.math.core.conjugate = (function thi$ng$math$core$conjugate(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IConjugate$conjugate$arity$1 == null)))){
return _.thi$ng$math$core$IConjugate$conjugate$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.conjugate[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.conjugate["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IConjugate.conjugate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.ICrossProduct = function(){};

thi.ng.math.core.cross = (function thi$ng$math$core$cross(_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$ICrossProduct$cross$arity$2 == null)))){
return _.thi$ng$math$core$ICrossProduct$cross$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.cross[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.cross["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossProduct.cross",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IDeltaEquals = function(){};

thi.ng.math.core.delta_EQ_ = (function thi$ng$math$core$delta_EQ_(var_args){
var args29801 = [];
var len__21023__auto___29804 = arguments.length;
var i__21024__auto___29805 = (0);
while(true){
if((i__21024__auto___29805 < len__21023__auto___29804)){
args29801.push((arguments[i__21024__auto___29805]));

var G__29806 = (i__21024__auto___29805 + (1));
i__21024__auto___29805 = G__29806;
continue;
} else {
}
break;
}

var G__29803 = args29801.length;
switch (G__29803) {
case 2:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29801.length)].join('')));

}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((!((a == null))) && (!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 == null)))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
var x__20520__auto__ = (((a == null))?null:a);
var m__20521__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IDeltaEquals.delta=",a);
}
}
}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((!((a == null))) && (!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 == null)))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
var x__20520__auto__ = (((a == null))?null:a);
var m__20521__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,a,b,eps);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,a,b,eps);
} else {
throw cljs.core.missing_protocol.call(null,"IDeltaEquals.delta=",a);
}
}
}
});

thi.ng.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
thi.ng.math.core.IDeterminant = function(){};

thi.ng.math.core.determinant = (function thi$ng$math$core$determinant(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IDeterminant$determinant$arity$1 == null)))){
return _.thi$ng$math$core$IDeterminant$determinant$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.determinant[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.determinant["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDeterminant.determinant",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IDotProduct = function(){};

thi.ng.math.core.dot = (function thi$ng$math$core$dot(var_args){
var args29808 = [];
var len__21023__auto___29811 = arguments.length;
var i__21024__auto___29812 = (0);
while(true){
if((i__21024__auto___29812 < len__21023__auto___29811)){
args29808.push((arguments[i__21024__auto___29812]));

var G__29813 = (i__21024__auto___29812 + (1));
i__21024__auto___29812 = G__29813;
continue;
} else {
}
break;
}

var G__29810 = args29808.length;
switch (G__29810) {
case 1:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29808.length)].join('')));

}
});

thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IDotProduct$dot$arity$1 == null)))){
return _.thi$ng$math$core$IDotProduct$dot$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.dot["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDotProduct.dot",_);
}
}
}
});

thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IDotProduct$dot$arity$2 == null)))){
return _.thi$ng$math$core$IDotProduct$dot$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.dot["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IDotProduct.dot",_);
}
}
}
});

thi.ng.math.core.dot.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.math.core.IInterpolate = function(){};

thi.ng.math.core.mix = (function thi$ng$math$core$mix(var_args){
var args29815 = [];
var len__21023__auto___29818 = arguments.length;
var i__21024__auto___29819 = (0);
while(true){
if((i__21024__auto___29819 < len__21023__auto___29818)){
args29815.push((arguments[i__21024__auto___29819]));

var G__29820 = (i__21024__auto___29819 + (1));
i__21024__auto___29819 = G__29820;
continue;
} else {
}
break;
}

var G__29817 = args29815.length;
switch (G__29817) {
case 2:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29815.length)].join('')));

}
});

thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix$arity$2 == null)))){
return _.thi$ng$math$core$IInterpolate$mix$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.mix["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix",_);
}
}
}
});

thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3 = (function (_,x,t){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix$arity$3 == null)))){
return _.thi$ng$math$core$IInterpolate$mix$arity$3(_,x,t);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x,t);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.mix["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x,t);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix",_);
}
}
}
});

thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6 = (function (_,a,b,c,u,v){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix$arity$6 == null)))){
return _.thi$ng$math$core$IInterpolate$mix$arity$6(_,a,b,c,u,v);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b,c,u,v);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.mix["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b,c,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix",_);
}
}
}
});

thi.ng.math.core.mix.cljs$lang$maxFixedArity = 6;


thi.ng.math.core.mix_with = (function thi$ng$math$core$mix_with(_,x,t,f){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix_with$arity$4 == null)))){
return _.thi$ng$math$core$IInterpolate$mix_with$arity$4(_,x,t,f);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.mix_with[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x,t,f);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.mix_with["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x,t,f);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.mix-with",_);
}
}
}
});

thi.ng.math.core.step = (function thi$ng$math$core$step(_,e){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$step$arity$2 == null)))){
return _.thi$ng$math$core$IInterpolate$step$arity$2(_,e);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.step[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,e);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.step["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,e);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.step",_);
}
}
}
});

thi.ng.math.core.smoothstep = (function thi$ng$math$core$smoothstep(_,e1,e2){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$smoothstep$arity$3 == null)))){
return _.thi$ng$math$core$IInterpolate$smoothstep$arity$3(_,e1,e2);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.smoothstep[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,e1,e2);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.smoothstep["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,e1,e2);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpolate.smoothstep",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IInvert = function(){};

thi.ng.math.core.invert = (function thi$ng$math$core$invert(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInvert$invert$arity$1 == null)))){
return _.thi$ng$math$core$IInvert$invert$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.invert[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.invert["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IInvert.invert",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IMinMax = function(){};

thi.ng.math.core.min = (function thi$ng$math$core$min(var_args){
var args29822 = [];
var len__21023__auto___29828 = arguments.length;
var i__21024__auto___29829 = (0);
while(true){
if((i__21024__auto___29829 < len__21023__auto___29828)){
args29822.push((arguments[i__21024__auto___29829]));

var G__29830 = (i__21024__auto___29829 + (1));
i__21024__auto___29829 = G__29830;
continue;
} else {
}
break;
}

var G__29824 = args29822.length;
switch (G__29824) {
case 2:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29822.length)].join('')));

}
});

thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$min$arity$2 == null)))){
return _.thi$ng$math$core$IMinMax$min$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.min[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.min["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.min",_);
}
}
}
});

thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$min$arity$3 == null)))){
return _.thi$ng$math$core$IMinMax$min$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.min[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.min["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.min",_);
}
}
}
});

thi.ng.math.core.min.cljs$lang$maxFixedArity = 3;


thi.ng.math.core.max = (function thi$ng$math$core$max(var_args){
var args29825 = [];
var len__21023__auto___29832 = arguments.length;
var i__21024__auto___29833 = (0);
while(true){
if((i__21024__auto___29833 < len__21023__auto___29832)){
args29825.push((arguments[i__21024__auto___29833]));

var G__29834 = (i__21024__auto___29833 + (1));
i__21024__auto___29833 = G__29834;
continue;
} else {
}
break;
}

var G__29827 = args29825.length;
switch (G__29827) {
case 2:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29825.length)].join('')));

}
});

thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$max$arity$2 == null)))){
return _.thi$ng$math$core$IMinMax$max$arity$2(_,a);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.max[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.max["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.max",_);
}
}
}
});

thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$max$arity$3 == null)))){
return _.thi$ng$math$core$IMinMax$max$arity$3(_,a,b);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.max[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,a,b);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.max["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IMinMax.max",_);
}
}
}
});

thi.ng.math.core.max.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
thi.ng.math.core.ILimit = function(){};

thi.ng.math.core.limit = (function thi$ng$math$core$limit(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ILimit$limit$arity$2 == null)))){
return _.thi$ng$math$core$ILimit$limit$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.limit[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.limit["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ILimit.limit",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IMagnitude = function(){};

thi.ng.math.core.mag = (function thi$ng$math$core$mag(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMagnitude$mag$arity$1 == null)))){
return _.thi$ng$math$core$IMagnitude$mag$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.mag[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.mag["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMagnitude.mag",_);
}
}
}
});

thi.ng.math.core.mag_squared = (function thi$ng$math$core$mag_squared(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMagnitude$mag_squared$arity$1 == null)))){
return _.thi$ng$math$core$IMagnitude$mag_squared$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.mag_squared[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.mag_squared["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IMagnitude.mag-squared",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.INormalize = function(){};

thi.ng.math.core.normalize = (function thi$ng$math$core$normalize(var_args){
var args29836 = [];
var len__21023__auto___29839 = arguments.length;
var i__21024__auto___29840 = (0);
while(true){
if((i__21024__auto___29840 < len__21023__auto___29839)){
args29836.push((arguments[i__21024__auto___29840]));

var G__29841 = (i__21024__auto___29840 + (1));
i__21024__auto___29840 = G__29841;
continue;
} else {
}
break;
}

var G__29838 = args29836.length;
switch (G__29838) {
case 1:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29836.length)].join('')));

}
});

thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$INormalize$normalize$arity$1 == null)))){
return _.thi$ng$math$core$INormalize$normalize$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.normalize["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalize.normalize",_);
}
}
}
});

thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2 = (function (_,norm){
if((!((_ == null))) && (!((_.thi$ng$math$core$INormalize$normalize$arity$2 == null)))){
return _.thi$ng$math$core$INormalize$normalize$arity$2(_,norm);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,norm);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.normalize["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,norm);
} else {
throw cljs.core.missing_protocol.call(null,"INormalize.normalize",_);
}
}
}
});

thi.ng.math.core.normalize.cljs$lang$maxFixedArity = 2;


thi.ng.math.core.normalized_QMARK_ = (function thi$ng$math$core$normalized_QMARK_(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 == null)))){
return _.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.normalized_QMARK_[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.normalized_QMARK_["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INormalize.normalized?",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.ISetOps = function(){};

thi.ng.math.core.union = (function thi$ng$math$core$union(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ISetOps$union$arity$2 == null)))){
return _.thi$ng$math$core$ISetOps$union$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.union[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.union["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ISetOps.union",_);
}
}
}
});

thi.ng.math.core.intersection = (function thi$ng$math$core$intersection(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ISetOps$intersection$arity$2 == null)))){
return _.thi$ng$math$core$ISetOps$intersection$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.intersection[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.intersection["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ISetOps.intersection",_);
}
}
}
});

thi.ng.math.core.difference = (function thi$ng$math$core$difference(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ISetOps$difference$arity$2 == null)))){
return _.thi$ng$math$core$ISetOps$difference$arity$2(_,x);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.difference[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_,x);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.difference["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"ISetOps.difference",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.ITranspose = function(){};

thi.ng.math.core.transpose = (function thi$ng$math$core$transpose(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$ITranspose$transpose$arity$1 == null)))){
return _.thi$ng$math$core$ITranspose$transpose$arity$1(_);
} else {
var x__20520__auto__ = (((_ == null))?null:_);
var m__20521__auto__ = (thi.ng.math.core.transpose[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,_);
} else {
var m__20521__auto____$1 = (thi.ng.math.core.transpose["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITranspose.transpose",_);
}
}
}
});

thi.ng.math.core.PI = Math.PI;
thi.ng.math.core.TWO_PI = (thi.ng.math.core.PI * 2.0);
thi.ng.math.core.HALF_PI = (thi.ng.math.core.PI / 2.0);
thi.ng.math.core.THIRD_PI = (thi.ng.math.core.PI / 3.0);
thi.ng.math.core.QUARTER_PI = (thi.ng.math.core.PI / 4.0);
thi.ng.math.core.SIXTH_PI = (thi.ng.math.core.PI / 6.0);
thi.ng.math.core.THREE_HALVES_PI = (thi.ng.math.core.PI * 1.5);
thi.ng.math.core.MAX = 1.7976931348623157E308;
thi.ng.math.core.MIN = 4.9E-324;
thi.ng.math.core.SQRT2 = Math.sqrt((2));
thi.ng.math.core.SQRT3 = Math.sqrt((3));
thi.ng.math.core.PHI = ((Math.sqrt(5.0) + (1)) / (2));
thi.ng.math.core.THIRD = (1.0 / 3.0);
thi.ng.math.core.TWO_THIRD = (2.0 / 3.0);
thi.ng.math.core.SIXTH = (1.0 / 6.0);
thi.ng.math.core.LOG2 = Math.log(2.0);
thi.ng.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.math.core.DEG = (180.0 / thi.ng.math.core.PI);
thi.ng.math.core.RAD = (thi.ng.math.core.PI / 180.0);
thi.ng.math.core.INV7BIT = (1.0 / (127));
thi.ng.math.core.INV8BIT = (1.0 / (255));
thi.ng.math.core.INV15BIT = (1.0 / (32767));
thi.ng.math.core.INV16BIT = (1.0 / (65535));
thi.ng.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.math.core.abs_STAR_ = Math.abs;
thi.ng.math.core.abs_diff = (function thi$ng$math$core$abs_diff(x,y){
return thi.ng.math.core.abs_STAR_.call(null,(x - y));
});
thi.ng.math.core.sign = (function thi$ng$math$core$sign(x){
if((x === (0))){
return (0);
} else {
if((x > (0))){
return (1);
} else {
return (-1);
}
}
});
(thi.ng.math.core.IDeltaEquals["number"] = true);

(thi.ng.math.core.delta_EQ_["number"] = (function() {
var G__29843 = null;
var G__29843__2 = (function (a,b){
if(typeof b === 'number'){
return (thi.ng.math.core.abs_STAR_.call(null,(a - b)) <= thi.ng.math.core._STAR_eps_STAR_);
} else {
return null;
}
});
var G__29843__3 = (function (a,b,eps){
if(typeof b === 'number'){
return (thi.ng.math.core.abs_STAR_.call(null,(a - b)) <= eps);
} else {
return null;
}
});
G__29843 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__29843__2.call(this,a,b);
case 3:
return G__29843__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29843.cljs$core$IFn$_invoke$arity$2 = G__29843__2;
G__29843.cljs$core$IFn$_invoke$arity$3 = G__29843__3;
return G__29843;
})()
);

cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__29844 = cljs.core.next.call(null,a__$2);
var G__29845 = cljs.core.next.call(null,b__$1);
a__$2 = G__29844;
b__$1 = G__29845;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__29846 = cljs.core.next.call(null,a__$2);
var G__29847 = cljs.core.next.call(null,b__$1);
a__$2 = G__29846;
b__$1 = G__29847;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__29848 = cljs.core.next.call(null,a__$2);
var G__29849 = cljs.core.next.call(null,b__$1);
a__$2 = G__29848;
b__$1 = G__29849;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_.call(null,b)){
if((cljs.core.count.call(null,a__$1) === cljs.core.count.call(null,b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,cljs.core.first.call(null,a__$2),cljs.core.first.call(null,b__$1),eps))){
var G__29850 = cljs.core.next.call(null,a__$2);
var G__29851 = cljs.core.next.call(null,b__$1);
a__$2 = G__29850;
b__$1 = G__29851;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

(thi.ng.math.core.IDeltaEquals["null"] = true);

(thi.ng.math.core.delta_EQ_["null"] = (function() {
var G__29852 = null;
var G__29852__2 = (function (_,b){
return (b == null);
});
var G__29852__3 = (function (_,b,___$1){
return (b == null);
});
G__29852 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__29852__2.call(this,_,b);
case 3:
return G__29852__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29852.cljs$core$IFn$_invoke$arity$2 = G__29852__2;
G__29852.cljs$core$IFn$_invoke$arity$3 = G__29852__3;
return G__29852;
})()
);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.math.core.ensure_even = (function thi$ng$math$core$ensure_even(x){
if(cljs.core.even_QMARK_.call(null,x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.math.core.ensure_odd = (function thi$ng$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_.call(null,x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.math.core.signum = (function thi$ng$math$core$signum(var_args){
var args29853 = [];
var len__21023__auto___29856 = arguments.length;
var i__21024__auto___29857 = (0);
while(true){
if((i__21024__auto___29857 < len__21023__auto___29856)){
args29853.push((arguments[i__21024__auto___29857]));

var G__29858 = (i__21024__auto___29857 + (1));
i__21024__auto___29857 = G__29858;
continue;
} else {
}
break;
}

var G__29855 = args29853.length;
switch (G__29855) {
case 1:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29853.length)].join('')));

}
});

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x < (0))){
return (-1);
} else {
if((x === (0))){
return (0);
} else {
return (1);
}
}
});

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
});

thi.ng.math.core.signum.cljs$lang$maxFixedArity = 2;

/**
 * Constraints x to be in closed interval [min max].
 */
thi.ng.math.core.clamp = (function thi$ng$math$core$clamp(x,min,max){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;
}
}
});
/**
 * Constraints x to be in closed interval [0.0 .. 1.0]
 */
thi.ng.math.core.clamp_normalized = (function thi$ng$math$core$clamp_normalized(x){
if((x < -1.0)){
return -1.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
/**
 * Maps x from one interval into another. Intervals can be defined as
 *   vectors. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval = (function thi$ng$math$core$map_interval(var_args){
var args29860 = [];
var len__21023__auto___29871 = arguments.length;
var i__21024__auto___29872 = (0);
while(true){
if((i__21024__auto___29872 < len__21023__auto___29871)){
args29860.push((arguments[i__21024__auto___29872]));

var G__29873 = (i__21024__auto___29872 + (1));
i__21024__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var G__29862 = args29860.length;
switch (G__29862) {
case 3:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29860.length)].join('')));

}
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__29863,p__29864){
var vec__29865 = p__29863;
var in1 = cljs.core.nth.call(null,vec__29865,(0),null);
var in2 = cljs.core.nth.call(null,vec__29865,(1),null);
var vec__29868 = p__29864;
var out1 = cljs.core.nth.call(null,vec__29868,(0),null);
var out2 = cljs.core.nth.call(null,vec__29868,(1),null);
if(cljs.core.not_EQ_.call(null,in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if(cljs.core.not_EQ_.call(null,in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
});

thi.ng.math.core.map_interval.cljs$lang$maxFixedArity = 5;

/**
 * Takes a number x, input interval and output interval. Returns x
 *   mapped proportionally from input to output interval and clamps it to
 *   output. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval_clamped = (function thi$ng$math$core$map_interval_clamped(var_args){
var args29875 = [];
var len__21023__auto___29898 = arguments.length;
var i__21024__auto___29899 = (0);
while(true){
if((i__21024__auto___29899 < len__21023__auto___29898)){
args29875.push((arguments[i__21024__auto___29899]));

var G__29900 = (i__21024__auto___29899 + (1));
i__21024__auto___29899 = G__29900;
continue;
} else {
}
break;
}

var G__29877 = args29875.length;
switch (G__29877) {
case 3:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29875.length)].join('')));

}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__29878,p__29879){
var vec__29880 = p__29878;
var in1 = cljs.core.nth.call(null,vec__29880,(0),null);
var in2 = cljs.core.nth.call(null,vec__29880,(1),null);
var vec__29883 = p__29879;
var out1 = cljs.core.nth.call(null,vec__29883,(0),null);
var out2 = cljs.core.nth.call(null,vec__29883,(1),null);
return thi.ng.math.core.map_interval_clamped.call(null,x,in1,in2,out1,out2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2);
}
}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__29886,p__29887,p__29888){
var vec__29889 = p__29886;
var in1 = cljs.core.nth.call(null,vec__29889,(0),null);
var in2 = cljs.core.nth.call(null,vec__29889,(1),null);
var vec__29892 = p__29887;
var out1 = cljs.core.nth.call(null,vec__29892,(0),null);
var out2 = cljs.core.nth.call(null,vec__29892,(1),null);
var vec__29895 = p__29888;
var c1 = cljs.core.nth.call(null,vec__29895,(0),null);
var c2 = cljs.core.nth.call(null,vec__29895,(1),null);
return thi.ng.math.core.clamp.call(null,thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.math.core.clamp.call(null,thi.ng.math.core.map_interval.call(null,x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7;

/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.math.core.in_range_QMARK_ = (function thi$ng$math$core$in_range_QMARK_(var_args){
var args29902 = [];
var len__21023__auto___29909 = arguments.length;
var i__21024__auto___29910 = (0);
while(true){
if((i__21024__auto___29910 < len__21023__auto___29909)){
args29902.push((arguments[i__21024__auto___29910]));

var G__29911 = (i__21024__auto___29910 + (1));
i__21024__auto___29910 = G__29911;
continue;
} else {
}
break;
}

var G__29904 = args29902.length;
switch (G__29904) {
case 2:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29902.length)].join('')));

}
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__29905,x){
var vec__29906 = p__29905;
var min = cljs.core.nth.call(null,vec__29906,(0),null);
var max = cljs.core.nth.call(null,vec__29906,(1),null);
if((x >= min)){
return (x <= max);
} else {
return null;
}
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
if((x >= min)){
return (x <= max);
} else {
return null;
}
});

thi.ng.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Returns x mod y with result always in semi-closed interval [0..y
 */
thi.ng.math.core.wrap_range = (function thi$ng$math$core$wrap_range(x,y){
var x__$1 = cljs.core.rem.call(null,x,y);
if((x__$1 < (0))){
return (x__$1 + y);
} else {
return x__$1;
}
});
/**
 * Returns lazy-seq of n values in the closed interval [0.0, 1.0] at
 *   resolution 1/x.
 */
thi.ng.math.core.norm_range = (function thi$ng$math$core$norm_range(n){
return cljs.core.map.call(null,(function (p1__29913_SHARP_){
return (p1__29913_SHARP_ / n);
}),cljs.core.range.call(null,(n + (1))));
});
thi.ng.math.core.mix_STAR_ = (function thi$ng$math$core$mix_STAR_(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.math.core.step_STAR_ = (function thi$ng$math$core$step_STAR_(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.math.core.smoothstep_STAR_ = (function thi$ng$math$core$smoothstep_STAR_(e0,e1,x){
var t = thi.ng.math.core.clamp.call(null,((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.math.core.mix_circular = (function thi$ng$math$core$mix_circular(a,b,t){
var t__$1 = (1.0 - t);
return (((b - a) * Math.sqrt((1.0 - (t__$1 * t__$1)))) + a);
});
thi.ng.math.core.mix_circular_flipped = (function thi$ng$math$core$mix_circular_flipped(a,b,t){
return (((b - a) * (- (Math.sqrt((1.0 - (t * t))) - 1.0))) + a);
});
thi.ng.math.core.mix_cosine = (function thi$ng$math$core$mix_cosine(a,b,t){
return (((a - b) * ((Math.cos((t * thi.ng.math.core.PI)) * 0.5) + 0.5)) + b);
});
thi.ng.math.core.mix_bezier = (function thi$ng$math$core$mix_bezier(a,b,t,c1,c2){
var tsq = (t * t);
var invt = (1.0 - t);
var itsq = (invt * invt);
return (((((a * t) * itsq) + ((((((b - a) * c1) + a) * 3.0) * t) * itsq)) + ((((((b - a) * c2) + b) * 3.0) * tsq) * invt)) + ((b * t) * tsq));
});
thi.ng.math.core.mix_exp = (function thi$ng$math$core$mix_exp(a,b,t,e){
return (((b - a) * Math.pow(t,e)) + a);
});
thi.ng.math.core.mix_decimated = (function thi$ng$math$core$mix_decimated(a,b,t,n){
return (((b - a) * (((t * n) | (0)) / n)) + a);
});
thi.ng.math.core.mix_lens = (function thi$ng$math$core$mix_lens(a,b,t,pos,strength){
var v = (((b - a) * t) + a);
return ((((t < pos))?(((((strength > (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular).call(null,a,(((b - a) * pos) + a),(t / pos)) - v) * strength):(((((strength < (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular).call(null,(((b - a) * pos) + a),b,((t - pos) / (1.0 - pos))) - v) * thi.ng.math.core.abs_STAR_.call(null,strength))) + v);
});
thi.ng.math.core.mix_bounce = (function thi$ng$math$core$mix_bounce(a,b,t,k){
if(!((t === (0)))){
var t_SINGLEQUOTE_ = (t * k);
var t_SINGLEQUOTE___$1 = (1.0 - ((Math.sin(t_SINGLEQUOTE_) / t_SINGLEQUOTE_) * Math.cos((t * thi.ng.math.core.HALF_PI))));
return (((b - a) * t_SINGLEQUOTE___$1) + a);
} else {
return a;
}
});
thi.ng.math.core.floor = (function thi$ng$math$core$floor(x){
return Math.floor(x);
});
thi.ng.math.core.ceil = (function thi$ng$math$core$ceil(x){
return Math.ceil(x);
});
thi.ng.math.core.roundto = (function thi$ng$math$core$roundto(x,prec){
return (thi.ng.math.core.floor.call(null,((x / prec) + 0.5)) * prec);
});
thi.ng.math.core.ceil_pow2 = (function thi$ng$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__29914 = (pow2 << (1));
pow2 = G__29914;
continue;
}
break;
}
});
thi.ng.math.core.floor_pow2 = (function thi$ng$math$core$floor_pow2(x){
return Math.pow((2),((Math.log(x) / thi.ng.math.core.LOG2) | (0)));
});
thi.ng.math.core.bit_count = (function thi$ng$math$core$bit_count(x){
return thi.ng.math.core.ceil.call(null,(Math.log(x) / thi.ng.math.core.LOG2));
});
thi.ng.math.core.trunc = (function thi$ng$math$core$trunc(x){
if((x < (0))){
return thi.ng.math.core.ceil.call(null,x);
} else {
return thi.ng.math.core.floor.call(null,x);
}
});
thi.ng.math.core.fract = (function thi$ng$math$core$fract(x){
return (x - Math.floor(x));
});
thi.ng.math.core.fdim = (function thi$ng$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.math.core.radians = (function thi$ng$math$core$radians(x){
return (x * thi.ng.math.core.RAD);
});
thi.ng.math.core.degrees = (function thi$ng$math$core$degrees(x){
return (x * thi.ng.math.core.DEG);
});
thi.ng.math.core.maxmag = (function thi$ng$math$core$maxmag(x,y){
var ax = thi.ng.math.core.abs_STAR_.call(null,x);
var ay = thi.ng.math.core.abs_STAR_.call(null,y);
if((ax > ay)){
return x;
} else {
if((ay > ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.minmag = (function thi$ng$math$core$minmag(x,y){
var ax = thi.ng.math.core.abs_STAR_.call(null,x);
var ay = thi.ng.math.core.abs_STAR_.call(null,y);
if((ax < ay)){
return x;
} else {
if((ay < ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.ldexp = (function thi$ng$math$core$ldexp(x,k){
return (x * Math.pow((2),(k | (0))));
});
thi.ng.math.core.remquo = (function thi$ng$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.math.core.fract.call(null,k);
var k__$1 = ((cljs.core._EQ_.call(null,f,0.5))?((cljs.core.even_QMARK_.call(null,(k | (0))))?(k | (0)):thi.ng.math.core.ceil.call(null,k)):(((f < 0.5))?thi.ng.math.core.floor.call(null,k):thi.ng.math.core.ceil.call(null,k)
));
return (x - (k__$1 * y));
});
thi.ng.math.core.hypot = (function thi$ng$math$core$hypot(x,y){
return Math.sqrt(((x * x) + (y * y)));
});
thi.ng.math.core.rootn = (function thi$ng$math$core$rootn(x,y){
return Math.pow(x,(1.0 / y));
});
thi.ng.math.core.rsqrt = (function thi$ng$math$core$rsqrt(x){
var r = Math.sqrt(x);
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.math.core.impulse = (function thi$ng$math$core$impulse(k,t){
var h = (k * t);
return (h * Math.exp((1.0 - h)));
});
thi.ng.math.core.sinc = (function thi$ng$math$core$sinc(var_args){
var args29915 = [];
var len__21023__auto___29918 = arguments.length;
var i__21024__auto___29919 = (0);
while(true){
if((i__21024__auto___29919 < len__21023__auto___29918)){
args29915.push((arguments[i__21024__auto___29919]));

var G__29920 = (i__21024__auto___29919 + (1));
i__21024__auto___29919 = G__29920;
continue;
} else {
}
break;
}

var G__29917 = args29915.length;
switch (G__29917) {
case 1:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29915.length)].join('')));

}
});

thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x === (0))){
return 0.0;
} else {
return (Math.sin(x) / x);
}
});

thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2 = (function (x,freq){
if((x === (0))){
return 0.0;
} else {
var x_SINGLEQUOTE_ = (x * freq);
return (Math.sin(x_SINGLEQUOTE_) / x_SINGLEQUOTE_);
}
});

thi.ng.math.core.sinc.cljs$lang$maxFixedArity = 2;

thi.ng.math.core.random = (function thi$ng$math$core$random(var_args){
var args29922 = [];
var len__21023__auto___29925 = arguments.length;
var i__21024__auto___29926 = (0);
while(true){
if((i__21024__auto___29926 < len__21023__auto___29925)){
args29922.push((arguments[i__21024__auto___29926]));

var G__29927 = (i__21024__auto___29926 + (1));
i__21024__auto___29926 = G__29927;
continue;
} else {
}
break;
}

var G__29924 = args29922.length;
switch (G__29924) {
case 0:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29922.length)].join('')));

}
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core._STAR_rnd_STAR_.call(null);
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return (thi.ng.math.core._STAR_rnd_STAR_.call(null) * max);
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * thi.ng.math.core._STAR_rnd_STAR_.call(null)) + min);
});

thi.ng.math.core.random.cljs$lang$maxFixedArity = 2;

thi.ng.math.core.randnorm = (function thi$ng$math$core$randnorm(){
return ((thi.ng.math.core._STAR_rnd_STAR_.call(null) * 2.0) - (1));
});
thi.ng.math.core.percentile_index = (function thi$ng$math$core$percentile_index(n,num){
return ((((n < (100)))?(Math.round((((n / 100.0) * num) + 0.5)) | (0)):num) - (1));
});
thi.ng.math.core.percentile = (function thi$ng$math$core$percentile(n,sorted){
return cljs.core.nth.call(null,sorted,thi.ng.math.core.percentile_index.call(null,n,cljs.core.count.call(null,sorted)));
});
thi.ng.math.core.quartile_index = (function thi$ng$math$core$quartile_index(n,num){
return thi.ng.math.core.percentile_index.call(null,(n * (25)),num);
});
thi.ng.math.core.quartile_range = (function thi$ng$math$core$quartile_range(n,num){
var a = thi.ng.math.core.quartile_index.call(null,(n - (1)),num);
var b = thi.ng.math.core.quartile_index.call(null,n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.call(null,n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.math.core.quartile = (function thi$ng$math$core$quartile(n,sorted){
var vec__29932 = thi.ng.math.core.quartile_range.call(null,n,cljs.core.count.call(null,sorted));
var a = cljs.core.nth.call(null,vec__29932,(0),null);
var b = cljs.core.nth.call(null,vec__29932,(1),null);
return cljs.core.take.call(null,(b - a),cljs.core.drop.call(null,a,sorted));
});
thi.ng.math.core.normdist_weights = (function thi$ng$math$core$normdist_weights(var_args){
var args29936 = [];
var len__21023__auto___29939 = arguments.length;
var i__21024__auto___29940 = (0);
while(true){
if((i__21024__auto___29940 < len__21023__auto___29939)){
args29936.push((arguments[i__21024__auto___29940]));

var G__29941 = (i__21024__auto___29940 + (1));
i__21024__auto___29940 = G__29941;
continue;
} else {
}
break;
}

var G__29938 = args29936.length;
switch (G__29938) {
case 1:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29936.length)].join('')));

}
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normdist_weights.call(null,n,1.0);
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.call(null,n,thi.ng.math.core.random);
var s = (scale / cljs.core.reduce.call(null,cljs.core._PLUS_,ws));
return cljs.core.map.call(null,((function (ws,s){
return (function (p1__29935_SHARP_){
return (s * p1__29935_SHARP_);
});})(ws,s))
,ws);
});

thi.ng.math.core.normdist_weights.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map