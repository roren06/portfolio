"use client";

import { FileText } from "lucide-react";
import { site } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

type ResumeButtonProps = {
  className?: string;
  compact?: boolean;
  /** Plain link styled for mobile hero/contact — no magnetic hover */
  mobile?: boolean;
};

const mobileLinkClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-foreground";

const mobileDisabledClass =
  "inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-sm font-medium text-muted";

export function ResumeButton({ className, compact, mobile }: ResumeButtonProps) {
  const label = compact ? "Resume" : "Download resume";
  const disabledLabel = compact ? "Resume soon" : "Resume — coming soon";

  if (!site.resumeAvailable) {
    return (
      <span
        title="Add resume.pdf to public/ and set resumeAvailable: true in lib/data.ts"
        className={cn(mobile ? mobileDisabledClass : undefined, className, !mobile && [
          "inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border/60 bg-card/40 px-6 py-3 text-sm font-medium text-muted",
        ])}
      >
        <FileText className="h-4 w-4 opacity-60" />
        {disabledLabel}
      </span>
    );
  }

  if (mobile) {
    return (
      <a
        href={site.resumeUrl}
        download
        className={cn(mobileLinkClass, className)}
      >
        <FileText className="h-4 w-4" />
        {label}
      </a>
    );
  }

  return (
    <MagneticButton href={site.resumeUrl} className={className} download>
      <FileText className="h-4 w-4" />
      {label}
    </MagneticButton>
  );
}
