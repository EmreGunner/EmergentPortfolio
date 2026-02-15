import React from 'react';
import { Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';
import { socialLinks } from '../mockData';

const Footer = () => {
  const getIcon = (iconName) => {
    const icons = {
      Linkedin: Linkedin,
      Youtube: Youtube,
      Twitter: Twitter,
      Instagram: Instagram
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="py-12 bg-[#FFFEFC] border-t border-[#E0E0E0]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
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

          {/* Contact */}
          <a
            href="mailto:emre@alexchen.com"
            className="text-[#787774] hover:text-[#37352F] transition-colors duration-200"
          >
            emre@alexchen.com
          </a>

          {/* Copyright */}
          <p className="text-[#787774] text-sm">
            Copyright © 2022 Proserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
