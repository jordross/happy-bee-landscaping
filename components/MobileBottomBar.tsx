"use client";

import { Phone, FileText } from "lucide-react";
import { siteConfig } from "@/site-config";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-earth-200 shadow-2xl">
      <div className="flex items-stretch divide-x divide-earth-200">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-3 px-4 text-happy-green-700 hover:bg-happy-green-50 transition-colors active:bg-happy-green-100"
          aria-label="Call Happy Bee Landscaping"
        >
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>

        {/* Quote Button */}
        <a
          href="#contact"
          className="flex-1 flex flex-col items-center justify-center py-3 px-4 bg-happy-green-600 text-white hover:bg-happy-green-700 transition-colors active:bg-happy-green-800"
          aria-label="Request a quote"
        >
          <FileText className="w-6 h-6 mb-1" />
          <span className="text-xs font-semibold">Request Quote</span>
        </a>
      </div>
    </div>
  );
}
