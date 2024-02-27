/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Base")
          .items([
            S.listItem()
              .title("Profile Info")
              .child(S.document().schemaType("profile").documentId("profile")),
            S.listItem()
              .title("Site Settings (metadata)")
              .child(
                S.document()
                  .schemaType("site-settings")
                  .documentId("site-settings")
              ),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !["profile", "site-settings"].includes(listItem.getId() ?? "")
            )
          ])
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
});
