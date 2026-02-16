'use client'

import { motion } from 'framer-motion'
import { UserPlus } from 'lucide-react'

export default function FAB() {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] group flex items-center gap-3 bg-accent-orange text-white p-4 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all"
    >
      <UserPlus size={24} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold">
        Become an Ambassador
      </span>
    </motion.button>
  )
}
