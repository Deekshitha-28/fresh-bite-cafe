import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Utensils, Beer, Loader2 } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image?: string;
}

interface MenuData {
  breakfast: MenuItem[];
  lunch: MenuItem[];
  beverages: MenuItem[];
}

export default function Menu() {
  const [menu, setMenu] = useState<MenuData | null>(null);
  const [activeCategory, setActiveCategory] = useState<keyof MenuData>('breakfast');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch menu:', err);
        setLoading(false);
      });
  }, []);

  const categories = [
    { id: 'breakfast', label: 'Breakfast', icon: <Coffee className="h-5 w-5" /> },
    { id: 'lunch', label: 'Lunch', icon: <Utensils className="h-5 w-5" /> },
    { id: 'beverages', label: 'Beverages', icon: <Beer className="h-5 w-5" /> },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-cafe-600" />
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-stone-900 dark:text-white mb-4">Our Menu</h1>
          <p className="text-stone-600 dark:text-stone-400">Freshly prepared, ethically sourced, and made with love.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as keyof MenuData)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cafe-600 text-white shadow-lg'
                  : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100 dark:border-stone-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
            >
              {menu && menu[activeCategory].map((item) => (
                <div key={item.id} className="group flex flex-col sm:flex-row gap-5 items-start">
                  {item.image && (
                    <div className="w-full sm:w-28 sm:h-28 h-48 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-stone-100 dark:border-stone-800">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-white group-hover:text-cafe-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-cafe-600 font-bold ml-3 shrink-0">{item.price}</span>
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-stone-500 italic">
            * Please inform our staff of any allergies or dietary requirements before ordering.
          </p>
        </div>
      </div>
    </div>
  );
}
