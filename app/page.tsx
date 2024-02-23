import { Hero } from "@/app/_modules/hero";
import { Projects } from "@/app/_modules/projects";

export default function Home() {
  return (
    <main className="container pb-40">
      <Hero />
      <Projects />
    </main>
  );
}
