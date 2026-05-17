"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Shape() {

  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.003;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>

      <mesh ref={mesh}>

        <icosahedronGeometry args={[2, 1]} />

        <meshStandardMaterial
          color="#00ff99"
          wireframe
        />

      </mesh>

    </Float>
  );
}

export default function Hero3D() {

  return (

    <Canvas
      camera={{ position: [0, 0, 5] }}
      dpr={[1, 1.5]}
    >

      <ambientLight intensity={1} />

      <directionalLight position={[2, 2, 5]} />

      <Shape />

    </Canvas>

  );
}