"use client";

import { useIsDesktop } from "@/lib/use-is-desktop";
import { HeroStatic } from "@/components/sections/hero-static";
import { HeroSection } from "@/components/sections/hero";

export function Hero() {
  const isDesktop = useIsDesktop();
  return isDesktop ? <HeroSection /> : <HeroStatic />;
}
