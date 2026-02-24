import { motion } from 'framer-motion';
import { MapPin, Mountain, Landmark, TreePine } from 'lucide-react';
import templeImage from "../assets/Arunachalam-temple.jpg";
import Ashramam from "../assets/Ashramam.jpg";
import Fort from "../assets/Fort.jpeg";
import Hill from "../assets/hill_temple_image.png";
import path from "../assets/GirivalamPath.png";
import cave from "../assets/virupaksha-cave.jpg";
import jain from "../assets/Jain.jpg";
import road from "../assets/road.png";



const attractions = [
  {
    name: 'Arulmigu Arunachaleswarar Temple',
    description: 'One of India\'s largest temples dedicated to Lord Shiva (Agni Lingam), featuring four massive gopurams and ancient Dravidian architecture.',
    distance: '2.4 km',
    icon: Landmark,
    image: templeImage,
  },
  {
    name: 'Sri Ramana Ashramam',
    description: 'The peaceful ashram where sage Ramana Maharshi lived, offering a serene atmosphere for meditation and spiritual reflection.',
    distance: '3.9 km',
    icon: TreePine,
    image: Ashramam,
  },
  {
    name: 'Girivalam Path',
    description: 'A sacred 14 km path around the Arunachala Hill, often walked barefoot during full moon nights by thousands of devotees.',
    distance: '0.5 km',
    icon: MapPin,
    image: path,
  },
  {
    name: 'Skandashramam & Virupaksha Cave',
    description: 'Tranquil caves on the hill where Ramana Maharshi meditated for years, offering breathtaking views and spiritual energy.',
    distance: '2.6 km',
    icon: Mountain,
    image: cave,
  },
  {
    name: 'Gingee Fort',
    description: 'Known as the "Troy of the East," this 13th-century fort complex offers panoramic views and rich historical significance.',
    distance: '39.2 km',
    icon: Landmark,
    image: Fort,
  },
  {
    name: 'Parvathamalai Hills',
    description: 'A thrilling trekking spot featuring a temple atop, reachable via steep iron ladders — a test of faith and endurance.',
    distance: '30.8 km',
    icon: Mountain,
    image: Hill,
  },
  {
    name: 'Jawadhu Hills',
    description: 'A scenic hill station ideal for nature lovers, offering lush greenery, waterfalls, and tribal culture experiences.',
    distance: '80 km',
    icon: TreePine,
    image: road,
  },
  {
    name: 'Tirumalai Jain Temple Complex',
    description: 'An ancient 2000-year-old Jain site with intricate rock-cut architecture and serene hilltop surroundings.',
    distance: '51 km',
    icon: Landmark,
    image: jain,
  },
];

const AttractionsSection = () => {
  return (
    <section id="attractions" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Explore</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4">Tourist Attractions</h2>
          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover the spiritual and scenic wonders near Nilaara Inn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {attractions.map((attraction, i) => {
            const Icon = attraction.icon;
            return (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group glass rounded-2xl overflow-hidden glow-shadow cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <motion.img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    {/* Distance badge */}
                    <motion.div
                      className="absolute top-3 right-3 badge-theme px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.3, type: 'spring' }}
                    >
                      <MapPin size={12} />
                      {attraction.distance}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="sm:w-3/5 p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-serif font-bold text-foreground text-lg leading-tight">
                        {attraction.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
