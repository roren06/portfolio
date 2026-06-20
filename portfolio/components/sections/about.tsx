"use client";

import { useState } from "react";
import { aboutContent, site } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeader } from "@/components/ui/section-header";

const profileSrc = `${site.profileImage}?v=${site.profileImageVersion}`;

function ProfilePhoto({ onError }: { onError: () => void }) {
  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-accent/15 blur-2xl"
      />
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-accent/30 bg-zinc-800 shadow-[0_0_40px_-12px_rgba(139,92,246,0.4)]">
        {/* Native img — most reliable on mobile Safari over local network */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profileSrc}
          alt={site.name}
          className="h-full w-full object-cover object-[center_25%]"
          onError={onError}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-pad">
      <SectionHeader label="About" title={aboutContent.heading} />

      <SpotlightCard className="p-6 md:p-10 lg:p-12">
        <div className="grid gap-8 md:grid-cols-[minmax(260px,360px)_1fr] md:items-center md:gap-14">
          <div className="flex justify-center md:justify-start">
            {!imgError ? (
              <ProfilePhoto onError={() => setImgError(true)} />
            ) : (
              <div className="flex aspect-[3/4] w-full max-w-[260px] items-center justify-center rounded-3xl border border-border bg-gradient-to-br from-accent/20 to-background text-4xl font-bold text-accent">
                {site.initials}
              </div>
            )}
          </div>

          <div className="space-y-5 text-base text-muted leading-relaxed md:text-[1.05rem]">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
