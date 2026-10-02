"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
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
    <section id="contact" className="py-20 bg-gradient-to-br from-earth-50 to-happy-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            Request a Site Walk &amp; Quote
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Tell us about your property and we&apos;ll schedule a visit to discuss your maintenance needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            {status === "success" ? (
              // Success State
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-happy-green-700 mb-4">
                  Thank You!
                </h3>
                <p className="text-earth-700 mb-6">
                  Thanks, we&apos;ll reply within one business day to schedule a site walk.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-happy-green-600 hover:text-happy-green-700 font-semibold"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              // Form
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-earth-700 font-semibold mb-2">
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
                  <div>
                    <label htmlFor="company" className="block text-earth-700 font-semibold mb-2">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-earth-700 font-semibold mb-2">
                      Email <span className="text-red-600">*</span>
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
                    <label htmlFor="phone" className="block text-earth-700 font-semibold mb-2">
                      Phone <span className="text-red-600">*</span>
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

                <div className="mb-6">
                  <label htmlFor="propertyAddress" className="block text-earth-700 font-semibold mb-2">
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

                <div className="mb-6">
                  <label htmlFor="propertyType" className="block text-earth-700 font-semibold mb-2">
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

                <div className="mb-6">
                  <label htmlFor="serviceNeeded" className="block text-earth-700 font-semibold mb-2">
                    What do you need? <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="serviceNeeded"
                    name="serviceNeeded"
                    rows={4}
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition resize-none ${
                      errors.serviceNeeded ? "border-red-500" : "border-earth-300"
                    }`}
                    placeholder="e.g., Weekly grounds maintenance starting spring 2027, or seasonal cleanup and spring prep..."
                  ></textarea>
                  {errors.serviceNeeded && (
                    <p className="text-red-600 text-sm mt-1">{errors.serviceNeeded}</p>
                  )}
                </div>

                {/* Honeypot field for spam prevention */}
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
                  className="w-full bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-happy-green-700 mb-1">Phone</h3>
                  <a 
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-earth-600 hover:text-happy-green-600 transition-colors text-lg"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-happy-green-700 mb-1">Email</h3>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-earth-600 hover:text-happy-green-600 transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-happy-green-700 mb-1">Service Area</h3>
                  <p className="text-earth-600">
                    Metro Vancouver, BC<br />
                    Primary: City of Vancouver
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-happy-green-50 border border-happy-green-200 rounded-lg p-6">
              <p className="text-sm text-earth-700">
                <strong className="text-happy-green-700">Property Managers:</strong> We&apos;re building capacity for 2027. 
                Reach out to discuss vendor onboarding and multi-site coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
