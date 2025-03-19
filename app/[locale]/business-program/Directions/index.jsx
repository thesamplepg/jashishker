import React from "react";
import Image from "next/image";

import "./index.scss";
import Eclipse from "@/components/UI/Eclipse";
import TrText from "@/components/TrText/TrText";

const Directions = () => {
  return (
    <section className="bp_directions">
      <Eclipse className="eclipse-left" />
      <Eclipse className="eclipse-right" />
      <div className="container">
        <h2 className="bp_directions-title">
          <TrText root="bp" name="directions_title" />
          <br />
          <TrText root="bp" name="directions_title-2" />
        </h2>
        <ul className="bp_directions-list">
          <li className="bp_directions-item">
            <div className="bp_directions-card">
              <span className="bp_directions-card_icon">
                <Image src="/bp-museum.svg" width={50} height={50} alt="icon" />
              </span>
              <h4 className="bp_directions-card_title">
                <TrText root="bp" name="directions_card1-title" />
              </h4>
              <ul className="bp_directions-card_content">
                <li>
                  <TrText root="bp" name="directions_card1-about1" />
                </li>
                <li>
                  <TrText root="bp" name="directions_card1-about2" />
                </li>
              </ul>
            </div>
          </li>
          <li className="bp_directions-item">
            <div className="bp_directions-card">
              <span className="bp_directions-card_icon">
                <Image
                  src="/bp-education.svg"
                  width={50}
                  height={50}
                  alt="icon"
                />
              </span>
              <h4 className="bp_directions-card_title">
                <TrText root="bp" name="directions_card2-title" />
              </h4>
              <ul className="bp_directions-card_content">
                <li>
                  <TrText root="bp" name="directions_card2-about1" />
                </li>
                <li>
                  <TrText root="bp" name="directions_card2-about2" />
                </li>
              </ul>
            </div>
          </li>
          <li className="bp_directions-item">
            <div className="bp_directions-card">
              <span className="bp_directions-card_icon">
                <Image src="/bp-card.svg" width={50} height={50} alt="icon" />
              </span>
              <h4 className="bp_directions-card_title">
                <TrText root="bp" name="directions_card3-title" />
              </h4>
              <ul className="bp_directions-card_content">
                <li>
                  <TrText root="bp" name="directions_card3-about1" />
                </li>
                <li>
                  <TrText root="bp" name="directions_card3-about2" />
                </li>
              </ul>
            </div>
          </li>
          <li className="bp_directions-item">
            <div className="bp_directions-card">
              <span className="bp_directions-card_icon">
                <Image src="/bp-houses.svg" width={50} height={50} alt="icon" />
              </span>
              <h4 className="bp_directions-card_title">
                <TrText root="bp" name="directions_card4-title" />
              </h4>
              <ul className="bp_directions-card_content">
                <li>
                  <TrText root="bp" name="directions_card4-about1" />
                </li>
                <li>
                  <TrText root="bp" name="directions_card4-about2" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Directions;
