"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import type { NavigationItem } from "@/config/site";

import styles from "./site-shell.module.css";

type MobileNavProps = {
  items: readonly NavigationItem[];
};

/**
 * Below 992px the source shows a two-by-two dot toggle. The source's open
 * menu renders its links clipped to zero visible height; this version keeps
 * the same visual language but makes the links readable. See
 * docs/launch/clone-journal.md.
 */
export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <button
        aria-controls={panelId}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className={styles.menuButton}
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny source SVG icon */}
        <img
          alt=""
          className={styles.menuIcon}
          height={32}
          src="/media/shared/menu-toggle.svg"
          width={32}
        />
      </button>
      <div
        className={styles.mobilePanel}
        hidden={!open}
        id={panelId}
        ref={panelRef}
      >
        <nav aria-label="Mobile navigation">
          {items.map((item) => (
            <Link
              className={styles.mobileLink}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
