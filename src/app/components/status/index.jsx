import React from "react";

const Status = props => {
  let { type, val } = props;
  let ico = require("../../../assets/icons/" + type + ".svg");

  return (
    <div className={"status " + type}>
      <div className="ico">
        <img src={ico} alt="" />
      </div>
      <div className="inf">
        <div className="num">
          <p>{val ? val : "--"}</p>
        </div>
        <div className="label">
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
