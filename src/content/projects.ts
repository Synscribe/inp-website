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
  "test-with-tiktok": {
    deliverable: "digital infographics",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "Test with TikTok is an insights series for SEA advertisers to know how to use the platform for optimal business solutions. Besides our usual practice of read-to-comprehend before designing, we challenged ourselves to think of compelling ways to present graphics in the online article format.",
          { br: true },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "To make the content come alive for easier reading and keep the reader focused, our team crafted a series of gif visuals that animate at a reading pace. The format helps break down chunks of information into easy-to-follow guides for the readers’ eyes. ",
        ],
      },
      {
        type: "paragraph",
        parts: [
          "To see the infographics animated, please click ",
          {
            href: "https://www.tiktok.com/business/en-SG/blog/measure-the-real-impact-of-your-tiktok-video-views",
            text: "here",
          },
          ".",
        ],
      },
      { type: "paragraph", parts: ["\u200d", { br: true }] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/test-with-tiktok/test-with-tiktok-1.gif",
        width: 900,
        height: 515,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/test-with-tiktok/test-with-tiktok-2.gif",
        width: 900,
        height: 515,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/test-with-tiktok/test-with-tiktok-3.gif",
        width: 900,
        height: 515,
      },
    ],
  },
  "wsg-sgunited-job-skills-sgujs": {
    deliverable: "event collaterals services / roadshow",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "SGUnited Jobs & Skills is a roving roadshow that helps Singaporeans at different stages of their career to develop and grow their careers in post-pandemic Singapore.",
          { br: true },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "Working in collaboration with Workforce Singapore’s appointed event company, we developed a ‘pathway to jobs and skills’ concept to communicate the many different ways to rise up in one’s career pathway. We opted for the ‘gamification’ art direction to make learning fun, engaging and enjoyable for the audience.",
        ],
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/wsg-sgunited-job-skills-sgujs/wsg-sgunited-job-skills-sgujs-1.jpg",
        width: 2000,
        height: 1283,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/wsg-sgunited-job-skills-sgujs/wsg-sgunited-job-skills-sgujs-2.jpg",
        width: 1518,
        height: 1119,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/wsg-sgunited-job-skills-sgujs/wsg-sgunited-job-skills-sgujs-3.jpg",
        width: 1600,
        height: 1200,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/wsg-sgunited-job-skills-sgujs/wsg-sgunited-job-skills-sgujs-4.jpg",
        width: 1600,
        height: 1200,
      },
    ],
  },
  "npark-green-plan": {
    deliverable: "illustrations / digital interactive : social media / mobile",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "Our client already had a theme (City in Nature) and an idea (using a panoramic image) in mind. The idea works! But being the restless folks we are, there’s always something to improve the concept. And boy, are we glad we found it. ",
          { br: true },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "We were delighted that National Parks Board accepted our proposal to craft a Facebook 360 photo so the viewer can learn more about the Singapore Green Plan 2030. An interactive experience for a whole-of-nation movement to advance Singapore’s national agenda on sustainable development. ",
        ],
      },
      {
        type: "paragraph",
        parts: [
          "To see the interactive version, please click ",
          {
            href: "https://www.facebook.com/nparksbuzz/posts/pfbid027vx2EpyVoJe2iahbTrEocSKNHcBWfGtsBfiNRpeHHHLnJ48TRrLFs8N1gkuzey9jl",
            text: "here",
          },
          ".",
        ],
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/npark-green-plan/npark-green-plan-1.jpg",
        width: 2000,
        height: 1102,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/npark-green-plan/npark-green-plan-2.jpg",
        width: 2000,
        height: 1474,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/thumbnails/singapore-green-plan.gif",
        width: 480,
        height: 683,
      },
    ],
  },
  "mnd-youth-challenge-video": {
    deliverable: "video graphics : social media (facebook)",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "Creating an energetic video to engage our youths is not a challenging brief. However, there was no budget for live filming. Now that is challenging!",
          { br: true },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "Our team kept production costs low to meet the brief by combining stock visuals with past event photos, fast-paced editing coupled with uptempo music, and big typography layout. We breathed a sigh of relief when the client approved the final video with satisfaction.",
        ],
      },
      {
        type: "paragraph",
        parts: [
          "To see the animation, please click ",
          {
            href: "https://www.facebook.com/oneservice.community/videos/283446296283514/",
            text: "here",
          },
          ".",
        ],
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mnd-youth-challenge-video/mnd-youth-challenge-video-1.png",
        width: 3024,
        height: 1964,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mnd-youth-challenge-video/mnd-youth-challenge-video-2.png",
        width: 3024,
        height: 1964,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mnd-youth-challenge-video/mnd-youth-challenge-video-3.png",
        width: 3024,
        height: 1964,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mnd-youth-challenge-video/mnd-youth-challenge-video-4.png",
        width: 3024,
        height: 1964,
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/mnd-youth-challenge-video/mnd-youth-challenge-video-5.png",
        width: 3024,
        height: 1964,
      },
    ],
  },
  "tiktok-travel-unboxed": {
    deliverable: "marketing and promotion : online infographics",
    blocks: [
      {
        type: "paragraph",
        parts: [
          "TikTok was looking to compile collaterals that complement their webinar content for participants to download/revisit. Our additional task was to create designs that matched the travel theme brief. ",
          { br: true },
        ],
      },
      {
        type: "paragraph",
        parts: [
          "The design process includes pouring through the content to distil it into customised infographics that hit the best practices: ",
          { br: true },
          "(1) one central idea, ",
          { br: true },
          "(2) clear data presentation, ",
          { br: true },
          "(3) importance layering—must see/should see/can see, ",
          { br: true },
          "(4) easy for the eye to navigate. ",
        ],
      },
      { type: "paragraph", parts: ["\u200d"] },
      {
        type: "figure",
        align: "fullwidth",
        src: "/media/projects/tiktok-travel-unboxed/tiktok-travel-unboxed-1.png",
        width: 3773,
        height: 1754,
      },
    ],
  },
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
