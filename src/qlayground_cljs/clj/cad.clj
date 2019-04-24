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
    (->> (cad/sphere 10)
      (cad/translate [10 0 0]))
    (->> (cad/sphere 10)
      (cad/translate [100 0 0]))
    (->> (cad/sphere 10)
      (cad/translate [150 0 0]))
    (->> (cad/sphere 10)
      (cad/translate [50 0 0]))
    (->> (cad/sphere 10)
      (cad/translate [50 0 0]))
    #_(->> (cad/cube 180 80 70)
        (cad/translate [20 20 20]))))

(def p
  (cad/union
    (for [x (range 1 100 20 )
          y (range 1 100 20)
          z (range 1 100 20)]
      (->> (cad/sphere x ;(* 100 (Math/sin x))
             )
        (cad/translate [(* 100 (Math/sin x )) (* 100 (Math/cos y)) (* 100 (Math/tan z)) ;;; (* 100 (Math/cos z))
                        ])
        ;;(cad/translate [x y z])
        ))))

(spit "demo.scad"
  (scad/write-scad p ))
