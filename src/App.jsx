import React from 'react';
import Hero3D from './components/Hero3D';
import BookingForm from './components/BookingForm';
import FleetShowcase from './components/FleetShowcase';
import HowItWorks from './components/HowItWorks';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero with Spline 3D car */}
      <Hero3D />

      {/* Booking call-to-action */}
      <BookingForm />

      {/* Fleet cards */}
      <FleetShowcase />

      {/* Process steps */}
      <HowItWorks />

      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        © {new Date().getFullYear()} FluxRent. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
