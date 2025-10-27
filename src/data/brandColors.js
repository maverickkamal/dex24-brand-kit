/**
 * Brand Colors Data
 * Complete color specifications for Dexterous Medics brand
 */

export const brandColors = [
  {
    id: 'deep-teal',
    name: 'Primary Deep Teal',
    hex: '#005656',
    rgb: 'rgb(0, 86, 86)',
    cmyk: 'C=100 M=0 Y=0 K=66',
    usage: 'Main brand color. Used for logos, titles, uniforms, and structured materials on light backgrounds.',
    rules: {
      do: [
        'Use as primary brand identifier in all compositions',
        'Apply to logos and main headlines',
        'Use for professional, authoritative designs'
      ],
      avoid: [
        'Using on dark backgrounds without sufficient contrast',
        'Overuse that makes everything monotonous'
      ]
    }
  },
  {
    id: 'light-teal',
    name: 'Primary Light Teal',
    hex: '#009999',
    rgb: 'rgb(0, 153, 153)',
    cmyk: 'C=100 M=0 Y=0 K=40',
    usage: 'Used on dark backgrounds or in digital contexts requiring vibrancy.',
    rules: {
      do: [
        'Use for digital interfaces and dark mode',
        'Apply to interactive elements and links',
        'Use for accent and highlight elements'
      ],
      avoid: [
        'Using as primary color on light backgrounds',
        'Combining with Muted Teal (too similar)'
      ]
    }
  },
  {
    id: 'yellow',
    name: 'Accent/Secondary Yellow',
    hex: '#FFD600',
    rgb: 'rgb(255, 214, 0)',
    cmyk: 'C=0 M=16 Y=100 K=0',
    usage: 'Used on dark or teal backgrounds for highlights, dynamic energy and motion graphics. Avoid on white/light backgrounds.',
    rules: {
      do: [
        'Use for CTAs, highlights, and accents on dark backgrounds',
        'Apply to draw attention to important elements',
        'Use sparingly for maximum impact'
      ],
      avoid: [
        'Using on white or light grey backgrounds (poor contrast)',
        'Large blocks of solid yellow',
        'Overuse that creates visual fatigue'
      ]
    }
  },
  {
    id: 'crimson',
    name: 'Accent/Tertiary Crimson',
    hex: '#C0392B',
    rgb: 'rgb(192, 57, 43)',
    cmyk: 'C=0 M=70 Y=78 K=25',
    usage: 'Used sparingly for emotional impact, callouts, and crest highlights. Avoid large text or backgrounds.',
    rules: {
      do: [
        'Use for symbolic elements and emotional emphasis',
        'Apply to important warnings or alerts',
        'Use in small doses for accent'
      ],
      avoid: [
        'Large text blocks or backgrounds',
        'Overuse that diminishes impact',
        'Using for decorative purposes'
      ]
    }
  },
  {
    id: 'red',
    name: 'Accent/Tertiary Red',
    hex: '#FF0000',
    rgb: 'rgb(255, 0, 0)',
    cmyk: 'C=0 M=100 Y=100 K=0',
    usage: 'Used sparingly for emotional impact, callouts, and crest highlights. Avoid large text or backgrounds.',
    rules: {
      do: [
        'Use for urgent callouts and alerts',
        'Apply to error states and warnings',
        'Reserve for critical information'
      ],
      avoid: [
        'Overuse or large areas',
        'Using for decorative elements',
        'Combining with crimson in same composition'
      ]
    }
  },
  {
    id: 'brown-white',
    name: 'Neutral Brown-white',
    hex: '#F4F4F4',
    rgb: 'rgb(244, 244, 244)',
    cmyk: 'C=0 M=0 Y=0 K=4',
    usage: 'Secondary background color. Clean and modern. Used in light compositions for structure and separation.',
    rules: {
      do: [
        'Use for clean, breathable backgrounds',
        'Apply to card backgrounds and sections',
        'Pair with white for subtle separation'
      ],
      avoid: [
        'Using as sole background (pair with white or other neutrals)',
        'Using with insufficient text contrast'
      ]
    }
  },
  {
    id: 'graphite',
    name: 'Neutral Graphite',
    hex: '#1C1C1C',
    rgb: 'rgb(28, 28, 28)',
    cmyk: 'C=0 M=0 Y=0 K=89',
    usage: 'Used for dark mode compositions, hero sections, or formal settings. Conveys authority and focus.',
    rules: {
      do: [
        'Use for professional, authoritative designs',
        'Apply to dark mode interfaces',
        'Use for high-contrast compositions'
      ],
      avoid: [
        'Using without sufficient contrast for text',
        'Overuse that creates oppressive feeling',
        'Using as primary text color on colored backgrounds'
      ]
    }
  },
  {
    id: 'muted-teal',
    name: 'Neutral II Muted Teal',
    hex: '#E0F2F2',
    rgb: 'rgb(224, 242, 242)',
    cmyk: 'C=7 M=0 Y=0 K=5',
    usage: 'Alternative light background that maintains brand tone while softening contrast.',
    rules: {
      do: [
        'Use to soften harsh white backgrounds',
        'Apply to subtle background variations',
        'Use for gentle highlighting'
      ],
      avoid: [
        'Using with Primary Light Teal (too similar)',
        'Large blocks without variation',
        'Overuse that muddles the design'
      ]
    }
  }
]

/**
 * Get color by ID
 * @param {string} id - Color ID
 * @returns {Object|null} - Color object or null if not found
 */
export function getColorById(id) {
  return brandColors.find(color => color.id === id) || null
}

/**
 * Get color by hex value
 * @param {string} hex - Hex color value
 * @returns {Object|null} - Color object or null if not found
 */
export function getColorByHex(hex) {
  return brandColors.find(color => color.hex.toLowerCase() === hex.toLowerCase()) || null
}

/**
 * Export colors as CSS variables string
 * @returns {string} - CSS variables
 */
export function getColorsCSSVariables() {
  return brandColors.map(color => 
    `--color-${color.id}: ${color.hex};`
  ).join('\n')
}

/**
 * Export colors as JSON for download
 * @returns {string} - JSON string
 */
export function getColorsAsJSON() {
  return JSON.stringify(brandColors, null, 2)
}

