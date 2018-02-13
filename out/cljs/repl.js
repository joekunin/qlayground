// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33816){
var map__33841 = p__33816;
var map__33841__$1 = ((((!((map__33841 == null)))?((((map__33841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33841):map__33841);
var m = map__33841__$1;
var n = cljs.core.get.call(null,map__33841__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33841__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__33843_33865 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33844_33866 = null;
var count__33845_33867 = (0);
var i__33846_33868 = (0);
while(true){
if((i__33846_33868 < count__33845_33867)){
var f_33869 = cljs.core._nth.call(null,chunk__33844_33866,i__33846_33868);
cljs.core.println.call(null,"  ",f_33869);

var G__33870 = seq__33843_33865;
var G__33871 = chunk__33844_33866;
var G__33872 = count__33845_33867;
var G__33873 = (i__33846_33868 + (1));
seq__33843_33865 = G__33870;
chunk__33844_33866 = G__33871;
count__33845_33867 = G__33872;
i__33846_33868 = G__33873;
continue;
} else {
var temp__4657__auto___33874 = cljs.core.seq.call(null,seq__33843_33865);
if(temp__4657__auto___33874){
var seq__33843_33875__$1 = temp__4657__auto___33874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33843_33875__$1)){
var c__25617__auto___33876 = cljs.core.chunk_first.call(null,seq__33843_33875__$1);
var G__33877 = cljs.core.chunk_rest.call(null,seq__33843_33875__$1);
var G__33878 = c__25617__auto___33876;
var G__33879 = cljs.core.count.call(null,c__25617__auto___33876);
var G__33880 = (0);
seq__33843_33865 = G__33877;
chunk__33844_33866 = G__33878;
count__33845_33867 = G__33879;
i__33846_33868 = G__33880;
continue;
} else {
var f_33881 = cljs.core.first.call(null,seq__33843_33875__$1);
cljs.core.println.call(null,"  ",f_33881);

var G__33882 = cljs.core.next.call(null,seq__33843_33875__$1);
var G__33883 = null;
var G__33884 = (0);
var G__33885 = (0);
seq__33843_33865 = G__33882;
chunk__33844_33866 = G__33883;
count__33845_33867 = G__33884;
i__33846_33868 = G__33885;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33886 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24803__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33886);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33886)))?cljs.core.second.call(null,arglists_33886):arglists_33886));
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
var seq__33847_33887 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33848_33888 = null;
var count__33849_33889 = (0);
var i__33850_33890 = (0);
while(true){
if((i__33850_33890 < count__33849_33889)){
var vec__33851_33891 = cljs.core._nth.call(null,chunk__33848_33888,i__33850_33890);
var name_33892 = cljs.core.nth.call(null,vec__33851_33891,(0),null);
var map__33854_33893 = cljs.core.nth.call(null,vec__33851_33891,(1),null);
var map__33854_33894__$1 = ((((!((map__33854_33893 == null)))?((((map__33854_33893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33854_33893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33854_33893):map__33854_33893);
var doc_33895 = cljs.core.get.call(null,map__33854_33894__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33896 = cljs.core.get.call(null,map__33854_33894__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33892);

cljs.core.println.call(null," ",arglists_33896);

if(cljs.core.truth_(doc_33895)){
cljs.core.println.call(null," ",doc_33895);
} else {
}

var G__33897 = seq__33847_33887;
var G__33898 = chunk__33848_33888;
var G__33899 = count__33849_33889;
var G__33900 = (i__33850_33890 + (1));
seq__33847_33887 = G__33897;
chunk__33848_33888 = G__33898;
count__33849_33889 = G__33899;
i__33850_33890 = G__33900;
continue;
} else {
var temp__4657__auto___33901 = cljs.core.seq.call(null,seq__33847_33887);
if(temp__4657__auto___33901){
var seq__33847_33902__$1 = temp__4657__auto___33901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33847_33902__$1)){
var c__25617__auto___33903 = cljs.core.chunk_first.call(null,seq__33847_33902__$1);
var G__33904 = cljs.core.chunk_rest.call(null,seq__33847_33902__$1);
var G__33905 = c__25617__auto___33903;
var G__33906 = cljs.core.count.call(null,c__25617__auto___33903);
var G__33907 = (0);
seq__33847_33887 = G__33904;
chunk__33848_33888 = G__33905;
count__33849_33889 = G__33906;
i__33850_33890 = G__33907;
continue;
} else {
var vec__33856_33908 = cljs.core.first.call(null,seq__33847_33902__$1);
var name_33909 = cljs.core.nth.call(null,vec__33856_33908,(0),null);
var map__33859_33910 = cljs.core.nth.call(null,vec__33856_33908,(1),null);
var map__33859_33911__$1 = ((((!((map__33859_33910 == null)))?((((map__33859_33910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33859_33910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33859_33910):map__33859_33910);
var doc_33912 = cljs.core.get.call(null,map__33859_33911__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33913 = cljs.core.get.call(null,map__33859_33911__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33909);

cljs.core.println.call(null," ",arglists_33913);

if(cljs.core.truth_(doc_33912)){
cljs.core.println.call(null," ",doc_33912);
} else {
}

var G__33914 = cljs.core.next.call(null,seq__33847_33902__$1);
var G__33915 = null;
var G__33916 = (0);
var G__33917 = (0);
seq__33847_33887 = G__33914;
chunk__33848_33888 = G__33915;
count__33849_33889 = G__33916;
i__33850_33890 = G__33917;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33861 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33862 = null;
var count__33863 = (0);
var i__33864 = (0);
while(true){
if((i__33864 < count__33863)){
var role = cljs.core._nth.call(null,chunk__33862,i__33864);
var temp__4657__auto___33918__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33918__$1)){
var spec_33919 = temp__4657__auto___33918__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33919));
} else {
}

var G__33920 = seq__33861;
var G__33921 = chunk__33862;
var G__33922 = count__33863;
var G__33923 = (i__33864 + (1));
seq__33861 = G__33920;
chunk__33862 = G__33921;
count__33863 = G__33922;
i__33864 = G__33923;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33861);
if(temp__4657__auto____$1){
var seq__33861__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33861__$1)){
var c__25617__auto__ = cljs.core.chunk_first.call(null,seq__33861__$1);
var G__33924 = cljs.core.chunk_rest.call(null,seq__33861__$1);
var G__33925 = c__25617__auto__;
var G__33926 = cljs.core.count.call(null,c__25617__auto__);
var G__33927 = (0);
seq__33861 = G__33924;
chunk__33862 = G__33925;
count__33863 = G__33926;
i__33864 = G__33927;
continue;
} else {
var role = cljs.core.first.call(null,seq__33861__$1);
var temp__4657__auto___33928__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33928__$2)){
var spec_33929 = temp__4657__auto___33928__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33929));
} else {
}

var G__33930 = cljs.core.next.call(null,seq__33861__$1);
var G__33931 = null;
var G__33932 = (0);
var G__33933 = (0);
seq__33861 = G__33930;
chunk__33862 = G__33931;
count__33863 = G__33932;
i__33864 = G__33933;
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

//# sourceMappingURL=repl.js.map?rel=1490842137981