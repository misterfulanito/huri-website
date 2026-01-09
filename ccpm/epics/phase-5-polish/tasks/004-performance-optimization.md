---
title: Performance optimization
status: pending
priority: high
epic: phase-5-polish
created: 2025-01-09
updated: 2025-01-09
labels:
  - task
  - performance
---

# Performance optimization

## Description
Optimize website performance to meet targets.

## Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90

## Optimization Tasks
- [ ] Enable image lazy loading
- [ ] Optimize Cloudinary image delivery (f_auto, q_auto)
- [ ] Minimize JavaScript bundles
- [ ] Add font-display: swap
- [ ] Implement proper caching headers
- [ ] Remove unused CSS/JS

## Testing
Run Lighthouse audit: `npm run build && npm run start`
Then test with Chrome DevTools Lighthouse
