(ns qlayground-cljs.pendulum
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 60)
  (let [r 20
        w (q/width)
        h (q/height)
        y-vals (take-nth r (range (+ h r)))
        circles (map (fn [[x y]] {:x x :y 250 :r r}) (partition 2 y-vals))]
    {:radius r
     :circles circles}))

(defn update-state [state]
  (update state :circles #(map (fn [c]
                                 (let [cx (/ (q/width) 2)
                                       cy (/ (q/height) 2)
                                       x (:x c)
                                       y (:y c)
                                       r (:radius state)
                                       t (/ (q/millis) 1000)]
                                   (assoc c :r (* r
                                                  (q/sin
                                                   (+ t
                                                      (+ (q/sq (- cx x))
                                                         (q/sq (- cy y))))))))) %))
  (update state :circles #(map (fn [c]
                                 (let [cx (/ (q/width) 2)
                                       cy (/ (q/height) 2)
                                       x (:x c)
                                       y (:y c)
                                       r (:radius state)
                                       t (/ (q/millis) 1000)]
                                   (assoc c :x (* r
                                                  (q/sin
                                                   (+ t
                                                      (+ (q/sq (- cx x))
                                                         (q/sq (- cy y))))))))) %)))

(defn draw-state [state]
  (q/background 0 0 0)
  (q/no-stroke)
  (q/with-translation [200 0]
    (doseq [c (:circles state)]
      (q/ellipse (:x c) (:y c) (:r c) (:r c))

      )))


#_(q/defsketch pendulum
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
