import React from "react";

import "./nav.scss";

const Nav = props => {
  return (
    <nav>
      <div className="logo">
        <img src={require("../../assets/logo.svg")} alt="" />
        <p>
          Corona <span className="bolder">Raid</span>
        </p>
      </div>
      <div className="list">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#hacks">Ways</a>
          </li>
          <li>
            <a href="#results">Results</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#forums">Forums</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
