# Huri Portfolio Website - Project Memory

## Project Overview
Wikipedia-style portfolio website built with Next.js 15, TypeScript, and React 19.
Clean, accessible design with three-column layout inspired by Wikipedia's interface.

## Technology Stack
- **Framework:** Next.js 15.1.0 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with CSS Custom Properties
- **UI Libraries:** react-chrono v3.x (timeline component)
- **CMS:** Tina CMS 3.2.0
- **Media:** Cloudinary
- **Deployment:** Vercel

## Common Commands
```bash
# Development
npm run dev              # Start dev server at http://localhost:3000
npm run build           # Build for production
npm run format          # Format code with Prettier

# Git workflow
git status              # Check changes
git add .               # Stage all changes
git commit -m "message" # Commit with message
git push                # Push to GitHub
```

## Design System

### Typography
- **Headings (H1, H2, H3):** Georgia (serif)
- **Body text:** Helvetica Neue, Helvetica, Arial (sans-serif)
- **Base font size:** 16px (1rem)
- **Line height:** 1.625

### Layout
- **Sidebar:** 200px fixed width
- **Main content:** Flexible (max 1280px in Standard mode)
- **Accessibility panel:** 200px fixed width
- **Column gutter:** 32px
- **Site margins:** 32px (16px on mobile <400px)

### Colors
- **Links:** #0645ad (Wikipedia blue)
- **Background:** #ffffff
- **Text primary:** #202122
- **Text secondary:** #54595d
- **Borders:** #a2a9b1
- **Dividers:** #c8ccd1
- **Card background:** #f8f9fa

### CSS Variables
All measurements use REM units. All colors and fonts use CSS variables defined in:
- `/src/styles/wikipedia-theme.css` (theme variables)
- `/src/styles/globals.css` (base styles)

## Component Structure

### Sections (in order)
1. **AboutMe** - Biography with Wikipedia-style infobox
2. **Experience** - Timeline using react-chrono component
3. **Portfolio** - Project grid (6 projects)
4. **Blog** - Latest 3 posts in 2-column grid
5. **Contact** - Contact methods and social links

### Key Components
- `PageLayout.tsx` - Three-column layout wrapper
- `Header.tsx` - Site header with logo
- `Sidebar.tsx` - Navigation with smooth scroll
- `AccessibilityTools.tsx` - Text size, width, and color controls
- `MobileNav.tsx` - Mobile navigation drawer

## Accessibility Features
- **Text size:** Small (75%), Standard (100%), Large (150%)
- **Width:** Standard (1280px fixed), Wide (flexible)
- **Color scheme:** Automatic, Light, Dark
- All settings persist in localStorage
- All text uses CSS variables to respect accessibility controls

## Important Notes

### react-chrono Timeline
- Experience section uses react-chrono v3.x
- Must use dynamic import with `ssr: false` to avoid DOM errors
- Configured in vertical mode with custom theme matching site colors
- See `/src/components/Experience.tsx` for implementation

### Coding Standards
- TypeScript strict mode
- CSS Modules for component styling
- Use REM units for all measurements (1rem = 16px)
- Never use hardcoded font sizes - always use CSS variables
- Maintain Wikipedia-inspired minimal design aesthetic
- Ensure all text respects accessibility text size controls

## File Structure
```
src/
├── components/        # All React components (.tsx + .module.css)
├── styles/           # Global styles and theme
│   ├── globals.css
│   └── wikipedia-theme.css
└── app/              # Next.js App Router pages
```

## Git Repository
- **Repo:** https://github.com/misterfulanito/huri-website
- **Branch:** main
- Always commit with descriptive messages
- Include Claude Code co-author line in commits

## Development Workflow
1. Make changes to components/styles
2. Test with `npm run dev`
3. Format code with `npm run format`
4. Git add, commit, and push
5. All changes are automatically available on other computers via git pull
