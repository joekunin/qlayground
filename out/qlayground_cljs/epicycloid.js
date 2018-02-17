// Compiled by ClojureScript 1.9.293 {}
goog.provide('qlayground_cljs.epicycloid');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('qlayground_cljs.helpers');
qlayground_cljs.epicycloid.generate_coordinates = (function qlayground_cljs$epicycloid$generate_coordinates(number_of_points,radius){
var angle = (quil.core.TWO_PI / number_of_points);
var iter__8076__auto__ = ((function (angle){
return (function qlayground_cljs$epicycloid$generate_coordinates_$_iter__41063(s__41064){
return (new cljs.core.LazySeq(null,((function (angle){
return (function (){
var s__41064__$1 = s__41064;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41064__$1);
if(temp__5457__auto__){
var s__41064__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41064__$2)){
var c__8074__auto__ = cljs.core.chunk_first.call(null,s__41064__$2);
var size__8075__auto__ = cljs.core.count.call(null,c__8074__auto__);
var b__41066 = cljs.core.chunk_buffer.call(null,size__8075__auto__);
if((function (){var i__41065 = (0);
while(true){
if((i__41065 < size__8075__auto__)){
var i = cljs.core._nth.call(null,c__8074__auto__,i__41065);
cljs.core.chunk_append.call(null,b__41066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * quil.core.sin.call(null,(angle * i))),(radius * quil.core.cos.call(null,(angle * i)))], null));

var G__41067 = (i__41065 + (1));
i__41065 = G__41067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41066),qlayground_cljs$epicycloid$generate_coordinates_$_iter__41063.call(null,cljs.core.chunk_rest.call(null,s__41064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41066),null);
}
} else {
var i = cljs.core.first.call(null,s__41064__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * quil.core.sin.call(null,(angle * i))),(radius * quil.core.cos.call(null,(angle * i)))], null),qlayground_cljs$epicycloid$generate_coordinates_$_iter__41063.call(null,cljs.core.rest.call(null,s__41064__$2)));
}
} else {
return null;
}
break;
}
});})(angle))
,null,null));
});})(angle))
;
return iter__8076__auto__.call(null,cljs.core.range.call(null,number_of_points));
});
qlayground_cljs.epicycloid.generate_template = (function qlayground_cljs$epicycloid$generate_template(number_of_points,factor){
return cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.range.call(null,number_of_points),cljs.core.map.call(null,(function (p1__41068_SHARP_){
return cljs.core.mod.call(null,(factor * p1__41068_SHARP_),number_of_points);
}),cljs.core.range.call(null,number_of_points))));
});
qlayground_cljs.epicycloid.calculate_lines = (function qlayground_cljs$epicycloid$calculate_lines(coordinates,template_points){
var iter__8076__auto__ = (function qlayground_cljs$epicycloid$calculate_lines_$_iter__41074(s__41075){
return (new cljs.core.LazySeq(null,(function (){
var s__41075__$1 = s__41075;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41075__$1);
if(temp__5457__auto__){
var s__41075__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41075__$2)){
var c__8074__auto__ = cljs.core.chunk_first.call(null,s__41075__$2);
var size__8075__auto__ = cljs.core.count.call(null,c__8074__auto__);
var b__41077 = cljs.core.chunk_buffer.call(null,size__8075__auto__);
if((function (){var i__41076 = (0);
while(true){
if((i__41076 < size__8075__auto__)){
var point = cljs.core._nth.call(null,c__8074__auto__,i__41076);
cljs.core.chunk_append.call(null,b__41077,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (i__41076,point,c__8074__auto__,size__8075__auto__,b__41077,s__41075__$2,temp__5457__auto__){
return (function (p1__41069_SHARP_){
return cljs.core.nth.call(null,coordinates,p1__41069_SHARP_,(0));
});})(i__41076,point,c__8074__auto__,size__8075__auto__,b__41077,s__41075__$2,temp__5457__auto__))
,point)));

var G__41078 = (i__41076 + (1));
i__41076 = G__41078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41077),qlayground_cljs$epicycloid$calculate_lines_$_iter__41074.call(null,cljs.core.chunk_rest.call(null,s__41075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41077),null);
}
} else {
var point = cljs.core.first.call(null,s__41075__$2);
return cljs.core.cons.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (point,s__41075__$2,temp__5457__auto__){
return (function (p1__41069_SHARP_){
return cljs.core.nth.call(null,coordinates,p1__41069_SHARP_,(0));
});})(point,s__41075__$2,temp__5457__auto__))
,point)),qlayground_cljs$epicycloid$calculate_lines_$_iter__41074.call(null,cljs.core.rest.call(null,s__41075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8076__auto__.call(null,template_points);
});
qlayground_cljs.epicycloid.draw_figure = (function qlayground_cljs$epicycloid$draw_figure(state,f1,f2,f3,f4){
var lines = cljs.core.map.call(null,cljs.core.int$,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state));
var seq__41089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state));
var chunk__41090 = null;
var count__41091 = (0);
var i__41092 = (0);
while(true){
if((i__41092 < count__41091)){
var vec__41093 = cljs.core._nth.call(null,chunk__41090,i__41092);
var x1 = cljs.core.nth.call(null,vec__41093,(0),null);
var y1 = cljs.core.nth.call(null,vec__41093,(1),null);
var x2 = cljs.core.nth.call(null,vec__41093,(2),null);
var y2 = cljs.core.nth.call(null,vec__41093,(3),null);
quil.core.line.call(null,(f1 * x1),(f2 * y1),(f3 * x2),(f4 * y2));

var G__41099 = seq__41089;
var G__41100 = chunk__41090;
var G__41101 = count__41091;
var G__41102 = (i__41092 + (1));
seq__41089 = G__41099;
chunk__41090 = G__41100;
count__41091 = G__41101;
i__41092 = G__41102;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41089);
if(temp__5457__auto__){
var seq__41089__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41089__$1)){
var c__8125__auto__ = cljs.core.chunk_first.call(null,seq__41089__$1);
var G__41103 = cljs.core.chunk_rest.call(null,seq__41089__$1);
var G__41104 = c__8125__auto__;
var G__41105 = cljs.core.count.call(null,c__8125__auto__);
var G__41106 = (0);
seq__41089 = G__41103;
chunk__41090 = G__41104;
count__41091 = G__41105;
i__41092 = G__41106;
continue;
} else {
var vec__41096 = cljs.core.first.call(null,seq__41089__$1);
var x1 = cljs.core.nth.call(null,vec__41096,(0),null);
var y1 = cljs.core.nth.call(null,vec__41096,(1),null);
var x2 = cljs.core.nth.call(null,vec__41096,(2),null);
var y2 = cljs.core.nth.call(null,vec__41096,(3),null);
quil.core.line.call(null,(f1 * x1),(f2 * y1),(f3 * x2),(f4 * y2));

var G__41107 = cljs.core.next.call(null,seq__41089__$1);
var G__41108 = null;
var G__41109 = (0);
var G__41110 = (0);
seq__41089 = G__41107;
chunk__41090 = G__41108;
count__41091 = G__41109;
i__41092 = G__41110;
continue;
}
} else {
return null;
}
}
break;
}
});
qlayground_cljs.epicycloid.initial_state = (function (){var radius = (100);
var number_of_points = (1);
var factor = (2);
var coordinates = qlayground_cljs.epicycloid.generate_coordinates.call(null,number_of_points,radius);
var template_points = qlayground_cljs.epicycloid.generate_template.call(null,number_of_points,factor);
var lines = qlayground_cljs.epicycloid.calculate_lines.call(null,coordinates,template_points);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"index","index",-1531685915),(1),new cljs.core.Keyword(null,"number-of-points","number-of-points",764137809),number_of_points,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"factor","factor",-2103172748),factor,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),coordinates,new cljs.core.Keyword(null,"template-points","template-points",795949254),template_points,new cljs.core.Keyword(null,"lines","lines",-700165781),lines,new cljs.core.Keyword(null,"color","color",1011675173),(1)], null);
})();
qlayground_cljs.epicycloid.setup = (function qlayground_cljs$epicycloid$setup(){
quil.core.frame_rate.call(null,(15));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

return qlayground_cljs.epicycloid.initial_state;
});
qlayground_cljs.epicycloid.update_state_epicycloid = (function qlayground_cljs$epicycloid$update_state_epicycloid(state){
var index = (new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state) + (1));
var radius = (150);
var cycle_sequence = qlayground_cljs.helpers.cycle_between.call(null,(2),(60),(4));
var factor = ((1) * cljs.core.nth.call(null,cycle_sequence,index));
var number_of_points = (300);
var coordinates = qlayground_cljs.epicycloid.generate_coordinates.call(null,number_of_points,radius);
var template_points = qlayground_cljs.epicycloid.generate_template.call(null,number_of_points,factor);
var lines = qlayground_cljs.epicycloid.calculate_lines.call(null,coordinates,template_points);
var color = cljs.core.nth.call(null,cycle_sequence,index);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"factor","factor",-2103172748),factor,new cljs.core.Keyword(null,"number-of-points","number-of-points",764137809),number_of_points,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),coordinates,new cljs.core.Keyword(null,"template-points","template-points",795949254),template_points,new cljs.core.Keyword(null,"lines","lines",-700165781),lines,new cljs.core.Keyword(null,"color","color",1011675173),color], null);
});
qlayground_cljs.epicycloid.update_state_rising_sun = (function qlayground_cljs$epicycloid$update_state_rising_sun(state){
var index = (new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state) + (1));
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(state);
var cycle_sequence = qlayground_cljs.helpers.cycle_between.call(null,(1),(100));
var factor = cljs.core.nth.call(null,cycle_sequence,index);
var number_of_points = ((80) * ((1) * cljs.core.nth.call(null,cycle_sequence,index)));
var coordinates = qlayground_cljs.epicycloid.generate_coordinates.call(null,number_of_points,radius);
var template_points = qlayground_cljs.epicycloid.generate_template.call(null,number_of_points,factor);
var lines = qlayground_cljs.epicycloid.calculate_lines.call(null,coordinates,template_points);
var color = cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"factor","factor",-2103172748),factor,new cljs.core.Keyword(null,"number-of-points","number-of-points",764137809),number_of_points,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),coordinates,new cljs.core.Keyword(null,"template-points","template-points",795949254),template_points,new cljs.core.Keyword(null,"lines","lines",-700165781),lines,new cljs.core.Keyword(null,"color","color",1011675173),color], null);
});
qlayground_cljs.epicycloid.draw_state = (function qlayground_cljs$epicycloid$draw_state(state){
quil.core.background.call(null,(46),(38),(51));

var hh = (quil.core.height.call(null) / (2));
var hw = (quil.core.width.call(null) / (2));
var tr__8948__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,hw], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8948__auto__);

quil.core.stroke.call(null,(239),(255),(205));

return qlayground_cljs.epicycloid.draw_figure.call(null,state,(2),(2),(2),(2));
}finally {quil.core.pop_matrix.call(null);
}});

//# sourceMappingURL=epicycloid.js.map