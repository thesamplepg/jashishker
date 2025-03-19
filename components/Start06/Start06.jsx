import React from "react";
import s from "./page.module.scss";
import {
  Alex_Brush,
  Be_Vietnam_Pro,
  Manrope,
  Mansalva,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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

const data = [
  {
    id: 1,
    title: <Text name={"F13"} />,
  },
  {
    id: 2,
    title: <Text name={"F14"} />,
  },
  {
    id: 3,
    title: <Text name={"F15"} />,
  },
  {
    id: 4,
    title: <Text name={"F17"} />,
  },
];

export default function Start06() {
  return (
    <div className={s.start}>
      <div className={s.startBlock}>
        <div className={s.startBlockTitle}>
          <span className={FontManrope.className}>06</span>
          <h3 className={FontManrope.className}>
            <Text name={"F5"} />
          </h3>
        </div>
        <div className={s.startBlockText}>
          <p className={FontManrope.className}>
            <Text name={"F7"} />
          </p>
          <div className={s.startBlockLink}>
            <span className={FontManrope.className}>Ссылка:</span>
            <Link
              target="_blank"
              className={FontManrope.className}
              href="https://mineconom.gov.kg/ru/direct/385/398"
             
            >
              https://mineconom.gov.kg/ru/direct/385/398
            </Link>
          </div>
        </div>
      </div>
      <div className={s.startContent}>
        <p className={FontManrope.className}>
          <Text name={"F8"} />
        </p>
        <h5 className={FontManrope.className}>
          <Text name={"F9"} />
        </h5>
      </div>
      <div className={s.startContent}>
        <p>
          <Text name={"K4"} />
        </p>
        <div className={s.startContentRight}>
          <h5>
            <Text name={"K5"} />
          </h5>
          <div className={s.startContentList}>
            {data.map((item, key) => {
              return (
                <div className={s.startContentItem} key={key}>
                  <div className={s.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.5094 3.39673C11.6183 2.86357 12.3801 2.86357 12.4891 3.39673L13.3369 7.54441C13.6578 9.11448 14.8848 10.3415 16.4548 10.6624L20.6025 11.5101C21.1357 11.6191 21.1357 12.3809 20.6025 12.4899L16.4548 13.3376C14.8848 13.6585 13.6578 14.8855 13.3369 16.4556L12.4891 20.6033C12.3801 21.1364 11.6183 21.1364 11.5094 20.6033L10.6616 16.4556C10.3407 14.8855 9.11371 13.6585 7.54365 13.3376L3.39597 12.4899C2.8628 12.3809 2.8628 11.6191 3.39597 11.5101L7.54365 10.6624C9.11371 10.3415 10.3407 9.11448 10.6616 7.54441L11.5094 3.39673Z"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
