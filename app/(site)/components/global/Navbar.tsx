"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "../../icons/logo.png";
import ThemeToggle from "../ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";


const labels = {
  en: {
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
    home: "Home",
  },
  de: {
    experience: "Erfahrung",
    projects: "Projekte",
    certifications: "Zertifikate",
    contact: "Kontakt",
    home: "Start",
  },
  fr: {
    experience: "Expérience",
    projects: "Projets",
    certifications: "Certifications",
    contact: "Contact",
    home: "Accueil",
  },
};

type Locale = "en" | "de" | "fr";

const navItems = [
  { id: "home", href: "/#home" },
  { id: "experience", href: "/#experience" },
  { id: "projects", href: "/#projects" },
  { id: "certifications", href: "/#certifications" },
  { id: "contact", href: "/#contact" },
] as const;

export default function Navbar() {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const getCookieLocale = () => {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="));

      return (cookie?.split("=")[1] || "en") as Locale;
    };

    setLocale(getCookieLocale());

    const interval = setInterval(() => {
      setLocale(getCookieLocale());
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
    
  //     (entries) => {
  //       const visibleSection = entries.find((entry) => entry.isIntersecting);
        

  //       if (visibleSection) {
  //         setActiveSection(visibleSection.target.id);
  //       }
  //     },
  //     {
  //       rootMargin: "-30% 0px -55% 0px",
  //       threshold: 0.1,
  //     }
  //   );

  //   navItems.forEach((item) => {
  //     const section = document.getElementById(item.id);
  //     if (section) observer.observe(section);
  //   });

  //   return () => observer.disconnect();
  // }, []);
  useEffect(() => {
  const getCookieLocale = () => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="));

    return (cookie?.split("=")[1] || "en") as Locale;
  };

  const updateLocale = () => setLocale(getCookieLocale());

  updateLocale();

  window.addEventListener("languageChange", updateLocale);

  return () => window.removeEventListener("languageChange", updateLocale);
}, []);
useEffect(() => {
  const handleScroll = () => {
    const offset = 160;

    const currentSection = navItems
      .map((item) => {
        const element = document.getElementById(item.id);

        if (!element) return null;

        return {
          id: item.id,
          top: element.offsetTop - offset,
        };
      })
      .filter(Boolean)
      .reverse()
      .find((section) => window.scrollY >= section!.top);

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-5 md:px-0 px-6">
        <Link href="/">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-purple-500"
                        : "text-zinc-700 dark:text-zinc-300 hover:text-purple-500"
                    }`}
                  >
                    {labels[locale][item.id]}
                  </Link>
                </li>
              );
            })}

            <li>
              <LanguageSwitcher />
            </li>

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}