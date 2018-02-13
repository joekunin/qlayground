(ns qlayground-cljs.clj.carpet
  (:import (java.awt image.BufferedImage Color))
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [mikera.image.core :as image]
            [mikera.image.filters :as filt]
            [mikera.image.colours :as color]
            [clojure.java.io :as jio]
            [clojure.math.numeric-tower :as math]))

#_(comment (def carpet (atom []))
           (def pixels (int-array (flatten @carpet)))
           (def image (image/new-image 100 100))
           (def sq-size 5)
           (defn read-carpet
             "Get the current value from the given board position."
             [x y]
             (get-in @carpet [y x]))
           (defn draw-cell
             [ctx x y]
             (let [color (get-cell-color (read-board x y))
                   left (* sq-size x)
                   top  (* sq-size y)]
               (aset ctx "fillStyle" color)
               (.fillRect ctx left top sq-size sq-size)))
           (apply concat (map (fn [row] (map rule row)) @carpet)))
#_(defn evolve-row [ row]
    (map rule row))
#_(def rule {0  [1 1 1
                 1 1 1
                 1 1 1]
             1 [0 1 0
                1 0 1
                0 1 0]})
#_(def color-map {})
#_(defn evolve [carpet rule] )
#_(defn draw-carpet [state]
    )
#_(defn draw []
    (let [h (count (map vec (carpet 3)))
          w (count (nth (map vec (carpet 3)) 0))
          img (image/new-image w h)
          carpet-rows (map vec (carpet 3))
          plots (for [x (range 0 w)
                      y (range 0 x)]
                  (if (= 1 (get
                             (get carpet-rows x) y))
                    [x y]))
          gfx (.getGraphics img)]
      (.setColor gfx Color/WHITE)
      (.fillRect gfx 0 0 w h)
      (.setColor gfx Color/BLACK)
      (doseq [p (filter (comp not nil?) plots)]
        (.drawLine gfx
          (get p 0)
          (get p 1)
          (get p 0)
          (get p 1)))
      (image/show img :zoom 1 )))
#_(defn render-carpet [carpet]
    (let [h (count carpet)
          w (count (nth carpet 0))
          image (image/new-image w h)
          pixels (int-array (flatten carpet))]      
      (q/lights)
      (q/fill 150 100 150)(image/set-pixels image pixels)
      (image/show
        (q/lights)
        (q/fill 150 100 150) image :zoom 1 )))



(def neighbor-deltas [[-1 -1] [0 -1] [1 -1]
                      [-1 0]        [1 0]
                      [-1 1] [0 1] [1 1]])

(defn neighbors [collision-map [y x]]
  (let [candidates (map #(mapv + %1 %2)
                     (repeat [y x])
                     neighbor-deltas)]
    (remove
      #(= 0 (get-in collision-map % 0))
      candidates)))



(defn in-carpet? [x y]
  (loop [x x, y y]
    (cond
      (or (zero? x) (zero? y))              true
      (and (= 1 (mod x 3)) (= 1 (mod y 3))) false
      :else                                 (recur (quot x 3) (quot y 3)))))

(defn carpet [n]
  (into []
    (map vec
      (for [x (range (clojure.math.numeric-tower/expt 3 n))]
        (for [y (range (clojure.math.numeric-tower/expt 3 n))]
          (if (in-carpet? x y) 1 0))))))


(def init-state
  (let [carpet (carpet 4)
        pixels (for [ x (range (count carpet))
                     y (range (count carpet))
                     ;;z (range (count carpet))
                     ]
                 [x y])
        spacer 5]
    {:spacer spacer
     :pixels pixels
     :carpet carpet}))

(defn setup []
  (q/background 0)
  (q/frame-rate 30)
  init-state)


(defn update-state [state]
  state
  )


(defn mouse-clicked [state event]
  (q/save (str "carpet-" (quot (System/currentTimeMillis) 1000)) )
  state)

(defn draw-state [{:keys [carpet spacer pixels]}]
  (let [background 0
        stroke 255
        translate 200
        alpha 200
        scale 1.0]
    (q/scale scale)

    ;;(q/background 0)
    (q/translate (mod (q/frame-count) 400)(mod (q/frame-count) 400))
    (q/with-translation [translate translate]
      (doseq [[x y] pixels]
        (if (zero? (get-in carpet [x y]))
          (q/no-stroke)
          (q/stroke 255 stroke stroke alpha))
        (q/point x y)
        ;;(q/translate (mod x 150)(mod x 150)(mod x 150))
        (q/rotate-x (q/radians x)) 
        (q/rotate-z (q/radians (q/frame-count)))
        (q/shear-x (q/cos q/TWO-PI))
        )))

  ;; (q/save-frame "carpet-swirl-2/carpet-swirl-2-gif-#####.png")
  )


(q/defsketch carpet-fractal
  :size [800 800
         ;;(* scale (count (:carpet init-state)))
         ;;(* scale (count (:carpet init-state)))
         ]
  :setup setup
  :update update-state
  :draw draw-state
  :mouse-clicked mouse-clicked
  :renderer :p3d
  :middleware [m/fun-mode
               ;;  m/navigation-3d
               m/pause-on-error
               ])



