
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface NewsletterPopupProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

export const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ lang, isOpen, onClose, onSubscribe }) => {
  const t = (key: string) => UI_TEXT[key][lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#fdfcf8] w-full max-w-lg shadow-2xl overflow-hidden border border-amber-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-amber-900 transition-all hover:scale-110 z-10 p-2 rounded-full hover:bg-amber-50"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="p-10 md:p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-amber-50 rounded-full">
                  <Mail className="text-amber-800" size={40} />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 serif-font text-[#1a1a1a]">
                {t('newsletterTitle')}
              </h2>

              <p className="text-gray-600 mb-10 leading-relaxed">
                {t('newsletterDescription')}
              </p>

              <div className="space-y-4">
                <button
                  onClick={onSubscribe}
                  className="w-full bg-[#2c2c2c] text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-900 transition-all shadow-lg"
                >
                  {t('subscribeNow')}
                </button>
                
                <button
                  onClick={onClose}
                  className="w-full py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-amber-800 transition-colors"
                >
                  {t('maybeLater')}
                </button>
              </div>
            </div>

            {/* Decorative bottom bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-900 via-amber-600 to-amber-900"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
