import React from "react";

import "./index.scss";
import Eclipse from "@/components/UI/Eclipse";
import TrText from "@/components/TrText/TrText";

const Results = () => {
  return (
    <section className="bp-results">
      <Eclipse className="left-eclipse" isLight={true} />
      <Eclipse className="right-eclipse" isLight={true} />
      <div className="container">
        <section className="bp-results_left">
          <h3 className="bp-results_title">
            <TrText root="bp" name="results_title-1" />
            <br />
            <TrText root="bp" name="results_title-1-2" />
          </h3>
          <p className="bp-results_about">
            <TrText root="bp" name="results_about-1" />
          </p>
          <ul className="bp-results_left-indicators">
            <li className="bp-results_left-indicator">
              <div>
                <span>1</span>
              </div>
              <article>
                <TrText root="bp" name="results_left-indicator-1" />
              </article>
            </li>
            <li className="bp-results_left-indicator">
              <div>
                <span>2</span>
              </div>
              <article>
                <TrText root="bp" name="results_left-indicator-2" />
              </article>
            </li>
            <li className="bp-results_left-indicator">
              <div>
                <span>3</span>
              </div>
              <article>
                <TrText root="bp" name="results_left-indicator-3" />
              </article>
            </li>
            <li className="bp-results_left-indicator">
              <div>
                <span>4</span>
              </div>
              <article>
                <TrText root="bp" name="results_left-indicator-4" />
              </article>
            </li>
          </ul>
        </section>
        <section className="bp-results_right">
          <h3 className="bp-results_title">
            <TrText root="bp" name="results_title-2" />
          </h3>
          <p className="bp-results_about">
            <TrText root="bp" name="results_about-2" />
          </p>
          <ul className="bp-results_right-indicators">
            <li className="bp-results_right-indicator">
              <TrText root="bp" name="results_right-indicator-1" />
            </li>
            <li className="bp-results_right-indicator">
              <TrText root="bp" name="results_right-indicator-2" />
            </li>
            <li className="bp-results_right-indicator">
              <TrText root="bp" name="results_right-indicator-3" />
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Results;
