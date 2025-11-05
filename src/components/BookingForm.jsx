import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Car } from 'lucide-react';

const inputBase = 'w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-red-500/60 focus:bg-white/10 transition-colors';

const BookingForm = () => {
  const [form, setForm] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    model: 'Any',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request received!\n\nPickup: ${form.pickup}\nDrop-off: ${form.dropoff}\nDate: ${form.date} ${form.time}\nModel: ${form.model}`);
  };

  return (
    <section id="book" className="relative z-10 mx-auto -mt-24 max-w-6xl px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-6 backdrop-blur-xl shadow-2xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-md bg-red-500/20 p-2 text-red-400"><Car size={18} /></div>
          <h2 className="text-xl font-semibold text-white">Quick Booking</h2>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-wider text-white/60">Pickup Location</span>
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input name="pickup" value={form.pickup} onChange={handleChange} placeholder="City, Airport..." className={`${inputBase} pl-9`} required />
            </div>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-wider text-white/60">Drop-off Location</span>
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input name="dropoff" value={form.dropoff} onChange={handleChange} placeholder="City, Airport..." className={`${inputBase} pl-9`} required />
            </div>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-wider text-white/60">Date</span>
            <div className="relative">
              <Calendar className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input type="date" name="date" value={form.date} onChange={handleChange} className={`${inputBase} pl-9`} required />
            </div>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-wider text-white/60">Time</span>
            <div className="relative">
              <Clock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input type="time" name="time" value={form.time} onChange={handleChange} className={`${inputBase} pl-9`} required />
            </div>
          </label>
          <label className="block lg:col-span-1">
            <span className="mb-2 block text-xs uppercase tracking-wider text-white/60">Model</span>
            <select name="model" value={form.model} onChange={handleChange} className={`${inputBase}`}>
              <option className="bg-slate-900" value="Any">Any</option>
              <option className="bg-slate-900" value="Coupe">Coupe</option>
              <option className="bg-slate-900" value="SUV">SUV</option>
              <option className="bg-slate-900" value="Roadster">Roadster</option>
            </select>
          </label>
          <div className="lg:col-span-5">
            <motion.button 
              whileHover={{ scale: 1.01 }} 
              whileTap={{ scale: 0.99 }} 
              type="submit" 
              className="mt-2 w-full rounded-md bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-600"
            >
              Request Availability
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default BookingForm;
