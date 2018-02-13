(ns qlayground-cljs.circlespin
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  {:color 0
   :circles [[0 0 400 400]
             ]
   :variable 0
   :angle 0})



;(defn intersection)



(defn modify-circle [[x y w h]]
  [x y w h
   ;;(* 1.8 (q/noise x)) (* 1.8 (q/noise y)) w h
   ;;(+ 0 x) (+ 0 y) (+ 0.1 w) (+ 0.1 h)
   ;;(mod (+ x 0.7) 255)( + 0 y) w h
   ])

(defn update-state [state]
  (let [{:keys [circles color angle]} state
        [x y w h] (last (:circles state))
        ;;x (* 150 (q/cos angle))
        ;;y (* 150 (q/sin angle))
        updated-circles (conj circles (modify-circle [x y w h ]))]
    {:color (mod (+ color 0.1) 255)
     :variable (mod (+ color 0.1) 100)
     :angle (mod (+ angle 0.1) q/TWO-PI)
     :circles updated-circles}
    ))

(defn draw-state [state]

  (let [color (:color state)
        t (q/frame-count)
        v (:variable state)
        translate-x (+  (/ (q/height) 2) (* 150 (q/cos (:angle state))))
        translate-y (* 150 (q/sin (:angle state)))
        [x y w h] (last (:circles state))]
    (q/stroke 120 100 color)
    (q/no-fill)
    ;;(q/background 220)

    (q/translate 400 400); translate-x translate-x )
    (q/ellipse x y w h)
    (q/rotate-x color)
    (q/ellipse x y w h)
    (q/rotate-y color)
    (q/ellipse x y w h)
    (q/rotate-z color)
    (q/ellipse x y w h )
    ))




#_(q/defsketch circlespin
  :renderer :p3d
  :size [800 800]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
