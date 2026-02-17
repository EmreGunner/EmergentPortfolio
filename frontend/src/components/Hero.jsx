import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ArrowRight, Briefcase, Users, Zap, Award } from 'lucide-react';
import { heroData, trustBadges } from '../mockData';

const AnimatedCounter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const iconMap = {
    briefcase: Briefcase,
    users: Users,
    zap: Zap,
    award: Award,
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-white mb-8 md:mb-0" id="home">
      {/* Background Image Desktop */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="Emre Guner"
          className="w-full h-full object-cover object-center md:object-[center_20%]"
        />
        {/* Softening overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-12 md:pt-32 md:pb-20">
        <div className="max-w-md md:max-w-3xl mx-auto md:mx-0 flex flex-col items-center md:items-start gap-8 md:gap-10">

          {/* Mobile Avatar + Background Concept */}
          <div className="md:hidden w-full flex flex-col items-center gap-8 mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-black/5"
            >
              <img
                src={heroData.image}
                alt="Emre Guner"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/[0.08] rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-[#555] tracking-widest uppercase">Available for Projects</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-bold leading-[0.85] tracking-[-0.05em] text-[#1A1A1A] mb-4">
                Emre
                <br className="hidden md:block" />
                <span className="md:ml-[-0.05em]"> Guner</span>
              </h1>
              <p className="text-xl md:text-3xl font-medium text-[#888] tracking-tight">
                Ai Content Creator
              </p>
            </motion.div>
          </div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {trustBadges.map((badge, index) => {
              const BadgeIcon = iconMap[badge.icon];
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#eee] rounded-full text-xs text-[#666] font-semibold shadow-sm"
                >
                  {BadgeIcon && <BadgeIcon size={12} className="text-[#aaa]" />}
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#1A1A1A] text-white rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              <span className="text-sm font-bold">See My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button
              onClick={() => setVideoModalOpen(true)}
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#1A1A1A] border border-[#eee] rounded-full hover:border-[#1A1A1A]/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                <Play size={12} className="fill-current" />
              </div>
              <span className="text-sm font-bold">Watch Latest Video</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-white/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6 md:p-20"
          onClick={() => setVideoModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-black rounded-3xl overflow-hidden w-full max-w-6xl aspect-video shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Simple YouTube embed placeholder logic */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${heroData.latestVideo.url.split('v=')[1] || 'dQw4w9WgXcQ'}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          <button
            className="absolute top-8 right-8 text-[#1A1A1A] hover:scale-110 transition-transform p-2 bg-white rounded-full shadow-lg"
            onClick={() => setVideoModalOpen(false)}
          >
            <ArrowRight className="rotate-[-135deg]" size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
