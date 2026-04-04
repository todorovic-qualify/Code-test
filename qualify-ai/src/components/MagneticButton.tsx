"use client";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
}

export default function MagneticButton({ children, className = "", href, strength = 0.35 }: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const style = { transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)" };

  if (href) {
    return (
      <a ref={ref} href={href} className={className} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={className} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </button>
  );
}
