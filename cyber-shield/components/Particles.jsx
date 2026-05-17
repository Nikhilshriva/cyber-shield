"use client";

import { Canvas } from "@react-three/fiber";

function ParticlesMesh() {
  return (
    <points>
      <sphereGeometry args={[5, 32, 32]} />
      <pointsMaterial color="#00ff88" size={0.02} />
    </points>
  );
}

export default function Particles() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight />
        <ParticlesMesh />
      </Canvas>
    </div>
  );
}