(ns qlayground-cljs.clj.vectorfield
  (:require [quil.core :as q]
            [quil.middleware :as m])
  (:use [clojure.core.matrix]
        [clojure.core.matrix.operators])
  (:import processing.core.PVector))

(set-current-implementation :vectorz)

(def V (matrix [1 2]))


(def w 1600)
(def h 600)
(def n 3000)
(def t (atom  0))

(defn particle
  ([]
   (particle 0))
  ([seed]
   {:position (new PVector (rand w) (rand h))
    :velocity (new PVector 0 0)
    :seed seed}   ))


(defn particles [n]
  (loop [particles []
         index     0]
    (if (= index n)
      particles
      (recur (conj particles (particle index)) (inc index)))))


(defn mod-alt [x n]
  (mod (+ n (mod x n)) n))


(defn flow [position]
  (let [x (.x position)
        y (.y position) 
        r (* (q/noise (/ x 100) (/ y 100))
            q/TWO-PI)]
    (PVector/mult (PVector/fromAngle r) 2)))


(defn update-particle [{:keys [position velocity seed] :as particle}]
  (let [pos-x (mod-alt (+ (.x position) (.x velocity)) w)
        pos-y (mod-alt (+ (.y position) (.y velocity)) h)
        position (new PVector pos-x pos-y)

        r  (PVector/fromAngle (* q/TWO-PI (q/noise seed @t)))

        vel-x (.x r)
        vel-y (.y r)
        velocity  (new PVector vel-x vel-y)

        new-velocity (PVector/mult (PVector/add velocity (flow position)) 1.2)]

    {:position position
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
  ;;  (q/stroke 255 0 255 20)
  ;;(q/background 20)
  (swap! t (partial + 0.02) )

  (doseq [particle particles]
    (let [x (.x (:position particle))
          y (.y (:position particle))]
      (q/stroke 280 0 280 20;(* 200 (q/atan x))
        )
      (q/point x y))))



(q/defsketch vectorfield
  :host "host"
  :size [w h]
  :setup setup
  :update update-state
  :draw draw-state
  :renderer :p3d

  :middleware [m/fun-mode])



