(ns qlayground-cljs.lorenz
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


(def state [[0.1 0.1 0.1]])

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  state)

(defn update-state [state]
  (let [[x y z] (last state)
        sigma 10
        rho 28
        beta (/ 8 3)
        dt 0.01
        dx (* dt (* sigma (- y x)))
        dy (* dt (- (* x (- rho z) y)))
        dz (* dt (- (* x y) (* beta z)))
        ]
    (conj state [(+ dx x) (+ dy y) (+ dz z)])))

(defn draw-state [state]
  (let [[x y z] (last state)]
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (q/stroke 100)
      (q/scale 5)
      (q/point x y z)
      )))

#_(q/defsketch my
  :host "host"
  :size [500 500]
  :setup setup
  :renderer :p3d
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
