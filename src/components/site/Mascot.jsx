import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import MascotFace, { useWink } from './MascotFace';

// Mascota de la clínica: la dent del logo en 3D (generada amb IA a partir del logo real), que fa l'ullet.
// Poses disponibles: saluda, raspall, calendari, dubte, tireta, lupa, escaner
export default function Mascot({ pose, className, float = true }) {
    const [winking, wink] = useWink();

    // Un ullet en aparèixer; després, només quan s'hi passa el ratolí
    useEffect(() => {
        const timer = setTimeout(wink, 1200);
        return () => clearTimeout(timer);
    }, [wink]);

    return (
        <motion.div
            aria-hidden="true"
            onPointerEnter={wink}
            className={cn('select-none drop-shadow-[0_18px_24px_rgba(11,38,39,0.18)]', className)}
            animate={float ? { y: [0, -8, 0] } : undefined}
            transition={float ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
        >
            <MascotFace pose={pose} winking={winking} />
        </motion.div>
    );
}
