import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, useAnimationControls, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { X, CalendarDays, Phone, Navigation, Star } from 'lucide-react';
import { clinic, mainPhone, reviews } from '@/lib/clinic';
import WhatsAppIcon from './WhatsAppIcon';
import MascotFace, { useWink } from './MascotFace';
import { cn } from '@/lib/utils';
import { useLang } from '@/i18n/LanguageContext';

// Assistent "estil Clip": la mascota segueix l'usuari, salta d'un costat a l'altre
// quan canvia de secció i mostra un consell amb accions útils.
// Cada secció de la web s'hi enganxa amb l'atribut data-mascot="<clau>".

const ACTIONS = {
    cita: { label: { ca: 'Demanar cita', es: 'Pedir cita' }, href: clinic.links.booking, icon: CalendarDays, className: 'bg-terra-600 text-white hover:bg-terra-700' },
    whatsapp: { label: { ca: 'WhatsApp', es: 'WhatsApp' }, href: clinic.links.whatsapp, icon: WhatsAppIcon, className: 'bg-[#15803d] text-white hover:bg-[#166534]' },
    trucar: { label: { ca: 'Trucar', es: 'Llamar' }, href: mainPhone.href, icon: Phone, className: 'border border-brand-200 text-brand-800 hover:bg-brand-50' },
    arribar: { label: { ca: 'Com arribar-hi', es: 'Cómo llegar' }, href: clinic.links.maps, icon: Navigation, className: 'border border-brand-200 text-brand-800 hover:bg-brand-50' },
    ressenya: { label: { ca: 'Deixar una ressenya', es: 'Dejar una reseña' }, href: reviews.google.url, icon: Star, className: 'border border-brand-200 text-brand-800 hover:bg-brand-50' },
};

// Missatge de la mascota per a cada secció (data-mascot="<clau>")
const TIPS = {
    inici: {
        pose: 'saluda', side: 'right', actions: ['cita', 'whatsapp'],
        text: { ca: "Hola! Et donem la benvinguda a Nou Somriure. Vols que t'ajudi a demanar cita?", es: '¡Hola! Te damos la bienvenida a Nou Somriure. ¿Quieres que te ayude a pedir cita?' },
    },
    serveis: {
        pose: 'raspall', side: 'left', actions: ['whatsapp'],
        text: { ca: "Fem des d'una neteja fins a implants. Tria un tractament per saber-ne més.", es: 'Hacemos desde una limpieza hasta implantes. Elige un tratamiento para saber más.' },
    },
    tecnologia: {
        pose: 'escaner', side: 'right', actions: ['cita'],
        text: { ca: 'Novetat! Ara fem radiografies en 3D amb el CBCT i escanegem la boca en 3D, sense motlles.', es: '¡Novedad! Ahora hacemos radiografías en 3D con el CBCT y escaneamos la boca en 3D, sin moldes.' },
    },
    nosaltres: {
        pose: 'saluda', side: 'right', actions: ['cita'],
        text: { ca: "Som un equip proper i ens agrada explicar-ho tot. Vine a conèixer-nos!", es: 'Somos un equipo cercano y nos gusta explicarlo todo. ¡Ven a conocernos!' },
    },
    'primera-visita': {
        pose: 'calendari', side: 'left', actions: ['cita', 'trucar'],
        text: { ca: "Demanar cita és molt fàcil: escriu-nos per WhatsApp o truca'ns.", es: 'Pedir cita es muy fácil: escríbenos por WhatsApp o llámanos.' },
    },
    installacions: {
        pose: 'lupa', side: 'right', actions: ['arribar'],
        text: { ca: 'Fes una ullada a la clínica. Oi que és acollidora?', es: 'Echa un vistazo a la clínica. ¿A que es acogedora?' },
    },
    equip: {
        pose: 'saluda', side: 'left', actions: [],
        text: { ca: "Aquest és l'equip que et cuidarà.", es: 'Este es el equipo que te cuidará.' },
    },
    opinions: {
        pose: 'saluda', side: 'left', actions: ['ressenya'],
        text: { ca: "Gràcies a tots els que ens deixeu la vostra opinió! Si ja ens has visitat, ens ajudes molt.", es: '¡Gracias a todos los que nos dejáis vuestra opinión! Si ya nos has visitado, nos ayudas mucho.' },
    },
    dubtes: {
        pose: 'dubte', side: 'right', actions: ['whatsapp', 'trucar'],
        text: { ca: 'Tens algun dubte? Escriu-nos per WhatsApp i et respondrem.', es: '¿Tienes alguna duda? Escríbenos por WhatsApp y te responderemos.' },
    },
    cita: {
        pose: 'calendari', side: 'right', actions: ['cita'],
        text: { ca: "T'esperem! Escriu-nos i et donarem hora en un moment.", es: '¡Te esperamos! Escríbenos y te daremos cita en un momento.' },
    },
    'serveis-pagina': {
        pose: 'raspall', side: 'right', actions: ['whatsapp'],
        text: { ca: "Aquests són els nostres tractaments. Si no trobes el que busques, pregunta'ns!", es: 'Estos son nuestros tratamientos. Si no encuentras lo que buscas, ¡pregúntanos!' },
    },
    nens: {
        pose: 'raspall', side: 'left', actions: ['cita'],
        text: { ca: 'Als més petits els cuidem en un ambient tranquil i divertit.', es: 'A los más pequeños los cuidamos en un ambiente tranquilo y divertido.' },
    },
    urgencies: {
        pose: 'tireta', side: 'right', actions: ['trucar'],
        text: { ca: "Tens dolor o t'has fet mal? Truca'ns i et donarem hora com més aviat millor.", es: '¿Tienes dolor o te has hecho daño? Llámanos y te daremos cita lo antes posible.' },
    },
    'equip-pagina': {
        pose: 'saluda', side: 'right', actions: [],
        text: { ca: "Coneix l'equip! Clica «Llegir més» per saber més de cadascú.", es: '¡Conoce al equipo! Pulsa «Leer más» para saber más de cada uno.' },
    },
    contacte: {
        pose: 'saluda', side: 'right', actions: ['whatsapp', 'arribar'],
        text: { ca: "Som al carrer Teulera, 138. Escriu-nos o truca'ns i t'atendrem encantats.", es: 'Estamos en la calle Teulera, 138. Escríbenos o llámanos y te atenderemos encantados.' },
    },
};

const QUIET_KEY = 'nou-somriure-mascota-silenci';
const HIDDEN_KEY = 'nou-somriure-mascota-amagada';
// L'ullet espontani només es fa un cop per visita (en la primera salutació)
const GREETING_WINK_KEY = 'nou-somriure-mascota-ullet';
// En mòbil el globus tapa més contingut: s'amaga abans
const AUTO_HIDE_MS = { desktop: 7000, mobile: 5000 };
const MARGIN = 24;
const WALK_SECONDS = 1.3;
const ATTENTION_EVERY_MS = 14000;

// Sorpresa: tres clics seguits a la mascota i es posa a raspallar-se fent una tombarella
const PARTY_CLICKS = 3;
const PARTY_WINDOW_MS = 1200;
const PARTY_MS = 3200;
const PARTY_TIP = {
    pose: 'raspall',
    actions: ['cita'],
    text: { ca: 'Uau! Ja tinc les dents ben netes i brillants. I tu, quan vas fer la darrera revisió?', es: '¡Guau! Ya tengo los dientes bien limpios y brillantes. Y tú, ¿cuándo fue tu última revisión?' },
};

// Bombolles d'escuma que pugen mentre es raspalla
const BUBBLES = [
    { x: -38, size: 14, delay: 0 },
    { x: 30, size: 10, delay: 0.15 },
    { x: -12, size: 18, delay: 0.3 },
    { x: 44, size: 12, delay: 0.5 },
    { x: -48, size: 9, delay: 0.7 },
    { x: 8, size: 13, delay: 0.85 },
    { x: 26, size: 16, delay: 1.1 },
    { x: -26, size: 11, delay: 1.3 },
];

// Espurnes que surten quan canvia de postura
const SPARKS = [
    { x: -46, y: -38, color: 'bg-brand-400', size: 'h-2.5 w-2.5' },
    { x: 44, y: -46, color: 'bg-terra-400', size: 'h-2 w-2' },
    { x: -54, y: 8, color: 'bg-terra-300', size: 'h-2 w-2' },
    { x: 52, y: 0, color: 'bg-brand-300', size: 'h-2.5 w-2.5' },
    { x: 0, y: -62, color: 'bg-brand-500', size: 'h-1.5 w-1.5' },
];

function readFlag(key) {
    try {
        return sessionStorage.getItem(key) === '1';
    } catch {
        return false;
    }
}

function writeFlag(key, on) {
    try {
        if (on) sessionStorage.setItem(key, '1');
        else sessionStorage.removeItem(key);
    } catch {
        // sense emmagatzematge: només es recorda mentre la pàgina està oberta
    }
}

function useViewportWidth() {
    const [width, setWidth] = useState(() => (typeof document !== 'undefined' ? document.documentElement.clientWidth : 1280));
    useEffect(() => {
        const onResize = () => setWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return width;
}

export default function MascotAssistant() {
    const { pathname } = useLocation();
    const { t } = useLang();
    const viewportWidth = useViewportWidth();
    const isMobile = viewportWidth < 768;
    const mascotWidth = isMobile ? 68 : 96;
    // Si el sistema demana menys animacions, la mascota es mou però de manera més suau
    const gentle = useReducedMotion();

    const [activeKey, setActiveKey] = useState('inici');
    const [bubbleOpen, setBubbleOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const [hidden, setHidden] = useState(() => readFlag(HIDDEN_KEY));
    const [sparkKey, setSparkKey] = useState(0);
    const [party, setParty] = useState(false);
    const clicksRef = useRef([]);
    const seenRef = useRef(new Set());
    const closeCountRef = useRef(0);
    const quietRef = useRef(readFlag(QUIET_KEY));
    const actions = useAnimationControls();
    // L'ullet és un gest puntual: a la primera salutació de la visita i quan l'usuari hi interactua
    const [winking, wink] = useWink();

    const sectionTip = TIPS[activeKey] ?? TIPS.inici;
    const tip = party ? { ...sectionTip, ...PARTY_TIP } : sectionTip;
    // En mòbil es queda sempre a la dreta per no tapar el text
    const side = isMobile ? 'right' : tip.side;
    const x = side === 'left' ? -(viewportWidth - mascotWidth - MARGIN * 2) : 0;

    // Detecta quina secció és al centre de la pantalla
    useEffect(() => {
        seenRef.current = new Set();
        setBubbleOpen(false);
        const sections = document.querySelectorAll('[data-mascot]');
        if (!sections.length) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length) setActiveKey(visible[0].target.getAttribute('data-mascot'));
            },
            { rootMargin: '-45% 0px -45% 0px' }
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [pathname]);

    // Canvi de costat: camina a petits salts (o apareix a l'altre costat si cal moure's poc)
    const previousSide = useRef(side);
    useEffect(() => {
        if (previousSide.current === side) return;
        previousSide.current = side;
        if (gentle) {
            actions.start({ opacity: [0, 1], transition: { duration: 0.5 } });
        } else {
            actions.start({
                y: [0, -26, 0, -26, 0, -26, 0],
                rotate: [0, -7, 0, 7, 0, -7, 0],
                scaleY: [1, 1.05, 0.94, 1.05, 0.94, 1.05, 1],
                transition: { duration: WALK_SECONDS, ease: 'easeInOut' },
            });
        }
    }, [side, gentle, actions]);

    // Canvi de postura: espurnes
    const previousPose = useRef(tip.pose);
    useEffect(() => {
        if (previousPose.current === tip.pose) return;
        previousPose.current = tip.pose;
        if (!gentle) setSparkKey((n) => n + 1);
    }, [tip.pose, gentle]);

    // Quan parla, fa un bot (amb una mica d'aixafar i estirar)
    useEffect(() => {
        if (!bubbleOpen) return undefined;
        let timer;
        if (!readFlag(GREETING_WINK_KEY)) {
            writeFlag(GREETING_WINK_KEY, true);
            timer = setTimeout(wink, 700);
        }
        actions.start(
            gentle
                ? { y: [0, -6, 0], transition: { duration: 0.6 } }
                : {
                    y: [0, 4, -24, 0, -6, 0],
                    scaleY: [1, 0.88, 1.08, 0.95, 1.02, 1],
                    scaleX: [1, 1.1, 0.95, 1.05, 0.99, 1],
                    transition: { duration: 0.9, ease: 'easeOut' },
                }
        );
        return () => clearTimeout(timer);
    }, [bubbleOpen, gentle, actions, wink]);

    // De tant en tant, si està callada, es belluga per cridar l'atenció
    useEffect(() => {
        if (gentle || bubbleOpen) return undefined;
        const interval = setInterval(() => {
            actions.start({
                rotate: [0, -12, 10, -8, 6, 0],
                y: [0, -10, 0, -4, 0],
                transition: { duration: 1, ease: 'easeInOut' },
            });
        }, ATTENTION_EVERY_MS);
        return () => clearInterval(interval);
    }, [gentle, bubbleOpen, actions]);

    // Mostra el consell de cada secció una sola vegada per pàgina (llevat que l'usuari l'hagi fet callar)
    useEffect(() => {
        if (quietRef.current || seenRef.current.has(activeKey)) return undefined;
        // Espera que acabi de caminar abans de parlar
        const delay = seenRef.current.size === 0 ? 2200 : WALK_SECONDS * 1000 + 200;
        const timer = setTimeout(() => {
            seenRef.current.add(activeKey);
            setBubbleOpen(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [activeKey, pathname]);

    // Amaga el globus sol al cap d'uns segons, si l'usuari no hi és a sobre (ratolí o teclat)
    useEffect(() => {
        if (!bubbleOpen || hovered || focused) return undefined;
        const timer = setTimeout(() => setBubbleOpen(false), isMobile ? AUTO_HIDE_MS.mobile : AUTO_HIDE_MS.desktop);
        return () => clearTimeout(timer);
    }, [bubbleOpen, hovered, focused, activeKey, isMobile]);

    useEffect(() => {
        if (!bubbleOpen) return undefined;
        const onKey = (e) => e.key === 'Escape' && setBubbleOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [bubbleOpen]);

    const closeBubble = useCallback(() => {
        setBubbleOpen(false);
        closeCountRef.current += 1;
        // Si la tanquen dues vegades, deixa de sortir sola durant la visita
        if (closeCountRef.current >= 2) {
            quietRef.current = true;
            writeFlag(QUIET_KEY, true);
        }
    }, []);

    // Permet amagar la mascota (i el seu moviment); queda només el botó de WhatsApp
    const hideMascot = useCallback(() => {
        setBubbleOpen(false);
        setFocused(false);
        setHovered(false);
        setHidden(true);
        writeFlag(HIDDEN_KEY, true);
    }, []);

    const showMascot = useCallback(() => {
        setHidden(false);
        writeFlag(HIDDEN_KEY, false);
        setBubbleOpen(true);
    }, []);

    const startParty = useCallback(() => {
        setParty(true);
        setBubbleOpen(true);
        setSparkKey((n) => n + 1);
        actions
            .start(
                gentle
                    ? { y: [0, -10, 0, -10, 0], transition: { duration: 1 } }
                    : {
                        y: [0, 8, -90, -60, 0, -14, 0],
                        rotate: [0, -10, 180, 360, 360, 360, 360],
                        scaleY: [1, 0.85, 1.1, 1, 0.9, 1.04, 1],
                        scaleX: [1, 1.12, 0.95, 1, 1.08, 0.98, 1],
                        transition: { duration: 1.3, ease: 'easeInOut' },
                    }
            )
            .then(() => actions.set({ rotate: 0 }));
    }, [actions, gentle]);

    useEffect(() => {
        if (!party) return undefined;
        const timer = setTimeout(() => setParty(false), PARTY_MS);
        return () => clearTimeout(timer);
    }, [party]);

    const onMascotClick = useCallback(() => {
        const now = Date.now();
        clicksRef.current = [...clicksRef.current.filter((time) => now - time < PARTY_WINDOW_MS), now];
        if (clicksRef.current.length >= PARTY_CLICKS && !party) {
            clicksRef.current = [];
            startParty();
            return;
        }
        if (!bubbleOpen) wink();
        setBubbleOpen((open) => !open);
    }, [bubbleOpen, party, startParty, wink]);

    // Moviment continu: flota, es balanceja i "respira"
    const idle = gentle
        ? { y: [0, -5, 0], rotate: [-1.5, 1.5, -1.5] }
        : { y: [0, -9, 0], rotate: [-3, 3, -3], scaleY: [1, 1.025, 1], scaleX: [1, 0.985, 1] };
    const idleTransition = {
        y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 4.6, repeat: Infinity, ease: 'easeInOut' },
        scaleY: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
        scaleX: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
    };

    if (hidden) {
        return (
            <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6">
                <button
                    type="button"
                    onClick={showMascot}
                    aria-label={t({ ca: 'Mostra la mascota', es: 'Mostrar la mascota' })}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-sand-200 transition-transform hover:scale-105"
                >
                    <img src="/logo-mark.png" alt="" className="h-8 w-8 rounded-lg" />
                </button>
                <a
                    href={clinic.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t({ ca: 'Escriu-nos per WhatsApp', es: 'Escríbenos por WhatsApp' })}
                    className="flex h-14 items-center gap-2 rounded-full bg-[#15803d] px-4 text-white shadow-xl shadow-green-900/25 transition-colors hover:bg-[#166534] sm:px-5"
                >
                    <WhatsAppIcon className="h-6 w-6" />
                    <span className="hidden text-sm font-semibold sm:inline">{t({ ca: 'Escriu-nos', es: 'Escríbenos' })}</span>
                </a>
            </div>
        );
    }

    return (
        // La mascota fa les seves pròpies animacions (versió suau si el sistema demana menys moviment)
        <MotionConfig reducedMotion="never">
            <motion.div
                className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
                style={{ width: mascotWidth }}
                animate={{ x }}
                transition={gentle ? { duration: 0 } : { duration: WALK_SECONDS, ease: [0.45, 0, 0.55, 1] }}
                // Només el ratolí compta com a "a sobre": en pantalles tàctils no hi ha mouseleave
                onPointerEnter={(e) => {
                    if (e.pointerType !== 'mouse') return;
                    setHovered(true);
                    wink();
                }}
                onPointerLeave={(e) => e.pointerType === 'mouse' && setHovered(false)}
                onFocus={() => setFocused(true)}
                onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
                }}
            >
                <AnimatePresence>
                    {bubbleOpen && (
                        <motion.div
                            key={party ? 'festa' : activeKey}
                            role="status"
                            initial={{ opacity: 0, scale: 0.85, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 6 }}
                            transition={{ duration: 0.25 }}
                            className={cn(
                                'absolute w-[min(300px,calc(100vw-2rem))] rounded-2xl border border-sand-200 bg-white p-4 pr-9 text-left shadow-[0_24px_60px_-20px_rgba(11,38,39,0.45)]',
                                isMobile
                                    ? 'bottom-full right-0 mb-3 origin-bottom-right'
                                    : side === 'right'
                                        ? 'bottom-10 right-full mr-3 origin-bottom-right'
                                        : 'bottom-10 left-full ml-3 origin-bottom-left'
                            )}
                        >
                            {/* Punta del globus cap a la mascota */}
                            <span
                                aria-hidden="true"
                                className={cn(
                                    'absolute h-3 w-3 rotate-45 border-sand-200 bg-white',
                                    isMobile
                                        ? '-bottom-1.5 right-7 border-b border-r'
                                        : side === 'right'
                                            ? '-right-1.5 bottom-6 border-r border-t'
                                            : '-left-1.5 bottom-6 border-b border-l'
                                )}
                            />
                            <button
                                type="button"
                                onClick={closeBubble}
                                aria-label={t({ ca: 'Tanca el consell', es: 'Cerrar el consejo' })}
                                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-sand-100 hover:text-slate-700"
                            >
                                <X className="h-4 w-4" />
                            </button>
                            <p className="text-[15px] leading-snug text-brand-950">{t(tip.text)}</p>
                            {tip.actions.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {tip.actions.map((key) => {
                                        const action = ACTIONS[key];
                                        const Icon = action.icon;
                                        const href = t(action.href);
                                        const external = href.startsWith('http');
                                        return (
                                            <a
                                                key={key}
                                                href={href}
                                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                                className={cn(
                                                    'inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold transition-colors',
                                                    action.className
                                                )}
                                            >
                                                <Icon className="h-4 w-4" />
                                                {t(action.label)}
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={hideMascot}
                                className="mt-3 text-xs text-slate-500 underline-offset-2 transition-colors hover:text-slate-700 hover:underline"
                            >
                                {t({ ca: 'Amaga la mascota', es: 'Ocultar la mascota' })}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative">
                    {/* Ombra a terra: s'encongeix quan la mascota puja */}
                    <motion.span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-[15%] h-3 w-[70%] rounded-full bg-brand-950/25 blur-[3px]"
                        animate={{ scaleX: gentle ? [1, 0.92, 1] : [1, 0.8, 1], opacity: [0.55, 0.3, 0.55] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Espurnes en canviar de postura */}
                    {sparkKey > 0 && (
                        <div key={sparkKey} aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2">
                            {SPARKS.map((spark, i) => (
                                <motion.span
                                    key={i}
                                    className={cn('absolute rounded-full', spark.color, spark.size)}
                                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                                    animate={{ x: spark.x, y: spark.y, scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.03 }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Bombolles d'escuma durant la sorpresa */}
                    {party && !gentle && (
                        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3">
                            {BUBBLES.map((bubble, i) => (
                                <motion.span
                                    key={i}
                                    className="absolute rounded-full border border-brand-200 bg-white/80 shadow-sm"
                                    style={{ width: bubble.size, height: bubble.size }}
                                    initial={{ x: bubble.x, y: 0, opacity: 0, scale: 0.4 }}
                                    animate={{ x: [bubble.x, bubble.x + 8, bubble.x - 6], y: -120, opacity: [0, 1, 0], scale: [0.4, 1, 1.2] }}
                                    transition={{ duration: 1.6, delay: bubble.delay, ease: 'easeOut' }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Accions puntuals: caminar, botar, cridar l'atenció */}
                    <motion.div animate={actions} style={{ originY: 1 }}>
                        {/* Moviment continu */}
                        <motion.div animate={idle} transition={idleTransition} style={{ originY: 1 }}>
                            <motion.button
                                type="button"
                                onClick={onMascotClick}
                                aria-expanded={bubbleOpen}
                                aria-label={bubbleOpen ? t({ ca: 'Amaga el consell de la mascota', es: 'Ocultar el consejo de la mascota' }) : t({ ca: 'Mostra un consell de la mascota', es: 'Mostrar un consejo de la mascota' })}
                                whileHover={gentle ? { scale: 1.05 } : { rotate: [0, -10, 9, -6, 4, 0], scale: 1.08, transition: { duration: 0.7 } }}
                                whileTap={{ scale: 0.9 }}
                                style={{ originY: 1 }}
                                className="block w-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={tip.pose}
                                        initial={gentle ? { opacity: 0 } : { opacity: 0, scale: 0.5, rotate: -15 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={gentle ? { opacity: 0 } : { opacity: 0, scale: 0.5, rotate: 15 }}
                                        transition={gentle ? { duration: 0.25 } : { type: 'spring', stiffness: 320, damping: 16 }}
                                        className="pointer-events-none block w-full"
                                    >
                                        <MascotFace
                                            pose={tip.pose}
                                            winking={winking}
                                            className="drop-shadow-[0_10px_14px_rgba(11,38,39,0.22)]"
                                        />
                                    </motion.span>
                                </AnimatePresence>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Accés directe a WhatsApp sempre visible */}
                <a
                    href={clinic.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t({ ca: 'Escriu-nos per WhatsApp', es: 'Escríbenos por WhatsApp' })}
                    className={cn(
                        'absolute -bottom-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg ring-2 ring-white transition-transform hover:scale-110',
                        side === 'left' ? '-right-2' : '-left-2'
                    )}
                >
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                </a>
            </motion.div>
        </MotionConfig>
    );
}
