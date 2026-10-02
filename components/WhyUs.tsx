import { ShieldCheck, ClipboardCheck, FileText, Clock } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Compliance-Ready",
      description: "We carry the insurance, WorkSafeBC clearance, and business licensing that property managers expect. We're set up to provide additional insured certificates and clearance letters upon request.",
    },
    {
      icon: ClipboardCheck,
      title: "Clear Scopes & Reporting",
      description: "Transparent service agreements with defined frequencies, inclusions, and exclusions. Photo logs and site reports keep councils and managers informed.",
    },
    {
      icon: FileText,
      title: "Experienced Landscaping Partner",
      description: "Our team brings professional landscape maintenance expertise. While we're new to Metro Vancouver, we understand commercial grounds care and property management expectations.",
    },
    {
      icon: Clock,
      title: "Responsive & Reliable",
      description: "Consistent crews, on-time service, and professional communication. We know that property managers need partners they can count on.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            Why Happy Bee
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            A new commercial landscaping partnership built on professionalism, compliance, and clear communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-happy-green-50 rounded-lg border border-happy-green-100"
              >
                <div className="flex-shrink-0">
                  <div className="bg-happy-green-600 text-white p-3 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-happy-green-700 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-earth-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-earth-50 border border-earth-200 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-happy-green-700 mb-3 text-center">
            What We Don&apos;t Claim
          </h3>
          <p className="text-earth-700 text-center leading-relaxed">
            We won&apos;t invent years in Vancouver we haven&apos;t earned yet, testimonials we haven&apos;t received, 
            or awards we haven&apos;t won. We&apos;re building our reputation through reliable service and professional execution.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
