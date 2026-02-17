import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Youtube, Twitter, Instagram, Menu, X } from 'lucide-react';
import { socialLinks } from '../mockData';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const getIcon = (iconName) => {
    const icons = { Linkedin, Youtube, Twitter, Instagram };
    const Icon = icons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Resources', href: '#resources' },
    { label: 'Events', href: '#events' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5 py-3'
          : 'bg-white/40 backdrop-blur-sm py-5'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-[#1A1A1A] font-extrabold text-xl lg:text-2xl tracking-[-0.05em] hover:opacity-70 transition-opacity duration-300">
              EMRE GUNER
            </a>

            {/* Center Menu — Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-6 py-2 text-[#4a4a4a] text-base lg:text-lg font-bold hover:text-[#1A1A1A] transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#1A1A1A] group-hover:w-6 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Right Side — Desktop */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] hover:text-[#1A1A1A] transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {getIcon(social.icon)}
                  </a>
                ))}
              </div>
              <a
                href="mailto:emre@emreguner.com"
                className="px-5 py-2 text-sm font-semibold text-[#1A1A1A] border border-[#1A1A1A]/20 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#1A1A1A] hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FFFEFC] pt-20"
          >
            <div className="flex flex-col items-center justify-center gap-8 py-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-bold text-[#1A1A1A] hover:opacity-60 transition-opacity"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-5 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] hover:text-[#1A1A1A] transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {getIcon(social.icon)}
                  </a>
                ))}
              </div>
              <a
                href="mailto:emre@emreguner.com"
                className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-[#1A1A1A] rounded-full hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
