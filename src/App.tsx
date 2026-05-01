import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook,
  CheckCircle2
} from 'lucide-react';
import { MENU_ITEMS, COMBOS, type MenuItem, type Combo } from './constants';

// --- Components ---

const Navbar = ({ cartCount, onCartClick }: { cartCount: number, onCartClick: () => void }) => (
  <nav className="fixed top-0 w-full z-40 bg-warm-beige/90 backdrop-blur-md border-b border-subtle px-12 py-5">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-coffee-dark rounded-full flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-warm-beige rounded-sm"></div>
        </div>
        <span className="font-serif text-xl font-bold tracking-tight uppercase">Brew & Bean</span>
      </div>
      
      <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-coffee-dark/60">
        <a href="#menu" className="hover:text-coffee-accent transition-colors">Selection</a>
        <a href="#combos" className="hover:text-coffee-accent transition-colors">Bundles</a>
        <a href="#location" className="hover:text-coffee-accent transition-colors">Atelier</a>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onCartClick}
          className="relative group flex items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-coffee-dark/40 group-hover:text-coffee-accent">Cart</span>
          <div className="p-2 border border-subtle rounded-full group-hover:border-coffee-accent transition-colors">
            <ShoppingBag size={18} className="group-hover:text-coffee-accent" />
          </div>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-coffee-accent text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-24 px-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-5"
      >
        <h1 className="text-7xl md:text-8xl font-serif italic mb-10 leading-[0.85]">
          Purely <br />Artisanal.
        </h1>
        <p className="text-lg text-coffee-dark/60 mb-10 leading-relaxed font-light max-w-sm">
          Sourced from the highlands of Ethiopia, roasted in small batches, and served fresh every morning.
        </p>
        <div className="flex items-center gap-8">
          <a 
            href="#menu" 
            className="px-10 py-4 bg-coffee-dark text-warm-beige rounded-full text-xs font-bold uppercase tracking-widest hover:bg-coffee-accent transition-all transform hover:scale-105 active:scale-95"
          >
            Order Now
          </a>
          <span className="text-[10px] font-bold uppercase tracking-widest text-coffee-dark/30 underline underline-offset-8">Explore Origins</span>
        </div>
      </motion.div>
      
      <div className="md:col-span-7 grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="aspect-[3/4] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <img 
            src="https://picsum.photos/seed/brew1/600/800" 
            alt="Process" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="aspect-[3/4] pt-20 overflow-hidden rounded-2xl"
        >
          <img 
            src="https://picsum.photos/seed/brew2/600/800" 
            alt="Interior" 
            className="w-full h-full object-cover rounded-2xl shadow-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const MenuSection = ({ onAdd }: { onAdd: (item: MenuItem) => void }) => (
  <section id="menu" className="py-32 px-12 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
      <div className="md:w-1/3">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-coffee-accent mb-10">Signature Beverages</h2>
        <div className="space-y-12">
          {MENU_ITEMS.filter(it => it.category === 'coffee').map(item => (
            <div key={item.id} className="group cursor-pointer" onClick={() => onAdd(item)}>
              <div className="flex justify-between items-end border-b border-subtle pb-3 group-hover:border-coffee-accent transition-colors">
                <div>
                  <h3 className="font-serif text-2xl mb-1">{item.name}</h3>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">{item.description}</p>
                </div>
                <span className="font-light text-xl">{item.price} AED</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/3">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-coffee-accent mb-10">Fresh Pastries</h2>
        <div className="space-y-12">
          {MENU_ITEMS.filter(it => it.category === 'pastry').map(item => (
            <div key={item.id} className="group cursor-pointer" onClick={() => onAdd(item)}>
              <div className="flex justify-between items-end border-b border-subtle pb-3 group-hover:border-coffee-accent transition-colors">
                <div>
                  <h3 className="font-serif text-2xl mb-1">{item.name}</h3>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">{item.description}</p>
                </div>
                <span className="font-light text-xl">{item.price} AED</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/3 h-fit sticky top-32">
        <div className="bg-subtle-bg p-10 rounded-2xl border border-subtle">
          <p className="text-xs font-bold uppercase tracking-widest text-coffee-accent mb-6 italic">Roast Profile</p>
          <div className="aspect-square bg-coffee-dark/5 rounded-xl mb-6 overflow-hidden">
             <img src="https://picsum.photos/seed/roast/400/400" className="w-full h-full object-cover mix-blend-multiply opacity-80" referrerPolicy="no-referrer" />
          </div>
          <h4 className="font-serif text-xl mb-2">Velvet Espresso</h4>
          <p className="text-xs text-coffee-dark/50 leading-relaxed">Single origin Arabica with notes of dark chocolate, berries, and a creamy caramel finish.</p>
        </div>
      </div>
    </div>
  </section>
);

const CombosSection = ({ onAddCombo }: { onAddCombo: (combo: Combo) => void }) => (
  <section id="combos" className="py-32 px-12 bg-subtle-bg">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-coffee-accent mb-16 text-center">Bundle Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COMBOS.map((combo, index) => (
          <motion.div 
            key={combo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl border border-subtle group hover:border-coffee-accent transition-all duration-500 hover:shadow-xl"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest text-coffee-accent bg-coffee-accent/10 px-2 py-1 rounded">Package</span>
            <h3 className="font-serif text-3xl mt-6 mb-2">{combo.name}</h3>
            <p className="text-sm text-coffee-dark/50 mb-8 font-light">{combo.description}</p>
            <div className="space-y-3 mb-10">
              {combo.items.map((it, i) => (
                <div key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-coffee-dark/40">
                  <div className="w-1 h-1 bg-coffee-accent rounded-full"></div>
                  {it}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-8 border-t border-subtle">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest font-bold opacity-30">Price</span>
                <span className="text-2xl font-light">{combo.price} AED</span>
              </div>
              <button 
                onClick={() => onAddCombo(combo)}
                className="bg-coffee-dark text-warm-beige p-4 rounded-full hover:bg-coffee-accent transition-all transform hover:scale-110"
              >
                <Plus size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQty,
  onCheckout
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  items: any[],
  onUpdateQty: (id: string, delta: number) => void,
  onCheckout: () => void
}) => {
  const total = useMemo(() => items.reduce((sum, it) => sum + (it.price * it.quantity), 0), [items]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-coffee-dark/20 backdrop-blur-sm z-50"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-subtle-bg z-50 shadow-2xl flex flex-col border-l border-subtle"
          >
            <div className="p-10 border-b border-subtle flex justify-between items-center bg-warm-beige">
              <div>
                <h2 className="text-2xl font-serif mb-1 italic">Order Summary</h2>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-coffee-accent rounded-full"></div>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-coffee-dark/40">Brew & Bean Atelier</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-coffee-dark/5 rounded-full transition-colors border border-subtle"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-10 cart-scroll-mask">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-coffee-dark/5 rounded-full flex items-center justify-center mb-6 border border-dashed border-subtle">
                    <ShoppingBag size={24} className="opacity-20" />
                  </div>
                  <p className="font-serif text-xl mb-2 italic">Basket is empty</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-30">Select items to begin</p>
                </div>
              ) : (
                <div className="space-y-10">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-6 items-center">
                      <div className="w-20 h-24 rounded-xl overflow-hidden bg-white border border-subtle p-1 flex-shrink-0">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-serif text-lg leading-none">{item.name}</h4>
                          <button onClick={() => onUpdateQty(item.id, -item.quantity)} className="text-[9px] font-bold uppercase tracking-widest opacity-30 hover:text-red-500">Remove</button>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-light">{item.price} AED</p>
                          <div className="flex items-center gap-4 bg-white px-3 py-1.5 rounded-full border border-subtle">
                            <button onClick={() => onUpdateQty(item.id, -1)} className="p-1 hover:text-coffee-accent transition-colors">
                              <Minus size={12} />
                            </button>
                            <span className="text-[11px] font-bold w-4 text-center">{item.quantity}</span>
                            <button onClick={() => onUpdateQty(item.id, 1)} className="p-1 hover:text-coffee-accent transition-colors">
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-10 bg-warm-beige border-t border-subtle">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-coffee-dark/40 mb-2">Subtotal</p>
                  <p className="text-4xl font-light tracking-tighter">{total}.00 AED</p>
                </div>
                <p className="text-[10px] text-coffee-accent font-bold uppercase tracking-widest">VAT Included</p>
              </div>
              <button 
                onClick={onCheckout}
                disabled={items.length === 0}
                className="w-full bg-coffee-dark text-warm-beige py-6 rounded-2xl font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-coffee-accent transition-all disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-xl"
              >
                Review Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(it => it.id === product.id);
      if (existing) {
        return prev.map(it => it.id === product.id ? { ...it, quantity: it.quantity + 1 } : it);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(it => {
        if (it.id === id) {
          const newQty = it.quantity + delta;
          return newQty > 0 ? { ...it, quantity: newQty } : null;
        }
        return it;
      }).filter(Boolean);
    });
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setCart([]);
    setTimeout(() => {
      setCheckoutComplete(false);
      setCartOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen selection:bg-coffee-accent selection:text-white">
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      
      <main>
        <Hero />
        <MenuSection onAdd={addToCart} />
        <CombosSection onAddCombo={addToCart} />

        {/* Location Section */}
        <section id="location" className="py-24 px-6 bg-coffee-accent/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Visit Our <br /> <span className="text-coffee-accent italic">Coffee Haven</span></h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><MapPin className="text-coffee-accent" /></div>
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Address</h4>
                    <p className="text-coffee-dark/70">Downtown Dubai, Al Marabea St.<br />Building 4, Unit 12</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><Clock className="text-coffee-accent" /></div>
                  <div>
                    <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Hours</h4>
                    <p className="text-coffee-dark/70">Weekdays: 7 AM - 10 PM<br />Weekends: 8 AM - 11 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video md:aspect-[4/3] bg-coffee-dark/5 rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-coffee-accent/10">
              <img 
                src="https://picsum.photos/seed/map/1000/800" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-coffee-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="text-coffee-accent" size={24} />
              <span className="font-serif text-xl font-semibold">Brew & Bean</span>
            </div>
            <p className="text-coffee-dark/50 text-sm max-w-sm leading-relaxed italic">
              "A cup of coffee is a moment of stillness in a chaotic world. Let us craft that moment for you."
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6">Let's Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-coffee-dark/5 rounded-full hover:bg-coffee-accent hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="p-3 bg-coffee-dark/5 rounded-full hover:bg-coffee-accent hover:text-white transition-all"><Facebook size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white border border-coffee-accent/20 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coffee-accent/50"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-coffee-dark text-warm-beige rounded-full hover:bg-coffee-accent transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-coffee-accent/5 flex justify-between text-[10px] uppercase font-bold tracking-[0.3em] text-coffee-dark/30">
          <span>&copy; 2026 Brew & Bean Coffee Roasters</span>
          <span className="hidden md:block">Handcrafted in Dubai</span>
        </div>
      </footer>

      {/* Overlays */}
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={cart}
        onUpdateQty={updateQuantity}
        onCheckout={handleCheckout}
      />

      <AnimatePresence>
        {checkoutComplete && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] bg-coffee-dark text-warm-beige px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <CheckCircle2 className="text-green-400" />
            <div>
              <p className="font-bold text-sm tracking-widest uppercase">Special Order Placed!</p>
              <p className="text-xs opacity-60">We're preparing your treats...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
