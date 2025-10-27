/**
 * Copy text to clipboard with fallback for older browsers
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export async function copyToClipboard(text) {
  // Modern Clipboard API (requires HTTPS)
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {
      console.error('Clipboard API failed:', err)
      return fallbackCopy(text)
    }
  } else {
    // Fallback for older browsers or non-HTTPS contexts
    return fallbackCopy(text)
  }
}

/**
 * Fallback copy method using temporary textarea
 * @param {string} text - Text to copy
 * @returns {boolean} - Success status
 */
function fallbackCopy(text) {
  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.left = '-999999px'
    textarea.style.top = '-999999px'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    
    const successful = document.execCommand('copy')
    document.body.removeChild(textarea)
    
    return successful
  } catch (err) {
    console.error('Fallback copy failed:', err)
    return false
  }
}

/**
 * Copy multiple values as formatted text
 * @param {Object} values - Key-value pairs to copy
 * @returns {Promise<boolean>} - Success status
 */
export async function copyFormattedValues(values) {
  const formatted = Object.entries(values)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')
  
  return await copyToClipboard(formatted)
}

