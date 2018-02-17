// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.circlespin');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.circlespin.setup = (function qlayground_cljs$circlespin$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"circles","circles",-1947060917),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(400),(400)], null)], null),new cljs.core.Keyword(null,"variable","variable",-281346492),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
qlayground_cljs.circlespin.modify_circle = (function qlayground_cljs$circlespin$modify_circle(p__40678){
var vec__40682 = p__40678;
var x = cljs.core.nth.call(null,vec__40682,(0),null);
var y = cljs.core.nth.call(null,vec__40682,(1),null);
var w = cljs.core.nth.call(null,vec__40682,(2),null);
var h = cljs.core.nth.call(null,vec__40682,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null);
});
qlayground_cljs.circlespin.update_state = (function qlayground_cljs$circlespin$update_state(state){
var map__40690 = state;
var map__40690__$1 = ((((!((map__40690 == null)))?((((map__40690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40690):map__40690);
var circles = cljs.core.get.call(null,map__40690__$1,new cljs.core.Keyword(null,"circles","circles",-1947060917));
var color = cljs.core.get.call(null,map__40690__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__40690__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var vec__40691 = cljs.core.last.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var x = cljs.core.nth.call(null,vec__40691,(0),null);
var y = cljs.core.nth.call(null,vec__40691,(1),null);
var w = cljs.core.nth.call(null,vec__40691,(2),null);
var h = cljs.core.nth.call(null,vec__40691,(3),null);
var updated_circles = cljs.core.conj.call(null,circles,qlayground_cljs.circlespin.modify_circle.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(color + 0.1),(255)),new cljs.core.Keyword(null,"variable","variable",-281346492),cljs.core.mod.call(null,(color + 0.1),(100)),new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.mod.call(null,(angle + 0.1),quil.core.TWO_PI),new cljs.core.Keyword(null,"circles","circles",-1947060917),updated_circles], null);
});
qlayground_cljs.circlespin.draw_state = (function qlayground_cljs$circlespin$draw_state(state){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
var t = quil.core.frame_count.call(null);
var v = new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(state);
var translate_x = ((quil.core.height.call(null) / (2)) + ((150) * quil.core.cos.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state))));
var translate_y = ((150) * quil.core.sin.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state)));
var vec__40698 = cljs.core.last.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(state));
var x = cljs.core.nth.call(null,vec__40698,(0),null);
var y = cljs.core.nth.call(null,vec__40698,(1),null);
var w = cljs.core.nth.call(null,vec__40698,(2),null);
var h = cljs.core.nth.call(null,vec__40698,(3),null);
quil.core.stroke.call(null,(120),(100),color);

quil.core.no_fill.call(null);

quil.core.translate.call(null,(400),(400));

quil.core.ellipse.call(null,x,y,w,h);

quil.core.rotate_x.call(null,color);

quil.core.ellipse.call(null,x,y,w,h);

quil.core.rotate_y.call(null,color);

quil.core.ellipse.call(null,x,y,w,h);

quil.core.rotate_z.call(null,color);

return quil.core.ellipse.call(null,x,y,w,h);
});

//# sourceMappingURL=circlespin.js.map