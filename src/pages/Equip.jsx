import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Icon3D from '@/components/site/Icon3D';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import { Container, PageHeader, Reveal, SectionHeading } from '@/components/site/Primitives';
import CTASection from '../components/home/CTASection';
import usePageMeta from '@/hooks/use-page-meta';
import { SEO } from '@/lib/seo';
import { cn } from '@/lib/utils';

// Valors extrets del missatge de la gerència
const values = [
    {
        icon: 'cura',
        title: { ca: 'Atenció propera', es: 'Atención cercana' },
        text: {
            ca: 'Cada pacient és diferent. Escoltem, expliquem i adaptem el tractament a cada persona.',
            es: 'Cada paciente es diferente. Escuchamos, explicamos y adaptamos el tratamiento a cada persona.',
        },
    },
    {
        icon: 'honestedat',
        title: { ca: 'Honestedat', es: 'Honestidad' },
        text: {
            ca: 'Et recomanem només el que necessites, amb un pla clar i transparent des del primer dia.',
            es: 'Te recomendamos solo lo que necesitas, con un plan claro y transparente desde el primer día.',
        },
    },
    {
        icon: 'tothom',
        title: { ca: 'Accessible per a tothom', es: 'Accesible para todos' },
        text: {
            ca: 'Volem que el factor econòmic no sigui una barrera per accedir a una odontologia de qualitat.',
            es: 'Queremos que el factor económico no sea una barrera para acceder a una odontología de calidad.',
        },
    },
];

function TeamCard({ member, index }) {
    const { t } = useLang();
    const [expanded, setExpanded] = useState(false);
    const bioId = `bio-${index}`;
    const paragraphs = member.bio.split('\n\n');

    return (
        <Reveal delay={(index % 2) * 0.08} className="h-full">
            <article className="flex h-full flex-col gap-6 rounded-3xl border border-sand-200 bg-white p-4 shadow-[0_20px_50px_-35px_rgba(11,38,39,0.45)] sm:flex-row sm:p-5">
                {/* Foto sencera i quadrada: les fotos originals porten el nom imprès a dalt i no s'han de retallar */}
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="aspect-square w-full shrink-0 self-start rounded-2xl bg-brand-100 object-cover sm:w-52"
                />
                <div className="flex flex-1 flex-col px-2 pb-2 sm:px-0 sm:pt-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terra-600">{member.role}</p>
                    <h2 className="mt-2 font-display text-2xl font-medium text-brand-950">{member.name}</h2>
                    <p className="mt-1 text-sm font-medium text-brand-700">{member.specialty}</p>

                    {/* Plegat: només el primer paràgraf, retallat; desplegat: la bio sencera */}
                    <div id={bioId} className="mt-5 space-y-3 text-[15px] leading-relaxed text-slate-600">
                        {(expanded ? paragraphs : paragraphs.slice(0, 1)).map((paragraph) => (
                            <p key={paragraph} className={cn(!expanded && 'line-clamp-4')}>{paragraph}</p>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        aria-controls={bioId}
                        className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                    >
                        {expanded ? t({ ca: 'Llegir menys', es: 'Leer menos' }) : t({ ca: 'Llegir més', es: 'Leer más' })}
                        <ChevronDown className={cn('h-4 w-4 transition-transform', expanded && 'rotate-180')} />
                    </button>
                </div>
            </article>
        </Reveal>
    );
}

export default function Equip() {
    const { t } = useLang();
    const { clinicPhotos, team } = useContent();
    usePageMeta(SEO.Equip.title, SEO.Equip.description);

    return (
        <main>
            <PageHeader
                eyebrow={t({ ca: 'El nostre equip', es: 'Nuestro equipo' })}
                title={t({
                    ca: <>Professionals <em className="font-normal italic text-brand-600">dedicats</em></>,
                    es: <>Profesionales <em className="font-normal italic text-brand-600">dedicados</em></>,
                })}
                description={t({
                    ca: 'Coneix els professionals que cuiden la teva salut bucodental, cadascun dedicat al seu àmbit.',
                    es: 'Conoce a los profesionales que cuidan tu salud bucodental, cada uno dedicado a su ámbito.',
                })}
                mascotTip="equip-pagina"
                image={clinicPhotos.surgery}
            />

            <section className="py-20 md:py-28">
                <Container>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {team.map((member, index) => (
                            <TeamCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </Container>
            </section>

            <section data-mascot="nosaltres" className="bg-sand-100 py-24 md:py-28">
                <Container>
                    <SectionHeading
                        eyebrow={t({ ca: 'La nostra manera de treballar', es: 'Nuestra forma de trabajar' })}
                        title={t({ ca: 'El que ens defineix', es: 'Lo que nos define' })}
                    />
                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {values.map(({ icon, title, text }, index) => (
                            <Reveal key={title.ca} delay={index * 0.08} className="h-full">
                                <div className="h-full rounded-3xl border border-sand-200 bg-white p-8">
                                    <Icon3D name={icon} className="h-16 w-16" />
                                    <h3 className="mt-6 font-display text-xl font-medium text-brand-950">{t(title)}</h3>
                                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{t(text)}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            <div className="pt-3 sm:pt-5" />
            <CTASection />
        </main>
    );
}
