
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { motion } from 'motion/react';
import { FileText, ArrowLeft, ShieldCheck, Scale, Gavel } from 'lucide-react';

interface TermsOfServicePageProps {
  lang: Language;
  onBack: () => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ lang, onBack }) => {
  const t = (key: string) => UI_TEXT[key][lang];

  const content = {
    fr: {
      title: "Conditions Générales d'Utilisation et de Vente",
      subtitle: "Dernière mise à jour : 6 Mars 2026",
      intro: "Bienvenue sur le site officiel des Éditions Guaicaipuro. L'accès et l'utilisation de ce site, ainsi que l'achat de nos ouvrages, sont régis par les présentes conditions générales. En naviguant sur ce site, vous reconnaissez avoir pris connaissance et accepté l'intégralité de ces dispositions.",
      sections: [
        {
          title: "1. Objet et Identification",
          icon: <FileText className="text-amber-800" />,
          text: "Les présentes Conditions Générales d'Utilisation (CGU) et de Vente (CGV) définissent les droits et obligations des parties dans le cadre de la vente en ligne des ouvrages édités par les Éditions Guaicaipuro. Le site est exploité par Guaicaipuro Studio, dont le siège social est dédié à la promotion de la culture et de la littérature latino-américaine."
        },
        {
          title: "2. Propriété Intellectuelle et Droits d'Auteur",
          icon: <ShieldCheck className="text-amber-800" />,
          text: "Toutes les œuvres présentées (textes, couvertures, illustrations, manuscrits numérisés) sont la propriété exclusive des Éditions Guaicaipuro ou de leurs auteurs respectifs. Conformément au Code de la Propriété Intellectuelle, toute reproduction, représentation, modification ou adaptation, totale ou partielle, des éléments du site est strictement interdite sans autorisation écrite préalable. L'achat d'un livre ne confère aucun droit de reproduction ou de diffusion publique."
        },
        {
          title: "3. Processus de Commande et Prix",
          icon: <Scale className="text-amber-800" />,
          text: "Les prix de nos ouvrages sont indiqués en Euros (€) toutes taxes comprises (TTC), hors frais d'expédition. La commande est considérée comme validée après confirmation du paiement par l'organisme bancaire. Nous nous réservons le droit d'annuler toute commande en cas de litige de paiement ou de rupture de stock exceptionnelle. Les livres restent la propriété des Éditions Guaicaipuro jusqu'au paiement complet du prix."
        },
        {
          title: "4. Droit de Rétractation et Retours",
          icon: <Gavel className="text-amber-800" />,
          text: "Conformément à la législation en vigueur, le client dispose d'un délai de quatorze (14) jours calendaires à compter de la réception de sa commande pour exercer son droit de rétractation. Les ouvrages doivent être retournés dans leur état d'origine et parfaitement neufs. Tout livre endommagé, sali ou marqué par le lecteur ne pourra faire l'objet d'un remboursement."
        },
        {
          title: "5. Protection des Données Personnelles",
          icon: <ShieldCheck className="text-amber-800" />,
          text: "Les informations collectées lors de vos commandes sont nécessaires à la gestion de celles-ci. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Nous nous engageons à ne jamais transmettre vos coordonnées à des tiers à des fins commerciales sans votre consentement explicite."
        },
        {
          title: "6. Droit Applicable et Litiges",
          icon: <Gavel className="text-amber-800" />,
          text: "Les présentes conditions sont soumises à la loi française. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord, les tribunaux compétents seront ceux du ressort du siège social de l'éditeur."
        }
      ]
    },
    es: {
      title: "Términos y Condiciones Generales de Uso y Venta",
      subtitle: "Última actualización: 6 de Marzo de 2026",
      intro: "Bienvenido al sitio oficial de Ediciones Guaicaipuro. El acceso y uso de este sitio, así como la compra de nuestras obras, se rigen por las presentes condiciones generales. Al navegar por este sitio, usted reconoce haber leído y aceptado la totalidad de estas disposiciones.",
      sections: [
        {
          title: "1. Objeto e Identificación",
          icon: <FileText className="text-amber-800" />,
          text: "Los presentes Términos y Condiciones Generales de Uso (TCU) y de Venta (TCV) definen los derechos y obligaciones de las partes en el marco de la venta en línea de las obras editadas por Ediciones Guaicaipuro. El sitio es operado por Guaicaipuro Studio, cuya sede social se dedica a la promoción de la cultura y la literatura latinoamericana."
        },
        {
          title: "2. Propiedad Intelectual y Derechos de Autor",
          icon: <ShieldCheck className="text-amber-800" />,
          text: "Todas las obras presentadas (textos, portadas, ilustraciones, manuscritos digitalizados) son propiedad exclusiva de Ediciones Guaicaipuro o de sus respectivos autores. De acuerdo con el Código de Propiedad Intelectual, queda estrictamente prohibida cualquier reproducción, representación, modificación o adaptación, total o parcial, de los elementos del sitio sin autorización previa por escrito. La compra de un libro no confiere ningún derecho de reproducción o difusión pública."
        },
        {
          title: "3. Proceso de Pedido y Precios",
          icon: <Scale className="text-amber-800" />,
          text: "Los precios de nuestras obras se indican en Euros (€) con todos los impuestos incluidos (IVA), excluyendo los gastos de envío. El pedido se considera validado tras la confirmación del pago por parte de la entidad bancaria. Nos reservamos el derecho de cancelar cualquier pedido en caso de disputa de pago o falta de stock excepcional. Los libros siguen siendo propiedad de Ediciones Guaicaipuro hasta el pago total del precio."
        },
        {
          title: "4. Derecho de Desistimiento y Devoluciones",
          icon: <Gavel className="text-amber-800" />,
          text: "De acuerdo con la legislación vigente, el cliente dispone de un plazo de catorce (14) días naturales desde la recepción de su pedido para ejercer su derecho de desistimiento. Las obras deben devolverse en su estado original y perfectamente nuevas. Cualquier libro dañado, sucio o marcado por el lector no podrá ser objeto de reembolso."
        },
        {
          title: "5. Protección de Datos Personales",
          icon: <ShieldCheck className="text-amber-800" />,
          text: "La información recopilada durante sus pedidos es necesaria para la gestión de los mismos. De acuerdo con el RGPD, usted tiene derecho de acceso, rectificación y supresión de sus datos. Nos comprometemos a no transmitir nunca sus datos a terceros con fines comerciales sin su consentimiento explícito."
        },
        {
          title: "6. Ley Aplicable y Litigios",
          icon: <Gavel className="text-amber-800" />,
          text: "Las presentes condiciones están sujetas a la ley francesa. En caso de litigio, se buscará una solución amistosa antes de cualquier acción judicial. A falta de acuerdo, los tribunales competentes serán los de la jurisdicción del domicilio social del editor."
        }
      ]
    }
  };

  const currentContent = content[lang];

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
          {lang === 'fr' ? 'Retour' : 'Volver'}
        </button>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 serif-font">
            {currentContent.title}
          </h1>
          <p className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em]">
            {currentContent.subtitle}
          </p>
        </header>

        <div className="prose prose-amber max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-12 italic serif-font">
            {currentContent.intro}
          </p>

          <div className="space-y-12">
            {currentContent.sections.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-amber-50 rounded-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#1a1a1a] m-0">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed m-0">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-stone-100 rounded-2xl border border-stone-200">
            <p className="text-sm text-stone-500 text-center italic m-0">
              {lang === 'fr' 
                ? "Pour toute question relative à ces conditions, merci de nous contacter via notre formulaire de contact."
                : "Para cualquier pregunta relacionada con estos términos, contáctenos a través de nuestro formulario de contacto."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
