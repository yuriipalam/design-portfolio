import { Hero, Projects, ImagesSlider } from "@/app/(portfolio)/_modules";
import { getProfile } from "@/app/(portfolio)/_entities/profile/api";
import { ClientSideProfileContactStateInitializer } from "@/app/(portfolio)/_entities/profile/state/state";

export default async function Home() {
  const profile = await getProfile();
  if (!profile) {
    throw new Error("Something went wrong...");
  }

  return (
    <main className="container pb-16">
      <ClientSideProfileContactStateInitializer
        name={profile.name}
        email={profile.email}
        resumeUrl={profile.resumeUrl}
        linkedinUrl={profile.linkedinUrl}
      />
      <Hero profile={profile} />
      <Projects />
      <ImagesSlider />
    </main>
  );
}
