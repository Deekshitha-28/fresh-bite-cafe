import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-cafe-500" />
              <span className="text-2xl font-serif font-bold text-white">FreshBite</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Crafting moments of joy through exceptional coffee and artisan food since 2015. Your neighborhood sanctuary for great taste and good vibes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cafe-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-cafe-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-cafe-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-cafe-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cafe-500 transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-cafe-500 transition-colors">Our Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-cafe-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-cafe-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>8:00 AM - 9:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>8:00 AM - 6:00 PM</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cafe-500 shrink-0" />
                <span>123 Coffee Lane, Artisan District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cafe-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cafe-500 shrink-0" />
                <span>hello@freshbitecafe.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2026 FreshBite Café. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
