import React from 'react';
import { motion } from 'framer-motion';
import { ToothSparkleIcon, ToothBracesIcon, ToothImplantIcon, ToothDropIcon, ToothProsthesisIcon, ToothCrownIcon, BabyToothIcon, AlertToothIcon } from '../components/icons/DentalIcons';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
    {
        icon: ToothSparkleIcon,
        title: "Neteja Dental",
        description: "Elimina el sarro i la placa bacteriana amb la nostra neteja professional. Mantén el teu somriure brillant i saludable.",
        features: ["Ultrasons d'última generació", "Polit professional", "Fluorització protectora"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/e91d615de_higienedentalfoto.jpg",
        color: "from-emerald-400 to-emerald-600"
    },

    {
        icon: ToothBracesIcon,
        title: "Ortodòncia",
        description: "Corregeix la posició de les teves dents amb brackets tradicionals o la innovadora tècnica Invisalign.",
        features: ["Invisalign certificat", "Brackets estètics", "Seguiment personalitzat"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/983e7356a_ORTODONCIAFOTO.jpg",
        color: "from-teal-400 to-teal-600"
    },
    {
        icon: ToothImplantIcon,
        title: "Implants Dentals",
        description: "Recupera peces dentals perdudes amb implants de titani d'alta qualitat, duradors i estètics.",
        features: ["Implants de titani premium", "Cirurgia mínimament invasiva"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/1e9db3a84_implantesimagen.jpg",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: ToothDropIcon,
        title: "Endodòncia",
        description: "Tractament de conducte per salvar dents danyades o infectades de forma completament indolor.",
        features: ["Anestèsia localitzada", "Tecnologia de rotació", "Recuperació ràpida"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/b3bc2de4f_endodonciaimagen.jpg",
        color: "from-rose-400 to-rose-600"
    },
    {
        icon: ToothProsthesisIcon,
        title: "Prótesi Removible",
        description: "Solucions protètiques còmodes i estètiques per recuperar la funcionalitat i l'estètica del teu somriure.",
        features: ["Disseny personalitzat", "Materials de qualitat", "Ajustos sense càrrec"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/2a8039e60_protesisremovibleimagen.jpg",
        color: "from-indigo-400 to-indigo-600"
    },
    {
        icon: ToothCrownIcon,
        title: "Estètica Dental",
        description: "Carilles, corones i tractaments estètics per aconseguir el somriure perfecte que sempre has desitjat.",
        features: ["Carilles de porcellana", "Disseny digital de somriure", "Resultats naturals"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/8d94e28a5_estticadentalimagen.jpg",
        color: "from-violet-400 to-violet-600"
    },
    {
        icon: BabyToothIcon,
        title: "Odontopediatria",
        description: "Cura dental especialitzada per als més petits en un ambient amigable i sense por.",
        features: ["Especialistes en nens", "Ambient lúdic", "Segelladors preventius"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/d8378ea86_odontopediatriaimagenes.jpg",
        color: "from-pink-400 to-pink-600"
    },
    {
        icon: AlertToothIcon,
        title: "Urgències Dentals",
        description: "Atenció immediata per a emergències: dolor agut, traumatismes o peces fracturades.",
        features: ["Atenció 24 hores", "Sense cita prèvia", "Diagnòstic ràpid"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/1f12d73ee_urgenciasdentalesimagen.jpg",
        color: "from-red-400 to-red-600"
    }
];

export default function Servicios() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-medium text-teal-600 tracking-wider uppercase">Els Nostres Serveis</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mt-4 mb-6">
                            Tractaments <span className="font-semibold">dentals</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            Oferim una àmplia gamma de serveis odontològics amb l'última tecnologia i els millors professionals.
                        </p>
                    </motion.div>
                </div>
            </section>
            
            {/* Services Grid */}
            <section className="py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                           index === services.length - 1 ? (
                               <motion.div
                                   key={service.title}
                                   initial={{ opacity: 0, y: 40 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.6 }}
                                   className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                               >
                                   <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                       <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                                           <service.icon className="w-8 h-8 text-white" />
                                       </div>
                                       <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{service.title}</h2>
                                       <p className="text-lg text-slate-600 font-light leading-relaxed">{service.description}</p>
                                       <ul className="space-y-3">
                                           {service.features.map((feature) => (
                                               <li key={feature} className="flex items-center gap-3 text-slate-700">
                                                   <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`} />
                                                   {feature}
                                               </li>
                                           ))}
                                       </ul>
                                       <a href="https://www.doctoralia.es/clinicas/clinica-nou-somriure" target="_blank" rel="noopener noreferrer">
                                           <Button className="mt-4 bg-teal-600 hover:bg-teal-700 rounded-full px-8">
                                               Demanar Cita
                                           </Button>
                                       </a>
                                       <p className="text-slate-500 italic pt-4">I molt més...</p>
                                   </div>
                                   <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                       <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-[2rem] opacity-20 blur-2xl`} />
                                       <img 
                                           src={service.image}
                                           alt={service.title}
                                           className="relative rounded-[2rem] shadow-2xl w-full h-[400px] object-cover"
                                       />
                                   </div>
                               </motion.div>
                           ) : (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{service.title}</h2>
                                    <p className="text-lg text-slate-600 font-light leading-relaxed">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-slate-700">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="https://www.doctoralia.es/clinicas/clinica-nou-somriure" target="_blank" rel="noopener noreferrer">
                                        <Button className="mt-4 bg-teal-600 hover:bg-teal-700 rounded-full px-8">
                                            Demanar Cita
                                        </Button>
                                    </a>
                                </div>
                                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-[2rem] opacity-20 blur-2xl`} />
                                    <img 
                                        src={service.image}
                                        alt={service.title}
                                        className="relative rounded-[2rem] shadow-2xl w-full h-[400px] object-cover"
                                    />
                                </div>
                                </motion.div>
                                )
                                ))}
                                </div>
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-24 px-6 lg:px-12 bg-slate-900">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                        No trobes el que busques?
                    </h2>
                    <p className="text-slate-400 text-lg mb-8">
                        Contacta'ns i t'assessorarem sobre el millor tractament per a tu.
                    </p>
                    <Link to={createPageUrl('Contacto')}>
                        <Button size="lg" className="bg-teal-500 hover:bg-teal-600 rounded-full px-8">
                            Contactar
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}