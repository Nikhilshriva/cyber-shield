"use client";

import { useEffect } from "react";

export default function MouseTrail() {

  useEffect(() => {

    const move = (e) => {

      const trail = document.createElement("div");

      trail.style.left = e.clientX + "px";
      trail.style.top = e.clientY + "px";

      trail.className =
        "fixed w-3 h-3 bg-green-400 rounded-full pointer-events-none z-[9999] animate-ping";

      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 500);

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return null;
}