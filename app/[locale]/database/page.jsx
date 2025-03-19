"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import styles from "./page.module.scss";
import Image from "next/image";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import PersonalDataForm from "@/components/Modal/page";
import cm from "classnames";
import { Be_Vietnam_Pro } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import { Api } from "@/api";
import axios from "axios";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import TrText from "@/components/TrText/TrText";
import { useLocale } from "next-intl";
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const contacts = [
  {
    id: 1,
    name: "Попов Алексей",
    service: "Консультативные услуги",
    email: "testemail1@gmail.com",
    phone: "+996 550 123 456",
    photo: "image26.svg",
    city: "Бишкек",
    age: "20 лет",
    services: "Консультационные услуги",
    activity: "Ремонт и отделка",
    isFavorite: true,
    isActive: true,
  },

  {
    id: 2,
    name: "Ashley Wilson",
    service: "Услуги по доставке еды",
    email: "sample.account10@gmail.com",
    phone: "+996 700 654 321",
    photo: "image26.svg",
    city: "Бишкек",
    age: "25 лет",
    services: "Delivery services",
    activity: "Food Delivery",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 3,
    name: "David Moore",
    service: "Управление помещениями",
    email: "testemail2023@gmail.com",
    phone: "+996 770 987 654",
    photo: "image26.svg",
    city: "Бишкек",
    age: "30 лет",
    services: "Property Management",
    activity: "Real Estate",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 4,
    name: "Emily Johnson",
    service: "Консалтинговые услуги",
    email: "sample.account03@gmail.com",
    phone: "+996 555 321 789",
    photo: "image26.svg",
    city: "Бишкек",
    age: "35 лет",
    services: "Consulting services",
    activity: "Consulting",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 5,
    name: "Колачев Екатерина",
    service: "Фотограф",
    email: "fakename2023@gmail.com",
    phone: "+996 770 123 456",
    photo: "image26.svg",
    city: "Бишкек",
    age: "35 лет",
    services: "Photography",
    activity: "Photography",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 6,
    name: "Кузнецов Дмитрий",
    service: "Тестовые услуги",
    email: "testaccount1@gmail.com",
    phone: "+996 555 789 456",
    photo: "image26.svg",
    city: "Бишкек",
    age: "40 лет",
    services: "Test services",
    activity: "Testing",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 7,
    name: "Морозова Елена Андреевна",
    service: "Преподаватель русского языка",
    email: "example55.user@gmail.com",
    phone: "+996 770 654 321",
    photo: "image26.svg",
    city: "Бишкек",
    age: "45 лет",
    services: "Russian language teaching",
    activity: "Teaching",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 8,
    name: "Попов Алексей",
    service: "Консультативные услуги",
    email: "unused.email789@gmail.com",
    phone: "+996 555 876 543",
    photo: "image26.svg",
    city: "Бишкек",
    age: "20 лет",
    services: "Consulting services",
    activity: "Consulting",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 9,
    name: "Попов Алексей",
    service: "Консультативные услуги",
    email: "unused.email789@gmail.com",
    phone: "+996 555 876 543",
    photo: "image26.svg",
    city: "Бишкек",
    age: "20 лет",
    services: "Consulting services",
    activity: "Consulting",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 10,
    name: "Попов Алексей",
    service: "Консультативные услуги",
    email: "unused.email789@gmail.com",
    phone: "+996 555 876 543",
    photo: "image26.svg",
    city: "Бишкек",
    age: "20 лет",
    services: "Consulting services",
    activity: "Consulting",
    isFavorite: false,
    isActive: true,
  },
  {
    id: 11,
    name: "Попов Алексей",
    service: "Консультативные услуги",
    email: "unused.email789@gmail.com",
    phone: "+996 555 876 543",
    photo: "image26.svg",
    city: "Бишкек",
    age: "20 лет",
    services: "Consulting services",
    activity: "Consulting",
    isFavorite: false,
    isActive: true,
  },
];

const getUserData = async () => {
  const data = await axios.get(`${Api}api/v1/application-forms/`);
  return data.data;
};

const Page = () => {
  const [data, setData] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [filterBy, setFilterBy] = useState("all");
  const [userList, setUserList] = useState([]);
  const [lodingm, setLodingm] = useState(true);

  const sortedContacts = [...contacts].sort((a, b) => {
    if (sortBy === "newest") return b.id - a.id;
    if (sortBy === "oldest") return a.id - b.id;
    if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
  });
  const filteredContacts = sortedContacts.filter((contact) => {
    if (filterBy === "all") return true;
    if (filterBy === "active") return contact.isActive;
    if (filterBy === "favorites") return contact.isFavorite;
  });

  const [page, setPage] = useState("active");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const [selectedContact, setSelectedContact] = useState(false);

  const handlerIsModal = (e) => {
    const w = window.innerWidth;
    if (w < 600) {
      setSelectedContact(e);
    } else {
      setSelectedContact(e);
    }
  };

  const locale = useLocale();

  useEffect(() => {
    getUserData().then((data) => {
      setSelectedContact(data[false]);
      setUserList(data);
    });
  }, []);
  useEffect(() => {
    setLodingm(false);
  }, [userList]);

  return (
    lodingm !== true && (
      <>
        <div>
          <Haeder />
          <div className={styles.mainDataBase}>
            <SocialSidebar />
            <div className={styles.dataBaseCont}>
              <div className={styles.baseTitle}>
                <h1 className={BeVietnamPro.className}>
                  <TrText root={"database"} name="databaseTitle" />
                </h1>
              </div>
              <hr />
              <div className={styles.topBar}>
                <div className={styles.filterOptions}>
                  <Link href={"/database/add-to-your-vase"}>
                    <button
                      className={styles.filterButton}
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      <TrText root={"button"} name="buttonTitle" />
                    </button>
                  </Link>
                </div>
                <div className={styles.sortOptions}>
                  <button
                    onClick={() => handlePageChange("active")}
                    className={cm("button", {
                      [styles.active]: page === "active",
                    })}
                  >
                    <IoIosMenu size={24} />
                  </button>
                  <button
                    onClick={() => handlePageChange("favorites")}
                    className={cm("button", {
                      [styles.active]: page === "favorites",
                    })}
                  >
                    <AiOutlineAppstore size={24} />
                  </button>
                </div>
              </div>
              <div className={styles.tableHead}>
                <ul className={styles.tableHeadList}>
                  <li>
                    <TrText root={"database"} name="fullName" />
                  </li>
                  <li className={styles.displayNone}>
                    <TrText root={"database"} name="email" />
                  </li>
                </ul>
                <ul className={styles.tableHeadList2}>
                  <li className={styles.dispNumber}>
                    <TrText root={"database"} name="phoneNumber" />
                  </li>
                  <li className={styles.displayNone}>
                    <TrText root={"database"} name="data" />
                  </li>
                  <li className={styles.displayNone}>
                    <TrText root={"database"} name="region" />
                  </li>
                </ul>
              </div>
              <div className={styles.container}>
                <div
                  className={cm(styles.contactList, {
                    [styles.cardFavoritesList]: page === "favorites",
                  })}
                >
                  {userList.length <= 0 && (
                    <p className={styles.NoData}>
                      {" "}
                      {locale == "en" && "No data"}
                      {locale == "ru" && "Нет данных"}
                      {locale == "ky" && "Маалымат  жок"}
                    </p>
                  )}
                  {page === "favorites"
                    ? userList.map((contact) => (
                        <div
                          key={contact.id}
                          className={styles.cardFavorites}
                          onClick={() => setSelectedContact(contact)}
                        >
                          <div>
                            <div className={styles.cardPhoto}>
                              <Image
                                fill
                                objectFit="cover"
                                src={contact.photo}
                                alt={contact.name}
                              />
                            </div>
                            <div className={styles.favoriteTitel}>
                              <h3>{contact.full_name}</h3>
                              <p>
                                {contact.activity_type.length > 15
                                  ? contact.activity_type.slice(0, 25) + "..."
                                  : contact.activity_type}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    : userList.map((contact) => (
                        <>
                          <div
                            key={contact.id}
                            className={styles.contactItem}
                            onClick={() => setSelectedContact(contact)}
                          >
                            <img
                              src={contact.photo}
                              alt={contact.name}
                              className={styles.photo}
                            />
                            <div className={styles.details}>
                              <div>
                                <h3>{contact.email} </h3>
                                <p>
                                  {contact.activity_type.length > 15
                                    ? contact.activity_type.slice(0, 15) + "..."
                                    : contact.activity_type}
                                </p>
                              </div>
                              <p className={styles.email}>{contact.email}</p>
                              <p className={styles.phone}>{contact.phone}</p>
                              <p className={styles.name}>
                                {contact.date_of_birth}
                              </p>
                              <p className={styles.phone}>{contact.region}</p>
                            </div>
                          </div>
                        </>
                      ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        {selectedContact && (
          <div
            className={styles.modal}
            onClick={() => setSelectedContact(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.contactDetail}
            >
              <div
                className={styles.backArrow}
                onClick={() => setSelectedContact(false)}
              >
                <Image src="arrow.svg" alt="" width={8} height={12} />
              </div>
              <div className={styles.baseBack}>
                <img
                  src={selectedContact.photo}
                  alt={selectedContact.name}
                  className={styles.photo}
                />
                <div className={styles.flexCenter}>
                  <h1>{selectedContact.full_name}</h1>
                  <div className={styles.flexEmail}>
                    <Image
                      src="./sms-tracking.svg"
                      alt=""
                      width={24}
                      height={24}
                      className={styles.icon}
                    />
                    {selectedContact.email}
                  </div>
                  <div className={styles.flexNumber}>
                    <Image
                      src="./call-calling.svg"
                      alt=""
                      width={24}
                      height={24}
                      className={styles.icon}
                    />
                    {selectedContact.phone}
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <div>
                  <p>
                    <strong>
                      <TrText root={"modal"} name={"region"} />
                    </strong>
                    {selectedContact.region}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      <TrText root={"modal"} name={"dob"} />
                    </strong>
                    {selectedContact.email}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      {" "}
                      <TrText root={"modal"} name={"activity_type"} />
                    </strong>
                    {selectedContact.activity_type}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      <TrText root={"modal"} name={"activity_category"} />
                    </strong>
                    {selectedContact.activity_category}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      <TrText root={"modal"} name={"company_registration"} />
                    </strong>
                    {selectedContact.company_registration}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      <TrText root={"modal"} name={"full_company_name"} />
                    </strong>
                    {selectedContact.full_company_name}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>
                      <TrText root={"modal"} name={"commercial_name"} />
                    </strong>
                    {selectedContact.commercial_name}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {data && <PersonalDataForm setData={setData} />}
      </>
    )
  );
};

export default Page;
