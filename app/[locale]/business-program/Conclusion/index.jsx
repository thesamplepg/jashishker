import React from "react";
import Eclipse from "@/components/UI/Eclipse";
import Image from "next/image";
import TrText from "@/components/TrText/TrText";

import "./index.scss";

const Conclusion = () => {
  return (
    <section className="bp-conclusion">
      <Eclipse className="left-eclipse" />
      <div className="container">
        <div className="bp-conclusion_info">
          <h2>
            <TrText root="bp" name="conclusion_title" />
          </h2>
          <article>
            <TrText root="bp" name="conclusion_about" />
          </article>
        </div>
        <div className="bp-conclusion_image">
          <Eclipse className="image-eclipse" />
          <Image
            width={500}
            height={640}
            src="/img/conclusion-guy.png"
            alt="boy"
          />
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
