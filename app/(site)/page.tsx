import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job"; // import job component
import Reveal from "./components/reveal";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile, BiMap } from "react-icons/bi";
import { cookies } from "next/headers";
import type { Locale } from "@/types";
import { getLocalizedValue } from "@/utils/getLocalizedValue";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ShareButton from "./components/ShareButton";
export default async function Home() {
  const cookieStore = cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as Locale;
  const profile: ProfileType[] = await getProfile();
  const stats = {
    en: [
      "5+ Years Experience",
      "20+ Delivered Features",
      "Open to Full-Time & Part-Time",
      "Germany 🇩🇪",
    ],
    de: [
      "5+ Jahre Erfahrung",
      "20+ Gelieferte Features",
      "Offen für Vollzeit & Teilzeit",
      "Deutschland 🇩🇪",
    ],
    fr: [
      "5+ Ans d'expérience",
      "20+ Fonctionnalités livrées",
      "Disponible pour CDI & Temps partiel",
      "Allemagne 🇩🇪",
    ],
  };
const locationText = {
  en: "Germany • Open for Relocation & Remote Work",
  de: "Deutschland • Offen für Umzug & Remote-Arbeit",
  fr: "Allemagne • Disponible pour mobilité et télétravail",
};
  //   const availabilityText = {
  //   en: "Available for Full-Time",
  //   de: "Verfügbar für Vollzeit",
  //   fr: "Disponible à temps plein",
  // };
  const availabilityText = {
    en: "Open to Full-Time, Part-Time & Internships",
    de: "Offen für Vollzeit, Teilzeit & Praktika",
    fr: "Disponible pour CDI, temps partiel et stages",
  };
  //   const stats = {
  //   en: [
  //     "Full Stack Developer",
  //     "React • Next.js • Laravel",
  //     "Germany 🇩🇪",
  //   ],
  //   de: [
  //     "Full-Stack-Entwicklerin",
  //     "React • Next.js • Laravel",
  //     "Deutschland 🇩🇪",
  //   ],
  //   fr: [
  //     "Développeuse Full Stack",
  //     "React • Next.js • Laravel",
  //     "Allemagne 🇩🇪",
  //   ],
  // };
  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section id="home" className="lg:mt-32 mt-20 mb-24 scroll-mt-32">
        {profile &&
          profile.map((data) => {
            const resumeUrl =
              locale === "de"
                ? data.resumeURL?.de || data.resumeURL?.en
                : data.resumeURL?.en || data.resumeURL?.de;

            return (
              <div key={data._id}>
                <section className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
                  <div className="order-1 lg:order-none">
                    <Reveal>
                      <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-4">
                        {getLocalizedValue(data.headline, locale) ||
                          "Full Stack Developer"}
                      </h1>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {stats[locale].map((stat) => (
                          <span
                            key={stat}
                            className="
                              rounded-full
                              bg-purple-500/10
                              text-purple-500
                              border border-purple-500/20
                              px-3 py-1
                              text-sm
                              font-medium
                              backdrop-blur-sm
                            "
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </Reveal>

                    <Reveal>
                      <div className="flex flex-col gap-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <PortableText
                          value={
                            Array.isArray(data.fullBio)
                              ? data.fullBio
                              : getLocalizedValue(data.fullBio, locale) || []
                          }
                        />
                      </div>
                    </Reveal>
                    <Reveal>
  <div className="mt-8 flex flex-wrap gap-3">
    {data.skills.map((skill) => (
      <span
        key={skill}
        className="
          px-3 py-1
          rounded-full
          bg-zinc-100 dark:bg-[#1d1d20]
          border border-zinc-200 dark:border-zinc-800
          text-sm font-medium
          hover:border-purple-500/40
          hover:text-purple-500
          transition-all duration-300
        "
      >
        {skill}
      </span>
    ))}
  </div>
</Reveal>
                  </div>

                  <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 order-2 lg:order-1 mb-12">
                    <Reveal>
                      <div>
                        <Image
//                           className="rounded-2xl mb-4 object-cover w-full max-w-[420px] h-[420px] bg-zinc-100 dark:bg-[#1d1d20]
//                           hover:scale-[1.02]
// transition-all duration-500"
className="
  rounded-2xl mb-4 object-cover
  w-full
  max-w-[320px] sm:max-w-[420px]
  h-[320px] sm:h-[420px]
  bg-zinc-100 dark:bg-[#1d1d20]
  hover:scale-[1.02]
  transition-all duration-500
"
                          src={data.profileImage.image}
                          width={400}
                          height={400}
                          quality={100}
                          alt={data.profileImage.alt}
                        />
                        <div
                          className="
    inline-flex items-center gap-2
    rounded-full
    bg-green-500/10
    text-green-500
    border border-green-500/20
    px-4 py-2
    text-sm
    font-medium
    mb-6
  "
                        >
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          {availabilityText[locale]}
                        </div>
                        {resumeUrl && (
                          <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            // className="flex items-center justify-center gap-x-2 bg-zinc-100 dark:bg-[#1d1d20] border border-transparent   rounded-md duration-200 py-2 text-center font-medium
                            // hover:bg-purple-500
                            // hover:text-white
                            // hover:border-purple-500
                            // dark:hover:text-white
                            // dark:hover:border-purple-500
                            // mb-2
                            
                            // "
                             className="
    w-full
    flex items-center justify-center gap-2
    bg-purple-500/10
    text-purple-500
    border border-purple-500/20
    hover:bg-purple-500
    hover:text-white
    rounded-md
    py-2
    transition-all duration-300
  "
                          >
                            <BiFile className="text-base" />
                            {locale === "de"
                              ? "Lebenslauf herunterladen"
                              : "Download Resume"}
                          </a>
                        )}
                        <ShareButton/>
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
                     <div className="flex items-center gap-2 text-zinc-500">
  <BiMap />
  {locationText[locale]}
</div>
                    </Reveal>
                    <Reveal>
                      <div className="flex items-center gap-3 ">
                        {data.socialLinks?.github && (
                          <a
                            href={data.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            title="GitHub"
                            className="
                              p-3 rounded-full
                              bg-zinc-100 dark:bg-[#1d1d20]
                              border border-transparent
                              hover:border-purple-500/40
                              hover:text-purple-500
                              hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                              hover:-translate-y-1
                              transition-all duration-300
                                      "
                          >
                            <FaGithub size={20} />
                          </a>
                        )}

                        {data.socialLinks?.linkedin && (
                          <a
                            href={data.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            title="LinkedIn"
                            className="
                             p-3 rounded-full
                              bg-zinc-100 dark:bg-[#1d1d20]
                              border border-transparent
                              hover:border-purple-500/40
                              hover:text-purple-500
                              hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                              hover:-translate-y-1
                              transition-all duration-300
                                                          "
                          >
                            <FaLinkedin size={20} />
                          </a>
                        )}
                      </div>
                    </Reveal>
                  </div>
                </section>
              </div>
            );
          })}
        {/* <HeroSvg /> */}
      </section>
 
      <Job />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
