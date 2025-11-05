import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and gradient accents that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-slate-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wider text-white/80 backdrop-blur"
          >
            FUTURISTIC RIDES • 24/7 DELIVERY • PREMIUM SUPPORT
          </motion.span>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Drive Tomorrow, Today
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Experience a new era of car rentals. Curated performance machines, seamless booking, and a cinematic 3D showroom.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }} 
              href="#book" 
              className="inline-flex items-center justify-center rounded-md bg-red-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/25 transition-colors hover:bg-red-600"
            >
              Book Your Ride
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }} 
              href="#fleet" 
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Explore Fleet
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
