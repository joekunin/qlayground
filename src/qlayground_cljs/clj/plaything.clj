(ns qlayground-cljs.clj.plaything
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.svg.core :as svg]
   [thi.ng.color.core :as col]
   [thi.ng.math.core :as m]
   [thi.ng.math.macros :as mm]
   [thi.ng.geom.circle :as c]
   [thi.ng.geom.viz.core :as viz]
   [thi.ng.math.noise :as n]
   [thi.ng.geom.voxel.svo :as svo]
   [thi.ng.geom.voxel.isosurface :as iso]
   [thi.ng.geom.mesh.io :as mio]
   [clojure.java.io :as io]))



(defn sd-nested-sphere
  "Computes signed squared distance from point p to sphere around o
  with radius r. If p is inside sphere, returns dist modulo step."
  [o r step p]
  (let [d (- (g/dist-squared p o) (* r r))]
    (if (neg? d)
      (rem d step)
      d)))


(defn voxel-box
  "Takes SVO tree, voxel op (set or delete), a voxel filter fn and
  coordinate ranges for x,y,z. Applies op for all voxels for which
  filter returns truthy result. Returns updated tree."
  [tree op flt rx ry rz]
  (->> (for [x rx y ry, z rz] (vec3 x y z))
    (filter flt)
    (svo/apply-voxels op tree)))

(defn voxel-sd-sphere
  "Takes SVO tree, sphere origin & radius, nesting distance &
  thickness, x,y,z min/max pairs and voxel resolution. Populates tree
  with voxels based on sd-nested-sphere evaluation, returns updated tree."
  [tree o r step w x1 x2 y1 y2 z1 z2 res]
  (let [thresh (/ step w)]
    (voxel-box
      tree svo/set-at
      (fn [p] (< (Math/abs (sd-nested-sphere o r step p)) thresh))
      (range x1 x2 res)
      (range y1 y2 res)
      (range z1 z2 res))))

(defn export-iso-mesh
  "Takes output path and SVO, computes tree's iso surface mesh and
  exports it as binary PLY."
  [path tree]
  (with-open [out (io/output-stream path)]
    (mio/write-stl
      (mio/wrapped-output-stream out)
      (iso/surface-mesh tree 10 0.5))))

(defn main
  "SDF demo configuration, computes & exports SDF hemisphere mesh."
  []
  (let [size 26
        s1   (dec size)
        s2   (* size 0.5)
        res  (double 1/6)
        tree (voxel-sd-sphere
               (svo/voxeltree size res)
               (vec3 s2) (- s2 2)
               0.5 3
               1 s1
               1 s1
               1 s2
               res)]
    (export-iso-mesh "sd-sphere.stl" tree)))


(main)
