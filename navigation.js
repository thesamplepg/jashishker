import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ru", "ky"];
export const localePrefix = "as-needed";

export const {

} = createSharedPathnamesNavigation({ locales, localePrefix });
