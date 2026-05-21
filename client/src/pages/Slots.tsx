import { useState } from "react";
import { Link } from "wouter";
import { Star, Check, HelpCircle, ArrowRight, ShieldCheck, Play, Info, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SLOTS, CASINOS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";

export default function Slots() {
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [expandedType, setExpandedType] = useState<Record<string, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleType = (type: string) => {
    setExpandedType((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f2fad4]">
      <Header />

      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { name: "Casinos by Games", url: "/slots" },
          { name: "Online Slots" }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#265933] to-[#1e4728] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 text-gray-900 mb-2">
            <Play className="h-6 w-6 fill-current" />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-yellow-400">
            Online Slots Ireland
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Explore the best online slots in Ireland. Read expert reviews, check RTP percentages, play free demo versions, and find the top licensed casinos to play for real money.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-12 flex-grow">
        
        {/* Author Verification */}
        <div className="max-w-3xl mx-auto">
          <AuthorCard />
        </div>

        {/* Section: Slots Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 border-b border-[#d4e2b0] pb-3">
            Popular Online Slots
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SLOTS.map((slot) => (
              <div key={slot.id} className="bg-white rounded-xl border border-[#d4e2b0] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <img src={slot.logo} alt={slot.name} className="h-12 w-12 rounded-lg object-cover border border-gray-100" />
                    <div>
                      <h3 className="font-bold text-gray-900 hover:text-[#265933] transition-colors">
                        <Link href={slot.reviewUrl}>{slot.name}</Link>
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-yellow-600 font-bold mt-0.5">
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" /> {slot.rating}/5
                      </div>
                    </div>
                  </div>

                  {/* Slot Stats */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 p-3 rounded-lg">
                    <div>
                      <span className="text-gray-400 block">RTP</span>
                      <span className="font-bold text-gray-700">{slot.rtp}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Free Spins</span>
                      <span className="font-bold text-gray-700">{slot.freeSpins}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button asChild size="sm" className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold">
                      <a href={slot.refUrl} target="_blank" rel="noopener noreferrer">Play Real</a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="border-[#265933] text-[#265933] hover:bg-green-50 font-bold">
                      <Link href={slot.reviewUrl}>Review</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Tips to Win (Советы как выигрывать) */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
            <Award className="h-6 w-6 text-[#265933]" /> Tips for Playing Online Slots Responsibly
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            While online slots are games of pure chance, applying smart strategies can help you manage your bankroll and enhance your gaming experience:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm text-gray-900">1. Check the RTP</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Always look for slots with a Return to Player (RTP) of 96% or higher. This indicates a higher theoretical return over long-term play.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm text-gray-900">2. Understand Volatility</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                High volatility slots pay out larger amounts but less frequently. Low volatility slots offer smaller, more frequent wins. Choose the one that fits your budget.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm text-gray-900">3. Set a Strict Budget</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Never chase losses. Set a clear deposit and loss limit before you start playing, and stick to it strictly.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Types of Slots (Виды слотов с раскрывающимся текстом) */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
            Types of Online Slots
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Modern online casinos offer several categories of slot games to cater to different player preferences. Click on each type to learn more:
          </p>

          <div className="space-y-3 pt-2">
            {[
              {
                id: "classic",
                title: "Classic 3-Reel Slots",
                desc: "Inspired by traditional physical slot machines, these games feature 3 reels, simple paylines, and classic symbols like cherries, bars, and sevens. They are perfect for beginners who prefer straightforward gameplay."
              },
              {
                id: "video",
                title: "5-Reel Video Slots",
                desc: "The most common type of online slot. They feature 5 reels, multiple paylines (sometimes hundreds), immersive themes, high-quality graphics, and exciting bonus features like free spins, wilds, and interactive mini-games."
              },
              {
                id: "progressive",
                title: "Progressive Jackpot Slots",
                desc: "These slots feature a jackpot that increases every time a player places a bet across any casino hosting the game. A small percentage of each bet contributes to the jackpot pool, which can grow to millions of euros."
              }
            ].map((type) => (
              <div key={type.id} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleType(type.id)}
                  className="w-full p-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors text-left font-bold text-sm text-gray-900"
                >
                  {type.title}
                  <span className="text-xs text-gray-400 font-normal">
                    {expandedType[type.id] ? "Hide" : "Show details"}
                  </span>
                </button>
                {expandedType[type.id] && (
                  <div className="p-4 border-t border-gray-100 bg-white text-xs text-gray-600 leading-relaxed animate-slide-down">
                    {type.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            Online Slots FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Can I play online slots for free?",
                a: "Yes, most online casinos and review sites offer 'demo' or 'free play' versions of slots. This allows you to test the game, understand its features, and check its volatility without risking real money."
              },
              {
                q: "What is RTP in online slots?",
                a: "RTP stands for Return to Player. It is a theoretical percentage that indicates how much money a slot machine returns to players over millions of spins. For example, a 96% RTP slot theoretically returns €96 for every €100 wagered."
              },
              {
                q: "Are online slot outcomes genuinely random?",
                a: "Yes, licensed online slots use a Random Number Generator (RNG) to determine the outcome of every spin. These RNGs are regularly audited by independent testing agencies like eCOGRA to ensure fairness."
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
