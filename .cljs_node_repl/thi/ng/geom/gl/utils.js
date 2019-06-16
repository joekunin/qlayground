// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.gl.utils');
goog.require('cljs.core');
goog.require('thi.ng.typedarrays.core');
goog.require('thi.ng.xerror.core');
thi.ng.geom.gl.utils.get_script_text = (function thi$ng$geom$gl$utils$get_script_text(id){
var temp__5718__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5718__auto__)){
var e = temp__5718__auto__;
return e.text;
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,[cljs.core.str("Unknown DOM element: "),cljs.core.str(id)].join(''));
}
});
/**
 * A combination of map & doseq specialized for maps. Takes a function `f` and
 *  a map, calls `f` with each key & value, discards results.
 */
thi.ng.geom.gl.utils.loop_kv = (function thi$ng$geom$gl$utils$loop_kv(f,xs){
var xs__$1 = xs;
while(true){
if(cljs.core.truth_(xs__$1)){
var x = cljs.core.first.call(null,xs__$1);
f.call(null,cljs.core.first.call(null,x),cljs.core.nth.call(null,x,(1)));

var G__31114 = cljs.core.next.call(null,xs__$1);
xs__$1 = G__31114;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=utils.js.map