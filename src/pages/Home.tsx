import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Utensils, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    { icon: <Coffee className="h-6 w-6" />, title: "Artisan Coffee", description: "Ethically sourced beans, roasted to perfection." },
    { icon: <Utensils className="h-6 w-6" />, title: "Fresh Ingredients", description: "Farm-to-table meals prepared daily." },
    { icon: <Clock className="h-6 w-6" />, title: "Cozy Ambiance", description: "The perfect spot to work, relax, or catch up." },
  ];

  const testimonials = [
    { name: "Sarah J.", role: "Local Guide", text: "The best latte in the city! The atmosphere is so welcoming.", rating: 5 },
    { name: "Mark D.", role: "Coffee Enthusiast", text: "FreshBite is my daily ritual. Their avocado toast is unmatched.", rating: 5 },
    { name: "Elena R.", role: "Freelance Writer", text: "Great Wi-Fi and even better coffee. My favorite workspace.", rating: 5 },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1920"
            alt="Cafe Interior"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Savor the Moment at <span className="text-cafe-400">FreshBite</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto"
          >
            Experience the perfect blend of artisan coffee and fresh, locally sourced food in the heart of the city.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-cafe-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-cafe-700 transition-all flex items-center justify-center group"
            >
              Explore Menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-stone-50 dark:bg-stone-800 hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cafe-100 dark:bg-cafe-900/30 text-cafe-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-stone-600 dark:text-stone-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-cafe-50 dark:bg-stone-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                  alt="Barista at work"
                  className="rounded-2xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-cafe-200 dark:bg-cafe-900/20 rounded-2xl -z-0" />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-serif font-bold text-stone-900 dark:text-white mb-6"
              >
                Our Story: Passion for the Perfect Brew
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-stone-600 dark:text-stone-400 mb-8 leading-relaxed"
              >
                Founded in 2015, FreshBite Café started with a simple mission: to create a space where community and quality meet. We believe that every cup of coffee tells a story, and we're here to make yours exceptional.
              </motion.p>
              <Link
                to="/about"
                className="inline-flex items-center text-cafe-600 font-bold hover:text-cafe-700 transition-colors"
              >
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 dark:text-white mb-4">What Our Guests Say</h2>
            <p className="text-stone-600 dark:text-stone-400">Real stories from our wonderful community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 dark:bg-stone-800 p-8 rounded-2xl border border-stone-100 dark:border-stone-700"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-stone-700 dark:text-stone-300 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-stone-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-stone-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
