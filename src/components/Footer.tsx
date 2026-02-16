import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
            <span className="text-accent-blue">Sagar</span>
            <span className="text-accent-orange">Events</span>
          </Link>
          <p className="text-sm text-foreground/40 leading-relaxed">
            Sagar Institute of Science and Technology (SISTec) presents its annual tech-cultural fest. A platform for innovation and creativity.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-foreground/60">
            <li><Link href="#events" className="hover:text-accent-orange transition-colors">Event Schedule</Link></li>
            <li><Link href="#timeline" className="hover:text-accent-orange transition-colors">Timeline</Link></li>
            <li><Link href="#" className="hover:text-accent-orange transition-colors">Campus Ambassador</Link></li>
            <li><Link href="#" className="hover:text-accent-orange transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Contact Us</h4>
          <ul className="space-y-4 text-sm text-foreground/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent-blue shrink-0" />
              <span>Sagar Institute of Science & Technology, Gandhi Nagar, Bhopal</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent-blue shrink-0" />
              <span>+91 755 2627015</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent-blue shrink-0" />
              <span>events@sistec.ac.in</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Follow Us</h4>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <Link 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all shadow-lg"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 border-t border-white/5 text-center text-xs text-foreground/30">
        © 2026 Sagar Events (SISTec). All rights reserved. Designed for Excellence.
      </div>
    </footer>
  )
}
