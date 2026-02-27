import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import HotelFooter from '@/components/HotelFooter';
import { MapPin, Phone, Clock, Shield, Heart, Award, Users, Pill, Stethoscope, Building2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const branches = [
  {
    icon: Building2,
    name: 'Sri Arunachala Pharmacy',
    since: 'Since 1980',
    tagline: 'A Trusted Name in Healthcare',
    description:
      'Sri Arunachala Pharmacy is our flagship establishment and the foundation of our journey. Known for reliability and authenticity, we provide comprehensive pharmaceutical solutions with a strong focus on customer well-being.',
    services: [
      'General & Prescription Medicines',
      'Prescription Verification',
      'Homeopathy Medicines',
      'Ayurvedic Medicines',
      'Surgical & Medical Equipment',
      'Healthcare & Wellness Products',
    ],
    hours: '8:00 AM – 11:00 PM',
    address: ' Opposie to Periyar statue, 11/6, Anna Salai, Tiruvennanallur, Tiruvannamalai, Tamil Nadu 606601',
    mapLink: 'https://share.google/9D9K0uY9DQ2Am5aBU',
    phone: '82206 63700',
  },
  {
    icon: Pill,
    name: 'Sri Arunachala Medicals',
    since: 'No.9G/2 Polur Road(old bus stand opp)Tiruvannamalai',
    tagline: 'Reliable. Accessible. Trusted.',
    description:
      'Located at No.9G/2 Polur road, this branch ensures quick and efficient access to essential medicines and healthcare products. We are dedicated to prompt service and customer satisfaction.',
    services: [
      'Allopathic Medicines',
      'OTC Products',
      'Prescription Fulfillment',
      'Health & Wellness Essentials',
    ],
    hours: '8:00 AM – 11:00 PM',
    address: 'No.9G/2 Polur Road(new bus stand opp)Tiruvannamalai',
    phone: '9786603234,994094394',
  },
  {
    icon: Stethoscope,
    name: 'Sri Arunachalam Medicals',
    since: 'No.5C Big Street,Tiruvannamalai',
    tagline: 'Convenient Healthcare Access',
    description:
      'Strategically located opposite the Bus Stand, this branch serves both residents and travelers with immediate access to essential medicines and healthcare supplies.',
    services: [
      'General Medicines',
      'Emergency Medicines',
      'OTC Products',
      'Prescription Services',
    ],
    hours: '8:00 AM – 11:00 PM',
    address: 'No.5C Big Street,Tiruvannamalai,Tamil nadu-606 601',
    phone: '9486050399,6369414575',
  },
];

const whyChoose = [
  { icon: Award, text: '40+ Years of Experience' },
  { icon: Users, text: 'Trusted by Generations' },
  { icon: Shield, text: 'Genuine & Quality Medicines' },
  { icon: MapPin, text: 'Multiple Convenient Locations' },
  { icon: Heart, text: 'Professional & Friendly Service' },
];

const OurBusiness = () => {
  const { isDark, toggle } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background transition-colors duration-500"
    >
      <Navbar isDark={isDark} onToggleTheme={toggle} />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 px-6 hero-gradient">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-3"
          >
            Our Business
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4"
          >
            Sri Arunachala Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Trusted Healthcare Since 1980
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 btn-gradient mx-auto rounded-full mt-6"
          />
        </div>
      </section>

      {/* About the Group */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
            className="glass rounded-2xl p-8 md:p-12 glow-shadow"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About Sri Arunachala Group
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              With a legacy of trust built over four decades, Sri Arunachala Group stands as a respected name in healthcare services. Established in 1980, our journey began with a single vision — to provide genuine medicines, professional guidance, and compassionate service to the community.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed mb-4">
              Over the years, we have expanded into multiple locations to ensure accessibility, reliability, and quality healthcare support for residents and visitors. Our commitment remains the same: <strong className="text-foreground">Quality. Trust. Care.</strong>
            </p>
            <p className="text-foreground/80 text-base leading-relaxed">
              With 40+ years of experience, we proudly continue serving generations with integrity and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Branches</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Healthcare Locations
            </h2>
            <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
          </motion.div>

          <div className="grid gap-8">
            {branches.map((branch, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={idx}
                className="glass rounded-2xl p-8 md:p-10 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center shrink-0">
                    <branch.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">{branch.name}</h3>
                    <span className="text-primary text-sm font-medium">{branch.since}</span>
                  </div>
                </div>

                <p className="text-foreground font-semibold text-lg mb-2 italic">{branch.tagline}</p>
                <p className="text-foreground/80 leading-relaxed mb-6">{branch.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Services */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Our Services</h4>
                    <ul className="space-y-2">
                      {branch.services.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-foreground/80 text-sm">
                          <ChevronRight size={14} className="text-primary shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                      <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">Working Hours</p>
                        <p className="text-muted-foreground text-sm">{branch.hours}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                      <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">Address</p>
                        <p className="text-muted-foreground text-sm">{branch.address}</p>
                        {branch.mapLink && (
                          <a
                            href={branch.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            View on Map →
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                      <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">Contact</p>
                        <p className="text-muted-foreground text-sm">{branch.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Why Choose Sri Arunachala Group?
            </h2>
            <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <p className="font-semibold text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-20 px-6 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 btn-gradient px-8 py-3 rounded-xl font-medium text-primary-foreground shimmer transition-all duration-300 hover:scale-105 glow-shadow"
        >
          ← Back to Nilaara Inn
        </Link>
      </section>

      <HotelFooter />
    </motion.div>
  );
};

export default OurBusiness;
