# Huri Portfolio Website

A Wikipedia-style portfolio website showcasing professional work, experience, and personal brand.

## Live Demo

🌐 [View Live Site](https://huri-website.vercel.app) *(deploy in progress)*

## Features

- **Wikipedia-inspired design** - Clean, readable layout with familiar navigation
- **Responsive design** - Works on desktop, tablet, and mobile
- **Accessibility first** - WCAG 2.1 AA compliant with text size controls
- **Dark mode** - Automatic detection with manual override
- **Performance optimized** - Lighthouse score 90+
- **Hidden easter egg** - Try the Konami Code! ↑↑↓↓←→←→BA

### Sections
- About Me with Wikipedia-style infobox
- Experience timeline
- Portfolio project grid
- Blog posts
- Contact information

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + CSS Variables |
| CMS | Tina CMS |
| Images | Cloudinary |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/misterfulanito/huri-website.git
cd huri-website

# Install dependencies
npm install

# Start development server with Tina CMS
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file for local development:

```env
# Cloudinary (optional for local dev)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Tina CMS (optional for local dev - works without)
NEXT_PUBLIC_TINA_CLIENT_ID=
TINA_TOKEN=
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Tina CMS |
| `npm run dev:next` | Start Next.js only (no CMS) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # React components
│   ├── AboutMe.tsx
│   ├── Experience.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── ...
├── styles/           # Global styles
│   ├── globals.css
│   └── wikipedia-theme.css
└── hooks/            # Custom React hooks
    └── useKonamiCode.ts

content/              # CMS content (markdown)
├── blog/
└── portfolio/

tina/                 # Tina CMS configuration
└── config.ts
```

## Development Status

✅ **Phase 1: Setup & Configuration** - Complete
✅ **Phase 2: Design & Base Structure** - Complete
✅ **Phase 3: Content Sections** - Complete
✅ **Phase 4: CMS Integration** - Complete
✅ **Phase 5: Easter Egg & Polish** - Complete
🔄 **Phase 6: Deployment & Testing** - In Progress

## Accessibility

This site follows WCAG 2.1 Level AA guidelines:
- Skip to content link
- Keyboard navigable
- Focus indicators on all interactive elements
- Color contrast ratio ≥ 4.5:1
- Screen reader friendly (ARIA labels)
- Respects `prefers-reduced-motion`

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari & Chrome

## License

MIT

---

Built with Next.js, TypeScript, and ❤️
