import React, { Component } from "react";
import Status from "../../components/status";
import Axios from "axios";
import DropDown from "../../components/dropdown";

import countries from "../../../countries.json";

import "./country.scss";

class Country extends Component {
  state = {
    all: [],
    current: {}
  };

  componentDidMount() {
    let url =
      "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest";

    Axios.get(url).then(res => {
      this.setState({ all: res.data });
    });
  }

  changeStatus(country) {
    let id = countries.findIndex(c => country === c);
    this.setState({ current: this.state.all[id] });

    // fix dropdown bug
    setTimeout(() => {
      document.querySelector(
        ".Dropdown-placeholder.is-selected"
      ).innerHTML = country;
    }, 1);
  }

  render() {
    return (
      <div className="part country">
        <div className="title">
          <DropDown onSelect={this.changeStatus.bind(this)} />
          <span className="line"></span>
        </div>
        <div className="container">
          <Status type="confirmed" val={this.state.current.confirmed} />
          <Status type="recovered" val={this.state.current.recovered} />
          <Status type="death" val={this.state.current.deaths} />
        </div>
      </div>
    );
  }
}

export default Country;
