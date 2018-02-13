
(ns qlayground-cljs.lorenzclj
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  ;;{:x 1.1 :y 2.1 :z 1.3}
  [[2 1 4]]
  )

(defn update-state [state]
  (let [;;{:keys [x y z]} (last state)
        [x y z] (last  state)
        sigma 10
        rho 28
        beta (/ 8 3)
        dt 0.01
        dx  (* (- sigma) (- x y))
        dy  (- (+ (- (* rho x) (* x z))) y)
        dz  (- (* x y) (* beta z))
        ]

    [(+ (* dt dx) x)
     (+ (* dx dy) y)
     (+ (* dx dz) z)]
    ))



(defn draw-state [state]
  ;;(q/background 0)
  (q/stroke 0)
  (let [[x y z] (last state)]
    (q/point x y z)))


#_(q/defsketch lorenzclj
  ;;:host "host"
  :size [300 300]
  :setup setup
  :renderer :p3d
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])


