(defproject qlayground-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :java-source-paths ["src/java"]
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [quil "3.1.0-SNAPSHOT"]
                 ;;[quil "2.5.0"]
                 [scad-clj "0.5.2"]
                 [reagent "0.6.0"]
                 ;;[figwheel-sidecar "0.5.0-SNAPSHOT"]
                 [generateme/fastmath "1.3.0-SNAPSHOT"]
                 [clojure2d "1.2.0-SNAPSHOT"]
                 [net.littleredcomputer/sicmutils "0.10.0"]

                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/core.async "0.3.443" :exclusions [org.clojure/clojure] ]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [org.clojure/math.numeric-tower "0.0.4"]

                 [thi.ng/geom "1.0.0-RC3"]
                 [thi.ng/luxor "0.3.1"]
                 [thi.ng/common "0.3.1"]
                 [thi.ng/morphogen "0.1.1"]

                 [net.mikera/imagez "0.12.0"]
                 [org.clojars.serabe/rinzelight "0.0.4"]

                 [org.jogamp.gluegen/gluegen-rt "2.3.2" :classifier "natives-macosx-universal"]
                 [org.jogamp.jogl/jogl-all "2.3.2" :classifier "natives-macosx-universal"]

                 [com.taoensso/tufte "1.1.3"]
                 [net.mikera/clisk "0.11.0"]
                 [rm-hull/infix "0.3.0"]
                 [net.mikera/core.matrix "0.62.0"]
                 [net.mikera/vectorz-clj "0.47.0"]

                 [random-seed "1.0.0"]]

  ;;  :jvm-opts ["-Xms5000m" "-Xmx5000M" "-server"]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.8" :exclusions [org.clojure/clojure]] ]

  ;;:hooks [leiningen.cljsbuild]

  #_:cljsbuild
  #_{:builds [{:id "main"
               :source-paths ["src"]
               :figwheel true
               :compiler {:output-to "js/main.js" 
                          :output-dir "out"
                          :main "qlayground_cljs.core"
                          :optimizations :none
                          :pretty-print true}}]}) 

