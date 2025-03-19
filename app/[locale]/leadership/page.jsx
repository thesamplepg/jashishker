import React from "react";
import s from "./page.module.scss";
import Footer from "@/components/Footer/Footer";

import {
  Alex_Brush,
  Be_Vietnam_Pro,
  Bebas_Neue,
  Inter,
  Manrope,
} from "next/font/google";
import Haeder from "@/components/Haeder/Haeder";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";

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
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"], // specify the desired weight here
});
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });

const manrope = Manrope({ subsets: ["latin"] });

const Text = ({ name }) => {
  return <TrText root={"lider"} name={name} />;
};

const page = () => {
  return (
    <div className={`${manrope.tet} ${s.tet}`}>
      <Haeder />
      <div className={s.leadership}>
        <SocialSidebar />
        <div className={s.leadershipTitel}>
          <div className={s.leadershiptitle}>
            <h1 className={BeVietnamPro.className}>
              <Text name={"lider_title"} />
            </h1>
          </div>
          <hr />
          <div className={s.leadershipText}>
            <h2>
              <Text name={"lider_box1_title"} />
            </h2>
            <div className={s.context}>
              <p>
                <Text name={"lider_box1_topDesc"} />
              </p>
              <p>
                <Text name={"lider_box1_desc"} />
              </p>
              <p>
                <Text name={"lider_box1_bottom_desc"} />
              </p>
            </div>
          </div>
          <div className={s.img}>
            <img
              className={s.imgs}
              src={"/leadership.svg"}
              alt="leadership"
              fill
            />
          </div>
          <div className={s.getextall}>
            <div className={s.getextEnd}>
              <p>
                <Text name={"lider_box2_desc"} />
              </p>
            </div>
            <div className={s.getextEnd1}>
              <p>
                <Text name={"lider_box2_title"} />
              </p>
            </div>
            <h4 className={s.h4}>
              <Text name={"lider_box3_title"} />
            </h4>

            <div>
              <div className={s.getextEndall}>
                <div className={s.getborder}>
                  <Image
                    src="/star.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
                <p>
                  <Text name={"lider_box3_item1"} />
                </p>
              </div>
              <div className={s.getextEndall}>
                <div className={s.getborder}>
                  <Image
                    src="/star.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
                <p>
                  <Text name={"lider_box3_item2"} />
                </p>
              </div>

              <div className={s.getextEndall}>
                <div className={s.getborder}>
                  <Image
                    src="/star.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
                <p>
                  <Text name={"lider_box3_item3"} />
                </p>
              </div>

              <div className={s.getextEndall}>
                <div className={s.getborder}>
                  <Image
                    src="/star.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
                <p>
                  <Text name={"lider_box3_item4"} />
                </p>
              </div>
              <div className={s.getextEndall}>
                <div className={s.getborder}>
                  <Image
                    src="/star.svg"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
                <p>
                  <Text name={"lider_box3_item5"} />
                </p>
              </div>
              <h5 className={s.h5}>
                <Text name={"lider_box4_title"} />
              </h5>
            </div>
          </div>
          <div className={s.getfoottext}>
            <h4>
              <Text name={"lider_box4_subtitle"} />
            </h4>
            <p>
              <Text name={"lider_box4_desc"} />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
