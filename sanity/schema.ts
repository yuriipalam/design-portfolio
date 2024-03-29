import { orderRankField } from "@sanity/orderable-document-list";
import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "site-settings",
      type: "document",
      title: "Site Settings",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title"
        },
        {
          name: "description",
          type: "text",
          title: "Description"
        }
      ]
    },
    {
      name: "profile",
      type: "document",
      title: "Profile Info",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name"
        },
        {
          name: "role",
          type: "string",
          title: "Role"
        },
        {
          name: "description",
          type: "text",
          title: "Description"
        },
        {
          name: "picture",
          type: "image",
          title: "Picture"
        },
        {
          name: "resume",
          type: "file",
          title: "Resume"
        },
        {
          name: "email",
          type: "email",
          title: "Email"
        },
        {
          name: "linkedinUrl",
          type: "url",
          title: "LinkedIn"
        }
      ]
    },
    {
      name: "project",
      type: "document",
      title: "Project",
      fields: [
        orderRankField({ type: "project" }),
        {
          name: "title",
          type: "string",
          title: "Title"
        },
        {
          name: "description",
          type: "text",
          title: "Description"
        },
        {
          name: "previewUrl",
          type: "url",
          title: "Preview URL",
          validation: (Rule) => Rule.optional()
        },
        {
          name: "sourceUrl",
          type: "url",
          title: "Source URL",
          validation: (Rule) => Rule.optional()
        },
        {
          name: "figmaUrl",
          type: "url",
          title: "Figma URL",
          validation: (Rule) => Rule.optional()
        },
        {
          name: "previewImage",
          type: "image",
          title: "Preview Image"
        },
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [{ type: "image" }]
        }
      ]
    }
  ]
};
