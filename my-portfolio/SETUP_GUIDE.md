# Portfolio Setup Guide

## Step 1: Install Dependencies

Run this command in the `my-portfolio` directory:
```bash
npm install
```

This will install framer-motion and all other dependencies.

## Step 2: Create Directory Structure

You need to create the following directories manually:

1. `app/wordpress/`
2. `app/industrial-design/`
3. `app/api/contact/`

### Windows Command Prompt:
```cmd
cd app
mkdir wordpress
mkdir industrial-design
mkdir api
cd api
mkdir contact
```

### PowerShell:
```powershell
New-Item -Path "app\wordpress" -ItemType Directory
New-Item -Path "app\industrial-design" -ItemType Directory
New-Item -Path "app\api\contact" -ItemType Directory
```

## Step 3: Create Page Files

After creating the directories, create these files:

### 1. app/wordpress/page.tsx
Copy the content from `page-templates.js` → `wordpressPage`

### 2. app/industrial-design/page.tsx
Copy the content from `page-templates.js` → `industrialDesignPage`

### 3. app/api/contact/route.ts
Copy the content from `page-templates.js` → `apiContactRoute`

## Step 4: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

## File Structure After Setup

```
my-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── wordpress/
│   │   └── page.tsx
│   ├── industrial-design/
│   │   └── page.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
├── package.json
└── next.config.ts
```

## Customization

1. Update social links in `app/Footer.tsx`
2. Add your projects in `app/page.tsx`
3. Update skills list in `app/page.tsx`
4. Modify color scheme in `app/globals.css`
5. Add your content to WordPress and Industrial Design pages

## Security Notes

- The contact form includes rate limiting (5 requests per minute)
- All inputs are sanitized
- Email validation is enforced
- Security headers are configured in next.config.ts
- Never commit .env files with sensitive data

## Environment Variables (Optional)

Create `.env.local` for email service integration:
```
EMAIL_SERVICE_API_KEY=your_key_here
EMAIL_TO=your_email@example.com
```

## Deployment

Deploy to Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

## Support

For issues or questions, refer to:
- Next.js docs: https://nextjs.org/docs
- Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/docs
