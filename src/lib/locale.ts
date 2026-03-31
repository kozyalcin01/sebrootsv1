export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';

export function isValidLocale(lang: string): lang is Locale {
  return lang === 'tr' || lang === 'en';
}
