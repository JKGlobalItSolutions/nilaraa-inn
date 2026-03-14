import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ================= MAIN GALLERY =================
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-3.png";
import gallery3 from "@/assets/suite.png";
import gallery4 from "@/assets/deluxe.jpg";

// ================= ROOM 1 =================
import room1a from "@/assets/room1/1.png";
import room1b from "@/assets/room1/2.png";
import room1c from "@/assets/room1/3.png";
import room1d from "@/assets/room1/4.png";

// ================= ROOM 2 =================
import room2a from "../assets/room2/1.png";
import room2b from "../assets/room2/2.png";
import room2c from "../assets/room2/3.png";
import room2d from "../assets/room2/4.png";
// ================= ROOM 3 =================
import room3a from "../assets/room3/1.png";
import room3b from "../assets/room3/2.png";
import room3c from "../assets/room3/3.png";
import room3d from "../assets/room3/4.png";

// ================= ROOM 4 =================
import room4a from "../assets/room4/1.png";
import room4b from "../assets/room4/2.png";
import room4c from "../assets/room4/3.png";


const images = [
  { src: gallery1, alt: "Grand Lobby" },
  { src: gallery2, alt: "Entrance" },
  { src: gallery3, alt: "Suite Interior" },
  { src: gallery4, alt: "Deluxe Interior" },

  { src: room1a, alt: "Suite Room 1" },
  { src: room1b, alt: "Suite Room 1" },
  { src: room1c, alt: "Suite Room 1" },
  { src: room1d, alt: "Suite Room 1" },

  { src: room2a, alt: "Suite Room 2" },
  { src: room2b, alt: "Suite Room 2" },
  { src: room2c, alt: "Suite Room 2" },
  { src: room2d, alt: "Suite Room 2" },

  { src: room3a, alt: "Deluxe Room 1" },
  { src: room3b, alt: "Deluxe Room 1" },
  { src: room3c, alt: "Deluxe Room 1" },
  { src: room3d, alt: "Deluxe Room 1" },

  { src: room4a, alt: "Deluxe Room 2" },
  { src: room4b, alt: "Deluxe Room 2" },
  { src: room4c, alt: "Deluxe Room 2" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-secondary/30 dark:bg-[#14061F]"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="tracking-widest uppercase text-sm mb-3 text-[#873260] dark:text-[#D4AF37]">
            Visual Tour
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#873260] dark:text-[#D4AF37]">
            Gallery
          </h2>

          <div className="w-20 h-1 bg-[#873260] dark:bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelected(i)}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition text-lg font-semibold">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="w-full max-h-[85vh] object-contain rounded-2xl"
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white dark:bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <X size={20} className="text-black" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;