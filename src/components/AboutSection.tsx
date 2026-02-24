import React, { useState } from "react";
import { motion } from "framer-motion";
import templeRoute from "../assets/temple-route.jpeg";
import logoImage from "../assets/nilaara-logo.png";

const AboutSection = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">About Nilaara Inn</h2>
          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience premium comfort and divine serenity in Tiruvannamalai,
            just minutes away from the sacred Arunachaleswarar Temple.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Flip Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div
              className="w-[500px] h-[320px] cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className="w-full h-full relative"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s ease',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 glass rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-xl hover:border-primary/60 transition-all duration-500 hover:shadow-primary/20"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/60 flex items-center justify-center mb-4 border-2 border-primary/40 shadow-lg overflow-hidden">
                    <img 
                      src={logoImage} 
                      alt="Nilaara Inn Logo" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Nilaara Inn</h3>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/60 mb-4"></div>
                  <p className="uppercase tracking-[6px] text-xs text-primary/80 mb-6 font-medium letter-spacing-wide">Residency</p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6 max-w-xs">
                    Premium Hotel near Temple
                  </p>
                  <div className="w-full h-12 bg-gradient-to-r from-primary/20 to-transparent rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/30 transition-all duration-300">
                    <p className="text-xs text-primary font-semibold tracking-wide">
                      (Click to View Route)
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary/30 rounded-full"></div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <img
                    src={templeRoute}
                    alt="Temple Route"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">A Stay Close to Divinity</h3>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Located just 1.2 km from the Arunachaleswarar Temple,
              Nilaara Inn offers a peaceful and luxurious stay for
              pilgrims and travelers.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              With modern amenities, elegant interiors, and warm
              hospitality, we ensure a memorable experience
              in Tiruvannamalai.
            </p>

            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                24/7 Reception Support
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Free WiFi & Parking
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Spacious Deluxe Rooms
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Easy Temple Access
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
