import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// Idiomes de la web. El català és el predeterminat (URL sense prefix);
// el castellà viu sota /es (p. ex. /es/Servicios) perquè Google pugui indexar les dues versions.
export const LANGUAGES = [
    { code: 'ca', label: 'CA', name: 'Català', locale: 'ca_ES' },
    { code: 'es', label: 'ES', name: 'Castellano', locale: 'es_ES' },
];
export const DEFAULT_LANG = 'ca';

export function langFromPath(pathname) {
    return /^\/es(\/|$)/i.test(pathname) ? 'es' : DEFAULT_LANG;
}

// "/es/Servicios" -> "/Servicios", "/es" -> "/"
export function stripLangPrefix(pathname) {
    const stripped = pathname.replace(/^\/es(?=\/|$)/i, '');
    return stripped === '' ? '/' : stripped;
}

// Afegeix el prefix de l'idioma a una ruta interna: "/Servicios#x" -> "/es/Servicios#x"
export function localizePath(path, lang) {
    if (lang === DEFAULT_LANG) return path;
    if (path === '/') return `/${lang}`;
    if (path.startsWith('/#')) return `/${lang}${path.slice(1)}`;
    return `/${lang}${path}`;
}

function isBilingual(value) {
    return (
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        Object.keys(value).length === 2 &&
        'ca' in value &&
        'es' in value
    );
}

// Un text bilingüe { ca, es } -> el text de l'idioma actiu (si ja és text, es retorna tal qual)
export function pick(value, lang) {
    return isBilingual(value) ? value[lang] ?? value[DEFAULT_LANG] : value;
}

// Tradueix recursivament unes dades amb textos { ca, es } (serveis, equip, preguntes...)
export function localize(data, lang) {
    if (isBilingual(data)) return localize(data[lang] ?? data[DEFAULT_LANG], lang);
    if (Array.isArray(data)) return data.map((item) => localize(item, lang));
    if (data !== null && typeof data === 'object') {
        return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, localize(value, lang)]));
    }
    return data;
}

const LanguageContext = createContext({
    lang: DEFAULT_LANG,
    t: (value) => pick(value, DEFAULT_LANG),
    lp: (path) => path,
});

export function LanguageProvider({ children }) {
    const { pathname } = useLocation();
    const lang = langFromPath(pathname);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const value = useMemo(
        () => ({
            lang,
            // t({ ca: '...', es: '...' }) -> text en l'idioma actiu
            t: (text) => pick(text, lang),
            // lp('/Servicios') -> ruta amb el prefix de l'idioma actiu
            lp: (path) => localizePath(path, lang),
        }),
        [lang]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
    return useContext(LanguageContext);
}
