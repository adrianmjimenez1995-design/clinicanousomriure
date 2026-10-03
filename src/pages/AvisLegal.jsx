import React from 'react';
import useContent from '@/i18n/useContent';
import LegalPage, { LegalValue } from '@/components/site/LegalPage';
import usePageMeta from '@/hooks/use-page-meta';
import { SEO } from '@/lib/seo';

// Avís legal (LSSI-CE). Els camps pendents es completen a src/lib/clinic.js → legal.
// Text base orientatiu: convé que el revisi un assessor legal.
export default function AvisLegal() {
    const { clinic, legal } = useContent();
    usePageMeta(SEO.AvisLegal.title, SEO.AvisLegal.description);

    const phones = clinic.phones.map((p) => p.label).join(' · ');

    const sections = [
        {
            id: 'titular',
            title: { ca: 'Dades identificatives', es: 'Datos identificativos' },
            body: {
                ca: (
                    <>
                        <p>
                            En compliment de l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç
                            electrònic (LSSI-CE), t'informem de les dades del titular d'aquest lloc web:
                        </p>
                        <ul>
                            <li><strong>Titular:</strong> <LegalValue value={legal.owner} /></li>
                            <li><strong>NIF:</strong> <LegalValue value={legal.taxId} /></li>
                            <li><strong>Nom comercial:</strong> {clinic.name}</li>
                            <li><strong>Domicili:</strong> {clinic.address.full} (Girona)</li>
                            <li><strong>Telèfons:</strong> {phones}</li>
                            <li><strong>Correu electrònic:</strong> <a href={`mailto:${clinic.email}`}>{clinic.email}</a></li>
                            <li><strong>Registre sanitari:</strong> {clinic.healthRegistry}</li>
                            <li><strong>Dades registrals:</strong> <LegalValue value={legal.mercantileRegistry} /></li>
                            <li><strong>Professió regulada:</strong> odontologia. <LegalValue value={legal.professionalBody} /></li>
                        </ul>
                    </>
                ),
                es: (
                    <>
                        <p>
                            En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de
                            comercio electrónico (LSSI-CE), te informamos de los datos del titular de este sitio web:
                        </p>
                        <ul>
                            <li><strong>Titular:</strong> <LegalValue value={legal.owner} /></li>
                            <li><strong>NIF:</strong> <LegalValue value={legal.taxId} /></li>
                            <li><strong>Nombre comercial:</strong> {clinic.name}</li>
                            <li><strong>Domicilio:</strong> {clinic.address.full} (Girona)</li>
                            <li><strong>Teléfonos:</strong> {phones}</li>
                            <li><strong>Correo electrónico:</strong> <a href={`mailto:${clinic.email}`}>{clinic.email}</a></li>
                            <li><strong>Registro sanitario:</strong> {clinic.healthRegistry}</li>
                            <li><strong>Datos registrales:</strong> <LegalValue value={legal.mercantileRegistry} /></li>
                            <li><strong>Profesión regulada:</strong> odontología. <LegalValue value={legal.professionalBody} /></li>
                        </ul>
                    </>
                ),
            },
        },
        {
            id: 'us',
            title: { ca: "Objecte i condicions d'ús", es: 'Objeto y condiciones de uso' },
            body: {
                ca: (
                    <p>
                        Aquest lloc web té per objecte informar sobre la Clínica Nou Somriure, els seus serveis i les maneres de
                        contactar-hi. L'accés i l'ús de la web impliquen l'acceptació d'aquestes condicions. L'usuari es compromet a
                        fer-ne un ús adequat, d'acord amb la llei i la bona fe, i a no utilitzar-la per a activitats il·lícites o que
                        puguin danyar el lloc web o tercers.
                    </p>
                ),
                es: (
                    <p>
                        Este sitio web tiene por objeto informar sobre la Clínica Nou Somriure, sus servicios y las formas de
                        contactar con ella. El acceso y el uso de la web implican la aceptación de estas condiciones. El usuario se
                        compromete a hacer un uso adecuado, de acuerdo con la ley y la buena fe, y a no utilizarla para actividades
                        ilícitas o que puedan dañar el sitio web o a terceros.
                    </p>
                ),
            },
        },
        {
            id: 'sanitaria',
            title: { ca: 'Informació sanitària', es: 'Información sanitaria' },
            body: {
                ca: (
                    <p>
                        Els continguts d'aquesta web tenen una finalitat informativa i no substitueixen la valoració ni el diagnòstic
                        d'un professional. Cada tractament s'indica de manera personalitzada després d'una visita, i els resultats
                        poden variar segons el cas. Algunes imatges dels serveis i de la tecnologia, així com la mascota de la clínica,
                        són il·lustratives i s'han creat amb eines d'intel·ligència artificial; les fotografies de les instal·lacions i
                        de l'equip són reals.
                    </p>
                ),
                es: (
                    <p>
                        Los contenidos de esta web tienen una finalidad informativa y no sustituyen la valoración ni el diagnóstico de
                        un profesional. Cada tratamiento se indica de forma personalizada tras una visita, y los resultados pueden
                        variar según el caso. Algunas imágenes de los servicios y de la tecnología, así como la mascota de la clínica,
                        son ilustrativas y se han creado con herramientas de inteligencia artificial; las fotografías de las
                        instalaciones y del equipo son reales.
                    </p>
                ),
            },
        },
        {
            id: 'propietat',
            title: { ca: 'Propietat intel·lectual i industrial', es: 'Propiedad intelectual e industrial' },
            body: {
                ca: (
                    <p>
                        Els continguts d'aquesta web (textos, fotografies, logotip, mascota, disseny i codi) són titularitat de la
                        clínica o s'utilitzen amb autorització. No se'n permet la reproducció, distribució o transformació, totalment
                        o parcialment, sense l'autorització expressa del titular.
                    </p>
                ),
                es: (
                    <p>
                        Los contenidos de esta web (textos, fotografías, logotipo, mascota, diseño y código) son titularidad de la
                        clínica o se utilizan con autorización. No se permite su reproducción, distribución o transformación, total o
                        parcial, sin la autorización expresa del titular.
                    </p>
                ),
            },
        },
        {
            id: 'enllacos',
            title: { ca: 'Enllaços a altres webs', es: 'Enlaces a otras webs' },
            body: {
                ca: (
                    <p>
                        La web conté enllaços a serveis de tercers, com WhatsApp, Google Maps, Doctoralia o les xarxes socials. La
                        clínica no es fa responsable dels continguts ni de les polítiques d'aquests serveis, que es regeixen per les
                        seves pròpies condicions.
                    </p>
                ),
                es: (
                    <p>
                        La web contiene enlaces a servicios de terceros, como WhatsApp, Google Maps, Doctoralia o las redes sociales.
                        La clínica no se hace responsable de los contenidos ni de las políticas de estos servicios, que se rigen por
                        sus propias condiciones.
                    </p>
                ),
            },
        },
        {
            id: 'responsabilitat',
            title: { ca: 'Responsabilitat', es: 'Responsabilidad' },
            body: {
                ca: (
                    <p>
                        La clínica treballa perquè la informació de la web sigui correcta i estigui actualitzada, però no pot
                        garantir l'absència d'errors ni la disponibilitat ininterrompuda del lloc web, i no es fa responsable dels
                        danys derivats d'un ús indegut.
                    </p>
                ),
                es: (
                    <p>
                        La clínica trabaja para que la información de la web sea correcta y esté actualizada, pero no puede
                        garantizar la ausencia de errores ni la disponibilidad ininterrumpida del sitio web, y no se hace responsable
                        de los daños derivados de un uso indebido.
                    </p>
                ),
            },
        },
        {
            id: 'legislacio',
            title: { ca: 'Legislació aplicable', es: 'Legislación aplicable' },
            body: {
                ca: (
                    <p>
                        Aquestes condicions es regeixen per la legislació espanyola. Per a qualsevol controvèrsia, les parts se
                        sotmeten als jutjats i tribunals que corresponguin d'acord amb la normativa vigent, inclosa la de protecció
                        de les persones consumidores.
                    </p>
                ),
                es: (
                    <p>
                        Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a
                        los juzgados y tribunales que correspondan de acuerdo con la normativa vigente, incluida la de protección de
                        las personas consumidoras.
                    </p>
                ),
            },
        },
    ];

    return (
        <LegalPage
            eyebrow={{ ca: 'Informació legal', es: 'Información legal' }}
            title={{ ca: 'Avís legal', es: 'Aviso legal' }}
            intro={{
                ca: "Informació sobre el titular d'aquesta web i les condicions d'ús.",
                es: 'Información sobre el titular de esta web y las condiciones de uso.',
            }}
            sections={sections}
        />
    );
}
