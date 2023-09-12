export const SET_ACTIVE_LINK = 'redux/newsMenu/SET_ACTIVE_LINK';
export const SET_HOVERED_LINK = 'redux/newsMenu/SET_HOVERED_LINK';

export const setActiveLink = (index) => {
  return {
    type: SET_ACTIVE_LINK,
    payload: index,
  };
};

export const setHoveredLink = (index) => {
  return {
    type: SET_HOVERED_LINK,
    payload: index,
  };
};