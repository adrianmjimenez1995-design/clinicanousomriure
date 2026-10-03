import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPinned } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { CalendarDays, Navigation, Instagram, Facebook, Linkedin } from 'lucide-react';
import Icon3D from '@/components/site/Icon3D';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import WhatsAppIcon from '@/components/site/WhatsAppIcon';
import { Container, PageHeader, Reveal } from '@/components/site/Primitives';
import usePageMeta from '@/hooks/use-page-meta';
import { SEO } from '@/lib/seo';


// El mapa de Google només es carrega quan el visitant ho demana: així la web no instal·la galetes de tercers per defecte
function MapEmbed({ clinic }) {
    const { t, lp } = useLang();
    const [loaded, setLoaded] = useState(false);

    if (loaded) {
        return (
            <iframe
                title={`${t({ ca: 'Mapa', es: 'Mapa' })}: ${clinic.address.full}`}
                src={clinic.links.mapEmbed}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        );
    }

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
            {/* Fons que recorda un plànol */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(theme(colors.brand.100)_1px,transparent_1px),linear-gradient(90deg,theme(colors.brand.100)_1px,transparent_1px)] [background-size:36px_36px]"
            />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terra-200/40 blur-3xl" />
            <Icon3D name="ubicacio" className="relative h-20 w-20" />
            <p className="relative font-display text-xl font-medium text-brand-950">
                {clinic.address.street}
                <br />
                {clinic.address.postalCode} {clinic.address.city}
            </p>
            <button
                type="button"
                onClick={() => setLoaded(true)}
                className="relative inline-flex h-12 items-center gap-2 rounded-full bg-brand-700 px-6 text-[15px] font-semibold text-white shadow-lg shadow-brand-900/15 transition-colors hover:bg-brand-800"
            >
                <MapPinned className="h-5 w-5" />
                {t({ ca: 'Mostra el mapa', es: 'Mostrar el mapa' })}
            </button>
            <p className="relative max-w-xs text-xs leading-relaxed text-slate-500">
                {t({
                    ca: 'En mostrar el mapa es carrega Google Maps, que pot instal·lar galetes pròpies.',
                    es: 'Al mostrar el mapa se carga Google Maps, que puede instalar sus propias cookies.',
                })}{' '}
                <Link to={lp(createPageUrl('Cookies'))} className="underline underline-offset-2 hover:text-brand-700">
                    {t({ ca: 'Més informació', es: 'Más información' })}
                </Link>
            </p>
        </div>
    );
}

function InfoCard({ icon, title, children }) {
    return (
        <div className="flex gap-5 rounded-3xl border border-sand-200 bg-white p-6 shadow-[0_16px_40px_-32px_rgba(11,38,39,0.45)]">
            <Icon3D name={icon} />
            <div className="min-w-0">
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-terra-600">{title}</h2>
                <div className="mt-1.5 text-[17px] font-medium leading-snug text-brand-950">{children}</div>
            </div>
        </div>
    );
}

export default function Contacto() {
    const { t } = useLang();
    const { clinic, clinicPhotos } = useContent();
    const socials = [
        { name: 'Instagram', href: clinic.links.instagram, icon: Instagram },
        { name: 'Facebook', href: clinic.links.facebook, icon: Facebook },
        { name: 'LinkedIn', href: clinic.links.linkedin, icon: Linkedin },
    ];
    usePageMeta(SEO.Contacto.title, SEO.Contacto.description);

    return (
        <main>
            <PageHeader
                eyebrow={t({ ca: 'Contacte', es: 'Contacto' })}
                title={t({
                    ca: <>Som <em className="font-normal italic text-brand-600">aquí</em> per a tu</>,
                    es: <>Estamos <em className="font-normal italic text-brand-600">aquí</em> para ti</>,
                })}
                description={t({
                    ca: "Visita'ns, truca'ns o escriu-nos. Estarem encantats d'atendre't.",
                    es: 'Visítanos, llámanos o escríbenos. Estaremos encantados de atenderte.',
                })}
                mascotTip="contacte"
                image={clinicPhotos.reception}
            />

            <section className="py-20 md:py-28">
                <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                    <Reveal className="space-y-4">
                        <InfoCard icon="ubicacio" title={t({ ca: 'Adreça', es: 'Dirección' })}>
                            <a href={clinic.links.maps} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">
                                {clinic.address.street}
                                <br />
                                {clinic.address.postalCode} {clinic.address.city}
                            </a>
                        </InfoCard>
                        <InfoCard icon="telefon" title={t({ ca: 'Telèfons', es: 'Teléfonos' })}>
                            <span className="flex flex-wrap gap-x-4 gap-y-1">
                                {clinic.phones.map((phone) => (
                                    <a key={phone.href} href={phone.href} className="hover:text-brand-600">{phone.label}</a>
                                ))}
                            </span>
                        </InfoCard>
                        <InfoCard icon="correu" title={t({ ca: 'Correu electrònic', es: 'Correo electrónico' })}>
                            <a href={`mailto:${clinic.email}`} className="break-all hover:text-brand-600">{clinic.email}</a>
                        </InfoCard>
                        <InfoCard icon="rellotge" title={t({ ca: 'Horari', es: 'Horario' })}>
                            {clinic.hours.days}: {clinic.hours.time}
                            <span className="mt-1 block text-[15px] font-normal text-slate-600">{clinic.hours.saturday}</span>
                        </InfoCard>

                        <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            <ActionLink href={clinic.links.booking}>
                                <CalendarDays />
                                {t({ ca: 'Reservar a Doctoralia', es: 'Reservar en Doctoralia' })}
                            </ActionLink>
                            <ActionLink href={clinic.links.whatsapp} variant="whatsapp">
                                <WhatsAppIcon />
                                {t({ ca: 'Escriu-nos per WhatsApp', es: 'Escríbenos por WhatsApp' })}
                            </ActionLink>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                            <span className="text-sm font-medium text-slate-500">{t({ ca: 'Segueix-nos', es: 'Síguenos' })}</span>
                            {socials.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-brand-800 transition-colors hover:border-brand-300 hover:bg-brand-50"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal className="flex flex-col">
                        <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-3xl border border-sand-200 bg-sand-100 shadow-[0_20px_50px_-35px_rgba(11,38,39,0.45)]">
                            <MapEmbed clinic={clinic} />
                        </div>
                        <ActionLink href={clinic.links.maps} variant="outline" className="mt-4 self-start">
                            <Navigation />
                            {t({ ca: 'Com arribar-hi', es: 'Cómo llegar' })}
                        </ActionLink>
                    </Reveal>
                </Container>
            </section>
        </main>
    );
}
