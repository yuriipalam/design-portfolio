import { Hero, Projects, ImagesSlider } from "@/app/(portfolio)/_modules";
import { getProfile } from "@/app/(portfolio)/_entities/profile/api";
import { useProfileContactState } from "@/app/(portfolio)/_entities/profile";

export default async function Home() {
  const profile = await getProfile();
  if (!profile) {
    throw new Error("Something went wrong...");
  }

  useProfileContactState.setState({
    name: profile.name,
    email: profile.email,
    linkedinUrl: profile.linkedinUrl,
    resumeUrl: profile.resumeUrl
  });

  return (
    <main className="container pb-16">
      <Hero profile={profile} />
      <Projects />
      <ImagesSlider />
    </main>
  );
}
