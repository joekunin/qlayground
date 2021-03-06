// Compiled by ClojureScript 1.9.293 {}
goog.provide('com.stuartsierra.dependency');
goog.require('cljs.core');
goog.require('clojure.set');

/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraph = function(){};

/**
 * Returns the set of immediate dependencies of node.
 */
com.stuartsierra.dependency.immediate_dependencies = (function com$stuartsierra$dependency$immediate_dependencies(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.immediate_dependencies[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.immediate_dependencies["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependencies",graph);
}
}
}
});

/**
 * Returns the set of immediate dependents of node.
 */
com.stuartsierra.dependency.immediate_dependents = (function com$stuartsierra$dependency$immediate_dependents(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.immediate_dependents[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.immediate_dependents["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependents",graph);
}
}
}
});

/**
 * Returns the set of all things which node depends on, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependencies = (function com$stuartsierra$dependency$transitive_dependencies(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.transitive_dependencies[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies",graph);
}
}
}
});

/**
 * Returns the set of all things which depend upon node, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependents = (function com$stuartsierra$dependency$transitive_dependents(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.transitive_dependents[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.transitive_dependents["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents",graph);
}
}
}
});

/**
 * Returns the set of all nodes in graph.
 */
com.stuartsierra.dependency.nodes = (function com$stuartsierra$dependency$nodes(graph){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.nodes[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.nodes["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.nodes",graph);
}
}
}
});


/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraphUpdate = function(){};

/**
 * Returns a new graph with a dependency from node to dep ("node depends
 *  on dep"). Forbids circular dependencies.
 */
com.stuartsierra.dependency.depend = (function com$stuartsierra$dependency$depend(graph,node,dep){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.depend[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node,dep);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.depend["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.depend",graph);
}
}
}
});

/**
 * Returns a new graph with the dependency from node to dep removed.
 */
com.stuartsierra.dependency.remove_edge = (function com$stuartsierra$dependency$remove_edge(graph,node,dep){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.remove_edge[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node,dep);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.remove_edge["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-edge",graph);
}
}
}
});

/**
 * Returns a new dependency graph with all references to node removed.
 */
com.stuartsierra.dependency.remove_all = (function com$stuartsierra$dependency$remove_all(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.remove_all[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.remove_all["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-all",graph);
}
}
}
});

/**
 * Removes the node from the dependency graph without removing it as a
 *  dependency of other nodes. That is, removes all outgoing edges from
 *  node.
 */
com.stuartsierra.dependency.remove_node = (function com$stuartsierra$dependency$remove_node(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
var x__20735__auto__ = (((graph == null))?null:graph);
var m__20736__auto__ = (com.stuartsierra.dependency.remove_node[goog.typeOf(x__20735__auto__)]);
if(!((m__20736__auto__ == null))){
return m__20736__auto__.call(null,graph,node);
} else {
var m__20736__auto____$1 = (com.stuartsierra.dependency.remove_node["_"]);
if(!((m__20736__auto____$1 == null))){
return m__20736__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-node",graph);
}
}
}
});

com.stuartsierra.dependency.remove_from_map = (function com$stuartsierra$dependency$remove_from_map(amap,x){
return cljs.core.reduce.call(null,(function (m,p__31220){
var vec__31221 = p__31220;
var k = cljs.core.nth.call(null,vec__31221,(0),null);
var vs = cljs.core.nth.call(null,vec__31221,(1),null);
return cljs.core.assoc.call(null,m,k,cljs.core.disj.call(null,vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get m x)
 */
com.stuartsierra.dependency.transitive = (function com$stuartsierra$dependency$transitive(m,x){
return cljs.core.reduce.call(null,(function (s,k){
return clojure.set.union.call(null,s,com.stuartsierra.dependency.transitive.call(null,m,k));
}),cljs.core.get.call(null,m,x),cljs.core.get.call(null,m,x));
});
com.stuartsierra.dependency.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.stuartsierra.dependency.DependencyGraph}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {com.stuartsierra.dependency.DependencyGraphUpdate}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.stuartsierra.dependency.MapDependencyGraph = (function (dependencies,dependents,__meta,__extmap,__hash){
this.dependencies = dependencies;
this.dependents = dependents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k31225,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__31227 = (((k31225 instanceof cljs.core.Keyword))?k31225.fqn:null);
switch (G__31227) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31225,else__20695__auto__);

}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#com.stuartsierra.dependency.MapDependencyGraph{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31224){
var self__ = this;
var G__31224__$1 = this;
return (new cljs.core.RecordIter((0),G__31224__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
var self__ = this;
var this__20687__auto____$1 = this;
var h__20459__auto__ = self__.__hash;
if(!((h__20459__auto__ == null))){
return h__20459__auto__;
} else {
var h__20459__auto____$1 = cljs.core.hash_imap.call(null,this__20687__auto____$1);
self__.__hash = h__20459__auto____$1;

return h__20459__auto____$1;
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
var self__ = this;
var this__20688__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20010__auto__ = other__20689__auto__;
if(cljs.core.truth_(and__20010__auto__)){
var and__20010__auto____$1 = (this__20688__auto____$1.constructor === other__20689__auto__.constructor);
if(and__20010__auto____$1){
return cljs.core.equiv_map.call(null,this__20688__auto____$1,other__20689__auto__);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependents","dependents",136812837),null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__31224){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__31228 = cljs.core.keyword_identical_QMARK_;
var expr__31229 = k__20700__auto__;
if(cljs.core.truth_(pred__31228.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__31229))){
return (new com.stuartsierra.dependency.MapDependencyGraph(G__31224,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31228.call(null,new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__31229))){
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,G__31224,self__.__meta,self__.__extmap,null));
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__31224),null));
}
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependencies,node);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependents,node);
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependencies)),cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependents)));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__31224){
var self__ = this;
var this__20691__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__31224,self__.__extmap,self__.__hash));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__20022__auto__ = cljs.core._EQ_.call(null,node,dep);
if(or__20022__auto__){
return or__20022__auto__;
} else {
return com.stuartsierra.dependency.depends_QMARK_.call(null,graph__$1,dep,node);
}
})())){
throw (new Error([cljs.core.str("Circular dependency between "),cljs.core.str(cljs.core.pr_str.call(null,node)),cljs.core.str(" and "),cljs.core.str(cljs.core.pr_str.call(null,dep))].join('')));
} else {
}

return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),com.stuartsierra.dependency.set_conj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),com.stuartsierra.dependency.set_conj,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(com.stuartsierra.dependency.remove_from_map.call(null,self__.dependencies,node),com.stuartsierra.dependency.remove_from_map.call(null,self__.dependents,node),null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.dissoc.call(null,self__.dependencies,node),self__.dependents,null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dependencies","dependencies",-1546371164,null),new cljs.core.Symbol(null,"dependents","dependents",1777344364,null)], null);
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$type = true;

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.__GT_MapDependencyGraph = (function com$stuartsierra$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new com.stuartsierra.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

com.stuartsierra.dependency.map__GT_MapDependencyGraph = (function com$stuartsierra$dependency$map__GT_MapDependencyGraph(G__31226){
return (new com.stuartsierra.dependency.MapDependencyGraph(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(G__31226),new cljs.core.Keyword(null,"dependents","dependents",136812837).cljs$core$IFn$_invoke$arity$1(G__31226),null,cljs.core.dissoc.call(null,G__31226,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)),null));
});

/**
 * Returns a new, empty, dependency graph. A graph contains nodes,
 *   which may be any type which supports Clojure's equality semantics.
 *   Edges are represented as pairs of nodes. An edge between two nodes X
 *   and Y indicates that X depends on Y or, conversely, that Y is a
 *   dependent of X. A dependency graph may not have cycles.
 */
com.stuartsierra.dependency.graph = (function com$stuartsierra$dependency$graph(){
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
});
/**
 * True if x is directly or transitively dependent on y.
 */
com.stuartsierra.dependency.depends_QMARK_ = (function com$stuartsierra$dependency$depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,com.stuartsierra.dependency.transitive_dependencies.call(null,graph,x),y);
});
/**
 * True if y is a direct or transitive dependent of x.
 */
com.stuartsierra.dependency.dependent_QMARK_ = (function com$stuartsierra$dependency$dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,com.stuartsierra.dependency.transitive_dependents.call(null,graph,x),y);
});
/**
 * Returns a topologically-sorted list of nodes in graph.
 */
com.stuartsierra.dependency.topo_sort = (function com$stuartsierra$dependency$topo_sort(graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set.call(null,cljs.core.filter.call(null,((function (sorted,g){
return (function (p1__31232_SHARP_){
return cljs.core.empty_QMARK_.call(null,com.stuartsierra.dependency.immediate_dependents.call(null,graph,p1__31232_SHARP_));
});})(sorted,g))
,com.stuartsierra.dependency.nodes.call(null,graph)));
while(true){
if(cljs.core.empty_QMARK_.call(null,todo)){
return sorted;
} else {
var vec__31239 = cljs.core.seq.call(null,todo);
var seq__31240 = cljs.core.seq.call(null,vec__31239);
var first__31241 = cljs.core.first.call(null,seq__31240);
var seq__31240__$1 = cljs.core.next.call(null,seq__31240);
var node = first__31241;
var more = seq__31240__$1;
var deps = com.stuartsierra.dependency.immediate_dependencies.call(null,g,node);
var vec__31242 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,deps__$1)){
var d = cljs.core.first.call(null,deps__$1);
var g_SINGLEQUOTE_ = com.stuartsierra.dependency.remove_edge.call(null,g__$1,node,d);
if(cljs.core.empty_QMARK_.call(null,com.stuartsierra.dependency.immediate_dependents.call(null,g_SINGLEQUOTE_,d))){
var G__31245 = cljs.core.rest.call(null,deps__$1);
var G__31246 = g_SINGLEQUOTE_;
var G__31247 = cljs.core.conj.call(null,add,d);
deps__$1 = G__31245;
g__$1 = G__31246;
add = G__31247;
continue;
} else {
var G__31248 = cljs.core.rest.call(null,deps__$1);
var G__31249 = g_SINGLEQUOTE_;
var G__31250 = add;
deps__$1 = G__31248;
g__$1 = G__31249;
add = G__31250;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.call(null,vec__31242,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__31242,(1),null);
var G__31251 = cljs.core.cons.call(null,node,sorted);
var G__31252 = com.stuartsierra.dependency.remove_node.call(null,g_SINGLEQUOTE_,node);
var G__31253 = clojure.set.union.call(null,cljs.core.set.call(null,more),cljs.core.set.call(null,add));
sorted = G__31251;
g = G__31252;
todo = G__31253;
continue;
}
break;
}
});
/**
 * Returns a comparator fn which produces a topological sort based on
 *   the dependencies in graph. Nodes not present in the graph will sort
 *   after nodes in the graph.
 */
com.stuartsierra.dependency.topo_comparator = (function com$stuartsierra$dependency$topo_comparator(graph){
var pos = cljs.core.zipmap.call(null,com.stuartsierra.dependency.topo_sort.call(null,graph),cljs.core.range.call(null));
return ((function (pos){
return (function (a,b){
return cljs.core.compare.call(null,cljs.core.get.call(null,pos,a,Number.MAX_VALUE),cljs.core.get.call(null,pos,b,Number.MAX_VALUE));
});
;})(pos))
});

//# sourceMappingURL=dependency.js.map