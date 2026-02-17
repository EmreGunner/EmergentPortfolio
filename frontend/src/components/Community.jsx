import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, TrendingUp, ArrowRight } from 'lucide-react';

const Community = () => {
    const communities = [
        {
            name: "Istanbul AI & Agile",
            members: "4,987",
            role: "Organizer & Founder",
            description: "Leading one of the largest AI communities in the region, focusing on practical implementation and agile AI workflows.",
            icon: Users,
            url: "https://www.meetup.com/istanbul-open-agile-meetup/"
        },
        {
            name: "AI Agent Workshops",
            members: "1,873",
            role: "Organizer",
            description: "Hands-on workshops for builders and enterprises looking to deploy production-ready AI agents.",
            icon: Globe,
            trend: "Global Reach",
            url: "https://www.meetup.com/tr-TR/tech-workshop/"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#FFFEFC]" id="community">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Content side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[12px] font-black text-[#aaa] tracking-[0.25em] uppercase mb-4">
                            Community & Social Proof
                        </p>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight mb-8 leading-[1.05]">
                            Global AI <br />
                            <span className="text-emerald-600">Ecosystem & Community</span> <br />
                            Growth.
                        </h2>


                        <div className="flex flex-wrap gap-8 items-center">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-[#f0f0f0] overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Community Member" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-[#1A1A1A] flex items-center justify-center text-[10px] font-bold text-white">
                                    +7k
                                </div>
                            </div>
                            <div className="text-sm font-bold text-[#1A1A1A] uppercase tracking-widest">
                                Joined by <span className="text-emerald-600">6,800+</span> Buildrs
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards side */}
                    <div className="grid gap-6">
                        {communities.map((community, index) => {
                            const Icon = community.icon;
                            return (
                                <motion.a
                                    key={community.name}
                                    href={community.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="group relative bg-white border border-[#eee] rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-[0_45px_90px_rgba(0,0,0,0.08)] hover:border-[#1A1A1A]/10 hover:-translate-y-2 transition-all duration-500 block"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-16 h-16 bg-[#f9f9f9] group-hover:bg-[#1A1A1A] group-hover:text-white rounded-2xl flex items-center justify-center transition-colors duration-500">
                                            <Icon size={32} />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tighter">
                                                {community.members}
                                            </div>
                                            <div className="text-[10px] font-black text-[#aaa] uppercase tracking-widest mt-1">
                                                Members
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[10px] font-bold text-emerald-600 rounded-full mb-4 uppercase tracking-widest">
                                            {community.role}
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{community.name}</h3>
                                        <p className="text-[#888] text-base leading-relaxed mb-6">{community.description}</p>

                                        <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                                            Join on Meetup <ArrowRight size={14} className="text-emerald-500" />
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-[#f5f5f5] flex items-center justify-between">
                                        <span className="text-xs font-bold text-emerald-500">{community.trend}</span>
                                        <TrendingUp size={16} className="text-emerald-500" />
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Community;
