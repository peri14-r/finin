
import React, { useState } from 'react';
import { motion as m } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube, Target } from 'lucide-react';

// Cast motion to any to bypass environment-specific type checking issues
const motion = m as any;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent! Our team will contact you shortly.");
  };

  return (
    <div className="bg-white dark:bg-luxuryBlack min-h-screen pt-40 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-finixRed/5 blur-[100px] rounded-full -z-10" />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bebas text-8xl md:text-[10rem] text-black dark:text-white uppercase leading-none"
          >
            ENTER THE <span className="text-finixRed">ARCH</span>
          </motion.h1>
          <p className="font-syncopate text-black/40 dark:text-white/20 text-[10px] tracking-[0.5em] uppercase mt-4 font-bold">Connect with elite performance</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-24">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 bg-softWhite dark:bg-luxuryGray p-12 rounded-[3rem] shadow-sm border border-black/10 dark:border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-black/20 dark:border-white/10 py-4 font-jakarta text-xl transition-all focus:border-finixRed dark:focus:border-finixRed outline-none peer text-black dark:text-white font-semibold"
                />
                <label className="absolute left-0 top-4 text-black/50 dark:text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-syncopate font-bold">
                  Your Name
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-finixRed transition-all duration-500 group-focus-within:w-full shadow-[0_5px_15px_rgba(255,0,0,0.2)]" />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-black/20 dark:border-white/10 py-4 font-jakarta text-xl transition-all focus:border-finixRed dark:focus:border-finixRed outline-none peer text-black dark:text-white font-semibold"
                />
                <label className="absolute left-0 top-4 text-black/50 dark:text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-syncopate font-bold">
                  Email Address
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-finixRed transition-all duration-500 group-focus-within:w-full shadow-[0_5px_15px_rgba(255,0,0,0.2)]" />
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-black/20 dark:border-white/10 py-4 font-jakarta text-xl transition-all focus:border-finixRed dark:focus:border-finixRed outline-none peer text-black dark:text-white font-semibold"
                />
                <label className="absolute left-0 top-4 text-black/50 dark:text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-syncopate font-bold">
                  Phone Number
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-finixRed transition-all duration-500 group-focus-within:w-full shadow-[0_5px_15px_rgba(255,0,0,0.2)]" />
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-black/20 dark:border-white/10 py-4 font-jakarta text-xl transition-all focus:border-finixRed dark:focus:border-finixRed outline-none peer resize-none text-black dark:text-white font-semibold"
                />
                <label className="absolute left-0 top-4 text-black/50 dark:text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-syncopate font-bold">
                  How can we help?
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-finixRed transition-all duration-500 group-focus-within:w-full shadow-[0_5px_15px_rgba(255,0,0,0.2)]" />
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-finixRed text-white font-bebas text-3xl tracking-[0.3em] hover:bg-black transition-all duration-500 rounded-full flex items-center justify-center gap-4 group uppercase shadow-lg shadow-finixRed/20"
              >
                Submit Inquiry <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="bg-finixRed p-12 rounded-[3rem] space-y-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-white rotate-12">
                <Target size={200} />
              </div>
              
              <div className="space-y-10 relative z-10 text-white">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white group-hover:text-finixRed transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-syncopate text-[10px] text-white/60 tracking-widest mb-2 uppercase font-bold">Our Base</h4>
                    <p className="text-2xl font-bebas text-white tracking-widest uppercase">Indiranagar & Basavangudi, Bangalore</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white group-hover:text-finixRed transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-syncopate text-[10px] text-white/60 tracking-widest mb-2 uppercase font-bold">Hotline</h4>
                    <a href="tel:+918217500205" className="text-2xl font-bebas text-white hover:text-luxuryBlack transition-colors tracking-widest underline underline-offset-4 decoration-white/20">+91 82175 00205</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white group-hover:text-finixRed transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-syncopate text-[10px] text-white/60 tracking-widest mb-2 uppercase font-bold">Email</h4>
                    <a href="mailto:info@finixfitness.com" className="text-2xl font-bebas text-white hover:text-luxuryBlack transition-colors tracking-widest underline underline-offset-4 decoration-white/20">info@finixfitness.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white group-hover:text-finixRed transition-all">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-syncopate text-[10px] text-white/60 tracking-widest mb-2 uppercase font-bold">Operating Hours</h4>
                    <p className="text-2xl font-bebas text-white tracking-widest uppercase">Mon-Sun: 5:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 rounded-[2rem] overflow-hidden bg-softWhite dark:bg-luxuryGray group cursor-pointer relative border border-black/10 dark:border-white/5 hover:border-finixRed transition-all shadow-sm">
                <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-30 dark:opacity-20 group-hover:opacity-60 dark:group-hover:opacity-40 transition-all" alt="Indiranagar" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bebas text-xl text-black dark:text-white tracking-widest group-hover:text-finixRed transition-colors">INDIRANAGAR</span>
                </div>
              </div>
              <div className="h-48 rounded-[2rem] overflow-hidden bg-softWhite dark:bg-luxuryGray group cursor-pointer relative border border-black/10 dark:border-white/5 hover:border-finixRed transition-all shadow-sm">
                <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-30 dark:opacity-20 group-hover:opacity-60 dark:group-hover:opacity-40 transition-all" alt="Basavangudi" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bebas text-xl text-black dark:text-white tracking-widest group-hover:text-finixRed transition-colors">BASAVANGUDI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
