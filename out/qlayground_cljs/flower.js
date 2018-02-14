// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.flower');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.flower.setup = (function qlayground_cljs$flower$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(1),new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),(1)], null);
});
qlayground_cljs.flower.update_state_interference = (function qlayground_cljs$flower$update_state_interference(state){
var color = cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.8),(200));
var circles = new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state);
var next_circles = cljs.core.conj.call(null,circles,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) * quil.core.frame_count.call(null)),((1) * quil.core.frame_count.call(null)),((2) * quil.core.frame_count.call(null)),((2) * quil.core.frame_count.call(null))], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"circles","circles",-1947060917),next_circles], null);
});
qlayground_cljs.flower.calculate_next_circle = (function qlayground_cljs$flower$calculate_next_circle(circles){
return circles;
});
qlayground_cljs.flower.draw_state = (function qlayground_cljs$flower$draw_state(state){
var timestamp = [cljs.core.str(quil.core.year.call(null)),cljs.core.str(quil.core.month.call(null)),cljs.core.str(quil.core.day.call(null)),cljs.core.str(quil.core.hour.call(null)),cljs.core.str(quil.core.minute.call(null))].join('');
var filename = [cljs.core.str("interference-line-"),cljs.core.str(timestamp)].join('');
var hw = quil.core.width.call(null);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
var vec__40913 = cljs.core.last.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var x = cljs.core.nth.call(null,vec__40913,(0),null);
var y = cljs.core.nth.call(null,vec__40913,(1),null);
var w = cljs.core.nth.call(null,vec__40913,(2),null);
var h = cljs.core.nth.call(null,vec__40913,(3),null);
quil.core.no_fill.call(null);

quil.core.stroke.call(null,(100),(100),(20));

quil.core.ellipse.call(null,(hw - x),y,w,h);

quil.core.ellipse.call(null,x,(hw - y),w,h);

quil.core.ellipse.call(null,(hw - x),(hw - y),w,h);

return quil.core.ellipse.call(null,x,y,w,h);
});

//# sourceMappingURL=flower.js.map