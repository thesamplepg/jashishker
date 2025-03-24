import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import TrText from "@/components/TrText/TrText";

const Text = ({ name }) => {
  return <TrText root={"navbar"} name={name} />;
};

const Menu = ({ isMenu, setMenu }) => {
  const [navPage, setPage] = useState(false);
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

  const handlerPageIndex = (e) => {
    setPage(e === navPage ? false : e);
  };
  return (
    isMenu && (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        className={s.menu}
      >
        <button className={s.Call} onClick={() => setMenu(false)}>
          <BiX />
        </button>
        <ul className={s.menuNav}>
          <li onClick={() => handlerPageIndex(1)}>
            <Text name={"navbar_about"} /> <IoIosArrowDown />
            {navPage == 1 && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
              >
                <li>
                  <Link className={s.Link} href={"/about"}>
                    <Text name={"navbar_about"} />{" "}
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/business-program"}>
                    <Text name={"navbar_about_bp"} />{" "}
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/Economy"}>
                    <Text name={"navbar_about_green_economy"} />
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/digitalization"}>
                    <Text name={"navbar_about_digital"} />
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/leadership"}>
                    <Text name={"navbar_about_lider"} />
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/innovation"}>
                    <Text name={"navbar_about_innovate"} />
                  </Link>
                </li>

                <li>
                  <Link className={s.Link} href={"/partner"}>
                    <Text name={"navbar_about_partners"} />
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/digitalization"}>
                    <Text name={"navbar_about_digital"} />
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/business-program"}>
                    <Text name={"navbar_about_bp"} />
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>
          <li>
            <Link className={s.Link} href={"/news"}>
              <Text name={"navbar_news"} />
            </Link>
          </li>
          <li onClick={() => handlerPageIndex(2)}>
            <Text name={"navbar_knowBase"} />
            <IoIosArrowDown />
            {navPage == 2 && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
              >
                <li>
                  <Link className={s.Link} href={"/start-business"}>
                    <Text name={"navbar_knowBase_begin"} />
                  </Link>
                </li>
                <li>
                  <Link className={s.Link} href={"/business"}>
                    <Text name={"navbar_knowBase_makePlan"} />
                  </Link>
                </li>
                <li>
                  <Link
                    className={s.Link}
                    href={"https://mineconom.gov.kg/ru/direct/404"}
                    target="_blank"
                  >
                    <Text name={"navbar_knowBase_temBussiness"} />
                  </Link>
                </li>
              </motion.ul>
            )}
          </li>
          <li>
            <Link className={s.Link} href={"/success-stories"}>
              <Text name={"navbar_success_history"} />
            </Link>
          </li>
          <li>
            <Link className={s.Link} href={"/database"}>
              <Text name={"navbar_knowBase_baseData"} />
            </Link>
          </li>
          <li>
            <Link className={s.Link} href={"/digitalization"}>
              <Text name={"navbar_about_digital"} />
            </Link>
          </li>
          <li>
            <Link className={s.Link} href={"/contact"}>
              <Text name={"navbar_about_contacts"} />
            </Link>
          </li>
          <li></li>
        </ul>
      </motion.div>
    )
  );
};

export default Menu;
