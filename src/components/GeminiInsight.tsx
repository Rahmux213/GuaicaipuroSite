
import React, { useState } from 'react';
import { getLiteraryInsight } from '../services/geminiService';
import { Language, Book } from '../types';
import { Sparkles, Loader2, BookOpenText } from 'lucide-react';

interface Props {
  book: Book;
  lang: Language;
}

export const GeminiInsight: React.FC<Props> = ({ book, lang }) => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const text = await getLiteraryInsight(book.title, book.author, lang);
    setInsight(text);
    setLoading(false);
  };

  return (
    <div className="mt-6 border-t border-gray-100 pt-4">
      {!insight && !loading && (
        <button 
          onClick={handleGenerate}
          className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium italic"
        >
          {/* Fix: replaced invalid 'icon' tag with 'span' */}
          <span className="flex items-center justify-center w-4 h-4">
            <Sparkles size={16} />
          </span>
          {lang === 'fr' ? "Demander une analyse littéraire IA" : "Solicitar análisis literario IA"}
        </button>
      )}

      {loading && (
        <div className="flex items-center gap-2 text-gray-400 text-sm italic py-2">
          <Loader2 size={16} className="animate-spin" />
          {lang === 'fr' ? "Rédaction de l'analyse..." : "Redactando el análisis..."}
        </div>
      )}

      {insight && (
        <div className="bg-amber-50/50 p-4 rounded-lg mt-2 border border-amber-100/50">
          <div className="flex items-center gap-2 mb-2 text-amber-800">
             <BookOpenText size={18} />
             <h4 className="font-bold text-sm tracking-wide uppercase">
               {lang === 'fr' ? "Regard de Guaicaipuro" : "Mirada de Guaicaipuro"}
             </h4>
          </div>
          <div className="prose prose-sm prose-amber max-w-none text-gray-700 leading-relaxed italic">
            {insight.split('\n').map((para, i) => (
              para.trim() && <p key={i} className="mb-2">{para}</p>
            ))}
          </div>
          <button 
            onClick={() => setInsight(null)}
            className="text-[10px] text-gray-400 uppercase tracking-tighter hover:text-gray-600 mt-2"
          >
            {lang === 'fr' ? "Masquer" : "Ocultar"}
          </button>
        </div>
      )}
    </div>
  );
};
