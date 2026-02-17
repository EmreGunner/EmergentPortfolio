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
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Manual Work', 'Repetitive Tasks', 'Wasted Hours', 'Busywork'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const iconMap = {
    briefcase: Briefcase,
    users: Users,
    zap: Zap,
    award: Award,
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#fafafa] to-white md:bg-none">
      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="Emre Guner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFEFC] via-[#FFFEFC]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFEFC] via-transparent to-[#FFFEFC]/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-12 md:pt-32 md:pb-20">
        <div className="max-w-md md:max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start gap-6 md:gap-8">

          {/* Mobile Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden relative w-36 h-36 rounded-full overflow-hidden border-[5px] border-white shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
          >
            <img
              src={heroData.image}
              alt="Emre Guner Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-[#1A1A1A]/[0.04] border border-[#1A1A1A]/[0.08] rounded-full"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-[#4a4a4a] tracking-wide uppercase">Available for Projects</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#1A1A1A]">
              I Build AI Systems
              <br />
              <span className="inline-block">That Replace{' '}</span>
              <span className="relative inline-block">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-[#555] to-[#1A1A1A]"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'shimmer 3s linear infinite',
                  }}
                >
                  {words[currentWord]}
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-[#666] max-w-lg leading-relaxed text-center md:text-left"
          >
            {heroData.subheadline}
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {trustBadges.map((badge, index) => {
              const BadgeIcon = iconMap[badge.icon];
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-[#e5e5e5] rounded-full text-sm text-[#555] font-medium shadow-sm"
                >
                  {BadgeIcon && <BadgeIcon size={14} className="text-[#888]" />}
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white rounded-full overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-[15px] font-semibold tracking-[-0.01em]">See My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button
              onClick={() => setVideoModalOpen(true)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#1A1A1A] border border-[#1A1A1A]/15 rounded-full hover:border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/[0.03] transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A]/[0.06] flex items-center justify-center group-hover:bg-[#1A1A1A]/[0.1] transition-colors">
                <Play size={14} className="fill-[#1A1A1A] text-[#1A1A1A] ml-0.5" />
              </div>
              <span className="text-[15px] font-semibold tracking-[-0.01em]">Watch Latest Video</span>
            </button>
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
            <div className="aspect-video bg-[#111] flex items-center justify-center relative">
              <p className="text-white/50">Video Player</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
