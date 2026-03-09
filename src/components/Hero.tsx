'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-orange/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            href="/events/sagar-fiesta-2026"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm hover:bg-white/10 hover:border-accent-orange transition-all group"
          >
            <Zap size={16} className="text-accent-orange group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-white/80">Sagar Fiesta 2026 is Landing Soon</span>
          </Link>

          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
            WHERE <span className="text-gradient">INNOVATION</span> <br />
            MEETS <span className="text-accent-blue">EXCELLENCE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-10 leading-relaxed">
            Experience central India's most waiting technical and cultural festival. 
            Join 5000+ students in a journey of creativity, technology, and competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#events" className="btn-primary flex items-center gap-2 group">
              Explore Events 
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#moments" className="btn-outline">
              SISTec Moments
            </Link>
          </div>
        </motion.div>

        {/* Floating Stat Cards for visual impact */}
        <div className="mt-20 mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Events', value: '40+' },
            { label: 'Colleges', value: '100+' },
            { label: 'Prizes', value: '₹5L+' },
            { label: 'Attendees', value: '5k+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-center min-h-[140px]"
            >
              <div className="text-3xl font-bold text-accent-blue mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-foreground/40 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
