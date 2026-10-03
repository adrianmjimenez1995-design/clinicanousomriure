import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import { Container, Reveal, Eyebrow } from '@/components/site/Primitives';

const features = [
    { ca: 'Equip de professionals amb experiència', es: 'Equipo de profesionales con experiencia' },
    { ca: 'Diagnòstic 3D: CBCT i escàner intraoral', es: 'Diagnóstico 3D: CBCT y escáner intraoral' },
    { ca: 'Ambient càlid i acollidor', es: 'Ambiente cálido y acogedor' },
    { ca: 'Tractaments personalitzats', es: 'Tratamientos personalizados' },
];

const stats = [
    { value: '+2.000', label: { ca: 'pacients atesos', es: 'pacientes atendidos' } },
    { value: '+3', label: { ca: "anys a Santa Cristina d'Aro", es: "años en Santa Cristina d'Aro" } },
    { value: '8', label: { ca: 'tractaments', es: 'tratamientos' } },
];

export default function AboutPreview() {
    const { t, lp } = useLang();
    const { clinicPhotos } = useContent();
    return (
        <section data-mascot="nosaltres" className="relative overflow-hidden bg-brand-900 py-24 text-white md:py-32">
            <div aria-hidden="true" className="absolute -right-32 top-0 h-[560px] w-[560px] rounded-full bg-brand-500/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-terra-500/15 blur-3xl" />

            <Container className="relative grid items-center gap-16 lg:grid-cols-2">
                <Reveal className="relative order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={clinicPhotos.surgery.src}
                            alt={clinicPhotos.surgery.alt}
                            loading="lazy"
                            className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover shadow-2xl sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:h-full"
                        />
                        <img
                            src={clinicPhotos.welcome.src}
                            alt={clinicPhotos.welcome.alt}
                            loading="lazy"
                            className="aspect-square w-full rounded-3xl object-cover shadow-2xl"
                        />
                        <img
                            src={clinicPhotos.corridor.src}
                            alt={clinicPhotos.corridor.alt}
                            loading="lazy"
                            className="aspect-square w-full rounded-3xl object-cover shadow-2xl"
                        />
                    </div>
                </Reveal>

                <Reveal className="order-1 lg:order-2">
                    <Eyebrow tone="dark">{t({ ca: 'Sobre nosaltres', es: 'Sobre nosotros' })}</Eyebrow>
                    <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl">
                        {t({
                            ca: <>Una clínica propera, honesta i <em className="font-normal italic text-terra-300">pensada per a tu</em></>,
                            es: <>Una clínica cercana, honesta y <em className="font-normal italic text-terra-300">pensada para ti</em></>,
                        })}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-brand-100/80">
                        {t({
                            ca: 'La Clínica Nou Somriure va néixer amb una idea clara: oferir una atenció odontològica de qualitat i transparent, perquè el factor econòmic no sigui mai una barrera per cuidar la teva salut.',
                            es: 'La Clínica Nou Somriure nació con una idea clara: ofrecer una atención odontológica de calidad y transparente, para que el factor económico nunca sea una barrera para cuidar tu salud.',
                        })}
                    </p>

                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {features.map((feature) => (
                            <li key={feature.ca} className="flex items-center gap-3 text-[15px] text-brand-50">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terra-500/20 ring-1 ring-terra-300/40">
                                    <Check className="h-3.5 w-3.5 text-terra-200" strokeWidth={3} />
                                </span>
                                {t(feature)}
                            </li>
                        ))}
                    </ul>

                    <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-white/10 py-7">
                        {stats.map((stat) => (
                            <div key={stat.value} className="flex flex-col-reverse">
                                <dt className="mt-1 text-sm leading-snug text-brand-100/70">{t(stat.label)}</dt>
                                <dd className="font-display text-2xl font-medium text-white sm:text-3xl md:text-4xl">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <ActionLink to={lp(createPageUrl('Equip'))} variant="light" className="mt-10">
                        {t({ ca: "Coneix l'equip", es: 'Conoce al equipo' })}
                        <ArrowRight className="transition-transform group-hover/btn:translate-x-0.5" />
                    </ActionLink>
                </Reveal>
            </Container>
        </section>
    );
}
