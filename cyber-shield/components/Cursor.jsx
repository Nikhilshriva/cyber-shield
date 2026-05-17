"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.width = "8px";
    c.style.height = "8px";
    c.style.background = "#00ff88";
    c.style.borderRadius = "50%";
    document.body.appendChild(c);

    window.addEventListener("mousemove", e => {
      c.style.left = e.clientX + "px";
      c.style.top = e.clientY + "px";
    });
  }, []);

  return null;
}