import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Youtube, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../mockData';

const Footer = () => {
  const getIcon = (iconName) => {
    const icons = { Linkedin, Youtube, Twitter, Instagram };
    const Icon = icons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <footer className="py-16 bg-[#1A1A1A]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-2xl tracking-tight mb-2">
              Let's build something together.
            </h3>
            <p className="text-[#888] text-sm max-w-md">
              I help businesses eliminate repetitive work with AI automation. Currently available for projects and speaking engagements.
            </p>
          </div>
          <a
            href="mailto:emre@emreguner.com"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A1A1A] rounded-full font-semibold text-sm hover:bg-[#f5f5f5] transition-colors duration-300"
          >
            Get in Touch
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                {getIcon(social.icon)}
              </a>
            ))}
          </div>

          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} Emre Guner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
