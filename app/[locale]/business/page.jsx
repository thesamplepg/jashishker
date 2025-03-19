import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro } from "next/font/google";
import React from "react";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import SetHtml from "@/components/TrText/SetHtml";
import TrText from "@/components/TrText/TrText";
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "ЖАШ ИШКЕР",
  description:
    "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
  icons: {
    icon: "/logo.svg",
  },
};
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const Text = ({ name }) => {
  return <TrText root={"business"} name={name} />;
};
const Text2 = ({ name }) => {
  return <TrText root={"BINDING"} name={name} />;
};

const page = () => {
  const item = [
    {
      id: 1,
      context: <Text name={"A7"} />,
    },
    {
      id: 2,
      context: <Text name={"A8"} />,
    },
    {
      id: 3,
      context: <Text name={"A9"} />,
    },
    {
      id: 4,
      context: <Text name={"A11"} />,
    },
    {
      id: 5,
      context: <Text name={"A12"} />,
    },
    {
      id: 6,
      context: <Text name={"A13"} />,
    },
    {
      id: 7,
      context: <Text name={"A14"} />,
    },
  ];
  const item2 = [
    {
      id: 1,
      title: <Text name={"B1"} />,
      text: <Text name={"B2"} />,
    },
    {
      id: 2,
      title: <Text name={"B3"} />,
      text: <Text name={"B5"} />,
    },
    {
      id: 3,
      title: <Text name={"B6"} />,
      text: <Text name={"B7"} />,
    },
    {
      id: 4,
      title: <Text name={"B8"} />,
      text: <Text name={"B9"} />,
    },
  ];
  const item3 = [
    {
      id: 1,
      title: <Text name={"B15"} />,
      context: <Text name={"B17"} />,
    },
    {
      id: 2,
      title: <Text name={"B18"} />,
      context: <Text name={"B19"} />,
    },
    {
      id: 3,
      title: <Text name={"B20"} />,
      context: <Text name={"B21"} />,
    },
    {
      id: 4,
      title: <Text name={"B22"} />,
      context: <Text name={"B23"} />,
    },
    {
      id: 5,
      title: <Text name={"B24"} />,
      context: <Text name={"B25"} />,
    },
    {
      id: 6,
      title: <Text name={"C1"} />,
      context: <Text name={"C2"} />,
    },
    {
      id: 7,
      title: <Text name={"C3"} />,
      context: <Text name={"C5"} />,
    },
    {
      id: 8,
      title: <Text name={"C7"} />,
      context: <Text name={"C8"} />,
    },
    {
      id: 9,
      title: <Text name={"C9"} />,
      context: <Text name={"C10"} />,
    },
  ];

  // Массив данных с ключами для переводов
  const items = [
    {
      titleKey: "BINDING_lack_of_clear_goal_mission_title",
      descriptionKey: "BINDING_lack_of_clear_goal_mission_description",
    },
    {
      titleKey: "BINDING_insufficient_market_research_title",
      descriptionKey: "BINDING_insufficient_market_research_description",
    },
    {
      titleKey: "BINDING_unrealistic_financial_forecasts_title",
      descriptionKey: "BINDING_unrealistic_financial_forecasts_description",
    },
    {
      titleKey: "BINDING_ignoring_risks_title",
      descriptionKey: "BINDING_ignoring_risks_description",
    },
    {
      titleKey: "BINDING_incomplete_product_description_title",
      descriptionKey: "BINDING_incomplete_product_description_description",
    },
    {
      titleKey: "BINDING_overestimating_team_capabilities_title",
      descriptionKey: "BINDING_overestimating_team_capabilities_description",
    },
    {
      titleKey: "BINDING_insufficient_marketing_strategy_title",
      descriptionKey: "BINDING_insufficient_marketing_strategy_description",
    },
    {
      titleKey: "BINDING_lack_of_scaling_plan_title",
      descriptionKey: "BINDING_lack_of_scaling_plan_description",
    },
    {
      titleKey: "BINDING_unclear_task_deadlines_title",
      descriptionKey: "BINDING_unclear_task_deadlines_description",
    },
    {
      titleKey: "BINDING_inflexible_business_plan_title",
      descriptionKey: "BINDING_inflexible_business_plan_description",
    },
  ];

  return (
    <div>
      <Haeder />
      <div className={s.economyall}>
        <SocialSidebar />
        <div className={s.economycontainer}>
          <div className={s.leadershiptitle}>
            <h1 className={BeVietnamPro.className}>
              <SetHtml root={"business"} name={"A1"} />
            </h1>
            <div className={s.etext}>
              {/* <p className={Alex.className}>
                <Text name={"A2"} />
              </p> */}
            </div>
          </div>
          <hr />
          <div className={s.bisnesstext}>
            <h2>
              <Text name={"A3"} />
            </h2>
            <nav>
              <Image
                className={s.imgr4}
                src="/image12.svg"
                alt="leadership"
                width={510}
                height={405}
              />
              <li className={s.list1}>
                <Text name={"A4"} />
              </li>
              <li className={s.list2}>
                <Text name={"A5"} />
              </li>
            </nav>
          </div>
          <div className={s.alwaystext}>
            <h3>
              <Text name={"A6"} />
            </h3>
            <div className={s.gridimgtext}>
              <div>
                <img
                  className={s.imgs2}
                  src="/image13.svg"
                  alt="leadership"
                  width={400}
                  height={272}
                />
                <p>
                  <Text name={"A15"} />
                </p>
              </div>
              <div className={s.navgridcontainer}>
                {item.map((_, i) => {
                  return (
                    <div key={i} className={s.navgrid}>
                      <div className={s.navgridflex}>
                        <li>{_.id}</li>
                        <p>{_.context}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <nav className={s.necessitytext}>
            <ul className={s.uls}>
              <h2>
                <SetHtml root={"business"} name={"A16"} />
              </h2>
            </ul>
            <ul className={s.uls2}>
              <p>
                <Text name={"A17"} />
              </p>
            </ul>
          </nav>
          <div className={s.nestextgrid}>
            {item2.map((_, i) => {
              return (
                <nav key={i} className={s.flexnestext}>
                  <ul className={s.ullist}>
                    <li>{_.title}</li>
                  </ul>
                  <ul className={s.ullist2}>
                    <p>{_.text}</p>
                  </ul>
                </nav>
              );
            })}
            <nav className={s.navlist}>
              <li>
                <Text name={"B10"} />
              </li>
            </nav>
          </div>
          <nav className={s.navmenuall}>
            <ul className={s.menuul}>
              <h1>
                <Text name={"B11"} />
              </h1>
            </ul>
            <ul className={s.menuul2}>
              <p>
                <Text name={"B12"} />
              </p>
            </ul>
          </nav>
          <div className={s.gridtempalatyall}>
            <div className={s.cartblockimg}>
              <h4>
                <Text name={"B14"} />
              </h4>
              <img
                className={s.imagewidht}
                src="/image14.svg"
                alt="leadership"
                width={800}
                height={467}
              />
            </div>
            {item3.map((_, i) => {
              return (
                <div key={i} className={s.cartblock}>
                  <Image
                    src="/2.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <h4>{_.title} </h4>
                  <p>{_.context}</p>
                </div>
              );
            })}
            <nav className={s.navbottomtext}>
              <h5>
                <Text name={"C11"} />
              </h5>
            </nav>
          </div>
          <nav className={s.pagetext}>
            <li>
              <Text name={"C13"} />
            </li>
          </nav>
          <nav className={s.pagebtn}>
            <button>
              <Text name={"C18"} />
            </button>
            <li>
              <Text name={"C14"} />
            </li>
          </nav>
          <nav className={s.flexcolump}>
            <ul className={s.ul}>
              <h1>
                <Text name={"C20"} />
              </h1>
            </ul>
            <ul className={s.ul2}>
              <p>
                <Text name={"C21"} />
              </p>
            </ul>
          </nav>
          <div className={s.gridblockcolump2}>
            {items.map((item, index) => (
              <div key={index} className={s.gridblock}>
                <h4>
                  <Text2 name={item.titleKey} />
                </h4>
                <p>
                  <Text2 name={item.descriptionKey} />
                </p>
              </div>
            ))}
          </div>
          <nav className={s.jcend}>
            <h4>
              <Text name={"E1"} />
            </h4>
          </nav>
          <div className={s.foottop}>
            <h1>
              <Text name={"E3"} />
            </h1>
            <nav>
              <Image
                className={s.image15}
                src="/image15.svg"
                alt="image"
                width={510}
                height={405}
              />
              <ul>
                <li>
                  <Text name={"E4"} />
                </li>
                <li>
                  <Text name={"E5"} />
                </li>
                <li>
                  <Text name={"E6"} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
