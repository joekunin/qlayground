(ns qlayground-cljs.twinkle
  (:require [quil.core :as q :include-macros true]
            ;[quil.helpers.seqs :refer [cycle-between]]
            [quil.middleware :as m]
            ))

(defn setup []
  (q/frame-rate 30)
  (let [r 10
        width  100
        height 100
        w (q/width)
        h (q/height)
        y-vals (take-nth r (range (+ h r)))
        x-vals (flatten
                (map #(repeat (count y-vals) %) ;; generate y many x values (0 0 ... 0 0 10 10 ... 10 10 20 20..)
                     (take-nth r (range (+ w r)))))
        origins (partition 2 (interleave x-vals (cycle y-vals))) ; (x y) => (370 30)
        ;;circles (map (fn [[x y]] {:x x :y y :r r}) origins)
        squares (map (fn [[x y]] {:x x :y y :width height :height width}) origins)]
    {:radius r
;;   :circles circles
     :squares squares}))


;; {:x :y :r} => {:x :y :width :heighbt :r}

(defn update-state [state]
  (update state :squares #(map (fn [square]
                                 (let [cx (/ (q/width) 2)
                                       cy (/ (q/height) 2)
                                       width (:width square)
                                       height (:height square)
                                       r (:radius state)
                                       t (/ (q/millis) 1000)]
                                   (assoc square :width (* r
                                                           (q/sin
                                                            (+ t
                                                               (+ (q/sq (- cx width))
                                                                  (q/sq (- cy height)))))))
                                   #_(assoc square :height (* r
                                                            (q/sin
                                                             (+ t
                                                                (+ (q/sq (- cx width))
                                                                   (q/sq (- cy height)))))))))
                               %)))


(defn draw-state [state]
  (q/background 0 0 0)
  ;;(q/stroke 255 255 255)
  (q/no-stroke)
  ;;(q/rect-mode :corner)
  (doseq [s (:squares state)]
    (q/rect (:x s) (:y s) (:width s) (:height s))))

#_(q/defsketch twinkle
  :host "twinkle"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
