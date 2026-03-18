
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle2, Briefcase } from 'lucide-react';
import { Language } from '../types';

interface CommercialServicePageProps {
  lang: Language;
  onBack: () => void;
}

export const CommercialServicePage: React.FC<CommercialServicePageProps> = ({ lang, onBack }) => {
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
          {isFr ? 'Message envoyé !' : '¡Mensaje enviado!'}
        </h1>
        <p className="text-gray-500 mb-12 max-w-md mx-auto leading-relaxed">
          {isFr 
            ? 'Notre service commercial a bien reçu votre demande. Un responsable vous contactera sous 48 heures ouvrées.' 
            : 'Nuestro departamento comercial ha recibido su solicitud. Un responsable se pondrá en contacto con usted en un plazo de 48 horas laborables.'}
        </p>
        <button 
          onClick={onBack}
          className="bg-[#2c2c2c] text-white px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all"
        >
          {isFr ? "Retour" : 'Volver'}
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex-grow bg-[#fdfcf8] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {isFr ? 'Retour' : 'Volver'}
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6 text-amber-800">
            <Briefcase size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold serif-font text-[#1a1a1a] mb-6">
            {isFr ? 'Service Commercial' : 'Departamento Comercial'}
          </h1>
          <p className="text-xl text-gray-500 italic serif-font max-w-2xl mx-auto leading-relaxed">
            {isFr 
              ? 'Partenariats, distribution et commandes institutionnelles. Nous accompagnons les professionnels du livre.' 
              : 'Alianzas, distribución y pedidos institucionales. Acompañamos a los profesionales del libro.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-bold mb-6 serif-font border-b border-gray-50 pb-4">
                {isFr ? 'Nos coordonnées' : 'Contacto'}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-amber-800 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                    <p className="text-sm font-medium text-[#2c2c2c]">commercial@guaicaipuro.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-amber-800 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Téléphone</p>
                    <p className="text-sm font-medium text-[#2c2c2c]">+33 (0)1 45 67 89 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-50 rounded-xl flex items-center justify-center text-amber-800 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Siège Social</p>
                    <p className="text-sm font-medium text-[#2c2c2c] leading-relaxed">
                      7 Rue de la Harpe,<br />
                      75005 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold mb-4 serif-font">
                {isFr ? 'Devenir revendeur' : 'Ser distribuidor'}
              </h3>
              <p className="text-sm text-amber-100 leading-relaxed mb-6">
                {isFr 
                  ? 'Nous proposons des remises professionnelles attractives pour les librairies indépendantes.' 
                  : 'Ofrecemos descuentos profesionales atractivos para librerías independientes.'}
              </p>
              <div className="h-px bg-white/20 w-full mb-6"></div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-amber-400">
                {isFr ? 'Ouverture de compte rapide' : 'Apertura de cuenta rápida'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 serif-font">
                {isFr ? 'Formulaire de contact professionnel' : 'Formulario de contacto profesional'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                      {isFr ? 'Nom complet' : 'Nombre completo'}
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
                      {isFr ? 'Entreprise / Librairie' : 'Empresa / Librería'}
                    </label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                      placeholder={isFr ? "Nom de la structure" : "Nombre de la estructura"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                      {isFr ? 'E-mail professionnel' : 'Correo profesional'}
                    </label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                      placeholder="contact@entreprise.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                      {isFr ? 'Objet de la demande' : 'Asunto'}
                    </label>
                    <select className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all appearance-none">
                      <option>{isFr ? 'Distribution / Revente' : 'Distribución / Reventa'}</option>
                      <option>{isFr ? 'Commande institutionnelle' : 'Pedido institucional'}</option>
                      <option>{isFr ? 'Partenariat' : 'Alianza'}</option>
                      <option>{isFr ? 'Autre' : 'Otro'}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    {isFr ? 'Votre message' : 'Su mensaje'}
                  </label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                    placeholder={isFr ? "Détaillez votre demande..." : "Detalle su solicitud..."}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-[#2c2c2c] text-white py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all flex items-center justify-center gap-3"
                  >
                    {isFr ? 'Envoyer le message' : 'Enviar mensaje'}
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
