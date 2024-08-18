import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend"

i18n
    .use(languageDetector)
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        backend: {
            loadPath: '/translate/{{lng}}/{{ns}}.json'
        },
        ns: ['navbar', 'home', 'produk', 'kontak', 'card'],
        defaultNS: 'navbar',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie']
        }
    })

export default i18n
