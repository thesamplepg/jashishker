/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import NewsCard from "@/components/Cards/NewsCard/NewsCard";
import axios from "axios";
import { Api } from "@/api";
import Link from "next/link";
import { notFound } from "next/navigation";
import Loading from "@/components/Loading/Loading";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import ChatBotCustom from "@/components/ChatBot/ChatBotCostom";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
import TrText from "@/components/TrText/TrText";
import { useLocale } from "next-intl";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});
const manrope = Manrope({ subsets: ["latin"] });

const page = () => {
  const [topNews, setTopNews] = useState([]);
  const [newsPopular, setPopular] = useState([]);
  const [filterPage, setFilterPage] = useState("Популярная новость");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  console.log(locale, "test");
  useEffect(() => {
    const getData = async () => {
      try {
        const topNewsResponse = await axios.get(
          `${Api}api/v1/news/?category=Топ новости&language=${locale}`
        );
        const newsPopularResponse = await axios.get(
          `${Api}api/v1/news/?status=${filterPage}&language=${locale}`
        );

        setTopNews(topNewsResponse.data);
        setPopular(newsPopularResponse.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const newsPopular = await axios.get(
          `${Api}api/v1/news/?status=${filterPage}&language=${locale}`
        );
        console.log(
          `${Api}api/v1/news/?status=${filterPage}&language=${locale}`,
          "test"
        );

        return {
          newsPopular: newsPopular?.data,
        };
      } catch (error) {}
    };
    getData().then((data) => {
      setPopular(data?.newsPopular);
    });
  }, [filterPage]);
  if (error) {
    return notFound();
  }

  if (loading) {
    return <Loading />;
  }
  console.log(topNews[0], "asdsadsadasd");

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Website",
          text: "Check out this awesome website!",
          url: window.location.href,
        });
      } catch (error) {}
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div>
      <Haeder />
      <div className={s.news}>
        <SocialSidebar />
        {topNews.length > 0 ? (
          <div className={s.newsContend}>
            <div className={s.newsTitel}>
              <h1 className={BeVietnamPro.className}>
                <TrText root={"news"} name="newsTitle" />
              </h1>
            </div>
            <div className={`${manrope.className} ${s.newsBloc1}`}>
              <p className={s.newsBloc1Titel}>{topNews[0]?.category_display}</p>
              <div className={s.borderBootm}></div>
              <div className={s.newsBloc1Main}>
                <div className={s.newsBloc1MainImage}>
                  <div className={s.mainImageBlock}>
                    <img src={topNews[0]?.images[0]?.image} alt="image" />
                  </div>
                  <div className={s.mainTitel}>
                    <div className={s.mainTitelBlock1}>
                      <div className={s.mainTitelBlock1ButtonList}>
                        <ul>
                          {/* <li>{topNews[0]?.status_display}</li>
                          <li>{topNews[0]?.category_display}</li> */}
                        </ul>
                        <FiShare2 onClick={handleShare} />
                      </div>
                      <div className={s.mainTitelBlock1Text}>
                        <h2> {topNews[0].title}</h2>
                        <Link href={`/news/${topNews[0].id}`}>
                          <button>
                            <GoArrowUpRight />
                          </button>
                        </Link>
                      </div>
                      <div className={s.mianTitelWiews}>
                        <p>
                          {topNews[0].views} {locale === "ru" && "просмотров"}
                          {locale === "en" && "views"}
                          {locale == "ky" && "көрүүлөр"}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                        >
                          <circle cx="2" cy="2" r="2" fill="#161616" />
                        </svg>
                        <p>{topNews[0].time_since_created}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.newsBloc1MainCards}>
                  {topNews?.slice(1, 3).map((item, key) => (
                    <NewsCard data={item} key={key} />
                  ))}
                </div>
              </div>
            </div>
            <div className={s.Tap}>
              <p
                onClick={() => setFilterPage("Новая новость")}
                style={{
                  color: filterPage == "Новая новость" ? "#DA4E38" : "#222",
                  cursor: "pointer",
                }}
              >
                {" "}
                {locale == "ru" && "Последние"}
                {locale == "en" && "Latest"}
                {locale == "ky" && "Соңку"}
              </p>
              <div className={s.TopBorder}></div>
              <p
                onClick={() => setFilterPage("Популярная новость")}
                style={{
                  color:
                    filterPage == "Популярная новость" ? "#DA4E38" : "#222",
                  cursor: "pointer",
                }}
              >
                {locale == "ru" && "Популярные"}
                {locale == "en" && "Popular "}
                {locale == "ky" && "Популярдуу "}
              </p>
            </div>
            <div className={s.borderBootm}></div>
            <div className={s.newsCards}>
              {newsPopular?.length > 0 ? (
                newsPopular.map((item, key) => (
                  <NewsCard data={item} key={key} />
                ))
              ) : (
                <p>
                  {locale == "ru" && "Ничего не найдено"}
                  {locale == "en" && "Nothing found"}
                  {locale == "ky" && "Эч нерсе табылган жок"}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className={s.notFound}>
            <p>
              {locale == "ru" && "Ничего не найдено"}
              {locale == "en" && "Nothing found"}
              {locale == "ky" && "Эч нерсе табылган жок"}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
