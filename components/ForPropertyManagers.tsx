import { Building2, FileCheck, Camera, TestTube } from "lucide-react";

export default function ForPropertyManagers() {
  const benefits = [
    {
      icon: Building2,
      title: "One vendor across all your sites",
      description: "Manage multiple properties with consistent service standards and coordinated scheduling.",
    },
    {
      icon: FileCheck,
      title: "Compliance docs on request",
      description: "Insurance certificates, WorkSafeBC clearance, and business licence ready for onboarding.",
    },
    {
      icon: Camera,
      title: "Photo report after every visit",
      description: "Clear documentation of work completed, issues identified, and recommendations.",
    },
    {
      icon: TestTube,
      title: "Pilot a single site first",
      description: "Test us on one Vancouver property before committing multiple buildings.",
    },
  ];

  return (
    <section id="property-managers" className="py-12 lg:py-16 bg-gradient-to-br from-happy-green-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-happy-green-700 mb-2 text-left">
            Built for Property Managers
          </h2>
          <p className="text-base text-earth-600 text-left">
            What matters to you: compliance, reporting, and responsive service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex gap-3 items-start">
                  <div className="bg-happy-green-100 text-happy-green-700 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-happy-green-700 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-earth-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white border-l-4 border-happy-green-600 p-4 rounded-lg shadow-sm mb-6">
          <p className="text-sm text-earth-700">
            <strong className="text-happy-green-700">2027 capacity:</strong> We&apos;re quoting now for contracts starting in early 2027.
          </p>
        </div>

        <div className="text-left sm:text-center">
          <a
            href="#contact"
            className="inline-block bg-happy-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl min-h-[44px]"
          >
            Discuss vendor onboarding
          </a>
        </div>
      </div>
    </section>
  );
}
