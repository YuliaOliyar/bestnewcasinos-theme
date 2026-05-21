import { useState } from "react";
import { Link } from "wouter";
import { Star, Check, HelpCircle, ArrowRight, ShieldCheck, Play, Info, Award, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SLOTS, CASINOS, Slot } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";

export default function SlotDetail() {
  const slot: Slot = SLOTS[0]; // Default to Pirots Slot for the template
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f2fad4]">
      <Header />

      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { name: "Online Slots", url: "/slots" },
          { name: slot.name }
        ]} 
      />

      {/* Hero Slot Card */}
      <section className="py-10 bg-gradient-to-b from-[#265933] to-[#1e4728] text-white">
        <div className="container mx-auto px-4">
          <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-xl space-y-6">
            
            {/* Top Row: Logo, Title, Rating */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left border-b border-gray-100 pb-6">
              <img 
                src={slot.logo} 
                alt={`${slot.name} Logo`} 
                className="h-20 w-20 rounded-2xl object-cover border border-gray-100 shadow-md"
              />
              <div className="space-y-1.5">
                <span className="bg-green-100 text-[#265933] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Slot Review
                </span>
                <h1 className="text-3xl font-serif font-bold text-gray-900">
                  {slot.name} Review
                </h1>
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(slot.rating) ? "fill-yellow-400" : "text-gray-200"}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-700 ml-1">{slot.rating}/5</span>
                </div>
              </div>
            </div>

            {/* Middle Row: Slot Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 text-center">
              {[
                { label: "RTP", val: slot.rtp },
                { label: "Free Spins", val: slot.freeSpins },
                { label: "Reels", val: slot.reels },
                { label: "Paylines", val: slot.lines },
                { label: "Effort Level", val: slot.effort }
              ].map((item) => (
                <div key={item.label} className="space-y-1 border-r border-gray-200 last:border-none">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block">{item.label}</span>
                  <span className="text-base font-bold text-gray-900">{item.val}</span>
                </div>
              ))}
            </div>

            {/* Bottom Row: Bonuses & Features */}
            <div className="pt-2">
              <span className="text-xs text-gray-400 block">Special Features & Bonuses</span>
              <span className="text-sm font-bold text-green-800">{slot.bonuses}</span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-12 flex-grow">
        
        {/* Grid Layout: Left Content, Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Detailed Review */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Author Block */}
            <AuthorCard />

            {/* Section: Interactive Slot Demo Placeholder */}
            <section className="bg-white rounded-2xl p-6 border border-[#d4e2b0] shadow-sm space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
                Play {slot.name} Free Demo
              </h2>
              
              {/* Demo Game Screen */}
              <div className="relative aspect-video bg-gray-950 rounded-xl overflow-hidden flex flex-col items-center justify-center text-white border border-gray-800 shadow-inner group">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 filter blur-sm" style={{ backgroundImage: `url('${slot.logo}')` }} />
                <div className="relative z-10 text-center space-y-4 p-6">
                  <div className="h-16 w-16 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-8 w-8 fill-current ml-1" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg">{slot.name} Demo Mode</h3>
                    <p className="text-xs text-gray-400">Click to load the interactive slot simulator. No registration required.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Where to Play for Real Money */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
                Best Casinos to Play {slot.name} for Real Money
              </h2>
              <div className="space-y-4">
                {CASINOS.slice(0, 2).map((casino) => (
                  <div key={casino.id} className="bg-white rounded-xl border border-[#d4e2b0] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <img src={casino.logo} alt={casino.name} className="h-12 w-12 rounded-lg object-cover" />
                      <div>
                        <h3 className="font-bold text-gray-900 hover:text-[#265933] transition-colors">
                          <Link href={casino.reviewUrl}>{casino.name}</Link>
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-yellow-600 font-bold mt-0.5">
                          <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" /> {casino.rating.overall}/5
                        </div>
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] text-gray-400 block">Welcome Offer</span>
                      <span className="text-xs font-bold text-green-800">{casino.bonus}</span>
                    </div>
                    <Button asChild size="sm" className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold shrink-0">
                      <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">Play Now</a>
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Pros & Cons */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-green-200 shadow-sm space-y-3">
                <h4 className="font-serif font-bold text-green-800 flex items-center gap-1.5">
                  <ThumbsUp className="h-4 w-4 text-green-600" /> Pros
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>High RTP of {slot.rtp} offers great theoretical returns.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>Exciting bonus features: {slot.bonuses}.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 border border-red-200 shadow-sm space-y-3">
                <h4 className="font-serif font-bold text-red-800 flex items-center gap-1.5">
                  <ThumbsDown className="h-4 w-4 text-red-600" /> Cons
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span>Medium-to-high volatility might not suit casual players.</span>
                  </li>
                </ul>
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            
            {/* Sidebar Quick Info */}
            <div className="bg-white rounded-2xl p-6 border border-[#d4e2b0] shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-base text-gray-900 border-b border-gray-100 pb-2">
                Slot Specifications
              </h3>
              <ul className="space-y-3 text-xs text-gray-600">
                <li className="flex justify-between">
                  <span className="font-medium">RTP:</span>
                  <span className="font-bold text-gray-900">{slot.rtp}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Volatility:</span>
                  <span className="font-bold text-gray-900">Medium / High</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Reels:</span>
                  <span className="font-bold text-gray-900">{slot.reels}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Paylines:</span>
                  <span className="font-bold text-gray-900">{slot.lines}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Section: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            {slot.name} FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: `What is the RTP of ${slot.name}?`,
                a: `The Return to Player (RTP) of ${slot.name} is ${slot.rtp}, which is slightly above the industry average of 96% for online video slots.`
              },
              {
                q: `Does ${slot.name} have a free spins bonus round?`,
                a: `Yes, ${slot.name} features an exciting free spins / free drops bonus round that can be triggered by landing scatter symbols during the base game.`
              }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-4 last:border-none last:pb-0">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left py-2 font-bold text-gray-900 hover:text-[#265933] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-[#265933] shrink-0" />
                    {item.q}
                  </span>
                  <span className="text-xs text-gray-400 font-normal shrink-0">
                    {faqOpen[idx] ? "Collapse" : "Expand"}
                  </span>
                </button>
                {faqOpen[idx] && (
                  <p className="mt-2 pl-7 text-sm text-gray-600 leading-relaxed animate-slide-down">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
