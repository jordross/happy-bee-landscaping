import Image from "next/image";
import { siteConfig } from "@/site-config";

export default function WhoWeAre() {
  const hasTeamPhoto = siteConfig.images.team?.src !== "";

  return (
    <section id="who-we-are" className="py-12 lg:py-16 bg-gradient-to-br from-earth-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-happy-green-700 mb-4 text-left">
              Who We Are
            </h2>
            <p className="text-base text-earth-700 mb-4 text-left">
              A local Vancouver crew partnering with an experienced landscaper, focused on reliable commercial maintenance.
            </p>
            <p className="text-base text-earth-700 text-left">
              We&apos;re building our reputation through professional service and clear communication with property managers and strata councils across Metro Vancouver.
            </p>
          </div>
          <div className="order-first lg:order-last">
            {hasTeamPhoto ? (
              <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={siteConfig.images.team.src}
                  alt={siteConfig.images.team.alt || "Happy Bee Landscaping team"}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="relative w-full h-64 lg:h-80 bg-gradient-to-br from-happy-green-100 to-earth-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                <div className="text-6xl opacity-20" role="img" aria-label="bee">🐝</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
