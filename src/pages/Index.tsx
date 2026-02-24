import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import AttractionsSection from '@/components/AttractionsSection';
import ContactSection from '@/components/ContactSection';
import HotelFooter from '@/components/HotelFooter';

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background transition-colors duration-500"
    >
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <GallerySection />
      <AttractionsSection />
      <ContactSection />
      <HotelFooter />
    </motion.div>
  );
};

export default Index;
