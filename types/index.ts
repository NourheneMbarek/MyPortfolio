// types/index.ts

import { PortableTextBlock } from "sanity";

export type Locale = "en" | "de" | "fr";

export type LocalizedString = {
  en?: string;
  de?: string;
  fr?: string;
};

export type LocalizedPortableText = {
  en?: PortableTextBlock[];
  de?: PortableTextBlock[];
  fr?: PortableTextBlock[];
};
export type ProfileType = {
  _id: string;
  fullName: string;
  headline: LocalizedString;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: LocalizedString;
  email: string;
  fullBio: LocalizedPortableText;
  location: string;
  resumeURL: {
    en?: string;
    de?: string;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
  };
  skills: string[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: LocalizedString;
  logo: string;
  url: string;
  description: LocalizedString;
  startDate: string;
  endDate?: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: LocalizedString;
  projectUrl?: string;
  logo?: string;
  technologies?: string[];
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: LocalizedPortableText | PortableTextBlock[];
};
