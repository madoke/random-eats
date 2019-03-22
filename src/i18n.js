import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import pt from './lang/pt.json'
import en from './lang/en.json'
import de from './lang/de.json'

export const languages = {
  pt: {
    name: 'Português',
    translation: pt,
  },
  en: {
    name: 'English',
    icon: 'gb',
    translation: en,
  },
  de: {
    name: 'Deutsche',
    translation: de,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: languages,
    fallbackLng: 'pt',
    whitelist: Object.keys(languages),
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
