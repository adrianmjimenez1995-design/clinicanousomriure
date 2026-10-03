// Entrada per generar l'HTML estàtic de cada pàgina (la fa servir scripts/prerender.mjs després de `vite build`)
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';
import { PAGE_PATHS, SEO, SITE_URL } from './lib/seo';
import { LANGUAGES, localizePath, pick } from './i18n/LanguageContext';

// Totes les pàgines en tots els idiomes
export const routes = LANGUAGES.flatMap(({ code }) =>
    Object.entries(PAGE_PATHS).map(([page, basePath]) => ({
        page,
        lang: code,
        basePath,
        url: localizePath(basePath, code),
    }))
);

export function render(url) {
    return renderToString(
        <StaticRouter location={url}>
            <AppRoutes />
        </StaticRouter>
    );
}

// Etiquetes <head> de cada pàgina: títol, descripció, URL canònica i versions en altres idiomes
export function head({ page, lang, basePath }) {
    const meta = SEO[page];
    return {
        lang,
        title: pick(meta.title, lang),
        description: pick(meta.description, lang),
        url: SITE_URL + localizePath(basePath, lang),
        locale: LANGUAGES.find((l) => l.code === lang).locale,
        alternates: [
            ...LANGUAGES.map((l) => ({ hreflang: l.code, href: SITE_URL + localizePath(basePath, l.code) })),
            { hreflang: 'x-default', href: SITE_URL + basePath },
        ],
    };
}
