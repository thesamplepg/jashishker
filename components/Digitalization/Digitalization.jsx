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
import dynamic from "next/dynamic";
import SetHtml from "../TrText/SetHtml";
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
  return <TrText root={"digital"} name={name} />;
};

export default function Digitalization() {
  const parms = useParams();
  return (
    <div className={s.digitalization}>
      <div className={s.container}>
        <div className={s.digitalizationTitle}>
          <h5 className={FontManrope.className}>
            <Text name={"digital_box3_title"} />
          </h5>
          <p className={FontManrope.className}>
            <Text name={"digital_box3_desc"} />
          </p>
          <div className={s.digitalizationImg}>
            <Image
              src={
                parms.locale === "ru"
                  ? "/digitalRu.svg"
                  : parms.locale === "en"
                  ? "/digitalEn.svg"
                  : parms.locale === "ky"
                  ? "/digitalKy.svg"
                  : ""
              }
              width={1200}
              height={900}
              alt=""
            />
          </div>
        </div>
        <div className={s.digitalizationContent}>
          <div className={s.digitalizationWrapper}>
            <div className={s.digitalizationLeft}>
              <h2 className={FontMansalva.className}>
                <SetHtml root={"digital"} name={"digital_box4_title"} />
              </h2>
            </div>
            <div className={s.digitalizationRight}>
              <p className={FontManrope.className}>
                <Text name={"digital_box4_listTitle"} />
              </p>
              <ul className={FontManrope.className}>
                <li>
                  <Text name={"digital_box4_list_1"} />
                </li>
                <li>
                  <Text name={"digital_box4_list_2"} />
                </li>
                <li>
                  <Text name={"digital_box4_list_3"} />
                </li>
                <li>
                  <Text name={"digital_box4_list_4"} />
                </li>
                <li>
                  <Text name={"digital_box4_list_5"} />
                </li>
              </ul>
              <p className={FontManrope.className}>
                <Text name={"digital_box4_desc"} />
              </p>
            </div>
          </div>
          <div className={s.digitalizationWrapper}>
            <div className={s.digitalizationRight}>
              <p className={FontManrope.className}>
                <Text name={"digital_box5_listTitle"} />
              </p>
              <ul className={FontManrope.className}>
                <li>
                  <Text name={"digital_box5_list_1"} />
                </li>
                <li>
                  <Text name={"digital_box5_list_2"} />
                </li>
                <li>
                  <Text name={"digital_box5_list_3"} />
                </li>
              </ul>
              <p className={FontManrope.className}>
                <Text name={"digital_box5_list_4"} />
              </p>
            </div>
            <div className={s.digitalizationLeft}>
              <h2 className={FontMansalva.className}>
                <SetHtml root={"digital"} name={"digital_box5_title"} />
              </h2>
            </div>
          </div>
          <div className={s.digitalizationWrapper}>
            <div className={s.digitalizationLeft}>
              <h2 className={FontMansalva.className}>
                <SetHtml root={"digital"} name={"digital_box6_title"} />
              </h2>
            </div>
            <div className={s.digitalizationRight}>
              <p className={FontManrope.className}>
                <Text name={"digital_box6_listTitle"} />
              </p>
              <ul className={FontManrope.className}>
                <li>
                  <Text name={"digital_box6_list_1"} />
                </li>
                <li>
                  <Text name={"digital_box6_list_2"} />
                </li>
                <li>
                  <Text name={"digital_box6_list_3"} />
                </li>
                <li>
                  <Text name={"digital_box6_list_4"} />
                </li>
                <li>
                  <Text name={"digital_box6_list_5"} />
                </li>
              </ul>
              <p className={FontManrope.className}>
                <Text name={"digital_box6_desc"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
