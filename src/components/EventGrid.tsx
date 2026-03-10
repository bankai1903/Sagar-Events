'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EventCard from './EventCard'
import events from '@/data/events.json'

const categories = ['All']

export default function EventGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEvents = activeCategory === 'All' 
    ? events.filter(e => ['sagar-fiesta-2026', 'sagar-roadies-2026', 'ui-ux-design-challenge'].includes(e.id)) 
    : events.filter(e => e.category === activeCategory && ['sagar-fiesta-2026', 'sagar-roadies-2026', 'ui-ux-design-challenge'].includes(e.id))

  return (
    <section id="events" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">EXPLORE <span className="text-accent-orange">EVENTS</span></h2>
          <p className="text-foreground/50 max-w-md">
            Discover a wide range of technical and cultural events designed to push your limits.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                activeCategory === cat 
                  ? 'bg-accent-blue border-accent-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'border-white/10 hover:border-white/30 text-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
