// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.helpers');
goog.require('cljs.core');
/**
 * Cycle between min and max with inc-step and dec-step starting at
 *   start in direction :up
 */
qlayground_cljs.helpers.cycle_between = (function qlayground_cljs$helpers$cycle_between(var_args){
var args40866 = [];
var len__8435__auto___40872 = arguments.length;
var i__8436__auto___40873 = (0);
while(true){
if((i__8436__auto___40873 < len__8435__auto___40872)){
args40866.push((arguments[i__8436__auto___40873]));

var G__40874 = (i__8436__auto___40873 + (1));
i__8436__auto___40873 = G__40874;
continue;
} else {
}
break;
}

var G__40868 = args40866.length;
switch (G__40868) {
case 2:
return qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40866.length)].join('')));

}
});

qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return qlayground_cljs.helpers.cycle_between.call(null,min,min,max,(1),(1));
});

qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$3 = (function (min,max,inc_step){
return qlayground_cljs.helpers.cycle_between.call(null,min,min,max,inc_step,inc_step);
});

qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$4 = (function (min,max,inc_step,dec_step){
return qlayground_cljs.helpers.cycle_between.call(null,min,min,max,inc_step,dec_step);
});

qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$5 = (function (start,min,max,inc_step,dec_step){
return qlayground_cljs.helpers.cycle_between.call(null,start,min,max,inc_step,dec_step,new cljs.core.Keyword(null,"up","up",-269712113));
});

qlayground_cljs.helpers.cycle_between.cljs$core$IFn$_invoke$arity$6 = (function (start,min,max,inc_step,dec_step,direction){
var inc_step__$1 = (((inc_step < (0)))?((-1) * inc_step):inc_step);
var dec_step__$1 = (((dec_step < (0)))?((-1) * dec_step):dec_step);
var next = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",-269712113),direction))?(start + inc_step__$1):(start - dec_step__$1));
var vec__40869 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",-269712113),direction))?(((next > max))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start - dec_step__$1),new cljs.core.Keyword(null,"down","down",1565245570)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next,new cljs.core.Keyword(null,"up","up",-269712113)], null)):(((next < min))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + inc_step__$1),new cljs.core.Keyword(null,"up","up",-269712113)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next,new cljs.core.Keyword(null,"down","down",1565245570)], null)));
var next__$1 = cljs.core.nth.call(null,vec__40869,(0),null);
var dir = cljs.core.nth.call(null,vec__40869,(1),null);
return (new cljs.core.LazySeq(null,((function (inc_step__$1,dec_step__$1,next,vec__40869,next__$1,dir){
return (function (){
return cljs.core.cons.call(null,start,qlayground_cljs.helpers.cycle_between.call(null,next__$1,min,max,inc_step__$1,dec_step__$1,dir));
});})(inc_step__$1,dec_step__$1,next,vec__40869,next__$1,dir))
,null,null));
});

qlayground_cljs.helpers.cycle_between.cljs$lang$maxFixedArity = 6;


//# sourceMappingURL=helpers.js.map