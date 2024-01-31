import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Intro from "@/components/intro/Intro";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
