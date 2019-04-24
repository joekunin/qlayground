
(ns qlayground-cljs.circlespin
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn circles
  ([r x y] (circles [[r x y]]))
  ([[[r x y :as h] & t]]
   (if (nil? h) []
       (cons h (lazy-seq (circles
                           (let [r1 (/ r 2)]
                             (if (> r1 2)
                               (conj t
                                 [r1 (+ x r1) y]
                                 [r1 (- x r1) y]
                                 [r1 x (+ y r1)]
                                 [r1 x (- y r1)])
                               t))))))))

(defn draw-circle [r x y l] 
  (doseq [[r x y] ;;(circles r x y)
          (take l (circles r x y))]
    (q/ellipse x y r r)))

(defn setup []
  (q/frame-rate 60)
  (q/background 30)
  (q/color-mode :rgb)
  {:color 0
   :circles [[10 10 400]]
   :variable 0
   :angle 0})

(defn modify-circle [[x y r]]
  [;;x y r
   (* 1.8 (q/noise x)) (* 1.8 (q/noise y)) r
   (+ 0 x) (+ 0 y) (+ 0.0 500) (+ 0.0 h)
   (mod (+ x 0.7) 255)( + 0 y) 500 500
   ])

(defn update-state [state]
  (let [{:keys [circles color angle]} state
        [_ _ r] (last (:circles state))
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))

        updated-circles (conj circles (modify-circle [x y r ]))]
    {:color (mod (+ color 42.5) 255)
     :variable (mod (+ color 0.1) 100)
     :angle (mod (+ angle 0.1) q/TWO-PI)
     :circles updated-circles}
    ))




(defn draw-state [state]
  (let [color (:color state)
        t (q/frame-count)
        v (:variable state)
        translate-x (+  (/ (q/height) 2) (* 150 (q/cos(:angle state))))
        translate-y (* 150 (q/sin (:angle state)))
        [x y r] (last (:circles state))]
    
    (q/stroke  color color color 20
      ;;color
      ;;(* 3.1 (q/sin (q/mouse-x)))  (q/mouse-y) (q/mouse-x) ;color
      )
    (q/no-fill)
    ;; (q/background 220)
    (q/with-translation [(/  (q/width) 2) (/ (q/height) 2)] ; translate-x translate-x )
      ;;(q/translate 0 0 (q/frame-count))
      (q/rotate t)
      ;;(q/rotate-z color)
      ;;(q/stroke 30)
      ;;(q/stroke 202 215 208)
      ;;(q/stroke 229 183 150)
      ;;(q/stroke 63 127 175)

      (draw-circle r y x (q/frame-count))
      )
    ;;    (q/ellipse x y r r )
    ;; (q/stroke 240)

    ;;    (q/triangle x y w h (* 1.1 x) (* 1.1 y))
    ;;(q/triangle x y w h (* 24.1 x) (* 24.1 y))
    ;;(q/triangle x y w h (- (* 1.1 x)) (- (* 1.1 y)))

    ;;[x1 y1 z1 x2 y2 z2]
    (q/line x y t (* 2 x) (* 2 y) (* 2 t))
    ;;(q/save-frame "renders/fractalspin-recursive/recur-####.png")
    #_(q/with-translation [ ;;(-  translate-x 150)
                           ;;(+ 250 color) (+ 250 color)
                           translate-x
                           translate-x
                           ;;translate-x;(+ (* 0.005 t) (/ (q/width) 2))
                           ;;(+ (* 0.005 t) (/ (q/height) 2))
                           ]

        )))

(q/defsketch circlespin
  :renderer :p3d
  :size [900 900]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
