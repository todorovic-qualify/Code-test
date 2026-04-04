"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ target, suffix = "", prefix = "", duration = 2000, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(target, duration, inView);
  return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>;
}
