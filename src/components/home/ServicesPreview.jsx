import React from 'react';
import { motion } from 'framer-motion';
import { ToothBracesIcon, ToothImplantIcon, ToothDropIcon, ToothSparkleIcon, AlertToothIcon } from '../icons/DentalIcons';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
    {
        icon: ToothBracesIcon,
        title: "Ortodòncia",
        description: "Brackets i invisalign per un somriure perfectament alineat.",
        color: "from-teal-400 to-teal-600"
    },
    {
        icon: ToothImplantIcon,
        title: "Implants",
        description: "Solucions permanents amb implants d'última generació.",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: ToothDropIcon,
        title: "Endodòncia",
        description: "Tractaments de conducte indolors i efectius.",
        color: "from-rose-400 to-rose-600"
    },
    {
        icon: ToothSparkleIcon,
        title: "Neteja Dental",
        description: "Higiene professional per mantenir la teva boca sana.",
        color: "from-emerald-400 to-emerald-600"
    },
    {
        icon: AlertToothIcon,
        title: "Urgències",
        description: "Atenció immediata quan més ho necessites.",
        color: "from-purple-400 to-purple-600"
    }
];

export default function ServicesPreview() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-sm font-medium text-teal-600 tracking-wider uppercase">Els Nostres Serveis</span>
                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4 mb-6">
                        Cura dental <span className="font-semibold">completa</span>
                    </h2>
                    <p className="text-slate-600 text-lg font-light">
                        Oferim una àmplia gamma de tractaments per a totes les teves necessitats bucodentals.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative bg-slate-50/50 hover:bg-white rounded-3xl p-8 transition-all duration-500 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 h-full">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 font-light leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to={createPageUrl('Servicios')}>
                        <Button variant="outline" size="lg" className="rounded-full px-8 border-slate-300 hover:border-teal-500 hover:text-teal-600">
                            Veure tots els serveis
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}