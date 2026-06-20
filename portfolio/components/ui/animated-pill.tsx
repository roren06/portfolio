"use client";

import { motion } from "framer-motion";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { cn } from "@/lib/utils";

type AnimatedPillProps = {
  label: string;
  index?: number;
  className?: string;
};

const pillClass =
  "rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-muted transition-colors hover:bg-accent/10 hover:text-foreground";

export function AnimatedPill({ label, index = 0, className }: AnimatedPillProps) {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return <li className={cn(pillClass, className)}>{label}</li>;
  }

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.88, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      whileHover={{ scale: 1.04, borderColor: "rgba(139, 92, 246, 0.5)" }}
      className={cn(pillClass, className)}
    >
      {label}
    </motion.li>
  );
}
