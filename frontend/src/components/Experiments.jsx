import React from 'react';
import { motion } from 'framer-motion';
import { experiments } from '../mockData';

const Experiments = () => {
  return (
    <section className="py-20 bg-white" id="experiments">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-[#37352F] mb-3">Experiments</h2>
          <p className="text-[#787774] text-lg">AI-powered projects and case studies</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#FFFEFC] border border-[#E0E0E0] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200"
            >
              <div className="aspect-video bg-[#E0E0E0] overflow-hidden">
                <img
                  src={experiment.image}
                  alt={experiment.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#37352F] mb-2">{experiment.title}</h3>
                <span className="inline-block px-3 py-1 bg-[#37352F] text-white text-xs font-mono rounded-full">
                  {experiment.tag}
                </span>
                <p className="text-[#787774] text-sm mt-3">{experiment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
