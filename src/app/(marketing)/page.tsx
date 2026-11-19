import type { CSSProperties } from "react";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";

import { CursorFollower } from "./_components/cursor-follower";
import { SectionTracker } from "./_components/section-tracker";
import styles from "./home.module.css";

// The source title is the bare brand name and the source has no meta
// description; the description reuses the source hero copy verbatim.
export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  title: { absolute: siteConfig.name },
};

// Logos are small source JPEGs (487px wide); serving them as-is keeps the
// grey-to-colour hover identical to the source.
const clients: ReadonlyArray<{ file: string; alt: string; height?: number }> = [
  { file: "tiktok", alt: "TikTok for Business logo" },
  { file: "bytedance", alt: "ByteDance logo" },
  { file: "oneservice", alt: "OneService logo" },
  { file: "pub", alt: "PUB logo" },
  { file: "edb", alt: "EDB Singapore logo" },
  { file: "caas", alt: "CAAS logo" },
  { file: "wsg", alt: "Workforce Singapore logo" },
  { file: "skillsfuture", alt: "SkillsFuture logo" },
  { file: "google", alt: "Google logo" },
  { file: "enterprisesg", alt: "Enterprise Singapore logo" },
  { file: "ncss", alt: "NCSS logo" },
  { file: "cea", alt: "Council for Estate Agencies logo", height: 242 },
];

// Each row repeats once so the loop never shows an empty gap. Distances and
// durations match the source interactions.
const serviceRows = [
  {
    text: "art direction. brand strategy. brand visual system. campaign. copywriting. content creation.",
    duration: "19s",
    distance: "-2846px",
  },
  {
    text: "creative direction. email marketing. editorial. exhibition. graphic design. illustration. infographics. motion graphics.",
    duration: "17s",
    offset: true,
  },
  {
    text: "photography. reports. storyboarding. UI. videography. wayfinding. web development.",
    duration: "20s",
    distance: "-2420px",
  },
] as const;

const works = [
  {
    slug: "npark-paper-models",
    title: "Responsible Pet Owner",
    image: "responsible-pet-owner.jpg",
  },
  {
    slug: "lta-annual-report",
    title: "LTA Annual Report 2023",
    image: "lta-annual-report.jpg",
  },
  {
    slug: "mom-world-mental-health-day-2022",
    title: "World Mental Health Day",
    image: "world-mental-health-day.jpg",
  },
  {
    slug: "tiktok-travel-unboxed",
    title: "Travel Unboxed",
    image: "travel-unboxed.jpg",
  },
  {
    slug: "mnd-youth-challenge-video",
    title: "Youth Challenge",
    image: "youth-challenge.jpg",
  },
  {
    slug: "wsg-sgunited-job-skills-sgujs",
    title: "SGUnited Jobs & Skills",
    image: "sgunited-jobs-skills.jpg",
  },
  {
    slug: "npark-green-plan",
    title: "Singapore Green Plan 2030",
    image: "singapore-green-plan.gif",
  },
  {
    slug: "test-with-tiktok",
    title: "Test with TikTok",
    image: "test-with-tiktok.gif",
  },
] as const;

// Matches the width pattern in home.module.css (40/60, 65/35, 100, 33×3).
const workSizes = [
  "(max-width: 568px) 100vw, 40vw",
  "(max-width: 568px) 100vw, 60vw",
  "(max-width: 568px) 100vw, 65vw",
  "(max-width: 568px) 100vw, 35vw",
  "(max-width: 568px) 100vw, 100vw",
  "(max-width: 568px) 100vw, 33vw",
  "(max-width: 568px) 100vw, 33vw",
  "(max-width: 568px) 100vw, 33vw",
];

export default function HomePage() {
  return (
    <>
      <div aria-hidden="true" className={styles.splash}>
        <div className={styles.splashLoading} />
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative splash mark at source size */}
        <img
          alt=""
          className={styles.splashLogo}
          height={565}
          src="/media/brand/logo-splash.png"
          width={766}
        />
        <div className={styles.splashCircle} />
      </div>
      <CursorFollower />
      <div aria-hidden="true" className={styles.square} />
      <div aria-hidden="true" className={styles.circle} />
      <SectionTracker linkedinUrl={siteConfig.social.linkedin} />

      <main id="main-content">
        <section className={styles.section} id="hero">
          <div className={styles.introHeadline}>
            <h1 className={styles.heading}>hey</h1>
            {/* eslint-disable-next-line @next/next/no-img-element -- brand full stop glyph */}
            <img
              alt=""
              className={styles.fullStop}
              height={21}
              src="/media/shared/full-stop.svg"
              width={22}
            />
          </div>
          <p className={styles.introDesc}>{siteConfig.description}</p>
        </section>

        <div className={styles.divider} />

        <section aria-label="Clients" className={styles.section} id="clients">
          <div className={styles.clients}>
            {clients.map((client) => (
              <Image
                alt={client.alt}
                className={styles.clientLogo}
                height={client.height ?? 226}
                key={client.file}
                src={`/media/home/clients/client-${client.file}.jpg`}
                unoptimized
                width={487}
              />
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        <section
          aria-label="What we do"
          className={styles.section}
          id="services"
        >
          <div className={styles.services}>
            {serviceRows.map((row) => (
              <div
                className={cn(
                  styles.liner,
                  "offset" in row && styles.linerOffset,
                )}
                key={row.text}
                style={
                  {
                    "--marquee-duration": row.duration,
                    "--marquee-distance":
                      "distance" in row ? row.distance : undefined,
                  } as CSSProperties
                }
              >
                <p className={styles.linerText}>{row.text}</p>
                <p aria-hidden="true" className={styles.linerText}>
                  {row.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        <section
          aria-label="Our works"
          className={styles.section}
          id="homepage-work"
        >
          <ul className={styles.worksList} role="list">
            {works.map((work, index) => (
              <li className={styles.workItem} key={work.slug}>
                <Link
                  className={styles.workLink}
                  href={`/project/${work.slug}`}
                >
                  <div className={styles.workOverlay}>
                    <h2 className={styles.workTitle}>{work.title}</h2>
                  </div>
                  <div className={styles.workMedia}>
                    <Image
                      alt=""
                      className={styles.workImage}
                      fill
                      sizes={workSizes[index]}
                      src={`/media/home/works/${work.image}`}
                      unoptimized={work.image.endsWith(".gif")}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link className={styles.viewMore} href="/our-works">
            <span className={cn(styles.viewMoreInner, "block")}>
              <span className={styles.viewMoreText}>view more</span>
              <span className={styles.viewMoreIcon}>
                {/* eslint-disable-next-line @next/next/no-img-element -- source arrow icon */}
                <img
                  alt=""
                  className={styles.arrow}
                  height={24}
                  src="/media/shared/arrow-next-blue.svg"
                  width={25}
                />
                {/* eslint-disable-next-line @next/next/no-img-element -- source arrow icon */}
                <img
                  alt=""
                  className={cn(styles.arrow, styles.arrowHover)}
                  height={24}
                  src="/media/shared/arrow-next-white.svg"
                  width={25}
                />
              </span>
            </span>
            <span className={styles.viewMoreFill} />
          </Link>
        </section>
      </main>

      <div className={styles.emailRail}>
        <a
          className={styles.emailLink}
          href={`mailto:${siteConfig.contact.email}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className={styles.emailWrapper}>
            <span className={styles.emailText}>{siteConfig.contact.email}</span>
            <span aria-hidden="true" className={styles.emailText}>
              {siteConfig.contact.email}
            </span>
          </span>
        </a>
      </div>
    </>
  );
}
