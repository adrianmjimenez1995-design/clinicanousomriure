import React from 'react';
import { Phone } from 'lucide-react';
import { mainPhone } from '@/lib/clinic';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import WhatsAppIcon from '@/components/site/WhatsAppIcon';
import { Container, Reveal } from '@/components/site/Primitives';

export default function CTASection({ title, description }) {
    const { t } = useLang();
    const { clinic, clinicPhotos } = useContent();
    return (
        <section data-mascot="cita" className="px-3 pb-3 sm:px-5 sm:pb-5">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-800 md:rounded-[2.5rem]">
                <img
                    src={clinicPhotos.waitingRoom.src}
                    alt=""
                    loading="lazy"
                    className="absolute inset-y-0 right-0 hidden h-full w-3/5 object-cover md:block"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand-900 from-40% via-brand-900/85 via-60% to-brand-900/20" />
                <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-terra-500/25 blur-3xl" />

                <Container className="relative py-20 md:py-28">
                    <Reveal className="max-w-2xl">
                        <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-6xl">
                            {title ?? (
                                t({
                                    ca: <>A punt per al teu <em className="font-normal italic text-terra-300">nou somriure</em>?</>,
                                    es: <>¿Preparado para tu <em className="font-normal italic text-terra-300">nueva sonrisa</em>?</>,
                                })
                            )}
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-brand-100/85">
                            {description ?? t({
                                ca: `Escriu-nos per WhatsApp o truca'ns i et donarem hora. T'esperem a ${clinic.address.city}.`,
                                es: `Escríbenos por WhatsApp o llámanos y te daremos cita. Te esperamos en ${clinic.address.city}.`,
                            })}
                        </p>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <ActionLink href={clinic.links.booking} size="lg">
                                <WhatsAppIcon />
                                {t({ ca: 'Demanar cita per WhatsApp', es: 'Pedir cita por WhatsApp' })}
                            </ActionLink>
                            <ActionLink href={mainPhone.href} variant="outlineLight" size="lg">
                                <Phone />
                                {mainPhone.label}
                            </ActionLink>
                        </div>
                    </Reveal>
                </Container>
            </div>
        </section>
    );
}
