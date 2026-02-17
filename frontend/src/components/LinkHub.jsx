import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { linkHubItems } from '../mockData';

const LinkHub = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFEFC]" id="about">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-[11px] font-semibold text-[#aaa] tracking-[0.15em] uppercase mb-3">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            What I'm Building
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {linkHubItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex items-center gap-5 bg-white border border-[#eee] rounded-xl p-5 hover:border-[#1A1A1A]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f5f5f5] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] group-hover:text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  {item.tag && (
                    <span className="px-2.5 py-0.5 text-[10px] font-bold text-[#888] bg-[#f5f5f5] rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-base text-[#666] truncate">{item.subtitle}</p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={18}
                className="flex-shrink-0 text-[#ccc] group-hover:text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkHub;
