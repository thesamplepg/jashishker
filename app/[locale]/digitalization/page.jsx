import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accordion";
import Digitalization from "@/components/Digitalization/Digitalization";
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
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"], // specify the desired weight here
});

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const Text = ({ name }) => {
  return <TrText root={"digital"} name={name} />;
};

const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.digitalization}>
        <SocialSidebar />
        <div className={s.container}>
          <h2 className={BeVietnamPro.className}>
            <Text name={"digital_title"} />
          </h2>
          <div className={s.border} />
          <div className={s.hero}>
            <div className={s.heroText}>
              <h5 className={FontManrope.className}>
                <Text name={"digital_box1_title"} />
              </h5>
              <p className={FontManrope.className}>
                <Text name={"digital_box1_desc"} />
              </p>
            </div>
            <Image
              src="/digitalization.svg"
              width={1240}
              height={500}
              alt="digitalization"
              objectFit="cover"
            />
          </div>
          <div className={s.content}>
            <div className={s.contentText}>
              <h4 className={FontManrope.className}>
                <Text name={"digital_box2_title"} />
              </h4>
              <div className={s.contentTextBlock}>
                <p></p>
                <p className={FontManrope.className}>
                  <Text name={"digital_box2_desc"} />
                </p>
              </div>
            </div>
          </div>
          <Digitalization />
          <div className={s.contentBlock}>
            <div className={s.contentText}>
              <h4 className={FontManrope.className}>
                <Text name={"digital_box7_title"} />
              </h4>
              <div className={s.contentTextBlock}>
                <span></span>
                <div className={s.contentTextBlockList}>
                  <p className={FontManrope.className}>
                    <Text name={"digital_box7_desc"} />
                  </p>
                  <p className={FontManrope.className}>
                    <Text name={"digital_box7_desc_2"} />
                  </p>
                  <p className={FontManrope.className}>
                    <Text name={"digital_box7_desc_3"} />
                  </p>
                  <p className={FontManrope.className}>
                    <Text name={"digital_box7_desc_4"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Accordion />
        <div className={s.container}>
          <div className={s.contentBlock3}>
            <div className={s.contentText}>
              <h4 className={FontManrope.className}>
                <Text name={"digital_box9_title"} />
              </h4>
              <div className={s.contentTextBlock}>
                <span></span>
                <div className={s.contentTextBlockList}>
                  <p className={FontManrope.className}>
                    <Text name={"digital_box9_desc"} />
                  </p>
                  <p className={FontManrope.className}>
                    <Text name={"digital_box9_desc_2"} />
                  </p>
                  <p className={FontManrope.className}>
                    <Text name={"digital_box9_desc_3"} />
                  </p>
                  <div className={`${s.textBold} ${FontManrope.className}`}>
                    <Text name={"last_t"} />
                  </div>
                </div>
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
