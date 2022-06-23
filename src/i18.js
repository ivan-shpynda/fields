import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Languagedetector from "i18next-browser-languagedetector"

i18n
  .use(initReactI18next)
  .use(Languagedetector)
  .init({
    debug: "true",
    fallbackLng: "en",
    lng: "uk",
    resources: {
      en: {
        translation: {
          title: "Fields",
          description: "Photos were taken on iPhone SE during 2020-2022 at the outskirts of Lviv."
        }
      },

      uk: {
        translation: {
          title: "Поля",
          description: "Відзнято на околицях Львова протягом 2020-2022 років на iPhone SE."
        }
      }
    }
  })

  export default i18n;
