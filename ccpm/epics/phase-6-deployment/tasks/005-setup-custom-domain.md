---
title: Set up custom domain
status: pending
priority: medium
epic: phase-6-deployment
created: 2025-01-09
updated: 2025-01-09
labels:
  - task
  - deployment
  - optional
---

# Set up custom domain

## Description
Configure custom domain for the portfolio site (if applicable).

## Steps
1. [ ] Purchase domain (if not owned)
2. [ ] Add domain in Vercel dashboard
3. [ ] Configure DNS records:
   - A record: 76.76.21.21
   - CNAME: cname.vercel-dns.com
4. [ ] Wait for DNS propagation
5. [ ] Verify SSL certificate issued
6. [ ] Test site at custom domain

## Notes
This task is optional if using Vercel's default domain.
