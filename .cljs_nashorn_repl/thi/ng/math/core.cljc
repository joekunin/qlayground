(ns thi.ng.math.core
  (:refer-clojure :exclude [+ - * min max bit-count])
  #?(:clj
     (:require [thi.ng.math.macros :as mm])
     :cljs
     (:require-macros [thi.ng.math.macros :as mm])))

(defprotocol IMathOps
  (+ [_] [_ a] [_ a b] [_ a b c])
  (- [_] [_ a] [_ a b] [_ a b c])
  (* [_] [_ a] [_ a b] [_ a b c])
  (div [_] [_ a] [_ a b] [_ a b c])
  (madd [_ a b])
  (addm [_ a b])
  (msub [_ a b])
  (subm [_ a b])
  (abs [_]))
(defprotocol IMutableMathOps
  (+! [_] [_ a] [_ a b] [_ a b c])
  (-! [_] [_ a] [_ a b] [_ a b c])
  (*! [_] [_ a] [_ a b] [_ a b c])
  (div! [_] [_ a] [_ a b] [_ a b c])
  (madd! [_ a b])
  (addm! [_ a b])
  (msub! [_ a b])
  (subm! [_ a b])
  (abs! [_]))
(defprotocol IConjugate
  (conjugate [_]))
(defprotocol ICrossProduct
  (cross [_ a]))
(defprotocol IDeltaEquals
  (delta= [a b] [a b eps]))
(defprotocol IDeterminant
  (determinant [_]))
(defprotocol IDotProduct
  (dot [_] [_ a]))
(defprotocol IInterpolate
  (mix [_ x] [_ x t] [_ a b c u v])
  (mix-with [_ x t f])
  (step [_ e])
  (smoothstep [_ e1 e2]))
(defprotocol IInvert
  (invert [_]))
(defprotocol IMinMax
  (min [_ a] [_ a b])
  (max [_ a] [_ a b]))
(defprotocol ILimit
  (limit [_ x]))
(defprotocol IMagnitude
  (mag [_])
  (mag-squared [_]))
(defprotocol INormalize
  (normalize [_] [_ norm])
  (normalized? [_]))
(defprotocol ISetOps
  (union [_ x])
  (intersection [_ x])
  (difference [_ x]))
(defprotocol ITranspose
  (transpose [_]))

(def ^:const PI Math/PI)
(def ^:const TWO_PI (mm/mul PI 2.0))
(def ^:const HALF_PI (/ PI 2.0))
(def ^:const THIRD_PI (/ PI 3.0))
(def ^:const QUARTER_PI (/ PI 4.0))
(def ^:const SIXTH_PI (/ PI 6.0))
(def ^:const THREE_HALVES_PI (mm/mul PI 1.5))

(def ^:const MAX 1.7976931348623157E308)
(def ^:const MIN 4.9E-324)

(def ^:const SQRT2 (Math/sqrt 2))
(def ^:const SQRT3 (Math/sqrt 3))
(def ^:const PHI (/ (inc (Math/sqrt 5.0)) 2))

(def ^:const THIRD (/ 1.0 3.0))
(def ^:const TWO_THIRD (/ 2.0 3.0))
(def ^:const SIXTH (/ 1.0 6.0))

(def ^:const LOG2 (Math/log 2.0))

(def ^:const INF+ #?(:clj Double/POSITIVE_INFINITY :cljs (.-POSITIVE_INFINITY js/Number)))
(def ^:const INF- #?(:clj Double/NEGATIVE_INFINITY :cljs (.-NEGATIVE_INFINITY js/Number)))

(def ^:const DEG (/ 180.0 PI))
(def ^:const RAD (/ PI 180.0))

(def ^:const INV7BIT (/ 1.0 0x7f))
(def ^:const INV8BIT (/ 1.0 0xff))
(def ^:const INV15BIT (/ 1.0 0x7fff))
(def ^:const INV16BIT (/ 1.0 0xffff))
(def ^:dynamic *eps* 1e-6)
(def ^:dynamic *rnd* #?(:clj (java.util.Random.) :cljs Math/random))

#?(:clj
   (defn abs* [x] (if (neg? x) (clojure.core/- x) x))
   :cljs
   (def abs* Math/abs))

(defn abs-diff
  [x y] (abs* (mm/sub x y)))

(defn sign
  [x] (if (zero? x) 0 (if (pos? x) 1 -1)))
(extend-protocol IDeltaEquals
  #?@(:clj
      [Byte
       (delta=
        ([a b] (if (number? b) (<= (abs* (mm/sub a b)) *eps*)))
        ([a b eps] (if (number? b) (<= (abs* (mm/sub a b)) eps))))
       Short
       (delta=
        ([a b] (if (number? b) (<= (abs* (mm/sub a b)) *eps*)))
        ([a b eps] (if (number? b) (<= (abs* (mm/sub a b)) eps))))
       Integer
       (delta=
        ([a b] (if (number? b) (<= (abs* (mm/sub a b)) *eps*)))
        ([a b eps] (if (number? b) (<= (abs* (mm/sub a b)) eps))))
       Long
       (delta=
        ([a b] (if (number? b) (<= (abs* (mm/sub a b)) *eps*)))
        ([a b eps] (if (number? b) (<= (abs* (mm/sub a b)) eps))))
       Float
       (delta=
        ([a b] (if (number? b) (<= (abs* (mm/sub a b)) *eps*)))
        ([a b eps] (if (number? b) (<= (abs* (mm/sub a b)) eps))))
       Double]
      :cljs [number])
  (delta=
   ([a b] (if (number? b) (<= (abs* (mm/sub a b)) *eps*)))
   ([a b eps] (if (number? b) (<= (abs* (mm/sub a b)) eps))))

  #?(:clj clojure.lang.PersistentVector :cljs PersistentVector)
  (delta=
   ([a b] (delta= a b *eps*))
   ([a b eps]
      (if (sequential? b)
        (if (== (count a) (count b))
          (loop [a a, b b]
            (if a
              (if (delta= (first a) (first b) eps)
                (recur (next a) (next b))
                false)
              true))
          false)
        false)))
  #?(:clj clojure.lang.PersistentList :cljs List)
  (delta=
   ([a b] (delta= a b *eps*))
   ([a b eps]
      (if (sequential? b)
        (if (== (count a) (count b))
          (loop [a a, b b]
            (if a
              (if (delta= (first a) (first b) eps)
                (recur (next a) (next b))
                false)
              true))
          false)
        false)))
  #?(:clj clojure.lang.LazySeq :cljs LazySeq)
  (delta=
   ([a b] (delta= a b *eps*))
   ([a b eps]
      (if (sequential? b)
        (if (== (count a) (count b))
          (loop [a a, b b]
            (if a
              (if (delta= (first a) (first b) eps)
                (recur (next a) (next b))
                false)
              true))
          false)
        false)))
  #?(:clj clojure.lang.PersistentVector$ChunkedSeq :cljs IndexedSeq)
  (delta=
   ([a b] (delta= a b *eps*))
   ([a b eps]
      (if (sequential? b)
        (if (== (count a) (count b))
          (loop [a a, b b]
            (if a
              (if (delta= (first a) (first b) eps)
                (recur (next a) (next b))
                false)
              true))
          false)
        false)))

  nil
  (delta= ([_ b] (nil? b)) ([_ b _] (nil? b))))
(defn ensure-even
  "Returns x if even or `x+1` if `x` is odd."
  [x] (if (even? x) x (inc x)))

(defn ensure-odd
  "Returns x if odd or `x+1` if `x` is even."
  [x] (if (even? x) (inc x) x))

(defn signum
  ([x] (if (neg? x) -1 (if (zero? x) 0 1)))
  ([x delta]
     (if (delta= 0.0 x delta) 0
         (if (neg? x) -1 1))))
(defn clamp
  "Constraints x to be in closed interval [min max]."
  [x min max] (if (< x min) min (if (> x max) max x)))

(defn clamp-normalized
  "Constraints x to be in closed interval [0.0 .. 1.0]"
  [x] (if (< x -1.0) -1.0 (if (> x 1.0) 1.0 x)))

(defn map-interval
  "Maps x from one interval into another. Intervals can be defined as
  vectors. If range of input interval is zero, returns min. bound of
  output."
  ([x [in1 in2] [out1 out2]]
   (if (not= in1 in2)
     (mm/madd (mm/sub out2 out1) (mm/subdiv x in1 in2 in1) out1)
     out1))
  ([x in1 in2 out1 out2]
   (if (not= in1 in2)
     (mm/madd (mm/sub out2 out1) (mm/subdiv x in1 in2 in1) out1)
     out1)))

(defn map-interval-clamped
  "Takes a number x, input interval and output interval. Returns x
  mapped proportionally from input to output interval and clamps it to
  output. If range of input interval is zero, returns min. bound of
  output."
  ([x [in1 in2] [out1 out2]]
     (map-interval-clamped x in1 in2 out1 out2))
  ([x in1 in2 out1 out2]
     (if (<= x in1)
       out1
       (if (>= x in2)
         out2
         (map-interval x in1 in2 out1 out2))))
  ([x [in1 in2] [out1 out2] [c1 c2]]
     (clamp (map-interval x in1 in2 out1 out2) c1 c2))
  ([x in1 in2 out1 out2 c1 c2]
     (clamp (map-interval x in1 in2 out1 out2) c1 c2)))

(defn in-range?
  "Returns true if x >= min and x <= max."
  ([[min max] x]
     (if (>= x min) (<= x max)))
  ([min max x]
     (if (>= x min) (<= x max))))

(defn wrap-range
  "Returns x mod y with result always in semi-closed interval [0..y"
  ([x y] (let [x (rem x y)] (if (neg? x) (mm/add x y) x))))

(defn norm-range
  "Returns lazy-seq of n values in the closed interval [0.0, 1.0] at
  resolution 1/x."
  [n] (map #(/ % (double n)) (range (inc n))))
(defn mix*
  [a b t] (mm/submadd b a t a))

(defn step*
  [edge x] (if (< x edge) 0.0 1.0))

(defn smoothstep*
  [e0 e1 x]
  (let [t (clamp (mm/subdiv x e0 e1 e0) 0.0 1.0)]
    (mm/mul t (mm/mul t (mm/madd t -2.0 3.0)))))

(defn mix-circular
  [a b t]
  (let [t (mm/sub 1.0 t)]
    (mm/submadd b a (Math/sqrt (mm/sub 1.0 (mm/mul t t))) a)))

(defn mix-circular-flipped
  [a b t]
  (mm/submadd
   b a
   (clojure.core/-
    (mm/sub
     (Math/sqrt (mm/sub 1.0 (mm/mul t t))) 1.0))
   a))

(defn mix-cosine
  [a b t] (mm/submadd a b (mm/madd (Math/cos (mm/mul t PI)) 0.5 0.5) b))

(defn mix-bezier
  [a b t c1 c2]
  (let [tsq (mm/mul t t)
        invt (mm/sub 1.0 t)
        itsq (mm/mul invt invt)]
    (mm/add
     (mm/mul a t itsq)
     (mm/mul (mm/submadd b a c1 a) 3.0 t itsq)
     (mm/mul (mm/submadd b a c2 b) 3.0 tsq invt)
     (mm/mul b t tsq))))

(defn mix-exp
  [a b t e] (mm/submadd b a (Math/pow t e) a))

(defn mix-decimated
  [a b t n] (mm/submadd b a (/ (int (mm/mul t n)) (double n)) a))

(defn mix-lens
  [a b t pos strength]
  (let [v (mm/submadd b a t a)]
    (mm/add (if (< t pos)
                      (mm/subm
                       ((if (pos? strength) mix-circular-flipped mix-circular)
                        a (mm/submadd b a pos a) (/ t pos)) v strength)
                      (mm/subm
                       ((if (neg? strength) mix-circular-flipped mix-circular)
                        (mm/submadd b a pos a) b (mm/subdiv t pos 1.0 pos)) v (abs* strength)))
                    v)))

(defn mix-bounce
  [a b t k]
  (if-not (zero? t)
    (let [t' (mm/mul t k)
          t' (mm/sub 1.0 (mm/mul (/ (Math/sin t') t') (Math/cos (mm/mul t HALF_PI))))]
      (mm/submadd b a t' a))
    a))
(defn floor
  [x]
  #?(:clj
     (long (Math/floor x))
     :cljs
     (Math/floor x)))

(defn ceil
  [x]
  #?(:clj
     (long (Math/ceil x))
     :cljs ;; TODO see abs*
     (Math/ceil x)))

(defn roundto
  [x prec] (mm/mul (floor (mm/add (/ x prec) 0.5)) prec))

(defn ceil-pow2
  [x]
  (loop [pow2 1]
    (if (>= pow2 x) pow2 (recur (bit-shift-left pow2 1)))))

(defn floor-pow2
  [x]
  #?(:clj
     (long (Math/pow 2 (long (/ (Math/log x) LOG2))))
     :cljs
     (Math/pow 2 (int (/ (Math/log x) LOG2)))))

;; TODO now included in CLJ1.8?
(defn bit-count
  [x] (ceil (/ (Math/log x) LOG2)))

(defn trunc
  [x] (if (neg? x) (ceil x) (floor x)))

(defn fract
  [x] (mm/sub x (Math/floor x)))

(defn fdim
  [x y] (if (> x y) (mm/sub x y) 0))
(defn radians [x] (mm/mul x RAD))

(defn degrees [x] (mm/mul x DEG))
(defn maxmag
  [x y]
  (let [ax (abs* x) ay (abs* y)]
    (cond
     (> ax ay) x
     (> ay ax) y
     :default x)))

(defn minmag
  [x y]
  (let [ax (abs* x) ay (abs* y)]
    (cond
     (< ax ay) x
     (< ay ax) y
     :default x)))

(defn ldexp
  [x k] (mm/mul x (Math/pow 2 (int k))))

(defn remquo
  [x y]
  (let [k (/ x y)
        f (fract k)
        k (cond
           (= f 0.5) (if (even? (int k)) (int k) (ceil k))
           (< f 0.5) (floor k)
           :default (ceil k))]
    (mm/sub x (mm/mul k y))))

(defn hypot
  [x y] (Math/sqrt (mm/madd x x y y)))

(defn rootn
  [x y] (Math/pow x (/ 1.0 y)))

(defn rsqrt
  [x] (let [r (Math/sqrt x)] (if (pos? r) (/ 1.0 r) 0)))

(defn impulse
  [k t]
  (let [h (mm/mul k t)] (mm/mul h (Math/exp (mm/sub 1.0 h)))))

(defn sinc
  ([x] (if (zero? x) 0.0 (/ (Math/sin x) x)))
  ([x freq] (if (zero? x) 0.0 (let [x' (mm/mul x freq)] (/ (Math/sin x') x')))))
(defn random
  #?@(:clj
      [([] (.nextDouble ^java.util.Random *rnd*))
       ([max] (mm/mul (.nextDouble ^java.util.Random *rnd*) max))
       ([min max] (mm/submadd max min (.nextDouble ^java.util.Random *rnd*) min))]
      :cljs
      [([] (*rnd*))
       ([max] (mm/mul (*rnd*) max))
       ([min max] (mm/submadd max min (*rnd*) min))]))

(defn randnorm
  []
  #?(:clj
     (dec (mm/mul (.nextDouble ^java.util.Random *rnd*) 2.0))
     :cljs
     (dec (mm/mul (*rnd*) 2.0))))
(defn percentile-index
  [n num]
  (dec
   (if (< n 100)
     (int (Math/round (mm/madd (/ n 100.0) num 0.5)))
     num)))

(defn percentile
  [n sorted]
  (->> sorted
       (count)
       (percentile-index n)
       (nth sorted)))

(defn quartile-index
  [n num] (percentile-index (mm/mul n 25) num))

(defn quartile-range
  [n num]
  (let [a (quartile-index (dec n) num)
        b (quartile-index n num)]
    [a (if (= n 4) (inc b) b)]))

(defn quartile
  "Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile."
  [n sorted]
  (let [[a b] (quartile-range n (count sorted))]
    (->> sorted (drop a) (take (mm/sub b a)))))
(defn normdist-weights
  ([n] (normdist-weights n 1.0))
  ([n scale]
     (let [ws (repeatedly n random)
           s (/ scale (reduce clojure.core/+ ws))]
       (map #(mm/mul s %) ws))))
