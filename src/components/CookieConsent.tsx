
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface CookieConsentProps {
  lang: Language;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (type: 'accept' | 'decline') => {
    localStorage.setItem('cookie_consent', type);
    setIsVisible(false);
  };

  const t = (key: string) => UI_TEXT[key][lang];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-white border border-gray-100 shadow-2xl p-6 rounded-2xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-800" />
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-50 p-3 rounded-xl text-amber-800">
                <Cookie size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="serif-font text-lg font-bold text-[#1a1a1a] mb-2">
                  {t('cookieConsentTitle')}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {t('cookieConsentText')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleAction('accept')}
                    className="flex-grow bg-[#2c2c2c] text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-amber-900 transition-all rounded-lg"
                  >
                    {t('cookieAccept')}
                  </button>
                  <button
                    onClick={() => handleAction('decline')}
                    className="flex-grow border border-gray-200 text-gray-500 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all rounded-lg"
                  >
                    {t('cookieDecline')}
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
