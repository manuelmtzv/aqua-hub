import { messages } from "./i18n/messages.i18n";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages,
}));
