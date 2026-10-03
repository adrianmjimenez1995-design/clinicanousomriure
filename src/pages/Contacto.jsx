import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, MessageCircle, X, Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
    { icon: MapPin, title: "Adreça", text: "Carrer Teulera 138 local 3, Santa Cristina d'Aro 17246", link: "https://maps.google.com/?q=Carrer+Teulera+138+Santa+Cristina+d'Aro" },
    { icon: Phone, title: "Telèfon", text: "664 107 391 - 872 215 679", link: "tel:+34664107391" },
    { icon: Mail, title: "Correu", text: "clinicanousomriure@gmail.com", link: "mailto:clinicanousomriure@gmail.com" },
    { icon: Clock, title: "Horari", text: "Dilluns a divendres 10:00-13:30 / 15:30-19:30. Dissabtes a convenir", link: null }
];

export default function Contacto() {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Hola! Com et podem ajudar avui?' }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { role: 'user', text: inputMessage }]);
            setInputMessage('');
            
            // Resposta automàtica
            setTimeout(() => {
                setMessages(prev => [...prev, { 
                    role: 'bot', 
                    text: 'Gràcies pel teu missatge! Un membre del nostre equip es posarà en contacte amb tu aviat. També pots trucar-nos al 664 107 391 o reservar cita a través de Doctoralia.' 
                }]);
            }, 1000);
        }
    };

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
                        <span className="text-sm font-medium text-teal-600 tracking-wider uppercase">Contacte</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mt-4 mb-6">
                            Som <span className="font-semibold">aquí</span> per a tu
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            Visita'ns, truca'ns o escriu-nos. Estarem encantats d'atendre't.
                        </p>
                    </motion.div>
                </div>
            </section>
            
            {/* Contact Info & Map */}
            <section className="py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {contactInfo.map((item) => (
                                <a 
                                    key={item.title}
                                    href={item.link || '#'}
                                    className={`flex items-center gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors ${!item.link && 'pointer-events-none'}`}
                                >
                                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">{item.title}</p>
                                        <p className="text-lg font-medium text-slate-900">{item.text}</p>
                                    </div>
                                </a>
                            ))}
                            
                            {/* Social Links */}
                            <div className="flex gap-4 pt-4">
                                <a 
                                    href="https://wa.me/34664107391" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                                >
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.instagram.com/clinicanousomriure" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://www.facebook.com/Clinicanousomriure/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/cl%C3%ADnica-dental-nou-somriure-18a54a269/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                        
                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-slate-200 rounded-3xl h-full min-h-[400px] overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.7134243774584!2d3.0249837!3d41.8364844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bac0f7e1e9c8b5%3A0x7e5e5e5e5e5e5e5e!2sCarrer%20Teulera%2C%20138%2C%2017246%20Santa%20Cristina%20d'Aro%2C%20Girona!5e0!3m2!1sen!2ses!4v1620000000000!5m2!1sen!2ses"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '400px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-3xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                </section>

                {/* Chatbot */}
                <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-50"
                    >
                        <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Clínica Nou Somriure</h3>
                                    <p className="text-white/80 text-xs">Estem aquí per ajudar-te</p>
                                </div>
                            </div>
                            <button onClick={() => setChatOpen(false)} className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                                        msg.role === 'user' 
                                            ? 'bg-teal-600 text-white' 
                                            : 'bg-white text-slate-900 shadow-sm'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-white border-t flex gap-2">
                            <Input
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Escriu el teu missatge..."
                                className="flex-1"
                            />
                            <Button onClick={handleSendMessage} className="bg-teal-600 hover:bg-teal-700">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>

                {/* Chatbot Button */}
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full shadow-2xl flex items-center justify-center text-white z-50 hover:shadow-teal-600/50 transition-shadow"
                >
                {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                </motion.button>
                </main>
                );
                }