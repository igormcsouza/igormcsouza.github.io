"use client"

import { useEffect } from "react";
import { scrollToSection } from "./scroll-to-section";

// Scrolls to the section named by the URL hash on initial mount - used for
// landing on "/#about" from another route (e.g. /cv/en), where Next's
// built-in hash-scroll-on-load isn't reliably firing.
export default function HashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) {
      scrollToSection(id);
    }
  }, []);

  return null;
}
