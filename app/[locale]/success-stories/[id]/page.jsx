import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import { Manrope } from "next/font/google";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import axios from "axios";
import { notFound } from "next/navigation";
import { Api } from "@/api";
import Image from "next/image";
import Link from "next/link";
import SwiperImage from "./Swiper/Swiper";
const manrope = Manrope({ subsets: ["latin"] });

const getUser = async (id, locale) => {
  console.log(id, "id", locale);
  try {
    const response = await axios.get(
      `${Api}api/v1/success-story/${id}?language=${locale}`
    );

    const dataAUerList = await axios.get(
      `https://api.jashishker.kg/api/v1/success-story/?language=${locale}`
    );

    return { data: response.data, data1: dataAUerList.data };
  } catch (error) {
    console.log(error);
    return { data: "error" };
  }
};

export async function generateMetadata({ params }) {
  const { data } = await getUser(params.id, params.locale);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data?.images?.map((image) => ({
        url: image.image,
        width: 800,
        height: 600,
        alt: data.title,
      })),
    },
  };
}

const page = async ({ params }) => {
  console.log(params, "params");
  const { data, data1 } = await getUser(params.id, params.locale);

  if (data === "error") {
    return notFound();
  }
  return (
    <div>
      <Haeder />
      <div className={s.backStore}>
        <SocialSidebar />
        <div className={s.heroContainer}>
          <div className={s.container}>
            <div>
              <h2>{data?.title}</h2>
            </div>
            <hr />
            <div className={s.gridTemplate}>
              <div className={s.cardsBldsdsocks}>
                <div className={s.SwiperImageBlcoks}>
                  <SwiperImage data={data?.images} />
                </div>
                <nav dangerouslySetInnerHTML={{ __html: data?.description }} />
              </div>
              <div className={s.cards}>
                {data1.slice(0, 3).map((res) => (
                  <Link
                    href={`/success-stories/${res.id}`}
                    key={res}
                    className={s.cardsBlocks}
                  >
                    <img src={res.avatar} alt="" />
                    <ul>
                      <h3>{res.full_name}</h3>
                      <p>{res.occupation}</p>
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
