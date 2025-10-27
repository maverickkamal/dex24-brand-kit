/**
 * Brand Fonts Data
 * Typography specifications for Dexterous Medics brand
 */

export const brandFonts = [
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    family: 'Space Grotesk',
    weights: ['Light (300)', 'Regular (400)', 'Bold (700)'],
    usage: 'For festival/limited campaigns, merchandise, or celebratory visuals (not brand core). For large, high-impact text: mega-titles, hero sections, key phrases.',
    bestAt: 'Display sizes (36px+)',
    lineHeight: '1.1-1.2',
    letterSpacing: '-0.02em to 0em',
    samples: {
      large: 'The quick brown fox jumps',
      medium: 'AaBbCc 123 !@#',
      small: 'Typography matters'
    },
    googleFontsUrl: 'https://fonts.google.com/specimen/Space+Grotesk',
    importStatement: "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap');",
    cssFamily: "'Space Grotesk', Arial, Helvetica, sans-serif",
    examples: [
      { size: '48px', weight: 'Bold', text: 'Hero Headline' },
      { size: '36px', weight: 'Bold', text: 'Event Title' },
      { size: '24px', weight: 'Regular', text: 'Section Header' }
    ]
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    family: 'Montserrat',
    weights: ['Light (300)', 'Regular (400)', 'Medium (500)', 'SemiBold (600)', 'Bold (700)', 'ExtraBold (800)'],
    usage: 'For slogans, headers (under main titles), taglines, CTA texts.',
    bestAt: 'Heading sizes (18px-36px)',
    lineHeight: '1.3-1.4',
    letterSpacing: '-0.01em to 0em',
    samples: {
      large: 'The quick brown fox',
      medium: 'AaBbCc 123 !@#',
      small: 'Professional Typography'
    },
    googleFontsUrl: 'https://fonts.google.com/specimen/Montserrat',
    importStatement: "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');",
    cssFamily: "'Montserrat', Arial, Helvetica, sans-serif",
    examples: [
      { size: '24px', weight: 'SemiBold', text: 'Subheading' },
      { size: '18px', weight: 'Bold', text: 'CTA Button Text' },
      { size: '24px', weight: 'Medium', text: 'Tagline' }
    ]
  },
  {
    id: 'dm-sans',
    name: 'DM Sans',
    family: 'DM Sans',
    weights: ['Light (300)', 'Regular (400)', 'Medium (500)', 'Bold (700)', 'ExtraBold (800)'],
    usage: 'For all descriptive content, interface text, articles, and educational blurbs.',
    bestAt: 'Body text (12px-16px)',
    lineHeight: '1.5-1.6',
    letterSpacing: '0em to 0.01em',
    samples: {
      large: 'The quick brown fox jumps over the lazy dog',
      medium: 'AaBbCc 123 !@#',
      small: 'Clear and readable'
    },
    googleFontsUrl: 'https://fonts.google.com/specimen/DM+Sans',
    importStatement: "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700;800&display=swap');",
    cssFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    examples: [
      { size: '16px', weight: 'Regular', text: 'Body copy paragraph text for reading' },
      { size: '14px', weight: 'Medium', text: 'UI labels and navigation' },
      { size: '12px', weight: 'Regular', text: 'Fine print and captions' }
    ]
  }
]

/**
 * Typography usage rules
 */
export const typographyRules = {
  do: [
    'Keep Space Grotesk only for large or standout text (it loses character at small sizes)',
    'Maintain consistent line spacing to preserve clarity (1.5x for body, 1.2x for headings)',
    'Stick to 2-3 font weights per composition for hierarchy',
    'Keep DM Sans for readability-heavy blocks — research summaries, posts, etc.',
    'Use Display font sparingly — e.g. anniversary post, community event, or merch like badges or T-shirts'
  ],
  avoid: [
    'Mixing more than 2 typefaces in one layout (Clutters visually)',
    'Overusing Montserrat in large titles — it\'s too geometric and works better as a fallback',
    'Using DM Sans for headings — it flatters hierarchy',
    'Too-tight letter spacing for headlines (Space Grotesk breathes better slightly spaced out)'
  ]
}

/**
 * Font personalities
 */
export const fontPersonalities = [
  {
    font: 'Space Grotesk',
    personality: 'Confident, forward-thinking, slightly experimental',
    icon: '✨'
  },
  {
    font: 'Montserrat',
    personality: 'Clean, professional, neutral bridge',
    icon: '🎯'
  },
  {
    font: 'DM Sans',
    personality: 'Accessible, friendly, versatile',
    icon: '📝'
  }
]

/**
 * Get font by ID
 */
export function getFontById(id) {
  return brandFonts.find(font => font.id === id) || null
}

