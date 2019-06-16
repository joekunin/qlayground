// Compiled by ClojureScript 1.9.293 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var args26916 = [];
var len__21238__auto___26919 = arguments.length;
var i__21239__auto___26920 = (0);
while(true){
if((i__21239__auto___26920 < len__21238__auto___26919)){
args26916.push((arguments[i__21239__auto___26920]));

var G__26921 = (i__21239__auto___26920 + (1));
i__21239__auto___26920 = G__26921;
continue;
} else {
}
break;
}

var G__26918 = args26916.length;
switch (G__26918) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26916.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__20735__auto__ = (((coll == null))?null:coll);
var m__20736__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__20736__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,coll,n,combinef,reducef);
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var args26923 = [];
var len__21238__auto___26926 = arguments.length;
var i__21239__auto___26927 = (0);
while(true){
if((i__21239__auto___26927 < len__21238__auto___26926)){
args26923.push((arguments[i__21239__auto___26927]));

var G__26928 = (i__21239__auto___26927 + (1));
i__21239__auto___26927 = G__26928;
continue;
} else {
}
break;
}

var G__26925 = args26923.length;
switch (G__26925) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26923.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;

/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers26933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers26933 = (function (coll,xf,meta26934){
this.coll = coll;
this.xf = xf;
this.meta26934 = meta26934;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers26933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26935,meta26934__$1){
var self__ = this;
var _26935__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers26933(self__.coll,self__.xf,meta26934__$1));
});

clojure.core.reducers.t_clojure$core$reducers26933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26935){
var self__ = this;
var _26935__$1 = this;
return self__.meta26934;
});

clojure.core.reducers.t_clojure$core$reducers26933.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers26933.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers26933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta26934","meta26934",-13643692,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers26933.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers26933.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers26933";

clojure.core.reducers.t_clojure$core$reducers26933.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"clojure.core.reducers/t_clojure$core$reducers26933");
});

clojure.core.reducers.__GT_t_clojure$core$reducers26933 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers26933(coll__$1,xf__$1,meta26934){
return (new clojure.core.reducers.t_clojure$core$reducers26933(coll__$1,xf__$1,meta26934));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers26933(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers26939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers26939 = (function (coll,xf,meta26940){
this.coll = coll;
this.xf = xf;
this.meta26940 = meta26940;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers26939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26941,meta26940__$1){
var self__ = this;
var _26941__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers26939(self__.coll,self__.xf,meta26940__$1));
});

clojure.core.reducers.t_clojure$core$reducers26939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26941){
var self__ = this;
var _26941__$1 = this;
return self__.meta26940;
});

clojure.core.reducers.t_clojure$core$reducers26939.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers26939.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers26939.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.t_clojure$core$reducers26939.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t_clojure$core$reducers26939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta26940","meta26940",-720819213,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers26939.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers26939.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers26939";

clojure.core.reducers.t_clojure$core$reducers26939.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"clojure.core.reducers/t_clojure$core$reducers26939");
});

clojure.core.reducers.__GT_t_clojure$core$reducers26939 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers26939(coll__$1,xf__$1,meta26940){
return (new clojure.core.reducers.t_clojure$core$reducers26939(coll__$1,xf__$1,meta26940));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers26939(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var args26942 = [];
var len__21238__auto___26945 = arguments.length;
var i__21239__auto___26946 = (0);
while(true){
if((i__21239__auto___26946 < len__21238__auto___26945)){
args26942.push((arguments[i__21239__auto___26946]));

var G__26947 = (i__21239__auto___26946 + (1));
i__21239__auto___26946 = G__26947;
continue;
} else {
}
break;
}

var G__26944 = args26942.length;
switch (G__26944) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26942.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__20465__auto__){
return clojure.core.reducers.map.call(null,f,x__20465__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__26949 = null;
var G__26949__0 = (function (){
return f1.call(null);
});
var G__26949__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__26949__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__26949 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__26949__0.call(this);
case 2:
return G__26949__2.call(this,ret,k);
case 3:
return G__26949__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26949.cljs$core$IFn$_invoke$arity$0 = G__26949__0;
G__26949.cljs$core$IFn$_invoke$arity$2 = G__26949__2;
G__26949.cljs$core$IFn$_invoke$arity$3 = G__26949__3;
return G__26949;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;

/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var args26950 = [];
var len__21238__auto___26953 = arguments.length;
var i__21239__auto___26954 = (0);
while(true){
if((i__21239__auto___26954 < len__21238__auto___26953)){
args26950.push((arguments[i__21239__auto___26954]));

var G__26955 = (i__21239__auto___26954 + (1));
i__21239__auto___26954 = G__26955;
continue;
} else {
}
break;
}

var G__26952 = args26950.length;
switch (G__26952) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26950.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__20465__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__20465__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__26957 = null;
var G__26957__0 = (function (){
return f1.call(null);
});
var G__26957__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__26957__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__26957 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__26957__0.call(this);
case 2:
return G__26957__2.call(this,ret,k);
case 3:
return G__26957__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26957.cljs$core$IFn$_invoke$arity$0 = G__26957__0;
G__26957.cljs$core$IFn$_invoke$arity$2 = G__26957__2;
G__26957.cljs$core$IFn$_invoke$arity$3 = G__26957__3;
return G__26957;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;

/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var args26958 = [];
var len__21238__auto___26961 = arguments.length;
var i__21239__auto___26962 = (0);
while(true){
if((i__21239__auto___26962 < len__21238__auto___26961)){
args26958.push((arguments[i__21239__auto___26962]));

var G__26963 = (i__21239__auto___26962 + (1));
i__21239__auto___26962 = G__26963;
continue;
} else {
}
break;
}

var G__26960 = args26958.length;
switch (G__26960) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26958.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__20465__auto__){
return clojure.core.reducers.filter.call(null,pred,x__20465__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__26965 = null;
var G__26965__0 = (function (){
return f1.call(null);
});
var G__26965__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__26965__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__26965 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__26965__0.call(this);
case 2:
return G__26965__2.call(this,ret,k);
case 3:
return G__26965__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26965.cljs$core$IFn$_invoke$arity$0 = G__26965__0;
G__26965.cljs$core$IFn$_invoke$arity$2 = G__26965__2;
G__26965.cljs$core$IFn$_invoke$arity$3 = G__26965__3;
return G__26965;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;

/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var args26966 = [];
var len__21238__auto___26969 = arguments.length;
var i__21239__auto___26970 = (0);
while(true){
if((i__21239__auto___26970 < len__21238__auto___26969)){
args26966.push((arguments[i__21239__auto___26970]));

var G__26971 = (i__21239__auto___26970 + (1));
i__21239__auto___26970 = G__26971;
continue;
} else {
}
break;
}

var G__26968 = args26966.length;
switch (G__26968) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26966.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__20465__auto__){
return clojure.core.reducers.flatten.call(null,x__20465__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__26973 = null;
var G__26973__0 = (function (){
return f1.call(null);
});
var G__26973__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__26973 = function(ret,v){
switch(arguments.length){
case 0:
return G__26973__0.call(this);
case 2:
return G__26973__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26973.cljs$core$IFn$_invoke$arity$0 = G__26973__0;
G__26973.cljs$core$IFn$_invoke$arity$2 = G__26973__2;
return G__26973;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;

/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var args26974 = [];
var len__21238__auto___26977 = arguments.length;
var i__21239__auto___26978 = (0);
while(true){
if((i__21239__auto___26978 < len__21238__auto___26977)){
args26974.push((arguments[i__21239__auto___26978]));

var G__26979 = (i__21239__auto___26978 + (1));
i__21239__auto___26978 = G__26979;
continue;
} else {
}
break;
}

var G__26976 = args26974.length;
switch (G__26976) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26974.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__20465__auto__){
return clojure.core.reducers.remove.call(null,pred,x__20465__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;

/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var args26981 = [];
var len__21238__auto___26984 = arguments.length;
var i__21239__auto___26985 = (0);
while(true){
if((i__21239__auto___26985 < len__21238__auto___26984)){
args26981.push((arguments[i__21239__auto___26985]));

var G__26986 = (i__21239__auto___26985 + (1));
i__21239__auto___26985 = G__26986;
continue;
} else {
}
break;
}

var G__26983 = args26981.length;
switch (G__26983) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26981.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__20465__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__20465__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__26988 = null;
var G__26988__0 = (function (){
return f1.call(null);
});
var G__26988__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__26988__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__26988 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__26988__0.call(this);
case 2:
return G__26988__2.call(this,ret,k);
case 3:
return G__26988__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26988.cljs$core$IFn$_invoke$arity$0 = G__26988__0;
G__26988.cljs$core$IFn$_invoke$arity$2 = G__26988__2;
G__26988.cljs$core$IFn$_invoke$arity$3 = G__26988__3;
return G__26988;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;

/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var args26989 = [];
var len__21238__auto___26992 = arguments.length;
var i__21239__auto___26993 = (0);
while(true){
if((i__21239__auto___26993 < len__21238__auto___26992)){
args26989.push((arguments[i__21239__auto___26993]));

var G__26994 = (i__21239__auto___26993 + (1));
i__21239__auto___26993 = G__26994;
continue;
} else {
}
break;
}

var G__26991 = args26989.length;
switch (G__26991) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26989.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__20465__auto__){
return clojure.core.reducers.take.call(null,n,x__20465__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__26996 = null;
var G__26996__0 = (function (){
return f1.call(null);
});
var G__26996__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__26996__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__26996 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__26996__0.call(this);
case 2:
return G__26996__2.call(this,ret,k);
case 3:
return G__26996__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26996.cljs$core$IFn$_invoke$arity$0 = G__26996__0;
G__26996.cljs$core$IFn$_invoke$arity$2 = G__26996__2;
G__26996.cljs$core$IFn$_invoke$arity$3 = G__26996__3;
return G__26996;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;

/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var args26997 = [];
var len__21238__auto___27000 = arguments.length;
var i__21239__auto___27001 = (0);
while(true){
if((i__21239__auto___27001 < len__21238__auto___27000)){
args26997.push((arguments[i__21239__auto___27001]));

var G__27002 = (i__21239__auto___27001 + (1));
i__21239__auto___27001 = G__27002;
continue;
} else {
}
break;
}

var G__26999 = args26997.length;
switch (G__26999) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26997.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__20465__auto__){
return clojure.core.reducers.drop.call(null,n,x__20465__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__27004 = null;
var G__27004__0 = (function (){
return f1.call(null);
});
var G__27004__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__27004__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__27004 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__27004__0.call(this);
case 2:
return G__27004__2.call(this,ret,k);
case 3:
return G__27004__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27004.cljs$core$IFn$_invoke$arity$0 = G__27004__0;
G__27004.cljs$core$IFn$_invoke$arity$2 = G__27004__2;
G__27004.cljs$core$IFn$_invoke$arity$3 = G__27004__3;
return G__27004;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__20674__auto__,writer__20675__auto__,opt__20676__auto__){
return cljs.core._write.call(null,writer__20675__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var args27005 = [];
var len__21238__auto___27008 = arguments.length;
var i__21239__auto___27009 = (0);
while(true){
if((i__21239__auto___27009 < len__21238__auto___27008)){
args27005.push((arguments[i__21239__auto___27009]));

var G__27010 = (i__21239__auto___27009 + (1));
i__21239__auto___27009 = G__27010;
continue;
} else {
}
break;
}

var G__27007 = args27005.length;
switch (G__27007) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27005.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__27012 = null;
var G__27012__0 = (function (){
return ctor.call(null);
});
var G__27012__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__27012 = function(left,right){
switch(arguments.length){
case 0:
return G__27012__0.call(this);
case 2:
return G__27012__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27012.cljs$core$IFn$_invoke$arity$0 = G__27012__0;
G__27012.cljs$core$IFn$_invoke$arity$2 = G__27012__2;
return G__27012;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;

/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__27014 = acc;
G__27014.push(x);

return G__27014;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure.core.reducers.foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

//# sourceMappingURL=reducers.js.map