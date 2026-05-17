"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Hero3D from "../components/Hero3D";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";

import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";
import ThemeToggle from "../components/ThemeToggle";

import StorySection from "../components/StorySection";
import AdvancedFeatures from "../components/AdvancedFeatures";
import Glow from "../components/Glow";

import SecuritySection from "../components/SecuritySection";
import TrustBadges from "../components/TrustBadges";
import FloatingCTA from "../components/FloatingCTA";

import GridBackground from "../components/GridBackground";
import LiveTicker from "../components/LiveTicker";

import AIChatbot from "../components/AIChatbot";
import DashboardPreview from "../components/DashboardPreview";

import MotionSection from "../components/MotionSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {

    // SMOOTH SCROLL
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // HERO ANIMATION
    gsap.from(".hero-text", {
      y: 120,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
    });

    // SCROLL REVEALS
    gsap.utils.toArray(".reveal").forEach((section: any) => {

      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 120,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
      });

    });

  }, []);

  return (
    <>

      {/* BACKGROUNDS */}
      <GridBackground />
      <Particles />
      <Glow />

      {/* UI */}
      <Cursor />
      <Navbar />
      <ThemeToggle />
      <FloatingCTA />
      <AIChatbot />

      <main className="bg-black text-white overflow-hidden">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden">

          {/* GRADIENT ORBS */}
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-green-400/20 blur-[180px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/20 blur-[180px] rounded-full" />

          {/* CONTENT */}
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
                startups, SMBs and enterprises with cinematic-level user experience.

              </p>

              <div className="hero-text flex gap-6 mt-12 flex-wrap">

                <button className="bg-green-400 text-black px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(0,255,136,0.3)]">

                  Get Started

                </button>

                <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition duration-300">

                  Watch Demo

                </button>

              </div>

            </div>

            {/* RIGHT 3D */}
            <div className="w-full h-[500px] md:h-[650px]">

              <Hero3D />

            </div>

          </div>

        </section>

        {/* LIVE TICKER */}
        <LiveTicker />

        {/* STORY */}
        <section className="reveal">
          <StorySection />
        </section>

        {/* STATS */}
        <section className="reveal">
          <Stats />
        </section>

        {/* FEATURES */}
        <section className="reveal">
          <Features />
        </section>

        {/* ADVANCED */}
        <section className="reveal">
          <AdvancedFeatures />
        </section>

        {/* MOTION */}
        <section className="reveal">
          <MotionSection />
        </section>

        {/* DASHBOARD */}
        <section className="reveal">
          <DashboardPreview />
        </section>

        {/* SECURITY */}
        <section className="reveal">
          <SecuritySection />
        </section>

        {/* TRUST */}
        <section className="reveal">
          <TrustBadges />
        </section>

        {/* PRICING */}
        <section className="reveal">
          <Pricing />
        </section>

        {/* TESTIMONIALS */}
        <section className="reveal">
          <Testimonials />
        </section>

        {/* CINEMATIC CTA */}
        <section className="py-40 md:py-52 px-6 relative overflow-hidden">

          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent" />

          <div className="max-w-6xl mx-auto relative z-10">

            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[50px] p-12 md:p-24 text-center shadow-[0_0_100px_rgba(0,255,136,0.08)]">

              <h2 className="text-5xl md:text-8xl font-black leading-[0.95]">

                Secure Your
                <br />

                <span className="text-green-400">
                  Digital Future
                </span>

              </h2>

              <p className="mt-10 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">

                Join the next generation of businesses protected by
                AI-powered cybersecurity infrastructure.

              </p>

              <div className="flex justify-center gap-6 mt-14 flex-wrap">

                <button className="bg-green-400 text-black px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition duration-300">

                  Start Free Trial

                </button>

                <button className="border border-white/10 bg-white/5 px-10 py-5 rounded-2xl hover:bg-white/10 transition duration-300">

                  Book Consultation

                </button>

              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-24 px-6 md:px-10">

          <div className="grid md:grid-cols-4 gap-16 max-w-7xl mx-auto">

            {/* BRAND */}
            <div>

              <h2 className="text-4xl font-black text-green-400">
                CyberShield
              </h2>

              <p className="mt-6 text-gray-400 leading-relaxed">

                Premium cybersecurity infrastructure for the modern internet.

              </p>

            </div>

            {/* PRODUCT */}
            <div>

              <h3 className="font-bold text-2xl mb-6">
                Product
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li className="hover:text-green-400 transition cursor-pointer">
                  Features
                </li>

                <li className="hover:text-green-400 transition cursor-pointer">
                  Pricing
                </li>

                <li className="hover:text-green-400 transition cursor-pointer">
                  Dashboard
                </li>

              </ul>

            </div>

            {/* COMPANY */}
            <div>

              <h3 className="font-bold text-2xl mb-6">
                Company
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li className="hover:text-green-400 transition cursor-pointer">
                  About
                </li>

                <li className="hover:text-green-400 transition cursor-pointer">
                  Blog
                </li>

                <li className="hover:text-green-400 transition cursor-pointer">
                  Careers
                </li>

              </ul>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="font-bold text-2xl mb-6">
                Contact
              </h3>

              <ul className="space-y-4 text-gray-400">

                <li>
                  support@cybershield.com
                </li>

                <li>
                  +91 98765 43210
                </li>

                <li>
                  India
                </li>

              </ul>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-20 pt-10 text-center text-gray-500">

            © 2026 CyberShield. All rights reserved.

          </div>

        </footer>

      </main>

    </>
  );
}