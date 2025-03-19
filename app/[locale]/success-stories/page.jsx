import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import SetHtml from "@/components/TrText/SetHtml";
import TrText from "@/components/TrText/TrText";
import { Api } from "@/api";
import axios from "axios";
import { notFound } from "next/navigation";

const Text = ({ name }) => {
  return <TrText root={"other"} name={name} />;
};

const getUserList = async (locale) => {
  try {
    const response = await axios.get(
      `https://api.jashishker.kg/api/v1/success-story/?language=${locale}`
    );

    return response.data;
  } catch (error) {
    return "error";
  }
};

const page = async ({ params: { locale } }) => {
  console.log(locale, "test");

  const data = await getUserList(locale);
  if (data === "error") {
    return notFound();
  }

  return (
    <div>
      <Haeder />
      <div className={s.storeBack}>
        <SocialSidebar />
        <div className={s.heroContainer}>
          <div className={s.historyAll}>
            <div className={s.stories}>
              <h1>
                <SetHtml root={"other"} name={"A6"} />
              </h1>
              <ul>
                <li>
                  <Text name={"A7"} />
                </li>
              </ul>
            </div>
            <hr />
            <div className={s.gridColump}>
              {data.map((res) => (
                <div className={s.cardsBlocks} key={res.id}>
                  <img
                    className={s.podrobneye}
                    src={res.avatar}
                    alt={res.avatar}
                  />
                  <div className={s.button}>
                    <Link href={`/success-stories/${res.id}`}>
                      <button>
                        {locale === "ru" && "Подробнее"}
                        {locale === "ky" && "Кененирээк "}
                        {locale === "en" && "More"}
                      </button>
                    </Link>
                  </div>
                  <div className={s.backContext}>
                    <h2>{res.full_name}</h2>
                    <p>{res.occupation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

//               <div className={s.cardsBlocks}>
//                 <img className={s.podrobneye} src="/image26.svg" alt="" />
//                 <div className={s.button}>
//                   <Link href={"/ruralbiogas"}>
//                     <button>Подробнее</button>
//                   </Link>
//                 </div>
//                 <div className={s.backContext}>
//                   <h2>Бекжан Иманкулов</h2>
//                   <p>Стартапер и блогер</p>
//                 </div>
//               </div>
