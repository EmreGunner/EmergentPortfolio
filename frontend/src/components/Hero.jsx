import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { heroData } from '../mockData';

const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="Emre Guner"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay - darker on left for text readability, clear on right for image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFEFC] via-[#FFFEFC]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFEFC] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A]">
              AI Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-[#4a4a4a]">
                For Real Estate
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#4a4a4a] max-w-lg leading-relaxed">
              Helping agencies scale through intelligent automation and data-driven strategies.
            </p>

            {/* Latest Video Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setVideoModalOpen(true)}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1A1A1A] text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#1A1A1A]/20 transition-all duration-300"
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
