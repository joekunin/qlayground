// Compiled by ClojureScript 1.9.293 {}
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
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30677,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30679 = (((k30677 instanceof cljs.core.Keyword))?k30677.fqn:null);
switch (G__30679) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30677,else__20695__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30676){
var self__ = this;
var G__30676__$1 = this;
return (new cljs.core.RecordIter((0),G__30676__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30676){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30680 = cljs.core.keyword_identical_QMARK_;
var expr__30681 = k__20700__auto__;
if(cljs.core.truth_(pred__30680.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30681))){
return (new thi.ng.geom.types.Graph(G__30676,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30680.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__30681))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__30676,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30676),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30676){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__30676,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Graph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"edges","edges",945740132,null)], null);
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__30678){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30678),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__30678),null,cljs.core.dissoc.call(null,G__30678,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
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
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30685,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30687 = (((k30685 instanceof cljs.core.Keyword))?k30685.fqn:null);
switch (G__30687) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30685,else__20695__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30684){
var self__ = this;
var G__30684__$1 = this;
return (new cljs.core.RecordIter((0),G__30684__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30684){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30688 = cljs.core.keyword_identical_QMARK_;
var expr__30689 = k__20700__auto__;
if(cljs.core.truth_(pred__30688.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30689))){
return (new thi.ng.geom.types.Bezier2(G__30684,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30684),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30684){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__30684,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Bezier2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__30686){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30686),null,cljs.core.dissoc.call(null,G__30686,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30693,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30695 = (((k30693 instanceof cljs.core.Keyword))?k30693.fqn:null);
switch (G__30695) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30693,else__20695__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30692){
var self__ = this;
var G__30692__$1 = this;
return (new cljs.core.RecordIter((0),G__30692__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30692){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30696 = cljs.core.keyword_identical_QMARK_;
var expr__30697 = k__20700__auto__;
if(cljs.core.truth_(pred__30696.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30697))){
return (new thi.ng.geom.types.Circle2(G__30692,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30696.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__30697))){
return (new thi.ng.geom.types.Circle2(self__.p,G__30692,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30692),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30692){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__30692,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Circle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__30694){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30694),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__30694),null,cljs.core.dissoc.call(null,G__30694,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
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
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30701,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30703 = (((k30701 instanceof cljs.core.Keyword))?k30701.fqn:null);
switch (G__30703) {
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
return cljs.core.get.call(null,self__.__extmap,k30701,else__20695__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30700){
var self__ = this;
var G__30700__$1 = this;
return (new cljs.core.RecordIter((0),G__30700__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30700){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30704 = cljs.core.keyword_identical_QMARK_;
var expr__30705 = k__20700__auto__;
if(cljs.core.truth_(pred__30704.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30705))){
return (new thi.ng.geom.types.Ellipse2(G__30700,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30704.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__30705))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__30700,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30704.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__30705))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__30700,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30700),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30700){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__30700,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Ellipse2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null)], null);
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__30702){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30702),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__30702),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__30702),null,cljs.core.dissoc.call(null,G__30702,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
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
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30709,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30711 = (((k30709 instanceof cljs.core.Keyword))?k30709.fqn:null);
switch (G__30711) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30709,else__20695__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30708){
var self__ = this;
var G__30708__$1 = this;
return (new cljs.core.RecordIter((0),G__30708__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30708){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30712 = cljs.core.keyword_identical_QMARK_;
var expr__30713 = k__20700__auto__;
if(cljs.core.truth_(pred__30712.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30713))){
return (new thi.ng.geom.types.Line2(G__30708,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30708),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30708){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__30708,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Line2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__30710){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30710),null,cljs.core.dissoc.call(null,G__30710,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30717,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30719 = (((k30717 instanceof cljs.core.Keyword))?k30717.fqn:null);
switch (G__30719) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30717,else__20695__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30716){
var self__ = this;
var G__30716__$1 = this;
return (new cljs.core.RecordIter((0),G__30716__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30716){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30720 = cljs.core.keyword_identical_QMARK_;
var expr__30721 = k__20700__auto__;
if(cljs.core.truth_(pred__30720.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30721))){
return (new thi.ng.geom.types.LineStrip2(G__30716,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30716),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30716){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__30716,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.LineStrip2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__30718){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30718),null,cljs.core.dissoc.call(null,G__30718,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30725,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30727 = (((k30725 instanceof cljs.core.Keyword))?k30725.fqn:null);
switch (G__30727) {
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
return cljs.core.get.call(null,self__.__extmap,k30725,else__20695__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30724){
var self__ = this;
var G__30724__$1 = this;
return (new cljs.core.RecordIter((0),G__30724__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30724){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30728 = cljs.core.keyword_identical_QMARK_;
var expr__30729 = k__20700__auto__;
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30729))){
return (new thi.ng.geom.types.Mesh2(G__30724,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__30729))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__30724,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__30729))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__30724,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__30729))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__30724,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__30729))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__30724,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30729))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__30724,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__30729))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__30724,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30724),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30724){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__30724,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Mesh2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__30726){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30726),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__30726),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__30726),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__30726),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__30726),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30726),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__30726),null,cljs.core.dissoc.call(null,G__30726,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30733,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30735 = (((k30733 instanceof cljs.core.Keyword))?k30733.fqn:null);
switch (G__30735) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30733,else__20695__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30732){
var self__ = this;
var G__30732__$1 = this;
return (new cljs.core.RecordIter((0),G__30732__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segments","segments",1937535949)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30732){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30736 = cljs.core.keyword_identical_QMARK_;
var expr__30737 = k__20700__auto__;
if(cljs.core.truth_(pred__30736.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__30737))){
return (new thi.ng.geom.types.Path2(G__30732,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30732),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30732){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__30732,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Path2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"segments","segments",-716899820,null)], null);
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__30734){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__30734),null,cljs.core.dissoc.call(null,G__30734,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
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
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30741,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30743 = (((k30741 instanceof cljs.core.Keyword))?k30741.fqn:null);
switch (G__30743) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30741,else__20695__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30740){
var self__ = this;
var G__30740__$1 = this;
return (new cljs.core.RecordIter((0),G__30740__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30740){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30744 = cljs.core.keyword_identical_QMARK_;
var expr__30745 = k__20700__auto__;
if(cljs.core.truth_(pred__30744.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30745))){
return (new thi.ng.geom.types.Polygon2(G__30740,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30740),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30740){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__30740,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Polygon2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__30742){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30742),null,cljs.core.dissoc.call(null,G__30742,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30749,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30751 = (((k30749 instanceof cljs.core.Keyword))?k30749.fqn:null);
switch (G__30751) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30749,else__20695__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30748){
var self__ = this;
var G__30748__$1 = this;
return (new cljs.core.RecordIter((0),G__30748__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30748){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30752 = cljs.core.keyword_identical_QMARK_;
var expr__30753 = k__20700__auto__;
if(cljs.core.truth_(pred__30752.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30753))){
return (new thi.ng.geom.types.Rect2(G__30748,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30752.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__30753))){
return (new thi.ng.geom.types.Rect2(self__.p,G__30748,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30748),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30748){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__30748,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Rect2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__30750){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30750),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__30750),null,cljs.core.dissoc.call(null,G__30750,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
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
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30757,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30759 = (((k30757 instanceof cljs.core.Keyword))?k30757.fqn:null);
switch (G__30759) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30757,else__20695__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30756){
var self__ = this;
var G__30756__$1 = this;
return (new cljs.core.RecordIter((0),G__30756__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30756){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30760 = cljs.core.keyword_identical_QMARK_;
var expr__30761 = k__20700__auto__;
if(cljs.core.truth_(pred__30760.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30761))){
return (new thi.ng.geom.types.Triangle2(G__30756,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30756),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30756){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__30756,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Triangle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__30758){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30758),null,cljs.core.dissoc.call(null,G__30758,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30765,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30767 = (((k30765 instanceof cljs.core.Keyword))?k30765.fqn:null);
switch (G__30767) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30765,else__20695__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30764){
var self__ = this;
var G__30764__$1 = this;
return (new cljs.core.RecordIter((0),G__30764__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30764){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30768 = cljs.core.keyword_identical_QMARK_;
var expr__30769 = k__20700__auto__;
if(cljs.core.truth_(pred__30768.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30769))){
return (new thi.ng.geom.types.AABB(G__30764,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30768.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__30769))){
return (new thi.ng.geom.types.AABB(self__.p,G__30764,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30764),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30764){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__30764,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.AABB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null)], null)),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__30766){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30766),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__30766),null,cljs.core.dissoc.call(null,G__30766,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
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
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30773,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30775 = (((k30773 instanceof cljs.core.Keyword))?k30773.fqn:null);
switch (G__30775) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30773,else__20695__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30772){
var self__ = this;
var G__30772__$1 = this;
return (new cljs.core.RecordIter((0),G__30772__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30772){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30776 = cljs.core.keyword_identical_QMARK_;
var expr__30777 = k__20700__auto__;
if(cljs.core.truth_(pred__30776.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30777))){
return (new thi.ng.geom.types.Cuboid(G__30772,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30772),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30772){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__30772,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Cuboid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__30774){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30774),null,cljs.core.dissoc.call(null,G__30774,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30781,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30783 = (((k30781 instanceof cljs.core.Keyword))?k30781.fqn:null);
switch (G__30783) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30781,else__20695__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30780){
var self__ = this;
var G__30780__$1 = this;
return (new cljs.core.RecordIter((0),G__30780__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30780){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30784 = cljs.core.keyword_identical_QMARK_;
var expr__30785 = k__20700__auto__;
if(cljs.core.truth_(pred__30784.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30785))){
return (new thi.ng.geom.types.Bezier3(G__30780,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30780),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30780){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__30780,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Bezier3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__30782){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30782),null,cljs.core.dissoc.call(null,G__30782,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30789,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30791 = (((k30789 instanceof cljs.core.Keyword))?k30789.fqn:null);
switch (G__30791) {
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
return cljs.core.get.call(null,self__.__extmap,k30789,else__20695__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30788){
var self__ = this;
var G__30788__$1 = this;
return (new cljs.core.RecordIter((0),G__30788__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30788){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30792 = cljs.core.keyword_identical_QMARK_;
var expr__30793 = k__20700__auto__;
if(cljs.core.truth_(pred__30792.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30793))){
return (new thi.ng.geom.types.BasicMesh(G__30788,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30792.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30793))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__30788,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30792.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__30793))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__30788,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30788),null));
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30788){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__30788,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.BasicMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null)], null);
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__30790){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30790),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30790),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__30790),null,cljs.core.dissoc.call(null,G__30790,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),null));
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
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30797,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30799 = (((k30797 instanceof cljs.core.Keyword))?k30797.fqn:null);
switch (G__30799) {
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
return cljs.core.get.call(null,self__.__extmap,k30797,else__20695__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30796){
var self__ = this;
var G__30796__$1 = this;
return (new cljs.core.RecordIter((0),G__30796__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30796){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30800 = cljs.core.keyword_identical_QMARK_;
var expr__30801 = k__20700__auto__;
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30801))){
return (new thi.ng.geom.types.GMesh(G__30796,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__30801))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__30796,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__30801))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__30796,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__30801))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__30796,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__30801))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__30796,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30800.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30801))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__30796,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30796),null));
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30796){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__30796,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.GMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null)], null);
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__30798){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30798),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__30798),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__30798),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__30798),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__30798),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30798),null,cljs.core.dissoc.call(null,G__30798,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)),null));
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
thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30805,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30807 = (((k30805 instanceof cljs.core.Keyword))?k30805.fqn:null);
switch (G__30807) {
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
return cljs.core.get.call(null,self__.__extmap,k30805,else__20695__auto__);

}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.IndexedMesh{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30804){
var self__ = this;
var G__30804__$1 = this;
return (new cljs.core.RecordIter((0),G__30804__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30804){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30808 = cljs.core.keyword_identical_QMARK_;
var expr__30809 = k__20700__auto__;
if(cljs.core.truth_(pred__30808.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__30809))){
return (new thi.ng.geom.types.IndexedMesh(G__30804,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30808.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__30809))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,G__30804,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30808.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__30809))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,G__30804,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30804),null));
}
}
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30804){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,G__30804,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.IndexedMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.IndexedMesh.cljs$lang$type = true;

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.__GT_IndexedMesh = (function thi$ng$geom$types$__GT_IndexedMesh(vertices,faces,attribs){
return (new thi.ng.geom.types.IndexedMesh(vertices,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_IndexedMesh = (function thi$ng$geom$types$map__GT_IndexedMesh(G__30806){
return (new thi.ng.geom.types.IndexedMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__30806),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__30806),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__30806),null,cljs.core.dissoc.call(null,G__30806,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30813,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30815 = (((k30813 instanceof cljs.core.Keyword))?k30813.fqn:null);
switch (G__30815) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30813,else__20695__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30812){
var self__ = this;
var G__30812__$1 = this;
return (new cljs.core.RecordIter((0),G__30812__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30812){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30816 = cljs.core.keyword_identical_QMARK_;
var expr__30817 = k__20700__auto__;
if(cljs.core.truth_(pred__30816.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30817))){
return (new thi.ng.geom.types.Line3(G__30812,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30812),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30812){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__30812,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Line3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__30814){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30814),null,cljs.core.dissoc.call(null,G__30814,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30821,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30823 = (((k30821 instanceof cljs.core.Keyword))?k30821.fqn:null);
switch (G__30823) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30821,else__20695__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30820){
var self__ = this;
var G__30820__$1 = this;
return (new cljs.core.RecordIter((0),G__30820__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30820){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30824 = cljs.core.keyword_identical_QMARK_;
var expr__30825 = k__20700__auto__;
if(cljs.core.truth_(pred__30824.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30825))){
return (new thi.ng.geom.types.LineStrip3(G__30820,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30820),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30820){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__30820,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.LineStrip3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__30822){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30822),null,cljs.core.dissoc.call(null,G__30822,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30829,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30831 = (((k30829 instanceof cljs.core.Keyword))?k30829.fqn:null);
switch (G__30831) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30829,else__20695__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30828){
var self__ = this;
var G__30828__$1 = this;
return (new cljs.core.RecordIter((0),G__30828__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30828){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30832 = cljs.core.keyword_identical_QMARK_;
var expr__30833 = k__20700__auto__;
if(cljs.core.truth_(pred__30832.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__30833))){
return (new thi.ng.geom.types.Plane(G__30828,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30832.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30833))){
return (new thi.ng.geom.types.Plane(self__.n,G__30828,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30828),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30828){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__30828,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Plane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__30830){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__30830),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30830),null,cljs.core.dissoc.call(null,G__30830,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
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
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30837,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30839 = (((k30837 instanceof cljs.core.Keyword))?k30837.fqn:null);
switch (G__30839) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30837,else__20695__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30836){
var self__ = this;
var G__30836__$1 = this;
return (new cljs.core.RecordIter((0),G__30836__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30836){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30840 = cljs.core.keyword_identical_QMARK_;
var expr__30841 = k__20700__auto__;
if(cljs.core.truth_(pred__30840.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30841))){
return (new thi.ng.geom.types.Quad3(G__30836,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30836),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30836){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__30836,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Quad3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__30838){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30838),null,cljs.core.dissoc.call(null,G__30838,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30845,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30847 = (((k30845 instanceof cljs.core.Keyword))?k30845.fqn:null);
switch (G__30847) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30845,else__20695__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30844){
var self__ = this;
var G__30844__$1 = this;
return (new cljs.core.RecordIter((0),G__30844__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30844){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30848 = cljs.core.keyword_identical_QMARK_;
var expr__30849 = k__20700__auto__;
if(cljs.core.truth_(pred__30848.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__30849))){
return (new thi.ng.geom.types.Sphere(G__30844,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30848.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__30849))){
return (new thi.ng.geom.types.Sphere(self__.p,G__30844,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30844),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30844){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__30844,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Sphere.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__30846){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__30846),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__30846),null,cljs.core.dissoc.call(null,G__30846,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
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
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30853,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30855 = (((k30853 instanceof cljs.core.Keyword))?k30853.fqn:null);
switch (G__30855) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30853,else__20695__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30852){
var self__ = this;
var G__30852__$1 = this;
return (new cljs.core.RecordIter((0),G__30852__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30852){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30856 = cljs.core.keyword_identical_QMARK_;
var expr__30857 = k__20700__auto__;
if(cljs.core.truth_(pred__30856.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30857))){
return (new thi.ng.geom.types.Tetrahedron(G__30852,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30852),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30852){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__30852,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Tetrahedron.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__30854){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30854),null,cljs.core.dissoc.call(null,G__30854,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20692__auto__,k__20693__auto__){
var self__ = this;
var this__20692__auto____$1 = this;
return cljs.core._lookup.call(null,this__20692__auto____$1,k__20693__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20694__auto__,k30861,else__20695__auto__){
var self__ = this;
var this__20694__auto____$1 = this;
var G__30863 = (((k30861 instanceof cljs.core.Keyword))?k30861.fqn:null);
switch (G__30863) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30861,else__20695__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20706__auto__,writer__20707__auto__,opts__20708__auto__){
var self__ = this;
var this__20706__auto____$1 = this;
var pr_pair__20709__auto__ = ((function (this__20706__auto____$1){
return (function (keyval__20710__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,cljs.core.pr_writer,""," ","",opts__20708__auto__,keyval__20710__auto__);
});})(this__20706__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20707__auto__,pr_pair__20709__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__20708__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30860){
var self__ = this;
var G__30860__$1 = this;
return (new cljs.core.RecordIter((0),G__30860__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20690__auto__){
var self__ = this;
var this__20690__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20686__auto__){
var self__ = this;
var this__20686__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20696__auto__){
var self__ = this;
var this__20696__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20687__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20688__auto__,other__20689__auto__){
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20701__auto__,k__20702__auto__){
var self__ = this;
var this__20701__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__20702__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20701__auto____$1),self__.__meta),k__20702__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20702__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20699__auto__,k__20700__auto__,G__30860){
var self__ = this;
var this__20699__auto____$1 = this;
var pred__30864 = cljs.core.keyword_identical_QMARK_;
var expr__30865 = k__20700__auto__;
if(cljs.core.truth_(pred__30864.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__30865))){
return (new thi.ng.geom.types.Triangle3(G__30860,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20700__auto__,G__30860),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20704__auto__){
var self__ = this;
var this__20704__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20691__auto__,G__30860){
var self__ = this;
var this__20691__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__30860,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20697__auto__,entry__20698__auto__){
var self__ = this;
var this__20697__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20698__auto__)){
return cljs.core._assoc.call(null,this__20697__auto____$1,cljs.core._nth.call(null,entry__20698__auto__,(0)),cljs.core._nth.call(null,entry__20698__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20697__auto____$1,entry__20698__auto__);
}
});

thi.ng.geom.types.Triangle3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__20728__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__20728__auto__,writer__20729__auto__){
return cljs.core._write.call(null,writer__20729__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__30862){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__30862),null,cljs.core.dissoc.call(null,G__30862,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map