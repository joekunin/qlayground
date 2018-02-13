(ns qlayground-cljs.wolfram
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            ;[clojure.core.match :refer [match]]
            ))


(defn power
  ([x y] (power x y 1))
  ([x y current]
   (if (= y 0)
     current
     (if (> y 0)
       (recur x (- y 1) (* x current))
       (recur x (+ y 1) (/ current x))))))

(defn next-generation
  ([] (next-generation [0 0 1 1 1 0 0 0 1]))
  ([generation]
   (recur
     (concat [0]
       (->> generation
         (partition 3 1)
         (map vec)
         (map match-rules)
         (println))
       [0]))
   ))

#_(concat [0]
    (->> [ 0 0 1]
      (partition 3 1)
      (map vec)
      (map match-rules)
      (println))
    [0])



(defn match-rules
  [generation]
  (match generation
         [0 0 0] 0
         [0 0 1] 0
         [0 1 0] 0
         [0 1 1] 1
         [1 0 0] 0
         [1 0 1] 1
         [1 1 0] 1
         [1 1 1] 0))

;;(take 10 (next-generation))



