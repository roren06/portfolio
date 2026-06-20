"use client";

import { cn } from "@/lib/utils";

type AuroraProps = {
  className?: string;
};

export function Aurora({ className }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="aurora-layer absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),transparent_65%)] blur-3xl" />
      <div
        className="aurora-layer absolute -bottom-1/3 -right-1/4 h-[65%] w-[65%] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="aurora-layer absolute left-1/3 top-1/2 h-[50%] w-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.12),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_55%)]" />
    </div>
  );
}
