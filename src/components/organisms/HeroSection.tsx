'use client';
import React from 'react';
import NavBar from '../molecules/NavBar';
import HeroTextBlock from '../molecules/HeroTextBlock';
import MalinauMap from '../atoms/MalinauMap';

const HeroSection: React.FC = () => (
  <section
    className="min-h-screen flex flex-col bg-secondary-main relative"
    style={{
      backgroundImage: "url('/assets/image/bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-secondary-main/80 z-0" />
    <NavBar />
    <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8 relative z-10">
      <HeroTextBlock />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[800px] h-[400px] rounded-2xl overflow-hidden shadow-lg relative">
          <MalinauMap />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
