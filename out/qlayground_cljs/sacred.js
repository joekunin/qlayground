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
qlayground_cljs.sacred.calculate_next_circle = (function qlayground_cljs$sacred$calculate_next_circle(p__40872,factor){
var vec__40876 = p__40872;
var x = cljs.core.nth.call(null,vec__40876,(0),null);
var y = cljs.core.nth.call(null,vec__40876,(1),null);
var w = cljs.core.nth.call(null,vec__40876,(2),null);
var h = cljs.core.nth.call(null,vec__40876,(3),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [((250) + quil.core.cos.call(null,(quil.core.sq.call(null,(x + quil.core.cos.call(null,(60)))) + quil.core.sq.call(null,(x - quil.core.sin.call(null,(60))))))),((250) + quil.core.cos.call(null,(quil.core.sq.call(null,(y + quil.core.cos.call(null,(60)))) + quil.core.sq.call(null,(y - quil.core.sin.call(null,(60))))))),((190) * quil.core.sin.call(null,(w + (1)))),(190),quil.core.sin.call(null,(h + (1)))], null);
});
qlayground_cljs.sacred.update_state = (function qlayground_cljs$sacred$update_state(state){
var color = cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.2),(150));
var circles = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state);
var vec__40882 = cljs.core.last.call(null,circles);
var x = cljs.core.nth.call(null,vec__40882,(0),null);
var y = cljs.core.nth.call(null,vec__40882,(1),null);
var w = cljs.core.nth.call(null,vec__40882,(2),null);
var h = cljs.core.nth.call(null,vec__40882,(3),null);
var next_circle = qlayground_cljs.sacred.calculate_next_circle.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null),(3));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.conj.call(null,circles,next_circle)], null);
});
qlayground_cljs.sacred.draw_state = (function qlayground_cljs$sacred$draw_state(state){
var timestamp = [cljs.core.str(quil.core.year.call(null)),cljs.core.str(quil.core.month.call(null)),cljs.core.str(quil.core.day.call(null)),cljs.core.str(quil.core.hour.call(null)),cljs.core.str(quil.core.minute.call(null))].join('');
var filename = [cljs.core.str("interference-line-"),cljs.core.str(timestamp)].join('');
var hw = quil.core.width.call(null);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
var vec__40888 = cljs.core.last.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var x = cljs.core.nth.call(null,vec__40888,(0),null);
var y = cljs.core.nth.call(null,vec__40888,(1),null);
var w = cljs.core.nth.call(null,vec__40888,(2),null);
var h = cljs.core.nth.call(null,vec__40888,(3),null);
quil.core.no_fill.call(null);

quil.core.stroke.call(null,color,color,color);

quil.core.ellipse.call(null,(hw - x),y,w,h);

quil.core.ellipse.call(null,x,(hw - y),w,h);

quil.core.ellipse.call(null,(hw - x),(hw - y),w,h);

return quil.core.ellipse.call(null,x,y,w,h);
});

//# sourceMappingURL=sacred.js.map