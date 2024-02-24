import { Hero } from "@/app/_modules/hero";
import { Projects } from "@/app/_modules/projects";
import { ImagesSlider } from "@/app/_modules/images-slider";

export default function Home() {
  return (
    <main className="container pb-16">
      <Hero />
      <Projects />
      <ImagesSlider />
    </main>
  );
}
