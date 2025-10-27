# Dexterous Medics Brand Kit Website

Official brand guidelines and asset library for Dexterous Medics / DEX24.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
dex-brand-kit/
├── public/
│   └── assets/
│       ├── logos/          # PNG and SVG logo files
│       ├── gradients/      # Gradient preview images
│       ├── examples/       # Example images for gallery
│       ├── presets/        # Photo editing presets
│       └── icons/          # PWA icons and favicon
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── sections/       # Content sections
│   │   └── ui/             # Reusable UI components
│   ├── data/               # Brand data (colors, fonts, logos)
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Global styles and CSS variables
│   └── utils/              # Utility functions
```

## 🎨 Features

### Complete Brand Guidelines
- **Colors**: 8 brand colors with HEX, RGB, CMYK values
- **Typography**: 3 brand fonts (Space Grotesk, Montserrat, DM Sans)
- **Logos**: 20+ logo variants in PNG and SVG formats
- **Gradients**: 7 approved gradients with code snippets
- **Images**: Composition guidelines and editing presets
- **Examples**: Gallery with good/bad examples
- **Guidelines**: Brand voice, tone, and messaging principles

### Interactive Features
- 📋 **Copy to Clipboard**: One-click copy for hex codes, RGB, CMYK, CSS
- ⬇️ **Downloads**: Individual asset downloads
- 📦 **Download All**: Complete brand kit as ZIP
- 🔍 **Search**: Find colors, fonts, guidelines quickly
- 💡 **Toast Notifications**: Helpful feedback for actions
- 📱 **Responsive**: Mobile-first design
- 🌙 **PWA**: Install as app, works offline

## 🎯 Brand Identity

### Colors
- Primary Deep Teal: `#005656`
- Primary Light Teal: `#009999`
- Accent Yellow: `#FFD600`
- Accent Crimson: `#C0392B`
- Accent Red: `#FF0000`
- Neutral Brown-White: `#F4F4F4`
- Neutral Graphite: `#1C1C1C`
- Neutral Muted Teal: `#E0F2F2`

### Typography
- **Display**: Space Grotesk (for large, impactful text)
- **Headings**: Montserrat (for titles and CTAs)
- **Body**: DM Sans (for readable content)

### Tagline
"Marketing beyond walls"

## 📦 Adding New Assets

### Logos
Place logo files in `public/assets/logos/`:
- PNG files → `public/assets/logos/png/`
- SVG files → `public/assets/logos/svg/`

Naming convention: `dex24_logo [color].png` or `dex_crest [color].png`

### Gradients
Place gradient preview images in `public/assets/gradients/`:
- Naming: `gradient-name.png`
- Update `src/data/brandGradients.js` with filename

### Examples
Place example images in `public/assets/examples/`:
- Good examples: `good-[description].png`
- Bad examples: `bad-[description].png`

### Icons (PWA)
Required icons in `public/assets/icons/`:
- `icon-192.png` (192×192px)
- `icon-512.png` (512×512px)

Favicon in `public/`:
- `favicon.ico` (16×16, 32×32, 48×48px)

## 🛠️ Development

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

### Environment Variables
No environment variables required for local development.

For production deployment, configure:
- Base URL (if not root domain)
- CDN settings (optional)

## 🌐 Deployment

### Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

1. Import project to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting provider
# The dist folder contains all static files
```

## 📱 PWA Features

### Installation
The site can be installed as an app on:
- Desktop browsers (Chrome, Edge, Safari)
- Mobile devices (iOS, Android)

### Offline Support
After first visit, the site works offline with:
- Cached pages and assets
- Stored brand guidelines
- Downloaded assets available

### Update Strategy
- Auto-updates when new version is available
- User sees toast notification for updates
- Refresh to load new version

## 🎨 Customization

### Brand Colors
Edit `src/styles/variables.css` to update color values:

```css
:root {
  --color-deep-teal: #005656;
  --color-light-teal: #009999;
  /* ... */
}
```

### Brand Data
Update brand information in `src/data/`:
- `brandColors.js` - Color definitions
- `brandGradients.js` - Gradient specifications
- `brandFonts.js` - Typography information
- `brandLogos.js` - Logo variants

### Content Sections
Modify section components in `src/components/sections/`:
- Each section is a self-contained component
- Update content, layout, or styling as needed

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### PWA Not Working
- Ensure icons exist in `public/assets/icons/`
- Check `vite.config.js` PWA configuration
- Test in production build (PWA doesn't work in dev mode)

### Assets Not Loading
- Verify files are in correct `public/assets/` subfolder
- Check file naming conventions
- Ensure paths in data files match actual filenames

## 📞 Support

For brand guidelines questions:
- mav3rickism on X
- Review guidelines section in the app

For technical issues:
- Check documentation
- Review error messages in browser console


**Fonts:**
- Space Grotesk (Google Fonts)
- Montserrat (Google Fonts)
- DM Sans (Google Fonts)

---

**DEX24** - Marketing beyond walls
