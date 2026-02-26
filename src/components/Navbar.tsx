import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/nilaara-logo.png";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Business", href: "/our-business" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ isDark, onToggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setMobileOpen(false);

    // 🔹 If it is a route page
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    // 🔹 If we are NOT on home page, go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }

    // 🔹 Normal section scroll
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-gradient-to-b from-black/80 to-black/20 backdrop-blur-lg shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => handleNavigation("#home")}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Nilaara Inn Residency"
            className="h-20 w-auto object-contain"
          />

          <div className="leading-tight text-left">
            <h1 className="text-yellow-400 font-serif text-xl font-semibold tracking-wide">
              Nilaara Inn
            </h1>
            <p className="text-white text-xs tracking-[4px] uppercase">
              Residency
            </p>
          </div>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigation(link.href)}
              className="relative text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            className="relative w-14 h-7 rounded-full bg-gray-700 border border-gray-600 flex items-center px-1"
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center"
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {isDark ? (
                <Moon size={12} className="text-black" />
              ) : (
                <Sun size={12} className="text-black" />
              )}
            </motion.div>
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className="text-left text-white/80 hover:text-yellow-400 text-base"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;