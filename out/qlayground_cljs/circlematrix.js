// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.circlematrix');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.circlematrix.intersection = (function qlayground_cljs$circlematrix$intersection(x0,y0){
return null;
});
qlayground_cljs.circlematrix.modify_circle = (function qlayground_cljs$circlematrix$modify_circle(p__41049){
var vec__41053 = p__41049;
var x = cljs.core.nth.call(null,vec__41053,(0),null);
var y = cljs.core.nth.call(null,vec__41053,(1),null);
var w = cljs.core.nth.call(null,vec__41053,(2),null);
var h = cljs.core.nth.call(null,vec__41053,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null);
});
qlayground_cljs.circlematrix.setup = (function qlayground_cljs$circlematrix$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
qlayground_cljs.circlematrix.update_state = (function qlayground_cljs$circlematrix$update_state(state){
var map__41058 = state;
var map__41058__$1 = ((((!((map__41058 == null)))?((((map__41058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41058):map__41058);
var color = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var angle = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(color + 0.2),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),cljs.core.mod.call(null,(angle + 0.1),quil.core.TWO_PI)], null);
});
qlayground_cljs.circlematrix.draw_state = (function qlayground_cljs$circlematrix$draw_state(state){
quil.core.no_fill.call(null);

quil.core.stroke.call(null,(33));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state);
var tx = ((150) * quil.core.sin.call(null,angle));
var ty = ((150) * quil.core.cos.call(null,angle));
var x = ((150) * quil.core.tan.call(null,angle));
var y = ((150) * quil.core.tan.call(null,angle));
var x1 = (- ((150) * quil.core.tan.call(null,angle)));
var y1 = (- ((150) * quil.core.tan.call(null,angle)));
var tr__8948__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8948__auto__);

var tr__8948__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.PI / tx),(quil.core.PI / ty)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8948__auto____$1);

var tr__8948__auto____$2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ty,tx], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8948__auto____$2);

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(100),(255),(250));

quil.core.scale.call(null,0.2);

quil.core.ellipse.call(null,(- x1),y1,color,color);

quil.core.translate.call(null,angle,angle);

quil.core.ellipse.call(null,x1,(- y1),(25),(25));

quil.core.rotate.call(null,angle);

quil.core.ellipse.call(null,(- x),y,(1.2 * color),(1.2 * color));

quil.core.rotate.call(null,angle);

quil.core.ellipse.call(null,x,y1,(35),(35));

quil.core.ellipse.call(null,x,(- y),(1.6 * color),(1.6 * color));

quil.core.ellipse.call(null,x,(- y),(1.6 * color),(1.6 * color));

quil.core.stroke.call(null,(255));

quil.core.ellipse.call(null,(- x),y,(10),(10));

quil.core.scale.call(null,1.5);

quil.core.rotate.call(null,angle);

quil.core.fill.call(null,(3.1 * color),(50),(200),(10));

return quil.core.rect.call(null,(0),(0),quil.core.width.call(null),quil.core.height.call(null));
}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}}finally {quil.core.pop_matrix.call(null);
}});

//# sourceMappingURL=circlematrix.js.map