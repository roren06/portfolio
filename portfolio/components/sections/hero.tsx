"use client";

import { GithubIcon } from "@/components/ui/github-icon";
import { ArrowDown, MapPin } from "lucide-react";
import { Aurora } from "@/components/ui/aurora";
import { BlurText } from "@/components/ui/blur-text";
import { GradientText } from "@/components/ui/gradient-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ResumeButton } from "@/components/ui/resume-button";
import { FadeIn } from "@/components/ui/fade-in";
import { heroContent, site } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20"
    >
      <Aurora />
      <div className="section-pad relative z-10">
        <FadeIn>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent/90">
            {heroContent.label}
          </p>
        </FadeIn>

        <BlurText
          text={site.name}
          gradient
          className="font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        />

        <FadeIn delay={0.35} className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-xl font-medium md:text-2xl">
            <GradientText>{site.role}</GradientText>
          </p>
          {site.openToWork && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </span>
          )}
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent/80" />
            {site.location}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            {heroContent.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.6} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="#projects">View projects</MagneticButton>
          <ResumeButton />
          <MagneticButton href={site.github} className="border-border bg-transparent hover:bg-card">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </MagneticButton>
        </FadeIn>

        <FadeIn delay={0.7}>
          <a
            href="#about"
            className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
