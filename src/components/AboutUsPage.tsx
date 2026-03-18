
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { History, Target, Heart, ArrowLeft } from 'lucide-react';

interface AboutUsPageProps {
  lang: Language;
  onBack: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ lang, onBack }) => {
  const t = (key: string) => UI_TEXT[key][lang];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#fdfcf8] min-h-screen"
    >
      <div className="container mx-auto max-w-4xl px-6 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </button>

        <header className="mb-20 text-center">
          <div className="inline-block px-4 py-1 border border-amber-200 text-amber-800 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
            Guaicaipuro Studio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
            {t('aboutUsTitle')}
          </h1>
          <p className="text-xl text-gray-500 italic serif-font max-w-2xl mx-auto">
            {t('aboutUsSubtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-20">
          {/* History */}
          <section className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-800 mb-6">
                <History size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">{t('aboutUsHistoryTitle')}</h2>
              <p className="text-gray-600 leading-relaxed serif-font text-lg">
                {t('aboutUsHistoryText')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" 
                alt="Library" 
                className="rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* Mission */}
          <section className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-800 mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">{t('aboutUsMissionTitle')}</h2>
              <p className="text-gray-600 leading-relaxed serif-font text-lg">
                {t('aboutUsMissionText')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800" 
                alt="Books" 
                className="rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* Values */}
          <section className="bg-[#2c2c2c] text-white p-12 rounded-3xl text-center">
            <Heart className="mx-auto mb-6 text-amber-600" size={48} />
            <h2 className="text-3xl font-bold mb-6">{t('aboutUsValuesTitle')}</h2>
            <p className="text-xl italic serif-font max-w-2xl mx-auto text-gray-300">
              {t('aboutUsValuesText')}
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
