(ns qlayground-cljs.clj.mandala
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g]
            [clojure.pprint :refer :all]))


(def live-color [242 233 99])
(def dead-color [64 37 27])

(def *blinker* #{[1 2] [2 2] [3 2]})
(def *glider* #{[1 0] [2 1] [0 2] [1 2] [2 2]})
(def scale 100)

(defn neighbors [[x y]]
  (for [dx [-1 0 1]
        dy (if (zero? dx) [-1 1] [-1 0 1])]
    [(+ dx x) (+ dy y)]))


(defn step [cells]
  (set
    (for [[loc n] (frequencies (mapcat neighbors cells))
          ;;:when (> 5 n)
          :when (or (= n 3) (and (= n 2) (cells loc)))
          ]
      loc)))



(defn compute-grid [world-size set-of-cells]
  (let [r (range 0 (+ 1 world-size))]
    (for [y r]
      (for [x r]
        (if (set-of-cells [x y])
          :alive
          :dead)))))



(defn draw-cell
  [x y col]
  (apply q/fill (if (= :alive col) live-color dead-color))
  (q/rect (* scale x) (* scale y) scale scale))

(defn draw-row
  [y row]
  (dorun (map-indexed (fn [x col] (draw-cell x y col)) row)))

(defn draw-world
  ([set-of-cells] (draw-world set-of-cells 10))
  ([set-of-cells world-size] 
   (dorun (map-indexed draw-row (compute-grid world-size set-of-cells)))))


(defn run-life [world-size num-steps set-of-cells]
  (loop [s num-steps
         cells set-of-cells]
    (draw-world cells world-size)
    (when (< 0 s)
      (recur (- s 1) (step cells)))))



#_(defn initial-world
    [rows columns]
    (set
      (for [x (range rows)
            y (range columns)]
        [x y])    ))


#_(defn create-world
    "Creates rectangular world with the specified width and height.
  Optionally takes coordinates of living cells."
    [w h & living-cells]
    (vec (for [y (range w)]
           (vec (for [x (range h)]
                  (if (contains? (first living-cells) [y x]) 1 0))))))

#_(defn ants []
    (let [bounds (set (range 1000))
          xs [1 0 -1 0]
          ys [0 -1 0 1]]
      (loop [dir 0
             x 50
             y 50
             grid {[x y] false}]
        (if (and (bounds x) (bounds y))
          (let [cur (not (grid [x y]))
                dir (mod (+ dir (if cur -1 1)) 4)]
            (recur dir (+ x (xs dir)) (+ y (ys dir))
              (merge grid {[x y] cur})))
          (doseq [col (range 100)]
            (println
              (apply str
                (map #(if (grid [% col]) \# \.)
                  (range 100)))))))))



(defn state
  []
  {:w 300
   :h 300 
   :grid (compute-grid 200 *blinker*) })

(defn setup
  []
  (q/frame-rate 20)
  (q/color-mode :hsb)
  (q/background 20)
  (state))


(defn update-state
  [state]
  state)

(defn draw-state [state]
  (q/background 20)
  (dorun (run-life 20 112 *blinker*)))

(q/defsketch mandala
  :host "host"
  :size [(:w (state)) (:h (state))]
  :renderer :p3d
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
