(ns qlayground-cljs.cljs.everything
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g]
            [clojure.math.numeric-tower :as math]
            [infix.macros ]))


(defn everything [[x y]]
  (let [value (* (math/expt 2 (- (* (- 17)
                                   (math/floor x))
                                (mod (math/floor y) 17)))
                (math/floor (/ y 17)))
        result (math/floor (mod value 2))]
    (< 0.5 result)))
