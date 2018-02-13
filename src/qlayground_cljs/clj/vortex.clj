(ns qlayground-cljs.vortex
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [qlayground-cljs.helpers :refer [cycle-between]]
            [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go chan buffer close! thread
                     alts! alts!! timeout]]
            )  )

(def init-state
  (let [radii   (take 336 (cycle-between 10 40 5))
        radius  (nth radii (rand-int 336))
        origins (for [x (range 0 801 40)
                      y (range 0 601 40)]
                  [x y])
        circles (map (fn [x y] [x y radius radius]) origins)]
    {:color {:h 7
             :s 59
             :b 89}
     :angle 0
     :size 0
     :circles circles}))


(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  init-state)

(update-state init-state)

(defn update-state [{:keys [color angle size circles] :as state }]
  (let [t (q/frame-count)]
    {
     :color   {:h (mod (+ (:h color) 0.1) 160)
               :s (mod (+ (:s color) 0.1) 97)
               :b (mod (+ (:b color) 0.1) 96)}
     :angle   (mod (+ angle 0.1) q/TWO-PI)
     :size   (mod (+ size 1.5) 1880)
     :circles circles
     ;;(map (fn [[x y w h]] [x y size size]) circles) 
     ;;:circles (map (fn [[x y w h]] [x y (+ size  w) (+ size h)]) circles)
     }))

(defn draw-state [state]
  (q/background 278 37 23)
  (let [angle (:angle state)
        {:keys [h s b]}  (:color state)
        size (:size state)
        t (q/frame-count)
        x (* 150 (q/cos angle))
        y (* 150 (q/tan t))]
    (q/no-fill)
    (q/stroke 200)
    (doseq [[x2 y2 w h] (:circles state)]
      ;;(q/ellipse w h x2 y2)
      ;;(q/ellipse y2 y2 y2  y2)
      ;;(q/ellipse x2 x2 y2  y2)
      ;;(q/ellipse x2 y2 x2 x2)
      (q/ellipse x2 y2 w h))
    ;;(q/save-frame "vortex-circlar/vortex800600-#####.png")
    ))



(q/defsketch vortex
  :host "host"
  :renderer :p3d
  :size [800 600]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
