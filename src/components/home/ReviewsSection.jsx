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

// Valoració real de Google + opinions concretes (si la clínica n'hi afegeix a src/lib/clinic.js)
export default function ReviewsSection() {
    const { t, lang } = useLang();
    const { reviews } = useContent();
    const { google, testimonials } = reviews;
    const ratingText = formatRating(google.rating, lang);

    return (
        <section data-mascot="opinions" className="pt-24 md:pt-32">
            <Container>
                <Reveal className="relative overflow-hidden rounded-[2rem] border border-sand-200 bg-sand-50 p-8 md:p-12 lg:p-14">
                    <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
                    <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <p className="font-display text-7xl font-medium leading-none text-brand-950 md:text-8xl">{ratingText}</p>
                            <Stars rating={google.rating} className="mt-4" size="h-7 w-7" />
                            <p className="mt-3 text-sm font-medium text-slate-600">
                                {t({ ca: `${google.count} ressenyes a Google`, es: `${google.count} reseñas en Google` })}
                            </p>
                            <p className="sr-only">
                                {t({
                                    ca: `Valoració de ${ratingText} sobre 5 a Google, amb ${google.count} ressenyes.`,
                                    es: `Valoración de ${ratingText} sobre 5 en Google, con ${google.count} reseñas.`,
                                })}
                            </p>
                        </div>

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
                                    ca: 'La confiança dels pacients és el que més ens importa. Llegeix les seves ressenyes a Google i, si ja ens has visitat, ens encantarà saber la teva opinió.',
                                    es: 'La confianza de los pacientes es lo que más nos importa. Lee sus reseñas en Google y, si ya nos has visitado, nos encantará conocer tu opinión.',
                                })}
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <ActionLink href={google.url} variant="brand">
                                    {t({ ca: 'Llegir les ressenyes', es: 'Leer las reseñas' })}
                                    <ArrowUpRight />
                                </ActionLink>
                                <ActionLink href={google.url} variant="outline">
                                    <Star />
                                    {t({ ca: 'Deixa la teva ressenya', es: 'Deja tu reseña' })}
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
