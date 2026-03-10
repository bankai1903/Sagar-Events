'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Shield, CreditCard, Landmark, Wallet } from 'lucide-react'
import Image from 'next/image'

interface CheckoutProps {
  amount: number
  eventName: string
  onComplete: () => void
  onCancel: () => void
}

export default function Checkout({ amount, eventName, onComplete, onCancel }: CheckoutProps) {
  const [method, setMethod] = useState<'card' | 'upi' | 'netbanking'>('card')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePay = () => {
    setIsProcessing(true)
    // Simulate payment delay
    setTimeout(() => {
      setIsProcessing(false)
      onComplete()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        {/* Left Side: Summary (HDFC Style) */}
        <div className="md:w-1/3 bg-slate-50 p-8 border-r border-slate-200">
          <div className="flex items-center gap-2 mb-12">
            <div className="bg-blue-800 text-white p-1 rounded font-bold text-xs">HDFC</div>
            <div className="font-bold text-blue-900 tracking-tight">HDFC BANK</div>
          </div>

          <div className="mb-8">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Company</div>
            <div className="font-bold text-slate-800">SISTec-GN Sagar Fiesta</div>
          </div>

          <div className="mb-8">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Event Item</div>
            <div className="font-bold text-slate-800">{eventName}</div>
          </div>

          <div className="mt-auto pt-12 border-t border-slate-200">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Amount to Pay</div>
            <div className="text-3xl font-black text-slate-900">₹{amount.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400 mt-1">Transaction ID: TXN_772839441</div>
          </div>
        </div>

        {/* Right Side: Payment Form */}
        <div className="flex-1 p-8 md:p-12">
          <button 
            onClick={onCancel}
            className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-8 text-slate-800">Choose Payment Method</h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {[
              { id: 'card', icon: CreditCard, label: 'Cards' },
              { id: 'upi', icon: Wallet, label: 'UPI/Wallets' },
              { id: 'netbanking', icon: Landmark, label: 'NetBanking' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setMethod(t.id as any)}
                className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  method === t.id 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' 
                    : 'border-slate-100 hover:border-slate-200 text-slate-500'
                }`}
              >
                <t.icon size={20} />
                <span className="text-xs font-bold">{t.label}</span>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {method === 'card' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Card Number</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:border-blue-600 transition-all font-mono" placeholder="4580 0000 0000 0000" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Expiry</label>
                    <input type="text" className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:border-blue-600 transition-all" placeholder="MM/YY" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">CVV</label>
                    <input type="password" name='cvv' className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:border-blue-600 transition-all" placeholder="•••" />
                  </div>
                </div>
              </motion.div>
            )}

            {method === 'upi' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">VPA / UPI ID</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg p-3 outline-none focus:border-blue-600 transition-all" placeholder="user@okaxis" />
                </div>
                <div className="text-center py-4">
                  <div className="inline-block p-4 border-2 border-slate-100 rounded-2xl bg-slate-50 mb-2">
                     <Image src="https://images.unsplash.com/photo-1623157521877-01309322312b?q=80&w=200" alt="QR Code Mock" width={120} height={120} className="grayscale opacity-30" />
                  </div>
                  <p className="text-[10px] text-slate-400 italic">Scan QR code for faster payment</p>
                </div>
              </motion.div>
            )}

            {method === 'netbanking' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 gap-3"
              >
                {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak', 'PNB'].map(bank => (
                  <button key={bank} className="p-3 border border-slate-100 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-blue-600 transition-all text-left">
                    {bank}
                  </button>
                ))}
              </motion.div>
            )}

            <button 
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white rounded-xl py-4 font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 mt-8 disabled:bg-blue-400"
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Secure Pay ₹{amount.toLocaleString()}</>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100 italic">
               <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <Shield size={12} className="text-blue-500" /> SSL SECURED
               </div>
               <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <Check size={12} className="text-green-500" /> PCI DSS COMPLIANT
               </div>
            </div>
            
            <div className="text-center">
              <span className="text-[10px] text-slate-400">Powered by </span>
              <span className="text-[10px] font-bold text-blue-900">CC-Avenue</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
