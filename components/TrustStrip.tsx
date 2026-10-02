import { Shield, Building2, Users } from "lucide-react";
import { siteConfig } from "@/site-config";

export default function TrustStrip() {
  const { credentials } = siteConfig;

  // Only show items that have been filled in
  const hasWorksafebc = credentials.worksafebc.clearanceNumber !== "";
  const hasInsurance = credentials.insurance.liabilityCoverage !== "";
  const hasLicence = credentials.businessLicence.licenceNumber !== "";
  const hasAffiliations = credentials.affiliations.length > 0;

  // If nothing is configured yet, don't show the section at all
  if (!hasWorksafebc && !hasInsurance && !hasLicence && !hasAffiliations) {
    return null;
  }

  return (
    <section className="py-8 bg-white border-b border-earth-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {/* WorkSafeBC */}
          {hasWorksafebc && (
            <div className="flex items-center gap-3 text-earth-700">
              <div className="bg-happy-green-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-happy-green-700" />
              </div>
              <div>
                <div className="text-xs font-semibold text-earth-600 uppercase tracking-wide">
                  WorkSafeBC
                </div>
                <div className="text-sm font-bold text-happy-green-700">
                  {credentials.worksafebc.clearanceNumber}
                </div>
                {credentials.worksafebc.validUntil && (
                  <div className="text-xs text-earth-600">
                    {credentials.worksafebc.validUntil}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Insurance */}
          {hasInsurance && (
            <div className="flex items-center gap-3 text-earth-700">
              <div className="bg-happy-green-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-happy-green-700" />
              </div>
              <div>
                <div className="text-xs font-semibold text-earth-600 uppercase tracking-wide">
                  Liability Insurance
                </div>
                <div className="text-sm font-bold text-happy-green-700">
                  {credentials.insurance.liabilityCoverage}
                </div>
                {credentials.insurance.validUntil && (
                  <div className="text-xs text-earth-600">
                    {credentials.insurance.validUntil}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Business Licence */}
          {hasLicence && (
            <div className="flex items-center gap-3 text-earth-700">
              <div className="bg-happy-green-100 p-2 rounded-lg">
                <Building2 className="w-5 h-5 text-happy-green-700" />
              </div>
              <div>
                <div className="text-xs font-semibold text-earth-600 uppercase tracking-wide">
                  Business Licence
                </div>
                <div className="text-sm font-bold text-happy-green-700">
                  {credentials.businessLicence.licenceNumber}
                </div>
                {credentials.businessLicence.issuedBy && (
                  <div className="text-xs text-earth-600">
                    {credentials.businessLicence.issuedBy}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Affiliations */}
          {hasAffiliations && (
            <div className="flex items-center gap-3 text-earth-700">
              <div className="bg-happy-green-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-happy-green-700" />
              </div>
              <div>
                <div className="text-xs font-semibold text-earth-600 uppercase tracking-wide">
                  Member
                </div>
                <div className="text-sm font-bold text-happy-green-700">
                  {credentials.affiliations.map((affiliation, index) => (
                    <span key={index}>
                      {affiliation.url ? (
                        <a
                          href={affiliation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-happy-green-800 underline"
                        >
                          {affiliation.name}
                        </a>
                      ) : (
                        affiliation.name
                      )}
                      {index < credentials.affiliations.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
