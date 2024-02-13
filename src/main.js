import { createI18n } from "vue-i18n"
import { texts } from "./assets/texts"

import "./assets/main.scss"
import { createApp } from "vue"
import App from "./App.vue"

import { inject } from "@vercel/analytics"

inject()

const i18n = createI18n({
    legacy: false,
    locale: navigator.language,
    fallbackLocale: "en",
    messages: texts
})

createApp(App).use(i18n).mount("#app")
