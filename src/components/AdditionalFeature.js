import React from "react";

// action import
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  let payload = props.feature.name;

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
