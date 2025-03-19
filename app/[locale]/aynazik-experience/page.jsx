import React from "react";
import s from "./page.module.scss";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";

const data = [
  {
    id: 1,
    title: "Энергоэффективные системы",
  },
  {
    id: 2,
    title: "Утилизация отходов",
  },
  {
    id: 3,
    title: "Использование органических удобрений и пестицидов",
  },
  {
    id: 4,
    title: "Системы водоуправления",
  },
  {
    id: 5,
    title: "Внедрение передовых агротехнологий",
  },
];

const page = () => {
  return (
    <div>
      <Haeder />
      <div className={s.storeBack}>
        <SocialSidebar />
        <div className={s.heroContainer}>
          <div className={s.experienceAll}>
            <h1>
              Успешное фермерство: опыт Айназик <br /> Торогуловой
            </h1>
            <div>
              <div className={s.cardsText}>
                <ul className={s.ul2}>
                  <h4>Инновационные методы и устойчивые проекты</h4>
                  <h1>01</h1>
                </ul>
                <ul className={s.ul}>
                  <p>
                    Альтернативные источники энергии, такие как биогаз, являются
                    ключевым элементом для устойчивого развития сельского
                    хозяйства. Проекты, направленные на использование
                    биогазового удобрения, способствуют улучшению экологической
                    ситуации и повышению урожайности.
                  </p>
                </ul>
              </div>
              <div className={s.cardsText}>
                <ul className={s.ul2}>
                  <h4>Качество продукции</h4>
                  <h1>02</h1>
                </ul>
                <ul className={s.ul}>
                  <p>
                    Одной из важнейших задач проекта является повышение качества
                    продукции. Биогазовое удобрение помогает улучшить состояние
                    почвы и увеличить урожайность без использования химических
                    удобрений. Это также способствует улучшению экологической
                    ситуации в регионе.
                  </p>
                </ul>
              </div>
              <div className={s.cardsText}>
                <ul className={s.ul2}>
                  <h4>Трудоустройство и экономический вклад</h4>
                  <h1>03</h1>
                </ul>
                <ul className={s.ul}>
                  <p>
                    В рамках проекта были трудоустроены 3 рабочих, 1 аспирант, 2
                    учащихся одной академии. Это позволило создать новые рабочие
                    места и повысить квалификацию местных работников, что
                    способствует общему экономическому развитию региона.
                  </p>
                </ul>
              </div>
              <div className={s.cardsText}>
                <ul className={s.ul2}>
                  <h4>Проблемы и вызовы</h4>
                  <h1>04</h1>
                </ul>
                <ul className={s.ul}>
                  <p>
                    Основной проблемой на этапе реализации проекта является
                    необходимость строгого контроля за качеством продукции. Это
                    потребовало внедрения дополнительных мер контроля и
                    разработки системы сертификации, что позволило улучшить
                    качество продукции и укрепить доверие клиентов.
                  </p>
                </ul>
              </div>
              <div className={s.cardsText}>
                <ul className={s.ul2}>
                  <h4>Зеленые решения и инновации</h4>
                  <h1>05</h1>
                </ul>
                <ul className={s.ul}>
                  <p>
                    Ферма Торогуловых активно продвигает зеленые решения,
                    направленные на устойчивое развитие сельского хозяйства:
                  </p>
                </ul>
                <div className={s.getEndEnd}>
                  {data.map((res, i) => (
                    <div key={i} className={s.getextEndall}>
                      <div className={s.getborder}>
                        <Image
                          src="/star.svg"
                          width={24}
                          height={24}
                          alt="Picture of the author"
                        />
                      </div>
                      <p>{res.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={s.cardsText}>
                <ul className={s.ul2}>
                  <h4>Инновационные подходы</h4>
                  <h1>06</h1>
                </ul>
                <ul className={s.ul}>
                  <p>
                    Для повышения эффективности и устойчивости фермерского
                    хозяйства были внедрены следующие инновации:
                  </p>
                </ul>
                <div className={s.getEndEnd}>
                  {data.map((res, i) => (
                    <div key={i} className={s.getextEndall}>
                      <div className={s.getborder}>
                        <Image
                          src="/star.svg"
                          width={24}
                          height={24}
                          alt="Picture of the author"
                        />
                      </div>
                      <p>{res.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={s.cardsText}>
                <ul className={s.ul2}>
                  <h4>Заключение</h4>
                  <h1>07</h1>
                </ul>
                <ul className={s.ul}>
                  <p>
                    Проект биогазового удобрения является важным шагом на пути к
                    устойчивому развитию сельского хозяйства в Кыргызстане. Он
                    помогает решать экологические проблемы, создавать новые
                    рабочие места и улучшать экономическую ситуацию в регионе.
                  </p>
                </ul>
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
