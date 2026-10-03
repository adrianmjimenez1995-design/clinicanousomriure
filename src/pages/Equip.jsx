import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const team = [
    {
        name: "Belén Vázquez",
        role: "Gerència",
        specialty: "Gerència ",
        bio: "Amb més de deu anys d'experiència en odontologia, sé que la meva vocació va molt més enllà de cuidar dents: m'apassiona ajudar les persones a recuperar la confiança a través del seu somriure. Així va néixer el meu somni: crear una clínica on l'atenció sigui propera, honesta i pensada per a cada persona.\n\nTinc la sort de comptar amb un equip ple d'energia, compromís i experiència. Junts compartim una idea molt clara: volem que tothom pugui accedir a una atenció odontològica de qualitat, sense que el factor econòmic sigui una barrera.",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/4524b9e5d_BELN.jpg"
    },
    {
        name: "Marta Cantenys Juanola",
        role: "Ortodoncista",
        specialty: "Ortodòncia Fixa i Invisible",
        bio: "L'ortodòncia és l'especialitat de l'odontologia que s'encarrega d'estudiar, prevenir i corregir la posició de les dents i dels maxil·lars.\n\nEl seu objectiu és restablir l'equilibri i la funcionalitat de la boca, millorant alhora l'estètica facial i l'harmonia del somriure. A la clínica oferim tractaments adaptats a cada persona, amb la tecnologia més avançada per aconseguir resultats precisos, naturals i còmodes.",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/fcac43cec_MARTA.jpg"
    },
    {
        name: "Joel Pelach",
        role: "Odontòleg",
        specialty: "Odontologia General i Periodòncia",
        bio: "Odontologia General: Expert en prevenció, diagnòstic i tractament de problemes dentals comuns (càries, neteges, restauracions).\n\nPeriodòncia: Especialista centrat en la salut de les genives i l'os que sosté les dents. S'encarrega de prevenir, diagnosticar i tractar malalties periodontals, assegurant una base sòlida per al seu somriure.",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/e9c555f3b_JOEL.jpg"
    },
    {
        name: "Oriol Timoneda",
        role: "Implantòleg",
        specialty: "Especialista en Implantologia",
        bio: "",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/e405ebdd6_ORIOL.jpg"
    }
];

export default function Equip() {
    const [expandedMember, setExpandedMember] = useState(null);

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
                        <span className="text-sm font-medium text-teal-600 tracking-wider uppercase">El Nostre Equip</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mt-4 mb-6">
                            Professionals <span className="font-semibold">dedicats</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            Coneix els nostres especialistes, compromesos amb la teva salut bucodental.
                        </p>
                    </motion.div>
                </div>
            </section>
            
            {/* Team Section */}
            <section className="py-24 px-6 lg:px-12 bg-slate-900">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-5xl mx-auto space-y-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700"
                            >
                                <button
                                    onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                                    className="w-full p-6 md:p-8 flex items-center gap-6 hover:bg-slate-750 transition-colors text-left"
                                >
                                    <div className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden">
                                        <img 
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">{member.name}</h3>
                                        <p className="text-teal-400 text-lg font-medium">{member.role}</p>
                                        <p className="text-slate-400 text-sm">{member.specialty}</p>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedMember === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className="w-6 h-6 text-teal-400" />
                                    </motion.div>
                                </button>
                                
                                <motion.div
                                    initial={false}
                                    animate={{ 
                                        height: expandedMember === index ? 'auto' : 0,
                                        opacity: expandedMember === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 md:px-8 pb-8">
                                        <div className="grid md:grid-cols-2 gap-8 items-start">
                                            <div className={`relative rounded-2xl overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                                <img 
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-[400px] object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                            </div>
                                            {member.bio ? (
                                                <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                                                        {member.bio}
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className={`flex items-center justify-center h-full ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                                    <p className="text-slate-400 italic">Informació pròximament</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}