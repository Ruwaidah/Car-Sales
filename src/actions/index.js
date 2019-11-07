export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = props => {
  //   console.log(props);
  return {
    type: ADD_FEATURE,
    payload: props
  };
};

export const deleteFeature = props => {
  //   console.log(props);
  return {
    type: REMOVE_FEATURE,
    payload: props
  };
};
