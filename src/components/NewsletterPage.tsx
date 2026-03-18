
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface NewsletterPageProps {
  lang: Language;
  onBack: () => void;
  onPrivacyClick: () => void;
}

export const NewsletterPage: React.FC<NewsletterPageProps> = ({ lang, onBack, onPrivacyClick }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = (key: string) => UI_TEXT[key][lang];

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 rounded-full mb-8">
            <CheckCircle2 className="text-amber-800" size={40} />
          </div>
          <h2 className="text-4xl font-bold mb-4 serif-font text-[#1a1a1a]">
            {t('newsletterSuccess')}
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            {t('newsletterSuccessDesc')}
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-[#2c2c2c] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-900 transition-all shadow-lg"
          >
            <ArrowLeft size={16} />
            {t('backToHome')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#fdfcf8] min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-amber-800 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t('back')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="inline-block px-4 py-1 border border-amber-200 text-amber-800 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
                {t('newsletterTitle')}
              </div>
              <h1 className="text-5xl font-bold mb-8 serif-font text-[#1a1a1a] leading-tight">
                {t('detailedNewsletterTitle')}
              </h1>
              <p className="text-lg text-gray-500 italic font-serif leading-relaxed mb-8">
                {t('detailedNewsletterDesc')}
              </p>
              <div className="flex items-center gap-4 p-6 bg-stone-50 border-l-4 border-amber-800">
                <Mail className="text-amber-800 shrink-0" size={24} />
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('newsletterCommunity')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
              {/* Email */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t('emailPlaceholder')}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@email.com"
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all text-lg font-serif italic"
                />
              </div>

              {/* Civility */}
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t('civility')}
                </label>
                <div className="flex gap-12">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="civility" className="w-4 h-4 accent-amber-700" defaultChecked />
                    <span className="text-sm text-gray-600 group-hover:text-amber-800 transition-colors">{t('madame')}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="civility" className="w-4 h-4 accent-amber-700" />
                    <span className="text-sm text-gray-600 group-hover:text-amber-800 transition-colors">{t('monsieur')}</span>
                  </label>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t('firstName')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('firstName')}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all text-base"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t('lastName')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('lastName')}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all text-base"
                  />
                </div>
              </div>

              {/* Universes */}
              <div className="space-y-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 leading-relaxed">
                  {t('universesTitle')}
                </label>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'universeLiterature',
                    'universeLifestyle',
                    'universeHealth',
                    'universeHumanSciences',
                    'universeEssays',
                    'universeArts'
                  ].map((key) => (
                    <label key={key} className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="w-5 h-5 accent-amber-700 cursor-pointer" />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-amber-800 transition-colors leading-tight">{t(key)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Region */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t('regionLabel')}
                </label>
                <div className="relative">
                  <select className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-amber-700 outline-none transition-all text-base appearance-none cursor-pointer">
                    <option value="">{t('regionPlaceholder')}</option>
                    <option value="idf">{t('regionIDF')}</option>
                    <option value="ara">{t('regionARA')}</option>
                    <option value="paca">{t('regionPACA')}</option>
                    <option value="oc">{t('regionOC')}</option>
                    <option value="na">{t('regionNA')}</option>
                    <option value="other">{t('regionOther')}</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subscriptions */}
              <div className="space-y-6 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-900">
                  {t('subscriptionsTitle')}
                </h4>
                
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-700">{t('subGuaicaipuro')}</p>
                  <div className="flex gap-12">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="sub1" className="w-4 h-4 accent-amber-700" defaultChecked />
                      <span className="text-sm text-gray-600">{t('yes')}</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="sub1" className="w-4 h-4 accent-amber-700" />
                      <span className="text-sm text-gray-600">{t('no')}</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-10">
                <p className="text-[10px] text-gray-400 leading-relaxed mb-8">
                  {t('consentValidate')}{' '}
                  <button 
                    type="button"
                    onClick={onPrivacyClick}
                    className="underline hover:text-amber-800 transition-colors"
                  >
                    {t('learnMore')}
                  </button>
                </p>
                
                <button
                  type="submit"
                  className="w-full bg-[#2c2c2c] text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-amber-900 transition-all shadow-xl"
                >
                  {t('validateButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
