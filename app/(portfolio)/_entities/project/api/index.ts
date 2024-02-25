"use server";

import { client } from "@/sanity/lib/client";
import { ProjectType } from "@/app/(portfolio)/_entities/project/model";

async function getProjects(): Promise<ProjectType[] | undefined> {
  return await client.fetch(
    `*[_type == "project"]{_id, title, description, "previewImage": previewImage.asset->url, previewUrl, sourceUrl}`
  );
}

async function getProjectImages(
  projectId: string
): Promise<string[] | undefined> {
  const query = `*[_type == "project" && _id == $projectId]{"images": images[].asset->url}[0]["images"]`;
  const params = { projectId };

  const result = await client.fetch(query, params);

  if (result) {
    return Object.entries(result as keyof Record<string, string>).map(
      ([, value]) => value
    );
  }

  return undefined;
}

export { getProjects, getProjectImages };
