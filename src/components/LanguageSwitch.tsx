
import React from 'react';
import { Language } from '../types';

interface Props {
  current: Language;
  onChange: (lang: Language) => void;
}

export const LanguageSwitch: React.FC<Props> = ({ current, onChange }) => {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
      <button 
        onClick={() => onChange('fr')}
        className={`px-3 py-1 transition-colors ${current === 'fr' ? 'text-amber-700 underline underline-offset-4' : 'text-gray-400 hover:text-gray-600'}`}
      >
        FR
      </button>
      <span className="text-gray-300">|</span>
      <button 
        onClick={() => onChange('es')}
        className={`px-3 py-1 transition-colors ${current === 'es' ? 'text-amber-700 underline underline-offset-4' : 'text-gray-400 hover:text-gray-600'}`}
      >
        ES
      </button>
    </div>
  );
};
