import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import React from "react";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import SetHtml from "@/components/TrText/SetHtml";
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
const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.economyall}>
        <SocialSidebar />
        <div className={s.economycontainer}>
          <div className={s.leadershiptitle}>
            <h1 className={BeVietnamPro.className}>
              <TrText root={"innovate"} name={"innovate_title"} />
            </h1>
          </div>
          <hr />
          <div className={s.innovtext}>
            <div>
              <h2>
                <TrText root={"innovate"} name={"innovate_box1_title"} />
              </h2>
              <p>
                <TrText root={"innovate"} name={"innovate_box1_topDesc"} />
              </p>
            </div>
            {/* <Image
              className={s.image}
              src="/image.svg"
              width={508}
              height={508}
              alt="Description of image"
            /> */}
          </div>
          <ul className={s.innovtextBottom}>
            <h4>
              <TrText root={"innovate"} name={"innovate_box1_descBottom"} />
            </h4>
          </ul>
          <div className={s.innovtextImage}>
            <img className={s.imgs} src="/leadership.svg" />
          </div>
          <nav className={s.listcontext}>
            <li>
              <SetHtml root={"innovate"} name={"innovate_box2_desc"} />
            </li>
            {/* <ul>
              <li>
                Инновационное предпринимательство готово брать на себя риски
                связанные с финансовой деятельностью предприятия. Ведь не каждый
                новый продукт будет нужен потребителю. Товар (услуга)  должен
                быть лучшим по своим свойствам путем использования нововведений.
              </li>
              <li>
                Продукция отечественных предприятий вынуждена конкурировать с
                импортными товарами. В свою очередь интенсивность использования
                инновационной деятельности влияет на общий уровень
                экономического развития страны. В связи, с чем можно наблюдать
                повсеместный призыв к инновации. Внедрение инноваций поощряется
                и стимулируется, особенно в сферах, которые ориентированы на
                производство высокотехнологичных товаров, таких как компьютеры и
                полупроводники, лекарственные средства и медицинское
                оборудование, средства связи и системы коммуникаций.
              </li>
            </ul> */}
            <div className={s.blockimg}>
              <Image
                className={s.img11}
                src="/image11.svg"
                width={840}
                height={470}
                alt="image1"
              />
            </div>
            <ul className={s.listext}>
              <li>
                <SetHtml root={"innovate"} name={"indevasda"} />
              </li>
              <li>
                <SetHtml root={"innovate"} name={"ashdkjajskdj1"} />
              </li>
              <li>
                <SetHtml root={"innovate"} name={"ajsdljaskdasjd"} />
              </li>
            </ul>
          </nav>
          <nav className={s.listendtext}>
            <ul>
              <p>
                <TrText root={"innovate"} name={"innovate_box2_left_desc"} />
              </p>
              <li>
                <TrText root={"innovate"} name={"innovate_box2_bottom_desc"} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
