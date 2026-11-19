import { Fragment } from "react";

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { EmailRail } from "@/components/email-rail";
import { PillLink } from "@/components/pill-link";
import { SectionRail } from "@/components/section-rail";
import {
  type ProjectBlock,
  type ProjectInline,
  type ProjectSlug,
  projectDetails,
  projects,
} from "@/content/projects";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

import styles from "./project.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => projectDetails[project.slug])
    .map((project) => ({ slug: project.slug }));
}

function findProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const detail = projectDetails[slug as ProjectSlug];
  if (index < 0 || !detail) return undefined;

  // Previous/next wrap around the collection, as on the source.
  const count = projects.length;
  return {
    project: projects[index],
    detail,
    previous: projects[(index - 1 + count) % count],
    next: projects[(index + 1) % count],
  };
}

function inlineText(parts: readonly ProjectInline[]): string {
  return parts
    .map((part) =>
      typeof part === "string" ? part : "text" in part ? part.text : " ",
    )
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

// The source has no meta descriptions; use the body's opening paragraph.
function describe(blocks: readonly ProjectBlock[]): string {
  const first = blocks.find(
    (block) => block.type === "paragraph" && inlineText(block.parts),
  );
  const text = first?.type === "paragraph" ? inlineText(first.parts) : "";
  if (text.length <= 160) return text;
  return `${text.slice(0, text.lastIndexOf(" ", 157))}…`;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const found = findProject(slug);
  if (!found) return {};

  // Source titles are the bare project title with no brand suffix.
  return {
    ...createPageMetadata({
      title: found.project.title,
      description: describe(found.detail.blocks),
      path: `/project/${slug}`,
    }),
    title: { absolute: found.project.title },
  };
}

const figureAlign = {
  fullwidth: styles.figureFullwidth,
  floatleft: styles.figureFloatleft,
  normal: styles.figureNormal,
} as const;

function Inline({ parts }: { parts: readonly ProjectInline[] }) {
  return parts.map((part, index) => {
    if (typeof part === "string")
      return <Fragment key={index}>{part}</Fragment>;
    if ("br" in part) return <br key={index} />;
    return (
      <a href={part.href} key={index}>
        {part.text}
      </a>
    );
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const found = findProject(slug);
  if (!found) notFound();

  const { project, detail, previous, next } = found;

  return (
    <>
      <SectionRail inner linkDisplay="inline">
        the works
      </SectionRail>
      <EmailRail />

      <main className={styles.section} id="main-content">
        <div className={styles.keyDetails}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.subtitles}>
            <h2 className={styles.client}>{project.client}</h2>
            <p className={styles.deliverable}>{detail.deliverable}</p>
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.richText}>
            {detail.blocks.map((block, index) =>
              block.type === "paragraph" ? (
                <p key={index}>
                  <Inline parts={block.parts} />
                </p>
              ) : (
                <figure
                  className={cn(styles.figure, figureAlign[block.align])}
                  key={index}
                >
                  <div>
                    <Image
                      alt=""
                      className={styles.figureImage}
                      height={block.height}
                      sizes={
                        block.align === "fullwidth"
                          ? "(max-width: 991px) 75vw, 60vw"
                          : "(max-width: 991px) 45vw, 36vw"
                      }
                      src={block.src}
                      // Keep the original's exact ratio; resized variants
                      // round their dimensions and drift the layout.
                      style={{
                        aspectRatio: `${block.width} / ${block.height}`,
                      }}
                      unoptimized={block.src.endsWith(".gif")}
                      width={block.width}
                    />
                  </div>
                </figure>
              ),
            )}
          </div>
        </div>

        <nav aria-label="Project navigation" className={styles.nav}>
          <PillLink href="/our-works" label="view more" />
          <PillLink
            accessibleLabel={`Previous project: ${previous.title}`}
            direction="previous"
            href={`/project/${previous.slug}`}
          />
          <PillLink
            accessibleLabel={`Next project: ${next.title}`}
            direction="next"
            href={`/project/${next.slug}`}
          />
        </nav>
      </main>
    </>
  );
}
