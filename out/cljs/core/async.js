// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27053 = [];
var len__25911__auto___27059 = arguments.length;
var i__25912__auto___27060 = (0);
while(true){
if((i__25912__auto___27060 < len__25911__auto___27059)){
args27053.push((arguments[i__25912__auto___27060]));

var G__27061 = (i__25912__auto___27060 + (1));
i__25912__auto___27060 = G__27061;
continue;
} else {
}
break;
}

var G__27055 = args27053.length;
switch (G__27055) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27053.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27056 = (function (f,blockable,meta27057){
this.f = f;
this.blockable = blockable;
this.meta27057 = meta27057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27058,meta27057__$1){
var self__ = this;
var _27058__$1 = this;
return (new cljs.core.async.t_cljs$core$async27056(self__.f,self__.blockable,meta27057__$1));
});

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27058){
var self__ = this;
var _27058__$1 = this;
return self__.meta27057;
});

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27057","meta27057",1008337986,null)], null);
});

cljs.core.async.t_cljs$core$async27056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27056";

cljs.core.async.t_cljs$core$async27056.cljs$lang$ctorPrWriter = (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async27056");
});

cljs.core.async.__GT_t_cljs$core$async27056 = (function cljs$core$async$__GT_t_cljs$core$async27056(f__$1,blockable__$1,meta27057){
return (new cljs.core.async.t_cljs$core$async27056(f__$1,blockable__$1,meta27057));
});

}

return (new cljs.core.async.t_cljs$core$async27056(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27065 = [];
var len__25911__auto___27068 = arguments.length;
var i__25912__auto___27069 = (0);
while(true){
if((i__25912__auto___27069 < len__25911__auto___27068)){
args27065.push((arguments[i__25912__auto___27069]));

var G__27070 = (i__25912__auto___27069 + (1));
i__25912__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var G__27067 = args27065.length;
switch (G__27067) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27065.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27072 = [];
var len__25911__auto___27075 = arguments.length;
var i__25912__auto___27076 = (0);
while(true){
if((i__25912__auto___27076 < len__25911__auto___27075)){
args27072.push((arguments[i__25912__auto___27076]));

var G__27077 = (i__25912__auto___27076 + (1));
i__25912__auto___27076 = G__27077;
continue;
} else {
}
break;
}

var G__27074 = args27072.length;
switch (G__27074) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27072.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27079 = [];
var len__25911__auto___27082 = arguments.length;
var i__25912__auto___27083 = (0);
while(true){
if((i__25912__auto___27083 < len__25911__auto___27082)){
args27079.push((arguments[i__25912__auto___27083]));

var G__27084 = (i__25912__auto___27083 + (1));
i__25912__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var G__27081 = args27079.length;
switch (G__27081) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27079.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27086 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27086);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27086,ret){
return (function (){
return fn1.call(null,val_27086);
});})(val_27086,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27087 = [];
var len__25911__auto___27090 = arguments.length;
var i__25912__auto___27091 = (0);
while(true){
if((i__25912__auto___27091 < len__25911__auto___27090)){
args27087.push((arguments[i__25912__auto___27091]));

var G__27092 = (i__25912__auto___27091 + (1));
i__25912__auto___27091 = G__27092;
continue;
} else {
}
break;
}

var G__27089 = args27087.length;
switch (G__27089) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27087.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25721__auto___27094 = n;
var x_27095 = (0);
while(true){
if((x_27095 < n__25721__auto___27094)){
(a[x_27095] = (0));

var G__27096 = (x_27095 + (1));
x_27095 = G__27096;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27097 = (i + (1));
i = G__27097;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27101 = (function (flag,meta27102){
this.flag = flag;
this.meta27102 = meta27102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27103,meta27102__$1){
var self__ = this;
var _27103__$1 = this;
return (new cljs.core.async.t_cljs$core$async27101(self__.flag,meta27102__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27103){
var self__ = this;
var _27103__$1 = this;
return self__.meta27102;
});})(flag))
;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27101.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27102","meta27102",-483276356,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27101";

cljs.core.async.t_cljs$core$async27101.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async27101");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27101 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27101(flag__$1,meta27102){
return (new cljs.core.async.t_cljs$core$async27101(flag__$1,meta27102));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27101(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27107 = (function (flag,cb,meta27108){
this.flag = flag;
this.cb = cb;
this.meta27108 = meta27108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27109,meta27108__$1){
var self__ = this;
var _27109__$1 = this;
return (new cljs.core.async.t_cljs$core$async27107(self__.flag,self__.cb,meta27108__$1));
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27109){
var self__ = this;
var _27109__$1 = this;
return self__.meta27108;
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27108","meta27108",-1112890230,null)], null);
});

cljs.core.async.t_cljs$core$async27107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27107";

cljs.core.async.t_cljs$core$async27107.cljs$lang$ctorPrWriter = (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async27107");
});

cljs.core.async.__GT_t_cljs$core$async27107 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27107(flag__$1,cb__$1,meta27108){
return (new cljs.core.async.t_cljs$core$async27107(flag__$1,cb__$1,meta27108));
});

}

return (new cljs.core.async.t_cljs$core$async27107(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27110_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27110_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27111_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27111_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24803__auto__ = wport;
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27112 = (i + (1));
i = G__27112;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24803__auto__ = ret;
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24791__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24791__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25918__auto__ = [];
var len__25911__auto___27118 = arguments.length;
var i__25912__auto___27119 = (0);
while(true){
if((i__25912__auto___27119 < len__25911__auto___27118)){
args__25918__auto__.push((arguments[i__25912__auto___27119]));

var G__27120 = (i__25912__auto___27119 + (1));
i__25912__auto___27119 = G__27120;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((1) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25919__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27115){
var map__27116 = p__27115;
var map__27116__$1 = ((((!((map__27116 == null)))?((((map__27116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27116):map__27116);
var opts = map__27116__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27113){
var G__27114 = cljs.core.first.call(null,seq27113);
var seq27113__$1 = cljs.core.next.call(null,seq27113);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27114,seq27113__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27121 = [];
var len__25911__auto___27171 = arguments.length;
var i__25912__auto___27172 = (0);
while(true){
if((i__25912__auto___27172 < len__25911__auto___27171)){
args27121.push((arguments[i__25912__auto___27172]));

var G__27173 = (i__25912__auto___27172 + (1));
i__25912__auto___27172 = G__27173;
continue;
} else {
}
break;
}

var G__27123 = args27121.length;
switch (G__27123) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27121.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27008__auto___27175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___27175){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___27175){
return (function (state_27147){
var state_val_27148 = (state_27147[(1)]);
if((state_val_27148 === (7))){
var inst_27143 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27149_27176 = state_27147__$1;
(statearr_27149_27176[(2)] = inst_27143);

(statearr_27149_27176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (1))){
var state_27147__$1 = state_27147;
var statearr_27150_27177 = state_27147__$1;
(statearr_27150_27177[(2)] = null);

(statearr_27150_27177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (4))){
var inst_27126 = (state_27147[(7)]);
var inst_27126__$1 = (state_27147[(2)]);
var inst_27127 = (inst_27126__$1 == null);
var state_27147__$1 = (function (){var statearr_27151 = state_27147;
(statearr_27151[(7)] = inst_27126__$1);

return statearr_27151;
})();
if(cljs.core.truth_(inst_27127)){
var statearr_27152_27178 = state_27147__$1;
(statearr_27152_27178[(1)] = (5));

} else {
var statearr_27153_27179 = state_27147__$1;
(statearr_27153_27179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (13))){
var state_27147__$1 = state_27147;
var statearr_27154_27180 = state_27147__$1;
(statearr_27154_27180[(2)] = null);

(statearr_27154_27180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (6))){
var inst_27126 = (state_27147[(7)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27147__$1,(11),to,inst_27126);
} else {
if((state_val_27148 === (3))){
var inst_27145 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27147__$1,inst_27145);
} else {
if((state_val_27148 === (12))){
var state_27147__$1 = state_27147;
var statearr_27155_27181 = state_27147__$1;
(statearr_27155_27181[(2)] = null);

(statearr_27155_27181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (2))){
var state_27147__$1 = state_27147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27147__$1,(4),from);
} else {
if((state_val_27148 === (11))){
var inst_27136 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
if(cljs.core.truth_(inst_27136)){
var statearr_27156_27182 = state_27147__$1;
(statearr_27156_27182[(1)] = (12));

} else {
var statearr_27157_27183 = state_27147__$1;
(statearr_27157_27183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (9))){
var state_27147__$1 = state_27147;
var statearr_27158_27184 = state_27147__$1;
(statearr_27158_27184[(2)] = null);

(statearr_27158_27184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (5))){
var state_27147__$1 = state_27147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27159_27185 = state_27147__$1;
(statearr_27159_27185[(1)] = (8));

} else {
var statearr_27160_27186 = state_27147__$1;
(statearr_27160_27186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (14))){
var inst_27141 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27161_27187 = state_27147__$1;
(statearr_27161_27187[(2)] = inst_27141);

(statearr_27161_27187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (10))){
var inst_27133 = (state_27147[(2)]);
var state_27147__$1 = state_27147;
var statearr_27162_27188 = state_27147__$1;
(statearr_27162_27188[(2)] = inst_27133);

(statearr_27162_27188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27148 === (8))){
var inst_27130 = cljs.core.async.close_BANG_.call(null,to);
var state_27147__$1 = state_27147;
var statearr_27163_27189 = state_27147__$1;
(statearr_27163_27189[(2)] = inst_27130);

(statearr_27163_27189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___27175))
;
return ((function (switch__26896__auto__,c__27008__auto___27175){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_27167 = [null,null,null,null,null,null,null,null];
(statearr_27167[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_27167[(1)] = (1));

return statearr_27167;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_27147){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27168){if((e27168 instanceof Object)){
var ex__26900__auto__ = e27168;
var statearr_27169_27190 = state_27147;
(statearr_27169_27190[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27191 = state_27147;
state_27147 = G__27191;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_27147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_27147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___27175))
})();
var state__27010__auto__ = (function (){var statearr_27170 = f__27009__auto__.call(null);
(statearr_27170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___27175);

return statearr_27170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___27175))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27379){
var vec__27380 = p__27379;
var v = cljs.core.nth.call(null,vec__27380,(0),null);
var p = cljs.core.nth.call(null,vec__27380,(1),null);
var job = vec__27380;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27008__auto___27566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___27566,res,vec__27380,v,p,job,jobs,results){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___27566,res,vec__27380,v,p,job,jobs,results){
return (function (state_27387){
var state_val_27388 = (state_27387[(1)]);
if((state_val_27388 === (1))){
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27387__$1,(2),res,v);
} else {
if((state_val_27388 === (2))){
var inst_27384 = (state_27387[(2)]);
var inst_27385 = cljs.core.async.close_BANG_.call(null,res);
var state_27387__$1 = (function (){var statearr_27389 = state_27387;
(statearr_27389[(7)] = inst_27384);

return statearr_27389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else {
return null;
}
}
});})(c__27008__auto___27566,res,vec__27380,v,p,job,jobs,results))
;
return ((function (switch__26896__auto__,c__27008__auto___27566,res,vec__27380,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1 = (function (state_27387){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__26900__auto__ = e27394;
var statearr_27395_27567 = state_27387;
(statearr_27395_27567[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27568 = state_27387;
state_27387 = G__27568;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___27566,res,vec__27380,v,p,job,jobs,results))
})();
var state__27010__auto__ = (function (){var statearr_27396 = f__27009__auto__.call(null);
(statearr_27396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___27566);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___27566,res,vec__27380,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27397){
var vec__27398 = p__27397;
var v = cljs.core.nth.call(null,vec__27398,(0),null);
var p = cljs.core.nth.call(null,vec__27398,(1),null);
var job = vec__27398;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25721__auto___27569 = n;
var __27570 = (0);
while(true){
if((__27570 < n__25721__auto___27569)){
var G__27401_27571 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27401_27571) {
case "compute":
var c__27008__auto___27573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27570,c__27008__auto___27573,G__27401_27571,n__25721__auto___27569,jobs,results,process,async){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (__27570,c__27008__auto___27573,G__27401_27571,n__25721__auto___27569,jobs,results,process,async){
return (function (state_27414){
var state_val_27415 = (state_27414[(1)]);
if((state_val_27415 === (1))){
var state_27414__$1 = state_27414;
var statearr_27416_27574 = state_27414__$1;
(statearr_27416_27574[(2)] = null);

(statearr_27416_27574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (2))){
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27414__$1,(4),jobs);
} else {
if((state_val_27415 === (3))){
var inst_27412 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27414__$1,inst_27412);
} else {
if((state_val_27415 === (4))){
var inst_27404 = (state_27414[(2)]);
var inst_27405 = process.call(null,inst_27404);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27405)){
var statearr_27417_27575 = state_27414__$1;
(statearr_27417_27575[(1)] = (5));

} else {
var statearr_27418_27576 = state_27414__$1;
(statearr_27418_27576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (5))){
var state_27414__$1 = state_27414;
var statearr_27419_27577 = state_27414__$1;
(statearr_27419_27577[(2)] = null);

(statearr_27419_27577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (6))){
var state_27414__$1 = state_27414;
var statearr_27420_27578 = state_27414__$1;
(statearr_27420_27578[(2)] = null);

(statearr_27420_27578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (7))){
var inst_27410 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27421_27579 = state_27414__$1;
(statearr_27421_27579[(2)] = inst_27410);

(statearr_27421_27579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27570,c__27008__auto___27573,G__27401_27571,n__25721__auto___27569,jobs,results,process,async))
;
return ((function (__27570,switch__26896__auto__,c__27008__auto___27573,G__27401_27571,n__25721__auto___27569,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0 = (function (){
var statearr_27425 = [null,null,null,null,null,null,null];
(statearr_27425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__);

(statearr_27425[(1)] = (1));

return statearr_27425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1 = (function (state_27414){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27426){if((e27426 instanceof Object)){
var ex__26900__auto__ = e27426;
var statearr_27427_27580 = state_27414;
(statearr_27427_27580[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27581 = state_27414;
state_27414 = G__27581;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = function(state_27414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1.call(this,state_27414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__;
})()
;})(__27570,switch__26896__auto__,c__27008__auto___27573,G__27401_27571,n__25721__auto___27569,jobs,results,process,async))
})();
var state__27010__auto__ = (function (){var statearr_27428 = f__27009__auto__.call(null);
(statearr_27428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___27573);

return statearr_27428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(__27570,c__27008__auto___27573,G__27401_27571,n__25721__auto___27569,jobs,results,process,async))
);


break;
case "async":
var c__27008__auto___27582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27570,c__27008__auto___27582,G__27401_27571,n__25721__auto___27569,jobs,results,process,async){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (__27570,c__27008__auto___27582,G__27401_27571,n__25721__auto___27569,jobs,results,process,async){
return (function (state_27441){
var state_val_27442 = (state_27441[(1)]);
if((state_val_27442 === (1))){
var state_27441__$1 = state_27441;
var statearr_27443_27583 = state_27441__$1;
(statearr_27443_27583[(2)] = null);

(statearr_27443_27583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (2))){
var state_27441__$1 = state_27441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27441__$1,(4),jobs);
} else {
if((state_val_27442 === (3))){
var inst_27439 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27441__$1,inst_27439);
} else {
if((state_val_27442 === (4))){
var inst_27431 = (state_27441[(2)]);
var inst_27432 = async.call(null,inst_27431);
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27432)){
var statearr_27444_27584 = state_27441__$1;
(statearr_27444_27584[(1)] = (5));

} else {
var statearr_27445_27585 = state_27441__$1;
(statearr_27445_27585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (5))){
var state_27441__$1 = state_27441;
var statearr_27446_27586 = state_27441__$1;
(statearr_27446_27586[(2)] = null);

(statearr_27446_27586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (6))){
var state_27441__$1 = state_27441;
var statearr_27447_27587 = state_27441__$1;
(statearr_27447_27587[(2)] = null);

(statearr_27447_27587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (7))){
var inst_27437 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
var statearr_27448_27588 = state_27441__$1;
(statearr_27448_27588[(2)] = inst_27437);

(statearr_27448_27588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27570,c__27008__auto___27582,G__27401_27571,n__25721__auto___27569,jobs,results,process,async))
;
return ((function (__27570,switch__26896__auto__,c__27008__auto___27582,G__27401_27571,n__25721__auto___27569,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0 = (function (){
var statearr_27452 = [null,null,null,null,null,null,null];
(statearr_27452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__);

(statearr_27452[(1)] = (1));

return statearr_27452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1 = (function (state_27441){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27453){if((e27453 instanceof Object)){
var ex__26900__auto__ = e27453;
var statearr_27454_27589 = state_27441;
(statearr_27454_27589[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27590 = state_27441;
state_27441 = G__27590;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = function(state_27441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1.call(this,state_27441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__;
})()
;})(__27570,switch__26896__auto__,c__27008__auto___27582,G__27401_27571,n__25721__auto___27569,jobs,results,process,async))
})();
var state__27010__auto__ = (function (){var statearr_27455 = f__27009__auto__.call(null);
(statearr_27455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___27582);

return statearr_27455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(__27570,c__27008__auto___27582,G__27401_27571,n__25721__auto___27569,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27591 = (__27570 + (1));
__27570 = G__27591;
continue;
} else {
}
break;
}

var c__27008__auto___27592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___27592,jobs,results,process,async){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___27592,jobs,results,process,async){
return (function (state_27477){
var state_val_27478 = (state_27477[(1)]);
if((state_val_27478 === (1))){
var state_27477__$1 = state_27477;
var statearr_27479_27593 = state_27477__$1;
(statearr_27479_27593[(2)] = null);

(statearr_27479_27593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (2))){
var state_27477__$1 = state_27477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27477__$1,(4),from);
} else {
if((state_val_27478 === (3))){
var inst_27475 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27477__$1,inst_27475);
} else {
if((state_val_27478 === (4))){
var inst_27458 = (state_27477[(7)]);
var inst_27458__$1 = (state_27477[(2)]);
var inst_27459 = (inst_27458__$1 == null);
var state_27477__$1 = (function (){var statearr_27480 = state_27477;
(statearr_27480[(7)] = inst_27458__$1);

return statearr_27480;
})();
if(cljs.core.truth_(inst_27459)){
var statearr_27481_27594 = state_27477__$1;
(statearr_27481_27594[(1)] = (5));

} else {
var statearr_27482_27595 = state_27477__$1;
(statearr_27482_27595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (5))){
var inst_27461 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27477__$1 = state_27477;
var statearr_27483_27596 = state_27477__$1;
(statearr_27483_27596[(2)] = inst_27461);

(statearr_27483_27596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (6))){
var inst_27458 = (state_27477[(7)]);
var inst_27463 = (state_27477[(8)]);
var inst_27463__$1 = cljs.core.async.chan.call(null,(1));
var inst_27464 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27465 = [inst_27458,inst_27463__$1];
var inst_27466 = (new cljs.core.PersistentVector(null,2,(5),inst_27464,inst_27465,null));
var state_27477__$1 = (function (){var statearr_27484 = state_27477;
(statearr_27484[(8)] = inst_27463__$1);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27477__$1,(8),jobs,inst_27466);
} else {
if((state_val_27478 === (7))){
var inst_27473 = (state_27477[(2)]);
var state_27477__$1 = state_27477;
var statearr_27485_27597 = state_27477__$1;
(statearr_27485_27597[(2)] = inst_27473);

(statearr_27485_27597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27478 === (8))){
var inst_27463 = (state_27477[(8)]);
var inst_27468 = (state_27477[(2)]);
var state_27477__$1 = (function (){var statearr_27486 = state_27477;
(statearr_27486[(9)] = inst_27468);

return statearr_27486;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27477__$1,(9),results,inst_27463);
} else {
if((state_val_27478 === (9))){
var inst_27470 = (state_27477[(2)]);
var state_27477__$1 = (function (){var statearr_27487 = state_27477;
(statearr_27487[(10)] = inst_27470);

return statearr_27487;
})();
var statearr_27488_27598 = state_27477__$1;
(statearr_27488_27598[(2)] = null);

(statearr_27488_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___27592,jobs,results,process,async))
;
return ((function (switch__26896__auto__,c__27008__auto___27592,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0 = (function (){
var statearr_27492 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__);

(statearr_27492[(1)] = (1));

return statearr_27492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1 = (function (state_27477){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27493){if((e27493 instanceof Object)){
var ex__26900__auto__ = e27493;
var statearr_27494_27599 = state_27477;
(statearr_27494_27599[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27600 = state_27477;
state_27477 = G__27600;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = function(state_27477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1.call(this,state_27477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___27592,jobs,results,process,async))
})();
var state__27010__auto__ = (function (){var statearr_27495 = f__27009__auto__.call(null);
(statearr_27495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___27592);

return statearr_27495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___27592,jobs,results,process,async))
);


var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__,jobs,results,process,async){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__,jobs,results,process,async){
return (function (state_27533){
var state_val_27534 = (state_27533[(1)]);
if((state_val_27534 === (7))){
var inst_27529 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
var statearr_27535_27601 = state_27533__$1;
(statearr_27535_27601[(2)] = inst_27529);

(statearr_27535_27601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (20))){
var state_27533__$1 = state_27533;
var statearr_27536_27602 = state_27533__$1;
(statearr_27536_27602[(2)] = null);

(statearr_27536_27602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (1))){
var state_27533__$1 = state_27533;
var statearr_27537_27603 = state_27533__$1;
(statearr_27537_27603[(2)] = null);

(statearr_27537_27603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (4))){
var inst_27498 = (state_27533[(7)]);
var inst_27498__$1 = (state_27533[(2)]);
var inst_27499 = (inst_27498__$1 == null);
var state_27533__$1 = (function (){var statearr_27538 = state_27533;
(statearr_27538[(7)] = inst_27498__$1);

return statearr_27538;
})();
if(cljs.core.truth_(inst_27499)){
var statearr_27539_27604 = state_27533__$1;
(statearr_27539_27604[(1)] = (5));

} else {
var statearr_27540_27605 = state_27533__$1;
(statearr_27540_27605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (15))){
var inst_27511 = (state_27533[(8)]);
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27533__$1,(18),to,inst_27511);
} else {
if((state_val_27534 === (21))){
var inst_27524 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
var statearr_27541_27606 = state_27533__$1;
(statearr_27541_27606[(2)] = inst_27524);

(statearr_27541_27606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (13))){
var inst_27526 = (state_27533[(2)]);
var state_27533__$1 = (function (){var statearr_27542 = state_27533;
(statearr_27542[(9)] = inst_27526);

return statearr_27542;
})();
var statearr_27543_27607 = state_27533__$1;
(statearr_27543_27607[(2)] = null);

(statearr_27543_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (6))){
var inst_27498 = (state_27533[(7)]);
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27533__$1,(11),inst_27498);
} else {
if((state_val_27534 === (17))){
var inst_27519 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
if(cljs.core.truth_(inst_27519)){
var statearr_27544_27608 = state_27533__$1;
(statearr_27544_27608[(1)] = (19));

} else {
var statearr_27545_27609 = state_27533__$1;
(statearr_27545_27609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (3))){
var inst_27531 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27533__$1,inst_27531);
} else {
if((state_val_27534 === (12))){
var inst_27508 = (state_27533[(10)]);
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27533__$1,(14),inst_27508);
} else {
if((state_val_27534 === (2))){
var state_27533__$1 = state_27533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27533__$1,(4),results);
} else {
if((state_val_27534 === (19))){
var state_27533__$1 = state_27533;
var statearr_27546_27610 = state_27533__$1;
(statearr_27546_27610[(2)] = null);

(statearr_27546_27610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (11))){
var inst_27508 = (state_27533[(2)]);
var state_27533__$1 = (function (){var statearr_27547 = state_27533;
(statearr_27547[(10)] = inst_27508);

return statearr_27547;
})();
var statearr_27548_27611 = state_27533__$1;
(statearr_27548_27611[(2)] = null);

(statearr_27548_27611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (9))){
var state_27533__$1 = state_27533;
var statearr_27549_27612 = state_27533__$1;
(statearr_27549_27612[(2)] = null);

(statearr_27549_27612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (5))){
var state_27533__$1 = state_27533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27550_27613 = state_27533__$1;
(statearr_27550_27613[(1)] = (8));

} else {
var statearr_27551_27614 = state_27533__$1;
(statearr_27551_27614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (14))){
var inst_27511 = (state_27533[(8)]);
var inst_27513 = (state_27533[(11)]);
var inst_27511__$1 = (state_27533[(2)]);
var inst_27512 = (inst_27511__$1 == null);
var inst_27513__$1 = cljs.core.not.call(null,inst_27512);
var state_27533__$1 = (function (){var statearr_27552 = state_27533;
(statearr_27552[(8)] = inst_27511__$1);

(statearr_27552[(11)] = inst_27513__$1);

return statearr_27552;
})();
if(inst_27513__$1){
var statearr_27553_27615 = state_27533__$1;
(statearr_27553_27615[(1)] = (15));

} else {
var statearr_27554_27616 = state_27533__$1;
(statearr_27554_27616[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (16))){
var inst_27513 = (state_27533[(11)]);
var state_27533__$1 = state_27533;
var statearr_27555_27617 = state_27533__$1;
(statearr_27555_27617[(2)] = inst_27513);

(statearr_27555_27617[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (10))){
var inst_27505 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
var statearr_27556_27618 = state_27533__$1;
(statearr_27556_27618[(2)] = inst_27505);

(statearr_27556_27618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (18))){
var inst_27516 = (state_27533[(2)]);
var state_27533__$1 = state_27533;
var statearr_27557_27619 = state_27533__$1;
(statearr_27557_27619[(2)] = inst_27516);

(statearr_27557_27619[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27534 === (8))){
var inst_27502 = cljs.core.async.close_BANG_.call(null,to);
var state_27533__$1 = state_27533;
var statearr_27558_27620 = state_27533__$1;
(statearr_27558_27620[(2)] = inst_27502);

(statearr_27558_27620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto__,jobs,results,process,async))
;
return ((function (switch__26896__auto__,c__27008__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0 = (function (){
var statearr_27562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__);

(statearr_27562[(1)] = (1));

return statearr_27562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1 = (function (state_27533){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object)){
var ex__26900__auto__ = e27563;
var statearr_27564_27621 = state_27533;
(statearr_27564_27621[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27622 = state_27533;
state_27533 = G__27622;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__ = function(state_27533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1.call(this,state_27533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26897__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__,jobs,results,process,async))
})();
var state__27010__auto__ = (function (){var statearr_27565 = f__27009__auto__.call(null);
(statearr_27565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__,jobs,results,process,async))
);

return c__27008__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27623 = [];
var len__25911__auto___27626 = arguments.length;
var i__25912__auto___27627 = (0);
while(true){
if((i__25912__auto___27627 < len__25911__auto___27626)){
args27623.push((arguments[i__25912__auto___27627]));

var G__27628 = (i__25912__auto___27627 + (1));
i__25912__auto___27627 = G__27628;
continue;
} else {
}
break;
}

var G__27625 = args27623.length;
switch (G__27625) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27623.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27630 = [];
var len__25911__auto___27633 = arguments.length;
var i__25912__auto___27634 = (0);
while(true){
if((i__25912__auto___27634 < len__25911__auto___27633)){
args27630.push((arguments[i__25912__auto___27634]));

var G__27635 = (i__25912__auto___27634 + (1));
i__25912__auto___27634 = G__27635;
continue;
} else {
}
break;
}

var G__27632 = args27630.length;
switch (G__27632) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27630.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27637 = [];
var len__25911__auto___27690 = arguments.length;
var i__25912__auto___27691 = (0);
while(true){
if((i__25912__auto___27691 < len__25911__auto___27690)){
args27637.push((arguments[i__25912__auto___27691]));

var G__27692 = (i__25912__auto___27691 + (1));
i__25912__auto___27691 = G__27692;
continue;
} else {
}
break;
}

var G__27639 = args27637.length;
switch (G__27639) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27637.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27008__auto___27694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___27694,tc,fc){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___27694,tc,fc){
return (function (state_27665){
var state_val_27666 = (state_27665[(1)]);
if((state_val_27666 === (7))){
var inst_27661 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
var statearr_27667_27695 = state_27665__$1;
(statearr_27667_27695[(2)] = inst_27661);

(statearr_27667_27695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (1))){
var state_27665__$1 = state_27665;
var statearr_27668_27696 = state_27665__$1;
(statearr_27668_27696[(2)] = null);

(statearr_27668_27696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (4))){
var inst_27642 = (state_27665[(7)]);
var inst_27642__$1 = (state_27665[(2)]);
var inst_27643 = (inst_27642__$1 == null);
var state_27665__$1 = (function (){var statearr_27669 = state_27665;
(statearr_27669[(7)] = inst_27642__$1);

return statearr_27669;
})();
if(cljs.core.truth_(inst_27643)){
var statearr_27670_27697 = state_27665__$1;
(statearr_27670_27697[(1)] = (5));

} else {
var statearr_27671_27698 = state_27665__$1;
(statearr_27671_27698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (13))){
var state_27665__$1 = state_27665;
var statearr_27672_27699 = state_27665__$1;
(statearr_27672_27699[(2)] = null);

(statearr_27672_27699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (6))){
var inst_27642 = (state_27665[(7)]);
var inst_27648 = p.call(null,inst_27642);
var state_27665__$1 = state_27665;
if(cljs.core.truth_(inst_27648)){
var statearr_27673_27700 = state_27665__$1;
(statearr_27673_27700[(1)] = (9));

} else {
var statearr_27674_27701 = state_27665__$1;
(statearr_27674_27701[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (3))){
var inst_27663 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27665__$1,inst_27663);
} else {
if((state_val_27666 === (12))){
var state_27665__$1 = state_27665;
var statearr_27675_27702 = state_27665__$1;
(statearr_27675_27702[(2)] = null);

(statearr_27675_27702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (2))){
var state_27665__$1 = state_27665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27665__$1,(4),ch);
} else {
if((state_val_27666 === (11))){
var inst_27642 = (state_27665[(7)]);
var inst_27652 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27665__$1,(8),inst_27652,inst_27642);
} else {
if((state_val_27666 === (9))){
var state_27665__$1 = state_27665;
var statearr_27676_27703 = state_27665__$1;
(statearr_27676_27703[(2)] = tc);

(statearr_27676_27703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (5))){
var inst_27645 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27646 = cljs.core.async.close_BANG_.call(null,fc);
var state_27665__$1 = (function (){var statearr_27677 = state_27665;
(statearr_27677[(8)] = inst_27645);

return statearr_27677;
})();
var statearr_27678_27704 = state_27665__$1;
(statearr_27678_27704[(2)] = inst_27646);

(statearr_27678_27704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (14))){
var inst_27659 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
var statearr_27679_27705 = state_27665__$1;
(statearr_27679_27705[(2)] = inst_27659);

(statearr_27679_27705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (10))){
var state_27665__$1 = state_27665;
var statearr_27680_27706 = state_27665__$1;
(statearr_27680_27706[(2)] = fc);

(statearr_27680_27706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27666 === (8))){
var inst_27654 = (state_27665[(2)]);
var state_27665__$1 = state_27665;
if(cljs.core.truth_(inst_27654)){
var statearr_27681_27707 = state_27665__$1;
(statearr_27681_27707[(1)] = (12));

} else {
var statearr_27682_27708 = state_27665__$1;
(statearr_27682_27708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___27694,tc,fc))
;
return ((function (switch__26896__auto__,c__27008__auto___27694,tc,fc){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_27686 = [null,null,null,null,null,null,null,null,null];
(statearr_27686[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_27686[(1)] = (1));

return statearr_27686;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_27665){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27687){if((e27687 instanceof Object)){
var ex__26900__auto__ = e27687;
var statearr_27688_27709 = state_27665;
(statearr_27688_27709[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27710 = state_27665;
state_27665 = G__27710;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_27665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_27665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___27694,tc,fc))
})();
var state__27010__auto__ = (function (){var statearr_27689 = f__27009__auto__.call(null);
(statearr_27689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___27694);

return statearr_27689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___27694,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__){
return (function (state_27774){
var state_val_27775 = (state_27774[(1)]);
if((state_val_27775 === (7))){
var inst_27770 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27776_27797 = state_27774__$1;
(statearr_27776_27797[(2)] = inst_27770);

(statearr_27776_27797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (1))){
var inst_27754 = init;
var state_27774__$1 = (function (){var statearr_27777 = state_27774;
(statearr_27777[(7)] = inst_27754);

return statearr_27777;
})();
var statearr_27778_27798 = state_27774__$1;
(statearr_27778_27798[(2)] = null);

(statearr_27778_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (4))){
var inst_27757 = (state_27774[(8)]);
var inst_27757__$1 = (state_27774[(2)]);
var inst_27758 = (inst_27757__$1 == null);
var state_27774__$1 = (function (){var statearr_27779 = state_27774;
(statearr_27779[(8)] = inst_27757__$1);

return statearr_27779;
})();
if(cljs.core.truth_(inst_27758)){
var statearr_27780_27799 = state_27774__$1;
(statearr_27780_27799[(1)] = (5));

} else {
var statearr_27781_27800 = state_27774__$1;
(statearr_27781_27800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (6))){
var inst_27757 = (state_27774[(8)]);
var inst_27761 = (state_27774[(9)]);
var inst_27754 = (state_27774[(7)]);
var inst_27761__$1 = f.call(null,inst_27754,inst_27757);
var inst_27762 = cljs.core.reduced_QMARK_.call(null,inst_27761__$1);
var state_27774__$1 = (function (){var statearr_27782 = state_27774;
(statearr_27782[(9)] = inst_27761__$1);

return statearr_27782;
})();
if(inst_27762){
var statearr_27783_27801 = state_27774__$1;
(statearr_27783_27801[(1)] = (8));

} else {
var statearr_27784_27802 = state_27774__$1;
(statearr_27784_27802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (3))){
var inst_27772 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27774__$1,inst_27772);
} else {
if((state_val_27775 === (2))){
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27774__$1,(4),ch);
} else {
if((state_val_27775 === (9))){
var inst_27761 = (state_27774[(9)]);
var inst_27754 = inst_27761;
var state_27774__$1 = (function (){var statearr_27785 = state_27774;
(statearr_27785[(7)] = inst_27754);

return statearr_27785;
})();
var statearr_27786_27803 = state_27774__$1;
(statearr_27786_27803[(2)] = null);

(statearr_27786_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (5))){
var inst_27754 = (state_27774[(7)]);
var state_27774__$1 = state_27774;
var statearr_27787_27804 = state_27774__$1;
(statearr_27787_27804[(2)] = inst_27754);

(statearr_27787_27804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (10))){
var inst_27768 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27788_27805 = state_27774__$1;
(statearr_27788_27805[(2)] = inst_27768);

(statearr_27788_27805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (8))){
var inst_27761 = (state_27774[(9)]);
var inst_27764 = cljs.core.deref.call(null,inst_27761);
var state_27774__$1 = state_27774;
var statearr_27789_27806 = state_27774__$1;
(statearr_27789_27806[(2)] = inst_27764);

(statearr_27789_27806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto__))
;
return ((function (switch__26896__auto__,c__27008__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26897__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26897__auto____0 = (function (){
var statearr_27793 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27793[(0)] = cljs$core$async$reduce_$_state_machine__26897__auto__);

(statearr_27793[(1)] = (1));

return statearr_27793;
});
var cljs$core$async$reduce_$_state_machine__26897__auto____1 = (function (state_27774){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27794){if((e27794 instanceof Object)){
var ex__26900__auto__ = e27794;
var statearr_27795_27807 = state_27774;
(statearr_27795_27807[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27808 = state_27774;
state_27774 = G__27808;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26897__auto__ = function(state_27774){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26897__auto____1.call(this,state_27774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26897__auto____0;
cljs$core$async$reduce_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26897__auto____1;
return cljs$core$async$reduce_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__))
})();
var state__27010__auto__ = (function (){var statearr_27796 = f__27009__auto__.call(null);
(statearr_27796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_27796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__))
);

return c__27008__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27809 = [];
var len__25911__auto___27861 = arguments.length;
var i__25912__auto___27862 = (0);
while(true){
if((i__25912__auto___27862 < len__25911__auto___27861)){
args27809.push((arguments[i__25912__auto___27862]));

var G__27863 = (i__25912__auto___27862 + (1));
i__25912__auto___27862 = G__27863;
continue;
} else {
}
break;
}

var G__27811 = args27809.length;
switch (G__27811) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27809.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__){
return (function (state_27836){
var state_val_27837 = (state_27836[(1)]);
if((state_val_27837 === (7))){
var inst_27818 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27838_27865 = state_27836__$1;
(statearr_27838_27865[(2)] = inst_27818);

(statearr_27838_27865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (1))){
var inst_27812 = cljs.core.seq.call(null,coll);
var inst_27813 = inst_27812;
var state_27836__$1 = (function (){var statearr_27839 = state_27836;
(statearr_27839[(7)] = inst_27813);

return statearr_27839;
})();
var statearr_27840_27866 = state_27836__$1;
(statearr_27840_27866[(2)] = null);

(statearr_27840_27866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (4))){
var inst_27813 = (state_27836[(7)]);
var inst_27816 = cljs.core.first.call(null,inst_27813);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27836__$1,(7),ch,inst_27816);
} else {
if((state_val_27837 === (13))){
var inst_27830 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27841_27867 = state_27836__$1;
(statearr_27841_27867[(2)] = inst_27830);

(statearr_27841_27867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (6))){
var inst_27821 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
if(cljs.core.truth_(inst_27821)){
var statearr_27842_27868 = state_27836__$1;
(statearr_27842_27868[(1)] = (8));

} else {
var statearr_27843_27869 = state_27836__$1;
(statearr_27843_27869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (3))){
var inst_27834 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27836__$1,inst_27834);
} else {
if((state_val_27837 === (12))){
var state_27836__$1 = state_27836;
var statearr_27844_27870 = state_27836__$1;
(statearr_27844_27870[(2)] = null);

(statearr_27844_27870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (2))){
var inst_27813 = (state_27836[(7)]);
var state_27836__$1 = state_27836;
if(cljs.core.truth_(inst_27813)){
var statearr_27845_27871 = state_27836__$1;
(statearr_27845_27871[(1)] = (4));

} else {
var statearr_27846_27872 = state_27836__$1;
(statearr_27846_27872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (11))){
var inst_27827 = cljs.core.async.close_BANG_.call(null,ch);
var state_27836__$1 = state_27836;
var statearr_27847_27873 = state_27836__$1;
(statearr_27847_27873[(2)] = inst_27827);

(statearr_27847_27873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (9))){
var state_27836__$1 = state_27836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27848_27874 = state_27836__$1;
(statearr_27848_27874[(1)] = (11));

} else {
var statearr_27849_27875 = state_27836__$1;
(statearr_27849_27875[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (5))){
var inst_27813 = (state_27836[(7)]);
var state_27836__$1 = state_27836;
var statearr_27850_27876 = state_27836__$1;
(statearr_27850_27876[(2)] = inst_27813);

(statearr_27850_27876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (10))){
var inst_27832 = (state_27836[(2)]);
var state_27836__$1 = state_27836;
var statearr_27851_27877 = state_27836__$1;
(statearr_27851_27877[(2)] = inst_27832);

(statearr_27851_27877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27837 === (8))){
var inst_27813 = (state_27836[(7)]);
var inst_27823 = cljs.core.next.call(null,inst_27813);
var inst_27813__$1 = inst_27823;
var state_27836__$1 = (function (){var statearr_27852 = state_27836;
(statearr_27852[(7)] = inst_27813__$1);

return statearr_27852;
})();
var statearr_27853_27878 = state_27836__$1;
(statearr_27853_27878[(2)] = null);

(statearr_27853_27878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto__))
;
return ((function (switch__26896__auto__,c__27008__auto__){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_27857 = [null,null,null,null,null,null,null,null];
(statearr_27857[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_27857[(1)] = (1));

return statearr_27857;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_27836){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_27836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e27858){if((e27858 instanceof Object)){
var ex__26900__auto__ = e27858;
var statearr_27859_27879 = state_27836;
(statearr_27859_27879[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27880 = state_27836;
state_27836 = G__27880;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_27836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_27836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__))
})();
var state__27010__auto__ = (function (){var statearr_27860 = f__27009__auto__.call(null);
(statearr_27860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_27860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__))
);

return c__27008__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25466__auto__ = (((_ == null))?null:_);
var m__25467__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,_);
} else {
var m__25467__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25467__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m,ch);
} else {
var m__25467__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m);
} else {
var m__25467__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28106 = (function (ch,cs,meta28107){
this.ch = ch;
this.cs = cs;
this.meta28107 = meta28107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28108,meta28107__$1){
var self__ = this;
var _28108__$1 = this;
return (new cljs.core.async.t_cljs$core$async28106(self__.ch,self__.cs,meta28107__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28108){
var self__ = this;
var _28108__$1 = this;
return self__.meta28107;
});})(cs))
;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28106.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28106.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28107","meta28107",1593994095,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28106";

cljs.core.async.t_cljs$core$async28106.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async28106");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28106 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28106(ch__$1,cs__$1,meta28107){
return (new cljs.core.async.t_cljs$core$async28106(ch__$1,cs__$1,meta28107));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28106(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27008__auto___28331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___28331,cs,m,dchan,dctr,done){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___28331,cs,m,dchan,dctr,done){
return (function (state_28243){
var state_val_28244 = (state_28243[(1)]);
if((state_val_28244 === (7))){
var inst_28239 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28245_28332 = state_28243__$1;
(statearr_28245_28332[(2)] = inst_28239);

(statearr_28245_28332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (20))){
var inst_28142 = (state_28243[(7)]);
var inst_28154 = cljs.core.first.call(null,inst_28142);
var inst_28155 = cljs.core.nth.call(null,inst_28154,(0),null);
var inst_28156 = cljs.core.nth.call(null,inst_28154,(1),null);
var state_28243__$1 = (function (){var statearr_28246 = state_28243;
(statearr_28246[(8)] = inst_28155);

return statearr_28246;
})();
if(cljs.core.truth_(inst_28156)){
var statearr_28247_28333 = state_28243__$1;
(statearr_28247_28333[(1)] = (22));

} else {
var statearr_28248_28334 = state_28243__$1;
(statearr_28248_28334[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (27))){
var inst_28111 = (state_28243[(9)]);
var inst_28186 = (state_28243[(10)]);
var inst_28191 = (state_28243[(11)]);
var inst_28184 = (state_28243[(12)]);
var inst_28191__$1 = cljs.core._nth.call(null,inst_28184,inst_28186);
var inst_28192 = cljs.core.async.put_BANG_.call(null,inst_28191__$1,inst_28111,done);
var state_28243__$1 = (function (){var statearr_28249 = state_28243;
(statearr_28249[(11)] = inst_28191__$1);

return statearr_28249;
})();
if(cljs.core.truth_(inst_28192)){
var statearr_28250_28335 = state_28243__$1;
(statearr_28250_28335[(1)] = (30));

} else {
var statearr_28251_28336 = state_28243__$1;
(statearr_28251_28336[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (1))){
var state_28243__$1 = state_28243;
var statearr_28252_28337 = state_28243__$1;
(statearr_28252_28337[(2)] = null);

(statearr_28252_28337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (24))){
var inst_28142 = (state_28243[(7)]);
var inst_28161 = (state_28243[(2)]);
var inst_28162 = cljs.core.next.call(null,inst_28142);
var inst_28120 = inst_28162;
var inst_28121 = null;
var inst_28122 = (0);
var inst_28123 = (0);
var state_28243__$1 = (function (){var statearr_28253 = state_28243;
(statearr_28253[(13)] = inst_28123);

(statearr_28253[(14)] = inst_28120);

(statearr_28253[(15)] = inst_28121);

(statearr_28253[(16)] = inst_28161);

(statearr_28253[(17)] = inst_28122);

return statearr_28253;
})();
var statearr_28254_28338 = state_28243__$1;
(statearr_28254_28338[(2)] = null);

(statearr_28254_28338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (39))){
var state_28243__$1 = state_28243;
var statearr_28258_28339 = state_28243__$1;
(statearr_28258_28339[(2)] = null);

(statearr_28258_28339[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (4))){
var inst_28111 = (state_28243[(9)]);
var inst_28111__$1 = (state_28243[(2)]);
var inst_28112 = (inst_28111__$1 == null);
var state_28243__$1 = (function (){var statearr_28259 = state_28243;
(statearr_28259[(9)] = inst_28111__$1);

return statearr_28259;
})();
if(cljs.core.truth_(inst_28112)){
var statearr_28260_28340 = state_28243__$1;
(statearr_28260_28340[(1)] = (5));

} else {
var statearr_28261_28341 = state_28243__$1;
(statearr_28261_28341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (15))){
var inst_28123 = (state_28243[(13)]);
var inst_28120 = (state_28243[(14)]);
var inst_28121 = (state_28243[(15)]);
var inst_28122 = (state_28243[(17)]);
var inst_28138 = (state_28243[(2)]);
var inst_28139 = (inst_28123 + (1));
var tmp28255 = inst_28120;
var tmp28256 = inst_28121;
var tmp28257 = inst_28122;
var inst_28120__$1 = tmp28255;
var inst_28121__$1 = tmp28256;
var inst_28122__$1 = tmp28257;
var inst_28123__$1 = inst_28139;
var state_28243__$1 = (function (){var statearr_28262 = state_28243;
(statearr_28262[(13)] = inst_28123__$1);

(statearr_28262[(14)] = inst_28120__$1);

(statearr_28262[(15)] = inst_28121__$1);

(statearr_28262[(18)] = inst_28138);

(statearr_28262[(17)] = inst_28122__$1);

return statearr_28262;
})();
var statearr_28263_28342 = state_28243__$1;
(statearr_28263_28342[(2)] = null);

(statearr_28263_28342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (21))){
var inst_28165 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28267_28343 = state_28243__$1;
(statearr_28267_28343[(2)] = inst_28165);

(statearr_28267_28343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (31))){
var inst_28191 = (state_28243[(11)]);
var inst_28195 = done.call(null,null);
var inst_28196 = cljs.core.async.untap_STAR_.call(null,m,inst_28191);
var state_28243__$1 = (function (){var statearr_28268 = state_28243;
(statearr_28268[(19)] = inst_28195);

return statearr_28268;
})();
var statearr_28269_28344 = state_28243__$1;
(statearr_28269_28344[(2)] = inst_28196);

(statearr_28269_28344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (32))){
var inst_28185 = (state_28243[(20)]);
var inst_28186 = (state_28243[(10)]);
var inst_28183 = (state_28243[(21)]);
var inst_28184 = (state_28243[(12)]);
var inst_28198 = (state_28243[(2)]);
var inst_28199 = (inst_28186 + (1));
var tmp28264 = inst_28185;
var tmp28265 = inst_28183;
var tmp28266 = inst_28184;
var inst_28183__$1 = tmp28265;
var inst_28184__$1 = tmp28266;
var inst_28185__$1 = tmp28264;
var inst_28186__$1 = inst_28199;
var state_28243__$1 = (function (){var statearr_28270 = state_28243;
(statearr_28270[(20)] = inst_28185__$1);

(statearr_28270[(10)] = inst_28186__$1);

(statearr_28270[(21)] = inst_28183__$1);

(statearr_28270[(12)] = inst_28184__$1);

(statearr_28270[(22)] = inst_28198);

return statearr_28270;
})();
var statearr_28271_28345 = state_28243__$1;
(statearr_28271_28345[(2)] = null);

(statearr_28271_28345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (40))){
var inst_28211 = (state_28243[(23)]);
var inst_28215 = done.call(null,null);
var inst_28216 = cljs.core.async.untap_STAR_.call(null,m,inst_28211);
var state_28243__$1 = (function (){var statearr_28272 = state_28243;
(statearr_28272[(24)] = inst_28215);

return statearr_28272;
})();
var statearr_28273_28346 = state_28243__$1;
(statearr_28273_28346[(2)] = inst_28216);

(statearr_28273_28346[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (33))){
var inst_28202 = (state_28243[(25)]);
var inst_28204 = cljs.core.chunked_seq_QMARK_.call(null,inst_28202);
var state_28243__$1 = state_28243;
if(inst_28204){
var statearr_28274_28347 = state_28243__$1;
(statearr_28274_28347[(1)] = (36));

} else {
var statearr_28275_28348 = state_28243__$1;
(statearr_28275_28348[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (13))){
var inst_28132 = (state_28243[(26)]);
var inst_28135 = cljs.core.async.close_BANG_.call(null,inst_28132);
var state_28243__$1 = state_28243;
var statearr_28276_28349 = state_28243__$1;
(statearr_28276_28349[(2)] = inst_28135);

(statearr_28276_28349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (22))){
var inst_28155 = (state_28243[(8)]);
var inst_28158 = cljs.core.async.close_BANG_.call(null,inst_28155);
var state_28243__$1 = state_28243;
var statearr_28277_28350 = state_28243__$1;
(statearr_28277_28350[(2)] = inst_28158);

(statearr_28277_28350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (36))){
var inst_28202 = (state_28243[(25)]);
var inst_28206 = cljs.core.chunk_first.call(null,inst_28202);
var inst_28207 = cljs.core.chunk_rest.call(null,inst_28202);
var inst_28208 = cljs.core.count.call(null,inst_28206);
var inst_28183 = inst_28207;
var inst_28184 = inst_28206;
var inst_28185 = inst_28208;
var inst_28186 = (0);
var state_28243__$1 = (function (){var statearr_28278 = state_28243;
(statearr_28278[(20)] = inst_28185);

(statearr_28278[(10)] = inst_28186);

(statearr_28278[(21)] = inst_28183);

(statearr_28278[(12)] = inst_28184);

return statearr_28278;
})();
var statearr_28279_28351 = state_28243__$1;
(statearr_28279_28351[(2)] = null);

(statearr_28279_28351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (41))){
var inst_28202 = (state_28243[(25)]);
var inst_28218 = (state_28243[(2)]);
var inst_28219 = cljs.core.next.call(null,inst_28202);
var inst_28183 = inst_28219;
var inst_28184 = null;
var inst_28185 = (0);
var inst_28186 = (0);
var state_28243__$1 = (function (){var statearr_28280 = state_28243;
(statearr_28280[(20)] = inst_28185);

(statearr_28280[(27)] = inst_28218);

(statearr_28280[(10)] = inst_28186);

(statearr_28280[(21)] = inst_28183);

(statearr_28280[(12)] = inst_28184);

return statearr_28280;
})();
var statearr_28281_28352 = state_28243__$1;
(statearr_28281_28352[(2)] = null);

(statearr_28281_28352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (43))){
var state_28243__$1 = state_28243;
var statearr_28282_28353 = state_28243__$1;
(statearr_28282_28353[(2)] = null);

(statearr_28282_28353[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (29))){
var inst_28227 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28283_28354 = state_28243__$1;
(statearr_28283_28354[(2)] = inst_28227);

(statearr_28283_28354[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (44))){
var inst_28236 = (state_28243[(2)]);
var state_28243__$1 = (function (){var statearr_28284 = state_28243;
(statearr_28284[(28)] = inst_28236);

return statearr_28284;
})();
var statearr_28285_28355 = state_28243__$1;
(statearr_28285_28355[(2)] = null);

(statearr_28285_28355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (6))){
var inst_28175 = (state_28243[(29)]);
var inst_28174 = cljs.core.deref.call(null,cs);
var inst_28175__$1 = cljs.core.keys.call(null,inst_28174);
var inst_28176 = cljs.core.count.call(null,inst_28175__$1);
var inst_28177 = cljs.core.reset_BANG_.call(null,dctr,inst_28176);
var inst_28182 = cljs.core.seq.call(null,inst_28175__$1);
var inst_28183 = inst_28182;
var inst_28184 = null;
var inst_28185 = (0);
var inst_28186 = (0);
var state_28243__$1 = (function (){var statearr_28286 = state_28243;
(statearr_28286[(20)] = inst_28185);

(statearr_28286[(10)] = inst_28186);

(statearr_28286[(29)] = inst_28175__$1);

(statearr_28286[(21)] = inst_28183);

(statearr_28286[(12)] = inst_28184);

(statearr_28286[(30)] = inst_28177);

return statearr_28286;
})();
var statearr_28287_28356 = state_28243__$1;
(statearr_28287_28356[(2)] = null);

(statearr_28287_28356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (28))){
var inst_28183 = (state_28243[(21)]);
var inst_28202 = (state_28243[(25)]);
var inst_28202__$1 = cljs.core.seq.call(null,inst_28183);
var state_28243__$1 = (function (){var statearr_28288 = state_28243;
(statearr_28288[(25)] = inst_28202__$1);

return statearr_28288;
})();
if(inst_28202__$1){
var statearr_28289_28357 = state_28243__$1;
(statearr_28289_28357[(1)] = (33));

} else {
var statearr_28290_28358 = state_28243__$1;
(statearr_28290_28358[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (25))){
var inst_28185 = (state_28243[(20)]);
var inst_28186 = (state_28243[(10)]);
var inst_28188 = (inst_28186 < inst_28185);
var inst_28189 = inst_28188;
var state_28243__$1 = state_28243;
if(cljs.core.truth_(inst_28189)){
var statearr_28291_28359 = state_28243__$1;
(statearr_28291_28359[(1)] = (27));

} else {
var statearr_28292_28360 = state_28243__$1;
(statearr_28292_28360[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (34))){
var state_28243__$1 = state_28243;
var statearr_28293_28361 = state_28243__$1;
(statearr_28293_28361[(2)] = null);

(statearr_28293_28361[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (17))){
var state_28243__$1 = state_28243;
var statearr_28294_28362 = state_28243__$1;
(statearr_28294_28362[(2)] = null);

(statearr_28294_28362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (3))){
var inst_28241 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28243__$1,inst_28241);
} else {
if((state_val_28244 === (12))){
var inst_28170 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28295_28363 = state_28243__$1;
(statearr_28295_28363[(2)] = inst_28170);

(statearr_28295_28363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (2))){
var state_28243__$1 = state_28243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28243__$1,(4),ch);
} else {
if((state_val_28244 === (23))){
var state_28243__$1 = state_28243;
var statearr_28296_28364 = state_28243__$1;
(statearr_28296_28364[(2)] = null);

(statearr_28296_28364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (35))){
var inst_28225 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28297_28365 = state_28243__$1;
(statearr_28297_28365[(2)] = inst_28225);

(statearr_28297_28365[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (19))){
var inst_28142 = (state_28243[(7)]);
var inst_28146 = cljs.core.chunk_first.call(null,inst_28142);
var inst_28147 = cljs.core.chunk_rest.call(null,inst_28142);
var inst_28148 = cljs.core.count.call(null,inst_28146);
var inst_28120 = inst_28147;
var inst_28121 = inst_28146;
var inst_28122 = inst_28148;
var inst_28123 = (0);
var state_28243__$1 = (function (){var statearr_28298 = state_28243;
(statearr_28298[(13)] = inst_28123);

(statearr_28298[(14)] = inst_28120);

(statearr_28298[(15)] = inst_28121);

(statearr_28298[(17)] = inst_28122);

return statearr_28298;
})();
var statearr_28299_28366 = state_28243__$1;
(statearr_28299_28366[(2)] = null);

(statearr_28299_28366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (11))){
var inst_28120 = (state_28243[(14)]);
var inst_28142 = (state_28243[(7)]);
var inst_28142__$1 = cljs.core.seq.call(null,inst_28120);
var state_28243__$1 = (function (){var statearr_28300 = state_28243;
(statearr_28300[(7)] = inst_28142__$1);

return statearr_28300;
})();
if(inst_28142__$1){
var statearr_28301_28367 = state_28243__$1;
(statearr_28301_28367[(1)] = (16));

} else {
var statearr_28302_28368 = state_28243__$1;
(statearr_28302_28368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (9))){
var inst_28172 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28303_28369 = state_28243__$1;
(statearr_28303_28369[(2)] = inst_28172);

(statearr_28303_28369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (5))){
var inst_28118 = cljs.core.deref.call(null,cs);
var inst_28119 = cljs.core.seq.call(null,inst_28118);
var inst_28120 = inst_28119;
var inst_28121 = null;
var inst_28122 = (0);
var inst_28123 = (0);
var state_28243__$1 = (function (){var statearr_28304 = state_28243;
(statearr_28304[(13)] = inst_28123);

(statearr_28304[(14)] = inst_28120);

(statearr_28304[(15)] = inst_28121);

(statearr_28304[(17)] = inst_28122);

return statearr_28304;
})();
var statearr_28305_28370 = state_28243__$1;
(statearr_28305_28370[(2)] = null);

(statearr_28305_28370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (14))){
var state_28243__$1 = state_28243;
var statearr_28306_28371 = state_28243__$1;
(statearr_28306_28371[(2)] = null);

(statearr_28306_28371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (45))){
var inst_28233 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28307_28372 = state_28243__$1;
(statearr_28307_28372[(2)] = inst_28233);

(statearr_28307_28372[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (26))){
var inst_28175 = (state_28243[(29)]);
var inst_28229 = (state_28243[(2)]);
var inst_28230 = cljs.core.seq.call(null,inst_28175);
var state_28243__$1 = (function (){var statearr_28308 = state_28243;
(statearr_28308[(31)] = inst_28229);

return statearr_28308;
})();
if(inst_28230){
var statearr_28309_28373 = state_28243__$1;
(statearr_28309_28373[(1)] = (42));

} else {
var statearr_28310_28374 = state_28243__$1;
(statearr_28310_28374[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (16))){
var inst_28142 = (state_28243[(7)]);
var inst_28144 = cljs.core.chunked_seq_QMARK_.call(null,inst_28142);
var state_28243__$1 = state_28243;
if(inst_28144){
var statearr_28311_28375 = state_28243__$1;
(statearr_28311_28375[(1)] = (19));

} else {
var statearr_28312_28376 = state_28243__$1;
(statearr_28312_28376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (38))){
var inst_28222 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28313_28377 = state_28243__$1;
(statearr_28313_28377[(2)] = inst_28222);

(statearr_28313_28377[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (30))){
var state_28243__$1 = state_28243;
var statearr_28314_28378 = state_28243__$1;
(statearr_28314_28378[(2)] = null);

(statearr_28314_28378[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (10))){
var inst_28123 = (state_28243[(13)]);
var inst_28121 = (state_28243[(15)]);
var inst_28131 = cljs.core._nth.call(null,inst_28121,inst_28123);
var inst_28132 = cljs.core.nth.call(null,inst_28131,(0),null);
var inst_28133 = cljs.core.nth.call(null,inst_28131,(1),null);
var state_28243__$1 = (function (){var statearr_28315 = state_28243;
(statearr_28315[(26)] = inst_28132);

return statearr_28315;
})();
if(cljs.core.truth_(inst_28133)){
var statearr_28316_28379 = state_28243__$1;
(statearr_28316_28379[(1)] = (13));

} else {
var statearr_28317_28380 = state_28243__$1;
(statearr_28317_28380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (18))){
var inst_28168 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28318_28381 = state_28243__$1;
(statearr_28318_28381[(2)] = inst_28168);

(statearr_28318_28381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (42))){
var state_28243__$1 = state_28243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28243__$1,(45),dchan);
} else {
if((state_val_28244 === (37))){
var inst_28111 = (state_28243[(9)]);
var inst_28202 = (state_28243[(25)]);
var inst_28211 = (state_28243[(23)]);
var inst_28211__$1 = cljs.core.first.call(null,inst_28202);
var inst_28212 = cljs.core.async.put_BANG_.call(null,inst_28211__$1,inst_28111,done);
var state_28243__$1 = (function (){var statearr_28319 = state_28243;
(statearr_28319[(23)] = inst_28211__$1);

return statearr_28319;
})();
if(cljs.core.truth_(inst_28212)){
var statearr_28320_28382 = state_28243__$1;
(statearr_28320_28382[(1)] = (39));

} else {
var statearr_28321_28383 = state_28243__$1;
(statearr_28321_28383[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (8))){
var inst_28123 = (state_28243[(13)]);
var inst_28122 = (state_28243[(17)]);
var inst_28125 = (inst_28123 < inst_28122);
var inst_28126 = inst_28125;
var state_28243__$1 = state_28243;
if(cljs.core.truth_(inst_28126)){
var statearr_28322_28384 = state_28243__$1;
(statearr_28322_28384[(1)] = (10));

} else {
var statearr_28323_28385 = state_28243__$1;
(statearr_28323_28385[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___28331,cs,m,dchan,dctr,done))
;
return ((function (switch__26896__auto__,c__27008__auto___28331,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26897__auto__ = null;
var cljs$core$async$mult_$_state_machine__26897__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = cljs$core$async$mult_$_state_machine__26897__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var cljs$core$async$mult_$_state_machine__26897__auto____1 = (function (state_28243){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_28243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e28328){if((e28328 instanceof Object)){
var ex__26900__auto__ = e28328;
var statearr_28329_28386 = state_28243;
(statearr_28329_28386[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28387 = state_28243;
state_28243 = G__28387;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26897__auto__ = function(state_28243){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26897__auto____1.call(this,state_28243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26897__auto____0;
cljs$core$async$mult_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26897__auto____1;
return cljs$core$async$mult_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___28331,cs,m,dchan,dctr,done))
})();
var state__27010__auto__ = (function (){var statearr_28330 = f__27009__auto__.call(null);
(statearr_28330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___28331);

return statearr_28330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___28331,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28388 = [];
var len__25911__auto___28391 = arguments.length;
var i__25912__auto___28392 = (0);
while(true){
if((i__25912__auto___28392 < len__25911__auto___28391)){
args28388.push((arguments[i__25912__auto___28392]));

var G__28393 = (i__25912__auto___28392 + (1));
i__25912__auto___28392 = G__28393;
continue;
} else {
}
break;
}

var G__28390 = args28388.length;
switch (G__28390) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28388.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m,ch);
} else {
var m__25467__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m,ch);
} else {
var m__25467__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m);
} else {
var m__25467__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m,state_map);
} else {
var m__25467__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25466__auto__ = (((m == null))?null:m);
var m__25467__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,m,mode);
} else {
var m__25467__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25918__auto__ = [];
var len__25911__auto___28405 = arguments.length;
var i__25912__auto___28406 = (0);
while(true){
if((i__25912__auto___28406 < len__25911__auto___28405)){
args__25918__auto__.push((arguments[i__25912__auto___28406]));

var G__28407 = (i__25912__auto___28406 + (1));
i__25912__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((3) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25919__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28399){
var map__28400 = p__28399;
var map__28400__$1 = ((((!((map__28400 == null)))?((((map__28400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28400):map__28400);
var opts = map__28400__$1;
var statearr_28402_28408 = state;
(statearr_28402_28408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28400,map__28400__$1,opts){
return (function (val){
var statearr_28403_28409 = state;
(statearr_28403_28409[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28400,map__28400__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28404_28410 = state;
(statearr_28404_28410[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28395){
var G__28396 = cljs.core.first.call(null,seq28395);
var seq28395__$1 = cljs.core.next.call(null,seq28395);
var G__28397 = cljs.core.first.call(null,seq28395__$1);
var seq28395__$2 = cljs.core.next.call(null,seq28395__$1);
var G__28398 = cljs.core.first.call(null,seq28395__$2);
var seq28395__$3 = cljs.core.next.call(null,seq28395__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28396,G__28397,G__28398,seq28395__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28578 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28579){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28579 = meta28579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28580,meta28579__$1){
var self__ = this;
var _28580__$1 = this;
return (new cljs.core.async.t_cljs$core$async28578(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28579__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28580){
var self__ = this;
var _28580__$1 = this;
return self__.meta28579;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28579","meta28579",-440060312,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28578";

cljs.core.async.t_cljs$core$async28578.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async28578");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28578 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28578(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28579){
return (new cljs.core.async.t_cljs$core$async28578(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28579));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28578(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27008__auto___28745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___28745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___28745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28682){
var state_val_28683 = (state_28682[(1)]);
if((state_val_28683 === (7))){
var inst_28597 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28684_28746 = state_28682__$1;
(statearr_28684_28746[(2)] = inst_28597);

(statearr_28684_28746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (20))){
var inst_28609 = (state_28682[(7)]);
var state_28682__$1 = state_28682;
var statearr_28685_28747 = state_28682__$1;
(statearr_28685_28747[(2)] = inst_28609);

(statearr_28685_28747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (27))){
var state_28682__$1 = state_28682;
var statearr_28686_28748 = state_28682__$1;
(statearr_28686_28748[(2)] = null);

(statearr_28686_28748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (1))){
var inst_28584 = (state_28682[(8)]);
var inst_28584__$1 = calc_state.call(null);
var inst_28586 = (inst_28584__$1 == null);
var inst_28587 = cljs.core.not.call(null,inst_28586);
var state_28682__$1 = (function (){var statearr_28687 = state_28682;
(statearr_28687[(8)] = inst_28584__$1);

return statearr_28687;
})();
if(inst_28587){
var statearr_28688_28749 = state_28682__$1;
(statearr_28688_28749[(1)] = (2));

} else {
var statearr_28689_28750 = state_28682__$1;
(statearr_28689_28750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (24))){
var inst_28642 = (state_28682[(9)]);
var inst_28656 = (state_28682[(10)]);
var inst_28633 = (state_28682[(11)]);
var inst_28656__$1 = inst_28633.call(null,inst_28642);
var state_28682__$1 = (function (){var statearr_28690 = state_28682;
(statearr_28690[(10)] = inst_28656__$1);

return statearr_28690;
})();
if(cljs.core.truth_(inst_28656__$1)){
var statearr_28691_28751 = state_28682__$1;
(statearr_28691_28751[(1)] = (29));

} else {
var statearr_28692_28752 = state_28682__$1;
(statearr_28692_28752[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (4))){
var inst_28600 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28600)){
var statearr_28693_28753 = state_28682__$1;
(statearr_28693_28753[(1)] = (8));

} else {
var statearr_28694_28754 = state_28682__$1;
(statearr_28694_28754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (15))){
var inst_28627 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28627)){
var statearr_28695_28755 = state_28682__$1;
(statearr_28695_28755[(1)] = (19));

} else {
var statearr_28696_28756 = state_28682__$1;
(statearr_28696_28756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (21))){
var inst_28632 = (state_28682[(12)]);
var inst_28632__$1 = (state_28682[(2)]);
var inst_28633 = cljs.core.get.call(null,inst_28632__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28634 = cljs.core.get.call(null,inst_28632__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28635 = cljs.core.get.call(null,inst_28632__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28682__$1 = (function (){var statearr_28697 = state_28682;
(statearr_28697[(12)] = inst_28632__$1);

(statearr_28697[(13)] = inst_28634);

(statearr_28697[(11)] = inst_28633);

return statearr_28697;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28682__$1,(22),inst_28635);
} else {
if((state_val_28683 === (31))){
var inst_28664 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28664)){
var statearr_28698_28757 = state_28682__$1;
(statearr_28698_28757[(1)] = (32));

} else {
var statearr_28699_28758 = state_28682__$1;
(statearr_28699_28758[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (32))){
var inst_28641 = (state_28682[(14)]);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28682__$1,(35),out,inst_28641);
} else {
if((state_val_28683 === (33))){
var inst_28632 = (state_28682[(12)]);
var inst_28609 = inst_28632;
var state_28682__$1 = (function (){var statearr_28700 = state_28682;
(statearr_28700[(7)] = inst_28609);

return statearr_28700;
})();
var statearr_28701_28759 = state_28682__$1;
(statearr_28701_28759[(2)] = null);

(statearr_28701_28759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (13))){
var inst_28609 = (state_28682[(7)]);
var inst_28616 = inst_28609.cljs$lang$protocol_mask$partition0$;
var inst_28617 = (inst_28616 & (64));
var inst_28618 = inst_28609.cljs$core$ISeq$;
var inst_28619 = (cljs.core.PROTOCOL_SENTINEL === inst_28618);
var inst_28620 = (inst_28617) || (inst_28619);
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28620)){
var statearr_28702_28760 = state_28682__$1;
(statearr_28702_28760[(1)] = (16));

} else {
var statearr_28703_28761 = state_28682__$1;
(statearr_28703_28761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (22))){
var inst_28642 = (state_28682[(9)]);
var inst_28641 = (state_28682[(14)]);
var inst_28640 = (state_28682[(2)]);
var inst_28641__$1 = cljs.core.nth.call(null,inst_28640,(0),null);
var inst_28642__$1 = cljs.core.nth.call(null,inst_28640,(1),null);
var inst_28643 = (inst_28641__$1 == null);
var inst_28644 = cljs.core._EQ_.call(null,inst_28642__$1,change);
var inst_28645 = (inst_28643) || (inst_28644);
var state_28682__$1 = (function (){var statearr_28704 = state_28682;
(statearr_28704[(9)] = inst_28642__$1);

(statearr_28704[(14)] = inst_28641__$1);

return statearr_28704;
})();
if(cljs.core.truth_(inst_28645)){
var statearr_28705_28762 = state_28682__$1;
(statearr_28705_28762[(1)] = (23));

} else {
var statearr_28706_28763 = state_28682__$1;
(statearr_28706_28763[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (36))){
var inst_28632 = (state_28682[(12)]);
var inst_28609 = inst_28632;
var state_28682__$1 = (function (){var statearr_28707 = state_28682;
(statearr_28707[(7)] = inst_28609);

return statearr_28707;
})();
var statearr_28708_28764 = state_28682__$1;
(statearr_28708_28764[(2)] = null);

(statearr_28708_28764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (29))){
var inst_28656 = (state_28682[(10)]);
var state_28682__$1 = state_28682;
var statearr_28709_28765 = state_28682__$1;
(statearr_28709_28765[(2)] = inst_28656);

(statearr_28709_28765[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (6))){
var state_28682__$1 = state_28682;
var statearr_28710_28766 = state_28682__$1;
(statearr_28710_28766[(2)] = false);

(statearr_28710_28766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (28))){
var inst_28652 = (state_28682[(2)]);
var inst_28653 = calc_state.call(null);
var inst_28609 = inst_28653;
var state_28682__$1 = (function (){var statearr_28711 = state_28682;
(statearr_28711[(15)] = inst_28652);

(statearr_28711[(7)] = inst_28609);

return statearr_28711;
})();
var statearr_28712_28767 = state_28682__$1;
(statearr_28712_28767[(2)] = null);

(statearr_28712_28767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (25))){
var inst_28678 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28713_28768 = state_28682__$1;
(statearr_28713_28768[(2)] = inst_28678);

(statearr_28713_28768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (34))){
var inst_28676 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28714_28769 = state_28682__$1;
(statearr_28714_28769[(2)] = inst_28676);

(statearr_28714_28769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (17))){
var state_28682__$1 = state_28682;
var statearr_28715_28770 = state_28682__$1;
(statearr_28715_28770[(2)] = false);

(statearr_28715_28770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (3))){
var state_28682__$1 = state_28682;
var statearr_28716_28771 = state_28682__$1;
(statearr_28716_28771[(2)] = false);

(statearr_28716_28771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (12))){
var inst_28680 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28682__$1,inst_28680);
} else {
if((state_val_28683 === (2))){
var inst_28584 = (state_28682[(8)]);
var inst_28589 = inst_28584.cljs$lang$protocol_mask$partition0$;
var inst_28590 = (inst_28589 & (64));
var inst_28591 = inst_28584.cljs$core$ISeq$;
var inst_28592 = (cljs.core.PROTOCOL_SENTINEL === inst_28591);
var inst_28593 = (inst_28590) || (inst_28592);
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28593)){
var statearr_28717_28772 = state_28682__$1;
(statearr_28717_28772[(1)] = (5));

} else {
var statearr_28718_28773 = state_28682__$1;
(statearr_28718_28773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (23))){
var inst_28641 = (state_28682[(14)]);
var inst_28647 = (inst_28641 == null);
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28647)){
var statearr_28719_28774 = state_28682__$1;
(statearr_28719_28774[(1)] = (26));

} else {
var statearr_28720_28775 = state_28682__$1;
(statearr_28720_28775[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (35))){
var inst_28667 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28667)){
var statearr_28721_28776 = state_28682__$1;
(statearr_28721_28776[(1)] = (36));

} else {
var statearr_28722_28777 = state_28682__$1;
(statearr_28722_28777[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (19))){
var inst_28609 = (state_28682[(7)]);
var inst_28629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28609);
var state_28682__$1 = state_28682;
var statearr_28723_28778 = state_28682__$1;
(statearr_28723_28778[(2)] = inst_28629);

(statearr_28723_28778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (11))){
var inst_28609 = (state_28682[(7)]);
var inst_28613 = (inst_28609 == null);
var inst_28614 = cljs.core.not.call(null,inst_28613);
var state_28682__$1 = state_28682;
if(inst_28614){
var statearr_28724_28779 = state_28682__$1;
(statearr_28724_28779[(1)] = (13));

} else {
var statearr_28725_28780 = state_28682__$1;
(statearr_28725_28780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (9))){
var inst_28584 = (state_28682[(8)]);
var state_28682__$1 = state_28682;
var statearr_28726_28781 = state_28682__$1;
(statearr_28726_28781[(2)] = inst_28584);

(statearr_28726_28781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (5))){
var state_28682__$1 = state_28682;
var statearr_28727_28782 = state_28682__$1;
(statearr_28727_28782[(2)] = true);

(statearr_28727_28782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (14))){
var state_28682__$1 = state_28682;
var statearr_28728_28783 = state_28682__$1;
(statearr_28728_28783[(2)] = false);

(statearr_28728_28783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (26))){
var inst_28642 = (state_28682[(9)]);
var inst_28649 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28642);
var state_28682__$1 = state_28682;
var statearr_28729_28784 = state_28682__$1;
(statearr_28729_28784[(2)] = inst_28649);

(statearr_28729_28784[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (16))){
var state_28682__$1 = state_28682;
var statearr_28730_28785 = state_28682__$1;
(statearr_28730_28785[(2)] = true);

(statearr_28730_28785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (38))){
var inst_28672 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28731_28786 = state_28682__$1;
(statearr_28731_28786[(2)] = inst_28672);

(statearr_28731_28786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (30))){
var inst_28642 = (state_28682[(9)]);
var inst_28634 = (state_28682[(13)]);
var inst_28633 = (state_28682[(11)]);
var inst_28659 = cljs.core.empty_QMARK_.call(null,inst_28633);
var inst_28660 = inst_28634.call(null,inst_28642);
var inst_28661 = cljs.core.not.call(null,inst_28660);
var inst_28662 = (inst_28659) && (inst_28661);
var state_28682__$1 = state_28682;
var statearr_28732_28787 = state_28682__$1;
(statearr_28732_28787[(2)] = inst_28662);

(statearr_28732_28787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (10))){
var inst_28584 = (state_28682[(8)]);
var inst_28605 = (state_28682[(2)]);
var inst_28606 = cljs.core.get.call(null,inst_28605,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28607 = cljs.core.get.call(null,inst_28605,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28608 = cljs.core.get.call(null,inst_28605,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28609 = inst_28584;
var state_28682__$1 = (function (){var statearr_28733 = state_28682;
(statearr_28733[(16)] = inst_28608);

(statearr_28733[(7)] = inst_28609);

(statearr_28733[(17)] = inst_28607);

(statearr_28733[(18)] = inst_28606);

return statearr_28733;
})();
var statearr_28734_28788 = state_28682__$1;
(statearr_28734_28788[(2)] = null);

(statearr_28734_28788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (18))){
var inst_28624 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28735_28789 = state_28682__$1;
(statearr_28735_28789[(2)] = inst_28624);

(statearr_28735_28789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (37))){
var state_28682__$1 = state_28682;
var statearr_28736_28790 = state_28682__$1;
(statearr_28736_28790[(2)] = null);

(statearr_28736_28790[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (8))){
var inst_28584 = (state_28682[(8)]);
var inst_28602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28584);
var state_28682__$1 = state_28682;
var statearr_28737_28791 = state_28682__$1;
(statearr_28737_28791[(2)] = inst_28602);

(statearr_28737_28791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___28745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26896__auto__,c__27008__auto___28745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26897__auto__ = null;
var cljs$core$async$mix_$_state_machine__26897__auto____0 = (function (){
var statearr_28741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28741[(0)] = cljs$core$async$mix_$_state_machine__26897__auto__);

(statearr_28741[(1)] = (1));

return statearr_28741;
});
var cljs$core$async$mix_$_state_machine__26897__auto____1 = (function (state_28682){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_28682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e28742){if((e28742 instanceof Object)){
var ex__26900__auto__ = e28742;
var statearr_28743_28792 = state_28682;
(statearr_28743_28792[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28793 = state_28682;
state_28682 = G__28793;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26897__auto__ = function(state_28682){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26897__auto____1.call(this,state_28682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26897__auto____0;
cljs$core$async$mix_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26897__auto____1;
return cljs$core$async$mix_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___28745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27010__auto__ = (function (){var statearr_28744 = f__27009__auto__.call(null);
(statearr_28744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___28745);

return statearr_28744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___28745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25466__auto__ = (((p == null))?null:p);
var m__25467__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25467__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25466__auto__ = (((p == null))?null:p);
var m__25467__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,p,v,ch);
} else {
var m__25467__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28794 = [];
var len__25911__auto___28797 = arguments.length;
var i__25912__auto___28798 = (0);
while(true){
if((i__25912__auto___28798 < len__25911__auto___28797)){
args28794.push((arguments[i__25912__auto___28798]));

var G__28799 = (i__25912__auto___28798 + (1));
i__25912__auto___28798 = G__28799;
continue;
} else {
}
break;
}

var G__28796 = args28794.length;
switch (G__28796) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28794.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25466__auto__ = (((p == null))?null:p);
var m__25467__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,p);
} else {
var m__25467__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25466__auto__ = (((p == null))?null:p);
var m__25467__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25466__auto__)]);
if(!((m__25467__auto__ == null))){
return m__25467__auto__.call(null,p,v);
} else {
var m__25467__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25467__auto____$1 == null))){
return m__25467__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28802 = [];
var len__25911__auto___28927 = arguments.length;
var i__25912__auto___28928 = (0);
while(true){
if((i__25912__auto___28928 < len__25911__auto___28927)){
args28802.push((arguments[i__25912__auto___28928]));

var G__28929 = (i__25912__auto___28928 + (1));
i__25912__auto___28928 = G__28929;
continue;
} else {
}
break;
}

var G__28804 = args28802.length;
switch (G__28804) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28802.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24803__auto__,mults){
return (function (p1__28801_SHARP_){
if(cljs.core.truth_(p1__28801_SHARP_.call(null,topic))){
return p1__28801_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28801_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24803__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28805 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28806){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28806 = meta28806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28807,meta28806__$1){
var self__ = this;
var _28807__$1 = this;
return (new cljs.core.async.t_cljs$core$async28805(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28806__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28807){
var self__ = this;
var _28807__$1 = this;
return self__.meta28806;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28806","meta28806",440873475,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28805";

cljs.core.async.t_cljs$core$async28805.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async28805");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28805 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28805(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28806){
return (new cljs.core.async.t_cljs$core$async28805(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28806));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28805(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27008__auto___28931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___28931,mults,ensure_mult,p){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___28931,mults,ensure_mult,p){
return (function (state_28879){
var state_val_28880 = (state_28879[(1)]);
if((state_val_28880 === (7))){
var inst_28875 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28881_28932 = state_28879__$1;
(statearr_28881_28932[(2)] = inst_28875);

(statearr_28881_28932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (20))){
var state_28879__$1 = state_28879;
var statearr_28882_28933 = state_28879__$1;
(statearr_28882_28933[(2)] = null);

(statearr_28882_28933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (1))){
var state_28879__$1 = state_28879;
var statearr_28883_28934 = state_28879__$1;
(statearr_28883_28934[(2)] = null);

(statearr_28883_28934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (24))){
var inst_28858 = (state_28879[(7)]);
var inst_28867 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28858);
var state_28879__$1 = state_28879;
var statearr_28884_28935 = state_28879__$1;
(statearr_28884_28935[(2)] = inst_28867);

(statearr_28884_28935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (4))){
var inst_28810 = (state_28879[(8)]);
var inst_28810__$1 = (state_28879[(2)]);
var inst_28811 = (inst_28810__$1 == null);
var state_28879__$1 = (function (){var statearr_28885 = state_28879;
(statearr_28885[(8)] = inst_28810__$1);

return statearr_28885;
})();
if(cljs.core.truth_(inst_28811)){
var statearr_28886_28936 = state_28879__$1;
(statearr_28886_28936[(1)] = (5));

} else {
var statearr_28887_28937 = state_28879__$1;
(statearr_28887_28937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (15))){
var inst_28852 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28888_28938 = state_28879__$1;
(statearr_28888_28938[(2)] = inst_28852);

(statearr_28888_28938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (21))){
var inst_28872 = (state_28879[(2)]);
var state_28879__$1 = (function (){var statearr_28889 = state_28879;
(statearr_28889[(9)] = inst_28872);

return statearr_28889;
})();
var statearr_28890_28939 = state_28879__$1;
(statearr_28890_28939[(2)] = null);

(statearr_28890_28939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (13))){
var inst_28834 = (state_28879[(10)]);
var inst_28836 = cljs.core.chunked_seq_QMARK_.call(null,inst_28834);
var state_28879__$1 = state_28879;
if(inst_28836){
var statearr_28891_28940 = state_28879__$1;
(statearr_28891_28940[(1)] = (16));

} else {
var statearr_28892_28941 = state_28879__$1;
(statearr_28892_28941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (22))){
var inst_28864 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
if(cljs.core.truth_(inst_28864)){
var statearr_28893_28942 = state_28879__$1;
(statearr_28893_28942[(1)] = (23));

} else {
var statearr_28894_28943 = state_28879__$1;
(statearr_28894_28943[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (6))){
var inst_28810 = (state_28879[(8)]);
var inst_28858 = (state_28879[(7)]);
var inst_28860 = (state_28879[(11)]);
var inst_28858__$1 = topic_fn.call(null,inst_28810);
var inst_28859 = cljs.core.deref.call(null,mults);
var inst_28860__$1 = cljs.core.get.call(null,inst_28859,inst_28858__$1);
var state_28879__$1 = (function (){var statearr_28895 = state_28879;
(statearr_28895[(7)] = inst_28858__$1);

(statearr_28895[(11)] = inst_28860__$1);

return statearr_28895;
})();
if(cljs.core.truth_(inst_28860__$1)){
var statearr_28896_28944 = state_28879__$1;
(statearr_28896_28944[(1)] = (19));

} else {
var statearr_28897_28945 = state_28879__$1;
(statearr_28897_28945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (25))){
var inst_28869 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28898_28946 = state_28879__$1;
(statearr_28898_28946[(2)] = inst_28869);

(statearr_28898_28946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (17))){
var inst_28834 = (state_28879[(10)]);
var inst_28843 = cljs.core.first.call(null,inst_28834);
var inst_28844 = cljs.core.async.muxch_STAR_.call(null,inst_28843);
var inst_28845 = cljs.core.async.close_BANG_.call(null,inst_28844);
var inst_28846 = cljs.core.next.call(null,inst_28834);
var inst_28820 = inst_28846;
var inst_28821 = null;
var inst_28822 = (0);
var inst_28823 = (0);
var state_28879__$1 = (function (){var statearr_28899 = state_28879;
(statearr_28899[(12)] = inst_28822);

(statearr_28899[(13)] = inst_28845);

(statearr_28899[(14)] = inst_28820);

(statearr_28899[(15)] = inst_28823);

(statearr_28899[(16)] = inst_28821);

return statearr_28899;
})();
var statearr_28900_28947 = state_28879__$1;
(statearr_28900_28947[(2)] = null);

(statearr_28900_28947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (3))){
var inst_28877 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28879__$1,inst_28877);
} else {
if((state_val_28880 === (12))){
var inst_28854 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28901_28948 = state_28879__$1;
(statearr_28901_28948[(2)] = inst_28854);

(statearr_28901_28948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (2))){
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28879__$1,(4),ch);
} else {
if((state_val_28880 === (23))){
var state_28879__$1 = state_28879;
var statearr_28902_28949 = state_28879__$1;
(statearr_28902_28949[(2)] = null);

(statearr_28902_28949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (19))){
var inst_28810 = (state_28879[(8)]);
var inst_28860 = (state_28879[(11)]);
var inst_28862 = cljs.core.async.muxch_STAR_.call(null,inst_28860);
var state_28879__$1 = state_28879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28879__$1,(22),inst_28862,inst_28810);
} else {
if((state_val_28880 === (11))){
var inst_28834 = (state_28879[(10)]);
var inst_28820 = (state_28879[(14)]);
var inst_28834__$1 = cljs.core.seq.call(null,inst_28820);
var state_28879__$1 = (function (){var statearr_28903 = state_28879;
(statearr_28903[(10)] = inst_28834__$1);

return statearr_28903;
})();
if(inst_28834__$1){
var statearr_28904_28950 = state_28879__$1;
(statearr_28904_28950[(1)] = (13));

} else {
var statearr_28905_28951 = state_28879__$1;
(statearr_28905_28951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (9))){
var inst_28856 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28906_28952 = state_28879__$1;
(statearr_28906_28952[(2)] = inst_28856);

(statearr_28906_28952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (5))){
var inst_28817 = cljs.core.deref.call(null,mults);
var inst_28818 = cljs.core.vals.call(null,inst_28817);
var inst_28819 = cljs.core.seq.call(null,inst_28818);
var inst_28820 = inst_28819;
var inst_28821 = null;
var inst_28822 = (0);
var inst_28823 = (0);
var state_28879__$1 = (function (){var statearr_28907 = state_28879;
(statearr_28907[(12)] = inst_28822);

(statearr_28907[(14)] = inst_28820);

(statearr_28907[(15)] = inst_28823);

(statearr_28907[(16)] = inst_28821);

return statearr_28907;
})();
var statearr_28908_28953 = state_28879__$1;
(statearr_28908_28953[(2)] = null);

(statearr_28908_28953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (14))){
var state_28879__$1 = state_28879;
var statearr_28912_28954 = state_28879__$1;
(statearr_28912_28954[(2)] = null);

(statearr_28912_28954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (16))){
var inst_28834 = (state_28879[(10)]);
var inst_28838 = cljs.core.chunk_first.call(null,inst_28834);
var inst_28839 = cljs.core.chunk_rest.call(null,inst_28834);
var inst_28840 = cljs.core.count.call(null,inst_28838);
var inst_28820 = inst_28839;
var inst_28821 = inst_28838;
var inst_28822 = inst_28840;
var inst_28823 = (0);
var state_28879__$1 = (function (){var statearr_28913 = state_28879;
(statearr_28913[(12)] = inst_28822);

(statearr_28913[(14)] = inst_28820);

(statearr_28913[(15)] = inst_28823);

(statearr_28913[(16)] = inst_28821);

return statearr_28913;
})();
var statearr_28914_28955 = state_28879__$1;
(statearr_28914_28955[(2)] = null);

(statearr_28914_28955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (10))){
var inst_28822 = (state_28879[(12)]);
var inst_28820 = (state_28879[(14)]);
var inst_28823 = (state_28879[(15)]);
var inst_28821 = (state_28879[(16)]);
var inst_28828 = cljs.core._nth.call(null,inst_28821,inst_28823);
var inst_28829 = cljs.core.async.muxch_STAR_.call(null,inst_28828);
var inst_28830 = cljs.core.async.close_BANG_.call(null,inst_28829);
var inst_28831 = (inst_28823 + (1));
var tmp28909 = inst_28822;
var tmp28910 = inst_28820;
var tmp28911 = inst_28821;
var inst_28820__$1 = tmp28910;
var inst_28821__$1 = tmp28911;
var inst_28822__$1 = tmp28909;
var inst_28823__$1 = inst_28831;
var state_28879__$1 = (function (){var statearr_28915 = state_28879;
(statearr_28915[(12)] = inst_28822__$1);

(statearr_28915[(14)] = inst_28820__$1);

(statearr_28915[(15)] = inst_28823__$1);

(statearr_28915[(17)] = inst_28830);

(statearr_28915[(16)] = inst_28821__$1);

return statearr_28915;
})();
var statearr_28916_28956 = state_28879__$1;
(statearr_28916_28956[(2)] = null);

(statearr_28916_28956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (18))){
var inst_28849 = (state_28879[(2)]);
var state_28879__$1 = state_28879;
var statearr_28917_28957 = state_28879__$1;
(statearr_28917_28957[(2)] = inst_28849);

(statearr_28917_28957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28880 === (8))){
var inst_28822 = (state_28879[(12)]);
var inst_28823 = (state_28879[(15)]);
var inst_28825 = (inst_28823 < inst_28822);
var inst_28826 = inst_28825;
var state_28879__$1 = state_28879;
if(cljs.core.truth_(inst_28826)){
var statearr_28918_28958 = state_28879__$1;
(statearr_28918_28958[(1)] = (10));

} else {
var statearr_28919_28959 = state_28879__$1;
(statearr_28919_28959[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___28931,mults,ensure_mult,p))
;
return ((function (switch__26896__auto__,c__27008__auto___28931,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_28923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28923[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_28923[(1)] = (1));

return statearr_28923;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_28879){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_28879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e28924){if((e28924 instanceof Object)){
var ex__26900__auto__ = e28924;
var statearr_28925_28960 = state_28879;
(statearr_28925_28960[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28961 = state_28879;
state_28879 = G__28961;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_28879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_28879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___28931,mults,ensure_mult,p))
})();
var state__27010__auto__ = (function (){var statearr_28926 = f__27009__auto__.call(null);
(statearr_28926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___28931);

return statearr_28926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___28931,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28962 = [];
var len__25911__auto___28965 = arguments.length;
var i__25912__auto___28966 = (0);
while(true){
if((i__25912__auto___28966 < len__25911__auto___28965)){
args28962.push((arguments[i__25912__auto___28966]));

var G__28967 = (i__25912__auto___28966 + (1));
i__25912__auto___28966 = G__28967;
continue;
} else {
}
break;
}

var G__28964 = args28962.length;
switch (G__28964) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28962.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28969 = [];
var len__25911__auto___28972 = arguments.length;
var i__25912__auto___28973 = (0);
while(true){
if((i__25912__auto___28973 < len__25911__auto___28972)){
args28969.push((arguments[i__25912__auto___28973]));

var G__28974 = (i__25912__auto___28973 + (1));
i__25912__auto___28973 = G__28974;
continue;
} else {
}
break;
}

var G__28971 = args28969.length;
switch (G__28971) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28969.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28976 = [];
var len__25911__auto___29047 = arguments.length;
var i__25912__auto___29048 = (0);
while(true){
if((i__25912__auto___29048 < len__25911__auto___29047)){
args28976.push((arguments[i__25912__auto___29048]));

var G__29049 = (i__25912__auto___29048 + (1));
i__25912__auto___29048 = G__29049;
continue;
} else {
}
break;
}

var G__28978 = args28976.length;
switch (G__28978) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28976.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27008__auto___29051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___29051,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___29051,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29017){
var state_val_29018 = (state_29017[(1)]);
if((state_val_29018 === (7))){
var state_29017__$1 = state_29017;
var statearr_29019_29052 = state_29017__$1;
(statearr_29019_29052[(2)] = null);

(statearr_29019_29052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (1))){
var state_29017__$1 = state_29017;
var statearr_29020_29053 = state_29017__$1;
(statearr_29020_29053[(2)] = null);

(statearr_29020_29053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (4))){
var inst_28981 = (state_29017[(7)]);
var inst_28983 = (inst_28981 < cnt);
var state_29017__$1 = state_29017;
if(cljs.core.truth_(inst_28983)){
var statearr_29021_29054 = state_29017__$1;
(statearr_29021_29054[(1)] = (6));

} else {
var statearr_29022_29055 = state_29017__$1;
(statearr_29022_29055[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (15))){
var inst_29013 = (state_29017[(2)]);
var state_29017__$1 = state_29017;
var statearr_29023_29056 = state_29017__$1;
(statearr_29023_29056[(2)] = inst_29013);

(statearr_29023_29056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (13))){
var inst_29006 = cljs.core.async.close_BANG_.call(null,out);
var state_29017__$1 = state_29017;
var statearr_29024_29057 = state_29017__$1;
(statearr_29024_29057[(2)] = inst_29006);

(statearr_29024_29057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (6))){
var state_29017__$1 = state_29017;
var statearr_29025_29058 = state_29017__$1;
(statearr_29025_29058[(2)] = null);

(statearr_29025_29058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (3))){
var inst_29015 = (state_29017[(2)]);
var state_29017__$1 = state_29017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29017__$1,inst_29015);
} else {
if((state_val_29018 === (12))){
var inst_29003 = (state_29017[(8)]);
var inst_29003__$1 = (state_29017[(2)]);
var inst_29004 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29003__$1);
var state_29017__$1 = (function (){var statearr_29026 = state_29017;
(statearr_29026[(8)] = inst_29003__$1);

return statearr_29026;
})();
if(cljs.core.truth_(inst_29004)){
var statearr_29027_29059 = state_29017__$1;
(statearr_29027_29059[(1)] = (13));

} else {
var statearr_29028_29060 = state_29017__$1;
(statearr_29028_29060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (2))){
var inst_28980 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28981 = (0);
var state_29017__$1 = (function (){var statearr_29029 = state_29017;
(statearr_29029[(9)] = inst_28980);

(statearr_29029[(7)] = inst_28981);

return statearr_29029;
})();
var statearr_29030_29061 = state_29017__$1;
(statearr_29030_29061[(2)] = null);

(statearr_29030_29061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (11))){
var inst_28981 = (state_29017[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29017,(10),Object,null,(9));
var inst_28990 = chs__$1.call(null,inst_28981);
var inst_28991 = done.call(null,inst_28981);
var inst_28992 = cljs.core.async.take_BANG_.call(null,inst_28990,inst_28991);
var state_29017__$1 = state_29017;
var statearr_29031_29062 = state_29017__$1;
(statearr_29031_29062[(2)] = inst_28992);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29017__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (9))){
var inst_28981 = (state_29017[(7)]);
var inst_28994 = (state_29017[(2)]);
var inst_28995 = (inst_28981 + (1));
var inst_28981__$1 = inst_28995;
var state_29017__$1 = (function (){var statearr_29032 = state_29017;
(statearr_29032[(10)] = inst_28994);

(statearr_29032[(7)] = inst_28981__$1);

return statearr_29032;
})();
var statearr_29033_29063 = state_29017__$1;
(statearr_29033_29063[(2)] = null);

(statearr_29033_29063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (5))){
var inst_29001 = (state_29017[(2)]);
var state_29017__$1 = (function (){var statearr_29034 = state_29017;
(statearr_29034[(11)] = inst_29001);

return statearr_29034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29017__$1,(12),dchan);
} else {
if((state_val_29018 === (14))){
var inst_29003 = (state_29017[(8)]);
var inst_29008 = cljs.core.apply.call(null,f,inst_29003);
var state_29017__$1 = state_29017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29017__$1,(16),out,inst_29008);
} else {
if((state_val_29018 === (16))){
var inst_29010 = (state_29017[(2)]);
var state_29017__$1 = (function (){var statearr_29035 = state_29017;
(statearr_29035[(12)] = inst_29010);

return statearr_29035;
})();
var statearr_29036_29064 = state_29017__$1;
(statearr_29036_29064[(2)] = null);

(statearr_29036_29064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (10))){
var inst_28985 = (state_29017[(2)]);
var inst_28986 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29017__$1 = (function (){var statearr_29037 = state_29017;
(statearr_29037[(13)] = inst_28985);

return statearr_29037;
})();
var statearr_29038_29065 = state_29017__$1;
(statearr_29038_29065[(2)] = inst_28986);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29017__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (8))){
var inst_28999 = (state_29017[(2)]);
var state_29017__$1 = state_29017;
var statearr_29039_29066 = state_29017__$1;
(statearr_29039_29066[(2)] = inst_28999);

(statearr_29039_29066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___29051,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26896__auto__,c__27008__auto___29051,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_29043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29043[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_29043[(1)] = (1));

return statearr_29043;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_29017){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29044){if((e29044 instanceof Object)){
var ex__26900__auto__ = e29044;
var statearr_29045_29067 = state_29017;
(statearr_29045_29067[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29068 = state_29017;
state_29017 = G__29068;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_29017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_29017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___29051,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27010__auto__ = (function (){var statearr_29046 = f__27009__auto__.call(null);
(statearr_29046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___29051);

return statearr_29046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___29051,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29070 = [];
var len__25911__auto___29128 = arguments.length;
var i__25912__auto___29129 = (0);
while(true){
if((i__25912__auto___29129 < len__25911__auto___29128)){
args29070.push((arguments[i__25912__auto___29129]));

var G__29130 = (i__25912__auto___29129 + (1));
i__25912__auto___29129 = G__29130;
continue;
} else {
}
break;
}

var G__29072 = args29070.length;
switch (G__29072) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29070.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27008__auto___29132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___29132,out){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___29132,out){
return (function (state_29104){
var state_val_29105 = (state_29104[(1)]);
if((state_val_29105 === (7))){
var inst_29083 = (state_29104[(7)]);
var inst_29084 = (state_29104[(8)]);
var inst_29083__$1 = (state_29104[(2)]);
var inst_29084__$1 = cljs.core.nth.call(null,inst_29083__$1,(0),null);
var inst_29085 = cljs.core.nth.call(null,inst_29083__$1,(1),null);
var inst_29086 = (inst_29084__$1 == null);
var state_29104__$1 = (function (){var statearr_29106 = state_29104;
(statearr_29106[(7)] = inst_29083__$1);

(statearr_29106[(9)] = inst_29085);

(statearr_29106[(8)] = inst_29084__$1);

return statearr_29106;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29107_29133 = state_29104__$1;
(statearr_29107_29133[(1)] = (8));

} else {
var statearr_29108_29134 = state_29104__$1;
(statearr_29108_29134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (1))){
var inst_29073 = cljs.core.vec.call(null,chs);
var inst_29074 = inst_29073;
var state_29104__$1 = (function (){var statearr_29109 = state_29104;
(statearr_29109[(10)] = inst_29074);

return statearr_29109;
})();
var statearr_29110_29135 = state_29104__$1;
(statearr_29110_29135[(2)] = null);

(statearr_29110_29135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (4))){
var inst_29074 = (state_29104[(10)]);
var state_29104__$1 = state_29104;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29104__$1,(7),inst_29074);
} else {
if((state_val_29105 === (6))){
var inst_29100 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29111_29136 = state_29104__$1;
(statearr_29111_29136[(2)] = inst_29100);

(statearr_29111_29136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (3))){
var inst_29102 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29104__$1,inst_29102);
} else {
if((state_val_29105 === (2))){
var inst_29074 = (state_29104[(10)]);
var inst_29076 = cljs.core.count.call(null,inst_29074);
var inst_29077 = (inst_29076 > (0));
var state_29104__$1 = state_29104;
if(cljs.core.truth_(inst_29077)){
var statearr_29113_29137 = state_29104__$1;
(statearr_29113_29137[(1)] = (4));

} else {
var statearr_29114_29138 = state_29104__$1;
(statearr_29114_29138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (11))){
var inst_29074 = (state_29104[(10)]);
var inst_29093 = (state_29104[(2)]);
var tmp29112 = inst_29074;
var inst_29074__$1 = tmp29112;
var state_29104__$1 = (function (){var statearr_29115 = state_29104;
(statearr_29115[(10)] = inst_29074__$1);

(statearr_29115[(11)] = inst_29093);

return statearr_29115;
})();
var statearr_29116_29139 = state_29104__$1;
(statearr_29116_29139[(2)] = null);

(statearr_29116_29139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (9))){
var inst_29084 = (state_29104[(8)]);
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29104__$1,(11),out,inst_29084);
} else {
if((state_val_29105 === (5))){
var inst_29098 = cljs.core.async.close_BANG_.call(null,out);
var state_29104__$1 = state_29104;
var statearr_29117_29140 = state_29104__$1;
(statearr_29117_29140[(2)] = inst_29098);

(statearr_29117_29140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (10))){
var inst_29096 = (state_29104[(2)]);
var state_29104__$1 = state_29104;
var statearr_29118_29141 = state_29104__$1;
(statearr_29118_29141[(2)] = inst_29096);

(statearr_29118_29141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29105 === (8))){
var inst_29083 = (state_29104[(7)]);
var inst_29085 = (state_29104[(9)]);
var inst_29074 = (state_29104[(10)]);
var inst_29084 = (state_29104[(8)]);
var inst_29088 = (function (){var cs = inst_29074;
var vec__29079 = inst_29083;
var v = inst_29084;
var c = inst_29085;
return ((function (cs,vec__29079,v,c,inst_29083,inst_29085,inst_29074,inst_29084,state_val_29105,c__27008__auto___29132,out){
return (function (p1__29069_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29069_SHARP_);
});
;})(cs,vec__29079,v,c,inst_29083,inst_29085,inst_29074,inst_29084,state_val_29105,c__27008__auto___29132,out))
})();
var inst_29089 = cljs.core.filterv.call(null,inst_29088,inst_29074);
var inst_29074__$1 = inst_29089;
var state_29104__$1 = (function (){var statearr_29119 = state_29104;
(statearr_29119[(10)] = inst_29074__$1);

return statearr_29119;
})();
var statearr_29120_29142 = state_29104__$1;
(statearr_29120_29142[(2)] = null);

(statearr_29120_29142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___29132,out))
;
return ((function (switch__26896__auto__,c__27008__auto___29132,out){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_29124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29124[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_29124[(1)] = (1));

return statearr_29124;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_29104){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29125){if((e29125 instanceof Object)){
var ex__26900__auto__ = e29125;
var statearr_29126_29143 = state_29104;
(statearr_29126_29143[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29144 = state_29104;
state_29104 = G__29144;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_29104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_29104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___29132,out))
})();
var state__27010__auto__ = (function (){var statearr_29127 = f__27009__auto__.call(null);
(statearr_29127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___29132);

return statearr_29127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___29132,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29145 = [];
var len__25911__auto___29194 = arguments.length;
var i__25912__auto___29195 = (0);
while(true){
if((i__25912__auto___29195 < len__25911__auto___29194)){
args29145.push((arguments[i__25912__auto___29195]));

var G__29196 = (i__25912__auto___29195 + (1));
i__25912__auto___29195 = G__29196;
continue;
} else {
}
break;
}

var G__29147 = args29145.length;
switch (G__29147) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29145.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27008__auto___29198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___29198,out){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___29198,out){
return (function (state_29171){
var state_val_29172 = (state_29171[(1)]);
if((state_val_29172 === (7))){
var inst_29153 = (state_29171[(7)]);
var inst_29153__$1 = (state_29171[(2)]);
var inst_29154 = (inst_29153__$1 == null);
var inst_29155 = cljs.core.not.call(null,inst_29154);
var state_29171__$1 = (function (){var statearr_29173 = state_29171;
(statearr_29173[(7)] = inst_29153__$1);

return statearr_29173;
})();
if(inst_29155){
var statearr_29174_29199 = state_29171__$1;
(statearr_29174_29199[(1)] = (8));

} else {
var statearr_29175_29200 = state_29171__$1;
(statearr_29175_29200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (1))){
var inst_29148 = (0);
var state_29171__$1 = (function (){var statearr_29176 = state_29171;
(statearr_29176[(8)] = inst_29148);

return statearr_29176;
})();
var statearr_29177_29201 = state_29171__$1;
(statearr_29177_29201[(2)] = null);

(statearr_29177_29201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (4))){
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29171__$1,(7),ch);
} else {
if((state_val_29172 === (6))){
var inst_29166 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29178_29202 = state_29171__$1;
(statearr_29178_29202[(2)] = inst_29166);

(statearr_29178_29202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (3))){
var inst_29168 = (state_29171[(2)]);
var inst_29169 = cljs.core.async.close_BANG_.call(null,out);
var state_29171__$1 = (function (){var statearr_29179 = state_29171;
(statearr_29179[(9)] = inst_29168);

return statearr_29179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29171__$1,inst_29169);
} else {
if((state_val_29172 === (2))){
var inst_29148 = (state_29171[(8)]);
var inst_29150 = (inst_29148 < n);
var state_29171__$1 = state_29171;
if(cljs.core.truth_(inst_29150)){
var statearr_29180_29203 = state_29171__$1;
(statearr_29180_29203[(1)] = (4));

} else {
var statearr_29181_29204 = state_29171__$1;
(statearr_29181_29204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (11))){
var inst_29148 = (state_29171[(8)]);
var inst_29158 = (state_29171[(2)]);
var inst_29159 = (inst_29148 + (1));
var inst_29148__$1 = inst_29159;
var state_29171__$1 = (function (){var statearr_29182 = state_29171;
(statearr_29182[(10)] = inst_29158);

(statearr_29182[(8)] = inst_29148__$1);

return statearr_29182;
})();
var statearr_29183_29205 = state_29171__$1;
(statearr_29183_29205[(2)] = null);

(statearr_29183_29205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (9))){
var state_29171__$1 = state_29171;
var statearr_29184_29206 = state_29171__$1;
(statearr_29184_29206[(2)] = null);

(statearr_29184_29206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (5))){
var state_29171__$1 = state_29171;
var statearr_29185_29207 = state_29171__$1;
(statearr_29185_29207[(2)] = null);

(statearr_29185_29207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (10))){
var inst_29163 = (state_29171[(2)]);
var state_29171__$1 = state_29171;
var statearr_29186_29208 = state_29171__$1;
(statearr_29186_29208[(2)] = inst_29163);

(statearr_29186_29208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29172 === (8))){
var inst_29153 = (state_29171[(7)]);
var state_29171__$1 = state_29171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(11),out,inst_29153);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___29198,out))
;
return ((function (switch__26896__auto__,c__27008__auto___29198,out){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_29190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29190[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_29190[(1)] = (1));

return statearr_29190;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_29171){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29191){if((e29191 instanceof Object)){
var ex__26900__auto__ = e29191;
var statearr_29192_29209 = state_29171;
(statearr_29192_29209[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29210 = state_29171;
state_29171 = G__29210;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_29171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_29171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___29198,out))
})();
var state__27010__auto__ = (function (){var statearr_29193 = f__27009__auto__.call(null);
(statearr_29193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___29198);

return statearr_29193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___29198,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29218 = (function (f,ch,meta29219){
this.f = f;
this.ch = ch;
this.meta29219 = meta29219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29220,meta29219__$1){
var self__ = this;
var _29220__$1 = this;
return (new cljs.core.async.t_cljs$core$async29218(self__.f,self__.ch,meta29219__$1));
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29220){
var self__ = this;
var _29220__$1 = this;
return self__.meta29219;
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29221 = (function (f,ch,meta29219,_,fn1,meta29222){
this.f = f;
this.ch = ch;
this.meta29219 = meta29219;
this._ = _;
this.fn1 = fn1;
this.meta29222 = meta29222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29223,meta29222__$1){
var self__ = this;
var _29223__$1 = this;
return (new cljs.core.async.t_cljs$core$async29221(self__.f,self__.ch,self__.meta29219,self__._,self__.fn1,meta29222__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29223){
var self__ = this;
var _29223__$1 = this;
return self__.meta29222;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29211_SHARP_){
return f1.call(null,(((p1__29211_SHARP_ == null))?null:self__.f.call(null,p1__29211_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29221.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29219","meta29219",-1095825849,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29218","cljs.core.async/t_cljs$core$async29218",613652897,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29222","meta29222",107259497,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29221";

cljs.core.async.t_cljs$core$async29221.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async29221");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29221 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29221(f__$1,ch__$1,meta29219__$1,___$2,fn1__$1,meta29222){
return (new cljs.core.async.t_cljs$core$async29221(f__$1,ch__$1,meta29219__$1,___$2,fn1__$1,meta29222));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29221(self__.f,self__.ch,self__.meta29219,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24791__auto__ = ret;
if(cljs.core.truth_(and__24791__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24791__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29219","meta29219",-1095825849,null)], null);
});

cljs.core.async.t_cljs$core$async29218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29218";

cljs.core.async.t_cljs$core$async29218.cljs$lang$ctorPrWriter = (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async29218");
});

cljs.core.async.__GT_t_cljs$core$async29218 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29218(f__$1,ch__$1,meta29219){
return (new cljs.core.async.t_cljs$core$async29218(f__$1,ch__$1,meta29219));
});

}

return (new cljs.core.async.t_cljs$core$async29218(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29227 = (function (f,ch,meta29228){
this.f = f;
this.ch = ch;
this.meta29228 = meta29228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29229,meta29228__$1){
var self__ = this;
var _29229__$1 = this;
return (new cljs.core.async.t_cljs$core$async29227(self__.f,self__.ch,meta29228__$1));
});

cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29229){
var self__ = this;
var _29229__$1 = this;
return self__.meta29228;
});

cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29228","meta29228",2103174614,null)], null);
});

cljs.core.async.t_cljs$core$async29227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29227";

cljs.core.async.t_cljs$core$async29227.cljs$lang$ctorPrWriter = (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async29227");
});

cljs.core.async.__GT_t_cljs$core$async29227 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29227(f__$1,ch__$1,meta29228){
return (new cljs.core.async.t_cljs$core$async29227(f__$1,ch__$1,meta29228));
});

}

return (new cljs.core.async.t_cljs$core$async29227(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29233 = (function (p,ch,meta29234){
this.p = p;
this.ch = ch;
this.meta29234 = meta29234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29235,meta29234__$1){
var self__ = this;
var _29235__$1 = this;
return (new cljs.core.async.t_cljs$core$async29233(self__.p,self__.ch,meta29234__$1));
});

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29235){
var self__ = this;
var _29235__$1 = this;
return self__.meta29234;
});

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29234","meta29234",1648651162,null)], null);
});

cljs.core.async.t_cljs$core$async29233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29233";

cljs.core.async.t_cljs$core$async29233.cljs$lang$ctorPrWriter = (function (this__25409__auto__,writer__25410__auto__,opt__25411__auto__){
return cljs.core._write.call(null,writer__25410__auto__,"cljs.core.async/t_cljs$core$async29233");
});

cljs.core.async.__GT_t_cljs$core$async29233 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29233(p__$1,ch__$1,meta29234){
return (new cljs.core.async.t_cljs$core$async29233(p__$1,ch__$1,meta29234));
});

}

return (new cljs.core.async.t_cljs$core$async29233(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29236 = [];
var len__25911__auto___29280 = arguments.length;
var i__25912__auto___29281 = (0);
while(true){
if((i__25912__auto___29281 < len__25911__auto___29280)){
args29236.push((arguments[i__25912__auto___29281]));

var G__29282 = (i__25912__auto___29281 + (1));
i__25912__auto___29281 = G__29282;
continue;
} else {
}
break;
}

var G__29238 = args29236.length;
switch (G__29238) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29236.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27008__auto___29284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___29284,out){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___29284,out){
return (function (state_29259){
var state_val_29260 = (state_29259[(1)]);
if((state_val_29260 === (7))){
var inst_29255 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
var statearr_29261_29285 = state_29259__$1;
(statearr_29261_29285[(2)] = inst_29255);

(statearr_29261_29285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (1))){
var state_29259__$1 = state_29259;
var statearr_29262_29286 = state_29259__$1;
(statearr_29262_29286[(2)] = null);

(statearr_29262_29286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (4))){
var inst_29241 = (state_29259[(7)]);
var inst_29241__$1 = (state_29259[(2)]);
var inst_29242 = (inst_29241__$1 == null);
var state_29259__$1 = (function (){var statearr_29263 = state_29259;
(statearr_29263[(7)] = inst_29241__$1);

return statearr_29263;
})();
if(cljs.core.truth_(inst_29242)){
var statearr_29264_29287 = state_29259__$1;
(statearr_29264_29287[(1)] = (5));

} else {
var statearr_29265_29288 = state_29259__$1;
(statearr_29265_29288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (6))){
var inst_29241 = (state_29259[(7)]);
var inst_29246 = p.call(null,inst_29241);
var state_29259__$1 = state_29259;
if(cljs.core.truth_(inst_29246)){
var statearr_29266_29289 = state_29259__$1;
(statearr_29266_29289[(1)] = (8));

} else {
var statearr_29267_29290 = state_29259__$1;
(statearr_29267_29290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (3))){
var inst_29257 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29259__$1,inst_29257);
} else {
if((state_val_29260 === (2))){
var state_29259__$1 = state_29259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29259__$1,(4),ch);
} else {
if((state_val_29260 === (11))){
var inst_29249 = (state_29259[(2)]);
var state_29259__$1 = state_29259;
var statearr_29268_29291 = state_29259__$1;
(statearr_29268_29291[(2)] = inst_29249);

(statearr_29268_29291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (9))){
var state_29259__$1 = state_29259;
var statearr_29269_29292 = state_29259__$1;
(statearr_29269_29292[(2)] = null);

(statearr_29269_29292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (5))){
var inst_29244 = cljs.core.async.close_BANG_.call(null,out);
var state_29259__$1 = state_29259;
var statearr_29270_29293 = state_29259__$1;
(statearr_29270_29293[(2)] = inst_29244);

(statearr_29270_29293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (10))){
var inst_29252 = (state_29259[(2)]);
var state_29259__$1 = (function (){var statearr_29271 = state_29259;
(statearr_29271[(8)] = inst_29252);

return statearr_29271;
})();
var statearr_29272_29294 = state_29259__$1;
(statearr_29272_29294[(2)] = null);

(statearr_29272_29294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29260 === (8))){
var inst_29241 = (state_29259[(7)]);
var state_29259__$1 = state_29259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29259__$1,(11),out,inst_29241);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___29284,out))
;
return ((function (switch__26896__auto__,c__27008__auto___29284,out){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_29276 = [null,null,null,null,null,null,null,null,null];
(statearr_29276[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_29276[(1)] = (1));

return statearr_29276;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_29259){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29277){if((e29277 instanceof Object)){
var ex__26900__auto__ = e29277;
var statearr_29278_29295 = state_29259;
(statearr_29278_29295[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29296 = state_29259;
state_29259 = G__29296;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_29259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_29259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___29284,out))
})();
var state__27010__auto__ = (function (){var statearr_29279 = f__27009__auto__.call(null);
(statearr_29279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___29284);

return statearr_29279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___29284,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29297 = [];
var len__25911__auto___29300 = arguments.length;
var i__25912__auto___29301 = (0);
while(true){
if((i__25912__auto___29301 < len__25911__auto___29300)){
args29297.push((arguments[i__25912__auto___29301]));

var G__29302 = (i__25912__auto___29301 + (1));
i__25912__auto___29301 = G__29302;
continue;
} else {
}
break;
}

var G__29299 = args29297.length;
switch (G__29299) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29297.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__){
return (function (state_29469){
var state_val_29470 = (state_29469[(1)]);
if((state_val_29470 === (7))){
var inst_29465 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
var statearr_29471_29512 = state_29469__$1;
(statearr_29471_29512[(2)] = inst_29465);

(statearr_29471_29512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (20))){
var inst_29435 = (state_29469[(7)]);
var inst_29446 = (state_29469[(2)]);
var inst_29447 = cljs.core.next.call(null,inst_29435);
var inst_29421 = inst_29447;
var inst_29422 = null;
var inst_29423 = (0);
var inst_29424 = (0);
var state_29469__$1 = (function (){var statearr_29472 = state_29469;
(statearr_29472[(8)] = inst_29424);

(statearr_29472[(9)] = inst_29446);

(statearr_29472[(10)] = inst_29422);

(statearr_29472[(11)] = inst_29421);

(statearr_29472[(12)] = inst_29423);

return statearr_29472;
})();
var statearr_29473_29513 = state_29469__$1;
(statearr_29473_29513[(2)] = null);

(statearr_29473_29513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (1))){
var state_29469__$1 = state_29469;
var statearr_29474_29514 = state_29469__$1;
(statearr_29474_29514[(2)] = null);

(statearr_29474_29514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (4))){
var inst_29410 = (state_29469[(13)]);
var inst_29410__$1 = (state_29469[(2)]);
var inst_29411 = (inst_29410__$1 == null);
var state_29469__$1 = (function (){var statearr_29475 = state_29469;
(statearr_29475[(13)] = inst_29410__$1);

return statearr_29475;
})();
if(cljs.core.truth_(inst_29411)){
var statearr_29476_29515 = state_29469__$1;
(statearr_29476_29515[(1)] = (5));

} else {
var statearr_29477_29516 = state_29469__$1;
(statearr_29477_29516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (15))){
var state_29469__$1 = state_29469;
var statearr_29481_29517 = state_29469__$1;
(statearr_29481_29517[(2)] = null);

(statearr_29481_29517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (21))){
var state_29469__$1 = state_29469;
var statearr_29482_29518 = state_29469__$1;
(statearr_29482_29518[(2)] = null);

(statearr_29482_29518[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (13))){
var inst_29424 = (state_29469[(8)]);
var inst_29422 = (state_29469[(10)]);
var inst_29421 = (state_29469[(11)]);
var inst_29423 = (state_29469[(12)]);
var inst_29431 = (state_29469[(2)]);
var inst_29432 = (inst_29424 + (1));
var tmp29478 = inst_29422;
var tmp29479 = inst_29421;
var tmp29480 = inst_29423;
var inst_29421__$1 = tmp29479;
var inst_29422__$1 = tmp29478;
var inst_29423__$1 = tmp29480;
var inst_29424__$1 = inst_29432;
var state_29469__$1 = (function (){var statearr_29483 = state_29469;
(statearr_29483[(8)] = inst_29424__$1);

(statearr_29483[(14)] = inst_29431);

(statearr_29483[(10)] = inst_29422__$1);

(statearr_29483[(11)] = inst_29421__$1);

(statearr_29483[(12)] = inst_29423__$1);

return statearr_29483;
})();
var statearr_29484_29519 = state_29469__$1;
(statearr_29484_29519[(2)] = null);

(statearr_29484_29519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (22))){
var state_29469__$1 = state_29469;
var statearr_29485_29520 = state_29469__$1;
(statearr_29485_29520[(2)] = null);

(statearr_29485_29520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (6))){
var inst_29410 = (state_29469[(13)]);
var inst_29419 = f.call(null,inst_29410);
var inst_29420 = cljs.core.seq.call(null,inst_29419);
var inst_29421 = inst_29420;
var inst_29422 = null;
var inst_29423 = (0);
var inst_29424 = (0);
var state_29469__$1 = (function (){var statearr_29486 = state_29469;
(statearr_29486[(8)] = inst_29424);

(statearr_29486[(10)] = inst_29422);

(statearr_29486[(11)] = inst_29421);

(statearr_29486[(12)] = inst_29423);

return statearr_29486;
})();
var statearr_29487_29521 = state_29469__$1;
(statearr_29487_29521[(2)] = null);

(statearr_29487_29521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (17))){
var inst_29435 = (state_29469[(7)]);
var inst_29439 = cljs.core.chunk_first.call(null,inst_29435);
var inst_29440 = cljs.core.chunk_rest.call(null,inst_29435);
var inst_29441 = cljs.core.count.call(null,inst_29439);
var inst_29421 = inst_29440;
var inst_29422 = inst_29439;
var inst_29423 = inst_29441;
var inst_29424 = (0);
var state_29469__$1 = (function (){var statearr_29488 = state_29469;
(statearr_29488[(8)] = inst_29424);

(statearr_29488[(10)] = inst_29422);

(statearr_29488[(11)] = inst_29421);

(statearr_29488[(12)] = inst_29423);

return statearr_29488;
})();
var statearr_29489_29522 = state_29469__$1;
(statearr_29489_29522[(2)] = null);

(statearr_29489_29522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (3))){
var inst_29467 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29469__$1,inst_29467);
} else {
if((state_val_29470 === (12))){
var inst_29455 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
var statearr_29490_29523 = state_29469__$1;
(statearr_29490_29523[(2)] = inst_29455);

(statearr_29490_29523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (2))){
var state_29469__$1 = state_29469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29469__$1,(4),in$);
} else {
if((state_val_29470 === (23))){
var inst_29463 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
var statearr_29491_29524 = state_29469__$1;
(statearr_29491_29524[(2)] = inst_29463);

(statearr_29491_29524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (19))){
var inst_29450 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
var statearr_29492_29525 = state_29469__$1;
(statearr_29492_29525[(2)] = inst_29450);

(statearr_29492_29525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (11))){
var inst_29421 = (state_29469[(11)]);
var inst_29435 = (state_29469[(7)]);
var inst_29435__$1 = cljs.core.seq.call(null,inst_29421);
var state_29469__$1 = (function (){var statearr_29493 = state_29469;
(statearr_29493[(7)] = inst_29435__$1);

return statearr_29493;
})();
if(inst_29435__$1){
var statearr_29494_29526 = state_29469__$1;
(statearr_29494_29526[(1)] = (14));

} else {
var statearr_29495_29527 = state_29469__$1;
(statearr_29495_29527[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (9))){
var inst_29457 = (state_29469[(2)]);
var inst_29458 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29469__$1 = (function (){var statearr_29496 = state_29469;
(statearr_29496[(15)] = inst_29457);

return statearr_29496;
})();
if(cljs.core.truth_(inst_29458)){
var statearr_29497_29528 = state_29469__$1;
(statearr_29497_29528[(1)] = (21));

} else {
var statearr_29498_29529 = state_29469__$1;
(statearr_29498_29529[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (5))){
var inst_29413 = cljs.core.async.close_BANG_.call(null,out);
var state_29469__$1 = state_29469;
var statearr_29499_29530 = state_29469__$1;
(statearr_29499_29530[(2)] = inst_29413);

(statearr_29499_29530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (14))){
var inst_29435 = (state_29469[(7)]);
var inst_29437 = cljs.core.chunked_seq_QMARK_.call(null,inst_29435);
var state_29469__$1 = state_29469;
if(inst_29437){
var statearr_29500_29531 = state_29469__$1;
(statearr_29500_29531[(1)] = (17));

} else {
var statearr_29501_29532 = state_29469__$1;
(statearr_29501_29532[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (16))){
var inst_29453 = (state_29469[(2)]);
var state_29469__$1 = state_29469;
var statearr_29502_29533 = state_29469__$1;
(statearr_29502_29533[(2)] = inst_29453);

(statearr_29502_29533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29470 === (10))){
var inst_29424 = (state_29469[(8)]);
var inst_29422 = (state_29469[(10)]);
var inst_29429 = cljs.core._nth.call(null,inst_29422,inst_29424);
var state_29469__$1 = state_29469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29469__$1,(13),out,inst_29429);
} else {
if((state_val_29470 === (18))){
var inst_29435 = (state_29469[(7)]);
var inst_29444 = cljs.core.first.call(null,inst_29435);
var state_29469__$1 = state_29469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29469__$1,(20),out,inst_29444);
} else {
if((state_val_29470 === (8))){
var inst_29424 = (state_29469[(8)]);
var inst_29423 = (state_29469[(12)]);
var inst_29426 = (inst_29424 < inst_29423);
var inst_29427 = inst_29426;
var state_29469__$1 = state_29469;
if(cljs.core.truth_(inst_29427)){
var statearr_29503_29534 = state_29469__$1;
(statearr_29503_29534[(1)] = (10));

} else {
var statearr_29504_29535 = state_29469__$1;
(statearr_29504_29535[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto__))
;
return ((function (switch__26896__auto__,c__27008__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26897__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26897__auto____0 = (function (){
var statearr_29508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29508[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26897__auto__);

(statearr_29508[(1)] = (1));

return statearr_29508;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26897__auto____1 = (function (state_29469){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29509){if((e29509 instanceof Object)){
var ex__26900__auto__ = e29509;
var statearr_29510_29536 = state_29469;
(statearr_29510_29536[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29537 = state_29469;
state_29469 = G__29537;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26897__auto__ = function(state_29469){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26897__auto____1.call(this,state_29469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26897__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26897__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__))
})();
var state__27010__auto__ = (function (){var statearr_29511 = f__27009__auto__.call(null);
(statearr_29511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_29511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__))
);

return c__27008__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29538 = [];
var len__25911__auto___29541 = arguments.length;
var i__25912__auto___29542 = (0);
while(true){
if((i__25912__auto___29542 < len__25911__auto___29541)){
args29538.push((arguments[i__25912__auto___29542]));

var G__29543 = (i__25912__auto___29542 + (1));
i__25912__auto___29542 = G__29543;
continue;
} else {
}
break;
}

var G__29540 = args29538.length;
switch (G__29540) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29538.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29545 = [];
var len__25911__auto___29548 = arguments.length;
var i__25912__auto___29549 = (0);
while(true){
if((i__25912__auto___29549 < len__25911__auto___29548)){
args29545.push((arguments[i__25912__auto___29549]));

var G__29550 = (i__25912__auto___29549 + (1));
i__25912__auto___29549 = G__29550;
continue;
} else {
}
break;
}

var G__29547 = args29545.length;
switch (G__29547) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29545.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29552 = [];
var len__25911__auto___29603 = arguments.length;
var i__25912__auto___29604 = (0);
while(true){
if((i__25912__auto___29604 < len__25911__auto___29603)){
args29552.push((arguments[i__25912__auto___29604]));

var G__29605 = (i__25912__auto___29604 + (1));
i__25912__auto___29604 = G__29605;
continue;
} else {
}
break;
}

var G__29554 = args29552.length;
switch (G__29554) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29552.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27008__auto___29607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___29607,out){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___29607,out){
return (function (state_29578){
var state_val_29579 = (state_29578[(1)]);
if((state_val_29579 === (7))){
var inst_29573 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
var statearr_29580_29608 = state_29578__$1;
(statearr_29580_29608[(2)] = inst_29573);

(statearr_29580_29608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (1))){
var inst_29555 = null;
var state_29578__$1 = (function (){var statearr_29581 = state_29578;
(statearr_29581[(7)] = inst_29555);

return statearr_29581;
})();
var statearr_29582_29609 = state_29578__$1;
(statearr_29582_29609[(2)] = null);

(statearr_29582_29609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (4))){
var inst_29558 = (state_29578[(8)]);
var inst_29558__$1 = (state_29578[(2)]);
var inst_29559 = (inst_29558__$1 == null);
var inst_29560 = cljs.core.not.call(null,inst_29559);
var state_29578__$1 = (function (){var statearr_29583 = state_29578;
(statearr_29583[(8)] = inst_29558__$1);

return statearr_29583;
})();
if(inst_29560){
var statearr_29584_29610 = state_29578__$1;
(statearr_29584_29610[(1)] = (5));

} else {
var statearr_29585_29611 = state_29578__$1;
(statearr_29585_29611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (6))){
var state_29578__$1 = state_29578;
var statearr_29586_29612 = state_29578__$1;
(statearr_29586_29612[(2)] = null);

(statearr_29586_29612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (3))){
var inst_29575 = (state_29578[(2)]);
var inst_29576 = cljs.core.async.close_BANG_.call(null,out);
var state_29578__$1 = (function (){var statearr_29587 = state_29578;
(statearr_29587[(9)] = inst_29575);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29578__$1,inst_29576);
} else {
if((state_val_29579 === (2))){
var state_29578__$1 = state_29578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29578__$1,(4),ch);
} else {
if((state_val_29579 === (11))){
var inst_29558 = (state_29578[(8)]);
var inst_29567 = (state_29578[(2)]);
var inst_29555 = inst_29558;
var state_29578__$1 = (function (){var statearr_29588 = state_29578;
(statearr_29588[(10)] = inst_29567);

(statearr_29588[(7)] = inst_29555);

return statearr_29588;
})();
var statearr_29589_29613 = state_29578__$1;
(statearr_29589_29613[(2)] = null);

(statearr_29589_29613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (9))){
var inst_29558 = (state_29578[(8)]);
var state_29578__$1 = state_29578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29578__$1,(11),out,inst_29558);
} else {
if((state_val_29579 === (5))){
var inst_29558 = (state_29578[(8)]);
var inst_29555 = (state_29578[(7)]);
var inst_29562 = cljs.core._EQ_.call(null,inst_29558,inst_29555);
var state_29578__$1 = state_29578;
if(inst_29562){
var statearr_29591_29614 = state_29578__$1;
(statearr_29591_29614[(1)] = (8));

} else {
var statearr_29592_29615 = state_29578__$1;
(statearr_29592_29615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (10))){
var inst_29570 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
var statearr_29593_29616 = state_29578__$1;
(statearr_29593_29616[(2)] = inst_29570);

(statearr_29593_29616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (8))){
var inst_29555 = (state_29578[(7)]);
var tmp29590 = inst_29555;
var inst_29555__$1 = tmp29590;
var state_29578__$1 = (function (){var statearr_29594 = state_29578;
(statearr_29594[(7)] = inst_29555__$1);

return statearr_29594;
})();
var statearr_29595_29617 = state_29578__$1;
(statearr_29595_29617[(2)] = null);

(statearr_29595_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___29607,out))
;
return ((function (switch__26896__auto__,c__27008__auto___29607,out){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_29599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29599[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_29599[(1)] = (1));

return statearr_29599;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_29578){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29600){if((e29600 instanceof Object)){
var ex__26900__auto__ = e29600;
var statearr_29601_29618 = state_29578;
(statearr_29601_29618[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29619 = state_29578;
state_29578 = G__29619;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_29578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_29578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___29607,out))
})();
var state__27010__auto__ = (function (){var statearr_29602 = f__27009__auto__.call(null);
(statearr_29602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___29607);

return statearr_29602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___29607,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29620 = [];
var len__25911__auto___29690 = arguments.length;
var i__25912__auto___29691 = (0);
while(true){
if((i__25912__auto___29691 < len__25911__auto___29690)){
args29620.push((arguments[i__25912__auto___29691]));

var G__29692 = (i__25912__auto___29691 + (1));
i__25912__auto___29691 = G__29692;
continue;
} else {
}
break;
}

var G__29622 = args29620.length;
switch (G__29622) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29620.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27008__auto___29694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___29694,out){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___29694,out){
return (function (state_29660){
var state_val_29661 = (state_29660[(1)]);
if((state_val_29661 === (7))){
var inst_29656 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29662_29695 = state_29660__$1;
(statearr_29662_29695[(2)] = inst_29656);

(statearr_29662_29695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (1))){
var inst_29623 = (new Array(n));
var inst_29624 = inst_29623;
var inst_29625 = (0);
var state_29660__$1 = (function (){var statearr_29663 = state_29660;
(statearr_29663[(7)] = inst_29624);

(statearr_29663[(8)] = inst_29625);

return statearr_29663;
})();
var statearr_29664_29696 = state_29660__$1;
(statearr_29664_29696[(2)] = null);

(statearr_29664_29696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (4))){
var inst_29628 = (state_29660[(9)]);
var inst_29628__$1 = (state_29660[(2)]);
var inst_29629 = (inst_29628__$1 == null);
var inst_29630 = cljs.core.not.call(null,inst_29629);
var state_29660__$1 = (function (){var statearr_29665 = state_29660;
(statearr_29665[(9)] = inst_29628__$1);

return statearr_29665;
})();
if(inst_29630){
var statearr_29666_29697 = state_29660__$1;
(statearr_29666_29697[(1)] = (5));

} else {
var statearr_29667_29698 = state_29660__$1;
(statearr_29667_29698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (15))){
var inst_29650 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29668_29699 = state_29660__$1;
(statearr_29668_29699[(2)] = inst_29650);

(statearr_29668_29699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (13))){
var state_29660__$1 = state_29660;
var statearr_29669_29700 = state_29660__$1;
(statearr_29669_29700[(2)] = null);

(statearr_29669_29700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (6))){
var inst_29625 = (state_29660[(8)]);
var inst_29646 = (inst_29625 > (0));
var state_29660__$1 = state_29660;
if(cljs.core.truth_(inst_29646)){
var statearr_29670_29701 = state_29660__$1;
(statearr_29670_29701[(1)] = (12));

} else {
var statearr_29671_29702 = state_29660__$1;
(statearr_29671_29702[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (3))){
var inst_29658 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29660__$1,inst_29658);
} else {
if((state_val_29661 === (12))){
var inst_29624 = (state_29660[(7)]);
var inst_29648 = cljs.core.vec.call(null,inst_29624);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29660__$1,(15),out,inst_29648);
} else {
if((state_val_29661 === (2))){
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29660__$1,(4),ch);
} else {
if((state_val_29661 === (11))){
var inst_29640 = (state_29660[(2)]);
var inst_29641 = (new Array(n));
var inst_29624 = inst_29641;
var inst_29625 = (0);
var state_29660__$1 = (function (){var statearr_29672 = state_29660;
(statearr_29672[(7)] = inst_29624);

(statearr_29672[(8)] = inst_29625);

(statearr_29672[(10)] = inst_29640);

return statearr_29672;
})();
var statearr_29673_29703 = state_29660__$1;
(statearr_29673_29703[(2)] = null);

(statearr_29673_29703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (9))){
var inst_29624 = (state_29660[(7)]);
var inst_29638 = cljs.core.vec.call(null,inst_29624);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29660__$1,(11),out,inst_29638);
} else {
if((state_val_29661 === (5))){
var inst_29633 = (state_29660[(11)]);
var inst_29624 = (state_29660[(7)]);
var inst_29628 = (state_29660[(9)]);
var inst_29625 = (state_29660[(8)]);
var inst_29632 = (inst_29624[inst_29625] = inst_29628);
var inst_29633__$1 = (inst_29625 + (1));
var inst_29634 = (inst_29633__$1 < n);
var state_29660__$1 = (function (){var statearr_29674 = state_29660;
(statearr_29674[(12)] = inst_29632);

(statearr_29674[(11)] = inst_29633__$1);

return statearr_29674;
})();
if(cljs.core.truth_(inst_29634)){
var statearr_29675_29704 = state_29660__$1;
(statearr_29675_29704[(1)] = (8));

} else {
var statearr_29676_29705 = state_29660__$1;
(statearr_29676_29705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (14))){
var inst_29653 = (state_29660[(2)]);
var inst_29654 = cljs.core.async.close_BANG_.call(null,out);
var state_29660__$1 = (function (){var statearr_29678 = state_29660;
(statearr_29678[(13)] = inst_29653);

return statearr_29678;
})();
var statearr_29679_29706 = state_29660__$1;
(statearr_29679_29706[(2)] = inst_29654);

(statearr_29679_29706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (10))){
var inst_29644 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29680_29707 = state_29660__$1;
(statearr_29680_29707[(2)] = inst_29644);

(statearr_29680_29707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (8))){
var inst_29633 = (state_29660[(11)]);
var inst_29624 = (state_29660[(7)]);
var tmp29677 = inst_29624;
var inst_29624__$1 = tmp29677;
var inst_29625 = inst_29633;
var state_29660__$1 = (function (){var statearr_29681 = state_29660;
(statearr_29681[(7)] = inst_29624__$1);

(statearr_29681[(8)] = inst_29625);

return statearr_29681;
})();
var statearr_29682_29708 = state_29660__$1;
(statearr_29682_29708[(2)] = null);

(statearr_29682_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___29694,out))
;
return ((function (switch__26896__auto__,c__27008__auto___29694,out){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_29686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29686[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_29686[(1)] = (1));

return statearr_29686;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_29660){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29687){if((e29687 instanceof Object)){
var ex__26900__auto__ = e29687;
var statearr_29688_29709 = state_29660;
(statearr_29688_29709[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29710 = state_29660;
state_29660 = G__29710;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_29660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_29660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___29694,out))
})();
var state__27010__auto__ = (function (){var statearr_29689 = f__27009__auto__.call(null);
(statearr_29689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___29694);

return statearr_29689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___29694,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29711 = [];
var len__25911__auto___29785 = arguments.length;
var i__25912__auto___29786 = (0);
while(true){
if((i__25912__auto___29786 < len__25911__auto___29785)){
args29711.push((arguments[i__25912__auto___29786]));

var G__29787 = (i__25912__auto___29786 + (1));
i__25912__auto___29786 = G__29787;
continue;
} else {
}
break;
}

var G__29713 = args29711.length;
switch (G__29713) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29711.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27008__auto___29789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___29789,out){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___29789,out){
return (function (state_29755){
var state_val_29756 = (state_29755[(1)]);
if((state_val_29756 === (7))){
var inst_29751 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29757_29790 = state_29755__$1;
(statearr_29757_29790[(2)] = inst_29751);

(statearr_29757_29790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (1))){
var inst_29714 = [];
var inst_29715 = inst_29714;
var inst_29716 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29755__$1 = (function (){var statearr_29758 = state_29755;
(statearr_29758[(7)] = inst_29715);

(statearr_29758[(8)] = inst_29716);

return statearr_29758;
})();
var statearr_29759_29791 = state_29755__$1;
(statearr_29759_29791[(2)] = null);

(statearr_29759_29791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (4))){
var inst_29719 = (state_29755[(9)]);
var inst_29719__$1 = (state_29755[(2)]);
var inst_29720 = (inst_29719__$1 == null);
var inst_29721 = cljs.core.not.call(null,inst_29720);
var state_29755__$1 = (function (){var statearr_29760 = state_29755;
(statearr_29760[(9)] = inst_29719__$1);

return statearr_29760;
})();
if(inst_29721){
var statearr_29761_29792 = state_29755__$1;
(statearr_29761_29792[(1)] = (5));

} else {
var statearr_29762_29793 = state_29755__$1;
(statearr_29762_29793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (15))){
var inst_29745 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29763_29794 = state_29755__$1;
(statearr_29763_29794[(2)] = inst_29745);

(statearr_29763_29794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (13))){
var state_29755__$1 = state_29755;
var statearr_29764_29795 = state_29755__$1;
(statearr_29764_29795[(2)] = null);

(statearr_29764_29795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (6))){
var inst_29715 = (state_29755[(7)]);
var inst_29740 = inst_29715.length;
var inst_29741 = (inst_29740 > (0));
var state_29755__$1 = state_29755;
if(cljs.core.truth_(inst_29741)){
var statearr_29765_29796 = state_29755__$1;
(statearr_29765_29796[(1)] = (12));

} else {
var statearr_29766_29797 = state_29755__$1;
(statearr_29766_29797[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (3))){
var inst_29753 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29755__$1,inst_29753);
} else {
if((state_val_29756 === (12))){
var inst_29715 = (state_29755[(7)]);
var inst_29743 = cljs.core.vec.call(null,inst_29715);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29755__$1,(15),out,inst_29743);
} else {
if((state_val_29756 === (2))){
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29755__$1,(4),ch);
} else {
if((state_val_29756 === (11))){
var inst_29723 = (state_29755[(10)]);
var inst_29719 = (state_29755[(9)]);
var inst_29733 = (state_29755[(2)]);
var inst_29734 = [];
var inst_29735 = inst_29734.push(inst_29719);
var inst_29715 = inst_29734;
var inst_29716 = inst_29723;
var state_29755__$1 = (function (){var statearr_29767 = state_29755;
(statearr_29767[(7)] = inst_29715);

(statearr_29767[(8)] = inst_29716);

(statearr_29767[(11)] = inst_29733);

(statearr_29767[(12)] = inst_29735);

return statearr_29767;
})();
var statearr_29768_29798 = state_29755__$1;
(statearr_29768_29798[(2)] = null);

(statearr_29768_29798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (9))){
var inst_29715 = (state_29755[(7)]);
var inst_29731 = cljs.core.vec.call(null,inst_29715);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29755__$1,(11),out,inst_29731);
} else {
if((state_val_29756 === (5))){
var inst_29723 = (state_29755[(10)]);
var inst_29719 = (state_29755[(9)]);
var inst_29716 = (state_29755[(8)]);
var inst_29723__$1 = f.call(null,inst_29719);
var inst_29724 = cljs.core._EQ_.call(null,inst_29723__$1,inst_29716);
var inst_29725 = cljs.core.keyword_identical_QMARK_.call(null,inst_29716,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29726 = (inst_29724) || (inst_29725);
var state_29755__$1 = (function (){var statearr_29769 = state_29755;
(statearr_29769[(10)] = inst_29723__$1);

return statearr_29769;
})();
if(cljs.core.truth_(inst_29726)){
var statearr_29770_29799 = state_29755__$1;
(statearr_29770_29799[(1)] = (8));

} else {
var statearr_29771_29800 = state_29755__$1;
(statearr_29771_29800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (14))){
var inst_29748 = (state_29755[(2)]);
var inst_29749 = cljs.core.async.close_BANG_.call(null,out);
var state_29755__$1 = (function (){var statearr_29773 = state_29755;
(statearr_29773[(13)] = inst_29748);

return statearr_29773;
})();
var statearr_29774_29801 = state_29755__$1;
(statearr_29774_29801[(2)] = inst_29749);

(statearr_29774_29801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (10))){
var inst_29738 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29775_29802 = state_29755__$1;
(statearr_29775_29802[(2)] = inst_29738);

(statearr_29775_29802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (8))){
var inst_29723 = (state_29755[(10)]);
var inst_29719 = (state_29755[(9)]);
var inst_29715 = (state_29755[(7)]);
var inst_29728 = inst_29715.push(inst_29719);
var tmp29772 = inst_29715;
var inst_29715__$1 = tmp29772;
var inst_29716 = inst_29723;
var state_29755__$1 = (function (){var statearr_29776 = state_29755;
(statearr_29776[(7)] = inst_29715__$1);

(statearr_29776[(8)] = inst_29716);

(statearr_29776[(14)] = inst_29728);

return statearr_29776;
})();
var statearr_29777_29803 = state_29755__$1;
(statearr_29777_29803[(2)] = null);

(statearr_29777_29803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27008__auto___29789,out))
;
return ((function (switch__26896__auto__,c__27008__auto___29789,out){
return (function() {
var cljs$core$async$state_machine__26897__auto__ = null;
var cljs$core$async$state_machine__26897__auto____0 = (function (){
var statearr_29781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29781[(0)] = cljs$core$async$state_machine__26897__auto__);

(statearr_29781[(1)] = (1));

return statearr_29781;
});
var cljs$core$async$state_machine__26897__auto____1 = (function (state_29755){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_29755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e29782){if((e29782 instanceof Object)){
var ex__26900__auto__ = e29782;
var statearr_29783_29804 = state_29755;
(statearr_29783_29804[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29805 = state_29755;
state_29755 = G__29805;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
cljs$core$async$state_machine__26897__auto__ = function(state_29755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26897__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26897__auto____1.call(this,state_29755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26897__auto____0;
cljs$core$async$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26897__auto____1;
return cljs$core$async$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___29789,out))
})();
var state__27010__auto__ = (function (){var statearr_29784 = f__27009__auto__.call(null);
(statearr_29784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___29789);

return statearr_29784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___29789,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1490842127417