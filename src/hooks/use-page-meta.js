import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LANGUAGES, localizePath, pick, stripLangPrefix, useLang } from '@/i18n/LanguageContext';

import { PAGE_PATHS, SITE_URL } from '@/lib/seo';

// Rutes canòniques (les rutes són insensibles a majúscules: /servicios i /Servicios són la mateixa pàgina)
const CANONICAL_PATHS = Object.values(PAGE_PATHS).filter((path) => path !== '/');

function canonicalBasePath(pathname) {
    const lower = stripLangPrefix(pathname).toLowerCase().replace(/\/+$/, '');
    if (lower === '' || lower === '/home') return '/';
    return CANONICAL_PATHS.find((p) => p.toLowerCase() === lower) ?? stripLangPrefix(pathname);
}

function setMeta(selector, attribute, value) {
    document.querySelector(selector)?.setAttribute(attribute, value);
}

function upsertLink(hreflang, href) {
    let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
    }
    link.setAttribute('href', href);
}

// Títol, descripció, URL canònica i versions en altres idiomes (pestanya del navegador i Google).
// Els textos poden ser { ca, es }. Amb noindex, la pàgina no s'indexa (p. ex. la 404).
export default function usePageMeta(title, description, { noindex = false } = {}) {
    const { pathname } = useLocation();
    const { lang } = useLang();
    const titleText = pick(title, lang);
    const descriptionText = pick(description, lang);

    useEffect(() => {
        document.title = titleText;
        if (descriptionText) setMeta('meta[name="description"]', 'content', descriptionText);

        const basePath = canonicalBasePath(pathname);
        const url = SITE_URL + localizePath(basePath, lang);
        setMeta('link[rel="canonical"]', 'href', url);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('meta[property="og:title"]', 'content', titleText);
        setMeta('meta[property="og:locale"]', 'content', LANGUAGES.find((l) => l.code === lang)?.locale ?? 'ca_ES');
        if (descriptionText) setMeta('meta[property="og:description"]', 'content', descriptionText);

        // Versions de la mateixa pàgina en cada idioma
        LANGUAGES.forEach(({ code }) => upsertLink(code, SITE_URL + localizePath(basePath, code)));
        upsertLink('x-default', SITE_URL + basePath);

        let robots = document.querySelector('meta[name="robots"]');
        if (noindex) {
            if (!robots) {
                robots = document.createElement('meta');
                robots.setAttribute('name', 'robots');
                document.head.appendChild(robots);
            }
            robots.setAttribute('content', 'noindex');
        } else {
            robots?.remove();
        }
    }, [titleText, descriptionText, pathname, lang, noindex]);
}
