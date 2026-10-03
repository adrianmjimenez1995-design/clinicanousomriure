import React from 'react';
import { cn } from '@/lib/utils';

// Icones 3D pròpies (estil "clay", amb la paleta de la clínica). Són decoratives: el text del costat ja diu què signifiquen.
// Noms disponibles: rellotge, telefon, ubicacio, calendari, diagnosi, pla, cura, honestedat, tothom, correu, xat
export default function Icon3D({ name, className }) {
    return (
        <img
            src={`/images/icones/${name}.webp`}
            alt=""
            aria-hidden="true"
            width="192"
            height="192"
            loading="lazy"
            draggable="false"
            className={cn('h-14 w-14 shrink-0 select-none object-contain drop-shadow-[0_8px_10px_rgba(11,38,39,0.12)]', className)}
        />
    );
}
