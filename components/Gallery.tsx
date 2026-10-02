import { siteConfig } from "@/site-config";
import Image from "next/image";

export default function Gallery() {
  const { beforeAfter } = siteConfig.images;

  // Don't show section if no images are configured
  if (beforeAfter.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-earth-50 to-happy-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Real transformations from our commercial maintenance projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {beforeAfter.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-earth-600 text-white px-3 py-1 rounded text-xs font-semibold z-10">
                    Before
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.before}
                      alt={`Before - ${item.description}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute top-2 right-2 bg-happy-green-600 text-white px-3 py-1 rounded text-xs font-semibold z-10">
                    After
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.after}
                      alt={`After - ${item.description}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 border-t border-earth-200">
                <p className="text-sm text-earth-700 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
