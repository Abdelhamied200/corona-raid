import React from "react";

import "./forums.scss";
import Forum from "../components/forum";

const Forums = props => {
  let forums = [
    {
      ico: require("../../assets/icons/recovered.svg"),
      desc: "join the forum to figure out more hacks that keeps you entertained"
    },
    {
      ico: require("../../assets/icons/doctor.svg"),
      desc: "are you a doctor? join the brainstorming forum"
    },
    {
      ico: require("../../assets/icons/confirmed.svg"),
      desc: "have you recovered? talk about your experenice against the virus"
    }
  ];

  return (
    <section className="forums">
      <div className="title">
        <h2>Forums</h2>
        <span className="line"></span>
      </div>

      <div className="container">
        {forums.map(f => (
          <Forum {...f} />
        ))}
      </div>
    </section>
  );
};

export default Forums;
