import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="py-3 px-4 bg-white/50 backdrop-blur-sm border-b border-[#d4e2b0] text-xs text-gray-600">
      <div className="container mx-auto flex items-center flex-wrap gap-1.5">
        <Link href="/" className="hover:text-[#265933] transition-colors flex items-center gap-1">
          <Home className="h-3.5 w-3.5" />
          <span>Home</span>
        </Link>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-gray-400" />
              {isLast || !item.url ? (
                <span className="font-semibold text-[#265933] truncate max-w-[200px] md:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-[#265933] transition-colors">
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
