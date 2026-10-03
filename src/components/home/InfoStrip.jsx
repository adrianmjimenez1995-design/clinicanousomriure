import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Icon3D from '@/components/site/Icon3D';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import { Container, Reveal } from '@/components/site/Primitives';

// Informació pràctica just sota la portada: horari, telèfons i adreça
export default function InfoStrip() {
    const { t } = useLang();
    const { clinic } = useContent();
    const items = [
        {
            icon: 'rellotge',
            title: t({ ca: 'Horari', es: 'Horario' }),
            lines: [clinic.hours.days, clinic.hours.time],
        },
        {
            icon: 'telefon',
            title: t({ ca: 'Telèfons', es: 'Teléfonos' }),
            lines: clinic.phones.map((p) => p.label),
            links: clinic.phones.map((p) => p.href),
        },
        {
            icon: 'ubicacio',
            title: t({ ca: 'On som', es: 'Dónde estamos' }),
            lines: [clinic.address.street, `${clinic.address.postalCode} ${clinic.address.city}`],
            href: clinic.links.maps,
        },
    ];

    return (
        <section className="relative z-10 -mt-8 lg:-mt-12">
            <Container>
                <Reveal className="grid overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-[0_20px_60px_-30px_rgba(11,38,39,0.35)] md:grid-cols-3 md:divide-x md:divide-sand-200">
                    {items.map(({ icon, title, lines, links, href }) => {
                        const content = (
                            <>
                                <Icon3D name={icon} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
                                <span className="min-w-0">
                                    <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-terra-600">
                                        {title}
                                        {href && <ArrowUpRight className="h-3.5 w-3.5" />}
                                    </span>
                                    {lines.map((line, i) =>
                                        links ? (
                                            <a key={line} href={links[i]} className="block text-[15px] font-medium text-brand-950 hover:text-brand-600">
                                                {line}
                                            </a>
                                        ) : (
                                            <span key={line} className="block text-[15px] font-medium text-brand-950">{line}</span>
                                        )
                                    )}
                                </span>
                            </>
                        );
                        const classes = 'group flex items-start gap-4 border-b border-sand-200 p-6 last:border-b-0 md:border-b-0 lg:p-8';
                        return href ? (
                            <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={`${classes} transition-colors hover:bg-sand-50`}>
                                {content}
                            </a>
                        ) : (
                            <div key={title} className={classes}>{content}</div>
                        );
                    })}
                </Reveal>
            </Container>
        </section>
    );
}
