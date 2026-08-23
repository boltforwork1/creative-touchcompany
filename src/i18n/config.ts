import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en.json"
import ar from "./locales/ar.json"

export const LANGUAGES = ["en", "ar"] as const
export type Language = (typeof LANGUAGES)[number]
export const DEFAULT_LANGUAGE: Language = "en"
export const STORAGE_KEY = "ct-lang"

const stored = (typeof localStorage !== "undefined"
  ? (localStorage.getItem(STORAGE_KEY) as Language | null)
  : null) as Language | null

const initialLang: Language =
  stored && LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLang,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  returnNull: false,
})

export function applyDocumentLanguage(lang: Language) {
  if (typeof document === "undefined") return
  const isAr = lang === "ar"
  document.documentElement.lang = lang
  document.documentElement.dir = isAr ? "rtl" : "ltr"
}

applyDocumentLanguage(initialLang)
i18n.on("languageChanged", (lang) => {
  const nextLanguage = LANGUAGES.includes(lang as Language)
    ? (lang as Language)
    : DEFAULT_LANGUAGE
  applyDocumentLanguage(nextLanguage)
  localStorage.setItem(STORAGE_KEY, nextLanguage)
})

export default i18n
