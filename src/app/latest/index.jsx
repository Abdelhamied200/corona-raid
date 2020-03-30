import React, { Component } from "react";

import "./latest.scss";
import WorldWide from "./world-wide";
import Country from "./country";
import Axios from "axios";

class Result {
  constructor(res) {
    this.c = res[0];
    this.r = res[1];
    this.d = res[2];
  }
}

class Latest extends Component {
  state = {
    worldWide: {}
  };

  componentDidMount() {
    let url =
      "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief";

    // getting worldwide results
    Axios.get(url)
      .then(res => {
        let data = new Result(Object.values(res.data));
        this.setState({ worldWide: data });
      })
      .catch(err => {
        console.log("check your connection", err);
      });
  }

  render() {
    return (
      <section className="latest">
        <div className="title">
          <h2>Latest results</h2>
          <span className="line"></span>
        </div>

        <div className="results">
          <WorldWide {...this.state.worldWide} />
          <Country />
        </div>
      </section>
    );
  }
}

export default Latest;
