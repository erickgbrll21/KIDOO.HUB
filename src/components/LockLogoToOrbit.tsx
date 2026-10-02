"use client";

import { useEffect } from "react";

export function LockLogoToOrbit() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".k-page");
    const copy = page?.querySelector<HTMLElement>(".k-copy");
    const logo = page?.querySelector<HTMLElement>(".k-logo");
    const ring = page?.querySelector<HTMLElement>(".k-ring.r1");
    if (!copy || !logo || !ring) return;

    let frame = 0;
    const lock = () => {
      const pad = parseFloat(getComputedStyle(copy).marginTop) || 0;
      const logoRect = logo.getBoundingClientRect();
      const ringRect = ring.getBoundingClientRect();
      const delta = ringRect.top + ringRect.height / 2 - (logoRect.top + logoRect.height / 2);
      const next = pad + delta;
      if (Math.abs(next - pad) > 0.5) copy.style.marginTop = `${Math.round(next)}px`;
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(lock);
    };

    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(document.documentElement);
    if (page) ro.observe(page);
    ro.observe(logo);
    ro.observe(ring);
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return null;
}
