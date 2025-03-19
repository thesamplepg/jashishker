import Image from "next/image";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import { Bebas_Neue, Manrope } from "next/font/google";
import Footer from "@/components/Footer/Footer";
const manrope = Manrope({ subsets: ["latin"] });
import { BsArrowRight } from "react-icons/bs";
import { newsCardData } from "@/data";
import NewsCards from "@/components/Cards/MainNewsCards/NewsCards";
import MainFrom from "@/components/Forms/MainFrom/MainFrom";
import axios from "axios";
import { Api } from "@/api";
import { notFound, redirect } from "next/navigation";
import { ChatBotWidget } from "chatbot-widget-ui";
import Link from "next/link";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";
import { getTranslations } from "next-intl/server";
import { ToastContainer } from "react-toastify";
export const generateMetadata = async () => {
  const t = await getTranslations("home");

  return {
    title: "ЖАШ ИШКЕР",
    description:
      "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
    icons: {
      icon: "/logo.svg",
    },
  };
};
const getNews = async (locale) => {
  try {
    const card = await axios.get(`${Api}api/v1/news/?language=${locale}`);

    return card;
  } catch (error) {
    return notFound();
  }
};

export default async function Home({ params }) {
  const { data } = await getNews(params.locale);

  return (
    <div className={` ${s.container}`}>
      <Haeder />

      <div className={s.mainBlock}>
        <SocialSidebar />
        <div className={s.mainBlockTitel}>
          <h1 className={manrope.className}>
            <TrText root={"home"} name={"hero_title"} />
          </h1>
          <p className={manrope.className}>
            <TrText root={"home"} name={"hero_top_desc"} />
          </p>

          <p className={manrope.className}>
            <TrText root={"home"} name={"hero_bottom_desc"} />
          </p>
        </div>
        <div className={s.mainImage}>
          <div className={s.BgDiv}></div>
          <div className={s.BgDiv1}></div>
          <div className={s.mainBgImage}>
            <Image
              className={s.mainBgImage1}
              src="/mainBgImage1.png"
              alt="mainImage"
              fill
              objectPosition="top"
              objectFit="cover"
            />
            <Image
              className={s.mainBgImageTablel1}
              src="/mainBgImageTablel1.png"
              alt="mainImage"
              fill
              objectPosition="top"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div></div>
      <div className={s.CardListBlock}>
        <Link href={"/Economy"}>
          <div>
            <h3>
              <TrText root={"home"} name={"section_2_first_box_title"} />
            </h3>
            <div>
              <Image
                src={"/image18.svg"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p>
              <TrText root={"home"} name={"section_2_first_box_desc"} />
            </p>
          </div>
        </Link>
        <Link href={"/digitalization"}>
          <div className={s.blockpadding}>
            <h3>
              <TrText root={"home"} name={"section_2_sec_box_title"} />
            </h3>
            <div>
              {" "}
              <Image
                src={"/image19.svg"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p>
              <TrText root={"home"} name={"section_2_sec_box_desc"} />
            </p>
          </div>
        </Link>
        <Link href={"/leadership"}>
          <div>
            <h3>
              <TrText root={"home"} name={"section_2_third_box_title"} />
            </h3>
            <div>
              <Image
                src={"/image20.svg"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p>
              <TrText root={"home"} name={"section_2_third_box_desc"} />
            </p>
          </div>
        </Link>
        <div className={s.CardListBlock4}>

          <Link href={'/innovation'} className={s.CardListBlock4Titel}>
            <h2>
              <TrText root={"home"} name={"section_2_fourth_box_title"} />
            </h2>
            <p>
              <TrText root={"home"} name={"section_2_fourth_box_desc"} />
            </p>
          </Link>
          <Link href={'/innovation'} className={s.CardListBlock4TitelBg}>
            <Image
              src={"/04.svg"}
              alt="mainImage"
              objectFit="contain"
              layout="fill"
            />
          </Link>
          <div className={s.CardListBlock4TitelImage}>
            <Image
              src={"/mainImageCardList3.png"}
              alt="mainImage"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
        <Link href={"/innovations"}>
          <div className={s.CardListBlock4Mobal}>
            <h3>
              <TrText root={"home"} name={"section_2_fourth_box_title"} />
            </h3>
            <div>
              {" "}
              <Image
                src={"/image22.svg"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p>
              <TrText root={"home"} name={"section_2_fourth_box_desc"} />
            </p>
          </div>
        </Link>
      </div>
      <div className={s.Block3}>
        <div className={s.Block3Titel}>
          <div className={s.Block3TitelText}>
            <p>
              <TrText root={"home"} name={"section_3_subtitle"} />
            </p>
            <div className={s.mainImageBlock2}>
              <Image
                src={"/mainImageBlock2.png"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
          <div className={s.Block3TitelTextMain}>
            <p>
              <TrText root={"home"} name={"section_3_title"} />
            </p>
            <span>
              <p>
                <TrText root={"home"} name={"section_3_description"} />
              </p>
              <a href="/start-business">
                <button>
                  <TrText root={"home"} name={"section_3_more_details"} />
                  <BsArrowRight />
                </button>
              </a>
            </span>
            <div className={s.Block3Cards}>
              <div>
                <div>
                  <span>
                    <Image
                      src={"/Card3Image1.svg"}
                      alt="mainImage"
                      objectFit="contain"
                      layout="fill"
                    />
                  </span>
                  <p>
                    <TrText root={"home"} name={"section_4_first_box_title"} />
                  </p>
                </div>
                <p>
                  <TrText root={"home"} name={"section_4_first_box_desc"} />
                </p>
              </div>
              <div>
                <div>
                  <span>
                    <Image
                      src={"/Card3Image2.svg"}
                      alt="mainImage"
                      objectFit="contain"
                      layout="fill"
                    />
                  </span>
                  <p>
                    <TrText root={"home"} name={"section_4_second_box_title"} />
                  </p>
                </div>
                <p>
                  <TrText
                    root={"home"}
                    name={"section_4_second_box_description"}
                  />
                </p>
              </div>
              <div
                style={{ borderBottom: " 1px solid rgba(34, 34, 34, 0.30)" }}
              >
                <div>
                  <span>
                    <Image
                      src={"/Card3Image3.svg"}
                      alt="mainImage"
                      objectFit="contain"
                      layout="fill"
                    />
                  </span>
                  <p>
                    <TrText root={"home"} name={"section_4_third_box_title"} />
                  </p>
                </div>
                <p>
                  <TrText root={"home"} name={"section_4_third_box_desc"} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data?.length > 0 && (
        <div className={s.Block4}>
          <div className={s.Block4Titel}>
            <p className={s.Block4TitelText}>
              <TrText root={"home"} name={"section_5_title"} />
            </p>
            <div className={s.Block4Cards}>
              {data.slice(0, 3).map((res) => (
                <div key={res.id}>
                  <NewsCards data={res} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={s.Block5}>
        <div className={s.Block5Titel}>
          <div className={s.Block5TitelBloc1}>
            <h3>
              <TrText root={"home"} name={"section_support_title"} />
            </h3>
            <div className={s.Block5TitelImage}>
              <div className={s.Block5TitelImageBg}>
                <Image
                  src={"/04.svg"}
                  alt="mainImage"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <Image
                src={"/mainImageBlock5.png"}
                alt="mainImage"
                objectFit="contain"
                layout="fill"
              />
            </div>
          </div>
          <div className={s.Block5TitelBloc2}>
            <h3>
              <TrText root={"home"} name={"section_support_formt_title"} />
            </h3>
            <MainFrom />
          </div>
        </div>
      </div>

      <div className={s.LastNews}></div>
      <Footer />
    </div>
  );
  // }
}
