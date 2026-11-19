"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import styles from "./site-shell.module.css";

type NavLinkProps = {
  href: string;
  label: string;
};

/** Header link with the source's slide-up hover and blue current-page state. */
export function NavLink({ href, label }: NavLinkProps) {
  const current = usePathname() === href;

  return (
    <Link
      aria-current={current ? "page" : undefined}
      className={cn(styles.navLink, current && styles.navLinkCurrent)}
      href={href}
    >
      <span className={styles.navText}>{label}</span>
      <span aria-hidden="true" className={styles.navTextHover}>
        {label}
      </span>
    </Link>
  );
}
