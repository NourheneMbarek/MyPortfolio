import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
  name: "tagline",
  title: "Tagline",
  type: "object",
  fields: [
    { name: "en", title: "English", type: "string" },
    { name: "de", title: "Deutsch", type: "string" },
    { name: "fr", title: "Français", type: "string" },
  ],
}),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "logo",
      title: "Project Logo",
      type: "image",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
  name: "description",
  title: "Description",
  type: "object",
  fields: [
    {
      name: "en",
      title: "English",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "de",
      title: "Deutsch",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "fr",
      title: "Français",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
},
{
  name: "technologies",
  title: "Technologies",
  type: "array",
  of: [{ type: "string" }],
},
  ],
};

export default project;