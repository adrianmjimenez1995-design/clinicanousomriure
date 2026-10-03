import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-teal-100/50 rounded-full" />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full border border-teal-100"
                        >
                            <Sparkles className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-medium text-teal-700">El teu nou somriure t'espera</span>
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.1]">
                            Clínica
                            <span className="block font-semibold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                Nou Somriure
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-light">
                            Cuidem de la teva salut bucodental amb l'última tecnologia i un equip de professionals dedicats a crear somriures perfectes.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="https://www.doctoralia.es/clinicas/clinica-nou-somriure" target="_blank" rel="noopener noreferrer">
                                <Button 
                                    size="lg" 
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base rounded-full shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 transition-all duration-300"
                                >
                                    Demanar Cita
                                    <ChevronRight className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                            <Link to={createPageUrl('Servicios')}>
                                <Button 
                                    variant="outline" 
                                    size="lg"
                                    className="border-slate-300 hover:border-teal-500 hover:text-teal-600 px-8 py-6 text-base rounded-full transition-all duration-300"
                                >
                                    Veure Serveis
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-amber-400 rounded-[2.5rem] opacity-20 blur-2xl" />
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/d4866403f_IMG_5342.jpg"
                                alt="Clínica dental moderna"
                                className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}