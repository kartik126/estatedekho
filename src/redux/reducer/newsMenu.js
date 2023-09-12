export const SET_ACTIVE_LINK = 'redux/newsMenu/SET_ACTIVE_LINK';
export const SET_HOVERED_LINK = 'redux/newsMenu/SET_HOVERED_LINK';

const initialState = {
  activeLink: 0,
  hoveredLink: null,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_LINK:
      return {
        ...state,
        activeLink: action.payload,
      };
    case SET_HOVERED_LINK:
      return {
        ...state,
        hoveredLink: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;