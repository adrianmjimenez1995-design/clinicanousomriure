import React from 'react';
import useContent from '@/i18n/useContent';
import { useLang } from '@/i18n/LanguageContext';
import { Container, PageHeader } from '@/components/site/Primitives';

// Mostra un valor legal; si encara és pendent d'omplir, el ressalta perquè no passi per alt
export function LegalValue({ value }) {
    if (typeof value === 'string' && /PENDENT|PENDIENTE/.test(value)) {
        return <mark className="rounded bg-amber-100 px-1 py-0.5 font-medium text-amber-900">{value}</mark>;
    }
    return value;
}

// Plantilla de les pàgines legals (avís legal, privacitat, galetes)
export default function LegalPage({ eyebrow, title, intro, sections }) {
    const { t } = useLang();
    const { legal } = useContent();

    return (
        <main>
            <PageHeader eyebrow={t(eyebrow)} title={t(title)} description={t(intro)} />
            <section className="py-16 md:py-24">
                <Container className="max-w-3xl">
                    <p className="text-sm text-slate-500">
                        {t({ ca: 'Última actualització', es: 'Última actualización' })}: {legal.updated}
                    </p>
                    <div className="mt-10 space-y-12">
                        {sections.map((section, index) => (
                            <section key={section.id}>
                                <h2 className="flex gap-3 font-display text-2xl font-medium text-brand-950">
                                    <span className="text-terra-600">{index + 1}.</span>
                                    {t(section.title)}
                                </h2>
                                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700 [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold [&_strong]:text-brand-950 [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-brand-400">
                                    {t(section.body)}
                                </div>
                            </section>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
