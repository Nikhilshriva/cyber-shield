"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Shield() {

  const mesh = useRef();

  useFrame((state) => {

    if (!mesh.current) return;

    mesh.current.rotation.y += 0.005;

    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.2;

    mesh.current.rotation.x =
      state.mouse.y * 0.5;

    mesh.current.rotation.y =
      state.mouse.x * 1.5;

  });

  return (
    <mesh ref={mesh}>

      <icosahedronGeometry args={[2, 1]} />

      <meshStandardMaterial
        color="#00ff88"
        wireframe
      />

    </mesh>
  );
}

export default function Hero3D() {

  return (
    <Canvas camera={{ position: [0, 0, 6] }}>

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
      >

        <Shield />

      </Float>

    </Canvas>
  );
}