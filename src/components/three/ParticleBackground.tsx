"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingSphere({ position, color, scale }: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
    ref.current.rotation.x = t * 0.2;
    ref.current.rotation.y = t * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

        <StarField />
        <FloatingSphere position={[-3, 1, -2]} color="#6366f1" scale={0.8} />
        <FloatingSphere position={[3, -1, -3]} color="#06b6d4" scale={0.6} />
        <FloatingSphere position={[1, 2, -4]} color="#8b5cf6" scale={0.5} />
      </Canvas>
    </div>
  );
}