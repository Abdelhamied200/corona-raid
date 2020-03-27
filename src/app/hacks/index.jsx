import React from "react";

import "./hacks.scss";

const Hacks = props => {
  return (
    <section className="hacks">
      <div className="title">
        <h2>ways to protect yourself</h2>
        <span className="line"></span>
      </div>
      <div className="ways">
        <div className="way">
          <div className="img">
            <img
              src={require("../../assets/pics/1.png")}
              alt="Wash your hands"
            />
          </div>
          <div className="overlay">
            <p>Wash your hands</p>
          </div>
        </div>
        <div className="way">
          <div className="img">
            <img
              src={require("../../assets/pics/2.png")}
              alt="Keep your social distance"
            />
          </div>
          <div className="overlay">
            <p>Keep your social distance</p>
          </div>
        </div>
        <div className="way">
          <div className="img">
            <img
              src={require("../../assets/pics/3.png")}
              alt="Avoid touching your face"
            />
          </div>
          <div className="overlay">
            <p>Avoid touching your face</p>
          </div>
        </div>
        <div className="way">
          <div className="img">
            <img
              src={require("../../assets/pics/4.png")}
              alt="Seek your medical care doctor early if u feel sick"
            />
          </div>
          <div className="overlay">
            <p>Seek your medical care doctor early if u feel sick</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hacks;
