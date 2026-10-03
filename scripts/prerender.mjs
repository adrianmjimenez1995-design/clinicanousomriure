// Genera l'HTML estàtic de cada pàgina i idioma, i el sitemap.xml.
// S'executa automàticament amb `npm run build` (després de vite build i del build SSR).
//
// Resultat a dist/:
//   index.html            -> inici en català (/)
//   _p/Servicios.html     -> /Servicios
//   _p/es.html            -> /es
//   _p/es/Servicios.html  -> /es/Servicios
//   _p/shell.html         -> plantilla buida per a la resta de rutes (p. ex. la 404)
//   sitemap.xml
// El fitxer .htaccess s'encarrega de servir cada HTML a la seva URL.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, routes, head } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const escapeHtml = (text) =>
    text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function setAttr(html, pattern, value) {
    if (!pattern.test(html)) throw new Error(`No s'ha trobat a la plantilla: ${pattern}`);
    return html.replace(pattern, (_, start, end) => `${start}${value}${end}`);
}

function fillTemplate(h, appHtml) {
    let html = template;
    html = html.replace(/<html lang="[^"]*">/, `<html lang="${h.lang}">`);
    html = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(h.title)}</title>`);
    html = setAttr(html, /(<meta name="description" content=")[^"]*(")/, escapeHtml(h.description));
    html = setAttr(html, /(<link rel="canonical" href=")[^"]*(")/, h.url);
    html = setAttr(html, /(<meta property="og:title" content=")[^"]*(")/, escapeHtml(h.title));
    html = setAttr(html, /(<meta property="og:description" content=")[^"]*(")/, escapeHtml(h.description));
    html = setAttr(html, /(<meta property="og:url" content=")[^"]*(")/, h.url);
    html = setAttr(html, /(<meta property="og:locale" content=")[^"]*(")/, h.locale);
    const alternates = h.alternates
        .map((a) => `    <link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
        .join('\n');
    html = html.replace('</head>', () => `${alternates}\n  </head>`);
    return html.replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);
}

function write(file, contents) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, contents);
}

// Plantilla buida per a les rutes que no es generen (la 404, rutes en minúscules, etc.)
write(path.join(dist, '_p', 'shell.html'), template);

for (const route of routes) {
    const html = fillTemplate(head(route), render(route.url));
    const file = route.url === '/' ? path.join(dist, 'index.html') : path.join(dist, '_p', `${route.url.slice(1)}.html`);
    write(file, html);
    console.log(`  prerender ${route.url.padEnd(16)} -> ${path.relative(dist, file)}`);
}

// sitemap.xml amb les versions en cada idioma
const today = new Date().toISOString().slice(0, 10);
const urls = routes
    .map((route) => {
        const h = head(route);
        const links = h.alternates
            .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
            .join('\n');
        return `  <url>\n    <loc>${h.url}</loc>\n    <lastmod>${today}</lastmod>\n${links}\n  </url>`;
    })
    .join('\n');
write(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
);
console.log(`  sitemap.xml amb ${routes.length} URL`);
