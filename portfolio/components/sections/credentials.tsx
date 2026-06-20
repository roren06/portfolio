"use client";

import Image from "next/image";
import { useState } from "react";
import { GraduationCap, Award, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { credentials, type Credential } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { cn } from "@/lib/utils";

function EducationCard({ item }: { item: Credential }) {
  return (
    <SpotlightCard className="p-6">
      <div className="mb-4 inline-flex rounded-xl border border-accent/30 bg-accent/10 p-3 text-accent">
        <GraduationCap className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-semibold">{item.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{item.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
    </SpotlightCard>
  );
}

function CertificateCard({
  item,
  onPreview,
}: {
  item: Credential;
  onPreview: (item: Credential) => void;
}) {
  return (
    <SpotlightCard className="overflow-hidden p-0">
      <button
        type="button"
        onClick={() => onPreview(item)}
        className="group block w-full text-left"
      >
        {item.image && (
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-background">
            <Image
              src={item.image}
              alt={item.title}
              fill
              unoptimized
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        )}
        <div className="p-5">
          <div className="mb-3 inline-flex rounded-xl border border-accent/30 bg-accent/10 p-2.5 text-accent">
            <Award className="h-4 w-4" />
          </div>
          <h3 className="font-display text-lg font-semibold leading-snug">
            {item.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{item.subtitle}</p>
          <p className="mt-2 text-sm text-muted">{item.detail}</p>
          <p className="mt-3 text-xs text-muted/80">Click to view certificate</p>
        </div>
      </button>
    </SpotlightCard>
  );
}

function CertificateModal({
  item,
  onClose,
}: {
  item: Credential;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-4 md:p-5">
          <div>
            <h3 className="font-display text-lg font-semibold md:text-xl">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{item.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border p-2 text-muted transition-colors hover:bg-background hover:text-foreground"
            aria-label="Close certificate preview"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {item.image && (
          <div className="relative max-h-[60vh] w-full overflow-auto bg-background">
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={900}
              className="h-auto w-full"
            />
          </div>
        )}

        {item.href && (
          <div className="border-t border-border p-4 md:p-5">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
            >
              Verify on Udemy
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function AnimatedBlock({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CredentialsSection() {
  const [preview, setPreview] = useState<Credential | null>(null);
  const [education, ...certificates] = credentials;

  return (
    <section id="credentials" className="section-pad">
      <SectionHeader
        label="Credentials"
        title="Education & certifications"
      />

      <div className="space-y-8">
        <AnimatedBlock className="max-w-2xl">
          <EducationCard item={education} />
        </AnimatedBlock>

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-muted">
            Udemy certificates
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((item, i) => (
              <AnimatedBlock
                key={item.title}
                delay={i * 0.08}
                className={cn(certificates.length === 3 && "lg:col-span-1")}
              >
                <CertificateCard item={item} onPreview={setPreview} />
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <CertificateModal item={preview} onClose={() => setPreview(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
