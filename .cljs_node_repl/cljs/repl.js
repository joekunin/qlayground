// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22120){
var map__22145 = p__22120;
var map__22145__$1 = ((((!((map__22145 == null)))?((((map__22145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22145):map__22145);
var m = map__22145__$1;
var n = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__22147_22169 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22148_22170 = null;
var count__22149_22171 = (0);
var i__22150_22172 = (0);
while(true){
if((i__22150_22172 < count__22149_22171)){
var f_22173 = cljs.core._nth.call(null,chunk__22148_22170,i__22150_22172);
cljs.core.println.call(null,"  ",f_22173);

var G__22174 = seq__22147_22169;
var G__22175 = chunk__22148_22170;
var G__22176 = count__22149_22171;
var G__22177 = (i__22150_22172 + (1));
seq__22147_22169 = G__22174;
chunk__22148_22170 = G__22175;
count__22149_22171 = G__22176;
i__22150_22172 = G__22177;
continue;
} else {
var temp__5720__auto___22178 = cljs.core.seq.call(null,seq__22147_22169);
if(temp__5720__auto___22178){
var seq__22147_22179__$1 = temp__5720__auto___22178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22147_22179__$1)){
var c__20713__auto___22180 = cljs.core.chunk_first.call(null,seq__22147_22179__$1);
var G__22181 = cljs.core.chunk_rest.call(null,seq__22147_22179__$1);
var G__22182 = c__20713__auto___22180;
var G__22183 = cljs.core.count.call(null,c__20713__auto___22180);
var G__22184 = (0);
seq__22147_22169 = G__22181;
chunk__22148_22170 = G__22182;
count__22149_22171 = G__22183;
i__22150_22172 = G__22184;
continue;
} else {
var f_22185 = cljs.core.first.call(null,seq__22147_22179__$1);
cljs.core.println.call(null,"  ",f_22185);

var G__22186 = cljs.core.next.call(null,seq__22147_22179__$1);
var G__22187 = null;
var G__22188 = (0);
var G__22189 = (0);
seq__22147_22169 = G__22186;
chunk__22148_22170 = G__22187;
count__22149_22171 = G__22188;
i__22150_22172 = G__22189;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22190 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19807__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19807__auto__)){
return or__19807__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22190);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22190)))?cljs.core.second.call(null,arglists_22190):arglists_22190));
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
var seq__22151_22191 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22152_22192 = null;
var count__22153_22193 = (0);
var i__22154_22194 = (0);
while(true){
if((i__22154_22194 < count__22153_22193)){
var vec__22155_22195 = cljs.core._nth.call(null,chunk__22152_22192,i__22154_22194);
var name_22196 = cljs.core.nth.call(null,vec__22155_22195,(0),null);
var map__22158_22197 = cljs.core.nth.call(null,vec__22155_22195,(1),null);
var map__22158_22198__$1 = ((((!((map__22158_22197 == null)))?((((map__22158_22197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22158_22197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22158_22197):map__22158_22197);
var doc_22199 = cljs.core.get.call(null,map__22158_22198__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22200 = cljs.core.get.call(null,map__22158_22198__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22196);

cljs.core.println.call(null," ",arglists_22200);

if(cljs.core.truth_(doc_22199)){
cljs.core.println.call(null," ",doc_22199);
} else {
}

var G__22201 = seq__22151_22191;
var G__22202 = chunk__22152_22192;
var G__22203 = count__22153_22193;
var G__22204 = (i__22154_22194 + (1));
seq__22151_22191 = G__22201;
chunk__22152_22192 = G__22202;
count__22153_22193 = G__22203;
i__22154_22194 = G__22204;
continue;
} else {
var temp__5720__auto___22205 = cljs.core.seq.call(null,seq__22151_22191);
if(temp__5720__auto___22205){
var seq__22151_22206__$1 = temp__5720__auto___22205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22151_22206__$1)){
var c__20713__auto___22207 = cljs.core.chunk_first.call(null,seq__22151_22206__$1);
var G__22208 = cljs.core.chunk_rest.call(null,seq__22151_22206__$1);
var G__22209 = c__20713__auto___22207;
var G__22210 = cljs.core.count.call(null,c__20713__auto___22207);
var G__22211 = (0);
seq__22151_22191 = G__22208;
chunk__22152_22192 = G__22209;
count__22153_22193 = G__22210;
i__22154_22194 = G__22211;
continue;
} else {
var vec__22160_22212 = cljs.core.first.call(null,seq__22151_22206__$1);
var name_22213 = cljs.core.nth.call(null,vec__22160_22212,(0),null);
var map__22163_22214 = cljs.core.nth.call(null,vec__22160_22212,(1),null);
var map__22163_22215__$1 = ((((!((map__22163_22214 == null)))?((((map__22163_22214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22163_22214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22163_22214):map__22163_22214);
var doc_22216 = cljs.core.get.call(null,map__22163_22215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22217 = cljs.core.get.call(null,map__22163_22215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22213);

cljs.core.println.call(null," ",arglists_22217);

if(cljs.core.truth_(doc_22216)){
cljs.core.println.call(null," ",doc_22216);
} else {
}

var G__22218 = cljs.core.next.call(null,seq__22151_22206__$1);
var G__22219 = null;
var G__22220 = (0);
var G__22221 = (0);
seq__22151_22191 = G__22218;
chunk__22152_22192 = G__22219;
count__22153_22193 = G__22220;
i__22154_22194 = G__22221;
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

var seq__22165 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22166 = null;
var count__22167 = (0);
var i__22168 = (0);
while(true){
if((i__22168 < count__22167)){
var role = cljs.core._nth.call(null,chunk__22166,i__22168);
var temp__5720__auto___22222__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22222__$1)){
var spec_22223 = temp__5720__auto___22222__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22223));
} else {
}

var G__22224 = seq__22165;
var G__22225 = chunk__22166;
var G__22226 = count__22167;
var G__22227 = (i__22168 + (1));
seq__22165 = G__22224;
chunk__22166 = G__22225;
count__22167 = G__22226;
i__22168 = G__22227;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__22165);
if(temp__5720__auto____$1){
var seq__22165__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22165__$1)){
var c__20713__auto__ = cljs.core.chunk_first.call(null,seq__22165__$1);
var G__22228 = cljs.core.chunk_rest.call(null,seq__22165__$1);
var G__22229 = c__20713__auto__;
var G__22230 = cljs.core.count.call(null,c__20713__auto__);
var G__22231 = (0);
seq__22165 = G__22228;
chunk__22166 = G__22229;
count__22167 = G__22230;
i__22168 = G__22231;
continue;
} else {
var role = cljs.core.first.call(null,seq__22165__$1);
var temp__5720__auto___22232__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___22232__$2)){
var spec_22233 = temp__5720__auto___22232__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_22233));
} else {
}

var G__22234 = cljs.core.next.call(null,seq__22165__$1);
var G__22235 = null;
var G__22236 = (0);
var G__22237 = (0);
seq__22165 = G__22234;
chunk__22166 = G__22235;
count__22167 = G__22236;
i__22168 = G__22237;
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