// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32557 = arguments.length;
var i__25912__auto___32558 = (0);
while(true){
if((i__25912__auto___32558 < len__25911__auto___32557)){
args__25918__auto__.push((arguments[i__25912__auto___32558]));

var G__32559 = (i__25912__auto___32558 + (1));
i__25912__auto___32558 = G__32559;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq32556){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32556));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32561 = arguments.length;
var i__25912__auto___32562 = (0);
while(true){
if((i__25912__auto___32562 < len__25911__auto___32561)){
args__25918__auto__.push((arguments[i__25912__auto___32562]));

var G__32563 = (i__25912__auto___32562 + (1));
i__25912__auto___32562 = G__32563;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq32560){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32560));
});

var g_QMARK__32564 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_32565 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32564){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32564))
,null));
var mkg_32566 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32564,g_32565){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32564,g_32565))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__32564,g_32565,mkg_32566){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32564).call(null,x);
});})(g_QMARK__32564,g_32565,mkg_32566))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__32564,g_32565,mkg_32566){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_32566).call(null,gfn);
});})(g_QMARK__32564,g_32565,mkg_32566))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__32564,g_32565,mkg_32566){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_32565).call(null,generator);
});})(g_QMARK__32564,g_32565,mkg_32566))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32528__auto___32585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32528__auto___32585){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32586 = arguments.length;
var i__25912__auto___32587 = (0);
while(true){
if((i__25912__auto___32587 < len__25911__auto___32586)){
args__25918__auto__.push((arguments[i__25912__auto___32587]));

var G__32588 = (i__25912__auto___32587 + (1));
i__25912__auto___32587 = G__32588;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32585))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32585),args);
});})(g__32528__auto___32585))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32528__auto___32585){
return (function (seq32567){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32567));
});})(g__32528__auto___32585))
;


var g__32528__auto___32589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32528__auto___32589){
return (function cljs$spec$impl$gen$list(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32590 = arguments.length;
var i__25912__auto___32591 = (0);
while(true){
if((i__25912__auto___32591 < len__25911__auto___32590)){
args__25918__auto__.push((arguments[i__25912__auto___32591]));

var G__32592 = (i__25912__auto___32591 + (1));
i__25912__auto___32591 = G__32592;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32589))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32589),args);
});})(g__32528__auto___32589))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32528__auto___32589){
return (function (seq32568){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32568));
});})(g__32528__auto___32589))
;


var g__32528__auto___32593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32528__auto___32593){
return (function cljs$spec$impl$gen$map(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32594 = arguments.length;
var i__25912__auto___32595 = (0);
while(true){
if((i__25912__auto___32595 < len__25911__auto___32594)){
args__25918__auto__.push((arguments[i__25912__auto___32595]));

var G__32596 = (i__25912__auto___32595 + (1));
i__25912__auto___32595 = G__32596;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32593))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32593),args);
});})(g__32528__auto___32593))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32528__auto___32593){
return (function (seq32569){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32569));
});})(g__32528__auto___32593))
;


var g__32528__auto___32597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32528__auto___32597){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32598 = arguments.length;
var i__25912__auto___32599 = (0);
while(true){
if((i__25912__auto___32599 < len__25911__auto___32598)){
args__25918__auto__.push((arguments[i__25912__auto___32599]));

var G__32600 = (i__25912__auto___32599 + (1));
i__25912__auto___32599 = G__32600;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32597))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32597),args);
});})(g__32528__auto___32597))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32528__auto___32597){
return (function (seq32570){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32570));
});})(g__32528__auto___32597))
;


var g__32528__auto___32601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32528__auto___32601){
return (function cljs$spec$impl$gen$set(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32602 = arguments.length;
var i__25912__auto___32603 = (0);
while(true){
if((i__25912__auto___32603 < len__25911__auto___32602)){
args__25918__auto__.push((arguments[i__25912__auto___32603]));

var G__32604 = (i__25912__auto___32603 + (1));
i__25912__auto___32603 = G__32604;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32601))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32601),args);
});})(g__32528__auto___32601))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32528__auto___32601){
return (function (seq32571){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32571));
});})(g__32528__auto___32601))
;


var g__32528__auto___32605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32528__auto___32605){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32606 = arguments.length;
var i__25912__auto___32607 = (0);
while(true){
if((i__25912__auto___32607 < len__25911__auto___32606)){
args__25918__auto__.push((arguments[i__25912__auto___32607]));

var G__32608 = (i__25912__auto___32607 + (1));
i__25912__auto___32607 = G__32608;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32605))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32605),args);
});})(g__32528__auto___32605))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32528__auto___32605){
return (function (seq32572){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32572));
});})(g__32528__auto___32605))
;


var g__32528__auto___32609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32528__auto___32609){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32610 = arguments.length;
var i__25912__auto___32611 = (0);
while(true){
if((i__25912__auto___32611 < len__25911__auto___32610)){
args__25918__auto__.push((arguments[i__25912__auto___32611]));

var G__32612 = (i__25912__auto___32611 + (1));
i__25912__auto___32611 = G__32612;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32609))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32609),args);
});})(g__32528__auto___32609))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32528__auto___32609){
return (function (seq32573){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32573));
});})(g__32528__auto___32609))
;


var g__32528__auto___32613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32528__auto___32613){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32614 = arguments.length;
var i__25912__auto___32615 = (0);
while(true){
if((i__25912__auto___32615 < len__25911__auto___32614)){
args__25918__auto__.push((arguments[i__25912__auto___32615]));

var G__32616 = (i__25912__auto___32615 + (1));
i__25912__auto___32615 = G__32616;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32613))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32613),args);
});})(g__32528__auto___32613))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32528__auto___32613){
return (function (seq32574){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32574));
});})(g__32528__auto___32613))
;


var g__32528__auto___32617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32528__auto___32617){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32618 = arguments.length;
var i__25912__auto___32619 = (0);
while(true){
if((i__25912__auto___32619 < len__25911__auto___32618)){
args__25918__auto__.push((arguments[i__25912__auto___32619]));

var G__32620 = (i__25912__auto___32619 + (1));
i__25912__auto___32619 = G__32620;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32617))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32617),args);
});})(g__32528__auto___32617))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32528__auto___32617){
return (function (seq32575){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32575));
});})(g__32528__auto___32617))
;


var g__32528__auto___32621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32528__auto___32621){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32622 = arguments.length;
var i__25912__auto___32623 = (0);
while(true){
if((i__25912__auto___32623 < len__25911__auto___32622)){
args__25918__auto__.push((arguments[i__25912__auto___32623]));

var G__32624 = (i__25912__auto___32623 + (1));
i__25912__auto___32623 = G__32624;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32621))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32621),args);
});})(g__32528__auto___32621))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32528__auto___32621){
return (function (seq32576){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32576));
});})(g__32528__auto___32621))
;


var g__32528__auto___32625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32528__auto___32625){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32626 = arguments.length;
var i__25912__auto___32627 = (0);
while(true){
if((i__25912__auto___32627 < len__25911__auto___32626)){
args__25918__auto__.push((arguments[i__25912__auto___32627]));

var G__32628 = (i__25912__auto___32627 + (1));
i__25912__auto___32627 = G__32628;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32625))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32625),args);
});})(g__32528__auto___32625))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32528__auto___32625){
return (function (seq32577){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32577));
});})(g__32528__auto___32625))
;


var g__32528__auto___32629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32528__auto___32629){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32630 = arguments.length;
var i__25912__auto___32631 = (0);
while(true){
if((i__25912__auto___32631 < len__25911__auto___32630)){
args__25918__auto__.push((arguments[i__25912__auto___32631]));

var G__32632 = (i__25912__auto___32631 + (1));
i__25912__auto___32631 = G__32632;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32629))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32629),args);
});})(g__32528__auto___32629))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32528__auto___32629){
return (function (seq32578){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32578));
});})(g__32528__auto___32629))
;


var g__32528__auto___32633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32528__auto___32633){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32634 = arguments.length;
var i__25912__auto___32635 = (0);
while(true){
if((i__25912__auto___32635 < len__25911__auto___32634)){
args__25918__auto__.push((arguments[i__25912__auto___32635]));

var G__32636 = (i__25912__auto___32635 + (1));
i__25912__auto___32635 = G__32636;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32633))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32633),args);
});})(g__32528__auto___32633))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32528__auto___32633){
return (function (seq32579){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32579));
});})(g__32528__auto___32633))
;


var g__32528__auto___32637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32528__auto___32637){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32638 = arguments.length;
var i__25912__auto___32639 = (0);
while(true){
if((i__25912__auto___32639 < len__25911__auto___32638)){
args__25918__auto__.push((arguments[i__25912__auto___32639]));

var G__32640 = (i__25912__auto___32639 + (1));
i__25912__auto___32639 = G__32640;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32637))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32637),args);
});})(g__32528__auto___32637))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32528__auto___32637){
return (function (seq32580){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32580));
});})(g__32528__auto___32637))
;


var g__32528__auto___32641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32528__auto___32641){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32642 = arguments.length;
var i__25912__auto___32643 = (0);
while(true){
if((i__25912__auto___32643 < len__25911__auto___32642)){
args__25918__auto__.push((arguments[i__25912__auto___32643]));

var G__32644 = (i__25912__auto___32643 + (1));
i__25912__auto___32643 = G__32644;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32641))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32641),args);
});})(g__32528__auto___32641))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32528__auto___32641){
return (function (seq32581){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32581));
});})(g__32528__auto___32641))
;


var g__32528__auto___32645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32528__auto___32645){
return (function cljs$spec$impl$gen$return(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32646 = arguments.length;
var i__25912__auto___32647 = (0);
while(true){
if((i__25912__auto___32647 < len__25911__auto___32646)){
args__25918__auto__.push((arguments[i__25912__auto___32647]));

var G__32648 = (i__25912__auto___32647 + (1));
i__25912__auto___32647 = G__32648;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32645))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32645),args);
});})(g__32528__auto___32645))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32528__auto___32645){
return (function (seq32582){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32582));
});})(g__32528__auto___32645))
;


var g__32528__auto___32649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32528__auto___32649){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32650 = arguments.length;
var i__25912__auto___32651 = (0);
while(true){
if((i__25912__auto___32651 < len__25911__auto___32650)){
args__25918__auto__.push((arguments[i__25912__auto___32651]));

var G__32652 = (i__25912__auto___32651 + (1));
i__25912__auto___32651 = G__32652;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32649))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32649),args);
});})(g__32528__auto___32649))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32528__auto___32649){
return (function (seq32583){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32583));
});})(g__32528__auto___32649))
;


var g__32528__auto___32653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32528__auto___32653){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32654 = arguments.length;
var i__25912__auto___32655 = (0);
while(true){
if((i__25912__auto___32655 < len__25911__auto___32654)){
args__25918__auto__.push((arguments[i__25912__auto___32655]));

var G__32656 = (i__25912__auto___32655 + (1));
i__25912__auto___32655 = G__32656;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32528__auto___32653))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32528__auto___32653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32528__auto___32653),args);
});})(g__32528__auto___32653))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32528__auto___32653){
return (function (seq32584){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32584));
});})(g__32528__auto___32653))
;

var g__32541__auto___32678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32541__auto___32678){
return (function cljs$spec$impl$gen$any(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32679 = arguments.length;
var i__25912__auto___32680 = (0);
while(true){
if((i__25912__auto___32680 < len__25911__auto___32679)){
args__25918__auto__.push((arguments[i__25912__auto___32680]));

var G__32681 = (i__25912__auto___32680 + (1));
i__25912__auto___32680 = G__32681;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32678))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32678){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32678);
});})(g__32541__auto___32678))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32541__auto___32678){
return (function (seq32657){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32657));
});})(g__32541__auto___32678))
;


var g__32541__auto___32682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32541__auto___32682){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32683 = arguments.length;
var i__25912__auto___32684 = (0);
while(true){
if((i__25912__auto___32684 < len__25911__auto___32683)){
args__25918__auto__.push((arguments[i__25912__auto___32684]));

var G__32685 = (i__25912__auto___32684 + (1));
i__25912__auto___32684 = G__32685;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32682))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32682){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32682);
});})(g__32541__auto___32682))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32541__auto___32682){
return (function (seq32658){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32658));
});})(g__32541__auto___32682))
;


var g__32541__auto___32686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32541__auto___32686){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32687 = arguments.length;
var i__25912__auto___32688 = (0);
while(true){
if((i__25912__auto___32688 < len__25911__auto___32687)){
args__25918__auto__.push((arguments[i__25912__auto___32688]));

var G__32689 = (i__25912__auto___32688 + (1));
i__25912__auto___32688 = G__32689;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32686))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32686){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32686);
});})(g__32541__auto___32686))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32541__auto___32686){
return (function (seq32659){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32659));
});})(g__32541__auto___32686))
;


var g__32541__auto___32690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32541__auto___32690){
return (function cljs$spec$impl$gen$char(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32691 = arguments.length;
var i__25912__auto___32692 = (0);
while(true){
if((i__25912__auto___32692 < len__25911__auto___32691)){
args__25918__auto__.push((arguments[i__25912__auto___32692]));

var G__32693 = (i__25912__auto___32692 + (1));
i__25912__auto___32692 = G__32693;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32690))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32690){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32690);
});})(g__32541__auto___32690))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32541__auto___32690){
return (function (seq32660){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32660));
});})(g__32541__auto___32690))
;


var g__32541__auto___32694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32541__auto___32694){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32695 = arguments.length;
var i__25912__auto___32696 = (0);
while(true){
if((i__25912__auto___32696 < len__25911__auto___32695)){
args__25918__auto__.push((arguments[i__25912__auto___32696]));

var G__32697 = (i__25912__auto___32696 + (1));
i__25912__auto___32696 = G__32697;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32694))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32694){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32694);
});})(g__32541__auto___32694))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32541__auto___32694){
return (function (seq32661){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32661));
});})(g__32541__auto___32694))
;


var g__32541__auto___32698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32541__auto___32698){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32699 = arguments.length;
var i__25912__auto___32700 = (0);
while(true){
if((i__25912__auto___32700 < len__25911__auto___32699)){
args__25918__auto__.push((arguments[i__25912__auto___32700]));

var G__32701 = (i__25912__auto___32700 + (1));
i__25912__auto___32700 = G__32701;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32698))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32698){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32698);
});})(g__32541__auto___32698))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32541__auto___32698){
return (function (seq32662){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32662));
});})(g__32541__auto___32698))
;


var g__32541__auto___32702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32541__auto___32702){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32703 = arguments.length;
var i__25912__auto___32704 = (0);
while(true){
if((i__25912__auto___32704 < len__25911__auto___32703)){
args__25918__auto__.push((arguments[i__25912__auto___32704]));

var G__32705 = (i__25912__auto___32704 + (1));
i__25912__auto___32704 = G__32705;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32702))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32702){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32702);
});})(g__32541__auto___32702))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32541__auto___32702){
return (function (seq32663){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32663));
});})(g__32541__auto___32702))
;


var g__32541__auto___32706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32541__auto___32706){
return (function cljs$spec$impl$gen$double(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32707 = arguments.length;
var i__25912__auto___32708 = (0);
while(true){
if((i__25912__auto___32708 < len__25911__auto___32707)){
args__25918__auto__.push((arguments[i__25912__auto___32708]));

var G__32709 = (i__25912__auto___32708 + (1));
i__25912__auto___32708 = G__32709;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32706))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32706){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32706);
});})(g__32541__auto___32706))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32541__auto___32706){
return (function (seq32664){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32664));
});})(g__32541__auto___32706))
;


var g__32541__auto___32710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32541__auto___32710){
return (function cljs$spec$impl$gen$int(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32711 = arguments.length;
var i__25912__auto___32712 = (0);
while(true){
if((i__25912__auto___32712 < len__25911__auto___32711)){
args__25918__auto__.push((arguments[i__25912__auto___32712]));

var G__32713 = (i__25912__auto___32712 + (1));
i__25912__auto___32712 = G__32713;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32710))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32710){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32710);
});})(g__32541__auto___32710))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32541__auto___32710){
return (function (seq32665){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32665));
});})(g__32541__auto___32710))
;


var g__32541__auto___32714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32541__auto___32714){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32715 = arguments.length;
var i__25912__auto___32716 = (0);
while(true){
if((i__25912__auto___32716 < len__25911__auto___32715)){
args__25918__auto__.push((arguments[i__25912__auto___32716]));

var G__32717 = (i__25912__auto___32716 + (1));
i__25912__auto___32716 = G__32717;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32714))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32714){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32714);
});})(g__32541__auto___32714))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32541__auto___32714){
return (function (seq32666){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32666));
});})(g__32541__auto___32714))
;


var g__32541__auto___32718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32541__auto___32718){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32719 = arguments.length;
var i__25912__auto___32720 = (0);
while(true){
if((i__25912__auto___32720 < len__25911__auto___32719)){
args__25918__auto__.push((arguments[i__25912__auto___32720]));

var G__32721 = (i__25912__auto___32720 + (1));
i__25912__auto___32720 = G__32721;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32718))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32718){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32718);
});})(g__32541__auto___32718))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32541__auto___32718){
return (function (seq32667){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32667));
});})(g__32541__auto___32718))
;


var g__32541__auto___32722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32541__auto___32722){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32723 = arguments.length;
var i__25912__auto___32724 = (0);
while(true){
if((i__25912__auto___32724 < len__25911__auto___32723)){
args__25918__auto__.push((arguments[i__25912__auto___32724]));

var G__32725 = (i__25912__auto___32724 + (1));
i__25912__auto___32724 = G__32725;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32722))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32722){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32722);
});})(g__32541__auto___32722))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32541__auto___32722){
return (function (seq32668){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32668));
});})(g__32541__auto___32722))
;


var g__32541__auto___32726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32541__auto___32726){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32727 = arguments.length;
var i__25912__auto___32728 = (0);
while(true){
if((i__25912__auto___32728 < len__25911__auto___32727)){
args__25918__auto__.push((arguments[i__25912__auto___32728]));

var G__32729 = (i__25912__auto___32728 + (1));
i__25912__auto___32728 = G__32729;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32726))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32726){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32726);
});})(g__32541__auto___32726))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32541__auto___32726){
return (function (seq32669){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32669));
});})(g__32541__auto___32726))
;


var g__32541__auto___32730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32541__auto___32730){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32731 = arguments.length;
var i__25912__auto___32732 = (0);
while(true){
if((i__25912__auto___32732 < len__25911__auto___32731)){
args__25918__auto__.push((arguments[i__25912__auto___32732]));

var G__32733 = (i__25912__auto___32732 + (1));
i__25912__auto___32732 = G__32733;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32730))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32730){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32730);
});})(g__32541__auto___32730))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32541__auto___32730){
return (function (seq32670){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32670));
});})(g__32541__auto___32730))
;


var g__32541__auto___32734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32541__auto___32734){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32735 = arguments.length;
var i__25912__auto___32736 = (0);
while(true){
if((i__25912__auto___32736 < len__25911__auto___32735)){
args__25918__auto__.push((arguments[i__25912__auto___32736]));

var G__32737 = (i__25912__auto___32736 + (1));
i__25912__auto___32736 = G__32737;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32734))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32734){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32734);
});})(g__32541__auto___32734))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32541__auto___32734){
return (function (seq32671){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32671));
});})(g__32541__auto___32734))
;


var g__32541__auto___32738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32541__auto___32738){
return (function cljs$spec$impl$gen$string(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32739 = arguments.length;
var i__25912__auto___32740 = (0);
while(true){
if((i__25912__auto___32740 < len__25911__auto___32739)){
args__25918__auto__.push((arguments[i__25912__auto___32740]));

var G__32741 = (i__25912__auto___32740 + (1));
i__25912__auto___32740 = G__32741;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32738))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32738){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32738);
});})(g__32541__auto___32738))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32541__auto___32738){
return (function (seq32672){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32672));
});})(g__32541__auto___32738))
;


var g__32541__auto___32742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32541__auto___32742){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32743 = arguments.length;
var i__25912__auto___32744 = (0);
while(true){
if((i__25912__auto___32744 < len__25911__auto___32743)){
args__25918__auto__.push((arguments[i__25912__auto___32744]));

var G__32745 = (i__25912__auto___32744 + (1));
i__25912__auto___32744 = G__32745;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32742))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32742){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32742);
});})(g__32541__auto___32742))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32541__auto___32742){
return (function (seq32673){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32673));
});})(g__32541__auto___32742))
;


var g__32541__auto___32746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32541__auto___32746){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32747 = arguments.length;
var i__25912__auto___32748 = (0);
while(true){
if((i__25912__auto___32748 < len__25911__auto___32747)){
args__25918__auto__.push((arguments[i__25912__auto___32748]));

var G__32749 = (i__25912__auto___32748 + (1));
i__25912__auto___32748 = G__32749;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32746))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32746){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32746);
});})(g__32541__auto___32746))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32541__auto___32746){
return (function (seq32674){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32674));
});})(g__32541__auto___32746))
;


var g__32541__auto___32750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32541__auto___32750){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32751 = arguments.length;
var i__25912__auto___32752 = (0);
while(true){
if((i__25912__auto___32752 < len__25911__auto___32751)){
args__25918__auto__.push((arguments[i__25912__auto___32752]));

var G__32753 = (i__25912__auto___32752 + (1));
i__25912__auto___32752 = G__32753;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32750))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32750){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32750);
});})(g__32541__auto___32750))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32541__auto___32750){
return (function (seq32675){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32675));
});})(g__32541__auto___32750))
;


var g__32541__auto___32754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32541__auto___32754){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32755 = arguments.length;
var i__25912__auto___32756 = (0);
while(true){
if((i__25912__auto___32756 < len__25911__auto___32755)){
args__25918__auto__.push((arguments[i__25912__auto___32756]));

var G__32757 = (i__25912__auto___32756 + (1));
i__25912__auto___32756 = G__32757;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32754))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32754){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32754);
});})(g__32541__auto___32754))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32541__auto___32754){
return (function (seq32676){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32676));
});})(g__32541__auto___32754))
;


var g__32541__auto___32758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32541__auto___32758){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32759 = arguments.length;
var i__25912__auto___32760 = (0);
while(true){
if((i__25912__auto___32760 < len__25911__auto___32759)){
args__25918__auto__.push((arguments[i__25912__auto___32760]));

var G__32761 = (i__25912__auto___32760 + (1));
i__25912__auto___32760 = G__32761;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});})(g__32541__auto___32758))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32541__auto___32758){
return (function (args){
return cljs.core.deref.call(null,g__32541__auto___32758);
});})(g__32541__auto___32758))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32541__auto___32758){
return (function (seq32677){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32677));
});})(g__32541__auto___32758))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25918__auto__ = [];
var len__25911__auto___32764 = arguments.length;
var i__25912__auto___32765 = (0);
while(true){
if((i__25912__auto___32765 < len__25911__auto___32764)){
args__25918__auto__.push((arguments[i__25912__auto___32765]));

var G__32766 = (i__25912__auto___32765 + (1));
i__25912__auto___32765 = G__32766;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__32762_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32762_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq32763){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32763));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__32767_SHARP_){
return (new Date(p1__32767_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1490842134933