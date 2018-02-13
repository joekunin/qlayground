(ns qlayground-cljs.kinematics
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; (defn get-end-x [arm]
;;   (let [length (:length arm)
;;         angle  (:angle arm)
;;         x      (:x arm)]
;;     (+ x (* length (q/cos angle)))))

;; (defn get-end-y [arm]
;;   (let [length (:length arm)
;;         angle  (:angle arm)
;;         y      (:y arm)]
;;     (+ y (* length (q/sin angle)))))


;; (def state
;;   {:angle 1.1
;;    :arms   [{ :x 0
;;              :y 0
;;              :angle 1.5
;;              :length 100}
;;             #_{:x (get-end-x (nth (:arms state) 1))
;;              :y (get-end-y (nth (:arms state) 1))
;;              :angle 4.5
;;              :length 100}
;;             #_{:x (get-end-x (nth (:arms state) 2))
;;              :y (get-end-y (nth (:arms state) 2))
;;              :angle 2.5
;;              :length 100}]})



;; (defn setup []
;;   (q/frame-rate 30)
;;   (q/color-mode :hsb)
;;   state)

;; (defn update-state [state]
;;   (let [angle (+ 0.1 (:angle state))
;;         arm-angle (* 1.1 (q/cos angle))]
;;     {:angle angle
;;      :arms   [{ :x 0
;;                :y 0
;;                :angle arm-angle
;;                :length 100}
;;               {:x (get-end-x (nth (:arms state) 0))
;;                :y (get-end-y (nth (:arms state) 0))
;;                :angle arm-angle
;;                :length 100}
;;               {:x (get-end-x (nth (:arms state) 1))
;;                :y (get-end-y (nth (:arms state) 1))
;;                :angle arm-angle
;;                :length 100}]}))


;; (map get-end-y (:arms state))

;; (defn draw-state [state]
;;   state
;;   #_(let [color (:color state)
;;         arms  (:arms state)
;;         [a1 a2 a3] arms
;;         x1    (:x a1)
;;         y1    (:y a1)
;;         [x2 x3 x4] (map get-end-x arms)
;;         [y2 y3 y4] (map get-end-y arms)]
;;     (q/background 250)
;;     (q/no-fill)
;;     (q/stroke 100 100 20)
;;     (q/with-translation [400 400]
;;       (q/line x1 y1 x2 y2)
;;       (q/line x2 y2 x3 y3)
;;       (q/line x3 y3 x4 y4)
;; ;      (q/point x2 y2)
;;  ;     (q/point x3 y3)
;;   ;    (q/point x4 y4)
;;       ;;(q/save filename)

;;       )))

;; (q/defsketch kinematics
;;   :size [800 800]
;;   :setup setup
;;   :update update-state
;;   :draw draw-state
;;   :mouse-clicked #(q/save-frame "frames/frame-####.tiff")
;;   :middleware [m/fun-mode])
