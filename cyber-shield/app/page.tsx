"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Lenis from "lenis";

import Hero3D from "../clerk-nextjs/components/Hero3D";
import Features from "../clerk-nextjs/components/Features";
import Pricing from "../clerk-nextjs/components/Pricing";
import Testimonials from "../clerk-nextjs/components/Testimonials";
import Stats from "../clerk-nextjs/components/Stats";

import Cursor from "../clerk-nextjs/components/Cursor";
import Navbar from "../clerk-nextjs/components/Navbar";
import Particles from "../clerk-nextjs/components/Particles";
import ThemeToggle from "../clerk-nextjs/components/ThemeToggle";

import StorySection from "../clerk-nextjs/components/StorySection";
import AdvancedFeatures from "../clerk-nextjs/components/AdvancedFeatures";
import Glow from "../clerk-nextjs/components/Glow";

import SecuritySection from "../clerk-nextjs/components/SecuritySection";
import TrustBadges from "../clerk-nextjs/components/TrustBadges";
import FloatingCTA from "../clerk-nextjs/components/FloatingCTA";

import GridBackground from "../clerk-nextjs/components/GridBackground";
import LiveTicker from "../clerk-nextjs/components/LiveTicker";

import AIChatbot from "../clerk-nextjs/components/AIChatbot";
import DashboardPreview from "../clerk-nextjs/components/DashboardPreview";

import MotionSection from "../clerk-nextjs/components/MotionSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.from(".hero-text", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.utils.toArray(".reveal").forEach((section: any) => {

      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },

        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

    });

  }, []);

  return (
    <>

      <GridBackground />
      <Particles />
      <Glow />

      <Cursor />
      <Navbar />
      <ThemeToggle />
      <FloatingCTA />
      <AIChatbot />

      <main className="bg-black text-white overflow-hidden">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden">

          {/* ORBS */}
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-400/10 blur-[100px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full" />

          <div className="grid md:grid-cols-2 gap-20 items-center w-full max-w-7xl z-10">

            {/* LEFT */}
            <div>

              <div className="hero-text inline-block px-6 py-3 rounded-full border border-green-400/20 bg-green-400/10 text-green-400 text-sm mb-8 backdrop-blur-xl">

                AI-Powered Enterprise Security

              </div>

              <h1 className="hero-text text-6xl md:text-8xl font-black leading-[0.95]">

                Future of
                <br />

                <span className="text-green-400">
                  Cyber Defense
                </span>

              </h1>

              <p className="hero-text mt-10 text-xl text-gray-400 leading-relaxed max-w-2xl">

                Premium AI-driven cybersecurity platform designed for
                startups and enterprises.

              </p>

              <div className="hero-text flex gap-6 mt-12 flex-wrap">

                <button className="bg-green-400 text-black px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition duration-300">

                  Get Started

                </button>

                <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition duration-300">

                  Watch Demo

                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="w-full h-[400px] md:h-[550px]">

              <Hero3D />

            </div>

          </div>

        </section>

        <LiveTicker />

        <section className="reveal">
          <StorySection />
        </section>

        <section className="reveal">
          <Stats />
        </section>

        <section className="reveal">
          <Features />
        </section>

        <section className="reveal">
          <AdvancedFeatures />
        </section>

        <section className="reveal">
          <MotionSection />
        </section>

        <section className="reveal">
          <DashboardPreview />
        </section>

        <section className="reveal">
          <SecuritySection />
        </section>

        <section className="reveal">
          <TrustBadges />
        </section>

        <section className="reveal">
          <Pricing />
        </section>

        <section className="reveal">
          <Testimonials />
        </section>

      </main>

    </>
  );
}