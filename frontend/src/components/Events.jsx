import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users } from 'lucide-react';
import { instagramEmbeds, meetupGroups } from '../mockData';

const Events = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FFFEFC]" id="events">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-[11px] font-semibold text-[#aaa] tracking-[0.15em] uppercase mb-3">
            Community
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Events & Speaking
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Conferences, workshops, and community meetups across 3 continents
          </p>
        </motion.div>

        {/* Meetup Groups */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
        >
          {meetupGroups.map((group, index) => (
            <a
              key={group.name}
              href={group.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-white border border-[#eee] rounded-xl hover:border-[#1A1A1A]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ED1C40]/8 flex items-center justify-center">
                  <Users size={18} className="text-[#ED1C40]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{group.name}</p>
                  <p className="text-xs text-[#888]">{group.members} members</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-[#ccc] group-hover:text-[#1A1A1A] transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Instagram Embeds */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {instagramEmbeds.map((embed) => (
            <div key={embed.id} className="bg-white rounded-xl border border-[#eee] overflow-hidden shadow-sm">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${embed.url}?utm_source=ig_embed`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  margin: 0,
                  padding: 0,
                  width: '100%',
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a
                    href={embed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center"
                  >
                    <div className="py-10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center mx-auto shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[#0095f6] font-semibold text-sm mb-1">View on Instagram</p>
                    <p className="text-[#999] text-xs">@mrgunner.ai</p>
                  </a>
                </div>
              </blockquote>
              <div className="px-4 pb-4">
                <p className="text-xs text-[#888] font-medium">{embed.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
