import React from 'react';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { clinic } from '@/lib/clinic';
import { useLang } from '@/i18n/LanguageContext';
import ActionLink from '@/components/site/ActionLink';
import Mascot from '@/components/site/Mascot';
import { Container } from '@/components/site/Primitives';
import usePageMeta from '@/hooks/use-page-meta';

export default function PageNotFound() {
    const { t, lp } = useLang();
    usePageMeta(
        { ca: 'Pàgina no trobada | Clínica Nou Somriure', es: 'Página no encontrada | Clínica Nou Somriure' },
        {
            ca: "Aquesta pàgina no existeix. Torna a l'inici de la Clínica Nou Somriure o demana cita.",
            es: 'Esta página no existe. Vuelve al inicio de la Clínica Nou Somriure o pide cita.',
        },
        { noindex: true }
    );

    return (
        <main className="bg-sand-50">
            <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
                <Mascot pose="lupa" className="w-36 md:w-44" />
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-terra-700">Error 404</p>
                <h1 className="mt-3 font-display text-4xl font-medium text-brand-950 md:text-5xl">{t({ ca: 'Aquesta pàgina no existeix', es: 'Esta página no existe' })}</h1>
                <p className="mt-4 max-w-md text-lg text-slate-600">
                    {t({
                        ca: "Potser l'enllaç ha canviat. Torna a l'inici o demana cita directament.",
                        es: 'Quizá el enlace ha cambiado. Vuelve al inicio o pide cita directamente.',
                    })}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <ActionLink to={lp('/')} variant="outline">
                        <ArrowLeft />
                        {t({ ca: "Tornar a l'inici", es: 'Volver al inicio' })}
                    </ActionLink>
                    <ActionLink href={clinic.links.booking}>
                        <CalendarDays />
                        {t({ ca: 'Demanar cita', es: 'Pedir cita' })}
                    </ActionLink>
                </div>
            </Container>
        </main>
    );
}
