// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.cyclic_automaton');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
qlayground_cljs.cyclic_automaton.rule_1 = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0)], true, false);
qlayground_cljs.cyclic_automaton.rule_90 = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0)], true, false);
qlayground_cljs.cyclic_automaton.rule_30 = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(0)], true, false);
qlayground_cljs.cyclic_automaton.representations = new cljs.core.PersistentArrayMap(null, 2, [(0)," ",(1),"x"], null);
qlayground_cljs.cyclic_automaton.extract_neighborhoods = (function qlayground_cljs$cyclic_automaton$extract_neighborhoods(state){
return cljs.core.partition.call(null,(3),(1),cljs.core.repeat.call(null,(0)),cljs.core.cons.call(null,(0),state));
});
qlayground_cljs.cyclic_automaton.evolve_once = (function qlayground_cljs$cyclic_automaton$evolve_once(rule,state){
return cljs.core.mapv.call(null,rule,qlayground_cljs.cyclic_automaton.extract_neighborhoods.call(null,state));
});
qlayground_cljs.cyclic_automaton.evolve = (function qlayground_cljs$cyclic_automaton$evolve(rule,initial_state,time_steps){
return cljs.core.take.call(null,(time_steps + (1)),cljs.core.iterate.call(null,cljs.core.partial.call(null,qlayground_cljs.cyclic_automaton.evolve_once,rule),initial_state));
});
qlayground_cljs.cyclic_automaton.convert_state = (function qlayground_cljs$cyclic_automaton$convert_state(state){
return cljs.core.map.call(null,(function (atom){
if(cljs.core._EQ_.call(null,atom,(0))){
return " ";
} else {
if(cljs.core._EQ_.call(null,atom,(1))){
return "x";
} else {
return atom;

}
}
}),state);
});
qlayground_cljs.cyclic_automaton.render = (function qlayground_cljs$cyclic_automaton$render(states){
return cljs.core.print.call(null,cljs.core.print_str.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,qlayground_cljs.cyclic_automaton.convert_state,cljs.core.interpose.call(null,"\n",states)))));
});
qlayground_cljs.cyclic_automaton.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(0),(0),(1),(0)], null)], null));

//# sourceMappingURL=cyclic_automaton.js.map