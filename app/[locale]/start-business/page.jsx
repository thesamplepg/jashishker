import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import Start03 from "@/components/Start03/Start03";
import Start04 from "@/components/Start04/Start04";
import Start05 from "@/components/Start05/Start05";
import Start06 from "@/components/Start06/Start06";
import AccordionWhere from "@/components/Accordions/AccordionWhere/AccordionWhere";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";
import SetHtml from "@/components/TrText/SetHtml";

const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "ЖАШ ИШКЕР",
  description:
    "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
  icons: {
    icon: "/logo.svg",
  },
};
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const Text = ({ name }) => {
  return <TrText root={"alpha"} name={name} />;
};

const data = [
  {
    id: 1,
    title: <Text name="C1" />,
  },
  {
    id: 2,
    title: <Text name="C2" />,
  },
  {
    id: 3,
    title: <Text name="C3" />,
  },
  {
    id: 4,
    title: <Text name="C4" />,
  },
  {
    id: 5,
    title: <Text name="C5" />,
  },
  {
    id: 6,
    title: <Text name="C6" />,
  },
  {
    id: 7,
    title: <Text name="C7" />,
  },
];
const date = [
  {
    id: 1,
    numbers: "01",
  },
  {
    id: 2,
    numbers: "02",
  },
  {
    id: 3,
    numbers: "03",
  },
  {
    id: 4,
    numbers: "04",
  },
];
let item = [
  {
    id: 1,
    title: <Text name={"K27"} />,
    text: <Text name={"K28"} />,
  },
  {
    id: 2,
    title: <Text name={"K29"} />,
    text: <Text name={"K30"} />,
  },
  {
    id: 3,
    title: <Text name={"K31"} />,
    text: <Text name={"K33"} />,
  },
];

const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.startBusiness}>
        <SocialSidebar />
        <div className={s.heroStart}>
          <div className={s.heroContainer}>
            <div className={s.heroStartText}>
              <h1 className={BeVietnamPro.className}>
                <Text name={"A1"} />
              </h1>
            </div>
          </div>
        </div>
        <div className={s.startMain}>
          <div className={s.container}>
            <div className={s.startTitle}>
              <h3 className={FontManrope.className}>
                <Text name={"B1"} />
              </h3>
              <p className={FontManrope.className}>
                <span>
                  <Text name={"B2"} />
                </span>
              </p>
            </div>
            <div className={s.startBlock}>
              <div className={s.startBlockText}>
                <div className={s.startBlockTextTitle}>
                  <h5 className={FontManrope.className}>
                    <Text name={"B3"} />
                  </h5>
                  <span className={FontManrope.className}>01</span>
                </div>
                <Image
                  src="/business2.svg"
                  alt="start"
                  width={530}
                  height={400}
                />
                <p className={FontManrope.className}>
                  <Text name={"C8"} />
                </p>
              </div>
              <div className={s.startBlockImage}>
                <p className={FontManrope.className}>01</p>
                <ul>
                  {data.map((item) => (
                    <li key={item.id}>
                      <div className={s.icon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.5094 3.39694C11.6183 2.86378 12.3801 2.86378 12.4891 3.39694L13.3369 7.54462C13.6578 9.11469 14.8848 10.3417 16.4548 10.6626L20.6025 11.5103C21.1357 11.6193 21.1357 12.3811 20.6025 12.4901L16.4548 13.3378C14.8848 13.6588 13.6578 14.8857 13.3369 16.4558L12.4891 20.6035C12.3801 21.1367 11.6183 21.1367 11.5094 20.6035L10.6616 16.4558C10.3407 14.8857 9.11371 13.6588 7.54365 13.3378L3.39597 12.4901C2.8628 12.3811 2.8628 11.6193 3.39597 11.5103L7.54365 10.6626C9.11371 10.3417 10.3407 9.11469 10.6616 7.54462L11.5094 3.39694Z"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                      <span className={FontManrope.className}>
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={s.startBlock2}>
              <div className={s.startBlock2Title}>
                <h5 className={FontManrope.className}>
                  <Text name={"D1"} />
                </h5>
                <span className={FontManrope.className}>02</span>
              </div>
              <div className={s.startBlock2Text}>
                <p className={FontManrope.className}>
                  <Text name={"D2"} />
                </p>
                <span className={FontManrope.className}>
                  <Text name={"D3"} />
                </span>
              </div>
              <div className={s.startBlock2Wrap}>
                <div className={s.startBlock2Left}>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>01</span>
                    </div>
                    <p className={FontManrope.className}>
                      <Text name={"D4"} />
                    </p>
                  </div>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>02</span>
                    </div>
                    <p className={FontManrope.className}>
                      <Text name={"D5"} />
                    </p>
                  </div>
                </div>
                <div className={s.startBlock2Left}>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>03</span>
                    </div>
                    <p className={FontManrope.className}>
                      <Text name={"D6"} />
                    </p>
                  </div>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>04</span>
                    </div>
                    <p className={FontManrope.className}>
                      <Text name={"D7"} />
                    </p>
                  </div>
                  <div className={s.startCard}>
                    <div className={s.icon}>
                      <span>05</span>
                    </div>
                    <p className={FontManrope.className}>
                      <Text name={"D8"} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Start03 />
            <Start04 />
            <Start05 />
            <Start06 />
          </div>
        </div>
        <div className={s.testPage}>
          <div className={s.Accordion}>
            <div className={s.AccordionTitel}>
              <img src="/05.png" className={s.BgSvg} />
              <div className={s.AccordionTitelBlock1}>
                <h1>
                  <SetHtml root={"alpha"} name={"J1"} />
                </h1>
                <img
                  src="/group123.png"
                  alt="/"
                  className={s.AccordionTitelBlock1Image}
                />
              </div>

              <AccordionWhere />
              <div className={s.AccordionTitel1}>
                <p>
                  <Text name={"J26"} />
                </p>
                <div>
                  <p>
                    <Text name={"J27"} />
                  </p>
                  <h3>
                    {/* Все документы, кроме составленных на государственном или
                    официальном <br /> языке Кыргызской Республики, должны
                    сопровождаться нотариально <br /> засвидетельствованным
                    переводом */}

                    <Text name={"J28"} />
                  </h3>
                </div>
                <p>
                  <Text name={"K1"} />

                  <a href="https://mineconom.gov.kg/ru" target="_black">
                    https://mineconom.gov.kg/ru
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={s.AccordionSvg}>
            <div className={s.AccordionSvgTitel}>
              <span>
                <h3>
                  <SetHtml name={"K2"} root={"alpha"} />
                </h3>
                <p>
                  <Text name={"K3"} />
                </p>
              </span>
              <div className={s.AccordionSvgTitel2}>
                <h2>
                  <Text name={"F11"} />
                </h2>
                <p>
                  <Text name={"K5"} />
                </p>
                <div className={s.AccordionSvgTitel2}></div>
              </div>
              <div className={s.gridtemplatecolump}>
                <div className={s.centerText}>
                  <p>
                    <Text name={"K10"} />
                  </p>
                  <li>
                    <Text name={"K13"} />
                  </li>
                </div>
                <div className={s.raduisAll}>
                  {date.map((res, i) => (
                    <div key={i} className={s.bordeRaduis}>
                      <h4 className={BeVietnamPro.className}>{res.numbers}</h4>
                    </div>
                  ))}
                  <div className={s.panHeight}></div>
                </div>
                <div className={s.mainLeft}>
                  <p>
                    <Text name={"K6"} />
                  </p>
                  <p className={s.p}>
                    <Text name={"K11"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.sectionBack}>
          <div className={s.container}>
            <div className={s.mainRight}>
              <h1>
                <Text name={"K15"} />
              </h1>
              <nav>
                <ul>
                  <li>
                    <Text name={"K25"} />
                  </li>
                  <li>
                    <Text name={"K26"} />
                  </li>
                </ul>
                <img
                  className={s.image16}
                  src="/image16.svg"
                  alt="image15"
                  width={525}
                  height={250}
                />
              </nav>
            </div>
            <div className={s.sectionBlackall}>
              {item.map((item, index) => (
                <div key={index} className={s.sectionBlack}>
                  <nav>
                    <p>{item.title}</p>
                    <ul>
                      <li>{item.text}</li>
                    </ul>
                  </nav>
                </div>
              ))}
            </div>
            <div className={s.indexMain}>
              <h3>
                <Text name={"K40"} />
              </h3>
              <div className={s.flexMain}>
                <img
                  src="/image17.svg"
                  alt="image15"
                  width={510}
                  height={200}
                />
                <li>
                  <Text name={"K41"} />
                  <br />
                  <br />
                  <Text name={"K42"} />
                  <br />
                  <br />
                  <Text name={"K44"} />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
