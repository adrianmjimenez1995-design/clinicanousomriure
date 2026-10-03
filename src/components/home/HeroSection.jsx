import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, Phone, Check, ArrowRight, Pause, Play } from 'lucide-react';
import { mainPhone } from '@/lib/clinic';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import { Container } from '@/components/site/Primitives';
import { Stars, formatRating } from '@/components/home/ReviewsSection';

const highlights = [
    { ca: 'Reserva en línia a Doctoralia', es: 'Reserva online en Doctoralia' },
    { ca: 'Matins i tardes, de dilluns a divendres', es: 'Mañanas y tardes, de lunes a viernes' },
    { ca: 'Diagnòstic 3D: CBCT i escàner intraoral', es: 'Diagnóstico 3D: CBCT y escáner intraoral' },
];

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
    const { t, lang } = useLang();
    const { clinic, clinicPhotos, reviews } = useContent();

    // El vídeo de la sala d'espera (fet a partir de la foto real) només es reprodueix sol
    // si el visitant no ha demanat menys animacions; sempre es pot pausar.
    const reduceMotion = useReducedMotion();
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (reduceMotion) {
            video.pause();
            setPlaying(false);
        } else {
            video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        }
    }, [reduceMotion]);

    const toggleVideo = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
            video.pause();
            setPlaying(false);
        }
    };

    return (
        <section data-mascot="inici" className="relative overflow-hidden bg-sand-50">
            <div aria-hidden="true" className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-200/45 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-48 left-1/4 h-[420px] w-[420px] rounded-full bg-terra-200/40 blur-3xl" />

            <Container className="relative grid items-center gap-14 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28 lg:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}
                    className="min-w-0"
                >
                    <a
                        href="#tecnologia"
                        className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-terra-200 bg-white/85 py-1.5 pl-1.5 pr-4 text-sm font-medium text-brand-900 shadow-sm transition-colors hover:border-terra-300 hover:bg-white"
                    >
                        <span className="shrink-0 rounded-full bg-terra-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                            {t({ ca: 'Nou', es: 'Nuevo' })}
                        </span>
                        <span className="truncate sm:hidden">{t({ ca: 'Diagnòstic 3D: CBCT i escàner', es: 'Diagnóstico 3D: CBCT y escáner' })}</span>
                        <span className="hidden truncate sm:inline">
                            {t({ ca: 'Diagnòstic 3D amb CBCT i escàner intraoral', es: 'Diagnóstico 3D con CBCT y escáner intraoral' })}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-terra-600 transition-transform group-hover:translate-x-0.5" />
                    </a>

                    <h1 className="mt-7 font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-brand-950 sm:text-6xl lg:text-[4.5rem]">
                        {t({
                            ca: <>El teu <em className="font-normal italic text-brand-600">nou somriure</em> comença aquí</>,
                            es: <>Tu <em className="font-normal italic text-brand-600">nueva sonrisa</em> empieza aquí</>,
                        })}
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                        {t({
                            ca: `Clínica dental a ${clinic.address.city}. Odontologia general, ortodòncia, implants i estètica dental amb un tracte proper i honest. T'expliquem cada pas i adaptem el tractament a tu.`,
                            es: `Clínica dental en ${clinic.address.city}. Odontología general, ortodoncia, implantes y estética dental con un trato cercano y honesto. Te explicamos cada paso y adaptamos el tratamiento a ti.`,
                        })}
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <ActionLink href={clinic.links.booking} size="lg">
                            <CalendarDays />
                            {t({ ca: 'Demanar cita', es: 'Pedir cita' })}
                        </ActionLink>
                        <ActionLink href={mainPhone.href} variant="outline" size="lg">
                            <Phone />
                            {mainPhone.label}
                        </ActionLink>
                    </div>

                    <a
                        href={reviews.google.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-brand-800"
                    >
                        <Stars rating={reviews.google.rating} size="h-4 w-4" />
                        <span>
                            <strong className="font-semibold text-brand-950">{formatRating(reviews.google.rating, lang)}</strong>
                            {' · '}
                            {t({ ca: `${reviews.google.count} ressenyes a Google`, es: `${reviews.google.count} reseñas en Google` })}
                        </span>
                    </a>

                    <ul className="mt-8 grid gap-3 text-[15px] text-slate-700 sm:grid-cols-2 xl:grid-cols-3">
                        {highlights.map((item) => (
                            <li key={item.ca} className="flex items-start gap-2.5">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600">
                                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                                </span>
                                {t(item)}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.15, ease }}
                    className="relative mx-auto w-full max-w-xl lg:max-w-none"
                >
                    <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-950/20 ring-1 ring-black/5">
                        <video
                            ref={videoRef}
                            poster={clinicPhotos.waitingRoom.src}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={clinicPhotos.waitingRoom.alt}
                            width="945"
                            height="945"
                            className="aspect-[4/3] w-full object-cover lg:aspect-[4/4.4]"
                        >
                            <source src="/video/sala-espera.webm" type="video/webm" />
                            <source src="/video/sala-espera.mp4" type="video/mp4" />
                        </video>
                        <button
                            type="button"
                            onClick={toggleVideo}
                            aria-label={
                                playing
                                    ? t({ ca: 'Pausa el vídeo', es: 'Pausar el vídeo' })
                                    : t({ ca: 'Reprodueix el vídeo', es: 'Reproducir el vídeo' })
                            }
                            className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-brand-900 shadow-md backdrop-blur transition-colors hover:bg-white"
                        >
                            {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
                        </button>
                    </div>

                    <div className="absolute -bottom-8 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block md:-left-10 md:w-52">
                        <img src={clinicPhotos.reception.src} alt={clinicPhotos.reception.alt} width="945" height="945" className="aspect-square w-full object-cover" />
                    </div>

                    <div className="absolute -right-3 top-8 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur md:-right-8">
                        <p className="font-display text-3xl font-medium text-brand-900">+2.000</p>
                        <p className="text-sm text-slate-600">{t({ ca: 'pacients atesos', es: 'pacientes atendidos' })}</p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
