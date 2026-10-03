import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import { Container, Reveal } from '@/components/site/Primitives';

// Novetat destacada: CBCT i escàner intraoral 3D
export default function TechnologySection() {
    const { t, lp } = useLang();
    const { technology } = useContent();
    return (
        <section id="tecnologia" data-mascot="tecnologia" className="relative overflow-hidden bg-sand-50 py-24 md:py-32">
            {/* Trama de punts subtil, aire "tecnològic" */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(theme(colors.brand.200)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
            />
            <div aria-hidden="true" className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />

            <Container className="relative">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-terra-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md shadow-terra-700/20">
                        <Sparkles className="h-3.5 w-3.5" />
                        {t({ ca: 'Novetat a la clínica', es: 'Novedad en la clínica' })}
                    </span>
                    <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-tight text-brand-950 md:text-5xl">
                        {t({
                            ca: <>Diagnòstic en <em className="font-normal italic text-brand-600">3D</em>: més precís i més còmode</>,
                            es: <>Diagnóstico en <em className="font-normal italic text-brand-600">3D</em>: más preciso y más cómodo</>,
                        })}
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                        {t({
                            ca: <>Hem incorporat un <strong className="font-semibold text-brand-900">CBCT</strong> i un <strong className="font-semibold text-brand-900">escàner intraoral 3D</strong>. Així veiem cada cas amb tot detall, planifiquem millor els tractaments i les visites són més còmodes per a tu.</>,
                            es: <>Hemos incorporado un <strong className="font-semibold text-brand-900">CBCT</strong> y un <strong className="font-semibold text-brand-900">escáner intraoral 3D</strong>. Así vemos cada caso con todo detalle, planificamos mejor los tratamientos y las visitas son más cómodas para ti.</>,
                        })}
                    </p>
                </Reveal>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {technology.map((item, index) => (
                        <Reveal key={item.slug} delay={index * 0.1} className="h-full">
                            <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-sand-200 bg-white shadow-[0_30px_70px_-45px_rgba(11,38,39,0.55)]">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        loading="lazy"
                                        width="1440"
                                        height="1075"
                                        className="aspect-[16/10] w-full object-cover"
                                    />
                                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 shadow backdrop-blur">
                                        {item.badge}
                                    </span>
                                </div>
                                <div className="flex flex-1 flex-col p-7 md:p-9">
                                    <h3 className="font-display text-2xl font-medium text-brand-950 md:text-3xl">{item.title}</h3>
                                    <p className="mt-2 font-medium text-terra-700">{item.lead}</p>
                                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600 md:text-base">{item.description}</p>

                                    <ul className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
                                        {item.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2.5 rounded-2xl bg-brand-50/70 p-3 text-sm font-medium leading-snug text-brand-950">
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600">
                                                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-7">
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t({ ca: 'Ens ajuda en', es: 'Nos ayuda en' })}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {item.uses.map((use) => (
                                                <Link
                                                    key={use.label}
                                                    to={lp(`${createPageUrl('Servicios')}#${use.slug}`)}
                                                    className="group inline-flex items-center gap-1.5 rounded-full border border-sand-200 px-3.5 py-1.5 text-sm font-medium text-brand-800 transition-colors hover:border-brand-300 hover:bg-brand-50"
                                                >
                                                    {use.label}
                                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
