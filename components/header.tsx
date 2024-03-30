import ChangeThemeButton from "@/components/change-theme-button";
import Link from "next/link";
import { LogoIcon } from "./svg";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";

export default function Header(){

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "News", link: "#news" },
    { name: "Contact", link: "#contact" },
    { name: "Blog", link: "https://igormcsouza.github.io/blog" },
  ];

  return (
    <header className="py-6 lg:py-10">
      <div className="flex gap-4 flex-row justify-between items-center md:gap-8">
        <Link className="hidden lg:inline-block" href="#">
          <LogoIcon className="dark:text-zinc-800 text-zinc-200 text-4xl" />
        </Link>
        <DesktopMenu menuItems={menuItems} />
        <MobileMenu menuItems={menuItems} />
        <ChangeThemeButton />
      </div>
    </header>
  );
}