# Professional Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern minimalist design with dark mode support
- 🔒 Security-first architecture with OWASP compliance
- ⚡ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Three main sections: Home, WordPress Business, Industrial Design

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create required directories:
```bash
node setup.js
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # Secure contact form API
├── wordpress/
│   └── page.tsx              # WordPress business page
├── industrial-design/
│   └── page.tsx              # Industrial design portfolio
├── Navigation.tsx            # Global navigation component
├── Footer.tsx                # Global footer component
├── page.tsx                  # Home page
├── layout.tsx                # Root layout
└── globals.css               # Global styles
```

## Security Features

- Rate limiting on API endpoints
- Input sanitization and validation
- Secure HTTP headers (CSP, HSTS, X-Frame-Options)
- CSRF protection
- XSS prevention
- Environment variable management

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Font**: Geist Sans & Geist Mono

## Customization

1. Update metadata in `app/layout.tsx`
2. Replace placeholder content in each page
3. Add your own projects, skills, and portfolio items
4. Configure environment variables for email service
5. Update social links in Footer component

## Deployment

Deploy to Vercel:
```bash
npm run build
```

Ensure environment variables are set in your deployment platform.

## License

All rights reserved.
