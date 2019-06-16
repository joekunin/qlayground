(ns thi.ng.glsl.core
  (:require
   [clojure.string :as str]
   [com.stuartsierra.dependency :as dep]))

(defn- minify-floats
  [src]
  (str/replace
   src #"(\d+)\.(\d+)"
   (fn [[o d f]]
     (cond
       (= "0" d)        (str \. f)
       (every? #{\0} f) (str d \.)
       :else            o))))

(defn- minify-line
  [src]
  (let [src (-> src
                (minify-floats)
                (str/replace #"\s{2,}|\t" "")
                (str/replace #"\s*(\{|\}|\=|\*|\,|\+|/|\>|\<|\&|\||\[|\]|\(|\)|\-|\!|\;)\s*" "$1"))]
    (if (= \# (first src))
      (str "\n" src "\n")
      src)))

(defn- clean-line-breaks
  [src] (str/replace src #"\n{2,}" "\n"))

(defn minify
  [src]
  (let [src (-> src
                (str/replace #"//.*" "")
                (str/replace #"/\*[\s\S]*?\*/" "")
                (str/replace #"^\n+" ""))]
    (->> (str/split src #"\n")
         (map minify-line)
         (apply str)
         (clean-line-breaks))))

(def ^:private re-meta
  #"((((highp|mediump|lowp)\s+)?(void|bool|float|int|(b|i)?vec\d|mat\d))\s+([\w_]+)\s*\(([A-Za-z0-9_, ]*)\)\s*\{)")

(defn extract-glsl-meta
  "Attempts to extract function name, return type and args from given
  GLSL source string. If successful, returns map w/ these
  keys: :glsl-name :glsl-return :glsl-args"
  [src]
  (if-let [m (first (re-seq re-meta src))]
    (let [return (nth m 2)
          name   (nth m 7)
          args   (vec (filter seq (str/split (nth m 8) #",\s*")))]
      {:glsl-return return
       :glsl-name   name
       :glsl-args   args})))

#?(:clj
   (defmacro minified
     [src] `~(minify src)))

#?(:clj
   (defmacro glsl-spec
     [deps src] `{:deps ~deps :src (minified ~src)}))

#?(:clj
   (defmacro glsl-file-spec
     [deps path] `{:deps ~deps :src (minified ~(slurp path))}))

#?(:clj
   (defmacro defglsl
     [name deps src]
     `(do (def ~name (glsl-spec ~deps ~src))
          (alter-meta! (var ~name) merge ~(extract-glsl-meta src)))))

#?(:clj
   (defmacro defglsl-file
     [name deps path]
     `(do (def ~name (glsl-file-spec ~deps ~path))
          (alter-meta! (var ~name) merge ~(extract-glsl-meta (get name :src))))))

(defn- build-graph
  ([spec] (build-graph (dep/graph) spec))
  ([g curr]
     (reduce
      (fn [g d] (build-graph (dep/depend g curr d) d))
      g (:deps curr))))

(defn assemble
  [spec]
  (if (seq (:deps spec))
    (->> spec
         (build-graph)
         (dep/topo-sort)
         (mapv :src)
         (apply str))
    (:src spec)))

(defn glsl-spec-plain
  [deps src] {:deps deps :src src})
