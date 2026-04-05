"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  pulseSpeed: number;
  isHot: boolean; // brighter "data node" variant
}

interface Props {
  opacity?: number;
  count?: number;
  maxDist?: number;
  color?: string; // rgba base, e.g. "0,212,160"
}

export default function ParticleNetwork({
  opacity = 0.55,
  count = 72,
  maxDist = 135,
  color = "0,212,160",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const ps: Particle[] = [];

    /* ── Resize: account for device pixel ratio ─────── */
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      canvas!.width  = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* ── Seed particles ──────────────────────────────── */
    for (let i = 0; i < count; i++) {
      ps.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.4 + 0.4,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.014 + Math.random() * 0.022,
        isHot: Math.random() < 0.14,
      });
    }

    /* ── Draw loop ───────────────────────────────────── */
    function draw() {
      const W = canvas!.offsetWidth;
      const H = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, W, H);

      /* Connections (drawn before particles so they appear behind) */
      ctx!.lineWidth = 0.55;
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i];
        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          /* Cheap bounds rejection before sqrt */
          if (Math.abs(dx) > maxDist || Math.abs(dy) > maxDist) continue;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.2;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(${color},${alpha})`;
            ctx!.stroke();
          }
        }
      }

      /* Particles */
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        /* Wrap edges */
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const glow = 0.38 + Math.sin(p.pulse) * 0.3;

        if (p.isHot) {
          /* Soft halo for data-node particles */
          const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 9);
          grad.addColorStop(0, `rgba(${color},${glow * 0.55})`);
          grad.addColorStop(1, `rgba(${color},0)`);
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r * 9, 0, Math.PI * 2);
          ctx!.fillStyle = grad;
          ctx!.fill();
        }

        /* Core dot */
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * (p.isHot ? 2 : 1), 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color},${glow})`;
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count, maxDist, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
}
