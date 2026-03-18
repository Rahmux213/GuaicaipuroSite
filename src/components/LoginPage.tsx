
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, ArrowLeft, Library } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface LoginPageProps {
  lang: Language;
  onBack: () => void;
  onRegisterClick: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ lang, onBack, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFr = lang === 'fr';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Handle login logic here
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-grow bg-[#fdfcf8] py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-md w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {isFr ? 'Retour' : 'Volver'}
        </button>

        <div className="bg-white p-10 shadow-xl border border-gray-100 rounded-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6 text-amber-800">
              <Library size={32} />
            </div>
            <h1 className="text-3xl font-bold serif-font text-[#1a1a1a] mb-2">
              {isFr ? 'Connexion' : 'Iniciar sesión'}
            </h1>
            <p className="text-gray-500 text-sm italic serif-font">
              {isFr ? 'Heureux de vous revoir parmi nous.' : 'Feliz de verte de nuevo con nosotros.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {isFr ? 'Adresse Email' : 'Correo electrónico'}
              </label>
              <div className="relative">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all serif-font italic"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {isFr ? 'Mot de passe' : 'Contraseña'}
              </label>
              <div className="relative">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-amber-800 hover:text-amber-600 transition-colors">
                {isFr ? 'Mot de passe oublié ?' : '¿Has olvidado tu contraseña?'}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2c2c2c] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-900 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              {isFr ? 'Se connecter' : 'Conectarse'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 mb-4">
              {isFr ? "Vous n'avez pas encore de compte ?" : "¿Aún no tienes una cuenta?"}
            </p>
            <button 
              onClick={onRegisterClick}
              className="text-amber-800 font-bold text-xs uppercase tracking-widest hover:underline"
            >
              {isFr ? 'Créer un compte' : 'Crear una cuenta'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
