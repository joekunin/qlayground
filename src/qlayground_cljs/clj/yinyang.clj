(ns qlayground-cljs.clj.yinyang
  (:require [qlayground-cljs.clj.simplex :as noise]
            [quil.core :as q]
            [quil.middleware :as m])
  (:import processing.core.PVector))

(defn field [^PVector x ^PVector y ]
  (let [amount 2.5
        scale 0.03
        radius 0.45
        num-frames 200
        frame-count (q/frame-count)
        noise-gen  (noise/new-noise-gen (rand)) 
        value1 (* 400.0 (noise/simplex noise-gen
                          (* scale x)
                          (* scale y)
                          (* radius (q/cos (* 1.0 q/TWO-PI (/ (- frame-count 1) num-frames))))
                          (* radius (q/sin (* 1.0 q/TWO-PI (/ (- frame-count 1) num-frames))))))

        value2 (* 400.0 (noise/simplex noise-gen
                          (+  (* x scale) 1000)
                          (* scale y)
                          (* radius (q/cos (* 1.0 q/TWO-PI (/ (- frame-count 1) num-frames))))
                          (* radius (q/sin (* 1.0 q/TWO-PI (/ (- frame-count 1) num-frames))))) )

        parameter-1 (/  (q/round value1) 100)
        parameter-2 (/  (q/round value2) 100)]

    (PVector. (* amount parameter-1) (* amount parameter-2))))


(defn setup []
  (q/frame-rate 30)
  (q/smooth)
  [])


(defn update-state [state]
  state
  #_(-> state
      (update :phase (fn [phase] (* (:speed state) (q/frame-count))))))


#_(defn draw-state [state]
    (let [spacing 10
          num-frames 100
          r 0.5
          scale 0.01
          t (float (mod (/ (q/frame-count) num-frames) 255))]
      (q/background 0)
      (q/stroke 255 255 255 100)
      (doseq [x (range 0 (q/width) spacing)
              y (range 0 (q/height) spacing)]
        (let [seed (noise/new-noise-gen (rand)) 
              ns   (noise/simplex seed
                     (* scale x)
                     (* scale y)
                     (* r (q/cos (* t q/TWO-PI)))
                     (* r (q/sin (* t q/TWO-PI))))]

          (if (< ns 0)
            (q/line x y (+ x spacing) (+ y spacing))
            (q/line x (+ y spacing) (+ x spacing) y))
          (q/text (str (float (* 2 t))) 50 50 )))))

(defn draw-state [state]
  (q/stroke 255)
  (q/background 0)
  (q/no-fill) 
  (doseq [x (range 150 (q/height) 40)]
    (doseq [y (range 150 (q/width) 40)]
      (q/point x y)
      (let [fi (field x y)]
        (doseq [k (range 0 200)]
          (let [res (.mult fi 0.15)
                dx (+ x (.x res))
                dy (+ y (.y res))]
            (q/point dx dy)))))))


#_(q/defsketch yinyang
    :size [800 800]
    :setup setup
    :update update-state
    :draw draw-state
    ;;  :renderer :p3d
    :middleware [m/fun-mode
                 ;;m/navigation-3d
                 ;;m/pause-on-error
                 ])





#_(defn yin-yang [state]
    ;; (q/background 255)
    (q/no-stroke)
    (let [diam (* 0.9 (q/width))
          cx (/ (q/width) 2)
          cy (/ (q/height) 2)
          sm-diam (/ diam 2)
          sm-rad (/ sm-diam 2)
          cx1 cx
          cy1 (+ cy sm-rad)
          cx2 cx
          cy2 (- cy sm-rad)]
      (q/scale 0.5)
      (q/with-translation [(/ (q/width ) 2)
                           (/ (q/height) 2)]
        (q/fill 0)
        (q/ellipse cx cy diam diam)
        (q/fill 255)
        (q/rect 0 0 400 800)
        (q/fill 0)
        (q/ellipse cx1 cy1 sm-diam sm-diam)
        (q/fill 255)
        (q/ellipse cx2 cy2 sm-diam sm-diam)
        (q/ellipse cx1 cy1 (/ sm-diam 3) (/ sm-diam 3))
        (q/fill 0)
        (q/ellipse cx2 cy2 (/ sm-diam 3) (/ sm-diam 3))
        (q/stroke 0)
        (q/no-fill)
        (q/stroke-weight 2)
        (q/ellipse cx cy diam diam))))
