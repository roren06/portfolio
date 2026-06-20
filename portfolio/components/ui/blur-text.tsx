"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type BlurTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
  gradient?: boolean;
};

export function BlurText({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  gradient = false,
}: BlurTextProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (reducedMotion) {
    return (
      <Tag
        className={cn(
          className,
          gradient
            ? "text-gradient"
            : undefined,
        )}
      >
        {text}
      </Tag>
    );
  }

  return (
    <Tag className={cn("flex flex-wrap gap-x-[0.35em] gap-y-1", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ filter: "blur(12px)", opacity: 0, y: 16 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            "inline-block",
            gradient &&
              "bg-gradient-to-r from-zinc-50 via-violet-200 to-violet-400 bg-clip-text text-transparent",
          )}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
