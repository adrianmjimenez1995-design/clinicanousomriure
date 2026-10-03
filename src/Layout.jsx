import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: 'La Clínica', page: 'Home' },
    { name: 'Nosaltres', page: 'Equip' },
    { name: 'Serveis', page: 'Servicios' },
    { name: 'Contacte', page: 'Contacto' }
];

export default function Layout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <div className="min-h-screen bg-white">
            {/* Main Navigation */}
            <header className="sticky top-0 w-full z-50 bg-white shadow-sm">
                {/* Top Contact Bar */}
                <div className="hidden lg:block border-b border-slate-200 py-2">
                    <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-xs text-slate-600">
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                                Carrer Teulera 138 local 3, Santa Cristina d'Aro 17246
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="tel:+34664107391" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                                <Phone className="w-3.5 h-3.5" />
                                664 107 391 - 872 215 679
                            </a>
                            <span className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-teal-600" />
                                Dilluns a divendres 10:00-13:30 / 15:30-19:30. Dissabtes a convenir
                            </span>
                        </div>
                    </div>
                </div>

                <nav className="container mx-auto px-6 lg:px-12 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3">
                            <img 
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69788a3c4899adaff8045d41/a965e03c8_NouSomriureLogo.png"
                                alt="Clínica Nou Somriure"
                                className="h-12 w-auto"
                            />
                            <span className="text-xl font-semibold text-slate-900">Clínica Nou Somriure</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    to={createPageUrl(link.page)}
                                    className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                                        location.pathname.includes(link.page.toLowerCase()) || (link.page === 'Home' && location.pathname === '/')
                                            ? 'text-teal-600'
                                            : 'text-slate-700'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href="https://www.doctoralia.es/clinicas/clinica-nou-somriure" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6">
                                    Demanar Cita
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-slate-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-slate-700" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t"
                        >
                            <div className="container mx-auto px-6 py-6 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.page}
                                        to={createPageUrl(link.page)}
                                        className="block py-3 text-lg font-medium text-slate-700 hover:text-teal-600 border-b border-slate-100"
                                    >
                                        {link.name}
                                        </Link>
                                        ))}
                                        <a href="https://www.doctoralia.es/clinicas/clinica-nou-somriure" target="_blank" rel="noopener noreferrer" className="block pt-4">
                                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full">
                                        Demanar Cita
                                        </Button>
                                        </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Page Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-12 py-6">
                    <p className="text-slate-600 text-sm text-center">
                        Registre sanitari. E17806305
                    </p>
                </div>
            </footer>
        </div>
    );
}