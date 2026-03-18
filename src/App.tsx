
import React, { useState } from 'react';
import { Language } from './types';
import { BOOKS, UI_TEXT } from './constants';
import { LanguageSwitch } from './components/LanguageSwitch';
import { BookCard } from './components/BookCard';
import { NewsletterPage } from './components/NewsletterPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { NewsletterPopup } from './components/NewsletterPopup';
import { CookieConsent } from './components/CookieConsent';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactPage } from './components/ContactPage';
import { DiscoverPage } from './components/DiscoverPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { ShippingPage } from './components/ShippingPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { SalesPage } from './components/SalesPage';
import { ShopPage } from './components/ShopPage';
import { CatalogRequestPage } from './components/CatalogRequestPage';
import { CommercialServicePage } from './components/CommercialServicePage';
import { BookMarked, Instagram, Music, Mail, Library, Facebook, Youtube, ChevronDown } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
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
import { TopBar } from './components/TopBar';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<'home' | 'newsletter' | 'privacy-policy' | 'about-us' | 'contact' | 'discover' | 'terms-of-service' | 'shipping' | 'login' | 'register' | 'sales' | 'shop' | 'catalog-request' | 'commercial-service'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCatalogDropdownOpen, setIsCatalogDropdownOpen] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('newsletter_popup_seen');
      if (!hasSeenPopup && currentPage === 'home') {
        setIsPopupOpen(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    localStorage.setItem('newsletter_popup_seen', 'true');
  };

  const handleSubscribeFromPopup = () => {
    setIsPopupOpen(false);
    localStorage.setItem('newsletter_popup_seen', 'true');
    setCurrentPage('newsletter');
  };

  const t = (key: string) => UI_TEXT[key][lang];

  if (currentPage === 'newsletter') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <NewsletterPage 
          lang={lang} 
          onBack={() => setCurrentPage('home')} 
          onPrivacyClick={() => setCurrentPage('privacy-policy')}
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'privacy-policy') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <PrivacyPolicyPage lang={lang} onBack={() => setCurrentPage('home')} />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'about-us') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <AboutUsPage lang={lang} onBack={() => setCurrentPage('home')} />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <ContactPage lang={lang} onBack={() => setCurrentPage('home')} />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'terms-of-service') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <TermsOfServicePage lang={lang} onBack={() => setCurrentPage('home')} />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'shipping') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <ShippingPage 
          lang={lang} 
          onBack={() => setCurrentPage('home')} 
          onContactClick={() => {
            setCurrentPage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }
  if (currentPage === 'discover') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <DiscoverPage 
          lang={lang} 
          onBack={() => setCurrentPage('home')} 
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage('home');
            setTimeout(() => {
              window.scrollTo({ top: 600, behavior: 'smooth' });
            }, 100);
          }}
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <LoginPage 
          lang={lang} 
          onBack={() => setCurrentPage('home')} 
          onRegisterClick={() => setCurrentPage('register')} 
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'register') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <RegisterPage 
          lang={lang} 
          onBack={() => setCurrentPage('home')} 
          onLoginClick={() => setCurrentPage('login')} 
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'sales') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <SalesPage 
          lang={lang} 
          onBack={() => setCurrentPage('home')} 
          onShopClick={() => setCurrentPage('shop')}
          onCatalogClick={() => setCurrentPage('catalog-request')}
          onCommercialClick={() => setCurrentPage('commercial-service')}
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'shop') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <ShopPage 
          lang={lang} 
          onBack={() => setCurrentPage('sales')} 
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'catalog-request') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <CatalogRequestPage 
          lang={lang} 
          onBack={() => setCurrentPage('sales')} 
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  if (currentPage === 'commercial-service') {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar 
          lang={lang} 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <CookieConsent lang={lang} />
        <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
            <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
              {t('heroTitle')}
            </span>
          </div>
          <LanguageSwitch current={lang} onChange={setLang} />
        </nav>
        <CommercialServicePage 
          lang={lang} 
          onBack={() => setCurrentPage('sales')} 
        />
        <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-auto">
          <div className="container mx-auto max-w-6xl text-center">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} {t('heroTitle')}. {t('designBy')} Guaicaipuro Studio
             </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar 
        lang={lang} 
        onLoginClick={() => setCurrentPage('login')}
        onRegisterClick={() => setCurrentPage('register')}
      />
      <CookieConsent lang={lang} />
      <NewsletterPopup 
        lang={lang} 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        onSubscribe={handleSubscribeFromPopup} 
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#fdfcf8]/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <Library className="text-amber-800 group-hover:rotate-12 transition-transform" size={24} />
          <span className="serif-font text-xl font-bold tracking-tight text-[#2c2c2c]">
            {t('heroTitle')}
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
          <div 
            className="relative"
            onMouseEnter={() => setIsCatalogDropdownOpen(true)}
            onMouseLeave={() => setIsCatalogDropdownOpen(false)}
          >
            <button 
              onClick={() => {
                setCurrentPage('home');
                setSelectedCategory('All');
                window.scrollTo({ top: 600, behavior: 'smooth' });
              }}
              className="hover:text-amber-800 transition-colors uppercase flex items-center gap-1"
            >
              {t('ourCatalog')}
              <ChevronDown size={12} className={`transition-transform duration-300 ${isCatalogDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCatalogDropdownOpen && (
              <div className="absolute top-full left-0 pt-4 w-48">
                <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden py-2">
                  <button 
                    onClick={() => {
                      setCurrentPage('home');
                      setSelectedCategory('All');
                      window.scrollTo({ top: 600, behavior: 'smooth' });
                      setIsCatalogDropdownOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#2c2c2c] hover:bg-amber-50 hover:text-amber-800 transition-all"
                  >
                    {lang === 'fr' ? 'Voir tout' : 'Ver todo'}
                  </button>
                  <div className="h-px bg-gray-50 mx-4"></div>
                  <button 
                    onClick={() => {
                      setCurrentPage('sales');
                      setIsCatalogDropdownOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-amber-600 hover:bg-amber-50 transition-all font-bold"
                  >
                    {t('sales')}
                  </button>
                </div>
              </div>
            )}
          </div>
          <button 
            onClick={() => setCurrentPage('about-us')}
            className="hover:text-amber-800 transition-colors uppercase"
          >
            {t('aboutUs')}
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="hover:text-amber-800 transition-colors uppercase"
          >
            {t('contact')}
          </button>
          <button 
            onClick={() => setCurrentPage('newsletter')}
            className="hover:text-amber-800 transition-colors uppercase"
          >
            {t('newsletterTitle')}
          </button>
        </div>

        <LanguageSwitch current={lang} onChange={setLang} />
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 px-6 text-center bg-stone-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 border border-amber-200 text-amber-800 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
            Littérature & Transmission
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1a1a1a]">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 italic font-serif leading-relaxed max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="mt-12 flex justify-center gap-4">
             <button 
                onClick={() => setCurrentPage('discover')}
                className="bg-[#2c2c2c] text-white px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-amber-900 transition-all"
             >
                {lang === 'fr' ? 'Découvrir' : 'Descubrir'}
             </button>
             <button 
                onClick={() => setCurrentPage('about-us')}
                className="border border-[#2c2c2c] text-[#2c2c2c] px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#2c2c2c] hover:text-white transition-all"
             >
                {lang === 'fr' ? 'Nous connaître' : 'Conocenos'}
             </button>
          </div>
        </div>
      </header>

      {/* Catalog Section */}
      <main className="flex-grow container mx-auto px-6 py-20 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-100 pb-8">
           <div>
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-2">{t('ourCatalog')}</h2>
              <p className="text-gray-400 italic">{lang === 'fr' ? 'Sélection de classiques impérissables' : 'Selección de classiques imperecederos'}</p>
           </div>
           <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-4">
                <span 
                  onClick={() => setSelectedCategory('All')}
                  className={`text-xs font-bold pb-1 cursor-pointer transition-colors ${selectedCategory === 'All' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-gray-300 hover:text-gray-500'}`}
                >
                  {t('catAll')}
                </span>
                <span 
                  onClick={() => setSelectedCategory('Philosophie')}
                  className={`text-xs font-bold pb-1 cursor-pointer transition-colors ${selectedCategory === 'Philosophie' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-gray-300 hover:text-gray-500'}`}
                >
                  {t('catPhilosophy')}
                </span>
                <span 
                  onClick={() => setSelectedCategory('Fiction')}
                  className={`text-xs font-bold pb-1 cursor-pointer transition-colors ${selectedCategory === 'Fiction' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-gray-300 hover:text-gray-500'}`}
                >
                  {t('catFiction')}
                </span>
                <span 
                  onClick={() => setSelectedCategory('Histoire')}
                  className={`text-xs font-bold pb-1 cursor-pointer transition-colors ${selectedCategory === 'Histoire' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-gray-300 hover:text-gray-500'}`}
                >
                  {t('catHistory')}
                </span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {BOOKS.filter(book => selectedCategory === 'All' || book.category === selectedCategory).map(book => (
            <BookCard key={book.id} book={book} lang={lang} />
          ))}
        </div>
      </main>

      {/* Philosophy Section */}
      <section className="bg-[#2c2c2c] text-[#fdfcf8] py-24 px-6 text-center">
         <div className="max-w-2xl mx-auto">
            <BookMarked className="mx-auto mb-6 opacity-50" size={40} />
            <p className="text-2xl md:text-3xl italic serif-font leading-relaxed mb-8">
               {lang === 'fr' 
                 ? "« La culture n'est pas un luxe, c'est une nécessité de l'esprit. Nous éditons les voix qui ont façonné l'âme de notre continent. »"
                 : "« La cultura no es un lujo, es una necesidad del espíritu. Editamos las voces que han moldeado el alma de nuestro continente. »"}
            </p>
            <div className="h-px w-24 bg-amber-700 mx-auto mb-4"></div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-amber-600">
               Direction Littéraire — Guaicaipuro
            </p>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Library className="text-amber-800" size={28} />
                <span className="serif-font text-2xl font-bold tracking-tight text-[#2c2c2c]">
                  {t('heroTitle')}
                </span>
              </div>
              <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
                {t('footerText')} {lang === 'fr' ? 'Qualité littéraire et rigueur historique.' : 'Calidad literaria y rigor histórico.'}
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/editions_guaicaipuro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border border-gray-200 text-gray-400 hover:text-amber-800 hover:border-amber-800 transition-all rounded-full"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.facebook.com/people/Editions-Guaicaipuro/pfbid0D2w1mTchz5hR1aSNA8KmonBz8YQFKoTwEou5anbXevNRcU247sVrPupJbjtmKU2el/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border border-gray-200 text-gray-400 hover:text-amber-800 hover:border-amber-800 transition-all rounded-full"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://www.youtube.com/@EditionsGuaicaipuro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border border-gray-200 text-gray-400 hover:text-amber-800 hover:border-amber-800 transition-all rounded-full"
                  title="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a 
                  href="https://www.tiktok.com/@editions.guaicaipuro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 border border-gray-200 text-gray-400 hover:text-amber-800 hover:border-amber-800 transition-all rounded-full"
                  title="TikTok"
                >
                  <TikTokIcon size={18} />
                </a>
                <a 
                  href="mailto:editionsguaicaipuro@gmail.com" 
                  className="p-2 border border-gray-200 text-gray-400 hover:text-amber-800 hover:border-amber-800 transition-all rounded-full"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#2c2c2c] mb-6 underline underline-offset-8 decoration-amber-600">
                {t('menuTitle')}
              </h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li>
                  <button 
                    onClick={() => {
                      setCurrentPage('home');
                      setSelectedCategory('All');
                      window.scrollTo({ top: 600, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('ourCatalog')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('about-us')}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('aboutUs')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('discover')}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('menuManifesto')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('sales')}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('sales')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('contact')}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#2c2c2c] mb-6 underline underline-offset-8 decoration-amber-600">
                {t('collectionsTitle')}
              </h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li>
                  <button 
                    onClick={() => {
                      setSelectedCategory('Philosophie');
                      setCurrentPage('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('catPhilosophy')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setSelectedCategory('Fiction');
                      setCurrentPage('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('catFiction')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setSelectedCategory('Histoire');
                      setCurrentPage('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('catHistory')}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#2c2c2c] mb-6 underline underline-offset-8 decoration-amber-600">
                {t('legalTitle')}
              </h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li>
                  <button 
                    onClick={() => setCurrentPage('privacy-policy')}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('legalPrivacyPolicy')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('terms-of-service')}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('legalTermsOfService')}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('shipping')}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {t('legalShipping')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {t('heroTitle')}. {lang === 'fr' ? 'Tous droits réservés.' : 'Todos los derechos reservados.'}</p>
            <p>{t('designBy')} Guaicaipuro Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
