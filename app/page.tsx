import { Hero } from "@/app/_modules/hero";
import { Projects } from "@/app/_modules/projects";
import { ImagesListing } from "@/app/_modules/images-listing";

export default function Home() {
  return (
    <main className="container pb-40">
      <Hero />
      <Projects />
      <ImagesListing
        imagesSrc={[
          "/project-placeholder.png",
          "/project-placeholder.png",
          "/project-placeholder.png"
        ]}
      />
    </main>
  );
}
