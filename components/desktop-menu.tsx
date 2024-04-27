import Link from "next/link";
import { Button } from "./ui/button";

import React from 'react'

export default function DesktopMenu({ menuItems }: { menuItems: {name: string, link: string}[]}) {
  return (
    <nav className="my-auto text-xl lg:inline-block hidden">
      <ul className="flex flex-wrap sm:gap-16">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <Button variant={"ghost"}>{item.name}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

