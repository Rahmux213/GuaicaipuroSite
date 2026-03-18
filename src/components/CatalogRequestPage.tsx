
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Send, CheckCircle2, Building2 } from 'lucide-react';
import { Language } from '../types';

interface CatalogRequestPageProps {
  lang: Language;
  onBack: () => void;
}

export const CatalogRequestPage: React.FC<CatalogRequestPageProps> = ({ lang, onBack }) => {
  const isFr = lang === 'fr';
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-grow flex flex-col items-center justify-center py-20 px-6 text-center"
      >
        <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-bold serif-font mb-4">
          {isFr ? 'Demande reçue !' : '¡Solicitud recibida!'}
        </h1>
        <p className="text-gray-500 mb-12 max-w-md mx-auto leading-relaxed">
          {isFr 
            ? 'Votre demande de catalogue papier a bien été enregistrée. Notre service commercial traitera votre dossier dans les plus brefs délais.' 
            : 'Su solicitud de catálogo en papel ha sido registrada correctamente. Nuestro departamento comercial procesará su solicitud lo antes posible.'}
        </p>
        <button 
          onClick={onBack}
          className="bg-[#2c2c2c] text-white px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all"
        >
          {isFr ? "Retour à l'accueil" : 'Volver al inicio'}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex-grow bg-[#fdfcf8] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {isFr ? 'Retour' : 'Volver'}
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6 text-amber-800">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold serif-font text-[#1a1a1a] mb-6">
            {isFr ? 'Catalogue Professionnel' : 'Catálogo Profesional'}
          </h1>
          <p className="text-xl text-gray-500 italic serif-font max-w-2xl mx-auto leading-relaxed">
            {isFr 
              ? 'Recevez notre catalogue complet de parutions et nos conditions commerciales pour les librairies et institutions.' 
              : 'Reciba nuestro catálogo completo de publicaciones y nuestras condiciones comerciales para librerías e instituciones.'}
          </p>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  {isFr ? 'Établissement / Librairie' : 'Establecimiento / Librería'}
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    required
                    type="text" 
                    className="w-full bg-stone-50 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-amber-200 transition-all"
                    placeholder={isFr ? "Nom de votre structure" : "Nombre de su estructura"}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  {isFr ? 'Numéro de SIRET / TVA' : 'Número de IVA / Registro'}
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="Ex: 123 456 789 00012"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  {isFr ? 'Nom du contact' : 'Nombre del contacto'}
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={isFr ? "Votre nom" : "Su nombre"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  {isFr ? 'E-mail professionnel' : 'Correo profesional'}
                </label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="contact@librairie.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                {isFr ? 'Adresse de livraison du catalogue' : 'Dirección de envío del catálogo'}
              </label>
              <textarea 
                required
                rows={3}
                className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                placeholder={isFr ? "Adresse complète" : "Dirección completa"}
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#2c2c2c] text-white py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all flex items-center justify-center gap-3"
              >
                {isFr ? 'Envoyer la demande' : 'Enviar solicitud'}
                <Send size={16} />
              </button>
            </div>
            
            <p className="text-[10px] text-gray-400 text-center italic">
              {isFr 
                ? 'En envoyant ce formulaire, vous acceptez que vos données soient traitées pour la gestion de votre demande.' 
                : 'Al enviar este formulario, acepta que sus datos sean tratados para la gestión de su solicitud.'}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
