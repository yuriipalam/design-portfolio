import { Hero, Projects, ImagesSlider } from "@/app/(portfolio)/_modules";
import { getProfile } from "@/app/(portfolio)/_entities/profile/api";
import { ClientSideProfileContactStateInitializer } from "@/app/(portfolio)/_entities/profile/state/state";
import type { Metadata, ResolvingMetadata } from "next";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const meta = await client.fetch(
    `*[_type == "site-settings"]{title, description}[0]`
  );

  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function Home() {
  const profile = await getProfile();
  if (!profile) {
    throw new Error("Something went wrong...");
  }

  return (
    <main className="pb-16">
      <ClientSideProfileContactStateInitializer
        name={profile.name}
        email={profile.email}
        resumeUrl={profile.resumeUrl}
        linkedinUrl={profile.linkedinUrl}
      />
      <Hero profile={profile} />
      <div className="container">
        <Projects />
        <ImagesSlider />
      </div>
    </main>
  );
}
