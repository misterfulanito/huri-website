---
title: Test content editing workflow
status: pending
priority: medium
epic: phase-4-cms
created: 2025-01-09
updated: 2025-01-09
github_issue: https://github.com/misterfulanito/huri-website/issues/14
labels:
  - task
  - cms
  - testing
---

# Test content editing workflow

## Description
Verify the Tina CMS editing workflow works end-to-end.

## Acceptance Criteria
- [ ] Can access admin at /admin
- [ ] Can create new blog post via UI
- [ ] Can edit existing content via UI
- [ ] Changes save correctly to markdown files
- [ ] Preview mode shows changes in real-time
- [ ] Images upload to Cloudinary correctly

## Test Steps
1. Run `npm run dev`
2. Navigate to http://localhost:3000/admin
3. Create a test blog post
4. Verify it appears on the site
5. Edit the post
6. Verify changes persist
