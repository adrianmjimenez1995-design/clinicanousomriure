import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
                <div className="absolute top-20 right-20 w-48 h-48 border border-white rounded-full" />
                <div className="absolute bottom-10 left-1/4 w-24 h-24 border border-white rounded-full" />
                <div className="absolute bottom-20 right-1/3 w-40 h-40 border border-white rounded-full" />
            </div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                        Preparat per al teu <span className="font-semibold">nou somriure</span>?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 font-light">
                        T'esperem
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://www.doctoralia.es/clinicas/clinica-nou-somriure" target="_blank" rel="noopener noreferrer">
                            <Button 
                                size="lg" 
                                className="bg-white text-teal-600 hover:bg-slate-100 rounded-full px-8 py-6 text-base shadow-xl shadow-teal-900/20"
                            >
                                <Calendar className="mr-2 w-5 h-5" />
                                Reservar Cita Online
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                        <a href="tel:+34664107391">
                            <Button 
                                size="lg" 
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base"
                            >
                                <Phone className="mr-2 w-5 h-5" />
                                664 107 391
                            </Button>
                        </a>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex items-center justify-center gap-8"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 backdrop-blur-sm" />
                            ))}
                        </div>
                        <p className="text-white/90 text-sm">
                            <span className="font-semibold">+100 pacients</span> ens van triar aquest mes
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}