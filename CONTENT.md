# Happy Bee Landscaping - Content Management Guide

This guide provides comprehensive instructions for managing and updating the content on the Happy Bee Landscaping website. Whether you're a property manager reviewing content, a marketing professional maintaining the site, or the business owner making updates, this guide will help you keep the website accurate, effective, and on-brand.

## Table of Contents

1. [Contact Information Placeholders](#contact-information-placeholders)
2. [Editable Content Areas by Section](#editable-content-areas-by-section)
3. [SEO & Meta Tags](#seo--meta-tags)
4. [Brand Voice Guidelines](#brand-voice-guidelines)
5. [What NOT to Say](#what-not-to-say)
6. [What TO Say](#what-to-say)
7. [Image Placeholders and Guidelines](#image-placeholders-and-guidelines)
8. [Call-to-Action (CTA) Updates](#call-to-action-cta-updates)
9. [Form Endpoint Options](#form-endpoint-options)
10. [Launch Checklist](#launch-checklist)
11. [Ongoing Maintenance Schedule](#ongoing-maintenance-schedule)

---

## Contact Information Placeholders

Contact information is stored as environment variables to make updates easy without touching code. These values appear throughout the website (header, contact section, footer, meta tags).

### Current Placeholders

The site currently uses these placeholder values in `.env.example`:

```
NEXT_PUBLIC_CONTACT_EMAIL=info@happybeelandscapes.ca
NEXT_PUBLIC_CONTACT_PHONE=(604) 674-6785
```

### How to Update

1. Open or create `.env.local` in the project root
2. Set your actual values:
   ```
   NEXT_PUBLIC_CONTACT_EMAIL=your-actual-email@yourdomain.com
   NEXT_PUBLIC_CONTACT_PHONE=(###) ###-####
   ```
3. Restart the development server or redeploy to production
4. **Important**: Phone numbers should use the format `(###) ###-####` for consistency

### Where These Appear

- **Hero Section**: Primary CTA directs users to contact form
- **Contact Section**: Displayed as clickable links
- **Footer**: Company contact information
- **Meta Tags**: Used in structured data for SEO
- **Form Success Message**: Confirmation displays contact options

### Production Deployment

When deploying to Vercel (or another platform):
1. Add environment variables in the platform's dashboard
2. Do NOT commit `.env.local` to Git (it's already in `.gitignore`)
3. Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access

---

## Editable Content Areas by Section

### 1. Hero Section (`/components/Hero.tsx`)

**Current Content:**
- Headline: "Happy Bee Landscaping"
- Subheadline: "Professional commercial landscaping services for property managers in Metro Vancouver, BC."
- Primary CTA: "Get a Free Quote"

**What You Can Edit:**
- **Tagline/Subheadline**: Adjust to reflect your actual service area or value proposition
  - Example: "Professional landscaping services for Denver commercial properties"
  - Keep it under 120 characters for mobile readability
- **CTA Button Text**: Alternative options:
  - "Request a Quote"
  - "Contact Us Today"
  - "Schedule Consultation"
  - "Get Started"
- **Background Color**: Currently uses yellow (`bg-yellow-400`), change to match your branding

**Editing Instructions:**
Open `/components/Hero.tsx` and locate the text within the `<h1>`, `<p>`, and `<button>` tags.

---

### 2. Who We Serve Section (`/components/WhoWeServe.tsx`)

**Current Content:**
- Headline: "Who We Serve"
- Target audience: Property managers and commercial clients
- Key message: Partnership approach

**What You Can Edit:**
- **Target Audience**: If you serve different markets, update the descriptions
  - Residential communities
  - HOA properties
  - Retail centers
  - Office parks
- **Partnership Language**: Adjust to reflect your business model
  - Contract length preferences
  - Service frequency
  - Response time commitments

**Key Messages to Maintain:**
- Reliability and professionalism
- Understanding of property management needs
- Long-term partnership focus

---

### 3. Services Section (`/components/Services.tsx`)

**Current Content:**
Services are displayed in a grid layout with icons and descriptions:
1. Lawn Maintenance
2. Landscaping Design
3. Snow Removal
4. Seasonal Cleanup

**What You Can Edit:**
- **Service Names**: Adjust to match your actual offerings
- **Descriptions**: Keep descriptions between 50-100 characters
- **Order**: Prioritize your most popular or profitable services first
- **Add/Remove Services**: Duplicate or delete service blocks as needed

**Service Examples to Consider:**
- Irrigation system maintenance
- Tree and shrub care
- Mulching and edging
- Parking lot maintenance
- Hardscaping
- Weed control and fertilization
- Landscape lighting

**Editing Instructions:**
Open `/components/Services.tsx` and modify the service objects in the component. Each service has a title, description, and icon identifier.

---

### 4. Why Choose Us Section (`/components/WhyUs.tsx`)

**Current Content:**
Highlights four key differentiators:
1. Licensed & Insured
2. Reliable Service
3. Responsive Communication
4. Quality Results

**What You Can Edit:**
- **Benefit Statements**: Ensure these reflect your actual capabilities
- **Proof Points**: Add specific examples where possible:
  - "24-hour emergency response for snow events"
  - "Certified arborists on staff"
  - "5-year warranty on landscaping installations"
- **Number of Benefits**: Add or reduce benefit blocks (keep 3-6 for best visual balance)

**Best Practices:**
- Lead with benefits, not features ("Peace of mind" vs "Insurance coverage")
- Use active language ("We respond" vs "Responses are given")
- Avoid superlatives unless you can back them up ("fastest" → "fast")

---

### 5. Service Area Section (`/components/ServiceArea.tsx`)

**Current Content:**
- Lists Metro Vancouver, BC area with specific cities and neighbourhoods

**CRITICAL - Update This Immediately:**
This is placeholder content and must be updated to reflect your actual service area.

**What You Can Edit:**
- **Primary Service Area**: Your main city or region
- **Specific Neighborhoods/Zones**: List 4-8 recognizable areas
  - Use neighborhood names property managers will recognize
  - Include surrounding suburbs if applicable
  - Consider listing by ZIP code for SEO benefits
- **Service Radius**: If applicable, mention "and surrounding areas within X miles"

**Example Formats:**
```
Serving Denver Metro Area:
- LoDo and Downtown
- Cherry Creek
- Capitol Hill
- Highlands
- And surrounding areas within 20 miles
```

**Why This Matters:**
Property managers need to know immediately if you serve their properties. Specificity builds trust and improves local SEO.

---

### 6. For Property Managers Section (`/components/ForPropertyManagers.tsx`)

**Current Content:**
Special section addressing property manager-specific needs:
- Bulk pricing
- Seasonal contracts
- Compliance documentation
- Benefits: tenant satisfaction, property value, budget predictability

**What You Can Edit:**
- **Specific Offers**: Add actual pricing structures or discount ranges if you're comfortable sharing
  - "10% discount on 5+ properties"
  - "Locked-in rates for multi-year contracts"
- **Documentation You Provide**: List specific documents:
  - Insurance certificates (COI)
  - W-9 forms
  - Safety data sheets (SDS)
  - Work completion reports
  - Photo documentation
- **Response Time Commitments**: Add specific SLAs if you offer them
  - "24-hour emergency response"
  - "Same-day quote turnaround"
- **Portfolio Management**: Mention if you have systems for managing multiple properties

**Why This Section Matters:**
This is your differentiator for property managers. They have unique needs around contracts, billing, and documentation that residential services don't address.

---

### 7. Contact Section (`/components/Contact.tsx`)

**Current Content:**
- Contact form with name, email, phone, message fields
- Client-side validation
- Form submission to configured endpoint

**What You Can Edit:**
- **Form Fields**: Add or remove fields based on your needs
  - Property address
  - Property type (dropdown)
  - Number of units/buildings
  - Preferred contact method
  - Best time to call
  - How did you hear about us?
- **Placeholder Text**: Make helpful and specific
  - "Tell us about your property and landscaping needs"
  - "123 Main Street, Denver, CO"
- **Success Message**: Customize the confirmation message
  - Include expected response time
  - Provide next steps
  - Offer alternative contact methods

**Current Validation:**
- Email: Pattern matching for valid email format
- Phone: Optional field, formatted as (###) ###-####
- Message: Required, minimum length check

**Accessibility Notes:**
- All fields have labels (not just placeholders)
- Error messages are descriptive
- Form can be completed with keyboard only

---

### 8. Footer (`/components/Footer.tsx`)

**Current Content:**
- Company name
- Contact information (pulled from environment variables)
- Service area mention
- Copyright with current year

**What You Can Edit:**
- **Company Legal Name**: If different from "Happy Bee Landscaping"
- **Additional Links**: Add if needed
  - Privacy Policy
  - Terms of Service
  - Service Agreement
  - Career Opportunities
- **Social Media Links**: Add icons and links if you have active profiles
- **Business Hours**: Consider adding office hours or on-call information
- **License Numbers**: Include if required by your jurisdiction

**Best Practices:**
- Keep the footer simple and uncluttered
- Ensure all links work before launch
- Year updates automatically via `new Date().getFullYear()`

---

## SEO & Meta Tags

Meta tags are defined in `/app/layout.tsx` and control how your site appears in search results and social media shares.

### Current Meta Tags

```typescript
title: "Happy Bee Landscaping | Commercial Landscaping Services"
description: "Professional commercial landscaping services for property managers..."
```

### What You Should Update

1. **Title Tag** (50-60 characters recommended):
   - Include primary keyword
   - Include location
   - Include business name
   - Example: "Commercial Landscaping Metro Vancouver | Happy Bee Landscaping"

2. **Meta Description** (150-160 characters):
   - Compelling summary of services
   - Include call-to-action
   - Include location
   - Example: "Professional commercial landscaping for KC property managers. Licensed, insured, reliable. Seasonal contracts available. Get your free quote today."

3. **Open Graph Tags** (for social media):
   - `og:title`: Same as title or slightly longer
   - `og:description`: Same as meta description
   - `og:image`: Add a professional hero image (1200x630px recommended)
   - `og:url`: Your production domain

4. **Keywords to Target** (for content, not meta keywords tag):
   - Commercial landscaping [your city]
   - Property management landscaping
   - [Your city] landscaping services
   - Commercial lawn maintenance
   - Property manager landscaping partner

### Structured Data (Schema.org)

Consider adding LocalBusiness schema to improve search appearance:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Happy Bee Landscaping",
  "description": "Commercial landscaping services",
  "telephone": "(604) 674-6785",
  "email": "info@happybeelandscapes.ca",
  "url": "https://happybeelandscapes.ca",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  }
}
```

This can be added to `/app/layout.tsx` in a `<script type="application/ld+json">` tag.

---

## Brand Voice Guidelines

### Tone Attributes

**Professional**: This is B2B communication with property managers who make business decisions. Maintain a professional, competent tone.

**Transparent**: No hype, no hidden fees, no asterisks. Say what you mean clearly.

**Practical**: Focus on solving problems, not flowery language. Property managers care about results, not poetry.

**Confident**: You know landscaping. You're good at it. State it clearly without arrogance.

**Approachable**: Professional doesn't mean stiff. Use "we" and "you" to create a partnership feeling.

### Writing Style

**Do:**
- Use active voice: "We respond within 24 hours" (not "Responses are provided")
- Be specific: "Weekly mowing, April-October" (not "Regular maintenance")
- Use short sentences and paragraphs for readability
- Break up text with headers and bullet points
- Write for scan-ability (people skim websites)

**Don't:**
- Use industry jargon without explanation
- Write long paragraphs (3-4 sentences max)
- Use ALL CAPS for emphasis
- Overuse exclamation points!!!
- Use "we're the best" language without backing it up

### Example Comparisons

**Too Casual:**
"Hey there! Looking for awesome landscaping? We're totally the best in town! Hit us up for a quote! 😊"

**Too Formal:**
"Happy Bee Landscaping LLC hereby extends an invitation to property management entities to engage our organization for the procurement of horticultural services..."

**Just Right:**
"Happy Bee Landscaping partners with property managers to maintain beautiful, safe commercial properties. We handle the landscaping so you can focus on your tenants. Get a free quote today."

---

## What NOT to Say

### Fake Credentials
❌ "20+ years of experience" (if you're new)
❌ "Award-winning service" (if you haven't won awards)
❌ "Serving Metro Vancouver since 1998" (if you started in 2025)

**Why:** Property managers verify claims. False statements destroy trust and can be fraud.

### Fake Testimonials
❌ "Best landscaper we've ever worked with! - Sarah M."
❌ Made-up Google reviews
❌ "100+ satisfied clients" (if you're new)

**Why:** Property managers check references. Fake reviews are:
1. Unethical
2. Potentially illegal (FTC violations)
3. Easily discovered
4. Permanent reputation damage

### Unverifiable Superlatives
❌ "The best landscaping company in Metro Vancouver"
❌ "Fastest response times in the industry"
❌ "Highest quality guaranteed"

**Why:** Unless you have third-party verification, these are puffery that sophisticated B2B buyers see through.

### Pressure Tactics
❌ "Limited time offer!"
❌ "Call now before spots fill up!"
❌ "Only 3 slots left this season!"

**Why:** Property managers make decisions based on budgets and contracts, not artificial urgency. This approach reads as unprofessional in B2B context.

### Making Promises You Can't Keep
❌ "24/7 availability" (if you're not actually available 24/7)
❌ "Same-day service guaranteed" (if you can't guarantee it)
❌ "Lowest prices guaranteed" (if you're not actually the cheapest)

**Why:** One broken promise = lost client + bad word of mouth in a small professional community.

---

## What TO Say

### Accurate New Business Language

✅ "New partnership focused on property management clients"
✅ "Launching in [season/year] with experienced landscaping professionals"
✅ "Building our portfolio with quality work and transparent service"

### Honesty About Experience

✅ "Our crew has 15+ years of combined experience in commercial landscaping"
✅ "Licensed and insured to serve commercial properties in Metro Vancouver"
✅ "We're new to the market, which means we're highly motivated to earn your business"

### Verifiable Claims

✅ "Fully licensed and insured" (provide proof on request)
✅ "Compliant with [specific regulation]" (if true)
✅ "We carry $X million in liability coverage" (specific amount)

### Value Propositions That Don't Require History

✅ "Transparent pricing with detailed estimates"
✅ "Responsive communication - quote requests answered within 24 hours"
✅ "Detailed work documentation with photos"
✅ "Seasonal contract options with locked-in rates"

### Relationship-Building Language

✅ "We're looking to build long-term partnerships, not one-off jobs"
✅ "Your feedback helps us improve - we take it seriously"
✅ "We know we're new. We plan to earn your trust through quality work and clear communication."

### Specific Service Descriptions

✅ "Weekly mowing, edging, and blowing April through October"
✅ "Spring cleanup includes debris removal, bed edging, and mulch installation"
✅ "Snow removal within 2 hours of storm end for walkways, 4 hours for parking lots"

---

## Image Placeholders and Guidelines

Currently, the site uses text-based sections without images. When adding images:

### Recommended Images

1. **Hero Background** (1920x1080px):
   - Professional property with landscaping
   - Well-maintained commercial building
   - Bright, welcoming atmosphere
   - **Avoid**: Stock photos that look too generic

2. **Service Icons** (Already implemented with Font Awesome/Lucide):
   - Keep current icon system or replace with custom SVG icons
   - Maintain consistent icon style

3. **About/Team Photos** (Optional):
   - Your crew in company uniforms
   - Your vehicles with company branding
   - Action shots of work being performed
   - **Avoid**: Stock photos of models pretending to be landscapers

4. **Before/After Gallery** (For future addition):
   - Same angle and lighting for comparison
   - Real projects you've completed
   - Include photo release from property owners

### Image Technical Requirements

- **Format**: WebP for best performance, with JPEG fallback
- **Optimization**: Compress images before uploading (use TinyPNG or similar)
- **Responsive**: Provide multiple sizes for different screen widths
- **Alt Text**: Descriptive text for accessibility and SEO
  - ✅ "Commercial property lawn maintenance service in progress"
  - ❌ "image1.jpg"

### Where to Store Images

Images should be placed in `/public/images/` directory:
```
/public/
  /images/
    hero-background.jpg
    service-lawn-care.jpg
    service-landscaping.jpg
    etc.
```

Reference them in code with: `/images/filename.jpg`

---

## Call-to-Action (CTA) Updates

### Current CTAs

1. **Primary**: "Get a Free Quote" (Hero section)
2. **Secondary**: Contact form submission (Contact section)

### CTA Best Practices

**Make Them Action-Oriented:**
- ✅ "Request Your Quote"
- ✅ "Schedule a Consultation"
- ✅ "Get Your Estimate"
- ❌ "Submit" (too generic)
- ❌ "Learn More" (unclear what happens)

**Create Clear Value:**
- "Get a Free Quote - No Obligation"
- "Request a Quote - Response in 24 Hours"
- "Schedule Your Free Property Assessment"

**Use Contrasting Colors:**
- Current button uses yellow on gray-900 background (good contrast)
- Ensure buttons stand out from surrounding content
- Test on mobile devices for tap-ability (minimum 44x44px)

**Strategic Placement:**
- Hero section (immediate action)
- After benefits section (once value is established)
- End of page (after full information)
- Sticky header (optional, for easy access)

---

## Form Endpoint Options

The contact form can be configured to use three different submission methods:

### Option 1: Formspree (Recommended for Most Users)

**Best For**: Non-technical users, quick setup, no backend needed

**Setup:**
1. Create free account at [formspree.io](https://formspree.io)
2. Create a new form in the dashboard
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/abc123xyz`)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
   ```

**Pros:**
- 5-minute setup
- Spam protection included
- Email notifications automatically configured
- Submission dashboard to view all inquiries
- Free tier: 50 submissions/month
- No coding required

**Cons:**
- Third-party dependency
- Free tier limits
- Formspree branding on notification emails (free tier)

**Pricing:**
- Free: 50 submissions/month
- Basic ($10/mo): 1,000 submissions/month
- More at formspree.io/pricing

---

### Option 2: Resend API

**Best For**: Developers, users who want full control, higher volume

**Setup:**
1. Create account at [resend.com](https://resend.com)
2. Verify your sending domain
3. Generate API key from dashboard
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
5. The API route is already configured in the project

**Pros:**
- Full control over email design
- No third-party branding
- Higher volume (100 emails/day free tier)
- Programmable (can trigger automations)
- Clean, developer-friendly API

**Cons:**
- Requires domain verification (DNS records)
- Requires API route setup (already included in this project)
- Slightly more technical

**Pricing:**
- Free: 100 emails/day, 3,000/month
- Pro ($20/mo): 50,000 emails/month
- More at resend.com/pricing

**Domain Verification:**
You'll need to add DNS records to verify your domain. Resend provides the exact records in their dashboard. This typically takes 15-60 minutes to propagate.

---

### Option 3: Mailto Fallback

**Best For**: Temporary solution, testing, very low volume

**Setup:**
Do nothing. If no endpoint is configured, the form automatically uses `mailto:` protocol.

**How It Works:**
When the user submits the form, their default email client opens with:
- To: Your contact email (from environment variable)
- Subject: "Website Inquiry from [Name]"
- Body: Pre-filled with form data

**Pros:**
- Zero configuration
- No cost
- No third-party service
- Works anywhere

**Cons:**
- Poor user experience (leaves your website)
- Requires user to have email client configured
- No submission tracking
- No spam protection
- Mobile users often have issues
- Professional clients may see it as unprofessional

**Recommended Use:**
- Development/testing only
- Very temporary solution until Formspree/Resend is set up

---

### Comparison Table

| Feature | Formspree | Resend | Mailto |
|---------|-----------|--------|--------|
| **Setup Time** | 5 minutes | 15-30 minutes | 0 minutes |
| **Technical Skill** | None | Basic | None |
| **Cost (low volume)** | Free | Free | Free |
| **Spam Protection** | Yes | Build your own | No |
| **Submission Tracking** | Yes | Build your own | No |
| **User Experience** | Excellent | Excellent | Poor |
| **Domain Verification** | No | Yes | No |
| **Professional** | Yes | Yes | No |

**Recommendation**: Start with Formspree for immediate launch, migrate to Resend later if you need more control or higher volume.

---

## Launch Checklist

Use this checklist before making the site publicly available:

### Content Review

- [ ] All placeholder contact info updated (email, phone)
- [ ] Service area reflects actual coverage area
- [ ] Services listed match what you actually offer
- [ ] No fake testimonials or made-up credentials
- [ ] "Years in business" claims are accurate (or removed)
- [ ] All claims are verifiable and honest
- [ ] Spelling and grammar checked
- [ ] All links work and go to correct destinations

### Technical Setup

- [ ] Environment variables set in `.env.local`
- [ ] Form endpoint configured (Formspree or Resend)
- [ ] Test form submission (actually submit and receive email)
- [ ] Site builds without errors (`npm run build`)
- [ ] Site runs in production mode locally (`npm run start`)
- [ ] Check site on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check page load speed (Google PageSpeed Insights)

### SEO & Analytics

- [ ] Meta title and description updated
- [ ] Google Analytics installed (if using)
- [ ] Google Search Console set up
- [ ] Submitted sitemap to Google (auto-generated by Next.js)
- [ ] robots.txt configured
- [ ] Favicon uploaded

### Business Preparation

- [ ] Process ready to handle inquiries within 24 hours
- [ ] Quote template ready
- [ ] Insurance certificates accessible for quick sharing
- [ ] Pricing structure decided
- [ ] Service agreements/contracts prepared
- [ ] Crew scheduled to start taking work

### Legal & Compliance

- [ ] Business license current and valid
- [ ] Liability insurance active
- [ ] Workers' comp insurance (if required)
- [ ] Privacy policy created (if collecting personal data)
- [ ] Terms of service created (if applicable)
- [ ] Domain registered with accurate WHOIS info

### Deployment

- [ ] Code pushed to Git repository
- [ ] Vercel project created and connected
- [ ] Environment variables added to Vercel dashboard
- [ ] Production deployment successful
- [ ] Custom domain configured and DNS propagated
- [ ] SSL certificate active (HTTPS working)
- [ ] Test production site from multiple devices

---

## Ongoing Maintenance Schedule

### Daily
- Check for new form submissions
- Respond to inquiries within 24 hours (or your stated timeframe)

### Weekly
- Review any error reports or form submission issues
- Check Google Search Console for crawl errors

### Monthly
- Review site analytics (traffic, popular pages, conversion rate)
- Check for broken links
- Review and update seasonal messaging
  - March-April: Spring cleanup, seasonal contracts
  - July-August: Summer maintenance, irrigation focus
  - October-November: Fall cleanup, snow contract signup
  - December-February: Snow removal, spring planning

### Quarterly
- Update content based on new services or service area changes
- Review SEO performance and adjust keywords if needed
- Update dependencies (`npm update`)
- Check competitor websites for new ideas
- Review and update pricing if applicable

### Yearly
- Major content review and refresh
- Update Next.js to latest stable version
- Review and renew domain registration
- Audit and update all business information
- Review and improve meta descriptions and SEO
- Consider adding new features (blog, portfolio gallery, etc.)

### As Needed
- Add actual testimonials as you receive them (with permission)
- Update service offerings when you expand
- Add crew photos when available
- Create case studies for notable projects
- Add before/after photos (with client permission)

---

## Content Update Workflow

When you need to make content changes:

1. **For Simple Text Changes**:
   - Open the relevant component file in `/components/`
   - Make your changes
   - Test locally with `npm run dev`
   - Commit to Git: `git commit -m "Update services description"`
   - Push to deploy: `git push`
   - Vercel auto-deploys (if connected)

2. **For Environment Variables**:
   - Update in Vercel dashboard (Project Settings → Environment Variables)
   - Trigger a redeploy (Vercel → Deployments → Redeploy)
   - Updates take effect immediately after deploy

3. **For Major Content Overhaul**:
   - Create a Git branch: `git checkout -b content-update`
   - Make all your changes
   - Test thoroughly locally
   - Have someone else review if possible
   - Merge to main branch
   - Deploy to production

---

## Getting Help

### Common Questions

**Q: How do I update the phone number?**
A: Change `NEXT_PUBLIC_CONTACT_PHONE` in `.env.local` (local) or Vercel dashboard (production). Remember to format as (###) ###-#### and use tel:+1##########.

**Q: Where do I change the services offered?**
A: Edit `/components/Services.tsx`, modify the services array.

**Q: Can I add new sections?**
A: Yes! Create a new component in `/components/`, import it in `/app/page.tsx`, and add it where you want it to appear.

**Q: How do I change the yellow color theme?**
A: Search for `bg-yellow-400` and `text-yellow-400` throughout the components and replace with your preferred Tailwind color class.

**Q: The form isn't working. What do I check?**
A: 
1. Verify `NEXT_PUBLIC_FORM_ENDPOINT` is set correctly
2. Check browser console for JavaScript errors
3. Test your Formspree/Resend endpoint separately
4. Ensure email address in environment variables is correct

### Support Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **Formspree Documentation**: https://help.formspree.io
- **Resend Documentation**: https://resend.com/docs
- **Vercel Documentation**: https://vercel.com/docs

---

**Document Version**: 1.0
**Last Updated**: September 2026
**Maintained By**: Happy Bee Landscaping

This guide should be updated as the site evolves and new features are added.
