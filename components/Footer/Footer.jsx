"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import cm from "classnames";
import { motion } from "framer-motion";
import SocialSidebar from "../SocialSidebar/SocialSidebar";
import TrText from "../TrText/TrText";
import { useLocale, useTranslations } from "next-intl";
const manrope = Manrope({ subsets: ["latin"] });

const Text = ({ name }) => {
  return <TrText root={"other"} name={name} />;
};

const Text1 = ({ name }) => {
  return <TrText root={"navbar"} name={name} />;
};

const Footer = () => {
  const locale = useLocale();
  const [pageIndexNav, setPageIndexNav] = useState(null);
  const handlerNavPage = (e) => {
    setPageIndexNav(e == pageIndexNav ? null : e);
  };
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const tFooter = useTranslations("FOOTER");

  return (
    <footer className={s.footer}>
      <div>
        <div className={s.NavLink}>
          <div className={s.LoogFooter}>
            <Link href="/" className={s.logo}>
              <Image src="/logo.svg" alt="logo" width={50} height={50} />
              <p>
                ЖАШ <br />
                ИШКЕР
              </p>
            </Link>
            <p>
              <Text name={"F1"} />
            </p>
          </div>
          <div className={s.NavFooter}>
            <ul>
              <li>
                <p>{tFooter("Pages")}</p>
              </li>
              <li onClick={() => handlerNavPage(1)}>
                <Text1 name={"navbar_about"} /> <IoIosArrowDown />
                {pageIndexNav == 1 && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className={s.accMenu}
                  >
                    <li>
                      <Link className={s.Link} href={"/about"}>
                        {locale === "ru" && "О проекте"}
                        {locale === "en" && "About the project"}
                        {locale === "ky" && "Долбоор жөнүндө"}
                      </Link>
                    </li>
                    <li>
                      <Link className={s.Link} href={"/business-program"}>
                        <Text1 name={"navbar_about_bp"} />
                      </Link>
                    </li>
                    <li>
                      <Link className={s.Link} href={"/Economy"}>
                        <Text1 name={"navbar_about_green_economy"} />
                      </Link>
                    </li>
                    <li>
                      <Link className={s.Link} href={"/digitalization"}>
                        <Text1 name={"navbar_about_digital"} />
                      </Link>
                    </li>
                    <li>
                      <Link className={s.Link} href={"/leadership"}>
                        <Text1 name={"navbar_about_lider"} />
                      </Link>
                    </li>
                    <li>
                      <Link className={s.Link} href={"/innovation"}>
                        <Text1 name={"navbar_about_innovate"} />
                      </Link>
                    </li>

                    <li>
                      <Link className={s.Link} href={"/partner"}>
                        <Text1 name={"navbar_about_partners"} />
                      </Link>
                    </li>
                    <li>
                      <Link className={s.Link} href={"/contact"}>
                        <Text1 name={"navbar_about_contacts"} />
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </li>
              <li>
                <Link className={s.Link} href={"/news"}>
                  <Text1 name={"navbar_news"} />
                </Link>
              </li>
              <li onClick={() => handlerNavPage(2)}>
                <Text1 name={"navbar_knowBase"} />
                <IoIosArrowDown />
                {pageIndexNav == 2 && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className={s.accMenu}
                  >
                    <li>
                      <Link className={s.Link} href={"/start-business"}>
                        <Text1 name={"navbar_knowBase_begin"} />
                      </Link>
                    </li>
                    <li>
                      <Link className={s.Link} href={"/business"}>
                        <Text1 name={"navbar_knowBase_makePlan"} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={s.Link}
                        href={"https://mineconom.gov.kg/ru/direct/404"}
                        target="_blank"
                      >
                        <Text1 name={"navbar_knowBase_temBussiness"} />
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </li>
              <li>
                <Link className={s.Link} href={"/success-stories"}>
                  <Text1 name={"navbar_success_history"} />
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/database"}>
                  <Text1 name={"navbar_knowBase_baseData"} />
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <p>{tFooter("Address")}</p>
                <a
                  href="https://www.google.com/maps/place/103+%D1%83%D0%BB.+%D0%98%D0%B1%D1%80%D0%B0%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8858381,74.616615,17z/data=!3m1!4b1!4m6!3m5!1s0x389eb7ecaaab58b5:0x44b73c5956bfe30e!8m2!3d42.8858381!4d74.616615!16s%2Fg%2F11ts_w3sy_?entry=ttu"
                  target="_blank"
                >
                  {locale === "ru" &&
                    "Кыргызская Республика Бишкек, 720001 ул.Ибраимова, 103"}
                  {locale === "ky" &&
                    "Кыргыз Республикасы Бишкек ш., 720001 Ибраимова көч., 103"}
                  {locale === "en" &&
                    "Kyrgyz Republic, Bishkek, 720001 ul.Ibrahimova, 103"}
                </a>
              </li>
              <li>
                <p>{tFooter("Phone_Number")}</p>
                <a href="tel:+996550002131" target="_blank">
                  +996 (550) 002 - 131
                </a>
              </li>
              <li>
                <p>E-Mail</p>
                <a href="mailto:enactuskyrgyzstan@gmail.com" target="_blank">
                  enactuskyrgyzstan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={s.endP}>
        Copyright © 2024 Jash Ishker All rights Recerved.
      </p>
    </footer>
  );
};

export default Footer;

// <li>
// <Link className={s.Link} href={"/news"}>
//   Как стать ментором
// </Link>
// </li>
