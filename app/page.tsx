import { Hero } from "@/app/_modules/hero";
import { Projects } from "@/app/_modules/projects";
import { ImagesListing } from "@/app/_modules/images-listing";

export default function Home() {
  return (
    <main className="container pb-16">
      <Hero />
      <Projects />
      <ImagesListing />
    </main>
  );
}
