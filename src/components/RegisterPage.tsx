
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, ArrowLeft, Library, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface RegisterPageProps {
  lang: Language;
  onBack: () => void;
  onLoginClick: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ lang, onBack, onLoginClick }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const isFr = lang === 'fr';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
    // Handle registration logic here
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-grow bg-[#fdfcf8] py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {isFr ? 'Retour' : 'Volver'}
        </button>

        <div className="bg-white p-10 md:p-16 shadow-xl border border-gray-100 rounded-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6 text-amber-800">
              <User size={32} />
            </div>
            <h1 className="text-3xl font-bold serif-font text-[#1a1a1a] mb-4">
              {isFr ? 'Créer un compte' : 'Crear una cuenta'}
            </h1>
            <p className="text-gray-500 text-sm italic serif-font max-w-md mx-auto leading-relaxed">
              {isFr 
                ? 'Rejoignez la communauté des Éditions Guaicaipuro pour suivre vos commandes et accéder à des contenus exclusifs.' 
                : 'Únete a la comunidad de Ediciones Guaicaipuro para seguir tus pedidos y acceder a contenidos exclusivos.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {isFr ? 'Prénom' : 'Nombre'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all"
                  placeholder={isFr ? 'Votre prénom' : 'Tu nombre'}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {isFr ? 'Nom' : 'Apellido'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all"
                  placeholder={isFr ? 'Votre nom' : 'Tu apellido'}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {isFr ? 'Adresse Email' : 'Correo electrónico'}
              </label>
              <div className="relative">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all serif-font italic"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {isFr ? 'Mot de passe' : 'Contraseña'}
                </label>
                <div className="relative">
                  <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {isFr ? 'Confirmer le mot de passe' : 'Confirmar contraseña'}
                </label>
                <div className="relative">
                  <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <ShieldCheck className="text-amber-800 shrink-0 mt-0.5" size={18} />
              <p className="text-[10px] text-amber-900 leading-relaxed">
                {isFr 
                  ? "Vos données sont protégées. En créant un compte, vous acceptez notre politique de confidentialité et nos conditions d'utilisation."
                  : "Tus datos están protegidos. Al crear una cuenta, aceptas nuestra política de privacidad y nuestros términos de servicio."}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2c2c2c] text-white py-5 rounded-xl font-bold text-xs uppercase tracking-[0.3em] hover:bg-amber-900 transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              {isFr ? "S'inscrire" : 'Registrarse'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 mb-4">
              {isFr ? "Vous avez déjà un compte ?" : "¿Ya tienes una cuenta?"}
            </p>
            <button 
              onClick={onLoginClick}
              className="text-amber-800 font-bold text-xs uppercase tracking-widest hover:underline"
            >
              {isFr ? 'Se connecter' : 'Iniciar sesión'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
