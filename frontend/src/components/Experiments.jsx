import React from 'react';
import { motion } from 'framer-motion';
import { experiments } from '../mockData';

const statusStyles = {
  'live': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  'case-study': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  'beta': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
};

const Experiments = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="experiments">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-[11px] font-semibold text-[#aaa] tracking-[0.15em] uppercase mb-3">
            Labs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-2">
            Experiments
          </h2>
          <p className="text-[#888] text-lg">AI-powered projects, prototypes, and case studies</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-[#FFFEFC] border border-[#eee] rounded-xl overflow-hidden cursor-pointer hover:border-[#1A1A1A]/15 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden bg-[#f5f5f5]">
                <img
                  src={experiment.image}
                  alt={experiment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {experiment.status === 'live' && (
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  )}
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wide ${statusStyles[experiment.status] || statusStyles['case-study']}`}>
                    {experiment.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#1A1A1A]">
                  {experiment.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed line-clamp-2">{experiment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
