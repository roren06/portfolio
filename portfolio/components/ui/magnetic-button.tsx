"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  download?: boolean;
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  download,
  type = "button",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-medium text-foreground shadow-[0_0_30px_-8px_var(--accent-glow)] transition-colors hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    className
  );

  const style = { x: springX, y: springY };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download || undefined}
        style={style}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
