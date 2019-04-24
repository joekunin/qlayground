

(ns qlayground-cljs.clj.quasishader
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g])
  (:use
   [random-seed.core :refer :all]
   [clojure.core.matrix]
   [clojure.core.matrix.operators]))

(set-current-implementation :vectorz)


(defn setup []
  {:shader (q/load-shader "quasiFrag.glsl")})


(defn update-shader [shader]
  (doto shader 
    #_(.set "u_resolution" (float (q/width)) (float (q/height)))
    #_(.set "u_mouse" (float (q/mouse-x)) (float (q/mouse-x)))
    #_(.set "u_time" (float (/ (q/millis) 1000)))))

(defn update-state [state]
  state
  #_(let [shader
          (if (= 0 (mod (q/frame-count) 100))
            (q/load-shader "quasiFrag.glsl")
            (:shader state))]
      ;;(update-shader shader)
      {:shader shader}))

(defn draw-state [state]
  (q/shader (:shader state))
  ;;(q/rect 0 0 (q/width) (q/height))
  )




(q/defsketch quasishader
  :host "host"
  :size [300 300]
  :setup setup
  :renderer :p2d
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
