/**
 * Ink and Pixel project catalogue, migrated from the Webflow CMS collection.
 * Order matches the source collection; it drives the homepage grid, the
 * works index, and previous/next links on project pages.
 */
export type ProjectSummary = {
  slug: string;
  title: string;
  /** Client name as shown on the source (lowercase is intentional). */
  client: string;
  /** Thumbnail under /media/projects/thumbnails. */
  thumbnail: string;
};

export const projects = [
  {
    slug: "npark-paper-models",
    title: "Responsible Pet Owner",
    client: "national parks board",
    thumbnail: "responsible-pet-owner.jpg",
  },
  {
    slug: "lta-annual-report",
    title: "LTA Annual Report 2023",
    client: "land transport authority",
    thumbnail: "lta-annual-report.jpg",
  },
  {
    slug: "mom-world-mental-health-day-2022",
    title: "World Mental Health Day",
    client: "ministry of manpower",
    thumbnail: "world-mental-health-day.jpg",
  },
  {
    slug: "tiktok-travel-unboxed",
    title: "Travel Unboxed",
    client: "tiktok",
    thumbnail: "travel-unboxed.jpg",
  },
  {
    slug: "mnd-youth-challenge-video",
    title: "Youth Challenge",
    client: "ministry of national development",
    thumbnail: "youth-challenge.jpg",
  },
  {
    slug: "wsg-sgunited-job-skills-sgujs",
    title: "SGUnited Jobs & Skills",
    client: "workforce singapore",
    thumbnail: "sgunited-jobs-skills.jpg",
  },
  {
    slug: "npark-green-plan",
    title: "Singapore Green Plan 2030",
    client: "national parks board",
    thumbnail: "singapore-green-plan.gif",
  },
  {
    slug: "test-with-tiktok",
    title: "Test with TikTok",
    client: "tiktok",
    thumbnail: "test-with-tiktok.gif",
  },
] as const satisfies readonly ProjectSummary[];

export function projectThumbnailSrc(project: ProjectSummary): string {
  return `/media/projects/thumbnails/${project.thumbnail}`;
}
