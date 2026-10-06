import { Leaf, Scissors, Droplets, Camera, Snowflake, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Calendar, title: "Recurring grounds maintenance", description: "Weekly or bi-weekly visits with consistent crews" },
    { icon: Leaf, title: "Spring & fall cleanups", description: "Mulching, weeding, bed edging, seasonal color" },
    { icon: Scissors, title: "Pruning & turf care", description: "Shrub trimming, mowing, edging, aeration" },
    { icon: Droplets, title: "Irrigation checks", description: "Startup, inspections, Metro Vancouver compliant" },
    { icon: Camera, title: "Photo reporting", description: "Documentation after every visit" },
    { icon: Snowflake, title: "Snow removal (separate)", description: "Add-on service, quoted separately" },
  ];

  return (
    <section id="services" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-happy-green-700 mb-2 text-left">
            What We Do
          </h2>
          <p className="text-base text-earth-600 text-left">
            Commercial landscape maintenance for stratas and property managers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex gap-3 items-start p-4 bg-earth-50 rounded-lg">
                <div className="bg-happy-green-100 text-happy-green-700 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-happy-green-700 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-earth-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
