import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Programs from '../components/home/Programs';
import PromoSection from '../components/home/PromoSection';
import ImpactStats from '../components/home/ImpactStats';
import FaqSection from '../components/home/FaqSection';

const Home = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Hero />
      <AboutPreview />
      <Programs />
      <PromoSection />
      <ImpactStats />
      <FaqSection />
    </div>
  );
};

export default Home;
