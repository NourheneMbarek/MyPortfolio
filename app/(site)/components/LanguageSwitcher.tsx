"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="));

    if (cookie) {
      setLocale(cookie.split("=")[1]);
    }
  }, []);

  const changeLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    setLocale(newLocale);
     window.dispatchEvent(new Event("languageChange"));
    router.refresh();
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 rounded transition-colors ${
            locale === lang.code
              ? "bg-purple-600 text-white"
              : "text-zinc-500 hover:text-purple-500"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}