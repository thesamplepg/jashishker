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

export default function Start03() {
  return (
    <div className={s.start03}>
      <div className={s.start03Title}>
        <h4 className={FontManrope.className}>
          <Text name={"E1"} />
        </h4>
        <div className={s.start03Text}>
          <span className={FontManrope.className}>03</span>
          <p className={FontManrope.className}>
            <Text name={"E2"} />
          </p>
        </div>
      </div>
      <h5>
        <Text name={"E3"} />
      </h5>
      <div className={s.start03Img}>
        <div className={s.ellipse1}>
          <span className={FontManrope.className}>
            <Text name={"E4"} />
          </span>
        </div>
        <div className={s.ellipse2}>
          <span className={FontManrope.className}>
            <Text name={"E7"} />
          </span>
        </div>

        <div className={s.ellipse3}>
          <span className={FontManrope.className}>
            <Text name={"E5"} />
          </span>
        </div>

        <div className={s.ellipse4}>
          <span className={FontManrope.className}>
            <Text name={"E6"} />
          </span>
        </div>
        <div className={s.ellipse5}>
          <span className={FontManrope.className}>
            <Text name={"E9"} />
          </span>
        </div>
      </div>
      <div className={s.start03Text2}>
        <h3>
          <Text name={"E8"} />
        </h3>
      </div>
    </div>
  );
}
