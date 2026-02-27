import { motion } from "framer-motion";
import heroImg from "../assets/hero-hotel.png";

const HeroSection = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        <img
          src={heroImg}
          alt="Luxury Stay"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          minHeight: "110vh",
          padding: "0 60px",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "56px",
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Experience Divine Comfort <br />
            at Nilaara Inn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "40px",
              lineHeight: 1.6,
            }}
          >
            Stay just minutes away from Arunachaleswarar Temple.
            Premium rooms, peaceful ambience, and unforgettable hospitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "12px 28px",
                borderRadius: "10px",
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
              }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = "/#contact";
                }
              }}
            >
              Book Now
            </button>

            <button
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "12px 28px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => {
                const roomsSection = document.querySelector('#rooms');
                if (roomsSection) {
                  roomsSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = "/#rooms";
                }
              }}
            >
              View Rooms →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scroll Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.8)",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "scrollSlow 60s linear infinite",
          }}
        >
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "60px",
                margin: "0 40px",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              <span>Luxury Rooms</span>
              <span>Temple View Stay</span>
              <span>24/7 Reception</span>
              <span>Free WiFi</span>
              <span>Premium Comfort</span>
              <span>Family Friendly</span>
              <span>Best Location</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes scrollSlow {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;