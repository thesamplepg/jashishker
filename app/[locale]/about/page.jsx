"use client";

import React from "react";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import s from "./page.module.scss";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const Text = ({ name }) => {
  return <TrText root={"about"} name={name} />;
};

const data = [
  {
    id: 1,
    content: Text({ name: "about_box6_item1" }),
  },
  {
    id: 2,
    content: Text({ name: "about_box6_item2" }),
  },
  {
    id: 3,
    content: Text({ name: "about_box6_item3" }),
  },
];

const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const Page = () => {
  const parms = useParams();

  const t = useTranslations("about");
  return (
    <>
      <Haeder />
      <div className={s.aboutAll}>
        <SocialSidebar />
        <div className={s.aboutContainer}>
          <div className={s.aboutTitle}>
            <h1 className={BeVietnamPro.className}>
              <Text name={"about_title"} />
            </h1>
          </div>
          <hr />
          <nav className={s.navflex}>
            <ul>
              <h4>
                <Text name={"about_box1_title_top"} />
                <br />
                <Text name={"about_box1_title_bottom"} />
              </h4>
              <li>
                <Text name={"about_box1_desc"} />
              </li>
            </ul>
            <Image
              className={s.traced}
              src="/Vector.svg"
              alt="Project illustration"
              width={622}
              height={446}
            />
          </nav>
          <div className={s.navblock}>
            <div className={s.ul}>
              <h4>
                <Text name={"about_box2_title"} />
              </h4>
              <ul className={s.list}>
                <p>
                  <Text name={"about_box2_subtitle"} />
                </p>
                <li>
                  <Text name={"about_box2_desc_top"} />
                  <br />
                  <br />
                  <Text name={"about_box2_desc_bottom"} />
                </li>
              </ul>
              <Image
                className={s.metam}
                src="/Metam.svg"
                alt="Project goal illustration"
                width={273}
                height={266}
              />
            </div>
          </div>
        </div>
        <div className={s.illustration}>
          <div className={s.aboutContainer}>
            <div className={s.backtitle}>
              <h4>
                <Text name={"about_box3_title"} />
              </h4>
            </div>
            <div className={s.transformborder}>
              <Image
                className={s.transfrom}
                src={
                  parms.locale === "ru"
                    ? "/groupRu.svg"
                    : parms.locale === "en"
                    ? "/groupEn.svg"
                    : parms.locale === "ky"
                    ? "/groupKy.svg"
                    : ""
                }
                alt="Project illustration"
                width={1247}
                height={870}
              />
            </div>
            <div className={s.abtitle}>
              <h4>
                <Text name={"about_box3_subtitle"} />
              </h4>
              <ul>
                <li>
                  <Text name={"about_box3_desc"} />
                </li>
              </ul>
            </div>
            <div className={s.contextcenter}>
              <h4>
                <Text name={"about_box4_desc"} />
              </h4>
            </div>
          </div>
        </div>
        <div className={s.aboutContainer}>
          <h4 className={s.ourteamtitle}>
            <Text name={"about_box5_title"} />
          </h4>
          <div className={s.ourteamflex}>
            <p>
              <Text name={"about_box5_subtitle"} />
            </p>
            <img
              className={s.ourimg}
              src="/image5.svg"
              alt="Project illustration"
              width={600}
              height={400}
            />
          </div>
          <nav className={s.ourteamul}>
            <li className={s.ourteamli}>
              <Text name={"about_box5_desc_left"} />
            </li>
            <li className={s.ourteamli2}>
              <Text name={"about_box5_desc_right"} />
            </li>
          </nav>
          <div className={s.ourflex2}>
            <nav>
              <p>
                <Text name={"about_box6_subtitle"} />
              </p>
              <h4>
                <Text name={"about_box6_title"} />
              </h4>
            </nav>
            <img
              className={s.ourimage}
              src="/image6.svg"
              alt="Project illustration"
              width={600}
              height={400}
            />
          </div>
          <div className={s.ourflex3}>
            <Image
              className={s.ourimage}
              width={600}
              height={362}
              src="/image7.svg"
              alt="Project illustration"
            />
            <div className={s.flexblock}>
              {data.map((item, index) => (
                <div key={index} className={s.flexitem}>
                  <div className={s.star}>
                    <Image
                      src="/star.svg"
                      alt="Project illustration"
                      width={24}
                      height={24}
                    />
                  </div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={s.ourtitle}>
            <p>
              <Text name={"about_box7_subtitle"} />
            </p>
            <h4>
              <Text name={"about_box7_title"} />
            </h4>
          </div>
          <div className={s.ourtextfleximg}>
            <nav>
              <p>
                <Text name={"about_box7_desc_top"} />

                <br />
                <br />
                <Text name={"about_box7_desc_bottom"} />
              </p>
              <div className={s.ourtextimg2}>
                <h5>
                  <Text name={"about_box7_single_desc"} />
                </h5>
              </div>
            </nav>
            <Image
              className={s.ourtextimg}
              src="/image8.svg"
              alt="Project illustration"
              width={600}
              height={440}
            />
          </div>
          <div className={s.footflex4}>
            <p>
              <Text name={"about_box8_subtitle"} />
            </p>
            <h4>
              <Text name={"about_box8_title"} />
            </h4>
          </div>
          <div className={s.footborder}>
            <h4>
              <Text name={"about_box8_unTitle"} />
            </h4>
            <div className={s.img4}>
              <img
                className={s.footimgborder}
                src="/image9.svg"
                alt="Project illustration"
                width={1070}
                height={230}
              />
            </div>
          </div>
          <div className={s.footraduis}>
            <h4>
              <Text name={"get_25"} />
            </h4>
            <div className={s.img5}>
              <img
                src={
                  parms.locale === "ru"
                    ? "/aboutRu.svg"
                    : parms.locale === "en"
                    ? "/aboutEn.svg"
                    : parms.locale === "ky"
                    ? "/aboutKy.svg"
                    : ""
                }
                alt="Project illustration"
                width={944}
                height={683}
              />
            </div>
          </div>
          <div className={s.footend}>
            <p>
              <Text name={"about_box9_desc"} />
            </p>
            <h4>
              <Text name={"about_box9_title"} />
            </h4>
          </div>
          <div className={s.Block6s}>
            <div className={s.Block6}>
              <h2>{t("about_title_1")}</h2>
              <img src="/jash_1.jpg" alt="" />
              <p>{t("about_title_1_1")}</p>
            </div>

            <div className={s.Block6}>
              <h2>{t("about_title_2")}</h2>
              <img src="/jash2.jpg" alt="" />
              <p>{t("about_title_2_2")}</p>
            </div>

            <div className={s.Block6}>
              <h2>{t("about_title_3")}</h2>
              <img src="/jash3.jpg" alt="" />
              <p>{t("about_title_3_3")}</p>
            </div>

            <div className={s.Block6}>
              <h2>{t("about_title_4")}</h2>
              <img src="/jash4.jpg" alt="" />
              <p>{t("about_title_4_4")}</p>
            </div>

            <div className={s.Block6}>
              <h2>{t("about_title_5")}</h2>
              <img src="/jash5.jpg" alt="" />
              <p>{t("about_title_5_5")}</p>
            </div>
  {/* 
            <div className={s.Block6}>
              <p>{t("about_title_5_5")}</p>
            </div> */}

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_6")}</h2>
                <img src="/jash6.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_6_1")} </li>
                <li>{t("about_title_6_2")}</li>
                <li>{t("about_title_6_3")} </li>
                <li>{t("about_title_6_4")}</li>
                <li>{t("about_title_6_5")}</li>
                <li>{t("about_title_6_6")}</li>
                <li>{t("about_title_6_7")}</li>
                <li>{t("about_title_6_8")}</li>
                <li>{t("about_title_6_9")}</li>
                <li>{t("about_title_6_10")}</li>
              </ul>
              <p>{t("about_title_6_0")}</p>
            </div>}

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_7")}</h2>
                <img src="/jash7.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_7_1")} </li>
                <li>{t("about_title_7_2")}</li>
                <li>{t("about_title_7_3")} </li>
                <li>{t("about_title_7_4")}</li>
                <li>{t("about_title_7_5")}</li>
                <li>{t("about_title_7_6")}</li>
                <li>{t("about_title_7_7")}</li>
                <li>{t("about_title_7_8")}</li>
              </ul>
              <p>{t("about_title_6_0")}</p>
            </div>}

            <div className={s.Block6}>
              <h2>{t("about_title_8")}</h2>
              <img src="/jash8.jpg" alt="" />
              <p>{t("about_title_8_1")}</p>
              <p>{t("about_title_8_2")}</p>
            </div>

            <div className={s.Block6}>
              <h2>{t("about_title_9")}</h2>
              <img src="/jash9.jpg" alt="" />
              <p>{t("about_title_9_1")}</p>
              <p>{t("about_title_9_2")}</p>
            </div>   

            <div className={s.Block6}>
              <h2>{t("about_title_10")}</h2>
              <img src="/jash10.jpg" alt="" />
              <p>{t("about_title_10_1")}</p>
              <p>{t("about_title_10_2")}</p>
            </div>     

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_11")}</h2>
                <img src="/jash11.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_11_1")} </li>
                <li>{t("about_title_11_2")}</li>
                <li>{t("about_title_11_3")} </li>
                <li>{t("about_title_11_4")}</li>
                <li>{t("about_title_11_5")}</li>
                <li>{t("about_title_11_6")}</li>
                <li>{t("about_title_11_7")}</li>
              </ul>
            </div>}    

            <div className={s.Block6}>
              <h2>{t("about_title_12")}</h2>
              <img src="/jash12.jpg" alt="" />
              <p>{t("about_title_12_1")}</p>
              <p>{t("about_title_12_2")}</p>
              <p>{t("about_title_12_3")}</p>
            </div>   

            <div className={s.Block6}>
              <h2>{t("about_title_13")}</h2>
              <img src="/jash13.jpg" alt="" />
              <p>{t("about_title_13_1")}</p>
              <p>{t("about_title_13_2")}</p>
            </div> 

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_14")}</h2>
                <img src="/jash14.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_14_1")} </li>
                <li>{t("about_title_14_2")}</li>
                <li>{t("about_title_14_3")} </li>
                <li>{t("about_title_14_4")}</li>
                <li>{t("about_title_14_5")}</li>
                <li>{t("about_title_14_6")}</li>
                <li>{t("about_title_14_7")}</li>
                <li>{t("about_title_14_8")}</li>
                <li>{t("about_title_14_9")}</li>
                <li>{t("about_title_14_10")}</li>
                <li>{t("about_title_14_11")}</li>
                <li>{t("about_title_14_12")}</li>
                <li>{t("about_title_14_13")}</li>
              </ul>
              <p>{t("about_title_14_14")}</p>
            </div>}

            <div className={s.Block6}>
              <h2>{t("about_title_15")}</h2>
              <img src="/jash15.jpg" alt="" />
              <p>{t("about_title_15_1")}</p>
              <p>{t("about_title_15_2")}</p>
            </div>

            <div className={s.Block6}>
              <h2>{t("about_title_16")}</h2>
              <img src="/jash16.jpg" alt="" />
              <p>{t("about_title_16_1")}</p>
              <p>{t("about_title_16_2")}</p>
              <p>{t("about_title_16_3")}</p>
            </div>

            <div className={s.Block6}>
              <h2>{t("about_title_17")}</h2>
              <img src="/jash17.jpg" alt="" />
              <p>{t("about_title_17_1")}</p>
              <p>{t("about_title_17_2")}</p>
              <p>{t("about_title_17_3")}</p>
              <p>{t("about_title_17_4")}</p>
            </div>

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_19")}</h2>
                <img src="/jash19.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_19_1")} </li>
                <li>{t("about_title_19_2")}</li>
                <li>{t("about_title_19_3")} </li>
                <li>{t("about_title_19_4")}</li>
                <li>{t("about_title_19_5")}</li>
                <li>{t("about_title_19_6")}</li>
                <li>{t("about_title_19_7")}</li>
                <li>{t("about_title_19_8")}</li>
                <li>{t("about_title_19_9")}</li>
    
              </ul>
              <p>{t("about_title_19_10")}</p>
            </div>}

            <div className={s.Block6}>
              <h2>{t("about_title_20")}</h2>
              <img src="/jash20.jpg" alt="" />
              <p>{t("about_title_20_1")}</p>
              <p>{t("about_title_20_2")}</p>
              <p>{t("about_title_20_3")}</p>  
            </div>

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_21")}</h2>
                <img src="/jash21.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_21_1")} </li>
                <li>{t("about_title_21_2")}</li>
                <li>{t("about_title_21_3")} </li>
              </ul>
              <p>{t("about_title_21_4")}</p>
            </div>}

            <div className={s.Block6}>
              <h2>{t("about_title_22")}</h2>
              <img src="/jash22.jpg" alt="" />
              <p>{t("about_title_22_1")}</p>
              <p>{t("about_title_22_2")}</p>
              <p>{t("about_title_22_3")}</p>  
            </div>

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_23")}</h2>
                <img src="/jash23.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_23_1")} </li>
                <li>{t("about_title_23_2")}</li>
                <li>{t("about_title_23_3")} </li>
              </ul>
              <p>{t("about_title_23_4")}</p>
            </div>}

            <div className={s.Block6}>
              <h2>{t("about_title_24")}</h2>
              <img src="/jash24.jpg" alt="" />
              <p>{t("about_title_24_1")}</p>
              <p>{t("about_title_24_2")}</p>
            </div>

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_25")}</h2>
                <img src="/jash25.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_25_1")} </li>
                <li>{t("about_title_25_2")}</li>
              </ul>
              <p>{t("about_title_25_3")}</p>
            </div>}

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_26")}</h2>
                <img src="/jash26.jpg" alt="" />
              </div>  
              <ul className={s.Block6_ul}>
                <li>{t("about_title_26_1")} </li>
                <li>{t("about_title_26_2")}</li>
                <li>{t("about_title_26_3")} </li>
                <li>{t("about_title_26_4")} </li>
              </ul>
              
            </div>}

            {<div className={s.Block6}>
              <div className={s.Block6_image}>
                <h2>{t("about_title_27")}</h2>
                <img src="/jash27.jpg" alt="" />
              </div> 
              <ul className={s.Block6_ul}>
                <li>{t("about_title_27_1")} </li>
                <li>{t("about_title_27_2")}</li>
                <li>{t("about_title_27_3")} </li>
                <li>{t("about_title_27_4")} </li>
                <li>{t("about_title_27_5")} </li>
                <li>{t("about_title_27_6")} </li>
              </ul>
              
            </div>}


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

// <div className={s.Block6}>
//   <h2>{t("about_title_1")}</h2>

//   <img src="/image5.svg" alt="" />

//   <p>{t("about_title_1")}</p>
// </div>

// </div>
