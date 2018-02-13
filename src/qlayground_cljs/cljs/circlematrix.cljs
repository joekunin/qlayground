(ns qlayground-cljs.circlematrix
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


(defn intersection [x0 y0 ]
  )

(defn modify-circle [[x y w h]]
  [x y w h
   ;;(* 1.8 (q/noise x)) (* 1.8 (q/noise y)) w h
   ;;(+ 0 x) (+ 0 y) (+ 0.1 w) (+ 0.1 h)
   ;;(mod (+ x 0.7) 255)( + 0 y) w h
   ])

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  {:color 0
   :angle 0})

(defn update-state [state]
  (let [{:keys [color angle]} state]
    {:color (mod (+ color 0.2) 255)
     :angle (mod (+ angle 0.1) q/TWO-PI)}))

(defn draw-state [state]
  ;; (q/background 240)
  (q/no-fill)
  (q/stroke 33)



  (let [angle (:angle state)
        color (:color state)
        tx (* 150 (q/sin angle))
        ty (* 150 (q/cos angle))
        x  (* 150 (q/tan angle))
        y  (* 150 (q/tan angle))
        x1 (- (* 150 (q/tan angle)))
        y1 (- (* 150 (q/tan angle)))]

    (q/with-translation [ (/ (q/width) 2) (/ (q/height) 2)]
      (q/with-translation [(/ q/PI tx) (/ q/PI ty)]
        (q/with-translation [ty tx ]
          (q/fill (:color state) 100 255 250 )
          (q/scale 0.2)
          (q/ellipse (- x1) y1 color color)

          (q/translate angle angle)
          (q/ellipse  x1 (- y1) 25 25)
          (q/rotate angle) ;; <-- CHANGE THIS TO "angle" for arteries/ tx for chaos

          (q/ellipse (- x) y (* 1.2 color) (* 1.2 color) )
          (q/rotate angle)
          (q/ellipse x y1 35 35)

          ;;(q/rotate (-  angle))
          (q/ellipse x (- y) (* 1.6 color) (* 1.6 color))


          ;;(q/rotate (-  angle))

          (q/ellipse x (- y) (* 1.6 color) (* 1.6 color))
                                        ;(q/rotate (-  angle))
          (q/stroke 255)

          (q/ellipse (- x) y 10 10 )
          (q/scale 1.5)
          (q/rotate angle)
          (q/fill (* 3.1 color) 50 200 10 )
          (q/rect 0 0 (q/width) (q/height))
          )))

    ))



#_(q/defsketch circlematrix
    ;;:renderer :p3d
    :size [800 800]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode])

