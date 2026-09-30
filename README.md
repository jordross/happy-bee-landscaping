# Happy Bee Landscaping Website

A modern, professional website for Happy Bee Landscaping - a commercial landscaping service specializing in property management partnerships in Metro Vancouver, BC. Built with Next.js 15, TypeScript, and Tailwind CSS to deliver a fast, accessible, and SEO-optimized user experience.

## Overview

This website serves as the primary digital presence for Happy Bee Landscaping, designed to attract property managers and commercial clients seeking reliable landscaping services. The site emphasizes transparency, compliance, and professional service delivery without relying on fake testimonials or unverifiable claims.

## Tech Stack

- **Framework**: Next.js 15.1.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **Runtime**: React 19.0.0
- **Build Tool**: Next.js bundler with automatic optimization
- **Deployment**: Optimized for Vercel (also compatible with other Node.js hosts)

## Key Features

### Performance & Optimization
- Server-side rendering (SSR) for optimal initial page load
- Automatic code splitting and lazy loading
- Optimized images with Next.js Image component
- Static asset optimization and CDN delivery
- Minimal JavaScript bundle for fast Time to Interactive (TTI)

### Responsive Design
- Mobile-first approach supporting all device sizes
- Touch-friendly interface elements
- Optimized images for different screen resolutions
- Fluid typography scaling across breakpoints
- Tested on iOS, Android, and desktop browsers

### Accessibility (WCAG 2.1 AA Compliance)
- Semantic HTML structure throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meeting accessibility standards
- Screen reader compatibility
- Focus indicators for all interactive elements

### SEO Optimization
- Semantic HTML5 markup
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data for business information
- Mobile-friendly responsive design
- Fast page load times (<3s FCP target)
- XML sitemap and robots.txt configuration

### Contact Form
- Client-side validation for immediate user feedback
- Phone number formatting with US format support
- Email validation with pattern matching
- Flexible form submission options (Formspree, Resend API, or mailto fallback)
- Error handling with user-friendly messages
- Success confirmation with visual feedback

## Installation Instructions

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher (or yarn/pnpm equivalent)
- Git for cloning the repository

### Step 1: Clone the Repository
```bash
git clone <your-repository-url>
cd happy-bee-landscaping
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages including Next.js, React, TypeScript, and Tailwind CSS.

### Step 3: Environment Setup
Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your specific values (see Environment Variables section below).

### Step 4: Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Environment Variables

### Required Variables

These variables must be set for the website to display correct contact information:

```bash
# Contact Information (displayed throughout the site)
NEXT_PUBLIC_CONTACT_EMAIL=info@happybeelandscapes.ca
NEXT_PUBLIC_CONTACT_PHONE=(604) 674-6785
```

**Important**: These variables are prefixed with `NEXT_PUBLIC_` because they are used in client-side components. They will be embedded in the JavaScript bundle.

### Optional Variables

Choose one form submission method by setting the appropriate variable:

#### Option 1: Formspree (Recommended)
```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

**Setup**: 
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint URL
3. Configure email notifications in the Formspree dashboard

**Pros**: Easy setup, spam protection, no backend required, submission tracking

#### Option 2: Resend API
```bash
RESEND_API_KEY=re_your_api_key_here
```

**Setup**:
1. Create an account at [resend.com](https://resend.com)
2. Generate an API key from the dashboard
3. Verify your sending domain
4. Requires backend API route (included in project)

**Pros**: Full control, no third-party branding, programmable email handling

#### Option 3: Mailto Fallback
If no form endpoint is configured, the form will use the `mailto:` protocol, opening the user's default email client.

**Pros**: Zero configuration, works everywhere
**Cons**: Less user-friendly, no submission tracking, potential spam issues

## Development Commands

### Start Development Server
```bash
npm run dev
```
Runs the app in development mode with hot-reload at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `.next` directory. This command:
- Compiles TypeScript to JavaScript
- Optimizes and minifies all assets
- Generates static pages where possible
- Creates a production-ready build

### Start Production Server
```bash
npm run start
```
Serves the production build locally. Run `npm run build` first.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check for code quality issues and potential bugs.

## Deployment to Vercel

Vercel is the recommended deployment platform for Next.js applications.

### Method 1: Deploy via Git Integration (Recommended)

1. **Push your code to GitHub, GitLab, or Bitbucket**

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "Add New Project"
   - Import your Git repository

3. **Configure Environment Variables**:
   - In the project settings, add your environment variables:
     - `NEXT_PUBLIC_CONTACT_EMAIL`
     - `NEXT_PUBLIC_CONTACT_PHONE`
     - `NEXT_PUBLIC_FORM_ENDPOINT` (or `RESEND_API_KEY`)

4. **Deploy**:
   - Vercel will automatically build and deploy
   - You'll receive a production URL (e.g., `your-project.vercel.app`)

5. **Set Up Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `happybeelandscapes.ca`)
   - Follow DNS configuration instructions

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

Follow the prompts to configure your project. Add environment variables when prompted or configure them later in the Vercel dashboard.

### Automatic Deployments

Once connected to Git:
- **Production**: Every push to your main branch deploys to production
- **Preview**: Pull requests generate preview deployments with unique URLs
- **Instant Rollback**: Revert to any previous deployment with one click

## Site Structure

The website consists of eight distinct sections, each serving a specific purpose:

### 1. Hero Section
- **Location**: Top of homepage
- **Purpose**: First impression, clear value proposition
- **Content**: Company name, tagline, primary CTA button
- **CTA**: "Get a Free Quote" button linking to contact form

### 2. Who We Serve
- **Purpose**: Clearly identify target audience
- **Content**: Focus on property managers and commercial clients
- **Key Message**: Partnership approach, understanding of property management needs

### 3. Services Section
- **Purpose**: Outline core service offerings
- **Content**: Lawn maintenance, landscaping, snow removal, seasonal services
- **Format**: Icon-based grid layout for easy scanning

### 4. Why Choose Us
- **Purpose**: Differentiation and value proposition
- **Content**: Licensed/insured status, reliability, communication, quality
- **Approach**: Benefits-focused rather than feature-focused

### 5. Service Area
- **Purpose**: Geographic coverage transparency
- **Content**: Metro Vancouver, BC with specific cities and neighbourhoods
- **Format**: Clear list with contextual information
- **Note**: Customizable for actual service coverage

### 6. For Property Managers (Special Section)
- **Purpose**: Address specific property manager needs
- **Content**: Bulk pricing, seasonal contracts, compliance documentation
- **Benefits**: Tenant satisfaction, property value, budget predictability

### 7. Contact Section
- **Purpose**: Lead generation and inquiry handling
- **Content**: Contact form, phone number, email address
- **Features**: Form validation, multiple submission options

### 8. Footer
- **Purpose**: Business information and secondary navigation
- **Content**: Company name, contact info, service area, copyright
- **Note**: Minimal design to not distract from conversion goals

## Customization Guidance

### Updating Contact Information
Contact details are centralized in environment variables. Update `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com
NEXT_PUBLIC_CONTACT_PHONE=(123) 456-7890
```

### Modifying Content
Content is primarily located in:
- `/app/page.tsx` - Main homepage structure and some content
- `/components/Hero.tsx` - Hero section
- `/components/Services.tsx` - Services listing
- `/components/WhyUs.tsx` - Benefits section
- `/components/ServiceArea.tsx` - Coverage area
- `/components/ForPropertyManagers.tsx` - Property manager section
- `/components/Contact.tsx` - Contact form
- `/components/Footer.tsx` - Footer content

See `CONTENT.md` for detailed content management guidance.

### Styling Changes
The site uses Tailwind CSS for styling:
- **Global Styles**: `/app/globals.css`
- **Tailwind Config**: `tailwind.config.ts` (if you need to extend the theme)
- **Component Styles**: Inline Tailwind classes in component files

### Adding New Sections
1. Create a new component in `/components/`
2. Import it in `/app/page.tsx`
3. Add it to the page structure in the desired order
4. Ensure consistent styling with existing sections

### Changing Colors/Branding
The site uses a yellow/black color scheme (bee theme):
- **Primary Yellow**: `bg-yellow-400`, `text-yellow-400`
- **Primary Black**: `bg-gray-900`, `text-gray-900`
- **Accent**: `bg-gray-100`, `bg-gray-50`

To change the color scheme, update Tailwind classes throughout components or extend the theme in `tailwind.config.ts`.

## Performance Optimization

### Current Optimizations
- Server-side rendering for instant content visibility
- Automatic code splitting per route
- Image optimization with Next.js Image component
- Minimal JavaScript bundle (~200KB gzipped)
- CSS purging with Tailwind (unused styles removed)

### Performance Metrics Targets
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### Monitoring Performance
Use tools like:
- **Vercel Analytics**: Built-in performance monitoring (if deployed to Vercel)
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: https://www.webpagetest.org/

## Accessibility Features

This site is built with accessibility as a priority:

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order throughout the page
- Visible focus indicators on all focusable elements
- Skip-to-content link for screen readers

### Screen Reader Support
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels where appropriate
- Alt text for all images and icons
- Descriptive link text (no "click here")

### Visual Accessibility
- Color contrast ratios meeting WCAG AA standards (4.5:1 for normal text)
- Text remains readable when zoomed to 200%
- No information conveyed by color alone
- Readable font sizes (16px minimum for body text)

### Testing Accessibility
Recommended tools:
- **WAVE**: Browser extension for accessibility evaluation
- **axe DevTools**: Chrome/Firefox extension
- **Screen Readers**: NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
- **Keyboard Only**: Navigate the site without a mouse

## Browser Support

Tested and supported on:
- **Chrome**: Last 2 versions
- **Firefox**: Last 2 versions
- **Safari**: Last 2 versions
- **Edge**: Last 2 versions
- **Mobile**: iOS Safari 14+, Chrome Android 90+

## Project Structure

```
/workspace/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Homepage (main entry point)
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section component
│   ├── WhoWeServe.tsx      # Target audience section
│   ├── Services.tsx        # Services listing
│   ├── WhyUs.tsx           # Benefits/differentiators
│   ├── ServiceArea.tsx     # Geographic coverage
│   ├── ForPropertyManagers.tsx  # Property manager section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets (add images here)
├── .env.local              # Local environment variables (create this)
├── .env.example            # Example environment variables
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
├── README.md               # This file
└── CONTENT.md              # Content management guide
```

## Troubleshooting

### Build Errors
**Issue**: TypeScript errors during build
**Solution**: Run `npm run lint` to identify issues, fix type errors

**Issue**: Missing environment variables
**Solution**: Ensure `.env.local` exists with all required variables

### Development Issues
**Issue**: Changes not reflecting in browser
**Solution**: Hard refresh (Ctrl+Shift+R / Cmd+Shift+R), clear Next.js cache (delete `.next` folder)

**Issue**: Port 3000 already in use
**Solution**: Kill the process or use a different port: `PORT=3001 npm run dev`

### Form Submission Issues
**Issue**: Form not submitting
**Solution**: Check browser console for errors, verify `NEXT_PUBLIC_FORM_ENDPOINT` is set correctly

**Issue**: Emails not being received
**Solution**: Check spam folder, verify Formspree/Resend configuration, test email addresses

## Support and Maintenance

### Regular Maintenance Tasks
- **Weekly**: Monitor form submissions, respond to inquiries
- **Monthly**: Review site analytics, check for broken links
- **Quarterly**: Update dependencies (`npm update`), review content accuracy
- **Yearly**: Renew domain registration, review SEO performance

### Updating Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all packages (use with caution)
npm update

# Update Next.js specifically
npm install next@latest react@latest react-dom@latest
```

### Security
- Keep dependencies updated to patch security vulnerabilities
- Never commit `.env.local` to version control
- Use environment variables for all sensitive data
- Enable Vercel security headers (already configured if using Vercel)

## License

This is a custom website built for Happy Bee Landscaping. All rights reserved.

## Contact

For technical support or questions about this website:
- Email: info@happybeelandscapes.ca
- Phone: (604) 674-6785

---

**Last Updated**: September 2026
**Version**: 1.0.0
**Built With**: Next.js 15.1.4, React 19, TypeScript, Tailwind CSS
