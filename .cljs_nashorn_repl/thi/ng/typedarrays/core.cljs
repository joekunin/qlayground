(ns thi.ng.typedarrays.core)

(defn typed-arrays-supported?
  "Returns true if JS runtime supports typed arrays"
  [] (not (nil? (aget js/window "ArrayBuffer"))))

(def ^:private array-types
  {"Uint8Array"        :uint8
   "Uint8ClampedArray" :uint8-clamped
   "Uint16Array"       :uint16
   "Uint32Array"       :uint32
   "Int8Array"         :int8
   "Int16Array"        :int16
   "Int32Array"        :int32
   "Float32Array"      :float32
   "Float64Array"      :float64})

(defn typed-array?
  "Returns truthy value if the given arg is a typed array instance"
  [x]
  (if (= "object" (goog/typeOf x))
    (if (number? (.-BYTES_PER_ELEMENT x))
      (.-buffer x))))

(defn array-type
  [x]
  (if (array? x)
    :array
    (if (typed-array? x)
      (->> (.-constructor x)
           str
           (re-find #"((Uint|Int|Float)\d+(Clamped)?Array)")
           first
           (get array-types)))))

(when typed-arrays-supported?
  (run!
   (fn [type]
     (when-not (.. (aget js/self type) -prototype -slice)
       (set! (.. (aget js/self type) -prototype -slice)
             (fn [from to]
               (this-as this
                 (let [from (if (neg? from)
                              (int (+ (.-length this) from))
                              (int from))
                       to   (if (goog/isNumber to)
                              (if (neg? to)
                                (int (+ (.-length this) to))
                                (Math/min to (.-length this)))
                              (.-length this))
                       len  (Math/max (- to from) 0)
                       ctor (.-constructor this)
                       dest (js* "new ~{}(~{})" ctor len)]
                   (loop [i 0]
                     (when (< i len)
                       (aset dest i (aget this (+ from i)))
                       (recur (inc i))))
                   dest))))))
   (keys array-types)))

(defn int8
  "Creates a native Int8Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Int8Array. size-or-coll)
    (typed-array? size-or-coll) (js/Int8Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Int8Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn int8-view
  "Creates a Int8Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Int8Array. (.-buffer a)))
  ([a offset len] (js/Int8Array. (.-buffer a) offset len)))

(defn uint8
  "Creates a native Uint8Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Uint8Array. size-or-coll)
    (typed-array? size-or-coll) (js/Uint8Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Uint8Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint8-view
  "Creates a Uint8Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Uint8Array. (.-buffer a)))
  ([a offset len] (js/Uint8Array. (.-buffer a) offset len)))

(defn uint8-clamped
  "Creates a native Uint8ClampedArray of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Uint8ClampedArray. size-or-coll)
    (typed-array? size-or-coll) (js/Uint8ClampedArray. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Uint8ClampedArray. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint8-clamped-view
  "Creates a Uint8ClampedArray view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Uint8ClampedArray. (.-buffer a)))
  ([a offset len] (js/Uint8ClampedArray. (.-buffer a) offset len)))

(defn int16
  "Creates a native Int16Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Int16Array. size-or-coll)
    (typed-array? size-or-coll) (js/Int16Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Int16Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn int16-view
  "Creates a Int16Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Int16Array. (.-buffer a)))
  ([a offset len] (js/Int16Array. (.-buffer a) offset len)))

(defn uint16
  "Creates a native Uint16Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Uint16Array. size-or-coll)
    (typed-array? size-or-coll) (js/Uint16Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Uint16Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint16-view
  "Creates a Uint16Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Uint16Array. (.-buffer a)))
  ([a offset len] (js/Uint16Array. (.-buffer a) offset len)))

(defn int32
  "Creates a native Int32Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Int32Array. size-or-coll)
    (typed-array? size-or-coll) (js/Int32Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Int32Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn int32-view
  "Creates a Int32Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Int32Array. (.-buffer a)))
  ([a offset len] (js/Int32Array. (.-buffer a) offset len)))

(defn uint32
  "Creates a native Uint32Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Uint32Array. size-or-coll)
    (typed-array? size-or-coll) (js/Uint32Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Uint32Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn uint32-view
  "Creates a Uint32Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Uint32Array. (.-buffer a)))
  ([a offset len] (js/Uint32Array. (.-buffer a) offset len)))

(defn float32
  "Creates a native Float32Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Float32Array. size-or-coll)
    (typed-array? size-or-coll) (js/Float32Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Float32Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn float32-view
  "Creates a Float32Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Float32Array. (.-buffer a)))
  ([a offset len] (js/Float32Array. (.-buffer a) offset len)))

(defn float64
  "Creates a native Float64Array of the given size or from `coll`
  If arg already is a typed array then a copy is created."
  [size-or-coll]
  (cond
    (number? size-or-coll) (js/Float64Array. size-or-coll)
    (typed-array? size-or-coll) (js/Float64Array. size-or-coll)
    :else
    (let [len (count size-or-coll)
          buf (js/Float64Array. len)]
      (loop [i 0, coll size-or-coll]
        (when (< i len)
          (aset buf i (first coll))
          (recur (inc i) (next coll))))
      buf)))

(defn float64-view
  "Creates a Float64Array view of the given typed array's
  underlying ArrayBuffer, optionally from given byte offset
  and item length."
  ([a] (js/Float64Array. (.-buffer a)))
  ([a offset len] (js/Float64Array. (.-buffer a) offset len)))
