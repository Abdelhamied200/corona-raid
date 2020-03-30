import React from "react";

const Slide = props => {
  let img = props.images
    ? props.images[0]
    : require("../../../assets/pics/1.png");

  return (
    <div className="slide">
      <div className="media">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="desc">
          <p>{props.description}</p>
        </div>
        <div className="more">
          <div className="btn main">
            <button>more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
