(ns qlayground-cljs.clj.mandelbrot
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [mikera.image.core :as image])
  (:use
   [random-seed.core :refer :all]
   [clojure.core.matrix]
   [clojure.core.matrix.operators]))


;; Complex Math

(deftype complex [^double real ^double imaginary])

(defn plus [^complex z1 ^complex z2]
  (let [x1 (.real z1)
        y1 (.imaginary z1)
        x2 (.real z2)
        y2 (.imaginary z2)]
    (complex. (+ x1 x2) (+ y1 y2))))

(defn times [^complex z1 ^complex z2]
  (let [x1 (.real z1)
        y1 (.imag z1)
        x2 (.real z2)
        y2 (.imag z2)]
    (complex. (- (* x1 x2) (* y1 y2)) (+ (* x1 y2) (* y1 x2)))))

(defn abs-square [^complex z]
  (+ (* (.real z) (.real z))
    (* (.imag z) (.imag z))))

;; Mandlebrot
(def viewwidth 0.0000001)

(def centerx 0.2694911)

(def centery -0.004556107)

(defn mandel [^complex c]
  (let [end 1000]
    (loop [z (complex. 0 0)
           n 0]
      (if (< n end)
        (if (> (abs-square z) 4.0)
          (/ n end)
          (recur (plus (times z z) c)
            (+ n 1)))
        (double -1.0)))))

(defrecord point [^double x ^double y])

(defn draw []
  (let [^ints image (q/pixels)
        width (q/width)
        height (q/height)
        left (- centerx (/ viewwidth 2))
        top (+ centery (/ viewwidth 2))
        mandel-color (fn [^point p]
                       (let [x (.x p)
                             y (.y p)
                             index (+ x (* y width))
                             xc (double (+ (* (/ x width)  viewwidth) left))
                             yc (double (- (* (/ y height) viewwidth) top))
                             m (mandel (complex. xc yc )) ]
                         (if (< m 0)
                           [index (q/color 0 0 0)]
                           [index (q/color (* m 255) (* m 128) 200)])))
        set-color (fn [[i c]] (aset image ^int i ^int c))]
    (time
      (->> (for [y (range height) x (range width) ] (point. x y))
        (partition 8)
        (pmap #(->> %
                 (map mandel-color)
                 (map set-color)
                 (doall)))
        (doall)))
    (println "drew")
    (q/update-pixels)))

(defn setup [])

#_(q/defsketch mandlebrot
    :title "image demo"
    :setup setup
    :draw draw
    :size [800 800]
    :renderer :p2d)



;;;;;;


(import java.io.File)

(import java.awt.Color)

(import java.awt.image.BufferedImage)

(import javax.imageio.ImageIO)

(defn calc-iterations [x y max]
  (loop [p 0.0 q 0.0 i 0]
    (if (or (>= i max) (>= (+ (* p p) (* q q)) 4.0))
      i
      (recur (+ (- (* p p) (* q q)) x) (+ (* 2.0 p q) y) (inc i)))))

(defn calc-color [i max]
  (if (= i max)
    (Color. 0 0 0)
    (let [s (/ i max)
          r (Math/min 1.0 (* s 8.0))
          g (Math/min 1.0 (* s 4.0))
          b (Math/min 1.0 (* s 24.0))]
      (Color. r g b))))

(defn -main
  [& args]
  (let [img-w 1200 img-h 680 max 400
        vp-l -2.5 vp-r 1.0 vp-t -1.0 vp-b 1.0
        bi (BufferedImage. img-w img-h BufferedImage/TYPE_INT_RGB)
        g (.createGraphics bi)]
    (doseq [px (range img-w)
            py (range img-h)]
      (let [x (+ (* (/ px img-w) (- vp-r vp-l)) vp-l)
            y (+ (* (/ py img-h) (- vp-b vp-t)) vp-t)]
        (.setColor g (calc-color (calc-iterations x y max) max))
        (.drawLine g px py px py)))
    (image/show bi ;;"png" (File. "mandelbrot.png")
      )))



(defn mandel-3d [[x y z]]
  (let [r (q/sqrt (+
                    (square x)
                    (square y)
                    (square z)))
        y-ang (q/atan2
                (sqrt (+ (square x)
                        (square y)))
                z)
        z-ang (q/atan2 y x)
        new-x  (* (square r)
                 (q/sin (+ (* 2 y-ang)
                          (* q/PI 0.5)))
                 (q/cos (+ (* 2 z-ang ) q/PI)))
        new-y  (* (square r)
                 (q/sin (+ (* 2 y-ang)
                          (* q/PI 0.5)))
                 (q/sin (+ (* 2 z-ang ) q/PI)))
        new-z  (* (square r)
                 (q/cos (+ (* 2 y-ang)
                          (* q/PI 0.5))))        ]
    [ new-x new-y new-z]))

(defn mandel-3d-stream
  ([] (mandel-3d-stream [3 3 3]))
  ([coords] (iterate mandel-3d coords)))






#_(defn mandel
    [x y z]
    (for [i (range 32)]
      (let [n 8
            r (sqrt (+ (square x)
                      (square y)
                      (square z)))
            theta (q/atan2 (sqrt (+ (square x) (square y))) z)
            phi (q/atan2 y x)
            dx (+ x (* (pow r n)
                      (q/sin (* n theta))
                      (q/cos (* n phi))))
            dy (+ y (* (pow r n)
                      (q/sin (* n theta))
                      (q/cos (* n phi))))
            dz (+ z (* (pow r n)
                      (q/cos (* n theta))))            ]
        (if (> (+ (pow dx 2)
                 (pow dy 2)
                 (pow dz 2)) 2)
          (- 256 (* 4 i))
          0))))

(defn mandelbrot-function
  [w h xx yy layers]
  (for [layer (range layers)
        :let [x (/ (* (- xx (/ w 2.0)) 4.0) w)
              y (/ (* (- yy (/ h 2.0)) 4.0) h)
              z (/ layer 50.0)
              m (mandel x y z)] ] 
    m;;[m m m]
    ))




#_(for [y (range 2)]
    (for [x (range 2)
          :let [w 100 h 100]]
      (mandelbrot-function w h x y 1)))
#_(-main)
