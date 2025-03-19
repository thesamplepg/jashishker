"use client";

import React, { useEffect, useState } from "react";
import Chatbot from "react-chatbot-kit";
import { createChatBotMessage } from "react-chatbot-kit";

import s from "./page.module.scss";
import "./Chat.css";
import Image from "next/image";
import cm from "classnames";
import { FiUserX, FiX, FiXCircle, FiXOctagon } from "react-icons/fi";
import { Generate, SsvvLeft, Svg, SvgRight } from "./svg";
import { BiX } from "react-icons/bi";
const FAQComponent = ({ setPageId, setFAqID }) => {
  const faqs = [
    { question: "Как создать аккаунт?", id: 1 },
    { question: "Как восстановить пароль?", id: 2 },
    { question: "Как зарегистрировать бизнес?", id: 3 },
    { question: "Какие налоги я должен платить?", id: 4 },
    { question: "Как получить кредит для бизнеса?", id: 5 },
    { question: "Какие документы нужны для открытия расчетного счета?", id: 6 },
    { question: "Как получить лицензию на ведение бизнеса?", id: 7 },
    { question: "Как выбрать систему налогообложения?", id: 8 },
    { question: "Как зарегистрировать кассовый аппарат?", id: 9 },
    { question: "Как защитить интеллектуальную собственность?", id: 10 },
    { question: "Какие существуют меры поддержки бизнеса?", id: 11 },
    { question: "Как найти клиентов для бизнеса?", id: 12 },
    { question: "Как вести бухгалтерский учет?", id: 13 },
    { question: "Как оформить сотрудников на работу?", id: 14 },
    { question: "Как закрыть бизнес?", id: 15 },
    { question: "Как начать экспорт или импорт товаров?", id: 16 },
    {
      question: "Какие требования к трудовым договорам в Кыргызстане?",
      id: 17,
    },
    { question: "Как получить грант на развитие бизнеса?", id: 18 },
    { question: "Какие требования к рекламе в Кыргызстане?", id: 19 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(faqs.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = faqs.slice(indexOfFirstItem, indexOfLastItem);
  const actionProvider = (id) => {
    setPageId(2);
    setFAqID(id);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={s.asdasdasd}>
      <div className={s.buttonFlex}>
        {currentItems.map((faq) => (
          <button
            className={s.botName}
            key={faq.id}
            onClick={() => actionProvider(faq)}
          >
            {faq.question}
          </button>
        ))}
      </div>
      <div className={s.pagination}>
        <button
          className={cm(s.arrowButton, { [s.disabled111]: currentPage === 1 })}
          onClick={handlePrevPage}
          style={{
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
          disabled={currentPage === 1}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 10.9997L7.14 10.9997L10.77 6.63973C10.854 6.53861 10.9174 6.42193 10.9563 6.29634C10.9953 6.17076 11.0091 6.03873 10.997 5.9078C10.9726 5.64338 10.8442 5.39947 10.64 5.22973C10.4358 5.05999 10.1725 4.97833 9.90808 5.00271C9.64365 5.02709 9.39974 5.15551 9.23 5.35973L4.23 11.3597C4.19636 11.4075 4.16628 11.4576 4.14 11.5097C4.14 11.5597 4.09 11.5897 4.07 11.6397C3.9767 11.8707 3.9767 12.1288 4.07 12.3597C4.07 12.4097 4.12 12.4397 4.14 12.4897C4.16628 12.5419 4.19636 12.592 4.23 12.6397L9.23 18.6397C9.31405 18.7408 9.41719 18.8244 9.53353 18.8857C9.64988 18.9469 9.77715 18.9847 9.90808 18.9967C10.039 19.0088 10.171 18.995 10.2966 18.956C10.4222 18.9171 10.5389 18.8538 10.64 18.7697C10.7411 18.6857 10.8247 18.5825 10.886 18.4662C10.9472 18.3499 10.985 18.2226 10.997 18.0917C11.0091 17.9607 10.9953 17.8287 10.9563 17.7031C10.9174 17.5775 10.854 17.4608 10.77 17.3597L7.14 12.9997L19 12.9997C19.2652 12.9997 19.5196 12.8944 19.7071 12.7068C19.8946 12.5193 20 12.2649 20 11.9997C20 11.7345 19.8946 11.4802 19.7071 11.2926C19.5196 11.1051 19.2652 10.9997 19 10.9997Z"
              fill="white"
            />
          </svg>
        </button>

        <button
          className={cm(s.arrowButton, {
            [s.disabled11111]: currentPage === totalPages,
          })}
          onClick={handleNextPage}
          style={{
            opacity: currentPage === totalPages ? 0.5 : 1,
          }}
          disabled={currentPage === totalPages}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13.0003L16.86 13.0003L13.23 17.3603C13.146 17.4614 13.0826 17.5781 13.0437 17.7037C13.0047 17.8292 12.9909 17.9613 13.003 18.0922C13.0274 18.3566 13.1558 18.6005 13.36 18.7703C13.5642 18.94 13.8275 19.0217 14.0919 18.9973C14.3563 18.9729 14.6003 18.8445 14.77 18.6403L19.77 12.6403C19.8036 12.5925 19.8337 12.5424 19.86 12.4903C19.86 12.4403 19.91 12.4103 19.93 12.3603C20.0233 12.1293 20.0233 11.8712 19.93 11.6403C19.93 11.5903 19.88 11.5603 19.86 11.5103C19.8337 11.4581 19.8036 11.408 19.77 11.3603L14.77 5.36027C14.686 5.25916 14.5828 5.17558 14.4665 5.11432C14.3501 5.05307 14.2229 5.01532 14.0919 5.00325C13.961 4.99118 13.829 5.00502 13.7034 5.04397C13.5778 5.08292 13.4611 5.14623 13.36 5.23027C13.2589 5.31432 13.1753 5.41746 13.114 5.5338C13.0528 5.65015 13.015 5.77742 13.003 5.90835C12.9909 6.03928 13.0047 6.17131 13.0437 6.29689C13.0826 6.42247 13.146 6.53915 13.23 6.64027L16.86 11.0003L5 11.0003C4.73478 11.0003 4.48043 11.1056 4.29289 11.2932C4.10536 11.4807 4 11.7351 4 12.0003C4 12.2655 4.10536 12.5198 4.29289 12.7074C4.48043 12.8949 4.73478 13.0003 5 13.0003Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const YesNoOptions = ({ actionProvider }) => (
  <div className={s.btnFlex}>
    <button className={s.botName} onClick={actionProvider.handleYes}>
      Да
    </button>
    <button className={s.botName} onClick={actionProvider.handleNo}>
      Нет
    </button>
  </div>
);

const AskQuestionButton = ({ actionProvider }) => (
  <div className={s.btnFlex}>
    <button className={s.botName} onClick={actionProvider.handleYes}>
      Задать вопрос
    </button>
    <a href="mailto:ernisLoh@example.com" target="_blank">
      <button className={s.botName} onClick={actionProvider.handleNo}>
        Забылиадать вопрос оператору
      </button>
    </a>
  </div>
);

const config = {
  botName: "FAQBot",
  initialMessages: [
    createChatBotMessage("Привет! Какие у вас есть вопросы?", {
      widget: "faqOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "faqOptions",
      widgetFunc: (props) => <FAQComponent {...props} />,
    },
    {
      widgetName: "yesNoOptions",
      widgetFunc: (props) => <YesNoOptions {...props} />,
    },
    {
      widgetName: "askQuestionButton",
      widgetFunc: (props) => <AskQuestionButton {...props} />,
    },
  ],
};

const Page1 = ({ setPageId, setFAqID, FAqID }) => {
  const answers = {
    1: "Для создания аккаунта следуйте инструкциям на странице регистрации. Вам нужно будет указать ваш email, придумать пароль и подтвердить учетную запись.",
    2: "Для восстановления пароля используйте функцию 'Забыли пароль' на странице входа. Введите ваш email, и вы получите инструкцию по восстановлению.",
    3: "Для регистрации бизнеса в Кыргызстане вам нужно выбрать форму собственности (ИП, ООО и т.д.), подготовить необходимые документы и подать их в налоговые органы. Регистрация занимает от 3 до 5 рабочих дней.",
    4: "В зависимости от формы собственности и вида деятельности, вы можете платить различные налоги, такие как налог на доходы, НДС, налог с продаж и другие.",
    5: "Для получения кредита вам нужно подготовить бизнес-план, финансовые отчеты и обратиться в банк или микрофинансовую организацию.",
    6: "Для открытия расчетного счета требуются учредительные документы, свидетельство о регистрации, паспорт руководителя и другие документы.",
    7: "Лицензия требуется для определенных видов деятельности. Для ее получения обратитесь в лицензирующий орган с пакетом документов.",
    8: "Выбор формы налогообложения зависит от объема доходов и типа деятельности. Рекомендуется проконсультироваться с бухгалтером для выбора оптимального варианта.",
    9: "Для регистрации кассового аппарата необходимо обратиться в налоговые органы и предоставить заявление, свидетельство о регистрации и технические документы.",
    10: "Для защиты интеллектуальной собственности можно зарегистрировать товарный знак, патент или авторское право в Государственной службе интеллектуальной собственности.",
    11: "Государство предоставляет программы поддержки малого и среднего бизнеса, такие как льготное кредитование, субсидии и налоговые льготы.",
    12: "Для привлечения клиентов можно использовать интернет-рекламу, социальные сети, участие в выставках и конференциях.",
    13: "Ведение бухгалтерского учета включает регистрацию всех финансовых операций, составление отчетности и уплату налогов.",
    14: "Для оформления сотрудников на работу необходимо заключить трудовой договор, зарегистрировать его в Социальном фонде и налоговых органах.",
    15: "Для закрытия бизнеса необходимо уведомить налоговые органы, рассчитаться с кредиторами и сдать все необходимые отчеты.",
    16: "Для начала экспортно-импортной деятельности необходимо зарегистрироваться как участник ВЭД, получить необходимые лицензии и сертификаты, если это требуется, и ознакомиться с таможенными процедурами.",
    17: "Требования к трудовым договорам в Кыргызстане включают заключение договора в письменной форме с полными данными сторон, условиями оплаты, рабочего времени и другими аспектами.",
    18: "Для получения гранта вам нужно подготовить проект, соответствующий требованиям грантодателя, и подать заявку.",
    19: "Требования к рекламе регулируются Законом Кыргызской Республики “О рекламе”. Реклама должна быть достоверной и не вводить в заблуждение.",
  };

  return (
    <div className={s.PageId}>
      <div className={s.BootPageID}>
        <img src="/img/b5562476403819216edad842b5048412.jpeg" />
        <p>{FAqID.question}</p>
      </div>
      <div className={s.FAqOT}>
        <div className={s.FAqOTLogoPg}>
          <Svg />
        </div>
        <p>{answers[FAqID.id]}</p>
      </div>
      <button className={s.Generate1} onClick={() => setPageId(1)}>
        {" "}
        <Generate /> Сгенерировать вопросы
      </button>
      <div
        style={{
          height: "20px",
        }}
      ></div>
    </div>
  );
};

const ChatBotCustom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [pageId, setPageId] = useState(0);
  const [FAqID, setFAqID] = useState();

  return (
    <div className={s.ChatBotCustom}>
      <div className={s.button}>
        <Image
          className={s.btnImage}
          onClick={openModal}
          src="/chat.svg"
          width={32}
          height={32}
          alt=""
        />
      </div>
      {isModalOpen && (
        <div className={s.overlay}>
          <div className={s.BLockContent}>
            {pageId === 0 && (
              <div className={s.Page1}>
                <button className={s.Bix} onClick={closeModal}>
                  <BiX />
                </button>
                <div className={s.Logo}>
                  <Svg />

                  <p>Привет! Какие у вас есть вопросы?</p>
                </div>
                <button className={s.Generate} onClick={() => setPageId(1)}>
                  {" "}
                  <Generate /> Сгенерировать вопросы
                </button>
              </div>
            )}
            {pageId === 1 && (
              <div className={s.Page2}>
                <div className={s.NavBame}>
                  <div className={s.NavBameLogo}>
                    <Svg />
                    <p>ЖАШ ИШКЕР</p>
                  </div>
                  <button className={s.Bix} onClick={closeModal}>
                    <BiX />
                  </button>
                </div>
                <FAQComponent setPageId={setPageId} setFAqID={setFAqID} />
              </div>
            )}
            {pageId === 2 && (
              <div>
                <div className={s.NavBame}>
                  <div className={s.NavBameLogo}>
                    <Svg />
                    <p>ЖАШ ИШКЕР</p>
                  </div>
                  <button className={s.Bix} onClick={closeModal}>
                    <BiX />
                  </button>
                </div>
                <Page1
                  setPageId={setPageId}
                  setFAqID={setFAqID}
                  FAqID={FAqID}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotCustom;
