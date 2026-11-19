"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import styles from "../home.module.css";

type Keyframes = ReadonlyArray<readonly [progress: number, opacity: number]>;

// Source interaction "left-tracker-animation": label opacity keyed to the
// page scroll percentage, with smoothing 77.
const LABELS = [
  {
    label: "clientele",
    frames: [
      [10, 0],
      [13, 1],
      [19, 1],
      [23, 0],
    ],
  },
  {
    label: "what we do",
    frames: [
      [26, 0],
      [29, 1],
      [37, 1],
      [41, 0],
    ],
    lato: true,
  },
  {
    label: "our works",
    frames: [
      [39, 0],
      [42, 1],
      [88, 1],
      [91, 0],
    ],
  },
] as const satisfies ReadonlyArray<{
  label: string;
  frames: Keyframes;
  lato?: boolean;
}>;

const SMOOTHING_FACTOR = 0.23;

function interpolate(frames: Keyframes, progress: number): number {
  const first = frames[0];
  const last = frames[frames.length - 1];
  if (progress <= first[0]) return first[1];
  if (progress >= last[0]) return last[1];

  for (let index = 1; index < frames.length; index += 1) {
    const [end, endValue] = frames[index];
    const [start, startValue] = frames[index - 1];
    if (progress <= end) {
      const ratio = (progress - start) / (end - start);
      return startValue + (endValue - startValue) * ratio;
    }
  }
  return last[1];
}

type SectionTrackerProps = {
  linkedinUrl: string;
};

/**
 * Fixed left rail: LinkedIn mark, divider rail, and a rotated label naming
 * the section currently in view.
 */
export function SectionTracker({ linkedinUrl }: SectionTrackerProps) {
  const labelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let current = -1;
    let frame = 0;

    function targetProgress() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      return scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    }

    function render() {
      const target = targetProgress();
      current =
        current < 0 || reducedMotion
          ? target
          : current + (target - current) * SMOOTHING_FACTOR;

      LABELS.forEach((item, index) => {
        const element = labelRefs.current[index];
        if (element) {
          element.style.opacity = String(interpolate(item.frames, current));
        }
      });

      frame =
        Math.abs(target - current) > 0.01 ? requestAnimationFrame(render) : 0;
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(render);
    }

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.tracker}>
      <div className={styles.trackerContainer}>
        <div className={styles.inLogo}>
          <a
            aria-label="Ink and Pixel on LinkedIn"
            className={styles.inLink}
            href={linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          />
        </div>
        <div className={styles.trackerRail} />
        <div aria-hidden="true" className={styles.trackerHeading}>
          {LABELS.map((item, index) => (
            <div
              className={cn(
                styles.trackerItem,
                "lato" in item && styles.trackerItemLato,
              )}
              key={item.label}
              ref={(element) => {
                labelRefs.current[index] = element;
              }}
            >
              {item.label}
            </div>
          ))}
          <div className={cn(styles.trackerItem, styles.trackerItemStatic)}>
            reach out
          </div>
        </div>
      </div>
    </div>
  );
}
