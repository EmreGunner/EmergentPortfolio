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
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-[12px] font-black text-[#aaa] tracking-[0.25em] uppercase mb-4">
            Global Presence
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight mb-6 leading-tight">
            Speaking & <br /><span className="text-[#888]">Global Impact</span>
          </h2>
          <p className="text-[#666] text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            From keynote stages to intimate workshops, driving the conversation on AI across 3 continents.
          </p>
        </motion.div>

        {/* Instagram Embeds — VISUAL PROOF FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
        >
          {instagramEmbeds.map((embed) => (
            <div key={embed.id} className="bg-white rounded-[2.5rem] border border-[#eee] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
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
              <div className="px-8 pb-8">
                <p className="text-[10px] text-[#888] font-black uppercase tracking-widest leading-relaxed">{embed.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
