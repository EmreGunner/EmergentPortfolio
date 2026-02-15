import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../mockData';

const Blog = () => {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-[#37352F] mb-3">BLOG</h2>
          <p className="text-[#787774] text-lg">Latest insights on AI marketing and real estate</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block bg-[#FFFEFC] border border-[#E0E0E0] rounded-lg p-6 hover:shadow-lg hover:border-[#37352F] transition-all duration-200"
            >
              <p className="text-xs text-[#787774] mb-3">{post.label}</p>
              <h3 className="text-xl font-bold text-[#37352F] mb-3 leading-tight">{post.title}</h3>
              <p className="text-[#787774] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center text-[#37352F] text-sm font-medium group">
                <span>Read more</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
