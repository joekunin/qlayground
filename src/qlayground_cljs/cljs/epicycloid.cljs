(ns qlayground-cljs.epicycloid
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [qlayground-cljs.helpers :refer [cycle-between]]
                                        ;            [gil.core :as g]
            ))


;;[quil.helpers.seqs :refer [cycle-between]]

(defn generate-coordinates [number-of-points radius]
  (let [angle (/ q/TWO-PI number-of-points)]
    (for [i (range number-of-points)]
      [(* radius (q/sin (* angle i)))
       (* radius (q/cos (* angle i)))])))

(defn generate-template [number-of-points factor]
  (->> (range number-of-points)
       (map #(mod (* factor %) number-of-points))
       (interleave (range number-of-points))
       (partition 2)))

(defn calculate-lines [coordinates template-points]
  (for [point template-points]
    (flatten (map #(nth coordinates % 0)  point))))

(defn draw-figure  [state f1 f2 f3 f4]
  (let [lines (map int (:lines state))]
    (doseq [[x1 y1 x2 y2] (:lines state)]
      (q/line (* f1 x1) (* f2 y1) (* f3 x2) (* f4 y2)))))

(def initial-state
  (let [radius 100
        number-of-points 1
        factor 2
        coordinates (generate-coordinates number-of-points radius)
        template-points (generate-template number-of-points factor)
        lines (calculate-lines coordinates template-points)]
    {:index 1
     :number-of-points number-of-points
     :radius radius
     :factor factor
     :coordinates coordinates
     :template-points template-points
     :lines lines
     :color 1
     }))

;;(pprint  (calculate-lines coord template-points))
(defn setup []
  (q/frame-rate 15)
  (q/color-mode :rgb)
  initial-state)


(defn update-state-epicycloid [state]
  (let [index            (inc (:index state))
        radius           150;(:radius state)
        cycle-sequence   (cycle-between 2 60 4)
        factor           (* 1 (nth cycle-sequence index)) ;(inc (:factor state))
        number-of-points 300;(* 2  (nth cycle-sequence index))
        coordinates      (generate-coordinates number-of-points radius)
        template-points  (generate-template number-of-points factor)
        lines            (calculate-lines coordinates template-points)
        color            (nth cycle-sequence index) ;;(mod (+ ( :color state) 0.7) 255)
        ]
    {:index index
     :radius radius
     :factor factor
     :number-of-points number-of-points
     :coordinates coordinates
     :template-points template-points
     :lines lines
     :color color
     }))


(defn update-state-rising-sun [state]
  (let [index            (inc (:index state))
        radius           (:radius state)
        cycle-sequence   (cycle-between 1 100 )
        factor           (nth cycle-sequence index);(inc (:factor state))
        number-of-points (* 80  (* 1 (nth cycle-sequence index)))
        coordinates      (generate-coordinates number-of-points radius)
        template-points  (generate-template number-of-points factor)
        lines            (calculate-lines coordinates template-points)
        color            (mod (+ ( :color state) 0.7) 255)
        ]
    {:index index
     :radius radius
     :factor factor
     :number-of-points number-of-points
     :coordinates coordinates
     :template-points template-points
     :lines lines
     :color color
     }))


(defn draw-state [state]
  (q/background 46 38 51 )
  (let [hh (/ (q/height) 2)
        hw (/ (q/width) 2)]
    (q/with-translation [hh hw]
      ;;(q/stroke (/  (:color state) 2) (:color state) (:color state))
      (q/stroke  239 255 205)
      (draw-figure state 2 2 2 2)
     ; (g/save-animation "rising-sun-400.gif" 400 0)
      )))

;;; Sketches

#_(q/defsketch epicycloid
  :host "epicycloid"
  :size [800 800]
  :setup setup
  :update update-state-epicycloid
  :draw draw-state
  :middleware [m/fun-mode])

#_(q/defsketch rising-sun
  :host "rising-sun"
  :size [800 800]
  :setup setup
  :update update-state-rising-sun
  :draw draw-state
  :middleware [m/fun-mode])
