
(ns qlayground-cljs.clj.2dproject
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            ;;[qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            ;;[random-seed.core :refer :all]
            ;;[thi.ng.geom.circle :as c]
            ;;[thi.ng.geom.core :as g]
            ))

(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)

(def WIDTH 900)
(def HEIGHT 900)
(def DOTS-AMOUNT 1000)
(def DOTS-RADIUS 4)
(def GLOBE-RADIUS (* WIDTH 0.7) )
(def GLOBE-CENTER-Z (- GLOBE-RADIUS))
(def PROJECT-CENTER-X (/ WIDTH 2))
(def PROJECT-CENTER-Y (/ HEIGHT 2))
(def FIELD-OF-VIEW (* WIDTH 0.8))

(defn create-dot
  [[x y z]]
  {:x x
   :y y
   :z z
   :x-projection 0
   :y-projection 0
   :size-projection 0})

(defn new-theta! []
  (Math/floor
    (* Math/PI 2 (* 100 (rand)))))

(defn new-phi! []
  (Math/acos (- (* 2  (rand)) 1)))

(defn new-point! [radius center-z]
  (let [theta (new-theta!)
        phi (new-phi!)
        x (* radius (Math/sin phi) (Math/cos theta))
        y (* radius (Math/sin phi) (Math/sin theta))
        z (+ (* radius (Math/cos phi)) center-z)]
    [x y z]))

(defn create-dots
  [n radius center-z]
  (let [points (repeatedly n (partial new-point! radius center-z))
        dots (map create-dot points)]
    dots))


(defn project-dot
  [{:keys [x y z x-projection y-projection size-projection]} sin cos]
  (let [rot-x (+ (* cos x) (* sin (- z GLOBE-CENTER-Z)))
        rot-z (+ (* (- sin) x) (* cos (- z GLOBE-CENTER-Z)) GLOBE-CENTER-Z)
        sp (/ FIELD-OF-VIEW (- FIELD-OF-VIEW rot-z))
        xp (+ PROJECT-CENTER-X (* rot-x sp))
        yp (+ PROJECT-CENTER-Y (* y sp))
        ]
    {:x x
     :y y
     :z z
     :x-projection xp
     :y-projection yp
     :size-projection sp}))

(defn draw-dot
  [dot sin cos]
  (let [{:keys [x y z x-projection y-projection size-projection]} (project-dot dot sin cos)]
    (q/fill 255 0 255)
    (q/color 255 0 255)
    (q/stroke 255 0 255)
    (q/ellipse x-projection y-projection size-projection size-projection)))

(defn setup
  []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  (q/background 20)
  (create-dots DOTS-AMOUNT GLOBE-RADIUS GLOBE-CENTER-Z)  )

(defn update-state
  [state]
  state)

(defn draw-state [state]
  (let [rotation (* (q/frame-count) 0.004)
        sine-rotation (Math/sin rotation)
        cos-rotation (Math/cos rotation)]
    (q/background 20)
    ;;(q/scale 0.4)
    (doseq [dot state]
      (draw-dot dot sine-rotation cos-rotation )))  )


(q/defsketch project2d
  :renderer :p3d
  :size [WIDTH HEIGHT]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])


