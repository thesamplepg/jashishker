"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { Manrope } from "next/font/google";
import { Collapse } from "react-collapse";

import Image from "next/image";
import TrText from "../TrText/TrText";
import SetHtml from "../TrText/SetHtml";

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"], // specify the desired weight here
});

const Text = ({ name }) => {
  return <TrText root={"digital"} name={name} />;
};

const data = [
  {
    id: 1,
    title: Text({ root: "digital", name: "question_text1" }),
    discription: <SetHtml root={"digital"} name={"question_answer1"} />,
  },
  {
    id: 2,
    title: Text({ root: "digital", name: "question_text2" }),
    discription: <SetHtml root={"digital"} name={"question_answer2"} />,
  },
  {
    id: 3,
    title: Text({ root: "digital", name: "question_text3" }),
    discription: <SetHtml root={"digital"} name={"question_answer3"} />,
  },
  {
    id: 4,
    title: Text({ root: "digital", name: "question_text4" }),
    discription: <SetHtml root={"digital"} name={"question_answer4"} />,
  },

  {
    id: 5,
    title: Text({ root: "digital", name: "question_text5" }),
    discription: <SetHtml root={"digital"} name={"question_answer5"} />,
  },
  {
    id: 6,
    title: Text({ root: "digital", name: "question_text6" }),
    discription: <SetHtml root={"digital"} name={"question_answer6"} />,
  },
  {
    id: 7,
    title: Text({ root: "digital", name: "question_text7" }),
    discription: <SetHtml root={"digital"} name={"question_answer7"} />,
  },
  {
    id: 8,
    title: Text({ root: "digital", name: "question_text8" }),
    discription: <SetHtml root={"digital"} name={"question_answer8"} />,
  },
];

export default function Accordion() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  return (
    <div className={s.accordion}>
      <div className={s.container}>
        <div className={s.accordionContent}>
          <div className={s.accordionTitle}>
            <h5 className={FontManrope.className}>
              <Text name={"digital_box8_title"} />
            </h5>
            <div className={s.accordionText}>
              <p className={FontManrope.className}>
                <Text name={"digital_box8_subtitle"} />
              </p>
            </div>
          </div>
          <div className={s.accordionWrap}>
            {data.map((item, index) => {
              return (
                <div className={s.accordionCard} key={index}>
                  <div className={s.accordionBlock}>
                    <div
                      onClick={() => toggleAccordion(item.id)}
                      className={s.accordionCardTitle}
                    >
                      <p className={FontManrope.className}>{item.title}</p>
                      {openItemId === item.id ? (
                        <FiArrowUpRight />
                      ) : (
                        <FiArrowDownRight />
                      )}
                    </div>
                    <Collapse isOpened={openItemId === item.id}>
                      <div className={s.accordionCardText}>
                        <Image
                          src="/Vector.svg"
                          alt="image"
                          width={394}
                          height={207.193}
                        />
                        <div className={s.accordionCardTextBlock}>
                          <p className={FontManrope.className}>
                            {item.discription}
                          </p>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
