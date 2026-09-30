# Deployment Guide

This site supports **two deployment options**: Vercel (primary) and GitHub Pages (fallback).

## 🎯 Deployment Options

### Option 1: Vercel (Recommended - Primary)

Vercel provides the best experience with preview URLs, edge functions, and automatic deployments.

#### A. Deploy via Git Integration (Easiest)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `jordross/happy-bee-landscaping` from GitHub
3. Configure environment variables:
   - `NEXT_PUBLIC_CONTACT_EMAIL` = your email
   - `NEXT_PUBLIC_CONTACT_PHONE` = your phone number
   - `NEXT_PUBLIC_FORM_ENDPOINT` = (optional) Formspree/Resend endpoint
4. Click **Deploy**

Vercel will automatically:
- Deploy `main` branch to production
- Create preview URLs for all PR branches
- Rebuild on every push

#### B. Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### C. Check for Existing Integration

```bash
# Check if repo already has Vercel integration
gh api repos/jordross/happy-bee-landscaping/deployments

# Or check PR for preview URL
gh pr view 1 --json deployments
```

### Option 2: GitHub Pages (Fallback)

If Vercel integration is unavailable, deploy to GitHub Pages automatically via GitHub Actions.

#### Setup Steps

1. **Enable GitHub Pages** in repo settings:
   - Go to: Settings → Pages
   - Source: **GitHub Actions**
   - Save

2. **Add Secrets** (optional - will use placeholders if not set):
   - Go to: Settings → Secrets → Actions
   - Add `CONTACT_EMAIL` (e.g., info@happybeelandscapes.ca)
   - Add `CONTACT_PHONE` (e.g., (604) 674-6785)

3. **Trigger Deployment**:
   - Merge PR to `main` (auto-deploys)
   - Or manually: Actions → Deploy to GitHub Pages → Run workflow

4. **Site will be live at**:
   ```
   https://jordross.github.io/happy-bee-landscaping/
   ```

#### Manual GitHub Pages Build

```bash
# Build for GitHub Pages
GITHUB_PAGES=true npm run build

# Output in ./out directory
cd out && python3 -m http.server 8000
# Visit http://localhost:8000
```

## 🔧 Configuration Differences

### Vercel Deployment
- Dynamic rendering supported
- Image optimization enabled
- Environment variables via Vercel dashboard
- Preview URLs for PRs
- Edge functions available

### GitHub Pages Deployment
- Static export only (no server-side rendering)
- Images unoptimized (keeps build size down)
- Environment variables via GitHub Secrets
- Single production URL
- No edge functions

## 📝 Environment Variables

### Required
- `NEXT_PUBLIC_CONTACT_EMAIL` - Your business email
- `NEXT_PUBLIC_CONTACT_PHONE` - Your phone number (formatted as displayed)

### Optional
- `NEXT_PUBLIC_FORM_ENDPOINT` - Formspree or Resend endpoint URL
  - If not set, form uses mailto fallback (opens email client)

### Setting Variables

**Vercel:**
```
Project Settings → Environment Variables
```

**GitHub Pages:**
```
Repo Settings → Secrets and variables → Actions → New repository secret
```

**Local development:**
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

## 🚀 Deployment Status

Check deployment status:

```bash
# For Vercel (if integrated)
vercel inspect [url]

# For GitHub Pages
# Check Actions tab for workflow status
```

## 🐛 Troubleshooting

### Vercel Issues

**Problem:** No preview URL on PR
- **Solution:** Import repo to Vercel first, or check if Git integration is connected

**Problem:** Build fails on Vercel
- **Solution:** Check build logs in Vercel dashboard, verify `npm run build` works locally

### GitHub Pages Issues

**Problem:** Pages not enabled
- **Solution:** Enable in Settings → Pages → Source: GitHub Actions

**Problem:** 404 after deployment
- **Solution:** Wait 2-3 minutes for DNS propagation, check Actions tab for errors

**Problem:** Environment variables not working
- **Solution:** Add secrets with exact names: `CONTACT_EMAIL` and `CONTACT_PHONE`

## 📊 Performance

Both deployment options deliver fast, optimized sites:

- **Vercel**: Edge-cached, global CDN, <100ms TTFB
- **GitHub Pages**: CDN-backed, static files, <200ms TTFB

## 🎯 Recommendation

**Use Vercel** if:
- You want preview URLs for PRs
- You need image optimization
- You want the easiest setup

**Use GitHub Pages** if:
- Vercel integration is unavailable
- You prefer GitHub-native deployment
- You only need a single production site

Both options deliver a production-ready Happy Bee Landscaping website!
