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
    { label: 'Under Construction', value: 'UnderConstruction',isSelected: false },
    { label: 'Ready to Move', value: 'ReadyToMove',isSelected: false },
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

export const setPropType = (e) => {
  return {
    type: SET_PROPTYPE,
    propType: e,
  };
};
export const setbhk = (e) => {
  return {
    type: SET_BHK,
    bhk: e,
  };
};
export const setLabel = (e) => {
  return {
    type: SET_LABEL,
    Label: e,
  };
};
export const setbudget = (e) => {
  return {
    type: SET_BUDGET,
    budget: e,
  };
};
export const setsale = (e) => {
  return {
    type: SET_SALE,
    sale: e,
  };
};
export const setconstruction = (e) => {
  return {
    type: SET_CONSTRUCTION,
    construction: e,
  };
};
export const setloader = (e) => {
  return {
    type: SET_CONSTRUCTION,
    loader: e,
  };
};

export const setErrorMessage = (errorMessage) => {
  return {
    type: SET_ERROR_MESSAGE,
    errorMessage: errorMessage.target.value,
  };
};

export const setsearchData = (e) => {
  return {
    type: SET_SEARCHDATA,
    searchData: e,
  };
};

export const setHasMore = (e) => {
  return {
    type: SET_HASMORE,
    hasMore: e,
  };
};
export const setLoadMore = (e) => {
  return {
    type: SET_LOADMORE,
    loadMore: e,
  };
};
export const setpageNumber = (e) => {
  return {
    type: SET_PAGENUMBER,
    pageNumber: e,
  };
};
export const setTotal = (e) => {
  return {
    type: SET_TOTAL,
    Total: e,
  };
};
export const setSlug = (e) => {
  console.log('slug=============================>>>', e);
  return {
    type: SET_SLUG,
    propertySlug: e,
  };
};
export const setMeta = (e) => {
  return {
    type: SET_META,
    meta: e,
  };
};
export const getSearchData =
  (ptype, page, fav) => async (dispatch, getState) => {
    const state = getState();
    const { city_name } = state.cities;
    const { pType } = state.home;
    const {
      bhk,
      Label,
      propType,
      construction,
      budget,
      searchData,
      loadMore,
      hasMore,
      pageNumber,
    } = state.propertyListing;
    dispatch({
      type: SET_LOADMORE,
      loadMore: true,
    });
    if (page == undefined) {
      dispatch({
        type: SET_PAGENUMBER,
        pageNumber: pageNumber + 1,
      });
      var pg = pageNumber + 1;
    } else {
      pg = page;
    }
    // if(loadMore){
    //   dispatch({
    //     type: SET_LOADER,
    //     loader: true,
    //   });
    // }
    var bed = bhk?.filter((j) => j.isSelected)?.map((item) => item['value']);
    var propertyType = propType
      ?.filter((j) => j.isSelected)
      ?.map((item) => item['value']);
    var constructionType = construction
      ?.filter((j) => j.isSelected)
      ?.map((item) => item['value']);
    var arr = Label?.filter((j) => j.isSelected)?.map((item) => item['id']);
    try {
      const response = await apiClient.post(
        `${apiClient.Urls.searchListing}?page=${pg}`,
        {
          city: city_name,
          bedrooms: bed,
          search: arr,
          property_type: propertyType,
          property: ptype == 'null' ? 'null' : pType,
          // property:'null',
          budget_min: budget[0],
          budget_max: budget[1] == 50000000 ? 1000000000 : budget[1],
          construction_type: constructionType,
          records: 15,
        },
        true
      );

      console.log('Search Data---------->', response);

      if (response.success) {
        dispatch({
          type: SET_LOADER,
          loader: false,
        });

        dispatch({
          type: SET_TOTAL,
          Total: response.total,
        });
        dispatch({
          type: SET_META,
          meta: response.meta,
        });

        if (fav == 'add') {
          dispatch({
            type: SET_SEARCHDATA,
            searchData: response.data,
          });
        } else {
          dispatch({
            type: SET_SEARCHDATA,
            searchData: [
              ...new Set([...searchData, ...response.data.map((b) => b)]),
            ],
          });
        }
        dispatch({
          type: SET_HASMORE,
          hasMore: response.data.length > 1,
        });
        if (response.data.length == 1) {
          dispatch({
            type: SET_PAGENUMBER,
            pageNumber: 1,
          });
        }
        dispatch({
          type: SET_LOADMORE,
          loadMore: false,
        });
      } else {
        toast.error(response.errors);
        dispatch({
          type: SET_ERROR_MESSAGE,
          errorMessage: response.errors,
        });
        dispatch({
          type: SET_LOADER,
          loader: true,
        });
        console.log('error===>', response.message);
      }
    } catch (e) {
      alert(e.message);
    }
  };
