(ns thi.ng.dstruct.streams
  (:require
   [thi.ng.xerror.core :as err])
  #?(:clj
     (:import
      [java.io OutputStream InputStream])))

(declare ensure-readable ensure-size)

(defprotocol IInputStream
  (read-utf8-line [_])
  (read-uint8 [_])
  (read-uint16-le [_])
  (read-uint16-be [_])
  (read-uint32-le [_])
  (read-uint32-be [_])
  (read-float-le [_])
  (read-float-be [_])
  (read-double-le [_])
  (read-double-be [_])
  (read-vec2f-le [_])
  (read-vec2f-be [_])
  (read-vec3f-le [_])
  (read-vec3f-be [_]))
(defprotocol IOutputStream
  (write-utf8-bytes [_ str])
  (write-uint8 [_ x])
  (write-uint16-le [_ x])
  (write-uint16-be [_ x])
  (write-uint32-le [_ x])
  (write-uint32-be [_ x])
  (write-float-le [_ x])
  (write-float-be [_ x])
  (write-double-le [_ x])
  (write-double-be [_ x])
  (write-vec2f-le [_ v])
  (write-vec2f-be [_ v])
  (write-vec3f-le [_ v])
  (write-vec3f-be [_ v]))
(defprotocol IStreamPosition
  (skip [_ x])
  (get-position [_]))
(defprotocol IBuffer
  (get-byte-buffer [_])
  (get-float-buffer [_])
  (get-double-buffer [_])
  (get-short-buffer [_])
  (get-int-buffer [_]))

(defprotocol IIntoBuffer
  (into-byte-buffer [_ dest stride idx])
  (into-float-buffer [_ dest stride idx])
  (into-double-buffer [_ dest stride idx])
  (into-short-buffer [_ dest stride idx])
  (into-int-buffer [_ dest stride idx]))

#?(:clj (defn int->byte [x] (if (> x 0x7f) (- x 0x100) x)))
#?(:clj (defn byte->int [x] (if (neg? x) (+ x 0x100) x)))

;; http://stackoverflow.com/a/18729536/294515
#?(:cljs (defn utf8-str [str] (-> str js/encodeURIComponent js/unescape)))

#?(:clj
   (deftype InputStreamWrapper [^InputStream in ^bytes buf]
     IInputStream
     (read-uint8
         [_]
       (byte->int (.read in)))
     (read-uint16-le
         [_]
       (.read in buf 0 2)
       (bit-or (byte->int (aget buf 0)) (bit-shift-left (byte->int (aget buf 1)) 8)))
     (read-uint16-be
         [_]
       (.read in buf 0 2)
       (bit-or (byte->int (aget buf 1)) (bit-shift-left (byte->int (aget buf 0)) 8)))
     (read-uint32-le
         [_]
       (.read in buf 0 4)
       (bit-or
        (byte->int (aget buf 0))
        (bit-shift-left (byte->int (aget buf 1)) 8)
        (bit-shift-left (byte->int (aget buf 2)) 16)
        (bit-shift-left (byte->int (aget buf 3)) 24)))
     (read-uint32-be
         [_]
       (.read in buf 0 4)
       (bit-or
        (byte->int (aget buf 3))
        (bit-shift-left (byte->int (aget buf 2)) 8)
        (bit-shift-left (byte->int (aget buf 1)) 16)
        (bit-shift-left (byte->int (aget buf 0)) 24)))
     (read-float-le
         [_] (Float/intBitsToFloat (unchecked-int (read-uint32-le _))))
     (read-float-be
         [_] (Float/intBitsToFloat (unchecked-int (read-uint32-be _))))
     (read-double-le
         [_]
       (Double/longBitsToDouble
        (unchecked-long
         (bit-or
          (read-uint32-le _)
          (bit-shift-left (read-uint32-le _) 32)))))
     (read-double-be
         [_]
       (Double/longBitsToDouble
        (unchecked-long
         (bit-or
          (bit-shift-left (read-uint32-be _) 32)
          (read-uint32-be _)))))
     (read-vec2f-le
         [_] [(read-float-le _) (read-float-le _)])
     (read-vec2f-be
         [_] [(read-float-be _) (read-float-be _)])
     (read-vec3f-le
         [_] [(read-float-le _) (read-float-le _) (read-float-le _)])
     (read-vec3f-be
         [_] [(read-float-be _) (read-float-be _) (read-float-be _)])
     IStreamPosition
     (skip
         [_ x] (.skip in x) _)
     (get-position
         [_] (throw (UnsupportedOperationException.))))

   :cljs
   (deftype InputStreamWrapper [^js/ArrayBuffer buf ^js/DataView dv ^:mutable pos]
     IInputStream
     (read-uint8
         [_]
       (ensure-readable _ 1)
       (let [x (.getUint8 dv pos)]
         (set! pos (inc pos))
         x))
     (read-uint16-le
         [_]
       (ensure-readable _ 2)
       (let [x (.getUint16 dv pos true)]
         (set! pos (+ pos 2))
         x))
     (read-uint16-be
         [_]
       (ensure-readable _ 2)
       (let [x (.getUint16 dv pos)]
         (set! pos (+ pos 2))
         x))
     (read-uint32-le
         [_]
       (ensure-readable _ 4)
       (let [x (.getUint32 dv pos true)]
         (set! pos (+ pos 4))
         x))
     (read-uint32-be
         [_]
       (ensure-readable _ 4)
       (let [x (.getUint32 dv pos)]
         (set! pos (+ pos 4))
         x))
     (read-float-le
         [_]
       (ensure-readable _ 4)
       (let [x (.getFloat32 dv pos true)]
         (set! pos (+ pos 4))
         x))
     (read-float-be
         [_]
       (ensure-readable _ 4)
       (let [x (.getFloat32 dv pos)]
         (set! pos (+ pos 4))
         x))
     (read-double-le
         [_]
       (ensure-readable _ 8)
       (let [x (.getFloat64 dv pos true)]
         (set! pos (+ pos 8))
         x))
     (read-double-be
         [_]
       (ensure-readable _ 8)
       (let [x (.getFloat64 dv pos)]
         (set! pos (+ pos 8))
         x))
     (read-vec2f-le
         [_] [(read-float-le _) (read-float-le _)])
     (read-vec2f-be
         [_] [(read-float-be _) (read-float-be _)])
     (read-vec3f-le
         [_] [(read-float-le _) (read-float-le _) (read-float-le _)])
     (read-vec3f-be
         [_] [(read-float-be _) (read-float-be _) (read-float-be _)])
     IStreamPosition
     (skip
         [_ x]
       (ensure-readable _ x)
       (set! pos (+ pos x))
       _)
     (get-position
         [_] pos)
     IBuffer
     (get-byte-buffer
         [_] (js/Uint8Array. buf))
     (get-float-buffer
         [_] (js/Float32Array. buf))
     (get-double-buffer
         [_] (js/Float64Array. buf))
     (get-short-buffer
         [_] (js/Uint16Array. buf))
     (get-int-buffer
         [_] (js/Uint32Array. buf))))

#?(:clj
   (deftype OutputStreamWrapper [^OutputStream out ^bytes buf]
     IOutputStream
     (write-utf8-bytes
         [_ str]
       (.write out (.getBytes ^String str "UTF-8")) _)
     (write-uint8
         [_ x] (.write out (unchecked-byte (bit-and x 0xff))) _)
     (write-uint16-le
         [_ x]
       (aset-byte buf 0 (unchecked-byte (bit-and x 0xff)))
       (aset-byte buf 1 (unchecked-byte (bit-and (unsigned-bit-shift-right x 8) 0xff)))
       (.write out buf 0 2)
       _)
     (write-uint16-be
         [_ x]
       (aset-byte buf 1 (unchecked-byte (bit-and x 0xff)))
       (aset-byte buf 0 (unchecked-byte (bit-and (unsigned-bit-shift-right x 8) 0xff)))
       (.write out buf 0 2)
       _)
     (write-uint32-le
         [_ x]
       (aset-byte buf 0 (unchecked-byte (bit-and x 0xff)))
       (aset-byte buf 1 (unchecked-byte (bit-and (unsigned-bit-shift-right x 8) 0xff)))
       (aset-byte buf 2 (unchecked-byte (bit-and (unsigned-bit-shift-right x 16) 0xff)))
       (aset-byte buf 3 (unchecked-byte (unsigned-bit-shift-right x 24)))
       (.write out buf 0 4)
       _)
     (write-uint32-be
         [_ x]
       (aset-byte buf 3 (unchecked-byte (bit-and x 0xff)))
       (aset-byte buf 2 (unchecked-byte (bit-and (unsigned-bit-shift-right x 8) 0xff)))
       (aset-byte buf 1 (unchecked-byte (bit-and (unsigned-bit-shift-right x 16) 0xff)))
       (aset-byte buf 0 (unchecked-byte (unsigned-bit-shift-right x 24)))
       (.write out buf 0 4)
       _)
     (write-float-le
         [_ x]
       (write-uint32-le _ (Float/floatToRawIntBits (float x))))
     (write-float-be
         [_ x]
       (write-uint32-be _ (Float/floatToRawIntBits (float x))))
     (write-double-le
         [_ x]
       (let [x (Double/doubleToRawLongBits (double x))]
         (write-uint32-le _ (unchecked-int (bit-and x 0xffffffff)))
         (write-uint32-le _ (unchecked-int (bit-and (unsigned-bit-shift-right x 32) 0xffffffff)))
         _))
     (write-double-be
         [_ x]
       (let [x (Double/doubleToRawLongBits (double x))]
         (write-uint32-be _ (unchecked-int (bit-and (unsigned-bit-shift-right x 32) 0xffffffff)))
         (write-uint32-be _ (unchecked-int (bit-and x 0xffffffff)))
         _))
     (write-vec2f-le
         [_ v]
       (write-float-le _ (first v))
       (write-float-le _ (nth v 1))
       _)
     (write-vec2f-be
         [_ v]
       (write-float-be _ (first v))
       (write-float-be _ (nth v 1))
       _)
     (write-vec3f-le
         [_ v]
       (write-float-le _ (first v))
       (write-float-le _ (nth v 1))
       (write-float-le _ (nth v 2))
       _)
     (write-vec3f-be
         [_ v]
       (write-float-be _ (first v))
       (write-float-be _ (nth v 1))
       (write-float-be _ (nth v 2))
       _)
     IStreamPosition
     (skip
         [_ x] (.write out (byte-array x)) _)
     (get-position
         [_] (throw (UnsupportedOperationException.))))

   :cljs
   (deftype OutputStreamWrapper
       [^{:tag js/ArrayBuffer :mutable true} buf
        ^{:tag js/DataView :mutable true} dv
        ^:mutable pos]
     IOutputStream
     (write-utf8-bytes
         [_ str]
       (let [utf8 (utf8-str str)
             len  (count utf8)]
         (ensure-size _ (count utf8))
         (loop [i 0, p pos]
           (if (< i len)
             (do (.setUint8 dv p (.charCodeAt utf8 i))
                 (recur (inc i) (inc p)))
             (set! pos p))))
       _)
     (write-uint8
         [_ x]
       (ensure-size _ 1)
       (.setUint8 dv pos x)
       (set! pos (inc pos))
       _)
     (write-uint16-le
         [_ x]
       (ensure-size _ 2)
       (.setUint16 dv pos x true)
       (set! pos (+ pos 2))
       _)
     (write-uint16-be
         [_ x]
       (ensure-size _ 2)
       (.setUint16 dv pos x)
       (set! pos (+ pos 2))
       _)
     (write-uint32-le
         [_ x]
       (ensure-size _ 4)
       (.setUint32 dv pos x true)
       (set! pos (+ pos 4))
       _)
     (write-uint32-be
         [_ x]
       (ensure-size _ 4)
       (.setUint32 dv pos x)
       (set! pos (+ pos 4))
       _)
     (write-float-le
         [_ x]
       (ensure-size _ 4)
       (.setFloat32 dv pos x true)
       (set! pos (+ pos 4))
       _)
     (write-float-be
         [_ x]
       (ensure-size _ 4)
       (.setFloat32 dv pos x)
       (set! pos (+ pos 4))
       _)
     (write-double-le
         [_ x]
       (ensure-size _ 8)
       (.setFloat64 dv pos x true)
       (set! pos (+ pos 8))
       _)
     (write-double-be
         [_ x]
       (ensure-size _ 8)
       (.setFloat64 dv pos x)
       (set! pos (+ pos 8))
       _)
     (write-vec2f-le
         [_ v]
       (ensure-size _ 8)
       (.setFloat32 dv pos (first v) true)
       (.setFloat32 dv (+ pos 4) (nth v 1) true)
       (set! pos (+ pos 8))
       _)
     (write-vec2f-be
         [_ v]
       (ensure-size _ 8)
       (.setFloat32 dv pos (first v))
       (.setFloat32 dv (+ pos 4) (nth v 1))
       (set! pos (+ pos 8))
       _)
     (write-vec3f-le
         [_ v]
       (ensure-size _ 12)
       (.setFloat32 dv pos (first v) true)
       (.setFloat32 dv (+ pos 4) (nth v 1) true)
       (.setFloat32 dv (+ pos 8) (nth v 2) true)
       (set! pos (+ pos 12))
       _)
     (write-vec3f-be
         [_ v]
       (ensure-size _ 12)
       (.setFloat32 dv pos (first v))
       (.setFloat32 dv (+ pos 4) (nth v 1))
       (.setFloat32 dv (+ pos 8) (nth v 2))
       (set! pos (+ pos 12))
       _)
     IStreamPosition
     (skip
         [_ x] (ensure-size _ x) (set! pos (+ pos x)) _)
     (get-position
         [_] pos)
     IBuffer
     (get-byte-buffer
         [_] (js/Uint8Array. buf 0 pos))
     (get-float-buffer
         [_] (js/Float32Array. buf 0 (unsigned-bit-shift-right pos 2)))
     (get-double-buffer
         [_] (js/Float64Array. buf 0 (unsigned-bit-shift-right pos 3)))
     (get-short-buffer
         [_] (js/Uint16Array. buf 0 (unsigned-bit-shift-right pos 1)))
     (get-int-buffer
         [_] (js/Uint32Array. buf 0 (unsigned-bit-shift-right pos 2)))))

#?(:cljs
   (defn ^:private ensure-readable
     [^InputStreamWrapper in size]
     (if (> (+ (.-pos in) size) (.-byteLength (.-buf in)))
       (throw
        (js/Error.
         (str "EOF overrun, current pos: " (.-pos in)
              ", requested read length: " size
              ", but length: " (.-byteLength (.-buf in))))))))

#?(:cljs
   (defn ^:private ensure-size
     [^OutputStreamWrapper out size]
     (let [len (.-byteLength (.-buf out))]
       (if (> (+ (.-pos out) size) len)
         (let [buf' (js/ArrayBuffer. (+ len 0x4000))]
           (.set (js/Uint8Array. buf') (js/Uint8Array. (.-buf out) 0 (.-pos out)))
           (set! (.-buf out) buf')
           (set! (.-dv out) (js/DataView. buf')))))))

#?(:cljs
   (defn as-data-url
  "Takes an input or outputstream and optional mime type, returns
  contents as data url wrapped in a volatile. The volatile's value is
  initially nil and will only become realized after the function
  returned."
     ([stream]
      (as-data-url stream "application/octet-stream"))
     ([stream mime]
      (let [fr  (js/FileReader.)
            uri (volatile! nil)]
        (set! (.-onload fr) (fn [e] (vreset! uri (-> e .-target .-result))))
        (.readAsDataURL fr (js/Blob. #js [(get-byte-buffer stream)] #js {"type" mime}))
        uri))))

#?(:cljs
   (defn as-data-url-async
     "Takes an input or outputstream, callback fn and optional mime
  type, calls fn with data url string, returns nil."
     ([stream cb]
      (as-data-url-async stream cb "application/octet-stream"))
     ([stream cb mime]
      (let [fr (js/FileReader.)]
        (set! (.-onload fr) #(cb (-> % .-target .-result)))
        (.readAsDataURL fr (js/Blob. #js [(get-byte-buffer stream)] #js {"type" mime}))
        nil))))

#?(:clj
   (defn input-stream
     [^InputStream in]
     (InputStreamWrapper. in (byte-array 12)))
   :cljs
   (defn input-stream
     ([^js/ArrayBuffer buf]
      (input-stream buf 0))
     ([^js/ArrayBuffer buf pos]
      (InputStreamWrapper. buf (js/DataView. buf) pos))))
#?(:clj
   (defn output-stream
     [^OutputStream out]
     (OutputStreamWrapper. out (byte-array 12)))
   :cljs
   (defn output-stream
     ([]
      (output-stream 0x1000))
     ([size]
      (output-stream (js/ArrayBuffer. size) 0))
     ([^js/ArrayBuffer buf pos]
      (OutputStreamWrapper. buf (js/DataView. buf) pos))))
