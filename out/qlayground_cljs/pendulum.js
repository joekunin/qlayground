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
return (function (p__40989){
var vec__40990 = p__40989;
var x = cljs.core.nth.call(null,vec__40990,(0),null);
var y = cljs.core.nth.call(null,vec__40990,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(250),new cljs.core.Keyword(null,"r","r",-471384190),r], null);
});})(r,w,h,y_vals))
,cljs.core.partition.call(null,(2),y_vals));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"circles","circles",-1947060917),circles], null);
});
qlayground_cljs.pendulum.update_state = (function qlayground_cljs$pendulum$update_state(state){
cljs.core.update.call(null,state,new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (p1__40993_SHARP_){
return cljs.core.map.call(null,(function (c){
var cx = (quil.core.width.call(null) / (2));
var cy = (quil.core.height.call(null) / (2));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(state);
var t = (quil.core.millis.call(null) / (1000));
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"r","r",-471384190),(r * quil.core.sin.call(null,(t + (quil.core.sq.call(null,(cx - x)) + quil.core.sq.call(null,(cy - y)))))));
}),p1__40993_SHARP_);
}));

return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (p1__40994_SHARP_){
return cljs.core.map.call(null,(function (c){
var cx = (quil.core.width.call(null) / (2));
var cy = (quil.core.height.call(null) / (2));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(state);
var t = (quil.core.millis.call(null) / (1000));
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"x","x",2099068185),(r * quil.core.sin.call(null,(t + (quil.core.sq.call(null,(cx - x)) + quil.core.sq.call(null,(cy - y)))))));
}),p1__40994_SHARP_);
}));
});
qlayground_cljs.pendulum.draw_state = (function qlayground_cljs$pendulum$draw_state(state){
quil.core.background.call(null,(0),(0),(0));

quil.core.no_stroke.call(null);

var tr__8948__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8948__auto__);

var seq__40999 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var chunk__41000 = null;
var count__41001 = (0);
var i__41002 = (0);
while(true){
if((i__41002 < count__41001)){
var c = cljs.core._nth.call(null,chunk__41000,i__41002);
quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c));

var G__41003 = seq__40999;
var G__41004 = chunk__41000;
var G__41005 = count__41001;
var G__41006 = (i__41002 + (1));
seq__40999 = G__41003;
chunk__41000 = G__41004;
count__41001 = G__41005;
i__41002 = G__41006;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40999);
if(temp__5457__auto__){
var seq__40999__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40999__$1)){
var c__8125__auto__ = cljs.core.chunk_first.call(null,seq__40999__$1);
var G__41007 = cljs.core.chunk_rest.call(null,seq__40999__$1);
var G__41008 = c__8125__auto__;
var G__41009 = cljs.core.count.call(null,c__8125__auto__);
var G__41010 = (0);
seq__40999 = G__41007;
chunk__41000 = G__41008;
count__41001 = G__41009;
i__41002 = G__41010;
continue;
} else {
var c = cljs.core.first.call(null,seq__40999__$1);
quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(c));

var G__41011 = cljs.core.next.call(null,seq__40999__$1);
var G__41012 = null;
var G__41013 = (0);
var G__41014 = (0);
seq__40999 = G__41011;
chunk__41000 = G__41012;
count__41001 = G__41013;
i__41002 = G__41014;
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