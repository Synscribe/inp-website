import { siteConfig } from "@/config/site";

import styles from "./rails.module.css";

/** Fixed right rail with the rotated email link and its slide-swap hover. */
export function EmailRail() {
  const { email } = siteConfig.contact;

  return (
    <div className={styles.emailRail}>
      <a
        className={styles.emailLink}
        href={`mailto:${email}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className={styles.emailWrapper}>
          <span className={styles.emailText}>{email}</span>
          <span aria-hidden="true" className={styles.emailText}>
            {email}
          </span>
        </span>
      </a>
    </div>
  );
}
