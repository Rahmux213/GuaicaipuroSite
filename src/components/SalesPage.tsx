
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, Globe, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface SalesPageProps {
  lang: Language;
  onBack: () => void;
  onShopClick: () => void;
  onCatalogClick: () => void;
  onCommercialClick: () => void;
}

export const SalesPage: React.FC<SalesPageProps> = ({ lang, onBack, onShopClick, onCatalogClick, onCommercialClick }) => {
  const isFr = lang === 'fr';

  const pointsOfSale = [
    {
      city: isFr ? 'Paris' : 'París',
      name: 'Librairie Espagnole',
      address: '7 Rue de la Harpe, 75005 Paris'
    },
    {
      city: isFr ? 'Avignon' : 'Aviñón',
      name: 'Librairie de la Fenêtre',
      address: '27 Rue de la République, 84000 Avignon'
    },
    {
      city: isFr ? 'Madrid' : 'Madrid',
      name: 'Casa del Libro',
      address: 'Calle de Fuencarral, 119, 28010 Madrid'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-grow bg-[#fdfcf8] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {isFr ? 'Retour' : 'Volver'}
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6 text-amber-800">
            <ShoppingBag size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold serif-font text-[#1a1a1a] mb-6">
            {isFr ? 'Où trouver nos ouvrages ?' : '¿Dónde encontrar nuestras obras?'}
          </h1>
          <p className="text-xl text-gray-500 italic serif-font max-w-2xl mx-auto leading-relaxed">
            {isFr 
              ? 'Nos livres sont disponibles dans une sélection de librairies spécialisées et sur notre boutique en ligne.' 
              : 'Nuestros libros están disponibles en una selección de librerías especializadas y en nuestra tienda en línea.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Online Shop */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-amber-200 transition-all">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-800 mb-6 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4 serif-font">
              {isFr ? 'Boutique en ligne' : 'Tienda en línea'}
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              {isFr 
                ? 'Commandez directement sur notre site et recevez vos livres chez vous. Livraison internationale disponible.' 
                : 'Pide directamente en nuestro sitio y recibe tus libros en casa. Envío internacional disponible.'}
            </p>
            <button 
              onClick={onShopClick}
              className="bg-[#2c2c2c] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all flex items-center gap-2"
            >
              {isFr ? 'Accéder à la boutique' : 'Acceder a la tienda'}
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Catalog Request */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-amber-200 transition-all">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-800 mb-6 group-hover:scale-110 transition-transform">
              <BookOpen size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4 serif-font">
              {isFr ? 'Catalogue Papier' : 'Catálogo en papel'}
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              {isFr 
                ? 'Vous êtes une librairie ou une institution ? Demandez notre catalogue complet au format papier.' 
                : '¿Eres una librería o una institución? Solicita nuestro catálogo completo en formato papel.'}
            </p>
            <button 
              onClick={onCatalogClick}
              className="border border-[#2c2c2c] text-[#2c2c2c] px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#2c2c2c] hover:text-white transition-all"
            >
              {isFr ? 'Demander le catalogue' : 'Solicitar catálogo'}
            </button>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100">
          <div className="flex items-center gap-4 mb-10">
            <MapPin className="text-amber-800" size={28} />
            <h2 className="text-3xl font-bold serif-font">
              {isFr ? 'Points de vente' : 'Puntos de venta'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pointsOfSale.map((point, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
                  {point.city}
                </span>
                <h3 className="font-bold text-[#1a1a1a]">{point.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed italic serif-font">
                  {point.address}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-stone-50 rounded-2xl border border-stone-100 text-center">
            <p className="text-sm text-gray-500 italic serif-font">
              {isFr 
                ? 'Vous souhaitez devenir revendeur de nos collections ? Contactez notre service commercial.' 
                : '¿Deseas convertirte en distribuidor de nuestras colecciones? Contacta con nuestro departamento comercial.'}
            </p>
            <button 
              onClick={onCommercialClick}
              className="mt-4 text-amber-800 font-bold text-xs uppercase tracking-widest hover:underline"
            >
              {isFr ? 'Service Commercial' : 'Departamento Comercial'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
