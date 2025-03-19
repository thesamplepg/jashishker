import React from "react";
import s from "./page.module.scss";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div>
      <div className={s.gridColump}>
        <div className={s.cardsBlocks}>
          <img className={s.podrobneye} src="/image24.svg" alt="" />
          <div className={s.button}>
            <Link href={"/startuperblogger"}>
              <button>Подробнее</button>
            </Link>
          </div>
          <div className={s.backContext}>
            <h2>Абдукадыр Абдушукуров</h2>
            <p>Стартапер и блогер</p>
          </div>
        </div>
        <div className={s.cardsBlocks}>
          <img className={s.podrobneye} src="/image25.svg" alt="" />
          <div className={s.button}>
            <Link href={"/aynazik-experience"}>
              <button>Подробнее</button>
            </Link>
          </div>
          <div className={s.backContext}>
            <h2>Айназик Торогулова</h2>
            <p>Стартапер и блогер</p>
          </div>
        </div>
        <div className={s.cardsBlocks}>
          <img className={s.podrobneye} src="/image26.svg" alt="" />
          <div className={s.button}>
            <Link href={"/ruralbiogas"}>
              <button>Подробнее</button>
            </Link>
          </div>
          <div className={s.backContext}>
            <h2>Бекжан Иманкулов</h2>
            <p>Стартапер и блогер</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
