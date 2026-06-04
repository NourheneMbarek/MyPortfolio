import Image from "next/image";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { PortableText } from "@portabletext/react";

import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType, Locale } from "@/types";
import { getLocalizedValue } from "@/utils/getLocalizedValue";
import fallBackImage from "@/public/project.png";
import Link from "next/link";
type Props = {
  params: {
    project: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project: ProjectType = await getSingleProject(params.project);
  const tagline = getLocalizedValue(project.tagline, "en") || "";

  return {
    title: `${project.name} | Project`,
    description: tagline,
    openGraph: {
      title: project.name,
      description: tagline,
      images: [
        project.coverImage?.image ||
          "https://res.cloudinary.com/victoreke/image/upload/v1689892912/docs/project.png",
      ],
    },
  };
}

export default async function Project({ params }: Props) {
  const cookieStore = cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as Locale;

  const project: ProjectType = await getSingleProject(params.project);

  const tagline = getLocalizedValue(project.tagline, locale) || "";
  const description = Array.isArray(project.description)
    ? project.description
    : getLocalizedValue(project.description, locale) || [];

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/projects"
          className="
            inline-flex items-center gap-2 mb-8
            rounded-full
            bg-purple-500/10
            text-purple-500
            border border-purple-500/20
            px-4 py-2
            text-sm font-medium
            transition-all duration-300
            hover:bg-purple-500
            hover:text-white
            hover:border-purple-500
            hover:-translate-x-1
          "
        >
          ←{" "}
          {locale === "de"
            ? "Zurück zu den Projekten"
            : locale === "fr"
              ? "Retour aux projets"
              : "Back to projects"}
        </Link>
        <div className="flex md:flex-row flex-col md:items-start md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-3">
              {project.name}
            </h1>

            <p className="text-zinc-600 dark:text-zinc-400">{tagline}</p>
          </div>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="shrink-0 bg-zinc-100 text-zinc-900 dark:bg-[#1d1d20] dark:text-white hover:border-zinc-300 dark:hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
            >
              Explore
            </a>
          )}
        </div>

        <Image
          className="rounded-xl border border-zinc-200 dark:border-zinc-800"
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.name}
        />

        {project.technologies?.length ? (
          <ul className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 px-3 py-1 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-600 dark:text-zinc-400">
          <PortableText value={description} />
        </div>
      </div>
    </main>
  );
}
