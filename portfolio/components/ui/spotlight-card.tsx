"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode, MouseEvent } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const background = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.18), transparent 42%)`;

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ backgroundImage: background }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-colors hover:border-accent/40",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}
