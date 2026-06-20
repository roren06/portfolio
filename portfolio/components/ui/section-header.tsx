"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BlurText } from "@/components/ui/blur-text";
import { GradientText } from "@/components/ui/gradient-text";
import { useIsDesktop } from "@/lib/use-is-desktop";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  const isDesktop = useIsDesktop();
  const reducedMotion = useReducedMotion();

  if (!isDesktop || reducedMotion) {
    return (
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">{label}</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-foreground">
          {title}
        </h2>
        {description && <p className="mt-4 text-muted">{description}</p>}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 max-w-2xl"
    >
      <p className="text-sm uppercase tracking-[0.2em]">
        <GradientText>{label}</GradientText>
      </p>
      <BlurText
        as="h2"
        text={title}
        delay={0.1}
        className="font-display mt-3 text-3xl font-bold text-foreground md:text-4xl"
      />
      {description && <p className="mt-4 text-muted">{description}</p>}
    </motion.div>
  );
}
