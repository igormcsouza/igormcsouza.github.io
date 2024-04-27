import { ArrowDown } from "lucide-react";
import { data } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto">
      <div className="space-y-2">
        <div>
          <h1 className="text-4xl font-bold">Need Help? Contact me</h1>
          <h2 className="text-xl font-semibold">{data.personal.phone}</h2>
        </div>
        <div>
          <p><strong>Address:</strong> {data.personal.location}</p>
          <p><strong>Email:</strong> <a className="underline hover:text-muted-foreground" href={`mailto:${data.personal.email}`}>{data.personal.email}</a></p>
          <p><strong>Work Hours:</strong> Mon-Fri 9:00 - 18:00 GMT-3</p>
        </div>
        <p className="flex gap-2 text-muted-foreground">Follow me also in my social medias! <a href="#footer"><ArrowDown /><span className="sr-only">Go Down to Footer</span></a></p>
      </div>
    </section>
  )
}
