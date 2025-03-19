"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import s from "./page.module.scss";
import { Manrope } from "next/font/google";
import TrText from "@/components/TrText/TrText";
const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"], // specify the desired weight here
});

const Text = ({ name }) => {
  return <TrText root={"alpha"} name={name} />;
};

const AccordionWhere = () => {
  const data = [
    {
      title: <Text name={"J21"} />,
      id: 1,
      text: {
        title: <Text name={"K333"} />,
        title1: <Text name={"K334"} />,
      },
    },
    {
      title: <Text name={"J22"} />,
      id: 2,
      text: {
        title: <Text name={"K335"} />,
        title1: <Text name={"K336"} />,
      },
    },
    {
      title: <Text name={"J23"} />,
      id: 3,
      text: {
        title: <Text name={"K337"} />,
        title1: <Text name={"K338"} />,
      },
    },
    {
      title: <Text name={"J24"} />,
      id: 4,
      text: {
        title: <Text name={"K339"} />,
        title1: <Text name={"K34"} />,
      },
    },
    {
      title: <Text name={"J25"} />,
      id: 5,
      text: {
        title: <Text name={"K341"} />,
        title1: <Text name={"K342"} />,
      },
    },
  ];
  const [pageIndex, setPageIndex] = useState(null);
  const handlerPageIndex = (e) => {
    setPageIndex(e == pageIndex ? null : e);
  };

  return (
    <div className={s.accordionWrap}>
      {data.map((item, index) => {
        return (
          <div className={s.accordionCard} key={index}>
            <div
              onClick={() => handlerPageIndex(item.id)}
              className={s.accordionCardTitle}
            >
              <p className={FontManrope.className}>{item.title}</p>
              {pageIndex === item.id ? (
                <FiArrowUpRight />
              ) : (
                <FiArrowDownRight />
              )}
            </div>
            <Collapse isOpened={pageIndex === item.id}>
              <div className={s.accordionCardText}>
                <ul className={s.accordionCardTextBlock}>
                  <li>{item.text.title}</li>
                  <li>{item.text.title1}</li>
                </ul>
              </div>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionWhere;
