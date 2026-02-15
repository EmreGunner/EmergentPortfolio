import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { socialLinks } from '../mockData';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Linkedin: Linkedin,
      Youtube: Youtube,
      Twitter: Twitter,
      Instagram: Instagram
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFFEFC]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-[#37352F] font-bold text-xl tracking-tight">
            EMRE GUNER
          </a>

          {/* Center Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-[#37352F] text-sm hover:text-[#2EAA4D] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-[#37352F] text-sm hover:text-[#2EAA4D] transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="#experiments"
              className="text-[#37352F] text-sm hover:text-[#2EAA4D] transition-colors duration-200"
            >
              Experiments
            </a>
            <a
              href="#events"
              className="text-[#37352F] text-sm hover:text-[#2EAA4D] transition-colors duration-200"
            >
              Events
            </a>
          </div>

          {/* Right Side - Social Icons + CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#787774] hover:text-[#37352F] transition-colors duration-200"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
            <Button
              variant="outline"
              className="rounded-full px-5 py-2 text-sm border-[#37352F] text-[#37352F] hover:bg-[#37352F] hover:text-white transition-all duration-200"
            >
              Newsletter
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
