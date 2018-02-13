// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.sacred');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.sacred.setup = (function qlayground_cljs$sacred$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(360),(100),(100),1.0);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(1),new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(10),(10)], null)], null),new cljs.core.Keyword(null,"index","index",-1531685915),(1)], null);
});
qlayground_cljs.sacred.state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(1),new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(10),(10)], null)], null),new cljs.core.Keyword(null,"index","index",-1531685915),(1)], null);
qlayground_cljs.sacred.calculate_next_circle = (function qlayground_cljs$sacred$calculate_next_circle(p__40877,factor){
var vec__40881 = p__40877;
var x = cljs.core.nth.call(null,vec__40881,(0),null);
var y = cljs.core.nth.call(null,vec__40881,(1),null);
var w = cljs.core.nth.call(null,vec__40881,(2),null);
var h = cljs.core.nth.call(null,vec__40881,(3),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [((250) + quil.core.cos.call(null,(quil.core.sq.call(null,(x + quil.core.cos.call(null,(60)))) + quil.core.sq.call(null,(x - quil.core.sin.call(null,(60))))))),((250) + quil.core.cos.call(null,(quil.core.sq.call(null,(y + quil.core.cos.call(null,(60)))) + quil.core.sq.call(null,(y - quil.core.sin.call(null,(60))))))),((190) * quil.core.sin.call(null,(w + (1)))),(190),quil.core.sin.call(null,(h + (1)))], null);
});
qlayground_cljs.sacred.update_state = (function qlayground_cljs$sacred$update_state(state){
var color = cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.2),(150));
var circles = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state);
var vec__40887 = cljs.core.last.call(null,circles);
var x = cljs.core.nth.call(null,vec__40887,(0),null);
var y = cljs.core.nth.call(null,vec__40887,(1),null);
var w = cljs.core.nth.call(null,vec__40887,(2),null);
var h = cljs.core.nth.call(null,vec__40887,(3),null);
var next_circle = qlayground_cljs.sacred.calculate_next_circle.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null),(3));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.conj.call(null,circles,next_circle)], null);
});
qlayground_cljs.sacred.draw_state = (function qlayground_cljs$sacred$draw_state(state){
var timestamp = [cljs.core.str(quil.core.year.call(null)),cljs.core.str(quil.core.month.call(null)),cljs.core.str(quil.core.day.call(null)),cljs.core.str(quil.core.hour.call(null)),cljs.core.str(quil.core.minute.call(null))].join('');
var filename = [cljs.core.str("interference-line-"),cljs.core.str(timestamp)].join('');
var hw = quil.core.width.call(null);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
var vec__40893 = cljs.core.last.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var x = cljs.core.nth.call(null,vec__40893,(0),null);
var y = cljs.core.nth.call(null,vec__40893,(1),null);
var w = cljs.core.nth.call(null,vec__40893,(2),null);
var h = cljs.core.nth.call(null,vec__40893,(3),null);
quil.core.no_fill.call(null);

quil.core.stroke.call(null,color,color,color);

quil.core.ellipse.call(null,(hw - x),y,w,h);

quil.core.ellipse.call(null,x,(hw - y),w,h);

quil.core.ellipse.call(null,(hw - x),(hw - y),w,h);

return quil.core.ellipse.call(null,x,y,w,h);
});
qlayground_cljs.sacred.sacred = (function qlayground_cljs$sacred$sacred(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"flower",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),(function (){
return quil.core.save_frame.call(null,"frames/frame-####.tiff");
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,qlayground_cljs.sacred.update_state))?(function() { 
var G__40896__delegate = function (args){
return cljs.core.apply.call(null,qlayground_cljs.sacred.update_state,args);
};
var G__40896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40897__i = 0, G__40897__a = new Array(arguments.length -  0);
while (G__40897__i < G__40897__a.length) {G__40897__a[G__40897__i] = arguments[G__40897__i + 0]; ++G__40897__i;}
  args = new cljs.core.IndexedSeq(G__40897__a,0);
} 
return G__40896__delegate.call(this,args);};
G__40896.cljs$lang$maxFixedArity = 0;
G__40896.cljs$lang$applyTo = (function (arglist__40898){
var args = cljs.core.seq(arglist__40898);
return G__40896__delegate(args);
});
G__40896.cljs$core$IFn$_invoke$arity$variadic = G__40896__delegate;
return G__40896;
})()
:qlayground_cljs.sacred.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,qlayground_cljs.sacred.setup))?(function() { 
var G__40899__delegate = function (args){
return cljs.core.apply.call(null,qlayground_cljs.sacred.setup,args);
};
var G__40899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40900__i = 0, G__40900__a = new Array(arguments.length -  0);
while (G__40900__i < G__40900__a.length) {G__40900__a[G__40900__i] = arguments[G__40900__i + 0]; ++G__40900__i;}
  args = new cljs.core.IndexedSeq(G__40900__a,0);
} 
return G__40899__delegate.call(this,args);};
G__40899.cljs$lang$maxFixedArity = 0;
G__40899.cljs$lang$applyTo = (function (arglist__40901){
var args = cljs.core.seq(arglist__40901);
return G__40899__delegate(args);
});
G__40899.cljs$core$IFn$_invoke$arity$variadic = G__40899__delegate;
return G__40899;
})()
:qlayground_cljs.sacred.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,qlayground_cljs.sacred.draw_state))?(function() { 
var G__40902__delegate = function (args){
return cljs.core.apply.call(null,qlayground_cljs.sacred.draw_state,args);
};
var G__40902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40903__i = 0, G__40903__a = new Array(arguments.length -  0);
while (G__40903__i < G__40903__a.length) {G__40903__a[G__40903__i] = arguments[G__40903__i + 0]; ++G__40903__i;}
  args = new cljs.core.IndexedSeq(G__40903__a,0);
} 
return G__40902__delegate.call(this,args);};
G__40902.cljs$lang$maxFixedArity = 0;
G__40902.cljs$lang$applyTo = (function (arglist__40904){
var args = cljs.core.seq(arglist__40904);
return G__40902__delegate(args);
});
G__40902.cljs$core$IFn$_invoke$arity$variadic = G__40902__delegate;
return G__40902;
})()
:qlayground_cljs.sacred.draw_state));
});
goog.exportSymbol('qlayground_cljs.sacred.sacred', qlayground_cljs.sacred.sacred);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8545__8546__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8545__8546__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),qlayground_cljs.sacred.sacred,new cljs.core.Keyword(null,"host-id","host-id",742376279),"flower"], null));
}

//# sourceMappingURL=sacred.js.map