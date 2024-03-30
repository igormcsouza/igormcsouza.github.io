import { Check, LucideIcon } from 'lucide-react'

interface VerticalTimelineData {
  year: string;
  event: string;
  description: string;
  Icon?: LucideIcon;
}

export default function VerticalTimeline({ data }: { data: VerticalTimelineData[] }) {
  return (
    <ul className="daisy-timeline daisy-timeline-snap-icon max-md:daisy-timeline-compact daisy-timeline-vertical">
      {
        data.map((item, index) => {
          const Icon = item.Icon || Check;
          return (
            <li key={index}>
              <div className="daisy-timeline-middle">
                <Icon className="mx-4 p-1 rounded-full dark:bg-zinc-200 bg-zinc-800 dark:text-zinc-800 text-zinc-200" />
              </div>
              <div className={`daisy-timeline-${index % 2 === 0 ? 'start' : 'end'} ${index % 2 === 0 ? 'md:text-end' : ''} mb-10`}>
                <time className="font-mono italic">{item.year}</time>
                <div className="text-lg font-black">{item.event}</div>
                {item.description}
              </div>
              <hr className="dark:bg-zinc-200 bg-zinc-800"/>
            </li>
          )
        })
      }
    </ul>
  )
}
