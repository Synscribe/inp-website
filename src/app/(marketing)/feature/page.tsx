import type { Metadata } from "next";

import { CursorFollower } from "@/components/cursor-follower";
import { SectionRail } from "@/components/section-rail";
import { createPageMetadata } from "@/lib/seo";

import styles from "./feature.module.css";

// The source page is a holding message titled "Feature" with no meta
// description; the description reuses its visible copy.
export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Feature",
    description: "We are currently updating this page. Come back again soon.",
    path: "/feature",
  }),
  title: { absolute: "Feature" },
};

export default function FeaturePage() {
  return (
    <>
      <CursorFollower smoothing={85} />
      <SectionRail inner linkDisplay="switch">
        the talks
      </SectionRail>

      <main id="main-content">
        <section className={styles.section}>
          {/* The source page has no visible heading. */}
          <h1 className="sr-only">Feature</h1>
          <p className={styles.message}>
            We are currently updating this page.
            <br />
            Come back again soon. 🙂{" "}
          </p>
        </section>
      </main>
    </>
  );
}
