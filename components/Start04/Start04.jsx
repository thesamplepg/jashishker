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

export default function Start04() {
  return (
    <div className={s.start04}>
      <div className={s.start04Title}>
        <h4 className={FontManrope.className}>
          <Text name={"F1"} />
        </h4>
        <div className={s.start04Text}>
          <Image src="/ellipse04.svg" width={60} height={40} alt="" />
          <span>04</span>
        </div>
      </div>
      <div className={s.start04Wrapper}>
        <Image src="/start04.svg" alt="" width={520} height={220} />
        <p>
          <Text name={"F2"} />
        </p>
      </div>
    </div>
  );
}
