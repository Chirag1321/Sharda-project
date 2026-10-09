import React from 'react';
import { Link } from 'react-router-dom';

const PromoSection = () => {
  return (
    <section className="py-20 bg-foundation-primary relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-foundation-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-[0.05] mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/hero-banner.png')" }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-foundation-secondary animate-pulse"></span>
          <span className="text-sm font-bold text-white tracking-widest uppercase">Upcoming Initiative</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Mega School Health Drive
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join us in our massive campaign to provide free comprehensive health screenings to thousands of school children across the region. Early detection saves lives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/mega-school-health-drive" className="w-full sm:w-auto px-8 py-4 bg-foundation-secondary hover:bg-pink-600 text-white font-bold rounded-full shadow-[0_8px_30px_rgba(233,84,124,0.4)] hover:shadow-[0_12px_40px_rgba(233,84,124,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            Learn More
          </Link>
          <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-foundation-primary font-semibold rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
