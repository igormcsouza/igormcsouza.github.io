import About from "@/components/about";
import Contact from "@/components/contact";
import GoTop from "@/components/go-top";
import Hero from "@/components/hero";
import News from "@/components/news";
import Projects from "@/components/projects";
import Resume from "@/components/resume";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-16 my-10">
      <Hero />
      <Resume />
      <About />
      <Projects />
      <News />
      <Contact />
      <GoTop />
    </div>
  );
}