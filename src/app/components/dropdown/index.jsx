import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import countries from "../../../countries.json";

const DropDown = props => {
  let options = countries;
  let defaultOption = options[0];

  const onChange = data => {
    props.onSelect(data.value);
  };

  return (
    <Dropdown
      options={options}
      onChange={onChange}
      value={defaultOption}
      controlClassName="dropDown"
      arrowClassName="arrow"
      arrowClosed={
        <span className="arrow-closed">
          <img src={require("../../../assets/icons/arrow-closed.svg")} alt="" />
        </span>
      }
      arrowOpen={
        <span className="arrow-open">
          <img src={require("../../../assets/icons/arrow-opened.svg")} alt="" />
        </span>
      }
    />
  );
};

export default DropDown;
