import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero-switcher";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { CredentialsSection } from "@/components/sections/credentials";
import { ContactSection } from "@/components/sections/contact";
import { Aurora } from "@/components/ui/aurora";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <div className="pointer-events-none fixed inset-0 -z-10 hidden opacity-40 md:block">
          <Aurora />
        </div>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
