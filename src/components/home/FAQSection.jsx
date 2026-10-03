import React from 'react';
import { Phone } from 'lucide-react';
import { mainPhone } from '@/lib/clinic';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ActionLink from '@/components/site/ActionLink';
import WhatsAppIcon from '@/components/site/WhatsAppIcon';
import { Container, Reveal, SectionHeading } from '@/components/site/Primitives';

export default function FAQSection() {
    const { t } = useLang();
    const { clinic, faqs } = useContent();
    return (
        <section data-mascot="dubtes" className="py-24 md:py-32">
            <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div>
                    <SectionHeading
                        align="left"
                        eyebrow={t({ ca: 'Preguntes freqüents', es: 'Preguntas frecuentes' })}
                        title={t({ ca: 'Resolem els teus dubtes', es: 'Resolvemos tus dudas' })}
                        description={t({
                            ca: "No trobes la resposta que busques? Escriu-nos o truca'ns i t'ajudarem.",
                            es: '¿No encuentras la respuesta que buscas? Escríbenos o llámanos y te ayudaremos.',
                        })}
                    />
                    <Reveal className="mt-8 flex flex-wrap gap-3">
                        <ActionLink href={clinic.links.whatsapp} variant="whatsapp">
                            <WhatsAppIcon />
                            WhatsApp
                        </ActionLink>
                        <ActionLink href={mainPhone.href} variant="outline">
                            <Phone />
                            {mainPhone.label}
                        </ActionLink>
                    </Reveal>
                </div>

                <Reveal>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.q}
                                value={`faq-${index}`}
                                className="rounded-2xl border border-sand-200 bg-white px-6 transition-colors data-[state=open]:border-brand-200 data-[state=open]:bg-brand-50/40"
                            >
                                <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-brand-950 hover:no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-slate-600">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Reveal>
            </Container>
        </section>
    );
}
