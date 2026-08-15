"use client"

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavLink from "./nav-link";
import { scrollToSection } from "./scroll-to-section";

export default function MobileMenu({ menuItems }: { menuItems: { name: string, link: string }[] }) {
  const [open, setOpen] = useState(false);
  const pendingScrollId = useRef<string | null>(null);

  return (
    <nav className="my-auto text-xl lg:hidden inline-block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"}><Menu /></Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          onCloseAutoFocus={(e) => {
            const id = pendingScrollId.current;
            if (id) {
              // Cancel Radix's default focus-return to the trigger button -
              // it auto-scrolls the trigger into view and fights our scroll.
              e.preventDefault();
              pendingScrollId.current = null;
              scrollToSection(id);
            }
          }}
        >
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  item={item}
                  onSectionLink={(id) => { pendingScrollId.current = id; }}
                  onClick={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
