import { data } from "@/lib/utils";
import VerticalTimeline from "./vertical-timeline";

export default function About() {
  return (
    <section id="about">
      <p className="text-lg text-center mb-8">
        Some of the key points that happened in my carrer so far, in a nutshell.
      </p>
      <VerticalTimeline data={data.history} />
    </section>
  )
}
