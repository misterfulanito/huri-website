# Huri Portfolio Website

A Wikipedia-style portfolio website showcasing professional work, experience, and personal brand.

## Project Overview

This project is a single-page portfolio website that mimics Wikipedia's design language while providing a modern, content-managed experience. Built with Next.js, Tina CMS, Cloudinary, and deployed on Vercel.

## Features

- Wikipedia-inspired design language
- Responsive single-page application
- Content management via Tina CMS
- Image optimization with Cloudinary
- Hidden Konami Code easter egg
- Sections: About Me, Experience, Portfolio, Blog, Contact

## Tech Stack

- **Frontend:** Next.js, React
- **CMS:** Tina CMS
- **Image Hosting:** Cloudinary
- **Deployment:** Vercel
- **Styling:** CSS with CSS Variables

## Documentation

See [PRD.md](./PRD.md) for complete product requirements and development phases.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- GitHub account
- Cloudinary account (for image hosting)
- Tina CMS account (for content management)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/misterfulanito/huri-website.git
cd huri-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Status

✅ **Phase 1: Setup & Configuration** - COMPLETED
- ✅ GitHub repository created
- ✅ Next.js project initialized
- ✅ Prettier configured
- ✅ Tina CMS packages installed
- ✅ Cloudinary packages installed
- ✅ Basic project structure created

✅ **Phase 2: Design & Base Structure** - COMPLETED
- ✅ Wikipedia CSS theme and variables
- ✅ Custom book icon/logo
- ✅ Header component
- ✅ Sidebar navigation (desktop)
- ✅ Mobile navigation with hamburger menu
- ✅ Smooth scroll behavior
- ✅ Responsive layout structure

✅ **Phase 3: Content Sections** - COMPLETED
- ✅ About Me section with infobox
- ✅ Experience timeline
- ✅ Portfolio grid with 6 projects
- ✅ Blog post list
- ✅ Contact section with social links

🔄 **Next Up:**
- Phase 4: CMS Integration (Tina CMS configuration)
- Phase 5: Easter Egg & Polish (Konami Code feature)
- Phase 6: Deployment & Testing (Vercel deployment)

See [GitHub Projects](https://github.com/users/misterfulanito/projects/2) for complete development timeline using CCPM methodology.
