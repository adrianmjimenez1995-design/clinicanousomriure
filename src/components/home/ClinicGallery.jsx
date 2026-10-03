import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
    {
        url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/d4866403f_IMG_5342.jpg",
        title: "Sala d'Espera"
    },
    {
        url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/eeedcd269_IMG_5335.jpg",
        title: "Recepció"
    },
    {
        url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/c034e9068_IMG_5324.jpg",
        title: "Equipament Modern"
    },
    {
        url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/5558ce895_IMG_5330.jpg",
        title: "Instal·lacions"
    }
];

export default function ClinicGallery() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-sm font-medium text-teal-600 tracking-wider uppercase">Les Nostres Instal·lacions</span>
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 mb-6">
                        Un espai dissenyat <span className="font-semibold">per a tu</span>
                    </h2>
                    <p className="text-slate-600 text-lg font-light">
                        Instal·lacions modernes, còmodes i acollidores perque et sentis com a casa.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                        >
                            <img 
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}