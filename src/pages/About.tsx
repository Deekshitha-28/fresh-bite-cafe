import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Coffee className="h-6 w-6" />, label: "Cups Served", value: "50k+" },
    { icon: <Users className="h-6 w-6" />, label: "Happy Guests", value: "12k+" },
    { icon: <Heart className="h-6 w-6" />, label: "Years of Love", value: "8+" },
    { icon: <Award className="h-6 w-6" />, label: "Awards Won", value: "15" },
  ];

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-cafe-100 dark:bg-stone-900 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold text-stone-900 dark:text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto"
          >
            A journey of taste, community, and the pursuit of the perfect cup.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
              At FreshBite, we believe that a café is more than just a place to get coffee. It's a sanctuary, a workspace, and a meeting point for the community. Our mission is to provide an unparalleled experience through artisan craftsmanship and genuine hospitality.
            </p>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              We source our beans from sustainable farms across the globe, ensuring that every sip supports ethical practices and delivers extraordinary flavor profiles.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cafe-50 dark:bg-cafe-900/30 text-cafe-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-stone-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-stone-500 dark:text-stone-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-stone-600 dark:text-stone-400">The passionate people behind your favorite brew.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Julian Smith", role: "Founder & Head Roaster", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Emma Wilson", role: "Lead Barista", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
              { name: "David Chen", role: "Executive Chef", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">{member.name}</h3>
                <p className="text-stone-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
