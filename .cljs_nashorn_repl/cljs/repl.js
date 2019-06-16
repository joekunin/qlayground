// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22335){
var map__22360 = p__22335;
var map__22360__$1 = ((((!((map__22360 == null)))?((((map__22360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22360):map__22360);
var m = map__22360__$1;
var n = cljs.core.get.call(null,map__22360__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22362_22384 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22363_22385 = null;
var count__22364_22386 = (0);
var i__22365_22387 = (0);
while(true){
if((i__22365_22387 < count__22364_22386)){
var f_22388 = cljs.core._nth.call(null,chunk__22363_22385,i__22365_22387);
cljs.core.println.call(null,"  ",f_22388);

var G__22389 = seq__22362_22384;
var G__22390 = chunk__22363_22385;
var G__22391 = count__22364_22386;
var G__22392 = (i__22365_22387 + (1));
seq__22362_22384 = G__22389;
chunk__22363_22385 = G__22390;
count__22364_22386 = G__22391;
i__22365_22387 = G__22392;
continue;
} else {
var temp__5720__auto___22393 = cljs.core.seq.call(null,seq__22362_22384);
if(temp__5720__auto___22393){
var seq__22362_22394__$1 = temp__5720__auto___22393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22362_22394__$1)){
var c__20928__auto___22395 = cljs.core.chunk_first.call(null,seq__22362_22394__$1);
var G__22396 = cljs.core.chunk_rest.call(null,seq__22362_22394__$1);
var G__22397 = c__20928__auto___22395;
var G__22398 = cljs.core.count.call(null,c__20928__auto___22395);
var G__22399 = (0);
seq__22362_22384 = G__22396;
chunk__22363_22385 = G__22397;
count__22364_22386 = G__22398;
i__22365_22387 = G__22399;
continue;
} else {
var f_22400 = cljs.core.first.call(null,seq__22362_22394__$1);
cljs.core.println.call(null,"  ",f_22400);

var G__22401 = cljs.core.next.call(null,seq__22362_22394__$1);
var G__22402 = null;
var G__22403 = (0);
var G__22404 = (0);
seq__22362_22384 = G__22401;
chunk__22363_22385 = G__22402;
count__22364_22386 = G__22403;
i__22365_22387 = G__22404;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22405 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20022__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22405);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22405)))?cljs.core.second.call(null,arglists_22405):arglists_22405));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22366_22406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22367_22407 = null;
var count__22368_22408 = (0);
var i__22369_22409 = (0);
while(true){
if((i__22369_22409 < count__22368_22408)){
var vec__22370_22410 = cljs.core._nth.call(null,chunk__22367_22407,i__22369_22409);
var name_22411 = cljs.core.nth.call(null,vec__22370_22410,(0),null);
var map__22373_22412 = cljs.core.nth.call(null,vec__22370_22410,(1),null);
var map__22373_22413__$1 = ((((!((map__22373_22412 == null)))?((((map__22373_22412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22373_22412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22373_22412):map__22373_22412);
var doc_22414 = cljs.core.get.call(null,map__22373_22413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22415 = cljs.core.get.call(null,map__22373_22413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22411);

cljs.core.println.call(null," ",arglists_22415);

if(cljs.core.truth_(doc_22414)){
cljs.core.println.call(null," ",doc_22414);
} else {
}

var G__22416 = seq__22366_22406;
var G__22417 = chunk__22367_22407;
var G__22418 = count__22368_22408;
var G__22419 = (i__22369_22409 + (1));
seq__22366_22406 = G__22416;
chunk__22367_22407 = G__22417;
count__22368_22408 = G__22418;
i__22369_22409 = G__22419;
continue;
} else {
var temp__5720__auto___22420 = cljs.core.seq.call(null,seq__22366_22406);
if(temp__5720__auto___22420){
var seq__22366_22421__$1 = temp__5720__auto___22420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22366_22421__$1)){
var c__20928__auto___22422 = cljs.core.chunk_first.call(null,seq__22366_22421__$1);
var G__22423 = cljs.core.chunk_rest.call(null,seq__22366_22421__$1);
var G__22424 = c__20928__auto___22422;
var G__22425 = cljs.core.count.call(null,c__20928__auto___22422);
var G__22426 = (0);
seq__22366_22406 = G__22423;
chunk__22367_22407 = G__22424;
count__22368_22408 = G__22425;
i__22369_22409 = G__22426;
continue;
} else {
var vec__22375_22427 = cljs.core.first.call(null,seq__22366_22421__$1);
var name_22428 = cljs.core.nth.call(null,vec__22375_22427,(0),null);
var map__22378_22429 = cljs.core.nth.call(null,vec__22375_22427,(1),null);
var map__22378_22430__$1 = ((((!((map__22378_22429 == null)))?((((map__22378_22429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22378_22429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22378_22429):map__22378_22429);
var doc_22431 = cljs.core.get.call(null,map__22378_22430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22432 = cljs.core.get.call(null,map__22378_22430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22428);

cljs.core.println.call(null," ",arglists_22432);

if(cljs.core.truth_(doc_22431)){
cljs.core.println.call(null," ",doc_22431);
} else {
}

var G__22433 = cljs.core.next.call(null,seq__22366_22421__$1);
var G__22434 = null;
var G__22435 = (0);
var G__22436 = (0);
seq__22366_22406 = G__22433;
chunk__22367_22407 = G__22434;
count__22368_22408 = G__22435;
i__22369_22409 = G__22436;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__22380 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22381 = null;
var count__22382 = (0);
var i__22383 = (0);
while(true){
if((i__22383 < count__22382)){
var role = cljs.core._nth.call(null,chunk__22381,i__22383);
var temp__5720__auto___22437__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22437__$1)){
var spec_22438 = temp__5720__auto___22437__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22438));
} else {
}

var G__22439 = seq__22380;
var G__22440 = chunk__22381;
var G__22441 = count__22382;
var G__22442 = (i__22383 + (1));
seq__22380 = G__22439;
chunk__22381 = G__22440;
count__22382 = G__22441;
i__22383 = G__22442;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__22380);
if(temp__5720__auto____$1){
var seq__22380__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22380__$1)){
var c__20928__auto__ = cljs.core.chunk_first.call(null,seq__22380__$1);
var G__22443 = cljs.core.chunk_rest.call(null,seq__22380__$1);
var G__22444 = c__20928__auto__;
var G__22445 = cljs.core.count.call(null,c__20928__auto__);
var G__22446 = (0);
seq__22380 = G__22443;
chunk__22381 = G__22444;
count__22382 = G__22445;
i__22383 = G__22446;
continue;
} else {
var role = cljs.core.first.call(null,seq__22380__$1);
var temp__5720__auto___22447__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22447__$2)){
var spec_22448 = temp__5720__auto___22447__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22448));
} else {
}

var G__22449 = cljs.core.next.call(null,seq__22380__$1);
var G__22450 = null;
var G__22451 = (0);
var G__22452 = (0);
seq__22380 = G__22449;
chunk__22381 = G__22450;
count__22382 = G__22451;
i__22383 = G__22452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map