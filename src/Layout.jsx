import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, Mail, CalendarDays, Instagram, Facebook, Linkedin } from 'lucide-react';
import { mainPhone } from '@/lib/clinic';
import useContent from '@/i18n/useContent';
import { stripLangPrefix, useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import { Container } from '@/components/site/Primitives';
import MascotAssistant from '@/components/site/MascotAssistant';
import LanguageSwitcher from '@/components/site/LanguageSwitcher';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: { ca: 'La clínica', es: 'La clínica' }, page: 'Home', to: '/' },
    { name: { ca: 'Equip', es: 'Equipo' }, page: 'Equip', to: createPageUrl('Equip') },
    { name: { ca: 'Serveis', es: 'Servicios' }, page: 'Servicios', to: createPageUrl('Servicios') },
    { name: { ca: 'Tecnologia 3D', es: 'Tecnología 3D' }, page: 'Tecnologia', to: '/#tecnologia' },
    { name: { ca: 'Contacte', es: 'Contacto' }, page: 'Contacto', to: createPageUrl('Contacto') },
];

// Pàgines legals: enllaçades al peu i sense la mascota (no ha de distreure mentre es llegeixen)
const legalLinks = [
    { name: { ca: 'Avís legal', es: 'Aviso legal' }, page: 'AvisLegal' },
    { name: { ca: 'Privacitat', es: 'Privacidad' }, page: 'Privacitat' },
    { name: { ca: 'Galetes', es: 'Cookies' }, page: 'Cookies' },
];
const LEGAL_PAGES = legalLinks.map((l) => l.page);

function isActive(pathname, page) {
    if (page === 'Tecnologia') return false;
    const path = stripLangPrefix(pathname).toLowerCase();
    if (page === 'Home') return path === '/' || path === '/home';
    return path.startsWith('/' + page.toLowerCase());
}

function Logo({ inverted = false }) {
    const { t, lp } = useLang();
    return (
        <Link to={lp('/')} className="flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label={t({ ca: 'Clínica Nou Somriure, inici', es: 'Clínica Nou Somriure, inicio' })}>
            <img src="/logo-mark.png" alt="" width="44" height="44" className="h-10 w-10 rounded-xl shadow-sm sm:h-11 sm:w-11" />
            <span className="leading-none">
                <span className={cn('block text-[10px] font-bold uppercase tracking-[0.22em]', inverted ? 'text-brand-200' : 'text-brand-600')}>
                    Clínica
                </span>
                <span className={cn('mt-1 block whitespace-nowrap font-display text-lg font-medium sm:text-xl', inverted ? 'text-white' : 'text-brand-950')}>
                    Nou Somriure
                </span>
            </span>
        </Link>
    );
}

export default function Layout({ children, currentPageName }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // La mascota depèn del navegador (mida de pantalla, preferències): es munta un cop carregada la pàgina
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const { pathname, hash, key, state } = useLocation();
    const { t, lp } = useLang();
    const { clinic } = useContent();

    const socials = [
        { name: 'Instagram', href: clinic.links.instagram, icon: Instagram },
        { name: 'Facebook', href: clinic.links.facebook, icon: Facebook },
        { name: 'LinkedIn', href: clinic.links.linkedin, icon: Linkedin },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // En canviar de pàgina: tanca el menú i torna a dalt (o salta a l'àncora, p. ex. /Servicios#ortodoncia).
    // En canviar d'idioma es manté la posició de la pàgina.
    useEffect(() => {
        setMobileMenuOpen(false);
        if (state?.keepScroll) return;
        if (hash) {
            const target = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (target) {
                target.scrollIntoView();
                return;
            }
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname, hash, key, state]);

    const bookLabel = t({ ca: 'Demanar cita', es: 'Pedir cita' });

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <a href="#contingut" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg">
                {t({ ca: 'Salta al contingut', es: 'Saltar al contenido' })}
            </a>

            <header className="sticky top-0 z-50 w-full">
                {/* Barra superior amb dades de contacte */}
                <div className="hidden bg-brand-950 text-[13px] text-brand-100/80 lg:block">
                    <Container className="flex h-10 items-center justify-between">
                        <a href={clinic.links.maps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                            <MapPin className="h-3.5 w-3.5 text-terra-300" />
                            {clinic.address.street}, {clinic.address.city}
                        </a>
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2">
                                <Clock className="h-3.5 w-3.5 text-terra-300" />
                                {clinic.hours.days} · {clinic.hours.time}
                            </span>
                            <span className="flex items-center gap-2">
                                <Phone className="h-3.5 w-3.5 text-terra-300" />
                                {clinic.phones.map((phone, i) => (
                                    <React.Fragment key={phone.href}>
                                        {i > 0 && <span className="text-brand-100/40">·</span>}
                                        <a href={phone.href} className="transition-colors hover:text-white">{phone.label}</a>
                                    </React.Fragment>
                                ))}
                            </span>
                        </div>
                    </Container>
                </div>

                <nav
                    aria-label={t({ ca: 'Navegació principal', es: 'Navegación principal' })}
                    className={cn(
                        'border-b bg-white/90 backdrop-blur-md transition-shadow duration-300',
                        isScrolled ? 'border-sand-200 shadow-[0_8px_30px_-12px_rgba(11,38,39,0.18)]' : 'border-transparent'
                    )}
                >
                    <Container className="flex h-20 items-center justify-between gap-3">
                        <Logo />

                        <div className="hidden items-center gap-1 lg:flex">
                            {navLinks.map((link) => {
                                const active = isActive(pathname, link.page);
                                return (
                                    <Link
                                        key={link.page}
                                        to={lp(link.to)}
                                        aria-current={active ? 'page' : undefined}
                                        className={cn(
                                            'relative rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors xl:px-4',
                                            active ? 'text-brand-800' : 'text-slate-600 hover:text-brand-800'
                                        )}
                                    >
                                        {t(link.name)}
                                        {active && (
                                            <motion.span
                                                layoutId="nav-indicator"
                                                className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-terra-500"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="flex items-center gap-2 lg:gap-3">
                            {/* En pantalles molt estretes (<360 px) el selector va dins del menú */}
                            <LanguageSwitcher className="max-[359px]:hidden" />
                            <a
                                href={mainPhone.href}
                                aria-label={t({ ca: `Truca'ns al ${mainPhone.label}`, es: `Llámanos al ${mainPhone.label}` })}
                                className="hidden h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50 xl:flex"
                            >
                                <Phone className="h-[18px] w-[18px]" />
                            </a>
                            <ActionLink href={clinic.links.booking} size="sm" className="hidden h-11 px-5 lg:inline-flex">
                                <CalendarDays />
                                {bookLabel}
                            </ActionLink>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-expanded={mobileMenuOpen}
                                aria-controls="menu-mobil"
                                aria-label={mobileMenuOpen ? t({ ca: 'Tanca el menú', es: 'Cerrar el menú' }) : t({ ca: 'Obre el menú', es: 'Abrir el menú' })}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 text-brand-900 transition-colors hover:bg-sand-100 lg:hidden"
                            >
                                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </Container>

                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                id="menu-mobil"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden border-t border-sand-200 bg-white lg:hidden"
                            >
                                <Container className="py-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.page}
                                            to={lp(link.to)}
                                            className={cn(
                                                'flex items-center justify-between border-b border-sand-100 py-4 font-display text-2xl',
                                                isActive(pathname, link.page) ? 'text-brand-700' : 'text-brand-950'
                                            )}
                                        >
                                            {t(link.name)}
                                            {isActive(pathname, link.page) && <span className="h-2 w-2 rounded-full bg-terra-500" />}
                                        </Link>
                                    ))}
                                    <div className="flex items-center justify-between border-b border-sand-100 py-4">
                                        <span className="text-sm font-medium text-slate-500">{t({ ca: 'Idioma', es: 'Idioma' })}</span>
                                        <LanguageSwitcher />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 pt-6">
                                        <ActionLink href={mainPhone.href} variant="outline">
                                            <Phone />
                                            {t({ ca: 'Trucar', es: 'Llamar' })}
                                        </ActionLink>
                                        <ActionLink href={clinic.links.booking}>
                                            <CalendarDays />
                                            {bookLabel}
                                        </ActionLink>
                                    </div>
                                    <p className="pt-5 text-center text-sm text-slate-500">
                                        {clinic.hours.days} · {clinic.hours.time}
                                    </p>
                                </Container>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>

            <div id="contingut" className="flex-1">{children}</div>

            <footer className="bg-brand-950 text-brand-100/75">
                <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
                    <div className="space-y-5">
                        <Logo inverted />
                        <p className="max-w-xs text-sm leading-relaxed">
                            {t({
                                ca: `Odontologia propera, honesta i de qualitat a ${clinic.address.city}. T'acompanyem perquè tornis a somriure amb confiança.`,
                                es: `Odontología cercana, honesta y de calidad en ${clinic.address.city}. Te acompañamos para que vuelvas a sonreír con confianza.`,
                            })}
                        </p>
                        <div className="flex gap-2">
                            {socials.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-terra-300 hover:bg-white/5 hover:text-white"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{t({ ca: 'Navegació', es: 'Navegación' })}</h2>
                        <ul className="mt-5 space-y-3 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.page}>
                                    <Link to={lp(link.to)} className="transition-colors hover:text-white">{t(link.name)}</Link>
                                </li>
                            ))}
                            <li>
                                <a href={clinic.links.booking} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                                    {t({ ca: 'Demanar cita per WhatsApp', es: 'Pedir cita por WhatsApp' })}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{t({ ca: 'Contacte', es: 'Contacto' })}</h2>
                        <ul className="mt-5 space-y-4 text-sm">
                            <li>
                                <a href={clinic.links.maps} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition-colors hover:text-white">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terra-300" />
                                    <span>{clinic.address.street}<br />{clinic.address.postalCode} {clinic.address.city}</span>
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-terra-300" />
                                <span className="flex flex-col gap-1">
                                    {clinic.phones.map((phone) => (
                                        <a key={phone.href} href={phone.href} className="transition-colors hover:text-white">{phone.label}</a>
                                    ))}
                                </span>
                            </li>
                            <li>
                                <a href={`mailto:${clinic.email}`} className="flex gap-3 break-all transition-colors hover:text-white">
                                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terra-300" />
                                    {clinic.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{t({ ca: 'Horari', es: 'Horario' })}</h2>
                        <dl className="mt-5 space-y-3 text-sm">
                            <div>
                                <dt className="text-white">{clinic.hours.days}</dt>
                                <dd>{clinic.hours.time}</dd>
                            </div>
                            <div>
                                <dt className="text-white">{clinic.hours.saturdayLabel}</dt>
                                <dd>{clinic.hours.saturdayTime}</dd>
                            </div>
                        </dl>
                        <ActionLink href={clinic.links.booking} size="sm" className="mt-6">
                            <CalendarDays />
                            {bookLabel}
                        </ActionLink>
                    </div>
                </Container>

                <div className="border-t border-white/10">
                    {/* Marge inferior extra perquè el botó flotant de la mascota no tapi el text */}
                    <Container className="flex flex-col gap-1 pb-24 pt-6 text-xs text-brand-100/55 sm:flex-row sm:items-center sm:gap-3 sm:pb-6">
                        <p suppressHydrationWarning>© {new Date().getFullYear()} {clinic.name}. {t({ ca: 'Tots els drets reservats.', es: 'Todos los derechos reservados.' })}</p>
                        <p>{t({ ca: 'Registre sanitari', es: 'Registro sanitario' })} {clinic.healthRegistry}</p>
                        <nav aria-label={t({ ca: 'Informació legal', es: 'Información legal' })} className="flex flex-wrap gap-x-3 gap-y-1">
                            {legalLinks.map((link) => (
                                <Link key={link.page} to={lp(createPageUrl(link.page))} className="underline-offset-2 transition-colors hover:text-white hover:underline">
                                    {t(link.name)}
                                </Link>
                            ))}
                        </nav>
                        <LanguageSwitcher tone="dark" className="mt-2 self-start sm:mt-0 sm:self-center" />
                    </Container>
                </div>
            </footer>

            {/* Mascota-assistent (no surt a la pàgina 404, que ja té la seva) */}
            {mounted && currentPageName && !LEGAL_PAGES.includes(currentPageName) && <MascotAssistant />}
        </div>
    );
}
