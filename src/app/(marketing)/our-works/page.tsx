import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CursorFollower } from "@/components/cursor-follower";
import { EmailRail } from "@/components/email-rail";
import { SectionRail } from "@/components/section-rail";
import { projects, projectThumbnailSrc } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";

import styles from "./works.module.css";

const intro =
  "Work is demanding. Good work? More so. And we are committed to good work. It is our promise.";

// Source title is "Our works" with no brand suffix and no meta description;
// the description reuses the page's intro copy verbatim.
export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Our works",
    description: intro,
    path: "/our-works",
  }),
  title: { absolute: "Our works" },
};

// Matches the width pattern in works.module.css (40/60, 65/35, 100, 33×3).
const imageSizes = [
  "(max-width: 568px) 100vw, 40vw",
  "(max-width: 568px) 100vw, 60vw",
  "(max-width: 568px) 100vw, 65vw",
  "(max-width: 568px) 100vw, 35vw",
  "(max-width: 568px) 100vw, 100vw",
  "(max-width: 568px) 100vw, 33vw",
  "(max-width: 568px) 100vw, 33vw",
  "(max-width: 568px) 100vw, 33vw",
];

export default function OurWorksPage() {
  return (
    <>
      <CursorFollower smoothing={87} />

      <main id="main-content">
        <section className={styles.section}>
          <div className={styles.innerPage}>
            <div className={styles.introHeadline}>
              <h1 className={styles.heading}>
                our
                <br />
                works
              </h1>
              {/* eslint-disable-next-line @next/next/no-img-element -- brand full stop glyph */}
              <img
                alt=""
                className={styles.fullStop}
                height={21}
                src="/media/shared/full-stop.svg"
                width={22}
              />
            </div>
            <p className={styles.introDesc}>{intro}</p>
          </div>
          <SectionRail inner linkDisplay="inline">
            the talks
          </SectionRail>
        </section>

        <section aria-label="Projects" className={styles.section}>
          <ul className={styles.list} role="list">
            {projects.map((project, index) => (
              <li className={styles.item} key={project.slug}>
                <Link className={styles.link} href={`/project/${project.slug}`}>
                  <h2 className={styles.title}>{project.title}</h2>
                  <div className={styles.imageWrapper}>
                    <Image
                      alt=""
                      className={styles.image}
                      fill
                      sizes={imageSizes[index]}
                      src={projectThumbnailSrc(project)}
                      unoptimized={project.thumbnail.endsWith(".gif")}
                    />
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.client}>{project.client}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <EmailRail />
    </>
  );
}
