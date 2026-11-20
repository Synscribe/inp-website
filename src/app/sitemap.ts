import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { projectDetails, projects } from "@/content/projects";

// Only the cloned Ink and Pixel pages are listed. Starter template routes
// (/uses, /blog, /contact, /privacy, /terms) remain reachable but are
// noindexed and deliberately left out (decision 2026-11-20).
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/our-works",
    "/team",
    "/feature",
    ...projects
      .filter((project) => projectDetails[project.slug])
      .map((project) => `/project/${project.slug}`),
  ];

  return routes.map((route) => ({ url: `${siteConfig.url}${route}` }));
}
