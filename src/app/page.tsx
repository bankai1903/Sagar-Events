import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventGrid from "@/components/EventGrid";
import Footer from "@/components/Footer";
import FAB from "@/components/FAB";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <EventGrid />
      
      {/* Additional sections like Timeline and Moments can go here */}
      <section id="timeline" className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-12">FEST <span className="text-accent-blue">TIMELINE</span></h2>
        <div className="glass-card p-12 rounded-3xl">
          <p className="text-foreground/40 italic text-xl">Interactive Timeline Coming Soon...</p>
        </div>
      </section>

      <section id="moments" className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-12">SISTEC <span className="text-accent-orange">MOMENTS</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative aspect-square bg-white/5 rounded-2xl overflow-hidden group border border-white/5">
              <Image 
                src={`https://images.unsplash.com/photo-${1500000000000 + i * 1111111111}?auto=format&fit=crop&q=80&w=400`} 
                alt="Moment" 
                fill
                className="object-cover transition-transform group-hover:scale-125 duration-700 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FAB />
    </main>
  );
}
