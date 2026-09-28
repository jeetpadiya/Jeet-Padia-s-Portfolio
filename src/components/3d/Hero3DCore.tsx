import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import * as THREE from "three"

// Central Precision Monolith / Geometric Artifact
function IndustrialMonolith() {
  const outerMesh = useRef<THREE.Mesh>(null!)
  const innerMesh = useRef<THREE.Mesh>(null!)
  const ringRef = useRef<THREE.Group>(null!)

  useFrame((_, delta) => {
    if (outerMesh.current) {
      outerMesh.current.rotation.y += delta * 0.2
      outerMesh.current.rotation.x += delta * 0.1
    }
    if (innerMesh.current) {
      innerMesh.current.rotation.y -= delta * 0.35
      innerMesh.current.rotation.z += delta * 0.15
    }
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * 0.12
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <group>
        {/* Outer Titanium Wireframe Cage */}
        <mesh ref={outerMesh} scale={1.7}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#27272a"
            wireframe
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Inner Warm Amber Core */}
        <mesh ref={innerMesh} scale={1.1}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#d97706"
            emissive="#78350f"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>

        {/* Precision Mechanical Horizon Ring */}
        <group ref={ringRef} rotation={[Math.PI / 6, 0, 0]}>
          <mesh>
            <torusGeometry args={[2.3, 0.012, 16, 120]} />
            <meshStandardMaterial
              color="#71717a"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.0, 0.008, 16, 100]} />
            <meshStandardMaterial
              color="#52525b"
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

export default function Hero3DCore() {
  return (
    <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[460px]">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 6]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-6, -4, -4]} intensity={1.0} color="#f59e0b" />
        <directionalLight position={[0, -6, 2]} intensity={0.5} color="#71717a" />
        <pointLight position={[0, 0, 0]} intensity={1.2} color="#fbbf24" distance={4} />

        <IndustrialMonolith />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
      </Canvas>

      {/* Understated Minimalist Monospace Label */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-zinc-800 bg-[#0f1012]/90 px-3 py-1 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
          3D Model • Drag to Orbit
        </span>
      </div>
    </div>
  )
}
