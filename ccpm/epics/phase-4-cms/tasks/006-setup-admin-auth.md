---
title: Set up authentication for admin
status: pending
priority: high
epic: phase-4-cms
created: 2025-01-09
updated: 2025-01-09
github_issue: https://github.com/misterfulanito/huri-website/issues/17
labels:
  - task
  - cms
  - security
---

# Set up authentication for admin

## Description
Configure authentication for Tina CMS admin panel to prevent unauthorized access.

## Acceptance Criteria
- [ ] Admin panel requires authentication
- [ ] Authentication works with Tina Cloud or custom auth
- [ ] Unauthorized users cannot access /admin
- [ ] Environment variables properly configured

## Technical Notes
- Tina CMS supports Tina Cloud authentication
- Alternative: custom auth with Next.js middleware
- Document credentials securely (not in code)
