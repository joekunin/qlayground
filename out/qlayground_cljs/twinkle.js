// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.twinkle');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.twinkle.setup = (function qlayground_cljs$twinkle$setup(){
quil.core.frame_rate.call(null,(30));

var r = (10);
var width = (100);
var height = (100);
var w = quil.core.width.call(null);
var h = quil.core.height.call(null);
var y_vals = cljs.core.take_nth.call(null,r,cljs.core.range.call(null,(h + r)));
var x_vals = cljs.core.flatten.call(null,cljs.core.map.call(null,((function (r,width,height,w,h,y_vals){
return (function (p1__40991_SHARP_){
return cljs.core.repeat.call(null,cljs.core.count.call(null,y_vals),p1__40991_SHARP_);
});})(r,width,height,w,h,y_vals))
,cljs.core.take_nth.call(null,r,cljs.core.range.call(null,(w + r)))));
var origins = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,x_vals,cljs.core.cycle.call(null,y_vals)));
var squares = cljs.core.map.call(null,((function (r,width,height,w,h,y_vals,x_vals,origins){
return (function (p__40996){
var vec__40997 = p__40996;
var x = cljs.core.nth.call(null,vec__40997,(0),null);
var y = cljs.core.nth.call(null,vec__40997,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),height,new cljs.core.Keyword(null,"height","height",1025178622),width], null);
});})(r,width,height,w,h,y_vals,x_vals,origins))
,origins);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"squares","squares",-888257629),squares], null);
});
qlayground_cljs.twinkle.update_state = (function qlayground_cljs$twinkle$update_state(state){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"squares","squares",-888257629),(function (p1__41000_SHARP_){
return cljs.core.map.call(null,(function (square){
var cx = (quil.core.width.call(null) / (2));
var cy = (quil.core.height.call(null) / (2));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(square);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(square);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(state);
var t = (quil.core.millis.call(null) / (1000));
return cljs.core.assoc.call(null,square,new cljs.core.Keyword(null,"width","width",-384071477),(r * quil.core.sin.call(null,(t + (quil.core.sq.call(null,(cx - width)) + quil.core.sq.call(null,(cy - height)))))));
}),p1__41000_SHARP_);
}));
});
qlayground_cljs.twinkle.draw_state = (function qlayground_cljs$twinkle$draw_state(state){
quil.core.background.call(null,(0),(0),(0));

quil.core.no_stroke.call(null);

var seq__41005 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"squares","squares",-888257629).cljs$core$IFn$_invoke$arity$1(state));
var chunk__41006 = null;
var count__41007 = (0);
var i__41008 = (0);
while(true){
if((i__41008 < count__41007)){
var s = cljs.core._nth.call(null,chunk__41006,i__41008);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(s));

var G__41009 = seq__41005;
var G__41010 = chunk__41006;
var G__41011 = count__41007;
var G__41012 = (i__41008 + (1));
seq__41005 = G__41009;
chunk__41006 = G__41010;
count__41007 = G__41011;
i__41008 = G__41012;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41005);
if(temp__5457__auto__){
var seq__41005__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41005__$1)){
var c__8125__auto__ = cljs.core.chunk_first.call(null,seq__41005__$1);
var G__41013 = cljs.core.chunk_rest.call(null,seq__41005__$1);
var G__41014 = c__8125__auto__;
var G__41015 = cljs.core.count.call(null,c__8125__auto__);
var G__41016 = (0);
seq__41005 = G__41013;
chunk__41006 = G__41014;
count__41007 = G__41015;
i__41008 = G__41016;
continue;
} else {
var s = cljs.core.first.call(null,seq__41005__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(s));

var G__41017 = cljs.core.next.call(null,seq__41005__$1);
var G__41018 = null;
var G__41019 = (0);
var G__41020 = (0);
seq__41005 = G__41017;
chunk__41006 = G__41018;
count__41007 = G__41019;
i__41008 = G__41020;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=twinkle.js.map