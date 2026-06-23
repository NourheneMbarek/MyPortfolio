// export default function Certifications() {
//   const certifications = [
//     {
//       title: "Building Agents with the Google Agent Development Toolkit (ADK)",
//       issuer: "LinkedIn Learning",
//       year: "2026",
//     },
//     {
//       title:
//         "Automated Software Refactoring with OpenRewrite and Generative AI",
//       issuer: "LinkedIn Learning",
//       year: "2026",
//     },
//     {
//       title: "React: Building Progressive Web Apps (PWAs)",
//       issuer: "LinkedIn Learning",
//       year: "2026",
//     },
//     {
//       title: "Scrum Fundamentals Certified (SFC)",
//       issuer: "SCRUMstudy",
//       year: "2025",
//     },
//     {
//       title: "Advanced React",
//       issuer: "Coursera",
//       year: "2023",
//     },
//     {
//       title: "React + Redux",
//       issuer: "Sololearn",
//       year: "2021",
//     },
//     {
//       title: "Big Data Engineer – Explorer Award",
//       issuer: "IBM",
//       year: "2021",
//     },
//     {
//       title: "Predictive Analytics Modeler – Mastery Award",
//       issuer: "IBM",
//       year: "2020",
//     },
//     {
//       title: "Cloud Application Developer – Mastery Award",
//       issuer: "IBM Skills Academy",
//       year: "2020",
//     },
//     {
//       title: "Introduction to Natural Language Processing",
//       issuer: "Udemy",
//       year: "",
//     },
//     {
//       title: "Deep Learning Fundamentals",
//       issuer: "Cognitive Class",
//       year: "",
//     },
//     {
//       title: "Python 101 for Data Science",
//       issuer: "Cognitive Class",
//       year: "2018",
//     },
//     {
//       title: "Intermediate Python for Data Science",
//       issuer: "DataCamp",
//       year: "",
//     },
//     {
//       title: "Introduction to Python",
//       issuer: "DataCamp",
//       year: "",
//     },
//     {
//       title: "Cleaning Data in Python",
//       issuer: "DataCamp",
//       year: "",
//     },
//     {
//       title: "Importing Data in Python (Part 1)",
//       issuer: "DataCamp",
//       year: "",
//     },
//     {
//       title: "Importing Data in Python (Part 2)",
//       issuer: "DataCamp",
//       year: "",
//     },
//     {
//       title: "Introduction to Git for Data Science",
//       issuer: "DataCamp",
//       year: "",
//     },
//     {
//       title: "Introduction to Shell for Data Science",
//       issuer: "DataCamp",
//       year: "",
//     },
//   ];

//   return (
//     <section id="certifications" className="mt-32 scroll-mt-32">
//       <h2 className="font-semibold text-4xl mb-8">
//         Certifications
//       </h2>

//       <div className="grid md:grid-cols-2 gap-4">
//         {certifications.map((cert) => (
//           <div
//             key={`${cert.title}-${cert.issuer}`}
//             className="
//               rounded-xl
//               border border-zinc-200 dark:border-zinc-800
//               bg-zinc-100 dark:bg-[#1d1d20]
//               p-5
//               transition-all duration-300
//               hover:border-purple-500/40
//               hover:-translate-y-1
//             "
//           >
//             <h3 className="font-semibold text-lg">
//               {cert.title}
//             </h3>

//             <p className="text-zinc-500 dark:text-zinc-400 mt-1">
//               {cert.issuer}
//             </p>

//             {cert.year && (
//               <span className="inline-block mt-3 rounded-full bg-purple-500/10 text-purple-500 px-3 py-1 text-xs">
//                 {cert.year}
//               </span>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { cookies } from "next/headers";
import type { CertificationType, Locale } from "@/types";
import { getCertifications } from "@/sanity/sanity.query";
import { getLocalizedValue } from "@/utils/getLocalizedValue";

export default async function Certifications() {
  const cookieStore = cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as Locale;

  const certifications: CertificationType[] = await getCertifications();

  const title = {
    en: "Certifications",
    de: "Zertifikate",
    fr: "Certifications",
  };

  return (
    <section id="certifications" className="mt-32 scroll-mt-32">
      <h2 className="font-semibold text-4xl mb-8">{title[locale]}</h2>

      <ul className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <li
            key={cert._id}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-[#1d1d20] p-5"
          >
            <h3 className="font-semibold text-lg">{cert.title}</h3>

            <p className="text-sm text-zinc-500 mt-1">
              {cert.issuer} {cert.year ? `• ${cert.year}` : ""}
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 mt-3">
              {getLocalizedValue(cert.description, locale)}
            </p>

            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex mt-4 text-purple-500 hover:underline"
              >
                View credential
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}