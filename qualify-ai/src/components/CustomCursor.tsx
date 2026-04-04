"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.1);
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ring.current) { ring.current.style.transform += " scale(1.8)"; ring.current.style.opacity = "0.5"; }
    };
    const onLeave = () => {
      if (ring.current) { ring.current.style.opacity = "1"; }
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-magnetic]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00D4A0] z-[9999] pointer-events-none mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#00D4A0]/40 z-[9998] pointer-events-none transition-opacity duration-300"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
