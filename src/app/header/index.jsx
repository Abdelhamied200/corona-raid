import React from "react";

import "./header.scss";

const Header = props => {
  return (
    <header>
      <div className="player">
        <video autoPlay muted loop>
          <source src={require("../../assets/header-vid.mp4")} />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className="content">
        <div className="container">
          <h1 className="title">Protect Your Family</h1>
          <h4 className="sub-title">stay at home</h4>
        </div>
        <div className="btn main">
          <button>see how</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
