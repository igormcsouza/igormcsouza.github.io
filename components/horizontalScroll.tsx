import Image from "next/image"
import { Button } from "./ui/button"
import { Globe } from "lucide-react"
import { GitHub } from "@mui/icons-material"
import Link from "next/link"
import getImage from "./image/utils"

import "@/styles/horizontalScroll.css"

interface HorizontalScrollData {
  image: string
  name: string
  description: string
  links: {
    website: string
    github: string
  }

}

function ScrollableItem({ project, hideOnMotionReduce }: { project: HorizontalScrollData, hideOnMotionReduce?: boolean }) {
  return (
    <li className={`dark:bg-zinc-900 bg-zinc-200 rounded-b-md md:w-[450px] w-80 flex flex-col justify-between gap-4 ${hideOnMotionReduce ? "motion-reduce:hidden" : ""}`}>
      <Image className="rounded-t-md h-36" src={getImage(project.image)} width={450} alt={project.name} />
      <div className="mx-3 h-[100px] overflow-y-scroll">
        <h1 className="text-xl font-bold">{project.name}</h1>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
      <div className="flex rounded-md overflow-hidden w-fit ml-3 mb-3">
        <Button className="rounded-none" disabled={!project.links.website}><Link href={project.links.website} target="_blank"><Globe /></Link></Button>
        <Button className="rounded-none" disabled={!project.links.github}><Link href={project.links.github} target="_blank"><GitHub /></Link></Button>
      </div>
    </li>
  )
}

export default function HorizontalScroll({ data }: { data: HorizontalScrollData[] }) {
  return (
    <div className="motion-safe:overflow-hidden mask-fade">
      <ul className="w-max flex flex-wrap gap-4 py-4 motion-safe:flex-nowrap motion-safe:animate-scroll-left hover:paused">
        {
          data.map((project, index) => (
            <ScrollableItem key={index} project={project} />
          ))
        }
        {
          data.map((project, index) => (
            <ScrollableItem key={index} project={project} hideOnMotionReduce />
          ))
        }
        
      </ul>
    </div>
  )
}
