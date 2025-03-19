import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { FiShare2 } from "react-icons/fi";

import NewsCard from "@/components/Cards/NewsCard/NewsCard";
import { newsCardData } from "@/data";
import axios from "axios";
import SwiperNewsIda from "@/components/Swipers/SwiperNewsIda/SwiperNewsIda";
import { Api } from "@/api";
import { notFound } from "next/navigation";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
export async function generateMetadata({ params }) {
  const newsResponse = await axios.get(`${Api}api/v1/news/${params.id}/`);
  const data = newsResponse.data;

  return {
    title: data.title,
    description: data.description,
    icons: {
      icon: "/logo.svg",
    },
    openGraph: {
      images: [`${data.images[0].image}`],
    },
  };
}

const page = async ({ params }) => {
  let data = null;
  let cardListData = null;
  let error = null;

  try {
    const newsResponse = await axios.get(
      `${Api}api/v1/news/${params.id}/?language=${params.locale}`
    );
    data = newsResponse.data;

    const cardListResponse = await axios.get(
      `${Api}api/v1/news/?status=Популярная новость&language=${params.locale}`
    );
    cardListData = cardListResponse.data;
  } catch (err) {}

  if (error) {
    return <div>Error loading data: {error}</div>;
  } else if (!data) {
    return <div>News article not found</div>;
  } else {
    return (
      <div className={s.news}>
        <Haeder />
        <SocialSidebar />
        <div className={s.newsHaeder}>
          <div className={s.newsContend}>
            <div className={s.newsNav}>
              <ul>
                <li>{data.status_display}</li>
                <li>{data.category_display}</li>
              </ul>
              <p> </p>
            </div>
            <h1>{data.title}</h1>

            <div className={s.Cards}>
              <div className={s.SwiperCards}>
                <div className={s.Swiper}>
                  <SwiperNewsIda data={data.images} />
                </div>
                <div
                  className={s.dangerouslySetInnerHTML}
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />

                <span>
                  <p>
                    {data.views} {params.locale === "ru" && "просмотров"}{" "}
                    {params.locale === "en" && "views"}{" "}
                    {params.locale == "ky" && "көрүүлөр"}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="5"
                    viewBox="0 0 4 5"
                    fill="none"
                  >
                    <circle cx="2" cy="2.5" r="2" fill="#161616" />
                  </svg>
                  <p>{data.time_since_created}</p>
                </span>
              </div>
              <div className={s.CardList}>
                {cardListData?.slice(0, 2).map((item, key) => (
                  <NewsCard data={item} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default page;
