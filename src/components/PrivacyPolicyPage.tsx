
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Cookie, Scale } from 'lucide-react';
import { Language } from '../types';

interface PrivacyPolicyPageProps {
  lang: Language;
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ lang, onBack }) => {
  const isFr = lang === 'fr';
  const lastUpdate = isFr ? 'Dernière mise à jour : 03 mars 2026' : 'Última actualización: 03 de marzo de 2026';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-grow bg-[#fdfcf8] py-20 px-6"
    >
      <div className="container mx-auto max-w-3xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {isFr ? 'Retour' : 'Volver'}
        </button>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 serif-font">
            {isFr ? 'Politique de confidentialité' : 'Política de privacidad'}
          </h1>
          <p className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em]">
            {lastUpdate}
          </p>
        </header>

        <div className="prose prose-amber max-w-none text-gray-700 space-y-12">
          <section>
            <p className="text-lg text-gray-600 leading-relaxed italic font-serif mb-8">
              {isFr 
                ? "À l’occasion de votre visite sur le Site des Éditions Guaicaipuro, nous sommes amenés à collecter et traiter des Données personnelles."
                : "Con motivo de su visita al Sitio de Ediciones Guaicaipuro, nos vemos obligados a recopilar y procesar Datos Personales."}
            </p>
            <p className="leading-relaxed">
              {isFr 
                ? "La présente politique de confidentialité a vocation à informer les Utilisateurs de la manière dont le Site traite les Données personnelles. La politique de confidentialité décrit les types de Données personnelles reçues ou collectées sur le Site ; les conditions d’utilisation des Données personnelles ; les choix offerts à l’Utilisateur concernant la collecte des Données personnelles et les mesures qui sont prises pour protéger la sécurité de ces Données personnelles."
                : "La presente política de privacidad tiene como objetivo informar a los Usuarios sobre la manera en que el Sitio procesa los Datos Personales. Describe los tipos de Datos Personales recibidos o recopilados en el Sitio; las condiciones de uso de los Datos Personales; las opciones ofrecidas al Usuario respecto a la recopilación de Datos Personales y las medidas que se toman para proteger la seguridad de estos Datos Personales."}
            </p>
            <p className="mt-4 italic text-sm text-gray-500">
              {isFr 
                ? "Cette politique de confidentialité est susceptible d’évoluer à tout moment. Les modifications entrent en vigueur à la date de leur mise en ligne sur le Site et sont opposables aux Utilisateurs à la date de la première connexion au Site après la mise à jour."
                : "Esta política de privacidad puede evolucionar en cualquier momento. Los cambios entran en vigor en la fecha de su puesta en línea en el Sitio y son oponibles a los Usuarios en la fecha de la primera conexión al Sitio después de la actualización."}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">I.</span> {isFr ? 'Définitions' : 'Definiciones'}
            </h2>
            <div className="space-y-4">
              <p><strong>« Utilisateur(s) »</strong> {isFr ? 'désigne toute personne physique qui accède au Site régi par la présente politique de confidentialité.' : 'designa a cualquier persona física que acceda al Sitio regido por la presente política de privacidad.'}</p>
              <p><strong>« Données personnelles »</strong> {isFr ? 'désigne toute information se rapportant à une personne physique identifiée ou identifiable notamment par référence à un identifiant, tel qu\'un nom, un numéro d\'identification, des données de localisation, un identifiant en ligne, ou à un ou plusieurs éléments spécifiques propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.' : 'designa cualquier información relacionada con una persona física identificada o identificable, en particular por referencia a un identificador, como un nombre, un número de identificación, datos de localización, un identificador en línea.'}</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">II.</span> {isFr ? 'Responsable du traitement' : 'Responsable del tratamiento'}
            </h2>
            <p>
              {isFr 
                ? "Éditions Guaicaipuro est responsable du traitement des Données personnelles dans le cadre de la consultation et de l’utilisation du Site."
                : "Ediciones Guaicaipuro es responsable del tratamiento de los Datos Personales en el marco de la consulta y el uso del Sitio."}
              <br />
              <strong>{isFr ? 'Adresse' : 'Dirección'} :</strong> Paris, France
              <br />
              <strong>{isFr ? 'Courriel' : 'Correo electrónico'} :</strong> editionsguaicaipuro@gmail.com
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">III.</span> {isFr ? 'Délégué à la protection des données' : 'Delegado de protección de datos'}
            </h2>
            <p>
              {isFr 
                ? "Pour toute question sur cette politique de confidentialité ou sur le traitement de vos données personnelles, nous vous prions de contacter notre Délégué à la Protection des Données personnelles (DPO) par courriel à l’adresse suivante :"
                : "Para cualquier pregunta sobre esta política de privacidad o sobre el tratamiento de sus datos personales, le rogamos que se ponga en contacto con nuestro Delegado de Protección de Datos Personales (DPO) por correo electrónico a la siguiente dirección:"}
              <br />
              <strong>{isFr ? 'Courriel' : 'Correo electrónico'} :</strong> editionsguaicaipuro@gmail.com
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">IV.</span> {isFr ? 'Données collectées' : 'Datos recopilados'}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#1a1a1a] mb-3">{isFr ? '1. Données volontairement communiquées' : '1. Datos comunicados voluntariamente'}</h3>
                <p className="mb-4">{isFr ? 'Les Données personnelles collectées directement auprès de l’Utilisateur peuvent inclure :' : 'Los Datos Personales recopilados directamente del Usuario pueden incluir:'}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{isFr ? 'Civilité, nom et prénom' : 'Tratamiento, nombre y apellido'}</li>
                  <li>{isFr ? 'Nom de plume ou pseudonyme (lors d\'envoi de manuscrits)' : 'Nombre de pluma o seudónimo (al enviar manuscritos)'}</li>
                  <li>{isFr ? 'Adresse email et numéro de téléphone' : 'Dirección de correo electrónico y número de teléfono'}</li>
                  <li>{isFr ? 'Âge et région de l’Utilisateur' : 'Edad y región del Usuario'}</li>
                  <li>{isFr ? 'Informations sur les intérêts (goûts de lecture)' : 'Información sobre intereses (gustos de lectura)'}</li>
                  <li>{isFr ? 'Profession et informations liées à l\'enseignement (Espace Enseignants)' : 'Profesión e información relacionada con la enseñanza (Espacio Docente)'}</li>
                </ul>
                <p className="mt-4 text-sm italic">
                  {isFr 
                    ? "Avant de communiquer son adresse email, l’Utilisateur consent au traitement de ses Données personnelles par le biais d’une case à cocher."
                    : "Antes de comunicar su dirección de correo electrónico, el Usuario consiente el tratamiento de sus Datos Personales mediante una casilla de verificación."}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#1a1a1a] mb-3">{isFr ? '2. Données automatiquement collectées : cookies' : '2. Datos recopilados automáticamente: cookies'}</h3>
                <p className="mb-4">
                  {isFr 
                    ? "Lorsque l’Utilisateur visite le Site sont également collectées certaines informations par des moyens automatisés, tels que des cookies."
                    : "Cuando el Usuario visita el Sitio, también se recopila cierta información por medios automatizados, como las cookies."}
                </p>
                <div className="space-y-4 bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                  <p className="text-sm"><strong>{isFr ? 'Cookies techniques et fonctionnels' : 'Cookies técnicas y funcionales'} :</strong> {isFr ? 'Essentiels au fonctionnement du Site.' : 'Esenciales para el funcionamiento del Sitio.'}</p>
                  <p className="text-sm"><strong>{isFr ? 'Cookies de mesure d’audience' : 'Cookies de medición de audiencia'} :</strong> {isFr ? 'Analyse de l’utilisation et des performances (Google Analytics, Matomo).' : 'Análisis de uso y rendimiento (Google Analytics, Matomo).'}</p>
                  <p className="text-sm"><strong>{isFr ? 'Cookies de modules sociaux' : 'Cookies de módulos sociales'} :</strong> {isFr ? 'Boutons de partage sur les réseaux sociaux.' : 'Botones para compartir en redes sociales.'}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">V.</span> {isFr ? 'Finalité et base légale du traitement' : 'Finalidad y base legal del tratamiento'}
            </h2>
            <p>{isFr ? 'L’Utilisateur consent au traitement de ses Données personnelles pour :' : 'El Usuario consiente el tratamiento de sus Datos Personales para:'}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{isFr ? 'L’envoi d’informations éditoriales et évènementielles' : 'El envío de información editorial y de eventos'}</li>
              <li>{isFr ? 'L’envoi des newsletters sélectionnées' : 'El envío de los boletines seleccionados'}</li>
              <li>{isFr ? 'Répondre aux demandes de partenaires commerciaux' : 'Responder a las solicitudes de los socios comerciales'}</li>
              <li>{isFr ? 'Permettre le fonctionnement du Site et réaliser des mesures d’audience' : 'Permitir el funcionamiento del Sitio y realizar mediciones de audiencia'}</li>
            </ul>
            <p className="text-sm italic mt-4">
              {isFr 
                ? "La présente politique de confidentialité respecte les normes européennes et françaises de protection des données personnelles (RGPD)."
                : "Esta política de privacidad cumple con las normas europeas y francesas de protección de datos personales (RGPD)."}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">VI.</span> {isFr ? 'Destinataires des données personnelles' : 'Destinatarios de los datos personales'}
            </h2>
            <p>
              {isFr 
                ? "Les destinataires sont les personnes chargées du service marketing, commercial, administratif, logistique et informatique, ainsi que les sous-traitants."
                : "Los destinatarios son las personas encargadas de los departamentos de marketing, comercial, administrativo, logístico e informático, así como los subcontratistas."}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">VII.</span> {isFr ? 'Durée de conservation' : 'Duración de la conservación'}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{isFr ? 'Newsletters : jusqu’au retrait du consentement ou 3 ans après le dernier contact.' : 'Boletines: hasta la retirada del consentimiento o 3 años después del último contacto.'}</li>
              <li>{isFr ? 'Partenaires : 3 ans à compter de la fin de la relation commerciale.' : 'Socios: 3 años desde el fin de la relación comercial.'}</li>
              <li>{isFr ? 'Cookies : 13 mois.' : 'Cookies: 13 meses.'}</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">VIII.</span> {isFr ? 'Droits des Utilisateurs' : 'Derechos de los Usuarios'}
            </h2>
            <div className="space-y-4">
              <p>
                {isFr 
                  ? "Conformément à la législation en vigueur, l’Utilisateur a le droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de ses données."
                  : "De acuerdo con la legislación vigente, el Usuario tiene derecho de acceso, rectificación, supresión, limitación, oposición y portabilidad de sus datos."}
              </p>
              <p>
                {isFr 
                  ? "Retrait du consentement : un lien de désabonnement immédiat se trouve au bas de chacune de nos newsletters."
                  : "Retirada del consentimiento: un enlace de baja inmediata se encuentra al final de cada uno de nuestros boletines."}
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">IX.</span> {isFr ? 'Mesures de protection' : 'Medidas de protección'}
            </h2>
            <p>
              {isFr 
                ? "Le Site dispose de protections administratives, techniques et physiques conçues pour protéger les Données personnelles contre toute destruction, perte ou accès non autorisé."
                : "El Sitio cuenta con protecciones administrativas, técnicas y físicas diseñadas para proteger los Datos Personales contra la destrucción, pérdida o acceso no autorizado."}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold serif-font text-[#1a1a1a] flex items-center gap-3 border-b border-amber-100 pb-2">
              <span className="text-amber-800 text-lg">X.</span> {isFr ? 'Loi applicable' : 'Ley aplicable'}
            </h2>
            <p>
              {isFr 
                ? "La présente politique de confidentialité est soumise au droit français. En cas de litige, une solution amiable sera recherchée avant tout recours auprès de la CNIL ou des tribunaux."
                : "Esta política de privacidad está sujeta a la legislación francesa. En caso de disputa, se buscará una solución amistosa antes de cualquier recurso ante la CNIL o los tribunales."}
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 bg-stone-100 rounded-2xl border border-stone-200">
          <p className="text-sm text-stone-500 text-center italic m-0">
            {isFr 
              ? "Pour toute question relative à cette politique, merci de nous contacter via notre formulaire de contact."
              : "Para cualquier pregunta relacionada con esta política, contáctenos a través de nuestro formulario de contacto."}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
