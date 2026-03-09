'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import events from '@/data/events.json'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, Trophy, Lightbulb, Music } from 'lucide-react'

export default function EventDetail() {
  const { id } = useParams()
  const router = useRouter()
  const event = events.find(e => e.id === id)
  const [isRegistering, setIsRegistering] = useState(false)
  const [step, setStep] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!event) return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Event Not Found</h1>
    </div>
  )


  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image 
            src={event.image} 
            alt={event.title}
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-12">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-foreground/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Events
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h1 className="text-4xl md:text-7xl font-black mt-4">{event.title}</h1>
            </div>
            <button 
              onClick={() => setIsRegistering(true)}
              disabled={event.status === 'Closed'}
              className={cn(
                "btn-primary text-xl px-12",
                event.status === 'Closed' && "opacity-50 cursor-not-allowed grayscale"
              )}
            >
              {event.status === 'Closed' ? 'Registration Closed' : 'Register Now'}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Event</h2>
              <p className="text-foreground/70 text-lg leading-relaxed whitespace-pre-wrap">
                {event.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Event Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, i) => (
                  <div key={i} className="flex gap-6 items-center glass-card p-6 rounded-2xl">
                    <div className="bg-accent-blue/20 p-4 rounded-xl text-accent-blue">
                      <Clock size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{item.time}</div>
                      <div className="text-foreground/60">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Events for Sagar Fiesta */}
            {event.id === 'sagar-fiesta-2026' && (
              <div className="pt-8">
                <h2 className="text-3xl font-bold mb-8">Featured Competitions & Workshops</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.filter(e => e.id !== 'sagar-fiesta-2026').slice(0, 12).map((subEvent) => (
                    <Link 
                      key={subEvent.id} 
                      href={`/events/${subEvent.id}`}
                      className="group relative h-80 glass-card rounded-2xl overflow-hidden hover:border-accent-blue/40 transition-all block"
                    >
                      {/* Event Graphic Poster */}
                      <div className="absolute inset-0 z-0">
                        <Image 
                          src={subEvent.image} 
                          alt={subEvent.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      </div>

                      <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                        <div className="flex justify-between items-start mb-auto">
                          <div className={cn(
                            "p-2 rounded-lg backdrop-blur-md border border-white/10",
                            subEvent.category === 'Nirmaan' ? "bg-accent-blue/20 text-accent-blue" :
                            subEvent.category === 'Samadhaan' ? "bg-accent-orange/20 text-accent-orange" :
                            "bg-purple-500/20 text-purple-400"
                          )}>
                            {subEvent.category === 'Nirmaan' ? <Trophy size={18} /> :
                             subEvent.category === 'Samadhaan' ? <Lightbulb size={18} /> :
                             <Music size={18} />}
                          </div>
                          <ExternalLink size={18} className="text-white/40 group-hover:text-white transition-colors" />
                        </div>
                        
                        <h3 className="font-bold text-xl mb-1 text-white drop-shadow-lg">{subEvent.title}</h3>
                        <p className="text-sm text-white/70 line-clamp-1 mb-2">{subEvent.description}</p>
                        
                        <div className="flex gap-2">
                          {subEvent.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {event.faq.map((item, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border-l-4 border-l-accent-orange">
                    <h3 className="font-bold mb-2">{item.q}</h3>
                    <p className="text-sm text-foreground/60">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold mb-6">Event Details</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <Calendar className="text-accent-blue" />
                  <div>
                    <div className="text-xs text-foreground/40 uppercase">Date</div>
                    <div className="font-semibold">{mounted ? new Date(event.date).toLocaleDateString() : '---'}</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="text-accent-blue" />
                  <div>
                    <div className="text-xs text-foreground/40 uppercase">Location</div>
                    <div className="font-semibold">SISTec Auditorium</div>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="text-accent-orange" />
                  <div>
                    <div className="text-xs text-foreground/40 uppercase">Status</div>
                    <div className="font-semibold">{event.status}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal Mock */}
      {isRegistering && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsRegistering(false)} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative glass-card w-full max-w-xl p-8 rounded-3xl overflow-hidden"
          >
            {step === 1 ? (
              <div>
                <h2 className="text-2xl font-bold mb-2">Register for {event.title}</h2>
                <p className="text-foreground/50 mb-8 font-medium">Step 1: Student Information</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-blue" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-blue" placeholder="john@sistec.ac.in" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">College ID</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent-blue" placeholder="0187CS211001" />
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="btn-primary w-full mt-6"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold mb-2">Registration Successful!</h2>
                <p className="text-foreground/50 mb-8">You've successfully registered for {event.title}. Check your email for more details.</p>
                <button 
                  onClick={() => setIsRegistering(false)}
                  className="btn-outline w-full"
                >
                  Close
                </button>
              </div>
            )}
            <button 
              onClick={() => setIsRegistering(false)}
              className="absolute top-6 right-6 text-foreground/40 hover:text-white"
            >
              <ArrowLeft size={24} className="rotate-90" />
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  )
}
