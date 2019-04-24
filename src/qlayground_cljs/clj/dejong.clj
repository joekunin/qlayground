

(ns qlayground-cljs.clj.dejong
  (:require
   [quil.core :as q]
   [quil.middleware :as m]
   [thi.ng.geom.core :as g]
   [thi.ng.geom.circle :as c]
   [thi.ng.geom.polygon :as poly]
   [thi.ng.math.core :as tm]
   [qlayground-cljs.clj.helpers :as h]
   [qlayground-cljs.clj.particle :as p])
  (:use
   [random-seed.core :refer :all]
   [clojure.core.matrix]
   [clojure.core.matrix.operators]))


(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)




(defn compute-dejong
  "Computes a single DeJong 2d point vector for given params and XY pos"
  [a b c d [x y]]  
  [(+ (Math/sin (* a y)) (Math/cos (* (* b x) x)))
   (+ (Math/sin (* (* c x) x)) (Math/cos (* d y)))])

(defn dejong-stream []
  (let [a     (tm/random -33 33)
        b     (tm/random -33 33)
        c     (tm/random -33 33)
        d     (tm/random -33 33)] 
    (iterate (partial compute-dejong a b c d) [0 0])))

(defn dejong-points [r w h]
  (let [a     (tm/random -3 3)
        b     (tm/random -3 3)
        c     (tm/random -3 3)
        d     (tm/random -3 3)] 
    (->> (range r)
      (reduce
        (fn [[points [x y]] _]
          (let [pos (compute-dejong a b c d [x y])]
            [(conj points pos) pos]))
        [[] [(tm/random w) (tm/random h)]]))))

(defn state
  []
  (let [w 1600
        h 1000
        n 800000;(rand-int 8000)
        t 0
        opacity 255;;(rand-int 80) 
        points (first (dejong-points n w h))  
        limit 800000]
    {:w w
     :h h
     :n n
     :t t
     :limit limit
     :opacity opacity
     :points points}))

(defn setup
  []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  (q/background 20)
  (state))


(defn update-state
  [{:keys [points limit opacity t w h n] :as state}]
  (let [n n ;;(if (< ^int n limit) (+ 10000 n) n)
        points points ;;  (first (dejong-points n w h))
        ]
    {:w w
     :h h
     :n n
     :t (inc t)
     :limit limit
     :opacity opacity
     :points points}))


(defn- draw-particles-mirrored
  [particles w h t limit opacity]
  (doseq [particle particles]
    (let [position (:position particle)
          x (p/x position)
          y (p/y position)
          z (^long q/sin (+ (q/sq ^long x) (q/sq ^long y)) )]

      ;; (q/stroke (q/mouse-y) (q/mouse-x) (/ (q/mouse-x) (q/mouse-y)))
      ;;(q/stroke (mod t 255) (mod  t 255)  (* 0.5 t) 80)
      (q/stroke-weight 0.5)
      (q/stroke 255)
      ;;      (q/point x y)
      (h/draw-mirror  w h (fn [] (q/point x y))))))




(defn draw-state
  [{:keys [points t w h limit opacity]}]
  (let [hw (/ w 2)
        hh (/ h 2)
        scale (/ w 8)]
    (q/no-fill)
    (q/background 20)
    (q/stroke 0 0 (mod (* 2 t) 255) (mod t 200))

    (q/with-translation [hw hh]
      (doseq [[x y] (take 900000 (dejong-stream))]
        
        (q/point (* scale  x) (* scale  y) (mod t 25) )))))



(defn -main [& args]
  (q/defsketch dejong
    :host "host"
    :size [(:w (state)) (:h (state))]
    :renderer :p3d
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]) args)


;;(-main) 
