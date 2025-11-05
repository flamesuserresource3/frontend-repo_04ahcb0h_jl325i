import React from 'react';
import { motion } from 'framer-motion';

const cars = [
  {
    title: 'Shadow GT',
    subtitle: 'Twin-turbo • AWD • 0-60 in 3.2s',
    gradient: 'from-zinc-900 to-slate-900',
    accent: 'shadow-[0_0_50px_-12px_rgba(239,68,68,0.35)]',
  },
  {
    title: 'Nebula S',
    subtitle: 'Electric • 380mi range • Autopilot',
    gradient: 'from-slate-900 to-neutral-900',
    accent: 'shadow-[0_0_50px_-12px_rgba(59,130,246,0.35)]',
  },
  {
    title: 'Vortex R',
    subtitle: 'V8 • RWD • Track mode',
    gradient: 'from-neutral-900 to-stone-900',
    accent: 'shadow-[0_0_50px_-12px_rgba(16,185,129,0.35)]',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

const FleetShowcase = () => {
  return (
    <section id="fleet" className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold">Our Signature Fleet</h2>
        <p className="mt-2 text-white/70">Performance-first machines curated for thrill and comfort.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cars.map((car, i) => (
          <motion.div
            key={car.title}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${car.gradient} p-6 ${car.accent}`}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-transform group-hover:scale-110" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold">{car.title}</h3>
              <p className="mt-1 text-sm text-white/70">{car.subtitle}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white/60">Starting at</span>
                <span className="text-lg font-semibold">$189/day</span>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#book"
                className="mt-6 inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur hover:bg-white/10"
              >
                Reserve
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FleetShowcase;
