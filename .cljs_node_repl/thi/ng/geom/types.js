// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.vector');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap,__hash){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30462,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30464 = (((k30462 instanceof cljs.core.Keyword))?k30462.fqn:null);
switch (G__30464) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30462,else__20480__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30461){
var self__ = this;
var G__30461__$1 = this;
return (new cljs.core.RecordIter((0),G__30461__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30461){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30465 = cljs.core.keyword_identical_QMARK_;
var expr__30466 = k__20485__auto__;
if(cljs.core.truth_(pred__30465.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30466))){
return (new thi.ng.geom.types.Graph(G__30461,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30465.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__30466))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__30461,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30461),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30461){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__30461,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Graph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"edges","edges",945740132,null)], null);
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__30463){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30463),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__30463),null,cljs.core.dissoc.call(null,G__30463,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30470,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30472 = (((k30470 instanceof cljs.core.Keyword))?k30470.fqn:null);
switch (G__30472) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30470,else__20480__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30469){
var self__ = this;
var G__30469__$1 = this;
return (new cljs.core.RecordIter((0),G__30469__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30469){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30473 = cljs.core.keyword_identical_QMARK_;
var expr__30474 = k__20485__auto__;
if(cljs.core.truth_(pred__30473.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30474))){
return (new thi.ng.geom.types.Bezier2(G__30469,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30469),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30469){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__30469,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Bezier2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__30471){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30471),null,cljs.core.dissoc.call(null,G__30471,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30478,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30480 = (((k30478 instanceof cljs.core.Keyword))?k30478.fqn:null);
switch (G__30480) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30478,else__20480__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30477){
var self__ = this;
var G__30477__$1 = this;
return (new cljs.core.RecordIter((0),G__30477__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30477){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30481 = cljs.core.keyword_identical_QMARK_;
var expr__30482 = k__20485__auto__;
if(cljs.core.truth_(pred__30481.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30482))){
return (new thi.ng.geom.types.Circle2(G__30477,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30481.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__30482))){
return (new thi.ng.geom.types.Circle2(self__.p,G__30477,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30477),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30477){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__30477,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Circle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__30479){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30479),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__30479),null,cljs.core.dissoc.call(null,G__30479,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap,__hash){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30486,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30488 = (((k30486 instanceof cljs.core.Keyword))?k30486.fqn:null);
switch (G__30488) {
case "p":
return self__.p;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30486,else__20480__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30485){
var self__ = this;
var G__30485__$1 = this;
return (new cljs.core.RecordIter((0),G__30485__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30485){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30489 = cljs.core.keyword_identical_QMARK_;
var expr__30490 = k__20485__auto__;
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30490))){
return (new thi.ng.geom.types.Ellipse2(G__30485,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__30490))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__30485,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30489.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__30490))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__30485,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30485),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30485){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__30485,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Ellipse2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null)], null);
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__30487){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__30487),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__30487),null,cljs.core.dissoc.call(null,G__30487,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30494,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30496 = (((k30494 instanceof cljs.core.Keyword))?k30494.fqn:null);
switch (G__30496) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30494,else__20480__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30493){
var self__ = this;
var G__30493__$1 = this;
return (new cljs.core.RecordIter((0),G__30493__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30493){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30497 = cljs.core.keyword_identical_QMARK_;
var expr__30498 = k__20485__auto__;
if(cljs.core.truth_(pred__30497.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30498))){
return (new thi.ng.geom.types.Line2(G__30493,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30493),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30493){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__30493,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Line2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__30495){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30495),null,cljs.core.dissoc.call(null,G__30495,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30502,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30504 = (((k30502 instanceof cljs.core.Keyword))?k30502.fqn:null);
switch (G__30504) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30502,else__20480__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30501){
var self__ = this;
var G__30501__$1 = this;
return (new cljs.core.RecordIter((0),G__30501__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30501){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30505 = cljs.core.keyword_identical_QMARK_;
var expr__30506 = k__20485__auto__;
if(cljs.core.truth_(pred__30505.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30506))){
return (new thi.ng.geom.types.LineStrip2(G__30501,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30501),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30501){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__30501,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.LineStrip2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__30503){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30503),null,cljs.core.dissoc.call(null,G__30503,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30510,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30512 = (((k30510 instanceof cljs.core.Keyword))?k30510.fqn:null);
switch (G__30512) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30510,else__20480__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30509){
var self__ = this;
var G__30509__$1 = this;
return (new cljs.core.RecordIter((0),G__30509__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30509){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30513 = cljs.core.keyword_identical_QMARK_;
var expr__30514 = k__20485__auto__;
if(cljs.core.truth_(pred__30513.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30514))){
return (new thi.ng.geom.types.Mesh2(G__30509,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30513.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__30514))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__30509,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30513.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__30514))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__30509,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30513.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__30514))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__30509,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30513.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__30514))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__30509,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30513.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30514))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__30509,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30513.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__30514))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__30509,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30509),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30509){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__30509,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Mesh2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__30511){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30511),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__30511),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__30511),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__30511),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__30511),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30511),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__30511),null,cljs.core.dissoc.call(null,G__30511,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap,__hash){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30518,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30520 = (((k30518 instanceof cljs.core.Keyword))?k30518.fqn:null);
switch (G__30520) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30518,else__20480__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30517){
var self__ = this;
var G__30517__$1 = this;
return (new cljs.core.RecordIter((0),G__30517__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segments","segments",1937535949)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30517){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30521 = cljs.core.keyword_identical_QMARK_;
var expr__30522 = k__20485__auto__;
if(cljs.core.truth_(pred__30521.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__30522))){
return (new thi.ng.geom.types.Path2(G__30517,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30517),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30517){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__30517,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Path2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"segments","segments",-716899820,null)], null);
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__30519){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__30519),null,cljs.core.dissoc.call(null,G__30519,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30526,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30528 = (((k30526 instanceof cljs.core.Keyword))?k30526.fqn:null);
switch (G__30528) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30526,else__20480__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30525){
var self__ = this;
var G__30525__$1 = this;
return (new cljs.core.RecordIter((0),G__30525__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30525){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30529 = cljs.core.keyword_identical_QMARK_;
var expr__30530 = k__20485__auto__;
if(cljs.core.truth_(pred__30529.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30530))){
return (new thi.ng.geom.types.Polygon2(G__30525,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30525),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30525){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__30525,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Polygon2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__30527){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30527),null,cljs.core.dissoc.call(null,G__30527,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30534,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30536 = (((k30534 instanceof cljs.core.Keyword))?k30534.fqn:null);
switch (G__30536) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30534,else__20480__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30533){
var self__ = this;
var G__30533__$1 = this;
return (new cljs.core.RecordIter((0),G__30533__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30533){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30537 = cljs.core.keyword_identical_QMARK_;
var expr__30538 = k__20485__auto__;
if(cljs.core.truth_(pred__30537.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30538))){
return (new thi.ng.geom.types.Rect2(G__30533,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30537.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__30538))){
return (new thi.ng.geom.types.Rect2(self__.p,G__30533,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30533),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30533){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__30533,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Rect2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__30535){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30535),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__30535),null,cljs.core.dissoc.call(null,G__30535,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30542,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30544 = (((k30542 instanceof cljs.core.Keyword))?k30542.fqn:null);
switch (G__30544) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30542,else__20480__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30541){
var self__ = this;
var G__30541__$1 = this;
return (new cljs.core.RecordIter((0),G__30541__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30541){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30545 = cljs.core.keyword_identical_QMARK_;
var expr__30546 = k__20485__auto__;
if(cljs.core.truth_(pred__30545.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30546))){
return (new thi.ng.geom.types.Triangle2(G__30541,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30541),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30541){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__30541,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Triangle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__30543){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30543),null,cljs.core.dissoc.call(null,G__30543,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30550,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30552 = (((k30550 instanceof cljs.core.Keyword))?k30550.fqn:null);
switch (G__30552) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30550,else__20480__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30549){
var self__ = this;
var G__30549__$1 = this;
return (new cljs.core.RecordIter((0),G__30549__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30549){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30553 = cljs.core.keyword_identical_QMARK_;
var expr__30554 = k__20485__auto__;
if(cljs.core.truth_(pred__30553.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30554))){
return (new thi.ng.geom.types.AABB(G__30549,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30553.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__30554))){
return (new thi.ng.geom.types.AABB(self__.p,G__30549,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30549),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30549){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__30549,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.AABB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null)], null)),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__30551){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30551),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__30551),null,cljs.core.dissoc.call(null,G__30551,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30558,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30560 = (((k30558 instanceof cljs.core.Keyword))?k30558.fqn:null);
switch (G__30560) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30558,else__20480__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30557){
var self__ = this;
var G__30557__$1 = this;
return (new cljs.core.RecordIter((0),G__30557__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30557){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30561 = cljs.core.keyword_identical_QMARK_;
var expr__30562 = k__20485__auto__;
if(cljs.core.truth_(pred__30561.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30562))){
return (new thi.ng.geom.types.Cuboid(G__30557,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30557),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30557){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__30557,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Cuboid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__30559){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30559),null,cljs.core.dissoc.call(null,G__30559,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30566,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30568 = (((k30566 instanceof cljs.core.Keyword))?k30566.fqn:null);
switch (G__30568) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30566,else__20480__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30565){
var self__ = this;
var G__30565__$1 = this;
return (new cljs.core.RecordIter((0),G__30565__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30565){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30569 = cljs.core.keyword_identical_QMARK_;
var expr__30570 = k__20485__auto__;
if(cljs.core.truth_(pred__30569.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30570))){
return (new thi.ng.geom.types.Bezier3(G__30565,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30565),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30565){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__30565,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Bezier3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__30567){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30567),null,cljs.core.dissoc.call(null,G__30567,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.BasicMesh = (function (vertices,faces,fnormals,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.fnormals = fnormals;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30574,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30576 = (((k30574 instanceof cljs.core.Keyword))?k30574.fqn:null);
switch (G__30576) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "fnormals":
return self__.fnormals;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30574,else__20480__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30573){
var self__ = this;
var G__30573__$1 = this;
return (new cljs.core.RecordIter((0),G__30573__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30573){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30577 = cljs.core.keyword_identical_QMARK_;
var expr__30578 = k__20485__auto__;
if(cljs.core.truth_(pred__30577.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30578))){
return (new thi.ng.geom.types.BasicMesh(G__30573,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30577.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30578))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__30573,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30577.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__30578))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__30573,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30573),null));
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30573){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__30573,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.BasicMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null)], null);
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__30575){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30575),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30575),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__30575),null,cljs.core.dissoc.call(null,G__30575,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30582,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30584 = (((k30582 instanceof cljs.core.Keyword))?k30582.fqn:null);
switch (G__30584) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30582,else__20480__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30581){
var self__ = this;
var G__30581__$1 = this;
return (new cljs.core.RecordIter((0),G__30581__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30581){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30585 = cljs.core.keyword_identical_QMARK_;
var expr__30586 = k__20485__auto__;
if(cljs.core.truth_(pred__30585.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30586))){
return (new thi.ng.geom.types.GMesh(G__30581,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30585.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__30586))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__30581,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30585.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__30586))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__30581,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30585.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__30586))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__30581,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30585.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__30586))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__30581,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30585.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30586))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__30581,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30581),null));
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30581){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__30581,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.GMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null)], null);
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__30583){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30583),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__30583),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__30583),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__30583),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__30583),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30583),null,cljs.core.dissoc.call(null,G__30583,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.IndexedMesh = (function (vertices,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30590,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30592 = (((k30590 instanceof cljs.core.Keyword))?k30590.fqn:null);
switch (G__30592) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30590,else__20480__auto__);

}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.IndexedMesh{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30589){
var self__ = this;
var G__30589__$1 = this;
return (new cljs.core.RecordIter((0),G__30589__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30589){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30593 = cljs.core.keyword_identical_QMARK_;
var expr__30594 = k__20485__auto__;
if(cljs.core.truth_(pred__30593.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30594))){
return (new thi.ng.geom.types.IndexedMesh(G__30589,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30593.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30594))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,G__30589,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30593.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__30594))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,G__30589,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30589),null));
}
}
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30589){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,G__30589,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.IndexedMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.IndexedMesh.cljs$lang$type = true;

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.__GT_IndexedMesh = (function thi$ng$geom$types$__GT_IndexedMesh(vertices,faces,attribs){
return (new thi.ng.geom.types.IndexedMesh(vertices,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_IndexedMesh = (function thi$ng$geom$types$map__GT_IndexedMesh(G__30591){
return (new thi.ng.geom.types.IndexedMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30591),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30591),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__30591),null,cljs.core.dissoc.call(null,G__30591,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30598,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30600 = (((k30598 instanceof cljs.core.Keyword))?k30598.fqn:null);
switch (G__30600) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30598,else__20480__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30597){
var self__ = this;
var G__30597__$1 = this;
return (new cljs.core.RecordIter((0),G__30597__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30597){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30601 = cljs.core.keyword_identical_QMARK_;
var expr__30602 = k__20485__auto__;
if(cljs.core.truth_(pred__30601.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30602))){
return (new thi.ng.geom.types.Line3(G__30597,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30597),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30597){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__30597,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Line3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__30599){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30599),null,cljs.core.dissoc.call(null,G__30599,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30606,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30608 = (((k30606 instanceof cljs.core.Keyword))?k30606.fqn:null);
switch (G__30608) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30606,else__20480__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30605){
var self__ = this;
var G__30605__$1 = this;
return (new cljs.core.RecordIter((0),G__30605__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30605){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30609 = cljs.core.keyword_identical_QMARK_;
var expr__30610 = k__20485__auto__;
if(cljs.core.truth_(pred__30609.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30610))){
return (new thi.ng.geom.types.LineStrip3(G__30605,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30605),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30605){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__30605,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.LineStrip3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__30607){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30607),null,cljs.core.dissoc.call(null,G__30607,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap,__hash){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30614,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30616 = (((k30614 instanceof cljs.core.Keyword))?k30614.fqn:null);
switch (G__30616) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30614,else__20480__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30613){
var self__ = this;
var G__30613__$1 = this;
return (new cljs.core.RecordIter((0),G__30613__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30613){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30617 = cljs.core.keyword_identical_QMARK_;
var expr__30618 = k__20485__auto__;
if(cljs.core.truth_(pred__30617.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__30618))){
return (new thi.ng.geom.types.Plane(G__30613,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30617.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30618))){
return (new thi.ng.geom.types.Plane(self__.n,G__30613,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30613),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30613){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__30613,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Plane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__30615){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__30615),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30615),null,cljs.core.dissoc.call(null,G__30615,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30622,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30624 = (((k30622 instanceof cljs.core.Keyword))?k30622.fqn:null);
switch (G__30624) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30622,else__20480__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30621){
var self__ = this;
var G__30621__$1 = this;
return (new cljs.core.RecordIter((0),G__30621__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30621){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30625 = cljs.core.keyword_identical_QMARK_;
var expr__30626 = k__20485__auto__;
if(cljs.core.truth_(pred__30625.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30626))){
return (new thi.ng.geom.types.Quad3(G__30621,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30621),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30621){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__30621,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Quad3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__30623){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30623),null,cljs.core.dissoc.call(null,G__30623,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30630,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30632 = (((k30630 instanceof cljs.core.Keyword))?k30630.fqn:null);
switch (G__30632) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30630,else__20480__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30629){
var self__ = this;
var G__30629__$1 = this;
return (new cljs.core.RecordIter((0),G__30629__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30629){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30633 = cljs.core.keyword_identical_QMARK_;
var expr__30634 = k__20485__auto__;
if(cljs.core.truth_(pred__30633.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30634))){
return (new thi.ng.geom.types.Sphere(G__30629,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30633.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__30634))){
return (new thi.ng.geom.types.Sphere(self__.p,G__30629,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30629),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30629){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__30629,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Sphere.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__30631){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30631),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__30631),null,cljs.core.dissoc.call(null,G__30631,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30638,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30640 = (((k30638 instanceof cljs.core.Keyword))?k30638.fqn:null);
switch (G__30640) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30638,else__20480__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30637){
var self__ = this;
var G__30637__$1 = this;
return (new cljs.core.RecordIter((0),G__30637__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30637){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30641 = cljs.core.keyword_identical_QMARK_;
var expr__30642 = k__20485__auto__;
if(cljs.core.truth_(pred__30641.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30642))){
return (new thi.ng.geom.types.Tetrahedron(G__30637,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30637),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30637){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__30637,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Tetrahedron.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__30639){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30639),null,cljs.core.dissoc.call(null,G__30639,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20477__auto__,k__20478__auto__){
var self__ = this;
var this__20477__auto____$1 = this;
return cljs.core._lookup.call(null,this__20477__auto____$1,k__20478__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20479__auto__,k30646,else__20480__auto__){
var self__ = this;
var this__20479__auto____$1 = this;
var G__30648 = (((k30646 instanceof cljs.core.Keyword))?k30646.fqn:null);
switch (G__30648) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30646,else__20480__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20491__auto__,writer__20492__auto__,opts__20493__auto__){
var self__ = this;
var this__20491__auto____$1 = this;
var pr_pair__20494__auto__ = ((function (this__20491__auto____$1){
return (function (keyval__20495__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,cljs.core.pr_writer,""," ","",opts__20493__auto__,keyval__20495__auto__);
});})(this__20491__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20492__auto__,pr_pair__20494__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__20493__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30645){
var self__ = this;
var G__30645__$1 = this;
return (new cljs.core.RecordIter((0),G__30645__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20475__auto__){
var self__ = this;
var this__20475__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20471__auto__){
var self__ = this;
var this__20471__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20481__auto__){
var self__ = this;
var this__20481__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20472__auto__){
var self__ = this;
var this__20472__auto____$1 = this;
var h__20244__auto__ = self__.__hash;
if(!((h__20244__auto__ == null))){
return h__20244__auto__;
} else {
var h__20244__auto____$1 = cljs.core.hash_imap.call(null,this__20472__auto____$1);
self__.__hash = h__20244__auto____$1;

return h__20244__auto____$1;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20473__auto__,other__20474__auto__){
var self__ = this;
var this__20473__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19795__auto__ = other__20474__auto__;
if(cljs.core.truth_(and__19795__auto__)){
var and__19795__auto____$1 = (this__20473__auto____$1.constructor === other__20474__auto__.constructor);
if(and__19795__auto____$1){
return cljs.core.equiv_map.call(null,this__20473__auto____$1,other__20474__auto__);
} else {
return and__19795__auto____$1;
}
} else {
return and__19795__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20486__auto__,k__20487__auto__){
var self__ = this;
var this__20486__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20487__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20486__auto____$1),self__.__meta),k__20487__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20487__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20484__auto__,k__20485__auto__,G__30645){
var self__ = this;
var this__20484__auto____$1 = this;
var pred__30649 = cljs.core.keyword_identical_QMARK_;
var expr__30650 = k__20485__auto__;
if(cljs.core.truth_(pred__30649.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30650))){
return (new thi.ng.geom.types.Triangle3(G__30645,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20485__auto__,G__30645),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20489__auto__){
var self__ = this;
var this__20489__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20476__auto__,G__30645){
var self__ = this;
var this__20476__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__30645,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20482__auto__,entry__20483__auto__){
var self__ = this;
var this__20482__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20483__auto__)){
return cljs.core._assoc.call(null,this__20482__auto____$1,cljs.core._nth.call(null,entry__20483__auto__,(0)),cljs.core._nth.call(null,entry__20483__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20482__auto____$1,entry__20483__auto__);
}
});

thi.ng.geom.types.Triangle3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__20513__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__20513__auto__,writer__20514__auto__){
return cljs.core._write.call(null,writer__20514__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__30647){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30647),null,cljs.core.dissoc.call(null,G__30647,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map