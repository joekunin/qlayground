
(ns qlayground-cljs.clj.particle
  (:require [quil.core :as q])
  (:import [processing.core PVector])  )

(def params 
  {:size [600 400]
   :background 255
   :frame-rate 30
   :gravity-force 0.1
   :lifespan 255
   :lifespan-dec-rate 2
   :circle-r 16
   :square-l 13
   :particle-color 127}) 

(defn size-x []
  (first (params :size)))

(defn size-y []
  (second (params :size)))

;;
;; Particle
;;

(defprotocol Stateful
  (next-state [this] "calc next state for the stateful object"))

(defprotocol Massive
  (apply-force [this force] "apply force to the massive object"))

(defprotocol Expirable
  (expired? [this] "returns true when lifespan is over"))

(defprotocol Drawable
  (draw [this] "draw the drawable object to an output-device"))

(defn particle-next-state [particle]
  (let [next-location (PVector/add (:location particle) (:velocity particle))
        next-velocity (PVector/add (:velocity particle) (:acceleration particle))
        next-acceleration (PVector/mult (:acceleration particle) (float 0))
        next-lifespan (- (:lifespan particle) (params :lifespan-dec-rate))]
    (assoc particle :location next-location :velocity next-velocity :acceleration next-acceleration :lifespan next-lifespan)))

(defn particle-apply-force [particle force]
  (let [f (.get force)
        mf (PVector/div f (float (:mass particle)))
        next-acceleration (PVector/add (:acceleration particle) mf)]
    (assoc particle :acceleration next-acceleration)))

(defn particle-expired? [particle]
  (< (:lifespan particle) 0.0))

(defrecord CircularConfetti [id mass location velocity acceleration lifespan]
  Stateful 
  (next-state [this]
    (particle-next-state this))

  Massive
  (apply-force [this force]
    (particle-apply-force this force))
  
  Expirable
  (expired? [this]
    (particle-expired? this))

  Drawable
  (draw [this]
    (q/stroke 0 (:lifespan this))
    (q/stroke-weight 2)
    (q/fill (params :particle-color) (:lifespan this))
    (q/ellipse (.-x (:location this)) (.-y (:location this)) (params :circle-r) (params :circle-r))))

(defrecord SquaredConfetti [id mass location velocity acceleration lifespan]
  Stateful 
  (next-state [this]
    (particle-next-state this))

  Massive
  (apply-force [this force]
    (particle-apply-force this force))
  
  Expirable
  (expired? [this]
    (particle-expired? this))

  Drawable
  (draw [this]
    (q/fill (params :particle-color) (:lifespan this))
    (q/stroke 0 (:lifespan this))
    (q/stroke-weight 2)
    (q/push-matrix)
    (q/translate (.-x (:location this)) (.-y (:location this)))
    (let [theta (q/map-range (.-x (:location this)) 0 (q/width) 0 (* Math/PI 2))]
      (q/rotate theta))
    (q/rect-mode :center)
    (q/rect 0 0 (params :square-l) (params :square-l)) 
    (q/pop-matrix)))

(defn gen-particle 
  [& {:keys [id mass location velocity acceleration lifespan] 
      :or {id "px" mass 0 location (PVector. 0 0) velocity (PVector. 0 0) acceleration (PVector. 0 0) lifespan 0}}] 
  (if (> (rand 1) 0.5)
    (CircularConfetti. id mass location velocity acceleration lifespan)
    (SquaredConfetti. id mass location velocity acceleration lifespan)))

;;
;; ParticleSystem
;;

(defn next-particles-state [particles]
  (map next-state particles))

(defn add-particle [particles origin particle-count]
  (conj 
    particles 
    (gen-particle :id (str "p" particle-count) :mass 1.0 :location origin :velocity (PVector. (q/random -1.0 1.0) (q/random -2.0 0)) :lifespan (params :lifespan))))

(defn remove-expired [particles]
  (remove expired? particles)) 

(defrecord ParticleSystem [origin particles particle-count]
  Stateful
  (next-state [this]
    (let [next-particles 
          (-> (:particles this) 
            (next-particles-state) 
            (add-particle (:origin this) (:particle-count this)) 
            (remove-expired))
          next-particle-count (inc (:particle-count this))]
      (assoc this :particles next-particles :particle-count next-particle-count))) 

  Massive
  (apply-force [this force]
    (let [next-particles (map #(apply-force % force) (:particles this))]
      (assoc this :particles next-particles)))

  Drawable
  (draw [this]
    (dorun (map #(draw %) (:particles this)))))

;;
;; Sketch
;;

(def particle-system 
  (atom 
    (map->ParticleSystem 
      {:origin (PVector. (/ (size-x) 2) (- (size-y) (* (size-y) 0.75))) 
       :particles []
       :particle-count 0})))

(defn setup-sketch []
  (q/frame-rate (params :frame-rate))
  (q/smooth))

(defn draw-sketch []
  ;; draw Background
  (q/no-stroke)
  (q/fill 255) 
  (q/rect-mode :corner)
  ;;(q/rect 0 0 (q/width) (q/height))

  ;; draw Particles
  (draw @particle-system)

  ;; update ParticleSystem to next-state
  (let [gravity (PVector. 0.0 (params :gravity-force))]
    (swap! 
      particle-system 
      #(-> % 
         (apply-force gravity) 
         (next-state)))))

#_(q/defsketch particlesystem-forces 
    :title "Particle-System produces Particles that experience Gravity"
    :setup setup-sketch
    :draw draw-sketch
    :size (params :size))
