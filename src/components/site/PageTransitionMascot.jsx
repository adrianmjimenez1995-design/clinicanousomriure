import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { stripLangPrefix } from '@/i18n/LanguageContext';
import MascotFace from './MascotFace';

// En canviar de pàgina, la mascota travessa la pantalla a salts, amb una estela d'espurnes.
// No bloqueja res (pointer-events-none) i no surt en canviar d'idioma ni en la primera càrrega.

// Postura segons la pàgina de destinació
const POSES = {
    Home: 'saluda',
    Servicios: 'raspall',
    Equip: 'saluda',
    Contacto: 'calendari',
};

const DURATION = 1.5;
// Tres salts d'esquerra a dreta
const PATH = {
    x: ['-20vw', '13vw', '46vw', '79vw', '120vw'],
    y: [0, -140, 0, -140, 0, -140, 0].map((v) => `${v}px`),
};
const TRAIL = [
    { delay: 0.06, size: 12, color: 'bg-terra-400' },
    { delay: 0.12, size: 9, color: 'bg-brand-300' },
    { delay: 0.18, size: 7, color: 'bg-terra-300' },
    { delay: 0.24, size: 5, color: 'bg-brand-400' },
];

export default function PageTransitionMascot({ currentPageName }) {
    const { pathname } = useLocation();
    const reduced = useReducedMotion();
    const [run, setRun] = useState(0);
    const previousPath = useRef(stripLangPrefix(pathname).toLowerCase());

    useEffect(() => {
        const basePath = stripLangPrefix(pathname).toLowerCase();
        if (basePath === previousPath.current) return;
        previousPath.current = basePath;
        if (!reduced) setRun((n) => n + 1);
    }, [pathname, reduced]);

    const pose = POSES[currentPageName] ?? 'saluda';

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            <AnimatePresence>
                {run > 0 && (
                    <motion.div
                        key={run}
                        className="absolute left-0 top-[58%] w-20 md:w-28"
                        initial={{ x: PATH.x[0], opacity: 1 }}
                        animate={{ x: PATH.x }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: DURATION, ease: 'linear' }}
                        onAnimationComplete={() => setRun(0)}
                    >
                        {TRAIL.map((spark, i) => (
                            <motion.span
                                key={i}
                                className={`absolute top-1/2 rounded-full ${spark.color}`}
                                style={{ width: spark.size, height: spark.size, left: -10 - i * 16 }}
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: PATH.y, opacity: [0, 0.9, 0.9, 0.9, 0.9, 0.9, 0] }}
                                transition={{ duration: DURATION, ease: 'easeInOut', delay: spark.delay }}
                            />
                        ))}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{
                                y: PATH.y,
                                rotate: [0, 12, 0, 12, 0, 12, 0],
                                scaleY: [0.9, 1.08, 0.88, 1.08, 0.88, 1.08, 0.9],
                            }}
                            transition={{ duration: DURATION, ease: 'easeInOut' }}
                            style={{ originY: 1 }}
                        >
                            <MascotFace pose={pose} winking={false} className="drop-shadow-[0_14px_18px_rgba(11,38,39,0.28)]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
