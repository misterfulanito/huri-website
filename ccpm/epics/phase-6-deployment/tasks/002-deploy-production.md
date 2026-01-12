---
title: Deploy to production
status: done
priority: high
epic: phase-6-deployment
created: 2025-01-09
updated: 2025-01-09
labels:
  - task
  - deployment
---

# Deploy to production

## Description
Deploy the final website to Vercel production.

## Pre-deployment Checklist
- [ ] All tests passing
- [ ] Build succeeds locally (`npm run build`)
- [ ] Environment variables configured
- [ ] No console errors
- [ ] Content finalized

## Deployment Steps
1. Merge all changes to main branch
2. Vercel auto-deploys from main
3. Verify deployment succeeds
4. Check production URL

## Verification
- [x] Site loads at production URL: https://huri-website.vercel.app
- [x] All sections render correctly
- [x] Images load properly
- [ ] CMS admin accessible (requires Tina Cloud setup)
