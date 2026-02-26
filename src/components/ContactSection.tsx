import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', phone: '', email: '', roomType: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Booking Request Sent!',
      description: "We'll get back to you shortly. Thank you for choosing Nilaara Inn.",
    });
    setForm({ name: '', phone: '', email: '', roomType: '', message: '' });
    // Redirect to reservation page after form submission
    window.location.href = "/reservation";
  };

  const inputClass =
    "w-full bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus-glow transition-all duration-300";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Reservations</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Book Your Stay</h2>
          <div className="w-20 h-1 btn-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Google Map Embed */}
            <div className="glass rounded-2xl overflow-hidden glow-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.123456789!2d79.0747!3d12.2253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjNNRitQV1YgVGlydXZhbm5hbWFsYWksIFRhbWlsIE5hZHU!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nilaara Inn Location"
                className="w-full"
              />
            </div>

            {/* Contact Details */}
            <div className="glass rounded-2xl p-6 glow-shadow space-y-5">
              <h3 className="text-xl font-serif font-bold text-foreground">Get In Touch</h3>
              
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">11/7, Anna Salai, Tiruvannamalai, Tamil Nadu – 606601</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Phone</p>
                  <a href="tel:+91XXXXXXXXXX" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 8220663700
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Email</p>
                  <a href="mailto:info@nilaara.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    nilaarainn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Check-in / Check-out</p>
                  <p className="text-muted-foreground text-sm">Check-in: 12:00 PM · Check-out: 11:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-8 md:p-10 glow-shadow space-y-5"
          >
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Make a Reservation</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <select
              value={form.roomType}
              onChange={e => setForm({ ...form, roomType: e.target.value })}
              required
              className={inputClass}
            >
              <option value="" disabled>Select Room Type</option>
              <option value="suite">Suite Room – ₹3,500/night</option>
              <option value="deluxe">Deluxe Double Room – ₹2,500/night</option>
            </select>
            <textarea
              placeholder="Your Message or Special Requests"
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className={inputClass + ' resize-none'}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-gradient py-4 rounded-xl text-lg font-semibold shimmer flex items-center justify-center gap-3 transition-all duration-300 glow-shadow hover:glow-shadow-lg"
            >
              <Send size={20} />
              Book Now
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
