import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { heroData } from '../mockData';

const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-32">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#37352F] leading-tight">
              {heroData.headline}
            </h1>
          </motion.div>

          {/* Right - Image + Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={heroData.image}
                alt="Emre Guner"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />

              {/* Latest Video Floater */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-6 right-6 bg-white rounded-lg shadow-xl p-4 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setVideoModalOpen(true)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#37352F] rounded-full p-3">
                    <Play size={20} className="text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[#787774] font-medium">Latest video</p>
                  </div>
                </div>
              </motion.div>
            </div>
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
