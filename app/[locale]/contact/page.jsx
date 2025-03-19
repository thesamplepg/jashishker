"use client";
import Footer from "@/components/Footer/Footer";
import Haeder from "@/components/Haeder/Haeder";
import React from "react";
import s from "./page.module.scss";
import { Alex_Brush, Be_Vietnam_Pro, Manrope } from "next/font/google";
import Image from "next/image";
import { BiMap } from "react-icons/bi";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { TbBrandYoutube } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import TrText from "@/components/TrText/TrText";
import FormContact from "@/components/FormContact/FormContact";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

// export const metadata = {
//   title: "ЖАШ ИШКЕР",
//   description:
//     "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
//   icons: {
//     icon: "/logo.svg",
//   },
// };
const Alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"],
});
const Page = () => {
  const params = useLocale();
  console.log(params);

  return (
    <div>
      <Haeder />
      <div className={s.contact}>
        <SocialSidebar />
        <div className={s.container}>
          <div className={s.contactText}>
            <h1 className={BeVietnamPro.className}>
              <TrText root={"contact"} name="contact_title" />
            </h1>
          </div>
          <div className={s.contactBorder} />
          <div className={s.contactWrap}>
            <div className={s.contactMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1877.6116450619597!2d74.61784127380294!3d42.8795023258938!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDUyJzQ1LjMiTiA3NMKwMzcnMDUuNiJF!5e0!3m2!1sru!2sus!4v1725529591132!5m2!1sru!2sus"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={s.contactLink}>
              <div className={s.contactList}>
                <div className={s.contactItem}>
                  <div className={s.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M20 10C20 14.4183 14 22 12 22C10 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className={s.contactTitle}>
                    <p className={FontManrope.className}>
                      <TrText root={"partner"} name="partner_address" />
                    </p>
                    <Link href="#">
                      {params == "ru" && (
                        <span className={FontManrope.className}>
                          Кыргызская Республика Бишкек, <br /> 720001
                          ул.Ибраимова, 103
                        </span>
                      )}
                      {params == "ky" && (
                        <span className={FontManrope.className}>
                          Кыргыз Республикасы Бишкек ш.
                          <br />
                          720001 Ибраимова көч., 103
                        </span>
                      )}
                      {params == "en" && (
                        <span className={FontManrope.className}>
                          Kyrgyz Republic, Bishkek,
                          <br /> 720001 Ibraimova St., 103
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
                <div className={s.contactItem}>
                  <div className={s.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8.98026 9.75516C9.6162 11.0797 10.4831 12.3211 11.581 13.419C12.6789 14.5169 13.9203 15.3838 15.2448 16.0197C15.3588 16.0744 15.4157 16.1018 15.4878 16.1228C15.744 16.1975 16.0585 16.1438 16.2755 15.9885C16.3365 15.9448 16.3888 15.8926 16.4932 15.7881C16.8126 15.4687 16.9724 15.309 17.133 15.2045C17.7387 14.8107 18.5195 14.8107 19.1252 15.2045C19.2858 15.309 19.4455 15.4687 19.765 15.7881L19.943 15.9662C20.4286 16.4518 20.6714 16.6945 20.8033 16.9553C21.0656 17.4739 21.0656 18.0863 20.8033 18.6049C20.6714 18.8657 20.4286 19.1084 19.943 19.594L19.799 19.7381C19.3151 20.222 19.0731 20.4639 18.7441 20.6487C18.3791 20.8538 17.8121 21.0012 17.3935 21C17.0162 20.9989 16.7583 20.9257 16.2425 20.7793C13.4709 19.9926 10.8555 18.5083 8.6736 16.3264C6.49168 14.1445 5.00738 11.5291 4.22071 8.75746C4.07432 8.24172 4.00113 7.98385 4.00001 7.60653C3.99876 7.18785 4.1462 6.6209 4.35126 6.25587C4.53605 5.92691 4.77801 5.68494 5.26193 5.20102L5.40597 5.05699C5.89155 4.57141 6.13434 4.32861 6.3951 4.19672C6.91369 3.93443 7.52611 3.93443 8.0447 4.19672C8.30546 4.32861 8.54825 4.5714 9.03383 5.05699L9.21189 5.23504C9.53133 5.55448 9.69104 5.7142 9.79547 5.87481C10.1893 6.4805 10.1893 7.26134 9.79547 7.86703C9.69105 8.02764 9.53133 8.18736 9.21189 8.5068C9.10744 8.61125 9.05521 8.66347 9.0115 8.72452C8.85616 8.94146 8.80252 9.25601 8.8772 9.51218C8.89821 9.58426 8.92556 9.64123 8.98026 9.75516Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={s.contactTitle}>
                    <p className={FontManrope.className}>
                      <TrText root={"partner"} name="partner_phoneNumber" />
                    </p>
                    <Link href="">
                      <span className={FontManrope.className}>
                        +996 (312) 661 - 194
                      </span>
                    </Link>
                  </div>
                </div>
                <div className={s.contactItem}>
                  <div className={s.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 5L10.7721 11.045C11.4943 11.6067 12.5057 11.6067 13.2279 11.045L21 5M5.2 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.0799 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H5.2C4.07989 4 3.51984 4 3.09202 4.21799C2.71569 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.07989 2 7.2V16.8C2 17.9201 2 18.4802 2.21799 18.908C2.40973 19.2843 2.71569 19.5903 3.09202 19.782C3.51984 20 4.0799 20 5.2 20Z"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className={s.contactTitle}>
                    <p className={FontManrope.className}>E-Mail</p>
                    <a
                      href="mailto:enactuskyrgyzstan@gmail.com"
                      target="_blank"
                    >
                      <span className={FontManrope.className}>
                        enactuskyrgyzstan@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={s.contactSocial}>
                <p className={FontManrope.className}>
                  <TrText root={"partner"} name="social_links" />
                </p>
                <div className={s.contactMedia}>
                  <a
                    target="_blank"
                    className={s.icon}
                    href="https://www.instagram.com/enactus_kyrgyzstan?igsh=MWFrOXh4bjRoZGllcw== "
                  >
                    <FaInstagram />
                  </a>
                  <a target="_blank" className={s.icon} href="wa.me/0550002131">
                    <FaWhatsapp />
                  </a>
                  <a
                    target="_blank"
                    className={s.icon}
                    href="https://youtube.com/@enactuskyrgyzstan724?si=bxKKALhlBzYBiEBK"
                  >
                    <TbBrandYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormContact />
      <Footer />
    </div>
  );
};

export default Page;
