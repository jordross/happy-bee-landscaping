/**
 * Site Configuration
 * 
 * This file contains all the configurable content for the Happy Bee Landscaping website.
 * To update credentials, photos, or other content, edit the values below.
 */

export interface BeforeAfterImage {
  before: string;
  after: string;
  description: string;
}

export interface Reference {
  name: string;
  title: string;
  company: string;
  quote: string;
}

export interface Affiliation {
  name: string;
  url?: string;
}

export const siteConfig = {
  contact: {
    phone: "(604) 674-6785",
    phoneRaw: "+16046746785",
    email: "info@happybeelandscapes.ca",
  },

  /**
   * Trust & Credentials
   * 
   * Fill in these values when available. Empty strings will hide the credential from the site.
   * This ensures no fake/placeholder credentials appear on the live site.
   */
  credentials: {
    worksafebc: {
      // Example: "R123456789"
      clearanceNumber: "",
      // Example: "Valid until Dec 31, 2027"
      validUntil: "",
    },
    insurance: {
      // Example: "$2,000,000"
      liabilityCoverage: "",
      // Example: "Valid until Dec 31, 2027"
      validUntil: "",
    },
    businessLicence: {
      // Example: "BN-12345"
      licenceNumber: "",
      // Example: "City of Vancouver"
      issuedBy: "",
    },
    affiliations: [] as Affiliation[],
  },

  /**
   * Photos & Images
   * 
   * Place your photos in the /public/images directory and reference them here.
   * Paths should be relative to /public (e.g., "/images/hero.jpg")
   */
  images: {
    hero: {
      // Example: "/images/hero.jpg"
      src: "",
      alt: "Professional commercial landscape maintenance in Metro Vancouver",
    },
    beforeAfter: [] as BeforeAfterImage[],
  },

  /**
   * References
   * 
   * Add client references when available.
   */
  references: [] as Reference[],
};
