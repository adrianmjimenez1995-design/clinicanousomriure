# Clínica Nou Somriure — web

Web de la Clínica Nou Somriure (Santa Cristina d'Aro): <https://www.clinicanousomriure.com>

Feta amb React + Vite + Tailwind. És una web estàtica: no necessita backend ni variables d'entorn.

## Treballar en local

```bash
npm install
npm run dev
```

La web s'obre a <http://localhost:5173>.

## Publicar a Hostinger

1. `npm run build`
2. Puja **el contingut** de la carpeta `dist/` a `public_html` (Gestor d'arxius de Hostinger o FTP), substituint els fitxers anteriors.
   Inclou el fitxer ocult `.htaccess` i la carpeta `_p/`: entre tots dos fan que cada URL (`/Servicios`, `/es/Equip`…) serveixi la seva pàgina.
3. La primera vegada, dona d'alta el sitemap a Google Search Console: `https://www.clinicanousomriure.com/sitemap.xml`.

### Com funciona el build (SEO)

`npm run build` fa tres passos:

1. `vite build`: l'aplicació normal.
2. `vite build --ssr src/entry-server.jsx`: una versió per generar HTML.
3. `node scripts/prerender.mjs`: escriu l'HTML de cada pàgina i idioma (`index.html` i `_p/…`) amb el seu títol, descripció, URL canònica i `hreflang`, i genera `sitemap.xml`.

Així Google i les vistes prèvies en compartir l'enllaç (WhatsApp, xarxes) veuen el contingut de cada pàgina sense haver d'executar JavaScript. Els títols i descripcions de cada pàgina són a `src/lib/seo.js`.
Si cal un build sense aquest pas, hi ha `npm run build:spa`.

## On es canvia cada cosa

| Què | On |
| --- | --- |
| Telèfons, horari, adreça, enllaços (WhatsApp, xarxes) i el missatge de "Demanar cita" | `src/lib/clinic.js` |
| Textos dels serveis, tecnologia (CBCT i escàner 3D), equip i preguntes freqüents | `src/lib/clinic.js` |
| Missatges de la mascota (globus per secció) | `src/components/site/MascotAssistant.jsx` → `TIPS` |
| Capçalera, menú i peu de pàgina | `src/Layout.jsx` |
| Seccions de la pàgina d'inici | `src/components/home/` |
| Pàgines Serveis, Equip i Contacte | `src/pages/` |
| Colors i tipografies | `tailwind.config.js` |
| Fotos | `public/images/` (serveis a `serveis/`, tecnologia a `tecnologia/`) |
| Mascota (6+1 postures) i icones 3D | `public/images/mascota/`, `public/images/icones/` |
| Vídeo de la portada | `public/video/` |
| Títol, descripció per a Google i dades estructurades | `index.html` |

## Idiomes (català i castellà)

- El català és l'idioma per defecte (`/`, `/Servicios`…). El castellà és a `/es` (`/es`, `/es/Servicios`…), amb `hreflang` perquè Google indexi les dues versions.
- El selector **CA | ES** de la capçalera porta a la mateixa pàgina en l'altre idioma.
- Tots els textos van en parelles `{ ca: '…', es: '…' }`: les dades (serveis, equip, preguntes…) a `src/lib/clinic.js` i la resta de textos directament a cada component. Per canviar una frase, edita les dues versions.

## Pàgines legals i privacitat

- **Avís legal** (`/AvisLegal`), **Política de privacitat** (`/Privacitat`) i **Política de galetes** (`/Cookies`), en català i castellà, enllaçades al peu.
- ⚠️ Abans de publicar, ompliu les dades del titular a `src/lib/clinic.js` → `legal` (raó social, NIF, registre mercantil, col·legi professional). Mentre siguin pendents es veuen ressaltades en groc a les pàgines.
- Els textos són una base orientativa: convé que els revisi un assessor legal.
- La web **no instal·la galetes**: les tipografies se serveixen des de la mateixa web (no Google Fonts) i el mapa de Google només es carrega si el visitant fa clic a «Mostra el mapa». Per això no cal bàner de galetes. Si en el futur s'hi afegeix analítica (Google Analytics, píxels…), caldrà un bàner de consentiment.

## Ressenyes

- Les valoracions de Google i de Doctoralia (nota i nombre d'opinions) són a `src/lib/clinic.js` → `reviews`. Actualitzeu-les de tant en tant.
- Doctoralia ja no es fa servir per reservar: els botons «Demanar cita» obren WhatsApp amb el missatge ja escrit (`clinic.links.booking`).
- Per mostrar opinions concretes, afegiu-les a `reviews.testimonials` (només reals, tal qual i amb permís del pacient). Mentre la llista sigui buida, aquell bloc no es mostra.

## Sobre les imatges

- **Reals:** fotos de la clínica i de l'equip. A les fotos de l'equip només s'han esborrat els noms impresos (s'ha reconstruït la paret; la persona no s'ha tocat).
- **Vídeo de la portada:** animació subtil feta amb IA a partir de la foto real de la sala d'espera. Si el visitant té activada l'opció de reduir animacions, es mostra la foto amb un botó per reproduir-lo.
- **Il·lustratives (generades amb IA, Higgsfield):** imatges dels serveis, de la tecnologia (CBCT i escàner), capçalera de Serveis, la mascota (feta a partir del logo) i les icones 3D.
