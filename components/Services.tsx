import { Leaf, Scissors, Droplets, Camera, Calendar, Snowflake } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: "Recurring Grounds Maintenance",
      description: "Weekly or bi-weekly site visits with consistent crews and clear scopes. We keep your property looking professional year-round.",
    },
    {
      icon: Leaf,
      title: "Seasonal Cleanups & Bed Care",
      description: "Spring and fall cleanups, mulching, weeding, bed edging, and seasonal color rotation to maintain curb appeal.",
    },
    {
      icon: Scissors,
      title: "Pruning & Turf Management",
      description: "Shrub and hedge trimming, lawn mowing, edging, and aeration. We work with your site's specific planting and turf needs.",
    },
    {
      icon: Droplets,
      title: "Irrigation Checks",
      description: "Spring startup, routine inspections, and adjustments. Water-restriction aware to help you stay compliant with Metro Vancouver conservation guidelines.",
    },
    {
      icon: Camera,
      title: "Photo & Log Reporting",
      description: "Simple documentation and reporting for property managers. Clear records of work completed, issues identified, and recommendations.",
    },
    {
      icon: Snowflake,
      title: "Snow Removal (Separate)",
      description: "Available as an add-on service, particularly for North Shore and high-elevation properties. Quoted separately to keep base pricing clear.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-earth-50 to-happy-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Comprehensive commercial landscape maintenance designed for property managers and strata corporations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-earth-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-happy-green-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-earth-700 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white border-l-4 border-happy-green-600 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <p className="text-earth-700">
            <strong className="text-happy-green-700">Focused approach:</strong> We prioritize recurring maintenance and softscape care. 
            Heavy design-build and hardscape capital projects are deferred while we establish reliable service and cash flow.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#how-it-works"
            className="inline-block bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
