import { createI18n } from "vue-i18n";

import tr from "./tr.json";
import en from "./en.json";

const i18n = createI18n({
  locale: "tr",
  fallbackLocale: "tr",
  messages: {
    tr,
    en,
  },
  legacy: false,
});

export default i18n;
