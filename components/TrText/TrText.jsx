"use client";
import { useTranslations } from "next-intl";

function TrText({ root, name }) {
  const t = useTranslations(root);

  return t(name);
}

export default TrText;
 