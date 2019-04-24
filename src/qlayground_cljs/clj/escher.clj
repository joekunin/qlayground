(ns qlayground-cljs.clj.escher
  (:require [clojure.core.matrix.operators :refer :all]
            [qlayground-cljs.clj.helpers :as h]
            [qlayground-cljs.clj.particle :as p]
            [quil.core :as q]
            [quil.middleware :as m]
            [random-seed.core :refer :all]
            [thi.ng.geom.circle :as c]
            [thi.ng.geom.core :as g]
            [mikera.image.core :as image]))

(def fish(image/load-image  "inputs/fish.jpg"))

(image/show fish :zoom 0.2)

(defn rot
  [picture]
  (q/rotate 90))

(defn flip
  [picture]
  picture)

(defn rot45
  [picture]
  picture)

(defn above
  ([picture-a picture-b]
   (above 0 0 picture-a picture-b))
  ([int int picture-a picture-b]
   [picture-a picture-b]))

(defn beside
  ([picture-a picture-b]
   (beside 0 0 picture-a picture-b))
  ([int int picture-a picture-b]))

(defn over
  [picture]
  picture)


