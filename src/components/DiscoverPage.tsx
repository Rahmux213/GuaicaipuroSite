
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { BookOpen, Scroll, Compass, ArrowLeft, Quote } from 'lucide-react';

interface DiscoverPageProps {
  lang: Language;
  onBack: () => void;
  onSelectCategory: (category: string) => void;
}

export const DiscoverPage: React.FC<DiscoverPageProps> = ({ lang, onBack, onSelectCategory }) => {
  const t = (key: string) => UI_TEXT[key][lang];

  const collections = [
    {
      id: 'Philosophie',
      title: UI_TEXT['catPhilosophy'][lang],
      desc: t('collectionPhilosophyDesc'),
      icon: <Scroll size={32} />,
      color: 'bg-stone-100'
    },
    {
      id: 'Fiction',
      title: UI_TEXT['catFiction'][lang],
      desc: t('collectionFictionDesc'),
      icon: <BookOpen size={32} />,
      color: 'bg-amber-50'
    },
    {
      id: 'Histoire',
      title: UI_TEXT['catHistory'][lang],
      desc: t('collectionHistoryDesc'),
      icon: <Compass size={32} />,
      color: 'bg-stone-200'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#fdfcf8] min-h-screen"
    >
      <div className="container mx-auto max-w-5xl px-6 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </button>

        <header className="mb-24 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-[#1a1a1a] mb-8">
            {t('discoverTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 italic serif-font max-w-3xl mx-auto leading-relaxed">
            {t('discoverSubtitle')}
          </p>
        </header>

        {/* Manifesto Section */}
        <section className="mb-32 relative">
          <div className="absolute -top-12 -left-4 text-amber-100 opacity-50">
            <Quote size={120} />
          </div>
          <div className="bg-white border border-gray-100 p-12 md:p-20 rounded-[3rem] shadow-sm relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 text-center">
              {t('manifestoTitle')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed serif-font text-center max-w-3xl mx-auto italic">
              {t('manifestoText')}
            </p>
            <div className="mt-12 flex justify-center">
              <div className="h-px w-24 bg-amber-200"></div>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-16 text-center uppercase tracking-widest">
            {t('collectionsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((col, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => onSelectCategory(col.id)}
                className={`${col.color} p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center transition-all cursor-pointer group`}
              >
                <div className="text-amber-800 mb-6 group-hover:scale-110 transition-transform">
                  {col.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 uppercase tracking-wider">
                  {col.title}
                </h3>
                <p className="text-gray-500 serif-font leading-relaxed">
                  {col.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visual Teaser */}
        <section className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img 
                src={`https://picsum.photos/seed/guaicaipuro-${i}/600/800`} 
                alt="Atmosphere" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  );
};
