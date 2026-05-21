import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowUp, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { TRUST_BADGES, CASINOS, SLOTS } from "@/const";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111426] text-gray-300 pt-16 pb-8 border-t border-gray-800 relative">
      {/* Scroll to Up Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#265933] hover:bg-[#1e4728] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 border border-yellow-400/30"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <div className="container mx-auto px-4">
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Popular Casinos */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4 border-b border-gray-800 pb-2">
              Popular Casinos
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CASINOS.slice(0, 4).map((casino) => (
                <li key={casino.id}>
                  <Link href={casino.reviewUrl} className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#265933]" />
                    {casino.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Popular Pages */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4 border-b border-gray-800 pb-2">
              Popular Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#265933]" />
                  New Online Casinos
                </Link>
              </li>
              <li>
                <Link href="/bonuses/cashback" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#265933]" />
                  Cashback Bonuses
                </Link>
              </li>
              <li>
                <Link href="/payment-methods/revolut" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#265933]" />
                  Revolut Casinos
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#265933]" />
                  About Us & E-E-A-T
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Slots */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4 border-b border-gray-800 pb-2">
              Popular Slots
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SLOTS.slice(0, 4).map((slot) => (
                <li key={slot.id}>
                  <Link href={slot.reviewUrl} className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#265933]" />
                    {slot.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Brand & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663200285774/GRjtn9nGvrvbUSD2fuH7YJ/logo-RWnf9dCNadhrs6JcVWw5aN.webp" 
                alt="Best New Casinos Logo" 
                className="h-8 w-8 object-contain rounded-full border border-yellow-400"
              />
              <span className="font-serif font-bold text-lg tracking-tight text-yellow-400">
                BestNew<span className="text-white">Casinos</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              We provide independent, objective reviews of licensed online casinos in Ireland. Our goal is to promote safe, responsible gambling.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#265933] text-white p-2 rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#265933] text-white p-2 rounded-full transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#265933] text-white p-2 rounded-full transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#265933] text-white p-2 rounded-full transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <p className="text-center text-xs text-gray-400 mb-6 uppercase tracking-wider font-semibold">
            Our Trusted Partners & Responsible Gambling Advocates
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {TRUST_BADGES.map((badge) => (
              <a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0 flex flex-col items-center gap-1"
              >
                <img src={badge.img} alt={badge.name} className="h-8 object-contain" />
                <span className="text-[10px] text-gray-500 font-medium">{badge.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 space-y-2">
          <p>
            Disclaimer: 18+ | Play Responsibly | Gambling can be addictive. If you or someone you know is struggling with gambling, please visit <a href="https://gamblingcare.ie/" className="underline hover:text-yellow-400">gamblingcare.ie</a> or call 1800 753 753.
          </p>
          <p>© 2026 Best New Casinos (bestnewcasinos.eu.com). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
