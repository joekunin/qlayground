(ns qlayground-cljs.clj.lsystem)

(import 
  (javax.swing JFrame JPanel)
  (java.awt Graphics2D RenderingHints)
  (java.awt.image BufferedImage))

(defn ^Graphics2D create-turtle [x y]
  (let [panel (JPanel.)
        frame (doto (JFrame.)
                (.add panel)
                (.setSize x y)
                (.show))]
    (doto (.getGraphics panel)
      (.setRenderingHints
        {RenderingHints/KEY_ANTIALIASING RenderingHints/VALUE_ANTIALIAS_ON}))))

(defn forward
  [distance turtle]
  (.drawLine turtle 0 0 0 distance)
  (doto turtle
    (.translate 0 distance)))

(defn rotate
  [theta turtle]
  (doto turtle
    (.rotate theta)))

(defn run-turtle
  [turtle operations commands]
  (reduce (fn [t c] ((operations c identity) t)) turtle commands))

(defn l-system
  [productions depth s]
  (if (zero? depth) s
      (mapcat #(l-system productions (dec depth) (productions % [%])) s)))

