
import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Facebook, Music, Youtube, User, ChevronDown } from 'lucide-react';

const TikTokIcon = ({ size = 12 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';

interface TopBarProps {
  lang: Language;
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ lang, onLoginClick, onRegisterClick }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isFr = lang === 'fr';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAuthOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-white py-2 px-6 text-[10px] font-bold uppercase tracking-widest border-b border-white/5 relative z-[60]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Socials */}
        <div className="flex items-center gap-4">
          <span className="text-gray-400">
            {isFr ? 'Suivez-nous sur' : 'Síguenos en'}
          </span>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/editions_guaicaipuro" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              <Instagram size={12} />
            </a>
            <a href="https://www.facebook.com/people/Editions-Guaicaipuro/pfbid0D2w1mTchz5hR1aSNA8KmonBz8YQFKoTwEou5anbXevNRcU247sVrPupJbjtmKU2el/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              <Facebook size={12} />
            </a>
            <a href="https://www.youtube.com/@EditionsGuaicaipuro" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              <Youtube size={12} />
            </a>
            <a href="https://www.tiktok.com/@editions.guaicaipuro" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
              <TikTokIcon size={12} />
            </a>
          </div>
        </div>

        {/* Links & Auth */}
        <div className="flex items-center gap-4 md:gap-8 text-gray-400 flex-wrap justify-center">
          <span className="text-amber-600">Éditions Guaicaipuro</span>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full text-white border border-white/10 hover:bg-white/10 transition-all group"
            >
              <User size={14} className="text-amber-500 group-hover:scale-110 transition-transform" />
              <ChevronDown size={12} className={`text-gray-500 transition-transform duration-300 ${isAuthOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isAuthOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden py-2"
                >
                  <button 
                    onClick={() => {
                      onLoginClick();
                      setIsAuthOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#2c2c2c] hover:bg-amber-50 hover:text-amber-800 transition-all flex items-center gap-3"
                  >
                    {isFr ? "S'identifier" : 'Identificarse'}
                  </button>
                  <div className="h-px bg-gray-50 mx-4"></div>
                  <button 
                    onClick={() => {
                      onRegisterClick();
                      setIsAuthOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:bg-amber-50 hover:text-amber-800 transition-all"
                  >
                    {isFr ? 'Pas encore inscrit ?' : '¿No estás registrado?'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
