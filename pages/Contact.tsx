
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

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
    <div className="pb-24 max-w-7xl mx-auto px-6">
      <section className="py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bebas text-8xl md:text-[10rem] text-center mb-12"
        >
          ENTER THE <span className="text-finixRed">ARCH</span>
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-24 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
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
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 font-jakarta text-xl transition-all focus:border-finixRed peer"
                />
                <label className="absolute left-0 top-4 text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  YOUR NAME
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-finixRed transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 font-jakarta text-xl transition-all focus:border-finixRed peer"
                />
                <label className="absolute left-0 top-4 text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  EMAIL ADDRESS
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-finixRed transition-all duration-500 group-focus-within:w-full shadow-[0_0_15px_rgba(255,0,60,0.5)]" />
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 font-jakarta text-xl transition-all focus:border-finixRed peer"
                />
                <label className="absolute left-0 top-4 text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  PHONE NUMBER
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 font-jakarta text-xl transition-all focus:border-finixRed peer resize-none"
                />
                <label className="absolute left-0 top-4 text-white/30 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-finixRed peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  HOW CAN WE HELP?
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-finixRed text-white font-bebas text-2xl tracking-[0.2em] hover:bg-white hover:text-luxuryBlack transition-all duration-500 rounded-full flex items-center justify-center gap-4 group"
              >
                Send Inquiry <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-12"
          >
            <div className="glass p-10 rounded-[3rem] space-y-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-finixRed/10 rounded-2xl">
                  <MapPin className="text-finixRed" size={24} />
                </div>
                <div>
                  <h4 className="font-syncopate text-[10px] text-white/40 tracking-widest mb-1 uppercase">Location</h4>
                  <p className="text-xl font-jakarta">123 MG Road, Bangalore, Karnataka 560001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-finixRed/10 rounded-2xl">
                  <Phone className="text-finixRed" size={24} />
                </div>
                <div>
                  <h4 className="font-syncopate text-[10px] text-white/40 tracking-widest mb-1 uppercase">Call Us</h4>
                  <p className="text-xl font-jakarta">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-finixRed/10 rounded-2xl">
                  <Mail className="text-finixRed" size={24} />
                </div>
                <div>
                  <h4 className="font-syncopate text-[10px] text-white/40 tracking-widest mb-1 uppercase">Email</h4>
                  <p className="text-xl font-jakarta">transform@finixfitness.in</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-finixRed/10 rounded-2xl">
                  <Clock className="text-finixRed" size={24} />
                </div>
                <div>
                  <h4 className="font-syncopate text-[10px] text-white/40 tracking-widest mb-1 uppercase">Working Hours</h4>
                  <p className="text-xl font-jakarta">Mon-Sat: 6 AM - 10 PM<br />Sun: 8 AM - 2 PM</p>
                </div>
              </div>
            </div>

            <div className="h-[300px] rounded-[3rem] overflow-hidden glass relative">
              <img
                src="https://picsum.photos/seed/map/800/600"
                alt="Map Placeholder"
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 glass rounded-full font-syncopate text-[10px] tracking-widest">
                  FIND US ON MAPS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
