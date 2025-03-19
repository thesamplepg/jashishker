"use client";
import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";
import { useLocale } from "next-intl";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const Text = ({ name }) => {
  return <TrText name={name} root={"partner"} />;
};

const Page = () => {
  const items = [
    {
      src: "/imageorg.svg",
      alt: {
        ru:
          "Департамент Органического Сельского Хозяйства при Министерстве сельского хозяйства Кыргызской Республики",
        en:
          "Department of Organic Agriculture under the Ministry of Agriculture of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Айыл чарба министрлигине караштуу Органикалык айыл чарба департаменти",
      },
      text: {
        ru:
          "Департамент Органического Сельского Хозяйства при Министерстве сельского хозяйства Кыргызской Республики",
        en:
          "Department of Organic Agriculture under the Ministry of Agriculture of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Айыл чарба министрлигине караштуу Органикалык айыл чарба департаменти",
      },
      https: "https://agro.gov.kg/ru/dosh/",
    },
    {
      src: "/imageorg2.svg",
      alt: {
        ru: "Министерство Сельского хозяйства КР",
        en: "Ministry of Agriculture of the Kyrgyz Republic",
        ky: "Кыргыз Республикасынын Айыл чарба министрлиги",
      },
      text: {
        ru: "Министерство Сельского хозяйства КР",
        en: "Ministry of Agriculture of the Kyrgyz Republic",
        ky: "Кыргыз Республикасынын Айыл чарба министрлиги",
      },
      https: "https://agro.gov.kg/ru/main/",
    },
    {
      src: "/imageorg4.svg",
      alt: {
        ru:
          'Государственным предприятием "Центр цифровизации и маркетинга "АгроСмарт"',
        en:
          'State Enterprise "AgroSmart Center for Digitalization and Marketing"',
        ky:
          'Кыргыз Республикасынын Айыл чарба министрлигине караштуу "АгроСмарт" санариптештирүү жана маркетинг борбору мамлекеттик ишканасы',
      },
      text: {
        ru:
          'Государственным предприятием "Центр цифровизации и маркетинга "АгроСмарт"',
        en:
          'State Enterprise "AgroSmart Center for Digitalization and Marketing"',
        ky:
          'Кыргыз Республикасынын Айыл чарба министрлигине караштуу "АгроСмарт" санариптештирүү жана маркетинг борбору мамлекеттик ишканасы',
      },
      https: "https://cbd.minjust.gov.kg/73-227/edition/1127315/ru",
    },
    {
      src: "/imageorg5.svg",
      alt: {
        ru:
          "Общественный фонд «Фонд социального партнерства по развитию регионов»",
        en: 'Public Fund "Social Partnership Fund for Regional Development"',
        ky:
          "«Аймактарды өнүктүрүү боюнча социалдык өнөктөштүк фонду» коомдук фонду",
      },
      text: {
        ru:
          "Общественный фонд «Фонд социального партнерства по развитию регионов»",
        en: 'Public Fund "Social Partnership Fund for Regional Development"',
        ky:
          "«Аймактарды өнүктүрүү боюнча социалдык өнөктөштүк фонду» коомдук фонду",
      },
      https: "http://fond.kg/",
    },
    {
      src: "/imageorg6.svg",
      alt: {
        ru:
          "Министерством культуры, информации, спорта и молодежной политики Кыргызской Республики",
        en:
          "Ministry of Culture, Information, Sports and Youth Policy of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Маданият, маалымат, спорт жана жаштар саясаты министрлиги",
      },
      text: {
        ru:
          "Министерством культуры, информации, спорта и молодежной политики Кыргызской Республики",
        en:
          "Ministry of Culture, Information, Sports and Youth Policy of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Маданият, маалымат, спорт жана жаштар саясаты министрлиги",
      },
      https: "https://minculture.gov.kg/ru",
    },
    {
      src: "/imageorg7.svg",
      alt: {
        ru: 'Объединение юридических лиц "Зеленый Альянс Кей Джи"',
        en: 'Association of Legal Entities "Green Alliance KG"',
        ky: '"Зеленый Альянс Кей Джи" юридикалык жактар бирикмеси',
      },
      text: {
        ru: 'Объединение юридических лиц "Зеленый Альянс Кей Джи"',
        en: 'Association of Legal Entities "Green Alliance KG"',
        ky: '"Зеленый Альянс Кей Джи" юридикалык жактар бирикмеси',
      },
      https:
        "https://green-alliance.kg/wp-content/uploads/2022/12/Osnovnye-vyvody-ZAK_2022_Obrashhenie_ot_Isp.Direktora-1.pdf",
    },
    {
      src: "/imageorg8.svg",
      alt: {
        ru:
          "Государственным агентством интеллектуальной собственности и инноваций при Кабинете Министров Кыргызской Республики",
        en:
          "State Agency for Intellectual Property and Innovation under the Cabinet of Ministers of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Министрлер Кабинетине караштуу интеллектуалдык менчик жана инновациялар мамлекеттик агенттиги",
      },
      text: {
        ru:
          "Государственным агентством интеллектуальной собственности и инноваций при Кабинете Министров Кыргызской Республики",
        en:
          "State Agency for Intellectual Property and Innovation under the Cabinet of Ministers of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Министрлер Кабинетине караштуу интеллектуалдык менчик жана инновациялар мамлекеттик агенттиги",
      },
      https: "http://patent.gov.kg/",
    },
    {
      src: "/imageorg9.svg",
      alt: {
        ru: "Фонд развития предпринимательства",
        en: "Entrepreneurship Development Fund",
        ky: "Ишкердикти өнүктүрүү фонду",
      },
      text: {
        ru: "Фонд развития предпринимательства",
        en: "Entrepreneurship Development Fund",
        ky: "Ишкердикти өнүктүрүү фонду",
      },
      https: "https://frp.kg/",
    },
    {
      src: "/imageorg4.svg",
      alt: {
        ru:
          "Министерство труда социального обеспечения и миграции Кыргызской Республики",
        en:
          "Ministry of Labor, Social Security and Migration of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Эмгек, социалдык камсыздоо жана миграция министрлиги",
      },
      text: {
        ru:
          "Министерство труда социального обеспечения и миграции Кыргызской Республики",
        en:
          "Ministry of Labor, Social Security and Migration of the Kyrgyz Republic",
        ky:
          "Кыргыз Республикасынын Эмгек, социалдык камсыздоо жана миграция министрлиги",
      },
      https: "https://mlsp.gov.kg/ru/glavnaya/",
    },
    {
      src: "/imageorg10.svg",
      alt: {
        ru: "Министерство образования и науки Кыргызской Республики",
        en: "Ministry of Education and Science of the Kyrgyz Republic",
        ky: "Кыргыз Республикасынын Билим берүү жана илим министрлиги",
      },
      text: {
        ru: "Министерство образования и науки Кыргызской Республики",
        en: "Ministry of Education and Science of the Kyrgyz Republic",
        ky: "Кыргыз Республикасынын Билим берүү жана илим министрлиги",
      },
      https: "",
    },
  ];
  const locale = useLocale();
  console.log(locale, "locale");

  return (
    <div>
      <Haeder />
      <div className={s.partner}>
        <SocialSidebar />
        <div className={s.container}>
          <div className={s.partnerText}>
            <h1 className={BeVietnamPro.className}>
              <Text name={"partner_title"} />
            </h1>
          </div>
          <div className={s.partnerBorder} />
          <div className={s["grid-container"]}>
            {items.map((item, index) => (
              <a
                target="_blank"
                className={s["grid-item"]}
                key={index}
                href={item.https}
              >
                <Image
                  src={item.src}
                  alt={item.alt[locale] || item.alt["ru"]}
                  width={100}
                  height={100}
                />
                <p>{item.text[locale] || item.text["ru"]}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
