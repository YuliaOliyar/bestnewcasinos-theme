import { Link } from "wouter";
import { ShieldCheck, Award, CheckCircle2, Mail, Linkedin, Twitter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AUTHORS } from "@/const";

export default function AboutUs() {
  const author = AUTHORS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#f2fad4]">
      <Header />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: "About Us" }]} />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#265933] to-[#1e4728] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 text-gray-900 mb-2">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-yellow-400">
            About Best New Casinos
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Our mission is to provide Irish players with honest, objective, and fully verified reviews of new online casinos. We prioritize player safety, licensing, and responsible gambling.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-12 flex-grow max-w-4xl">
        
        {/* Section: E-E-A-T Principles */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            Our Editorial & E-E-A-T Principles
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            At Best New Casinos, we strictly adhere to Google's <strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</strong> guidelines. We believe that players deserve accurate, transparent, and expert-backed information when choosing where to play.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-gray-900 flex items-center gap-2">
                <Award className="h-5 w-5 text-[#265933]" /> Hands-on Experience
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We don't just copy information from casino websites. Our analysts register accounts, deposit real money, play games, test customer support, and request withdrawals to verify the actual player experience.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#265933]" /> Industry Expertise
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our content is written and fact-checked by iGaming industry veterans with years of experience in casino product analysis, regulatory compliance, and responsible gambling advocacy.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Meet Our Expert Author */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#d4e2b0] shadow-sm space-y-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">
            Meet Our Expert Author
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="h-24 w-24 rounded-2xl object-cover border-2 border-[#265933] shadow-md shrink-0 mx-auto md:mx-0"
            />
            <div className="space-y-4 flex-grow text-center md:text-left">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-1.5">
                  <h3 className="font-serif font-bold text-xl text-gray-900">{author.name}</h3>
                  <CheckCircle2 className="h-5 w-5 text-blue-500 fill-blue-500 text-white" />
                </div>
                <p className="text-xs text-gray-500 font-semibold">{author.role}</p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {author.bio}
              </p>

              {/* Expertise Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Areas of Expertise</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                  {author.expertise.map((exp) => (
                    <span 
                      key={exp} 
                      className="text-xs bg-green-50 text-[#265933] border border-green-100 px-2.5 py-1 rounded-full font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 pt-2 text-xs text-gray-500 border-t border-gray-100">
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#265933] transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#265933] transition-colors">
                  <Twitter className="h-4 w-4" /> Twitter
                </a>
                <a href={`mailto:${author.email}`} className="flex items-center gap-1 hover:text-[#265933] transition-colors">
                  <Mail className="h-4 w-4" /> Contact
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
