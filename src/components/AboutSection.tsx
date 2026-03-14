import React, { useState } from "react";
import { motion } from "framer-motion";
import templeRoute from "../assets/temple-route.jpeg";
import logoImage from "../assets/nilaara-logo.png";

const AboutSection = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      id="about"
      className="py-24 px-6 bg-secondary/30 dark:bg-[#14061F]"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="tracking-widest uppercase text-sm mb-3 text-[#873260] dark:text-[#D4AF37]">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#873260] dark:text-[#D4AF37]">
            About Nilaara Inn
          </h2>

          <div className="w-20 h-1 bg-[#873260] dark:bg-[#D4AF37] mx-auto rounded-full" />

          <p className="text-muted-foreground dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Located in the sacred town of Tiruvannamalai, Nilaara Inn was established in 2025 with the aim of providing comfortable and welcoming accommodation for pilgrims and travelers visiting this spiritually significant destination.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Flip Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div
              className="w-[500px] h-[320px] cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className="w-full h-full relative"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s ease",
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >

                {/* Front */}
                <div
                  className="absolute inset-0 glass rounded-2xl p-8 flex flex-col items-center justify-center
                  shadow-2xl border-2
                  border-[#873260]/30 dark:border-[#D4AF37]/40
                  bg-gradient-to-br from-[#873260]/10 dark:from-[#D4AF37]/10 to-transparent
                  backdrop-blur-xl"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 overflow-hidden
                  border-[#873260]/40 dark:border-[#D4AF37]/40">
                    <img
                      src={logoImage}
                      alt="Nilaara Inn Logo"
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-2 text-[#873260] dark:text-[#D4AF37]">
                    Nilaara Inn
                  </h3>

                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#873260]/60 dark:to-[#D4AF37]/60 mb-4"></div>

                  <p className="uppercase tracking-[6px] text-xs mb-6 font-medium text-[#873260]/80 dark:text-[#D4AF37]/80">
                    Residency
                  </p>

                  <p className="text-sm text-muted-foreground dark:text-gray-300 text-center mb-6 max-w-xs">
                    Premium Hotel near Temple
                  </p>

                  <div className="w-full h-12 rounded-full flex items-center justify-center border
                  border-[#873260]/30 dark:border-[#D4AF37]/40">
                    <p className="text-xs font-semibold tracking-wide text-[#873260] dark:text-[#D4AF37]">
                      (Click to View Route)
                    </p>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#873260] dark:text-[#D4AF37]">
              A Stay Close to Divinity
            </h3>

            <p className="text-muted-foreground dark:text-gray-300 mb-4 leading-relaxed">
              Home to the revered Arunachaleswarar Temple, Tiruvannamalai attracts devotees and visitors from across India and around the world...
            </p>

            <p className="text-muted-foreground dark:text-gray-300 mb-6 leading-relaxed">
              With a focus on comfort, cleanliness, and warm hospitality, Nilaara Inn strives to ensure every guest enjoys a pleasant and memorable stay.
            </p>

            <ul className="space-y-2 text-muted-foreground dark:text-gray-300">
              {[
                "24/7 Reception Support",
                "Free WiFi & Parking",
                "Spacious Deluxe Rooms",
                "Easy Temple Access",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#873260] dark:bg-[#D4AF37]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Proprietor */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 md:col-span-2 bg-background/60 dark:bg-[#1A0B2E]
            backdrop-blur-md rounded-2xl p-10 border
            border-[#873260]/20 dark:border-[#D4AF37]/30 shadow-xl"
          >
            <h3 className="text-3xl font-serif font-bold mb-2 text-[#873260] dark:text-[#D4AF37]">
              About the Proprietor
            </h3>

            <p className="font-semibold text-lg text-[#873260] dark:text-[#D4AF37]">
              Mr. Abineshwar Ganesan
            </p>

            <p className="text-sm text-muted-foreground dark:text-gray-400 mb-6">
              Founder & Proprietor – Nilaara Inn
            </p>

            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4">
              Mr. Abineshwar Ganesan, son of Mr. Ganesan Chinnasamy...
            </p>

            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-6">
              He comes from a family with more than 40 years of experience...
            </p>

            <h4 className="text-xl font-semibold mb-2 text-[#873260] dark:text-[#D4AF37]">
              Vision
            </h4>

            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
              Our vision is to provide a comfortable, peaceful, and trustworthy place to stay...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;