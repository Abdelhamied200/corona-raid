import React from "react";

import "./forum.scss";

const Forum = props => {
  return (
    <div className="forum">
      <div className="ico">
        <img src={props.ico} alt="" />
      </div>
      <div className="desc">
        <p>{props.desc}</p>
      </div>
      <div className="btn main">
        <button>Join</button>
      </div>
    </div>
  );
};

export default Forum;
