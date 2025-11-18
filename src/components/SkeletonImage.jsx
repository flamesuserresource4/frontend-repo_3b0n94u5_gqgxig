import { useState } from 'react'

export default function SkeletonImage({ src, alt = '', className = '', imgClassName = '' }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-[#eee] ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#e9e9e9] via-[#f3f3f3] to-[#e9e9e9]" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover grayscale ${imgClassName} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      />
    </div>
  )
}
