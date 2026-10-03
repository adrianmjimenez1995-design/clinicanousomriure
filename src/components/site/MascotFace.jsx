import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const WINK_HOLD_MS = 450;
const WINK_COOLDOWN_MS = 6000;

// L'ullet és un gest puntual: només quan es demana (saludar, ratolí a sobre, clic),
// i com a molt un cop cada pocs segons perquè no perdi la gràcia.
export function useWink() {
    const [winking, setWinking] = useState(false);
    const lastWink = useRef(0);
    const timer = useRef(null);

    const wink = useCallback(() => {
        const now = Date.now();
        if (now - lastWink.current < WINK_COOLDOWN_MS) return;
        lastWink.current = now;
        setWinking(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setWinking(false), WINK_HOLD_MS);
    }, []);

    useEffect(() => () => clearTimeout(timer.current), []);

    return [winking, wink];
}

// Cara de la mascota: dues imatges alineades al píxel (ulls oberts / ullet).
// Només canvia la zona de l'ull, així que el canvi d'opacitat es veu com un ullet natural.
export default function MascotFace({ pose, winking, className, imgClassName }) {
    return (
        <span className={cn('relative block', className)}>
            <img
                src={`/images/mascota/${pose}.webp`}
                alt=""
                draggable="false"
                className={cn('block w-full select-none', imgClassName)}
            />
            <img
                src={`/images/mascota/${pose}-ulls.webp`}
                alt=""
                draggable="false"
                aria-hidden="true"
                className={cn(
                    'absolute inset-0 block w-full select-none transition-opacity',
                    // Tanca ràpid, obre més a poc a poc
                    winking ? 'opacity-0 duration-75 ease-in' : 'opacity-100 duration-200 ease-out',
                    imgClassName
                )}
            />
        </span>
    );
}
