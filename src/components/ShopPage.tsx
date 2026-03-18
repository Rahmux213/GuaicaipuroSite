
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Trash2, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { Language, Book } from '../types';
import { BOOKS } from '../constants';

interface ShopPageProps {
  lang: Language;
  onBack: () => void;
}

interface CartItem extends Book {
  quantity: number;
}

export const ShopPage: React.FC<ShopPageProps> = ({ lang, onBack }) => {
  const isFr = lang === 'fr';
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | null>(null);

  const addToCart = (book: Book) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) {
        return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const total = cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  const handleFinalizeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    setIsCheckingOut(false);
  };

  if (isOrderPlaced) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-grow flex flex-col items-center justify-center py-20 px-6 text-center"
      >
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-bold serif-font mb-4">
          {isFr ? 'Commande validée !' : '¡Pedido confirmado!'}
        </h1>
        <p className="text-gray-500 mb-12 max-w-md mx-auto">
          {isFr 
            ? 'Merci pour votre confiance. Vous allez recevoir un e-mail récapitulatif de votre commande.' 
            : 'Gracias por su confianza. Recibirá un correo electrónico de confirmación con los detalles de su pedido.'}
        </p>
        <button 
          onClick={onBack}
          className="bg-[#2c2c2c] text-white px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all"
        >
          {isFr ? "Retour à l'accueil" : 'Volver al inicio'}
        </button>
      </motion.div>
    );
  }

  if (isCheckingOut) {
    return (
      <div className="flex-grow bg-[#fdfcf8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => setIsCheckingOut(false)}
            className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft size={16} />
            {isFr ? 'Retour au panier' : 'Volver al carrito'}
          </button>

          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold serif-font mb-10 text-center">
              {isFr ? 'Informations de livraison' : 'Información de envío'}
            </h2>
            
            <form onSubmit={handleFinalizeOrder} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    {isFr ? 'Prénom' : 'Nombre'}
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                    placeholder={isFr ? "Votre prénom" : "Su nombre"}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                    {isFr ? 'Nom' : 'Apellido'}
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                    placeholder={isFr ? "Votre nom" : "Su apellido"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  {isFr ? 'Numéro de téléphone' : 'Número de teléfono'}
                </label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="06 00 00 00 00"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  {isFr ? 'Adresse complète' : 'Dirección completa'}
                </label>
                <textarea 
                  required
                  rows={3}
                  className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder={isFr ? "N°, rue, code postal, ville" : "N°, calle, código postal, ciudad"}
                ></textarea>
              </div>

              <div className="space-y-4 pt-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  {isFr ? 'Moyen de paiement' : 'Método de pago'}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl cursor-pointer hover:bg-amber-50 transition-colors border border-transparent has-[:checked]:border-amber-200 has-[:checked]:bg-amber-50">
                    <input 
                      type="radio" 
                      name="payment" 
                      required 
                      className="text-amber-800 focus:ring-amber-800" 
                      onChange={() => setPaymentMethod('card')}
                    />
                    <span className="text-xs font-bold uppercase tracking-widest">{isFr ? 'Carte' : 'Tarjeta'}</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl cursor-pointer hover:bg-amber-50 transition-colors border border-transparent has-[:checked]:border-amber-200 has-[:checked]:bg-amber-50">
                    <input 
                      type="radio" 
                      name="payment" 
                      className="text-amber-800 focus:ring-amber-800" 
                      onChange={() => setPaymentMethod('paypal')}
                    />
                    <span className="text-xs font-bold uppercase tracking-widest">PayPal</span>
                  </label>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {paymentMethod === 'card' && (
                  <motion.div 
                    key="card-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 pt-4 overflow-hidden"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                        {isFr ? 'Numéro de carte' : 'Número de tarjeta'}
                      </label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                          {isFr ? 'Expiration' : 'Expiración'}
                        </label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                          CVV
                        </label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {paymentMethod === 'paypal' && (
                  <motion.div 
                    key="paypal-fields"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 pt-4 overflow-hidden"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                        {isFr ? 'E-mail PayPal' : 'Correo de PayPal'}
                      </label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                        placeholder="exemple@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                        {isFr ? 'Mot de passe' : 'Contraseña'}
                      </label>
                      <input 
                        required
                        type="password" 
                        className="w-full bg-stone-50 border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-amber-200 transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-8">
                <button 
                  type="submit"
                  className="w-full bg-[#2c2c2c] text-white py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all"
                >
                  {isFr ? `Payer ${total}€` : `Pagar ${total}€`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-[#fdfcf8] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all"
          >
            <ArrowLeft size={16} />
            {isFr ? 'Retour' : 'Volver'}
          </button>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold serif-font">{isFr ? 'Boutique' : 'Tienda'}</h1>
            <div className="relative">
              <ShoppingCart size={24} className="text-gray-400" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.reduce((s, i) => s + i.quantity, 0)}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Product List */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {BOOKS.map(book => (
              <div key={book.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col group">
                <div className="relative aspect-[2/3] mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-900">
                    {book.price}€
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-gray-400 text-xs mb-4 italic">{book.author}</p>
                <button 
                  onClick={() => addToCart(book)}
                  className="mt-auto w-full bg-stone-100 text-[#2c2c2c] py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#2c2c2c] hover:text-white transition-all"
                >
                  {isFr ? 'Ajouter au panier' : 'Añadir al carrito'}
                </button>
              </div>
            ))}
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-8 serif-font border-b border-gray-50 pb-4">
                {isFr ? 'Votre Panier' : 'Tu Carrito'}
              </h2>
              
              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-400 italic text-sm">
                  {isFr ? 'Votre panier est vide' : 'Tu carrito está vacío'}
                </div>
              ) : (
                <>
                  <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2">
                    <AnimatePresence>
                      {cart.map(item => (
                        <motion.div 
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex gap-4 items-center"
                        >
                          <img src={item.image} className="w-12 h-16 object-cover rounded-lg" referrerPolicy="no-referrer" />
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-sm truncate">{item.title}</h4>
                            <p className="text-xs text-amber-700 font-bold">{item.price}€</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-100 rounded"><Minus size={12} /></button>
                              <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-100 rounded"><Plus size={12} /></button>
                            </div>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  <div className="border-t border-gray-50 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{isFr ? 'Sous-total' : 'Subtotal'}</span>
                      <span className="font-bold">{total}€</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{isFr ? 'Livraison' : 'Envío'}</span>
                      <span className="text-green-600 text-xs font-bold uppercase tracking-widest">{isFr ? 'Offerte' : 'Gratis'}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg pt-2">
                      <span className="font-bold serif-font">Total</span>
                      <span className="font-bold text-amber-900">{total}€</span>
                    </div>
                    <button 
                      onClick={() => setIsCheckingOut(true)}
                      className="w-full bg-amber-800 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#2c2c2c] transition-all mt-4"
                    >
                      {isFr ? 'Valider la commande' : 'Confirmar pedido'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
