"use client";

import { useTranslations } from "next-intl";

export default function SetHtml({ root, name }) {
  const t = useTranslations(root);
  const text = t(name);

  return (
    <span
      style={{ display: "block" }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
