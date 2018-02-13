(ns qlayground-cljs.cad
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [scad-clj.model :as cad]
            [scad-clj.scad :as scad]))


#_(def primitives
  (cad/union
   (cad/cube 100 100 100)
   (cad/sphere 70)
   (cad/cylinder 10 160)))


(def primitives
  (cad/union
   (->> (cad/sphere 70)
        (cad/translate [10 0 0]))
   (->> (cad/sphere 70)
        (cad/translate [100 0 0]))
   (->> (cad/sphere 70)
        (cad/translate [150 0 0]))
   (->> (cad/sphere 70)
        (cad/translate [50 0 0]))
   (->> (cad/sphere 70)
        (cad/translate [50 0 0]))
   #_(->> (cad/cube 180 80 70)
          (cad/translate [20 20 20]))))


#_(spit "demo.scad"
      (scad/write-scad primitives))
