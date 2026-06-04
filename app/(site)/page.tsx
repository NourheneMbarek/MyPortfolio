import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job"; // import job component
import Reveal from "./components/reveal";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {/* {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <Reveal>
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                  {data.headline}
                </h1>
              </Reveal>

              <Reveal>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {data.shortBio}
                </p>
              </Reveal>
              <Reveal>
                <ul className="flex items-center gap-x-6 my-10">
                  {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                        >
                          {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>
              </Reveal>
            </div>
          ))} */}
            {profile &&
                  profile.map((data) => (
                    <div key={data._id}>
                      <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
                        <div className="order-2 lg:order-none">
                          <Reveal>
                            <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                              I&apos;m {data.fullName}. I live in Germany, where I
                              design the future.
                            </h1>
                          </Reveal>
                          <Reveal>
                            <div className="flex flex-col gap-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              <PortableText value={data.fullBio} />
                            </div>
                          </Reveal>
                        </div>
          
                        <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                          <Reveal>
                            <div>
                              <Image
                                className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-zinc-100 dark:bg-[#1d1d20]"
                                src={data.profileImage.image}
                                width={400}
                                height={400}
                                quality={100}
                                alt={data.profileImage.alt}
                              />
          
                              <a
                                href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                                className="flex items-center justify-center gap-x-2 bg-zinc-100 dark:bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                              >
                                <BiFile className="text-base" /> Download Resumé
                              </a>
                            </div>
                          </Reveal>
          
                          <Reveal>
                            <ul>
                              <li>
                                <a
                                  href={`mailto:${data.email}`}
                                  className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                                >
                                  <BiEnvelope className="text-lg" />
                                  {data.email}
                                </a>
                              </li>
                            </ul>
                          </Reveal>
                        </div>
                      </section>
          
                      <Reveal>
                        <section className="mt-24 max-w-2xl">
                          <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
                          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
                            I&apos;ve spent few years working on my skills. In no
                            particular order, here are a few of them.
                          </p>
          
                          <ul className="flex flex-wrap items-center gap-3 mt-8">
                            {data.skills.map((skill, id) => (
                              <li
                                key={id}
                                className="bg-zinc-100 dark:bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </section>
                      </Reveal>
                    </div>
                  ))}
        <HeroSvg />
      </section>
      <Job />
    </main>
  );
}
