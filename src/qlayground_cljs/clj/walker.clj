(ns qlayground-cljs.walker
  (:require [clojure.core.async :refer [<!! >! chan go-loop]]
            [quil.core :refer :all]))

(defmulti render
  "Render a multi-part line."
  count)

(defmethod render 1
  [[[x y]]]
  (point x y))

(defmethod render 2
  [[[x1 y1] [x2 y2]]]
  (line x1 y1 x2 y2))


(defn- step!
  "With roughly equal probability, step one unit (or don't)."
  [[x y]]
  [(+ x (dec (rand-int 3))) (+ y (dec (rand-int 3)))])

(let [channel (chan)]
  (defn- walker
    "A walker."
    []
    (go-loop [position [(/ (width) 2) (/ (height) 2)]]
      (>! channel [position])
      (recur (step! position))))
  (defn- draw
    "'Processing's draw function."
    []
    (render (<!! channel)))) ; Draw a point on the walker's path.

(defn- setup
  "'Processing's startup function."
  []
  (smooth)
  (walker)) ; Start the walker.



#_(defsketch random-walker
  :title "Random Walker"
  :mouse-clicked #(save-frame "frames/frame-####.tiff")
  :setup setup
  :draw draw
  :size [640 480])
