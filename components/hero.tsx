import Image from 'next/image'

import { MainImage } from './image'
import { data } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'
import getIcon from './svg/utils'

export default function Hero() {
  return (
    <section className="mt-16 flex flex-col md:justify-between md:flex-row gap-6 md:self-stretch mx-auto md:mx-0">
      <div className="my-auto">
        <div className="flex flex-col gap-4 md:max-w-lg max-w-md">
          <h1 className="text-6xl max-w-md">Hello there 👋, I&apos;m {data.personal.name}</h1>
          <p className="text-md text-muted-foreground">{data.personal.bio}</p>
          <ul className="flex md:flex-row flex-wrap">
            {
              data.personal.skills.map((skill, index) => {
                const Icon = getIcon(skill.name)
                return (
                  <li key={index}>
                    <Button variant="ghost">
                      <Link className={`${skill.name == "langchain" ? "text-4xl -mx-2" : "text-2xl"}`} href={skill.link} target="_blank">
                        <Icon />
                      </Link>
                    </Button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div>
        <Image className="rounded-md" src={MainImage} width={448} alt="Profile picture of the author, Igor Souza" />
      </div>
    </section>
  )
}
