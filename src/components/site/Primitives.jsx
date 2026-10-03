import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Container({ className, children }) {
    return <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10', className)}>{children}</div>;
}

// Aparició suau en entrar a la pantalla
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }) {
    const Component = motion[as] ?? motion.div;
    return (
        <Component
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
            className={className}
        >
            {children}
        </Component>
    );
}

export function Eyebrow({ children, tone = 'light', className }) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]',
                tone === 'dark' ? 'text-brand-200' : 'text-brand-600',
                className
            )}
        >
            <span className={cn('h-px w-6', tone === 'dark' ? 'bg-terra-300' : 'bg-terra-500')} aria-hidden="true" />
            {children}
        </span>
    );
}

export function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'light', className }) {
    return (
        <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
            {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
            <h2
                className={cn(
                    'mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl',
                    tone === 'dark' ? 'text-white' : 'text-brand-950'
                )}
            >
                {title}
            </h2>
            {description && (
                <p className={cn('mt-5 text-lg leading-relaxed', tone === 'dark' ? 'text-brand-100/80' : 'text-slate-600')}>
                    {description}
                </p>
            )}
        </Reveal>
    );
}

// Capçalera de les pàgines interiors.
// imageMode "background": la imatge fa de fons (amb degradat perquè es llegeixi el text).
// imageMode "framed": la foto va emmarcada a la dreta (només en pantalles grans).
export function PageHeader({ eyebrow, title, description, mascotTip, image, imageMode = 'framed', children }) {
    const withImage = Boolean(image);
    const isBackground = withImage && imageMode === 'background';
    const isFramed = withImage && imageMode === 'framed';

    const text = (
        <Reveal className={cn('mx-auto max-w-3xl', withImage && 'lg:mx-0 lg:max-w-2xl')}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-brand-950 md:text-6xl">
                {title}
            </h1>
            {description && (
                <p className={cn('mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600', withImage && 'lg:mx-0')}>
                    {description}
                </p>
            )}
        </Reveal>
    );

    return (
        <section data-mascot={mascotTip} className="relative overflow-hidden border-b border-sand-200 bg-sand-50">
            {isBackground ? (
                <>
                    <img src={image.src} alt="" className="absolute inset-0 h-full w-full object-cover object-right" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-sand-50 via-sand-50/90 to-sand-50/50 lg:via-sand-50/80 lg:to-transparent" />
                </>
            ) : (
                <>
                    <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
                    <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-terra-200/50 blur-3xl" />
                </>
            )}

            <Container
                className={cn(
                    'relative py-16 text-center md:py-24',
                    withImage && 'lg:text-left',
                    isBackground && 'lg:py-28',
                    isFramed && 'lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-20'
                )}
            >
                <div>
                    {text}
                    {children}
                </div>
                {isFramed && (
                    <Reveal className="hidden lg:block" delay={0.1}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-brand-950/15 ring-1 ring-black/5"
                        />
                    </Reveal>
                )}
            </Container>
        </section>
    );
}
