// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.pendulum');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.pendulum.setup = (function qlayground_cljs$pendulum$setup(){
quil.core.frame_rate.call(null,(60));

var r = (20);
var w = quil.core.width.call(null);
var h = quil.core.height.call(null);
var y_vals = cljs.core.take_nth.call(null,r,cljs.core.range.call(null,(h + r)));
var circles = cljs.core.map.call(null,((function (r,w,h,y_vals){
return (function (p__40963){
var vec__40964 = p__40963;
var x = cljs.core.nth.call(null,vec__40964,(0),null);
var y = cljs.core.nth.call(null,vec__40964,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(250),new cljs.core.Keyword(null,"r","r",-471384190),r], null);
});})(r,w,h,y_vals))
,cljs.core.partition.call(null,(2),y_vals));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"circles","circles",-1947060917),circles], null);
});
qlayground_cljs.pendulum.update_state = (function qlayground_cljs$pendulum$update_state(state){
cljs.core.update.call(null,state,new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (p1__40967_SHARP_){
return cljs.core.map.call(null,(function (c){
var cx = (quil.core.width.call(null) / (2));
var cy = (quil.core.height.call(null) / (2));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(state);
var t = (quil.core.millis.call(null) / (1000));
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"r","r",-471384190),(r * quil.core.sin.call(null,(t + (quil.core.sq.call(null,(cx - x)) + quil.core.sq.call(null,(cy - y)))))));
}),p1__40967_SHARP_);
}));

return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (p1__40968_SHARP_){
return cljs.core.map.call(null,(function (c){
var cx = (quil.core.width.call(null) / (2));
var cy = (quil.core.height.call(null) / (2));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(state);
var t = (quil.core.millis.call(null) / (1000));
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"x","x",2099068185),(r * quil.core.sin.call(null,(t + (quil.core.sq.call(null,(cx - x)) + quil.core.sq.call(null,(cy - y)))))));
}),p1__40968_SHARP_);
}));
});
qlayground_cljs.pendulum.draw_state = (function qlayground_cljs$pendulum$draw_state(state){
quil.core.background.call(null,(0),(0),(0));

quil.core.no_stroke.call(null);

var tr__8948__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8948__auto__);

var seq__40973 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var chunk__40974 = null;
var count__40975 = (0);
var i__40976 = (0);
while(true){
if((i__40976 < count__40975)){
var c = cljs.core._nth.call(null,chunk__40974,i__40976);
quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c));

var G__40977 = seq__40973;
var G__40978 = chunk__40974;
var G__40979 = count__40975;
var G__40980 = (i__40976 + (1));
seq__40973 = G__40977;
chunk__40974 = G__40978;
count__40975 = G__40979;
i__40976 = G__40980;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40973);
if(temp__5457__auto__){
var seq__40973__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40973__$1)){
var c__8125__auto__ = cljs.core.chunk_first.call(null,seq__40973__$1);
var G__40981 = cljs.core.chunk_rest.call(null,seq__40973__$1);
var G__40982 = c__8125__auto__;
var G__40983 = cljs.core.count.call(null,c__8125__auto__);
var G__40984 = (0);
seq__40973 = G__40981;
chunk__40974 = G__40982;
count__40975 = G__40983;
i__40976 = G__40984;
continue;
} else {
var c = cljs.core.first.call(null,seq__40973__$1);
quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c));

var G__40985 = cljs.core.next.call(null,seq__40973__$1);
var G__40986 = null;
var G__40987 = (0);
var G__40988 = (0);
seq__40973 = G__40985;
chunk__40974 = G__40986;
count__40975 = G__40987;
i__40976 = G__40988;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}});

//# sourceMappingURL=pendulum.js.map