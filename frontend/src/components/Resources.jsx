import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { resources } from '../mockData';
import { Play, FileText, Calendar, ArrowRight } from 'lucide-react';

const statusStyles = {
    'live': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    'case-study': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    'beta': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
};

const iconMap = {
    Video: Play,
    Event: Calendar,
    Files: FileText,
    Guide: FileText,
    Demo: Zap
};

import { Zap } from 'lucide-react';

const Resources = () => {
    return (
        <section className="py-20 md:py-32 bg-white" id="resources">
            <div className="max-w-[1240px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16"
                >
                    <p className="text-[12px] font-bold text-[#aaa] tracking-[0.2em] uppercase mb-4">
                        Free Knowledge
                    </p>

                    <p className="text-[#666] text-xl md:text-2xl leading-relaxed">
                        Downloadable blueprints, automation workflows, and deep-dive case studies from my private lab.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/resources/${resource.id}`}
                                className="group flex flex-col h-full bg-white border border-[#eee] rounded-[2rem] overflow-hidden hover:border-[#1A1A1A]/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="aspect-[16/10] overflow-hidden bg-[#f9f9f9] relative">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {resource.tags?.map(tag => {
                                            const Icon = iconMap[tag] || FileText;
                                            return (
                                                <div key={tag} className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-[#1A1A1A]">
                                                    <Icon size={14} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-4">
                                        {resource.status === 'live' && (
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        )}
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${statusStyles[resource.status] || statusStyles['case-study']}`}>
                                            {resource.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-black transition-colors">
                                        {resource.title}
                                    </h3>

                                    <p className="text-[#666] text-base leading-relaxed mb-8 flex-grow">
                                        {resource.description}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-[#1A1A1A] gap-2 pt-4 border-t border-[#eee]">
                                        <span>Access Resource</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
