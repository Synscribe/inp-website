import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import styles from "./rails.module.css";

type SectionRailProps = {
  /** Label content shown beside the rail (static text or animated labels). */
  children: ReactNode;
  /** Inner pages raise the rail above content (`.left-section-tracker.inner`). */
  inner?: boolean;
  /**
   * `switch`: source `link-block-9` (homepage, feature) changes display by
   * breakpoint. `inline`: source `link-block-10/11` stays inline-block.
   */
  linkDisplay: "switch" | "inline";
};

/** Fixed left rail: LinkedIn mark, divider rail, and a rotated section label. */
export function SectionRail({
  children,
  inner = false,
  linkDisplay,
}: SectionRailProps) {
  return (
    <div className={cn(styles.tracker, inner && styles.trackerInner)}>
      <div className={styles.trackerContainer}>
        <div className={styles.inLogo}>
          <a
            aria-label={`${siteConfig.name} on LinkedIn`}
            className={cn(
              styles.inLink,
              linkDisplay === "switch" && styles.inLinkSwitch,
            )}
            href={siteConfig.social.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          />
        </div>
        <div className={styles.trackerRail} />
        <div aria-hidden="true" className={styles.trackerHeading}>
          {children}
        </div>
      </div>
    </div>
  );
}
