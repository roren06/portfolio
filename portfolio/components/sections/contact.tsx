"use client";

import { GithubIcon } from "@/components/ui/github-icon";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ResumeButton } from "@/components/ui/resume-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GradientText } from "@/components/ui/gradient-text";
import { useIsDesktop } from "@/lib/use-is-desktop";

function MobileContactLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-foreground ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function ContactSection() {
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();

  const card = (
    <SpotlightCard className="relative overflow-hidden p-8 md:p-12">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      {isDesktop && !reducedMotion ? (
        <p className="text-sm uppercase tracking-[0.2em]">
          <GradientText>Contact</GradientText>
        </p>
      ) : (
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
      )}
      <h2 className="font-display mt-3 max-w-xl text-3xl font-bold md:text-4xl">
        Let&apos;s build something memorable
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Based in {site.location}. Reach out for web development roles,
        collaborations, or to talk shop about products and code.
      </p>

      {!isDesktop ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <MobileContactLink href={`mailto:${site.email}`}>
            <Mail className="h-4 w-4" />
            Email me
          </MobileContactLink>
          <MobileContactLink href={site.linkedin} className="border-border bg-transparent">
            <LinkedinIcon />
            LinkedIn
          </MobileContactLink>
          <MobileContactLink href={site.github} className="border-border bg-transparent">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </MobileContactLink>
        </div>
      ) : (
        <div className="mt-8 flex flex-wrap gap-4">
          <MagneticButton href={`mailto:${site.email}`}>
            <Mail className="h-4 w-4" />
            {site.email}
          </MagneticButton>
          <MagneticButton href={site.linkedin} className="border-border bg-transparent hover:bg-card">
            <LinkedinIcon />
            LinkedIn
          </MagneticButton>
          <MagneticButton href={site.github} className="border-border bg-transparent hover:bg-card">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </MagneticButton>
          <ResumeButton compact />
        </div>
      )}
    </SpotlightCard>
  );

  if (!isDesktop || reducedMotion) {
    return (
      <section id="contact" className="section-pad pb-32">
        {card}
      </section>
    );
  }

  return (
    <section id="contact" className="section-pad pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {card}
      </motion.div>
    </section>
  );
}
