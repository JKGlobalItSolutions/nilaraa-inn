import { motion } from "framer-motion";
import {
  Wifi,
  Snowflake,
  Car,
  Zap,
  ShieldCheck,
  Flame,
  Bath,
  Sparkles,
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free WiFi", desc: "High-speed internet" },
  { icon: Snowflake, label: "Air Conditioning", desc: "Climate controlled" },
  { icon: Car, label: "Free Parking", desc: "Secure car parking" },
  { icon: Zap, label: "Power Backup", desc: "24/7 uninterrupted" },
  { icon: ShieldCheck, label: "CCTV Security", desc: "Round-the-clock" },
  { icon: Flame, label: "Water Heater", desc: "Hot water always" },
  { icon: Bath, label: "Free Toiletries", desc: "Brush, soap & paste" },
  { icon: Sparkles, label: "Daily Housekeeping", desc: "Clean & fresh" },
];

const AmenitiesSection = () => {
  return (
    <section
      id="amenities"
      className="py-24 px-6 bg-secondary/30 dark:bg-[#14061F]"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="tracking-widest uppercase text-sm mb-3 text-[#873260] dark:text-[#D4AF37]">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#873260] dark:text-[#D4AF37]">
            Amenities
          </h2>

          <div className="w-20 h-1 bg-[#873260] dark:bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                glass rounded-2xl p-6 text-center
                bg-white dark:bg-[#1A0B2E]
                border border-gray-200 dark:border-[#2a1b3f]
                shadow-md hover:shadow-xl
                transition-all duration-300
                group cursor-default
              "
            >
              {/* Icon Box */}
              <div
                className="
                w-14 h-14 rounded-xl
                flex items-center justify-center mx-auto mb-4
                bg-[#873260] dark:bg-[#D4AF37]
                transition-all duration-300
                group-hover:animate-bounce-subtle
              "
              >
                <item.icon
                  size={24}
                  className="text-white dark:text-black"
                />
              </div>

              <h3 className="font-semibold text-sm mb-1 text-[#873260] dark:text-[#D4AF37]">
                {item.label}
              </h3>

              <p className="text-muted-foreground dark:text-gray-300 text-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;