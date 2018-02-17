
(ns qlayground-cljs.clj.particle
  (:require [quil.core :as q]
            [clojure.core.async :as a])
  (:use [clojure.core.matrix]
        [clojure.core.matrix.operators])
  (:import [processing.core PVector])  )


(set-current-implementation :vectorz)

(defn x [attribute]
  (first attribute))

(defn y [attribute]
  (last attribute))

(defn particle
  ([]
   (particle 0))
  ([seed w h]
   {:position (array [(rand w) (rand h)])
    :velocity (array [0 0])
    :seed seed}   ))

(defn particles [n w h]
  (loop [particles []
         index     0]
    (if (= index n)
      particles
      (recur (conj particles (particle index w h)) (inc index)))))


(defn mod-alt [x n]
  (mod (+ n (mod x n)) n))

(defn vec-from-angle [angle]
  (array [(q/cos angle) (q/sin angle)])  )


(defn flow [position]
  (let [r (*(q/noise (/ (x position) 100) (/ (y position) 100))
            q/TWO-PI)]
    (mul (vec-from-angle r) 23)))



;; TODO: Refactor to not rely on frame-count (use incrementing variable, and width/height (implementation dependent, should be particle dependent)

(defn update-particle [w h {:keys [position velocity seed] :as particle}]
  (let [px (x position)
        py (y position)
        vx (x velocity)
        vy (y velocity)

        angle (* q/TWO-PI (q/noise seed (q/frame-count)))

        new-px (mod-alt (+ px vx) w)
        new-py (mod-alt (+ py vy) h)

        new-position (array [new-px new-py])
        velocity (vec-from-angle angle)

        new-velocity (mul
                       (add velocity (flow position))
                       2.2)]

    {:position new-position
     :velocity new-velocity
     :seed seed}))


(defn update-particles [w h particles]
  (map  (partial  update-particle w h) particles))
;; (defprotocol Massive
;;   (apply-force [this force] "apply force to the massive object"))

;; (defprotocol Expirable
;;   (expired? [this] "returns true when lifespan is over"))

;; (defprotocol Drawable
;;   (draw [this] "draw the drawable object to an output-device"))


#_(defn particle-apply-force [particle force]
    (let [f (.get force)
          mf (PVector/div f (float (:mass particle)))
          next-acceleration (PVector/add (:acceleration particle) mf)]
      (assoc particle :acceleration next-acceleration)))


;; (defrecord CircularConfetti [id mass location velocity acceleration lifespan]
;;   Stateful 
;;   (next-state [this]
;;     (particle-next-state this))

;;   Massive
;;   (apply-force [this force]
;;     (particle-apply-force this force))

;;   Expirable
;;   (expired? [this]
;;     (particle-expired? this))

;;   Drawable
;;   (draw [this]
;;     (q/stroke 0 (:lifespan this))
;;     (q/stroke-weight 2)
;;     (q/fill (params :particle-color) (:lifespan this))
;;     (q/ellipse (.-x (:location this)) (.-y (:location this)) (params :circle-r) (params :circle-r))))

;; (defrecord SquaredConfetti [id mass location velocity acceleration lifespan]
;;   Stateful 
;;   (next-state [this]
;;     (particle-next-state this))

;;   Massive
;;   (apply-force [this force]
;;     (particle-apply-force this force))

;;   Expirable
;;   (expired? [this]
;;     (particle-expired? this))

;;   Drawable
;;   (draw [this]
;;     (q/fill (params :particle-color) (:lifespan this))
;;     (q/stroke 0 (:lifespan this))
;;     (q/stroke-weight 2)
;;     (q/push-matrix)
;;     (q/translate (.-x (:location this)) (.-y (:location this)))
;;     (let [theta (q/map-range (.-x (:location this)) 0 (q/width) 0 (* Math/PI 2))]
;;       (q/rotate theta))
;;     (q/rect-mode :center)
;;     (q/rect 0 0 (params :square-l) (params :square-l)) 
;;     (q/pop-matrix)))

;; (defn gen-particle 
;;   [& {:keys [id mass location velocity acceleration lifespan] 
;;       :or {id "px" mass 0 location (PVector. 0 0) velocity (PVector. 0 0) acceleration (PVector. 0 0) lifespan 0}}] 
;;   (if (> (rand 1) 0.5)
;;     (CircularConfetti. id mass location velocity acceleration lifespan)
;;     (SquaredConfetti. id mass location velocity acceleration lifespan)))

;;
;; ParticleSystem
;;

;; (defn next-particles-state [particles]
;;   (map next-state particles))

;; (defn add-particle [particles origin particle-count]
;;   (conj 
;;     particles 
;;     (gen-particle :id (str "p" particle-count) :mass 1.0 :location origin :velocity (PVector. (q/random -1.0 1.0) (q/random -2.0 0)) :lifespan (params :lifespan))))

;; (defn remove-expired [particles]
;;   (remove expired? particles)) 

;; (defrecord ParticleSystem [origin particles particle-count]
;;   Stateful
;;   (next-state [this]
;;     (let [next-particles 
;;           (-> (:particles this) 
;;             (next-particles-state) 
;;             (add-particle (:origin this) (:particle-count this)) 
;;             (remove-expired))
;;           next-particle-count (inc (:particle-count this))]
;;       (assoc this :particles next-particles :particle-count next-particle-count))) 

;;   Massive
;;   (apply-force [this force]
;;     (let [next-particles (map #(apply-force % force) (:particles this))]
;;       (assoc this :particles next-particles)))

;;   Drawable
;;   (draw [this]
;;     (dorun (map #(draw %) (:particles this)))))

;;
;; Sketch
;;

;; (def particle-system 
;;   (atom 
;;     (map->ParticleSystem 
;;       {:origin (PVector. (/ (size-x) 2) (- (size-y) (* (size-y) 0.75))) 
;;        :particles []
;;        :particle-count 0})))

;; (defn setup-sketch []
;;   (q/frame-rate (params :frame-rate))
;;   (q/smooth))

;; (defn draw-sketch []
;;   ;; draw Background
;;   (q/no-stroke)
;;   (q/fill 255) 
;;   (q/rect-mode :corner)
;;   ;;(q/rect 0 0 (q/width) (q/height))

;;   ;; draw Particles
;;   (draw @particle-system)

;;   ;; update ParticleSystem to next-state
;;   (let [gravity (PVector. 0.0 (params :gravity-force))]
;;     (swap! 
;;       particle-system 
;;       #(-> % 
;;          (apply-force gravity) 
;;          (next-state)))))

;; #_(q/defsketch particlesystem-forces 
;;     :title "Particle-System produces Particles that experience Gravity"
;;     :setup setup-sketch
;;     :draw draw-sketch
;;     :size (params :size))
