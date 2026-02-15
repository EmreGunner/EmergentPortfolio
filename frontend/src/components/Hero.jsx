import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { heroData } from '../mockData';

const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-32">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="relative min-h-[600px] flex flex-col justify-center items-center text-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroData.image}
              alt="Emre Guner"
              className="w-full h-full object-cover object-top opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-[#FFFEFC]" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-4 mt-20"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-[#1A1A1A] leading-tight mb-6 tracking-tight">
              {heroData.headline}
            </h1>

            {/* Latest Video Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-[#37352F] rounded-full p-2 group-hover:bg-black transition-colors">
                <Play size={16} className="text-white fill-white" />
              </div>
              <span className="text-sm font-medium text-[#37352F]">Watch Latest Video</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-2 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-[#E0E0E0] rounded flex items-center justify-center">
              <p className="text-[#787774]">Video Player Placeholder</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
