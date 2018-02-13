b(ns qlayground-cljs.clj.planets
   (:require [quil.core :as q]
             [quil.middleware :as m]
             ;; [infix.macros :only [infix $=]]

             [quil.core :as qc])  )



(def init-state {:max-size 24 :phase 0 :speed 0.06})

(defn setup []

  (q/frame-rate 30)
  init-state)


(defn update-state [state]
  (-> state
    (update :phase (fn [phase] (* (:speed state) (q/frame-count))))))

(defn draw-state [state]
  (q/background (q/color 7 11 8))

  (q/no-stroke)

  (doseq [strand (range 20)]
    (let [strand-phase (+ (q/map-range strand 0 20 0 q/PI)
                         (:phase state))]

      (doseq [column (range 10)] 
        (let [col-offset (q/map-range column 0 200 0 q/TWO-PI)
              x (q/map-range column 0 10 50  (q/width))]

          (doseq [row (range 10)]
            (let [color-a (q/color 14,22,16)
                  color-b (q/color 145,226,161)
                  y  (+ (/ (q/height) 2)
                       (* row 80)
                       (* 50
                         (q/cos (+ strand-phase col-offset))))
                  size-offset (* 1.5 (+ 1 (q/cos (- strand-phase (+ col-offset (/ row 20))))))
                  circle-size (*  (:max-size state) size-offset)]
              
              (q/no-fill)
              (q/stroke (q/lerp-color color-a color-b (/ row 15)) )
              (q/ellipse x y circle-size circle-size)
              (q/ellipse y x circle-size circle-size)


              ;;(q/ellipse x y circle-size circle-size)
              ))))))

  
  ;;(q/save-frame "dewdropfield2/dewdrop-field2-#####.png")
  )

;; var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;


#_(q/defsketch planets
    :size [800 550]
    :setup setup
    :update update-state
    :draw draw-state
    :renderer :p3d
    :middleware [m/fun-mode
                 ;;  m/navigation-3d
                 m/pause-on-error])




