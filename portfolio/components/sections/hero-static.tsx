import { ArrowDown, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/ui/github-icon";
import { heroContent, site } from "@/lib/data";

function MobileLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-medium text-foreground ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function HeroStatic() {
  return (
    <section
      id="hero"
      className="relative flex min-h-0 flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="section-pad relative z-10 !py-12">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">
          {heroContent.label}
        </p>

        <h1 className="font-display text-4xl font-bold leading-tight text-foreground">
          {site.name}
        </h1>

        <p className="mt-4 text-xl font-medium text-violet-300">{site.role}</p>

        {site.openToWork && (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Open to opportunities
          </p>
        )}

        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
          {site.location}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {heroContent.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <MobileLink href="#projects">View projects</MobileLink>
          <MobileLink href={site.github} className="border-border bg-transparent">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </MobileLink>
        </div>

        <a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 text-sm text-muted"
        >
          Scroll
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
