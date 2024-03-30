import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import Link from "next/link";
import { data } from "@/lib/utils";

export default function Footer() {
  return (
    <footer id="footer" className="py-6 lg:py-10">
      <hr className="my-5"/>
      <div className="flex flex-col sm:flex-row justify-between gap-8 items-center text-muted-foreground">
        <ul className="sm:w-28 flex flex-col items-center gap-2 px-4">
          <li>
            <Link className="hover:underline underline-offset-4" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline underline-offset-4" href="https://igormcsouza.github.io/blog">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="flex gap-5 flex-wrap">
          <li>
            <Link href={data.personal.socialMedias.github}>
              <GitHub />
              <span className="sr-only">GitHub</span>
            </Link>
          </li>
          <li>
            <Link href={data.personal.socialMedias.x}>
              <XIcon />
              <span className="sr-only">Twitter</span>
            </Link>
          </li>
          <li>
            <Link href={data.personal.socialMedias.linkedin}>
              <LinkedIn />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link href={data.personal.socialMedias.instagram}>
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </li>
        </ul>
        <div className="sm:w-28 text-center">Need some help? Talk to me thru the <a className="font-bold underline" href={`mailto:${data.personal.email}`}>mail</a>.</div>
      </div>
      <div className="flex justify-center pt-3">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}