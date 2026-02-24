import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.png';
import gallery2 from '@/assets/suite.png';
import gallery3 from '@/assets/gallery-3.png';
import gallery4 from '@/assets/deluxe.jpg';
import suiteImg from '@/assets/deluxe.jpg';
import deluxeImg from '@/assets/room-deluxe.jpg';

const images = [
  { src: gallery1, alt: 'Grand Lobby' },
  { src: suiteImg, alt: 'Suite Room' },
  { src: gallery2, alt: 'Deluxe Room' },
  { src: deluxeImg, alt: 'Deluxe Room' },
  { src: gallery3, alt: 'Entrance' },
  { src: gallery4, alt: 'Bedroom' },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Visual Tour</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Gallery</h2>
          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center">
                <p className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <X size={20} className="text-foreground" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
