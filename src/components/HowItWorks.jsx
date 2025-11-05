import React from 'react';
import { motion } from 'framer-motion';
import { Search, CalendarCheck, KeyRound, Car } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse',
    desc: 'Explore our 3D showroom and compare performance specs.',
  },
  {
    icon: CalendarCheck,
    title: 'Book',
    desc: 'Pick your dates and complete a quick reservation form.',
  },
  {
    icon: KeyRound,
    title: 'Confirm',
    desc: 'Instant confirmation and secure digital paperwork.',
  },
  {
    icon: Car,
    title: 'Drive',
    desc: 'Doorstep delivery or pick-up at your preferred location.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HowItWorks = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 text-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6 md:grid-cols-4"
      >
        {steps.map((s) => (
          <motion.div key={s.title} variants={item} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-black/60 p-6 backdrop-blur">
            <div className="mb-4 inline-flex rounded-md bg-white/5 p-2 text-white/80">
              <s.icon size={18} />
            </div>
            <h4 className="text-lg font-semibold">{s.title}</h4>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
