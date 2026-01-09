---
title: Deploy to production
status: pending
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
- [ ] Site loads at production URL
- [ ] All sections render correctly
- [ ] Images load from Cloudinary
- [ ] CMS admin accessible
