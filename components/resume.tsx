import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { data } from "@/lib/utils";
import getIcon from "./svg/utils";

export default function Resume() {
  return (
    <section id="#resume" className="flex flex-col gap-1 mx-auto">
      <div className="flex gap-2"><p className="font-bold">Find my resumé below</p><ArrowDown /></div>
      <ul className="flex flex-wrap gap-8 mx-auto">
        {
          data.personal.resume.map((resume, index) => {
            const Icon = getIcon(resume.lang)
            return (
              <li key={index}>
                <Button className="py-7" variant="ghost">
                  <Link href={resume.link} target="_blank">
                    <Icon className="text-4xl" />
                  </Link>
                </Button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
