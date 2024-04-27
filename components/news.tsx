"use client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react"

interface NewsProps {
  title: string
  link: string
  publisedAt: string
}

export default function News() {
  const articlesShowCount = 12
  const [news, setNews] = useState<NewsProps[]>([])

  useEffect(() => {
    fetch("https://news-api-8597.fly.dev/fetch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic: "machine learning" })
    }).then(res => res.json()).then(data => {
      const headlines = data.headlines.slice(0, articlesShowCount)

      setNews(headlines.map((news: string[]) => {
        return {
          title: news[0],
          link: `https://${news[1]}`,
          publisedAt: news[2]
        }
      }))
    }).catch(err => {
      console.error(err)
    })
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section id="news">
        <div className="space-y-5">
          <h2 className="text-center text-2xl">Let&apos;s see some news on the world of <strong>Machine Learning</strong></h2>
          <ul className="flex flex-wrap gap-2">
            {news.map((n, i) => (
              <li key={i} className="mx-auto w-64 h-48 dark:bg-zinc-900 bg-zinc-100 p-2 rounded-md flex flex-col justify-between">
                <Link className="hover:underline underline-offset-2" href={n.link} target="_blank" rel="noreferrer">{n.title}</Link>
                <br />
                <span>{n.publisedAt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Suspense>
  )
}
