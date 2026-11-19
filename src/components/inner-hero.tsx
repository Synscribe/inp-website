import { Fragment, type ReactNode } from "react";

import styles from "./inner-hero.module.css";

type InnerHeroProps = {
  /** Headline lines, rendered with line breaks (for example ["our", "works"]). */
  titleLines: readonly string[];
  intro: string;
  /** Content placed after the hero row inside the section (the side rail). */
  children?: ReactNode;
};

/** Inner-page hero: big headline with the brand full stop, plus intro copy. */
export function InnerHero({ titleLines, intro, children }: InnerHeroProps) {
  return (
    <section className={styles.section}>
      <div className={styles.innerPage}>
        <div className={styles.introHeadline}>
          <h1 className={styles.heading}>
            {titleLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
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
      {children}
    </section>
  );
}
