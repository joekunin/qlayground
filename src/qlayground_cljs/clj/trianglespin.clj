(ns qlayground-cljs.clj.trianglespin
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [infix.macros :as in]

            )  )




(defn ikeda [[x_n y_n] u]
  (let [t_n (- 0.4 (/ 6 (+ 1 (* x_n  x_n) (* y_n y_n))))]
    [(inc (* u (- (* x_n (Math/cos t_n))
                 (* y_n (Math/sin t_n)))))
     (* u (+ (* x_n (Math/sin t_n))
            (* y_n (Math/cos t_n ))))]))

(defn setup []
  (q/frame-rate 60) 
  (q/color-mode :hsb)
  {:color 0
   :zoom 100
   :angle 0
   :coords [2 2]})

(defn update-state [state]
  (let [{:keys [color angle zoom coords]} state]
    {:color (mod (+ color 0.2) 255)
     :zoom (mod (+ zoom 2.3) (/ (q/width) 4))
     :angle (mod (+ angle 0.1) q/TWO-PI)
     :coords (ikeda coords 0.1 )}))


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

(defn draw-circle [r x y]
  (doseq [[r x y] (circles r x y)]
    (q/ellipse x y r r)))

(let [n 1000]
  )


(defn draw-state [state]
  (q/background 20)
  (q/no-fill)
  (let [angle (:angle state)
        color (:color state)
        zoom ;;(/ (q/width) 18)
        (:zoom state)
        n 14000
        rotation 60
        d (- (/ (- zoom 10.0) 2.0)
            (/ zoom 20.0))
        x (* zoom (q/cos angle))
        y (* zoom (q/atan angle))
        ;;[x y] (:coords state)
        r (- y
            (q/abs (*  zoom
                     (q/sin (mod angle 350)))))
        ]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]

      ;;(q/stroke 0 0 0 20)
      
      (q/stroke 255 0 255;;color  120
        )

      ;;(q/stroke color 200  color 20)
      ;;(q/triangle x y r r y x)

      ;;(q/stroke 255 255 230 30)
      ;;(q/triangle y x r r x y)

      ;; david

      #_(dotimes [x (/ 360 rotation)]
          (q/ellipse x y r r)
          (q/rotate  (q/radians rotation)))
      #_(q/scale 1)

      #_(dotimes [k n]
          (let [x (* 1000 (q/cos (/ (* 10 q/PI k) n ))
                    (- 1 (* 0.5 (q/sq (q/cos (/ (* 16 q/PI k) n))))))
                y (* 1000 (q/sin (/ (* 10 q/PI k) n ))
                    (- 1 (* 0.5 (q/sq (q/cos (/ (* 16 q/PI k) n))))))
                r (* 1000 (+ (/ 1 200) (* (/ 1 10) (q/pow (q/sin (/ (* 52 q/PI k) n)) 4))))]
            (q/stroke  (mod k 160)(mod k 360)(mod k 360) (mod k 255))
            
            (q/ellipse x y r r)

            ))


      (dotimes [c (/ 360 rotation)]
        (q/ellipse x y r r) 
        (q/rotate (q/radians rotation)))

      #_(dotimes [c (/ 360 rotation)]

          ;; (q/rect x y r r)
          (q/ellipse x y r r)
          (q/rotate (q/radians rotation)))

      ;;(q/ellipse  x y r r)
      ;; (q/ellipse  (- y) (- x) r r)      
      ;;(q/rect x y r r)
      ;;(q/rect (- y) (- x) r r)

      ;;(q/point x y r)

      ;;(q/ellipse x y r r)
      ;;      (q/triangle r r y x r r)

      ;; (q/triangle r 0 x y (-  x y) (- y x))
      ;; (q/triangle r 0 y x (-  x y) (- y x))  


      ;; (q/triangle 0 0 x y (-  y x) (- x y))
      ;; (q/triangle 0 0 y x (-  y x) (- x y))
      ;; (q/triangle 0 0 x y (-  x y) (- y x))
      ;; (q/triangle 0 0 y x (-  x y) (- y x))  

      ;; (q/triangle 0 0 (- x) (- y) (-  y x) (- x y))
      ;; (q/triangle 0 0 (- y) (- x) (-  y x) (- x y))
      ;; (q/triangle 0 0 (- x) (- y) (-  x y) (- y x))
      ;; (q/triangle 0 0 (- y) (- x) (-  x y) (- y x))
      ;;(q/save-frame "trianglespin-circles-####.png")

      )))

(q/defsketch trianglespin
  :host "host"
  :size [1200 800]
  :setup setup
  :update update-state
  :draw draw-state
  :renderer :p3d

  :middleware [m/fun-mode])

#_(q/defsketch trianglespin
    :host "host"
    :size [2460 1340]
    :setup setup
    :update update-state
    :draw draw-state
    :renderer :p3d
    :middleware [m/fun-mode])
