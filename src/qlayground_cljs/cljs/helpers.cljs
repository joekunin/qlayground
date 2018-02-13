(ns qlayground-cljs.helpers)

(defn cycle-between
  "Cycle between min and max with inc-step and dec-step starting at
  start in direction :up"
  ([min max] (cycle-between min min max 1 1))
  ([min max inc-step] (cycle-between min min max inc-step inc-step))
  ([min max inc-step dec-step] (cycle-between min min max inc-step dec-step))
  ([start min max inc-step dec-step] (cycle-between start min max inc-step dec-step :up))
  ([start min max inc-step dec-step direction]
   (let [inc-step (if (neg? inc-step) (* -1 inc-step) inc-step)
         dec-step (if (neg? dec-step) (* -1 dec-step) dec-step)
         next (if (= :up direction)
                (+ start inc-step)
                (- start dec-step))
         [next dir] (if (= :up direction)
                      (if (> next max) [(- start dec-step) :down] [next :up])
                      (if (< next min) [(+ start inc-step) :up] [next :down]))]
     (lazy-seq (cons start (cycle-between next min max inc-step dec-step dir))))))
