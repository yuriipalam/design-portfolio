import { Hero } from "@/app/(portfolio)/_modules/hero";
import { Projects } from "@/app/(portfolio)/_modules/projects";
import { ImagesSlider } from "@/app/(portfolio)/_modules/images-slider";

export default function Home() {
  return (
    <main className="container pb-16">
      <Hero />
      <Projects />
      <ImagesSlider />
    </main>
  );
}
