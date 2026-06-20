"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useIsDesktop } from "@/lib/use-is-desktop";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export function FadeInView({
  children,
  className,
  delay = 0,
  duration = 0.55,
}: FadeInViewProps) {
  const reducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  if (reducedMotion || !isDesktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
