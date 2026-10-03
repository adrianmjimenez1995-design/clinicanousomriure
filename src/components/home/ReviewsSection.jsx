import React from 'react';
import { Star, ArrowUpRight, Quote } from 'lucide-react';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import { Container, Reveal, Eyebrow } from '@/components/site/Primitives';
import { cn } from '@/lib/utils';

// Estrelles amb mitges estrelles (p. ex. 4,5)
export function Stars({ rating, className, size = 'h-5 w-5' }) {
    return (
        <span className={cn('inline-flex items-center gap-0.5', className)} aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => {
                const fill = Math.max(0, Math.min(1, rating - i));
                return (
                    <span key={i} className={cn('relative inline-block', size)}>
                        <Star className={cn('absolute inset-0 text-amber-400/30', size)} fill="currentColor" strokeWidth={0} />
                        <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                            <Star className={cn('text-amber-400', size)} fill="currentColor" strokeWidth={0} />
                        </span>
                    </span>
                );
            })}
        </span>
    );
}

export function formatRating(rating, lang) {
    return rating.toLocaleString(lang === 'es' ? 'es-ES' : 'ca-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

// Valoracions reals de Google i Doctoralia + opinions concretes (si la clínica n'hi afegeix a src/lib/clinic.js)
export default function ReviewsSection() {
    const { t, lang } = useLang();
    const { reviews } = useContent();
    const { google, doctoralia, testimonials } = reviews;
    const sources = [
        { ...google, countLabel: { ca: `${google.count} ressenyes a Google`, es: `${google.count} reseñas en Google` } },
        { ...doctoralia, countLabel: { ca: `${doctoralia.count} opinions a Doctoralia`, es: `${doctoralia.count} opiniones en Doctoralia` } },
    ];

    return (
        <section data-mascot="opinions" className="pt-24 md:pt-32">
            <Container>
                <Reveal className="relative overflow-hidden rounded-[2rem] border border-sand-200 bg-sand-50 p-8 md:p-12 lg:p-14">
                    <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
                    <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
                        {/* Una targeta per plataforma: Google i, a sota, Doctoralia */}
                        <ul className="grid gap-4 sm:grid-cols-2 lg:w-72 lg:grid-cols-1">
                            {sources.map((source) => {
                                const ratingText = formatRating(source.rating, lang);
                                return (
                                    <li key={source.name}>
                                        <a
                                            href={source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-5 rounded-3xl border border-sand-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_18px_40px_-28px_rgba(11,38,39,0.5)]"
                                        >
                                            <span className="font-display text-5xl font-medium leading-none text-brand-950">{ratingText}</span>
                                            <span className="min-w-0">
                                                <Stars rating={source.rating} size="h-4 w-4" />
                                                <span className="mt-1.5 block text-sm font-medium text-slate-700">{t(source.countLabel)}</span>
                                                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                                                    {t({ ca: 'Llegir-les', es: 'Leerlas' })}
                                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                </span>
                                                <span className="sr-only">
                                                    {t({
                                                        ca: ` (valoració de ${ratingText} sobre 5 a ${source.name})`,
                                                        es: ` (valoración de ${ratingText} sobre 5 en ${source.name})`,
                                                    })}
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        <div>
                            <Eyebrow>{t({ ca: 'Opinions', es: 'Opiniones' })}</Eyebrow>
                            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.1] tracking-tight text-brand-950 md:text-5xl">
                                {t({
                                    ca: <>Què diuen els nostres <em className="font-normal italic text-brand-600">pacients</em></>,
                                    es: <>Lo que dicen nuestros <em className="font-normal italic text-brand-600">pacientes</em></>,
                                })}
                            </h2>
                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                                {t({
                                    ca: 'La confiança dels pacients és el que més ens importa. Llegeix les seves opinions a Google i a Doctoralia i, si ja ens has visitat, ens encantarà saber la teva.',
                                    es: 'La confianza de los pacientes es lo que más nos importa. Lee sus opiniones en Google y en Doctoralia y, si ya nos has visitado, nos encantará conocer la tuya.',
                                })}
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <ActionLink href={google.url} variant="brand">
                                    <Star />
                                    {t({ ca: 'Deixa la teva ressenya a Google', es: 'Deja tu reseña en Google' })}
                                </ActionLink>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {testimonials.length > 0 && (
                    <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item, index) => (
                            <Reveal key={item.author + index} delay={(index % 3) * 0.08} className="h-full">
                                <figure className="flex h-full flex-col rounded-3xl border border-sand-200 bg-white p-7">
                                    <Quote className="h-7 w-7 text-brand-200" />
                                    <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">{item.text}</blockquote>
                                    <figcaption className="mt-6 flex items-center justify-between gap-3">
                                        <span className="font-semibold text-brand-950">{item.author}</span>
                                        <span className="flex items-center gap-2 text-xs text-slate-500">
                                            <Stars rating={item.rating ?? 5} size="h-3.5 w-3.5" />
                                            Google
                                        </span>
                                    </figcaption>
                                </figure>
                            </Reveal>
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}
