// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.xerror.core');
goog.require('cljs.core');
thi.ng.xerror.core.throw_BANG_ = (function thi$ng$xerror$core$throw_BANG_(msg){
throw (new Error(msg));
});
thi.ng.xerror.core.key_error_BANG_ = (function thi$ng$xerror$core$key_error_BANG_(k){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Illegal lookup key: "),cljs.core.str(k)].join(''));
});
thi.ng.xerror.core.type_error_BANG_ = (function thi$ng$xerror$core$type_error_BANG_(t,x){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Can't cast to "),cljs.core.str(t),cljs.core.str(" from "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''));
});
thi.ng.xerror.core.arity_error_BANG_ = (function thi$ng$xerror$core$arity_error_BANG_(n){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Wrong number of args: "),cljs.core.str(n)].join(''));
});
thi.ng.xerror.core.illegal_arg_BANG_ = (function thi$ng$xerror$core$illegal_arg_BANG_(var_args){
var args29945 = [];
var len__21023__auto___29948 = arguments.length;
var i__21024__auto___29949 = (0);
while(true){
if((i__21024__auto___29949 < len__21023__auto___29948)){
args29945.push((arguments[i__21024__auto___29949]));

var G__29950 = (i__21024__auto___29949 + (1));
i__21024__auto___29949 = G__29950;
continue;
} else {
}
break;
}

var G__29947 = args29945.length;
switch (G__29947) {
case 1:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29945.length)].join('')));

}
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,"Illegal argument",x);
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,x){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str(msg),cljs.core.str(": "),cljs.core.str(x)].join(''));
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$lang$maxFixedArity = 2;

thi.ng.xerror.core.unsupported_BANG_ = (function thi$ng$xerror$core$unsupported_BANG_(var_args){
var args29952 = [];
var len__21023__auto___29955 = arguments.length;
var i__21024__auto___29956 = (0);
while(true){
if((i__21024__auto___29956 < len__21023__auto___29955)){
args29952.push((arguments[i__21024__auto___29956]));

var G__29957 = (i__21024__auto___29956 + (1));
i__21024__auto___29956 = G__29957;
continue;
} else {
}
break;
}

var G__29954 = args29952.length;
switch (G__29954) {
case 0:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29952.length)].join('')));

}
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.xerror.core.unsupported_BANG_.call(null,"Unsupported operation");
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw (new Error(msg));
});

thi.ng.xerror.core.unsupported_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=core.js.map