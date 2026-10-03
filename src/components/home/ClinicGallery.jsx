import React from 'react';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import { Container, Reveal, SectionHeading } from '@/components/site/Primitives';
import { cn } from '@/lib/utils';

const galleryImages = [
    { photo: 'waitingRoom', title: { ca: "Sala d'espera", es: 'Sala de espera' }, className: 'col-span-2 row-span-2' },
    { photo: 'reception', title: { ca: 'Recepció', es: 'Recepción' } },
    { photo: 'surgery', title: { ca: 'Gabinet', es: 'Gabinete' } },
    { photo: 'welcome', title: { ca: 'Acollida', es: 'Acogida' } },
    { photo: 'corridor', title: { ca: 'Instal·lacions', es: 'Instalaciones' } },
];

export default function ClinicGallery() {
    const { t } = useLang();
    const { clinicPhotos } = useContent();
    return (
        <section data-mascot="installacions" className="py-24 md:py-32">
            <Container>
                <SectionHeading
                    eyebrow={t({ ca: 'Les nostres instal·lacions', es: 'Nuestras instalaciones' })}
                    title={t({ ca: 'Un espai pensat perquè et sentis com a casa', es: 'Un espacio pensado para que te sientas como en casa' })}
                    description={t({
                        ca: "Instal·lacions modernes, lluminoses i acollidores al centre de Santa Cristina d'Aro.",
                        es: "Instalaciones modernas, luminosas y acogedoras en el centro de Santa Cristina d'Aro.",
                    })}
                />

                <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:auto-rows-[260px] lg:grid-cols-4">
                    {galleryImages.map((image, index) => (
                        <Reveal key={image.photo} delay={index * 0.06} className={cn('h-full', image.className)}>
                            <figure className="group relative h-full overflow-hidden rounded-3xl">
                                <img
                                    src={clinicPhotos[image.photo].src}
                                    alt={clinicPhotos[image.photo].alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
                                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold sm:bottom-4 sm:left-4 sm:px-4 sm:py-1.5 sm:text-sm text-brand-950 shadow backdrop-blur">
                                    {t(image.title)}
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
