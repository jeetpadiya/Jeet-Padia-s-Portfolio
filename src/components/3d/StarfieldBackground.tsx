import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function AmbientDust() {
  const pointsRef = useRef<THREE.Points>(null!)
  const count = 400

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return pos
  }, [count])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015
      pointsRef.current.rotation.x += delta * 0.008

      const targetX = state.pointer.x * 0.1
      const targetY = state.pointer.y * 0.1
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.02
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#a1a1aa"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function StarfieldBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden opacity-50">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 50 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <AmbientDust />
      </Canvas>
    </div>
  )
}
