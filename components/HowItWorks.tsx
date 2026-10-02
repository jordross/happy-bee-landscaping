import { MapPin, FileText, Calendar, ClipboardCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      number: "1",
      title: "Site Walk",
      description: "We visit your property to understand the scope, assess current conditions, and discuss your maintenance needs and expectations.",
    },
    {
      icon: FileText,
      number: "2",
      title: "Written Quote",
      description: "You receive a clear proposal with service frequency, inclusions, exclusions, and pricing. Snow removal quoted separately.",
    },
    {
      icon: Calendar,
      number: "3",
      title: "Schedule Start",
      description: "Once approved, we coordinate a start date and introduce the crew. We work around your property's schedule and access requirements.",
    },
    {
      icon: ClipboardCheck,
      number: "4",
      title: "Regular Reporting",
      description: "After each visit, we provide photo documentation and logs of work completed, issues identified, and any recommendations.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            A straightforward process from first contact to ongoing service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center"
              >
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-happy-green-200"></div>
                )}

                {/* Step Number Circle */}
                <div className="relative mx-auto w-24 h-24 bg-gradient-to-br from-happy-green-500 to-happy-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <div className="absolute inset-0 bg-happy-green-100 rounded-full flex items-center justify-center m-2">
                    <Icon className="w-10 h-10 text-happy-green-700" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border-4 border-happy-green-600 rounded-full flex items-center justify-center text-sm font-bold text-happy-green-700">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-happy-green-700 mb-2">
                  {step.title}
                </h3>
                <p className="text-earth-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Request a Site Walk & Quote
          </a>
        </div>
      </div>
    </section>
  );
}
