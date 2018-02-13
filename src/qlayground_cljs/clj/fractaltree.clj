(ns qlayground-cljs.clj.fractaltree
  (:import (java.awt image.BufferedImage Color))
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [mikera.image.core :as image]
            [mikera.image.filters :as filt]
            [mikera.image.colours :as color]
            [clojure.java.io :as jio]
            [clojure.math.numeric-tower :as math]))



(defn draw-line [x1 y1 x2 y2]
  (q/line  x1 y1 x2 y2))

(defn compute-tree [x1 y1 angle depth lines]
  (if (pos? depth)
    (let [x2 (+ x1 (* depth (q/cos (q/radians angle)) 10.0))
          y2 (+ y1 (* depth (q/cos (q/radians angle)) 10.0))] 
      (recur x2 y2 (- angle 20) (dec depth) (conj lines [x2 y2])))
    lines))

(defn tree-branch [[x1 y1 angle]]
  (let [x2 (+ x1 (q/cos (q/radians angle)) 10.0)
        y2 (+ y1  (q/cos (q/radians angle)) 10.0)] 
    [x2 y2 angle]))


(defn make-tree [[x y angle]]
  (iterate tree-branch [0 0 25]))

(take 10 (make-tree [0 0 25]))





(defn setup []
  (q/frame-rate 1)
  (q/background 0)
  (q/color-mode :hsb)
  (take 50 (make-tree [0 0 25])))


(defn update-state [state]
  state)


(defn draw-state [state]
  (q/stroke 255)
  (doseq [[x y angle] state]
    (q/ellipse x y 10 10)))

(q/defsketch fractatree
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
