import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import pt from './lang/pt.json'
import en from './lang/en.json'

const resources = {
    en: {
        translation: en,
    },
    pt: {
        translation: pt,
    },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'pt',
    whitelist: ['pt', 'en'],
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
