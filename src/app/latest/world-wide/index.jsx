import React from "react";
import Status from "../../components/status";

const WorldWide = props => {
  return (
    <div className="part world-wide">
      <div className="title">
        <p>Worldwide</p>
        <span className="line"></span>
      </div>

      <div className="container">
        <Status type="confirmed" val={props.c} />
        <Status type="recovered" val={props.r} />
        <Status type="death" val={props.d} />
      </div>
    </div>
  );
};

export default WorldWide;
