import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const features = [
    "Equip de professionals certificats",
    "Tecnologia d'última generació",
    "Ambient càlid i acollidor",
    "Tractaments personalitzats"
];

export default function AboutPreview() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/c034e9068_IMG_5324.jpg"
                                    alt="Equipamiento dental moderno"
                                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                                />
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/cd2c525e0_IMG_5326.jpg"
                                    alt="Recepción clínica"
                                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                                />
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <Users className="w-8 h-8 mb-3 text-amber-400" />
                                    <p className="font-semibold text-lg text-white">+2000</p>
                                    <p className="text-slate-400 text-sm">Pacients satisfets</p>
                                </div>
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/eeedcd269_IMG_5335.jpg"
                                    alt="Instalaciones clínica"
                                    className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-sm font-medium text-teal-400 tracking-wider uppercase">Sobre Nosaltres</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-4 leading-tight">
                                El teu benestar és la nostra <span className="font-semibold text-teal-400">prioritat</span>
                            </h2>
                        </div>
                        
                        <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
                            A Clínica Nou Somriure portem més de 3 anys dedicats a l'odontologia de qualitat. El nostre compromís és oferir tractaments d'avantguarda en un ambient de confiança i calidesa.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-teal-400" />
                                    </div>
                                    <span className="text-slate-300 text-sm">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                        
                        <Link to={createPageUrl('Equip')}>
                            <Button 
                                size="lg" 
                                className="bg-white text-slate-900 hover:bg-teal-50 rounded-full px-8 py-6 mt-4"
                            >
                                Coneix el nostre equip
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}