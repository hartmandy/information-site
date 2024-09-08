import type { MetaFunction } from "@remix-run/node";
import About from "~/components/about";
import Contact from "~/components/contact";
import Curriculum from "~/components/curriculum";
import Forms from "~/components/forms";
import Gallery from "~/components/gallery";
import Hero from "~/components/hero";

export default function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Curriculum />
      <Forms />
      <Contact />
      <Gallery />
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "All Kids Academy" },
    { name: "description", content: "Welcome to All Kids Academy" },
  ];
};
