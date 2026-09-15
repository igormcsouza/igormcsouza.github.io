import { Button } from "./ui/button";
import Link from "next/link";
import { data } from "@/lib/utils";

export default function Resume() {
  return (
    <section id="#resume" className="flex flex-col gap-1 mx-auto">
      <Button asChild>
        <Link href={data.personal.resume.link} target="_blank" rel="noreferrer">
          Check out my resume here
        </Link>
      </Button>
    </section>
  )
}
