import React from "react";
import Image from "next/image";

import "./index.scss";
import Eclipse from "@/components/UI/Eclipse";
import TrText from "@/components/TrText/TrText";

const Presentation = () => {
  return (
    <section className="bp-presentation">
      <Eclipse className="eclipse-top" />
      <Eclipse className="eclipse-middle" />
      <Eclipse className="eclipse-bottom" />
      <div className="container">
        <section className="bp-presentation_section">
          <article className="bp-presentation_section-info">
            <h3 className="bp-presentation_section-title">
              <TrText root="bp" name="presentation_section1-title" />
            </h3>
            <div className="bp-presentation_section-about">
              <TrText root="bp" name="presentation_section1-about" />
            </div>
          </article>
          <div className="bp-presentation_section-image">
            <Image
              width={600}
              height={400}
              src="/img/presentation1.jpg"
              alt="presentation"
            />
          </div>
        </section>
        <section className="bp-presentation_section">
          <article className="bp-presentation_section-info">
            <h3 className="bp-presentation_section-title">
              <TrText root="bp" name="presentation_section2-title" />
            </h3>
            <div className="bp-presentation_section-about">
              <TrText root="bp" name="presentation_section2-about1" />
              <ul>
                <li style={{ marginBottom: "1rem" }}>
                  <TrText root="bp" name="presentation_section2-about2" />
                </li>
                <li>
                  <TrText root="bp" name="presentation_section2-about3" />
                </li>
              </ul>
            </div>
          </article>
          <div className="bp-presentation_section-image">
            <Image
              width={600}
              height={400}
              src="/img/presentation2.jpg"
              alt="presentation"
            />
          </div>
        </section>
        <section className="bp-presentation_section">
          <article className="bp-presentation_section-info">
            <h3 className="bp-presentation_section-title">
              <TrText root="bp" name="presentation_section3-title" />
            </h3>
            <div className="bp-presentation_section-about">
              <TrText root="bp" name="presentation_section3-about" />
            </div>
          </article>
          <div className="bp-presentation_section-image">
            <Image
              width={600}
              height={400}
              src="/img/presentation3.jpg"
              alt="presentation"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Presentation;
