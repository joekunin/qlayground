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
var seq__40925 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(state)));
var chunk__40926 = null;
var count__40927 = (0);
var i__40928 = (0);
while(true){
if((i__40928 < count__40927)){
var vec__40929 = cljs.core._nth.call(null,chunk__40926,i__40928);
var i = cljs.core.nth.call(null,vec__40929,(0),null);
var v = cljs.core.nth.call(null,vec__40929,(1),null);
var multiplier_40935 = ((i / qlayground_cljs.cljs.conway.grid_size) | (0));
var x_40936 = (cell_size * (i - (multiplier_40935 * qlayground_cljs.cljs.conway.grid_size)));
var y_40937 = (cell_size * multiplier_40935);
var z_40938 = quil.core.frame_count.call(null);
quil.core.stroke.call(null,((cljs.core._EQ_.call(null,(1),v))?(0):(255)));

quil.core.stroke_weight.call(null,(3));

quil.core.point.call(null,x_40936,y_40937,z_40938);

var G__40939 = seq__40925;
var G__40940 = chunk__40926;
var G__40941 = count__40927;
var G__40942 = (i__40928 + (1));
seq__40925 = G__40939;
chunk__40926 = G__40940;
count__40927 = G__40941;
i__40928 = G__40942;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40925);
if(temp__5457__auto__){
var seq__40925__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40925__$1)){
var c__8125__auto__ = cljs.core.chunk_first.call(null,seq__40925__$1);
var G__40943 = cljs.core.chunk_rest.call(null,seq__40925__$1);
var G__40944 = c__8125__auto__;
var G__40945 = cljs.core.count.call(null,c__8125__auto__);
var G__40946 = (0);
seq__40925 = G__40943;
chunk__40926 = G__40944;
count__40927 = G__40945;
i__40928 = G__40946;
continue;
} else {
var vec__40932 = cljs.core.first.call(null,seq__40925__$1);
var i = cljs.core.nth.call(null,vec__40932,(0),null);
var v = cljs.core.nth.call(null,vec__40932,(1),null);
var multiplier_40947 = ((i / qlayground_cljs.cljs.conway.grid_size) | (0));
var x_40948 = (cell_size * (i - (multiplier_40947 * qlayground_cljs.cljs.conway.grid_size)));
var y_40949 = (cell_size * multiplier_40947);
var z_40950 = quil.core.frame_count.call(null);
quil.core.stroke.call(null,((cljs.core._EQ_.call(null,(1),v))?(0):(255)));

quil.core.stroke_weight.call(null,(3));

quil.core.point.call(null,x_40948,y_40949,z_40950);

var G__40951 = cljs.core.next.call(null,seq__40925__$1);
var G__40952 = null;
var G__40953 = (0);
var G__40954 = (0);
seq__40925 = G__40951;
chunk__40926 = G__40952;
count__40927 = G__40953;
i__40928 = G__40954;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=conway.js.map