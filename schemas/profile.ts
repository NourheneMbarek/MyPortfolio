import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "string" },
        { name: "de", title: "Deutsch", type: "string" },
        { name: "fr", title: "Français", type: "string" },
      ],
    }),
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
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
      name: "shortBio",
      title: "Short Bio",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "text", rows: 4 },
        { name: "de", title: "Deutsch", type: "text", rows: 4 },
        { name: "fr", title: "Français", type: "text", rows: 4 },
      ],
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },

    {
      name: "fullBio",
      title: "Full Bio",
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
      name: "resumeURL",
      title: "Resume",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English Resume",
          type: "file",
        },
        {
          name: "de",
          title: "German Resume",
          type: "file",
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "github",
          title: "Github URL",
          type: "url",
          initialValue: "https://github.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },
  ],
};

export default profile;

//  {
//       name: "shortBio",
//       title: "Short Bio",
//       type: "text",
//       rows: 4,
//     },

// {
//     name: "fullBio",
//     title: "Full Bio",
//     type: "array",
//     of: [{ type: "block" }],
//   },

// {
//       name: "headline",
//       title: "Headline",
//       type: "string",
//       description: "In one short sentence, what do you do?",
//       validation: (Rule) => Rule.required().min(40).max(50),
//     }
