(ns qlayground-cljs.clj.diffusion
  (:require [clojure.core.matrix.operators :refer :all]
            [clojure2d.core :refer :all]
            [fastmath.core :as m]
            [clojure2d.pixels :as p]
            [clojure2d.extra.glitch :as g]
            [qlayground-cljs.clj.helpers :as h]
            ;;[qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as qm]
            [random-seed.core :refer :all]
            ;;[thi.ng.geom.circle :as c]
            ;;[thi.ng.geom.core :as g]
            [clojure.math.numeric-tower :as math]
            ;;[thi.ng.math.macros :as mm]
            [infix.macros])

  (:import
   [java.awt.image BufferedImage BufferStrategy Kernel ConvolveOp])

  (:use
   ;;[random-seed.core :refer :all ]
   [clojure.core.matrix :exclude [log transform scale rotate]]
   [clojure.core.matrix.operators]))

(refer 'infix.macros :only '[infix])

(set-current-implementation :vectorz)


(set! *warn-on-reflection* false)
(set! *unchecked-math* :warn-on-boxed)
(m/use-primitive-operators)

(def kernel  (Kernel. 3 3 (float-array [0.05 0.2 0.05
                                        0.2 -1.0 0.2
                                        0.05 0.2 0.05])))


(defn create-init-pixels
  [ w  h]
  (let [vals (map (fn [_] (if (< (^float rand) 0.5) 0 255))
               (range  (* w h)))]
    (p/pixels (int-array (flatten (pmap clojure2d.color/gray vals))) w h) ))


(defn calculate-next-pixels [pixels]
  (let [pixels (if (< ^float (rand) 0.5)
                 (do (p/filter-channels p/horizontal-blur-1 pixels))
                 (do (p/filter-channels p/vertical-blur-1 pixels)))]
    pixels))


(defn draw
  "Frames"
  [canvas window frame state]
  (let [t (/ ^int frame 60.0)
        next-pixels (calculate-next-pixels state )]

    (p/set-canvas-pixels! canvas next-pixels)
    next-pixels))

(def window
  (let [w 1000
        h 1000
        factor 2
        cnvs (canvas (/ w factor) (/ h factor))
        init-pixels (create-init-pixels (/ w factor ) (/ h factor)) ]
    (show-window
      {:draw-state init-pixels
       :canvas cnvs
       :window-name "diffusion reaction"
       :draw-fn (fn [canvas window frame state]
                  (draw canvas window frame state))
       :w w
       :h h})))

#_(defmethod key-pressed [(:window-name window) \space] [_ _]
    (save cnvs (next-filename "results/ex38/" ".jpg")))

(def constants {:DA 1.0
                :DB 0.5
                :f 0.055
                :k 0.062})

(def DA 1.0)
(def DB 0.5)
(def f 0.055)
(def k 0.062)

(defn- get-matrix-by-key [matrix key]
  (pmap (fn [row] (pmap key row)) matrix))

(defn make-grid
  [width height]
  (coerce :matrix
    (for [x (range width)]
      (for [y (range height)]
        {:a 1
         :b (if (< (rand) 0.2) 1 0)}))))

(defn neighbors [[x y]]
  (for [dx [-1 0 1]
        dy [-1 0 1]]
    [(+ dx x) (+ dy y)]))

(defn laplacian [state [x y] key]
  (let [lp (reduce +
             (* (flatten kernel)
               (map key
                 (map (fn [[px py]] (mget state px py)) (neighbors [x y])))))]
    lp))

(let [start-x (if (zero? x) 0 (dec x))
      start-y (if (zero? y) 0 (dec y))
      length (count state)
      end-x   (cond
                (= x length) 1
                (= x (dec length)) 2
                :else 3)
      end-y   (cond
                (= y length) 1
                (= y (dec length)) 2
                :else 3)
      #_lpl #_(esum
                (* (emap key (coerce matrix (submatrix state [[start-x end-x]
                                                              [start-y end-y]])))
                  kernel))])

(defn next-ab [state [x y] {:keys [a b]}]
  (let [lap-a 1;;(or (laplacian state [x y] :a) 1)
        lap-b 1 ;;(or (laplacian state [x y] :b) 1)
        a-next (infix a + (DA * lap-a - (a * (b * b)) + f * (1 - a)))
        b-next (infix b + (DB * lap-b + (a * (b * b)) - (k + f) * b))]
    {:a  a-next
     :b b-next  ;;(if (or (== b-next ##NaN) (== b-next ##Inf)) (if (< (rand) 0.5) 1 0)  b-next)
     }))

(defn next-state [state]
  (emap-indexed (fn [idx val] (next-ab state idx val)) state))

(take 10 (iterate next-state state))
;;;;;;;;;;;;;;;;;;;;;;


(defn draw-cell
  [x y col]
  (apply q/fill (if (= :alive col) live-color dead-color))
  (q/rect (* scale x) (* scale y) scale scale))

(defn run-life [world-size num-steps set-of-cells]
  (loop [s num-steps
         cells set-of-cells]
    (draw-world cells world-size)
    (when (< 0 s)
      (recur (- s 1) (step cells)))))

#_(defn state
    []
    {:w 300
     :h 300
     :grid (compute-grid 200 *blinker*)})

(defn setup
  []
  (q/frame-rate 20)
  (q/color-mode :hsb)
  (q/background 20)
  state)

(defn update-state
  [state]
  state)

(defn draw-state [state]
  (q/background 20)
  (q/ellipse 20 20 20 20)

  #_(dorun (run-life 20 112 *blinker*)))

(q/d
  efsketch mandala
  :host "host"
  :size [100 200]
  :renderer :p3d
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [qm/fun-mode])

(defn draw
  "Draw frame"
  [canvas window ^long frameno state] ;; callback function accepts canvas, window, frame number and current state
  (let [fc (/ frameno 100.0) ;; scale frame number down
        n (->> fc
            (m/tan)
            (m/qsin)
            (m/abs)
            (+ 0.1)) ;; math function responsible for object shape
        ^double cn (m/cnorm n 0.1 1.0 0.0 20) ;; normalize 
        ew (* n 160.0) ;; width of ellipse
        eh (* (- 1.0 n) 160.0)] ;; height of ellipse

    (-> canvas
      (set-color 45 45 41 20) ;; set color for background
      (rect 0 0 (width canvas) (height canvas)) ;; draw background with alpha, to fake motion blur
      (p/set-canvas-pixels! (->> canvas ;; take canvas
                              p/to-pixels ;; convert to pixels
                              (p/filter-channels p/gaussian-blur-2))) ;; operate on pixels directly - blur three channels (skip alpha)

      (set-color (- 146.0 ew) (- 199.0 cn) (- 163.0 eh)) ;; set color
      (ellipse 100 100 ew eh)))) ;; draw ellipse


(def window
  (let [window (show-window)]
    (with-canvas-> (get-canvas window)

      (set-background :black)
      (point 50 50)
      (point 51 50)
      (point 52 50)
      (point 53 50)
      (point 54 50)
      (point 55 50)
      (line 0 0 199 199))))

(def window (show-window
              {:canvas (canvas 200 200 :mid) ;; create canvas with mid quality
               :window-name "ellipse"             ;; name window
               :w 400 ;; size of window (twice as canvas)
               :h 400
               :hint :mid ;; hint for drawing canvas on window, mid quality (affects scalling 200 -> 400)
               :draw-fn draw})) ;; draw callback funtion

