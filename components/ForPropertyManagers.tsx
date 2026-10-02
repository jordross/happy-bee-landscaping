import { CheckCircle2, Calendar, FileCheck, Users, Shield, MessageSquare } from "lucide-react";

export default function ForPropertyManagers() {
  return (
    <section id="property-managers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            For Property Managers
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Built around what matters to you: compliance, reporting, and responsive service.
          </p>
        </div>

        {/* Key Benefits for Property Managers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-happy-green-50 to-white border border-happy-green-200 rounded-lg p-6">
            <div className="bg-happy-green-600 text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-happy-green-700 mb-2">
              Multi-Site Contracts
            </h3>
            <p className="text-earth-700 text-sm leading-relaxed">
              Manage multiple properties with a single vendor. Consistent service standards across all your sites with coordinated scheduling.
            </p>
          </div>

          <div className="bg-gradient-to-br from-happy-green-50 to-white border border-happy-green-200 rounded-lg p-6">
            <div className="bg-happy-green-600 text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-happy-green-700 mb-2">
              Single Point of Contact
            </h3>
            <p className="text-earth-700 text-sm leading-relaxed">
              One contact for scheduling, concerns, and emergency response. No confusion about who to call when you need something done.
            </p>
          </div>

          <div className="bg-gradient-to-br from-happy-green-50 to-white border border-happy-green-200 rounded-lg p-6">
            <div className="bg-happy-green-600 text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-happy-green-700 mb-2">
              Post-Visit Reporting
            </h3>
            <p className="text-earth-700 text-sm leading-relaxed">
              Photo documentation and service logs after each visit. Keep councils informed and track maintenance history over time.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-earth-50 to-white rounded-lg shadow-lg p-8 md:p-12 border border-earth-200">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Calendar className="w-8 h-8 text-happy-green-600" />
              </div>
              <h3 className="text-lg font-bold text-happy-green-700 mb-2">
                2027 Capacity
              </h3>
              <p className="text-earth-700 text-sm">
                We&apos;re quoting now for contracts starting in early 2027.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <FileCheck className="w-8 h-8 text-happy-green-600" />
              </div>
              <h3 className="text-lg font-bold text-happy-green-700 mb-2">
                Vendor Documentation
              </h3>
              <p className="text-earth-700 text-sm">
                Insurance certificates, WorkSafeBC clearance, and business licence ready for your onboarding process.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8 text-happy-green-600" />
              </div>
              <h3 className="text-lg font-bold text-happy-green-700 mb-2">
                Single-Site Pilots
              </h3>
              <p className="text-earth-700 text-sm">
                Test us on one Vancouver property before committing multiple buildings. We&apos;re open to pilot contracts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-happy-green-700 mb-4">
              What You Get
            </h3>
            <ul className="space-y-3 text-earth-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-happy-green-600 flex-shrink-0 mt-0.5" />
                <span>Clear scope proposals with defined frequencies, inclusions, exclusions, and separate snow pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-happy-green-600 flex-shrink-0 mt-0.5" />
                <span>Insurance certificates with strata as additional insured, WorkSafeBC clearance letters on demand</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-happy-green-600 flex-shrink-0 mt-0.5" />
                <span>Photo and log reporting that fits your property management workflow and council expectations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-happy-green-600 flex-shrink-0 mt-0.5" />
                <span>Professional communication with councils, residents, and your management team</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-happy-green-600 flex-shrink-0 mt-0.5" />
                <span>Responsive handling of snow and ice emergencies when weather hits (available as add-on service)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="#contact" 
              className="inline-block bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Discuss Vendor Onboarding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
