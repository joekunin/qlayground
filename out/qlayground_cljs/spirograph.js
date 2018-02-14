// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.spirograph');
goog.require('cljs.core');
goog.require('quil.core');
/**
 * Returns a function that computes the position of the pencil at time
 *   `t` for a spirograph with outer circle of radius `R`. The parameter
 *   0 <= `k` <= 1 specifies the size of the inner circle with respect to
 *   the outer one, and 0 <= `l` <= 1 how far the pencil is from the
 *   centre of the inner circle. See
 *   http://en.wikipedia.org/wiki/Spirograph#Mathematical_basis for a
 *   full explanation.
 */
qlayground_cljs.spirograph.make_spirograph_fn = (function qlayground_cljs$spirograph$make_spirograph_fn(R,k,l){
return (function (t){
var x = (R * ((((1) - k) * quil.core.cos.call(null,t)) + ((l * k) * quil.core.cos.call(null,((((1) - k) / k) * t)))));
var y = (R * ((((1) - k) * quil.core.sin.call(null,t)) - ((l * k) * quil.core.sin.call(null,((((1) - k) / k) * t)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
});
/**
 * Returns a function that displaces a point within the display
 *   window. TODO: can quil.core/translate be used instead?
 */
qlayground_cljs.spirograph.my_translate = (function qlayground_cljs$spirograph$my_translate(delta_x,delta_y){
return (function (p__41143){
var vec__41144 = p__41143;
var x = cljs.core.nth.call(null,vec__41144,(0),null);
var y = cljs.core.nth.call(null,vec__41144,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + delta_x),(y + delta_y)], null);
});
});
/**
 * Draw a spirograph in a window of width `w` and height `h`, with
 * outer circle of radius `R` and parameters `k` and `l`
 */
qlayground_cljs.spirograph.spirograph = (function qlayground_cljs$spirograph$spirograph(var_args){
var args41147 = [];
var len__8435__auto___41150 = arguments.length;
var i__8436__auto___41151 = (0);
while(true){
if((i__8436__auto___41151 < len__8435__auto___41150)){
args41147.push((arguments[i__8436__auto___41151]));

var G__41152 = (i__8436__auto___41151 + (1));
i__8436__auto___41151 = G__41152;
continue;
} else {
}
break;
}

var G__41149 = args41147.length;
switch (G__41149) {
case 2:
return qlayground_cljs.spirograph.spirograph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return qlayground_cljs.spirograph.spirograph.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41147.length)].join('')));

}
});

qlayground_cljs.spirograph.spirograph.cljs$core$IFn$_invoke$arity$2 = (function (k,l){
return qlayground_cljs.spirograph.spirograph.call(null,(500),(500),(249),k,l);
});

qlayground_cljs.spirograph.spirograph.cljs$core$IFn$_invoke$arity$5 = (function (w,h,R,k,l){
var f = cljs.core.comp.call(null,qlayground_cljs.spirograph.my_translate.call(null,(w / (2)),(h / (2))),qlayground_cljs.spirograph.make_spirograph_fn.call(null,R,k,l));
var p = cljs.core.atom.call(null,f.call(null,(0)));
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"title","title",636505583),"Spirograph",new cljs.core.Keyword(null,"setup","setup",1987730512),((function (f,p){
return (function (){
quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(100));
});})(f,p))
,new cljs.core.Keyword(null,"draw","draw",1358331674),((function (f,p){
return (function (){
var next_p = f.call(null,(quil.core.frame_count.call(null) / (5)));
quil.core.line.call(null,cljs.core.deref.call(null,p),next_p);

return cljs.core.reset_BANG_.call(null,p,next_p);
});})(f,p))
,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
});

qlayground_cljs.spirograph.spirograph.cljs$lang$maxFixedArity = 5;


//# sourceMappingURL=spirograph.js.map