"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/site-config";
import { useEffect, useState } from "react";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling 300px
      setIsVisible(window.scrollY > 300);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="bee">🐝</span>
              <span className="font-bold text-happy-green-700 text-sm sm:text-base hidden sm:inline">
                Happy Bee Landscaping
              </span>
            </div>

            {/* Contact & CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 text-happy-green-700 hover:text-happy-green-800 transition-colors font-semibold text-sm sm:text-base"
                aria-label="Call Happy Bee Landscaping"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden md:inline">{siteConfig.contact.phone}</span>
              </a>

              {/* Quote Button */}
              <a
                href="#contact"
                className="bg-happy-green-600 text-white px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base hover:bg-happy-green-700 transition-colors shadow-md whitespace-nowrap"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
