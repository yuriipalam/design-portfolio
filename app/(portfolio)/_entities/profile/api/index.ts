"use server";

import { client } from "@/sanity/lib/client";
import { ProfileType } from "@/app/(portfolio)/_entities/profile/model";

async function getProfile(): Promise<ProfileType | undefined> {
  console.log(
    await client.fetch(
      `*[_type == "profile"][0]{..., "pictureUrl": picture.asset->url, "resumeUrl": resume.asset->url}`
    )
  );
  return await client.fetch(
    `*[_type == "profile"][0]{..., "pictureUrl": picture.asset->url, "resumeUrl": resume.asset->url}`
  );
}

export { getProfile };
