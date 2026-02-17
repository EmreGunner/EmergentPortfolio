import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { partners, clients, stats } from '../mockData';

// Inline SVG logos for reliability
const LogoSVGs = {
  Google: () => (
    <svg viewBox="0 0 272 92" className="h-6 w-auto"><path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335" /><path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05" /><path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4" /><path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" /><path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.96 0-11.84 4.37-11.59 12.93z" fill="#EA4335" /><path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z" fill="#4285F4" /></svg>
  ),
  Microsoft: () => (
    <svg viewBox="0 0 23 23" className="h-5 w-auto"><rect x="1" y="1" width="10" height="10" fill="#f25022" /><rect x="12" y="1" width="10" height="10" fill="#7fba00" /><rect x="1" y="12" width="10" height="10" fill="#00a4ef" /><rect x="12" y="12" width="10" height="10" fill="#ffb900" /></svg>
  ),
  n8n: () => (
    <svg viewBox="0 0 100 30" className="h-5 w-auto"><text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="22" fontWeight="700" fill="#EA4B71">n8n</text></svg>
  ),
  Make: () => (
    <svg viewBox="0 0 100 30" className="h-5 w-auto"><text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="22" fontWeight="700" fill="#6D00CC">Make</text></svg>
  ),
  HubSpot: () => (
    <svg viewBox="0 0 120 30" className="h-5 w-auto"><text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#FF7A59">HubSpot</text></svg>
  ),
  OpenAI: () => (
    <svg viewBox="0 0 120 30" className="h-5 w-auto"><text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#10A37F">OpenAI</text></svg>
  ),
  PwC: () => (
    <svg viewBox="0 0 70 30" className="h-5 w-auto"><text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="22" fontWeight="700" fill="#D04A02">PwC</text></svg>
  ),
  Toshiba: () => (
    <svg viewBox="0 0 120 30" className="h-5 w-auto"><text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#FF0000">Toshiba</text></svg>
  ),
  Honeywell: () => (
    <svg viewBox="0 0 150 30" className="h-5 w-auto"><text x="0" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#E11B22">Honeywell</text></svg>
  ),
};

const AnimatedNumber = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''));
  const hasPlus = target.includes('+');
  const hasEuro = target.includes('€');
  const hasK = target.includes('K');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= steps) {
        setValue(numericTarget);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  const formatValue = () => {
    let display = '';
    if (hasEuro) display += '€';
    display += value.toLocaleString();
    if (hasK) display += 'K';
    if (hasPlus) display += '+';
    return display;
  };

  return <span ref={ref}>{formatValue()}</span>;
};

const AuthorityStrip = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="authority">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group min-w-[120px]"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-2">
                <AnimatedNumber target={stat.number} />
              </div>
              <p className="text-sm md:text-base text-[#888] font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Worked With */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold text-[#aaa] tracking-[0.15em] uppercase mb-6 text-center">
            Worked With & Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[...clients, ...partners].map((item, index) => {
              const LogoComponent = LogoSVGs[item.name];
              return (
                <motion.div
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center transition-all duration-300 cursor-default"
                >
                  {LogoComponent ? (
                    <LogoComponent />
                  ) : (
                    <span className="text-sm font-bold text-[#999] tracking-wide">{item.name}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[11px] font-semibold text-[#aaa] tracking-[0.15em] uppercase mb-6 text-center">
            Certifications & Partnerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'n8n Creator', color: 'bg-[#FF6D5A]/10 text-[#FF6D5A] border-[#FF6D5A]/20' },
              { label: 'Make Partner', color: 'bg-[#6D00CC]/10 text-[#6D00CC] border-[#6D00CC]/20' },
              { label: 'Google Partner', color: 'bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20' },
              { label: 'Microsoft Partner', color: 'bg-[#00A4EF]/10 text-[#00A4EF] border-[#00A4EF]/20' },
              { label: 'HubSpot Certified', color: 'bg-[#FF7A59]/10 text-[#FF7A59] border-[#FF7A59]/20' },
            ].map((cert, index) => (
              <motion.span
                key={cert.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold border ${cert.color}`}
              >
                {cert.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
