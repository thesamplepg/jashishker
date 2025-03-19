"use client";

import React, { useEffect, useRef, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import cm from "classnames";
import { IoIosArrowDown } from "react-icons/io";
import Menu from "./Menu/Menu";
import LocalSwitcher from "../LocalSwitcher/LocalSwitcher";
import TrText from "../TrText/TrText";
import { useLocale, useTranslations } from "next-intl";
import useMedia from "@/hooks/useMediaQuery";

const manrope = Manrope({ subsets: ["latin"] });
const Haeder = () => {
  const [navProduct, setNavProduct] = useState(false);
  const [navKnowledge, setNavKnowledge] = useState(false);
  const previousActiveMenuRef = useRef(null);
  const ref = useRef(null);

  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuTriggerProduct = document.querySelector(`li[onMouseEnter]`);
      const menuTriggerKnowledge = document.querySelector(
        `li[data-knowledge-dropdown]`
      );
      const isClickInsideProductMenu =
        event.target.closest(`.${s.NavProductBlock}`) ||
        event.target === menuTriggerProduct;
      const isClickInsideKnowledgeMenu =
        event.target.closest(`.${s.NavKnowledgeBlock}`) ||
        event.target === menuTriggerKnowledge;

      if (navProduct && !isClickInsideProductMenu) {
        setNavProduct(false);
      }
      if (navKnowledge && !isClickInsideKnowledgeMenu) {
        setNavKnowledge(false);
      }

      if (isClickInsideProductMenu) {
        if (previousActiveMenuRef.current != "project") {
          setNavKnowledge(false);
        }
        setNavProduct(true);
      } else if (isClickInsideKnowledgeMenu) {
        if (previousActiveMenuRef.current != "knowledgeBase") {
          setNavProduct(false);
        }
        setNavKnowledge(true);
      }
      previousActiveMenuRef.current = navProduct
        ? "project"
        : navKnowledge
        ? "knowledgeBase"
        : null;
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navProduct, navKnowledge]);
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

  const t = useTranslations("navbar");

  const isMobile = useMedia("(max-width: 1322px)");

  const locale = useLocale();
  const isKy = isMenu || locale === "ky";

  return (
    <div className={s.Div}>
      <haeder className={`${manrope.className}  ${s.haeder}`}>
        <a href="/" className={s.logo}>
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <p>
            ЖАШ <br />
            ИШКЕР
          </p>
        </a>

        <nav className={s.nav}>
          <ul>
            <li onClick={() => setNavProduct(true)}>
              <TrText root={"navbar"} name={"navbar_about"} />{" "}
              <IoIosArrowDown />
            </li>
            <li>
              <Link className={s.Link} href={"/news"}>
                <TrText root={"navbar"} name={"navbar_news"} />
              </Link>
            </li>
            <li onClick={() => setNavKnowledge(true)}>
              <TrText root={"navbar"} name={"navbar_knowBase"} />
              <IoIosArrowDown />
            </li>
            <li>
              <Link className={s.Link} href={"/success-stories"}>
                <TrText root={"navbar"} name={"navbar_success_history"} />
              </Link>
            </li>
            <li>
              <Link className={s.Link} href={"/database"}>
                <TrText root={"navbar"} name={"navbar_knowBase_baseData"} />
              </Link>
            </li>
            {!isKy && (
              <li>
                <a
                  className={s.Link}
                  href="https://enactus.kg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enactus
                </a>
              </li>
            )}
            <li>
              <Link className={s.Link} href={"/contact"}>
                <TrText root={"navbar"} name={"navbar_about_contacts"} />
              </Link>
            </li>
            <li className={s.LogoCopy}>
              <a
                target="_blank"
                href="https://www.eeas.europa.eu/delegations/cooperation_kyr_ky?s=301"
              >
                <img src="/Logo7.png" alt="/" className={s.ImageEvro} />
              </a>
              <a target="_blank" href="#">
                <img
                  src="/лого_белый_ без.png"
                  alt="vk"
                  className={s.LogoCopyn}
                />
              </a>
              <a target="_blank" href="https://enactus.kg/">
                <img src="/Logo.png" alt="vk" className={s.LogoCopyn} />
              </a>
            </li>
          </ul>
        </nav>

        <div className={s.ButtonList}>
          <div className={s.LogoCopyAll}>
            <a
              target="_blank"
              href="https://www.eeas.europa.eu/delegations/cooperation_kyr_ky?s=301"
            >
              <img src="/Logo7.png" alt="/" className={s.ImageEvro} />
            </a>

            <a target="_blank" href="#">
              <img
                src="/лого_белый_ без.png"
                alt="vk"
                className={s.LogoCopyn}
              />
            </a>
            <a target="_blank" href="https://enactus.kg/">
              <img src="/Logo.png" alt="vk" className={s.LogoCopyn} />
            </a>
          </div>

          <LocalSwitcher />
          {/* <button className="Login">
            <TrText root={"navbar"} name={"login"} />
          </button> */}
          <button className={s.burgerButton} onClick={() => setIsMenu(!isMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </haeder>

      {navProduct && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cm(s.NavProductBlock, {
            [s.NavProductBlockVisible]: navProduct === false,
          })}
          data-visible={navProduct}
        >
          <div className={s.NavProduct}>
            <ul>
              <li>
                <Link className={s.Link} href={"/about"}>
                  {t("navbar_about")}
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/business-program"}>
                  {t("navbar_about_bp")}
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/Economy"}>
                  {t("navbar_about_green_economy")}
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/digitalization"}>
                  {t("navbar_about_digital")}
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/leadership"}>
                  {t("navbar_about_lider")}
                </Link>
              </li>
              <li>
                <Link className={s.Link} href={"/innovation"}>
                  {t("navbar_about_innovate")}
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className={s.Link} href={"/partner"}>
                  {t("navbar_about_partners")}
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className={s.Link} href={"/contact"}>
                  {t("navbar_about_contacts")}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
      {navKnowledge && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={cm(s.NavKnowledgeBlock, {
            [s.NavKnowledgeBlockVisible]: navKnowledge === false,
          })}
          data-visible={navKnowledge}
        >
          <div className={s.NavProduct}>
            <ul>
              <li>
                <Link className={s.Link} href={"/start-business"}>
                  {t("navbar_knowBase_begin")}
                </Link>
              </li>

              <li>
                <Link className={s.Link} href={"/business"}>
                  {t("navbar_knowBase_makePlan")}
                </Link>
              </li>
              <li>
                <Link
                  className={s.Link}
                  href={"https://mineconom.gov.kg/ru/direct/404"}
                  target="_blank"
                >
                  {t("navbar_knowBase_temBussiness")}
                </Link>
              </li>

              <li>
                <Link className={s.Link} href={"/database"}>
                  {t("navbar_knowBase_baseData")}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}

      {isMenu && <Menu setMenu={setIsMenu} isMenu={isMenu} />}
    </div>
  );
};

export default Haeder;
// <li>
//   <Link className={s.Link} href={"/news"}>
//     Как стать ментором
//   </Link>
// </li>
