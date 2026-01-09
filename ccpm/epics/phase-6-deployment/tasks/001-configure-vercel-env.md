---
title: Configure Vercel environment variables
status: pending
priority: high
epic: phase-6-deployment
created: 2025-01-09
updated: 2025-01-09
labels:
  - task
  - deployment
  - config
---

# Configure Vercel environment variables

## Description
Set up all required environment variables in Vercel dashboard.

## Required Variables
- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- [ ] `CLOUDINARY_API_KEY`
- [ ] `CLOUDINARY_API_SECRET`
- [ ] `NEXT_PUBLIC_TINA_CLIENT_ID`
- [ ] `TINA_TOKEN`
- [ ] `NEXT_PUBLIC_SITE_URL`

## Steps
1. Go to Vercel dashboard > Project > Settings > Environment Variables
2. Add each variable with production value
3. Trigger redeploy to pick up new variables
