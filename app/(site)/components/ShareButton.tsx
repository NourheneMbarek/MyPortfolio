"use client";

import { BiShareAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

type Locale = "en" | "de" | "fr";

export default function ShareButton() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="));

    setLocale((cookie?.split("=")[1] || "en") as Locale);
  }, []);

  const texts = {
    en: {
      button: "Share Profile",
      title: "Nourhene Mbarek Portfolio",
      text: "Check out my Full Stack Developer portfolio",
      copied: "Portfolio link copied!",
    },
    de: {
      button: "Profil teilen",
      title: "Portfolio von Nourhene Mbarek",
      text: "Schau dir mein Full-Stack-Developer-Portfolio an",
      copied: "Portfolio-Link kopiert!",
    },
    fr: {
      button: "Partager le profil",
      title: "Portfolio de Nourhene Mbarek",
      text: "Découvrez mon portfolio de développeuse Full Stack",
      copied: "Lien du portfolio copié !",
    },
  };

  const handleShare = async () => {
    const shareData = {
      title: texts[locale].title,
      text: texts[locale].text,
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.origin);
        alert(texts[locale].copied);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleShare}
   
       className="
       mt-2
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
      <BiShareAlt />
      {texts[locale].button}
    </button>
  );
}