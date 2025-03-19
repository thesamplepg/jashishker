import React from "react";
import Image from "next/image";
import Eclipse from "@/components/UI/Eclipse";

import "./index.scss";
import TrText from "@/components/TrText/TrText";

const Hero = () => {
  return (
    <section className={`bp_hero`}>
      <div className="container">
        <article className="bp_hero_info">
          <h3>
            <TrText root="bp" name="hero_pretitle" />
          </h3>
          <h1>
            <TrText root="bp" name="hero_title" />
          </h1>
          <p>
            <TrText root="bp" name="hero_about" />
          </p>
          <a className="button" href="#bp-goal">
            <TrText root="bp" name="hero_button" />
          </a>
        </article>
        <div className="bp_hero_main-image">
          <div className="image-container">
            <Eclipse className="center-eclipse" />
            <Image src="/img/girl.png" alt="girl" width={484} height={695} />
          </div>
        </div>
      </div>
      <Eclipse className="left-eclipse" />
    </section>
  );
};

export default Hero;
