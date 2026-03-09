'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Calendar, User, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Events', href: '/#events', icon: Calendar },
  { name: 'Timeline', href: '/#timeline', icon: Info },
  { name: 'Moments', href: '/#moments', icon: User },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-accent-blue">Sagar</span>
          <span className="text-accent-orange">Events</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-accent-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="btn-primary py-2 px-5 text-sm">Login Now</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col p-8 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-semibold border-b border-white/5 pb-4"
              >
                <link.icon className="text-accent-blue" />
                {link.name}
              </Link>
            ))}
            <Link href="/login" onClick={() => setIsOpen(false)} className="btn-primary w-full mt-4 text-center text-lg">Login Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
