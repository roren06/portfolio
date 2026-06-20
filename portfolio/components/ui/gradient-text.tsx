"use client";

import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
};

export function GradientText({
  children,
  className,
  animate = true,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-violet-300 via-fuchsia-200 to-violet-400 bg-clip-text text-transparent",
        animate && "animate-gradient-shift bg-[length:200%_auto]",
        className,
      )}
    >
      {children}
    </span>
  );
}
