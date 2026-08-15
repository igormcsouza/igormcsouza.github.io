// The mobile Sheet locks body scroll (sets a `data-scroll-locked` attribute,
// via react-remove-scroll under the hood) until its close animation
// finishes, so a scrollIntoView issued while it's still closing is a no-op.
// This waits for the lock to actually clear - across route transitions too,
// since the Sheet lives in the shared root layout - before scrolling.
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  if (!document.body.hasAttribute("data-scroll-locked")) {
    el.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const observer = new MutationObserver(() => {
    if (!document.body.hasAttribute("data-scroll-locked")) {
      observer.disconnect();
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-scroll-locked"] });
  // Safety net in case the attribute never clears.
  setTimeout(() => observer.disconnect(), 1000);
}
