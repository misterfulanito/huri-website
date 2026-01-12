# Deployment & Maintenance Guide

Complete guide for deploying and maintaining your Huri Portfolio website.

---

## Table of Contents

1. [Vercel Deployment](#1-vercel-deployment)
2. [Environment Variables](#2-environment-variables)
3. [Tina CMS Cloud Setup](#3-tina-cms-cloud-setup-optional)
4. [Custom Domain Setup](#4-custom-domain-setup-optional)
5. [Post-Deployment Testing](#5-post-deployment-testing)
6. [Content Management](#6-content-management)
7. [Maintenance Procedures](#7-maintenance-procedures)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Vercel Deployment

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. From Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find `misterfulanito/huri-website` in the list
3. Click **"Import"**

### Step 3: Configure Build Settings

Vercel should auto-detect Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `./` (leave empty) |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://huri-website-xxxxx.vercel.app`

### Step 5: Set Production Domain

1. Go to **Project Settings** → **Domains**
2. Your default domain is: `huri-website.vercel.app`
3. You can customize this or add a custom domain (see Section 4)

---

## 2. Environment Variables

### For Basic Deployment (No CMS Cloud)

If you only want static deployment without cloud CMS editing, **no environment variables are required**. The site will work with local content.

### For Full Tina CMS Cloud Integration

Go to **Project Settings** → **Environment Variables** and add:

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Tina Cloud client ID | tina.io dashboard |
| `TINA_TOKEN` | Tina Cloud token | tina.io dashboard |

### For Cloudinary Integration (Future)

If you add Cloudinary image uploads later:

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Your cloud name | cloudinary.com dashboard |
| `CLOUDINARY_API_KEY` | API key | cloudinary.com dashboard |
| `CLOUDINARY_API_SECRET` | API secret | cloudinary.com dashboard |

### Adding Variables in Vercel

1. Go to your project in Vercel
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in sidebar
4. For each variable:
   - Enter **Name** (e.g., `TINA_TOKEN`)
   - Enter **Value** (paste your token)
   - Select environments: ✅ Production, ✅ Preview, ✅ Development
   - Click **"Save"**
5. **Important:** After adding variables, redeploy:
   - Go to **"Deployments"** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

---

## 3. Tina CMS Cloud Setup (Optional)

Skip this section if you only want to edit content locally via Git.

### Step 1: Create Tina Cloud Account

1. Go to [tina.io](https://tina.io)
2. Click **"Get Started"** → **"Sign in with GitHub"**
3. Authorize Tina to access your repositories

### Step 2: Create a Project

1. Click **"Create Project"**
2. Select your repository: `misterfulanito/huri-website`
3. Choose branch: `main`
4. Click **"Create Project"**

### Step 3: Get Your Credentials

1. In your Tina project, go to **"Settings"**
2. Copy these values:
   - **Client ID** → use for `NEXT_PUBLIC_TINA_CLIENT_ID`
   - **Token** → click "Generate Token" → use for `TINA_TOKEN`

### Step 4: Update Vercel

1. Add both environment variables to Vercel (see Section 2)
2. Redeploy your project

### Step 5: Access Cloud CMS

Once deployed with Tina Cloud:
- Go to: `https://your-domain.vercel.app/admin/index.html`
- Log in with GitHub
- Edit content visually!

---

## 4. Custom Domain Setup (Optional)

### Option A: Use a Domain You Own

1. In Vercel, go to **Project Settings** → **Domains**
2. Enter your domain (e.g., `huri.dev`)
3. Click **"Add"**
4. Vercel will show DNS records to add

### Configure DNS at Your Registrar

Add these records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

**For apex domain (huri.dev):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |

**For www subdomain (www.huri.dev):**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

### Option B: Use Free Vercel Subdomain

Your site is already available at:
- `https://huri-website.vercel.app`

You can customize this:
1. Go to **Project Settings** → **Domains**
2. Edit the `.vercel.app` domain name

---

## 5. Post-Deployment Testing

### Checklist

Open your live site and verify:

#### Functionality
- [ ] Page loads without errors
- [ ] All 5 sections visible (About, Experience, Portfolio, Blog, Contact)
- [ ] Sidebar navigation works (desktop)
- [ ] Mobile menu opens/closes
- [ ] Smooth scroll to sections works
- [ ] External links open in new tabs
- [ ] Skip to content link works (press Tab on page load)

#### Accessibility Controls
- [ ] Text size: Small/Standard/Large works
- [ ] Width: Standard/Wide works
- [ ] Color: Automatic/Light/Dark works
- [ ] Settings persist after page reload

#### Easter Egg
- [ ] Type: ↑ ↑ ↓ ↓ ← → ← → B A
- [ ] Achievement notification appears
- [ ] Visual effects activate
- [ ] Sound plays (if audio enabled)

#### Performance
- [ ] Run Lighthouse in Chrome DevTools
- [ ] Score should be 90+ for Performance
- [ ] Score should be 90+ for Accessibility
- [ ] No console errors

#### Responsive Design
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)

---

## 6. Content Management

### Option 1: Edit Locally (Recommended for Developers)

#### Add a New Blog Post

1. Create file: `content/blog/your-post-slug.md`
2. Use this template:

```markdown
---
title: Your Post Title
date: 2025-01-15
excerpt: Brief description for the blog list
author: Huri
tags:
  - web-development
  - react
---

Your post content here in Markdown...

## Subheading

More content...
```

3. Commit and push:
```bash
git add content/blog/your-post-slug.md
git commit -m "Add blog post: Your Post Title"
git push
```

4. Vercel auto-deploys in ~2 minutes

#### Add a Portfolio Project

1. Create file: `content/portfolio/project-name.md`
2. Use this template:

```markdown
---
title: Project Name
description: Brief project description
image: /project-placeholder-1.svg
technologies:
  - Next.js
  - TypeScript
  - Tailwind
liveUrl: https://example.com
githubUrl: https://github.com/username/repo
featured: false
order: 7
---

Detailed project description...
```

3. Commit and push

### Option 2: Edit via Tina CMS (Visual Editor)

If you set up Tina Cloud:

1. Go to: `https://your-site.vercel.app/admin/index.html`
2. Log in with GitHub
3. Navigate to Blog or Portfolio in sidebar
4. Click "New" or select existing
5. Edit in visual editor
6. Click "Save" → changes auto-commit to GitHub

### Edit Other Content

Currently, these sections are hardcoded in components:

| Section | File to Edit |
|---------|--------------|
| About Me | `src/components/AboutMe.tsx` |
| Experience | `src/components/Experience.tsx` |
| Contact | `src/components/Contact.tsx` |

To edit, modify the file and push to GitHub.

---

## 7. Maintenance Procedures

### Update Dependencies

Run monthly to keep dependencies secure:

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# For major updates, manually update package.json
npm install package-name@latest

# Test locally
npm run dev
npm run build

# If everything works, commit
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### Monitor Site Health

1. **Check Vercel Dashboard** - Look for failed deployments
2. **Check Analytics** (if added) - Monitor traffic
3. **Run Lighthouse** monthly - Ensure performance stays high
4. **Test on new browser versions** - After major browser updates

### Backup Procedures

Your content is version-controlled in Git. To backup:

```bash
# Clone to another location
git clone https://github.com/misterfulanito/huri-website.git backup-copy

# Or download ZIP from GitHub
# Go to repo → Code → Download ZIP
```

---

## 8. Troubleshooting

### Build Fails on Vercel

**Check the build logs:**
1. Go to Vercel → Deployments
2. Click on failed deployment
3. Read error messages

**Common fixes:**
- Missing environment variable → Add it in Settings
- TypeScript error → Fix locally, push again
- Dependency issue → Delete `node_modules`, reinstall

### Site Shows Old Content

**Trigger a new deployment:**
1. Vercel → Deployments
2. Click "..." on latest → "Redeploy"

**Or push an empty commit:**
```bash
git commit --allow-empty -m "Trigger redeploy"
git push
```

### Tina CMS Admin Not Loading

1. Check that Tina environment variables are set
2. Verify you're accessing `/admin/index.html` (not just `/admin`)
3. Check browser console for errors
4. Try incognito mode (clear cookies)

### Images Not Loading

1. Check image paths in content files
2. If using Cloudinary, verify environment variables
3. Check that images exist in `/public/` folder

### Dark Mode Not Saving

1. Check browser allows localStorage
2. Try clearing site data and retesting
3. Check console for JavaScript errors

### Mobile Menu Not Working

1. Check JavaScript console for errors
2. Verify touch events are working
3. Test in different mobile browsers

---

## Quick Reference

| Task | Command/Action |
|------|----------------|
| Start dev server | `npm run dev` |
| Build production | `npm run build` |
| Deploy | Push to `main` branch |
| View logs | Vercel Dashboard → Deployments |
| Edit content | `content/` folder or Tina CMS |
| Update dependencies | `npm update` |
| Trigger redeploy | Vercel → Redeploy |

---

## Support

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Tina CMS Docs:** [tina.io/docs](https://tina.io/docs)
- **GitHub Issues:** [github.com/misterfulanito/huri-website/issues](https://github.com/misterfulanito/huri-website/issues)
