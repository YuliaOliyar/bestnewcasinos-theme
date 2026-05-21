import { useState } from "react";
import { Link } from "wouter";
import { Star, Check, HelpCircle, ArrowRight, ShieldCheck, Percent, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CASINOS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";

export default function Bonuses() {
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
          { name: "Casino Bonuses", url: "/bonuses/cashback" },
          { name: "Cashback Bonuses" }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#265933] to-[#1e4728] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 text-gray-900 mb-2">
            <Percent className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-yellow-400">
            Best Cashback Bonuses Ireland
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Get a percentage of your losses back as real cash. Explore the top-rated Irish online casinos offering daily, weekly, and monthly cashback bonuses with low or zero wagering requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-12 flex-grow">
        
        {/* Author Verification */}
        <div className="max-w-3xl mx-auto">
          <AuthorCard />
        </div>

        {/* Section: Bonuses Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 border-b border-[#d4e2b0] pb-3">
            Top Cashback Casino Offers
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {CASINOS.slice(0, 3).map((casino) => (
              <div key={casino.id} className="bg-white rounded-xl border border-[#d4e2b0] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={casino.logo} alt={casino.name} className="h-16 w-16 rounded-xl object-cover border border-gray-100" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-gray-900 hover:text-[#265933] transition-colors">
                      <Link href={casino.reviewUrl}>{casino.name}</Link>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-yellow-600 font-bold mt-0.5">
                      <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" /> {casino.rating.overall}/5
                    </div>
                  </div>
                </div>

                {/* Bonus Highlight */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center md:text-left shrink-0 md:w-80">
                  <span className="text-[10px] font-bold text-[#265933] uppercase block">Cashback Bonus</span>
                  <span className="text-base font-bold text-green-800">{casino.bonus}</span>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2 w-full md:w-44 shrink-0">
                  <Button asChild className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold">
                    <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">Claim Cashback</a>
                  </Button>
                  <Button asChild variant="outline" className="border-[#265933] text-[#265933] hover:bg-green-50 font-bold">
                    <Link href={casino.reviewUrl}>Read Review</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: How Cashback Works */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
            How Do Cashback Bonuses Work?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Unlike traditional match deposit bonuses, a cashback bonus refunds a percentage of your net losses over a specific period. For example, if a casino offers a 10% weekly cashback and you lose €100, you will receive €10 back in your account.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The best part about cashback bonuses is that they often come with <strong>zero wagering requirements</strong>, meaning you can withdraw the refunded cash immediately or use it to play any games you like.
          </p>
        </section>

        {/* Section: Terms & Conditions (T&C) */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-yellow-600" /> Important Cashback Terms & Conditions
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            While cashback offers are highly player-friendly, they always come with specific terms that you must understand:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
              <span><strong>Net Loss Calculation:</strong> Cashback is calculated on net losses (deposits minus withdrawals), not total bets.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
              <span><strong>Wagering Requirements:</strong> Check if the cashback is credited as raw cash or bonus funds requiring wagering.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
              <span><strong>Minimum Loss:</strong> Most casinos require a minimum loss (e.g., €10) during the period to trigger cashback.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
              <span><strong>Game Restrictions:</strong> Some games (like live dealer tables) might be excluded from cashback calculations.</span>
            </li>
          </ul>
        </section>

        {/* Section: Pros & Cons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-green-200 shadow-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-green-800 flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-green-600" /> Pros of Cashback Bonuses
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Provides a safety net and reduces the impact of losing streaks.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Often has zero or extremely low wagering requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Usually credited automatically without needing bonus codes.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-red-800 flex items-center gap-2">
              <ThumbsDown className="h-5 w-5 text-red-600" /> Cons of Cashback Bonuses
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>You must lose money first to receive any bonus funds.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>Cashback percentages are usually modest (typically 10% to 20%).</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>May have a maximum cap on the cashback amount you can receive.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            Cashback Bonuses FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Is cashback real money?",
                a: "At the best casinos, yes. Many top-tier Irish casinos credit cashback as real cash with zero wagering requirements. However, some casinos credit it as bonus money with 1x-5x wagering."
              },
              {
                q: "How often is cashback paid out?",
                a: "It depends on the casino. The most common intervals are weekly (usually on Mondays) or daily. Some casinos also offer monthly cashback."
              },
              {
                q: "Do I need a bonus code to claim cashback?",
                a: "Usually, no. Most modern casinos enroll players in their cashback programs automatically upon registration or first deposit."
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
