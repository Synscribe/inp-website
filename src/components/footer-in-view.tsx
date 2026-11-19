"use client";

import { useEffect, useRef } from "react";

/**
 * Mirrors the source "footer transition": when the footer enters the
 * viewport, it switches to its dark treatment and the page's side rails fade
 * out. Sets `data-footer-in-view` on the footer and on <html> so route-local
 * styles can respond. Without JavaScript the footer keeps its light state.
 *
 * Like the source's Webflow interaction, the state is computed from the
 * footer's position on scroll. Resize updates are debounced so transient
 * viewport sizes (window dragging, full-page capture) do not flash the
 * light state.
 */
export function FooterInView() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const footer = markerRef.current?.closest("footer");
    if (!footer) return;

    const root = document.documentElement;
    let frame = 0;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let inView: boolean | undefined;

    function update() {
      frame = 0;
      const rect = footer!.getBoundingClientRect();
      const next = rect.top < window.innerHeight && rect.bottom > 0;
      if (next === inView) return;
      inView = next;
      footer!.dataset.footerInView = String(next);
      root.dataset.footerInView = String(next);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(schedule, 150);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(frame);
      delete root.dataset.footerInView;
    };
  }, []);

  return <span hidden ref={markerRef} />;
}
