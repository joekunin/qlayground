

(ns qlayground-cljs.clj.quasiimg 
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g])
  (:use
   [random-seed.core :refer :all]
   [clojure.core.matrix]
   [clojure.core.matrix.operators]))

(set-current-implementation :vectorz)


(import java.awt.image.BufferedImage)
(import javax.imageio.ImageIO)
(import java.io.File)


(defn wave
  "Returns waveform, the cos of all the y-values rotated by theta and moved
  foreward by phase"
  [theta x y phase]

  (let [cth (Math/cos theta)
        sth (Math/sin theta)]
    (+ (/ (+ (Math/cos (+ (* cth x) (* sth y) phase)) 1) 2) 0)))

(defn angles
  "Returns a list of n angles between 0 and PI"
  [n]
  (matrix
    (for [m (range n)]
      (* m (/ Math/PI n)))))

(defn combine
  "Combines a list of values, and wraps the result between 1 and 0"
  [wavs]
  (let [ws (reduce + wavs)]
    (if (odd? (int ws))
      (- 1 (mod ws 1))
      (mod ws 1))))


#_(defn grid [max-x max-y]
    (for [x (range max-x)
          y (range max-y)]
      [x y 0]))

#_(def window (memoize grid))

#_(defn crystal-from-grid [max-x max-y phase order]
    (let [grid (window max-x max-y)
          angles (angles order)
          waves (pmap (fn [th] (wave th x y)) angles )])
    )

(defn crystal
  "Returns a vector in the form [x y shade] where shade is the value
  (color) at x and y"
  [max-x max-y phase order]

  (matrix
    (for [x (matrix (range max-x))
          y (matrix (range max-y))
          :let [waves (matrix (pmap (fn [th] (wave th x y phase))
                                (angles order)))
                colors (combine waves)]]
      (matrix [x y colors]))))

(defn init-image
  "Returns a tuple of a java.awt.image.BufferedImage,
  and its java.awt.Graphics2D"
  [w h]
  (let [bi (BufferedImage. w h BufferedImage/TYPE_INT_RGB)
        gfx (.createGraphics bi)]
    [bi gfx]))

(defn draw-crystals
  "Draws the crystal qc to the graphics gfx. Scale is the zoom level
  r, g, and b are the color offsets, so a r-value of 10 means that the
  r component of the color is the shade + 10, modulus 255"
  [wave scale gfx  r g b]
  (doseq [wave wave]
    (let [x (mget wave 0)
          y (mget wave 1)
          shade (mget wave 2)
          clamp (fn [x mn mx] (min (max x mn) mx))
          color  (int (Math/floor (* 255 (clamp shade 0 1))))]

      (.setColor gfx  (java.awt.Color. (Math/abs (- color r))
                        (Math/abs (- color g))
                        (Math/abs (- color b))))
      (.fillRect gfx (* x scale) (* y scale) 4 4)
      )))

(defn write-image
  "Writes a image on the imagebuffer bi to the path name"
  [bi name]
  (ImageIO/write bi "png"  (File. (str name "-crystal.png"))))

(defn write-images
  "Writes f frames of animation, that can be looped, to dir. This is the
  main function in this program, all of the parameters you should need"
  [& {:keys [scale order width height frames path r g b]
      :or {scale 1 order 7 width 200 height 200
           frames 25 path ""
           r 0 g 0 b 0}}]

  (let [[bi gfx] (init-image width height)]
    (doseq [[p c]
            (for [m (range frames)]
              [(float (* (/ (* 2 Math/PI) frames) m)) m])]
      (draw-crystals
        (crystal (* width scale)
          (* height scale) c order) scale gfx r g b)
      (write-image bi (str path p))
      (println (str "Wrote image " c))
      )))


#_(let [scale  1
        order  7
        width  1400
        height 1400
        frames 30
        path   ""
        r      0;59
        g      0;134
        b      0;134
        ]
    (write-images :scale scale :order order :width width
      :height height :frames frames :path path :r r :g g :b b))


(defn -main [& args]
  (let [scale  1
        order  7
        width  1400
        height 1400
        frames 300
        path   ""
        r      0;59
        g      0;134
        b      0;134
        ]
    (write-images :scale scale :order order :width width
      :height height :frames frames :path path :r r :g g :b b))  )

;;(-main)
(def width 100)
(def height 100)



;;(def frames 10)
;;(def order 7)

(defn setup []
  (q/frame-rate 1)
  (q/color-mode :rgb)

  {})

(defn update-state [state]
  state)

(defn draw-state [state]
  (let [scale  1
        order  7
        frames 30
        ;;path   ""
        ;;r      0;59
        ;;g      0;134
        ;;b      0;134
        ]
    ;;(draw-crystals)
    (q/background 255 255 255)
    (doseq [crystal (crystal (* width scale)
                      (* height scale) (q/frame-count)  order)]
      (let [x (mget crystal 0)
            y (mget crystal 1)
            color (mget crystal 2)
            clamp (fn [x mn mx] (min (max x mn) mx))
            c  (int (Math/floor (* 255 (clamp color 0 1))))]
        (q/fill c c c )
        (q/stroke c c c)
        (q/point x y)))


                                        ;scale r g b
    )
  #_(let [p (float (* (/ q/TWO-PI frames) (q/frame-count)))
          crystal (crystal width height p order)]
      (doseq [[x y c] crystal]
        (q/fill c c c)
        (q/point x y))))




(q/defsketch quasicrystal
  :host "host"
  :size [width height]
  :setup setup
  :renderer :p3d
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])


;;(-main)

