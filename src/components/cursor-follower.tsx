"use client";

import { useEffect, useRef } from "react";

import styles from "./rails.module.css";

type CursorFollowerProps = {
  /** Webflow "follow mouse cursor" smoothing (0-100) for this page. */
  smoothing: number;
};

/** Decorative turquoise square that trails the pointer on hover devices. */
export function CursorFollower({ smoothing }: CursorFollowerProps) {
  const followFactor = 1 - smoothing / 100;
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let visible = false;

    function render() {
      const factor = reducedMotion ? 1 : followFactor;
      current.x += (target.x - current.x) * factor;
      current.y += (target.y - current.y) * factor;
      cursor!.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      const settled =
        Math.abs(target.x - current.x) < 0.1 &&
        Math.abs(target.y - current.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(render);
    }

    function onPointerMove(event: PointerEvent) {
      target.x = event.clientX - window.innerWidth / 2;
      target.y = event.clientY - window.innerHeight / 2;

      if (!visible) {
        visible = true;
        current.x = target.x;
        current.y = target.y;
        cursor!.style.opacity = "1";
      }
      if (!frame) frame = requestAnimationFrame(render);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, [followFactor]);

  return (
    <div aria-hidden="true" className={styles.mouseWrapper}>
      <div className={styles.cursor} ref={cursorRef} />
    </div>
  );
}
