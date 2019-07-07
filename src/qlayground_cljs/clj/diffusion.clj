(ns qlayground-cljs.clj.diffusion
  (:require;; [clojure.core.matrix.operators :refer :all]
   [clojure2d.core :refer :all]
   [fastmath.core :as m]
   [clojure2d.pixels :as p]
   [clojure2d.extra.glitch :as g]
   [clojure2d.color :as c]
   [infix.macros]

   ;;[quil.core :as q]
   ;;[quil.middleware :as qm]
   ;;[thi.ng.geom.circle :as c]
   ;;[thi.ng.geom.core :as g]
   ;;[clojure.math.numeric-tower :as math]
   ;;[thi.ng.math.macros :as mm]
   )

  #_(:import
     ;;[java.awt.image BufferedImage BufferStrategy Kernel ConvolveOp]
     )

  #_(:use
     [random-seed.core :refer :all]
     [clojure.core.matrix :exclude [log transform scale rotate]]
     [clojure.core.matrix.operators]))

(refer 'infix.macros :only '[infix])

;;(set-current-implementation :vectorz)

(set! *warn-on-reflection* true)
(set! *unchecked-math* "warn-on-boxed")


;;(m/use-primitive-operators)

(defn neighbors [x y]
  (for [dx [-1 0 1]
        dy [-1 0 1]]
    [(+ ^long dx ^long x) (+ ^long dy ^long y)]))

(defn seed-fn [_] 
  (if (< (^float rand) 0.798)
    (c/from-HSV* [200 200 1]) 
    (c/from-HSV* [200 200 1]) ))

(defn create-init-pixels
  [^long w ^long h]
  (let [
        pixels  (->> (* w h)
                  range
                  (map seed-fn)
                  flatten
                  int-array)]
    (p/pixels pixels w h)))


(defn laplacian [pixels x y val kernel]
  (let [n (neighbors x y)
        colors (map (fn [[px py]] (p/get-value pixels val px py)) n)
        lp (fastmath.vector/sum (fastmath.vector/emult kernel colors))]
    lp))

(def diffusion-filter
  (fn [t p x y]
    (let [[red ^long a ^long b alpha]  (p/get-color p x y)

          kernel    [0.05 0.2 0.05
                     0.2  -1   0.2
                     0.05 0.2 0.05]

          diffusion-a 0.0002
          diffusion-b 0.0610  ;;(* 0.8 t)
          ;; 0.0340, k 0.0610  
          feed 0.0420
          death  (* t 0.00630)

          ^long lap-a  (laplacian p x y 1 kernel)
          ^long lap-b  (laplacian p x y 2 kernel)

          a-1 (infix  a + (diffusion-a * lap-a -  a * (m/sq b) +  feed * (1 -  a))) ;
          b-1 (infix  b + (diffusion-b * lap-b + a *  (m/sq b) - (death + feed) *  b))]

      ;;(clojure2d.color/gray a-1)eby
      ;;(clojure2d.color/from-HSV [b-1 209  (* 4 a-1)])
      (clojure2d.color/from-HSV* [b-1 255  a-1]))))


(defn calculate-next-pixels [pixels t]
  (let [new-pixels (->> pixels
                     (p/filter-colors-xy (partial  diffusion-filter t) )
                     #_(p/filter-channels
                         nil
                         (clojure2d.extra.glitch/fold
                           (clojure2d.extra.glitch/fold-random-config))
                         nil
                         #_(clojure2d.extra.glitch/fold
                             (clojure2d.extra.glitch/fold-random-config))
                         #_(clojure2d.extra.glitch/fold
                             (clojure2d.extra.glitch/fold-random-config))
                         nil))]
    new-pixels))

(defn draw
  "Frames"
  [canvas window frame state]
  (let [t (/ ^int frame 60.0)
        reset 150
        next-pixels     (if (= 0 (mod ^int frame reset)) 
                          (create-init-pixels (width canvas) (height canvas))
                          (calculate-next-pixels state frame))]

    (p/set-canvas-pixels! canvas next-pixels)
    next-pixels))

(def window
  (let [w 600
        h 600
        factor 6
        cnvs (canvas (/ w factor) (/ h factor))
        init-pixels (create-init-pixels (/ w factor) (/ h factor))]
    (show-window
      {:draw-state init-pixels
       :canvas cnvs
       :window-name "diffusion reaction"
       :draw-fn (fn [canvas window frame state]
                  (draw canvas window frame state))
       :fps 60
       :w w
       :h h})))


#_(defmethod mouse-event ["diffusion reaction" :mouse-clicked] [event state]
    (let [[x y] (mouse-pos event)
          color (clojure2d.color/color 255 20 0)
          pixels (p/to-pixels window)]
      (p/set-color pixels x y color)

      state))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;()


#_(defn setup
    []
    (q/frame-rate 20)
    (q/color-mode :hsb)
    (q/background 20)
    [100 100])


#_(defn update-state
    [state]
    state)

#_(defn draw-state
    [[x y]]
    (let [pixels (q/pixels)
          ]
      (q/ellipse x y 10 10)))



#_(q/defsketch diffusion
    :renderer :java2d
    :size [900 900]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [qm/fun-mode])


