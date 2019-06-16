// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.utils.intersect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
thi.ng.geom.utils.intersect.sq = (function thi$ng$geom$utils$intersect$sq(x){
return (x * x);
});
thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_circle_circle_QMARK_(var_args){
var args26424 = [];
var len__21238__auto___26433 = arguments.length;
var i__21239__auto___26434 = (0);
while(true){
if((i__21239__auto___26434 < len__21238__auto___26433)){
args26424.push((arguments[i__21239__auto___26434]));

var G__26435 = (i__21239__auto___26434 + (1));
i__21239__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var G__26426 = args26424.length;
switch (G__26426) {
case 2:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26424.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26427,p__26428){
var map__26429 = p__26427;
var map__26429__$1 = ((((!((map__26429 == null)))?((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var p = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__26430 = p__26428;
var map__26430__$1 = ((((!((map__26430 == null)))?((((map__26430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26430):map__26430);
var q = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.call(null,p,r1,q,r2);
});

thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.math.core._.call(null,q,p);
var d = thi.ng.math.core.mag.call(null,delta);
if(((d <= (r1 + r2))) && ((d >= thi.ng.math.core.abs_STAR_.call(null,(r1 - r2))))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.math.core.madd.call(null,delta,(a * invd),p);
var h = Math.sqrt(((r1 * r1) - (a * a)));
var perp = thi.ng.math.core._STAR_.call(null,thi.ng.geom.core.normal.call(null,delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_.call(null,p__$1,perp),thi.ng.math.core._.call(null,p__$1,perp)], null);
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_rect_QMARK_(var_args){
var args26437 = [];
var len__21238__auto___26474 = arguments.length;
var i__21239__auto___26475 = (0);
while(true){
if((i__21239__auto___26475 < len__21238__auto___26474)){
args26437.push((arguments[i__21239__auto___26475]));

var G__26476 = (i__21239__auto___26475 + (1));
i__21239__auto___26475 = G__26476;
continue;
} else {
}
break;
}

var G__26439 = args26437.length;
switch (G__26439) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26437.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26440,p__26441){
var map__26442 = p__26440;
var map__26442__$1 = ((((!((map__26442 == null)))?((((map__26442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26442):map__26442);
var vec__26443 = cljs.core.get.call(null,map__26442__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.call(null,vec__26443,(0),null);
var py = cljs.core.nth.call(null,vec__26443,(1),null);
var vec__26446 = cljs.core.get.call(null,map__26442__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.call(null,vec__26446,(0),null);
var h = cljs.core.nth.call(null,vec__26446,(1),null);
var map__26449 = p__26441;
var map__26449__$1 = ((((!((map__26449 == null)))?((((map__26449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26449):map__26449);
var vec__26450 = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.call(null,vec__26450,(0),null);
var qy = cljs.core.nth.call(null,vec__26450,(1),null);
var vec__26453 = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.call(null,vec__26453,(0),null);
var qh = cljs.core.nth.call(null,vec__26453,(1),null);
return !(((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))));
});

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__26458,p__26459,p__26460,p__26461){
var vec__26462 = p__26458;
var px1 = cljs.core.nth.call(null,vec__26462,(0),null);
var py1 = cljs.core.nth.call(null,vec__26462,(1),null);
var vec__26465 = p__26459;
var qx1 = cljs.core.nth.call(null,vec__26465,(0),null);
var qy1 = cljs.core.nth.call(null,vec__26465,(1),null);
var vec__26468 = p__26460;
var px2 = cljs.core.nth.call(null,vec__26468,(0),null);
var py2 = cljs.core.nth.call(null,vec__26468,(1),null);
var vec__26471 = p__26461;
var qx2 = cljs.core.nth.call(null,vec__26471,(0),null);
var qy2 = cljs.core.nth.call(null,vec__26471,(1),null);
return !(((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)));
});

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_circle_QMARK_(var_args){
var args26478 = [];
var len__21238__auto___26499 = arguments.length;
var i__21239__auto___26500 = (0);
while(true){
if((i__21239__auto___26500 < len__21238__auto___26499)){
args26478.push((arguments[i__21239__auto___26500]));

var G__26501 = (i__21239__auto___26500 + (1));
i__21239__auto___26500 = G__26501;
continue;
} else {
}
break;
}

var G__26480 = args26478.length;
switch (G__26480) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26478.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26481,p__26482){
var map__26483 = p__26481;
var map__26483__$1 = ((((!((map__26483 == null)))?((((map__26483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26483):map__26483);
var p = cljs.core.get.call(null,map__26483__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__26483__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__26484 = p__26482;
var map__26484__$1 = ((((!((map__26484 == null)))?((((map__26484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26484):map__26484);
var s = cljs.core.get.call(null,map__26484__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__26484__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.call(null,p,thi.ng.math.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__26487,p__26488,p__26489,r){
var vec__26490 = p__26487;
var px = cljs.core.nth.call(null,vec__26490,(0),null);
var py = cljs.core.nth.call(null,vec__26490,(1),null);
var vec__26493 = p__26488;
var qx = cljs.core.nth.call(null,vec__26493,(0),null);
var qy = cljs.core.nth.call(null,vec__26493,(1),null);
var vec__26496 = p__26489;
var cx = cljs.core.nth.call(null,vec__26496,(0),null);
var cy = cljs.core.nth.call(null,vec__26496,(1),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq.call(null,(cy - qy)):0.0)));
return (ds__$1 <= (r * r));
});

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_aabb_QMARK_(var_args){
var args26503 = [];
var len__21238__auto___26512 = arguments.length;
var i__21239__auto___26513 = (0);
while(true){
if((i__21239__auto___26513 < len__21238__auto___26512)){
args26503.push((arguments[i__21239__auto___26513]));

var G__26514 = (i__21239__auto___26513 + (1));
i__21239__auto___26513 = G__26514;
continue;
} else {
}
break;
}

var G__26505 = args26503.length;
switch (G__26505) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26503.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26506,p__26507){
var map__26508 = p__26506;
var map__26508__$1 = ((((!((map__26508 == null)))?((((map__26508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26508):map__26508);
var pa = cljs.core.get.call(null,map__26508__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.call(null,map__26508__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__26509 = p__26507;
var map__26509__$1 = ((((!((map__26509 == null)))?((((map__26509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26509):map__26509);
var pb = cljs.core.get.call(null,map__26509__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.call(null,map__26509__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.call(null,pa,pb,thi.ng.math.core._PLUS_.call(null,pa,sa),thi.ng.math.core._PLUS_.call(null,pb,sb));
});

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((pa.call(null,(0)) <= qb.call(null,(0)))) && ((pb.call(null,(0)) <= qa.call(null,(0))))){
if(((pa.call(null,(1)) <= qb.call(null,(1)))) && ((pb.call(null,(1)) <= qa.call(null,(1))))){
return ((pa.call(null,(2)) <= qb.call(null,(2)))) && ((pb.call(null,(2)) <= qa.call(null,(2))));
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_sphere_QMARK_(var_args){
var args26516 = [];
var len__21238__auto___26537 = arguments.length;
var i__21239__auto___26538 = (0);
while(true){
if((i__21239__auto___26538 < len__21238__auto___26537)){
args26516.push((arguments[i__21239__auto___26538]));

var G__26539 = (i__21239__auto___26538 + (1));
i__21239__auto___26538 = G__26539;
continue;
} else {
}
break;
}

var G__26518 = args26516.length;
switch (G__26518) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26516.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26519,p__26520){
var map__26521 = p__26519;
var map__26521__$1 = ((((!((map__26521 == null)))?((((map__26521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26521):map__26521);
var p = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__26522 = p__26520;
var map__26522__$1 = ((((!((map__26522 == null)))?((((map__26522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26522):map__26522);
var s = cljs.core.get.call(null,map__26522__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__26522__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.call(null,p,thi.ng.math.core._PLUS_.call(null,p,sz),s,r);
});

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__26525,p__26526,p__26527,r){
var vec__26528 = p__26525;
var px = cljs.core.nth.call(null,vec__26528,(0),null);
var py = cljs.core.nth.call(null,vec__26528,(1),null);
var pz = cljs.core.nth.call(null,vec__26528,(2),null);
var vec__26531 = p__26526;
var qx = cljs.core.nth.call(null,vec__26531,(0),null);
var qy = cljs.core.nth.call(null,vec__26531,(1),null);
var qz = cljs.core.nth.call(null,vec__26531,(2),null);
var vec__26534 = p__26527;
var cx = cljs.core.nth.call(null,vec__26534,(0),null);
var cy = cljs.core.nth.call(null,vec__26534,(1),null);
var cz = cljs.core.nth.call(null,vec__26534,(2),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq.call(null,(cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq.call(null,(cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq.call(null,(cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq.call(null,(cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.utils.intersect.sq.call(null,(cz - pz)):(((cz > qz))?thi.ng.geom.utils.intersect.sq.call(null,(cz - qz)):0.0)));
return (ds__$2 <= (r * r));
});

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Takes 2 vectors defining an AABB (min-p & size) and a seq of plane
 *   parameters (each element [normal w]). The plane normals must be
 *   pointing *inwards*. Returns :inside, :intersect or :outside
 */
thi.ng.geom.utils.intersect.intersect_aabb_frustum_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_frustum_QMARK_(p__26541,size,planes){
var vec__26555 = p__26541;
var px = cljs.core.nth.call(null,vec__26555,(0),null);
var py = cljs.core.nth.call(null,vec__26555,(1),null);
var pz = cljs.core.nth.call(null,vec__26555,(2),null);
var p = vec__26555;
var vec__26558 = thi.ng.math.core._PLUS_.call(null,p,size);
var qx = cljs.core.nth.call(null,vec__26558,(0),null);
var qy = cljs.core.nth.call(null,vec__26558,(1),null);
var qz = cljs.core.nth.call(null,vec__26558,(2),null);
return cljs.core.reduce.call(null,((function (vec__26558,qx,qy,qz,vec__26555,px,py,pz,p){
return (function (res,p__26561){
var vec__26562 = p__26561;
var vec__26565 = cljs.core.nth.call(null,vec__26562,(0),null);
var nx = cljs.core.nth.call(null,vec__26565,(0),null);
var ny = cljs.core.nth.call(null,vec__26565,(1),null);
var nz = cljs.core.nth.call(null,vec__26565,(2),null);
var w = cljs.core.nth.call(null,vec__26562,(1),null);
var vx = (((nx > (0)))?px:qx);
var vy = (((ny > (0)))?py:qy);
var vz = (((nz > (0)))?pz:qz);
if((((((nx * vx) + (ny * vy)) + (nz * vz)) + w) > (0))){
return cljs.core.reduced.call(null,new cljs.core.Keyword(null,"outside","outside",-13164995));
} else {
var vx__$1 = (((nx > (0)))?qx:px);
var vy__$1 = (((ny > (0)))?qy:py);
var vz__$1 = (((nz > (0)))?qz:pz);
if((((((nx * vx__$1) + (ny * vy__$1)) + (nz * vz__$1)) + w) > (0))){
return new cljs.core.Keyword(null,"intersect","intersect",-2039792392);
} else {
return res;
}
}
});})(vec__26558,qx,qy,qz,vec__26555,px,py,pz,p))
,new cljs.core.Keyword(null,"inside","inside",1972503011),planes);
});
thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_sphere_sphere_QMARK_(var_args){
var args26568 = [];
var len__21238__auto___26577 = arguments.length;
var i__21239__auto___26578 = (0);
while(true){
if((i__21239__auto___26578 < len__21238__auto___26577)){
args26568.push((arguments[i__21239__auto___26578]));

var G__26579 = (i__21239__auto___26578 + (1));
i__21239__auto___26578 = G__26579;
continue;
} else {
}
break;
}

var G__26570 = args26568.length;
switch (G__26570) {
case 2:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26568.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26571,p__26572){
var map__26573 = p__26571;
var map__26573__$1 = ((((!((map__26573 == null)))?((((map__26573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26573):map__26573);
var p1 = cljs.core.get.call(null,map__26573__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.call(null,map__26573__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__26574 = p__26572;
var map__26574__$1 = ((((!((map__26574 == null)))?((((map__26574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26574):map__26574);
var p2 = cljs.core.get.call(null,map__26574__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.call(null,map__26574__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.call(null,p1,r1,p2,r2);
});

thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared.call(null,p1,p2) <= ((r1 + r2) * (r1 + r2)));
});

thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_sphere_QMARK_(var_args){
var args26581 = [];
var len__21238__auto___26590 = arguments.length;
var i__21239__auto___26591 = (0);
while(true){
if((i__21239__auto___26591 < len__21238__auto___26590)){
args26581.push((arguments[i__21239__auto___26591]));

var G__26592 = (i__21239__auto___26591 + (1));
i__21239__auto___26591 = G__26592;
continue;
} else {
}
break;
}

var G__26583 = args26581.length;
switch (G__26583) {
case 2:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26581.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__26584,p__26585){
var map__26586 = p__26584;
var map__26586__$1 = ((((!((map__26586 == null)))?((((map__26586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26586):map__26586);
var rp = cljs.core.get.call(null,map__26586__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.call(null,map__26586__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__26587 = p__26585;
var map__26587__$1 = ((((!((map__26587 == null)))?((((map__26587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26587):map__26587);
var p = cljs.core.get.call(null,map__26587__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.call(null,map__26587__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.call(null,rp,dir,p,r);
});

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.math.core._.call(null,p,rp);
var ds = thi.ng.math.core.mag_squared.call(null,q);
var v = (- thi.ng.math.core.dot.call(null,q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if(!(((a < (0))) && ((b < (0))))){
if(((a > (0))) && ((b > (0)))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.math.core._.call(null,b,a);
var v = thi.ng.math.core._.call(null,c,a);
var n = thi.ng.math.core.cross.call(null,u,v);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,thi.ng.geom.vector.V3,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.math.core._.call(null,p,a);
var a_SINGLEQUOTE_ = (- thi.ng.math.core.dot.call(null,n,w0));
var b_SINGLEQUOTE_ = thi.ng.math.core.dot.call(null,n,d);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.math.core.madd.call(null,d,r,p);
var vec__26597 = thi.ng.geom.utils.triangle_barycentric_coords.call(null,a,b,c,i,u,v);
var u__$1 = cljs.core.nth.call(null,vec__26597,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__26597,(1),null);
var w = cljs.core.nth.call(null,vec__26597,(2),null);
if(cljs.core.truth_((function (){var and__20010__auto__ = (u__$1 >= 0.0);
if(and__20010__auto__){
var and__20010__auto____$1 = (w >= 0.0);
if(and__20010__auto____$1){
return thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1);
} else {
return and__20010__auto____$1;
}
} else {
return and__20010__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.utils.intersect.triaabb_axis_test = (function thi$ng$geom$utils$intersect$triaabb_axis_test(pa1,pb1,pa2,pb2,a,b,fa,fb,sa,sb){
var q = ((a * pa1) + (b * pb1));
var r = ((a * pa2) + (b * pb2));
var vec__26603 = (((q < r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
var min = cljs.core.nth.call(null,vec__26603,(0),null);
var max = cljs.core.nth.call(null,vec__26603,(1),null);
var rad = ((fa * sa) + (fb * sb));
if((min <= rad)){
return (max >= (- rad));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e0 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e0(p__26606,p__26607,p__26608,p__26609,p__26610){
var vec__26629 = p__26606;
var ax = cljs.core.nth.call(null,vec__26629,(0),null);
var ay = cljs.core.nth.call(null,vec__26629,(1),null);
var az = cljs.core.nth.call(null,vec__26629,(2),null);
var a = vec__26629;
var vec__26632 = p__26607;
var bx = cljs.core.nth.call(null,vec__26632,(0),null);
var by = cljs.core.nth.call(null,vec__26632,(1),null);
var bz = cljs.core.nth.call(null,vec__26632,(2),null);
var b = vec__26632;
var vec__26635 = p__26608;
var cx = cljs.core.nth.call(null,vec__26635,(0),null);
var cy = cljs.core.nth.call(null,vec__26635,(1),null);
var cz = cljs.core.nth.call(null,vec__26635,(2),null);
var vec__26638 = p__26609;
var ex = cljs.core.nth.call(null,vec__26638,(0),null);
var ey = cljs.core.nth.call(null,vec__26638,(1),null);
var ez = cljs.core.nth.call(null,vec__26638,(2),null);
var e = vec__26638;
var vec__26641 = p__26610;
var sx = cljs.core.nth.call(null,vec__26641,(0),null);
var sy = cljs.core.nth.call(null,vec__26641,(1),null);
var sz = cljs.core.nth.call(null,vec__26641,(2),null);
var vec__26644 = thi.ng.math.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__26644,(0),null);
var fy = cljs.core.nth.call(null,vec__26644,(1),null);
var fz = cljs.core.nth.call(null,vec__26644,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e1 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e1(p__26647,p__26648,p__26649,p__26650,p__26651){
var vec__26670 = p__26647;
var ax = cljs.core.nth.call(null,vec__26670,(0),null);
var ay = cljs.core.nth.call(null,vec__26670,(1),null);
var az = cljs.core.nth.call(null,vec__26670,(2),null);
var vec__26673 = p__26648;
var bx = cljs.core.nth.call(null,vec__26673,(0),null);
var by = cljs.core.nth.call(null,vec__26673,(1),null);
var bz = cljs.core.nth.call(null,vec__26673,(2),null);
var b = vec__26673;
var vec__26676 = p__26649;
var cx = cljs.core.nth.call(null,vec__26676,(0),null);
var cy = cljs.core.nth.call(null,vec__26676,(1),null);
var cz = cljs.core.nth.call(null,vec__26676,(2),null);
var c = vec__26676;
var vec__26679 = p__26650;
var ex = cljs.core.nth.call(null,vec__26679,(0),null);
var ey = cljs.core.nth.call(null,vec__26679,(1),null);
var ez = cljs.core.nth.call(null,vec__26679,(2),null);
var e = vec__26679;
var vec__26682 = p__26651;
var sx = cljs.core.nth.call(null,vec__26682,(0),null);
var sy = cljs.core.nth.call(null,vec__26682,(1),null);
var sz = cljs.core.nth.call(null,vec__26682,(2),null);
var vec__26685 = thi.ng.math.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__26685,(0),null);
var fy = cljs.core.nth.call(null,vec__26685,(1),null);
var fz = cljs.core.nth.call(null,vec__26685,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ay,az,cy,cz,ez,ey,fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,ay,bx,by,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e2 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e2(p__26688,p__26689,p__26690,p__26691,p__26692){
var vec__26711 = p__26688;
var ax = cljs.core.nth.call(null,vec__26711,(0),null);
var ay = cljs.core.nth.call(null,vec__26711,(1),null);
var az = cljs.core.nth.call(null,vec__26711,(2),null);
var a = vec__26711;
var vec__26714 = p__26689;
var bx = cljs.core.nth.call(null,vec__26714,(0),null);
var by = cljs.core.nth.call(null,vec__26714,(1),null);
var bz = cljs.core.nth.call(null,vec__26714,(2),null);
var vec__26717 = p__26690;
var cx = cljs.core.nth.call(null,vec__26717,(0),null);
var cy = cljs.core.nth.call(null,vec__26717,(1),null);
var cz = cljs.core.nth.call(null,vec__26717,(2),null);
var c = vec__26717;
var vec__26720 = p__26691;
var ex = cljs.core.nth.call(null,vec__26720,(0),null);
var ey = cljs.core.nth.call(null,vec__26720,(1),null);
var ez = cljs.core.nth.call(null,vec__26720,(2),null);
var e = vec__26720;
var vec__26723 = p__26692;
var sx = cljs.core.nth.call(null,vec__26723,(0),null);
var sy = cljs.core.nth.call(null,vec__26723,(1),null);
var sz = cljs.core.nth.call(null,vec__26723,(2),null);
var vec__26726 = thi.ng.math.core.abs.call(null,e);
var fx = cljs.core.nth.call(null,vec__26726,(0),null);
var fy = cljs.core.nth.call(null,vec__26726,(1),null);
var fz = cljs.core.nth.call(null,vec__26726,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ay,az,by,bz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,ax,az,bx,bz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test.call(null,bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_minmax = (function thi$ng$geom$utils$intersect$triaabb_edge_minmax(a,b,c,s){
if(((function (){var x__20362__auto__ = (function (){var x__20362__auto__ = a;
var y__20363__auto__ = b;
return ((x__20362__auto__ < y__20363__auto__) ? x__20362__auto__ : y__20363__auto__);
})();
var y__20363__auto__ = c;
return ((x__20362__auto__ < y__20363__auto__) ? x__20362__auto__ : y__20363__auto__);
})() < s)){
return ((function (){var x__20355__auto__ = (function (){var x__20355__auto__ = a;
var y__20356__auto__ = b;
return ((x__20355__auto__ > y__20356__auto__) ? x__20355__auto__ : y__20356__auto__);
})();
var y__20356__auto__ = c;
return ((x__20355__auto__ > y__20356__auto__) ? x__20355__auto__ : y__20356__auto__);
})() >= (- s));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.intersect_triangle3_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_triangle3_aabb_QMARK_(a,b,c,p,s){
var vec__26741 = thi.ng.math.core._STAR_.call(null,s,0.5);
var sx = cljs.core.nth.call(null,vec__26741,(0),null);
var sy = cljs.core.nth.call(null,vec__26741,(1),null);
var sz = cljs.core.nth.call(null,vec__26741,(2),null);
var s__$1 = vec__26741;
var p__$1 = thi.ng.math.core._PLUS_.call(null,p,s__$1);
var vec__26744 = thi.ng.math.core._.call(null,a,p__$1);
var ax = cljs.core.nth.call(null,vec__26744,(0),null);
var ay = cljs.core.nth.call(null,vec__26744,(1),null);
var az = cljs.core.nth.call(null,vec__26744,(2),null);
var a__$1 = vec__26744;
var vec__26747 = thi.ng.math.core._.call(null,b,p__$1);
var bx = cljs.core.nth.call(null,vec__26747,(0),null);
var by = cljs.core.nth.call(null,vec__26747,(1),null);
var bz = cljs.core.nth.call(null,vec__26747,(2),null);
var b__$1 = vec__26747;
var vec__26750 = thi.ng.math.core._.call(null,c,p__$1);
var cx = cljs.core.nth.call(null,vec__26750,(0),null);
var cy = cljs.core.nth.call(null,vec__26750,(1),null);
var cz = cljs.core.nth.call(null,vec__26750,(2),null);
var c__$1 = vec__26750;
var e0 = thi.ng.math.core._.call(null,b__$1,a__$1);
var e1 = thi.ng.math.core._.call(null,c__$1,b__$1);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e0.call(null,a__$1,b__$1,c__$1,e0,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e1.call(null,a__$1,b__$1,c__$1,e1,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e2.call(null,a__$1,b__$1,c__$1,thi.ng.math.core._.call(null,a__$1,c__$1),s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax.call(null,ax,bx,cx,sx))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax.call(null,ay,by,cy,sy))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax.call(null,az,bz,cz,sz))){
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.call(null,a__$1,thi.ng.math.core.cross.call(null,e0,e1),s__$1);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
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
thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_line2_QMARK_(p__26753,p__26754,p__26755,p__26756){
var vec__26769 = p__26753;
var px1 = cljs.core.nth.call(null,vec__26769,(0),null);
var py1 = cljs.core.nth.call(null,vec__26769,(1),null);
var p = vec__26769;
var vec__26772 = p__26754;
var qx1 = cljs.core.nth.call(null,vec__26772,(0),null);
var qy1 = cljs.core.nth.call(null,vec__26772,(1),null);
var q = vec__26772;
var vec__26775 = p__26755;
var px2 = cljs.core.nth.call(null,vec__26775,(0),null);
var py2 = cljs.core.nth.call(null,vec__26775,(1),null);
var lp = vec__26775;
var vec__26778 = p__26756;
var qx2 = cljs.core.nth.call(null,vec__26778,(0),null);
var qy2 = cljs.core.nth.call(null,vec__26778,(1),null);
var lq = vec__26778;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if(((na === (0))) && ((nb === (0)))){
var ip = thi.ng.geom.utils.closest_point_on_segment.call(null,lp,p,q);
var iq = thi.ng.geom.utils.closest_point_on_segment.call(null,lq,p,q);
if(cljs.core.truth_((function (){var or__20022__auto__ = thi.ng.math.core.delta_EQ_.call(null,ip,lp);
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.math.core.mix.call(null,p,q,ua);
if(((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first.call(null,cljs.core.transduce.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__26786){
var vec__26787 = p__26786;
var p = cljs.core.nth.call(null,vec__26787,(0),null);
var q = cljs.core.nth.call(null,vec__26787,(1),null);
return thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_.call(null,rp,rq,p,q);
})),cljs.core.filter.call(null,(function (p1__26781_SHARP_){
if(cljs.core.truth_(cljs.core.get.call(null,p1__26781_SHARP_,new cljs.core.Keyword(null,"p","p",151049309)))){
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null),cljs.core.get.call(null,p1__26781_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348)));
} else {
return null;
}
}))),cljs.core.completing.call(null,(function (closest,isec){
var p = cljs.core.get.call(null,isec,new cljs.core.Keyword(null,"p","p",151049309));
var d = thi.ng.geom.core.dist_squared.call(null,rp,p);
if((d < closest.call(null,(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_.call(null,rp,thi.ng.math.core.madd.call(null,rd,1.0E29,rp),edges);
});
thi.ng.geom.utils.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__20022__auto__ = thi.ng.math.core.delta_EQ_.call(null,aw,bw,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__20022__auto__)){
return or__20022__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,an,bn,thi.ng.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.math.core.dot.call(null,an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.math.core.madd.call(null,an,u,thi.ng.math.core._STAR_.call(null,bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.utils.ortho_normal.call(null,an,bn)], null);
}
});
thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.math.core.dot.call(null,n,dir);
var dn = (thi.ng.math.core.dot.call(null,n,rp) + w);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,dp,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.math.core.madd.call(null,dir,du,rp);
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.call(null,0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
/**
 * Takes a point & normal defining a plane and 2 vectors defining an
 *   AABB (min-p & size). Returns true if plane intersects box.
 */
thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_aabb_QMARK_(var_args){
var args26790 = [];
var len__21238__auto___26814 = arguments.length;
var i__21239__auto___26815 = (0);
while(true){
if((i__21239__auto___26815 < len__21238__auto___26814)){
args26790.push((arguments[i__21239__auto___26815]));

var G__26816 = (i__21239__auto___26815 + (1));
i__21239__auto___26815 = G__26816;
continue;
} else {
}
break;
}

var G__26792 = args26790.length;
switch (G__26792) {
case 4:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26790.length)].join('')));

}
});

thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,n,q,s){
var s2 = thi.ng.math.core._STAR_.call(null,s,0.5);
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.call(null,thi.ng.math.core._.call(null,p,thi.ng.math.core._PLUS_.call(null,q,s2)),n,s2);
});

thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (p__26793,p__26794,p__26795){
var vec__26796 = p__26793;
var px = cljs.core.nth.call(null,vec__26796,(0),null);
var py = cljs.core.nth.call(null,vec__26796,(1),null);
var pz = cljs.core.nth.call(null,vec__26796,(2),null);
var vec__26799 = p__26794;
var nx = cljs.core.nth.call(null,vec__26799,(0),null);
var ny = cljs.core.nth.call(null,vec__26799,(1),null);
var nz = cljs.core.nth.call(null,vec__26799,(2),null);
var n = vec__26799;
var vec__26802 = p__26795;
var sx = cljs.core.nth.call(null,vec__26802,(0),null);
var sy = cljs.core.nth.call(null,vec__26802,(1),null);
var sz = cljs.core.nth.call(null,vec__26802,(2),null);
var vec__26805 = (((nx > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sx) - px),(sx - px)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - px),((- sx) - px)], null));
var vx1 = cljs.core.nth.call(null,vec__26805,(0),null);
var vx2 = cljs.core.nth.call(null,vec__26805,(1),null);
var vec__26808 = (((ny > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sy) - py),(sy - py)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sy - py),((- sy) - py)], null));
var vy1 = cljs.core.nth.call(null,vec__26808,(0),null);
var vy2 = cljs.core.nth.call(null,vec__26808,(1),null);
var vec__26811 = (((nz > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sz) - pz),(sz - pz)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sz - pz),((- sz) - pz)], null));
var vz1 = cljs.core.nth.call(null,vec__26811,(0),null);
var vz2 = cljs.core.nth.call(null,vec__26811,(1),null);
if(((((nx * vx1) + (ny * vy1)) + (nz * vz1)) <= 0.0)){
return ((((nx * vx2) + (ny * vy2)) + (nz * vz2)) >= 0.0);
} else {
return null;
}
});

thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$lang$maxFixedArity = 4;

thi.ng.geom.utils.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
return (thi.ng.math.core.abs_STAR_.call(null,(thi.ng.math.core.dot.call(null,n,p) + w)) <= r);
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.utils.intersect.subdot = (function thi$ng$geom$utils$intersect$subdot(a,b,c){
var d = thi.ng.math.core.subm.call(null,a,b,c);
return ((d.call(null,(0)) + d.call(null,(1))) + d.call(null,(2)));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 *  Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.utils.intersect.face_a = (function thi$ng$geom$utils$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.call(null,f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((((aff.call(null,(0)) > (0)))?(1):(0)) | (((aff.call(null,(1)) > (0)))?(2):(0))) | (((aff.call(null,(2)) > (0)))?(4):(0))) | (((aff.call(null,(3)) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 *  Returns true if all dot products are positive.
 */
thi.ng.geom.utils.intersect.face_b1_QMARK_ = (function thi$ng$geom$utils$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_.call(null,(function (p1__26818_SHARP_){
return (thi.ng.math.core.dot.call(null,p1__26818_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.utils.intersect.face_b2_QMARK_ = (function thi$ng$geom$utils$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_.call(null,(function (p1__26819_SHARP_){
return (thi.ng.geom.utils.intersect.subdot.call(null,p1__26819_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 *  separating plane between the faces shared by that edge.
 */
thi.ng.geom.utils.intersect.edge_a = (function thi$ng$geom$utils$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = ((function (xa,xb){
return (function (a,b,i,j){
var cp = ((ea.call(null,i) * eb.call(null,j)) - (ea.call(null,j) * eb.call(null,i)));
return (((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0)))) || (((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))));
});})(xa,xb))
;
return cljs.core.not.call(null,(function (){var or__20022__auto__ = cljs.core.not_EQ_.call(null,(15),(ma | mb));
if(or__20022__auto__){
return or__20022__auto__;
} else {
var or__20022__auto____$1 = edge.call(null,(1),(2),(1),(0));
if(cljs.core.truth_(or__20022__auto____$1)){
return or__20022__auto____$1;
} else {
var or__20022__auto____$2 = edge.call(null,(1),(4),(2),(0));
if(cljs.core.truth_(or__20022__auto____$2)){
return or__20022__auto____$2;
} else {
var or__20022__auto____$3 = edge.call(null,(1),(8),(3),(0));
if(cljs.core.truth_(or__20022__auto____$3)){
return or__20022__auto____$3;
} else {
var or__20022__auto____$4 = edge.call(null,(2),(4),(2),(1));
if(cljs.core.truth_(or__20022__auto____$4)){
return or__20022__auto____$4;
} else {
var or__20022__auto____$5 = edge.call(null,(2),(8),(3),(1));
if(cljs.core.truth_(or__20022__auto____$5)){
return or__20022__auto____$5;
} else {
return edge.call(null,(4),(8),(3),(2));
}
}
}
}
}
}
})());
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 *  points and an edge id. Looks up edge for given id and if not yet
 *  present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.utils.intersect.get_edge = (function thi$ng$geom$utils$intersect$get_edge(edges,epoints,id){
var e = edges.call(null,id);
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = epoints.call(null,id);
var e__$1 = thi.ng.math.core._.call(null,ep.call(null,(0)),ep.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 *  of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 *  and a seq of specs, each encoding a specific check (either calls to
 *  face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.utils.intersect.check_faces_a = (function thi$ng$geom$utils$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__26834 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__26834,(0),null);
var a = cljs.core.nth.call(null,vec__26834,(1),null);
var b = cljs.core.nth.call(null,vec__26834,(2),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f*","f*",-689873734),f))){
var vec__26837 = thi.ng.geom.utils.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__26837,(0),null);
var ea = cljs.core.nth.call(null,vec__26837,(1),null);
var vec__26840 = thi.ng.geom.utils.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__26840,(0),null);
var eb = cljs.core.nth.call(null,vec__26840,(1),null);
var n = thi.ng.math.core.cross.call(null,ea,eb);
var vec__26843 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__26837,edges__$1,ea,vec__26840,edges__$2,eb,n,vec__26834,f,a,b){
return (function (p1__26820_SHARP_){
return thi.ng.math.core.dot.call(null,p1__26820_SHARP_,n);
});})(masks,affine,edges,s,vec__26837,edges__$1,ea,vec__26840,edges__$2,eb,n,vec__26834,f,a,b))
,deltas):thi.ng.geom.utils.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__26837,edges__$1,ea,vec__26840,edges__$2,eb,n,vec__26834,f,a,b){
return (function (p1__26821_SHARP_){
return thi.ng.geom.utils.intersect.subdot.call(null,p1__26821_SHARP_,p,n);
});})(masks,affine,edges,s,vec__26837,edges__$1,ea,vec__26840,edges__$2,eb,n,vec__26834,f,a,b))
,verts));
var m = cljs.core.nth.call(null,vec__26843,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__26843,(1),null);
if((m < (15))){
var G__26846 = cljs.core.conj.call(null,masks,m);
var G__26847 = cljs.core.conj.call(null,affine,a__$1);
var G__26848 = edges__$2;
var G__26849 = cljs.core.next.call(null,s);
masks = G__26846;
affine = G__26847;
edges = G__26848;
s = G__26849;
continue;
} else {
return null;
}
} else {
if(cljs.core.not.call(null,thi.ng.geom.utils.intersect.edge_a.call(null,masks.call(null,a),masks.call(null,b),affine.call(null,a),affine.call(null,b)))){
var G__26850 = masks;
var G__26851 = affine;
var G__26852 = edges;
var G__26853 = cljs.core.next.call(null,s);
masks = G__26850;
affine = G__26851;
edges = G__26852;
s = G__26853;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 *  Returns true if tetras do intersect.
 */
thi.ng.geom.utils.intersect.check_faces_b = (function thi$ng$geom$utils$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__26863 = cljs.core.first.call(null,s);
var f = cljs.core.nth.call(null,vec__26863,(0),null);
var a = cljs.core.nth.call(null,vec__26863,(1),null);
var b = cljs.core.nth.call(null,vec__26863,(2),null);
var vec__26866 = thi.ng.geom.utils.intersect.get_edge.call(null,edges,epoints,a);
var edges__$1 = cljs.core.nth.call(null,vec__26866,(0),null);
var ea = cljs.core.nth.call(null,vec__26866,(1),null);
var vec__26869 = thi.ng.geom.utils.intersect.get_edge.call(null,edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.call(null,vec__26869,(0),null);
var eb = cljs.core.nth.call(null,vec__26869,(1),null);
if(cljs.core.not.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_b1_QMARK_.call(null,deltas,thi.ng.math.core.cross.call(null,ea,eb)):thi.ng.geom.utils.intersect.face_b2_QMARK_.call(null,verts,p,thi.ng.math.core.cross.call(null,ea,eb))))){
var G__26872 = edges__$2;
var G__26873 = cljs.core.next.call(null,s);
edges = G__26872;
s = G__26873;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 *  true if they intersect. Orientation of points is irrelevant (unlike
 *  in the original algorithm this implementation is based on).
 */
thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_tetrahedra_QMARK_(p__26876,p__26877){
var vec__26884 = p__26876;
var pa = cljs.core.nth.call(null,vec__26884,(0),null);
var pb = cljs.core.nth.call(null,vec__26884,(1),null);
var pc = cljs.core.nth.call(null,vec__26884,(2),null);
var pd = cljs.core.nth.call(null,vec__26884,(3),null);
var p = vec__26884;
var vec__26887 = p__26877;
var qa = cljs.core.nth.call(null,vec__26887,(0),null);
var qb = cljs.core.nth.call(null,vec__26887,(1),null);
var qc = cljs.core.nth.call(null,vec__26887,(2),null);
var qd = cljs.core.nth.call(null,vec__26887,(3),null);
var q = vec__26887;
var masks = thi.ng.geom.utils.intersect.check_faces_a.call(null,cljs.core.map.call(null,((function (vec__26884,pa,pb,pc,pd,p,vec__26887,qa,qb,qc,qd,q){
return (function (p1__26874_SHARP_){
return thi.ng.math.core._.call(null,p1__26874_SHARP_,pa);
});})(vec__26884,pa,pb,pc,pd,p,vec__26887,qa,qb,qc,qd,q))
,q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__20022__auto__ = cljs.core.not_EQ_.call(null,(15),cljs.core.reduce.call(null,cljs.core.bit_or,masks));
if(or__20022__auto__){
return or__20022__auto__;
} else {
return thi.ng.geom.utils.intersect.check_faces_b.call(null,cljs.core.map.call(null,((function (or__20022__auto__,masks,vec__26884,pa,pb,pc,pd,p,vec__26887,qa,qb,qc,qd,q){
return (function (p1__26875_SHARP_){
return thi.ng.math.core._.call(null,p1__26875_SHARP_,qa);
});})(or__20022__auto__,masks,vec__26884,pa,pb,pc,pd,p,vec__26887,qa,qb,qc,qd,q))
,p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=intersect.js.map