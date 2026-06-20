"use client";

import { FileText } from "lucide-react";
import { site } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

type ResumeButtonProps = {
  className?: string;
  compact?: boolean;
};

export function ResumeButton({ className, compact }: ResumeButtonProps) {
  if (site.resumeAvailable) {
    return (
      <MagneticButton
        href={site.resumeUrl}
        className={className}
        download
      >
        <FileText className="h-4 w-4" />
        {compact ? "Resume" : "Download resume"}
      </MagneticButton>
    );
  }

  return (
    <span
      title="Add resume.pdf to public/ and set resumeAvailable: true in lib/data.ts"
      className={cn(
        "inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border/60 bg-card/40 px-6 py-3 text-sm font-medium text-muted",
        className,
      )}
    >
      <FileText className="h-4 w-4 opacity-60" />
      {compact ? "Resume soon" : "Resume — coming soon"}
    </span>
  );
}
