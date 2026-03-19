import { motion } from "framer-motion";
import { Users, BedDouble, Sofa, Wifi, Tv, Wind, Coffee } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

/* ---------------- IMAGES ---------------- */

// Suite Room 1
import room1a from "../assets/room1/1.png";
import room1b from "../assets/room1/2.png";
import room1c from "../assets/room1/3.png";
import room1d from "../assets/room1/4.png";

// Suite Room 2
import room2a from "../assets/room2/1.png";
import room2b from "../assets/room2/2.png";
import room2c from "../assets/room2/3.png";
import room2d from "../assets/room2/4.png";

// Deluxe Room 1
import room3a from "../assets/room3/1.png";
import room3b from "../assets/room3/2.png";
import room3c from "../assets/room3/3.png";
import room3d from "../assets/room3/4.png";

// Deluxe Room 2
import room4a from "../assets/room4/1.png";
import room4b from "../assets/room4/2.jpg";
import room4c from "../assets/room4/3.png";
// import room4d from "../assets/room4/4.jpg";

/* ---------------- ROOMS DATA ---------------- */

const roomTypes = [
  {
    title: "Suite Room",
    price: 3500,

    rooms: [
      {
        name: "Suite Room 1",
        images: [room1a, room1b, room1c, room1d],
        guests: 6,
        beds: ["2 Queen Beds", "1 Single Bed", "1 Sofa Bed"],
        amenities: ["WiFi", "Smart TV", "AC"],
      },
      {
        name: "Suite Room 2",
        images: [room2a, room2b, room2c, room2d],
        guests: 6,
        beds: ["2 Queen Beds",  "1 Single Bed","1 Sofa Bed"],
        amenities: ["WiFi", "Smart TV", "AC","Chair"],
      },
    ],
  },

  {
    title: "Deluxe Room",
    price: 2500,

    rooms: [
      {
        name: "Deluxe Room 1",
        images: [room3a, room3b, room3c, room3d],
        guests: 4,
        beds: ["1 Queen Bed"],
        amenities: ["WiFi", "TV", "AC"],
      },
      {
        name: "Deluxe Room 2",
        images: [room4a, room4b, room4c ],
        guests: 4,
        beds: ["1 Queen Bed"],
        amenities: ["WiFi", "TV", "AC"],
      },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-24 px-6 bg-secondary/30 dark:bg-[#14061F]">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="tracking-widest uppercase text-sm mb-3 text-[#873260] dark:text-[#D4AF37]">
            Accommodations
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#873260] dark:text-[#D4AF37]">
            Our Rooms
          </h2>

          <div className="w-20 h-1 bg-[#873260] dark:bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <div className="space-y-20">
          {roomTypes.map((type, index) => (
            <div key={index}>

              {/* Room Type Title */}

              <h3 className="text-3xl font-serif font-bold mb-8 text-[#873260] dark:text-[#D4AF37]">
                {type.title}
              </h3>

              {/* Rooms Grid */}

              <div className="grid md:grid-cols-2 gap-10">

                {type.rooms.map((room, i) => (
                  <motion.div
                    key={room.name}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="group rounded-2xl overflow-hidden
                    bg-white dark:bg-[#1A0B2E]
                    border border-gray-200 dark:border-[#2a1b3f]
                    shadow-lg hover:shadow-2xl
                    transition-all duration-500 hover:-translate-y-3"
                  >

                    {/* Slider */}

                    <div className="relative h-64 overflow-hidden">

                      <Carousel
                        opts={{ loop: true }}
                        plugins={[Autoplay({ delay: 3500 })]}
                        className="w-full h-full"
                      >
                        <CarouselContent>
                          {room.images.map((img, index) => (
                            <CarouselItem key={index}>
                              <img
                                src={img}
                                alt={room.name}
                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>

                      {/* Price */}

                      <div className="absolute top-4 right-4 bg-[#873260] dark:bg-[#D4AF37] text-white dark:text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        ₹{type.price} / night
                      </div>
                    </div>

                    {/* Content */}

                    <div className="p-6 space-y-4">

                      <h4 className="text-xl font-semibold dark:text-white">
                        {room.name}
                      </h4>

                      {/* Beds */}

                      <div className="flex flex-wrap gap-2">
                        {room.beds.map((bed) => (
                          <span
                            key={bed}
                            className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-[#23133a] px-2 py-1 rounded-md"
                          >
                            {bed.includes("Sofa") ? (
                              <Sofa size={12} />
                            ) : (
                              <BedDouble size={12} />
                            )}
                            {bed}
                          </span>
                        ))}
                      </div>

                      {/* Guests */}

                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Users size={14} />
                        Up to {room.guests} Guests
                      </div>

                      {/* Amenities */}

                      <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
                        {room.amenities.map((a) => (
                          <span
                            key={a}
                            className="bg-gray-100 dark:bg-[#23133a] px-2 py-1 rounded-md"
                          >
                            {a}
                          </span>
                        ))}
                      </div>

                      {/* Button */}

                 <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() =>
    window.open(
      "https://wa.me/918220663700?text=Hello%2C%20I%20want%20to%20check%20room%20availability%20and%20pricing.",
      "_blank"
    )
  }
  className="mt-3 bg-[#C8A04D] hover:bg-[#b9913f] text-black px-6 py-2 rounded-full text-sm font-semibold transition shadow-md"
>
  Book Now
</motion.button>

                    </div>

                  </motion.div>
                ))}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomsSection;