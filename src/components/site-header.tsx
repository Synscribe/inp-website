import Link from "next/link";

import { siteConfig } from "@/config/site";
import { defaultOrganizationLogoPath } from "@/lib/seo";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";
import styles from "./site-shell.module.css";

// The source site only gives these two links the slide-up hover treatment.
const slidingLinks = new Set(["/team", "/feature"]);

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
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  slide={slidingLinks.has(item.href)}
                />
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

function NavLink({
  href,
  label,
  slide = false,
}: {
  href: string;
  label: string;
  slide?: boolean;
}) {
  return (
    <Link
      className={cn(styles.navLink, slide && styles.navLinkSlide)}
      href={href}
    >
      <span className={styles.navText}>{label}</span>
      <span aria-hidden="true" className={styles.navTextHover}>
        {label}
      </span>
    </Link>
  );
}
