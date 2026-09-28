import React, { useRef, useState } from "react"

interface Tilt3DCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  glare?: boolean
}

export default function Tilt3DCard({
  children,
  className = "",
  intensity = 10,
  glare = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    setRotation({ x: rotateX, y: rotateY })

    if (glare) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      setGlarePosition({ x: glareX, y: glareY, opacity: 0.08 })
    }
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Subtle Specular Soft-White Glare */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 260px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glarePosition.opacity}), transparent 80%)`,
          }}
        />
      )}

      {/* Card Content with 3D Depth */}
      <div style={{ transform: "translateZ(12px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  )
}
