// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9266__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9267__i = 0, G__9267__a = new Array(arguments.length -  0);
while (G__9267__i < G__9267__a.length) {G__9267__a[G__9267__i] = arguments[G__9267__i + 0]; ++G__9267__i;}
  args = new cljs.core.IndexedSeq(G__9267__a,0);
} 
return G__9266__delegate.call(this,args);};
G__9266.cljs$lang$maxFixedArity = 0;
G__9266.cljs$lang$applyTo = (function (arglist__9268){
var args = cljs.core.seq(arglist__9268);
return G__9266__delegate(args);
});
G__9266.cljs$core$IFn$_invoke$arity$variadic = G__9266__delegate;
return G__9266;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9269__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9270__i = 0, G__9270__a = new Array(arguments.length -  0);
while (G__9270__i < G__9270__a.length) {G__9270__a[G__9270__i] = arguments[G__9270__i + 0]; ++G__9270__i;}
  args = new cljs.core.IndexedSeq(G__9270__a,0);
} 
return G__9269__delegate.call(this,args);};
G__9269.cljs$lang$maxFixedArity = 0;
G__9269.cljs$lang$applyTo = (function (arglist__9271){
var args = cljs.core.seq(arglist__9271);
return G__9269__delegate(args);
});
G__9269.cljs$core$IFn$_invoke$arity$variadic = G__9269__delegate;
return G__9269;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map