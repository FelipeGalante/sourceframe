import React from "react";
import Link from "next/link";

import type { ProjectSwitcherItem } from "@/lib/projects/catalog";

export function ProjectSwitcher({ projects }: { projects: ProjectSwitcherItem[] }) {
  if (projects.length <= 1) {
    return null;
  }

  return (
    <nav className="pm-project-switcher" aria-label="Projects">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={project.href}
          className="pm-project-switcher-item"
          aria-current={project.active ? "page" : undefined}
          data-active={project.active}
        >
          <span className="pm-project-switcher-title">{project.title}</span>
          <span className="pm-project-switcher-subtitle">{project.subtitle}</span>
        </Link>
      ))}
    </nav>
  );
}
