'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Lock, LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login
    router.push('/')
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-orange/10 rounded-full blur-[100px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 md:p-12 rounded-3xl relative z-10"
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black mb-2 tracking-tighter">
            WELCOME <span className="text-accent-blue">BACK</span>
          </h1>
          <p className="text-foreground/50 text-sm">Login to manage your event registrations</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-accent-blue focus:bg-white/10 transition-all text-sm" 
                placeholder="name@sistec.ac.in" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/60">Password</label>
              <Link href="#" className="text-[10px] text-accent-blue hover:underline">Forgot Password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-accent-blue focus:bg-white/10 transition-all text-sm" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-sm font-bold mt-4 shadow-[0_10px_20px_rgba(59,130,246,0.2)]">
            <LogIn size={18} />
            LOGIN TO PORTAL
          </button>
        </form>

        <p className="text-center mt-10 text-sm text-foreground/40">
          Don't have an account? <Link href="#" className="text-accent-orange font-bold hover:underline">Register as Student</Link>
        </p>
      </motion.div>
    </main>
  )
}
