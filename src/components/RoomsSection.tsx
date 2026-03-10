import { motion } from "framer-motion";
import { Users, BedDouble, Sofa } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Images
import deluxeImg from "../assets/deluxe.jpg";
import suiteImg from "../assets/suite.png";
import suiteImg2 from "../assets/suite1.png";
import suiteImg3 from "../assets/suite2.png";
import suiteImg4 from "../assets/suite3.png";
import suiteImg5 from "../assets/suite4.png";


// ================= ROOMS DATA =================
const rooms = [
  {
    title: "Suite Room",
    images: [deluxeImg,suiteImg, suiteImg2, suiteImg3, suiteImg5],
    beds: ["2 Queen Beds", "1 Single Bed", "1 Sofa Bed"],
    capacity: 6,
    price: 3500,
    available: 2,
    description:
      "Spacious suite with premium amenities, perfect for families or groups seeking ultimate comfort.",
  },
  {
    title: "Deluxe Double Room",
    images: [suiteImg2,suiteImg4,suiteImg], // single image still works
    beds: ["1 Queen Bed"],
    capacity: 4,
    price: 2500,
    available: 2,
    description:
      "Elegant double room with sophisticated décor and everything needed for a relaxing stay.",
  },
];

// ================= COMPONENT =================
const RoomsSection = () => {
  return (
    <section id="rooms" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-widest uppercase text-sm mb-3">
            Accommodations
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Rooms
          </h2>

          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden card-hover"
            >
              {/* ================= IMAGE SLIDER ================= */}
              <div className="relative h-64 overflow-hidden">

                <Carousel
                  opts={{ loop: true }}
                  plugins={[
                    Autoplay({
                      delay: 3500,
                      stopOnInteraction: false,
                    }),
                  ]}
                  className="w-full h-full"
                >
                  <CarouselContent className="h-full">
                    {room.images.map((img, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-full h-full"
                      >
                        <img
                          src={img}
                          alt={`${room.title}-${index}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </Carousel>

                {/* Price */}
                <div className="absolute top-4 right-4 badge-theme px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ₹{room.price.toLocaleString()} / night
                </div>

                {/* Availability */}
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {room.available} Rooms Available
                </div>
              </div>

              {/* ================= DETAILS ================= */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-2">
                  {room.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {room.description}
                </p>

                {/* Beds */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {room.beds.map((bed) => (
                    <span
                      key={bed}
                      className="flex items-center gap-1.5 text-sm bg-secondary/70 px-3 py-1.5 rounded-lg"
                    >
                      {bed.includes("Sofa") ? (
                        <Sofa size={14} />
                      ) : (
                        <BedDouble size={14} />
                      )}
                      {bed}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} />
                    Up to {room.capacity} guests
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      (window.location.href = "/reservation")
                    }
                    className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;