(ns qlayground-cljs.clj.pixelsort
  (:require [clojure.java.io :as jio]
            [mikera.image.core :as image]
            [quil.core :as q]
            [quil.middleware :as m]))

(def ant (image/load-image "pretty-pic-319323.jpg"))
(def pixels  (image/get-pixels ant))
;;(def ant (image/load-image "image.jpg"))
;;(def ant (image/load-image "pretty-pic-531800.jpg"))

(defn sorted-by-row [image pixels]
  (->> pixels
    (partition (image/width image))
    (map sort)
    flatten
    int-array)  )

(defn sort-n [pixels partitions padding]
  (->> pixels
    (partition partitions padding)
    (map sort)
    flatten
    int-array))

#_(dotimes [i (/  (*(image/height ant) (image/width ant)) 3)]
    (aset pixels i (color/rand-colour)))



(defn process-image [file path]
  (let [image (image/load-image (str path file))
        pixels (image/get-pixels image)
        updated-pixels (sort-n pixels 4 2) ;(sorted-by-row image pixels) 
        ]
    (image/set-pixels image updated-pixels)
    (image/save image (str path "out/" (clojure.string/replace-first file ".jpg" ".png")))
    ;;(clojure.java.shell/sh (str "convert " path "*.png " path  "glitch.gif"))
    ))

(image/set-pixels ant (sorted-by-row ant pixels))
;;(image/show ant :zoom 0.3)

(defn process-images [files path]
  (pmap (fn [file] (process-image file path)) files))

(defn run [path]
  (let [files (drop 2 (.list (jio/file path)))]
    (process-images files path))) 

(comment  (run  "renders/pixelgif/1/")
          (run  "renders/pixelgif/2/")
          (run  "renders/pixelgif/3/")
          (run  "renders/pixelgif/4/"))




#_(let [gr (q/create-graphics 250 250)
        path (clojure.java.io/resource "SimpleShader.glsl")
        shd (q/load-shader (.getPath path))]
    (q/with-graphics gr
      (q/background 255)
      (q/fill 255 0 0)
      (q/triangle 50 30 220 120 20 180))
    (q/image gr 0 0)
    (q/image gr 250 0)
    (q/shader shd)
    (q/image gr 0 250)
    (q/reset-shader)
    (q/image gr 250 250))





(defn trace [state]
  (let [drawers 50] 
    (doseq [[idx item] (map-indexed vector (range 50))]
      (let [x (- (* (q/width) 2  (q/noise (+ idx (*  0.001 (q/frame-count)))) (/ (q/width) 2) ))
            y (- (/ (q/width) 2) (* (q/height) 2 (q/noise (+ 30 (*  0.01 (q/frame-count) idx)) )))
            index (q/constrain ( * (q/width (+ x y))) 0 (-  (count (q/pixels)) 1))
            c (aget (q/pixels) idx)
            theta (q/map-range (q/brightness c) 0 255 0 (q/TWO-PI))
            r (q/random 10 20)]
        (q/push-matrix)
        (q/translate x y)
        (q/rotate theta)

        (if (< (q/random 1) 0.2)
          (do (q/no-stroke)
              (q/fill c 75)
              (q/ellipse 0 0 r r))
          (do (q/stroke c)
              (q/line 0 0 0 (q/random 5 15))
              (q/pop-matrix))))))
  (q/image state  0 0 800 600 ))





(defn setup []
  (q/load-image "angkor.jpg"))

(defn pxl-over-threshold? [idx]
  (if (> (q/red (aget (q/pixels) idx)) 128) true false))

(defn update-state [state]  state  )

(defn draw-state [state]
  (q/background 0)
  #_ (let [pixels  (q/pixels)]
       (dotimes [ idx (count (q/pixels))]
         (let [c (if (pxl-over-threshold? idx) 255 0)] 
           (aset (q/pixels) idx (q/color c)))))

  ;;  (q/update-pixels)
  (q/filter-shader (q/load-shader "shader-test.glsl"))
  
  (q/image state  0 0 800 600 )
  )

#_(q/defsketch pixelsort
    :size [800 800]
    :setup setup
    :update update-state
    :draw trace
    :renderer :p2d
    :mouse-clicked #(q/save "frames/frame-####.tiff")
    :middleware  [m/fun-mode ]
    )



;;(def state )


#_(defn draw [state]
    (q/background 200)
    (q/lights)
    (q/fill 150 100 150) 
    (doseq [x (range 1 200 50)  (q/display-filter :threshold 0.45)
            y (range 1 200 50 )
            z (range 1 00 50 )]
      (q/with-translation [x ;;(* 200 (q/noise x))
                           y ;;(* 200 (q/noise x y z))
                           z ;;(* 2 (q/noise z))
                           ]
        (q/sphere 5))))

#_(q/defsketch my-sketch
    :draw draw
    :size [800 1200]
    :renderer :p3d
                                        ; Enable navigation-3d.
                                        ; Note: it should be used together with fun-mode.
    :middleware [m/fun-mode m/navigation-3d])









(def c-map [[1 1 1 0 1 1]
            [1 1 1 0 1 1]
            [1 1 1 0 1 1]
            [1 1 1 1 1 1]])
                                        ; each represents adjacent positions, northwest, north, northeast, etc.
(def neighbor-deltas [[-1 -1] [0 -1] [1 -1]
                      [-1  0]        [1  0]
                      [-1  1] [0  1] [1  1]])


;; get each point that is passable that's adjacent
(defn neighbors [collision-map [y x]]
  (let [candidates (map #(mapv + %1 %2)
                     (repeat [y x])
                     neighbor-deltas)]
    (remove
      #(= 0 (get-in collision-map % 0))
      candidates)))



