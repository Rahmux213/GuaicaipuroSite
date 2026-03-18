
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { motion } from 'motion/react';
import { Truck, ArrowLeft, Globe, Package, Clock, ShieldCheck } from 'lucide-react';

interface ShippingPageProps {
  lang: Language;
  onBack: () => void;
  onContactClick: () => void;
}

export const ShippingPage: React.FC<ShippingPageProps> = ({ lang, onBack, onContactClick }) => {
  const t = (key: string) => UI_TEXT[key][lang];

  const content = {
    fr: {
      title: "Livraison & Retours",
      subtitle: "Expédition internationale et suivi de commande",
      intro: "Les Éditions Guaicaipuro s'engagent à livrer vos ouvrages dans les meilleures conditions de protection et de rapidité.",
      sections: [
        {
          title: "Zones de Livraison",
          icon: <Globe className="text-amber-800" />,
          text: "Nous livrons en France Métropolitaine, en Europe et dans le monde entier. Les frais de port sont calculés automatiquement lors de la validation de votre panier en fonction du poids des ouvrages et de la destination."
        },
        {
          title: "Délais d'Expédition",
          icon: <Clock className="text-amber-800" />,
          text: "Toute commande passée avant 12h est expédiée le jour même (hors week-ends et jours fériés). Les délais de livraison varient de 2 à 5 jours ouvrés pour la France, et de 5 à 15 jours pour l'international."
        },
        {
          title: "Emballage Soigné",
          icon: <Package className="text-amber-800" />,
          text: "Chaque ouvrage est emballé individuellement dans un carton de protection rigide pour garantir son arrivée en parfait état. Nous utilisons des matériaux recyclables et respectueux de l'environnement."
        },
        {
          title: "Retours & Échanges",
          icon: <ShieldCheck className="text-amber-800" />,
          text: "Vous disposez d'un délai de 14 jours après réception de votre commande pour nous retourner un ouvrage s'il ne vous convient pas. Les frais de retour sont à la charge du client, sauf en cas de produit défectueux ou d'erreur de notre part."
        }
      ]
    },
    es: {
      title: "Envío y Devoluciones",
      subtitle: "Envío internacional y seguimiento de pedidos",
      intro: "Ediciones Guaicaipuro se compromete a entregar sus obras en las mejores condiciones de protección y rapidez.",
      sections: [
        {
          title: "Zonas de Entrega",
          icon: <Globe className="text-amber-800" />,
          text: "Realizamos envíos a Francia Metropolitana, Europa y todo el mundo. Los gastos de envío se calculan automáticamente al validar su carrito en función del peso de las obras y el destino."
        },
        {
          title: "Plazos de Envío",
          icon: <Clock className="text-amber-800" />,
          text: "Cualquier pedido realizado antes de las 12h se envía el mismo día (excepto fines de semana y festivos). Los plazos de entrega varían de 2 a 5 días hábiles para Francia, y de 5 a 15 días para el internacional."
        },
        {
          title: "Embalaje Cuidadoso",
          icon: <Package className="text-amber-800" />,
          text: "Cada obra se embala individualmente en un cartón de protección rígido para garantizar su llegada en perfecto estado. Utilizamos materiales reciclables y respetuosos con el medio ambiente."
        },
        {
          title: "Devoluciones y Cambios",
          icon: <ShieldCheck className="text-amber-800" />,
          text: "Dispone de un plazo de 14 días tras la recepción de su pedido para devolvernos una obra si no le satisface. Los gastos de devolución corren a cargo del cliente, salvo en caso de producto defectuoso o error por nuestra parte."
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
          <div className="flex items-center gap-4 mb-4">
            <Truck className="text-amber-800" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] serif-font m-0">
              {currentContent.title}
            </h1>
          </div>
          <p className="text-amber-700 font-bold text-xs uppercase tracking-[0.2em]">
            {currentContent.subtitle}
          </p>
        </header>

        <div className="prose prose-amber max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-12 italic serif-font">
            {currentContent.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.sections.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-amber-50 rounded-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-lg font-bold text-[#1a1a1a] m-0">
                    {section.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed m-0">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-amber-900 text-white rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4 serif-font">
              {lang === 'fr' ? "Besoin d'aide pour votre commande ?" : "¿Necesita ayuda con su pedido?"}
            </h3>
            <p className="text-amber-200 mb-8 max-w-md mx-auto">
              {lang === 'fr' 
                ? "Notre service client est à votre disposition pour toute question concernant l'expédition ou le suivi de vos colis."
                : "Nuestro servicio de atención al cliente está a su disposición para cualquier pregunta sobre el envío o el seguimiento de sus paquetes."}
            </p>
            <button 
              onClick={onContactClick}
              className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-50 transition-all"
            >
              {lang === 'fr' ? 'Nous contacter' : 'Contáctenos'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
