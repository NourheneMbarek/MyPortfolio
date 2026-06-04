import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType, Locale } from "@/types";
import { getLocalizedValue } from "@/utils/getLocalizedValue";
import Reveal from "../components/reveal";

export default async function Projects() {
  const cookieStore = cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as Locale;

  const projects: ProjectType[] = await getProjects();

  return (
    <section id="projects" className="max-w-7xl mx-auto md:px-16 px-6">
     
        <section  className="mt-32 scroll-mt-32">
        <Reveal>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
            {locale === "de"
              ? "Ausgewählte Projekte"
              : locale === "fr"
                ? "Projets sélectionnés"
                : "Featured Projects"}
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            {locale === "de"
              ? "Eine Auswahl meiner wichtigsten Projekte mit Fokus auf Webentwicklung, APIs, Monitoring, Automatisierung und moderne Benutzeroberflächen."
              : locale === "fr"
                ? "Une sélection de mes projets les plus importants, axés sur le développement web, les APIs, la supervision, l’automatisation et les interfaces modernes."
                : "A selection of my most important projects focused on web development, APIs, monitoring, automation and modern user interfaces."}
          </p>
        </Reveal>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="group bg-zinc-100 dark:bg-[#1d1d20] border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 p-5 rounded-xl transition-all hover:-translate-y-1"
          >
            <Reveal>
              <div className="flex items-start gap-x-4">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    width={60}
                    height={60}
                    alt={project.name}
                    className="bg-zinc-800 rounded-md p-2"
                  />
                ) : (
                  <div className="w-[60px] h-[60px] rounded-md bg-zinc-800 flex items-center justify-center text-white font-bold">
                    {project.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h2 className="font-semibold mb-1 group-hover:text-purple-500 transition-colors">
                    {project.name}
                  </h2>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {getLocalizedValue(project.tagline, locale) ||
                      getLocalizedValue(project.tagline, "en")}
                  </p>
                </div>
              </div>

              {project.technologies?.length ? (
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 px-2 py-1 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          </Link>
        ))}
      </section>
    </section>
  );
}
