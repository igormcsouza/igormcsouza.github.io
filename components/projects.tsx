import HorizontalScroll from "./horizontalScroll";
import { data } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects">
      <p className="text-center text-2xl">Below you can find some personal projects I&apos;ve developed along the years! </p>
      <HorizontalScroll data={data.portifolio} />
    </section>
  )
}
