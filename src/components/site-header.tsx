import Link from "next/link";

import { siteConfig } from "@/config/site";
import { defaultOrganizationLogoPath } from "@/lib/seo";

import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";
import styles from "./site-shell.module.css";

export function SiteHeader() {
  const { contactAnchor, navigation } = siteConfig;

  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.navWrapper}>
          <Link
            aria-label={`${siteConfig.name} home`}
            className={styles.logoLink}
            href="/"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG wordmark keeps the source's intrinsic sizing */}
            <img
              alt=""
              className={styles.logo}
              height={47}
              src={defaultOrganizationLogoPath}
              width={193}
            />
          </Link>

          <div className={styles.navMenu}>
            <nav aria-label="Primary navigation" className={styles.primaryNav}>
              {navigation.map((item) => (
                <NavLink href={item.href} key={item.href} label={item.label} />
              ))}
            </nav>
            <nav aria-label="Contact" className={styles.contactNav}>
              <NavLink href={contactAnchor.href} label={contactAnchor.label} />
            </nav>
          </div>

          <MobileNav items={[...navigation, contactAnchor]} />
        </div>
      </div>
    </header>
  );
}
