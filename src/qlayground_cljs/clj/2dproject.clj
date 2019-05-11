
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

(defn state [opts & rest]
  (let [width            (or (:width opts) 900)
        height           (or (:height opts) 900)
        dots-amount      (or (:dots-amount opts) 1000)
        dots-radius      (or (:dots-radius opts) 4)
        globe-radius     (or (:globe-radius opts) (* width 0.7 ))
        globe-center-z   (or (:globe-center-z opts) (- globe-radius))
        project-center-x (or (:project-center-x opts) (/ width 2))
        project-center-y (or (:project-center-y opts) (/ height 2))
        field-of-view    (or (:field-of-view opts) (* width 0.8))
        dots             (create-dots dots-amount globe-radius globe-center-z)] 
    {:width            width
     :height           height
     :dots-amount      dots-amount
     :dots-radius      dots-radius
     :globe-radius     globe-radius
     :globe-center-z   globe-center-z
     :project-center-x project-center-x
     :project-center-y project-center-y
     :field-of-view    field-of-view
     :dots             dots}))



;;(def WIDTH 900)
;;(def HEIGHT 900)
;;(def DOTS-AMOUNT 5000)
;;(def DOTS-RADIUS 1)
;;(def GLOBE-RADIUS (* WIDTH 0.7) )
;;(def GLOBE-CENTER-Z (- GLOBE-RADIUS))
;;(def PROJECT-CENTER-X (/ WIDTH 2))
;;(def PROJECT-CENTER-Y (/ HEIGHT 2))
                                        ;(def FIELD-OF-VIEW (* WIDTH 0.8))


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

(defn create-dot
  [[x y z]]
  {:x x
   :y y
   :z z
   :x-projection 0
   :y-projection 0
   :size-projection 0})


(defn create-dots
  [n radius center-z]
  (let [points (repeatedly n (partial new-point! radius center-z))
        dots (pmap create-dot points)]
    dots))

(defn project-dot
  [{:keys [globe-center-z field-of-view project-center-x project-center-y ]}
   {:keys [x y z x-projection y-projection size-projection]} sin cos]
  (let [rot-x (+ (* cos x) (* sin (- z globe-center-z)))
        rot-z (+ (* (- sin) x) (* cos (- z globe-center-z))  globe-center-z)
        sp (/ field-of-view (- field-of-view rot-z))
        xp (+ project-center-x (* rot-x sp))
        yp (+ project-center-y (* y sp))
        ]
    {:x x
     :y y
     :z z
     :x-projection xp
     :y-projection yp
     :size-projection sp}))

(defn draw-dot
  [state dot sin cos]
  (let [{:keys [x y z x-projection y-projection size-projection]} (project-dot state dot sin cos)]
    (q/fill 255 0 255)
    (q/color 255 0 255)
    (q/stroke 255 0 255)
    (q/ellipse x-projection y-projection size-projection size-projection)))

(defn setup
  []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  (q/background 20)
  (state {})
  #_(let [state          (state {})
          number-of-dots (:dots-amount state)
          globe-radius   (:globe-radius state)
          globe-center-z (:globe-center-z state)]
      (create-dots number-of-dots globe-radius globe-center-z)))

(defn update-state
  [state]
  state)

(defn draw-state
  [state]
  (let [rotation (* (q/frame-count) 0.004)
        sine-rotation (Math/sin rotation)
        cos-rotation (Math/cos rotation)]
    (q/background 20) 
    ;;(q/scale 0.4)
    (doseq [dot (:dots state)]
      (draw-dot state dot sine-rotation cos-rotation )))  )


(q/defsketch project2d
  :renderer :p3d
  :size [ (:width (state {})) (:height (state {}))]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])


