"use client"

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { scrollToSection } from "./scroll-to-section";

type NavLinkProps = {
  item: { name: string; link: string };
  // Same-page section links normally scroll immediately, but inside the
  // mobile Sheet, closing it returns focus to the trigger button, which
  // auto-scrolls it back into view and fights our scroll. Callers with that
  // constraint (mobile-menu) pass this to take over the scroll themselves,
  // once it's safe to do so; it's also called for cross-route section links
  // (e.g. from /cv/en) for the same reason, even though navigation isn't
  // intercepted for those.
  onSectionLink?: (sectionId: string) => void;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">;

// For same-page section links (e.g. "/#about" while already on "/"), Link's
// own hash navigation isn't reliable, so we scroll to the section directly
// and skip routing. Cross-route links (e.g. from /cv/en) still navigate
// normally, since the target section only exists on "/".
const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ item, onSectionLink, onClick, ...props }, ref) => {
    const pathname = usePathname();

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
      if (item.link.startsWith("/#")) {
        const id = item.link.slice(2);
        if (pathname === "/") {
          e.preventDefault();
          onSectionLink ? onSectionLink(id) : scrollToSection(id);
        } else {
          // Cross-route: let Link navigate; the destination page scrolls
          // to the section once it mounts (see hash-scroll.tsx), unless a
          // caller wants to coordinate that itself (see onSectionLink doc).
          onSectionLink?.(id);
        }
      }
      onClick?.(e);
    }

    return (
      <Link ref={ref} href={item.link} onClick={handleClick} {...props}>
        <Button variant={"ghost"}>{item.name}</Button>
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";

export default NavLink;
