"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/site-config";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-md border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl" role="img" aria-label="bee">🐝</div>
            <span className="font-bold text-happy-green-700 text-lg hidden sm:inline">
              Happy Bee Landscaping
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 text-happy-green-600 hover:text-happy-green-700 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
