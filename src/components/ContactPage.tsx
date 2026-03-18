
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { Mail, Instagram, Music, MapPin, Send, ArrowLeft, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
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

interface ContactPageProps {
  lang: Language;
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, onBack }) => {
  const t = (key: string) => UI_TEXT[key][lang];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/editions_guaicaipuro',
      handle: '@editions_guaicaipuro'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: 'https://www.facebook.com/people/Editions-Guaicaipuro/pfbid0D2w1mTchz5hR1aSNA8KmonBz8YQFKoTwEou5anbXevNRcU247sVrPupJbjtmKU2el/',
      handle: 'Éditions Guaicaipuro'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={20} />,
      url: 'https://www.youtube.com/@EditionsGuaicaipuro',
      handle: '@EditionsGuaicaipuro'
    },
    {
      name: 'TikTok',
      icon: <TikTokIcon size={20} />,
      url: 'https://www.tiktok.com/@editions.guaicaipuro',
      handle: '@éditions.guaicaipuro'
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

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-500 italic serif-font max-w-2xl">
            {t('contactSubtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-6 flex items-center gap-2">
                <Mail size={16} />
                {t('contactEmailTitle')}
              </h3>
              <a 
                href="mailto:editionsguaicaipuro@gmail.com" 
                className="text-base font-bold text-[#1a1a1a] hover:text-amber-800 transition-colors break-words"
              >
                editionsguaicaipuro@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-6 flex items-center gap-2">
                <Instagram size={16} />
                {t('contactSocialTitle')}
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-amber-800 hover:bg-amber-50 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-amber-800">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {social.name}
                      </p>
                      <p className="font-bold text-[#1a1a1a]">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-6 flex items-center gap-2">
                <MapPin size={16} />
                {t('contactAddressTitle')}
              </h3>
              <p className="text-lg font-bold text-[#1a1a1a] whitespace-pre-line">
                {t('contactAddressText')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
              {t('contactFormTitle')}
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {t('contactFormName')}
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-stone-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-800 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {t('emailPlaceholder')}
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-stone-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-800 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {t('contactFormSubject')}
                </label>
                <input 
                  type="text" 
                  className="w-full bg-stone-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-800 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {t('contactFormMessage')}
                </label>
                <textarea 
                  rows={5}
                  className="w-full bg-stone-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-800 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[#2c2c2c] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all rounded-xl flex items-center justify-center gap-2">
                <Send size={16} />
                {t('contactFormSend')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
