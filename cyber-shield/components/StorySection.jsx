"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {

  const sectionRef = useRef();

  useEffect(() => {

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-10"
    >

      <h2 className="text-6xl font-bold leading-tight">
        Security <span className="text-green-400">Reimagined</span>
      </h2>

      <p className="mt-8 max-w-2xl text-xl text-gray-400">
        Protect your business with AI-driven security infrastructure
        designed for the modern internet.
      </p>

    </section>
  );
}