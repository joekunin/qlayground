// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.glsl.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.stuartsierra.dependency');
thi.ng.glsl.core.minify_floats = (function thi$ng$glsl$core$minify_floats(src){
return clojure.string.replace.call(null,src,/(\d+)\.(\d+)/,(function (p__31203){
var vec__31204 = p__31203;
var o = cljs.core.nth.call(null,vec__31204,(0),null);
var d = cljs.core.nth.call(null,vec__31204,(1),null);
var f = cljs.core.nth.call(null,vec__31204,(2),null);
if(cljs.core._EQ_.call(null,"0",d)){
return [cljs.core.str("."),cljs.core.str(f)].join('');
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["0",null], null), null),f)){
return [cljs.core.str(d),cljs.core.str(".")].join('');
} else {
return o;

}
}
}));
});
thi.ng.glsl.core.minify_line = (function thi$ng$glsl$core$minify_line(src){
var src__$1 = clojure.string.replace.call(null,clojure.string.replace.call(null,thi.ng.glsl.core.minify_floats.call(null,src),/\s{2,}|\t/,""),/\s*(\{|\}|\=|\*|\,|\+|\/|\>|\<|\&|\||\[|\]|\(|\)|\-|\!|\;)\s*/,"$1");
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,src__$1))){
return [cljs.core.str("\n"),cljs.core.str(src__$1),cljs.core.str("\n")].join('');
} else {
return src__$1;
}
});
thi.ng.glsl.core.clean_line_breaks = (function thi$ng$glsl$core$clean_line_breaks(src){
return clojure.string.replace.call(null,src,/\n{2,}/,"\n");
});
thi.ng.glsl.core.minify = (function thi$ng$glsl$core$minify(src){
var src__$1 = clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,src,/\/\/.*/,""),/\/\*[\s\S]*?\*\//,""),/^\n+/,"");
return thi.ng.glsl.core.clean_line_breaks.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,thi.ng.glsl.core.minify_line,clojure.string.split.call(null,src__$1,/\n/))));
});
thi.ng.glsl.core.re_meta = /((((highp|mediump|lowp)\s+)?(void|bool|float|int|(b|i)?vec\d|mat\d))\s+([\w_]+)\s*\(([A-Za-z0-9_, ]*)\)\s*\{)/;
/**
 * Attempts to extract function name, return type and args from given
 *   GLSL source string. If successful, returns map w/ these
 *   keys: :glsl-name :glsl-return :glsl-args
 */
thi.ng.glsl.core.extract_glsl_meta = (function thi$ng$glsl$core$extract_glsl_meta(src){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.re_seq.call(null,thi.ng.glsl.core.re_meta,src));
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var return$ = cljs.core.nth.call(null,m,(2));
var name = cljs.core.nth.call(null,m,(7));
var args = cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.seq,clojure.string.split.call(null,cljs.core.nth.call(null,m,(8)),/,\s*/)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),return$,new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),name,new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),args], null);
} else {
return null;
}
});
thi.ng.glsl.core.build_graph = (function thi$ng$glsl$core$build_graph(var_args){
var args31207 = [];
var len__21238__auto___31210 = arguments.length;
var i__21239__auto___31211 = (0);
while(true){
if((i__21239__auto___31211 < len__21238__auto___31210)){
args31207.push((arguments[i__21239__auto___31211]));

var G__31212 = (i__21239__auto___31211 + (1));
i__21239__auto___31211 = G__31212;
continue;
} else {
}
break;
}

var G__31209 = args31207.length;
switch (G__31209) {
case 1:
return thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31207.length)].join('')));

}
});

thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return thi.ng.glsl.core.build_graph.call(null,com.stuartsierra.dependency.graph.call(null),spec);
});

thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$2 = (function (g,curr){
return cljs.core.reduce.call(null,(function (g__$1,d){
return thi.ng.glsl.core.build_graph.call(null,com.stuartsierra.dependency.depend.call(null,g__$1,curr,d),d);
}),g,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(curr));
});

thi.ng.glsl.core.build_graph.cljs$lang$maxFixedArity = 2;

thi.ng.glsl.core.assemble = (function thi$ng$glsl$core$assemble(spec){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(spec))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),com.stuartsierra.dependency.topo_sort.call(null,thi.ng.glsl.core.build_graph.call(null,spec))));
} else {
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(spec);
}
});
thi.ng.glsl.core.glsl_spec_plain = (function thi$ng$glsl$core$glsl_spec_plain(deps,src){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),deps,new cljs.core.Keyword(null,"src","src",-1651076051),src], null);
});

//# sourceMappingURL=core.js.map