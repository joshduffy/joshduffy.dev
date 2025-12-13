# joshduffy.dev

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/joshduffy/joshduffy.dev.git
cd joshduffy.dev

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── fonts/        # Local fonts (Geist)
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
└── components/
    ├── About.tsx     # About section
    ├── Footer.tsx    # Footer component
    ├── Hero.tsx      # Hero section
    ├── Icons.tsx     # SVG icons
    └── Projects.tsx  # Projects section
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Click Deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables are required for basic deployment.

## Customization

### Update Personal Information

- **Hero section**: Edit `src/components/Hero.tsx`
- **Projects**: Edit the `projects` array in `src/components/Projects.tsx`
- **About**: Edit `src/components/About.tsx`
- **Metadata**: Edit `src/app/layout.tsx`

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Update CSS variables in `globals.css`

## License

MIT
