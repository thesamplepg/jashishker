import React from "react";
import Image from "next/image";

import "./index.scss";
import Eclipse from "@/components/UI/Eclipse";
import TrText from "@/components/TrText/TrText";

const Documents = () => {
  return (
    <section className="bp-documents">
      <Eclipse className="eclipse" isLight={true} />
      <div className="container">
        <h2 className="bp-documents_title">
          <TrText root="bp" name="documents_title" />
        </h2>
        <ul className="bp-documents_list">
          <li className="bp-documents_document">
            <Image
              src="/bp-document.svg"
              width={50}
              height={50}
              alt="document"
            />
            <div className="bp-documents_document-title">
              <span>
                Программа по поддержке и развитию молодежного
                предпринимательства в Кыргызской Республике на 2025-2028 годы
              </span>
            </div>
            <a
              target="_blank"
              className="bp-documents_document-button"
              href="https://cbd.minjust.gov.kg/53-372/edition/24062/ru"
            >
              <TrText root="bp" name="documents_button" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Documents;
