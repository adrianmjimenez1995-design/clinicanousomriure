import { useMemo } from 'react';
import { clinic, clinicPhotos, services, technology, team, faqs, reviews, legal } from '@/lib/clinic';
import { localize, useLang } from './LanguageContext';

// Dades de la clínica ja traduïdes a l'idioma actiu
export default function useContent() {
    const { lang } = useLang();
    return useMemo(
        () => localize({ clinic, clinicPhotos, services, technology, team, faqs, reviews, legal }, lang),
        [lang]
    );
}
