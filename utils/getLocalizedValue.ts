import type { Locale } from "@/types";

export function getLocalizedValue<T>(
  value: Partial<Record<Locale, T>> | undefined,
  locale: Locale,
  fallback: Locale = "en"
): T | undefined {
  return value?.[locale] || value?.[fallback];
}