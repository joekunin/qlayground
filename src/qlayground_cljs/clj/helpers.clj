
(ns qlayground-cljs.clj.helpers
  (:require [clojure.core.matrix.operators :refer :all]
            [quil.core :as q]))

(defn save-image-and-resize! [path seed]
  (let [filename (str path seed "-####.tif")
        thumbnail (str path seed "-####-1000.tif")]
    (q/save-frame filename)
    (clojure.java.shell/sh "convert" "-LZW" filename filename)
    (clojure.java.shell/sh "convert" "-scale" "1000x1000" filename thumbnail)
    (println "Done with image" )))
(defn draw-escher [w h draw-fn]


  (draw-fn)


  (q/push-matrix)
  (q/translate w 0)
  (q/scale (- 1) 1)
  (draw-fn)

  (q/pop-matrix)
  (q/push-matrix)
  (q/translate w 0)
  (q/scale (- 1) 1)
  (draw-fn)

  (q/pop-matrix)
  (q/push-matrix)
  (q/translate w 0)
  (q/scale (- 1) 1)
  (draw-fn)
  (q/pop-matrix)


  )


(defn draw-mirror [w h draw-fn]
  (draw-fn)

  ;; (q/push-matrix)
  ;; (q/translate 0 h)
  ;; (q/scale (- 1) 1)
  ;; (draw-fn)
  ;; (q/pop-matrix)

  (q/push-matrix)
  (q/translate w 0)
  (q/scale (- 1) 1)
  (draw-fn)
  (q/pop-matrix)


  (q/push-matrix)
  (q/translate 0 h)
  (q/scale  1 (- 1))
  (draw-fn)
  (q/pop-matrix)

  (q/push-matrix)
  (q/translate w h)
  (q/scale (- 1) (- 1 ))
  (draw-fn)

  (q/pop-matrix))


(defn pyramid
  ([] (pyramid 20 0 0 0))
  ([t] (pyramid t 0 0 0))
  ([t x y] (pyramid t x y 0))
  ([t x y z]
   (q/push-matrix)
   (q/translate x y z)

   (q/begin-shape :triangles)
   (q/vertex (- t) t (- t))
   (q/vertex (- t) (- t) (- t))
   (q/vertex 0 0 t)
   (q/vertex (- t) t (- t))
   (q/vertex (- t) (- t) (- t))
   (q/vertex 0 0 t)
   (q/vertex t t (- t))
   (q/vertex (- t) t (- t))
   (q/vertex 0 0 t)
   (q/vertex t (- t) (- t))
   (q/vertex t t (- t))
   (q/vertex 0 0 t)
   (q/vertex (- t) (- t) (- t))
   (q/vertex t (- t) (- t))
   (q/vertex 0 0 t)
   (q/end-shape)

   (q/pop-matrix))  
  )
