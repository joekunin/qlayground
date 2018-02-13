(ns qlayground-cljs.flower
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


;; ALgo : start with single square vector, append new square to vector using last two elements to calculate center point for new circle

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  {:color 1
   :circles [;[250 250 50 50] [275 250 50 50]
             ]
   :index 1})

(defn update-state-interference [state]
  (let [color (mod (+ (:color state)  0.8) 200)
        circles (:circles state)
        next-circles (conj circles [(* 1 (q/frame-count))
                                    (* 1 (q/frame-count))
                                    (* 2 (q/frame-count))
                                    (* 2 (q/frame-count))
                                        ;(* 2 (mod (+ (q/frame-count)  0.1) 70))
                                        ;(mod (+ (q/frame-count)  0.1) 70)
                                        ;(mod (+ (q/frame-count)  0.1) 255)
                                        ;(mod (+ (q/frame-count)  0.1) 255)
                                    ])]
    {:color color
     :circles next-circles}))

(defn calculate-next-circle [circles]
  circles)
; [ [x y w h] [x y w h] ] => [x3 y3 w h
#_(defn update-state [state]
  (let [circles (:circles state)
        last-two-circles (take-last 2 circles)
        next-circles (conj circles (calculate-next-circle last-two-circles))]
    {:color 0
     :circles next-circles}))


(defn draw-state [state]
  (let [timestamp (str (q/year) (q/month) (q/day) (q/hour) (q/minute) )
        filename (str "interference-line-" timestamp)
        hw (q/width)
        color (:color state)
        [x y w h] (last (:circles state))
        ]
    ;;(q/background 250)
    (q/no-fill)
    (q/stroke 100 100 20)

    (q/ellipse (- hw x) y w h)
    (q/ellipse x (- hw y) w h)
    (q/ellipse  (- hw x) (- hw y) w h)
    (q/ellipse x y w h)
                                        ;    (q/save filename)

    ))
#_(q/defsketch flower
    :host "flower"
    :size [800 800]
    :setup setup
    :update update-state-interference
    :draw draw-state
    :mouse-clicked #(q/save-frame "frames/frame-####.tiff")
    :middleware [m/fun-mode])
