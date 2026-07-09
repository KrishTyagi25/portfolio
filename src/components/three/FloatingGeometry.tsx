"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Geometry({
  type = "torusKnot",
  color = "#6366f1",
  scale = 1,
  opacity = 0.08,
}: {
  type?: "torusKnot" | "icosahedron" | "octahedron";
  color?: string;
  scale?: number;
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.1;
    ref.current.rotation.y = t * 0.15;
    ref.current.position.y = Math.sin(t * 0.3) * 0.5;
  });

  return (
    <mesh ref={ref} scale={scale}>
      {type === "torusKnot" && (
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      )}
      {type === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
      {type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function FloatingGeometry({
  type = "torusKnot",
  color = "#6366f1",
  scale = 2,
  className = "",
}: {
  type?: "torusKnot" | "icosahedron" | "octahedron";
  color?: string;
  scale?: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 z-0 opacity-60 pointer-events-none ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color={color} />
        <Geometry type={type} color={color} scale={scale} />
      </Canvas>
    </div>
  );
}
