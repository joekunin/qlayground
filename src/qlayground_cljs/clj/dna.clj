(ns qlayground-cljs.clj.dna
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [qlayground-cljs.clj.lsystem :as l]))

(defn sierpinski-triangle
  []
  (let [rules      {\a "b-a-b"
                    \b "a+b+a"}
        start      "a"
        angle      (* 2 Math/PI (/ 60 360))
        operations {\a (partial l/forward 1)
                    \b (partial l/forward 1)
                    \- (partial l/rotate (- angle))
                    \+ (partial l/rotate angle)}
        system     (l/l-system rules 9 start)]
    (l/run-turtle (doto (l/create-turtle 600 600)
                    (.translate 50 550)
                    (.rotate (/ Math/PI -2)))
      operations
      system)))

(defn genome
  []
  (let [width       2000
        height      1000
        rules      {\A "+A+"
                    \C "-C-"
                    \T "+T+"
                    \G "-G-"}
        start      (dedupe
                     (slurp "inputs/genome.txt"))
        angle      (* 2 Math/PI (/ 60 360))
        operations {\A (partial l/forward 2)
                    \C (partial l/forward 2)
                    \T (partial l/forward 2)
                    \G (partial l/forward 2)
                    \- (partial l/rotate (- angle))
                    \+ (partial l/rotate angle)}
        system     (l/l-system rules 2 start)]
    (l/run-turtle (doto (l/create-turtle width height)
                    (.translate (/ width 4) (/ height 8))
                    (.rotate (/ Math/PI -2)))
      operations
      system)))

(genome)

(defn algae
  [steps]
  (let [rules      {\a "a+b"
                    \b "-a+"}
        start      "a"
        angle      45;;(* 2 Math/PI (/ 60 360))
        operations {\a (partial l/forward 50)
                    \b (partial l/forward 50)
                    \- (partial l/rotate (- angle))
                    \+ (partial l/rotate angle)}
        system     (l/l-system rules steps start)]
    (l/run-turtle
      (doto (l/create-turtle 900 900
              )
        (.translate 450 450)
        (.rotate (/ Math/PI -2)))
      operations
      system)))

(defn penrose
  [steps]
  (let [rules      {\W "YF++ZF4-XF[-YF4-WF]++"
                    \X "+YF--ZF[3-WF--XF]+"
                    \Y "-WF++XF[+++YF++ZF]-"
                    \Z "--YF++++WF[+ZF++++XF]--XF"}
        start      "[X]++[X]++[X]++[X]++[X]"
        angle      36;;(* 2 Math/PI (/ 60 360))
        operations {\a (partial forward 50)
                    \b (partial forward 50)
                    \- (partial rotate (- angle))
                    \+ (partial rotate angle)}
        system     (l-system rules steps start)]
    (run-turtle (doto (create-turtle 900 900)
                  (.translate 450 450)
                  (.rotate (/ Math/PI -2)))
      operations
      systemn)))

#_(genome)
;;(penrose 9)


;; Axiom: 
;; [N]++[N]++[N]++[N]++[N]

;; Rules:
;; M=OA++pA----NA[-OA----MA]++;
;; N=+OA--PA[---MA--NA]+;
;; O=-MA++NA[+++OA++PA]-;
;; P=--OA++++MA[+PA++++NA]--NA;
;; A=

;; Angle:36

;;(algae 15)

;;(sierpinski-triangle)




