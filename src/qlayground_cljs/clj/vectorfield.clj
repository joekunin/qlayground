(ns qlayground-cljs.clj.vectorfield
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g]))



(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)


(def seed (atom 0))

(defn new-seed! []
  (reset! seed (rand-int 10000))) 

(defn seed-randoms!
  []
  (p/seed-random @seed)
  (p/seed-noise @seed))

(defn state
  [w h n frames]
  (let [t 0
        opacity 255;;(rand-int 80)
        particles (p/particles n w h)
        limit frames]
    {:w w
     :h h
     :n n
     :t t
     :limit limit
     :opacity opacity
     :particles particles}))

(defn setup
  []
  (new-seed!)
  (seed-randoms!)
  (q/frame-rate 60)
  (q/color-mode :hsb)
  (q/background 20)
  (state 800 800 200 200))


(defn update-state
  [{:keys [particles limit opacity t w h n]}]
  (let [dt (inc ^long t)
        dp (p/update-particles w h t particles)]    
    {:w w
     :h h
     :n n
     :t dt
     :limit limit
     :opacity (inc ^int opacity)
     :particles dp }))


(defn- draw-particles-mirrored
  [particles w h t limit opacity]
  (doseq [particle particles]
    (let [position (:position particle)
          angle (* q/TWO-PI (clisk.noise.Perlin/noise @seed t))
          r (* 0.5 (mod  (q/frame-count) 360) (q/mouse-y))
          x (p/x position)
          y (p/y position)
          z (^long q/sin (+ (q/sq ^long x) (q/sq ^long y)))]

      ;;(q/no-stroke)
      (q/stroke  255)
      (q/fill (* 0.8 angle))

      ;;(h/pyramid r new-x new-y new-z)

      ;;(q/rotate-z t-z)
      ;;(q/ellipse t-x t-y 2 2 )

      (h/draw-mirror  w h (fn [] (q/point x y (* 0.4  (q/mouse-y)) )
                            ;;(h/pyramid (* 0.05 r) new-x new-y new-z)
                            ))
      )))



(defn draw-state
  [{:keys [particles t w h limit opacity]}]
  (let [c (c/circle 50)
        r (:r c)
        [x y] (:p c)]
    (q/no-fill)
    (q/background 200)
    (q/stroke 0)

    (q/with-translation [(/ w 2 ) (/ h 4)]

      
      (doseq [tess (g/tessellate c (mod t 50))]
        (let [points (:points tess)]
          (q/rotate q/PI)
          (q/begin-shape)
          (doseq [[x y] points]
            (q/vertex x y))
          (q/end-shape))))




    ;;    (draw-particles-mirrored particles w h t limit opacity)
    #_(doseq [[x y z ] points]

        (q/stroke 255)
        (q/point x y z))
    #_(q/with-translation [(/ (:w (state)) 2)
                           (/ (:h (state)) 2)]
        #_(q/rotate t)
        #_(q/stroke opacity opacity opacity 10)


        #_(doseq [[x y z ] points]
            (q/scale 1.5)
            (q/stroke 255)
            (q/point x y z))

        (draw-particles-mirrored particles w h t limit opacity)
        ))


  ;;(q/save-frame (str "vectorfield-renders/render-" @seed "-####"))
  #_(if (= limit t)
      (do
        (q/no-loop)
        (save-image-and-resize!)
        ;;(q/save-frame (str "vectorfield-renders/render-" @seed "-####"))
        (q/exit)
        ;;(-main)
        #_(q/defsketch vectorfield
            :host "host"
            :size [(:w (state)) (:h (state))]
            :setup setup
            :update update-state
            :draw draw-state
            :middleware [m/fun-mode])
        )))




(defn -main [& args]
  (q/defsketch vectorfield
    :host "host"
    :size [800 400]
    :renderer :p3d
    ;; :mouse-clicked toggle-background
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode])
  args)


;;(-main) 






