import React from "react";

import "./latest.scss";

const Latest = props => {
  return (
    <section className="latest">
      <div className="title">
        <h2>Latest results</h2>
        <span className="line"></span>
      </div>

      <div className="results">
        <div className="part world-wide">
          <div className="title">
            <p>Worldwide</p>
            <span className="line"></span>
          </div>

          <div className="container">
            <div className="result confirmed">
              <div className="ico">
                <img src={require("../../assets/icons/confirmed.svg")} alt="" />
              </div>
              <div className="inf">
                <div className="num">
                  <p>1234</p>
                </div>
                <div className="label">
                  <p>confirmed</p>
                </div>
              </div>
            </div>
            <div className="result recovered">
              <div className="ico">
                <img src={require("../../assets/icons/recovered.svg")} alt="" />
              </div>
              <div className="inf">
                <div className="num">
                  <p>1234</p>
                </div>
                <div className="label">
                  <p>recovered</p>
                </div>
              </div>
            </div>
            <div className="result death">
              <div className="ico">
                <img src={require("../../assets/icons/death.svg")} alt="" />
              </div>
              <div className="inf">
                <div className="num">
                  <p>1234</p>
                </div>
                <div className="label">
                  <p>death</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="part country">
          <div className="title">
            <p>Country</p>
            <span className="line"></span>
          </div>

          <div className="container">
            <div className="result confirmed">
              <div className="ico">
                <img src={require("../../assets/icons/confirmed.svg")} alt="" />
              </div>
              <div className="inf">
                <div className="num">
                  <p>1234</p>
                </div>
                <div className="label">
                  <p>confirmed</p>
                </div>
              </div>
            </div>
            <div className="result recovered">
              <div className="ico">
                <img src={require("../../assets/icons/recovered.svg")} alt="" />
              </div>
              <div className="inf">
                <div className="num">
                  <p>1234</p>
                </div>
                <div className="label">
                  <p>recovered</p>
                </div>
              </div>
            </div>
            <div className="result death">
              <div className="ico">
                <img src={require("../../assets/icons/death.svg")} alt="" />
              </div>
              <div className="inf">
                <div className="num">
                  <p>1234</p>
                </div>
                <div className="label">
                  <p>death</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
