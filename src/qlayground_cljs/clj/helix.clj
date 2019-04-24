(ns qlayground-cljs.clj.helix
  (:require
   [quil.core :as q]
   [quil.middleware :as m]
   [thi.ng.geom.core :as g]
   [thi.ng.geom.circle :as c]
   [thi.ng.geom.polygon :as poly]
   [thi.ng.math.core :as tm]
   [qlayground-cljs.clj.helpers :as h]
   [qlayground-cljs.clj.particle :as p]
   [clojure.math.numeric-tower :as math])
  (:use
   [random-seed.core :refer :all]
   [clojure.core.matrix]
   [clojure.core.matrix.operators]))

(defn spiral-matrix [m n & [start]]
  (let [row (list (map #(+ start %) (range m)))]
    (if (= 1 n) row
        (concat row (map reverse
                      (apply map list
                        (spiral-matrix (dec n) m (+ start m))))))))

(defn spiral [n m] (spiral-matrix n m 1))

(spiral 500 500)


(def c 5)  ;number of children in each generation
(def p 0.05) ;mutation probability

(def target "METHINKS IT IS LIKE A WEASEL")
(def tsize (count target))

(def alphabet " ABCDEFGHIJLKLMNOPQRSTUVWXYZ")


(defn fitness [s]
  (count (filter true? (map = s target))))

(defn perfectly-fit? [s]
  (= (fitness s) tsize))

(defn randc []
  (rand-nth alphabet))

(defn mutate [s]
  (map #(if (< (rand) p) (randc) %) s))

(loop [generation 1,
       parent (repeatedly tsize randc)]
  (println generation, (apply str parent), (fitness parent)) 
  (if-not (perfectly-fit? parent)
    (let [children (repeatedly c #(mutate parent))
          fittest (apply max-key fitness parent children)]
      (recur (inc generation), fittest))))


(map = "this is a test" "this is a pickle")


(defn avg
  [s]
  (let [count (count s)
        sum (double (reduce + s))
        avg (/ sum count)]
    avg))

(defn col-avg
  [s col]
  ())

(def col [[1 2 3 4 5]
          [2 3 4 5 6]
          [3 4 5 6 7]
          [4 5 6 7 8]])
