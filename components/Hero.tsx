import { ArrowDown, Phone } from "lucide-react";
import { siteConfig } from "@/site-config";
import Image from "next/image";

export default function Hero() {
  const hasHeroImage = siteConfig.images.hero.src !== "";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image or Gradient */}
      {hasHeroImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={siteConfig.images.hero.src}
              alt={siteConfig.images.hero.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-happy-green-900/70 via-happy-green-800/60 to-earth-900/70"></div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-happy-green-50 via-white to-earth-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTVjM2EiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0xMiAyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="text-5xl" role="img" aria-label="bee">🐝</div>
        </div>
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight ${hasHeroImage ? "text-white" : "text-happy-green-700"}`}>
          Happy Bee Landscaping
        </h1>
        <p className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-6 ${hasHeroImage ? "text-white" : "text-earth-700"}`}>
          Commercial Grounds &amp; Property Maintenance
        </p>
        <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${hasHeroImage ? "text-white/95" : "text-earth-600"}`}>
          Serving stratas and property managers across Metro Vancouver
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="#contact" 
            className="bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Request a Site Walk &amp; Quote
          </a>
          <a 
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl ${
              hasHeroImage 
                ? "bg-white text-happy-green-700 hover:bg-earth-50" 
                : "border-2 border-happy-green-600 text-happy-green-700 hover:bg-happy-green-50"
            }`}
          >
            <Phone className="w-5 h-5" />
            {siteConfig.contact.phone}
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <a href="#trust" className={hasHeroImage ? "text-white" : "text-happy-green-600"} aria-label="Scroll down">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
