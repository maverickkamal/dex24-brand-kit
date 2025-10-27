/**
 * Brand Gradients Data
 * Approved gradient combinations for Dexterous Medics brand
 */

export const brandGradients = [
  {
    id: 'deep-dark',
    name: 'Deep Dark Gradient',
    colors: ['#005656', '#1C1C1C'],
    direction: '180deg',
    opacity: '100%',
    css: 'linear-gradient(180deg, #005656 0%, #1C1C1C 100%)',
    previewImage: 'deep-dark.png',
    usage: 'Primary gradient for dark, authoritative designs and hero sections',
    whenToUse: 'Hero sections, dark mode interfaces, formal presentations',
    swiftCode: `let gradient = CAGradientLayer()
gradient.colors = [UIColor(hex: "005656").cgColor, UIColor(hex: "1C1C1C").cgColor]
gradient.startPoint = CGPoint(x: 0.5, y: 0)
gradient.endPoint = CGPoint(x: 0.5, y: 1)`,
    androidXML: `<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <gradient
        android:startColor="#005656"
        android:endColor="#1C1C1C"
        android:angle="180" />
</shape>`
  },
  {
    id: 'light-dark',
    name: 'Light Dark Gradient',
    colors: ['#009999', '#1C1C1C'],
    direction: '180deg',
    opacity: '100%',
    css: 'linear-gradient(180deg, #009999 0%, #1C1C1C 100%)',
    previewImage: 'light-dark.png',
    usage: 'Dramatic gradient with vibrant teal transitioning to deep dark',
    whenToUse: 'Event posters, announcement graphics, impact visuals',
    swiftCode: `let gradient = CAGradientLayer()
gradient.colors = [UIColor(hex: "009999").cgColor, UIColor(hex: "1C1C1C").cgColor]
gradient.startPoint = CGPoint(x: 0.5, y: 0)
gradient.endPoint = CGPoint(x: 0.5, y: 1)`,
    androidXML: `<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <gradient
        android:startColor="#009999"
        android:endColor="#1C1C1C"
        android:angle="180" />
</shape>`
  },
  {
    id: 'dark-fade',
    name: 'Dark Fade Gradient',
    colors: ['#1C1C1C', '#2A2A2A'],
    direction: '150deg',
    opacity: '100%',
    css: 'linear-gradient(150deg, #1C1C1C 0%, #2A2A2A 100%)',
    previewImage: 'dark-fade.png',
    usage: 'Subtle dark gradient for depth in dark mode designs',
    whenToUse: 'Dark mode backgrounds, card elevations, subtle depth',
    swiftCode: `let gradient = CAGradientLayer()
gradient.colors = [UIColor(hex: "1C1C1C").cgColor, UIColor(hex: "2A2A2A").cgColor]
gradient.startPoint = CGPoint(x: 0, y: 0)
gradient.endPoint = CGPoint(x: 0.866, y: 0.5)`,
    androidXML: `<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <gradient
        android:startColor="#1C1C1C"
        android:endColor="#2A2A2A"
        android:angle="150" />
</shape>`
  },
  {
    id: 'deep-neutral',
    name: 'Deep Neutral Overlay',
    colors: ['#005656', '#F4F4F4'],
    direction: '-135deg',
    opacity: '60%',
    css: 'linear-gradient(-135deg, rgba(0, 86, 86, 0.6) 0%, rgba(244, 244, 244, 0.6) 100%)',
    previewImage: 'dark-neutral.png',
    usage: 'Translucent overlay for images with deep teal accent',
    whenToUse: 'Image overlays, translucent backgrounds, layered designs',
    swiftCode: `let gradient = CAGradientLayer()
gradient.colors = [UIColor(hex: "005656").withAlphaComponent(0.6).cgColor, UIColor(hex: "F4F4F4").withAlphaComponent(0.6).cgColor]
gradient.startPoint = CGPoint(x: 1, y: 0)
gradient.endPoint = CGPoint(x: 0, y: 1)`,
    androidXML: `<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <gradient
        android:startColor="#99005656"
        android:endColor="#99F4F4F4"
        android:angle="225" />
</shape>`
  },
  {
    id: 'light-neutral',
    name: 'Light Neutral Overlay',
    colors: ['#009999', '#F4F4F4'],
    direction: '-135deg',
    opacity: '60%',
    css: 'linear-gradient(-135deg, rgba(0, 153, 153, 0.6) 0%, rgba(244, 244, 244, 0.6) 100%)',
    previewImage: 'light-neutral.png',
    usage: 'Translucent overlay for images with light teal accent',
    whenToUse: 'Bright image overlays, light content backgrounds, gentle accents',
    swiftCode: `let gradient = CAGradientLayer()
gradient.colors = [UIColor(hex: "009999").withAlphaComponent(0.6).cgColor, UIColor(hex: "F4F4F4").withAlphaComponent(0.6).cgColor]
gradient.startPoint = CGPoint(x: 1, y: 0)
gradient.endPoint = CGPoint(x: 0, y: 1)`,
    androidXML: `<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <gradient
        android:startColor="#99009999"
        android:endColor="#99F4F4F4"
        android:angle="225" />
</shape>`
  },
  {
    id: 'soft-neutral',
    name: 'Soft Neutral Gradient',
    colors: ['#E0F2F2', '#F4F4F4'],
    direction: '-135deg',
    opacity: '100%',
    css: 'linear-gradient(-135deg, #E0F2F2 0%, #F4F4F4 100%)',
    previewImage: 'soft-neutral.png',
    usage: 'Subtle backgrounds for text-heavy content, cards, sections',
    whenToUse: 'Web sections, infographics, clean layouts, card backgrounds',
    swiftCode: `let gradient = CAGradientLayer()
gradient.colors = [UIColor(hex: "E0F2F2").cgColor, UIColor(hex: "F4F4F4").cgColor]
gradient.startPoint = CGPoint(x: 1, y: 0)
gradient.endPoint = CGPoint(x: 0, y: 1)`,
    androidXML: `<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <gradient
        android:startColor="#E0F2F2"
        android:endColor="#F4F4F4"
        android:angle="225" />
</shape>`
  },
  {
    id: 'aqua-fade',
    name: 'Aqua Fade Gradient',
    colors: ['#009999', '#E0F2F2'],
    direction: '-135deg',
    opacity: '100%',
    css: 'linear-gradient(-135deg, #009999 0%, #E0F2F2 100%)',
    previewImage: 'aqua-fade.png',
    usage: 'Soft transition for overlays, gentle backgrounds with teal emphasis',
    whenToUse: 'Light content backgrounds, card overlays, secondary sections',
    swiftCode: `let gradient = CAGradientLayer()
gradient.colors = [UIColor(hex: "009999").cgColor, UIColor(hex: "E0F2F2").cgColor]
gradient.startPoint = CGPoint(x: 1, y: 0)
gradient.endPoint = CGPoint(x: 0, y: 1)`,
    androidXML: `<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <gradient
        android:startColor="#009999"
        android:endColor="#E0F2F2"
        android:angle="225" />
</shape>`
  }
]

/**
 * Get gradient by ID
 * @param {string} id - Gradient ID
 * @returns {Object|null} - Gradient object or null if not found
 */
export function getGradientById(id) {
  return brandGradients.find(gradient => gradient.id === id) || null
}

/**
 * Get CSS for a specific gradient
 * @param {string} id - Gradient ID
 * @returns {string} - CSS gradient string
 */
export function getGradientCSS(id) {
  const gradient = getGradientById(id)
  return gradient ? gradient.css : ''
}

/**
 * Export all gradients as CSS variables
 * @returns {string} - CSS variables string
 */
export function getGradientsCSSVariables() {
  return brandGradients.map(gradient => 
    `--gradient-${gradient.id}: ${gradient.css};`
  ).join('\n')
}
