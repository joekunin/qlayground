(ns qlayground-cljs.clj.vectorfield
  (:require [quil.core :as q]
            [quil.middleware :as m])
  (:use [clojure.core.matrix]
        [clojure.core.matrix.operators])
  (:import processing.core.PVector))

(set-current-implementation :vectorz)

(def w 1600)
(def h 1200)
(def n 8500)
(def t (atom  0))

(defn x [attribute]
  (first attribute))

(defn y [attribute]
  (last attribute))

(defn particle
  ([]
   (particle 0))
  ([seed]
   {:position (array [(rand w) (rand h)])
    :velocity (array [0 0])
    :seed seed}   ))


(defn particles [n]
  (loop [particles []
         index     0]
    (if (= index n)
      particles
      (recur (conj particles (particle index)) (inc index)))))


(defn mod-alt [x n]
  (mod (+ n (mod x n)) n))

(defn vec-from-angle [angle]
  (array [(q/cos angle) (q/sin angle)])  )


(defn flow [position]
  (let [r (*(q/noise (/ (x position) 100) (/ (y position) 100))
            q/TWO-PI)]
    (mul (vec-from-angle r) 28)))


(defn update-particle [{:keys [position velocity seed] :as particle}]
  (let [px (x position)
        py (y position)
        vx (x velocity)
        vy (y velocity)

        angle (* q/TWO-PI (q/noise seed @t))

        new-px (mod-alt (+ px vx) w)
        new-py (mod-alt (+ py vy) h)

        new-position (array [new-px new-py])
        velocity (vec-from-angle angle)

        new-velocity (mul
                       (add velocity (flow position))
                       1.2)]

    {:position new-position
     :velocity new-velocity
     :seed seed}))

(def state
  {:particles (particles n)})


(defn setup []
  (q/frame-rate 60) 
  (q/color-mode :hsb)
  (q/background 20)
  state
  )

(defn update-state [{:keys [particles]}]
  (let [updated-particles (map update-particle particles)] 
    {:particles updated-particles}))


(defn draw-state [{:keys [particles]}] 
  (q/no-fill)
  ;;(q/stroke 255 0 255 20)
  ;;(q/background 20)
  (swap! t (partial + 0.02) )

  (doseq [particle particles]
    (let [position (:position particle)
          x (x position)
          y (y position)]
      ;;(q/save-frame "field/fieldmirrorcolor-####.png")
      #_(q/stroke 280 0  250  25;;(* 12 (q/atan x))
          )
      (q/stroke (mod x y) (mod x y) (mod x y) 20)
      (q/point x y)

      (q/push-matrix)
      (q/translate 0 h)
      (q/scale (- 1) 1)
      (q/point x y)
      (q/pop-matrix)

      (q/push-matrix)
      (q/translate w 0)
      (q/scale (- 1) 1)
      (q/point x y)
      (q/pop-matrix)

      
      (q/push-matrix)
      (q/translate 0 h)
      (q/scale  1 (- 1))
      (q/point x y)
      (q/pop-matrix)

      (q/push-matrix)
      (q/translate w h)
      (q/scale (- 1) (- 1 ))
      (q/point x y)
      (q/pop-matrix)
      
      )))



(q/defsketch vectorfield
  :host "host"
  :size [w h]
  :setup setup
  :update update-state
  :draw draw-state
  :renderer :p3d

  :middleware [m/fun-mode])



