import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { FooterInView } from "./footer-in-view";
import styles from "./site-shell.module.css";

export function SiteFooter() {
  const { contact, legalName } = siteConfig;

  return (
    <footer className={styles.footer}>
      <FooterInView />
      <div aria-hidden="true" className={styles.footerBackground} />
      <div className={styles.footerContainer}>
        <div className={styles.footerHeading}>
          <p className={styles.footerKicker}>got something in mind?</p>
          <h2 className={styles.footerTitle} id="contact">
            let’s talk.
          </h2>
        </div>
        <div className={styles.footerBody}>
          <p className={styles.contactLabel}>click /</p>
          <p className={cn(styles.contactContent, styles.contactEmphasis)}>
            {contact.email}
          </p>
        </div>
        <div className={styles.footerBody}>
          <p className={styles.contactLabel}>visit /</p>
          <p className={styles.contactContent}>
            {contact.addressLines[0]}
            <br />
            {contact.addressLines[1]}
          </p>
        </div>
        <div className={styles.footerBody}>
          <p className={styles.contactLabel}>call /</p>
          <p className={styles.contactContent}>{contact.phone}</p>
        </div>
      </div>
      <ul className={styles.pageFooter}>
        <li className={cn(styles.footerItem, styles.footerItemFirst)}>
          {legalName}
        </li>
        <li className={styles.footerItem}>© 2025</li>
        <li className={styles.footerItem}>all rights reserved</li>
      </ul>
    </footer>
  );
}
