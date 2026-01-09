---
title: Configure Tina CMS schemas
status: done
priority: high
epic: phase-4-cms
created: 2025-01-09
updated: 2025-01-09
github_issue: https://github.com/misterfulanito/huri-website/issues/12
labels:
  - task
  - cms
  - tina
---

# Configure Tina CMS schemas

## Description
Define content schemas in Tina CMS for blog posts and portfolio projects.

## Acceptance Criteria
- [ ] Blog post schema with: title, slug, date, excerpt, body, featuredImage, tags, published
- [ ] Portfolio project schema with: title, slug, thumbnail, description, technologies, liveUrl, githubUrl, featured, order
- [ ] Schemas properly typed with TypeScript

## Technical Notes
- Schema file location: `tina/config.ts`
- Use Cloudinary for image fields
- Enable rich-text for blog body

## Reference
See PRD Section 5.2 for full schema specifications.
