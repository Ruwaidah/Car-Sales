export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (props) => {
    return {
        type: ADD_FEATURE,
        payload: props
    }
}