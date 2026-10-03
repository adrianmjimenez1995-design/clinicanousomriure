import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import { Container, Reveal, SectionHeading } from '@/components/site/Primitives';

export default function TeamPreview() {
    const { t, lp } = useLang();
    const { team } = useContent();
    return (
        <section data-mascot="equip" className="bg-sand-50 py-24 md:py-32">
            <Container>
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <SectionHeading
                        align="left"
                        eyebrow={t({ ca: 'El nostre equip', es: 'Nuestro equipo' })}
                        title={t({ ca: 'Les persones que et cuidaran', es: 'Las personas que te cuidarán' })}
                        description={t({
                            ca: 'Un equip multidisciplinari que treballa conjuntament perquè cada pacient tingui el tractament adequat.',
                            es: 'Un equipo multidisciplinar que trabaja de forma conjunta para que cada paciente reciba el tratamiento adecuado.',
                        })}
                    />
                    <Reveal className="shrink-0">
                        <ActionLink to={lp(createPageUrl('Equip'))} variant="outline">
                            {t({ ca: "Coneix l'equip", es: 'Conoce al equipo' })}
                            <ArrowRight className="transition-transform group-hover/btn:translate-x-0.5" />
                        </ActionLink>
                    </Reveal>
                </div>

                <div className="mt-14 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
                    {team.map((member, index) => (
                        <Reveal key={member.name} delay={index * 0.06}>
                            <Link to={lp(createPageUrl('Equip'))} className="group block">
                                <div className="overflow-hidden rounded-3xl bg-brand-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="mt-4 font-display text-lg font-medium text-brand-950 md:text-xl">{member.name}</h3>
                                <p className="text-sm font-medium text-terra-700">{member.role}</p>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
