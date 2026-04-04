"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface Props {
  text: string;
  className?: string;
  trigger?: boolean;
  duration?: number;
}

export default function ScrambleText({ text, className = "", trigger = true, duration = 1200 }: Props) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<ReturnType<typeof setTimeout> | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const chars = text.split("");
    const resolved = new Array(chars.length).fill(false);
    const startTime = Date.now();
    const stagger = duration / chars.length;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      let allDone = true;

      const next = chars.map((ch, i) => {
        if (ch === " ") return " ";
        if (resolved[i]) return ch;
        if (elapsed >= i * stagger * 0.6) {
          resolved[i] = true;
          return ch;
        }
        allDone = false;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplay(next.join(""));
      if (!allDone) raf.current = setTimeout(tick, 40);
    };

    tick();
    return () => { if (raf.current) clearTimeout(raf.current); };
  }, [trigger, text, duration]);

  return <span className={className}>{display}</span>;
}
