import apiClient from '../../utils/apiClient';
import Swal from 'sweetalert2';

const SET_PROP_TYPE = 'redux/home/SET_PROP_TYPE';
const SET_HOME_EXPLORE = 'redux/home/SET_HOME_EXPLORE';
const SET_HOME_DATA = 'redux/home/SET_HOME_DATA';

const initialState = {
  pType: 'property',
  HomeExplore: '',
  HomeData: {},
};

const newHomerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actions.SET_POST_COMMENT_DATA: {
    //   return {
    //     ...state,
    //     ...action.payload,
    //     postArticleCommentValidationError: {},
    //   };
    // }

    case SET_PROP_TYPE: {
      return {
        ...state,
        pType: action.pType,
      };
    }
    case SET_HOME_EXPLORE: {
      return {
        ...state,
        HomeExplore: action.HomeExplore,
      };
    }
    case SET_HOME_DATA: {
      return {
        ...state,
        HomeData: action.HomeData,
      };
    }

    default:
      return state;
  }
};

export default newHomerReducer;
