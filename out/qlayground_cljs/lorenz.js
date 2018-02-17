// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.lorenz');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.lorenz.state = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.1,0.1], null)], null);
qlayground_cljs.lorenz.setup = (function qlayground_cljs$lorenz$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return qlayground_cljs.lorenz.state;
});
qlayground_cljs.lorenz.update_state = (function qlayground_cljs$lorenz$update_state(state){
var vec__40904 = cljs.core.last.call(null,state);
var x = cljs.core.nth.call(null,vec__40904,(0),null);
var y = cljs.core.nth.call(null,vec__40904,(1),null);
var z = cljs.core.nth.call(null,vec__40904,(2),null);
var sigma = (10);
var rho = (28);
var beta = ((8) / (3));
var dt = 0.01;
var dx = (dt * (sigma * (y - x)));
var dy = (dt * (- ((x * (rho - z)) * y)));
var dz = (dt * ((x * y) - (beta * z)));
return cljs.core.conj.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y),(dz + z)], null));
});
qlayground_cljs.lorenz.draw_state = (function qlayground_cljs$lorenz$draw_state(state){
var vec__40910 = cljs.core.last.call(null,state);
var x = cljs.core.nth.call(null,vec__40910,(0),null);
var y = cljs.core.nth.call(null,vec__40910,(1),null);
var z = cljs.core.nth.call(null,vec__40910,(2),null);
var tr__8948__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8948__auto__);

quil.core.stroke.call(null,(100));

quil.core.scale.call(null,(5));

return quil.core.point.call(null,x,y,z);
}finally {quil.core.pop_matrix.call(null);
}});

//# sourceMappingURL=lorenz.js.map