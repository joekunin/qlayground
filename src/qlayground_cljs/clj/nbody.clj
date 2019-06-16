(ns qlayground-cljs.clj.nbody
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g])  )

(def G  6.674e-11)
(def AU 150e9)
(def YEAR (* 365.25 25 60 60))
(def MONTH (* 21 24 60 60))
(def SUN-MASS 2e30)
(def EARTH-MASS 6e24)
(def MOON-MASS 7.34e22)

(defn ret [state t] state)

(defn main [& args]
  (let [t 0
        initial-state [[0 0 0 ;; Sun position
                        AU 0 0  ;; Earth position
                        (* 0.998 AU) 0 0 ;; moon position
                        0 0 0 ;; sun speed
                        0 (/ (* q/TWO-PI AU) YEAR)  0 ;; earth speed
                        0 (/ (* q/TWO-PI  ( / (* (+ (/ AU YEAR)  0.002)  AU)  MONTH)) YEAR)  0]] ;; moon speed
        ]
    (ret initial-state t)))
