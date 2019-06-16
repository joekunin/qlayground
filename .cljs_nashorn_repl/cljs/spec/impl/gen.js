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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__21245__auto__ = [];
var len__21238__auto___23321 = arguments.length;
var i__21239__auto___23322 = (0);
while(true){
if((i__21239__auto___23322 < len__21238__auto___23321)){
args__21245__auto__.push((arguments[i__21239__auto___23322]));

var G__23323 = (i__21239__auto___23322 + (1));
i__21239__auto___23322 = G__23323;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq23320){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23320));
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
var args__21245__auto__ = [];
var len__21238__auto___23325 = arguments.length;
var i__21239__auto___23326 = (0);
while(true){
if((i__21239__auto___23326 < len__21238__auto___23325)){
args__21245__auto__.push((arguments[i__21239__auto___23326]));

var G__23327 = (i__21239__auto___23326 + (1));
i__21239__auto___23326 = G__23327;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq23324){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23324));
});

var g_QMARK__23328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_23329 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23328){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23328))
,null));
var mkg_23330 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23328,g_23329){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23328,g_23329))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__23328,g_23329,mkg_23330){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__23328).call(null,x);
});})(g_QMARK__23328,g_23329,mkg_23330))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__23328,g_23329,mkg_23330){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_23330).call(null,gfn);
});})(g_QMARK__23328,g_23329,mkg_23330))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__23328,g_23329,mkg_23330){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_23329).call(null,generator);
});})(g_QMARK__23328,g_23329,mkg_23330))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21322__auto___23349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21322__auto___23349){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23350 = arguments.length;
var i__21239__auto___23351 = (0);
while(true){
if((i__21239__auto___23351 < len__21238__auto___23350)){
args__21245__auto__.push((arguments[i__21239__auto___23351]));

var G__23352 = (i__21239__auto___23351 + (1));
i__21239__auto___23351 = G__23352;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23349))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23349),args);
});})(g__21322__auto___23349))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21322__auto___23349){
return (function (seq23331){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23331));
});})(g__21322__auto___23349))
;


var g__21322__auto___23353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21322__auto___23353){
return (function cljs$spec$impl$gen$list(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23354 = arguments.length;
var i__21239__auto___23355 = (0);
while(true){
if((i__21239__auto___23355 < len__21238__auto___23354)){
args__21245__auto__.push((arguments[i__21239__auto___23355]));

var G__23356 = (i__21239__auto___23355 + (1));
i__21239__auto___23355 = G__23356;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23353))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23353),args);
});})(g__21322__auto___23353))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21322__auto___23353){
return (function (seq23332){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23332));
});})(g__21322__auto___23353))
;


var g__21322__auto___23357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21322__auto___23357){
return (function cljs$spec$impl$gen$map(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23358 = arguments.length;
var i__21239__auto___23359 = (0);
while(true){
if((i__21239__auto___23359 < len__21238__auto___23358)){
args__21245__auto__.push((arguments[i__21239__auto___23359]));

var G__23360 = (i__21239__auto___23359 + (1));
i__21239__auto___23359 = G__23360;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23357))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23357){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23357),args);
});})(g__21322__auto___23357))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21322__auto___23357){
return (function (seq23333){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23333));
});})(g__21322__auto___23357))
;


var g__21322__auto___23361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21322__auto___23361){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23362 = arguments.length;
var i__21239__auto___23363 = (0);
while(true){
if((i__21239__auto___23363 < len__21238__auto___23362)){
args__21245__auto__.push((arguments[i__21239__auto___23363]));

var G__23364 = (i__21239__auto___23363 + (1));
i__21239__auto___23363 = G__23364;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23361))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23361),args);
});})(g__21322__auto___23361))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21322__auto___23361){
return (function (seq23334){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23334));
});})(g__21322__auto___23361))
;


var g__21322__auto___23365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21322__auto___23365){
return (function cljs$spec$impl$gen$set(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23366 = arguments.length;
var i__21239__auto___23367 = (0);
while(true){
if((i__21239__auto___23367 < len__21238__auto___23366)){
args__21245__auto__.push((arguments[i__21239__auto___23367]));

var G__23368 = (i__21239__auto___23367 + (1));
i__21239__auto___23367 = G__23368;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23365))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23365),args);
});})(g__21322__auto___23365))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21322__auto___23365){
return (function (seq23335){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23335));
});})(g__21322__auto___23365))
;


var g__21322__auto___23369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21322__auto___23369){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23370 = arguments.length;
var i__21239__auto___23371 = (0);
while(true){
if((i__21239__auto___23371 < len__21238__auto___23370)){
args__21245__auto__.push((arguments[i__21239__auto___23371]));

var G__23372 = (i__21239__auto___23371 + (1));
i__21239__auto___23371 = G__23372;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23369))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23369),args);
});})(g__21322__auto___23369))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21322__auto___23369){
return (function (seq23336){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23336));
});})(g__21322__auto___23369))
;


var g__21322__auto___23373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21322__auto___23373){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23374 = arguments.length;
var i__21239__auto___23375 = (0);
while(true){
if((i__21239__auto___23375 < len__21238__auto___23374)){
args__21245__auto__.push((arguments[i__21239__auto___23375]));

var G__23376 = (i__21239__auto___23375 + (1));
i__21239__auto___23375 = G__23376;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23373))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23373),args);
});})(g__21322__auto___23373))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21322__auto___23373){
return (function (seq23337){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23337));
});})(g__21322__auto___23373))
;


var g__21322__auto___23377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21322__auto___23377){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23378 = arguments.length;
var i__21239__auto___23379 = (0);
while(true){
if((i__21239__auto___23379 < len__21238__auto___23378)){
args__21245__auto__.push((arguments[i__21239__auto___23379]));

var G__23380 = (i__21239__auto___23379 + (1));
i__21239__auto___23379 = G__23380;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23377))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23377),args);
});})(g__21322__auto___23377))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21322__auto___23377){
return (function (seq23338){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23338));
});})(g__21322__auto___23377))
;


var g__21322__auto___23381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21322__auto___23381){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23382 = arguments.length;
var i__21239__auto___23383 = (0);
while(true){
if((i__21239__auto___23383 < len__21238__auto___23382)){
args__21245__auto__.push((arguments[i__21239__auto___23383]));

var G__23384 = (i__21239__auto___23383 + (1));
i__21239__auto___23383 = G__23384;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23381))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23381),args);
});})(g__21322__auto___23381))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21322__auto___23381){
return (function (seq23339){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23339));
});})(g__21322__auto___23381))
;


var g__21322__auto___23385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21322__auto___23385){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23386 = arguments.length;
var i__21239__auto___23387 = (0);
while(true){
if((i__21239__auto___23387 < len__21238__auto___23386)){
args__21245__auto__.push((arguments[i__21239__auto___23387]));

var G__23388 = (i__21239__auto___23387 + (1));
i__21239__auto___23387 = G__23388;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23385))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23385),args);
});})(g__21322__auto___23385))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21322__auto___23385){
return (function (seq23340){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23340));
});})(g__21322__auto___23385))
;


var g__21322__auto___23389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21322__auto___23389){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23390 = arguments.length;
var i__21239__auto___23391 = (0);
while(true){
if((i__21239__auto___23391 < len__21238__auto___23390)){
args__21245__auto__.push((arguments[i__21239__auto___23391]));

var G__23392 = (i__21239__auto___23391 + (1));
i__21239__auto___23391 = G__23392;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23389))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23389),args);
});})(g__21322__auto___23389))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21322__auto___23389){
return (function (seq23341){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23341));
});})(g__21322__auto___23389))
;


var g__21322__auto___23393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21322__auto___23393){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23394 = arguments.length;
var i__21239__auto___23395 = (0);
while(true){
if((i__21239__auto___23395 < len__21238__auto___23394)){
args__21245__auto__.push((arguments[i__21239__auto___23395]));

var G__23396 = (i__21239__auto___23395 + (1));
i__21239__auto___23395 = G__23396;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23393))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23393),args);
});})(g__21322__auto___23393))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21322__auto___23393){
return (function (seq23342){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23342));
});})(g__21322__auto___23393))
;


var g__21322__auto___23397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21322__auto___23397){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23398 = arguments.length;
var i__21239__auto___23399 = (0);
while(true){
if((i__21239__auto___23399 < len__21238__auto___23398)){
args__21245__auto__.push((arguments[i__21239__auto___23399]));

var G__23400 = (i__21239__auto___23399 + (1));
i__21239__auto___23399 = G__23400;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23397))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23397),args);
});})(g__21322__auto___23397))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21322__auto___23397){
return (function (seq23343){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23343));
});})(g__21322__auto___23397))
;


var g__21322__auto___23401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21322__auto___23401){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23402 = arguments.length;
var i__21239__auto___23403 = (0);
while(true){
if((i__21239__auto___23403 < len__21238__auto___23402)){
args__21245__auto__.push((arguments[i__21239__auto___23403]));

var G__23404 = (i__21239__auto___23403 + (1));
i__21239__auto___23403 = G__23404;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23401))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23401),args);
});})(g__21322__auto___23401))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21322__auto___23401){
return (function (seq23344){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23344));
});})(g__21322__auto___23401))
;


var g__21322__auto___23405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21322__auto___23405){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23406 = arguments.length;
var i__21239__auto___23407 = (0);
while(true){
if((i__21239__auto___23407 < len__21238__auto___23406)){
args__21245__auto__.push((arguments[i__21239__auto___23407]));

var G__23408 = (i__21239__auto___23407 + (1));
i__21239__auto___23407 = G__23408;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23405))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23405),args);
});})(g__21322__auto___23405))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21322__auto___23405){
return (function (seq23345){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23345));
});})(g__21322__auto___23405))
;


var g__21322__auto___23409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21322__auto___23409){
return (function cljs$spec$impl$gen$return(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23410 = arguments.length;
var i__21239__auto___23411 = (0);
while(true){
if((i__21239__auto___23411 < len__21238__auto___23410)){
args__21245__auto__.push((arguments[i__21239__auto___23411]));

var G__23412 = (i__21239__auto___23411 + (1));
i__21239__auto___23411 = G__23412;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23409))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23409),args);
});})(g__21322__auto___23409))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21322__auto___23409){
return (function (seq23346){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23346));
});})(g__21322__auto___23409))
;


var g__21322__auto___23413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21322__auto___23413){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23414 = arguments.length;
var i__21239__auto___23415 = (0);
while(true){
if((i__21239__auto___23415 < len__21238__auto___23414)){
args__21245__auto__.push((arguments[i__21239__auto___23415]));

var G__23416 = (i__21239__auto___23415 + (1));
i__21239__auto___23415 = G__23416;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23413))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23413),args);
});})(g__21322__auto___23413))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21322__auto___23413){
return (function (seq23347){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23347));
});})(g__21322__auto___23413))
;


var g__21322__auto___23417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__21322__auto___23417){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23418 = arguments.length;
var i__21239__auto___23419 = (0);
while(true){
if((i__21239__auto___23419 < len__21238__auto___23418)){
args__21245__auto__.push((arguments[i__21239__auto___23419]));

var G__23420 = (i__21239__auto___23419 + (1));
i__21239__auto___23419 = G__23420;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21322__auto___23417))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21322__auto___23417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21322__auto___23417),args);
});})(g__21322__auto___23417))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__21322__auto___23417){
return (function (seq23348){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23348));
});})(g__21322__auto___23417))
;

var g__21335__auto___23442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21335__auto___23442){
return (function cljs$spec$impl$gen$any(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23443 = arguments.length;
var i__21239__auto___23444 = (0);
while(true){
if((i__21239__auto___23444 < len__21238__auto___23443)){
args__21245__auto__.push((arguments[i__21239__auto___23444]));

var G__23445 = (i__21239__auto___23444 + (1));
i__21239__auto___23444 = G__23445;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23442))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23442){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23442);
});})(g__21335__auto___23442))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21335__auto___23442){
return (function (seq23421){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23421));
});})(g__21335__auto___23442))
;


var g__21335__auto___23446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21335__auto___23446){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23447 = arguments.length;
var i__21239__auto___23448 = (0);
while(true){
if((i__21239__auto___23448 < len__21238__auto___23447)){
args__21245__auto__.push((arguments[i__21239__auto___23448]));

var G__23449 = (i__21239__auto___23448 + (1));
i__21239__auto___23448 = G__23449;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23446))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23446){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23446);
});})(g__21335__auto___23446))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21335__auto___23446){
return (function (seq23422){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23422));
});})(g__21335__auto___23446))
;


var g__21335__auto___23450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21335__auto___23450){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23451 = arguments.length;
var i__21239__auto___23452 = (0);
while(true){
if((i__21239__auto___23452 < len__21238__auto___23451)){
args__21245__auto__.push((arguments[i__21239__auto___23452]));

var G__23453 = (i__21239__auto___23452 + (1));
i__21239__auto___23452 = G__23453;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23450))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23450){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23450);
});})(g__21335__auto___23450))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21335__auto___23450){
return (function (seq23423){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23423));
});})(g__21335__auto___23450))
;


var g__21335__auto___23454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21335__auto___23454){
return (function cljs$spec$impl$gen$char(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23455 = arguments.length;
var i__21239__auto___23456 = (0);
while(true){
if((i__21239__auto___23456 < len__21238__auto___23455)){
args__21245__auto__.push((arguments[i__21239__auto___23456]));

var G__23457 = (i__21239__auto___23456 + (1));
i__21239__auto___23456 = G__23457;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23454))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23454){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23454);
});})(g__21335__auto___23454))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21335__auto___23454){
return (function (seq23424){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23424));
});})(g__21335__auto___23454))
;


var g__21335__auto___23458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21335__auto___23458){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23459 = arguments.length;
var i__21239__auto___23460 = (0);
while(true){
if((i__21239__auto___23460 < len__21238__auto___23459)){
args__21245__auto__.push((arguments[i__21239__auto___23460]));

var G__23461 = (i__21239__auto___23460 + (1));
i__21239__auto___23460 = G__23461;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23458))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23458){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23458);
});})(g__21335__auto___23458))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21335__auto___23458){
return (function (seq23425){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23425));
});})(g__21335__auto___23458))
;


var g__21335__auto___23462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21335__auto___23462){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23463 = arguments.length;
var i__21239__auto___23464 = (0);
while(true){
if((i__21239__auto___23464 < len__21238__auto___23463)){
args__21245__auto__.push((arguments[i__21239__auto___23464]));

var G__23465 = (i__21239__auto___23464 + (1));
i__21239__auto___23464 = G__23465;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23462))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23462){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23462);
});})(g__21335__auto___23462))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21335__auto___23462){
return (function (seq23426){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23426));
});})(g__21335__auto___23462))
;


var g__21335__auto___23466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21335__auto___23466){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23467 = arguments.length;
var i__21239__auto___23468 = (0);
while(true){
if((i__21239__auto___23468 < len__21238__auto___23467)){
args__21245__auto__.push((arguments[i__21239__auto___23468]));

var G__23469 = (i__21239__auto___23468 + (1));
i__21239__auto___23468 = G__23469;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23466))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23466){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23466);
});})(g__21335__auto___23466))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21335__auto___23466){
return (function (seq23427){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23427));
});})(g__21335__auto___23466))
;


var g__21335__auto___23470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21335__auto___23470){
return (function cljs$spec$impl$gen$double(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23471 = arguments.length;
var i__21239__auto___23472 = (0);
while(true){
if((i__21239__auto___23472 < len__21238__auto___23471)){
args__21245__auto__.push((arguments[i__21239__auto___23472]));

var G__23473 = (i__21239__auto___23472 + (1));
i__21239__auto___23472 = G__23473;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23470))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23470){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23470);
});})(g__21335__auto___23470))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21335__auto___23470){
return (function (seq23428){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23428));
});})(g__21335__auto___23470))
;


var g__21335__auto___23474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21335__auto___23474){
return (function cljs$spec$impl$gen$int(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23475 = arguments.length;
var i__21239__auto___23476 = (0);
while(true){
if((i__21239__auto___23476 < len__21238__auto___23475)){
args__21245__auto__.push((arguments[i__21239__auto___23476]));

var G__23477 = (i__21239__auto___23476 + (1));
i__21239__auto___23476 = G__23477;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23474))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23474){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23474);
});})(g__21335__auto___23474))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21335__auto___23474){
return (function (seq23429){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23429));
});})(g__21335__auto___23474))
;


var g__21335__auto___23478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21335__auto___23478){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23479 = arguments.length;
var i__21239__auto___23480 = (0);
while(true){
if((i__21239__auto___23480 < len__21238__auto___23479)){
args__21245__auto__.push((arguments[i__21239__auto___23480]));

var G__23481 = (i__21239__auto___23480 + (1));
i__21239__auto___23480 = G__23481;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23478))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23478){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23478);
});})(g__21335__auto___23478))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21335__auto___23478){
return (function (seq23430){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23430));
});})(g__21335__auto___23478))
;


var g__21335__auto___23482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21335__auto___23482){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23483 = arguments.length;
var i__21239__auto___23484 = (0);
while(true){
if((i__21239__auto___23484 < len__21238__auto___23483)){
args__21245__auto__.push((arguments[i__21239__auto___23484]));

var G__23485 = (i__21239__auto___23484 + (1));
i__21239__auto___23484 = G__23485;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23482))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23482){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23482);
});})(g__21335__auto___23482))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21335__auto___23482){
return (function (seq23431){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23431));
});})(g__21335__auto___23482))
;


var g__21335__auto___23486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21335__auto___23486){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23487 = arguments.length;
var i__21239__auto___23488 = (0);
while(true){
if((i__21239__auto___23488 < len__21238__auto___23487)){
args__21245__auto__.push((arguments[i__21239__auto___23488]));

var G__23489 = (i__21239__auto___23488 + (1));
i__21239__auto___23488 = G__23489;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23486))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23486){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23486);
});})(g__21335__auto___23486))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21335__auto___23486){
return (function (seq23432){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23432));
});})(g__21335__auto___23486))
;


var g__21335__auto___23490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21335__auto___23490){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23491 = arguments.length;
var i__21239__auto___23492 = (0);
while(true){
if((i__21239__auto___23492 < len__21238__auto___23491)){
args__21245__auto__.push((arguments[i__21239__auto___23492]));

var G__23493 = (i__21239__auto___23492 + (1));
i__21239__auto___23492 = G__23493;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23490))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23490){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23490);
});})(g__21335__auto___23490))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21335__auto___23490){
return (function (seq23433){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23433));
});})(g__21335__auto___23490))
;


var g__21335__auto___23494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21335__auto___23494){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23495 = arguments.length;
var i__21239__auto___23496 = (0);
while(true){
if((i__21239__auto___23496 < len__21238__auto___23495)){
args__21245__auto__.push((arguments[i__21239__auto___23496]));

var G__23497 = (i__21239__auto___23496 + (1));
i__21239__auto___23496 = G__23497;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23494))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23494){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23494);
});})(g__21335__auto___23494))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21335__auto___23494){
return (function (seq23434){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23434));
});})(g__21335__auto___23494))
;


var g__21335__auto___23498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21335__auto___23498){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23499 = arguments.length;
var i__21239__auto___23500 = (0);
while(true){
if((i__21239__auto___23500 < len__21238__auto___23499)){
args__21245__auto__.push((arguments[i__21239__auto___23500]));

var G__23501 = (i__21239__auto___23500 + (1));
i__21239__auto___23500 = G__23501;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23498))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23498){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23498);
});})(g__21335__auto___23498))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21335__auto___23498){
return (function (seq23435){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23435));
});})(g__21335__auto___23498))
;


var g__21335__auto___23502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21335__auto___23502){
return (function cljs$spec$impl$gen$string(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23503 = arguments.length;
var i__21239__auto___23504 = (0);
while(true){
if((i__21239__auto___23504 < len__21238__auto___23503)){
args__21245__auto__.push((arguments[i__21239__auto___23504]));

var G__23505 = (i__21239__auto___23504 + (1));
i__21239__auto___23504 = G__23505;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23502))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23502){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23502);
});})(g__21335__auto___23502))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21335__auto___23502){
return (function (seq23436){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23436));
});})(g__21335__auto___23502))
;


var g__21335__auto___23506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21335__auto___23506){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23507 = arguments.length;
var i__21239__auto___23508 = (0);
while(true){
if((i__21239__auto___23508 < len__21238__auto___23507)){
args__21245__auto__.push((arguments[i__21239__auto___23508]));

var G__23509 = (i__21239__auto___23508 + (1));
i__21239__auto___23508 = G__23509;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23506))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23506){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23506);
});})(g__21335__auto___23506))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21335__auto___23506){
return (function (seq23437){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23437));
});})(g__21335__auto___23506))
;


var g__21335__auto___23510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21335__auto___23510){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23511 = arguments.length;
var i__21239__auto___23512 = (0);
while(true){
if((i__21239__auto___23512 < len__21238__auto___23511)){
args__21245__auto__.push((arguments[i__21239__auto___23512]));

var G__23513 = (i__21239__auto___23512 + (1));
i__21239__auto___23512 = G__23513;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23510))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23510){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23510);
});})(g__21335__auto___23510))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21335__auto___23510){
return (function (seq23438){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23438));
});})(g__21335__auto___23510))
;


var g__21335__auto___23514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21335__auto___23514){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23515 = arguments.length;
var i__21239__auto___23516 = (0);
while(true){
if((i__21239__auto___23516 < len__21238__auto___23515)){
args__21245__auto__.push((arguments[i__21239__auto___23516]));

var G__23517 = (i__21239__auto___23516 + (1));
i__21239__auto___23516 = G__23517;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23514))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23514){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23514);
});})(g__21335__auto___23514))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21335__auto___23514){
return (function (seq23439){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23439));
});})(g__21335__auto___23514))
;


var g__21335__auto___23518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21335__auto___23518){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23519 = arguments.length;
var i__21239__auto___23520 = (0);
while(true){
if((i__21239__auto___23520 < len__21238__auto___23519)){
args__21245__auto__.push((arguments[i__21239__auto___23520]));

var G__23521 = (i__21239__auto___23520 + (1));
i__21239__auto___23520 = G__23521;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23518))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23518){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23518);
});})(g__21335__auto___23518))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21335__auto___23518){
return (function (seq23440){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23440));
});})(g__21335__auto___23518))
;


var g__21335__auto___23522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21335__auto___23522){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23523 = arguments.length;
var i__21239__auto___23524 = (0);
while(true){
if((i__21239__auto___23524 < len__21238__auto___23523)){
args__21245__auto__.push((arguments[i__21239__auto___23524]));

var G__23525 = (i__21239__auto___23524 + (1));
i__21239__auto___23524 = G__23525;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});})(g__21335__auto___23522))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21335__auto___23522){
return (function (args){
return cljs.core.deref.call(null,g__21335__auto___23522);
});})(g__21335__auto___23522))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21335__auto___23522){
return (function (seq23441){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23441));
});})(g__21335__auto___23522))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21245__auto__ = [];
var len__21238__auto___23528 = arguments.length;
var i__21239__auto___23529 = (0);
while(true){
if((i__21239__auto___23529 < len__21238__auto___23528)){
args__21245__auto__.push((arguments[i__21239__auto___23529]));

var G__23530 = (i__21239__auto___23529 + (1));
i__21239__auto___23529 = G__23530;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((0) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21246__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__23526_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23526_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq23527){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23527));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__23531_SHARP_){
return (new Date(p1__23531_SHARP_));
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

//# sourceMappingURL=gen.js.map