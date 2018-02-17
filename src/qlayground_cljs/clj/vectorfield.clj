(ns qlayground-cljs.clj.vectorfield
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p])
  (:use [clojure.core.matrix]
        [clojure.core.matrix.operators]))


;; Initial conditions in context
(defn context
  []
  {:w 10800
   :h 10800
   :opacity (rand-int 255)
   :n (rand-int 10000)                                ;4500
   :r-seed (rand-int 10000)})

(defn state
  []
  (let [ctx (context)
        n (:n ctx)
        w (:w ctx)
        h (:h ctx)]
    {:t 0
     :particles (p/particles n w h)}))


(defn setup
  []
  (q/random-seed (:r-seed (context)))
  (p/seed-noise (:r-seed (context)))
  (q/frame-rate 60)
  (q/color-mode :hsb ;;360 100 100 1.0
    )
  (q/background 20)
  (state))


(defn- draw-particles-mirrored
  [particles w h t]
  (doseq [particle particles]
    (let [position (:position particle)
          x (p/x position)
          y (p/y position)]
      
      #_(q/stroke
          (mod t 55)
          (mod t 255)
          (mod t 255)
          (mod t 2)        )

      (q/stroke 255  0 (mod t 450) (:opacity (context)) ;;100
        )
      (h/draw-mirror  w h (fn [] (q/point x y))))))



(defn update-state
  [{:keys [particles t]}]
  (let [dt (inc t)
        dp (p/update-particles (:w (context)) (:h (context)) t particles)]
    {:t dt
     :particles dp }))


(defn state-stream
  []
  (iterate update-state (state)))



(defn draw-state
  [{:keys [particles t]}]
  (let [w (:w (context))
        h (:h (context))]
    (q/no-fill)
    ;;(q/background 20)
    

    (q/scale 0.5)

    (q/push-matrix)
    (draw-particles-mirrored particles w h t)
    (q/translate 0 h)
    (draw-particles-mirrored particles w h t)
    (q/translate w 0)
    (draw-particles-mirrored particles w h t)
    (q/pop-matrix)
    (q/translate w 0)
    (draw-particles-mirrored particles w h t)

    (if (= 300 t)
      (do
        (q/no-loop)
        (q/save-frame (str "vectorfield-renders/render-" (:r-seed (context)) "-####"))))))




(q/defsketch vectorfield
  :host "host"
  :size [(:w (context)) (:h (context))]
  :setup setup
  :update update-state
  :draw draw-state
  ;;:renderer :p3d
  ;;  :mouse-clicked #(q/save-frame "particles/frame-####.tiff")
  :middleware [m/fun-mode])



