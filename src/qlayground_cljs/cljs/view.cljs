(ns qlayground-cljs.view
  (:require [reagent.core :as r]
          ;  [qlayground-cljs.epicycloid :as epicycloid]
            [qlayground-cljs.circlespin :as circlespin]))


(def w 50)
(def h 50)

(.log js/console "hello orion")




#_(defn epicycloid []
  (r/create-class
   {:reagent-render (fn [] [:canvas#epicycloid {:width w :height h}])
    :component-did-mount epicycloid/epicycloid}))

#_(defn circlespin []
  (r/create-class
   {:reagent-render (fn [] [:canvas#circlespin {:width w :height h}])
    :component-did-mount circlespin/circlespin}))

(defn works []
  (fn []
    [:div
     ;;[epicycloid]
     [circlespin]
     ]))

#_(r/render-component
 [works]
 (.getElementById js/document "app-container"))

(defn on-js-reload [])



