"use client";

import { ReactNode, useEffect, useState } from "react";

// Keeps the WhatsApp + Ask Sahaciety floating buttons out of the way of the
// hero's own call-to-action on first paint (the hero can be taller than the
// viewport, especially with the bilingual copy). They reveal once the
// visitor scrolls a little, and then stay visible for the rest of the visit.
export default function FloatingDock({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 220) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className={`floating-dock ${visible ? "is-visible" : ""}`}>{children}</div>;
}
