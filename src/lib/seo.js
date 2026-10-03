// Títol i descripció de cada pàgina (per a Google i per a la vista prèvia en compartir l'enllaç).
// Els fan servir tant les pàgines (en navegar) com el generador d'HTML estàtic (scripts/prerender.mjs).
import { clinic } from './clinic';

export const SITE_URL = 'https://www.clinicanousomriure.com';

const [phone] = clinic.phones;

export const SEO = {
    Home: {
        title: {
            ca: "Clínica Nou Somriure | Dentista a Santa Cristina d'Aro",
            es: "Clínica Nou Somriure | Dentista en Santa Cristina d'Aro",
        },
        description: {
            ca: `Clínica dental a Santa Cristina d'Aro amb diagnòstic 3D (CBCT i escàner intraoral). Odontologia general, ortodòncia invisible, implants, endodòncia, estètica dental i odontopediatria. Demana cita al ${phone.label}.`,
            es: `Clínica dental en Santa Cristina d'Aro con diagnóstico 3D (CBCT y escáner intraoral). Odontología general, ortodoncia invisible, implantes, endodoncia, estética dental y odontopediatría. Pide cita en el ${phone.label}.`,
        },
    },
    Servicios: {
        title: {
            ca: "Tractaments dentals | Clínica Nou Somriure, Santa Cristina d'Aro",
            es: "Tratamientos dentales | Clínica Nou Somriure, Santa Cristina d'Aro",
        },
        description: {
            ca: "Neteja dental, ortodòncia i Invisalign, implants, endodòncia, pròtesis, estètica dental, odontopediatria i urgències a Santa Cristina d'Aro. Diagnòstic 3D amb CBCT i escàner intraoral.",
            es: "Limpieza dental, ortodoncia e Invisalign, implantes, endodoncia, prótesis, estética dental, odontopediatría y urgencias en Santa Cristina d'Aro. Diagnóstico 3D con CBCT y escáner intraoral.",
        },
    },
    Equip: {
        title: { ca: 'El nostre equip | Clínica Nou Somriure', es: 'Nuestro equipo | Clínica Nou Somriure' },
        description: {
            ca: "Coneix l'equip de la Clínica Nou Somriure: ortodòncia, implantologia, odontologia general i periodòncia a Santa Cristina d'Aro.",
            es: "Conoce al equipo de la Clínica Nou Somriure: ortodoncia, implantología, odontología general y periodoncia en Santa Cristina d'Aro.",
        },
    },
    Contacto: {
        title: { ca: 'Contacte i com arribar-hi | Clínica Nou Somriure', es: 'Contacto y cómo llegar | Clínica Nou Somriure' },
        description: {
            ca: `Truca'ns al ${phone.label}, escriu-nos per WhatsApp o visita'ns al ${clinic.address.full}.`,
            es: `Llámanos al ${phone.label}, escríbenos por WhatsApp o visítanos en ${clinic.address.full}.`,
        },
    },
    AvisLegal: {
        title: { ca: 'Avís legal | Clínica Nou Somriure', es: 'Aviso legal | Clínica Nou Somriure' },
        description: {
            ca: "Avís legal i condicions d'ús del lloc web de la Clínica Nou Somriure, a Santa Cristina d'Aro.",
            es: "Aviso legal y condiciones de uso del sitio web de la Clínica Nou Somriure, en Santa Cristina d'Aro.",
        },
    },
    Privacitat: {
        title: { ca: 'Política de privacitat | Clínica Nou Somriure', es: 'Política de privacidad | Clínica Nou Somriure' },
        description: {
            ca: 'Com tracta les dades personals la Clínica Nou Somriure i com pots exercir els teus drets.',
            es: 'Cómo trata los datos personales la Clínica Nou Somriure y cómo puedes ejercer tus derechos.',
        },
    },
    Cookies: {
        title: { ca: 'Política de galetes | Clínica Nou Somriure', es: 'Política de cookies | Clínica Nou Somriure' },
        description: {
            ca: 'Quines galetes i tecnologies similars fa servir la web de la Clínica Nou Somriure.',
            es: 'Qué cookies y tecnologías similares utiliza la web de la Clínica Nou Somriure.',
        },
    },
};

// Ruta pública de cada pàgina (sense prefix d'idioma)
export const PAGE_PATHS = {
    Home: '/',
    Servicios: '/Servicios',
    Equip: '/Equip',
    Contacto: '/Contacto',
    AvisLegal: '/AvisLegal',
    Privacitat: '/Privacitat',
    Cookies: '/Cookies',
};
