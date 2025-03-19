"use client";

import React from "react";
import s from "./page.module.scss";
import {
  Alex_Brush,
  Be_Vietnam_Pro,
  Manrope,
  Mansalva,
} from "next/font/google";
import Image from "next/image";
import TrText from "../TrText/TrText";
import { useParams } from "next/navigation";

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const FontMansalva = Mansalva({
  subsets: ["latin"],
  weight: ["400"],
});

const Text = ({ name }) => {
  return <TrText root={"alpha"} name={name} />;
};

export default function Start05() {
  const parms = useParams();
  return (
    <div className={s.start05}>
      <div className={s.start05Content}>
        <div className={s.start05ContentTitle}>
          <span className={FontManrope.className}>05</span>
          <h2 className={FontManrope.className}>
            <Text name={"F3"} />
          </h2>
        </div>
        <p className={FontManrope.className}>
          <Text name={"F4"} />
        </p>
      </div>
      <Image
        className={s.desktop}
        src={
          parms.locale === "ru"
            ? "/bissinesRu.svg"
            : parms.locale === "en"
            ? "/bissinesEn.svg"
            : parms.locale === "ky"
            ? "/bissinesKy.svg"
            : ""
        }
        alt=""
        width={1260}
        height={909}
      />
      <Image
        className={s.mobile}
        src={
          parms.locale === "ru"
            ? "/bissinesRu.svg"
            : parms.locale === "en"
            ? "/bissinesEn.svg"
            : parms.locale === "ky"
            ? "/bissinesKy.svg"
            : ""
        }
        alt=""
        width={417}
        height={561}
      />
    </div>
  );
}
