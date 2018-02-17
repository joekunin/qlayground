(ns qlayground-cljs.clj.iris
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [thi.ng.geom.physics.core :as ph]
            [thi.ng.geom.core :as g]
            [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
            [thi.ng.dstruct.core :as d]))




(def a (ph/particle (v/vec2) 1 true))
(def b (ph/particle (v/vec2 1 0) 1))
(def s (ph/spring a b 10.0 0.1))
(def p (ph/physics {:particles [a b] :springs [s] :drag 0.0
                    :behaviors {:g (ph/gravity (v/vec2 0 -0.5))
                                :a (ph/attract (v/vec2 10 0) 10 -2)}}))






(def particle-count 300)

(def colors [ 255 200 120 20 35 58 80])

(defrecord Particle [x y dx dy id age color angle ])


(defn setup []
  (q/no-fill)
  (q/smooth 8)

  
  (for [p (range particle-count)]
    (let [angle (rand q/TWO-PI)
          r (+
              (* 5 (q/random-gaussian))
              (*
                (- (/ (q/width) 2) 100)
                (- 1.0 (q/pow (rand 1.0) 7))))
          age (rand-int 1000)
          color (rand-nth colors)
          index p
          x (* r (q/cos angle))
          y (* r (q/sin angle))]
      (->Particle x y 0 0 index age color angle))))


(defn update-state [state]
  state
  ;;;(map (fn [particle] (update-in particle [:x] #(* (q/cos) (q/frame-count))) ) state)
  )


(points-seq 100)

(defn points-seq [n]
  (loop [points []]
    (ph/timestep p 2)
    (let [pa (ph/position a)
          pb (ph/position b)
          point [(first pb) (last pb)]]
      (if (= n (count points))
        points
        (recur (conj points pa pb))))))

(let [points []]
  (conj points [0.001 940.2]))

(loop [state initial-state]
  (when-not (quit-signaled?)
    (let [new-state (do-things state)]
      (sleep)
      (recur new-state))))


(defn draw-state [state]
  ;;(q/background 0)
  (q/stroke-weight 1)
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (q/scale 5.25)
    (doseq [i (take 100 points)]
      (ph/timestep p 2)
      (let [pa (ph/position a)
            pb (ph/position b)]
        (q/stroke 255)
        (q/point (* 4 (first pb)) (* 4 (last pb)))))

    #_(doseq [{:keys [x y color angle]} state]
        (q/rotate (q/radians (q/frame-count)))
        (q/stroke color)
        (q/point x y)))
  ;;(q/save-frame "iris300/image#####.png")
  )

(defn save-frame []
  (q/save (str "iris/iris-" (q/frame-count) ".png")))

#_(q/defsketch iris
  :size [600 600]
  :setup setup
  :update update-state
  :draw draw-state
  :renderer :p3d
  ;;  :mouse-clicked save-frame
  :middleware  [m/fun-mode ]
  )
