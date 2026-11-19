"use client";

import { useEffect, useRef } from "react";

/**
 * Mirrors the source "footer transition": when the footer enters the
 * viewport, it switches to its dark treatment and the page's side rails fade
 * out. Sets `data-footer-in-view` on the footer and on <html> so route-local
 * styles can respond. Without JavaScript the footer keeps its light state.
 */
export function FooterInView() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const footer = markerRef.current?.closest("footer");
    if (!footer) return;

    const root = document.documentElement;
    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry?.isIntersecting ?? false;
      footer.dataset.footerInView = String(inView);
      root.dataset.footerInView = String(inView);
    });

    observer.observe(footer);
    return () => {
      observer.disconnect();
      delete root.dataset.footerInView;
    };
  }, []);

  return <span hidden ref={markerRef} />;
}
