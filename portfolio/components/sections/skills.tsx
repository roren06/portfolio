"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedPill } from "@/components/ui/animated-pill";
import { FadeInView } from "@/components/ui/fade-in-view";
import { useIsDesktop } from "@/lib/use-is-desktop";

function SkillGroupTitle({ title, index }: { title: string; index: number }) {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return (
      <h3 className="font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
    );
  }

  return (
    <motion.h3
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="font-display text-lg font-semibold text-foreground"
    >
      {title}
    </motion.h3>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeader label="Skills" title="Stack & strengths" />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <FadeInView key={group.title} delay={i * 0.06}>
            <SpotlightCard className="h-full p-6">
              <SkillGroupTitle title={group.title} index={i} />
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <AnimatedPill key={item} label={item} index={i * 6 + j} />
                ))}
              </ul>
            </SpotlightCard>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
