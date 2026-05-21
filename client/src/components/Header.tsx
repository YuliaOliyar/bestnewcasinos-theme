import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchPage {
  title: string;
  h1: string;
  url: string;
  keywords: string[];
  description: string;
  category: string;
}

const SEARCH_DATABASE: SearchPage[] = [
  {
    title: "New Online Casinos Ireland | Best New Casinos 2026",
    h1: "New Online Casinos in Ireland",
    url: "/",
    keywords: ["new casinos", "ireland", "irish casinos", "best casinos"],
    description: "Discover new licensed Irish online casinos with top bonuses and fast payouts.",
    category: "Home"
  },
  {
    title: "Roostino Casino Review | Best New Casinos",
    h1: "Roostino Casino Review",
    url: "/reviews/roostino-casino",
    keywords: ["roostino", "casino review", "bonus", "revolut"],
    description: "Read our expert Roostino Casino review. Learn about games, bonuses, and payment methods.",
    category: "Reviews"
  },
  {
    title: "Best Cashback Bonuses Ireland | 2026 Casino Offers",
    h1: "Cashback Bonuses in Ireland",
    url: "/bonuses/cashback",
    keywords: ["cashback", "bonuses", "casino offers", "no wager"],
    description: "Find the best cashback casino bonuses in Ireland. Maximize your returns today.",
    category: "Bonuses"
  },
  {
    title: "Top Online Slots Ireland | Play Best Slots 2026",
    h1: "Online Slots in Ireland",
    url: "/slots",
    keywords: ["slots", "online slots", "free spins", "rtp"],
    description: "Explore the best online slots in Ireland. Play free demos and find top slot casinos.",
    category: "Games"
  },
  {
    title: "Pirots Slot Review & Free Demo | Best New Casinos",
    h1: "Pirots Slot Review",
    url: "/slots/pirots",
    keywords: ["pirots", "slot review", "demo", "elk studios"],
    description: "Play the Pirots slot demo and read our comprehensive review with RTP and features.",
    category: "Slots"
  },
  {
    title: "Revolut Casinos Ireland | Fast Deposits & Withdrawals",
    h1: "Revolut Casinos in Ireland",
    url: "/payment-methods/revolut",
    keywords: ["revolut", "payment methods", "fast withdrawal", "deposits"],
    description: "Discover the best online casinos accepting Revolut in Ireland with instant payouts.",
    category: "Payments"
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchPage[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [location]);

  // Instant search logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = SEARCH_DATABASE.filter((page) => {
      return (
        page.title.toLowerCase().includes(query) ||
        page.h1.toLowerCase().includes(query) ||
        page.url.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query) ||
        page.keywords.some((kw) => kw.toLowerCase().includes(query))
      );
    });
    setSearchResults(filtered);
  }, [searchQuery]);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navCategories = [
    {
      name: "Online Casinos",
      url: "/",
      submenu: [
        { name: "New Online Casinos", url: "/" },
        { name: "Roostino Casino Review", url: "/reviews/roostino-casino" }
      ]
    },
    {
      name: "Casino Bonuses",
      url: "/bonuses/cashback",
      submenu: [
        { name: "Cashback Bonuses", url: "/bonuses/cashback" }
      ]
    },
    {
      name: "Casino by Payments",
      url: "/payment-methods/revolut",
      submenu: [
        { name: "Revolut Casinos", url: "/payment-methods/revolut" }
      ]
    },
    {
      name: "Casinos by Games",
      url: "/slots",
      submenu: [
        { name: "Online Slots", url: "/slots" },
        { name: "Pirots Slot", url: "/slots/pirots" }
      ]
    },
    { name: "About US", url: "/about-us" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#265933] text-white shadow-md border-b border-[#1e4728]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663200285774/GRjtn9nGvrvbUSD2fuH7YJ/logo-RWnf9dCNadhrs6JcVWw5aN.webp" 
            alt="Best New Casinos Logo" 
            className="h-10 w-10 object-contain rounded-full border border-yellow-400"
          />
          <span className="font-serif font-bold text-lg md:text-xl tracking-tight text-yellow-400">
            BestNew<span className="text-white">Casinos</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navCategories.map((cat) => (
            <div key={cat.name} className="relative group">
              <Link 
                href={cat.url} 
                className="flex items-center gap-1 py-2 text-sm font-medium hover:text-yellow-400 transition-colors"
              >
                {cat.name}
                {cat.submenu && <ChevronDown className="h-4 w-4 opacity-70 group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {cat.submenu && (
                <div className="absolute left-0 mt-1 w-56 rounded-md bg-white text-gray-900 shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {cat.submenu.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.url} 
                        className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#265933] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Instant Search Bar */}
          <div ref={searchRef} className="relative hidden md:block w-64 lg:w-80">
            <div className="relative">
              <Input
                type="text"
                placeholder="Instant search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="w-full bg-[#1e4728] border-none text-white placeholder-gray-300 focus-visible:ring-yellow-400 h-9 pr-8 text-sm"
              />
              <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-300" />
            </div>

            {/* Instant Search Dropdown */}
            {isSearchOpen && searchQuery && (
              <div className="absolute right-0 mt-2 w-full max-w-md bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                <div className="p-2 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 flex justify-between">
                  <span>Search Results ({searchResults.length})</span>
                  <span className="text-yellow-600">Instant Autocomplete</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((page) => (
                      <Link key={page.url} href={page.url}>
                        <div className="p-3 hover:bg-yellow-50/50 border-b border-gray-100 cursor-pointer transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#265933] uppercase tracking-wider bg-green-50 px-1.5 py-0.5 rounded">
                              {page.category}
                            </span>
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                          </div>
                          <h4 className="text-sm font-bold text-gray-900 mt-1">{page.h1}</h4>
                          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{page.description}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-center text-sm text-gray-500">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:bg-[#1e4728]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1e4728] border-t border-[#265933] px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <div ref={searchRef} className="relative w-full">
            <div className="relative">
              <Input
                type="text"
                placeholder="Instant search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="w-full bg-[#265933] border-none text-white placeholder-gray-300 focus-visible:ring-yellow-400 h-10 pr-8"
              />
              <Search className="absolute right-2.5 top-3 h-4 w-4 text-gray-300" />
            </div>

            {isSearchOpen && searchQuery && (
              <div className="absolute left-0 mt-2 w-full bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                <div className="max-h-60 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((page) => (
                      <Link key={page.url} href={page.url}>
                        <div className="p-3 hover:bg-yellow-50 border-b border-gray-100 cursor-pointer">
                          <span className="text-[10px] font-bold text-[#265933] uppercase bg-green-50 px-1 rounded">
                            {page.category}
                          </span>
                          <h4 className="text-xs font-bold text-gray-900 mt-0.5">{page.h1}</h4>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-3 text-center text-xs text-gray-500">
                      No results found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Links */}
          <nav className="space-y-2">
            {navCategories.map((cat) => (
              <div key={cat.name} className="space-y-1">
                <Link 
                  href={cat.url} 
                  className="block py-2 text-base font-semibold text-white hover:text-yellow-400"
                >
                  {cat.name}
                </Link>
                {cat.submenu && (
                  <div className="pl-4 border-l border-[#265933] space-y-1">
                    {cat.submenu.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.url} 
                        className="block py-1.5 text-sm text-gray-300 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
