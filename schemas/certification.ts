import { BiBadgeCheck } from "react-icons/bi";

const certification = {
  name: "certification",
  title: "Certification",
  type: "document",
  icon: BiBadgeCheck,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "issuer",
      title: "Issuer",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        { name: "en", title: "English", type: "text", rows: 3 },
        { name: "de", title: "Deutsch", type: "text", rows: 3 },
        { name: "fr", title: "Français", type: "text", rows: 3 },
      ],
    },
    {
      name: "url",
      title: "Credential URL",
      type: "url",
    },
  ],
};

export default certification;