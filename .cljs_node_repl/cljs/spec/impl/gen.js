// Compiled by ClojureScript 1.9.293 {:target :nodejs}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__21030__auto__ = [];
var len__21023__auto___23106 = arguments.length;
var i__21024__auto___23107 = (0);
while(true){
if((i__21024__auto___23107 < len__21023__auto___23106)){
args__21030__auto__.push((arguments[i__21024__auto___23107]));

var G__23108 = (i__21024__auto___23107 + (1));
i__21024__auto___23107 = G__23108;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq23105){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23105));
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
var args__21030__auto__ = [];
var len__21023__auto___23110 = arguments.length;
var i__21024__auto___23111 = (0);
while(true){
if((i__21024__auto___23111 < len__21023__auto___23110)){
args__21030__auto__.push((arguments[i__21024__auto___23111]));

var G__23112 = (i__21024__auto___23111 + (1));
i__21024__auto___23111 = G__23112;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq23109){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23109));
});

var g_QMARK__23113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_23114 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23113){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23113))
,null));
var mkg_23115 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__23113,g_23114){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__23113,g_23114))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__23113,g_23114,mkg_23115){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__23113).call(null,x);
});})(g_QMARK__23113,g_23114,mkg_23115))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__23113,g_23114,mkg_23115){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_23115).call(null,gfn);
});})(g_QMARK__23113,g_23114,mkg_23115))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__23113,g_23114,mkg_23115){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_23114).call(null,generator);
});})(g_QMARK__23113,g_23114,mkg_23115))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__21107__auto___23134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21107__auto___23134){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23135 = arguments.length;
var i__21024__auto___23136 = (0);
while(true){
if((i__21024__auto___23136 < len__21023__auto___23135)){
args__21030__auto__.push((arguments[i__21024__auto___23136]));

var G__23137 = (i__21024__auto___23136 + (1));
i__21024__auto___23136 = G__23137;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23134))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23134){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23134),args);
});})(g__21107__auto___23134))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21107__auto___23134){
return (function (seq23116){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23116));
});})(g__21107__auto___23134))
;


var g__21107__auto___23138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21107__auto___23138){
return (function cljs$spec$impl$gen$list(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23139 = arguments.length;
var i__21024__auto___23140 = (0);
while(true){
if((i__21024__auto___23140 < len__21023__auto___23139)){
args__21030__auto__.push((arguments[i__21024__auto___23140]));

var G__23141 = (i__21024__auto___23140 + (1));
i__21024__auto___23140 = G__23141;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23138))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23138){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23138),args);
});})(g__21107__auto___23138))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21107__auto___23138){
return (function (seq23117){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23117));
});})(g__21107__auto___23138))
;


var g__21107__auto___23142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21107__auto___23142){
return (function cljs$spec$impl$gen$map(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23143 = arguments.length;
var i__21024__auto___23144 = (0);
while(true){
if((i__21024__auto___23144 < len__21023__auto___23143)){
args__21030__auto__.push((arguments[i__21024__auto___23144]));

var G__23145 = (i__21024__auto___23144 + (1));
i__21024__auto___23144 = G__23145;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23142))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23142){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23142),args);
});})(g__21107__auto___23142))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21107__auto___23142){
return (function (seq23118){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23118));
});})(g__21107__auto___23142))
;


var g__21107__auto___23146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21107__auto___23146){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23147 = arguments.length;
var i__21024__auto___23148 = (0);
while(true){
if((i__21024__auto___23148 < len__21023__auto___23147)){
args__21030__auto__.push((arguments[i__21024__auto___23148]));

var G__23149 = (i__21024__auto___23148 + (1));
i__21024__auto___23148 = G__23149;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23146))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23146){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23146),args);
});})(g__21107__auto___23146))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21107__auto___23146){
return (function (seq23119){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23119));
});})(g__21107__auto___23146))
;


var g__21107__auto___23150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21107__auto___23150){
return (function cljs$spec$impl$gen$set(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23151 = arguments.length;
var i__21024__auto___23152 = (0);
while(true){
if((i__21024__auto___23152 < len__21023__auto___23151)){
args__21030__auto__.push((arguments[i__21024__auto___23152]));

var G__23153 = (i__21024__auto___23152 + (1));
i__21024__auto___23152 = G__23153;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23150))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23150){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23150),args);
});})(g__21107__auto___23150))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21107__auto___23150){
return (function (seq23120){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23120));
});})(g__21107__auto___23150))
;


var g__21107__auto___23154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21107__auto___23154){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23155 = arguments.length;
var i__21024__auto___23156 = (0);
while(true){
if((i__21024__auto___23156 < len__21023__auto___23155)){
args__21030__auto__.push((arguments[i__21024__auto___23156]));

var G__23157 = (i__21024__auto___23156 + (1));
i__21024__auto___23156 = G__23157;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23154))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23154){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23154),args);
});})(g__21107__auto___23154))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21107__auto___23154){
return (function (seq23121){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23121));
});})(g__21107__auto___23154))
;


var g__21107__auto___23158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21107__auto___23158){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23159 = arguments.length;
var i__21024__auto___23160 = (0);
while(true){
if((i__21024__auto___23160 < len__21023__auto___23159)){
args__21030__auto__.push((arguments[i__21024__auto___23160]));

var G__23161 = (i__21024__auto___23160 + (1));
i__21024__auto___23160 = G__23161;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23158))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23158){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23158),args);
});})(g__21107__auto___23158))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21107__auto___23158){
return (function (seq23122){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23122));
});})(g__21107__auto___23158))
;


var g__21107__auto___23162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21107__auto___23162){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23163 = arguments.length;
var i__21024__auto___23164 = (0);
while(true){
if((i__21024__auto___23164 < len__21023__auto___23163)){
args__21030__auto__.push((arguments[i__21024__auto___23164]));

var G__23165 = (i__21024__auto___23164 + (1));
i__21024__auto___23164 = G__23165;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23162))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23162){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23162),args);
});})(g__21107__auto___23162))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21107__auto___23162){
return (function (seq23123){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23123));
});})(g__21107__auto___23162))
;


var g__21107__auto___23166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21107__auto___23166){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23167 = arguments.length;
var i__21024__auto___23168 = (0);
while(true){
if((i__21024__auto___23168 < len__21023__auto___23167)){
args__21030__auto__.push((arguments[i__21024__auto___23168]));

var G__23169 = (i__21024__auto___23168 + (1));
i__21024__auto___23168 = G__23169;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23166))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23166){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23166),args);
});})(g__21107__auto___23166))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21107__auto___23166){
return (function (seq23124){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23124));
});})(g__21107__auto___23166))
;


var g__21107__auto___23170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21107__auto___23170){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23171 = arguments.length;
var i__21024__auto___23172 = (0);
while(true){
if((i__21024__auto___23172 < len__21023__auto___23171)){
args__21030__auto__.push((arguments[i__21024__auto___23172]));

var G__23173 = (i__21024__auto___23172 + (1));
i__21024__auto___23172 = G__23173;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23170))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23170){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23170),args);
});})(g__21107__auto___23170))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21107__auto___23170){
return (function (seq23125){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23125));
});})(g__21107__auto___23170))
;


var g__21107__auto___23174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21107__auto___23174){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23175 = arguments.length;
var i__21024__auto___23176 = (0);
while(true){
if((i__21024__auto___23176 < len__21023__auto___23175)){
args__21030__auto__.push((arguments[i__21024__auto___23176]));

var G__23177 = (i__21024__auto___23176 + (1));
i__21024__auto___23176 = G__23177;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23174))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23174){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23174),args);
});})(g__21107__auto___23174))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21107__auto___23174){
return (function (seq23126){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23126));
});})(g__21107__auto___23174))
;


var g__21107__auto___23178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21107__auto___23178){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23179 = arguments.length;
var i__21024__auto___23180 = (0);
while(true){
if((i__21024__auto___23180 < len__21023__auto___23179)){
args__21030__auto__.push((arguments[i__21024__auto___23180]));

var G__23181 = (i__21024__auto___23180 + (1));
i__21024__auto___23180 = G__23181;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23178))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23178){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23178),args);
});})(g__21107__auto___23178))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21107__auto___23178){
return (function (seq23127){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23127));
});})(g__21107__auto___23178))
;


var g__21107__auto___23182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21107__auto___23182){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23183 = arguments.length;
var i__21024__auto___23184 = (0);
while(true){
if((i__21024__auto___23184 < len__21023__auto___23183)){
args__21030__auto__.push((arguments[i__21024__auto___23184]));

var G__23185 = (i__21024__auto___23184 + (1));
i__21024__auto___23184 = G__23185;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23182))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23182){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23182),args);
});})(g__21107__auto___23182))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21107__auto___23182){
return (function (seq23128){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23128));
});})(g__21107__auto___23182))
;


var g__21107__auto___23186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21107__auto___23186){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23187 = arguments.length;
var i__21024__auto___23188 = (0);
while(true){
if((i__21024__auto___23188 < len__21023__auto___23187)){
args__21030__auto__.push((arguments[i__21024__auto___23188]));

var G__23189 = (i__21024__auto___23188 + (1));
i__21024__auto___23188 = G__23189;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23186))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23186){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23186),args);
});})(g__21107__auto___23186))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21107__auto___23186){
return (function (seq23129){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23129));
});})(g__21107__auto___23186))
;


var g__21107__auto___23190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21107__auto___23190){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23191 = arguments.length;
var i__21024__auto___23192 = (0);
while(true){
if((i__21024__auto___23192 < len__21023__auto___23191)){
args__21030__auto__.push((arguments[i__21024__auto___23192]));

var G__23193 = (i__21024__auto___23192 + (1));
i__21024__auto___23192 = G__23193;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23190))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23190){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23190),args);
});})(g__21107__auto___23190))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21107__auto___23190){
return (function (seq23130){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23130));
});})(g__21107__auto___23190))
;


var g__21107__auto___23194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21107__auto___23194){
return (function cljs$spec$impl$gen$return(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23195 = arguments.length;
var i__21024__auto___23196 = (0);
while(true){
if((i__21024__auto___23196 < len__21023__auto___23195)){
args__21030__auto__.push((arguments[i__21024__auto___23196]));

var G__23197 = (i__21024__auto___23196 + (1));
i__21024__auto___23196 = G__23197;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23194))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23194),args);
});})(g__21107__auto___23194))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21107__auto___23194){
return (function (seq23131){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23131));
});})(g__21107__auto___23194))
;


var g__21107__auto___23198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21107__auto___23198){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23199 = arguments.length;
var i__21024__auto___23200 = (0);
while(true){
if((i__21024__auto___23200 < len__21023__auto___23199)){
args__21030__auto__.push((arguments[i__21024__auto___23200]));

var G__23201 = (i__21024__auto___23200 + (1));
i__21024__auto___23200 = G__23201;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23198))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23198),args);
});})(g__21107__auto___23198))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21107__auto___23198){
return (function (seq23132){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23132));
});})(g__21107__auto___23198))
;


var g__21107__auto___23202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__21107__auto___23202){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23203 = arguments.length;
var i__21024__auto___23204 = (0);
while(true){
if((i__21024__auto___23204 < len__21023__auto___23203)){
args__21030__auto__.push((arguments[i__21024__auto___23204]));

var G__23205 = (i__21024__auto___23204 + (1));
i__21024__auto___23204 = G__23205;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21107__auto___23202))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21107__auto___23202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__21107__auto___23202),args);
});})(g__21107__auto___23202))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__21107__auto___23202){
return (function (seq23133){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23133));
});})(g__21107__auto___23202))
;

var g__21120__auto___23227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21120__auto___23227){
return (function cljs$spec$impl$gen$any(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23228 = arguments.length;
var i__21024__auto___23229 = (0);
while(true){
if((i__21024__auto___23229 < len__21023__auto___23228)){
args__21030__auto__.push((arguments[i__21024__auto___23229]));

var G__23230 = (i__21024__auto___23229 + (1));
i__21024__auto___23229 = G__23230;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23227))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23227){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23227);
});})(g__21120__auto___23227))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21120__auto___23227){
return (function (seq23206){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23206));
});})(g__21120__auto___23227))
;


var g__21120__auto___23231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21120__auto___23231){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23232 = arguments.length;
var i__21024__auto___23233 = (0);
while(true){
if((i__21024__auto___23233 < len__21023__auto___23232)){
args__21030__auto__.push((arguments[i__21024__auto___23233]));

var G__23234 = (i__21024__auto___23233 + (1));
i__21024__auto___23233 = G__23234;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23231))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23231){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23231);
});})(g__21120__auto___23231))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21120__auto___23231){
return (function (seq23207){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23207));
});})(g__21120__auto___23231))
;


var g__21120__auto___23235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21120__auto___23235){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23236 = arguments.length;
var i__21024__auto___23237 = (0);
while(true){
if((i__21024__auto___23237 < len__21023__auto___23236)){
args__21030__auto__.push((arguments[i__21024__auto___23237]));

var G__23238 = (i__21024__auto___23237 + (1));
i__21024__auto___23237 = G__23238;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23235))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23235){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23235);
});})(g__21120__auto___23235))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21120__auto___23235){
return (function (seq23208){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23208));
});})(g__21120__auto___23235))
;


var g__21120__auto___23239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21120__auto___23239){
return (function cljs$spec$impl$gen$char(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23240 = arguments.length;
var i__21024__auto___23241 = (0);
while(true){
if((i__21024__auto___23241 < len__21023__auto___23240)){
args__21030__auto__.push((arguments[i__21024__auto___23241]));

var G__23242 = (i__21024__auto___23241 + (1));
i__21024__auto___23241 = G__23242;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23239))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23239){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23239);
});})(g__21120__auto___23239))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21120__auto___23239){
return (function (seq23209){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23209));
});})(g__21120__auto___23239))
;


var g__21120__auto___23243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21120__auto___23243){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23244 = arguments.length;
var i__21024__auto___23245 = (0);
while(true){
if((i__21024__auto___23245 < len__21023__auto___23244)){
args__21030__auto__.push((arguments[i__21024__auto___23245]));

var G__23246 = (i__21024__auto___23245 + (1));
i__21024__auto___23245 = G__23246;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23243))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23243){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23243);
});})(g__21120__auto___23243))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21120__auto___23243){
return (function (seq23210){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23210));
});})(g__21120__auto___23243))
;


var g__21120__auto___23247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21120__auto___23247){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23248 = arguments.length;
var i__21024__auto___23249 = (0);
while(true){
if((i__21024__auto___23249 < len__21023__auto___23248)){
args__21030__auto__.push((arguments[i__21024__auto___23249]));

var G__23250 = (i__21024__auto___23249 + (1));
i__21024__auto___23249 = G__23250;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23247))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23247){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23247);
});})(g__21120__auto___23247))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21120__auto___23247){
return (function (seq23211){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23211));
});})(g__21120__auto___23247))
;


var g__21120__auto___23251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21120__auto___23251){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23252 = arguments.length;
var i__21024__auto___23253 = (0);
while(true){
if((i__21024__auto___23253 < len__21023__auto___23252)){
args__21030__auto__.push((arguments[i__21024__auto___23253]));

var G__23254 = (i__21024__auto___23253 + (1));
i__21024__auto___23253 = G__23254;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23251))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23251){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23251);
});})(g__21120__auto___23251))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21120__auto___23251){
return (function (seq23212){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23212));
});})(g__21120__auto___23251))
;


var g__21120__auto___23255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21120__auto___23255){
return (function cljs$spec$impl$gen$double(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23256 = arguments.length;
var i__21024__auto___23257 = (0);
while(true){
if((i__21024__auto___23257 < len__21023__auto___23256)){
args__21030__auto__.push((arguments[i__21024__auto___23257]));

var G__23258 = (i__21024__auto___23257 + (1));
i__21024__auto___23257 = G__23258;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23255))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23255){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23255);
});})(g__21120__auto___23255))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21120__auto___23255){
return (function (seq23213){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23213));
});})(g__21120__auto___23255))
;


var g__21120__auto___23259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21120__auto___23259){
return (function cljs$spec$impl$gen$int(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23260 = arguments.length;
var i__21024__auto___23261 = (0);
while(true){
if((i__21024__auto___23261 < len__21023__auto___23260)){
args__21030__auto__.push((arguments[i__21024__auto___23261]));

var G__23262 = (i__21024__auto___23261 + (1));
i__21024__auto___23261 = G__23262;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23259))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23259){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23259);
});})(g__21120__auto___23259))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21120__auto___23259){
return (function (seq23214){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23214));
});})(g__21120__auto___23259))
;


var g__21120__auto___23263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21120__auto___23263){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23264 = arguments.length;
var i__21024__auto___23265 = (0);
while(true){
if((i__21024__auto___23265 < len__21023__auto___23264)){
args__21030__auto__.push((arguments[i__21024__auto___23265]));

var G__23266 = (i__21024__auto___23265 + (1));
i__21024__auto___23265 = G__23266;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23263))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23263){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23263);
});})(g__21120__auto___23263))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21120__auto___23263){
return (function (seq23215){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23215));
});})(g__21120__auto___23263))
;


var g__21120__auto___23267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21120__auto___23267){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23268 = arguments.length;
var i__21024__auto___23269 = (0);
while(true){
if((i__21024__auto___23269 < len__21023__auto___23268)){
args__21030__auto__.push((arguments[i__21024__auto___23269]));

var G__23270 = (i__21024__auto___23269 + (1));
i__21024__auto___23269 = G__23270;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23267))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23267){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23267);
});})(g__21120__auto___23267))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21120__auto___23267){
return (function (seq23216){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23216));
});})(g__21120__auto___23267))
;


var g__21120__auto___23271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21120__auto___23271){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23272 = arguments.length;
var i__21024__auto___23273 = (0);
while(true){
if((i__21024__auto___23273 < len__21023__auto___23272)){
args__21030__auto__.push((arguments[i__21024__auto___23273]));

var G__23274 = (i__21024__auto___23273 + (1));
i__21024__auto___23273 = G__23274;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23271))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23271){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23271);
});})(g__21120__auto___23271))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21120__auto___23271){
return (function (seq23217){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23217));
});})(g__21120__auto___23271))
;


var g__21120__auto___23275 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21120__auto___23275){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23276 = arguments.length;
var i__21024__auto___23277 = (0);
while(true){
if((i__21024__auto___23277 < len__21023__auto___23276)){
args__21030__auto__.push((arguments[i__21024__auto___23277]));

var G__23278 = (i__21024__auto___23277 + (1));
i__21024__auto___23277 = G__23278;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23275))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23275){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23275);
});})(g__21120__auto___23275))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21120__auto___23275){
return (function (seq23218){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23218));
});})(g__21120__auto___23275))
;


var g__21120__auto___23279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21120__auto___23279){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23280 = arguments.length;
var i__21024__auto___23281 = (0);
while(true){
if((i__21024__auto___23281 < len__21023__auto___23280)){
args__21030__auto__.push((arguments[i__21024__auto___23281]));

var G__23282 = (i__21024__auto___23281 + (1));
i__21024__auto___23281 = G__23282;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23279))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23279){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23279);
});})(g__21120__auto___23279))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21120__auto___23279){
return (function (seq23219){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23219));
});})(g__21120__auto___23279))
;


var g__21120__auto___23283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21120__auto___23283){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23284 = arguments.length;
var i__21024__auto___23285 = (0);
while(true){
if((i__21024__auto___23285 < len__21023__auto___23284)){
args__21030__auto__.push((arguments[i__21024__auto___23285]));

var G__23286 = (i__21024__auto___23285 + (1));
i__21024__auto___23285 = G__23286;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23283))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23283){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23283);
});})(g__21120__auto___23283))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21120__auto___23283){
return (function (seq23220){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23220));
});})(g__21120__auto___23283))
;


var g__21120__auto___23287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21120__auto___23287){
return (function cljs$spec$impl$gen$string(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23288 = arguments.length;
var i__21024__auto___23289 = (0);
while(true){
if((i__21024__auto___23289 < len__21023__auto___23288)){
args__21030__auto__.push((arguments[i__21024__auto___23289]));

var G__23290 = (i__21024__auto___23289 + (1));
i__21024__auto___23289 = G__23290;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23287))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23287){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23287);
});})(g__21120__auto___23287))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21120__auto___23287){
return (function (seq23221){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23221));
});})(g__21120__auto___23287))
;


var g__21120__auto___23291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21120__auto___23291){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23292 = arguments.length;
var i__21024__auto___23293 = (0);
while(true){
if((i__21024__auto___23293 < len__21023__auto___23292)){
args__21030__auto__.push((arguments[i__21024__auto___23293]));

var G__23294 = (i__21024__auto___23293 + (1));
i__21024__auto___23293 = G__23294;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23291))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23291){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23291);
});})(g__21120__auto___23291))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21120__auto___23291){
return (function (seq23222){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23222));
});})(g__21120__auto___23291))
;


var g__21120__auto___23295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21120__auto___23295){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23296 = arguments.length;
var i__21024__auto___23297 = (0);
while(true){
if((i__21024__auto___23297 < len__21023__auto___23296)){
args__21030__auto__.push((arguments[i__21024__auto___23297]));

var G__23298 = (i__21024__auto___23297 + (1));
i__21024__auto___23297 = G__23298;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23295))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23295){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23295);
});})(g__21120__auto___23295))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21120__auto___23295){
return (function (seq23223){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23223));
});})(g__21120__auto___23295))
;


var g__21120__auto___23299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21120__auto___23299){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23300 = arguments.length;
var i__21024__auto___23301 = (0);
while(true){
if((i__21024__auto___23301 < len__21023__auto___23300)){
args__21030__auto__.push((arguments[i__21024__auto___23301]));

var G__23302 = (i__21024__auto___23301 + (1));
i__21024__auto___23301 = G__23302;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23299))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23299){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23299);
});})(g__21120__auto___23299))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21120__auto___23299){
return (function (seq23224){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23224));
});})(g__21120__auto___23299))
;


var g__21120__auto___23303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21120__auto___23303){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23304 = arguments.length;
var i__21024__auto___23305 = (0);
while(true){
if((i__21024__auto___23305 < len__21023__auto___23304)){
args__21030__auto__.push((arguments[i__21024__auto___23305]));

var G__23306 = (i__21024__auto___23305 + (1));
i__21024__auto___23305 = G__23306;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23303))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23303){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23303);
});})(g__21120__auto___23303))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21120__auto___23303){
return (function (seq23225){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23225));
});})(g__21120__auto___23303))
;


var g__21120__auto___23307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21120__auto___23307){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23308 = arguments.length;
var i__21024__auto___23309 = (0);
while(true){
if((i__21024__auto___23309 < len__21023__auto___23308)){
args__21030__auto__.push((arguments[i__21024__auto___23309]));

var G__23310 = (i__21024__auto___23309 + (1));
i__21024__auto___23309 = G__23310;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});})(g__21120__auto___23307))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21120__auto___23307){
return (function (args){
return cljs.core.deref.call(null,g__21120__auto___23307);
});})(g__21120__auto___23307))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21120__auto___23307){
return (function (seq23226){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23226));
});})(g__21120__auto___23307))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21030__auto__ = [];
var len__21023__auto___23313 = arguments.length;
var i__21024__auto___23314 = (0);
while(true){
if((i__21024__auto___23314 < len__21023__auto___23313)){
args__21030__auto__.push((arguments[i__21024__auto___23314]));

var G__23315 = (i__21024__auto___23314 + (1));
i__21024__auto___23314 = G__23315;
continue;
} else {
}
break;
}

var argseq__21031__auto__ = ((((0) < args__21030__auto__.length))?(new cljs.core.IndexedSeq(args__21030__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21031__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__23311_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23311_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq23312){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23312));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__23316_SHARP_){
return (new Date(p1__23316_SHARP_));
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