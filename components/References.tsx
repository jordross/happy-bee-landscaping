import { Quote, FileCheck } from "lucide-react";
import { siteConfig } from "@/site-config";

export default function References() {
  const { references } = siteConfig;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            References
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            What property managers say about working with Happy Bee Landscaping.
          </p>
        </div>

        {references.length === 0 ? (
          // Placeholder when no references are available yet
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-happy-green-50 to-earth-50 border-2 border-dashed border-happy-green-300 rounded-lg p-12 text-center">
            <FileCheck className="w-12 h-12 text-happy-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-happy-green-700 mb-2">
              References Available on Request
            </h3>
            <p className="text-earth-700">
              We&apos;re building our client base for 2027. References and case studies will be added as we establish ongoing commercial relationships.
              Property managers: reach out to discuss our approach and vendor onboarding documentation.
            </p>
          </div>
        ) : (
          // Show actual references when available
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-happy-green-50 to-white border border-happy-green-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <Quote className="w-8 h-8 text-happy-green-400 mb-4" />
                <p className="text-earth-700 mb-6 italic leading-relaxed">
                  &ldquo;{reference.quote}&rdquo;
                </p>
                <div className="border-t border-happy-green-200 pt-4">
                  <div className="font-bold text-happy-green-700">{reference.name}</div>
                  <div className="text-sm text-earth-600">{reference.title}</div>
                  <div className="text-sm text-earth-600">{reference.company}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
