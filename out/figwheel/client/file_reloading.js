// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24803__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24803__auto__){
return or__24803__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24803__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29867_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29867_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29872 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29873 = null;
var count__29874 = (0);
var i__29875 = (0);
while(true){
if((i__29875 < count__29874)){
var n = cljs.core._nth.call(null,chunk__29873,i__29875);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29876 = seq__29872;
var G__29877 = chunk__29873;
var G__29878 = count__29874;
var G__29879 = (i__29875 + (1));
seq__29872 = G__29876;
chunk__29873 = G__29877;
count__29874 = G__29878;
i__29875 = G__29879;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29872);
if(temp__4657__auto__){
var seq__29872__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29872__$1)){
var c__25617__auto__ = cljs.core.chunk_first.call(null,seq__29872__$1);
var G__29880 = cljs.core.chunk_rest.call(null,seq__29872__$1);
var G__29881 = c__25617__auto__;
var G__29882 = cljs.core.count.call(null,c__25617__auto__);
var G__29883 = (0);
seq__29872 = G__29880;
chunk__29873 = G__29881;
count__29874 = G__29882;
i__29875 = G__29883;
continue;
} else {
var n = cljs.core.first.call(null,seq__29872__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29884 = cljs.core.next.call(null,seq__29872__$1);
var G__29885 = null;
var G__29886 = (0);
var G__29887 = (0);
seq__29872 = G__29884;
chunk__29873 = G__29885;
count__29874 = G__29886;
i__29875 = G__29887;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29938_29949 = cljs.core.seq.call(null,deps);
var chunk__29939_29950 = null;
var count__29940_29951 = (0);
var i__29941_29952 = (0);
while(true){
if((i__29941_29952 < count__29940_29951)){
var dep_29953 = cljs.core._nth.call(null,chunk__29939_29950,i__29941_29952);
topo_sort_helper_STAR_.call(null,dep_29953,(depth + (1)),state);

var G__29954 = seq__29938_29949;
var G__29955 = chunk__29939_29950;
var G__29956 = count__29940_29951;
var G__29957 = (i__29941_29952 + (1));
seq__29938_29949 = G__29954;
chunk__29939_29950 = G__29955;
count__29940_29951 = G__29956;
i__29941_29952 = G__29957;
continue;
} else {
var temp__4657__auto___29958 = cljs.core.seq.call(null,seq__29938_29949);
if(temp__4657__auto___29958){
var seq__29938_29959__$1 = temp__4657__auto___29958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29938_29959__$1)){
var c__25617__auto___29960 = cljs.core.chunk_first.call(null,seq__29938_29959__$1);
var G__29961 = cljs.core.chunk_rest.call(null,seq__29938_29959__$1);
var G__29962 = c__25617__auto___29960;
var G__29963 = cljs.core.count.call(null,c__25617__auto___29960);
var G__29964 = (0);
seq__29938_29949 = G__29961;
chunk__29939_29950 = G__29962;
count__29940_29951 = G__29963;
i__29941_29952 = G__29964;
continue;
} else {
var dep_29965 = cljs.core.first.call(null,seq__29938_29959__$1);
topo_sort_helper_STAR_.call(null,dep_29965,(depth + (1)),state);

var G__29966 = cljs.core.next.call(null,seq__29938_29959__$1);
var G__29967 = null;
var G__29968 = (0);
var G__29969 = (0);
seq__29938_29949 = G__29966;
chunk__29939_29950 = G__29967;
count__29940_29951 = G__29968;
i__29941_29952 = G__29969;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29942){
var vec__29946 = p__29942;
var seq__29947 = cljs.core.seq.call(null,vec__29946);
var first__29948 = cljs.core.first.call(null,seq__29947);
var seq__29947__$1 = cljs.core.next.call(null,seq__29947);
var x = first__29948;
var xs = seq__29947__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29946,seq__29947,first__29948,seq__29947__$1,x,xs,get_deps__$1){
return (function (p1__29888_SHARP_){
return clojure.set.difference.call(null,p1__29888_SHARP_,x);
});})(vec__29946,seq__29947,first__29948,seq__29947__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29982 = cljs.core.seq.call(null,provides);
var chunk__29983 = null;
var count__29984 = (0);
var i__29985 = (0);
while(true){
if((i__29985 < count__29984)){
var prov = cljs.core._nth.call(null,chunk__29983,i__29985);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29986_29994 = cljs.core.seq.call(null,requires);
var chunk__29987_29995 = null;
var count__29988_29996 = (0);
var i__29989_29997 = (0);
while(true){
if((i__29989_29997 < count__29988_29996)){
var req_29998 = cljs.core._nth.call(null,chunk__29987_29995,i__29989_29997);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29998,prov);

var G__29999 = seq__29986_29994;
var G__30000 = chunk__29987_29995;
var G__30001 = count__29988_29996;
var G__30002 = (i__29989_29997 + (1));
seq__29986_29994 = G__29999;
chunk__29987_29995 = G__30000;
count__29988_29996 = G__30001;
i__29989_29997 = G__30002;
continue;
} else {
var temp__4657__auto___30003 = cljs.core.seq.call(null,seq__29986_29994);
if(temp__4657__auto___30003){
var seq__29986_30004__$1 = temp__4657__auto___30003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29986_30004__$1)){
var c__25617__auto___30005 = cljs.core.chunk_first.call(null,seq__29986_30004__$1);
var G__30006 = cljs.core.chunk_rest.call(null,seq__29986_30004__$1);
var G__30007 = c__25617__auto___30005;
var G__30008 = cljs.core.count.call(null,c__25617__auto___30005);
var G__30009 = (0);
seq__29986_29994 = G__30006;
chunk__29987_29995 = G__30007;
count__29988_29996 = G__30008;
i__29989_29997 = G__30009;
continue;
} else {
var req_30010 = cljs.core.first.call(null,seq__29986_30004__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30010,prov);

var G__30011 = cljs.core.next.call(null,seq__29986_30004__$1);
var G__30012 = null;
var G__30013 = (0);
var G__30014 = (0);
seq__29986_29994 = G__30011;
chunk__29987_29995 = G__30012;
count__29988_29996 = G__30013;
i__29989_29997 = G__30014;
continue;
}
} else {
}
}
break;
}

var G__30015 = seq__29982;
var G__30016 = chunk__29983;
var G__30017 = count__29984;
var G__30018 = (i__29985 + (1));
seq__29982 = G__30015;
chunk__29983 = G__30016;
count__29984 = G__30017;
i__29985 = G__30018;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29982);
if(temp__4657__auto__){
var seq__29982__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29982__$1)){
var c__25617__auto__ = cljs.core.chunk_first.call(null,seq__29982__$1);
var G__30019 = cljs.core.chunk_rest.call(null,seq__29982__$1);
var G__30020 = c__25617__auto__;
var G__30021 = cljs.core.count.call(null,c__25617__auto__);
var G__30022 = (0);
seq__29982 = G__30019;
chunk__29983 = G__30020;
count__29984 = G__30021;
i__29985 = G__30022;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29982__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29990_30023 = cljs.core.seq.call(null,requires);
var chunk__29991_30024 = null;
var count__29992_30025 = (0);
var i__29993_30026 = (0);
while(true){
if((i__29993_30026 < count__29992_30025)){
var req_30027 = cljs.core._nth.call(null,chunk__29991_30024,i__29993_30026);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30027,prov);

var G__30028 = seq__29990_30023;
var G__30029 = chunk__29991_30024;
var G__30030 = count__29992_30025;
var G__30031 = (i__29993_30026 + (1));
seq__29990_30023 = G__30028;
chunk__29991_30024 = G__30029;
count__29992_30025 = G__30030;
i__29993_30026 = G__30031;
continue;
} else {
var temp__4657__auto___30032__$1 = cljs.core.seq.call(null,seq__29990_30023);
if(temp__4657__auto___30032__$1){
var seq__29990_30033__$1 = temp__4657__auto___30032__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29990_30033__$1)){
var c__25617__auto___30034 = cljs.core.chunk_first.call(null,seq__29990_30033__$1);
var G__30035 = cljs.core.chunk_rest.call(null,seq__29990_30033__$1);
var G__30036 = c__25617__auto___30034;
var G__30037 = cljs.core.count.call(null,c__25617__auto___30034);
var G__30038 = (0);
seq__29990_30023 = G__30035;
chunk__29991_30024 = G__30036;
count__29992_30025 = G__30037;
i__29993_30026 = G__30038;
continue;
} else {
var req_30039 = cljs.core.first.call(null,seq__29990_30033__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30039,prov);

var G__30040 = cljs.core.next.call(null,seq__29990_30033__$1);
var G__30041 = null;
var G__30042 = (0);
var G__30043 = (0);
seq__29990_30023 = G__30040;
chunk__29991_30024 = G__30041;
count__29992_30025 = G__30042;
i__29993_30026 = G__30043;
continue;
}
} else {
}
}
break;
}

var G__30044 = cljs.core.next.call(null,seq__29982__$1);
var G__30045 = null;
var G__30046 = (0);
var G__30047 = (0);
seq__29982 = G__30044;
chunk__29983 = G__30045;
count__29984 = G__30046;
i__29985 = G__30047;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30052_30056 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30053_30057 = null;
var count__30054_30058 = (0);
var i__30055_30059 = (0);
while(true){
if((i__30055_30059 < count__30054_30058)){
var ns_30060 = cljs.core._nth.call(null,chunk__30053_30057,i__30055_30059);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30060);

var G__30061 = seq__30052_30056;
var G__30062 = chunk__30053_30057;
var G__30063 = count__30054_30058;
var G__30064 = (i__30055_30059 + (1));
seq__30052_30056 = G__30061;
chunk__30053_30057 = G__30062;
count__30054_30058 = G__30063;
i__30055_30059 = G__30064;
continue;
} else {
var temp__4657__auto___30065 = cljs.core.seq.call(null,seq__30052_30056);
if(temp__4657__auto___30065){
var seq__30052_30066__$1 = temp__4657__auto___30065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30052_30066__$1)){
var c__25617__auto___30067 = cljs.core.chunk_first.call(null,seq__30052_30066__$1);
var G__30068 = cljs.core.chunk_rest.call(null,seq__30052_30066__$1);
var G__30069 = c__25617__auto___30067;
var G__30070 = cljs.core.count.call(null,c__25617__auto___30067);
var G__30071 = (0);
seq__30052_30056 = G__30068;
chunk__30053_30057 = G__30069;
count__30054_30058 = G__30070;
i__30055_30059 = G__30071;
continue;
} else {
var ns_30072 = cljs.core.first.call(null,seq__30052_30066__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30072);

var G__30073 = cljs.core.next.call(null,seq__30052_30066__$1);
var G__30074 = null;
var G__30075 = (0);
var G__30076 = (0);
seq__30052_30056 = G__30073;
chunk__30053_30057 = G__30074;
count__30054_30058 = G__30075;
i__30055_30059 = G__30076;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24803__auto__ = goog.require__;
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30077__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30078__i = 0, G__30078__a = new Array(arguments.length -  0);
while (G__30078__i < G__30078__a.length) {G__30078__a[G__30078__i] = arguments[G__30078__i + 0]; ++G__30078__i;}
  args = new cljs.core.IndexedSeq(G__30078__a,0);
} 
return G__30077__delegate.call(this,args);};
G__30077.cljs$lang$maxFixedArity = 0;
G__30077.cljs$lang$applyTo = (function (arglist__30079){
var args = cljs.core.seq(arglist__30079);
return G__30077__delegate(args);
});
G__30077.cljs$core$IFn$_invoke$arity$variadic = G__30077__delegate;
return G__30077;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30081 = cljs.core._EQ_;
var expr__30082 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30081.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30082))){
var path_parts = ((function (pred__30081,expr__30082){
return (function (p1__30080_SHARP_){
return clojure.string.split.call(null,p1__30080_SHARP_,/[\/\\]/);
});})(pred__30081,expr__30082))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30081,expr__30082){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30084){if((e30084 instanceof Error)){
var e = e30084;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30084;

}
}})());
});
;})(path_parts,sep,root,pred__30081,expr__30082))
} else {
if(cljs.core.truth_(pred__30081.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30082))){
return ((function (pred__30081,expr__30082){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30081,expr__30082){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30081,expr__30082))
);

return deferred.addErrback(((function (deferred,pred__30081,expr__30082){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30081,expr__30082))
);
});
;})(pred__30081,expr__30082))
} else {
return ((function (pred__30081,expr__30082){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30081,expr__30082))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30085,callback){
var map__30088 = p__30085;
var map__30088__$1 = ((((!((map__30088 == null)))?((((map__30088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30088):map__30088);
var file_msg = map__30088__$1;
var request_url = cljs.core.get.call(null,map__30088__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30088,map__30088__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30088,map__30088__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__){
return (function (state_30112){
var state_val_30113 = (state_30112[(1)]);
if((state_val_30113 === (7))){
var inst_30108 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30114_30134 = state_30112__$1;
(statearr_30114_30134[(2)] = inst_30108);

(statearr_30114_30134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (1))){
var state_30112__$1 = state_30112;
var statearr_30115_30135 = state_30112__$1;
(statearr_30115_30135[(2)] = null);

(statearr_30115_30135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (4))){
var inst_30092 = (state_30112[(7)]);
var inst_30092__$1 = (state_30112[(2)]);
var state_30112__$1 = (function (){var statearr_30116 = state_30112;
(statearr_30116[(7)] = inst_30092__$1);

return statearr_30116;
})();
if(cljs.core.truth_(inst_30092__$1)){
var statearr_30117_30136 = state_30112__$1;
(statearr_30117_30136[(1)] = (5));

} else {
var statearr_30118_30137 = state_30112__$1;
(statearr_30118_30137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (6))){
var state_30112__$1 = state_30112;
var statearr_30119_30138 = state_30112__$1;
(statearr_30119_30138[(2)] = null);

(statearr_30119_30138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (3))){
var inst_30110 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30112__$1,inst_30110);
} else {
if((state_val_30113 === (2))){
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30113 === (11))){
var inst_30104 = (state_30112[(2)]);
var state_30112__$1 = (function (){var statearr_30120 = state_30112;
(statearr_30120[(8)] = inst_30104);

return statearr_30120;
})();
var statearr_30121_30139 = state_30112__$1;
(statearr_30121_30139[(2)] = null);

(statearr_30121_30139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (9))){
var inst_30096 = (state_30112[(9)]);
var inst_30098 = (state_30112[(10)]);
var inst_30100 = inst_30098.call(null,inst_30096);
var state_30112__$1 = state_30112;
var statearr_30122_30140 = state_30112__$1;
(statearr_30122_30140[(2)] = inst_30100);

(statearr_30122_30140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (5))){
var inst_30092 = (state_30112[(7)]);
var inst_30094 = figwheel.client.file_reloading.blocking_load.call(null,inst_30092);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(8),inst_30094);
} else {
if((state_val_30113 === (10))){
var inst_30096 = (state_30112[(9)]);
var inst_30102 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30096);
var state_30112__$1 = state_30112;
var statearr_30123_30141 = state_30112__$1;
(statearr_30123_30141[(2)] = inst_30102);

(statearr_30123_30141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (8))){
var inst_30098 = (state_30112[(10)]);
var inst_30092 = (state_30112[(7)]);
var inst_30096 = (state_30112[(2)]);
var inst_30097 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30098__$1 = cljs.core.get.call(null,inst_30097,inst_30092);
var state_30112__$1 = (function (){var statearr_30124 = state_30112;
(statearr_30124[(9)] = inst_30096);

(statearr_30124[(10)] = inst_30098__$1);

return statearr_30124;
})();
if(cljs.core.truth_(inst_30098__$1)){
var statearr_30125_30142 = state_30112__$1;
(statearr_30125_30142[(1)] = (9));

} else {
var statearr_30126_30143 = state_30112__$1;
(statearr_30126_30143[(1)] = (10));

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
});})(c__27008__auto__))
;
return ((function (switch__26896__auto__,c__27008__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26897__auto__ = null;
var figwheel$client$file_reloading$state_machine__26897__auto____0 = (function (){
var statearr_30130 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30130[(0)] = figwheel$client$file_reloading$state_machine__26897__auto__);

(statearr_30130[(1)] = (1));

return statearr_30130;
});
var figwheel$client$file_reloading$state_machine__26897__auto____1 = (function (state_30112){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_30112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e30131){if((e30131 instanceof Object)){
var ex__26900__auto__ = e30131;
var statearr_30132_30144 = state_30112;
(statearr_30132_30144[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30145 = state_30112;
state_30112 = G__30145;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26897__auto__ = function(state_30112){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26897__auto____1.call(this,state_30112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26897__auto____0;
figwheel$client$file_reloading$state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26897__auto____1;
return figwheel$client$file_reloading$state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__))
})();
var state__27010__auto__ = (function (){var statearr_30133 = f__27009__auto__.call(null);
(statearr_30133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_30133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__))
);

return c__27008__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30146,callback){
var map__30149 = p__30146;
var map__30149__$1 = ((((!((map__30149 == null)))?((((map__30149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30149):map__30149);
var file_msg = map__30149__$1;
var namespace = cljs.core.get.call(null,map__30149__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30149,map__30149__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30149,map__30149__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30151){
var map__30154 = p__30151;
var map__30154__$1 = ((((!((map__30154 == null)))?((((map__30154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30154):map__30154);
var file_msg = map__30154__$1;
var namespace = cljs.core.get.call(null,map__30154__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24791__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24791__auto__){
var or__24803__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24803__auto__)){
return or__24803__auto__;
} else {
var or__24803__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24803__auto____$1)){
return or__24803__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24791__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30156,callback){
var map__30159 = p__30156;
var map__30159__$1 = ((((!((map__30159 == null)))?((((map__30159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);
var file_msg = map__30159__$1;
var request_url = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27008__auto___30263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto___30263,out){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto___30263,out){
return (function (state_30245){
var state_val_30246 = (state_30245[(1)]);
if((state_val_30246 === (1))){
var inst_30219 = cljs.core.seq.call(null,files);
var inst_30220 = cljs.core.first.call(null,inst_30219);
var inst_30221 = cljs.core.next.call(null,inst_30219);
var inst_30222 = files;
var state_30245__$1 = (function (){var statearr_30247 = state_30245;
(statearr_30247[(7)] = inst_30221);

(statearr_30247[(8)] = inst_30222);

(statearr_30247[(9)] = inst_30220);

return statearr_30247;
})();
var statearr_30248_30264 = state_30245__$1;
(statearr_30248_30264[(2)] = null);

(statearr_30248_30264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (2))){
var inst_30228 = (state_30245[(10)]);
var inst_30222 = (state_30245[(8)]);
var inst_30227 = cljs.core.seq.call(null,inst_30222);
var inst_30228__$1 = cljs.core.first.call(null,inst_30227);
var inst_30229 = cljs.core.next.call(null,inst_30227);
var inst_30230 = (inst_30228__$1 == null);
var inst_30231 = cljs.core.not.call(null,inst_30230);
var state_30245__$1 = (function (){var statearr_30249 = state_30245;
(statearr_30249[(10)] = inst_30228__$1);

(statearr_30249[(11)] = inst_30229);

return statearr_30249;
})();
if(inst_30231){
var statearr_30250_30265 = state_30245__$1;
(statearr_30250_30265[(1)] = (4));

} else {
var statearr_30251_30266 = state_30245__$1;
(statearr_30251_30266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (3))){
var inst_30243 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30245__$1,inst_30243);
} else {
if((state_val_30246 === (4))){
var inst_30228 = (state_30245[(10)]);
var inst_30233 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30228);
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30245__$1,(7),inst_30233);
} else {
if((state_val_30246 === (5))){
var inst_30239 = cljs.core.async.close_BANG_.call(null,out);
var state_30245__$1 = state_30245;
var statearr_30252_30267 = state_30245__$1;
(statearr_30252_30267[(2)] = inst_30239);

(statearr_30252_30267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (6))){
var inst_30241 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
var statearr_30253_30268 = state_30245__$1;
(statearr_30253_30268[(2)] = inst_30241);

(statearr_30253_30268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (7))){
var inst_30229 = (state_30245[(11)]);
var inst_30235 = (state_30245[(2)]);
var inst_30236 = cljs.core.async.put_BANG_.call(null,out,inst_30235);
var inst_30222 = inst_30229;
var state_30245__$1 = (function (){var statearr_30254 = state_30245;
(statearr_30254[(12)] = inst_30236);

(statearr_30254[(8)] = inst_30222);

return statearr_30254;
})();
var statearr_30255_30269 = state_30245__$1;
(statearr_30255_30269[(2)] = null);

(statearr_30255_30269[(1)] = (2));


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
});})(c__27008__auto___30263,out))
;
return ((function (switch__26896__auto__,c__27008__auto___30263,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto____0 = (function (){
var statearr_30259 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30259[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto__);

(statearr_30259[(1)] = (1));

return statearr_30259;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto____1 = (function (state_30245){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_30245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e30260){if((e30260 instanceof Object)){
var ex__26900__auto__ = e30260;
var statearr_30261_30270 = state_30245;
(statearr_30261_30270[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30271 = state_30245;
state_30245 = G__30271;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto__ = function(state_30245){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto____1.call(this,state_30245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto___30263,out))
})();
var state__27010__auto__ = (function (){var statearr_30262 = f__27009__auto__.call(null);
(statearr_30262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto___30263);

return statearr_30262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto___30263,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30272,opts){
var map__30276 = p__30272;
var map__30276__$1 = ((((!((map__30276 == null)))?((((map__30276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30276):map__30276);
var eval_body = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24791__auto__ = eval_body;
if(cljs.core.truth_(and__24791__auto__)){
return typeof eval_body === 'string';
} else {
return and__24791__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30278){var e = e30278;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30279_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30279_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30288){
var vec__30289 = p__30288;
var k = cljs.core.nth.call(null,vec__30289,(0),null);
var v = cljs.core.nth.call(null,vec__30289,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30292){
var vec__30293 = p__30292;
var k = cljs.core.nth.call(null,vec__30293,(0),null);
var v = cljs.core.nth.call(null,vec__30293,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30299,p__30300){
var map__30548 = p__30299;
var map__30548__$1 = ((((!((map__30548 == null)))?((((map__30548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30548):map__30548);
var opts = map__30548__$1;
var before_jsload = cljs.core.get.call(null,map__30548__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30548__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30548__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30549 = p__30300;
var map__30549__$1 = ((((!((map__30549 == null)))?((((map__30549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30549):map__30549);
var msg = map__30549__$1;
var files = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27009__auto__ = (function (){var switch__26896__auto__ = ((function (c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30703){
var state_val_30704 = (state_30703[(1)]);
if((state_val_30704 === (7))){
var inst_30566 = (state_30703[(7)]);
var inst_30563 = (state_30703[(8)]);
var inst_30565 = (state_30703[(9)]);
var inst_30564 = (state_30703[(10)]);
var inst_30571 = cljs.core._nth.call(null,inst_30564,inst_30566);
var inst_30572 = figwheel.client.file_reloading.eval_body.call(null,inst_30571,opts);
var inst_30573 = (inst_30566 + (1));
var tmp30705 = inst_30563;
var tmp30706 = inst_30565;
var tmp30707 = inst_30564;
var inst_30563__$1 = tmp30705;
var inst_30564__$1 = tmp30707;
var inst_30565__$1 = tmp30706;
var inst_30566__$1 = inst_30573;
var state_30703__$1 = (function (){var statearr_30708 = state_30703;
(statearr_30708[(7)] = inst_30566__$1);

(statearr_30708[(8)] = inst_30563__$1);

(statearr_30708[(9)] = inst_30565__$1);

(statearr_30708[(10)] = inst_30564__$1);

(statearr_30708[(11)] = inst_30572);

return statearr_30708;
})();
var statearr_30709_30795 = state_30703__$1;
(statearr_30709_30795[(2)] = null);

(statearr_30709_30795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (20))){
var inst_30606 = (state_30703[(12)]);
var inst_30614 = figwheel.client.file_reloading.sort_files.call(null,inst_30606);
var state_30703__$1 = state_30703;
var statearr_30710_30796 = state_30703__$1;
(statearr_30710_30796[(2)] = inst_30614);

(statearr_30710_30796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (27))){
var state_30703__$1 = state_30703;
var statearr_30711_30797 = state_30703__$1;
(statearr_30711_30797[(2)] = null);

(statearr_30711_30797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (1))){
var inst_30555 = (state_30703[(13)]);
var inst_30552 = before_jsload.call(null,files);
var inst_30553 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30554 = (function (){return ((function (inst_30555,inst_30552,inst_30553,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30296_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30296_SHARP_);
});
;})(inst_30555,inst_30552,inst_30553,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30555__$1 = cljs.core.filter.call(null,inst_30554,files);
var inst_30556 = cljs.core.not_empty.call(null,inst_30555__$1);
var state_30703__$1 = (function (){var statearr_30712 = state_30703;
(statearr_30712[(13)] = inst_30555__$1);

(statearr_30712[(14)] = inst_30553);

(statearr_30712[(15)] = inst_30552);

return statearr_30712;
})();
if(cljs.core.truth_(inst_30556)){
var statearr_30713_30798 = state_30703__$1;
(statearr_30713_30798[(1)] = (2));

} else {
var statearr_30714_30799 = state_30703__$1;
(statearr_30714_30799[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (24))){
var state_30703__$1 = state_30703;
var statearr_30715_30800 = state_30703__$1;
(statearr_30715_30800[(2)] = null);

(statearr_30715_30800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (39))){
var inst_30656 = (state_30703[(16)]);
var state_30703__$1 = state_30703;
var statearr_30716_30801 = state_30703__$1;
(statearr_30716_30801[(2)] = inst_30656);

(statearr_30716_30801[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (46))){
var inst_30698 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30717_30802 = state_30703__$1;
(statearr_30717_30802[(2)] = inst_30698);

(statearr_30717_30802[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (4))){
var inst_30600 = (state_30703[(2)]);
var inst_30601 = cljs.core.List.EMPTY;
var inst_30602 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30601);
var inst_30603 = (function (){return ((function (inst_30600,inst_30601,inst_30602,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30297_SHARP_){
var and__24791__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30297_SHARP_);
if(cljs.core.truth_(and__24791__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30297_SHARP_));
} else {
return and__24791__auto__;
}
});
;})(inst_30600,inst_30601,inst_30602,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30604 = cljs.core.filter.call(null,inst_30603,files);
var inst_30605 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30606 = cljs.core.concat.call(null,inst_30604,inst_30605);
var state_30703__$1 = (function (){var statearr_30718 = state_30703;
(statearr_30718[(17)] = inst_30602);

(statearr_30718[(18)] = inst_30600);

(statearr_30718[(12)] = inst_30606);

return statearr_30718;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30719_30803 = state_30703__$1;
(statearr_30719_30803[(1)] = (16));

} else {
var statearr_30720_30804 = state_30703__$1;
(statearr_30720_30804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (15))){
var inst_30590 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30721_30805 = state_30703__$1;
(statearr_30721_30805[(2)] = inst_30590);

(statearr_30721_30805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (21))){
var inst_30616 = (state_30703[(19)]);
var inst_30616__$1 = (state_30703[(2)]);
var inst_30617 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30616__$1);
var state_30703__$1 = (function (){var statearr_30722 = state_30703;
(statearr_30722[(19)] = inst_30616__$1);

return statearr_30722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30703__$1,(22),inst_30617);
} else {
if((state_val_30704 === (31))){
var inst_30701 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30703__$1,inst_30701);
} else {
if((state_val_30704 === (32))){
var inst_30656 = (state_30703[(16)]);
var inst_30661 = inst_30656.cljs$lang$protocol_mask$partition0$;
var inst_30662 = (inst_30661 & (64));
var inst_30663 = inst_30656.cljs$core$ISeq$;
var inst_30664 = (cljs.core.PROTOCOL_SENTINEL === inst_30663);
var inst_30665 = (inst_30662) || (inst_30664);
var state_30703__$1 = state_30703;
if(cljs.core.truth_(inst_30665)){
var statearr_30723_30806 = state_30703__$1;
(statearr_30723_30806[(1)] = (35));

} else {
var statearr_30724_30807 = state_30703__$1;
(statearr_30724_30807[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (40))){
var inst_30678 = (state_30703[(20)]);
var inst_30677 = (state_30703[(2)]);
var inst_30678__$1 = cljs.core.get.call(null,inst_30677,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30679 = cljs.core.get.call(null,inst_30677,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30680 = cljs.core.not_empty.call(null,inst_30678__$1);
var state_30703__$1 = (function (){var statearr_30725 = state_30703;
(statearr_30725[(20)] = inst_30678__$1);

(statearr_30725[(21)] = inst_30679);

return statearr_30725;
})();
if(cljs.core.truth_(inst_30680)){
var statearr_30726_30808 = state_30703__$1;
(statearr_30726_30808[(1)] = (41));

} else {
var statearr_30727_30809 = state_30703__$1;
(statearr_30727_30809[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (33))){
var state_30703__$1 = state_30703;
var statearr_30728_30810 = state_30703__$1;
(statearr_30728_30810[(2)] = false);

(statearr_30728_30810[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (13))){
var inst_30576 = (state_30703[(22)]);
var inst_30580 = cljs.core.chunk_first.call(null,inst_30576);
var inst_30581 = cljs.core.chunk_rest.call(null,inst_30576);
var inst_30582 = cljs.core.count.call(null,inst_30580);
var inst_30563 = inst_30581;
var inst_30564 = inst_30580;
var inst_30565 = inst_30582;
var inst_30566 = (0);
var state_30703__$1 = (function (){var statearr_30729 = state_30703;
(statearr_30729[(7)] = inst_30566);

(statearr_30729[(8)] = inst_30563);

(statearr_30729[(9)] = inst_30565);

(statearr_30729[(10)] = inst_30564);

return statearr_30729;
})();
var statearr_30730_30811 = state_30703__$1;
(statearr_30730_30811[(2)] = null);

(statearr_30730_30811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (22))){
var inst_30619 = (state_30703[(23)]);
var inst_30624 = (state_30703[(24)]);
var inst_30616 = (state_30703[(19)]);
var inst_30620 = (state_30703[(25)]);
var inst_30619__$1 = (state_30703[(2)]);
var inst_30620__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30619__$1);
var inst_30621 = (function (){var all_files = inst_30616;
var res_SINGLEQUOTE_ = inst_30619__$1;
var res = inst_30620__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30619,inst_30624,inst_30616,inst_30620,inst_30619__$1,inst_30620__$1,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30298_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30298_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30619,inst_30624,inst_30616,inst_30620,inst_30619__$1,inst_30620__$1,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30622 = cljs.core.filter.call(null,inst_30621,inst_30619__$1);
var inst_30623 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30624__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30623);
var inst_30625 = cljs.core.not_empty.call(null,inst_30624__$1);
var state_30703__$1 = (function (){var statearr_30731 = state_30703;
(statearr_30731[(23)] = inst_30619__$1);

(statearr_30731[(26)] = inst_30622);

(statearr_30731[(24)] = inst_30624__$1);

(statearr_30731[(25)] = inst_30620__$1);

return statearr_30731;
})();
if(cljs.core.truth_(inst_30625)){
var statearr_30732_30812 = state_30703__$1;
(statearr_30732_30812[(1)] = (23));

} else {
var statearr_30733_30813 = state_30703__$1;
(statearr_30733_30813[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (36))){
var state_30703__$1 = state_30703;
var statearr_30734_30814 = state_30703__$1;
(statearr_30734_30814[(2)] = false);

(statearr_30734_30814[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (41))){
var inst_30678 = (state_30703[(20)]);
var inst_30682 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30683 = cljs.core.map.call(null,inst_30682,inst_30678);
var inst_30684 = cljs.core.pr_str.call(null,inst_30683);
var inst_30685 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30684)].join('');
var inst_30686 = figwheel.client.utils.log.call(null,inst_30685);
var state_30703__$1 = state_30703;
var statearr_30735_30815 = state_30703__$1;
(statearr_30735_30815[(2)] = inst_30686);

(statearr_30735_30815[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (43))){
var inst_30679 = (state_30703[(21)]);
var inst_30689 = (state_30703[(2)]);
var inst_30690 = cljs.core.not_empty.call(null,inst_30679);
var state_30703__$1 = (function (){var statearr_30736 = state_30703;
(statearr_30736[(27)] = inst_30689);

return statearr_30736;
})();
if(cljs.core.truth_(inst_30690)){
var statearr_30737_30816 = state_30703__$1;
(statearr_30737_30816[(1)] = (44));

} else {
var statearr_30738_30817 = state_30703__$1;
(statearr_30738_30817[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (29))){
var inst_30619 = (state_30703[(23)]);
var inst_30622 = (state_30703[(26)]);
var inst_30624 = (state_30703[(24)]);
var inst_30616 = (state_30703[(19)]);
var inst_30656 = (state_30703[(16)]);
var inst_30620 = (state_30703[(25)]);
var inst_30652 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30655 = (function (){var all_files = inst_30616;
var res_SINGLEQUOTE_ = inst_30619;
var res = inst_30620;
var files_not_loaded = inst_30622;
var dependencies_that_loaded = inst_30624;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30656,inst_30620,inst_30652,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30654){
var map__30739 = p__30654;
var map__30739__$1 = ((((!((map__30739 == null)))?((((map__30739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30739):map__30739);
var namespace = cljs.core.get.call(null,map__30739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30656,inst_30620,inst_30652,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30656__$1 = cljs.core.group_by.call(null,inst_30655,inst_30622);
var inst_30658 = (inst_30656__$1 == null);
var inst_30659 = cljs.core.not.call(null,inst_30658);
var state_30703__$1 = (function (){var statearr_30741 = state_30703;
(statearr_30741[(28)] = inst_30652);

(statearr_30741[(16)] = inst_30656__$1);

return statearr_30741;
})();
if(inst_30659){
var statearr_30742_30818 = state_30703__$1;
(statearr_30742_30818[(1)] = (32));

} else {
var statearr_30743_30819 = state_30703__$1;
(statearr_30743_30819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (44))){
var inst_30679 = (state_30703[(21)]);
var inst_30692 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30679);
var inst_30693 = cljs.core.pr_str.call(null,inst_30692);
var inst_30694 = [cljs.core.str("not required: "),cljs.core.str(inst_30693)].join('');
var inst_30695 = figwheel.client.utils.log.call(null,inst_30694);
var state_30703__$1 = state_30703;
var statearr_30744_30820 = state_30703__$1;
(statearr_30744_30820[(2)] = inst_30695);

(statearr_30744_30820[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (6))){
var inst_30597 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30745_30821 = state_30703__$1;
(statearr_30745_30821[(2)] = inst_30597);

(statearr_30745_30821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (28))){
var inst_30622 = (state_30703[(26)]);
var inst_30649 = (state_30703[(2)]);
var inst_30650 = cljs.core.not_empty.call(null,inst_30622);
var state_30703__$1 = (function (){var statearr_30746 = state_30703;
(statearr_30746[(29)] = inst_30649);

return statearr_30746;
})();
if(cljs.core.truth_(inst_30650)){
var statearr_30747_30822 = state_30703__$1;
(statearr_30747_30822[(1)] = (29));

} else {
var statearr_30748_30823 = state_30703__$1;
(statearr_30748_30823[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (25))){
var inst_30620 = (state_30703[(25)]);
var inst_30636 = (state_30703[(2)]);
var inst_30637 = cljs.core.not_empty.call(null,inst_30620);
var state_30703__$1 = (function (){var statearr_30749 = state_30703;
(statearr_30749[(30)] = inst_30636);

return statearr_30749;
})();
if(cljs.core.truth_(inst_30637)){
var statearr_30750_30824 = state_30703__$1;
(statearr_30750_30824[(1)] = (26));

} else {
var statearr_30751_30825 = state_30703__$1;
(statearr_30751_30825[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (34))){
var inst_30672 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
if(cljs.core.truth_(inst_30672)){
var statearr_30752_30826 = state_30703__$1;
(statearr_30752_30826[(1)] = (38));

} else {
var statearr_30753_30827 = state_30703__$1;
(statearr_30753_30827[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (17))){
var state_30703__$1 = state_30703;
var statearr_30754_30828 = state_30703__$1;
(statearr_30754_30828[(2)] = recompile_dependents);

(statearr_30754_30828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (3))){
var state_30703__$1 = state_30703;
var statearr_30755_30829 = state_30703__$1;
(statearr_30755_30829[(2)] = null);

(statearr_30755_30829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (12))){
var inst_30593 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30756_30830 = state_30703__$1;
(statearr_30756_30830[(2)] = inst_30593);

(statearr_30756_30830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (2))){
var inst_30555 = (state_30703[(13)]);
var inst_30562 = cljs.core.seq.call(null,inst_30555);
var inst_30563 = inst_30562;
var inst_30564 = null;
var inst_30565 = (0);
var inst_30566 = (0);
var state_30703__$1 = (function (){var statearr_30757 = state_30703;
(statearr_30757[(7)] = inst_30566);

(statearr_30757[(8)] = inst_30563);

(statearr_30757[(9)] = inst_30565);

(statearr_30757[(10)] = inst_30564);

return statearr_30757;
})();
var statearr_30758_30831 = state_30703__$1;
(statearr_30758_30831[(2)] = null);

(statearr_30758_30831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (23))){
var inst_30619 = (state_30703[(23)]);
var inst_30622 = (state_30703[(26)]);
var inst_30624 = (state_30703[(24)]);
var inst_30616 = (state_30703[(19)]);
var inst_30620 = (state_30703[(25)]);
var inst_30627 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30629 = (function (){var all_files = inst_30616;
var res_SINGLEQUOTE_ = inst_30619;
var res = inst_30620;
var files_not_loaded = inst_30622;
var dependencies_that_loaded = inst_30624;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30620,inst_30627,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30628){
var map__30759 = p__30628;
var map__30759__$1 = ((((!((map__30759 == null)))?((((map__30759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30759):map__30759);
var request_url = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30620,inst_30627,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30630 = cljs.core.reverse.call(null,inst_30624);
var inst_30631 = cljs.core.map.call(null,inst_30629,inst_30630);
var inst_30632 = cljs.core.pr_str.call(null,inst_30631);
var inst_30633 = figwheel.client.utils.log.call(null,inst_30632);
var state_30703__$1 = (function (){var statearr_30761 = state_30703;
(statearr_30761[(31)] = inst_30627);

return statearr_30761;
})();
var statearr_30762_30832 = state_30703__$1;
(statearr_30762_30832[(2)] = inst_30633);

(statearr_30762_30832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (35))){
var state_30703__$1 = state_30703;
var statearr_30763_30833 = state_30703__$1;
(statearr_30763_30833[(2)] = true);

(statearr_30763_30833[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (19))){
var inst_30606 = (state_30703[(12)]);
var inst_30612 = figwheel.client.file_reloading.expand_files.call(null,inst_30606);
var state_30703__$1 = state_30703;
var statearr_30764_30834 = state_30703__$1;
(statearr_30764_30834[(2)] = inst_30612);

(statearr_30764_30834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (11))){
var state_30703__$1 = state_30703;
var statearr_30765_30835 = state_30703__$1;
(statearr_30765_30835[(2)] = null);

(statearr_30765_30835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (9))){
var inst_30595 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30766_30836 = state_30703__$1;
(statearr_30766_30836[(2)] = inst_30595);

(statearr_30766_30836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (5))){
var inst_30566 = (state_30703[(7)]);
var inst_30565 = (state_30703[(9)]);
var inst_30568 = (inst_30566 < inst_30565);
var inst_30569 = inst_30568;
var state_30703__$1 = state_30703;
if(cljs.core.truth_(inst_30569)){
var statearr_30767_30837 = state_30703__$1;
(statearr_30767_30837[(1)] = (7));

} else {
var statearr_30768_30838 = state_30703__$1;
(statearr_30768_30838[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (14))){
var inst_30576 = (state_30703[(22)]);
var inst_30585 = cljs.core.first.call(null,inst_30576);
var inst_30586 = figwheel.client.file_reloading.eval_body.call(null,inst_30585,opts);
var inst_30587 = cljs.core.next.call(null,inst_30576);
var inst_30563 = inst_30587;
var inst_30564 = null;
var inst_30565 = (0);
var inst_30566 = (0);
var state_30703__$1 = (function (){var statearr_30769 = state_30703;
(statearr_30769[(7)] = inst_30566);

(statearr_30769[(8)] = inst_30563);

(statearr_30769[(9)] = inst_30565);

(statearr_30769[(32)] = inst_30586);

(statearr_30769[(10)] = inst_30564);

return statearr_30769;
})();
var statearr_30770_30839 = state_30703__$1;
(statearr_30770_30839[(2)] = null);

(statearr_30770_30839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (45))){
var state_30703__$1 = state_30703;
var statearr_30771_30840 = state_30703__$1;
(statearr_30771_30840[(2)] = null);

(statearr_30771_30840[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (26))){
var inst_30619 = (state_30703[(23)]);
var inst_30622 = (state_30703[(26)]);
var inst_30624 = (state_30703[(24)]);
var inst_30616 = (state_30703[(19)]);
var inst_30620 = (state_30703[(25)]);
var inst_30639 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30641 = (function (){var all_files = inst_30616;
var res_SINGLEQUOTE_ = inst_30619;
var res = inst_30620;
var files_not_loaded = inst_30622;
var dependencies_that_loaded = inst_30624;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30620,inst_30639,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30640){
var map__30772 = p__30640;
var map__30772__$1 = ((((!((map__30772 == null)))?((((map__30772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30772):map__30772);
var namespace = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30620,inst_30639,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30642 = cljs.core.map.call(null,inst_30641,inst_30620);
var inst_30643 = cljs.core.pr_str.call(null,inst_30642);
var inst_30644 = figwheel.client.utils.log.call(null,inst_30643);
var inst_30645 = (function (){var all_files = inst_30616;
var res_SINGLEQUOTE_ = inst_30619;
var res = inst_30620;
var files_not_loaded = inst_30622;
var dependencies_that_loaded = inst_30624;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30620,inst_30639,inst_30641,inst_30642,inst_30643,inst_30644,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30619,inst_30622,inst_30624,inst_30616,inst_30620,inst_30639,inst_30641,inst_30642,inst_30643,inst_30644,state_val_30704,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30646 = setTimeout(inst_30645,(10));
var state_30703__$1 = (function (){var statearr_30774 = state_30703;
(statearr_30774[(33)] = inst_30639);

(statearr_30774[(34)] = inst_30644);

return statearr_30774;
})();
var statearr_30775_30841 = state_30703__$1;
(statearr_30775_30841[(2)] = inst_30646);

(statearr_30775_30841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (16))){
var state_30703__$1 = state_30703;
var statearr_30776_30842 = state_30703__$1;
(statearr_30776_30842[(2)] = reload_dependents);

(statearr_30776_30842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (38))){
var inst_30656 = (state_30703[(16)]);
var inst_30674 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30656);
var state_30703__$1 = state_30703;
var statearr_30777_30843 = state_30703__$1;
(statearr_30777_30843[(2)] = inst_30674);

(statearr_30777_30843[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (30))){
var state_30703__$1 = state_30703;
var statearr_30778_30844 = state_30703__$1;
(statearr_30778_30844[(2)] = null);

(statearr_30778_30844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (10))){
var inst_30576 = (state_30703[(22)]);
var inst_30578 = cljs.core.chunked_seq_QMARK_.call(null,inst_30576);
var state_30703__$1 = state_30703;
if(inst_30578){
var statearr_30779_30845 = state_30703__$1;
(statearr_30779_30845[(1)] = (13));

} else {
var statearr_30780_30846 = state_30703__$1;
(statearr_30780_30846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (18))){
var inst_30610 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
if(cljs.core.truth_(inst_30610)){
var statearr_30781_30847 = state_30703__$1;
(statearr_30781_30847[(1)] = (19));

} else {
var statearr_30782_30848 = state_30703__$1;
(statearr_30782_30848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (42))){
var state_30703__$1 = state_30703;
var statearr_30783_30849 = state_30703__$1;
(statearr_30783_30849[(2)] = null);

(statearr_30783_30849[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (37))){
var inst_30669 = (state_30703[(2)]);
var state_30703__$1 = state_30703;
var statearr_30784_30850 = state_30703__$1;
(statearr_30784_30850[(2)] = inst_30669);

(statearr_30784_30850[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30704 === (8))){
var inst_30563 = (state_30703[(8)]);
var inst_30576 = (state_30703[(22)]);
var inst_30576__$1 = cljs.core.seq.call(null,inst_30563);
var state_30703__$1 = (function (){var statearr_30785 = state_30703;
(statearr_30785[(22)] = inst_30576__$1);

return statearr_30785;
})();
if(inst_30576__$1){
var statearr_30786_30851 = state_30703__$1;
(statearr_30786_30851[(1)] = (10));

} else {
var statearr_30787_30852 = state_30703__$1;
(statearr_30787_30852[(1)] = (11));

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
}
});})(c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26896__auto__,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto____0 = (function (){
var statearr_30791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30791[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto__);

(statearr_30791[(1)] = (1));

return statearr_30791;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto____1 = (function (state_30703){
while(true){
var ret_value__26898__auto__ = (function (){try{while(true){
var result__26899__auto__ = switch__26896__auto__.call(null,state_30703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26899__auto__;
}
break;
}
}catch (e30792){if((e30792 instanceof Object)){
var ex__26900__auto__ = e30792;
var statearr_30793_30853 = state_30703;
(statearr_30793_30853[(5)] = ex__26900__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30854 = state_30703;
state_30703 = G__30854;
continue;
} else {
return ret_value__26898__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto__ = function(state_30703){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto____1.call(this,state_30703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26897__auto__;
})()
;})(switch__26896__auto__,c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27010__auto__ = (function (){var statearr_30794 = f__27009__auto__.call(null);
(statearr_30794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27008__auto__);

return statearr_30794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27010__auto__);
});})(c__27008__auto__,map__30548,map__30548__$1,opts,before_jsload,on_jsload,reload_dependents,map__30549,map__30549__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27008__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30857,link){
var map__30860 = p__30857;
var map__30860__$1 = ((((!((map__30860 == null)))?((((map__30860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30860):map__30860);
var file = cljs.core.get.call(null,map__30860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30860,map__30860__$1,file){
return (function (p1__30855_SHARP_,p2__30856_SHARP_){
if(cljs.core._EQ_.call(null,p1__30855_SHARP_,p2__30856_SHARP_)){
return p1__30855_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30860,map__30860__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30866){
var map__30867 = p__30866;
var map__30867__$1 = ((((!((map__30867 == null)))?((((map__30867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30867):map__30867);
var match_length = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30867__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30862_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30862_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30869 = [];
var len__25911__auto___30872 = arguments.length;
var i__25912__auto___30873 = (0);
while(true){
if((i__25912__auto___30873 < len__25911__auto___30872)){
args30869.push((arguments[i__25912__auto___30873]));

var G__30874 = (i__25912__auto___30873 + (1));
i__25912__auto___30873 = G__30874;
continue;
} else {
}
break;
}

var G__30871 = args30869.length;
switch (G__30871) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30869.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30876_SHARP_,p2__30877_SHARP_){
return cljs.core.assoc.call(null,p1__30876_SHARP_,cljs.core.get.call(null,p2__30877_SHARP_,key),p2__30877_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30878){
var map__30881 = p__30878;
var map__30881__$1 = ((((!((map__30881 == null)))?((((map__30881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30881):map__30881);
var f_data = map__30881__$1;
var file = cljs.core.get.call(null,map__30881__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30883,p__30884){
var map__30893 = p__30883;
var map__30893__$1 = ((((!((map__30893 == null)))?((((map__30893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30893):map__30893);
var opts = map__30893__$1;
var on_cssload = cljs.core.get.call(null,map__30893__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30894 = p__30884;
var map__30894__$1 = ((((!((map__30894 == null)))?((((map__30894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30894):map__30894);
var files_msg = map__30894__$1;
var files = cljs.core.get.call(null,map__30894__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30897_30901 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30898_30902 = null;
var count__30899_30903 = (0);
var i__30900_30904 = (0);
while(true){
if((i__30900_30904 < count__30899_30903)){
var f_30905 = cljs.core._nth.call(null,chunk__30898_30902,i__30900_30904);
figwheel.client.file_reloading.reload_css_file.call(null,f_30905);

var G__30906 = seq__30897_30901;
var G__30907 = chunk__30898_30902;
var G__30908 = count__30899_30903;
var G__30909 = (i__30900_30904 + (1));
seq__30897_30901 = G__30906;
chunk__30898_30902 = G__30907;
count__30899_30903 = G__30908;
i__30900_30904 = G__30909;
continue;
} else {
var temp__4657__auto___30910 = cljs.core.seq.call(null,seq__30897_30901);
if(temp__4657__auto___30910){
var seq__30897_30911__$1 = temp__4657__auto___30910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30897_30911__$1)){
var c__25617__auto___30912 = cljs.core.chunk_first.call(null,seq__30897_30911__$1);
var G__30913 = cljs.core.chunk_rest.call(null,seq__30897_30911__$1);
var G__30914 = c__25617__auto___30912;
var G__30915 = cljs.core.count.call(null,c__25617__auto___30912);
var G__30916 = (0);
seq__30897_30901 = G__30913;
chunk__30898_30902 = G__30914;
count__30899_30903 = G__30915;
i__30900_30904 = G__30916;
continue;
} else {
var f_30917 = cljs.core.first.call(null,seq__30897_30911__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30917);

var G__30918 = cljs.core.next.call(null,seq__30897_30911__$1);
var G__30919 = null;
var G__30920 = (0);
var G__30921 = (0);
seq__30897_30901 = G__30918;
chunk__30898_30902 = G__30919;
count__30899_30903 = G__30920;
i__30900_30904 = G__30921;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30893,map__30893__$1,opts,on_cssload,map__30894,map__30894__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30893,map__30893__$1,opts,on_cssload,map__30894,map__30894__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1490842129118