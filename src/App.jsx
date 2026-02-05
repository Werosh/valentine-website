import React, { useState } from 'react'
import Welcome from './components/Welcome'
import FloatingHearts from './components/FloatingHearts'
import LoveTimeline from './components/LoveTimeline'
import InteractiveNotes from './components/InteractiveNotes'
import HangingImages from './components/HangingImages'
import LoadingAnimation from './components/LoadingAnimation'
import RandomSVGs from './components/RandomSVGs'

// Heart Boom SVG from Lottie
const heartBoomSVG = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="300" height="300" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%;">
  <defs>
    <clipPath id="__lottie_element_11340">
      <rect width="300" height="300" x="0" y="0"/>
    </clipPath>
  </defs>
  <g clip-path="url(#__lottie_element_11340)">
    <g transform="matrix(0.6621554493904114,0,0,0.6621554493904114,150,150)" opacity="1" style="display: block;">
      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
        <path fill="rgb(244,32,52)" fill-opacity="1" d=" M0,-27 C0,-27 6,-38 18,-38 C32,-38 41,-26 41,-14 C41,-2 35,16 0,38 C-35,16 -41,-2 -41,-14 C-41,-26 -32,-38 -18,-38 C-6,-38 0,-27 0,-27z"/>
      </g>
    </g>
  </g>
</svg>
`

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="relative min-h-screen w-full overflow-x-hidden">
          <FloatingHearts />
          <RandomSVGs
            svgContent={heartBoomSVG}
            count={12}
            minSize={50}
            maxSize={150}
          />
          <Welcome />
          <HangingImages />
          <LoveTimeline />
          <InteractiveNotes />
        </div>
      )}
    </>
  )
}

export default App
