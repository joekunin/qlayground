// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__21245__auto__ = [];
var len__21238__auto___25554 = arguments.length;
var i__21239__auto___25555 = (0);
while(true){
if((i__21239__auto___25555 < len__21238__auto___25554)){
args__21245__auto__.push((arguments[i__21239__auto___25555]));

var G__25556 = (i__21239__auto___25555 + (1));
i__21239__auto___25555 = G__25556;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((2) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21246__auto__);
});

thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__25550){
var vec__25551 = p__25550;
var default$ = cljs.core.nth.call(null,vec__25551,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq25547){
var G__25548 = cljs.core.first.call(null,seq25547);
var seq25547__$1 = cljs.core.next.call(null,seq25547);
var G__25549 = cljs.core.first.call(null,seq25547__$1);
var seq25547__$2 = cljs.core.next.call(null,seq25547__$1);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(G__25548,G__25549,seq25547__$2);
});

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__21245__auto__ = [];
var len__21238__auto___25564 = arguments.length;
var i__21239__auto___25565 = (0);
while(true){
if((i__21239__auto___25565 < len__21238__auto___25564)){
args__21245__auto__.push((arguments[i__21239__auto___25565]));

var G__25566 = (i__21239__auto___25565 + (1));
i__21239__auto___25565 = G__25566;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((2) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21246__auto__);
});

thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__25560){
var vec__25561 = p__25560;
var default$ = cljs.core.nth.call(null,vec__25561,(0),null);
return thi.ng.strf.core.parse_int.call(null,x,radix,default$);
});

thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq25557){
var G__25558 = cljs.core.first.call(null,seq25557);
var seq25557__$1 = cljs.core.next.call(null,seq25557);
var G__25559 = cljs.core.first.call(null,seq25557__$1);
var seq25557__$2 = cljs.core.next.call(null,seq25557__$1);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic(G__25558,G__25559,seq25557__$2);
});

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__21245__auto__ = [];
var len__21238__auto___25573 = arguments.length;
var i__21239__auto___25574 = (0);
while(true){
if((i__21239__auto___25574 < len__21238__auto___25573)){
args__21245__auto__.push((arguments[i__21239__auto___25574]));

var G__25575 = (i__21239__auto___25574 + (1));
i__21239__auto___25574 = G__25575;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((1) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21246__auto__);
});

thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__25569){
var vec__25570 = p__25569;
var default$ = cljs.core.nth.call(null,vec__25570,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq25567){
var G__25568 = cljs.core.first.call(null,seq25567);
var seq25567__$1 = cljs.core.next.call(null,seq25567);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(G__25568,seq25567__$1);
});

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__21245__auto__ = [];
var len__21238__auto___25582 = arguments.length;
var i__21239__auto___25583 = (0);
while(true){
if((i__21239__auto___25583 < len__21238__auto___25582)){
args__21245__auto__.push((arguments[i__21239__auto___25583]));

var G__25584 = (i__21239__auto___25583 + (1));
i__21239__auto___25583 = G__25584;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((1) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21246__auto__);
});

thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__25578){
var vec__25579 = p__25578;
var default$ = cljs.core.nth.call(null,vec__25579,(0),null);
return thi.ng.strf.core.parse_float.call(null,x,default$);
});

thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq25576){
var G__25577 = cljs.core.first.call(null,seq25576);
var seq25576__$1 = cljs.core.next.call(null,seq25576);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic(G__25577,seq25576__$1);
});

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize.call(null,(function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str(cljs.core.subs.call(null,fill__$1,(0),(len - l))),cljs.core.str(x)].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.pad_right = cljs.core.memoize.call(null,(function (len,fill){
var fill__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l < len)){
return [cljs.core.str(x),cljs.core.str(cljs.core.subs.call(null,fill__$1,(0),(len - l)))].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.hex = cljs.core.memoize.call(null,(function (len){
var pad = thi.ng.strf.core.pad_left.call(null,len,"0");
return ((function (pad){
return (function (x){
return pad.call(null,(new Number(thi.ng.strf.core.int$.call(null,x))).toString((16)));
});
;})(pad))
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count.call(null,x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.call(null,x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__21245__auto__ = [];
var len__21238__auto___25587 = arguments.length;
var i__21239__auto___25588 = (0);
while(true){
if((i__21239__auto___25588 < len__21238__auto___25587)){
args__21245__auto__.push((arguments[i__21239__auto___25588]));

var G__25589 = (i__21239__auto___25588 + (1));
i__21239__auto___25588 = G__25589;
continue;
} else {
}
break;
}

var argseq__21246__auto__ = ((((1) < args__21245__auto__.length))?(new cljs.core.IndexedSeq(args__21245__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21246__auto__);
});

thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,fmt__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var f = temp__5718__auto__;
if(typeof f === 'string'){
var G__25590 = cljs.core.conj_BANG_.call(null,s,f);
var G__25591 = cljs.core.next.call(null,fmt__$1);
var G__25592 = args__$1;
s = G__25590;
fmt__$1 = G__25591;
args__$1 = G__25592;
continue;
} else {
var G__25593 = cljs.core.conj_BANG_.call(null,s,f.call(null,cljs.core.first.call(null,args__$1)));
var G__25594 = cljs.core.next.call(null,fmt__$1);
var G__25595 = cljs.core.next.call(null,args__$1);
s = G__25593;
fmt__$1 = G__25594;
args__$1 = G__25595;
continue;
}
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.persistent_BANG_.call(null,s));
}
break;
}
});

thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq25585){
var G__25586 = cljs.core.first.call(null,seq25585);
var seq25585__$1 = cljs.core.next.call(null,seq25585);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(G__25586,seq25585__$1);
});

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.call(null,thi.ng.strf.core.pad_left.call(null,(2),"0"),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields.call(null,d));
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),((function (d2){
return (function (d){
var vec__25597 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__25597,(0),null);
var m = cljs.core.nth.call(null,vec__25597,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__25597,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),((function (d2){
return (function (d){
var vec__25600 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__25600,(0),null);
var m = cljs.core.nth.call(null,vec__25600,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__25600,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),m,d__$1,y);
});})(d2))
,new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),((function (d2){
return (function (d){
var vec__25603 = thi.ng.strf.core.date_fields.call(null,d);
var y = cljs.core.nth.call(null,vec__25603,(0),null);
var m = cljs.core.nth.call(null,vec__25603,(1),null);
var d__$1 = cljs.core.nth.call(null,vec__25603,(2),null);
return thi.ng.strf.core.format.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.call(null,d2,((function (vec__25603,y,m,d__$1,d2){
return (function (p1__25596_SHARP_){
return cljs.core.mod.call(null,p1__25596_SHARP_,(100));
});})(vec__25603,y,m,d__$1,d2))
)], null),d__$1,m,y);
});})(d2))
,new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),((function (d2){
return (function (d){
return cljs.core.apply.call(null,thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields.call(null,d));
});})(d2))
], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var args25606 = [];
var len__21238__auto___25609 = arguments.length;
var i__21239__auto___25610 = (0);
while(true){
if((i__21239__auto___25610 < len__21238__auto___25609)){
args25606.push((arguments[i__21239__auto___25610]));

var G__25611 = (i__21239__auto___25610 + (1));
i__21239__auto___25610 = G__25611;
continue;
} else {
}
break;
}

var G__25608 = args25606.length;
switch (G__25608) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25606.length)].join('')));

}
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return thi.ng.strf.core.date_formatters.call(null,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)).call(null,d);
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_.call(null,fmt)){
return fmt.call(null,d);
} else {
return thi.ng.strf.core.date_formatters.call(null,fmt).call(null,d);
}
});

thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2;

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = thi.ng.strf.core.pad_left.call(null,(4),"0");
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
return thi.ng.strf.core.int$.call(null,(cljs.core.rand.call(null) * ((1) << bits)));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
return thi.ng.strf.core.pad_left.call(null,Math.ceil((bits / (4))),"0").call(null,thi.ng.strf.core.rand_bits.call(null,bits).toString((16)));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
return thi.ng.strf.core.format_16bit_hex.call(null,cljs.core.rand_int.call(null,(65536)).toString((16)));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16)))),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.format_16bit_hex.call(null,((thi.ng.strf.core.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16)))),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null)),cljs.core.str(thi.ng.strf.core.rand_16bits_hex.call(null))].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape.call(null,thi.ng.strf.core.as_str.call(null,x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=core.js.map