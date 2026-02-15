import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { heroData } from '../mockData';

const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="Emre Guner"
          className="w-full h-full object-cover object-center"
        />
        {/* Refined gradient overlay - lighter to let image pop but keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFEFC] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFEFC]/90 via-[#FFFEFC]/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur-xl bg-white/30 border border-white/50 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#4a4a4a]">
                {heroData.headline}
              </span>
            </h1>

            {/* Latest Video Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setVideoModalOpen(true)}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1A1A1A] text-white rounded-full overflow-hidden shadow-xl transition-all hover:shadow-[#1A1A1A]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#333] to-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                  <Play size={20} className="fill-white" />
                </div>
                <span className="text-lg font-medium tracking-wide">Watch Latest Video</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center relative group">
              <p className="text-white/50 group-hover:text-white transition-colors">Video Player Placeholder</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
