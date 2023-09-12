const SET_PROPERTIES = 'redux/propertydetails/SET_PROPERTIES';

const initialState = {
  properties: null,
};

const propertyDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROPERTIES: {
      return {
        ...state,
        properties: action.properties,
      };
    }

    default:
      return state;
  }
};
export default propertyDetailsReducer;
