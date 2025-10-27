/**
 * Brand Logos Data
 * Information about available logo files
 */

export const logoVariants = {
  // Main logos (horizontal)
  main: [
    { id: 'logo-black', name: 'Black Logo', file: 'dex24_logo black.png', color: '#1C1C1C', usage: 'Use on light backgrounds' },
    { id: 'logo-white', name: 'White Logo', file: 'dex24_logo white.png', color: '#FFFFFF', usage: 'Use on dark backgrounds' },
    { id: 'logo-dark-teal', name: 'Dark Teal Logo', file: 'dex24_logo dark teal.png', color: '#005656', usage: 'Primary brand color logo' },
    { id: 'logo-teal', name: 'Teal Logo', file: 'dex24_logo teal.png', color: '#009999', usage: 'Light teal variant' },
    { id: 'logo-mute-teal', name: 'Muted Teal Logo', file: 'dex24_logo mute teal.png', color: '#E0F2F2', usage: 'Subtle brand application' },
    { id: 'logo-yellow', name: 'Yellow Logo', file: 'dex24_logo yellow.png', color: '#FFD600', usage: 'Accent logo for dark backgrounds' },
    { id: 'logo-crimson', name: 'Crimson Logo', file: 'dex24_logo crimson.png', color: '#C0392B', usage: 'Emotional/urgent communications' },
    { id: 'logo-red', name: 'Red Logo', file: 'dex24_logo red.png', color: '#FF0000', usage: 'High-impact situations' }
  ],
  
  // Crest logos (emblem/badge)
  crest: [
    { id: 'crest-main', name: 'Main Crest', file: 'dex_crest main.png', color: '#005656', usage: 'Primary crest' },
    { id: 'crest-main-dark', name: 'Main Dark Crest', file: 'dex_crest main dark.png', color: '#000000', usage: 'Dark variant crest' },
    { id: 'crest-dark-teal', name: 'Dark Teal Crest', file: 'dex_crest dark teal.png', color: '#005656', usage: 'Brand color crest' },
    { id: 'crest-teal', name: 'Teal Crest', file: 'dex_crest teal.png', color: '#009999', usage: 'Light teal crest' },
    { id: 'crest-white', name: 'White Crest', file: 'dex_crest white.png', color: '#FFFFFF', usage: 'For dark backgrounds' },
    { id: 'crest-black', name: 'Black Crest', file: 'dex_crest black.png', color: '#1C1C1C', usage: 'For light backgrounds' },
    { id: 'crest-yellow', name: 'Yellow Crest', file: 'dex_crest yellow.png', color: '#FFD600', usage: 'Accent crest' },
    { id: 'crest-crimson', name: 'Crimson Crest', file: 'dex_crest crimson.png', color: '#C0392B', usage: 'Emotional emphasis' }
  ],
  
  // SVG versions
  svg: [
    { id: 'logo-main-svg', name: 'DEX24 Logo Main (SVG)', file: 'dex24_logo main.svg', color: '#005656', usage: 'Scalable main logo' },
    { id: 'logo-yellow-svg', name: 'DEX24 Logo Yellow (SVG)', file: 'dex24_logo main yellow.svg', color: '#FFD600', usage: 'Scalable yellow logo' },
    { id: 'logo-black-svg', name: 'DEX24 Logo Black (SVG)', file: 'dex24_logo black.svg', color: '#1C1C1C', usage: 'Scalable black logo' },
    { id: 'logo-white-svg', name: 'DEX24 Logo White (SVG)', file: 'dex24_logo white.svg', color: '#FFFFFF', usage: 'Scalable white logo' },
    { id: 'crest-main-svg', name: 'DEX24 Crest (SVG)', file: 'dex24_crest.svg', color: '#005656', usage: 'Scalable crest' },
    { id: 'crest-main-dark-svg', name: 'DEX Crest Main Dark (SVG)', file: 'dex_crest main dark.svg', color: '#000000', usage: 'Scalable dark crest' },
    { id: 'crest-yellow-svg', name: 'DEX Crest Yellow (SVG)', file: 'dex_crest yellow.svg', color: '#FFD600', usage: 'Scalable yellow crest' },
    { id: 'crest-main-svg-alt', name: 'DEX Crest Main (SVG)', file: 'dex_crest main .svg', color: '#005656', usage: 'Scalable main crest' }
  ]
}

/**
 * Logo usage guidelines
 */
export const logoGuidelines = {
  do: [
    'Maintain minimum clear space around logos (equal to the height of the "X" in DEX24)',
    'Use appropriate color variants for backgrounds (white on dark, dark on light)',
    'Keep logos at legible sizes (minimum 80px wide for horizontal logo)',
    'Use SVG format whenever possible for crisp display at any size',
    'Download both PNG and SVG versions for different use cases',
    'Refer to the color variant that matches your background'
  ],
  avoid: [
    'Stretching, distorting, or rotating the logo',
    'Applying gradients, effects, or filters to the logo',
    'Placing logos on busy or low-contrast backgrounds',
    'Using yellow logo on light backgrounds (insufficient contrast)',
    'Recreating or modifying the logo',
    'Using logos smaller than minimum size specifications'
  ]
}

/**
 * Get logo path
 */
export function getLogoPath(file, format = 'png') {
  if (format === 'svg') {
    return `/assets/logos/svg/${file}`
  }
  return `/assets/logos/png/${file}`
}

/**
 * Get all logos by category
 */
export function getLogosByCategory(category) {
  return logoVariants[category] || []
}

