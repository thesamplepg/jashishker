import React from "react";
import Image from "next/image";

import "./index.scss";
import Eclipse from "@/components/UI/Eclipse";
import TrText from "@/components/TrText/TrText";

const Target = () => {
  return (
    <section className="bp_target" id="bp-goal">
      <Eclipse isLight={true} className="eclipse-left" />
      <Eclipse isLight={true} className="eclipse-right" />
      <div className="container">
        <h2 className="bp_target-title">
          <TrText root="bp" name="goal_title" />
        </h2>
        <div className="bp_target-grid">
          <article className="bp_target-aim">
            <div className="content">
              <TrText root="bp" name="goal_goal" />
            </div>
            <div className="bp_target-image">
              <Image
                src="/img/target-image.jpg"
                alt="group of guys"
                width={1280}
                height={850}
              />
            </div>
          </article>
          <article className="bp_target-about">
            <TrText root="bp" name="goal_about-1" />
            <br />
            <br />
            <TrText root="bp" name="goal_about-2" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Target;
