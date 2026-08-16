export const site = {
  name: "Lauren John S. Angeles",
  role: "Web Developer",
  github: "https://github.com/roren06",
  linkedin: "https://www.linkedin.com/in/laurenangeles",
  email: "angeleslaurenjohn@gmail.com",
  location: "Angeles City, Pampanga",
  graduationDate: "April 30, 2025",
  openToWork: true,
  initials: "LJA",
  profileImage: "/profile.png",
  /** Bump this number whenever you replace profile.png to bust browser cache */
  profileImageVersion: 4,
  profileStyle: "photo" as "sticker" | "photo",
  /** Set true after adding public/resume.pdf */
  resumeAvailable: true,
  resumeUrl: "/resume.pdf",
  /** Bump whenever you replace public/resume.pdf to bust browser cache */
  resumeVersion: 4,
} as const;

export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  role: string;
  highlights: string[];
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    slug: "sillage",
    title: "Sillage",
    description:
      "Immersive fragrance discovery — mood-driven browsing, note pyramids, rotation ranking, and shareable scent pages.",
    problem:
      "Fragrance discovery is overwhelming — users need a way to explore by mood, compare scents, and save favorites without a cluttered catalog.",
    role: "Sole developer — UI/UX, front-end architecture, catalog system, and shareable routing.",
    highlights: [
      "Built a 28-scent catalog with mood imagery, filters, and shareable `/scent/[slug]` pages.",
      "Designed immersive hero transitions and a drag-to-rank rotation feature.",
      "Shipped on Next.js 16 with responsive layouts and production deployment on Vercel.",
    ],
    tags: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://sillage-sooty.vercel.app/",
    repoUrl: "https://github.com/roren06/Sillage",
    imageUrl:
      "https://raw.githubusercontent.com/roren06/Sillage/master/docs/screenshots/01-hero.png",
  },
  {
    slug: "clientforge",
    title: "ClientForge",
    description:
      "Multi-tenant client portal SaaS — projects, deliverables, approvals, analytics, and scoped client access.",
    problem:
      "Freelancers and agencies juggle client work across scattered tools — they need one workspace for deliverables, approvals, and client visibility.",
    role: "Full-stack developer — multi-tenant architecture, auth, API design, and client portal UX.",
    highlights: [
      "Implemented owner/client roles with scoped portal access and seeded demo accounts.",
      "Built deliverable workflows, notifications, analytics, and Cloudinary file uploads.",
      "Added validation, rate limiting, route boundaries, and unit tests for core flows.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "Multi-tenant"],
    demoUrl: "https://clientforge-nu.vercel.app",
    repoUrl: "https://github.com/roren06/clientforge",
    imageUrl:
      "https://raw.githubusercontent.com/roren06/clientforge/master/public/screenshots/landing.png",
  },
  {
    slug: "job-tracker",
    title: "Job Tracker",
    description:
      "Full-stack Kanban job application tracker with analytics dashboard and per-application AI writing assistant.",
    problem:
      "Job searching lacks structure — applicants lose track of stages, follow-ups, and tailored materials across many companies.",
    role: "Full-stack developer — Kanban UX, REST API, database schema, and AI assistant integration.",
    highlights: [
      "Shipped drag-and-drop pipeline stages from Saved through Offer/Rejected.",
      "Built analytics for funnel conversion, volume trends, and application streaks.",
      "Integrated per-application AI tools for cover letters, follow-ups, and interview prep.",
    ],
    tags: ["React", "Express", "Prisma", "PostgreSQL", "OpenAI"],
    demoUrl: "https://job-tracker-tau-weld.vercel.app",
    repoUrl: "https://github.com/roren06/job-tracker",
    imageUrl:
      "https://raw.githubusercontent.com/roren06/job-tracker/main/docs/screenshots/landing.png",
  },
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Practice",
    items: ["Git", "Vercel", "Testing", "UI/UX", "Agile"],
  },
] as const;

export type Credential = {
  title: string;
  subtitle: string;
  detail: string;
  image?: string;
  href?: string;
};

export const heroContent = {
  label: "Portfolio",
  tagline:
    "Web developer crafting responsive, production-ready sites and full-stack applications — where intentional design, clean TypeScript, and disciplined engineering meet real-world delivery.",
} as const;

export const aboutContent = {
  heading: "Web development, built with intent",
  paragraphs: [
    "I'm Lauren John S. Angeles, a web developer specializing in modern, responsive websites and full-stack web applications. I earned my BSIT in Web Development from Holy Angel University as a Dean's Lister, combining strong fundamentals with hands-on experience shipping real products.",
    "My focus is the full web stack — from pixel-level UI and accessible front-end architecture to APIs, databases, and deployment. I care about performance, clean TypeScript, and interfaces that feel intentional: fast load times, clear hierarchy, and interactions that guide users without getting in the way.",
    "Recent work includes Sillage, an immersive fragrance discovery experience; ClientForge, a multi-tenant client portal for agencies; and a full-stack job tracker with Kanban workflows and AI-assisted writing. Each project reflects the same standard: design with purpose, engineer with discipline, and deliver something production-ready.",
    "Beyond coursework, I've completed intensive Udemy training in React, Node.js, and PostgreSQL — over 120 hours of structured learning applied directly in my projects. I'm looking for web development roles where I can contribute meaningful work and continue growing as a developer.",
  ],
} as const;

export const credentials: Credential[] = [
  {
    title: "Holy Angel University",
    subtitle: "BS Information Technology · Web Development · Dean's Lister",
    detail:
      "Graduated April 30, 2025 with academic distinction. Coursework centered on web technologies, software engineering, and project-based delivery.",
  },
  {
    title: "React — The Complete Guide (incl. Next.js, Redux)",
    subtitle: "Udemy · Academind · 71.5 hours",
    detail: "Completed June 2026",
    image: "/certs/cert-1.png",
    href: "https://ude.my/UC-633fefe1-99c2-4c61-8f02-cad7efb1105b",
  },
  {
    title: "The Complete Node.js Developer Course (3rd Edition)",
    subtitle: "Udemy · Andrew Mead · 35 hours",
    detail: "Completed March 2026",
    image: "/certs/cert-2.png",
    href: "https://ude.my/UC-9e7f03fd-ed5a-444c-8a42-aed653cecbd5",
  },
  {
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    subtitle: "Udemy · Stephen Grider · 22 hours",
    detail: "Completed November 2025",
    image: "/certs/cert-3.png",
    href: "https://ude.my/UC-a64f04f4-986f-497e-b240-844398cc95e5",
  },
];
