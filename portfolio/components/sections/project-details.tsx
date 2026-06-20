"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

export function ProjectDetails({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:bg-accent/5 md:hidden"
      >
        {open ? "Hide details" : "View project details"}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-accent transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "space-y-3 rounded-xl border border-border/60 bg-background/40 p-4 text-sm",
          open ? "block" : "hidden md:block",
        )}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Problem
          </p>
          <p className="mt-1 leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            My role
          </p>
          <p className="mt-1 leading-relaxed text-muted">{project.role}</p>
        </div>
        <ul className="space-y-1.5">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
