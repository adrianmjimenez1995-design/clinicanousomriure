import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import { Container, Reveal, SectionHeading } from '@/components/site/Primitives';

export default function ServicesPreview() {
    const { t, lp } = useLang();
    const { services } = useContent();
    return (
        <section data-mascot="serveis" className="py-24 md:py-32">
            <Container>
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        align="left"
                        eyebrow={t({ ca: 'Tractaments', es: 'Tratamientos' })}
                        title={t({ ca: 'Tot el que necessites per cuidar el teu somriure', es: 'Todo lo que necesitas para cuidar tu sonrisa' })}
                        description={t({
                            ca: 'Des de la revisió anual fins als tractaments més complets, amb el mateix equip i al mateix lloc.',
                            es: 'Desde la revisión anual hasta los tratamientos más completos, con el mismo equipo y en el mismo lugar.',
                        })}
                    />
                    <Reveal className="shrink-0">
                        <ActionLink to={lp(createPageUrl('Servicios'))} variant="outline">
                            {t({ ca: 'Veure tots els serveis', es: 'Ver todos los servicios' })}
                            <ArrowRight className="transition-transform group-hover/btn:translate-x-0.5" />
                        </ActionLink>
                    </Reveal>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <Reveal key={service.slug} delay={(index % 4) * 0.06}>
                            <Link
                                to={lp(`${createPageUrl('Servicios')}#${service.slug}`)}
                                className="group flex h-full overflow-hidden rounded-3xl border border-sand-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-28px_rgba(11,38,39,0.45)] sm:flex-col"
                            >
                                {/* En mòbil la targeta és horitzontal per no allargar tant la pàgina */}
                                <div className="relative w-32 shrink-0 overflow-hidden sm:w-auto">
                                    <img
                                        src={service.image}
                                        alt=""
                                        loading="lazy"
                                        width="1440"
                                        height="956"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:aspect-[4/3] sm:h-auto"
                                    />
                                    {service.urgent && (
                                        <span className="absolute left-4 top-4 hidden rounded-full bg-terra-600 px-3 py-1 text-xs font-semibold text-white shadow sm:block">
                                            {t({ ca: 'Atenció prioritària', es: 'Atención prioritaria' })}
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h3 className="font-display text-lg font-medium text-brand-950 sm:text-xl">{service.title}</h3>
                                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600 sm:mt-2 sm:text-[15px]">{service.short}</p>
                                    <span className="mt-3 inline-flex sm:mt-5 items-center gap-1.5 text-sm font-semibold text-brand-700">
                                        {t({ ca: 'Més informació', es: 'Más información' })}
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
