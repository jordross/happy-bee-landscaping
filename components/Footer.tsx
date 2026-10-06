import { siteConfig } from "@/site-config";

export default function Footer() {
  return (
    <footer className="bg-happy-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-2xl" role="img" aria-label="bee">🐝</div>
          <h3 className="text-xl font-bold">Happy Bee Landscaping</h3>
          <p className="text-earth-100 text-sm max-w-2xl">
            Commercial grounds &amp; property maintenance for stratas and property managers
          </p>
          <p className="text-earth-200 text-sm">
            Serving Vancouver, expanding to Burnaby and New Westminster
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-earth-200 transition-colors">
              {siteConfig.contact.phone}
            </a>
            <span className="text-earth-400">•</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-earth-200 transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="pt-4 border-t border-happy-green-700 w-full text-center">
            <p className="text-earth-200 text-xs">
              © {new Date().getFullYear()} Happy Bee Landscaping. All rights reserved.
            </p>
            {siteConfig.images.hero.credit && (
              <p className="text-earth-300 text-xs mt-2">
                Hero image: {siteConfig.images.hero.credit}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
