import apiClient from 'utils/apiClient';
const SET_BHK = 'redux/propertyListing/SET_BHK';
const SET_PROPTYPE = 'redux/propertyListing/SET_PROPTYPE';
const SET_BUDGET = 'redux/propertyListing/SET_BUDGET';
const SET_SALE = 'redux/propertyListing/SET_SALE';
const SET_CONSTRUCTION = 'redux/propertyListing/SET_CONSTRUCTION';
const SET_LOADER = 'redux/propertyListing/SET_LOADER';
const SET_SEARCHDATA = 'redux/propertyListing/SET_SEARCHDATA';
const SET_HASMORE = 'redux/propertyListing/SET_HASMORE';
const SET_LOADMORE = 'redux/propertyListing/SET_LOADMORE';
const SET_PAGENUMBER = 'redux/propertyListing/SET_PAGENUMBER';
const SET_TOTAL = 'redux/propertyListing/SET_TOTAL';
const SET_ERROR_MESSAGE = 'redux/propertyListing/SET_ERROR_MESSAGE';
const SET_SLUG = 'redux/propertyListing/SET_SLUG';
const SET_META = 'redux/propertyListing/SET_META';
const SET_LABEL = 'redux/propertyListing/SET_LABEL';

import toast, { Toaster } from 'react-hot-toast';
export const initialState = {
  propType: [
    { label: 'Apartment-', value: 'Apartment', isSelected: false },
    { label: 'Plot-', value: 'Plot', isSelected: false },
    { label: 'Villa-', value: 'Villa', isSelected: false },
    {
      label: 'Independent-House-',
      value: 'Independent House',
      isSelected: false,
    },
    {
      label: 'Independent-Floor-',
      value: 'Independent Floor',
      isSelected: false,
    },
    { label: 'Farm-Land-', value: 'Farm land', isSelected: false },
    { label: 'Farm-House-', value: 'Farm House', isSelected: false },
    { label: 'Premium-House-', value: 'Premium house', isSelected: false },
  ],
  bhk: [
    { label: '1-BHK-', value: 1, isSelected: false },
    { label: '2-BHK-', value: 2, isSelected: false },
    { label: '3-BHK-', value: 3, isSelected: false },
    { label: '4-BHK-', value: 4, isSelected: false },
    { label: '5-BHK-', value: 5, isSelected: false },
    { label: '5+BHK-', value: 6, isSelected: false },
  ],
  budget: [0, 50000000],
  sale: [{ label: 'New Projects', value: 'New Projects', isSelected: false }],
  construction: [
    { label: 'Under Construction', value: 'UnderConstruction' },
    { label: 'Ready to Move', value: 'ReadyToMove' },
  ],
  loader: true,
  searchData: [],
  Label: [],
  hasMore: false,
  loadMore: false,
  pageNumber: 1,
  Total: '',
  propertySlug: '',
  meta: null,
};

const propertyListingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }
    case SET_PROPTYPE: {
      return {
        ...state,
        propType: action.propType,
      };
    }
    case SET_BHK: {
      return {
        ...state,
        bhk: action.bhk,
      };
    }
    case SET_BUDGET: {
      return {
        ...state,
        budget: action.budget,
      };
    }
    case SET_SALE: {
      return {
        ...state,
        sale: action.sale,
      };
    }
    case SET_CONSTRUCTION: {
      return {
        ...state,
        construction: action.construction,
      };
    }
    case SET_LOADER: {
      return {
        ...state,
        loader: action.loader,
      };
    }
    case SET_SEARCHDATA: {
      return {
        ...state,
        searchData: action.searchData,
      };
    }
    case SET_HASMORE: {
      return {
        ...state,
        hasMore: action.hasMore,
      };
    }
    case SET_LOADMORE: {
      return {
        ...state,
        loadMore: action.loadMore,
      };
    }
    case SET_PAGENUMBER: {
      return {
        ...state,
        pageNumber: action.pageNumber,
      };
    }
    case SET_TOTAL: {
      return {
        ...state,
        Total: action.Total,
      };
    }
    case SET_SLUG: {
      console.log('action===========================>', action);
      return {
        ...state,
        propertySlug: action.propertySlug,
      };
    }
    case SET_META: {
      return {
        ...state,
        meta: action.meta,
      };
    }
    case SET_LABEL: {
      return {
        ...state,
        Label: action.Label,
      };
    }

    default:
      return state;
  }
};

export default propertyListingReducer;
