import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Star, Check, HelpCircle, ArrowRight, ShieldCheck, Award, Calendar, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CASINOS, SLOTS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";

export default function Home() {
  const [activeSection, setActiveSection] = useState("showcase");
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Horizontal scroll navigation links
  const pageSections = [
    { id: "showcase", name: "New Casinos Showcase" },
    { id: "top5", name: "Top 5 Casinos" },
    { id: "mobile", name: "Mobile Comparison" },
    { id: "how-we-rate", name: "How We Rate" },
    { id: "new-slots", name: "New Slots" },
    { id: "faq", name: "FAQ" }
  ];

  // Handle scroll spy for horizontal navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of pageSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 120;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f2fad4]">
      <Header />
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: "New Online Casinos Ireland" }]} />

      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24 text-white overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(38, 89, 51, 0.9), rgba(17, 20, 38, 0.95)), url('https://d2xsxph8kpxj0f.cloudfront.net/310519663200285774/GRjtn9nGvrvbUSD2fuH7YJ/hero-bg-ENJL8J8qMBCtiLBRWouUho.webp')` 
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Updated for May 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-yellow-400">
            New Online Casinos Ireland
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Discover licensed, secure, and fully verified new Irish online casinos. We review game selections, exclusive bonuses, and fast payout methods like Revolut to keep you safe.
          </p>
          
          {/* Author Verification Block */}
          <div className="max-w-xl mx-auto">
            <AuthorCard />
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Navigation */}
      <div className="sticky top-[65px] z-40 bg-white border-b border-[#d4e2b0] shadow-sm overflow-x-auto scrollbar-none">
        <div className="container mx-auto px-4 flex space-x-6 py-3.5 whitespace-nowrap">
          {pageSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`text-sm font-bold transition-colors pb-1 border-b-2 ${
                activeSection === sec.id 
                  ? "text-[#265933] border-[#265933]" 
                  : "text-gray-500 border-transparent hover:text-[#265933]"
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-16 flex-grow">
        
        {/* Section 1: Showcase (Витрина казино) */}
        <section id="showcase" className="space-y-6 scroll-mt-28">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d4e2b0] pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 flex items-center gap-2">
                <Award className="h-7 w-7 text-[#265933]" /> Verified New Irish Casinos
              </h2>
              <p className="text-sm text-gray-600 mt-1">Shortcode: <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 text-xs font-mono">[sl-casinos]</code></p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-[#d4e2b0]">
              <Calendar className="h-4 w-4 text-[#265933]" /> Last Updated: May 21, 2026
            </div>
          </div>

          {/* Casino Cards Grid */}
          <div className="grid grid-cols-1 gap-6">
            {CASINOS.map((casino, index) => {
              // Top 3 border colors
              let borderClass = "border-[#d4e2b0]";
              let badgeText = "";
              let badgeColor = "";
              
              if (index === 0) {
                borderClass = "border-2 border-[#f0cb2e] shadow-lg shadow-yellow-100/50";
                badgeText = "1st Place";
                badgeColor = "bg-[#f0cb2e] text-gray-900";
              } else if (index === 1) {
                borderClass = "border-2 border-[#c0c0c0] shadow-md";
                badgeText = "2nd Place";
                badgeColor = "bg-[#c0c0c0] text-gray-900";
              } else if (index === 2) {
                borderClass = "border-2 border-[#d28c47] shadow-sm";
                badgeText = "3rd Place";
                badgeColor = "bg-[#d28c47] text-white";
              }

              return (
                <div 
                  key={casino.id} 
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-2px] ${borderClass}`}
                >
                  <div className="p-5 md:p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
                    {/* Left: Logo & Rank */}
                    <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
                      <div className="relative">
                        <img 
                          src={casino.logo} 
                          alt={`${casino.name} Logo`} 
                          className="h-20 w-20 rounded-xl object-cover border border-gray-100 shadow-inner"
                        />
                        {badgeText && (
                          <span className={`absolute -top-2.5 -left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${badgeColor}`}>
                            {badgeText}
                          </span>
                        )}
                      </div>
                      <div className="text-center sm:text-left space-y-1">
                        <h3 className="text-xl font-serif font-bold text-gray-900 hover:text-[#265933] transition-colors">
                          <Link href={casino.reviewUrl}>{casino.name}</Link>
                        </h3>
                        <div className="flex items-center justify-center sm:justify-start gap-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(casino.rating.overall) ? "fill-yellow-400" : "text-gray-200"}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm font-bold text-gray-700 ml-1">{casino.rating.overall}/5</span>
                        </div>
                        <p className="text-xs text-gray-500">Launched: <span className="font-semibold text-gray-700">{casino.launchYear}</span></p>
                      </div>
                    </div>

                    {/* Middle: Features & Bonus */}
                    <div className="flex-grow w-full lg:max-w-md space-y-3">
                      {/* Bonus Banner */}
                      <a 
                        href={casino.refUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block bg-green-50 hover:bg-green-100/80 border border-green-100 rounded-lg p-3 text-center transition-colors group"
                      >
                        <span className="text-[10px] font-bold text-[#265933] uppercase tracking-wider block">Exclusive Welcome Offer</span>
                        <span className="text-sm md:text-base font-bold text-green-800 group-hover:underline">{casino.bonus}</span>
                      </a>
                      {/* Features List */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-600">
                        {casino.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-green-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: CTA Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-48 shrink-0">
                      <Button 
                        asChild 
                        className="w-full bg-[#265933] hover:bg-[#1e4728] text-white font-bold h-11 shadow-sm"
                      >
                        <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">
                          Visit Casino <ArrowRight className="ml-1.5 h-4 w-4" />
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full border-[#265933] text-[#265933] hover:bg-green-50 font-bold h-11"
                      >
                        <Link href={casino.reviewUrl}>Read Review</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Top 5 Description (Описание топ-5 казино) */}
        <section id="top5" className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            Top 5 New Online Casinos Reviewed
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our editorial team has meticulously analyzed the best new online casinos in Ireland. Below is a detailed breakdown of the top platforms, focusing on their unique selling points, security, and player benefits.
          </p>

          <div className="space-y-6">
            {CASINOS.slice(0, 3).map((casino, idx) => (
              <div key={casino.id} className="flex flex-col md:flex-row gap-5 p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                <div className="flex items-center gap-3 shrink-0 md:flex-col md:items-start">
                  <img src={casino.logo} alt={casino.name} className="h-12 w-12 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-bold text-gray-900">{idx + 1}. {casino.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-yellow-600 font-bold mt-0.5">
                      <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" /> {casino.rating.overall}/5
                    </div>
                  </div>
                </div>
                <div className="flex-grow space-y-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>{casino.name}</strong> stands out as a premier choice for Irish players in 2026. It offers a stellar bonus of <em>{casino.bonus}</em> with extremely fair terms. With a minimum deposit of just {casino.minDeposit}, it is highly accessible for casual players and high rollers alike.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <a href={casino.refUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#265933] hover:underline flex items-center gap-1">
                      Visit {casino.name} <ArrowRight className="h-3 w-3" />
                    </a>
                    <Link href={casino.reviewUrl} className="text-xs font-semibold text-gray-500 hover:text-[#265933] transition-colors">
                      Read full review
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Mobile Comparison (Сравнение мобильных казино) */}
        <section id="mobile" className="space-y-6 scroll-mt-28">
          <div className="border-b border-[#d4e2b0] pb-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              New Mobile Casinos Comparison
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Compare the top mobile-optimized casinos in Ireland. Find the best fit for your smartphone or tablet.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl border border-[#d4e2b0] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#265933] text-white text-xs uppercase tracking-wider">
                    <th className="p-4 font-bold">Casino</th>
                    <th className="p-4 font-bold">Rating</th>
                    <th className="p-4 font-bold">Welcome Bonus</th>
                    <th className="p-4 font-bold">Min Deposit</th>
                    <th className="p-4 font-bold">Payment Methods</th>
                    <th className="p-4 font-bold">License</th>
                    <th className="p-4 font-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {CASINOS.slice(0, 3).map((casino) => (
                    <tr key={casino.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={casino.logo} alt={casino.name} className="h-10 w-10 rounded-lg object-cover" />
                          <div>
                            <Link href={casino.reviewUrl} className="font-bold text-gray-900 hover:text-[#265933] block">
                              {casino.name}
                            </Link>
                            <span className="text-[10px] text-gray-400">Est. {casino.launchYear}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 font-bold text-gray-900">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {casino.rating.overall}
                        </div>
                      </td>
                      <td className="p-4 font-medium text-green-800">{casino.bonus}</td>
                      <td className="p-4 font-semibold">{casino.minDeposit}</td>
                      <td className="p-4 text-xs text-gray-500 max-w-[150px] truncate">
                        {casino.paymentMethods.join(", ")}
                      </td>
                      <td className="p-4 text-xs font-medium">{casino.license}</td>
                      <td className="p-4 text-center">
                        <Button asChild size="sm" className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold">
                          <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">Visit</a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: How We Rate (Как мы оцениваем) */}
        <section id="how-we-rate" className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-8 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              How We Rate New Online Casinos
            </h2>
            <p className="text-sm text-gray-600">
              Our rating methodology is strict, transparent, and designed to protect Irish players. We evaluate every casino across five core pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <div className="h-10 w-10 rounded-lg bg-green-100 text-[#265933] flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="font-serif font-bold text-gray-900">Licensing & Security</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We only recommend casinos licensed by reputable bodies like the Malta Gaming Authority (MGA) or UKGC, ensuring SSL encryption and data protection.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <div className="h-10 w-10 rounded-lg bg-green-100 text-[#265933] flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="font-serif font-bold text-gray-900">Fair Bonuses & T&Cs</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We read the fine print. We check wagering requirements, game contributions, and expiry dates to ensure bonuses are genuinely rewarding.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <div className="h-10 w-10 rounded-lg bg-green-100 text-[#265933] flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="font-serif font-bold text-gray-900">Game Selection</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                A top casino must offer thousands of high-quality slots, table games, and live dealer lobbies from leading providers like NetEnt and Evolution.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <div className="h-10 w-10 rounded-lg bg-green-100 text-[#265933] flex items-center justify-center font-bold text-lg">4</div>
              <h3 className="font-serif font-bold text-gray-900">Payment Speed</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We test deposit and withdrawal speeds, prioritizing casinos that support instant Irish payment methods like Revolut and PayPal.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <div className="h-10 w-10 rounded-lg bg-green-100 text-[#265933] flex items-center justify-center font-bold text-lg">5</div>
              <h3 className="font-serif font-bold text-gray-900">Customer Support</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We interact with support agents via live chat and email to verify response times, helpfulness, and 24/7 availability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: New Slots (Новые слоты) */}
        <section id="new-slots" className="space-y-6 scroll-mt-28">
          <div className="border-b border-[#d4e2b0] pb-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              Latest Online Slots in Ireland
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Try new slot releases, read expert reviews, and play free demo versions.
            </p>
          </div>

          {/* Slots Grid */}
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

        {/* Section 6: FAQ (Часто задаваемые вопросы) */}
        <section id="faq" className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Are new online casinos in Ireland safe to play at?",
                a: "Yes, provided they hold a valid license from a reputable regulatory body like the Malta Gaming Authority (MGA) or the UK Gambling Commission (UKGC). We only list fully licensed and secure casinos on our site."
              },
              {
                q: "Can I use Revolut to deposit at new Irish casinos?",
                a: "Absolutely. Revolut is one of the most popular payment methods for Irish players due to its speed, security, and ease of use. Most new casinos support Revolut deposits and instant withdrawals."
              },
              {
                q: "What is the typical minimum deposit at new casinos?",
                a: "The standard minimum deposit is usually €10, though some casinos may require €20 to trigger the welcome bonus. Always check the bonus terms and conditions before depositing."
              },
              {
                q: "How do I claim a welcome bonus at a new casino?",
                a: "Simply click the 'Visit' button on our casino cards, register a new account, and make your first deposit. The bonus is usually credited automatically, but some casinos may require a bonus code."
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

        {/* Section 7: Pros & Cons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-green-200 shadow-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-green-800 flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-green-600" /> Advantages of New Casinos
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>More competitive welcome bonuses and promotions to attract players.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Modern, mobile-first websites with superior user experience.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Integration of the latest payment methods like Revolut and Crypto.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-red-800 flex items-center gap-2">
              <ThumbsDown className="h-5 w-5 text-red-600" /> Disadvantages of New Casinos
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>Shorter track record and fewer player reviews online.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>Lower initial withdrawal limits compared to established giants.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>Smaller selection of niche game providers in some cases.</span>
              </li>
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
