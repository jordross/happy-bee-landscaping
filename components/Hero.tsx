import { Phone } from "lucide-react";
import { siteConfig } from "@/site-config";
import Image from "next/image";

export default function Hero() {
  const hasHeroImage = siteConfig.images.hero.src !== "";

  return (
    <section id="home" className="relative pt-16 pb-12 lg:py-20 lg:min-h-[600px] flex items-center justify-center">
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
            <div className="absolute inset-0 bg-gradient-to-br from-happy-green-900/75 via-happy-green-800/70 to-earth-900/75"></div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-happy-green-50 via-white to-earth-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTVjM2EiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0xMiAyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center lg:text-center">
          <div className="mb-4 flex items-center justify-center lg:justify-center gap-2">
            <div className="text-4xl sm:text-5xl" role="img" aria-label="bee">🐝</div>
          </div>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight ${hasHeroImage ? "text-white" : "text-happy-green-700"}`}>
            Happy Bee Landscaping
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl font-medium mb-6 ${hasHeroImage ? "text-white" : "text-earth-700"}`}>
            Reliable commercial grounds maintenance for Metro Vancouver property managers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <a 
              href="#contact" 
              className="bg-happy-green-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-happy-green-700 transition-all shadow-lg hover:shadow-xl min-h-[44px] flex items-center justify-center"
            >
              Request a site walk &amp; quote
            </a>
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl min-h-[44px] ${
                hasHeroImage 
                  ? "bg-white text-happy-green-700 hover:bg-earth-50" 
                  : "border-2 border-happy-green-600 text-happy-green-700 hover:bg-happy-green-50"
              }`}
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
