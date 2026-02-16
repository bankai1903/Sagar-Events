'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EventProps {
  event: {
    id: string
    title: string
    category: string
    date: string
    status: string
    description: string
    image: string
    tags: string[]
  }
}

export default function EventCard({ event }: EventProps) {
  const statusColors: Record<string, string> = {
    'Open': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Filling Fast': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Closed': 'bg-red-500/20 text-red-400 border-red-500/30',
  }

  const date = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:border-accent-blue/50 transition-colors"
    >
      <Link href={`/events/${event.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={event.image} 
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md",
              statusColors[event.status] || 'bg-white/10 text-white border-white/20'
            )}>
              {event.status}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
              <span className="text-sm font-bold text-white">{date}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-2">
          {event.category}
        </div>
        <Link href={`/events/${event.id}`}>
          <h3 className="text-xl font-bold mb-3 group-hover:text-accent-orange transition-colors">
            {event.title}
          </h3>
        </Link>
        <p className="text-sm text-foreground/60 mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-2">
            {event.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/40">
                #{tag}
              </span>
            ))}
          </div>
          <Link 
            href={`/events/${event.id}`}
            className="p-2 rounded-full bg-white/5 hover:bg-accent-blue hover:text-white transition-all"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
