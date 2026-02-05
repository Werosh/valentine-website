import React from 'react'
import Lottie from 'lottie-react'

/**
 * Component to render SVG from JSON file
 * Supports both SVG string JSON and Lottie JSON formats
 */
const SVGFromJSON = ({ jsonData, uniqueId = '', className = '', style = {}, loop = true, autoplay = true }) => {
  // Check if it's a Lottie JSON file
  const isLottieJSON = jsonData && typeof jsonData === 'object' && jsonData.layers && jsonData.w && jsonData.h

  if (isLottieJSON) {
    // Render Lottie animation
    return (
      <div className={className} style={style}>
        <Lottie
          animationData={jsonData}
          loop={loop}
          autoplay={autoplay}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    )
  }

  // Extract SVG content from JSON
  const getSVGContent = () => {
    // If it's already a string (SVG), return it
    if (typeof jsonData === 'string') {
      return jsonData
    }
    
    // If JSON has svg or content property
    if (jsonData.svg) {
      return jsonData.svg
    }
    if (jsonData.content) {
      return jsonData.content
    }
    
    return ''
  }

  const svgContent = getSVGContent()
  
  if (!svgContent) {
    return null
  }

  // Make IDs unique if uniqueId is provided
  const processedSVG = uniqueId
    ? svgContent
        .replace(/id="([^"]+)"/g, (match, id) => `id="${id}_${uniqueId}"`)
        .replace(/url\(#([^)]+)\)/g, (match, id) => `url(#${id}_${uniqueId})`)
    : svgContent

  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: processedSVG }}
    />
  )
}

export default SVGFromJSON

