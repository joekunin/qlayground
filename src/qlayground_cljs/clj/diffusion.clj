(ns qlayground-cljs.clj.diffusion
  (:require [clojure.core.matrix.operators :refer :all]
            [clojure2d.core :refer :all]
            [fastmath.core :as m]
            [clojure2d.pixels :as p]
            [qlayground-cljs.clj.helpers :as h]
            ;;[qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as qm]
            [random-seed.core :refer :all]
            ;;[thi.ng.geom.circle :as c]
            ;;[thi.ng.geom.core :as g]
            [clojure.math.numeric-tower :as math]
            [infix.macros]
            ;;[thi.ng.math.macros :as mm]
            )
  #_ (:use
      [random-seed.core :refer :all]
      [clojure.core.matrix]
      [clojure.core.matrix.operators]))

(refer 'infix.macros :only '[infix])
(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)
(m/use-primitive-operators)

(set-current-implementation :vectorz)



(def cnvs (canvas 600 600 :mid))

(defn draw-rings
  "Draw rings"
  [canvas posx posy]
  (dotimes [x 17]
    (let [size (* (inc x) 80)]
      (ellipse canvas posx posy size size true)))
  canvas)

(defn draw
  "Frames"
  [canvas _ ^long fps _]
  (let [t (/ fps 60.0) 
        sa (m/norm (m/qsin (* 0.5 t)) -1.0 1.0 100 500)
        ca (m/norm (m/qcos t) -1.0 1.0 100 500)
        sb (m/norm (m/qsin (inc t)) -1.0 1.0 100 500)
        cb (m/norm (m/qcos (* 2.0 (dec t))) -1.0 1.0 200 500)]
    (-> canvas
      (set-background :black)
      (set-color :white)
      (xor-mode :black)
      (set-stroke 20)
      (draw-rings sb cb)
      (draw-rings sa ca))))

(def window (show-window cnvs "Oldschool XOR" #(draw %1 %2 %3 %4)))

(defmethod key-pressed [(:window-name window) \space] [_ _]
  (save cnvs (next-filename "results/ex38/" ".jpg")))














(def constants {:DA 1.0
                :DB 0.5
                :f 0.055
                :k 0.062})

(def DA 1.0)
(def DB 0.5)
(def f 0.055)
(def k 0.062)

(def kernel [[0.05 0.2 0.05]
             [0.2 -1.0 0.2]
             [0.05 0.2 0.05]])

(defn- get-matrix-by-key [matrix key]
  (pmap (fn [row] (pmap key row)) matrix))



(let [size 50
      gr (q/create-graphics size size :p2d)]
                                        ; draw red circle on the graphics
  (q/with-graphics gr
    (q/background 255)
    (q/fill 255 0 0)
    (q/ellipse (/ size 2) (/ size 2) (* size (/ 2 3)) (* size (/ 2 3))))
                                        ; draw original graphics
  (q/image gr 0 0)
                                        ; get pixels of the graphics and copy
                                        ; the first half of all pixels to the second half
  (let [px (q/pixels gr)
        half (/ (* size size) 2)]
    (dotimes [i half] (aset-int px (+ i half) (aget px i))))
  (q/update-pixels gr)
  (q/image gr (+ size 20) 0)
                                        ; get pixels of the sketch itself and copy
                                        ; the first half of all pixels to the second half
  (let [px (q/pixels)
        half (/ (* (q/width) (q/height)) 10)]
    (dotimes [i half] (aset-int px (+ i half) (aget px i))))
  (q/update-pixels))




(defn make-grid
  [width height]
  (coerce :matrix
    (for [x (range width)]
      (for [y (range height)]
        {:a 1
         :b (if (< (rand) 0.5) 1 0)}))))

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

(def kernel (double-array [0 1 1 2 3 3 0 0 0 0 0 0]))
(def data (double-array [1 5 7 4 8 3 9 5 6 3 2 1 1 7 4 9 3 2 1 8 6 4]))

(defn convolve [^doubles kernel-array ^doubles data-array]
  (let [ks (count kernel-array)
        ds (count data-array)
        output (double-array (+ ks ds))
        factor (/ 1.0 (areduce kernel-array i ret 0.0 (+ ret (aget kernel-array i))))]
    (dotimes [i (int ds)]
      (dotimes [j (int ks)]
        (let [offset (int (+ i j))]
          (aset output offset (+ (aget output offset) (* factor (* (aget data-array i) (aget kernel-array j))))))))
    output))

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

(iterate next-state state)
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

(q/defsketch mandala
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
      (ellipse 100 100 ew eh)
      ))) ;; draw ellipse


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

