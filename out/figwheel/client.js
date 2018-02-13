// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34387 = [];
var len__25911__auto___34390 = arguments.length;
var i__25912__auto___34391 = (0);
while(true){
if((i__25912__auto___34391 < len__25911__auto___34390)){
args34387.push((arguments[i__25912__auto___34391]));

var G__34392 = (i__25912__auto___34391 + (1));
i__25912__auto___34391 = G__34392;
continue;
} else {
}
break;
}

var G__34389 = args34387.length;
switch (G__34389) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34387.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25918__auto__ = [];
var len__25911__auto___34395 = arguments.length;
var i__25912__auto___34396 = (0);
while(true){
if((i__25912__auto___34396 < len__25911__auto___34395)){
args__25918__auto__.push((arguments[i__25912__auto___34396]));

var G__34397 = (i__25912__auto___34396 + (1));
i__25912__auto___34396 = G__34397;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34394){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34394));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25918__auto__ = [];
var len__25911__auto___34399 = arguments.length;
var i__25912__auto___34400 = (0);
while(true){
if((i__25912__auto___34400 < len__25911__auto___34399)){
args__25918__auto__.push((arguments[i__25912__auto___34400]));

var G__34401 = (i__25912__auto___34400 + (1));
i__25912__auto___34400 = G__34401;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34398){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34398));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34402 = cljs.core._EQ_;
var expr__34403 = (function (){var or__24803__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34406){if((e34406 instanceof Error)){
var e = e34406;
return false;
} else {
throw e34406;

}
}})();
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34402.call(null,"true",expr__34403))){
return true;
} else {
if(cljs.core.truth_(pred__34402.call(null,"false",expr__34403))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34403)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34408){if((e34408 instanceof Error)){
var e = e34408;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34408;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34409){
var map__34412 = p__34409;
var map__34412__$1 = ((((!((map__34412 == null)))?((((map__34412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34412):map__34412);
var message = cljs.core.get.call(null,map__34412__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34412__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24803__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24791__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24791__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24791__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27008__auto___34574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___34574,ch){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___34574,ch){
return (function (state_34543){
var state_val_34544 = (state_34543[(1)]);
if((state_val_34544 === (7))){
var inst_34539 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34545_34575 = state_34543__$1;
(statearr_34545_34575[(2)] = inst_34539);

(statearr_34545_34575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (1))){
var state_34543__$1 = state_34543;
var statearr_34546_34576 = state_34543__$1;
(statearr_34546_34576[(2)] = null);

(statearr_34546_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (4))){
var inst_34496 = (state_34543[(7)]);
var inst_34496__$1 = (state_34543[(2)]);
var state_34543__$1 = (function (){var statearr_34547 = state_34543;
(statearr_34547[(7)] = inst_34496__$1);

return statearr_34547;
})();
if(cljs.core.truth_(inst_34496__$1)){
var statearr_34548_34577 = state_34543__$1;
(statearr_34548_34577[(1)] = (5));

} else {
var statearr_34549_34578 = state_34543__$1;
(statearr_34549_34578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (15))){
var inst_34503 = (state_34543[(8)]);
var inst_34518 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34503);
var inst_34519 = cljs.core.first.call(null,inst_34518);
var inst_34520 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34519);
var inst_34521 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34520)].join('');
var inst_34522 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34521);
var state_34543__$1 = state_34543;
var statearr_34550_34579 = state_34543__$1;
(statearr_34550_34579[(2)] = inst_34522);

(statearr_34550_34579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (13))){
var inst_34527 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34551_34580 = state_34543__$1;
(statearr_34551_34580[(2)] = inst_34527);

(statearr_34551_34580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (6))){
var state_34543__$1 = state_34543;
var statearr_34552_34581 = state_34543__$1;
(statearr_34552_34581[(2)] = null);

(statearr_34552_34581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (17))){
var inst_34525 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34553_34582 = state_34543__$1;
(statearr_34553_34582[(2)] = inst_34525);

(statearr_34553_34582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (3))){
var inst_34541 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34543__$1,inst_34541);
} else {
if((state_val_34544 === (12))){
var inst_34502 = (state_34543[(9)]);
var inst_34516 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34502,opts);
var state_34543__$1 = state_34543;
if(cljs.core.truth_(inst_34516)){
var statearr_34554_34583 = state_34543__$1;
(statearr_34554_34583[(1)] = (15));

} else {
var statearr_34555_34584 = state_34543__$1;
(statearr_34555_34584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (2))){
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34543__$1,(4),ch);
} else {
if((state_val_34544 === (11))){
var inst_34503 = (state_34543[(8)]);
var inst_34508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34509 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34503);
var inst_34510 = cljs.core.async.timeout.call(null,(1000));
var inst_34511 = [inst_34509,inst_34510];
var inst_34512 = (new cljs.core.PersistentVector(null,2,(5),inst_34508,inst_34511,null));
var state_34543__$1 = state_34543;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34543__$1,(14),inst_34512);
} else {
if((state_val_34544 === (9))){
var inst_34503 = (state_34543[(8)]);
var inst_34529 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34530 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34503);
var inst_34531 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34530);
var inst_34532 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34531)].join('');
var inst_34533 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34532);
var state_34543__$1 = (function (){var statearr_34556 = state_34543;
(statearr_34556[(10)] = inst_34529);

return statearr_34556;
})();
var statearr_34557_34585 = state_34543__$1;
(statearr_34557_34585[(2)] = inst_34533);

(statearr_34557_34585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (5))){
var inst_34496 = (state_34543[(7)]);
var inst_34498 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34499 = (new cljs.core.PersistentArrayMap(null,2,inst_34498,null));
var inst_34500 = (new cljs.core.PersistentHashSet(null,inst_34499,null));
var inst_34501 = figwheel.client.focus_msgs.call(null,inst_34500,inst_34496);
var inst_34502 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34501);
var inst_34503 = cljs.core.first.call(null,inst_34501);
var inst_34504 = figwheel.client.autoload_QMARK_.call(null);
var state_34543__$1 = (function (){var statearr_34558 = state_34543;
(statearr_34558[(8)] = inst_34503);

(statearr_34558[(9)] = inst_34502);

return statearr_34558;
})();
if(cljs.core.truth_(inst_34504)){
var statearr_34559_34586 = state_34543__$1;
(statearr_34559_34586[(1)] = (8));

} else {
var statearr_34560_34587 = state_34543__$1;
(statearr_34560_34587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (14))){
var inst_34514 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34561_34588 = state_34543__$1;
(statearr_34561_34588[(2)] = inst_34514);

(statearr_34561_34588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (16))){
var state_34543__$1 = state_34543;
var statearr_34562_34589 = state_34543__$1;
(statearr_34562_34589[(2)] = null);

(statearr_34562_34589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (10))){
var inst_34535 = (state_34543[(2)]);
var state_34543__$1 = (function (){var statearr_34563 = state_34543;
(statearr_34563[(11)] = inst_34535);

return statearr_34563;
})();
var statearr_34564_34590 = state_34543__$1;
(statearr_34564_34590[(2)] = null);

(statearr_34564_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (8))){
var inst_34502 = (state_34543[(9)]);
var inst_34506 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34502,opts);
var state_34543__$1 = state_34543;
if(cljs.core.truth_(inst_34506)){
var statearr_34565_34591 = state_34543__$1;
(statearr_34565_34591[(1)] = (11));

} else {
var statearr_34566_34592 = state_34543__$1;
(statearr_34566_34592[(1)] = (12));

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
});})(c__27008__auto___34574,ch))
;
return ((function (switch__26896__auto__,c__27008__auto___34574,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26897__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26897__auto____0 = (function (){
var statearr_34570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34570[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26897__auto__);

(statearr_34570[(1)] = (1));

return statearr_34570;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26897__auto____1 = (function (state_34543){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_34543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e34571){if((e34571 instanceof Object)){
var ex__26900__auto__ = e34571;
var statearr_34572_34593 = state_34543;
(statearr_34572_34593[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34594 = state_34543;
state_34543 = G__34594;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26897__auto__ = function(state_34543){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26897__auto____1.call(this,state_34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26897__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26897__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___34574,ch))
})();
var state__27010__auto__ = (function (){var statearr_34573 = f__27009__auto__.call(null);
(statearr_34573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___34574);

return statearr_34573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___34574,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34595_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34595_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34598 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34598){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34597){if((e34597 instanceof Error)){
var e = e34597;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34598], null));
} else {
var e = e34597;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34598))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34599){
var map__34608 = p__34599;
var map__34608__$1 = ((((!((map__34608 == null)))?((((map__34608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34608):map__34608);
var opts = map__34608__$1;
var build_id = cljs.core.get.call(null,map__34608__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34608,map__34608__$1,opts,build_id){
return (function (p__34610){
var vec__34611 = p__34610;
var seq__34612 = cljs.core.seq.call(null,vec__34611);
var first__34613 = cljs.core.first.call(null,seq__34612);
var seq__34612__$1 = cljs.core.next.call(null,seq__34612);
var map__34614 = first__34613;
var map__34614__$1 = ((((!((map__34614 == null)))?((((map__34614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34614):map__34614);
var msg = map__34614__$1;
var msg_name = cljs.core.get.call(null,map__34614__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34612__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34611,seq__34612,first__34613,seq__34612__$1,map__34614,map__34614__$1,msg,msg_name,_,map__34608,map__34608__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34611,seq__34612,first__34613,seq__34612__$1,map__34614,map__34614__$1,msg,msg_name,_,map__34608,map__34608__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34608,map__34608__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34622){
var vec__34623 = p__34622;
var seq__34624 = cljs.core.seq.call(null,vec__34623);
var first__34625 = cljs.core.first.call(null,seq__34624);
var seq__34624__$1 = cljs.core.next.call(null,seq__34624);
var map__34626 = first__34625;
var map__34626__$1 = ((((!((map__34626 == null)))?((((map__34626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34626):map__34626);
var msg = map__34626__$1;
var msg_name = cljs.core.get.call(null,map__34626__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34624__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34628){
var map__34640 = p__34628;
var map__34640__$1 = ((((!((map__34640 == null)))?((((map__34640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34640):map__34640);
var on_compile_warning = cljs.core.get.call(null,map__34640__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34640__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34640,map__34640__$1,on_compile_warning,on_compile_fail){
return (function (p__34642){
var vec__34643 = p__34642;
var seq__34644 = cljs.core.seq.call(null,vec__34643);
var first__34645 = cljs.core.first.call(null,seq__34644);
var seq__34644__$1 = cljs.core.next.call(null,seq__34644);
var map__34646 = first__34645;
var map__34646__$1 = ((((!((map__34646 == null)))?((((map__34646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34646):map__34646);
var msg = map__34646__$1;
var msg_name = cljs.core.get.call(null,map__34646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34644__$1;
var pred__34648 = cljs.core._EQ_;
var expr__34649 = msg_name;
if(cljs.core.truth_(pred__34648.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34649))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34648.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34649))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34640,map__34640__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__,msg_hist,msg_names,msg){
return (function (state_34877){
var state_val_34878 = (state_34877[(1)]);
if((state_val_34878 === (7))){
var inst_34797 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34797)){
var statearr_34879_34929 = state_34877__$1;
(statearr_34879_34929[(1)] = (8));

} else {
var statearr_34880_34930 = state_34877__$1;
(statearr_34880_34930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (20))){
var inst_34871 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34881_34931 = state_34877__$1;
(statearr_34881_34931[(2)] = inst_34871);

(statearr_34881_34931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (27))){
var inst_34867 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34882_34932 = state_34877__$1;
(statearr_34882_34932[(2)] = inst_34867);

(statearr_34882_34932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (1))){
var inst_34790 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34790)){
var statearr_34883_34933 = state_34877__$1;
(statearr_34883_34933[(1)] = (2));

} else {
var statearr_34884_34934 = state_34877__$1;
(statearr_34884_34934[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (24))){
var inst_34869 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34885_34935 = state_34877__$1;
(statearr_34885_34935[(2)] = inst_34869);

(statearr_34885_34935[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (4))){
var inst_34875 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34877__$1,inst_34875);
} else {
if((state_val_34878 === (15))){
var inst_34873 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34886_34936 = state_34877__$1;
(statearr_34886_34936[(2)] = inst_34873);

(statearr_34886_34936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (21))){
var inst_34826 = (state_34877[(2)]);
var inst_34827 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34828 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34827);
var state_34877__$1 = (function (){var statearr_34887 = state_34877;
(statearr_34887[(7)] = inst_34826);

return statearr_34887;
})();
var statearr_34888_34937 = state_34877__$1;
(statearr_34888_34937[(2)] = inst_34828);

(statearr_34888_34937[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (31))){
var inst_34856 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34856)){
var statearr_34889_34938 = state_34877__$1;
(statearr_34889_34938[(1)] = (34));

} else {
var statearr_34890_34939 = state_34877__$1;
(statearr_34890_34939[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (32))){
var inst_34865 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34891_34940 = state_34877__$1;
(statearr_34891_34940[(2)] = inst_34865);

(statearr_34891_34940[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (33))){
var inst_34852 = (state_34877[(2)]);
var inst_34853 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34854 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34853);
var state_34877__$1 = (function (){var statearr_34892 = state_34877;
(statearr_34892[(8)] = inst_34852);

return statearr_34892;
})();
var statearr_34893_34941 = state_34877__$1;
(statearr_34893_34941[(2)] = inst_34854);

(statearr_34893_34941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (13))){
var inst_34811 = figwheel.client.heads_up.clear.call(null);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(16),inst_34811);
} else {
if((state_val_34878 === (22))){
var inst_34832 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34833 = figwheel.client.heads_up.append_warning_message.call(null,inst_34832);
var state_34877__$1 = state_34877;
var statearr_34894_34942 = state_34877__$1;
(statearr_34894_34942[(2)] = inst_34833);

(statearr_34894_34942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (36))){
var inst_34863 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34895_34943 = state_34877__$1;
(statearr_34895_34943[(2)] = inst_34863);

(statearr_34895_34943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (29))){
var inst_34843 = (state_34877[(2)]);
var inst_34844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34845 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34844);
var state_34877__$1 = (function (){var statearr_34896 = state_34877;
(statearr_34896[(9)] = inst_34843);

return statearr_34896;
})();
var statearr_34897_34944 = state_34877__$1;
(statearr_34897_34944[(2)] = inst_34845);

(statearr_34897_34944[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (6))){
var inst_34792 = (state_34877[(10)]);
var state_34877__$1 = state_34877;
var statearr_34898_34945 = state_34877__$1;
(statearr_34898_34945[(2)] = inst_34792);

(statearr_34898_34945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (28))){
var inst_34839 = (state_34877[(2)]);
var inst_34840 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34841 = figwheel.client.heads_up.display_warning.call(null,inst_34840);
var state_34877__$1 = (function (){var statearr_34899 = state_34877;
(statearr_34899[(11)] = inst_34839);

return statearr_34899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(29),inst_34841);
} else {
if((state_val_34878 === (25))){
var inst_34837 = figwheel.client.heads_up.clear.call(null);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(28),inst_34837);
} else {
if((state_val_34878 === (34))){
var inst_34858 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(37),inst_34858);
} else {
if((state_val_34878 === (17))){
var inst_34817 = (state_34877[(2)]);
var inst_34818 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34819 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34818);
var state_34877__$1 = (function (){var statearr_34900 = state_34877;
(statearr_34900[(12)] = inst_34817);

return statearr_34900;
})();
var statearr_34901_34946 = state_34877__$1;
(statearr_34901_34946[(2)] = inst_34819);

(statearr_34901_34946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (3))){
var inst_34809 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34809)){
var statearr_34902_34947 = state_34877__$1;
(statearr_34902_34947[(1)] = (13));

} else {
var statearr_34903_34948 = state_34877__$1;
(statearr_34903_34948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (12))){
var inst_34805 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34904_34949 = state_34877__$1;
(statearr_34904_34949[(2)] = inst_34805);

(statearr_34904_34949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (2))){
var inst_34792 = (state_34877[(10)]);
var inst_34792__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34877__$1 = (function (){var statearr_34905 = state_34877;
(statearr_34905[(10)] = inst_34792__$1);

return statearr_34905;
})();
if(cljs.core.truth_(inst_34792__$1)){
var statearr_34906_34950 = state_34877__$1;
(statearr_34906_34950[(1)] = (5));

} else {
var statearr_34907_34951 = state_34877__$1;
(statearr_34907_34951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (23))){
var inst_34835 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34835)){
var statearr_34908_34952 = state_34877__$1;
(statearr_34908_34952[(1)] = (25));

} else {
var statearr_34909_34953 = state_34877__$1;
(statearr_34909_34953[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (35))){
var state_34877__$1 = state_34877;
var statearr_34910_34954 = state_34877__$1;
(statearr_34910_34954[(2)] = null);

(statearr_34910_34954[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (19))){
var inst_34830 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34830)){
var statearr_34911_34955 = state_34877__$1;
(statearr_34911_34955[(1)] = (22));

} else {
var statearr_34912_34956 = state_34877__$1;
(statearr_34912_34956[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (11))){
var inst_34801 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34913_34957 = state_34877__$1;
(statearr_34913_34957[(2)] = inst_34801);

(statearr_34913_34957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (9))){
var inst_34803 = figwheel.client.heads_up.clear.call(null);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(12),inst_34803);
} else {
if((state_val_34878 === (5))){
var inst_34794 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34877__$1 = state_34877;
var statearr_34914_34958 = state_34877__$1;
(statearr_34914_34958[(2)] = inst_34794);

(statearr_34914_34958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (14))){
var inst_34821 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34821)){
var statearr_34915_34959 = state_34877__$1;
(statearr_34915_34959[(1)] = (18));

} else {
var statearr_34916_34960 = state_34877__$1;
(statearr_34916_34960[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (26))){
var inst_34847 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34847)){
var statearr_34917_34961 = state_34877__$1;
(statearr_34917_34961[(1)] = (30));

} else {
var statearr_34918_34962 = state_34877__$1;
(statearr_34918_34962[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (16))){
var inst_34813 = (state_34877[(2)]);
var inst_34814 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34815 = figwheel.client.heads_up.display_exception.call(null,inst_34814);
var state_34877__$1 = (function (){var statearr_34919 = state_34877;
(statearr_34919[(13)] = inst_34813);

return statearr_34919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(17),inst_34815);
} else {
if((state_val_34878 === (30))){
var inst_34849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34850 = figwheel.client.heads_up.display_warning.call(null,inst_34849);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(33),inst_34850);
} else {
if((state_val_34878 === (10))){
var inst_34807 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34920_34963 = state_34877__$1;
(statearr_34920_34963[(2)] = inst_34807);

(statearr_34920_34963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (18))){
var inst_34823 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34824 = figwheel.client.heads_up.display_exception.call(null,inst_34823);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(21),inst_34824);
} else {
if((state_val_34878 === (37))){
var inst_34860 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34921_34964 = state_34877__$1;
(statearr_34921_34964[(2)] = inst_34860);

(statearr_34921_34964[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (8))){
var inst_34799 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(11),inst_34799);
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
});})(c__27008__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26896__auto__,c__27008__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto____0 = (function (){
var statearr_34925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34925[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto__);

(statearr_34925[(1)] = (1));

return statearr_34925;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto____1 = (function (state_34877){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_34877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e34926){if((e34926 instanceof Object)){
var ex__26900__auto__ = e34926;
var statearr_34927_34965 = state_34877;
(statearr_34927_34965[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34966 = state_34877;
state_34877 = G__34966;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto__ = function(state_34877){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto____1.call(this,state_34877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__,msg_hist,msg_names,msg))
})();
var state__27010__auto__ = (function (){var statearr_34928 = f__27009__auto__.call(null);
(statearr_34928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_34928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__,msg_hist,msg_names,msg))
);

return c__27008__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27008__auto___35029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___35029,ch){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___35029,ch){
return (function (state_35012){
var state_val_35013 = (state_35012[(1)]);
if((state_val_35013 === (1))){
var state_35012__$1 = state_35012;
var statearr_35014_35030 = state_35012__$1;
(statearr_35014_35030[(2)] = null);

(statearr_35014_35030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (2))){
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35012__$1,(4),ch);
} else {
if((state_val_35013 === (3))){
var inst_35010 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35012__$1,inst_35010);
} else {
if((state_val_35013 === (4))){
var inst_35000 = (state_35012[(7)]);
var inst_35000__$1 = (state_35012[(2)]);
var state_35012__$1 = (function (){var statearr_35015 = state_35012;
(statearr_35015[(7)] = inst_35000__$1);

return statearr_35015;
})();
if(cljs.core.truth_(inst_35000__$1)){
var statearr_35016_35031 = state_35012__$1;
(statearr_35016_35031[(1)] = (5));

} else {
var statearr_35017_35032 = state_35012__$1;
(statearr_35017_35032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (5))){
var inst_35000 = (state_35012[(7)]);
var inst_35002 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35000);
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35012__$1,(8),inst_35002);
} else {
if((state_val_35013 === (6))){
var state_35012__$1 = state_35012;
var statearr_35018_35033 = state_35012__$1;
(statearr_35018_35033[(2)] = null);

(statearr_35018_35033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (7))){
var inst_35008 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35019_35034 = state_35012__$1;
(statearr_35019_35034[(2)] = inst_35008);

(statearr_35019_35034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (8))){
var inst_35004 = (state_35012[(2)]);
var state_35012__$1 = (function (){var statearr_35020 = state_35012;
(statearr_35020[(8)] = inst_35004);

return statearr_35020;
})();
var statearr_35021_35035 = state_35012__$1;
(statearr_35021_35035[(2)] = null);

(statearr_35021_35035[(1)] = (2));


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
});})(c__27008__auto___35029,ch))
;
return ((function (switch__26896__auto__,c__27008__auto___35029,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26897__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26897__auto____0 = (function (){
var statearr_35025 = [null,null,null,null,null,null,null,null,null];
(statearr_35025[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26897__auto__);

(statearr_35025[(1)] = (1));

return statearr_35025;
});
var figwheel$client$heads_up_plugin_$_state_machine__26897__auto____1 = (function (state_35012){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_35012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e35026){if((e35026 instanceof Object)){
var ex__26900__auto__ = e35026;
var statearr_35027_35036 = state_35012;
(statearr_35027_35036[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35037 = state_35012;
state_35012 = G__35037;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26897__auto__ = function(state_35012){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26897__auto____1.call(this,state_35012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26897__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26897__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___35029,ch))
})();
var state__27010__auto__ = (function (){var statearr_35028 = f__27009__auto__.call(null);
(statearr_35028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___35029);

return statearr_35028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___35029,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__){
return (function (state_35058){
var state_val_35059 = (state_35058[(1)]);
if((state_val_35059 === (1))){
var inst_35053 = cljs.core.async.timeout.call(null,(3000));
var state_35058__$1 = state_35058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35058__$1,(2),inst_35053);
} else {
if((state_val_35059 === (2))){
var inst_35055 = (state_35058[(2)]);
var inst_35056 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35058__$1 = (function (){var statearr_35060 = state_35058;
(statearr_35060[(7)] = inst_35055);

return statearr_35060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35058__$1,inst_35056);
} else {
return null;
}
}
});})(c__27008__auto__))
;
return ((function (switch__26896__auto__,c__27008__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26897__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26897__auto____0 = (function (){
var statearr_35064 = [null,null,null,null,null,null,null,null];
(statearr_35064[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26897__auto__);

(statearr_35064[(1)] = (1));

return statearr_35064;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26897__auto____1 = (function (state_35058){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_35058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e35065){if((e35065 instanceof Object)){
var ex__26900__auto__ = e35065;
var statearr_35066_35068 = state_35058;
(statearr_35066_35068[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35069 = state_35058;
state_35058 = G__35069;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26897__auto__ = function(state_35058){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26897__auto____1.call(this,state_35058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26897__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26897__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__))
})();
var state__27010__auto__ = (function (){var statearr_35067 = f__27009__auto__.call(null);
(statearr_35067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_35067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__))
);

return c__27008__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35092){
var state_val_35093 = (state_35092[(1)]);
if((state_val_35093 === (1))){
var inst_35086 = cljs.core.async.timeout.call(null,(2000));
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35092__$1,(2),inst_35086);
} else {
if((state_val_35093 === (2))){
var inst_35088 = (state_35092[(2)]);
var inst_35089 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35090 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35089);
var state_35092__$1 = (function (){var statearr_35094 = state_35092;
(statearr_35094[(7)] = inst_35088);

return statearr_35094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35092__$1,inst_35090);
} else {
return null;
}
}
});})(c__27008__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26896__auto__,c__27008__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto____0 = (function (){
var statearr_35098 = [null,null,null,null,null,null,null,null];
(statearr_35098[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto__);

(statearr_35098[(1)] = (1));

return statearr_35098;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto____1 = (function (state_35092){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_35092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e35099){if((e35099 instanceof Object)){
var ex__26900__auto__ = e35099;
var statearr_35100_35102 = state_35092;
(statearr_35100_35102[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35103 = state_35092;
state_35092 = G__35103;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto__ = function(state_35092){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto____1.call(this,state_35092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27010__auto__ = (function (){var statearr_35101 = f__27009__auto__.call(null);
(statearr_35101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_35101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__,figwheel_version,temp__4657__auto__))
);

return c__27008__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35104){
var map__35108 = p__35104;
var map__35108__$1 = ((((!((map__35108 == null)))?((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var file = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35110 = "";
var G__35110__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35110),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35110);
var G__35110__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35110__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35110__$1);
if(cljs.core.truth_((function (){var and__24791__auto__ = line;
if(cljs.core.truth_(and__24791__auto__)){
return column;
} else {
return and__24791__auto__;
}
})())){
return [cljs.core.str(G__35110__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35110__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35111){
var map__35118 = p__35111;
var map__35118__$1 = ((((!((map__35118 == null)))?((((map__35118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35118):map__35118);
var ed = map__35118__$1;
var formatted_exception = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35120_35124 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35121_35125 = null;
var count__35122_35126 = (0);
var i__35123_35127 = (0);
while(true){
if((i__35123_35127 < count__35122_35126)){
var msg_35128 = cljs.core._nth.call(null,chunk__35121_35125,i__35123_35127);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35128);

var G__35129 = seq__35120_35124;
var G__35130 = chunk__35121_35125;
var G__35131 = count__35122_35126;
var G__35132 = (i__35123_35127 + (1));
seq__35120_35124 = G__35129;
chunk__35121_35125 = G__35130;
count__35122_35126 = G__35131;
i__35123_35127 = G__35132;
continue;
} else {
var temp__4657__auto___35133 = cljs.core.seq.call(null,seq__35120_35124);
if(temp__4657__auto___35133){
var seq__35120_35134__$1 = temp__4657__auto___35133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35120_35134__$1)){
var c__25617__auto___35135 = cljs.core.chunk_first.call(null,seq__35120_35134__$1);
var G__35136 = cljs.core.chunk_rest.call(null,seq__35120_35134__$1);
var G__35137 = c__25617__auto___35135;
var G__35138 = cljs.core.count.call(null,c__25617__auto___35135);
var G__35139 = (0);
seq__35120_35124 = G__35136;
chunk__35121_35125 = G__35137;
count__35122_35126 = G__35138;
i__35123_35127 = G__35139;
continue;
} else {
var msg_35140 = cljs.core.first.call(null,seq__35120_35134__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35140);

var G__35141 = cljs.core.next.call(null,seq__35120_35134__$1);
var G__35142 = null;
var G__35143 = (0);
var G__35144 = (0);
seq__35120_35124 = G__35141;
chunk__35121_35125 = G__35142;
count__35122_35126 = G__35143;
i__35123_35127 = G__35144;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35145){
var map__35148 = p__35145;
var map__35148__$1 = ((((!((map__35148 == null)))?((((map__35148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35148):map__35148);
var w = map__35148__$1;
var message = cljs.core.get.call(null,map__35148__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24791__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24791__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24791__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35160 = cljs.core.seq.call(null,plugins);
var chunk__35161 = null;
var count__35162 = (0);
var i__35163 = (0);
while(true){
if((i__35163 < count__35162)){
var vec__35164 = cljs.core._nth.call(null,chunk__35161,i__35163);
var k = cljs.core.nth.call(null,vec__35164,(0),null);
var plugin = cljs.core.nth.call(null,vec__35164,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35170 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35160,chunk__35161,count__35162,i__35163,pl_35170,vec__35164,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35170.call(null,msg_hist);
});})(seq__35160,chunk__35161,count__35162,i__35163,pl_35170,vec__35164,k,plugin))
);
} else {
}

var G__35171 = seq__35160;
var G__35172 = chunk__35161;
var G__35173 = count__35162;
var G__35174 = (i__35163 + (1));
seq__35160 = G__35171;
chunk__35161 = G__35172;
count__35162 = G__35173;
i__35163 = G__35174;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35160);
if(temp__4657__auto__){
var seq__35160__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35160__$1)){
var c__25617__auto__ = cljs.core.chunk_first.call(null,seq__35160__$1);
var G__35175 = cljs.core.chunk_rest.call(null,seq__35160__$1);
var G__35176 = c__25617__auto__;
var G__35177 = cljs.core.count.call(null,c__25617__auto__);
var G__35178 = (0);
seq__35160 = G__35175;
chunk__35161 = G__35176;
count__35162 = G__35177;
i__35163 = G__35178;
continue;
} else {
var vec__35167 = cljs.core.first.call(null,seq__35160__$1);
var k = cljs.core.nth.call(null,vec__35167,(0),null);
var plugin = cljs.core.nth.call(null,vec__35167,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35179 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35160,chunk__35161,count__35162,i__35163,pl_35179,vec__35167,k,plugin,seq__35160__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35179.call(null,msg_hist);
});})(seq__35160,chunk__35161,count__35162,i__35163,pl_35179,vec__35167,k,plugin,seq__35160__$1,temp__4657__auto__))
);
} else {
}

var G__35180 = cljs.core.next.call(null,seq__35160__$1);
var G__35181 = null;
var G__35182 = (0);
var G__35183 = (0);
seq__35160 = G__35180;
chunk__35161 = G__35181;
count__35162 = G__35182;
i__35163 = G__35183;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35184 = [];
var len__25911__auto___35191 = arguments.length;
var i__25912__auto___35192 = (0);
while(true){
if((i__25912__auto___35192 < len__25911__auto___35191)){
args35184.push((arguments[i__25912__auto___35192]));

var G__35193 = (i__25912__auto___35192 + (1));
i__25912__auto___35192 = G__35193;
continue;
} else {
}
break;
}

var G__35186 = args35184.length;
switch (G__35186) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35184.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35187_35195 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35188_35196 = null;
var count__35189_35197 = (0);
var i__35190_35198 = (0);
while(true){
if((i__35190_35198 < count__35189_35197)){
var msg_35199 = cljs.core._nth.call(null,chunk__35188_35196,i__35190_35198);
figwheel.client.socket.handle_incoming_message.call(null,msg_35199);

var G__35200 = seq__35187_35195;
var G__35201 = chunk__35188_35196;
var G__35202 = count__35189_35197;
var G__35203 = (i__35190_35198 + (1));
seq__35187_35195 = G__35200;
chunk__35188_35196 = G__35201;
count__35189_35197 = G__35202;
i__35190_35198 = G__35203;
continue;
} else {
var temp__4657__auto___35204 = cljs.core.seq.call(null,seq__35187_35195);
if(temp__4657__auto___35204){
var seq__35187_35205__$1 = temp__4657__auto___35204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35187_35205__$1)){
var c__25617__auto___35206 = cljs.core.chunk_first.call(null,seq__35187_35205__$1);
var G__35207 = cljs.core.chunk_rest.call(null,seq__35187_35205__$1);
var G__35208 = c__25617__auto___35206;
var G__35209 = cljs.core.count.call(null,c__25617__auto___35206);
var G__35210 = (0);
seq__35187_35195 = G__35207;
chunk__35188_35196 = G__35208;
count__35189_35197 = G__35209;
i__35190_35198 = G__35210;
continue;
} else {
var msg_35211 = cljs.core.first.call(null,seq__35187_35205__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35211);

var G__35212 = cljs.core.next.call(null,seq__35187_35205__$1);
var G__35213 = null;
var G__35214 = (0);
var G__35215 = (0);
seq__35187_35195 = G__35212;
chunk__35188_35196 = G__35213;
count__35189_35197 = G__35214;
i__35190_35198 = G__35215;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25918__auto__ = [];
var len__25911__auto___35220 = arguments.length;
var i__25912__auto___35221 = (0);
while(true){
if((i__25912__auto___35221 < len__25911__auto___35220)){
args__25918__auto__.push((arguments[i__25912__auto___35221]));

var G__35222 = (i__25912__auto___35221 + (1));
i__25912__auto___35221 = G__35222;
continue;
} else {
}
break;
}

var argseq__25919__auto__ = ((((0) < args__25918__auto__.length))?(new cljs.core.IndexedSeq(args__25918__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25919__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35217){
var map__35218 = p__35217;
var map__35218__$1 = ((((!((map__35218 == null)))?((((map__35218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35218):map__35218);
var opts = map__35218__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35216){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35216));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35224){if((e35224 instanceof Error)){
var e = e35224;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35224;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35228){
var map__35229 = p__35228;
var map__35229__$1 = ((((!((map__35229 == null)))?((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35229):map__35229);
var msg_name = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1490842140400