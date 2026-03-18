
import React from 'react';
import { Book, Language } from '../types';
import { GeminiInsight } from './GeminiInsight';

interface Props {
  book: Book;
  lang: Language;
}

export const BookCard: React.FC<Props> = ({ book, lang }) => {
  return (
    <div className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm flex flex-col md:flex-row">
      <div className="md:w-1/3 overflow-hidden bg-gray-100">
        <img 
          src={book.image} 
          alt={book.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 items-center">
              <span className="text-[10px] uppercase tracking-widest text-amber-700 font-bold px-2 py-1 bg-amber-50 border border-amber-100">
                {book.category}
              </span>
              {book.price && (
                <span className="text-[10px] font-bold text-gray-500">
                  {book.price}€
                </span>
              )}
            </div>
            <span className="text-sm text-gray-400 italic">{book.year}</span>
          </div>
          <h3 className="text-2xl font-bold mb-1 text-[#2c2c2c] leading-tight">
            {book.title}
          </h3>
          <p className="text-lg text-amber-900 mb-4 serif-font opacity-80">
            {book.author}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
            {book.description[lang]}
          </p>
        </div>
        
        <GeminiInsight book={book} lang={lang} />
      </div>
    </div>
  );
};
