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
    <section className="relative min-h-screen md:min-h-[95vh] flex flex-col justify-center overflow-hidden bg-white pt-24 md:pt-32" id="home">
      <div className="max-w-[1240px] mx-auto px-6 w-full h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">

          {/* Left Column: Text & Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/[0.08] rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Title/Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mb-10 lg:mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-4">
                AI Lead Generation <br className="hidden md:block" />
                & Global Communities
              </h1>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            >
              {[
                { label: 'Enterprise AI', icon: 'zap' },
                { label: '7,000+ Community', icon: 'users' },
                { label: '50+ Automations', icon: 'zap' },
                { label: 'Global Advisor', icon: 'award' }
              ].map((badge, index) => {
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
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#resources"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#1A1A1A] text-white rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                <span className="text-sm font-bold">Explore Projects</span>
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

          {/* Right Column: Key Image (Transparent) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end items-center relative h-[45vh] lg:h-[75vh] overflow-hidden rounded-b-[5rem]"
          >
            {/* Soft depth glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-black/[0.1] to-transparent blur-3xl -z-10" />

            <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
              <img
                src={heroData.image}
                alt="Emre Guner"
                className="h-full w-auto object-contain object-top scale-[1.3] lg:scale-[1.9] transform origin-top translate-y-[-10%] lg:translate-y-[-18%] pointer-events-none drop-shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Soft Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-radial-gradient from-emerald-50/20 to-transparent blur-[120px] -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#1A1A1A]/[0.02] rounded-full blur-[80px] -z-10" />

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
