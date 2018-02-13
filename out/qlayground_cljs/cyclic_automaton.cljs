(ns qlayground-cljs.cyclic-automaton
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            ))

(def rule-1 {[1 1] 0}) 

(def rule-90
  {[1 1 1] 0
   [1 1 0] 1
   [1 0 1] 0
   [1 0 0] 1
   [0 1 1] 1
   [0 1 0] 0
   [0 0 1] 1
   [0 0 0] 0})

(def rule-30
  {[1 1 1] 0
   [1 1 0] 0
   [1 0 1] 0
   [1 0 0] 1
   [0 1 1] 1
   [0 1 0] 1
   [0 0 1] 1
   [0 0 0] 0})

(def ^:private representations
  {0 " "
   1 "x"})

(defn- extract-neighborhoods [state]
  (partition 3 1 (repeat 0) (cons 0 state)))

(defn- evolve-once [rule state]
  (mapv rule (extract-neighborhoods state)))

(defn evolve [rule initial-state time-steps]
  (->> initial-state
    (iterate (partial evolve-once rule))
    (take (inc time-steps))))


(defn convert-state [state]
  (map (fn [atom] (cond
                   (= atom 0) " "
                   (= atom 1) "x"
                   :else atom))
    state))


(defn render [states]
  (->> states
    (interpose "\n")
    (map convert-state)
    (apply concat)
    (print-str)
    (print)))



(render [[1 1 0 1 0 1 0]
         [1 1 0 0 0 0 1]
         [1 1 1 0 0 1 0]]) ;=> "xx x x \nxx    x\nxxx  x \n"
