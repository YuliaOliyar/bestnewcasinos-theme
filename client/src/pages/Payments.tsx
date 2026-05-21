import { useState } from "react";
import { Link } from "wouter";
import { Star, Check, HelpCircle, ArrowRight, ShieldCheck, CreditCard, AlertCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CASINOS } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorCard from "@/components/AuthorCard";

export default function Payments() {
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
          { name: "Casino by Payments", url: "/payment-methods/revolut" },
          { name: "Revolut Casinos" }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#265933] to-[#1e4728] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 text-gray-900 mb-2">
            <CreditCard className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-yellow-400">
            Revolut Casinos Ireland
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Discover the best online casinos accepting Revolut in Ireland. Enjoy instant deposits, lightning-fast withdrawals, and top-tier mobile banking security.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-12 flex-grow">
        
        {/* Author Verification */}
        <div className="max-w-3xl mx-auto">
          <AuthorCard />
        </div>

        {/* Section: Casinos Showcase */}
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 border-b border-[#d4e2b0] pb-3">
            Top Revolut Online Casinos
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {CASINOS.filter(c => casinoSupportsRevolut(c)).map((casino) => (
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
                  <span className="text-[10px] font-bold text-[#265933] uppercase block">Exclusive Welcome Offer</span>
                  <span className="text-base font-bold text-green-800">{casino.bonus}</span>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2 w-full md:w-44 shrink-0">
                  <Button asChild className="bg-[#265933] hover:bg-[#1e4728] text-white font-bold">
                    <a href={casino.refUrl} target="_blank" rel="noopener noreferrer">Deposit with Revolut</a>
                  </Button>
                  <Button asChild variant="outline" className="border-[#265933] text-[#265933] hover:bg-green-50 font-bold">
                    <Link href={casino.reviewUrl}>Read Review</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Revolut Specs Table */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
            Revolut Payment Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500 uppercase text-xs font-bold border-b border-gray-200">
                  <th className="p-3">Feature</th>
                  <th className="p-3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="p-3 font-medium text-gray-500">Deposit Fee</td>
                  <td className="p-3 font-bold text-green-700">Free (0%)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-500">Deposit Speed</td>
                  <td className="p-3 font-bold">Instant</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-500">Withdrawal Speed</td>
                  <td className="p-3 font-bold text-green-700">Instant - 24 Hours</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-500">Min Deposit</td>
                  <td className="p-3 font-bold">€10</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-500">Security</td>
                  <td className="p-3 font-bold">Biometric (FaceID/Fingerprint) + 3D Secure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: How to Deposit Guide */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-4">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900">
            How to Deposit with Revolut at Online Casinos
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Depositing with Revolut is incredibly simple and secure. Follow these step-by-step instructions to fund your casino account:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1.5">
              <div className="h-8 w-8 rounded-full bg-green-100 text-[#265933] flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="font-bold text-sm text-gray-900">Select Revolut / Visa</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Go to the casino cashier, select 'Deposit', and choose Revolut or Visa/Mastercard (since Revolut operates on these networks).
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="h-8 w-8 rounded-full bg-green-100 text-[#265933] flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="font-bold text-sm text-gray-900">Enter Card Details</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Enter your Revolut card number, expiry date, and CVV. You can use your physical card or a secure virtual disposable card from the Revolut app.
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="h-8 w-8 rounded-full bg-green-100 text-[#265933] flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="font-bold text-sm text-gray-900">Confirm in App</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Open your Revolut app to approve the 3D Secure push notification. The funds will be credited to your casino account instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Pros & Cons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-green-200 shadow-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-green-800 flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-green-600" /> Pros of Revolut Casinos
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Lightning-fast withdrawal processing times.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Top-tier mobile app security with biometric verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span>Disposable virtual cards protect your main bank details.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-sm space-y-4">
            <h3 className="text-lg font-serif font-bold text-red-800 flex items-center gap-2">
              <ThumbsDown className="h-5 w-5 text-red-600" /> Cons of Revolut Casinos
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>Some casinos do not support withdrawals back to Revolut cards.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <span>Requires a smartphone to authorize transactions.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            Revolut Casinos FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Are there any fees for using Revolut at online casinos?",
                a: "No, online casinos do not charge fees for Revolut deposits or withdrawals. Revolut itself also does not charge fees for standard gambling transactions."
              },
              {
                q: "Can I use Revolut virtual cards for casino deposits?",
                a: "Yes, you can use both physical and virtual Revolut cards. Disposable virtual cards are highly recommended as they destroy themselves after one use, adding an extra layer of security."
              },
              {
                q: "How fast are Revolut withdrawals?",
                a: "Once the casino approves your withdrawal, the funds are usually credited to your Revolut account instantly or within a few hours."
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

function casinoSupportsRevolut(casino: any): boolean {
  return casino.paymentMethods.includes("Revolut");
}
