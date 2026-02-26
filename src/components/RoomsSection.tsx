import { motion } from 'framer-motion';
import { Users, BedDouble, Sofa } from 'lucide-react';
import deluxeImg from '../assets/suite.png';
import suiteImg from '../assets/deluxe.jpg';

const rooms = [
  {
    title: 'Suite Room',
    image: suiteImg,
    beds: ['2 Queen Beds', '1 Single Bed', '1 Sofa Bed'],
    capacity: 6,
    price: 3500,
    available: 2,
    description: 'Spacious suite with premium amenities, perfect for families or groups seeking the ultimate comfort.',
  },
  {
    title: 'Deluxe Double Room',
    image: deluxeImg,
    beds: ['1 Queen Bed'],
    capacity: 4,
    price: 2500,
    available: 1,
    description: 'Elegant double room with sophisticated décor and everything you need for a relaxing stay.',
  },
];

const RoomsSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rooms" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Accommodations</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Rooms</h2>
          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 badge-theme px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  ₹{room.price.toLocaleString()} / night
                </div>
                {room.available > 1 && (
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                    {room.available} Rooms Available
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{room.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{room.description}</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {room.beds.map(bed => (
                    <span key={bed} className="flex items-center gap-1.5 text-sm text-foreground/70 bg-secondary/70 px-3 py-1.5 rounded-lg">
                      {bed.includes('Sofa') ? <Sofa size={14} /> : <BedDouble size={14} />}
                      {bed}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Users size={16} />
                    Up to {room.capacity} guests
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = "/reservation"}
                    className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold shimmer transition-all duration-300"
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
