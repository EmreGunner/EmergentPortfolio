import React from 'react';
import { motion } from 'framer-motion';
import { linkHubItems } from '../mockData';

const LinkHub = () => {
  return (
    <section className="py-20 bg-[#FFFEFC]" id="about">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-[#37352F] mb-3">Link Hub</h2>
          <p className="text-[#787774] text-lg">Explore my work, community, and content</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {linkHubItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block bg-white border border-[#E0E0E0] rounded-lg p-6 hover:shadow-lg hover:border-[#37352F] transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-[#37352F] mb-1">{item.title}</h3>
              <p className="text-[#787774] text-sm">{item.subtitle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkHub;
