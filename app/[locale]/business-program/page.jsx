import React from "react";
import Haeder from "@/components/Haeder/Haeder";
import Footer from "@/components/Footer/Footer";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";
import Hero from "./Hero";
import Goal from "./Goal";
import Directions from "./Directions";
import Results from "./Results";
import Conclusion from "./Conclusion";
import Documents from "./Documents";
import Presentation from "./Presentation";

import "./page.scss";

export const metadata = {
  title: "ЖАШ ИШКЕР",
  description:
    "Проект «Молодежь за цифровизацию, лидерство и зеленые навыки» реализуется «Энактас Кыргызстан» при финансовой поддержке Европейского Союза.",
  icons: {
    icon: "/logo.svg",
  },
};

const Page = () => {
  return (
    <>
      <Haeder />
      <SocialSidebar />
      <div className="bp">
        <Hero />
        <Goal />
        <Directions />
        <Results />
        <Conclusion />
        <Documents />
        <Presentation />
      </div>
      <Footer />
    </>
  );
};

export default Page;
