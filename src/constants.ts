
import { Book, Translations } from './types';

export const BOOKS: Book[] = [
  {
    id: 'mariategui',
    title: '7 Essais de interprétation de la réalité péruvienne',
    author: 'José Carlos Mariátegui',
    year: '1928',
    category: 'Philosophie',
    image: 'https://lh3.googleusercontent.com/d/1pMY_RkDbwme__IBaT5BrxEpN6t8-DTy5',
    price: 22,
    description: {
      fr: 'Une œuvre monumentale qui analyse la structure économique, sociale et culturelle du Pérou moderne à travers un prisme marxiste original.',
      es: 'Obra fundamental que analiza la estructura económica, social y cultural del Perú moderno a través de un prisma marxista original.'
    }
  },
  {
    id: 'vasconcelos',
    title: 'La Race Cosmique',
    author: 'José Vasconcelos',
    year: '1925',
    category: 'Philosophie',
    image: 'https://lh3.googleusercontent.com/d/1-OKPMzzchtUhNP6gvAhrmciZ4HcO7FA3',
    price: 18,
    description: {
      fr: "Un essai visionnaire proposant l'émergence d'une cinquième race en Amérique latine, fusion de toutes les cultures du monde.",
      es: 'Un ensayo visionario que propone el surgimiento de una quinta raza en América Latina, fusión de todas las culturas del mundo.'
    }
  },
  {
    id: 'prada',
    title: 'Pages Libres',
    author: 'Manuel González Prada',
    year: '1894',
    category: 'Philosophie',
    image: 'https://lh3.googleusercontent.com/d/1SkVOx_jA5QI3y8_RhFgzMJjjsch2z3gv',
    price: 20,
    description: {
      fr: "Un recueil d'essais critiques et radicaux qui a profondément influencé la pensée sociale et politique en Amérique latine.",
      es: 'Una colección de ensayos críticos y radicales que influyó profundamente en el pensamiento social y político en América Latina.'
    }
  },
  {
    id: 'mio-cid',
    title: 'Le Chant de mon Cid (Cantar de Mio Cid)',
    author: 'Anonyme',
    year: 'XIIe siècle',
    category: 'Fiction',
    image: 'https://lh3.googleusercontent.com/d/1KQJ34GxlabNsKrEnOiSdRavx5JAHF0B_',
    price: 25,
    description: {
      fr: "Le plus ancien monument de la littérature espagnole, contant les exploits de Rodrigo Díaz de Vivar, héros de la Reconquista.",
      es: 'El monumento más antiguo de la literatura española, que narra las hazañas de Rodrigo Díaz de Vivar, héroe de la Reconquista.'
    }
  },
  {
    id: 'periquillo',
    title: 'El Periquillo Sarniento',
    author: 'José Joaquín Fernández de Lizardi',
    year: '1816',
    category: 'Fiction',
    image: 'https://lh3.googleusercontent.com/d/1WLYGE07_l3q22GVr3b0EZGmsUYRqlqxl', // Nouveau format de lien pour éviter les erreurs d'affichage
    price: 24,
    description: {
      fr: "Considéré comme le premier roman d'Amérique latine, cette satire picaresque dépeint avec humour et amertume la société coloniale mexicaine.",
      es: 'Considerada la primera novela de América Latina, esta sátira picaresca retrata con humor y amargura la sociedad colonial mexicana.'
    }
  },
  {
    id: 'isaacs',
    title: 'Maria',
    author: 'Jorge Isaacs',
    year: '1867',
    category: 'Fiction',
    image: 'https://lh3.googleusercontent.com/d/1At5-pxaZSs4yEb6vr0_byKVemNwKGWW1',
    price: 19,
    description: {
      fr: "Le chef-d'œuvre du romantisme latino-américain, une histoire d'amour tragique dans la vallée du Cauca en Colombie.",
      es: 'La obra maestra del romanticismo latinoamericano, una historia de amor trágica en el valle del Cauca en Colombia.'
    }
  },
  {
    id: 'tradiciones',
    title: 'Tradiciones Peruanas',
    author: 'Ricardo Palma',
    year: '1872',
    category: 'Histoire',
    image: 'https://lh3.googleusercontent.com/d/1vUwYPIRpTpyey3kJmHZ_K7UB1jCLYh2E',
    price: 28,
    description: {
      fr: "Une chronique savoureuse de l'histoire du Pérou, mêlant anecdotes réelles, légendes populaires et humour créole.",
      es: 'Una crónica sabrosa de la historia del Perú, que mezcla anécdotas reales, leyendas populares y humor criollo.'
    }
  },
  {
    id: 'garcilaso',
    title: 'Commentaires Royaux des Incas',
    author: 'Inca Garcilaso de la Vega',
    year: '1609',
    category: 'Histoire',
    image: 'https://lh3.googleusercontent.com/d/1F_84VyG5iRyHuw_rCcMKDinOxXK-i0Cd',
    price: 32,
    description: {
      fr: "Le premier grand ouvrage d'histoire écrit par un métis américain, relatant la grandeur et la chute de l'empire Inca.",
      es: 'La primera gran obra de historia escrita por un mestizo americano, relatando la grandeza y caída del imperio Inca.'
    }
  },
  {
    id: 'bernal',
    title: 'Histoire de la Conquête du Mexique',
    author: 'Bernal Díaz del Castillo',
    year: '1632',
    category: 'Histoire',
    image: 'https://lh3.googleusercontent.com/d/1YEY74IJEYEM7Jqw7QVFRcdB_k8ACvZmd',
    price: 30,
    description: {
      fr: "Le récit épique et direct d'un soldat ayant participé à la conquête de l'empire Aztèque aux côtés de Cortés.",
      es: 'El relato épico y directo de un soldado que participó en la conquista del imperio Azteca junto a Cortés.'
    }
  }
];

export const UI_TEXT: Translations = {
  heroTitle: {
    fr: "Éditions Guaicaipuro",
    es: "Ediciones Guaicaipuro"
  },
  heroSubtitle: {
    fr: "Maison d'édition indépendante spécialisée dans la littérature hispanophone et la transmission culturelle.",
    es: "Editorial independiente especializada en literatura hispanohablante y transmisión cultural."
  },
  ourCatalog: {
    fr: "Notre Catalogue",
    es: "Nuestro Catálogo"
  },
  aiInsight: {
    fr: "Analyse Littéraire par IA",
    es: "Análisis Literario por IA"
  },
  aiPrompt: {
    fr: "Cliquez pour obtenir une analyse profonde de cette œuvre...",
    es: "Haga clic para obtener un análisis profundo de esta obra..."
  },
  aboutUs: {
    fr: "À propos de nous",
    es: "Sobre nosotros"
  },
  contact: {
    fr: "Contact",
    es: "Contacto"
  },
  footerText: {
    fr: "Préserver l'héritage intellectuel du monde hispanique.",
    es: "Preservando el legado intelectual del mundo hispánico."
  },
  newsletterTitle: {
    fr: "Newsletter",
    es: "Boletín"
  },
  newsletterDescription: {
    fr: "Parutions, jeux-concours, rencontres et dédicaces, ne manquez aucune actualité des Éditions Guaicaipuro en vous inscrivant à notre newsletter!",
    es: "Novedades, concursos, encuentros y firmas, ¡no se pierda ninguna noticia de Ediciones Guaicaipuro suscribiéndose a nuestro boletín!"
  },
  teacherQuestion: {
    fr: "Vous êtes enseignant ?",
    es: "¿Es usted profesor?"
  },
  teacherLink: {
    fr: "Retrouvez votre newsletter dédiée ici.",
    es: "Encuentre aquí su boletín dedicado."
  },
  emailPlaceholder: {
    fr: "Votre adresse e-mail",
    es: "Su dirección de correo electrónico"
  },
  subscribeButton: {
    fr: "S'ABONNER",
    es: "SUSCRIBIRSE"
  },
  consentText: {
    fr: "En cliquant sur S'ABONNER, vous consentez au traitement de vos données personnelles afin de recevoir les newsletters sélectionnées dont vous pouvez vous désabonner à tout moment.",
    es: "Al hacer clic en SUSCRIBIRSE, usted consiente el tratamiento de sus datos personales para recibir los boletines seleccionados de los cuales puede darse de baja en cualquier momento."
  },
  learnMore: {
    fr: "En savoir plus.",
    es: "Leer más."
  },
  detailedNewsletterTitle: {
    fr: "Newsletter",
    es: "Boletín"
  },
  detailedNewsletterDesc: {
    fr: "En remplissant ce formulaire, vous nous aidez à mieux vous connaître. Vous recevrez ainsi nos dernières actualités, nos programmes de parutions et nos suggestions en fonction de vos goûts de lecture.",
    es: "Al completar este formulario, nos ayuda a conocerlo mejor. Recibirá nuestras últimas noticias, nuestros programas de publicación y nuestras sugerencias basadas en sus gustos de lectura."
  },
  civility: {
    fr: "Civilité",
    es: "Tratamiento"
  },
  madame: {
    fr: "Madame",
    es: "Señora"
  },
  monsieur: {
    fr: "Monsieur",
    es: "Señor"
  },
  firstName: {
    fr: "Prénom",
    es: "Nombre"
  },
  lastName: {
    fr: "Nom",
    es: "Apellido"
  },
  universesTitle: {
    fr: "Sélectionnez vos univers littéraires favoris pour recevoir nos newsletters dédiées :",
    es: "Seleccione sus universos literarios favoritos para recibir nuestros boletines dedicados:"
  },
  universeLiterature: {
    fr: "Littérature",
    es: "Literatura"
  },
  universeLifestyle: {
    fr: "Art de vivre (Cuisines & vins, Voyages, Loisirs créatifs, Nature & Jardins)",
    es: "Estilo de vida (Cocina y vinos, Viajes, Manualidades, Naturaleza y Jardines)"
  },
  universeHealth: {
    fr: "Santé & développement personnel",
    es: "Salud y desarrollo personal"
  },
  universeHumanSciences: {
    fr: "Sciences humaines et Histoire",
    es: "Ciencias humanas e Historia"
  },
  universeEssays: {
    fr: "Essais et documents",
    es: "Ensayos y documentos"
  },
  universeArts: {
    fr: "Arts",
    es: "Artes"
  },
  regionLabel: {
    fr: "Région",
    es: "Región"
  },
  regionPlaceholder: {
    fr: "Sélectionnez votre région",
    es: "Seleccione su región"
  },
  subscriptionsTitle: {
    fr: "Vos abonnements :",
    es: "Sus suscripciones:"
  },
  subGuaicaipuro: {
    fr: "Newsletter Guaicaipuro",
    es: "Boletín Guaicaipuro"
  },
  subInterested: {
    fr: "Je suis également intéressé(e) par la newsletter de Guaicaipuro",
    es: "También estoy interesado(a) en el boletín de Guaicaipuro"
  },
  yes: {
    fr: "oui",
    es: "sí"
  },
  no: {
    fr: "non",
    es: "no"
  },
  validateButton: {
    fr: "Valider",
    es: "Validar"
  },
  consentValidate: {
    fr: "En cliquant sur VALIDER, vous consentez au traitement de vos données personnelles afin de recevoir les newsletters sélectionnées dont vous pouvez vous désabonner à tout moment.",
    es: "Al hacer clic en VALIDAR, usted consiente el tratamiento de sus datos personales para recibir los boletines seleccionados de los cuales puede darse de baja en cualquier momento."
  },
  catAll: {
    fr: "Tous",
    es: "Todos"
  },
  catPhilosophy: {
    fr: "Philosophie",
    es: "Filosofía"
  },
  catFiction: {
    fr: "Fiction",
    es: "Ficción"
  },
  catHistory: {
    fr: "Histoire",
    es: "Historia"
  },
  menuManifesto: {
    fr: "Manifeste",
    es: "Manifiesto"
  },
  menuTitle: {
    fr: "Menu",
    es: "Menú"
  },
  legalPrivacyPolicy: {
    fr: "Politique de confidentialité",
    es: "Política de privacidad"
  },
  legalTermsOfService: {
    fr: "Conditions d'utilisation",
    es: "Términos de servicio"
  },
  legalShipping: {
    fr: "Livraison",
    es: "Envío"
  },
  designBy: {
    fr: "Conception par",
    es: "Diseño por"
  },
  legalTitle: {
    fr: "Légal",
    es: "Legal"
  },
  regionIDF: {
    fr: "Île-de-France",
    es: "Isla de Francia"
  },
  regionARA: {
    fr: "Auvergne-Rhône-Alpes",
    es: "Auvernia-Ródano-Alpes"
  },
  regionPACA: {
    fr: "Provence-Alpes-Côte d'Azur",
    es: "Provenza-Alpes-Costa Azul"
  },
  regionOC: {
    fr: "Occitanie",
    es: "Occitania"
  },
  regionNA: {
    fr: "Nouvelle-Aquitaine",
    es: "Nueva Aquitania"
  },
  regionOther: {
    fr: "Autre / International",
    es: "Otro / Internacional"
  },
  subscribeNow: {
    fr: "S'inscrire maintenant",
    es: "Registrarse ahora"
  },
  maybeLater: {
    fr: "Peut-être plus tard",
    es: "Tal vez más tarde"
  },
  newsletterSuccess: {
    fr: "Merci pour votre inscription !",
    es: "¡Gracias por registrarse!"
  },
  newsletterSuccessDesc: {
    fr: "Vous faites désormais partie de notre cercle de lecteurs privilégiés. Un e-mail de confirmation vous a été envoyé.",
    es: "Ahora forma parte de nuestro círculo de lectores privilegiados. Se le ha enviado un correo electrónico de confirmación."
  },
  backToHome: {
    fr: "Retour à l'accueil",
    es: "Volver al inicio"
  },
  back: {
    fr: "Retour",
    es: "Volver"
  },
  newsletterCommunity: {
    fr: "Rejoignez plus de 10 000 passionnés de littérature hispanique.",
    es: "Únase a más de 10.000 entusiastas de la literatura hispana."
  },
  cookieConsentTitle: {
    fr: "Gestion des cookies",
    es: "Gestión de cookies"
  },
  cookieConsentText: {
    fr: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. Certains sont nécessaires au fonctionnement du site, d'autres nous aident à comprendre comment vous l'utilisez.",
    es: "Utilizamos cookies para mejorar su experiencia en nuestro sitio. Algunas son necesarias para el funcionamiento del sitio, otras nos ayudan a entender cómo lo utiliza."
  },
  cookieAccept: {
    fr: "Accepter tout",
    es: "Aceptar todo"
  },
  cookieDecline: {
    fr: "Refuser",
    es: "Rechazar"
  },
  aboutUsTitle: {
    fr: "À propos des Éditions Guaicaipuro",
    es: "Sobre Ediciones Guaicaipuro"
  },
  aboutUsSubtitle: {
    fr: "Une maison d'édition au service de la transmission et de l'excellence littéraire.",
    es: "Una editorial al servicio de la transmisión y la excelencia literaria."
  },
  aboutUsHistoryTitle: {
    fr: "Notre Histoire",
    es: "Nuestra Historia"
  },
  aboutUsHistoryText: {
    fr: "Fondées par passion pour les lettres hispaniques, les Éditions Guaicaipuro sont nées de la volonté de créer un pont culturel entre l'Europe et l'Amérique latine. Notre nom rend hommage au chef indigène vénézuélien Guaicaipuro, symbole de résistance et de dignité.",
    es: "Fundada por pasión por las letras hispánicas, Ediciones Guaicaipuro nació del deseo de crear un puente cultural entre Europa y América Latina. Nuestro nombre rinde homenaje al jefe indígena venezolano Guaicaipuro, símbolo de resistencia y dignidad."
  },
  aboutUsMissionTitle: {
    fr: "Notre Mission",
    es: "Nuestra Misión"
  },
  aboutUsMissionText: {
    fr: "Nous nous consacrons à la redécouverte des classiques oubliés et à la promotion des voix contemporaines qui portent l'âme de notre continent. Chaque livre est conçu comme un objet d'art, alliant rigueur éditoriale et élégance graphique.",
    es: "Nos dedicamos al redescubrimiento de clásicos olvidados y a la promoción de voces contemporáneas que llevan el alma de nuestro continente. Cada libro está diseñado como un objeto de arte, combinando rigor editorial y elegancia gráfica."
  },
  aboutUsValuesTitle: {
    fr: "Nos Valeurs",
    es: "Nuestros Valores"
  },
  aboutUsValuesText: {
    fr: "Excellence, Transmission, Indépendance. Nous croyons que la culture est une nécessité de l'esprit, pas un luxe.",
    es: "Excelencia, Transmisión, Independencia. Creemos que la cultura es una necesidad del espíritu, no un lujo."
  },
  contactTitle: {
    fr: "Contactez-nous",
    es: "Contáctenos"
  },
  contactSubtitle: {
    fr: "Une question, un manuscrit ou une demande de partenariat ? Notre équipe est à votre écoute.",
    es: "¿Una pregunta, un manuscrito o una solicitud de asociación? Nuestro equipo está a su disposición."
  },
  contactEmailTitle: {
    fr: "E-mail",
    es: "Correo electrónico"
  },
  contactSocialTitle: {
    fr: "Réseaux Sociaux",
    es: "Redes Sociales"
  },
  contactAddressTitle: {
    fr: "Siège Social",
    es: "Sede Social"
  },
  contactAddressText: {
    fr: "Avignon, France\n74 Rue Louis Pasteur\nSur rendez-vous uniquement",
    es: "Aviñón, Francia\n74 Rue Louis Pasteur\nSolo con cita previa"
  },
  contactFormTitle: {
    fr: "Envoyez-nous un message",
    es: "Envíenos un mensaje"
  },
  contactFormName: {
    fr: "Nom complet",
    es: "Nombre completo"
  },
  contactFormSubject: {
    fr: "Sujet",
    es: "Asunto"
  },
  contactFormMessage: {
    fr: "Message",
    es: "Mensaje"
  },
  contactFormSend: {
    fr: "Envoyer le message",
    es: "Enviar mensaje"
  },
  sales: {
    fr: "Boutique",
    es: "Tienda"
  },
  discoverTitle: {
    fr: "Découvrez notre univers",
    es: "Descubra nuestro universo"
  },
  discoverSubtitle: {
    fr: "Plongez dans les collections qui définissent l'identité des Éditions Guaicaipuro.",
    es: "Sumérjase en las colecciones que definen la identidad de Ediciones Guaicaipuro."
  },
  manifestoTitle: {
    fr: "Notre Manifeste",
    es: "Nuestro Manifiesto"
  },
  manifestoText: {
    fr: "Nous croyons que chaque livre est une graine de culture. Dans un monde qui s'accélère, nous choisissons la lenteur de la réflexion, la profondeur de l'analyse et la beauté de l'objet imprimé. Nos collections sont des invitations au voyage, à la découverte de soi et de l'autre.",
    es: "Creemos que cada libro es una semilla de cultura. En un mundo que se acelera, elegimos la lentitud de la reflexión, la profundidad del análisis y la belleza del objeto impreso. Nuestras colecciones son invitaciones al viaje, al descubrimiento de uno mismo y del otro."
  },
  collectionsTitle: {
    fr: "Nos Collections",
    es: "Nuestras Colecciones"
  },
  collectionPhilosophyDesc: {
    fr: "Les textes qui ont fondé la pensée moderne et les essais qui interrogent notre présent.",
    es: "Los textos que fundaron el pensamiento moderno y los ensayos que cuestionan nuestro presente."
  },
  collectionFictionDesc: {
    fr: "Une sélection de romans et de récits qui capturent l'essence de l'âme humaine.",
    es: "Una selección de novelas y relatos que capturan la esencia del alma humana."
  },
  collectionHistoryDesc: {
    fr: "Des chroniques et des recherches pour comprendre les racines de notre continent.",
    es: "Crónicas e investigaciones para comprender las raíces de nuestro continente."
  }
};
