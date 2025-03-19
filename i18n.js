import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ru", , "ky"];

export default getRequestConfig(async ({ locale, ...props }) => {
  if (!locales.includes(locale)) notFound();
  // if (locale === "ru") {
  //   return {
  //     messages: (await import(`./messages/ru.json`)).default,
  //   };
  // }
  // if (locale === "en") {
  //   return {
  //     messages: (await import(`./messages/en.json`)).default,
  //   };
  // }
  // if (locale === "ky") {
  //   return {
  //     messages: (await import(`./messages/ky.json`)).default,
  //   };
  // }
  return {
    messages: (await import(`@/locales/${locale}/default.json`)).default,
  };
});
