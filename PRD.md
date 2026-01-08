# Product Requirements Document (PRD)
## Wikipedia-Style Portfolio Website

---

## 1. Project Overview

### 1.1 Product Name
Personal Portfolio Website (Wikipedia Style)

### 1.2 Purpose
Create a single-page portfolio website that mimics Wikipedia's design language and user experience while showcasing your professional work, experience, and personal brand.

### 1.3 Target Audience
- Potential employers and clients
- Professional network connections
- Fellow designers and developers
- Anyone interested in your work

---

## 2. Design Requirements

### 2.1 Visual Design
**Core Principle:** Replicate Wikipedia's visual style while maintaining originality

#### Typography
- **Primary Font:** Georgia (serif) for body text - same as Wikipedia
- **Secondary Font:** Sans-serif (system fonts) for headers and UI elements
- **Font Sizes:**
  - Body: 14px
  - H1: 28px
  - H2: 21px
  - H3: 17px
  - Small text: 12px

#### Color Palette
- **Background:** #ffffff (white)
- **Primary Text:** #202122 (near black)
- **Links:** #0645ad (Wikipedia blue)
- **Visited Links:** #0b0080 (dark blue)
- **Borders:** #a2a9b1 (light gray)
- **Sidebar Background:** #f8f9fa (off-white)
- **Hover States:** #eaecf0 (very light gray)

#### Layout Structure
- **Desktop:** Left sidebar (200px fixed width) + Main content area
- **Mobile:** Collapsible hamburger menu + Full-width content
- **Max Content Width:** 1000px
- **Padding:** Consistent 20px spacing

### 2.2 Logo/Header
**Important:** No Wikipedia logos or trademarks
- **Alternative:** Use a stylized book icon or "W" icon with different styling
- **Suggested:** A minimalist open book SVG icon in the top-left
- **Text:** Your name in Wikipedia-style typography next to icon

### 2.3 Responsive Design
#### Desktop (>768px)
- Persistent left sidebar navigation
- Multi-column layouts where appropriate
- Wide reading area

#### Mobile (<768px)
- Hamburger menu
- Single column layout
- Touch-friendly navigation
- Collapsible sections

---

## 3. Functional Requirements

### 3.1 Navigation System
**Type:** Single-page application with anchor links

#### Desktop Navigation (Sidebar)
- Fixed position sidebar
- Sections listed vertically:
  1. About Me
  2. My Experience
  3. Portfolio
  4. Blog
  5. Contact
- Smooth scroll behavior to sections
- Active state highlighting for current section
- Wikipedia-style nested sub-sections (if needed)

#### Mobile Navigation
- Hamburger icon (top-left)
- Slide-out or dropdown menu
- Same section links as desktop
- Close button when expanded

### 3.2 Page Sections

#### Section 1: About Me
**Content:**
- Professional headshot (Cloudinary hosted)
- Brief bio (2-3 paragraphs)
- "Quick Facts" sidebar (Wikipedia-style infobox):
  - Location
  - Education
  - Current Role
  - Skills
  - Social links (LinkedIn, GitHub, etc.)
- Personal interests/hobbies

**Design Notes:**
- Infobox should be positioned right (desktop) or top (mobile)
- Floating layout for text around images

#### Section 2: My Experience
**Content:**
- Timeline or list format
- Each role includes:
  - Company name
  - Position title
  - Date range
  - Key responsibilities and achievements
  - Technologies used

**Design Notes:**
- Use Wikipedia-style headers (h2, h3)
- Optional: timeline visualization
- Bullet points for achievements

#### Section 3: Portfolio
**Content:**
- Grid of project cards
- Each project includes:
  - Project thumbnail (Cloudinary)
  - Project name
  - Brief description
  - Technologies used
  - Link to live site/case study
  - GitHub link (if applicable)

**Design Notes:**
- Desktop: 2-3 column grid
- Mobile: Single column stack
- Hover effects on cards
- Modal or dedicated pages for case studies (optional)

#### Section 4: Blog
**Content:**
- List of blog posts (managed via Tina CMS)
- Each post preview includes:
  - Title
  - Publication date
  - Excerpt (2-3 sentences)
  - "Read more" link
  - Featured image (optional)

**Design Notes:**
- Wikipedia-style article list
- Chronological order (newest first)
- Pagination if needed (or "load more" button)

#### Section 5: Contact
**Content:**
- Contact form or email link
- Social media links
- Professional profiles (LinkedIn, GitHub, Dribbble, etc.)
- Optional: location/timezone info

**Design Notes:**
- Simple, accessible form
- Wikipedia-style external link icons
- Clear call-to-action

### 3.3 Easter Egg: Konami Code
**Implementation:**
- Hidden feature activated by Konami Code: ↑↑↓↓←→←→BA
- **Action when activated:** 
  - Suggested: Transform page into "dark mode" Wikipedia style
  - Or: Show hidden message/animation
  - Or: Unlock hidden content section
  - Or: Add retro game-style visual effects

**Discovery Hints:**
- Subtle footer text: "Try the classic code... ↑↑↓↓"
- Console log message: "Hint: Old-school gamers might find something special"
- Blog post mentioning "hidden features" without being explicit
- Small "cheat code" reference in About Me section

**Technical Notes:**
- Listen for keydown events
- Track sequence of last 10 keys pressed
- Trigger effect when sequence matches
- Add visual/audio feedback when activated
- Remember state in localStorage (optional)

---

## 4. Technical Stack

### 4.1 Core Technologies
- **Frontend:** HTML5, CSS3, JavaScript (vanilla or React)
- **Styling:** CSS (with CSS Variables for theming)
- **CMS:** Tina CMS
- **Image Hosting:** Cloudinary
- **Deployment:** Vercel
- **Version Control:** GitHub

### 4.2 Development Tools
- **Code Formatting:** Prettier
- **Package Manager:** npm or yarn
- **Build Tool:** Vite or Next.js (recommended for Tina CMS)

### 4.3 Recommended Framework
**Next.js** (strongly recommended for this project)

**Reasons:**
- Native integration with Tina CMS
- Server-side rendering for performance
- Easy Vercel deployment
- Built-in routing (if expanding beyond single page)
- Image optimization out of the box

---

## 5. Content Management (Tina CMS)

### 5.1 Setup Requirements
- Install Tina CMS packages
- Configure `tina/config.js`
- Define content schema for:
  - Blog posts
  - Portfolio projects
  - About Me content
  - Experience entries

### 5.2 Content Structure

#### Blog Posts Schema
```
- title (string, required)
- slug (string, required)
- date (datetime, required)
- excerpt (text)
- body (rich-text, required)
- featuredImage (image, Cloudinary)
- tags (list)
- published (boolean)
```

#### Portfolio Projects Schema
```
- title (string, required)
- slug (string)
- thumbnail (image, Cloudinary)
- description (text)
- technologies (list)
- liveUrl (string)
- githubUrl (string)
- featured (boolean)
- order (number)
```

### 5.3 Tina Admin Access
- Access at `/admin` route
- Requires authentication
- Visual editing for content sections

---

## 6. Third-Party Integrations

### 6.1 Cloudinary Setup
**Purpose:** Host and optimize all images

**Implementation:**
- Create Cloudinary account
- Get API credentials
- Configure in environment variables
- Set up upload presets
- Use responsive images with automatic format delivery
- Image transformations for thumbnails

**Best Practices:**
- Use Cloudinary's auto format (f_auto)
- Implement lazy loading
- Use responsive breakpoints (w_auto)
- Compress images with q_auto

### 6.2 Vercel Deployment
**Configuration:**
- Connect GitHub repository
- Set environment variables:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
  - Tina CMS tokens
- Configure build command
- Set up automatic deployments on push to main branch

### 6.3 GitHub Repository Setup
**Structure:**
```
portfolio-website/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   ├── styles/
│   ├── pages/
│   └── utils/
├── content/
│   ├── blog/
│   └── portfolio/
├── tina/
│   └── config.js
├── .prettierrc
├── .gitignore
├── package.json
├── README.md
└── vercel.json
```

---

## 7. Performance Requirements

### 7.1 Speed Metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90

### 7.2 Optimization Strategies
- Lazy load images
- Minimize JavaScript bundles
- Use CSS instead of JS where possible
- Implement service worker (optional)
- Compress assets
- Use Cloudinary's optimization features

---

## 8. Accessibility Requirements

### 8.1 Standards
- WCAG 2.1 Level AA compliance
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed

### 8.2 Specific Implementations
- Skip to content link
- Proper color contrast ratios (4.5:1 minimum)
- Responsive font sizing
- Screen reader friendly navigation
- Form labels and error messages

---

## 9. Browser Support

### 9.1 Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## 10. Development Phases

### Phase 1: Setup & Configuration (Week 1)
**Tasks:**
- [ ] Create GitHub repository
- [ ] Initialize Next.js project
- [ ] Install and configure Prettier
- [ ] Set up Cloudinary account and integration
- [ ] Install and configure Tina CMS
- [ ] Create basic project structure
- [ ] Set up Vercel project

**Deliverable:** Working development environment with all tools integrated

### Phase 2: Design & Base Structure (Week 2)
**Tasks:**
- [ ] Create Wikipedia CSS theme/variables
- [ ] Build header component with custom icon
- [ ] Create sidebar navigation (desktop)
- [ ] Build mobile navigation
- [ ] Implement smooth scroll behavior
- [ ] Set up responsive breakpoints
- [ ] Create page layout structure

**Deliverable:** Responsive shell with Wikipedia styling and navigation

### Phase 3: Content Sections (Week 3)
**Tasks:**
- [ ] Build About Me section with infobox
- [ ] Create Experience timeline/list
- [ ] Develop Portfolio grid with Cloudinary images
- [ ] Implement Blog list with Tina CMS
- [ ] Add Contact section
- [ ] Test all sections on mobile and desktop

**Deliverable:** All content sections functional and styled

### Phase 4: CMS Integration (Week 4)
**Tasks:**
- [ ] Configure Tina CMS schemas
- [ ] Create content templates
- [ ] Test content editing workflow
- [ ] Add sample blog posts
- [ ] Add portfolio projects
- [ ] Set up authentication for admin

**Deliverable:** Fully functional CMS with content

### Phase 5: Easter Egg & Polish (Week 5)
**Tasks:**
- [ ] Implement Konami Code listener
- [ ] Create activation effect
- [ ] Add discovery hints throughout site
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Add loading states and animations

**Deliverable:** Polished website with hidden feature

### Phase 6: Deployment & Testing (Week 6)
**Tasks:**
- [ ] Configure Vercel environment variables
- [ ] Deploy to production
- [ ] Test live site on multiple devices
- [ ] Fix any production issues
- [ ] Set up custom domain (if applicable)
- [ ] Create README documentation
- [ ] Write maintenance guide

**Deliverable:** Live website on Vercel

---

## 11. File Structure Example

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   ├── favicon.ico
│   ├── book-icon.svg
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── MobileNav.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Experience.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── InfoBox.jsx
│   │   └── KonamiCode.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── wikipedia-theme.css
│   │   ├── variables.css
│   │   └── responsive.css
│   ├── pages/
│   │   ├── index.jsx
│   │   └── admin/
│   │       └── index.jsx
│   ├── utils/
│   │   ├── cloudinary.js
│   │   └── helpers.js
│   └── hooks/
│       └── useKonamiCode.js
├── content/
│   ├── blog/
│   │   └── *.md
│   └── portfolio/
│       └── *.md
├── tina/
│   ├── config.js
│   └── schema.js
├── .env.local
├── .env.example
├── .gitignore
├── .prettierrc
├── next.config.js
├── package.json
├── README.md
└── vercel.json
```

---

## 12. Configuration Files

### 12.1 .prettierrc
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid"
}
```

### 12.2 .env.example
```
# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Tina CMS
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token

# Site
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### 12.3 vercel.json (optional)
```json
{
  "build": {
    "env": {
      "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME": "@cloudinary-name",
      "NEXT_PUBLIC_TINA_CLIENT_ID": "@tina-client-id"
    }
  }
}
```

---

## 13. Testing Checklist

### 13.1 Functional Testing
- [ ] All navigation links work correctly
- [ ] Smooth scrolling to sections
- [ ] Mobile menu opens/closes properly
- [ ] Forms submit successfully
- [ ] External links open in new tabs
- [ ] Images load from Cloudinary
- [ ] Blog posts display correctly
- [ ] Portfolio projects show details
- [ ] Konami Code activates properly

### 13.2 Visual Testing
- [ ] Wikipedia style is accurate
- [ ] Typography matches specifications
- [ ] Colors are consistent
- [ ] Responsive design works on all breakpoints
- [ ] Images are optimized and sized correctly
- [ ] Hover states work properly
- [ ] Active section highlighting works

### 13.3 Performance Testing
- [ ] PageSpeed Insights score > 90
- [ ] Images lazy load
- [ ] Time to Interactive < 3.5s
- [ ] No console errors
- [ ] No broken links

### 13.4 Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG AA
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Focus indicators are visible

---

## 14. Maintenance & Updates

### 14.1 Regular Updates
- Add new blog posts via Tina CMS
- Update portfolio projects
- Refresh experience section
- Update contact information

### 14.2 Technical Maintenance
- Update dependencies quarterly
- Monitor Cloudinary usage
- Check Vercel analytics
- Review and fix any issues
- Backup content regularly

---

## 15. Success Metrics

### 15.1 Technical Metrics
- Page load time < 2 seconds
- Lighthouse score > 90
- Zero accessibility errors
- Mobile-friendly test passes

### 15.2 User Metrics
- Time on page
- Section engagement
- Contact form submissions
- Portfolio project clicks
- Blog post reads

---

## 16. Resources & Documentation

### 16.1 Documentation Links
- **Next.js:** https://nextjs.org/docs
- **Tina CMS:** https://tina.io/docs
- **Cloudinary:** https://cloudinary.com/documentation
- **Vercel:** https://vercel.com/docs
- **Prettier:** https://prettier.io/docs

### 16.2 Design References
- Wikipedia.org (for visual reference)
- MediaWiki skin documentation
- Wikipedia style guide

### 16.3 Wikipedia CSS Breakdown
Key CSS elements to replicate:
- Border styles: 1px solid #a2a9b1
- Box shadows: subtle, minimal
- Button styles: white background with gray border
- Link underlines: only on hover
- Table styling: alternating row colors
- Infobox: right-floated, 250px width
- Heading borders: bottom border on h2 elements

---

## 17. Additional Notes

### 17.1 Legal Considerations
- Do not use Wikipedia logo or trademark
- Do not claim affiliation with Wikipedia
- Use original content and images (or properly licensed)
- Include copyright notice in footer

### 17.2 SEO Considerations
- Add meta descriptions
- Implement Open Graph tags
- Create sitemap.xml
- Add schema.org markup
- Use semantic HTML

### 17.3 Future Enhancements
- Dark mode toggle (beyond Konami code)
- Multi-language support
- Search functionality
- Comments on blog posts
- Project case study pages
- Newsletter signup
- RSS feed for blog

---

## 18. Konami Code Implementation Details

### 18.1 Code Pattern
**Sequence:** ↑ ↑ ↓ ↓ ← → ← → B A

**Key Codes:**
- ArrowUp (38)
- ArrowUp (38)
- ArrowDown (40)
- ArrowDown (40)
- ArrowLeft (37)
- ArrowRight (39)
- ArrowLeft (37)
- ArrowRight (39)
- b (66)
- a (65)

### 18.2 Discovery Hints Placement
1. **Footer text:** "Know any classic codes? Try them..."
2. **Console message:** On page load, log "🎮 Gamers might find something special here"
3. **About Me section:** Mention "love for retro gaming" or "classic game references"
4. **Blog post idea:** "Easter Eggs in Web Design" with subtle self-reference
5. **Cursor trail:** Small arrow keys appear briefly when hovering in certain areas

### 18.3 Activation Effects (Choose One)
**Option 1 - Matrix Theme:**
- Green text on black background
- Falling code effect
- Transform all text to monospace font

**Option 2 - Dark Wikipedia:**
- Dark theme color scheme
- Invert colors maintaining Wikipedia style
- Add toggle to return to normal

**Option 3 - Retro Gaming:**
- 8-bit style transformation
- Pixel art filter on images
- Chip-tune sound effect
- "Achievement Unlocked" message

**Option 4 - Hidden Content:**
- Reveal special "Secret Projects" section
- Show hidden blog post
- Display achievement badge

---

## 19. Quick Start Commands

### 19.1 Initial Setup
```bash
# Create Next.js app
npx create-next-app@latest portfolio-website

# Navigate to project
cd portfolio-website

# Install dependencies
npm install tinacms @cloudinary/url-gen @cloudinary/react

# Install Prettier
npm install --save-dev prettier

# Create Prettier config
echo '{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}' > .prettierrc

# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
gh repo create portfolio-website --public
git remote add origin [your-repo-url]
git push -u origin main
```

### 19.2 Development
```bash
# Run development server
npm run dev

# Format code with Prettier
npm run format

# Build for production
npm run build

# Start production server
npm start
```

### 19.3 Tina CMS Setup
```bash
# Install Tina
npx @tinacms/cli@latest init

# Run Tina dev server
npx tinacms dev -c "next dev"
```

---

## 20. Support & Contact

### 20.1 Getting Help
- Next.js Discord
- Tina CMS Slack/Discord
- Cloudinary support
- Vercel support
- Stack Overflow

### 20.2 Project Documentation
- README.md should include:
  - Project overview
  - Setup instructions
  - Environment variables
  - Development workflow
  - Deployment process
  - Troubleshooting guide

---

## Conclusion

This PRD provides a comprehensive blueprint for building your Wikipedia-styled portfolio website. The project combines modern web technologies with a classic, trusted design language that's instantly recognizable. The integration of Tina CMS allows for easy content management, while Cloudinary and Vercel ensure optimal performance and deployment.

The Konami Code easter egg adds a playful element that showcases your attention to detail and appreciation for web culture, while the clean Wikipedia aesthetic demonstrates design restraint and focus on content.

Follow the phased approach to stay organized, and don't hesitate to adjust timelines based on your availability. The modular structure means you can build and test each section independently before bringing it all together.

**Next Steps:**
1. Review this PRD thoroughly
2. Set up your development environment
3. Create GitHub repository
4. Begin Phase 1: Setup & Configuration
5. Follow the implementation phases sequentially

Good luck with your portfolio build! 🚀