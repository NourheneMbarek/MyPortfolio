import { BiEnvelope } from "react-icons/bi";
import { cookies } from "next/headers";
import type { Locale } from "@/types";
import PortfolioQRCode from "./PortfolioQRCode";

export default function Contact() {
  const cookieStore = cookies();
  const locale = (cookieStore.get("NEXT_LOCALE")?.value || "en") as Locale;

  const content = {
    en: {
      title: "Contact",
      description:
        "Open for Full-Time, Part-Time and Internship opportunities in Software Development.",
      button: "Contact me",
    },
    de: {
      title: "Kontakt",
      description:
        "Offen für Vollzeit-, Teilzeit- und Praktikumsstellen im Bereich Softwareentwicklung.",
      button: "Kontakt aufnehmen",
    },
    fr: {
      title: "Contact",
      description:
        "Disponible pour des postes à temps plein, à temps partiel et des stages en développement logiciel.",
      button: "Me contacter",
    },
  };

  return (
    <section id="contact" className="mt-32 scroll-mt-32">
      <h2 className="font-semibold text-4xl mb-4">{content[locale].title}</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
        {content[locale].description}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <a
          href="mailto:nourhene96mbarek@gmail.com"
          className="
            inline-flex items-center gap-2
            rounded-full
            bg-purple-500/10
            text-purple-500
            border border-purple-500/20
            px-4 py-2
            hover:bg-purple-500
            hover:text-white
            transition-all duration-300
          "
        >
          <BiEnvelope />
          {content[locale].button}
        </a>

        <PortfolioQRCode />
      </div>
      {/* <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
        {content[locale].description}
      </p>

      <a
        href="mailto:nourhene96mbarek@gmail.com"
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-purple-500/10
          text-purple-500
          border border-purple-500/20
          px-4 py-2
          hover:bg-purple-500
          hover:text-white
          transition-all duration-300
        "
      >
        <BiEnvelope />
        {content[locale].button}
      </a>
     <PortfolioQRCode /> */}
    </section>
  );
}
