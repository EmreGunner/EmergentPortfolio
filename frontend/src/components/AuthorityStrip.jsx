import React from 'react';
import { motion } from 'framer-motion';
import { partners, clients } from '../mockData';

const AuthorityStrip = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xs font-bold text-[#787774] tracking-wider mb-8 text-center">
            PARTNERS
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-8 flex items-center grayscale hover:grayscale-0 transition-all duration-200"
              >
                <span className="text-2xl font-bold text-[#37352F]">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-[#E0E0E0] my-16"></div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xs font-bold text-[#787774] tracking-wider mb-8 text-center">
            CLIENTS
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-8 flex items-center grayscale hover:grayscale-0 transition-all duration-200"
              >
                <span className="text-2xl font-bold text-[#37352F]">{client.name}</span>
              </motion.div>
            ))}
            {/* Certification Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="h-12 w-12 rounded-full bg-[#E0E0E0] flex items-center justify-center"
            >
              <span className="text-xs font-bold text-[#787774]">Cert</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
