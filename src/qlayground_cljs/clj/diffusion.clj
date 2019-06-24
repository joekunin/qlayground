(ns qlayground-cljs.clj.diffusion
  (:require [clojure.core.matrix.operators :refer :all]
            [clojure2d.core :refer :all]
            [fastmath.core :as m]
            [clojure2d.pixels :as p]
            [clojure2d.extra.glitch :as g]
            ;;            [qlayground-cljs.clj.helpers :as h]
            ;;[qlayground-cljs.clj.particle :as p]
            ;;          [quil.core :as q]
            ;;        [quil.middleware :as qm]
            ;;      [random-seed.core :refer :all]
            ;;[thi.ng.geom.circle :as c]
            ;;[thi.ng.geom.core :as g]
            ;;    [clojure.math.numeric-tower :as math]
            ;;[thi.ng.math.macros :as mm]
            [infix.macros])

  (:import
   [java.awt.image BufferedImage BufferStrategy Kernel ConvolveOp])

  #_(:use
     [random-seed.core :refer :all ]
     [clojure.core.matrix :exclude [log transform scale rotate]]
     [clojure.core.matrix.operators]
     ))

(refer 'infix.macros :only '[infix])

;;(set-current-implementation :vectorz)

(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)

(m/use-primitive-operators)

(def DA 1.0)
(def DB 0.5)
(def f 0.055)
(def  k 0.062)

(def kernel  (Kernel. 3 3 (float-array [0.05 0.2 0.05
                                        0.2 -1.0 0.2
                                        0.05 0.2 0.05])))


(defn neighbors [x y]
  (for [dx [-1 0 1]
        dy [-1 0 1]]
    [(+ ^long dx ^long x) (+ ^long dy ^long y)]))


(defn laplacian [pixels x y val] 
  (let [n (neighbors x y)
        colors (map (fn [[px py]] (p/get-value pixels val px py)) n)
        kernel    [0.05 0.2 0.05 0.2 -1.0 0.2 0.05 0.2 0.05]
        lp (reduce clojure.core/+ (map clojure.core/* kernel colors))
        ]
    lp))


(def diffusion-filter
  (fn [p  x  y]
    (let [[ red  a  b  alpha] (p/get-color p x y)
          lap-a  (laplacian p x y 1)
          lap-b  (laplacian p x y 2)
          next-a (infix ^long a + (^long DA * ^long lap-a - (^long a * (^long b * ^long b)) + ^long f * (1 - ^long a)))
          next-b (infix ^long b + (^long DB * ^long lap-b + (^long a * (^long b * ^long b)) - (^long k + ^long f) * ^long b))]
      (clojure2d.color/color red next-a next-b alpha))))

(defn create-init-pixels
  [ ^long w ^long h]
  (let [seed-fn (fn [_]
                  (if (< (^float rand) 0.7)
                    (clojure2d.color/color 255 255 0.1)
                    (clojure2d.color/color 0 0.1 255)))
        pixels  (->> (* w h)
                  range
                  (map seed-fn)
                  flatten
                  int-array)]
    (p/pixels pixels w h)))


(defn calculate-next-pixels [pixels]
  (let [new-pixels (p/filter-colors-xy diffusion-filter pixels)]
    new-pixels))


(defn draw
  "Frames"
  [canvas window frame state]
  (let [t (/ ^int frame 60.0)
        next-pixels (calculate-next-pixels state )]
    (p/set-canvas-pixels! canvas next-pixels)
    next-pixels))

(def window
  (let [w 800
        h 800
        factor 8
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


;;;;; TODO: change pixel ops to edges only, ie, grab pixels, convert to vectorz vector, do all calculations and convert + set back to pixels on final step
