import JSZip from 'jszip'
import { brandColors, getColorsAsJSON } from '../data/brandColors'
import { brandGradients } from '../data/brandGradients'
import { brandFonts } from '../data/brandFonts'
import { logoVariants } from '../data/brandLogos'

/**
 * Download a file from a URL
 */
async function fetchFile(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) return null
    return await response.blob()
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error)
    return null
  }
}

/**
 * Generate and download ZIP file with all brand assets
 */
export async function generateBrandKitZip(onProgress) {
  const zip = new JSZip()
  
  try {
    // Update progress
    if (onProgress) onProgress(0, 'Initializing...')

    // Add README
    const readme = `# Dexterous Medics Brand Kit
    
This package contains all official brand assets for Dexterous Medics / DEX24.

## Contents

- **/logos/** - PNG and SVG logo files in all brand colors
- **/gradients/** - Gradient preview images
- **/presets/** - Photo editing presets
- **/colors/** - Brand color palette files
- **/fonts/** - Font information and links

## Usage

Please refer to the brand guidelines at your brand kit website for proper usage of these assets.

## Brand Colors

${brandColors.map(c => `- ${c.name}: ${c.hex}`).join('\n')}

## Brand Fonts

${brandFonts.map(f => `- ${f.name}: ${f.usage}`).join('\n')}

© ${new Date().getFullYear()} Dexterous Medics. All rights reserved.

DEX24 - Marketing beyond walls
`
    zip.file('README.txt', readme)

    // Add colors palette JSON
    if (onProgress) onProgress(10, 'Adding colors...')
    zip.file('colors/palette.json', getColorsAsJSON())
    
    // Add CSS variables
    const cssVars = `:root {
${brandColors.map(c => `  --color-${c.id}: ${c.hex};`).join('\n')}
}`
    zip.file('colors/palette.css', cssVars)

    // Add font information
    if (onProgress) onProgress(20, 'Adding font info...')
    const fontInfo = `# Dexterous Medics Brand Fonts

${brandFonts.map(f => `
## ${f.name}
- Google Fonts: ${f.googleFontsUrl}
- Weights: ${f.weights.join(', ')}
- Usage: ${f.usage}

CSS Import:
${f.importStatement}
`).join('\n')}
`
    zip.file('fonts/font-info.txt', fontInfo)

    // Add logos (PNG)
    if (onProgress) onProgress(30, 'Adding PNG logos...')
    for (const logo of logoVariants.main) {
      const blob = await fetchFile(`/assets/logos/png/${logo.file}`)
      if (blob) {
        zip.file(`logos/png/${logo.file}`, blob)
      }
    }

    for (const logo of logoVariants.crest) {
      const blob = await fetchFile(`/assets/logos/png/${logo.file}`)
      if (blob) {
        zip.file(`logos/png/${logo.file}`, blob)
      }
    }

    // Add logos (SVG)
    if (onProgress) onProgress(60, 'Adding SVG logos...')
    for (const logo of logoVariants.svg) {
      const blob = await fetchFile(`/assets/logos/svg/${logo.file}`)
      if (blob) {
        zip.file(`logos/svg/${logo.file}`, blob)
      }
    }

    // Add gradient previews
    if (onProgress) onProgress(80, 'Adding gradients...')
    for (const gradient of brandGradients) {
      if (gradient.previewImage) {
        const blob = await fetchFile(`/assets/gradients/${gradient.previewImage}`)
        if (blob) {
          zip.file(`gradients/${gradient.previewImage}`, blob)
        }
      }
    }

    // Add preset
    if (onProgress) onProgress(90, 'Adding presets...')
    const presetBlob = await fetchFile('/assets/presets/dex_preset.dng')
    if (presetBlob) {
      zip.file('presets/dex_preset.dng', presetBlob)
    }

    // Add guidelines summary
    const guidelines = `# Brand Guidelines Summary

## Color Usage
- Keep Deep Teal (#005656) as the brand's backbone
- Use Yellow only on dark backgrounds
- Apply brand colors contextually, not decoratively

## Typography
- Display: Space Grotesk (for large, impactful text)
- Headings: Montserrat (for titles and CTAs)
- Body: DM Sans (for readable content)

## Logo Usage
- Maintain clear space around logos
- Use appropriate color variants for backgrounds
- Minimum size: 80px wide for horizontal logo

For complete guidelines, visit your brand kit website.
`
    zip.file('guidelines/brand-summary.txt', guidelines)

    // Generate ZIP
    if (onProgress) onProgress(95, 'Generating ZIP file...')
    const content = await zip.generateAsync({ 
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    })

    // Download
    if (onProgress) onProgress(100, 'Download starting...')
    const date = new Date().toISOString().split('T')[0].replace(/-/g, '')
    const filename = `dexterous-medics-brand-kit-${date}.zip`
    
    const link = document.createElement('a')
    link.href = URL.createObjectURL(content)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)

    return { success: true, filename }
  } catch (error) {
    console.error('Error generating ZIP:', error)
    return { success: false, error: error.message }
  }
}

