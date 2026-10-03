import React from 'react';
import LegalPage from '@/components/site/LegalPage';
import { useLang } from '@/i18n/LanguageContext';
import usePageMeta from '@/hooks/use-page-meta';
import { SEO } from '@/lib/seo';

// Política de galetes. La web no instal·la galetes pròpies ni d'analítica/publicitat;
// el mapa de Google només es carrega si l'usuari ho demana (pàgina de Contacte).
const STORAGE = [
    {
        key: 'nou-somriure-mascota-amagada',
        purpose: { ca: 'Recordar que has amagat la mascota.', es: 'Recordar que has ocultado la mascota.' },
    },
    {
        key: 'nou-somriure-mascota-silenci',
        purpose: {
            ca: 'Que la mascota deixi de mostrar consells sola si els has tancat diverses vegades.',
            es: 'Que la mascota deje de mostrar consejos sola si los has cerrado varias veces.',
        },
    },
    {
        key: 'nou-somriure-mascota-ullet',
        purpose: {
            ca: 'Que la mascota només et saludi amb un ullet una vegada per visita.',
            es: 'Que la mascota solo te salude con un guiño una vez por visita.',
        },
    },
];

function StorageTable() {
    const { t } = useLang();
    return (
        <div className="overflow-x-auto rounded-2xl border border-sand-200">
            <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-sand-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                    <tr>
                        <th className="px-4 py-3 font-semibold">{t({ ca: 'Nom', es: 'Nombre' })}</th>
                        <th className="px-4 py-3 font-semibold">{t({ ca: 'Finalitat', es: 'Finalidad' })}</th>
                        <th className="px-4 py-3 font-semibold">{t({ ca: 'Durada', es: 'Duración' })}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-sand-200">
                    {STORAGE.map((item) => (
                        <tr key={item.key}>
                            <td className="px-4 py-3 font-mono text-xs text-brand-900">{item.key}</td>
                            <td className="px-4 py-3">{t(item.purpose)}</td>
                            <td className="px-4 py-3">{t({ ca: 'Fins que tanques la pestanya', es: 'Hasta que cierras la pestaña' })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function Cookies() {
    usePageMeta(SEO.Cookies.title, SEO.Cookies.description);

    const googlePolicy = (
        <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
            policies.google.com/technologies/cookies
        </a>
    );

    const sections = [
        {
            id: 'que-son',
            title: { ca: 'Què són les galetes', es: 'Qué son las cookies' },
            body: {
                ca: (
                    <p>
                        Les galetes (cookies) són petits fitxers que un lloc web desa al teu dispositiu. Hi ha tecnologies similars,
                        com l'emmagatzematge del navegador, que permeten guardar petites preferències.
                    </p>
                ),
                es: (
                    <p>
                        Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo. Existen tecnologías similares,
                        como el almacenamiento del navegador, que permiten guardar pequeñas preferencias.
                    </p>
                ),
            },
        },
        {
            id: 'aquesta-web',
            title: { ca: 'Galetes que fa servir aquesta web', es: 'Cookies que utiliza esta web' },
            body: {
                ca: (
                    <p>
                        Aquesta web <strong>no utilitza galetes pròpies ni galetes de tercers d'analítica o de publicitat</strong>. Les
                        tipografies, les imatges i el vídeo s'allotgen al mateix servidor de la web, sense dependre de serveis
                        externs. Per això no et demanem el consentiment en entrar-hi.
                    </p>
                ),
                es: (
                    <p>
                        Esta web <strong>no utiliza cookies propias ni cookies de terceros de analítica o de publicidad</strong>. Las
                        tipografías, las imágenes y el vídeo se alojan en el mismo servidor de la web, sin depender de servicios
                        externos. Por eso no te pedimos el consentimiento al entrar.
                    </p>
                ),
            },
        },
        {
            id: 'emmagatzematge',
            title: { ca: 'Emmagatzematge tècnic del navegador', es: 'Almacenamiento técnico del navegador' },
            body: {
                ca: (
                    <>
                        <p>
                            La mascota de la web desa algunes preferències a l'emmagatzematge de sessió del navegador (sessionStorage).
                            S'esborren automàticament en tancar la pestanya:
                        </p>
                        <StorageTable />
                        <p>Són necessàries per a una funcionalitat que tu fas servir i no requereixen consentiment.</p>
                    </>
                ),
                es: (
                    <>
                        <p>
                            La mascota de la web guarda algunas preferencias en el almacenamiento de sesión del navegador
                            (sessionStorage). Se borran automáticamente al cerrar la pestaña:
                        </p>
                        <StorageTable />
                        <p>Son necesarias para una funcionalidad que tú utilizas y no requieren consentimiento.</p>
                    </>
                ),
            },
        },
        {
            id: 'tercers',
            title: { ca: 'Continguts de tercers', es: 'Contenidos de terceros' },
            body: {
                ca: (
                    <p>
                        A la pàgina de contacte pots veure un mapa de Google Maps. El mapa només es carrega si fas clic a «Mostra el
                        mapa»; en aquell moment Google pot instal·lar les seves galetes, d'acord amb la seva política ({googlePolicy}).
                        Els enllaços a Doctoralia, WhatsApp, Google o les xarxes socials et porten a webs externes amb les seves
                        pròpies polítiques.
                    </p>
                ),
                es: (
                    <p>
                        En la página de contacto puedes ver un mapa de Google Maps. El mapa solo se carga si haces clic en «Mostrar el
                        mapa»; en ese momento Google puede instalar sus cookies, de acuerdo con su política ({googlePolicy}). Los
                        enlaces a Doctoralia, WhatsApp, Google o las redes sociales te llevan a webs externas con sus propias políticas.
                    </p>
                ),
            },
        },
        {
            id: 'gestio',
            title: { ca: 'Com gestionar-les', es: 'Cómo gestionarlas' },
            body: {
                ca: (
                    <p>
                        Pots consultar, bloquejar o eliminar les galetes i les dades emmagatzemades des de la configuració del teu
                        navegador. Si ho fas, la web continuarà funcionant amb normalitat.
                    </p>
                ),
                es: (
                    <p>
                        Puedes consultar, bloquear o eliminar las cookies y los datos almacenados desde la configuración de tu
                        navegador. Si lo haces, la web seguirá funcionando con normalidad.
                    </p>
                ),
            },
        },
    ];

    return (
        <LegalPage
            eyebrow={{ ca: 'Informació legal', es: 'Información legal' }}
            title={{ ca: 'Política de galetes', es: 'Política de cookies' }}
            intro={{
                ca: 'Quines galetes i tecnologies similars fa servir aquesta web.',
                es: 'Qué cookies y tecnologías similares utiliza esta web.',
            }}
            sections={sections}
        />
    );
}
