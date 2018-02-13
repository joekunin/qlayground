(ns qlayground-cljs.clj.simplex
  (:import (org.kdotjpg.noise OpenSimplexNoise)))

(defn new-noise-gen
  "Returns an OpenSimplexNoise generator with the given seed"
  ([^long seed] (OpenSimplexNoise. seed)))

(defn simplex
  "Returns the 2d, 3d, or 4d noise of the given coordinates.
  The returned noise will be in the range (-1 < noise < 1)"
  ([^OpenSimplexNoise noise-gen x y] (.eval noise-gen x y))
  ([^OpenSimplexNoise noise-gen x y z] (.eval noise-gen x y z))
  ([^OpenSimplexNoise noise-gen x y z w] (.eval noise-gen x y z w)))

(defn scale
  "Given a noise value in the range (-1 < noise < 1),
  return the noise scaled to the new range (low <= scaled-noise <= high)"
  [noise low high]
  (let [straddle-result (/ (* noise (- high low)) 2)
        adjustment (/ (+ high low) 2)]
    (+ straddle-result adjustment)))

(defn fbm
  "Fractal Brownian Motion applies successive iterations of noise at varying amounts of influence.
  Resulting in a more textured noise"
  [noise-gen iterations persistence scale coords]
  (loop [iter 0
         max-amp 0.0
         amp 1.0
         freq scale
         noise 0.0]
    (if (< iter iterations)
      (let [scaled-coords (map #(* freq %) coords)
            iter-noise (apply simplex noise-gen scaled-coords)
            scaled-noise (* amp iter-noise)]
        (recur (inc iter)
               (+ amp max-amp)
               (* amp persistence)
               (* freq 2)
               (+ noise scaled-noise)))
      (/ noise max-amp))))

