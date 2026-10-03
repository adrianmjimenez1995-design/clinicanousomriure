import React from 'react';
import { Check, CalendarDays, Phone, Sparkles } from 'lucide-react';
import Icon3D from '@/components/site/Icon3D';
import { createPageUrl } from '@/utils';
import { mainPhone } from '@/lib/clinic';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import { Container, PageHeader, Reveal } from '@/components/site/Primitives';
import CTASection from '../components/home/CTASection';
import TechnologySection from '../components/home/TechnologySection';
import usePageMeta from '@/hooks/use-page-meta';
import { SEO } from '@/lib/seo';
import { cn } from '@/lib/utils';

export default function Servicios() {
    const { t, lp } = useLang();
    const { clinic, services } = useContent();
    usePageMeta(SEO.Servicios.title, SEO.Servicios.description);

    return (
        <main>
            <PageHeader
                eyebrow={t({ ca: 'Els nostres serveis', es: 'Nuestros servicios' })}
                title={t({
                    ca: <>Tractaments <em className="font-normal italic text-brand-600">dentals</em></>,
                    es: <>Tratamientos <em className="font-normal italic text-brand-600">dentales</em></>,
                })}
                description={t({
                    ca: "Una àmplia gamma de tractaments odontològics amb tecnologia actual i un equip que t'acompanya en cada pas.",
                    es: 'Una amplia gama de tratamientos odontológicos con tecnología actual y un equipo que te acompaña en cada paso.',
                })}
                mascotTip="serveis-pagina"
                image={{ src: '/images/serveis/capcalera.webp', alt: '' }}
                imageMode="background"
            >
                <nav aria-label={t({ ca: 'Serveis', es: 'Servicios' })} className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 lg:mx-0 lg:max-w-2xl lg:justify-start">
                    <a
                        href="#tecnologia"
                        className="inline-flex items-center gap-1.5 rounded-full bg-terra-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terra-700"
                    >
                        <Sparkles className="h-4 w-4" />
                        {t({ ca: 'Novetat: tecnologia 3D', es: 'Novedad: tecnología 3D' })}
                    </a>
                    {services.map((service) => (
                        <a
                            key={service.slug}
                            href={`#${service.slug}`}
                            className="rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-brand-900 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-50"
                        >
                            {service.title}
                        </a>
                    ))}
                </nav>
            </PageHeader>

            <section className="py-20 md:py-28">
                <Container className="space-y-24 md:space-y-32">
                    {services.map((service, index) => {
                        const reversed = index % 2 !== 0;
                        return (
                            <article
                                key={service.slug}
                                id={service.slug}
                                data-mascot={service.mascotTip ?? 'serveis-pagina'}
                                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
                            >
                                <Reveal className={cn('relative', reversed && 'lg:order-2')}>
                                    <div
                                        aria-hidden="true"
                                        className={cn(
                                            'absolute -bottom-4 h-2/3 w-2/3 rounded-[2rem]',
                                            reversed ? '-left-4 bg-terra-100' : '-right-4 bg-brand-100'
                                        )}
                                    />
                                    <img
                                        src={service.image}
                                        alt=""
                                        loading="lazy"
                                        width="1440"
                                        height="956"
                                        className="relative aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-brand-950/10"
                                    />
                                </Reveal>

                                <Reveal className={cn(reversed && 'lg:order-1')}>
                                    <div className="flex items-center gap-3">
                                        <span className="font-display text-sm font-medium text-terra-600">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="h-px w-10 bg-sand-200" aria-hidden="true" />
                                        {service.urgent && (
                                            <span className="rounded-full bg-terra-50 px-3 py-1 text-xs font-semibold text-terra-700 ring-1 ring-terra-200">
                                                {t({ ca: 'Atenció prioritària', es: 'Atención prioritaria' })}
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-brand-950 md:text-4xl">
                                        {service.title}
                                    </h2>
                                    <p className="mt-5 text-lg leading-relaxed text-slate-600">{service.description}</p>

                                    <ul className="mt-7 space-y-3">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-[15px] font-medium text-slate-800">
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
                                                    <Check className="h-3.5 w-3.5 text-brand-600" strokeWidth={3} />
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-9 flex flex-wrap gap-3">
                                        {service.urgent ? (
                                            <>
                                                <ActionLink href={mainPhone.href}>
                                                    <Phone />
                                                    {t({ ca: 'Trucar ara', es: 'Llamar ahora' })}
                                                </ActionLink>
                                                <ActionLink href={clinic.links.booking} variant="outline">
                                                    <CalendarDays />
                                                    {t({ ca: 'Demanar cita', es: 'Pedir cita' })}
                                                </ActionLink>
                                            </>
                                        ) : (
                                            <ActionLink href={clinic.links.booking}>
                                                <CalendarDays />
                                                {t({ ca: 'Demanar cita', es: 'Pedir cita' })}
                                            </ActionLink>
                                        )}
                                    </div>
                                </Reveal>
                            </article>
                        );
                    })}
                </Container>
            </section>

            <TechnologySection />

            <section className="py-24">
                <Container>
                    <Reveal className="flex flex-col items-start gap-6 rounded-3xl border border-sand-200 bg-sand-50 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                        <div className="flex items-start gap-5">
                            <Icon3D name="xat" />
                            <div>
                                <h2 className="font-display text-2xl font-medium text-brand-950">{t({ ca: 'I molt més…', es: 'Y mucho más…' })}</h2>
                                <p className="mt-1 text-slate-600">
                                    {t({
                                        ca: "No trobes el tractament que busques? Explica'ns el teu cas i t'assessorarem sobre la millor opció per a tu.",
                                        es: '¿No encuentras el tratamiento que buscas? Cuéntanos tu caso y te asesoraremos sobre la mejor opción para ti.',
                                    })}
                                </p>
                            </div>
                        </div>
                        <ActionLink to={lp(createPageUrl('Contacto'))} variant="brand" className="shrink-0">
                            {t({ ca: 'Contactar', es: 'Contactar' })}
                        </ActionLink>
                    </Reveal>
                </Container>
            </section>

            <CTASection />
        </main>
    );
}
