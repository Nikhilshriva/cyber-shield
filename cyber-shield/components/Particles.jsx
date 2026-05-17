"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{

        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 60,

        particles: {

          color: {
            value: "#00ff99",
          },

          links: {
            color: "#00ff99",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            value: 35,
          },

          opacity: {
            value: 0.2,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 3 },
          },

        },

        detectRetina: true,

      }}
    />
  );
}