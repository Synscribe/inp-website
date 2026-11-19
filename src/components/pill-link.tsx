import Link from "next/link";

import { cn } from "@/lib/utils";

import styles from "./pill-link.module.css";

type PillLinkProps = {
  href: string;
  /** `inline`: homepage pill. `flex`: project-page pill. */
  variant?: "inline" | "flex";
} & (
  | { label: string; direction?: never; accessibleLabel?: never }
  | { label?: never; direction: "previous" | "next"; accessibleLabel: string }
);

const arrows = {
  next: {
    blue: "/media/shared/arrow-next-blue.svg",
    white: "/media/shared/arrow-next-white.svg",
  },
  previous: {
    blue: "/media/shared/arrow-prev-blue.svg",
    white: "/media/shared/arrow-prev-white.svg",
  },
} as const;

/** Source "next" pill: a labelled pill or an icon-only previous/next circle. */
export function PillLink({
  href,
  variant = "flex",
  label,
  direction,
  accessibleLabel,
}: PillLinkProps) {
  const icon = arrows[direction ?? "next"];

  /* eslint-disable @next/next/no-img-element -- source SVG arrows keep their
     intrinsic sizing inside the pill's flex layout */
  const images = (
    <>
      <img
        alt=""
        className={styles.arrow}
        src={icon.blue}
        width={label ? 17 : undefined}
      />
      <img
        alt=""
        className={cn(styles.arrow, styles.arrowHover)}
        src={icon.white}
      />
    </>
  );
  /* eslint-enable @next/next/no-img-element */

  return (
    <Link
      aria-label={accessibleLabel}
      className={cn(
        styles.pill,
        variant === "inline" && styles.pillInline,
        !label && styles.pillIcon,
      )}
      href={href}
    >
      <span className={styles.container}>
        {label ? (
          <>
            <span className={styles.text}>{label}</span>
            <span className={styles.iconBox}>{images}</span>
          </>
        ) : (
          images
        )}
      </span>
      <span className={styles.fill} />
    </Link>
  );
}
