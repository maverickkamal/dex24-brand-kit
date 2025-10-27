/**
 * Dynamically load and detect available assets from the public folder
 */

/**
 * Expected logo filenames
 */
const LOGO_VARIANTS = [
  'logo-deep-teal',
  'logo-light-teal',
  'logo-white',
  'logo-crimson',
  'logo-yellow',
  'logo-graphite'
]

/**
 * Check if a file exists at the given path
 * @param {string} path - Path to check
 * @returns {Promise<boolean>}
 */
async function fileExists(path) {
  try {
    const response = await fetch(path, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

/**
 * Load available logo files
 * @returns {Promise<Object>} - Object with PNG and SVG arrays
 */
export async function loadLogos() {
  const logos = {
    png: [],
    svg: []
  }

  for (const variant of LOGO_VARIANTS) {
    // Check PNG
    const pngPath = `/assets/logos/png/${variant}.png`
    if (await fileExists(pngPath)) {
      logos.png.push({
        name: variant.replace('logo-', '').replace(/-/g, ' '),
        path: pngPath,
        variant
      })
    }

    // Check SVG
    const svgPath = `/assets/logos/svg/${variant}.svg`
    if (await fileExists(svgPath)) {
      logos.svg.push({
        name: variant.replace('logo-', '').replace(/-/g, ' '),
        path: svgPath,
        variant
      })
    }
  }

  return logos
}

/**
 * Load available example images
 * @returns {Promise<Array>} - Array of example image objects
 */
export async function loadExamples() {
  // Since we can't dynamically list directory contents in the browser,
  // we'll maintain a list of expected examples and check which ones exist
  const exampleFiles = [
    'good-social-post-1.png',
    'good-social-post-2.png',
    'good-poster-1.png',
    'good-poster-2.png',
    'vaccination-poster.png',
    'mental-health-poster.png',
    'bad-composition-1.png',
    'bad-composition-2.png'
  ]

  const examples = []

  for (const file of exampleFiles) {
    const path = `/assets/examples/${file}`
    if (await fileExists(path)) {
      const [quality, ...rest] = file.replace('.png', '').split('-')
      examples.push({
        name: rest.join(' '),
        path,
        quality, // 'good' or 'bad'
        category: rest[0] // 'social', 'poster', etc.
      })
    }
  }

  return examples
}

/**
 * Load available preset files
 * @returns {Promise<Array>} - Array of preset objects
 */
export async function loadPresets() {
  const presetFiles = [
    { name: 'Lightroom Preset', file: 'lightroom-preset.xmp', type: 'lightroom' },
    { name: 'Photoshop Action', file: 'photoshop-action.atn', type: 'photoshop' }
  ]

  const presets = []

  for (const preset of presetFiles) {
    const path = `/assets/presets/${preset.file}`
    if (await fileExists(path)) {
      presets.push({
        name: preset.name,
        path,
        type: preset.type,
        file: preset.file
      })
    }
  }

  return presets
}

/**
 * Get all available assets
 * @returns {Promise<Object>} - Object containing all asset types
 */
export async function loadAllAssets() {
  const [logos, examples, presets] = await Promise.all([
    loadLogos(),
    loadExamples(),
    loadPresets()
  ])

  return {
    logos,
    examples,
    presets
  }
}

