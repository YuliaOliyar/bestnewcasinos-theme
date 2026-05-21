import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Star, Check, HelpCircle, ArrowRight, ShieldCheck, ThumbsUp, ThumbsDown, MessageSquare, Send, AlertCircle, Info, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CASINOS, Casino } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";
import { toast } from "sonner";

interface Comment {
  id: string;
  name: string;
  email: string;
  rating: number;
  text: string;
  date: string;
  isAnonymous: boolean;
}

export default function CasinoReview() {
  const casino: Casino = CASINOS[0]; // Default to Roostino Casino for the template
  
  // Likes/Dislikes State with localStorage protection
  const [likes, setLikes] = useState(casino.likes);
  const [dislikes, setDislikes] = useState(casino.dislikes);
  const [hasVoted, setHasVoted] = useState(false);

  // Comments State
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Declan K.",
      email: "declan@example.com",
      rating: 5,
      text: "Absolutely love the instant Revolut withdrawals! Literally took 2 minutes to get my winnings. Highly recommend Roostino.",
      date: "May 18, 2026",
      isAnonymous: false
    },
    {
      id: "2",
      name: "Anonymous",
      email: "",
      rating: 4,
      text: "Solid game selection, especially the live dealer tables. The welcome bonus has fair wagering requirements.",
      date: "May 15, 2026",
      isAnonymous: true
    }
  ]);

  // Comment Form State
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentRating, setCommentRating] = useState(5);
  const [commentText, setCommentText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Pop-up Banner State
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user already voted
    const voted = localStorage.getItem(`voted_${casino.id}`);
    if (voted) {
      setHasVoted(true);
    }

    // Show pop-up banner after 8 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [casino.id]);

  const handleVote = (type: "like" | "dislike") => {
    if (hasVoted) {
      toast.error("You have already voted for this casino review!");
      return;
    }

    if (type === "like") {
      setLikes((prev) => prev + 1);
      toast.success("Thank you for your feedback!");
    } else {
      setDislikes((prev) => prev + 1);
      toast.success("Thank you for your feedback!");
    }

    localStorage.setItem(`voted_${casino.id}`, "true");
    setHasVoted(true);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAnonymous && (!commentName.trim() || !commentEmail.trim())) {
      toast.error("Please fill in your name and email, or post anonymously.");
      return;
    }

    if (!commentText.trim()) {
      toast.error("Please write a comment.");
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: isAnonymous ? "Anonymous" : commentName,
      email: isAnonymous ? "" : commentEmail,
      rating: commentRating,
      text: commentText,
      date: "Just now (Pending Moderation)",
      isAnonymous
    };

    setComments((prev) => [newComment, ...prev]);
    toast.success("Comment submitted! It will appear after editorial moderation.");
    
    // Reset form
    setCommentName("");
    setCommentEmail("");
    setCommentRating(5);
    setCommentText("");
    setIsAnonymous(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f2fad4]">
      <Header />

      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { name: "Online Casinos", url: "/" },
          { name: `${casino.name} Review` }
        ]} 
      />

      {/* Hero Review Card */}
      <section className="py-10 bg-gradient-to-b from-[#265933] to-[#1e4728] text-white">
        <div className="container mx-auto px-4">
          <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-xl space-y-6">
            
            {/* Top Row: Logo, Title, CTA */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-6">
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <img 
                  src={casino.logo} 
                  alt={`${casino.name} Logo`} 
                  className="h-24 w-24 rounded-2xl object-cover border border-gray-100 shadow-md"
                />
                <div className="space-y-1.5">
                  <span className="bg-green-100 text-[#265933] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Verified Review
                  </span>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                    {casino.name} Review
                  </h1>
                  <p className="text-xs text-gray-500 flex items-center justify-center sm:justify-start gap-1">
                    <span>How we rated this site:</span>
                    <a href="/trust" className="font-bold text-[#265933] hover:underline flex items-center gap-0.5">
                      <ShieldCheck className="h-3.5 w-3.5" /> Trust Guidelines
                    </a>
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Button asChild className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold h-12 px-8 shadow-md">
                  <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">
                    Visit Casino <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Middle Row: Ratings Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100">
              {[
                { label: "Overall", val: casino.rating.overall, color: "text-yellow-500" },
                { label: "Games", val: casino.rating.games, color: "text-green-700" },
                { label: "Bonuses", val: casino.rating.bonuses, color: "text-green-700" },
                { label: "Customer", val: casino.rating.customer, color: "text-green-700" },
                { label: "Payout", val: casino.rating.payout, color: "text-green-700" }
              ].map((item) => (
                <div key={item.label} className="text-center space-y-1 border-r border-gray-200 last:border-none">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block">{item.label}</span>
                  <div className="flex items-center justify-center gap-1">
                    <Star className={`h-4 w-4 fill-current ${item.color}`} />
                    <span className="text-lg font-bold text-gray-900">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: Bonus & Likes/Dislikes */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-center sm:text-left">
                <span className="text-xs text-gray-400 block">Main Welcome Bonus</span>
                <span className="text-lg font-bold text-green-800">{casino.bonus}</span>
              </div>

              {/* Likes/Dislikes System */}
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <span className="text-xs text-gray-500 font-medium">Was this review helpful?</span>
                <button 
                  onClick={() => handleVote("like")}
                  className={`flex items-center gap-1 text-xs font-bold transition-colors ${hasVoted ? "text-gray-400 cursor-not-allowed" : "text-green-700 hover:text-green-800"}`}
                  disabled={hasVoted}
                >
                  <ThumbsUp className="h-4 w-4" /> {likes}
                </button>
                <span className="text-gray-300">|</span>
                <button 
                  onClick={() => handleVote("dislike")}
                  className={`flex items-center gap-1 text-xs font-bold transition-colors ${hasVoted ? "text-gray-400 cursor-not-allowed" : "text-red-700 hover:text-red-800"}`}
                  disabled={hasVoted}
                >
                  <ThumbsDown className="h-4 w-4" /> {dislikes}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Review Content */}
      <main className="container mx-auto px-4 py-10 space-y-12 flex-grow">
        
        {/* Grid Layout: Left Content, Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Detailed Review */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Author Block */}
            <AuthorCard />

            {/* Section: Key Characteristics */}
            <section className="bg-white rounded-2xl p-6 border border-[#d4e2b0] shadow-sm space-y-6">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
                Casino Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Website URL", val: casino.websiteUrl, isLink: true },
                  { label: "Support Email", val: casino.supportEmail },
                  { label: "Available Currencies", val: casino.currency },
                  { label: "Min Deposit", val: casino.minDeposit },
                  { label: "Release Date", val: casino.launchYear },
                  { label: "License", val: casino.license },
                  { label: "Total Games", val: `${casino.gamesCount}+ Games` },
                  { label: "Top Providers", val: casino.providers.join(", ") }
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">{spec.label}</span>
                    {spec.isLink ? (
                      <a href={spec.val} target="_blank" rel="noopener noreferrer" className="font-bold text-[#265933] hover:underline">
                        Visit Site
                      </a>
                    ) : (
                      <span className="font-bold text-gray-900 text-right max-w-[200px] truncate">{spec.val}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Why Trust Block */}
            <section className="bg-green-50 rounded-2xl p-6 border border-green-200 space-y-4">
              <h3 className="text-lg font-serif font-bold text-green-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-700" /> Why Trust Our Review?
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We are 100% independent. We register, deposit, and play at every casino we review with our own funds. We never accept payment to alter our ratings or hide negative aspects. Our goal is to provide Irish players with the absolute truth.
              </p>
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
                    <span>Instant withdrawals via Revolut.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>Massive selection of over 4,500 games.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>Excellent 24/7 customer support.</span>
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
                    <span>Wagering requirements apply to free spins.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span>No dedicated mobile app (but fully responsive).</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section: Comments & Reviews */}
            <section className="bg-white rounded-2xl p-6 border border-[#d4e2b0] shadow-sm space-y-8">
              <div className="border-b border-gray-100 pb-4">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-[#265933]" /> Player Reviews & Comments
                </h2>
                <p className="text-xs text-gray-500 mt-1">Share your experience with {casino.name}. All reviews are moderated.</p>
              </div>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">Write a Review</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600">Your Name</label>
                    <Input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      disabled={isAnonymous}
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600">Your Email</label>
                    <Input 
                      type="email" 
                      placeholder="e.g. john@example.com" 
                      value={commentEmail}
                      onChange={(e) => setCommentEmail(e.target.value)}
                      disabled={isAnonymous}
                      className="bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Rating Selector */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-600">Your Rating:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setCommentRating(star)}
                          className="text-yellow-400 hover:scale-110 transition-transform"
                        >
                          <Star className={`h-5 w-5 ${star <= commentRating ? "fill-yellow-400" : "text-gray-300"}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Anonymous Toggle */}
                  <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={isAnonymous} 
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-gray-300 text-[#265933] focus:ring-[#265933]"
                    />
                    Post Anonymously
                  </label>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600">Your Comment</label>
                  <Textarea 
                    placeholder="Share details of your experience playing at this casino..." 
                    rows={4}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="bg-white"
                  />
                </div>

                <Button type="submit" className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold">
                  Submit Review <Send className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-4 rounded-xl border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="font-bold text-sm text-gray-900">{comment.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{comment.date}</span>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3.5 w-3.5 ${i < comment.rating ? "fill-yellow-400" : "text-gray-200"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{comment.text}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            
            {/* Sidebar CTA Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#d4e2b0] shadow-sm text-center space-y-4">
              <img src={casino.logo} alt={casino.name} className="h-16 w-12 mx-auto rounded-xl object-cover" />
              <h3 className="font-serif font-bold text-lg text-gray-900">Play at {casino.name}</h3>
              <p className="text-xs text-gray-500">Get started today with an exclusive bonus offer.</p>
              <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                <span className="text-[10px] font-bold text-[#265933] uppercase block">Welcome Bonus</span>
                <span className="text-sm font-bold text-green-800">{casino.bonus}</span>
              </div>
              <Button asChild className="w-full bg-[#265933] hover:bg-[#1e4728] text-white font-bold h-11">
                <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">
                  Claim Bonus <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Sidebar Quick Info */}
            <div className="bg-white rounded-2xl p-6 border border-[#d4e2b0] shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-base text-gray-900 border-b border-gray-100 pb-2">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-xs text-gray-600">
                <li className="flex justify-between">
                  <span className="font-medium">Min Deposit:</span>
                  <span className="font-bold text-gray-900">{casino.minDeposit}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Payout Speed:</span>
                  <span className="font-bold text-green-700">Instant - 24 Hours</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">License:</span>
                  <span className="font-bold text-gray-900">MGA Licensed</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </main>

      {/* Pop-up Banner (CTA) */}
      {showPopup && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-white rounded-2xl border-2 border-[#f0cb2e] shadow-2xl p-5 z-50 animate-slide-up">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-sm font-bold"
          >
            ✕
          </button>
          <div className="flex items-center gap-4">
            <img src={casino.logo} alt={casino.name} className="h-12 w-12 rounded-lg object-cover" />
            <div className="space-y-1">
              <span className="bg-yellow-100 text-yellow-800 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Limited Time Offer
              </span>
              <h4 className="font-serif font-bold text-sm text-gray-900">Exclusive {casino.name} Bonus</h4>
              <p className="text-xs text-green-800 font-bold">{casino.bonus}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button 
              onClick={() => setShowPopup(false)}
              variant="ghost" 
              size="sm" 
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Maybe Later
            </Button>
            <Button asChild size="sm" className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold text-xs">
              <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">
                Claim Now
              </a>
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
