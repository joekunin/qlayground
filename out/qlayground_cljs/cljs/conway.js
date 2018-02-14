// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.cljs.conway');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.cljs.conway.grid_size = (100);
qlayground_cljs.cljs.conway.state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matrix","matrix",803137200),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(qlayground_cljs.cljs.conway.grid_size * qlayground_cljs.cljs.conway.grid_size),(function (){
return cljs.core.rand_int.call(null,(2));
})))], null);
qlayground_cljs.cljs.conway.setup = (function qlayground_cljs$cljs$conway$setup(){
quil.core.frame_rate.call(null,(10));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(255));

return qlayground_cljs.cljs.conway.state;
});
qlayground_cljs.cljs.conway.get_neighbors = (function qlayground_cljs$cljs$conway$get_neighbors(idx,vec){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,vec,((idx - qlayground_cljs.cljs.conway.grid_size) - (1))),cljs.core.get.call(null,vec,(idx - qlayground_cljs.cljs.conway.grid_size)),cljs.core.get.call(null,vec,((idx - qlayground_cljs.cljs.conway.grid_size) + (1))),cljs.core.get.call(null,vec,(idx - (1))),cljs.core.get.call(null,vec,(idx + (1))),cljs.core.get.call(null,vec,((qlayground_cljs.cljs.conway.grid_size + idx) - (1))),cljs.core.get.call(null,vec,(qlayground_cljs.cljs.conway.grid_size + idx)),cljs.core.get.call(null,vec,((qlayground_cljs.cljs.conway.grid_size + idx) + (1)))], null);
});
qlayground_cljs.cljs.conway.new_status = (function qlayground_cljs$cljs$conway$new_status(idx,itm,vec){
var alive_n = cljs.core.get.call(null,cljs.core.frequencies.call(null,qlayground_cljs.cljs.conway.get_neighbors.call(null,idx,vec)),(1),(0));
if(cljs.core._EQ_.call(null,(1),itm)){
if(((alive_n > (3))) || ((alive_n < (2)))){
return (0);
} else {
return (1);
}
} else {
if(cljs.core._EQ_.call(null,(3),alive_n)){
return (1);
} else {
return (0);
}
}
});
qlayground_cljs.cljs.conway.update_state = (function qlayground_cljs$cljs$conway$update_state(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"matrix","matrix",803137200),cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (idx,itm){
return qlayground_cljs.cljs.conway.new_status.call(null,idx,itm,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(state));
}),new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(state))));
});
qlayground_cljs.cljs.conway.draw_state = (function qlayground_cljs$cljs$conway$draw_state(state){
var cell_size = cljs.core.quot.call(null,quil.core.width.call(null),qlayground_cljs.cljs.conway.grid_size);
var seq__40942 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(state)));
var chunk__40943 = null;
var count__40944 = (0);
var i__40945 = (0);
while(true){
if((i__40945 < count__40944)){
var vec__40946 = cljs.core._nth.call(null,chunk__40943,i__40945);
var i = cljs.core.nth.call(null,vec__40946,(0),null);
var v = cljs.core.nth.call(null,vec__40946,(1),null);
var multiplier_40952 = ((i / qlayground_cljs.cljs.conway.grid_size) | (0));
var x_40953 = (cell_size * (i - (multiplier_40952 * qlayground_cljs.cljs.conway.grid_size)));
var y_40954 = (cell_size * multiplier_40952);
var z_40955 = quil.core.frame_count.call(null);
quil.core.stroke.call(null,((cljs.core._EQ_.call(null,(1),v))?(0):(255)));

quil.core.stroke_weight.call(null,(3));

quil.core.point.call(null,x_40953,y_40954,z_40955);

var G__40956 = seq__40942;
var G__40957 = chunk__40943;
var G__40958 = count__40944;
var G__40959 = (i__40945 + (1));
seq__40942 = G__40956;
chunk__40943 = G__40957;
count__40944 = G__40958;
i__40945 = G__40959;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40942);
if(temp__5457__auto__){
var seq__40942__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40942__$1)){
var c__8125__auto__ = cljs.core.chunk_first.call(null,seq__40942__$1);
var G__40960 = cljs.core.chunk_rest.call(null,seq__40942__$1);
var G__40961 = c__8125__auto__;
var G__40962 = cljs.core.count.call(null,c__8125__auto__);
var G__40963 = (0);
seq__40942 = G__40960;
chunk__40943 = G__40961;
count__40944 = G__40962;
i__40945 = G__40963;
continue;
} else {
var vec__40949 = cljs.core.first.call(null,seq__40942__$1);
var i = cljs.core.nth.call(null,vec__40949,(0),null);
var v = cljs.core.nth.call(null,vec__40949,(1),null);
var multiplier_40964 = ((i / qlayground_cljs.cljs.conway.grid_size) | (0));
var x_40965 = (cell_size * (i - (multiplier_40964 * qlayground_cljs.cljs.conway.grid_size)));
var y_40966 = (cell_size * multiplier_40964);
var z_40967 = quil.core.frame_count.call(null);
quil.core.stroke.call(null,((cljs.core._EQ_.call(null,(1),v))?(0):(255)));

quil.core.stroke_weight.call(null,(3));

quil.core.point.call(null,x_40965,y_40966,z_40967);

var G__40968 = cljs.core.next.call(null,seq__40942__$1);
var G__40969 = null;
var G__40970 = (0);
var G__40971 = (0);
seq__40942 = G__40968;
chunk__40943 = G__40969;
count__40944 = G__40970;
i__40945 = G__40971;
continue;
}
} else {
return null;
}
}
break;
}
});
qlayground_cljs.cljs.conway.game_of_life = (function qlayground_cljs$cljs$conway$game_of_life(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"host",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,qlayground_cljs.cljs.conway.update_state))?(function() { 
var G__40972__delegate = function (args){
return cljs.core.apply.call(null,qlayground_cljs.cljs.conway.update_state,args);
};
var G__40972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40973__i = 0, G__40973__a = new Array(arguments.length -  0);
while (G__40973__i < G__40973__a.length) {G__40973__a[G__40973__i] = arguments[G__40973__i + 0]; ++G__40973__i;}
  args = new cljs.core.IndexedSeq(G__40973__a,0);
} 
return G__40972__delegate.call(this,args);};
G__40972.cljs$lang$maxFixedArity = 0;
G__40972.cljs$lang$applyTo = (function (arglist__40974){
var args = cljs.core.seq(arglist__40974);
return G__40972__delegate(args);
});
G__40972.cljs$core$IFn$_invoke$arity$variadic = G__40972__delegate;
return G__40972;
})()
:qlayground_cljs.cljs.conway.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p3d","p3d",-850380194),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,qlayground_cljs.cljs.conway.setup))?(function() { 
var G__40975__delegate = function (args){
return cljs.core.apply.call(null,qlayground_cljs.cljs.conway.setup,args);
};
var G__40975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40976__i = 0, G__40976__a = new Array(arguments.length -  0);
while (G__40976__i < G__40976__a.length) {G__40976__a[G__40976__i] = arguments[G__40976__i + 0]; ++G__40976__i;}
  args = new cljs.core.IndexedSeq(G__40976__a,0);
} 
return G__40975__delegate.call(this,args);};
G__40975.cljs$lang$maxFixedArity = 0;
G__40975.cljs$lang$applyTo = (function (arglist__40977){
var args = cljs.core.seq(arglist__40977);
return G__40975__delegate(args);
});
G__40975.cljs$core$IFn$_invoke$arity$variadic = G__40975__delegate;
return G__40975;
})()
:qlayground_cljs.cljs.conway.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode,quil.middleware.navigation_3d], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,qlayground_cljs.cljs.conway.draw_state))?(function() { 
var G__40978__delegate = function (args){
return cljs.core.apply.call(null,qlayground_cljs.cljs.conway.draw_state,args);
};
var G__40978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40979__i = 0, G__40979__a = new Array(arguments.length -  0);
while (G__40979__i < G__40979__a.length) {G__40979__a[G__40979__i] = arguments[G__40979__i + 0]; ++G__40979__i;}
  args = new cljs.core.IndexedSeq(G__40979__a,0);
} 
return G__40978__delegate.call(this,args);};
G__40978.cljs$lang$maxFixedArity = 0;
G__40978.cljs$lang$applyTo = (function (arglist__40980){
var args = cljs.core.seq(arglist__40980);
return G__40978__delegate(args);
});
G__40978.cljs$core$IFn$_invoke$arity$variadic = G__40978__delegate;
return G__40978;
})()
:qlayground_cljs.cljs.conway.draw_state));
});
goog.exportSymbol('qlayground_cljs.cljs.conway.game_of_life', qlayground_cljs.cljs.conway.game_of_life);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8545__8546__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8545__8546__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),qlayground_cljs.cljs.conway.game_of_life,new cljs.core.Keyword(null,"host-id","host-id",742376279),"host"], null));
}

//# sourceMappingURL=conway.js.map