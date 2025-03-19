import React from "react";

import "./index.scss";

const Eclipse = ({ isLight = 0, className }) => {
  return (
    <div
      className={`ui-eclipse ${isLight && "ui-eclipse--light"} ${className}`}
    >
      <div className="ui-eclipse_inner-circle"></div>
    </div>
  );
};

export default Eclipse;
