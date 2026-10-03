import React from 'react';
import useContent from '@/i18n/useContent';
import LegalPage, { LegalValue } from '@/components/site/LegalPage';
import usePageMeta from '@/hooks/use-page-meta';
import { SEO } from '@/lib/seo';

// Política de privacitat (RGPD i LOPDGDD). Els camps pendents es completen a src/lib/clinic.js → legal.
// Text base orientatiu: convé que el revisi un assessor legal.
export default function Privacitat() {
    const { clinic, legal } = useContent();
    usePageMeta(SEO.Privacitat.title, SEO.Privacitat.description);

    const email = <a href={`mailto:${clinic.email}`}>{clinic.email}</a>;
    const aepd = <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>;

    const sections = [
        {
            id: 'responsable',
            title: { ca: 'Responsable del tractament', es: 'Responsable del tratamiento' },
            body: {
                ca: (
                    <ul>
                        <li><strong>Titular:</strong> <LegalValue value={legal.owner} /> ({clinic.name})</li>
                        <li><strong>NIF:</strong> <LegalValue value={legal.taxId} /></li>
                        <li><strong>Domicili:</strong> {clinic.address.full} (Girona)</li>
                        <li><strong>Correu electrònic:</strong> {email}</li>
                        <li><strong>Telèfon:</strong> {clinic.phones[0].label}</li>
                    </ul>
                ),
                es: (
                    <ul>
                        <li><strong>Titular:</strong> <LegalValue value={legal.owner} /> ({clinic.name})</li>
                        <li><strong>NIF:</strong> <LegalValue value={legal.taxId} /></li>
                        <li><strong>Domicilio:</strong> {clinic.address.full} (Girona)</li>
                        <li><strong>Correo electrónico:</strong> {email}</li>
                        <li><strong>Teléfono:</strong> {clinic.phones[0].label}</li>
                    </ul>
                ),
            },
        },
        {
            id: 'dades',
            title: { ca: 'Quines dades tractem i per a què', es: 'Qué datos tratamos y para qué' },
            body: {
                ca: (
                    <>
                        <p>Aquesta web no té formularis i no utilitza galetes d'analítica ni de publicitat. Tractem dades personals en aquests casos:</p>
                        <ul>
                            <li>
                                <strong>Quan ens contactes</strong> per telèfon, correu electrònic o WhatsApp: el teu nom, les dades de contacte i la
                                informació que ens facilitis, per respondre la consulta i, si cal, gestionar la teva cita.
                            </li>
                            <li>
                                <strong>Com a pacient de la clínica:</strong> les dades necessàries per a l'assistència sanitària, inclosa la
                                història clínica. Aquest tractament es regeix per la informació específica que et facilitem a la clínica.
                            </li>
                            <li>
                                <strong>Quan navegues per la web:</strong> el servidor on s'allotja registra dades tècniques (com l'adreça IP i el
                                navegador) per garantir-ne la seguretat i el funcionament.
                            </li>
                        </ul>
                    </>
                ),
                es: (
                    <>
                        <p>Esta web no tiene formularios y no utiliza cookies de analítica ni de publicidad. Tratamos datos personales en estos casos:</p>
                        <ul>
                            <li>
                                <strong>Cuando nos contactas</strong> por teléfono, correo electrónico o WhatsApp: tu nombre, los datos de contacto y la
                                información que nos facilites, para responder a la consulta y, si hace falta, gestionar tu cita.
                            </li>
                            <li>
                                <strong>Como paciente de la clínica:</strong> los datos necesarios para la asistencia sanitaria, incluida la
                                historia clínica. Este tratamiento se rige por la información específica que te facilitamos en la clínica.
                            </li>
                            <li>
                                <strong>Cuando navegas por la web:</strong> el servidor donde se aloja registra datos técnicos (como la dirección IP
                                y el navegador) para garantizar su seguridad y funcionamiento.
                            </li>
                        </ul>
                    </>
                ),
            },
        },
        {
            id: 'base',
            title: { ca: 'Base legal', es: 'Base legal' },
            body: {
                ca: (
                    <ul>
                        <li>El teu consentiment, quan ens contactes per iniciativa pròpia.</li>
                        <li>L'aplicació de mesures precontractuals i la prestació de l'assistència sanitària que sol·licites.</li>
                        <li>El compliment d'obligacions legals, com les que estableix la normativa sanitària.</li>
                        <li>L'interès legítim de mantenir la seguretat de la web.</li>
                    </ul>
                ),
                es: (
                    <ul>
                        <li>Tu consentimiento, cuando nos contactas por iniciativa propia.</li>
                        <li>La aplicación de medidas precontractuales y la prestación de la asistencia sanitaria que solicitas.</li>
                        <li>El cumplimiento de obligaciones legales, como las que establece la normativa sanitaria.</li>
                        <li>El interés legítimo en mantener la seguridad de la web.</li>
                    </ul>
                ),
            },
        },
        {
            id: 'conservacio',
            title: { ca: 'Conservació de les dades', es: 'Conservación de los datos' },
            body: {
                ca: (
                    <p>
                        Conservem les dades el temps necessari per atendre la teva consulta o prestar-te el servei i, després, durant
                        els terminis que estableix la normativa aplicable (en el cas de la història clínica, els que fixa la normativa
                        sanitària).
                    </p>
                ),
                es: (
                    <p>
                        Conservamos los datos el tiempo necesario para atender tu consulta o prestarte el servicio y, después, durante
                        los plazos que establece la normativa aplicable (en el caso de la historia clínica, los que fija la normativa
                        sanitaria).
                    </p>
                ),
            },
        },
        {
            id: 'destinataris',
            title: { ca: 'Destinataris', es: 'Destinatarios' },
            body: {
                ca: (
                    <p>
                        No cedim les teves dades a tercers, excepte quan hi ha una obligació legal. Comptem amb proveïdors que ens
                        presten serveis amb les garanties adequades, com l'empresa d'allotjament de la web. Si fas servir WhatsApp o
                        Google Maps, aquestes empreses tracten les dades d'acord amb les seves pròpies polítiques de
                        privacitat.
                    </p>
                ),
                es: (
                    <p>
                        No cedemos tus datos a terceros, salvo cuando existe una obligación legal. Contamos con proveedores que nos
                        prestan servicios con las garantías adecuadas, como la empresa de alojamiento de la web. Si utilizas WhatsApp o
                        Google Maps, estas empresas tratan los datos de acuerdo con sus propias políticas de privacidad.
                    </p>
                ),
            },
        },
        {
            id: 'drets',
            title: { ca: 'Els teus drets', es: 'Tus derechos' },
            body: {
                ca: (
                    <p>
                        Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat
                        enviant un correu a {email} o per escrit al domicili de la clínica, indicant el dret que vols exercir i
                        acreditant la teva identitat. Si consideres que no hem atès correctament la teva sol·licitud, pots presentar
                        una reclamació davant l'Agència Espanyola de Protecció de Dades ({aepd}).
                    </p>
                ),
                es: (
                    <p>
                        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
                        portabilidad enviando un correo a {email} o por escrito al domicilio de la clínica, indicando el derecho que
                        quieres ejercer y acreditando tu identidad. Si consideras que no hemos atendido correctamente tu solicitud,
                        puedes presentar una reclamación ante la Agencia Española de Protección de Datos ({aepd}).
                    </p>
                ),
            },
        },
        {
            id: 'seguretat',
            title: { ca: 'Seguretat', es: 'Seguridad' },
            body: {
                ca: (
                    <p>
                        Apliquem les mesures tècniques i organitzatives adequades per protegir les teves dades i evitar-ne la
                        pèrdua, l'alteració o l'accés no autoritzat.
                    </p>
                ),
                es: (
                    <p>
                        Aplicamos las medidas técnicas y organizativas adecuadas para proteger tus datos y evitar su pérdida,
                        alteración o acceso no autorizado.
                    </p>
                ),
            },
        },
    ];

    return (
        <LegalPage
            eyebrow={{ ca: 'Informació legal', es: 'Información legal' }}
            title={{ ca: 'Política de privacitat', es: 'Política de privacidad' }}
            intro={{
                ca: 'Com tractem les teves dades personals i quins drets tens.',
                es: 'Cómo tratamos tus datos personales y qué derechos tienes.',
            }}
            sections={sections}
        />
    );
}
