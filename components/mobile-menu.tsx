import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

export default function MobileMenu({ menuItems }: { menuItems: { name: string, link: string }[] }) {
  return (
    <nav className="my-auto text-xl lg:hidden inline-block">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"}><Menu /></Button>
        </SheetTrigger>
        <SheetContent side="left">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <Button variant={"ghost"}>{item.name}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
