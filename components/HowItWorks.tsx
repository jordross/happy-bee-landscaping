export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Site walk",
      description: "We visit your property to assess scope and discuss needs.",
    },
    {
      number: "2",
      title: "Written quote",
      description: "Clear proposal with frequency, inclusions, and pricing.",
    },
    {
      number: "3",
      title: "Schedule start",
      description: "Coordinate a start date and introduce the crew.",
    },
    {
      number: "4",
      title: "Regular reporting",
      description: "Photo documentation after each visit.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-happy-green-700 mb-2 text-left">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-left">
              <div className="bg-happy-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 text-sm">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-happy-green-700 mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-earth-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
