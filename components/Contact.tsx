"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    siteAddress: "",
    city: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!formEndpoint || formEndpoint.includes("your-form-endpoint")) {
      const mailtoBody = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSite Address: ${formData.siteAddress}\nCity: ${formData.city}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@happybeelandscapes.ca"}?subject=Website Contact: ${formData.company || formData.name}&body=${encodeURIComponent(mailtoBody)}`;
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          siteAddress: "",
          city: "",
          message: "",
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
            Get in Touch
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Ready to discuss your property&apos;s landscape maintenance needs? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-earth-700 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition"
                  />
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
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-earth-700 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="siteAddress" className="block text-earth-700 font-semibold mb-2">
                    Site Address
                  </label>
                  <input
                    type="text"
                    id="siteAddress"
                    name="siteAddress"
                    value={formData.siteAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-earth-700 font-semibold mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-earth-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your property and maintenance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-happy-green-700 mb-1">Email</h3>
                  <a 
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@happybeelandscapes.ca"}`}
                    className="text-earth-600 hover:text-happy-green-600 transition-colors break-all"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@happybeelandscapes.ca"}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-happy-green-700 mb-1">Phone</h3>
                  <a 
                    href={`tel:+1${process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/\D/g, '') || "6046746785"}`}
                    className="text-earth-600 hover:text-happy-green-600 transition-colors"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_PHONE || "(604) 674-6785"}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg">
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
