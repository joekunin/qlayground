(ns qlayground-cljs.automaton
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(for [x (range 5)
      y (range 5)]
  (cond (= (inc x) y) [(inc x) y]
        :else [x y]))

;;[0 0 1 2 0 2 1] ;=>
;;[0 1 2 2 0 2 1]
;;[1 2 2 2 0 2 1]
;;[2 2 2 2 0 2 1]
;;[2 2 2 2 0]

(mapv evolve-pair
  (extract-neighborhoods [0 1 2 2 0 2 1] ))


(extract-neighborhoods [0 1 2 2 0 2 1])

(def rule-1
  {[0 0] 0
   [0 1] 1
   [0 2] 0
   [1 0] 0
   [1 1] 1
   [1 2] 2
   [2 0] 2
   [2 1] 2
   [2 2] 2})

(defn evolve-pair [pair]
  (case pair
    [0 0] 0
    [0 1] 1
    [0 2] 0
    [1 0] 1
    [1 1] 1
    [1 2] 2
    [2 0] 2
    [2 1] 2
    [2 2] 2))


(def ^:private representations
  {0 " "
   1 "x"})

(defn- extract-neighborhoods [state]
  (partition 2 1 (repeat 0) (cons 0 state)))

(defn- evolve-once [rule state]
  (mapv rule (extract-neighborhoods state)))

(defn evolve [rule initial-state time-steps]
  (->> initial-state
    (iterate (partial evolve-once rule))
    (take (inc time-steps))))

#_(evolve
    rule-1
    [1 2 0 1 0 1 0]
    5)
