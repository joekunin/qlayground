(ns qlayground-cljs.sacred
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


;; ALgo : start with single square vector, append new square to vector using last two elements to calculate center point for new circle

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb 360 100 100 1.0)

  ;(q/color-mode :hsb)
  {:color 1
   :circles [[250 250 10 10]]
   :index 1})

(def state  {:color 1
             :circles [[250 250 10 10]]
             :index 1})


(defn calculate-next-circle [[x y w h] factor]
  [(+ 250 (q/cos  (+ (q/sq (+ x (q/cos 60))) (q/sq (- x (q/sin 60))))))
   (+ 250 (q/cos  (+ (q/sq (+ y (q/cos 60))) (q/sq (- y (q/sin 60))))))
   ;(inc w) ;;(+ 250 (q/cos  (+ (q/sq (+ w (q/cos 60))) (q/sq (- w (q/sin 60))))))
   ;(+ 250 (q/cos  (+ (q/sq (+ h (q/cos 60))) (q/sq (- h (q/sin 60))))))
   ;;   (inc w)
   ;;(inc h)
   (* 190 (q/sin (inc w)))
   (* 190) (q/sin (inc h)) ;; circle here
   ])


(defn update-state [state]
  (let [color (mod (+ (:color state)  0.2) 150)
        circles (:circles state)
        [x y w h] (last circles)
        next-circle (calculate-next-circle [x y w h] 3)]
    {:color color
     :circles (conj circles next-circle )
     }))

(defn draw-state [state]
  (let [timestamp (str (q/year) (q/month) (q/day) (q/hour) (q/minute) )
        filename (str "interference-line-" timestamp)
        hw (q/width)
        color (:color state)
        [x y w h] (last (:circles state))
        ]
    ;;(q/background 250)
    (q/no-fill)
    (q/stroke color color color  )
    (q/ellipse (- hw x) y w h)
    (q/ellipse x (- hw y) w h)
    (q/ellipse  (- hw x) (- hw y) w h)
    (q/ellipse x y w h)
                                        ;    (q/save filename)
    ))



(q/defsketch sacred
  :host "flower"
  :setup setup
  :update update-state
  :draw draw-state
  :size [800 800]
  :mouse-clicked #(q/save-frame "frames/frame-####.tiff")
  :middleware [m/fun-mode])

