import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { addFeature } from "./actions";
import { deleteFeature } from "./actions";

function App(props) {
  const removeFeature = item => {
    console.log(item);
    props.deleteFeature(item);
    // dispatch an action here to remove an item
  };
  console.log(props);
  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures
          features={props.car.features}
          removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          buyItem={buyItem}
          additionalFeatures={props.additionalFeatures}
        />
        <Total />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  { addFeature, deleteFeature }
)(App);
