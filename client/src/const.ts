export interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: {
    overall: number;
    games: number;
    bonuses: number;
    customer: number;
    payout: number;
  };
  reviewUrl: string;
  refUrl: string;
  features: string[];
  launchYear: number;
  bonus: string;
  minDeposit: string;
  paymentMethods: string[];
  currency: string;
  license: string;
  websiteUrl: string;
  supportEmail: string;
  gamesCount: number;
  providers: string[];
  likes: number;
  dislikes: number;
}

export interface Slot {
  id: string;
  name: string;
  logo: string;
  reviewUrl: string;
  refUrl: string;
  rating: number;
  rtp: string;
  freeSpins: string;
  reels: number;
  lines: number;
  effort: "Low" | "Medium" | "High";
  bonuses: string;
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  linkedin: string;
  twitter: string;
  email: string;
  expertise: string[];
  factChecker: {
    name: string;
    url: string;
  };
}

export const AUTHORS: Author[] = [
  {
    name: "Ciaran O'Connor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    role: "Senior Casino Analyst & Editor",
    bio: "Ciaran has over 10 years of experience in the iGaming industry, specializing in regulatory frameworks and casino product analysis. He fact-checks all new Irish casinos to ensure player safety.",
    linkedin: "https://linkedin.com/in/ciaran-oconnor-example",
    twitter: "https://twitter.com/ciaran_gaming_example",
    email: "ciaran.oconnor@bestnewcasinos.eu.com",
    expertise: ["Online Casinos", "Casino Reviews", "Casino Bonuses Fact Checking", "Editorial Reviewing", "Research Skills"],
    factChecker: {
      name: "Siobhan Murphy",
      url: "/about-us"
    }
  }
];

export const CASINOS: Casino[] = [
  {
    id: "roostino",
    name: "Roostino Casino",
    logo: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=100&h=100&q=80",
    rating: {
      overall: 4.8,
      games: 4.7,
      bonuses: 4.9,
      customer: 4.8,
      payout: 4.8
    },
    reviewUrl: "/reviews/roostino-casino",
    refUrl: "https://bestnewcasinos.eu.com/go/roostino",
    features: ["Instant Revolut Withdrawals", "Exclusive Irish Welcome Bonus", "No-wagering Free Spins"],
    launchYear: 2026,
    bonus: "100% up to €500 + 100 Free Spins",
    minDeposit: "€10",
    paymentMethods: ["Revolut", "Visa", "Mastercard", "PayPal", "Skrill", "Neteller"],
    currency: "EUR, GBP",
    license: "MGA (Malta Gaming Authority)",
    websiteUrl: "https://roostinocasino.com",
    supportEmail: "support@roostinocasino.com",
    gamesCount: 4500,
    providers: ["NetEnt", "Evolution Gaming", "Pragmatic Play", "Play'n GO", "Microgaming"],
    likes: 342,
    dislikes: 12
  },
  {
    id: "emerald-spin",
    name: "Emerald Spin Casino",
    logo: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=100&h=100&q=80",
    rating: {
      overall: 4.7,
      games: 4.8,
      bonuses: 4.6,
      customer: 4.7,
      payout: 4.7
    },
    reviewUrl: "/reviews/emerald-spin",
    refUrl: "https://bestnewcasinos.eu.com/go/emerald-spin",
    features: ["Over 5,000 Slots", "24/7 Live Irish Support", "Low Wagering Requirements"],
    launchYear: 2025,
    bonus: "200% up to €300 + 50 Spins",
    minDeposit: "€10",
    paymentMethods: ["Visa", "Mastercard", "Revolut", "PayPal", "Paysafecard"],
    currency: "EUR",
    license: "MGA, UKGC",
    websiteUrl: "https://emeraldspin.com",
    supportEmail: "support@emeraldspin.com",
    gamesCount: 5200,
    providers: ["Pragmatic Play", "Nolimit City", "Hacksaw Gaming", "Red Tiger"],
    likes: 215,
    dislikes: 8
  },
  {
    id: "lucky-clover",
    name: "Lucky Clover Casino",
    logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=100&h=100&q=80",
    rating: {
      overall: 4.6,
      games: 4.5,
      bonuses: 4.7,
      customer: 4.6,
      payout: 4.5
    },
    reviewUrl: "/reviews/lucky-clover",
    refUrl: "https://bestnewcasinos.eu.com/go/lucky-clover",
    features: ["Daily Cashback Offers", "Crypto-friendly Deposits", "Fast Verification Process"],
    launchYear: 2025,
    bonus: "15% Daily Cashback + 150 Free Spins",
    minDeposit: "€20",
    paymentMethods: ["Bitcoin", "Ethereum", "Revolut", "Visa", "Skrill"],
    currency: "EUR, BTC, ETH",
    license: "Curacao eGaming",
    websiteUrl: "https://luckyclovercasino.com",
    supportEmail: "help@luckyclovercasino.com",
    gamesCount: 3800,
    providers: ["Spinomenal", "BGaming", "Wazdan", "Yggdrasil", "Betsoft"],
    likes: 189,
    dislikes: 15
  },
  {
    id: "dublin-bet",
    name: "Dublin Bet Casino",
    logo: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=100&h=100&q=80",
    rating: {
      overall: 4.5,
      games: 4.6,
      bonuses: 4.4,
      customer: 4.5,
      payout: 4.6
    },
    reviewUrl: "/reviews/dublin-bet",
    refUrl: "https://bestnewcasinos.eu.com/go/dublin-bet",
    features: ["Excellent Live Dealer Lobby", "VIP Club Rewards", "No Withdrawal Limits"],
    launchYear: 2024,
    bonus: "100% up to €250 on First 2 Deposits",
    minDeposit: "€15",
    paymentMethods: ["Visa", "Mastercard", "Revolut", "Neteller", "Bank Transfer"],
    currency: "EUR",
    license: "MGA",
    websiteUrl: "https://dublinbet.com",
    supportEmail: "vip@dublinbet.com",
    gamesCount: 3100,
    providers: ["Evolution Gaming", "NetEnt", "Playtech", "Quickspin"],
    likes: 154,
    dislikes: 22
  }
];

export const SLOTS: Slot[] = [
  {
    id: "pirots",
    name: "Pirots Slot",
    logo: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=100&h=100&q=80",
    reviewUrl: "/slots/pirots",
    refUrl: "https://bestnewcasinos.eu.com/go/pirots",
    rating: 4.8,
    rtp: "96.1%",
    freeSpins: "Yes",
    reels: 5,
    lines: 20,
    effort: "Medium",
    bonuses: "Collect Symbols, Symbol Upgrades, Free Drops"
  },
  {
    id: "book-of-dead",
    name: "Book of Dead",
    logo: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=100&h=100&q=80",
    reviewUrl: "/slots/book-of-dead",
    refUrl: "https://bestnewcasinos.eu.com/go/book-of-dead",
    rating: 4.7,
    rtp: "96.21%",
    freeSpins: "Yes",
    reels: 5,
    lines: 10,
    effort: "High",
    bonuses: "Expanding Symbols, Free Spins, Gamble Feature"
  },
  {
    id: "starburst",
    name: "Starburst",
    logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=100&h=100&q=80",
    reviewUrl: "/slots/starburst",
    refUrl: "https://bestnewcasinos.eu.com/go/starburst",
    rating: 4.6,
    rtp: "96.09%",
    freeSpins: "No",
    reels: 5,
    lines: 10,
    effort: "Low",
    bonuses: "Starburst Wilds, Respins, Both Ways Win"
  }
];

export const TRUST_BADGES = [
  { name: "Gordon Moody", img: "https://img.icons8.com/color/96/shield.png", url: "https://gordonmoody.org.uk/" },
  { name: "Gambling Care", img: "https://img.icons8.com/color/96/clover.png", url: "https://gamblingcare.ie/" },
  { name: "Extern", img: "https://img.icons8.com/color/96/help.png", url: "https://www.extern.org/" },
  { name: "MGA", img: "https://img.icons8.com/color/96/diploma.png", url: "https://www.mga.org.mt/" },
  { name: "eCOGRA", img: "https://img.icons8.com/color/96/checked-user-male.png", url: "https://ecogra.org/" },
  { name: "Gentoo Media", img: "https://img.icons8.com/color/96/star.png", url: "https://www.gentoomedia.com/" },
  { name: "Pause Before You Play", img: "https://img.icons8.com/color/96/clock.png", url: "https://pausebeforeyouplay.org/" }
];
