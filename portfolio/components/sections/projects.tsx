"use client";

import { GithubIcon } from "@/components/ui/github-icon";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeader } from "@/components/ui/section-header";
import { TiltCard } from "@/components/ui/tilt-card";
import { FadeInView } from "@/components/ui/fade-in-view";
import { ProjectDetails } from "@/components/sections/project-details";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeader
        label="Projects"
        title="Selected work"
        description="Live demos and open-source repositories — each built end-to-end with production-minded UX."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeInView key={project.slug} delay={index * 0.08}>
            <TiltCard className="h-full">
              <SpotlightCard className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>

                  <ProjectDetails project={project} />

                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <MagneticButton href={project.demoUrl} className="px-4 py-2 text-xs">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live demo
                    </MagneticButton>
                    <MagneticButton
                      href={project.repoUrl}
                      className="border-border bg-transparent px-4 py-2 text-xs hover:bg-card"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Code
                    </MagneticButton>
                  </div>
                </div>
              </SpotlightCard>
            </TiltCard>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
