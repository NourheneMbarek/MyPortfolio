import { BiBriefcase } from "react-icons/bi";

const job = {
  name: "job",
  title: "Job",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
    },
    {
  name: "jobTitle",
  title: "Job Title",
  type: "object",
  fields: [
    {
      name: "en",
      title: "English",
      type: "string",
    },
    {
      name: "de",
      title: "Deutsch",
      type: "string",
    },
    {
      name: "fr",
      title: "Français",
      type: "string",
    },
  ],
},
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "url",
      title: "Company Website",
      type: "url",
    },
   {
  name: "description",
  title: "Job Description",
  type: "object",
  fields: [
    {
      name: "en",
      title: "English",
      type: "text",
      rows: 3,
    },
    {
      name: "de",
      title: "Deutsch",
      type: "text",
      rows: 3,
    },
    {
      name: "fr",
      title: "Français",
      type: "text",
      rows: 3,
    },
  ],
},
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default job;