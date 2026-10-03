import React from 'react';
import Icon3D from '@/components/site/Icon3D';
import { useLang } from '@/i18n/LanguageContext';
import { Container, Reveal, SectionHeading } from '@/components/site/Primitives';

const steps = [
    {
        icon: 'calendari',
        title: { ca: 'Demana cita', es: 'Pide cita' },
        text: {
            ca: "Reserva en línia a Doctoralia, truca'ns o escriu-nos per WhatsApp. Busquem l'hora que millor et vagi.",
            es: 'Reserva online en Doctoralia, llámanos o escríbenos por WhatsApp. Buscamos la hora que mejor te vaya.',
        },
    },
    {
        icon: 'diagnosi',
        title: { ca: 'Revisió i diagnòstic', es: 'Revisión y diagnóstico' },
        text: {
            ca: "Escoltem què et preocupa i revisem la teva boca amb calma. Si cal, fem servir el CBCT i l'escàner intraoral 3D.",
            es: 'Escuchamos qué te preocupa y revisamos tu boca con calma. Si hace falta, utilizamos el CBCT y el escáner intraoral 3D.',
        },
    },
    {
        icon: 'pla',
        title: { ca: 'Pla de tractament', es: 'Plan de tratamiento' },
        text: {
            ca: "T'expliquem les opcions, els terminis i el pressupost abans de començar, sense sorpreses.",
            es: 'Te explicamos las opciones, los plazos y el presupuesto antes de empezar, sin sorpresas.',
        },
    },
    {
        icon: 'cura',
        title: { ca: 'Tractament i seguiment', es: 'Tratamiento y seguimiento' },
        text: {
            ca: 'Fem el tractament al teu ritme i en fem el seguiment perquè el resultat duri.',
            es: 'Hacemos el tratamiento a tu ritmo y lo seguimos de cerca para que el resultado dure.',
        },
    },
];

export default function FirstVisit() {
    const { t } = useLang();
    return (
        <section data-mascot="primera-visita" className="bg-sand-100 py-24 md:py-32">
            <Container>
                <SectionHeading
                    eyebrow={t({ ca: 'Primera visita', es: 'Primera visita' })}
                    title={t({ ca: 'Com és la teva primera visita?', es: '¿Cómo es tu primera visita?' })}
                    description={t({
                        ca: "Sabem que anar al dentista pot fer respecte. Per això t'expliquem cada pas des del primer dia.",
                        es: 'Sabemos que ir al dentista puede imponer. Por eso te explicamos cada paso desde el primer día.',
                    })}
                />

                <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map(({ icon, title, text }, index) => (
                        <Reveal
                            key={title.ca}
                            as="li"
                            delay={index * 0.08}
                            className="relative flex h-full flex-col rounded-3xl border border-sand-200 bg-white p-7 shadow-[0_16px_40px_-30px_rgba(11,38,39,0.4)]"
                        >
                                <div className="flex items-center justify-between">
                                    <Icon3D name={icon} className="h-16 w-16" />
                                    <span className="font-display text-4xl font-medium text-sand-200" aria-hidden="true">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="mt-6 font-display text-xl font-medium text-brand-950">{t(title)}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{t(text)}</p>
                        </Reveal>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
