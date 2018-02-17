// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.wolfram');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.wolfram.power = (function qlayground_cljs$wolfram$power(var_args){
var args41036 = [];
var len__8435__auto___41039 = arguments.length;
var i__8436__auto___41040 = (0);
while(true){
if((i__8436__auto___41040 < len__8435__auto___41039)){
args41036.push((arguments[i__8436__auto___41040]));

var G__41041 = (i__8436__auto___41040 + (1));
i__8436__auto___41040 = G__41041;
continue;
} else {
}
break;
}

var G__41038 = args41036.length;
switch (G__41038) {
case 2:
return qlayground_cljs.wolfram.power.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return qlayground_cljs.wolfram.power.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41036.length)].join('')));

}
});

qlayground_cljs.wolfram.power.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return qlayground_cljs.wolfram.power.call(null,x,y,(1));
});

qlayground_cljs.wolfram.power.cljs$core$IFn$_invoke$arity$3 = (function (x,y,current){
while(true){
if(cljs.core._EQ_.call(null,y,(0))){
return current;
} else {
if((y > (0))){
var G__41043 = x;
var G__41044 = (y - (1));
var G__41045 = (x * current);
x = G__41043;
y = G__41044;
current = G__41045;
continue;
} else {
var G__41046 = x;
var G__41047 = (y + (1));
var G__41048 = (current / x);
x = G__41046;
y = G__41047;
current = G__41048;
continue;
}
}
break;
}
});

qlayground_cljs.wolfram.power.cljs$lang$maxFixedArity = 3;

qlayground_cljs.wolfram.next_generation = (function qlayground_cljs$wolfram$next_generation(var_args){
var args41049 = [];
var len__8435__auto___41052 = arguments.length;
var i__8436__auto___41053 = (0);
while(true){
if((i__8436__auto___41053 < len__8435__auto___41052)){
args41049.push((arguments[i__8436__auto___41053]));

var G__41054 = (i__8436__auto___41053 + (1));
i__8436__auto___41053 = G__41054;
continue;
} else {
}
break;
}

var G__41051 = args41049.length;
switch (G__41051) {
case 0:
return qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41049.length)].join('')));

}
});

qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$0 = (function (){
return qlayground_cljs.wolfram.next_generation.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(0),(0),(0),(1)], null));
});

qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$1 = (function (generation){
while(true){
var G__41056 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.println.call(null,cljs.core.map.call(null,qlayground_cljs.wolfram.match_rules,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(3),(1),generation)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
generation = G__41056;
continue;
break;
}
});

qlayground_cljs.wolfram.next_generation.cljs$lang$maxFixedArity = 1;

qlayground_cljs.wolfram.match_rules = (function qlayground_cljs$wolfram$match_rules(generation){
return qlayground_cljs.wolfram.match.call(null,generation,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),(0));
});

//# sourceMappingURL=wolfram.js.map