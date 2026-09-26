"use client";

import { useEffect } from "react";

type ScrollToSectionProps = {
  sectionId: string;
};

export default function ScrollToSection({
  sectionId,
}: ScrollToSectionProps) {
  useEffect(() => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    section.scrollIntoView();

    const frame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, [sectionId]);

  return null;
}
