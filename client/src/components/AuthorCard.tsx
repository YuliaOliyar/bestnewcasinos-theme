import { useState } from "react";
import { ChevronDown, ChevronUp, Linkedin, Twitter, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import { AUTHORS, Author } from "@/const";

interface AuthorCardProps {
  authorId?: string;
  compact?: boolean;
}

export default function AuthorCard({ authorId, compact = false }: AuthorCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const author: Author = AUTHORS[0]; // Default to first author

  if (compact) {
    return (
      <div className="bg-white rounded-lg border border-[#d4e2b0] p-4 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="h-12 w-12 rounded-full object-cover border-2 border-[#265933]"
          />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-sm text-gray-900">{author.name}</span>
              <CheckCircle2 className="h-4 w-4 text-blue-500 fill-blue-500 text-white" />
            </div>
            <p className="text-xs text-gray-500">{author.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#265933] transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#265933] transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
          <a href={`mailto:${author.email}`} className="text-gray-400 hover:text-[#265933] transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-[#d4e2b0] shadow-sm overflow-hidden transition-all duration-300">
      {/* Header / Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="h-12 w-12 rounded-full object-cover border-2 border-[#265933]"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-base text-gray-900">{author.name}</span>
              <CheckCircle2 className="h-4 w-4 text-blue-500 fill-blue-500 text-white" />
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <span>{author.role}</span>
              <span className="text-gray-300">•</span>
              <span className="text-green-700 font-semibold flex items-center gap-0.5">
                <ShieldCheck className="h-3.5 w-3.5" /> Fact-Checked
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 hidden sm:inline">
            {isOpen ? "Hide details" : "Verify expertise"}
          </span>
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
        </div>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div className="px-4 pb-5 pt-2 border-t border-gray-100 bg-gray-50/50 space-y-4 animate-slide-down">
          <p className="text-sm text-gray-600 leading-relaxed">
            {author.bio}
          </p>

          {/* Expertise Badges */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-1.5">
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

          {/* Fact Checker Info */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
            <div>
              Fact-checked by:{" "}
              <a href={author.factChecker.url} className="font-bold text-[#265933] hover:underline">
                {author.factChecker.name}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#265933] transition-colors">
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#265933] transition-colors">
                <Twitter className="h-3.5 w-3.5" /> Twitter
              </a>
              <a href={`mailto:${author.email}`} className="flex items-center gap-1 hover:text-[#265933] transition-colors">
                <Mail className="h-3.5 w-3.5" /> Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
