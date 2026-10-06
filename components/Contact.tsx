"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { siteConfig } from "@/site-config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    serviceNeeded: "",
    botcheck: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const hasEmail = formData.email.trim();
    const hasPhone = formData.phone.trim();

    if (!hasEmail && !hasPhone) {
      newErrors.email = "Email or phone is required";
      newErrors.phone = "Email or phone is required";
    } else {
      if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (hasPhone && !/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Please select a property type";
    }

    if (!formData.serviceNeeded.trim()) {
      newErrors.serviceNeeded = "Please describe what you need";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: siteConfig.web3forms.accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Company/Strata: ${formData.company || "N/A"}\nProperty Address: ${formData.propertyAddress || "N/A"}\nProperty Type: ${formData.propertyType}\n\nService Needed:\n${formData.serviceNeeded}`,
          subject: "New quote request - Happy Bee Landscaping",
          from_name: "Happy Bee Website",
          botcheck: formData.botcheck,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          propertyAddress: "",
          propertyType: "",
          serviceNeeded: "",
          botcheck: "",
        });
        setShowMoreDetails(false);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-happy-green-700 mb-2 text-left">
            Request a Site Walk &amp; Quote
          </h2>
          <p className="text-base text-earth-600 text-left">
            Tell us about your property and we&apos;ll schedule a visit
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-white rounded-lg border-2 border-green-200 p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-happy-green-700 mb-3">
              Thank You!
            </h3>
            <p className="text-earth-700 mb-6">
              We&apos;ll reply within one business day to schedule a site walk.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-happy-green-600 hover:text-happy-green-700 font-semibold"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="bg-earth-50 rounded-lg p-6 lg:p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-earth-700 font-semibold mb-2 text-sm">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition ${
                    errors.name ? "border-red-500" : "border-earth-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-earth-700 font-semibold mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition ${
                      errors.email ? "border-red-500" : "border-earth-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-earth-700 font-semibold mb-2 text-sm">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition ${
                      errors.phone ? "border-red-500" : "border-earth-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="propertyType" className="block text-earth-700 font-semibold mb-2 text-sm">
                  Property Type <span className="text-red-600">*</span>
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition ${
                    errors.propertyType ? "border-red-500" : "border-earth-300"
                  }`}
                >
                  <option value="">Select property type</option>
                  <option value="strata">Strata / Condo</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="office">Office Building</option>
                  <option value="retail">Retail Center</option>
                  <option value="mixed">Mixed Use</option>
                  <option value="other">Other</option>
                </select>
                {errors.propertyType && (
                  <p className="text-red-600 text-sm mt-1">{errors.propertyType}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="serviceNeeded" className="block text-earth-700 font-semibold mb-2 text-sm">
                  What do you need? <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="serviceNeeded"
                  name="serviceNeeded"
                  rows={3}
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition resize-none ${
                    errors.serviceNeeded ? "border-red-500" : "border-earth-300"
                  }`}
                  placeholder="e.g., Weekly grounds maintenance starting spring 2027"
                ></textarea>
                {errors.serviceNeeded && (
                  <p className="text-red-600 text-sm mt-1">{errors.serviceNeeded}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowMoreDetails(!showMoreDetails)}
                className="flex items-center gap-2 text-happy-green-600 hover:text-happy-green-700 font-semibold mb-4 text-sm min-h-[44px]"
              >
                {showMoreDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                Add more details
              </button>

              {showMoreDetails && (
                <div className="space-y-4 mb-4 p-4 bg-white rounded-lg border border-earth-200">
                  <div>
                    <label htmlFor="company" className="block text-earth-700 font-semibold mb-2 text-sm">
                      Company / Strata
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="propertyAddress" className="block text-earth-700 font-semibold mb-2 text-sm">
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      placeholder="e.g., 123 Main St, Vancouver"
                      className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              )}

              <input
                type="checkbox"
                name="botcheck"
                id="botcheck"
                className="hidden"
                style={{ display: "none" }}
                value={formData.botcheck}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-happy-green-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Request
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  <p className="font-semibold mb-2">Something went wrong with the form submission.</p>
                  <p className="text-sm">
                    Please try again or contact us directly:
                    <br />
                    Phone: <a href={`tel:${siteConfig.contact.phoneRaw}`} className="underline hover:text-red-800">{siteConfig.contact.phone}</a>
                    <br />
                    Email: <a href={`mailto:${siteConfig.contact.email}`} className="underline hover:text-red-800">{siteConfig.contact.email}</a>
                  </p>
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-earth-200">
              <p className="text-sm text-earth-600 mb-4 text-center">
                References available on request
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 text-happy-green-600 hover:text-happy-green-700 font-semibold min-h-[44px]"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-center gap-2 text-happy-green-600 hover:text-happy-green-700 font-semibold break-all min-h-[44px]"
                >
                  <Mail className="w-5 h-5" />
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
