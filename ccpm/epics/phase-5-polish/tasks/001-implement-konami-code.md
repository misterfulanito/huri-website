---
title: Implement Konami Code listener
status: pending
priority: high
epic: phase-5-polish
created: 2025-01-09
updated: 2025-01-09
labels:
  - task
  - feature
  - easter-egg
---

# Implement Konami Code listener

## Description
Create a hook/component that listens for the Konami Code sequence.

## Acceptance Criteria
- [ ] Hook detects sequence: ↑ ↑ ↓ ↓ ← → ← → B A
- [ ] Triggers callback when sequence completed
- [ ] Works on both desktop (keyboard) and doesn't break mobile
- [ ] State persisted in localStorage (optional)

## Technical Implementation
```typescript
// Key codes to detect
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];
```

## File Location
`src/hooks/useKonamiCode.ts`
