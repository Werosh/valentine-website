/**
 * Utility to load SVG content from JSON files
 */

/**
 * Loads SVG content from a JSON file
 * @param {string} fileName - Name of the JSON file (without .json extension)
 * @returns {Promise<string>} - SVG content as string
 */
export const loadSVGFromJSON = async (fileName) => {
  try {
    const response = await import(`../data/svgs/${fileName}.json`)
    const data = response.default || response
    
    // Handle different JSON structures
    if (typeof data === 'string') {
      // If JSON contains SVG string directly
      return data
    } else if (data.svg || data.content) {
      // If JSON has svg or content property
      return data.svg || data.content
    } else if (data.layers && data.w && data.h) {
      // Lottie JSON format - we'll need to handle this differently
      // For now, return empty string and log a warning
      console.warn(`Lottie JSON format detected for ${fileName}. Consider using lottie-react library.`)
      return ''
    } else {
      // Try to stringify if it's an object
      return JSON.stringify(data)
    }
  } catch (error) {
    console.error(`Error loading SVG from ${fileName}.json:`, error)
    return ''
  }
}

/**
 * Synchronously loads SVG from JSON (for static imports)
 * @param {Object} jsonData - The imported JSON data
 * @returns {string} - SVG content as string
 */
export const parseSVGFromJSON = (jsonData) => {
  if (typeof jsonData === 'string') {
    return jsonData
  } else if (jsonData.svg || jsonData.content) {
    return jsonData.svg || jsonData.content
  } else {
    // If it's a complex object, try to extract SVG or return empty
    return ''
  }
}

