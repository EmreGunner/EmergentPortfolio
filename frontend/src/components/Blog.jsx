import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../mockData';

const labelStyles = {
  'Case Study': 'bg-emerald-500/10 text-emerald-600',
  'Guide': 'bg-blue-500/10 text-blue-600',
  'Insights': 'bg-purple-500/10 text-purple-600',
};

const Blog = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFEFC]" id="blog">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-[11px] font-semibold text-[#aaa] tracking-[0.15em] uppercase mb-3">
            Writing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-2">
            Blog
          </h2>
          <p className="text-[#888] text-lg">AI automation insights, case studies, and blueprints</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group block bg-white border border-[#eee] rounded-xl p-6 hover:border-[#1A1A1A]/15 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
            >
              <span className={`inline-block px-2.5 py-1 text-[10px] font-semibold rounded-full uppercase tracking-wide mb-4 ${labelStyles[post.label] || 'bg-[#f5f5f5] text-[#888]'}`}>
                {post.label}
              </span>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#1A1A1A]">
                {post.title}
              </h3>
              <p className="text-[#888] text-sm mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center text-[#1A1A1A] text-sm font-medium">
                <span>Read more</span>
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
