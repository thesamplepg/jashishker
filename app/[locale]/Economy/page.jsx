import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";

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

const Text = ({ name }) => {
  return <TrText root={"green_eco"} name={name} />;
};

const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.economyall}>
        <SocialSidebar />
        <div className={s.economycontainer}>
          <div className={s.leadershiptitle}>
            <h1 className={BeVietnamPro.className}>
              <Text name={"greenEco_title"} />
            </h1>
          </div>
          <hr />
          <div className={s.econtext}>
            <h4>
              <Text name={"greenEco_box1_title"} />
            </h4>
            <p>
              <Text name={"greenEco_box1_topDesc"} />
            </p>
          </div>
          <div className={s.etextend}>
            <p>
              <Text name={"greenEco_box1_bottomDesc"} />
            </p>
          </div>
          <div className={s.eimg}>
            <img
              className={s.imgr4}
              src="/leadership.svg"
              alt="leadership"
              fill
            />
          </div>
          <div className={s.eimgend}>
            <p>
              <Text name={"greenEco_box2_topDesc"} />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

// <p>
//   <Text name={"greenEco_box2_bottomDesc"} />
// </p>
