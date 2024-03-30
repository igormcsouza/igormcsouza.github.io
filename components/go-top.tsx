"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function GoTop() {
  const limit = 120
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleSetShowGoTop = () => {
      console.log(window.scrollY)
      if (window.scrollY > limit) {
        setShowGoTop(true);
      }
      if (window.scrollY <= limit) {
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleSetShowGoTop);
    return () => window.removeEventListener("scroll", handleSetShowGoTop);
  }, []);

  return (
    <Button className={`hidden ${showGoTop ? "md:block" : ""} fixed bottom-8 right-8 rounded-full`} variant="ghost">
      <Link className="text-6xl" href="#">
        <ArrowUp />
      </Link>
    </Button>
  )
}
