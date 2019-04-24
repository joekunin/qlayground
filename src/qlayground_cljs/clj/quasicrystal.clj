(ns qlayground-cljs.clj.quasicrystal
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g])  )


(def state {:wave-count      7
            :wave-freq       0.4
            :wave-offset-inc 0.01
            :wave-offset     0.0})

(defn wave
  "Returns waveform, the cos of all the y-values rotated by theta and moved
  foreward by phase"
  [theta x y phase]
  (let [cth (Math/cos theta)
        sth (Math/sin theta)]
    (+ (/ (+ (Math/cos (+ (* cth x) (* sth y) phase)) 1) 2) 0)))

(defn angles 
  "returns a list of n angles between 0 and PI"
  [n]
  (for [m (range n)]
    (* m (/ Math/PI n))))

(defn combine
  "combines a list of values, and wraps the result between 0 and 1"
  [wavs]
  (let [ws (reduce + wavs)]
    (if (odd? (int ws))
      (- 1 (mod ws 1))
      (mod ws 1))))

(defn crystal
  "returns a vector in the form [x y shade] where shade is the value(color) at x,y"
  [max-x max-y phase order]
  (for [x (range max-x)
        y (range max-y)]
    [x y (combine
           (map (fn [th] (wave th x y phase))
             (angles order)))]))


(defn draw-crystal
  "Draws the crystal qc to the graphics gfx. Scale is the zoom level
  r, g, and b are the color offsets, so a r-value of 10 means that the
  r component of the color is the shade + 10, modulus 255"
  [wave scale r g b]
  (doseq [[x y shade] wave]
    (let [clamp (fn [x mn mx] (min (max x mn) mx))
          color (int (Math/floor (* 255 (clamp shade 0 1))))]
      (q/fill 
        (Math/abs (- color r))
        (Math/abs (- color g))
        (Math/abs (- color b)))
      (q/rect (* x scale) (* y scale) 4 4))))


(defn draw-crystals
  [{:keys [scale order width height frames r g b]
    :or {scale 1 order 7 width 200 height 200
         frames 25 r 0 g 0 b 0}}]
  (doseq [[p c]
          (for [m (range frames)]
            [(float (* (/ (* 2 Math/PI) frames) m)) m])]

    (draw-crystal
      (crystal (* width scale)
        (* height scale) p order) scale r g b)))


(defn setup []
  (q/frame-rate 15)
  (q/color-mode :rgb)
  (q/background 255)

  state)

(defn update-state [state;{:keys [wave-count wave-freq wave-offset-inc wave]}
                    ]
  state)

(defn draw-state [state]  
  ;;  (q/with-translation [500 500])
  (draw-crystals  {:scale 1 :order 7 :width 100 :height 100 :frames 25 :r 0 :g 0 :b 0}))


(q/defsketch quasicrystal
  :host "host"
  :size [500 500]
  :setup setup
  :renderer :p3d
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])

