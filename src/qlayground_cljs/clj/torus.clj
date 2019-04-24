(ns qlayground-cljs.clj.torus
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g]

            [thi.ng.math.simplexnoise :as n]
            [thi.ng.geom.core.vector :refer [vec3]]
            [thi.ng.geom.voxel.svo :as svo]
            [thi.ng.geom.voxel.isosurface :as iso]
            [thi.ng.geom.mesh.io :as mio]
            [thi.ng.math.core :as mt]
            [clojure.java.io :as io]
            [thi.ng.luxor.core :refer :all]
            [thi.ng.luxor.io :as lio]
            )  )


(def res (double 1/2))
(def n-scale 0.1)
(def iso-val 0.1)

(def v
  (let [r (range 1 31 res)]
    (->> (for [x r y r z r
               :when (<= iso-val (mt/abs (n/noise3 (* x n-scale) (* y n-scale) (* z n-scale))))]
           (vec3 x y z))
      (svo/apply-voxels svo/set-at (svo/voxeltree 30 res)))))


(with-open [o (io/output-stream "noise.stl")]
  (mio/write-stl
    (mio/wrapped-output-stream o)
    (g/tessellate (iso/surface-mesh v 10 iso-val))))




;;(def res (double 1/8))
;;(def wall 0.25)

#_(defn gyroid ^double [s t p]
    "Evaluates gyroid function at scaled point `p`."
    (let [[x y z] (g/* p s)]
      (- (mt/abs
           (+ (* (Math/cos x) (Math/sin z))
             (* (Math/cos y) (Math/sin x))
             (* (Math/cos z) (Math/sin y))))
        t)))

#_(defn voxel-box
    ([tree op flt r]
     (voxel-box tree op flt r r r))
    ([tree op flt rx ry rz]
     (->> (for [x rx y ry, z rz] (vec3 x y z))
       (filter flt)
       (svo/apply-voxels op tree))))



#_(def v
    (reduce
      (fn [tree [op r]] (voxel-box tree op identity r))
      (svo/voxeltree 32 res)
      [[svo/set-at (range 10 20 res)] [svo/set-at (range 15 25 res)]]))


#_(with-open [o (io/output-stream "voxel.stl")]
    (mio/write-stl
      (mio/wrapped-output-stream o)
      (g/tessellate (iso/surface-mesh v 11 0.5))))

(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)

(defn torus [c a steps]
  (for [u (range 0 360 steps)
        v (range 0 360 steps)]
    (let [
          x (* (+ c (* a (q/cos v)))
              (q/cos u))
          y (* (+ c (* a (q/cos v)))
              (q/sin u))
          z (* a (q/sin v))]
      [x y z])))

#_(defn draw-reflected-torus [points]
    (doseq [[x y z] points]
      (q/point x y z)
      (q/scale -1 1)
      (q/point x y z)))

#_(defn torus-point
    [inner-r outer-r [x y z u v]]
    (let [x (* (q/cos u)
              (* (+ inner-r outer-r)
                (q/cos v)))

          y (* (q/cos u)
              (* (+ inner-r outer-r)
                (q/sin v)))

          z (* inner-r (q/sin v)) ]
      [x y z (mod (+ u 0.1) q/TWO-PI) (mod (+ v 0.1) q/TWO-PI)]))

#_(defn torus-stream
    [inner-r outer-r]
    (iterate (partial torus-point inner-r outer-r ) [0 0 0 0 0]))

#_(defn torus [numc numt numk scale]
    (for [i (range numc)
          k (range numk)
          j (range numt)
          :let [s (+ 0.5 (mod (+ 1 k) numc))
                t (mod j numt)
                x (* scale (q/cos (* s (/ q/TWO-PI numc )))
                    (q/cos (* t (/ q/TWO-PI numt))))
                y (*  scale (q/cos (* s (/ q/TWO-PI numc )))
                    (q/sin (* t (/ q/TWO-PI numt))))
                z (* scale 0.1 (q/sin (* s (/ q/TWO-PI numc))))]]
      [x y z]))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def state   {:b 5 :theta 0.0 :i 0 :x 4 :y 4})

(defn setup []
  ;;(q/frame-rate 60)
  ;;(q/color-mode :hsb)
  ;;(q/background 33)
  ;;(torus 100 600 10)
  state  )

(defn update-state [{:keys [b theta i x y]}]
  (let [a (+ 15 (* i 5))
        n-theta (if (< theta 6.234) 0.0 (+ 0.01 theta))]
    {:b b
     :theta n-theta
     :i (if (< n-theta 6.243) (+ i 1) i)
     :x (+ (* (- a b) (q/cos n-theta))
          (* b (q/cos (* (/ (- a b) b) n-theta))))
     :y (+ (* (- a b) (q/sin n-theta))
          (* b (q/sin (* (/ (- a b) b) n-theta))))}))


(defn draw-state [{:keys [b theta i x y]}]
  ;;(q/background 33)
  ;;(q/stroke-weight 1)
  (q/stroke 0)
  (q/with-translation [(/ (q/width) 2)
                       (/ (q/height) 2)]
    
    (q/point x y)
    #_(doseq [point (torus 100 100 100)]
        (let [[x y z] point]
          (q/point x y)))))

(q/defsketch torus
  :host "host"
  :size [1200 1200]
  :setup setup
  :renderer :p3d
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])

