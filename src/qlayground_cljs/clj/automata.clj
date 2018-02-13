(ns qlayground-cljs.automata
  "This module visualizes elementary cellular automata. It's primarily intended
   to show off the fun aspects of functional programming and lazy-sequences in clojure to those who are coming from an OO background.

   If you're interested in how elementary cellular automata work, see:
   http://mathworld.wolfram.com/ElementaryCellularAutomaton.html and
   http://en.wikipedia.org/wiki/Elementary_cellular_automaton

   Also, I highly recommend reading this source file bottom to top in order to understand it best.

   In particular, the code here makes heavy use of lazy-sequences, both directly through
   `lazy-seq` and also through functions like map, for, partition, and other functions that
   in clojure return lazy sequences. In some cases, we force lazy-evaluation for side-effects with
   (dorun).

   Since the visualization is of a stream of states for the automata, lazy-sequences are a very apt model.
   We can define a sequence of all future results, and simply iterate our way toward where we'd like to be.
   At a high level this library revolves around a single lazy seq that represents all future states.

   The rendering model here is quite simple, we use pure clojure to fill a 2D array of 1s and 0s that contains
   the current on-screen state. This 2D buffer is, itself, a partition (e.g. slice) of the lazy sequence of all
   future states. See the run-rule function for more detail.

   The core functions behind the laziness are (run-rule) which sets up the initial state and UI,
   (simulation), which returns a lazy sequence of results,
   and (simulate) which does the legwork of applying the automaton's rules.

   There are other functional aspects here at play. The (rule) function for instance, is a higher-order function,
   meaning that it returns a brand new function. The function it returns implements a given rule, matching the patterns
   of the rule to outputs"

  (:require [quil.core :as qc]
	    [clojure.pprint :refer :all])
  (:import java.lang.Math))


(def live-color [242 233 99])
(def dead-color [64 37 27])

(defn int->bdigits
  "Gets the binary digits that comprise an integer as a seq of ints."
  [number]
  (for [c (Integer/toBinaryString number)] (Integer/valueOf (str c))))

(defn zero-pad
  "Forward pads a seq with 0s to match a given length. Used for making sure int->bdigits hits byte boundaries"
  [x len]
  (let [shortage (- len (count x))]
    (if (< shortage 1)
      x
      (concat (repeat shortage 0) x))))

(def input-patterns
  "The list of possible input sequences for elementary cellular automata, which are easily generated
   by counting down from 8 in binary, and making sure we have at least three digits.
   This should produce a list like: ((111 110 ...))"
  (map #(zero-pad (int->bdigits %1) 3) (range 8)))

(defn rule-mappings
  "Returns a mapping of patterns to new states. Returns a structure like:
   {(0 1 1) 1
    ...}"
  [number]
  (zipmap input-patterns
          (reverse (zero-pad (int->bdigits number) 8))))

(defn rule
  "Returns a function that will process a triad of input values according to a given rule #.
   Since rules are simple lookup tables, this maps to nothing more than a get really.
   We use a function here only to be able to close over the rule-mappings and only evaluate those once."
  [number]
  (let [mappings (rule-mappings number)]
    (fn [triad] (get mappings triad))))

(defn bookend
  "Pads a seq with a given value on both sides."
  [x v]
  (concat [v] x [v]))

(defn simulate
  "Runs a single iteration of a given rule-fn on a given-state"
  [rule-fn state]
  (let [rule (rule-mappings 110)]
    (for [triad (partition 3 1 (bookend state 0))]
      (rule-fn triad))))

(defn simulation
  "Returns a lazy-seq of future states for a given rule-fn and state"
  [rule-fn state]
  (let [new-state (simulate rule-fn state)]
    (cons new-state (lazy-seq (simulation rule-fn new-state)))))

(defn draw-buffer
  "Redraw what's on screen given a buffer of cell data at a given scale"
  [buffer scale]
  (letfn [(draw-row [y row]
            (dorun (map-indexed (fn [x col] (draw-cell x y col)) row)))
          (draw-cell [x y col]
            (apply qc/fill (if (= 1 col) live-color dead-color))
            (qc/rect (* scale x) (* scale y) scale scale))]
    (dorun (map-indexed draw-row buffer))))

(defn setup
  "Setup the UI"
  []
  (qc/smooth)
  (qc/frame-rate 24))

(defn run-rule [rule-num {:keys [width height scale]}]
  (let [width (or width 100)
        height (or height 100)
        scale (or scale 5)
        initial (repeatedly height #(rand-int 2))
        sim (simulation (rule rule-num) initial)
        time-slices (atom (partition height 1 sim))]

    (println "Rule " rule-num " mappings:")
    (pprint (rule-mappings rule-num))

    (qc/defsketch automata
      :title (str "Rule " rule-num)
      :setup setup
      :draw (fn drawfn []
              (draw-buffer (first @time-slices) scale)
              (swap! time-slices (fn [_] (rest @time-slices))))
      :size [(* scale width) (* scale height)])))

(defn -main [rule-num & args]
  (run-rule (Integer/valueOf rule-num)
    {:width 100 :height 100 :scale 4}))

(-main 10)
(run-rule (Integer/valueOf 182)
  {:width 100 :height 100 :scale 10})
