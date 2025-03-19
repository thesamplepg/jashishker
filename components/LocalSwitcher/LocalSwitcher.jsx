"use client";

import React, { useState, useTransition } from "react";
import s from "./page.module.scss";
import { useLocale, useTranslation } from "next-intl";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const LocalSwitcher = () => {
  const locale = useLocale();
  const [select, setSelect] = useState();
  const [_, startTransition] = useTransition();
  console.log(locale, "test222");

  const handleLocale = (e) => {
    setSelect(e.target.value);
    startTransition(() => {
      window.location.href = `/${e.target.value}`;
    });
  };

  return (
    <div className={s.LocalSwitcher}>
      <select
        value={locale}
        onChange={(e) => handleLocale(e)}
        className={`${s.select} ${s.manrope} `}
      >
        <option value="ru">Ру</option>
        <option value="ky">Ку</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default LocalSwitcher;