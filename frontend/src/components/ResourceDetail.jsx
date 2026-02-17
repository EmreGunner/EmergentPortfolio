import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, FileText, Calendar, Check, ArrowRight, Loader2 } from 'lucide-react';
import { resources } from '../mockData';
import Navigation from './Navigation';
import Footer from './Footer';

const iconMap = {
    Video: Play,
    Event: Calendar,
    Files: FileText,
};

const ResourceDetail = () => {
    const { id } = useParams();
    const resource = resources.find(r => r.id === id);
    const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

    if (!resource) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-[#FFFEFC]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Resource not found</h1>
                    <Link to="/" className="text-emerald-600 font-bold flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to home
                    </Link>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('loading');

        // N8N Webhook Integration
        // Replace with your actual n8n webhook URL
        const N8N_WEBHOOK_URL = 'https://n8n.your-instance.com/webhook/resource-magnet';

        const formData = new FormData(e.target);
        const data = {
            email: formData.get('email'),
            name: formData.get('name'),
            resourceId: resource.id,
            resourceTitle: resource.title,
            source: 'portfolio_resource_page'
        };

        try {
            // Mimic successful submission for now if URL is not set
            if (N8N_WEBHOOK_URL.includes('your-instance')) {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setFormStatus('success');
                return;
            }

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
            } else {
                setFormStatus('error');
            }
        } catch (err) {
            setFormStatus('error');
        }
    };

    return (
        <div className="bg-[#FFFEFC] min-h-screen">
            <Navigation />

            <main className="pt-32 pb-20">
                <div className="max-w-[1240px] mx-auto px-6">
                    {/* Header */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#888] hover:text-[#1A1A1A] transition-colors mb-12 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Back to All Resources</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Left Column: Info & Video */}
                        <div>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {resource.tags?.map(tag => {
                                    const Icon = iconMap[tag] || FileText;
                                    return (
                                        <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#eee] rounded-full text-[11px] font-bold text-[#1A1A1A] shadow-sm uppercase tracking-widest">
                                            <Icon size={12} />
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>

                            <h1 className="text-4xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight mb-8 leading-[1.05]">
                                {resource.title}
                            </h1>

                            <div className="prose prose-lg prose-slate mb-12">
                                <p className="text-[#666] text-xl leading-relaxed italic">
                                    "{resource.description}"
                                </p>
                                <div className="mt-8 text-[#4a4a4a] leading-loose space-y-4">
                                    {resource.details}
                                </div>
                            </div>

                            {/* Video Embed */}
                            {resource.videoUrl && (
                                <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_40px_80px_rgba(0,0,0,0.15)] group">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={resource.videoUrl}
                                        title={resource.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0"
                                    ></iframe>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Lead Magnet Card */}
                        <div className="lg:sticky lg:top-40">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-12 text-white shadow-[0_50px_100px_rgba(0,0,0,0.2)]"
                            >
                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                        <FileText size={32} className="text-emerald-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{resource.leadMagnetTitle}</h2>
                                    <p className="text-white/60 text-lg leading-relaxed">
                                        {resource.leadMagnetDescription}
                                    </p>
                                </div>

                                {formStatus === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center"
                                    >
                                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Check your email!</h3>
                                        <p className="text-emerald-100/70">The blueprints and templates have been sent to your inbox.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Your full name"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Work email address"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'loading'}
                                            className="w-full bg-white text-[#1A1A1A] font-bold py-5 rounded-2xl hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                                        >
                                            {formStatus === 'loading' ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    <span>Processing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Get Instant Access</span>
                                                    <ArrowRight size={20} />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-[10px] text-center text-white/30 pt-2">
                                            I respect your privacy. No spam, just high-value AI content.
                                        </p>
                                    </form>
                                )}
                            </motion.div>

                            {/* Social proof / Trust badges under the card */}
                            <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale contrast-125">
                                <div className="text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase">As Seen On</div>
                                <div className="text-sm font-bold text-[#1A1A1A]">PwC</div>
                                <div className="text-sm font-bold text-[#1A1A1A]">Google</div>
                                <div className="text-sm font-bold text-[#1A1A1A]">Toshiba</div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ResourceDetail;
