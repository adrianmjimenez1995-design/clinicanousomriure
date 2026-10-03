// Dades de la clínica centralitzades: si canvia un telèfon, l'horari o un text, només cal tocar-ho aquí.
// Els textos visibles van en parelles { ca, es }: català (predeterminat) i castellà.

export const clinic = {
    name: 'Clínica Nou Somriure',
    healthRegistry: 'E17806305',
    address: {
        street: 'Carrer Teulera 138, local 3',
        city: "Santa Cristina d'Aro",
        postalCode: '17246',
        full: "Carrer Teulera 138, local 3, 17246 Santa Cristina d'Aro",
    },
    phones: [
        { label: '664 107 391', href: 'tel:+34664107391' },
        { label: '872 215 679', href: 'tel:+34872215679' },
    ],
    email: 'clinicanousomriure@gmail.com',
    hours: {
        days: { ca: 'De dilluns a divendres', es: 'De lunes a viernes' },
        time: { ca: '10:00–13:30 i 15:30–19:30', es: '10:00–13:30 y 15:30–19:30' },
        sentence: {
            ca: 'De dilluns a divendres, de 10:00 a 13:30 i de 15:30 a 19:30',
            es: 'De lunes a viernes, de 10:00 a 13:30 y de 15:30 a 19:30',
        },
        saturdayLabel: { ca: 'Dissabtes', es: 'Sábados' },
        saturdayTime: { ca: 'A convenir', es: 'A convenir' },
        saturday: { ca: 'Dissabtes, a convenir', es: 'Sábados, a convenir' },
    },
    links: {
        booking: 'https://www.doctoralia.es/clinicas/clinica-nou-somriure',
        whatsapp: 'https://wa.me/34664107391',
        maps: "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Nou+Somriure+Carrer+Teulera+138+Santa+Cristina+d'Aro",
        mapEmbed: "https://www.google.com/maps?q=Carrer%20Teulera%20138%2C%2017246%20Santa%20Cristina%20d'Aro&z=16&output=embed",
        instagram: 'https://www.instagram.com/clinicanousomriure',
        facebook: 'https://www.facebook.com/Clinicanousomriure/',
        linkedin: 'https://www.linkedin.com/in/cl%C3%ADnica-dental-nou-somriure-18a54a269/',
    },
};

export const mainPhone = clinic.phones[0];

// Fotos reals de la clínica
export const clinicPhotos = {
    waitingRoom: { src: '/images/IMG_5342.jpg', alt: { ca: "Sala d'espera de la Clínica Nou Somriure", es: 'Sala de espera de la Clínica Nou Somriure' } },
    reception: { src: '/images/IMG_5335.jpg', alt: { ca: 'Taulell de recepció de la clínica', es: 'Mostrador de recepción de la clínica' } },
    surgery: { src: '/images/IMG_5324.jpg', alt: { ca: 'Gabinet dental equipat', es: 'Gabinete dental equipado' } },
    welcome: { src: '/images/IMG_5326.jpg', alt: { ca: "Zona d'acollida amb productes d'higiene dental", es: 'Zona de acogida con productos de higiene dental' } },
    corridor: { src: '/images/IMG_5330.jpg', alt: { ca: 'Accés als gabinets de la clínica', es: 'Acceso a los gabinetes de la clínica' } },
};

// Les imatges de serveis i de tecnologia són il·lustratives (generades amb IA amb la paleta de la clínica).
export const services = [
    {
        slug: 'neteja-dental',
        title: { ca: 'Neteja dental', es: 'Limpieza dental' },
        short: { ca: 'Higiene professional per mantenir dents i genives sanes.', es: 'Higiene profesional para mantener dientes y encías sanos.' },
        description: {
            ca: "Eliminem el tàrtar i la placa bacteriana on el raspall no arriba. Una neteja periòdica és la millor manera de prevenir càries i problemes de genives, i de mantenir el somriure brillant.",
            es: 'Eliminamos el sarro y la placa bacteriana donde el cepillo no llega. Una limpieza periódica es la mejor manera de prevenir caries y problemas de encías, y de mantener una sonrisa brillante.',
        },
        features: {
            ca: ["Ultrasons d'última generació", 'Poliment professional', 'Fluorització protectora'],
            es: ['Ultrasonidos de última generación', 'Pulido profesional', 'Fluorización protectora'],
        },
        image: '/images/serveis/neteja.webp',
    },
    {
        slug: 'ortodoncia',
        title: { ca: 'Ortodòncia', es: 'Ortodoncia' },
        short: { ca: 'Brackets i alineadors invisibles per a un somriure ben alineat.', es: 'Brackets y alineadores invisibles para una sonrisa bien alineada.' },
        description: {
            ca: "Corregim la posició de les dents i la mossegada amb brackets o amb alineadors transparents Invisalign. Amb l'escàner intraoral 3D prenem les mesures sense motlles i estudiem cada cas per proposar-te el tractament més còmode i eficaç, tant per a nens com per a adults.",
            es: 'Corregimos la posición de los dientes y la mordida con brackets o con alineadores transparentes Invisalign. Con el escáner intraoral 3D tomamos las medidas sin moldes y estudiamos cada caso para proponerte el tratamiento más cómodo y eficaz, tanto para niños como para adultos.',
        },
        features: {
            ca: ['Invisalign certificat', 'Escàner 3D, sense motlles', 'Brackets estètics'],
            es: ['Invisalign certificado', 'Escáner 3D, sin moldes', 'Brackets estéticos'],
        },
        image: '/images/serveis/ortodoncia.webp',
    },
    {
        slug: 'implants',
        title: { ca: 'Implants dentals', es: 'Implantes dentales' },
        short: { ca: 'Recupera les dents perdudes amb una solució fixa i duradora.', es: 'Recupera los dientes perdidos con una solución fija y duradera.' },
        description: {
            ca: "Substituïm les peces perdudes per implants de titani d'alta qualitat que fan la funció de l'arrel natural. Planifiquem cada implant amb el CBCT 3D per col·locar-lo amb precisió. El resultat és una dent fixa, estable i estètica per tornar a mastegar i somriure amb confiança.",
            es: 'Sustituimos las piezas perdidas por implantes de titanio de alta calidad que hacen la función de la raíz natural. Planificamos cada implante con el CBCT 3D para colocarlo con precisión. El resultado es un diente fijo, estable y estético para volver a masticar y sonreír con confianza.',
        },
        features: {
            ca: ['Planificació 3D amb CBCT', 'Implants de titani premium', 'Cirurgia mínimament invasiva'],
            es: ['Planificación 3D con CBCT', 'Implantes de titanio premium', 'Cirugía mínimamente invasiva'],
        },
        image: '/images/serveis/implants.webp',
    },
    {
        slug: 'endodoncia',
        title: { ca: 'Endodòncia', es: 'Endodoncia' },
        short: { ca: 'Tractament de conductes per salvar la teva dent natural.', es: 'Tratamiento de conductos para salvar tu diente natural.' },
        description: {
            ca: "Quan una càries o una infecció arriben al nervi, l'endodòncia permet conservar la dent en lloc d'extreure-la. Amb el CBCT 3D veiem l'anatomia de cada arrel, i treballem amb anestèsia local i instrumental rotatori perquè el tractament sigui ràpid i còmode.",
            es: 'Cuando una caries o una infección llegan al nervio, la endodoncia permite conservar el diente en lugar de extraerlo. Con el CBCT 3D vemos la anatomía de cada raíz, y trabajamos con anestesia local e instrumental rotatorio para que el tratamiento sea rápido y cómodo.',
        },
        features: {
            ca: ['Diagnòstic 3D amb CBCT', 'Anestèsia local', 'Instrumental rotatori'],
            es: ['Diagnóstico 3D con CBCT', 'Anestesia local', 'Instrumental rotatorio'],
        },
        image: '/images/serveis/endodoncia.webp',
    },
    {
        slug: 'protesi-removible',
        title: { ca: 'Pròtesi removible', es: 'Prótesis removible' },
        short: { ca: 'Pròtesis còmodes i naturals per tornar a mastegar bé.', es: 'Prótesis cómodas y naturales para volver a masticar bien.' },
        description: {
            ca: "Dissenyem pròtesis parcials i completes a mida per recuperar la funcionalitat i l'estètica del somriure. Cuidem l'ajust al detall perquè et sentis còmode.",
            es: 'Diseñamos prótesis parciales y completas a medida para recuperar la funcionalidad y la estética de la sonrisa. Cuidamos el ajuste al detalle para que te sientas cómodo.',
        },
        features: {
            ca: ['Disseny personalitzat', 'Materials de qualitat', 'Ajustos sense càrrec'],
            es: ['Diseño personalizado', 'Materiales de calidad', 'Ajustes sin coste'],
        },
        image: '/images/serveis/protesi.webp',
    },
    {
        slug: 'estetica-dental',
        title: { ca: 'Estètica dental', es: 'Estética dental' },
        short: { ca: 'Facetes, corones i tractaments estètics amb resultats naturals.', es: 'Carillas, coronas y tratamientos estéticos con resultados naturales.' },
        description: {
            ca: "Facetes, corones i tractaments estètics per aconseguir el somriure que sempre has volgut. Planifiquem cada cas amb disseny digital del somriure i escàner intraoral 3D perquè el resultat sigui harmònic i natural.",
            es: 'Carillas, coronas y tratamientos estéticos para conseguir la sonrisa que siempre has querido. Planificamos cada caso con diseño digital de la sonrisa y escáner intraoral 3D para que el resultado sea armónico y natural.',
        },
        features: {
            ca: ['Facetes de porcellana', 'Disseny digital del somriure', 'Resultats naturals'],
            es: ['Carillas de porcelana', 'Diseño digital de la sonrisa', 'Resultados naturales'],
        },
        image: '/images/serveis/estetica.webp',
    },
    {
        slug: 'odontopediatria',
        title: { ca: 'Odontopediatria', es: 'Odontopediatría' },
        short: { ca: 'Cura dental per als més petits, en un ambient acollidor.', es: 'Cuidado dental para los más pequeños, en un ambiente acogedor.' },
        description: {
            ca: 'Acompanyem els nens des de les primeres revisions perquè anar al dentista sigui una experiència tranquil·la i positiva. Prevenir a temps és la clau per tenir una boca sana tota la vida.',
            es: 'Acompañamos a los niños desde las primeras revisiones para que ir al dentista sea una experiencia tranquila y positiva. Prevenir a tiempo es la clave para tener una boca sana toda la vida.',
        },
        features: {
            ca: ['Tracte adaptat als nens', 'Ambient lúdic', 'Segelladors preventius'],
            es: ['Trato adaptado a los niños', 'Ambiente lúdico', 'Selladores preventivos'],
        },
        image: '/images/serveis/odontopediatria.webp',
        mascotTip: 'nens',
    },
    {
        slug: 'urgencies',
        title: { ca: 'Urgències dentals', es: 'Urgencias dentales' },
        short: { ca: 'Atenció prioritària si tens dolor, un cop o una peça trencada.', es: 'Atención prioritaria si tienes dolor, un golpe o una pieza rota.' },
        description: {
            ca: "Dolor agut, una peça fracturada o un traumatisme? Truca'ns i et donarem hora com més aviat millor per alleujar el dolor i resoldre el problema.",
            es: '¿Dolor agudo, una pieza fracturada o un traumatismo? Llámanos y te daremos cita lo antes posible para aliviar el dolor y resolver el problema.',
        },
        features: {
            ca: ['Atenció prioritària', 'Diagnòstic ràpid', 'Alleujar el dolor és el primer'],
            es: ['Atención prioritaria', 'Diagnóstico rápido', 'Aliviar el dolor es lo primero'],
        },
        image: '/images/serveis/urgencies.webp',
        mascotTip: 'urgencies',
        urgent: true,
    },
];

// Novetat: tecnologia de diagnòstic 3D incorporada a la clínica
export const technology = [
    {
        slug: 'cbct',
        badge: { ca: 'CBCT', es: 'CBCT' },
        title: { ca: 'Radiografia 3D (CBCT)', es: 'Radiografía 3D (CBCT)' },
        lead: { ca: "Veiem les dents, l'os i els maxil·lars en tres dimensions.", es: 'Vemos los dientes, el hueso y los maxilares en tres dimensiones.' },
        description: {
            ca: "El CBCT (tomografia computada de feix cònic) obté en pocs segons una imatge 3D de la boca. Ens permet fer un diagnòstic molt més precís i planificar implants, endodòncies i casos complexos al mil·límetre, sense que hagis d'anar a un altre centre.",
            es: 'El CBCT (tomografía computarizada de haz cónico) obtiene en pocos segundos una imagen 3D de la boca. Nos permite hacer un diagnóstico mucho más preciso y planificar implantes, endodoncias y casos complejos al milímetro, sin que tengas que ir a otro centro.',
        },
        features: {
            ca: ['Imatge 3D en pocs segons', "Planificació precisa d'implants", 'A la mateixa clínica, sense desplaçaments'],
            es: ['Imagen 3D en pocos segundos', 'Planificación precisa de implantes', 'En la misma clínica, sin desplazamientos'],
        },
        uses: [
            { label: { ca: 'Implants', es: 'Implantes' }, slug: 'implants' },
            { label: { ca: 'Endodòncia', es: 'Endodoncia' }, slug: 'endodoncia' },
            { label: { ca: 'Ortodòncia', es: 'Ortodoncia' }, slug: 'ortodoncia' },
        ],
        image: '/images/tecnologia/cbct.webp',
        alt: { ca: 'Reconstrucció 3D dels maxil·lars i les dents en una pantalla', es: 'Reconstrucción 3D de los maxilares y los dientes en una pantalla' },
    },
    {
        slug: 'escaner-intraoral',
        badge: { ca: 'Escàner 3D', es: 'Escáner 3D' },
        title: { ca: 'Escàner intraoral 3D', es: 'Escáner intraoral 3D' },
        lead: { ca: 'Adeu a les pastes i els motlles incòmodes.', es: 'Adiós a las pastas y los moldes incómodos.' },
        description: {
            ca: "Amb un escàner òptic obtenim un model digital 3D de la teva boca en pocs minuts. És més còmode i més ràpid que els motlles tradicionals, i et podem ensenyar a la pantalla com és el teu somriure.",
            es: 'Con un escáner óptico obtenemos un modelo digital 3D de tu boca en pocos minutos. Es más cómodo y más rápido que los moldes tradicionales, y te podemos enseñar en la pantalla cómo es tu sonrisa.',
        },
        features: {
            ca: ['Sense pastes ni motlles', 'Model digital en pocs minuts', 'Veus el teu somriure en 3D'],
            es: ['Sin pastas ni moldes', 'Modelo digital en pocos minutos', 'Ves tu sonrisa en 3D'],
        },
        uses: [
            { label: { ca: 'Ortodòncia invisible', es: 'Ortodoncia invisible' }, slug: 'ortodoncia' },
            { label: { ca: 'Estètica dental', es: 'Estética dental' }, slug: 'estetica-dental' },
            { label: { ca: 'Pròtesis', es: 'Prótesis' }, slug: 'protesi-removible' },
        ],
        image: '/images/tecnologia/escaner.webp',
        alt: { ca: 'Escàner intraoral 3D i model digital de les dents en un portàtil', es: 'Escáner intraoral 3D y modelo digital de los dientes en un portátil' },
    },
];

export const team = [
    {
        name: 'Belén Vázquez',
        role: { ca: 'Gerent', es: 'Gerente' },
        specialty: { ca: 'Fundadora i gerent de la clínica', es: 'Fundadora y gerente de la clínica' },
        bio: {
            ca: "Fa més de deu anys que em dedico a l'odontologia i sé que la meva vocació va molt més enllà de cuidar dents: m'apassiona ajudar les persones a recuperar la confiança a través del seu somriure. Així va néixer el meu somni: crear una clínica on l'atenció sigui propera, honesta i pensada per a cada persona.\n\nTinc la sort de comptar amb un equip ple d'energia, compromís i experiència. Junts compartim una idea molt clara: volem que tothom pugui accedir a una atenció odontològica de qualitat, sense que el factor econòmic sigui una barrera.",
            es: 'Hace más de diez años que me dedico a la odontología y sé que mi vocación va mucho más allá de cuidar dientes: me apasiona ayudar a las personas a recuperar la confianza a través de su sonrisa. Así nació mi sueño: crear una clínica donde la atención sea cercana, honesta y pensada para cada persona.\n\nTengo la suerte de contar con un equipo lleno de energía, compromiso y experiencia. Juntos compartimos una idea muy clara: queremos que todo el mundo pueda acceder a una atención odontológica de calidad, sin que el factor económico sea una barrera.',
        },
        image: '/images/BELN.jpg',
    },
    {
        name: 'Marta Cantenys Juanola',
        role: { ca: 'Ortodontista', es: 'Ortodoncista' },
        specialty: { ca: 'Ortodòncia fixa i invisible', es: 'Ortodoncia fija e invisible' },
        bio: {
            ca: "L'ortodòncia és l'especialitat de l'odontologia que s'encarrega d'estudiar, prevenir i corregir la posició de les dents i dels maxil·lars.\n\nEl seu objectiu és restablir l'equilibri i la funcionalitat de la boca, millorant alhora l'estètica facial i l'harmonia del somriure. A la clínica oferim tractaments adaptats a cada persona, amb la tecnologia més avançada, per aconseguir tractaments còmodes amb resultats precisos i naturals.",
            es: 'La ortodoncia es la especialidad de la odontología que se encarga de estudiar, prevenir y corregir la posición de los dientes y de los maxilares.\n\nSu objetivo es restablecer el equilibrio y la funcionalidad de la boca, mejorando a la vez la estética facial y la armonía de la sonrisa. En la clínica ofrecemos tratamientos adaptados a cada persona, con la tecnología más avanzada, para conseguir tratamientos cómodos con resultados precisos y naturales.',
        },
        image: '/images/MARTA.jpg',
    },
    {
        name: 'Joel Pelach',
        role: { ca: 'Odontòleg', es: 'Odontólogo' },
        specialty: { ca: 'Odontologia general i periodòncia', es: 'Odontología general y periodoncia' },
        bio: {
            ca: "Odontologia general: prevenció, diagnòstic i tractament dels problemes dentals més comuns, com les càries, amb neteges i restauracions.\n\nPeriodòncia: cura de la salut de les genives i de l'os que sosté les dents. Prevenim, diagnostiquem i tractem les malalties periodontals per assegurar una base sòlida per al teu somriure.",
            es: 'Odontología general: prevención, diagnóstico y tratamiento de los problemas dentales más comunes, como las caries, con limpiezas y restauraciones.\n\nPeriodoncia: cuidado de la salud de las encías y del hueso que sostiene los dientes. Prevenimos, diagnosticamos y tratamos las enfermedades periodontales para asegurar una base sólida para tu sonrisa.',
        },
        image: '/images/JOEL.jpg',
    },
    {
        name: 'Oriol Timoneda',
        role: { ca: 'Implantòleg', es: 'Implantólogo' },
        specialty: { ca: 'Implantologia', es: 'Implantología' },
        bio: {
            ca: "La implantologia permet substituir les dents perdudes per implants de titani que s'integren a l'os i fan la funció de l'arrel natural. Sobre l'implant es col·loca una corona o una pròtesi que retorna la funció i l'estètica del somriure.\n\nEstudiem cada cas de manera individual, amb l'ajuda del CBCT 3D, per planificar un tractament segur, previsible i adaptat a cada pacient.",
            es: 'La implantología permite sustituir los dientes perdidos por implantes de titanio que se integran en el hueso y hacen la función de la raíz natural. Sobre el implante se coloca una corona o una prótesis que devuelve la función y la estética de la sonrisa.\n\nEstudiamos cada caso de forma individual, con la ayuda del CBCT 3D, para planificar un tratamiento seguro, predecible y adaptado a cada paciente.',
        },
        image: '/images/ORIOL.jpg',
    },
];

const [phone1, phone2] = clinic.phones;

export const faqs = [
    {
        q: { ca: 'Com puc demanar cita?', es: '¿Cómo puedo pedir cita?' },
        a: {
            ca: `Pots reservar en línia a Doctoralia, trucar-nos al ${phone1.label} o al ${phone2.label}, o escriure'ns per WhatsApp.`,
            es: `Puedes reservar en línea en Doctoralia, llamarnos al ${phone1.label} o al ${phone2.label}, o escribirnos por WhatsApp.`,
        },
    },
    {
        q: { ca: 'Quin horari teniu?', es: '¿Qué horario tenéis?' },
        a: {
            ca: `${clinic.hours.sentence.ca}. Els dissabtes atenem amb cita a convenir.`,
            es: `${clinic.hours.sentence.es}. Los sábados atendemos con cita a convenir.`,
        },
    },
    {
        q: { ca: 'Quina tecnologia feu servir?', es: '¿Qué tecnología utilizáis?' },
        a: {
            ca: "Hem incorporat un CBCT, que fa radiografies en 3D, i un escàner intraoral 3D, que substitueix els motlles tradicionals. Ens permeten diagnosticar amb més precisió i fer les visites més còmodes.",
            es: 'Hemos incorporado un CBCT, que hace radiografías en 3D, y un escáner intraoral 3D, que sustituye los moldes tradicionales. Nos permiten diagnosticar con más precisión y que las visitas sean más cómodas.',
        },
    },
    {
        q: { ca: 'Atendeu urgències dentals?', es: '¿Atendéis urgencias dentales?' },
        a: {
            ca: "Sí. Si tens dolor, una peça trencada o has patit un cop, truca'ns i et donarem hora com més aviat millor dins del nostre horari.",
            es: 'Sí. Si tienes dolor, una pieza rota o has sufrido un golpe, llámanos y te daremos cita lo antes posible dentro de nuestro horario.',
        },
    },
    {
        q: { ca: 'Feu tractaments per a nens?', es: '¿Hacéis tratamientos para niños?' },
        a: {
            ca: 'Sí. Oferim odontopediatria: revisions, prevenció i tractaments adaptats als més petits, en un ambient tranquil i acollidor.',
            es: 'Sí. Ofrecemos odontopediatría: revisiones, prevención y tratamientos adaptados a los más pequeños, en un ambiente tranquilo y acogedor.',
        },
    },
    {
        q: { ca: 'Teniu ortodòncia invisible?', es: '¿Tenéis ortodoncia invisible?' },
        a: {
            ca: 'Sí. A més dels brackets, treballem amb alineadors transparents Invisalign. A la primera visita valorarem quina opció et convé més.',
            es: 'Sí. Además de los brackets, trabajamos con alineadores transparentes Invisalign. En la primera visita valoraremos qué opción te conviene más.',
        },
    },
    {
        q: { ca: 'On sou?', es: '¿Dónde estáis?' },
        a: {
            ca: `Som al carrer Teulera, 138 (local 3), a ${clinic.address.city} (${clinic.address.postalCode}).`,
            es: `Estamos en la calle Teulera, 138 (local 3), en ${clinic.address.city} (${clinic.address.postalCode}).`,
        },
    },
];

// Ressenyes reals de Google (valoració pública de la fitxa de Google Maps, consultada l'octubre de 2026).
// Actualitzeu la xifra de tant en tant.
export const reviews = {
    google: {
        rating: 4.5,
        count: 31,
        url: clinic.links.maps,
    },
    // Opinions concretes per mostrar a la web. Afegiu-ne només de reals, copiades tal qual i amb permís del pacient.
    // Format: { text: 'Text de la ressenya', author: 'Inicials o nom', rating: 5 }
    testimonials: [],
};

// Dades per a l'avís legal i la política de privacitat.
// IMPORTANT: substituïu els camps «PENDENT» per les dades reals del titular de la clínica.
export const legal = {
    owner: { ca: '[PENDENT: raó social o nom del titular]', es: '[PENDIENTE: razón social o nombre del titular]' },
    taxId: { ca: '[PENDENT: NIF/CIF]', es: '[PENDIENTE: NIF/CIF]' },
    mercantileRegistry: {
        ca: '[PENDENT: dades del Registre Mercantil, si és una societat]',
        es: '[PENDIENTE: datos del Registro Mercantil, si es una sociedad]',
    },
    professionalBody: {
        ca: '[PENDENT: col·legi professional i número de col·legiat dels odontòlegs]',
        es: '[PENDIENTE: colegio profesional y número de colegiado de los odontólogos]',
    },
    updated: { ca: 'octubre de 2026', es: 'octubre de 2026' },
};
