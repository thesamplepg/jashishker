"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstSet, setIsFirstSet] = useState(true);

  const toggleIcons = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.fixedContainerSlidebar}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <a
            target="_blank"
            href="https://www.instagram.com/enactus_kyrgyzstan?igsh=MWFrOXh4bjRoZGllcw== "
          >
            <Image src="/image31.svg" alt="" width={30} height={30} />
          </a>
          <a target="_blank" href="https://wa.me/996550002131">
            <Image src="/whatsapp-icon.svg" alt="" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
