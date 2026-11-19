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

/** Inline content of a project paragraph: text, line breaks, and links. */
export type ProjectInline =
  string | { br: true } | { href: string; text: string };

/**
 * Body blocks migrated from the Webflow rich-text field. Paragraphs that
 * contain only "‍" are the source's blank spacer paragraphs; figure
 * alignment uses the source's rich-text alignment names.
 */
export type ProjectBlock =
  | { type: "paragraph"; parts: readonly ProjectInline[] }
  | {
      type: "figure";
      align: "fullwidth" | "floatleft" | "normal";
      src: string;
      width: number;
      height: number;
    };

export type ProjectDetail = {
  /** Deliverable line under the client name. */
  deliverable: string;
  blocks: readonly ProjectBlock[];
};

export type ProjectSlug = (typeof projects)[number]["slug"];

// Migrated project bodies. Projects without an entry are not published yet.
export const projectDetails: Partial<Record<ProjectSlug, ProjectDetail>> = {
  "mom-world-mental-health-day-2022": {
    deliverable: "print (cards and booklet) / social media (facebook)",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "How do we raise awareness of mental health issues among our migrant workers without stereotypes and discrimination against a specific race? ",
          { br: true },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "Our solution is to illustrate original comic characters without using skin colour. We also carefully crafted characters with neutral facial features, hair and attire. Besides the card, deliverables include a set of comic series (written by the team and translated into various languages), and social media posts.",
        ],
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mom-world-mental-health-day-2022/mom-world-mental-health-day-2022-1.jpg",
        width: 2000,
        height: 1519,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mom-world-mental-health-day-2022/mom-world-mental-health-day-2022-2.jpg",
        width: 2000,
        height: 1461,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mom-world-mental-health-day-2022/mom-world-mental-health-day-2022-3.jpg",
        width: 1680,
        height: 1211,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mom-world-mental-health-day-2022/mom-world-mental-health-day-2022-4.jpg",
        width: 2000,
        height: 1400,
      },
      { type: "paragraph", parts: ["\u200d"] },
    ],
  },
  "lta-annual-report": {
    deliverable: "publication : online (PDF)",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "The report frames Singapore’s land transport system as a living, breathing network with a steady pulse that keeps the city in motion. The concept is carried through in the copy, positioning transport as an essential part of daily life. Infographics and well-placed stats highlight key achievements, helping to guide the reader through LTA’s progress with clarity and focus.",
        ],
      },
      {
        type: "paragraph",
        parts: [
          "To see the full annual report, please click ",
          {
            href: "https://www.lta.gov.sg/content/dam/ltagov/who_we_are/statistics_and_publications/report/pdf/LTA_AR2223.pdf",
            text: "here",
          },
          ".",
        ],
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/lta-annual-report/lta-annual-report-1.jpg",
        width: 4287,
        height: 2554,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/lta-annual-report/lta-annual-report-2.jpg",
        width: 4287,
        height: 2554,
      },
    ],
  },
  "npark-paper-models": {
    deliverable: "marketing and promotion : print (paper craft activity)",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "To help primary school children learn the proper ways to handle five common pets, we worked with National Parks Board to heighten sensory learning by adding the sense of touch.",
          { br: true },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "We achieved this by creating tear-out-and-assemble activities that make the learning experience fun for the audience. The series also doubles as a set of appealing home/room displays for the child to use as backgrounds for their imaginative plays. ",
        ],
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "floatleft",
        src: "/media/projects/npark-paper-models/npark-paper-models-1.jpg",
        width: 8000,
        height: 5778,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "normal",
        src: "/media/projects/npark-paper-models/npark-paper-models-2.jpg",
        width: 4824,
        height: 3506,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "floatleft",
        src: "/media/projects/npark-paper-models/npark-paper-models-3.jpg",
        width: 4854,
        height: 3506,
      },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/npark-paper-models/npark-paper-models-4.jpg",
        width: 4200,
        height: 3074,
      },
      { type: "paragraph", parts: ["\u200d"] },
    ],
  },
};
