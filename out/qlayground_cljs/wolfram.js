// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.wolfram');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.wolfram.power = (function qlayground_cljs$wolfram$power(var_args){
var args41062 = [];
var len__8435__auto___41065 = arguments.length;
var i__8436__auto___41066 = (0);
while(true){
if((i__8436__auto___41066 < len__8435__auto___41065)){
args41062.push((arguments[i__8436__auto___41066]));

var G__41067 = (i__8436__auto___41066 + (1));
i__8436__auto___41066 = G__41067;
continue;
} else {
}
break;
}

var G__41064 = args41062.length;
switch (G__41064) {
case 2:
return qlayground_cljs.wolfram.power.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return qlayground_cljs.wolfram.power.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41062.length)].join('')));

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
var G__41069 = x;
var G__41070 = (y - (1));
var G__41071 = (x * current);
x = G__41069;
y = G__41070;
current = G__41071;
continue;
} else {
var G__41072 = x;
var G__41073 = (y + (1));
var G__41074 = (current / x);
x = G__41072;
y = G__41073;
current = G__41074;
continue;
}
}
break;
}
});

qlayground_cljs.wolfram.power.cljs$lang$maxFixedArity = 3;

qlayground_cljs.wolfram.next_generation = (function qlayground_cljs$wolfram$next_generation(var_args){
var args41075 = [];
var len__8435__auto___41078 = arguments.length;
var i__8436__auto___41079 = (0);
while(true){
if((i__8436__auto___41079 < len__8435__auto___41078)){
args41075.push((arguments[i__8436__auto___41079]));

var G__41080 = (i__8436__auto___41079 + (1));
i__8436__auto___41079 = G__41080;
continue;
} else {
}
break;
}

var G__41077 = args41075.length;
switch (G__41077) {
case 0:
return qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41075.length)].join('')));

}
});

qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$0 = (function (){
return qlayground_cljs.wolfram.next_generation.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(0),(0),(0),(1)], null));
});

qlayground_cljs.wolfram.next_generation.cljs$core$IFn$_invoke$arity$1 = (function (generation){
while(true){
var G__41082 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.println.call(null,cljs.core.map.call(null,qlayground_cljs.wolfram.match_rules,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(3),(1),generation)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
generation = G__41082;
continue;
break;
}
});

qlayground_cljs.wolfram.next_generation.cljs$lang$maxFixedArity = 1;

qlayground_cljs.wolfram.match_rules = (function qlayground_cljs$wolfram$match_rules(generation){
return qlayground_cljs.wolfram.match.call(null,generation,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),(0));
});

//# sourceMappingURL=wolfram.js.map