// Compiled by ClojureScript 1.9.293 {:target :nodejs}
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
var args32735 = [];
var len__21023__auto___32738 = arguments.length;
var i__21024__auto___32739 = (0);
while(true){
if((i__21024__auto___32739 < len__21023__auto___32738)){
args32735.push((arguments[i__21024__auto___32739]));

var G__32740 = (i__21024__auto___32739 + (1));
i__21024__auto___32739 = G__32740;
continue;
} else {
}
break;
}

var G__32737 = args32735.length;
switch (G__32737) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32735.length)].join('')));

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
var x__20520__auto__ = (((coll == null))?null:coll);
var m__20521__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__20520__auto__)]);
if(!((m__20521__auto__ == null))){
return m__20521__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__20521__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__20521__auto____$1 == null))){
return m__20521__auto____$1.call(null,coll,n,combinef,reducef);
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
var args32742 = [];
var len__21023__auto___32745 = arguments.length;
var i__21024__auto___32746 = (0);
while(true){
if((i__21024__auto___32746 < len__21023__auto___32745)){
args32742.push((arguments[i__21024__auto___32746]));

var G__32747 = (i__21024__auto___32746 + (1));
i__21024__auto___32746 = G__32747;
continue;
} else {
}
break;
}

var G__32744 = args32742.length;
switch (G__32744) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32742.length)].join('')));

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
if(typeof clojure.core.reducers.t_clojure$core$reducers32752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers32752 = (function (coll,xf,meta32753){
this.coll = coll;
this.xf = xf;
this.meta32753 = meta32753;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers32752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32754,meta32753__$1){
var self__ = this;
var _32754__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers32752(self__.coll,self__.xf,meta32753__$1));
});

clojure.core.reducers.t_clojure$core$reducers32752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32754){
var self__ = this;
var _32754__$1 = this;
return self__.meta32753;
});

clojure.core.reducers.t_clojure$core$reducers32752.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers32752.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers32752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta32753","meta32753",1891026378,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers32752.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers32752.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers32752";

clojure.core.reducers.t_clojure$core$reducers32752.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"clojure.core.reducers/t_clojure$core$reducers32752");
});

clojure.core.reducers.__GT_t_clojure$core$reducers32752 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers32752(coll__$1,xf__$1,meta32753){
return (new clojure.core.reducers.t_clojure$core$reducers32752(coll__$1,xf__$1,meta32753));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers32752(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers32758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers32758 = (function (coll,xf,meta32759){
this.coll = coll;
this.xf = xf;
this.meta32759 = meta32759;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers32758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32760,meta32759__$1){
var self__ = this;
var _32760__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers32758(self__.coll,self__.xf,meta32759__$1));
});

clojure.core.reducers.t_clojure$core$reducers32758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32760){
var self__ = this;
var _32760__$1 = this;
return self__.meta32759;
});

clojure.core.reducers.t_clojure$core$reducers32758.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers32758.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers32758.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.t_clojure$core$reducers32758.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t_clojure$core$reducers32758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta32759","meta32759",594614158,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers32758.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers32758.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers32758";

clojure.core.reducers.t_clojure$core$reducers32758.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"clojure.core.reducers/t_clojure$core$reducers32758");
});

clojure.core.reducers.__GT_t_clojure$core$reducers32758 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers32758(coll__$1,xf__$1,meta32759){
return (new clojure.core.reducers.t_clojure$core$reducers32758(coll__$1,xf__$1,meta32759));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers32758(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var args32761 = [];
var len__21023__auto___32764 = arguments.length;
var i__21024__auto___32765 = (0);
while(true){
if((i__21024__auto___32765 < len__21023__auto___32764)){
args32761.push((arguments[i__21024__auto___32765]));

var G__32766 = (i__21024__auto___32765 + (1));
i__21024__auto___32765 = G__32766;
continue;
} else {
}
break;
}

var G__32763 = args32761.length;
switch (G__32763) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32761.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__20250__auto__){
return clojure.core.reducers.map.call(null,f,x__20250__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__32768 = null;
var G__32768__0 = (function (){
return f1.call(null);
});
var G__32768__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__32768__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__32768 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__32768__0.call(this);
case 2:
return G__32768__2.call(this,ret,k);
case 3:
return G__32768__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32768.cljs$core$IFn$_invoke$arity$0 = G__32768__0;
G__32768.cljs$core$IFn$_invoke$arity$2 = G__32768__2;
G__32768.cljs$core$IFn$_invoke$arity$3 = G__32768__3;
return G__32768;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;

/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var args32769 = [];
var len__21023__auto___32772 = arguments.length;
var i__21024__auto___32773 = (0);
while(true){
if((i__21024__auto___32773 < len__21023__auto___32772)){
args32769.push((arguments[i__21024__auto___32773]));

var G__32774 = (i__21024__auto___32773 + (1));
i__21024__auto___32773 = G__32774;
continue;
} else {
}
break;
}

var G__32771 = args32769.length;
switch (G__32771) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32769.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__20250__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__20250__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__32776 = null;
var G__32776__0 = (function (){
return f1.call(null);
});
var G__32776__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__32776__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__32776 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__32776__0.call(this);
case 2:
return G__32776__2.call(this,ret,k);
case 3:
return G__32776__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32776.cljs$core$IFn$_invoke$arity$0 = G__32776__0;
G__32776.cljs$core$IFn$_invoke$arity$2 = G__32776__2;
G__32776.cljs$core$IFn$_invoke$arity$3 = G__32776__3;
return G__32776;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;

/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var args32777 = [];
var len__21023__auto___32780 = arguments.length;
var i__21024__auto___32781 = (0);
while(true){
if((i__21024__auto___32781 < len__21023__auto___32780)){
args32777.push((arguments[i__21024__auto___32781]));

var G__32782 = (i__21024__auto___32781 + (1));
i__21024__auto___32781 = G__32782;
continue;
} else {
}
break;
}

var G__32779 = args32777.length;
switch (G__32779) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32777.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__20250__auto__){
return clojure.core.reducers.filter.call(null,pred,x__20250__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__32784 = null;
var G__32784__0 = (function (){
return f1.call(null);
});
var G__32784__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__32784__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__32784 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__32784__0.call(this);
case 2:
return G__32784__2.call(this,ret,k);
case 3:
return G__32784__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32784.cljs$core$IFn$_invoke$arity$0 = G__32784__0;
G__32784.cljs$core$IFn$_invoke$arity$2 = G__32784__2;
G__32784.cljs$core$IFn$_invoke$arity$3 = G__32784__3;
return G__32784;
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
var args32785 = [];
var len__21023__auto___32788 = arguments.length;
var i__21024__auto___32789 = (0);
while(true){
if((i__21024__auto___32789 < len__21023__auto___32788)){
args32785.push((arguments[i__21024__auto___32789]));

var G__32790 = (i__21024__auto___32789 + (1));
i__21024__auto___32789 = G__32790;
continue;
} else {
}
break;
}

var G__32787 = args32785.length;
switch (G__32787) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32785.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__20250__auto__){
return clojure.core.reducers.flatten.call(null,x__20250__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__32792 = null;
var G__32792__0 = (function (){
return f1.call(null);
});
var G__32792__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__32792 = function(ret,v){
switch(arguments.length){
case 0:
return G__32792__0.call(this);
case 2:
return G__32792__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32792.cljs$core$IFn$_invoke$arity$0 = G__32792__0;
G__32792.cljs$core$IFn$_invoke$arity$2 = G__32792__2;
return G__32792;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;

/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var args32793 = [];
var len__21023__auto___32796 = arguments.length;
var i__21024__auto___32797 = (0);
while(true){
if((i__21024__auto___32797 < len__21023__auto___32796)){
args32793.push((arguments[i__21024__auto___32797]));

var G__32798 = (i__21024__auto___32797 + (1));
i__21024__auto___32797 = G__32798;
continue;
} else {
}
break;
}

var G__32795 = args32793.length;
switch (G__32795) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32793.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__20250__auto__){
return clojure.core.reducers.remove.call(null,pred,x__20250__auto__);
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
var args32800 = [];
var len__21023__auto___32803 = arguments.length;
var i__21024__auto___32804 = (0);
while(true){
if((i__21024__auto___32804 < len__21023__auto___32803)){
args32800.push((arguments[i__21024__auto___32804]));

var G__32805 = (i__21024__auto___32804 + (1));
i__21024__auto___32804 = G__32805;
continue;
} else {
}
break;
}

var G__32802 = args32800.length;
switch (G__32802) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32800.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__20250__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__20250__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__32807 = null;
var G__32807__0 = (function (){
return f1.call(null);
});
var G__32807__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__32807__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__32807 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__32807__0.call(this);
case 2:
return G__32807__2.call(this,ret,k);
case 3:
return G__32807__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32807.cljs$core$IFn$_invoke$arity$0 = G__32807__0;
G__32807.cljs$core$IFn$_invoke$arity$2 = G__32807__2;
G__32807.cljs$core$IFn$_invoke$arity$3 = G__32807__3;
return G__32807;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;

/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var args32808 = [];
var len__21023__auto___32811 = arguments.length;
var i__21024__auto___32812 = (0);
while(true){
if((i__21024__auto___32812 < len__21023__auto___32811)){
args32808.push((arguments[i__21024__auto___32812]));

var G__32813 = (i__21024__auto___32812 + (1));
i__21024__auto___32812 = G__32813;
continue;
} else {
}
break;
}

var G__32810 = args32808.length;
switch (G__32810) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32808.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__20250__auto__){
return clojure.core.reducers.take.call(null,n,x__20250__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__32815 = null;
var G__32815__0 = (function (){
return f1.call(null);
});
var G__32815__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__32815__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__32815 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__32815__0.call(this);
case 2:
return G__32815__2.call(this,ret,k);
case 3:
return G__32815__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32815.cljs$core$IFn$_invoke$arity$0 = G__32815__0;
G__32815.cljs$core$IFn$_invoke$arity$2 = G__32815__2;
G__32815.cljs$core$IFn$_invoke$arity$3 = G__32815__3;
return G__32815;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;

/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var args32816 = [];
var len__21023__auto___32819 = arguments.length;
var i__21024__auto___32820 = (0);
while(true){
if((i__21024__auto___32820 < len__21023__auto___32819)){
args32816.push((arguments[i__21024__auto___32820]));

var G__32821 = (i__21024__auto___32820 + (1));
i__21024__auto___32820 = G__32821;
continue;
} else {
}
break;
}

var G__32818 = args32816.length;
switch (G__32818) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32816.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__20250__auto__){
return clojure.core.reducers.drop.call(null,n,x__20250__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__32823 = null;
var G__32823__0 = (function (){
return f1.call(null);
});
var G__32823__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__32823__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__32823 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__32823__0.call(this);
case 2:
return G__32823__2.call(this,ret,k);
case 3:
return G__32823__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32823.cljs$core$IFn$_invoke$arity$0 = G__32823__0;
G__32823.cljs$core$IFn$_invoke$arity$2 = G__32823__2;
G__32823.cljs$core$IFn$_invoke$arity$3 = G__32823__3;
return G__32823;
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

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__20459__auto__,writer__20460__auto__,opt__20461__auto__){
return cljs.core._write.call(null,writer__20460__auto__,"clojure.core.reducers/Cat");
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
var args32824 = [];
var len__21023__auto___32827 = arguments.length;
var i__21024__auto___32828 = (0);
while(true){
if((i__21024__auto___32828 < len__21023__auto___32827)){
args32824.push((arguments[i__21024__auto___32828]));

var G__32829 = (i__21024__auto___32828 + (1));
i__21024__auto___32828 = G__32829;
continue;
} else {
}
break;
}

var G__32826 = args32824.length;
switch (G__32826) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32824.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__32831 = null;
var G__32831__0 = (function (){
return ctor.call(null);
});
var G__32831__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__32831 = function(left,right){
switch(arguments.length){
case 0:
return G__32831__0.call(this);
case 2:
return G__32831__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32831.cljs$core$IFn$_invoke$arity$0 = G__32831__0;
G__32831.cljs$core$IFn$_invoke$arity$2 = G__32831__2;
return G__32831;
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
var G__32833 = acc;
G__32833.push(x);

return G__32833;
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